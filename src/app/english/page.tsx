"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { trackGameStart, trackGamePlayed } from "@/lib/analytics";

const QUESTION_TIME = 30;
const LAUNCH_DATE = new Date(2026, 3, 1); // Fluent goes live April 1, 2026

/* ── Day number ─────────────────────────────────────────── */
function getDayNumber(): number {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const launch = new Date(LAUNCH_DATE); launch.setHours(0, 0, 0, 0);
  return Math.max(1, Math.floor((today.getTime() - launch.getTime()) / 86400000) + 1);
}

function getTodayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function getYesterdayStr(): string {
  const d = new Date(); d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/* ── Stats ──────────────────────────────────────────────── */
interface GameStats {
  currentStreak: number;
  perfectStreak: number;
  totalPlayed: number;
  lastPlayedDate: string;
  lastPerfect: boolean;
  totalKP: number;
}

const EMPTY_STATS: GameStats = { currentStreak: 0, perfectStreak: 0, totalPlayed: 0, lastPlayedDate: "", lastPerfect: false, totalKP: 0 };

function loadStats(key = "knovera_english_stats"): GameStats {
  if (typeof window === "undefined") return { ...EMPTY_STATS };
  try {
    const raw = localStorage.getItem(key);
    if (raw) return { ...EMPTY_STATS, ...JSON.parse(raw) };
  } catch { /* reset */ }
  return { ...EMPTY_STATS };
}

function saveStats(stats: GameStats, key = "knovera_english_stats") {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(stats));
}

function recordGame(score: number, total: number): { stats: GameStats; kpEarned: number } {
  const stats = loadStats();
  const today = getTodayStr();
  const yesterday = getYesterdayStr();
  if (stats.lastPlayedDate === today) return { stats, kpEarned: 0 };
  stats.currentStreak = stats.lastPlayedDate === yesterday ? stats.currentStreak + 1 : 1;
  const isPerfect = score === total;
  if (isPerfect) {
    stats.perfectStreak = (stats.lastPerfect && stats.lastPlayedDate === yesterday) ? stats.perfectStreak + 1 : 1;
  } else {
    stats.perfectStreak = 0;
  }
  let kpEarned = score * 10;
  if (isPerfect) kpEarned += 50;
  stats.totalKP += kpEarned;
  stats.totalPlayed += 1;
  stats.lastPlayedDate = today;
  stats.lastPerfect = isPerfect;
  saveStats(stats);
  return { stats, kpEarned };
}

/* ── Celebration copy ───────────────────────────────────── */
function getCelebration(score: number) {
  if (score === 0) return { emoji: "💪", title: "Keep Going",    msg: "Every expert starts somewhere.",  color: "#94a3b8", badge: "Beginner" };
  if (score === 1) return { emoji: "💪", title: "Keep Going",    msg: "Every expert starts somewhere.",  color: "#94a3b8", badge: "Beginner" };
  if (score === 2) return { emoji: "🙂", title: "Nice Start",    msg: "You're warming up nicely.",        color: "#60a5fa", badge: "Learner"  };
  if (score === 3) return { emoji: "👏", title: "Well Done",     msg: "Solid performance today.",         color: "#a78bfa", badge: "Skilled"  };
  if (score === 4) return { emoji: "🔥", title: "Great Job",     msg: "So close to perfection!",          color: "#fb923c", badge: "Pro"      };
  return               { emoji: "🏆", title: "Perfect Score",  msg: "Outstanding! Nailed it!",          color: "#fbbf24", badge: "Elite"    };
}

/* ── Streak helpers ─────────────────────────────────────── */
function buildWeekCalendar(streak: number): { label: string; played: boolean; isToday: boolean }[] {
  const LABELS = ["S", "M", "T", "W", "T", "F", "S"];
  const todayIdx = new Date().getDay();
  return LABELS.map((label, i) => {
    const diff = i - todayIdx;
    const played = diff <= 0 && Math.abs(diff) < streak;
    return { label, played, isToday: diff === 0 };
  });
}

const STREAK_MILESTONES = [
  { days: 3,   label: "Starter",  icon: "🔥", color: "#ff6b35", glow: "rgba(255,107,53,0.3)"  },
  { days: 5,   label: "Explorer", icon: "📘", color: "#3b82f6", glow: "rgba(59,130,246,0.3)"  },
  { days: 7,   label: "Scholar",  icon: "🎓", color: "#8b5cf6", glow: "rgba(139,92,246,0.3)"  },
  { days: 15,  label: "Master",   icon: "🧠", color: "#a855f7", glow: "rgba(168,85,247,0.3)"  },
  { days: 30,  label: "Legend",   icon: "🏆", color: "#f59e0b", glow: "rgba(245,158,11,0.3)"  },
  { days: 50,  label: "Elite",    icon: "⚡", color: "#eab308", glow: "rgba(234,179,8,0.3)"   },
  { days: 75,  label: "Genius",   icon: "💡", color: "#22c55e", glow: "rgba(34,197,94,0.3)"   },
  { days: 100, label: "Icon",     icon: "👑", color: "#fbbf24", glow: "rgba(251,191,36,0.35)" },
];

