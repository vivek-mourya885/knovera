"use client";

import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";
import { trackGameStart, trackGamePlayed } from "@/lib/analytics";

/* ── Types ──────────────────────────────────────────────── */
interface PracticeQuestion {
  id: number;
  question_type: "classic" | "reverse" | "synonym";
  word: string;
  definition: string;
  synonym: string | null;
  options: string[];
  answer: string;
  prompt: string;
  explanation: string;
}

interface MasteredData {
  masteredIds: number[];
  totalSessions: number;
}

const STORAGE_KEY = "knovera_practice_mastered";

/* ── Helpers ─────────────────────────────────────────────── */
function loadMastered(): MasteredData {
  if (typeof window === "undefined") return { masteredIds: [], totalSessions: 0 };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* reset */ }
  return { masteredIds: [], totalSessions: 0 };
}

function saveMastered(data: MasteredData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const BADGE_LABELS: Record<string, string> = {
  classic: "Classic",
  reverse: "Reverse",
  synonym: "Synonym",
};

const optionLabels = ["A", "B", "C", "D"];

function getMotivation(score: number, total: number): string {
  const pct = (score / total) * 100;
  if (pct === 100) return "Perfect score! You're a vocabulary master!";
  if (pct >= 80) return "Excellent work! Almost flawless!";
  if (pct >= 60) return "Great effort! Keep building your vocabulary!";
  if (pct >= 40) return "Good start! Practice makes perfect!";
  return "Keep going! Every word learned is progress!";
}

/* ── Component ───────────────────────────────────────────── */
export default function PracticePage() {
  const [allQuestions, setAllQuestions] = useState<PracticeQuestion[]>([]);
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [mastered, setMastered] = useState<MasteredData>({ masteredIds: [], totalSessions: 0 });
  const [screen, setScreen] = useState<"loading" | "game" | "summary">("loading");
  const [sessionMastered, setSessionMastered] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const trackedStart = useRef(false);

  /* Fetch questions once */
  useEffect(() => {
    if (!trackedStart.current) {
      trackGameStart("lexi_practice");
      trackedStart.current = true;
    }
    setMastered(loadMastered());

    fetch("/api/word/practice")
      .then(r => r.json())
      .then(data => {
        if (data.questions && data.questions.length > 0) {
          setAllQuestions(data.questions);
          setQuestions(shuffle(data.questions));
          setScreen("game");
        } else {
          setError("No practice questions available yet.");
        }
      })
      .catch(() => setError("Failed to load practice questions."));
  }, []);

  /* Start a new round (reuse fetched data) */
  const playAgain = useCallback(() => {
    setQuestions(shuffle(allQuestions));
    setCurrentIdx(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setSessionMastered([]);
    setScreen("game");
  }, [allQuestions]);

  /* Answer a question */
  function answer(option: string) {
    if (revealed) return;
    setSelected(option);
    setRevealed(true);

    const q = questions[currentIdx];
    const correct = option === q.answer;
    if (correct) {
      setScore(s => s + 1);
      /* Track mastered */
      setMastered(prev => {
        if (prev.masteredIds.includes(q.id)) return prev;
        const updated = { ...prev, masteredIds: [...prev.masteredIds, q.id] };
        saveMastered(updated);
        return updated;
      });
      setSessionMastered(prev => prev.includes(q.id) ? prev : [...prev, q.id]);
    }
  }

  /* Go to next question or summary */
  function next() {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      const m = loadMastered();
      const updated = { ...m, totalSessions: m.totalSessions + 1 };
      saveMastered(updated);
      setMastered(updated);
      trackGamePlayed("lexi_practice", score, questions.length);
      setScreen("summary");
    }
  }

  const q = questions[currentIdx];

  /* ── Loading Screen ── */
  if (screen === "loading") {
    return (
      <main className="game-wrapper">
        <div className="game-content" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh", flexDirection: "column", gap: "16px" }}>
          {error ? (
            <>
              <p style={{ color: "var(--color-text-secondary)", textAlign: "center" }}>{error}</p>
              <Link href="/" className="next-btn" style={{ textDecoration: "none", textAlign: "center" }}>← Back Home</Link>
            </>
          ) : (
            <div className="loading-spinner" />
          )}
        </div>
      </main>
    );
  }

  /* ── Summary Screen ── */
  if (screen === "summary") {
    return (
      <main className="game-wrapper">
        <div className="game-content">

          {/* Header */}
          <div className="result-header">
            <Link href="/" className="result-back-link">‹ Home</Link>
            <span className="result-game-label">Practice Complete</span>
          </div>

          {/* Score */}
          <div className={`lexi-outcome ${score >= questions.length / 2 ? "lexi-outcome--correct" : "lexi-outcome--wrong"}`}>
            <span className="lexi-outcome-icon">{score >= questions.length / 2 ? "🎯" : "📚"}</span>
            <div>
              <p className="lexi-outcome-title">{score} / {questions.length} correct</p>
              <p className="lexi-outcome-sub">{getMotivation(score, questions.length)}</p>
            </div>
          </div>

          {/* Mastered count */}
          <div className="practice-summary-mastered">
            <div className="practice-summary-mastered-count">{mastered.masteredIds.length} / {allQuestions.length}</div>
            <p className="practice-summary-mastered-label">Words Mastered (all-time)</p>
            {sessionMastered.length > 0 && (
              <p style={{ fontSize: "0.8rem", color: "#4ade80", marginTop: "8px" }}>
                +{sessionMastered.length} new this session!
              </p>
            )}
          </div>

          {/* Session stats */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
            <div style={{ flex: 1, textAlign: "center", padding: "14px", borderRadius: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-text-primary)" }}>{mastered.totalSessions}</p>
              <p style={{ fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>Sessions Played</p>
            </div>
            <div style={{ flex: 1, textAlign: "center", padding: "14px", borderRadius: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-text-primary)" }}>{Math.round((score / questions.length) * 100)}%</p>
              <p style={{ fontSize: "0.75rem", color: "var(--color-text-tertiary)" }}>This Session</p>
            </div>
          </div>

          <button className="practice-play-again" onClick={playAgain}>Play Again</button>

          <Link href="/" style={{ display: "block", textAlign: "center", marginTop: "16px", fontSize: "0.85rem", color: "var(--color-text-tertiary)", textDecoration: "none" }}>
            ← Back to Home
          </Link>

        </div>
      </main>
    );
  }

  /* ── Game Screen ── */
  const isCorrect = selected === q.answer;

  return (
    <main className="game-wrapper">
      <div className="game-content">

        {/* Header */}
        <div className="game-header">
          <Link href="/" className="game-back-btn">‹</Link>
          <div className="game-header-center">
            <span className="game-header-name">Practice</span>
          </div>
          <span className="game-header-progress">{currentIdx + 1} / {questions.length}</span>
        </div>

        {/* Mastered progress bar */}
        <div className="practice-mastered-bar">
          <span className="practice-mastered-bar-label">Mastered</span>
          <div className="practice-mastered-bar-track">
            <div className="practice-mastered-bar-fill" style={{ width: `${(mastered.masteredIds.length / Math.max(allQuestions.length, 1)) * 100}%` }} />
          </div>
          <span className="practice-mastered-bar-count">{mastered.masteredIds.length}/{allQuestions.length}</span>
        </div>

        {/* Question type badge */}
        <span className={`practice-type-badge practice-type-badge--${q.question_type}`}>
          {BADGE_LABELS[q.question_type]}
        </span>

        {/* Prompt card */}
        <div className="lexi-definition-card">
          <p className="lexi-card-label">{q.prompt}</p>
          {q.question_type === "classic" && (
            <p className="lexi-card-definition">{q.definition}</p>
          )}
          {q.question_type === "reverse" && (
            <p className="practice-word-display">{q.word}</p>
          )}
          {q.question_type === "synonym" && (
            <p className="practice-word-display">{q.word}</p>
          )}
        </div>

        {/* Options */}
        <div className="options">
          {q.options.map((o, idx) => {
            const isCorrectOpt = o === q.answer;
            const isSelected = o === selected;
            let cls = "option";
            if (revealed) {
              if (isCorrectOpt)    cls += " option-correct";
              else if (isSelected) cls += " option-wrong";
              else                 cls += " option-disabled";
            }
            return (
              <button key={idx} className={cls} disabled={revealed} onClick={() => answer(o)}>
                <span className={`option-label ${revealed && isCorrectOpt ? "label-correct" : ""} ${revealed && isSelected && !isCorrectOpt ? "label-wrong" : ""}`}>
                  {optionLabels[idx]}
                </span>
                <span className="option-text">{o}</span>
                {revealed && isCorrectOpt && <span className="option-icon">✅</span>}
                {revealed && isSelected && !isCorrectOpt && <span className="option-icon">❌</span>}
              </button>
            );
          })}
        </div>

        {/* Explanation + Next */}
        {revealed && (
          <div className="explanation-box">
            <div className="explanation-header">
              <span className="explanation-icon">💡</span>
              <span className="explanation-title">Explanation</span>
            </div>
            <p className="explanation-text">{q.explanation}</p>
            <button className="next-btn" onClick={next}>
              {currentIdx < questions.length - 1 ? "Next Question →" : "See Results →"}
            </button>
          </div>
        )}

        {/* Progress bar */}
        <div className="practice-progress-bar">
          <div className="practice-progress-bar-track">
            <div className="practice-progress-bar-fill" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
          </div>
          <span className="practice-progress-bar-text">Question {currentIdx + 1} of {questions.length}</span>
        </div>

        <div className="floating-brand">P</div>
      </div>
    </main>
  );
}
