"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { trackHomeVisit } from "@/lib/analytics";

const PULSE_LAUNCH  = new Date(2026, 1, 17); // Pulse launched Feb 17, 2026
const LEXI_LAUNCH   = new Date(2026, 3, 1);  // Lexi goes live April 1, 2026
const FLUENT_LAUNCH  = new Date(2026, 3, 1);  // Fluent goes live April 1, 2026

const PARTICLE_DATA = [
  { left: 5,  delay: 0.2, duration: 5.1 }, { left: 12, delay: 1.4, duration: 4.3 },
  { left: 20, delay: 0.8, duration: 6.2 }, { left: 28, delay: 2.1, duration: 3.8 },
  { left: 35, delay: 0.5, duration: 5.5 }, { left: 42, delay: 1.9, duration: 4.7 },
  { left: 50, delay: 0.3, duration: 6.0 }, { left: 58, delay: 2.5, duration: 3.5 },
  { left: 65, delay: 1.1, duration: 5.8 }, { left: 72, delay: 0.7, duration: 4.1 },
  { left: 78, delay: 2.3, duration: 5.3 }, { left: 85, delay: 0.1, duration: 6.5 },
  { left: 90, delay: 1.7, duration: 3.9 }, { left: 95, delay: 0.9, duration: 4.5 },
  { left: 8,  delay: 2.8, duration: 5.7 }, { left: 33, delay: 1.3, duration: 4.9 },
  { left: 47, delay: 0.6, duration: 6.3 }, { left: 62, delay: 2.0, duration: 3.7 },
  { left: 75, delay: 1.5, duration: 5.0 }, { left: 88, delay: 0.4, duration: 4.4 },
];

interface GameStats {
  currentStreak: number;
  lastPlayedDate: string;
  totalKP: number;
  totalPlayed: number;
}

const EMPTY_STATS: GameStats = { currentStreak: 0, lastPlayedDate: "", totalKP: 0, totalPlayed: 0 };

function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getDayNumber(launchDate: Date): number {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const launch = new Date(launchDate); launch.setHours(0, 0, 0, 0);
  return Math.max(1, Math.floor((today.getTime() - launch.getTime()) / 86400000) + 1);
}

function loadGameStats(key: string): GameStats {
  if (typeof window === "undefined") return { ...EMPTY_STATS };
  try {
    const raw = localStorage.getItem(key);
    if (raw) return { ...EMPTY_STATS, ...JSON.parse(raw) };
  } catch { /* reset */ }
  return { ...EMPTY_STATS };
}

// CTA label — always "▶ Play" for unplayed, "✓" for completed
function getCtaLabel(stats: GameStats, today: string): "▶ Play" | "✓" {
  return stats.lastPlayedDate === today ? "✓" : "▶ Play";
}

// Supporting text below game title — streak / motivational / clarity
function getSupportText(
  stats: GameStats,
  today: string,
  totalKP: number,
  level: number,
  newUserDesc: string,
  zeroStreakCTA: string,
  doneTexts: { legend: string; fire: string; solid: string; start: string }
): { text: string; urgent: boolean } {
  const done     = stats.lastPlayedDate === today;
  const isNew    = stats.totalPlayed <= 2;
  const kpToNext = 100 - (totalKP % 100);
  const streak   = stats.currentStreak;

  if (done) {
    if (streak >= 10) return { text: doneTexts.legend, urgent: false };
    if (streak >= 5)  return { text: doneTexts.fire,   urgent: false };
    if (streak >= 2)  return { text: doneTexts.solid,  urgent: false };
    return              { text: doneTexts.start,         urgent: false };
  }
  if (isNew)           return { text: newUserDesc,                                        urgent: false };
  if (kpToNext <= 30)  return { text: `🏆 ${kpToNext} KP to Level ${level + 1} — now!`, urgent: true  };
  if (streak >= 7)     return { text: `⚡ Don't break your ${streak}-day chain!`,        urgent: true  };
  if (streak >= 3)     return { text: `🔥 ${streak}-day streak · Keep going!`,           urgent: false };
  if (streak === 2)    return { text: "🔥 2-day streak · Keep the momentum!",             urgent: false };
  if (streak === 1)    return { text: "🔥 1-day streak · Keep it going!",                 urgent: false };
  return                 { text: zeroStreakCTA,                                            urgent: false };
}

// Behavioral nudge — short, punchy, session-completion focused
function getBehavioralNudge(doneToday: number, topStreak: number): string | null {
  if (doneToday === 3) return null;
  const left = 3 - doneToday;
  if (doneToday === 0 && topStreak >= 3)
    return `🔥 ${topStreak}-day streak at risk · Play all 3 to keep it alive`;
  if (doneToday === 0)
    return "🎯 Complete all 3 games to keep your streak alive";
  if (doneToday === 2)
    return "🏁 1 game left · Finish strong and complete today!";
  return `🔥 ${left} games left · Complete all to build your streak`;
}

