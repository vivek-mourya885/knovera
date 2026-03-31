// Seed script — run with: npx tsx src/app/scripts/seed-questions.ts
// This reads ALL_QUESTIONS from the existing questions.ts and inserts them into Supabase.

import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

// Import the questions from the existing file
import { ALL_QUESTIONS } from "../../lib/questions";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log(`📦 Found ${ALL_QUESTIONS.length} questions (${Math.floor(ALL_QUESTIONS.length / 5)} daily sets)`);

  // Transform into DB rows
  const rows = ALL_QUESTIONS.map((q, index) => ({
    day_set: Math.floor(index / 5),
    question_en: q.question.en,
    question_hi: q.question.hi,
    options_en: q.options.en,
    options_hi: q.options.hi,
    answer_en: q.answer.en,
    answer_hi: q.answer.hi,
    explanation_en: q.explanation.en,
    explanation_hi: q.explanation.hi,
  }));

  // Insert in batches of 50
  const BATCH_SIZE = 50;
  let inserted = 0;

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);
    const { error } = await supabase.from("questions").insert(batch);

    if (error) {
      console.error(`❌ Error inserting batch starting at index ${i}:`, error.message);
      process.exit(1);
    }

    inserted += batch.length;
    console.log(`✅ Inserted ${inserted}/${rows.length} questions...`);
  }

  console.log(`\n🎉 Done! All ${rows.length} questions inserted into Supabase.`);
}

main().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
