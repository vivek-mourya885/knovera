// src/app/api/word/practice/route.ts
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("practice_word_questions")
      .select("id, question_type, word, definition, synonym, options, answer, prompt, explanation");

    if (error) {
      console.error("Practice fetch error:", error);
      return NextResponse.json({ error: "Failed to fetch practice questions" }, { status: 500 });
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ error: "No practice questions found" }, { status: 404 });
    }

    return NextResponse.json({ questions: data });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
