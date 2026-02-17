"use client";

import { useEffect, useState, useRef } from "react";
import { getDailyQuestions, Question } from "@/lib/questions";

const QUESTION_TIME = 30;
const SWIPE_THRESHOLD = 60;

type Lang = "en" | "hi";

/* ============ STATS ============ */

interface GameStats {
  currentStreak: number;
  perfectStreak: number;
  totalPlayed: number;
  lastPlayedDate: string;
  lastPerfect: boolean;
  totalKP: number;
}

function getTodayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getYesterdayStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function loadStats(): GameStats {
  if (typeof window === "undefined") {
    return { currentStreak: 0, perfectStreak: 0, totalPlayed: 0, lastPlayedDate: "", lastPerfect: false, totalKP: 0 };
  }
  try {
    const raw = localStorage.getItem("knovera_stats");
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...parsed, totalKP: parsed.totalKP || 0 };
    }
  } catch { /* reset */ }
  return { currentStreak: 0, perfectStreak: 0, totalPlayed: 0, lastPlayedDate: "", lastPerfect: false, totalKP: 0 };
}

function saveStats(stats: GameStats) {
  if (typeof window === "undefined") return;
  localStorage.setItem("knovera_stats", JSON.stringify(stats));
}

function recordGame(score: number, total: number): { stats: GameStats; kpEarned: number } {
  const stats = loadStats();
  const today = getTodayStr();
  const yesterday = getYesterdayStr();
  const isPerfect = score === total;

  if (stats.lastPlayedDate === today) {
    return { stats, kpEarned: 0 };
  }

  // Streak
  if (stats.lastPlayedDate === yesterday) {
    stats.currentStreak += 1;
  } else {
    stats.currentStreak = 1;
  }

  // Perfect streak
  if (isPerfect) {
    if (stats.lastPerfect && stats.lastPlayedDate === yesterday) {
      stats.perfectStreak += 1;
    } else {
      stats.perfectStreak = 1;
    }
  } else {
    stats.perfectStreak = 0;
  }

  // KP calculation
  let kpEarned = score * 10;
  if (isPerfect) kpEarned += 50;

  stats.totalKP += kpEarned;
  stats.totalPlayed += 1;
  stats.lastPlayedDate = today;
  stats.lastPerfect = isPerfect;

  saveStats(stats);
  return { stats, kpEarned };
}

/* ============ CELEBRATION ============ */

function getCelebration(score: number) {
  if (score <= 1) return { title: "Keep Going", titleHi: "जारी रखो", msg: "Every expert starts somewhere.", msgHi: "हर विशेषज्ञ कहीं से शुरू करता है।", emoji: "💪", color: "#94a3b8", badge: "Beginner", badgeHi: "शुरुआती", badgeIcon: "🟤" };
  if (score === 2) return { title: "Nice Start", titleHi: "अच्छी शुरुआत", msg: "You're warming up nicely.", msgHi: "आप अच्छी तरह तैयार हो रहे हैं।", emoji: "🙂", color: "#60a5fa", badge: "Learner", badgeHi: "सीखने वाला", badgeIcon: "🔵" };
  if (score === 3) return { title: "Well Done", titleHi: "बहुत अच्छा", msg: "Solid performance today.", msgHi: "आज का प्रदर्शन शानदार रहा।", emoji: "👏", color: "#a78bfa", badge: "Skilled", badgeHi: "कुशल", badgeIcon: "🟢" };
  if (score === 4) return { title: "Great Job", titleHi: "शानदार", msg: "So close to perfection!", msgHi: "परफेक्ट के बहुत करीब!", emoji: "🔥", color: "#fb923c", badge: "Pro", badgeHi: "प्रो", badgeIcon: "🔥" };
  return { title: "Perfect Score", titleHi: "परफेक्ट स्कोर", msg: "Outstanding! Nailed it!", msgHi: "उत्कृष्ट! कमाल कर दिया!", emoji: "🏆", color: "#fbbf24", badge: "Elite", badgeHi: "एलीट", badgeIcon: "🏆" };
}