function getStreakSubtext(streak: number): string {
  if (streak >= 31) return "You're a legend!";
  if (streak >= 7)  return "Absolutely unstoppable!";
  if (streak >= 5)  return "You're a Superstar!";
  if (streak >= 3)  return "Back for more? Awesome!";
  if (streak === 2) return "Two days in a row!";
  if (streak === 1) return "Day 1 — come back tomorrow!";
  return "Start your streak today!";
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

/* ── Question type ──────────────────────────────────────── */
interface EnglishQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  hint: string | null;
  category: string | null;
}

/* ── Component ──────────────────────────────────────────── */
export default function FluentPage() {
  const [questions,     setQuestions]     = useState<EnglishQuestion[]>([]);
  const [current,       setCurrent]       = useState(0);
  const [selected,      setSelected]      = useState<string | null>(null);
  const [review,        setReview]        = useState(false);
  const [score,         setScore]         = useState(0);
  const [timeLeft,      setTimeLeft]      = useState(QUESTION_TIME);
  const [showResult,    setShowResult]    = useState(false);
  const [stats,         setStats]         = useState<GameStats | null>(null);
  const [kpEarned,      setKpEarned]      = useState(0);
  const [countdown,     setCountdown]     = useState("");
  const [animatedScore, setAnimatedScore] = useState(0);
  const [dayNumber,     setDayNumber]     = useState(1);
  const [showHint,      setShowHint]      = useState(false);

  // Next games state
  const [pulseDone, setPulseDone] = useState(false);
  const [lexiDone,  setLexiDone]  = useState(false);

  const hasRecorded = useRef(false);

  /* Load questions */
  useEffect(() => {
    setDayNumber(getDayNumber());
    const today = getTodayStr();
    setPulseDone(loadStats("knovera_stats").lastPlayedDate === today);
    setLexiDone(loadStats("knovera_word_stats").lastPlayedDate === today);
    trackGameStart("fluent");
    fetch("/api/english")
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setQuestions(data); })
      .catch(err => console.error("Error fetching questions:", err));
  }, []);

  const isFinished = questions.length > 0 && current >= questions.length;
  const q = questions[current];

  /* Timer */
  useEffect(() => {
    if (!q || review || isFinished) return;
    if (timeLeft === 0) { setReview(true); return; }
    const t = setTimeout(() => setTimeLeft(v => v - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, review, isFinished, q]);

  /* Record stats */
  useEffect(() => {
    if (isFinished && !hasRecorded.current) {
      hasRecorded.current = true;
      trackGamePlayed("fluent", score, questions.length);
      const result = recordGame(score, questions.length);
      setStats(result.stats);
      setKpEarned(result.kpEarned);
      setTimeout(() => setShowResult(true), 100);
    }
  }, [isFinished, score, questions.length]);

  /* Animated score */
  useEffect(() => {
    if (!showResult || score === 0) { setAnimatedScore(0); return; }
    let s = 0;
    const timer = setInterval(() => {
      s += 1; setAnimatedScore(s);
      if (s >= score) clearInterval(timer);
    }, 800 / score);
    return () => clearInterval(timer);
  }, [showResult, score]);

  /* Countdown */
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
    if (option === q.answer) setScore(s => s + 1);
  }

  function next() {
    setSelected(null); setReview(false); setShowHint(false);
    setTimeLeft(QUESTION_TIME); setCurrent(c => c + 1);
  }

  async function shareScore() {
    const text = `I scored ${score}/${questions.length} on Knovera Fluent! ✍️\nCan you beat me?\nhttps://playknovera.com`;
    if (navigator.share) {
      try { await navigator.share({ title: "Knovera Score", text }); } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(text);
    }
  }

  const optionLabels = ["A", "B", "C", "D"];

  /* ── Loading ── */
  if (questions.length === 0) {
    return (
      <main className="game-wrapper">
        <div className="game-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
          <div className="loading-spinner" />
        </div>
      </main>
    );
  }

  /* ── Result Screen ── */
  if (isFinished) {
    const c = getCelebration(score);
    const percentage = Math.round((score / questions.length) * 100);
    const displayStats = stats ?? { ...EMPTY_STATS };
    const level = Math.floor(displayStats.totalKP / 100) + 1;
    const hasNextGames = !pulseDone || !lexiDone;

    return (
      <main className="game-wrapper">
        {/* Celebration particles */}
        {score >= 4 && showResult && (
          <div className="celebration-container">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="celebration-particle" style={{
                left: "50%", top: "30%",
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random() * 1.5}s`,
                ["--angle" as string]: `${Math.random() * 360}deg`,
                ["--distance" as string]: `${80 + Math.random() * 150}px`,
                backgroundColor: ["#fbbf24","#fb923c","#f87171","#a78bfa","#60a5fa","#4ade80"][Math.floor(Math.random() * 6)],
              }} />
            ))}
          </div>
        )}

        <div className="game-content">

          {/* Result header */}
          <div className="result-header">
            <Link href="/" className="result-back-link">‹ Home</Link>
            <span className="result-game-label">Fluent #{dayNumber}</span>
          </div>

          {/* Main score card */}
          <div className={`result-main-card ${showResult ? "visible" : ""}`}>
            <div className="result-emoji-large">{c.emoji}</div>
            <div className="result-score-wrapper">
              <div className="result-score-primary" style={{ color: c.color }}>{animatedScore}</div>
              <div className="result-score-separator">/</div>
              <div className="result-score-total">{questions.length}</div>
            </div>
            <div className="rank-badge" style={{ color: c.color }}>{c.badge}</div>
            <div className="result-percentage">{percentage}% Correct</div>
            <p className="result-message">{c.msg}</p>
            <div className="result-progress-bar">
              <div className="result-progress-fill" style={{ width: showResult ? `${percentage}%` : "0%", backgroundColor: c.color }} />
            </div>
            <div className="kp-display">
              <span className="kp-earned">⚡ +{kpEarned} KP</span>
              <span className="kp-level">Level {level} · {displayStats.totalKP} KP total</span>
            </div>
          </div>

          {/* Streak card */}
          <div className={`swipe-wrapper ${showResult ? "visible" : ""}`}>
            <div className="streak-detail-card">

              {/* Header */}
              <div className="streak-detail-header">
                <div>
                  <p className="streak-win-title">🔥 {displayStats.currentStreak}-day streak</p>
                  <p className="streak-win-sub">{getStreakSubtext(displayStats.currentStreak)}</p>
                </div>
                {(() => {
                  const earned = [...STREAK_MILESTONES].reverse().find(m => displayStats.currentStreak >= m.days);
                  return earned ? (
                    <div className="streak-badge-earned">
                      <span>{earned.icon}</span>
                      <span className="sbe-label">{earned.label}</span>
                    </div>
                  ) : null;
                })()}
              </div>

              {/* Heat tile track */}
              <div className="streak-heat-track">
                {buildWeekCalendar(displayStats.currentStreak).map((d, i) => (
                  <div key={i} className="streak-heat-day">
                    <span className="streak-heat-label">{d.label}</span>
                    <div className={`streak-heat-tile ${d.played ? "heat--played" : ""} ${d.isToday ? "heat--today" : ""}`}>
                      {d.isToday && d.played ? "🔥" : d.played ? "✓" : ""}
                    </div>
                  </div>
                ))}
              </div>

              {/* Scrollable milestones */}
              <p className="streak-milestones-heading">Your journey</p>
              <div
                className="streak-milestones-scroll"
                onTouchStart={e => e.stopPropagation()}
                onTouchMove={e => e.stopPropagation()}
                onTouchEnd={e => e.stopPropagation()}
              >
                {STREAK_MILESTONES.map(m => {
                  const achieved  = displayStats.currentStreak >= m.days;
                  const isCurrent = [...STREAK_MILESTONES].reverse().find(x => displayStats.currentStreak >= x.days)?.days === m.days;
                  return (
                    <div
                      key={m.days}
                      className={`streak-milestone ${achieved ? "sm--achieved" : "sm--locked"} ${isCurrent ? "sm--current" : ""}`}
                      style={achieved ? {
                        borderColor: `${m.color}55`,
                        background: `${m.color}14`,
                        boxShadow: isCurrent ? `0 0 12px ${m.glow}` : "none",
                      } : {}}
                    >
                      <div className="sm-icon-wrap" style={achieved ? { background: `${m.color}22`, boxShadow: `0 0 8px ${m.glow}` } : {}}>
                        <span className="sm-icon">{achieved ? m.icon : "○"}</span>
                      </div>
                      <span className="sm-days" style={achieved ? { color: m.color } : {}}>{m.days}d</span>
                      <span className="sm-label">{m.label}</span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Next games — only show unplayed */}
          {hasNextGames && showResult && (
            <div className="next-games-section">
              <p className="next-games-title">Keep playing today</p>
              <div className="next-games-grid">
                {!pulseDone && (
                  <a href="/game" className="next-game-tile">
                    <div className="next-game-icon-tile" style={{ background: "linear-gradient(145deg,#ff6b35,#ff9a3c)" }}>🎯</div>
                    <div className="next-game-info">
                      <p className="next-game-name">Pulse</p>
                      <p className="next-game-kp">⚡ +50 KP</p>
                    </div>
                    <span className="next-game-cta">▶ Play</span>
                  </a>
                )}
                {!lexiDone && (
                  <a href="/word" className="next-game-tile">
                    <div className="next-game-icon-tile next-tile--lexi">📖</div>
                    <div className="next-game-info">
                      <p className="next-game-name">Lexi</p>
                      <p className="next-game-kp">⚡ +20 KP</p>
                    </div>
                    <span className="next-game-cta">▶ Play</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Countdown + actions */}
          <p className={`countdown-text ${showResult ? "visible" : ""}`}>
            ⏳ Next Fluent in {countdown}
          </p>

          <div className={`result-actions ${showResult ? "visible" : ""}`}>
            <button className="result-btn result-btn-primary result-btn-share" onClick={shareScore}>
              <span>📤</span> Share Score
            </button>
          </div>

          <p className={`result-footer ${showResult ? "visible" : ""}`}>
            Come back tomorrow for a new challenge!
          </p>

        </div>
      </main>
    );
  }

  /* ── Game Screen ── */
  return (
    <main className="game-wrapper">
      <div className="game-content">

        {/* Header */}
        <div className="game-header">
          <Link href="/" className="game-back-btn">‹</Link>
          <div className="game-header-center">
            <span className="game-header-name">Fluent</span>
            <span className="game-header-num">#{dayNumber}</span>
          </div>
          <span style={{ width: 48 }} />
        </div>

        {/* Timer bar */}
        <div className={`timer-wrapper ${timeLeft <= 5 ? "timer-danger" : ""}`}>
          <div className={`timer-bar ${timeLeft <= 5 ? "danger" : ""}`}
            style={{ width: `${(timeLeft / QUESTION_TIME) * 100}%` }} />
        </div>

        {/* Category badge + timer text row */}
        <div className="fluent-timer-category-row">
          <p className={`timer-text ${timeLeft <= 5 ? "timer-text-danger" : ""}`}>⏱ {timeLeft}s</p>
          {q.category && (
            <span className="fluent-category-badge">{q.category}</span>
          )}
        </div>

        {/* Progress dots */}
        <div className="progress-dots">
          {questions.map((_, i) => (
            <span key={i} className={`progress-dot ${i < current ? "done" : i === current ? "active" : ""}`} />
          ))}
        </div>

        {/* Hint button + popup */}
        {q.hint && (
          <div className="fluent-hint-area">
            <button className="fluent-hint-btn" onClick={() => setShowHint(h => !h)}>
              💡 Hint
            </button>
            {showHint && (
              <div className="fluent-hint-toast">
                <div className="fluent-hint-toast-arrow" />
                <span className="fluent-hint-toast-text">{q.hint}</span>
              </div>
            )}
          </div>
        )}

        {/* Question card */}
        <div className="question-card-wrapper">
          <div className="question-card">
            <span className="question-number">Q{current + 1}</span>
            <span className="question-text">{q.question}</span>
          </div>
        </div>

        {/* Options */}
        <div className="options">
          {q.options.map((o, idx) => {
            const isCorrect  = o === q.answer;
            const isSelected = o === selected;
            let cls = "option";
            if (review) {
              if (isCorrect)           cls += " option-correct";
              else if (isSelected)     cls += " option-wrong";
              else                     cls += " option-disabled";
            }
            return (
              <button key={idx} className={cls} disabled={review} onClick={() => answer(o)}>
                <span className={`option-label ${review && isCorrect ? "label-correct" : ""} ${review && isSelected && !isCorrect ? "label-wrong" : ""}`}>
                  {optionLabels[idx]}
                </span>
                <span className="option-text">{o}</span>
                {review && isCorrect  && <span className="option-icon">✅</span>}
                {review && isSelected && !isCorrect && <span className="option-icon">❌</span>}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {review && (
          <div className="explanation-box">
            <div className="explanation-header">
              <span className="explanation-icon">💡</span>
              <span className="explanation-title">Explanation</span>
            </div>
            <p className="explanation-text">{q.explanation}</p>
            <button className="next-btn" onClick={next}>
              {current === questions.length - 1 ? "See Results →" : "Next Question →"}
            </button>
          </div>
        )}

        <div className="floating-brand">F</div>
      </div>
    </main>
  );
}
