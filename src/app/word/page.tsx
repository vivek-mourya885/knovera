"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { trackGameStart, trackGamePlayed } from "@/lib/analytics";

const LAUNCH_DATE = new Date(2026, 3, 1); // Lexi goes live April 1, 2026

/* ── Helpers ─────────────────────────────────────────────── */
function getDayNumber(): number {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const launch = new Date(LAUNCH_DATE); launch.setHours(0, 0, 0, 0);
  return Math.max(1, Math.floor((today.getTime() - launch.getTime()) / 86400000) + 1);
}

function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function getYesterdayStr() {
  const d = new Date(); d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function getTimeUntilMidnight(): string {
  const now = new Date();
  const tom = new Date(now); tom.setDate(tom.getDate() + 1); tom.setHours(0, 0, 0, 0);
  const diff = tom.getTime() - now.getTime();
  return `${Math.floor(diff / 3600000)}h ${Math.floor((diff % 3600000) / 60000)}m`;
}

/* ── Stats ──────────────────────────────────────────────── */
interface WordStats {
  currentStreak: number;
  lastPlayedDate: string;
  totalPlayed: number;
  totalKP: number;
  lastCorrect: boolean;
}
const EMPTY: WordStats = { currentStreak: 0, lastPlayedDate: "", totalPlayed: 0, totalKP: 0, lastCorrect: false };

function loadStats(): WordStats {
  if (typeof window === "undefined") return { ...EMPTY };
  try {
    const raw = localStorage.getItem("knovera_word_stats");
    if (raw) return { ...EMPTY, ...JSON.parse(raw) };
  } catch { /* reset */ }
  return { ...EMPTY };
}
function saveStats(s: WordStats) {
  if (typeof window === "undefined") return;
  localStorage.setItem("knovera_word_stats", JSON.stringify(s));
}
function recordGame(correct: boolean): WordStats {
  const stats = loadStats();
  const today = getTodayStr();
  const yesterday = getYesterdayStr();
  if (stats.lastPlayedDate === today) return stats;
  stats.currentStreak = stats.lastPlayedDate === yesterday ? stats.currentStreak + 1 : 1;
  stats.totalKP       += correct ? 20 : 0;
  stats.totalPlayed   += 1;
  stats.lastPlayedDate = today;
  stats.lastCorrect    = correct;
  saveStats(stats);
  return stats;
}

/* ── Streak helpers ──────────────────────────────────────── */
function buildWeekCalendar(streak: number) {
  const idx = new Date().getDay();
  return ["S","M","T","W","T","F","S"].map((label, i) => ({
    label, played: i <= idx && (idx - i) < streak, isToday: i === idx,
  }));
}
function getStreakSubtext(n: number) {
  if (n >= 31) return "You're a legend! 🎖️";
  if (n >= 7)  return "Absolutely unstoppable!";
  if (n >= 5)  return "You're a Superstar! 🌟";
  if (n >= 3)  return "Back for more? Awesome!";
  if (n === 2) return "Two days in a row!";
  if (n === 1) return "Day 1 — come back tomorrow!";
  return "Start your streak today!";
}
const MILESTONES = [
  { days: 3,   label: "Starter",  icon: "🔥", color: "#ff6b35", glow: "rgba(255,107,53,0.3)"  },
  { days: 5,   label: "Explorer", icon: "📘", color: "#3b82f6", glow: "rgba(59,130,246,0.3)"  },
  { days: 7,   label: "Scholar",  icon: "🎓", color: "#8b5cf6", glow: "rgba(139,92,246,0.3)"  },
  { days: 15,  label: "Master",   icon: "🧠", color: "#a855f7", glow: "rgba(168,85,247,0.3)"  },
  { days: 30,  label: "Legend",   icon: "🏆", color: "#f59e0b", glow: "rgba(245,158,11,0.3)"  },
  { days: 50,  label: "Elite",    icon: "⚡", color: "#eab308", glow: "rgba(234,179,8,0.3)"   },
  { days: 75,  label: "Genius",   icon: "💡", color: "#22c55e", glow: "rgba(34,197,94,0.3)"   },
  { days: 100, label: "Icon",     icon: "👑", color: "#fbbf24", glow: "rgba(251,191,36,0.35)" },
];

/* ── Question type ───────────────────────────────────────── */
interface WordQuestion {
  definition:  string;
  options:     string[];
  answer:      string;
  explanation: string;
}

/* ── Component ───────────────────────────────────────────── */
export default function LexiPage() {
  const [question,   setQuestion]   = useState<WordQuestion | null>(null);
  const [selected,   setSelected]   = useState<string | null>(null);
  const [revealed,   setRevealed]   = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [stats,      setStats]      = useState<WordStats | null>(null);
  const [dayNumber,  setDayNumber]  = useState(1);
  const [countdown,  setCountdown]  = useState("");
  const [pulseDone,  setPulseDone]  = useState(false);
  const [fluentDone, setFluentDone] = useState(false);
  const hasRecorded = useRef(false);

  useEffect(() => {
    setDayNumber(getDayNumber());
    const today = getTodayStr();
    setPulseDone(JSON.parse(localStorage.getItem("knovera_stats") || "{}").lastPlayedDate === today);
    setFluentDone(JSON.parse(localStorage.getItem("knovera_english_stats") || "{}").lastPlayedDate === today);

    trackGameStart("lexi");
    fetch("/api/word")
      .then(r => r.json())
      .then(data => { if (data.definition) setQuestion(data); })
      .catch(err => console.error("Error fetching word:", err));
  }, []);

  useEffect(() => {
    if (!showResult) return;
    const update = () => setCountdown(getTimeUntilMidnight());
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, [showResult]);

  function answer(option: string) {
    if (revealed || !question) return;
    setSelected(option);
    setRevealed(true);
  }

  function seeResults() {
    if (!question || hasRecorded.current) return;
    hasRecorded.current = true;
    const correct = selected === question.answer;
    trackGamePlayed("lexi", correct ? 1 : 0, 1);
    const s = recordGame(correct);
    setStats(s);
    setShowResult(true);
  }

  async function shareWord() {
    if (!question) return;
    const correct = selected === question.answer;
    const text = `📖 Today's Lexi word: ${question.answer.toUpperCase()}\n"${question.definition}"\n${correct ? "✅ I got it right!" : "❌ Missed it today — learned it though!"}\nKnovera · https://playknovera.com`;
    if (navigator.share) {
      try { await navigator.share({ title: "Lexi — Word of the Day", text }); } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(text);
    }
  }

  const optionLabels = ["A", "B", "C", "D"];

  /* ── Loading ── */
  if (!question) {
    return (
      <main className="game-wrapper">
        <div className="game-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
          <div className="loading-spinner" />
        </div>
      </main>
    );
  }

  const isCorrect = selected === question.answer;

  /* ── Result Screen ── */
  if (showResult && stats) {
    const hasNextGames = !pulseDone || !fluentDone;

    return (
      <main className="game-wrapper">
        {/* Celebration particles for correct answer */}
        {isCorrect && (
          <div className="celebration-container">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="celebration-particle" style={{
                left: "50%", top: "40%",
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1 + Math.random() * 1.5}s`,
                ["--angle" as string]: `${Math.random() * 360}deg`,
                ["--distance" as string]: `${60 + Math.random() * 120}px`,
                backgroundColor: ["#fbbf24","#fb923c","#a78bfa","#60a5fa","#4ade80","#f87171"][Math.floor(Math.random() * 6)],
              }} />
            ))}
          </div>
        )}

        <div className="game-content">

          {/* Header */}
          <div className="result-header">
            <Link href="/" className="result-back-link">‹ Home</Link>
            <span className="result-game-label">Lexi #{dayNumber}</span>
          </div>

          {/* Outcome */}
          <div className={`lexi-outcome ${isCorrect ? "lexi-outcome--correct" : "lexi-outcome--wrong"}`}>
            <span className="lexi-outcome-icon">{isCorrect ? "✅" : "❌"}</span>
            <div>
              <p className="lexi-outcome-title">{isCorrect ? "Correct!" : "Not quite"}</p>
              <p className="lexi-outcome-sub">{isCorrect ? "+20 KP earned" : "You'll get it next time"}</p>
            </div>
          </div>

          {/* Word of the Day card */}
          <div className="lexi-word-card">
            <div className="lexi-word-card-badge">📖 Word of the Day</div>
            <h2 className="lexi-word-title">{question.answer.toUpperCase()}</h2>
            <p className="lexi-word-definition">"{question.definition}"</p>
            <div className="lexi-word-divider" />
            <p className="lexi-word-explanation">{question.explanation}</p>
            {!isCorrect && (
              <div className="lexi-your-pick">
                Your pick: <span>{selected}</span>
              </div>
            )}
          </div>

          {/* Streak card */}
          <div className="streak-detail-card" style={{ marginTop: "16px" }}>
            <div className="streak-detail-header">
              <div>
                <p className="streak-win-title">🔥 {stats.currentStreak}-day streak</p>
                <p className="streak-win-sub">{getStreakSubtext(stats.currentStreak)}</p>
              </div>
              {(() => {
                const earned = [...MILESTONES].reverse().find(m => stats.currentStreak >= m.days);
                return earned ? (
                  <div className="streak-badge-earned">
                    <span>{earned.icon}</span>
                    <span className="sbe-label">{earned.label}</span>
                  </div>
                ) : null;
              })()}
            </div>

            <div className="streak-heat-track">
              {buildWeekCalendar(stats.currentStreak).map((d, i) => (
                <div key={i} className="streak-heat-day">
                  <span className="streak-heat-label">{d.label}</span>
                  <div className={`streak-heat-tile ${d.played ? "heat--played" : ""} ${d.isToday ? "heat--today" : ""}`}>
                    {d.isToday && d.played ? "🔥" : d.played ? "✓" : ""}
                  </div>
                </div>
              ))}
            </div>

            <p className="streak-milestones-heading">Your journey</p>
            <div
              className="streak-milestones-scroll"
              onTouchStart={e => e.stopPropagation()}
              onTouchMove={e => e.stopPropagation()}
              onTouchEnd={e => e.stopPropagation()}
            >
              {MILESTONES.map(m => {
                const achieved  = stats.currentStreak >= m.days;
                const isCurrent = [...MILESTONES].reverse().find(x => stats.currentStreak >= x.days)?.days === m.days;
                return (
                  <div
                    key={m.days}
                    className={`streak-milestone ${achieved ? "sm--achieved" : "sm--locked"} ${isCurrent ? "sm--current" : ""}`}
                    style={achieved ? { borderColor: `${m.color}55`, background: `${m.color}14`, boxShadow: isCurrent ? `0 0 12px ${m.glow}` : "none" } : {}}
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

          {/* Next games */}
          {hasNextGames && (
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
                {!fluentDone && (
                  <a href="/english" className="next-game-tile">
                    <div className="next-game-icon-tile next-tile--fluent">✍️</div>
                    <div className="next-game-info">
                      <p className="next-game-name">Fluent</p>
                      <p className="next-game-kp">⚡ +50 KP</p>
                    </div>
                    <span className="next-game-cta">▶ Play</span>
                  </a>
                )}
              </div>
            </div>
          )}

          <p className="countdown-text visible">⏳ Next word in {countdown}</p>

          <div className="result-actions visible">
            <button className="result-btn result-btn-primary result-btn-share" onClick={shareWord}>
              <span>📤</span> Share Word
            </button>
          </div>

          <Link href="/word/practice" className="practice-result-link">
            <span>📖</span> Practice more words →
          </Link>

          <p className="result-footer visible">Come back tomorrow for a new word! 📖</p>

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
            <span className="game-header-name">Lexi</span>
            <span className="game-header-num">#{dayNumber}</span>
          </div>
          <span className="game-header-progress">1 / 1</span>
        </div>

        {/* Definition card */}
        <div className="lexi-definition-card">
          <p className="lexi-card-label">What word matches this meaning?</p>
          <p className="lexi-card-definition">{question.definition}</p>
        </div>

        {/* Options */}
        <div className="options">
          {question.options.map((o, idx) => {
            const isCorrectOpt = o === question.answer;
            const isSelected   = o === selected;
            let cls = "option";
            if (revealed) {
              if (isCorrectOpt)       cls += " option-correct";
              else if (isSelected)    cls += " option-wrong";
              else                    cls += " option-disabled";
            }
            return (
              <button key={idx} className={cls} disabled={revealed} onClick={() => answer(o)}>
                <span className={`option-label ${revealed && isCorrectOpt ? "label-correct" : ""} ${revealed && isSelected && !isCorrectOpt ? "label-wrong" : ""}`}>
                  {optionLabels[idx]}
                </span>
                <span className="option-text">{o}</span>
                {revealed && isCorrectOpt  && <span className="option-icon">✅</span>}
                {revealed && isSelected && !isCorrectOpt && <span className="option-icon">❌</span>}
              </button>
            );
          })}
        </div>

        {/* Explanation + See Results */}
        {revealed && (
          <div className="explanation-box">
            <div className="explanation-header">
              <span className="explanation-icon">💡</span>
              <span className="explanation-title">Explanation</span>
            </div>
            <p className="explanation-text">{question.explanation}</p>
            <button className="next-btn" onClick={seeResults}>See Results →</button>
          </div>
        )}

        <div className="floating-brand">L</div>
      </div>
    </main>
  );
}
