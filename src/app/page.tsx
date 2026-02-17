"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Fixed particle data - no Math.random() during render
const PARTICLE_DATA = [
  { left: 5, delay: 0.2, duration: 5.1 },
  { left: 12, delay: 1.4, duration: 4.3 },
  { left: 20, delay: 0.8, duration: 6.2 },
  { left: 28, delay: 2.1, duration: 3.8 },
  { left: 35, delay: 0.5, duration: 5.5 },
  { left: 42, delay: 1.9, duration: 4.7 },
  { left: 50, delay: 0.3, duration: 6.0 },
  { left: 58, delay: 2.5, duration: 3.5 },
  { left: 65, delay: 1.1, duration: 5.8 },
  { left: 72, delay: 0.7, duration: 4.1 },
  { left: 78, delay: 2.3, duration: 5.3 },
  { left: 85, delay: 0.1, duration: 6.5 },
  { left: 90, delay: 1.7, duration: 3.9 },
  { left: 95, delay: 0.9, duration: 4.5 },
  { left: 8, delay: 2.8, duration: 5.7 },
  { left: 33, delay: 1.3, duration: 4.9 },
  { left: 47, delay: 0.6, duration: 6.3 },
  { left: 62, delay: 2.0, duration: 3.7 },
  { left: 75, delay: 1.5, duration: 5.0 },
  { left: 88, delay: 0.4, duration: 4.4 },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setMounted(true);
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    );
  }, []);

  return (
    <main className="home-container">
      {/* Particles with FIXED values - no hydration mismatch */}
      <div className="particles">
        {PARTICLE_DATA.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <section className={`hero ${mounted ? "visible" : ""}`}>
        <div className="logo-wrapper">
          <h1 className="logo">Knovera</h1>
          <div className="logo-tagline">Knowledge • Verified • Era</div>
        </div>

        <h2 className="headline">
          Your daily
          <span className="headline-highlight"> knowledge game</span>
        </h2>

        <p className="subline">
          <span className="stat-item">
            <span className="stat-icon">🎯</span>
            <span>5 questions</span>
          </span>
          <span className="stat-divider">·</span>
          <span className="stat-item">
            <span className="stat-icon">⚡</span>
            <span>3 minutes</span>
          </span>
          <span className="stat-divider">·</span>
          <span className="stat-item">
            <span className="stat-icon">🌅</span>
            <span>New daily</span>
          </span>
        </p>

        <Link href="/game" className="cta-link">
          <button className="cta">
            <span className="cta-text">Play Today</span>
            <span className="cta-arrow">→</span>
          </button>
        </Link>

        <p className="meta">
          <span className="meta-badge">✨ No login</span>
          <span className="meta-badge">📱 No downloads</span>
          <span className="meta-badge">🎮 Just play</span>
        </p>
      </section>

      {/* How it works */}
      <section className="how-section">
        <div className="how-grid">
          <div className="how-card" style={{ animationDelay: "0.1s" }}>
            <div className="how-icon">🧠</div>
            <div className="how-content">
              <h3>Answer Questions</h3>
              <p>5 curated questions on diverse topics</p>
            </div>
          </div>
          <div className="how-card" style={{ animationDelay: "0.2s" }}>
            <div className="how-icon">⏱️</div>
            <div className="how-content">
              <h3>Beat the Clock</h3>
              <p>30 seconds per question keeps you sharp</p>
            </div>
          </div>
          <div className="how-card" style={{ animationDelay: "0.3s" }}>
            <div className="how-icon">🔥</div>
            <div className="how-content">
              <h3>Build Streaks</h3>
              <p>Track your progress &amp; consistency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Today section */}
      <section className="today-section">
        <div className="today-card">
          <div className="today-header">
            <span className="today-badge">Today&apos;s Game</span>
            {currentDate && <span className="today-date">{currentDate}</span>}
          </div>
          <div className="today-topics">
            <span className="topic-tag">Mixed GK</span>
            <span className="topic-tag">Polity</span>
            <span className="topic-tag">History</span>
            <span className="topic-tag">Current Affairs</span>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="habit-section">
        <div className="habit-content">
          <div className="habit-quote">&ldquo;</div>
          <p className="habit-text">A little smarter, every day.</p>
          <div className="habit-decoration">
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
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