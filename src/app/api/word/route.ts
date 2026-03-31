// src/app/api/word/route.ts
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

// Launch date: Feb 24, 2026 — the first day_set served was 9
const LAUNCH_YEAR = 2026;
const LAUNCH_MONTH = 2; // February
const LAUNCH_DAY = 24;
const FIRST_SET = 9; // day_set value for launch day

/**
 * Automatically calculates today's day_set based on days since launch.
 * No hardcoded date map needed — just add word questions to the DB with
 * sequential day_set values and they'll be served on the right day.
 *
 * Formula: day_set = FIRST_SET + daysSinceLaunch
 *
 * Examples:
 *   Feb 24, 2026 → 9 + 0  = 9
 *   Mar 30, 2026 → 9 + 34 = 43
 *   Mar 31, 2026 → 9 + 35 = 44  (just add a word with day_set 44)
 *   Apr 30, 2026 → 9 + 65 = 74
 *   May 31, 2026 → 9 + 96 = 105
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

    // Fetch today's word question
    const { data, error } = await supabase
      .from("word_questions")
      .select("*")
      .eq("day_set", setIndex)
      .single();

    if (error || !data) {
      console.error("Supabase query error:", error);
      return NextResponse.json(
        { error: "No word question found for today" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      definition: data.definition,
      options: data.options,
      answer: data.answer,
      explanation: data.explanation,
    });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
