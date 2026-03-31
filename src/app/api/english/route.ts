// src/app/api/english/route.ts
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

// Launch date: Feb 24, 2026 — the first day_set served was 0
const LAUNCH_YEAR = 2026;
const LAUNCH_MONTH = 2; // February
const LAUNCH_DAY = 24;
const FIRST_SET = 0; // day_set value for launch day

/**
 * Automatically calculates today's day_set based on days since launch.
 * No hardcoded date map needed — just add questions to the DB with
 * sequential day_set values and they'll be served on the right day.
 *
 * Formula: day_set = FIRST_SET + daysSinceLaunch
 *
 * Examples:
 *   Feb 24, 2026 → 0 + 0  = 0
 *   Apr  8, 2026 → 0 + 43 = 43
 *   Apr  9, 2026 → 0 + 44 = 44  (just add questions with day_set 44)
 *   Apr 30, 2026 → 0 + 65 = 65
 *   May 31, 2026 → 0 + 96 = 96
 */
function getTodaySetIndex(): number {
  // Get today's date in IST (Asia/Kolkata)
  const todayIST = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Kolkata",
  });
  const [y, m, d] = todayIST.split("-").map(Number);

  // Use UTC to calculate clean day difference (no DST issues)
  const todayMs = Date.UTC(y, m - 1, d);
  const launchMs = Date.UTC(LAUNCH_YEAR, LAUNCH_MONTH - 1, LAUNCH_DAY);

  const daysSinceLaunch = Math.floor((todayMs - launchMs) / 86400000);

  if (daysSinceLaunch < 0) return FIRST_SET;
  return FIRST_SET + daysSinceLaunch;
}

export async function GET() {
  try {
    const setIndex = getTodaySetIndex();

    // Fetch today's 5 questions
    const { data, error } = await supabase
      .from("english_questions")
      .select("*")
      .eq("day_set", setIndex)
      .order("id", { ascending: true });

    if (error) {
      console.error("Supabase query error:", error);
      return NextResponse.json(
        { error: "Failed to fetch questions" },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "No questions found for today" },
        { status: 404 }
      );
    }

    // Transform to flat English-only format
    const questions = data.map((row) => ({
      question: row.question,
      options: row.options,
      answer: row.answer,
      explanation: row.explanation,
      hint: row.hint || null,
      category: row.category || null,
    }));

    return NextResponse.json(questions);
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
