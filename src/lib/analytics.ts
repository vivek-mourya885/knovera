// src/lib/analytics.ts

// ============ GOOGLE ANALYTICS EVENT TRACKER ============

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Send custom event to Google Analytics
 */
function sendEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", eventName, params);
}

// ============ PAGE EVENTS ============

/** Track when user visits home page */
export function trackHomeVisit() {
  sendEvent("home_visit", {
    page: "home",
    timestamp: new Date().toISOString(),
  });
}

/** Track when user clicks Play Today */
export function trackPlayClick() {
  sendEvent("play_click", {
    page: "home",
    action: "play_today_clicked",
  });
}

// ============ GAME EVENTS ============

type GameName = "pulse" | "lexi" | "fluent" | "lexi_practice";

/** Track when a game page is opened */
export function trackGameStart(game: GameName) {
  sendEvent("game_start", {
    game_name: game,
    date: new Date().toISOString().split("T")[0],
  });
}

/** Track when a game is completed */
export function trackGamePlayed(game: GameName, score: number, total: number) {
  sendEvent("game_played", {
    game_name: game,
    score,
    total,
    percentage: Math.round((score / total) * 100),
    date: new Date().toISOString().split("T")[0],
  });
}

/** Track when user answers a question */
export function trackAnswer(
  questionNumber: number,
  isCorrect: boolean,
  timeRemaining: number,
  language: string
) {
  sendEvent("question_answered", {
    question_number: questionNumber,
    is_correct: isCorrect,
    time_remaining: timeRemaining,
    language: language,
  });
}

/** Track when timer runs out */
export function trackTimeout(questionNumber: number) {
  sendEvent("question_timeout", {
    question_number: questionNumber,
  });
}

/** Track language switch */
export function trackLanguageSwitch(newLanguage: string) {
  sendEvent("language_switch", {
    new_language: newLanguage,
  });
}

// ============ RESULT EVENTS ============

/** Track game completion */
export function trackGameComplete(
  score: number,
  total: number,
  kpEarned: number,
  level: number
) {
  sendEvent("game_complete", {
    score: score,
    total: total,
    percentage: Math.round((score / total) * 100),
    kp_earned: kpEarned,
    level: level,
    date: new Date().toISOString().split("T")[0],
  });
}

/** Track score share */
export function trackShare(method: "native" | "clipboard") {
  sendEvent("score_shared", {
    method: method,
  });
}

/** Track swipe card interaction */
export function trackSwipeCard(cardIndex: number) {
  sendEvent("swipe_card_viewed", {
    card_index: cardIndex,
  });
}

/** Track back home click */
export function trackBackHome() {
  sendEvent("back_home_clicked", {
    page: "result",
  });
}

// ============ RETENTION EVENTS ============

/** Track returning user */
export function trackReturningUser(streak: number, totalPlayed: number) {
  sendEvent("returning_user", {
    current_streak: streak,
    total_played: totalPlayed,
  });
}

/** Track perfect score */
export function trackPerfectScore(perfectStreak: number) {
  sendEvent("perfect_score", {
    perfect_streak: perfectStreak,
  });
}