function getTimeUntilMidnight(): string {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const diff = tomorrow.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${minutes}m`;
}

/* ============ COMPONENT ============ */

export default function GamePage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [review, setReview] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [showResult, setShowResult] = useState(false);
  const [stats, setStats] = useState<GameStats | null>(null);
  const [kpEarned, setKpEarned] = useState(0);
  const [lang, setLang] = useState<Lang>("en");
  const [countdown, setCountdown] = useState("");
  const [animatedScore, setAnimatedScore] = useState(0);

  // Swipe
  const [cardIndex, setCardIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const swipeWrapperRef = useRef<HTMLDivElement>(null);
  const hasRecorded = useRef(false);

  /* LOAD QUESTIONS */
  useEffect(() => {
    setQuestions(getDailyQuestions());
  }, []);

  const isFinished = questions.length > 0 && current >= questions.length;
  const q = questions[current];

  /* TIMER */
  useEffect(() => {
    if (!q || review || isFinished) return;
    if (timeLeft === 0) {
      setReview(true);
      return;
    }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, review, isFinished, q]);

  /* RECORD STATS */
  useEffect(() => {
    if (isFinished && !hasRecorded.current) {
      hasRecorded.current = true;
      const result = recordGame(score, questions.length);
      setStats(result.stats);
      setKpEarned(result.kpEarned);
      setTimeout(() => setShowResult(true), 100);
    }
  }, [isFinished, score, questions.length]);

  /* ANIMATED SCORE COUNT UP */
  useEffect(() => {
    if (!showResult) return;
    let start = 0;
    const end = score;
    if (end === 0) { setAnimatedScore(0); return; }
    const duration = 800;
    const stepTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setAnimatedScore(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [showResult, score]);

  /* COUNTDOWN TIMER */
  useEffect(() => {
    if (!isFinished) return;
    const update = () => setCountdown(getTimeUntilMidnight());
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [isFinished]);

  function answer(option: string) {
    if (review || !q) return;
    setSelected(option);
    setReview(true);
    if (option === q.answer[lang]) setScore((s) => s + 1);
  }

  function next() {
    setSelected(null);
    setReview(false);
    setTimeLeft(QUESTION_TIME);
    setCurrent((c) => c + 1);
  }

  function toggleLang() {
    setLang((l) => (l === "en" ? "hi" : "en"));
  }

  async function shareScore() {
    const text = lang === "en"
      ? `I scored ${score}/${questions.length} on Knovera! 🔥\nCan you beat me?\nhttps://knovera.vercel.app`
      : `मैंने Knovera पर ${score}/${questions.length} स्कोर किया! 🔥\nक्या आप मुझे हरा सकते हैं?\nhttps://playknovera.com`;
    if (navigator.share) {
      try { await navigator.share({ title: "Knovera Score", text }); } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(text);
      alert(lang === "en" ? "Score copied to clipboard!" : "स्कोर कॉपी हो गया!");
    }
  }

  /* SWIPE */
  function onTouchStart(e: React.TouchEvent) { setTouchStartX(e.touches[0].clientX); setTouchEndX(null); }
  function onTouchMove(e: React.TouchEvent) { setTouchEndX(e.touches[0].clientX); }
  function onTouchEnd() {
    if (touchStartX === null || touchEndX === null) return;
    const delta = touchStartX - touchEndX;
    if (delta > SWIPE_THRESHOLD) setCardIndex((i) => Math.min(i + 1, 2));
    if (delta < -SWIPE_THRESHOLD) setCardIndex((i) => Math.max(i - 1, 0));
    setTouchStartX(null); setTouchEndX(null);
  }

  const optionLabels = ["A", "B", "C", "D"];

  /* LOADING */
  if (questions.length === 0) {
    return (
      <main className="game-wrapper">
        <div className="game-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
          <div className="loading-spinner"></div>
        </div>
      </main>
    );
  }

  /* ================= RESULT SCREEN ================= */
  if (isFinished) {
    const c = getCelebration(score);
    const percentage = Math.round((score / questions.length) * 100);
    const displayStats: GameStats = stats ?? { currentStreak: 0, perfectStreak: 0, totalPlayed: 0, lastPlayedDate: "", lastPerfect: false, totalKP: 0 };
    const level = Math.floor(displayStats.totalKP / 100) + 1;

    return (
      <main className="game-wrapper">
        {/* Celebration Burst */}
        {score >= 4 && showResult && (
          <div className="celebration-container">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="celebration-particle"
                style={{
                  left: "50%",
                  top: "30%",
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${1 + Math.random() * 1.5}s`,
                  ["--angle" as string]: `${Math.random() * 360}deg`,
                  ["--distance" as string]: `${80 + Math.random() * 150}px`,
                  backgroundColor: ["#fbbf24", "#fb923c", "#f87171", "#a78bfa", "#60a5fa", "#4ade80"][Math.floor(Math.random() * 6)],
                }}
              />
            ))}
          </div>
        )}

        <div className="game-content">
          {/* Language Toggle */}
          <div className="lang-toggle-wrapper">
            <button className="lang-toggle" onClick={toggleLang}>
              {lang === "en" ? "हिंदी" : "English"}
            </button>
          </div>

          {/* Main Score Card */}
          <div className={`result-main-card ${showResult ? "visible" : ""}`}>
            <div className="result-emoji-large">{c.emoji}</div>

            <div className="result-score-wrapper">
              <div className="result-score-primary" style={{ color: c.color }}>{animatedScore}</div>
              <div className="result-score-separator">/</div>
              <div className="result-score-total">{questions.length}</div>
            </div>

            {/* Rank Badge */}
            <div className="rank-badge" style={{ color: c.color }}>
              {c.badgeIcon} {lang === "en" ? c.badge : c.badgeHi}
            </div>

            <div className="result-percentage">
              {percentage}% {lang === "en" ? "Correct" : "सही"}
            </div>

            <p className="result-message">{lang === "en" ? c.msg : c.msgHi}</p>

            {/* Progress Bar */}
            <div className="result-progress-bar">
              <div className="result-progress-fill" style={{ width: showResult ? `${percentage}%` : "0%", backgroundColor: c.color }} />
            </div>

            {/* KP Display */}
            <div className="kp-display">
              <span className="kp-earned">⚡ +{kpEarned} KP</span>
              <span className="kp-level">{lang === "en" ? "Level" : "लेवल"} {level} • {displayStats.totalKP} KP</span>
            </div>
          </div>

          {/* Swipe Cards */}
          <div
            ref={swipeWrapperRef}
            className={`swipe-wrapper ${showResult ? "visible" : ""}`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="swipe-track" style={{
              transform: `translateX(calc(-${cardIndex} * (100% + 16px)))`,
              transition: touchStartX !== null ? "none" : "transform 0.35s ease-out",
            }}>
              {/* Card 1 - Current Streak */}
              <div className="swipe-card">
                <div className="swipe-card-inner streak-card">
                  <div className="card-glow-top" style={{ background: "linear-gradient(135deg, rgba(251,146,60,0.3), transparent)" }}></div>
                  <p className="card-icon-large">🔥</p>
                  <p className="card-title">{lang === "en" ? "Current Streak" : "वर्तमान स्ट्रीक"}</p>
                  <strong className="card-value">{displayStats.currentStreak} {lang === "en" ? (displayStats.currentStreak === 1 ? "day" : "days") : "दिन"}</strong>
                  <p className="card-subtitle">
                    {displayStats.currentStreak >= 7 ? (lang === "en" ? "You're on fire! 🔥" : "शानदार! 🔥") :
                      displayStats.currentStreak >= 3 ? (lang === "en" ? "Keep it going!" : "जारी रखो!") :
                        (lang === "en" ? "Build your streak!" : "स्ट्रीक बनाओ!")}
                  </p>
                </div>
              </div>

              {/* Card 2 - Perfect Score Streak */}
              <div className="swipe-card">
                <div className="swipe-card-inner perfect-card">
                  <div className="card-glow-top" style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.3), transparent)" }}></div>
                  <p className="card-icon-large">⭐</p>
                  <p className="card-title">{lang === "en" ? "Perfect Streak" : "परफेक्ट स्ट्रीक"}</p>
                  <strong className="card-value">{displayStats.perfectStreak} {lang === "en" ? (displayStats.perfectStreak === 1 ? "day" : "days") : "दिन"}</strong>
                  <p className="card-subtitle">
                    {displayStats.perfectStreak >= 5 ? (lang === "en" ? "Legendary! 👑" : "शानदार! 👑") :
                      displayStats.perfectStreak >= 2 ? (lang === "en" ? "Flawless streak!" : "बेहतरीन!") :
                        displayStats.perfectStreak === 1 ? (lang === "en" ? "Perfect today! 🎯" : "आज परफेक्ट! 🎯") :
                          (lang === "en" ? "Aim for 5/5!" : "5/5 का लक्ष्य रखो!")}
                  </p>
                </div>
              </div>

              {/* Card 3 - Total Played */}
              <div className="swipe-card">
                <div className="swipe-card-inner total-card">
                  <div className="card-glow-top" style={{ background: "linear-gradient(135deg, rgba(96,165,250,0.3), transparent)" }}></div>
                  <p className="card-icon-large">📅</p>
                  <p className="card-title">{lang === "en" ? "Total Games" : "कुल खेल"}</p>
                  <strong className="card-value">{displayStats.totalPlayed} {lang === "en" ? (displayStats.totalPlayed === 1 ? "game" : "games") : "खेल"}</strong>
                  <p className="card-subtitle">
                    {displayStats.totalPlayed >= 30 ? (lang === "en" ? "Dedicated! 🏅" : "समर्पित! 🏅") :
                      displayStats.totalPlayed >= 10 ? (lang === "en" ? "Consistent 💪" : "निरंतर 💪") :
                        (lang === "en" ? "Just getting started 🚀" : "शुरुआत है 🚀")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Swipe Dots */}
          <div className={`swipe-dots ${showResult ? "visible" : ""}`}>
            {[0, 1, 2].map((i) => (
              <span key={i} className={`dot ${i === cardIndex ? "active" : ""}`} onClick={() => setCardIndex(i)} />
            ))}
          </div>

          {/* Countdown */}
          <p className={`countdown-text ${showResult ? "visible" : ""}`}>
            ⏳ {lang === "en" ? "Next game in" : "अगला खेल"} {countdown}
          </p>

          {/* Action Buttons */}
          <div className={`result-actions ${showResult ? "visible" : ""}`}>
            <button className="result-btn result-btn-secondary" onClick={shareScore}>
              <span>📤</span>
              {lang === "en" ? "Share Score" : "स्कोर शेयर करें"}
            </button>
            <button className="result-btn result-btn-primary" onClick={() => (window.location.href = "/")}>
              <span>🏠</span>
              {lang === "en" ? "Back Home" : "होम पेज"}
            </button>
          </div>

          <p className={`result-footer ${showResult ? "visible" : ""}`}>
            {lang === "en" ? "Come back tomorrow for a new challenge!" : "कल नई चुनौती के लिए वापस आओ!"} 🔁
          </p>
        </div>
      </main>
    );
  }

  /* ================= GAME SCREEN ================= */

  return (
    <main className="game-wrapper">
      <div className="game-content">
        {/* Header */}
        <div className="game-header">
          <h2 className="game-title">{lang === "en" ? "Today's Game" : "आज का खेल"}</h2>
          <button className="lang-toggle" onClick={toggleLang}>
            {lang === "en" ? "हिंदी" : "English"}
          </button>
        </div>

        {/* Timer */}
        <div className={`timer-wrapper ${timeLeft <= 5 ? "timer-danger" : ""}`}>
          <div
            className={`timer-bar ${timeLeft <= 5 ? "danger" : ""}`}
            style={{ width: `${(timeLeft / QUESTION_TIME) * 100}%` }}
          />
        </div>
        <p className={`timer-text ${timeLeft <= 5 ? "timer-text-danger" : ""}`}>⏱️ {timeLeft}s</p>

        {/* Progress Dots */}
        <div className="progress-dots">
          {questions.map((_, i) => (
            <span key={i} className={`progress-dot ${i < current ? "done" : i === current ? "active" : ""}`} />
          ))}
        </div>

        {/* Question Card - UPGRADED */}
        <div className="question-card-wrapper">
          <div className="question-card">
            <span className="question-number">Q{current + 1}</span>
            <span className="question-text">{q.question[lang]}</span>
          </div>
        </div>

        {/* Options */}
        <div className="options">
          {q.options[lang].map((o, idx) => {
            const isCorrect = o === q.answer[lang];
            const isSelected = o === selected;
            let optionClass = "option";

            if (review) {
              if (isCorrect) optionClass += " option-correct";
              else if (isSelected) optionClass += " option-wrong";
              else optionClass += " option-disabled";
            }

            return (
              <button
                key={idx}
                className={optionClass}
                disabled={review}
                onClick={() => answer(o)}
              >
                <span className={`option-label ${review && isCorrect ? "label-correct" : ""} ${review && isSelected && !isCorrect ? "label-wrong" : ""}`}>
                  {optionLabels[idx]}
                </span>
                <span className="option-text">{o}</span>
                {review && isCorrect && <span className="option-icon">✅</span>}
                {review && isSelected && !isCorrect && <span className="option-icon">❌</span>}
              </button>
            );
          })}
        </div>

        {/* Explanation Box - UPGRADED */}
        {review && (
          <div className="explanation-box">
            <div className="explanation-header">
              <span className="explanation-icon">💡</span>
              <span className="explanation-title">{lang === "en" ? "Explanation" : "व्याख्या"}</span>
            </div>
            <p className="explanation-text">{q.explanation[lang]}</p>

            <button className="next-btn" onClick={next}>
              {current === questions.length - 1
                ? (lang === "en" ? "Finish & See Score" : "समाप्त करें और स्कोर देखें")
                : (lang === "en" ? "Next Question →" : "अगला प्रश्न →")}
            </button>
          </div>
        )}

        {/* Floating Brand */}
        <div className="floating-brand">K</div>
      </div>
    </main>
  );
}