export default function HomePage() {
  const router = useRouter();
  const [mounted,      setMounted]      = useState(false);
  const [currentDate,  setCurrentDate]  = useState("");
  const [pulseDayNum,  setPulseDayNum]  = useState(1);
  const [lexiDayNum,   setLexiDayNum]   = useState(1);
  const [fluentDayNum, setFluentDayNum] = useState(1);
  const [gkStats,      setGkStats]      = useState<GameStats>({ ...EMPTY_STATS });
  const [wordStats,    setWordStats]    = useState<GameStats>({ ...EMPTY_STATS });
  const [englishStats, setEnglishStats] = useState<GameStats>({ ...EMPTY_STATS });

  useEffect(() => {
    setMounted(true);
    trackHomeVisit();
    setCurrentDate(new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }));
    setPulseDayNum(getDayNumber(PULSE_LAUNCH));
    setLexiDayNum(getDayNumber(LEXI_LAUNCH));
    setFluentDayNum(getDayNumber(FLUENT_LAUNCH));
    setGkStats(loadGameStats("knovera_stats"));
    setWordStats(loadGameStats("knovera_word_stats"));
    setEnglishStats(loadGameStats("knovera_english_stats"));
  }, []);

  const today     = getTodayStr();
  const totalKP   = gkStats.totalKP + wordStats.totalKP + englishStats.totalKP;
  const level     = Math.floor(totalKP / 100) + 1;
  const kpInLevel = totalKP % 100;
  const kpToNext  = 100 - kpInLevel;
  const doneToday = [gkStats, wordStats, englishStats].filter(s => s.lastPlayedDate === today).length;

  const pulseSupport  = getSupportText(gkStats,      today, totalKP, level, "5 questions · History, Polity & Science",  "Start your streak today",
    { legend: "Legendary run! Keep it up 🏅", fire: "Knowledge champion! See you tomorrow", solid: "Nailed it today!", start: "Strong start!" });
  const lexiSupport   = getSupportText(wordStats,    today, totalKP, level, "Learn 1 new word every day",              "Learn today's word →",
    { legend: "Legendary run! Keep it up 🏅", fire: "Word wizard! See you tomorrow", solid: "Well played today!", start: "New word learned!" });
  const fluentSupport = getSupportText(englishStats, today, totalKP, level, "5 questions · Grammar & everyday English", "Improve your English daily →",
    { legend: "Legendary run! Keep it up 🏅", fire: "Grammar guru! See you tomorrow", solid: "Solid effort today!", start: "Nice one!" });

  const pulseCta  = getCtaLabel(gkStats,      today);
  const lexiCta   = getCtaLabel(wordStats,    today);
  const fluentCta = getCtaLabel(englishStats, today);

  return (
    <main className="home-container">

      <div className="particles">
        {PARTICLE_DATA.map((p, i) => (
          <div key={i} className="particle" style={{ left: `${p.left}%`, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }} />
        ))}
      </div>

      {/* ── Header ─────────────────────────────────────── */}
      <header className={`home-header ${mounted ? "visible" : ""}`}>
        {/* Brand — centered */}
        <div className="home-header-brand">
          <h1 className="logo">Knovera</h1>
          <p className="logo-tagline">Knowledge • Verified • Era</p>
        </div>
        {/* Section title — left aligned */}
        <div className="home-header-bottom">
          <div>
            <p className="home-greeting">Your Daily Games</p>
            {mounted && <p className="home-date">{currentDate}</p>}
          </div>
          {mounted && doneToday === 3 && (
            <span className="all-done-pill">🎉 All games completed</span>
          )}
        </div>
      </header>

      {/* ── Behavioral nudge ────────────────────────────── */}
      {mounted && getBehavioralNudge(doneToday, Math.max(gkStats.currentStreak, wordStats.currentStreak, englishStats.currentStreak)) && (
        <div className="behavioral-nudge">
          {getBehavioralNudge(doneToday, Math.max(gkStats.currentStreak, wordStats.currentStreak, englishStats.currentStreak))}
        </div>
      )}

      {/* ── Game Cards ──────────────────────────────────── */}
      <section className={`games-section ${mounted ? "visible" : ""}`}>

        {/* Pulse */}
        <Link href="/game" className="game-card-link">
          <div className={`game-card game-card--pulse ${pulseCta === "✓" ? "game-card--done" : pulseSupport.urgent ? "game-card--urgent" : "game-card--active"}`}>
            <div className="card-shimmer" />
            <div className="game-tile game-tile--pulse">
              <span className="game-tile-emoji">🎯</span>
            </div>
            <div className="game-card-info">
              <div className="game-card-name-row">
                <h3 className="game-card-title">Pulse</h3>
                <span className="game-day-pill">#{pulseDayNum}</span>
              </div>
              <div className="game-card-meta-row">
                {gkStats.currentStreak > 0 && (
                  <span className="streak-pill streak-pill--pulse">🔥 {gkStats.currentStreak}-day streak</span>
                )}
                {pulseCta !== "✓" && <span className="game-kp-pill">⚡ +50 KP</span>}
              </div>
              <p className={`game-card-status ${pulseCta === "✓" ? "status--done" : pulseSupport.urgent ? "status--urgent" : "status--neutral"}`}>
                {pulseSupport.text}
              </p>
            </div>
            <span className={`game-cta ${pulseCta === "✓" ? "game-cta--done" : "game-cta--play"}`}>
              {pulseCta}
            </span>
          </div>
        </Link>

        {/* Lexi */}
        <div
          className={`game-card game-card--lexi ${lexiCta === "✓" ? "game-card--done" : lexiSupport.urgent ? "game-card--urgent" : "game-card--active"}`}
          onClick={() => router.push("/word")}
          role="button"
          tabIndex={0}
        >
          <div className="card-shimmer" />
          <div className="game-tile game-tile--lexi">
            <span className="game-tile-emoji">📖</span>
          </div>
          <div className="game-card-info">
            <div className="game-card-name-row">
              <h3 className="game-card-title">Lexi</h3>
              <span className="game-day-pill">#{lexiDayNum}</span>
            </div>
            <div className="game-card-meta-row">
              {wordStats.currentStreak > 0 && (
                <span className="streak-pill streak-pill--lexi">🔥 {wordStats.currentStreak}-day streak</span>
              )}
              {lexiCta !== "✓" && <span className="game-kp-pill">⚡ +20 KP</span>}
            </div>
            <p className={`game-card-status ${lexiCta === "✓" ? "status--done" : lexiSupport.urgent ? "status--urgent" : "status--neutral"}`}>
              {lexiSupport.text}
            </p>
          </div>
          <span className={`game-cta ${lexiCta === "✓" ? "game-cta--done" : "game-cta--play"}`}>
            {lexiCta}
          </span>
        </div>

        {/* Fluent */}
        <Link href="/english" className="game-card-link">
          <div className={`game-card game-card--fluent ${fluentCta === "✓" ? "game-card--done" : fluentSupport.urgent ? "game-card--urgent" : "game-card--active"}`}>
            <div className="card-shimmer" />
            <div className="game-tile game-tile--fluent">
              <span className="game-tile-emoji">✍️</span>
            </div>
            <div className="game-card-info">
              <div className="game-card-name-row">
                <h3 className="game-card-title">Fluent</h3>
                <span className="game-day-pill">#{fluentDayNum}</span>
              </div>
              <div className="game-card-meta-row">
                {englishStats.currentStreak > 0 && (
                  <span className="streak-pill streak-pill--fluent">🔥 {englishStats.currentStreak}-day streak</span>
                )}
                {fluentCta !== "✓" && <span className="game-kp-pill">⚡ +50 KP</span>}
              </div>
              <p className={`game-card-status ${fluentCta === "✓" ? "status--done" : fluentSupport.urgent ? "status--urgent" : "status--neutral"}`}>
                {fluentSupport.text}
              </p>
            </div>
            <span className={`game-cta ${fluentCta === "✓" ? "game-cta--done" : "game-cta--play"}`}>
              {fluentCta}
            </span>
          </div>
        </Link>

        {/* Practice — below Fluent */}
        <Link href="/word/practice" className="practice-card">
          <span className="practice-card-emoji">📖</span>
          <span className="practice-card-text">Keep learning more</span>
          <span className="practice-card-arrow">🔥</span>
        </Link>

      </section>

      {/* ── Stats + Level Progress ───────────────────────── */}
      {mounted && (
        <section className="stats-section">
          <div className="stats-bar">
            <div className="stats-bar-item">
              <span className="stats-bar-value">⚡ {totalKP}</span>
              <span className="stats-bar-label">Total KP</span>
            </div>
            <div className="stats-bar-divider" />
            <div className="stats-bar-item">
              <span className="stats-bar-value">🏆 {level}</span>
              <span className="stats-bar-label">Level</span>
            </div>
            <div className="stats-bar-divider" />
            <div className="stats-bar-item">
              <span className="stats-bar-value">🎮 {doneToday}/3</span>
              <span className="stats-bar-label">Completed today</span>
            </div>
          </div>
          <div className="level-progress">
            <div className="level-progress-labels">
              <span>Lv {level}</span>
              <span className={kpToNext <= 30 ? "kp-urgent" : ""}>{kpToNext <= 30 ? `Almost there! ${kpToNext} KP to Level ${level + 1}` : `${kpToNext} KP to Level ${level + 1}`}</span>
            </div>
            <div className="level-progress-track">
              <div className="level-progress-fill" style={{ width: `${kpInLevel}%` }} />
            </div>
          </div>
        </section>
      )}

      {/* ── Quote ───────────────────────────────────────── */}
      <section className="habit-section">
        <div className="habit-content">
          <div className="habit-quote">&ldquo;</div>
          <p className="habit-text">A little smarter, every day.</p>
          <div className="habit-decoration">
            <div className="decoration-dot" /><div className="decoration-line" /><div className="decoration-dot" />
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="footer-content">
          <span>© 2026 Knovera</span>
          <span className="footer-divider">|</span>
          <span>Built with 💜 for knowledge seekers</span>
        </div>
      </footer>

    </main>
  );
}
