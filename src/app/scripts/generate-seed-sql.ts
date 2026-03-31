// Generate SQL INSERT statements from questions data
// Run with: npx tsx src/app/scripts/generate-seed-sql.ts

import { ALL_QUESTIONS } from "../../lib/questions";
import { writeFileSync } from "fs";
import { join } from "path";

function escapeSQL(str: string): string {
  return str.replace(/'/g, "''");
}

function formatArray(arr: string[]): string {
  return `ARRAY[${arr.map((s) => `'${escapeSQL(s)}'`).join(", ")}]`;
}

let sql = "-- Auto-generated seed data for questions table\n";
sql += "-- Run this in Supabase SQL Editor\n\n";

// Generate in batches for readability
const BATCH_SIZE = 10;

for (let i = 0; i < ALL_QUESTIONS.length; i += BATCH_SIZE) {
  const batch = ALL_QUESTIONS.slice(i, i + BATCH_SIZE);

  sql += `INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi) VALUES\n`;

  const values = batch.map((q, idx) => {
    const daySet = Math.floor((i + idx) / 5);
    return `  (${daySet}, '${escapeSQL(q.question.en)}', '${escapeSQL(q.question.hi)}', ${formatArray(q.options.en)}, ${formatArray(q.options.hi)}, '${escapeSQL(q.answer.en)}', '${escapeSQL(q.answer.hi)}', '${escapeSQL(q.explanation.en)}', '${escapeSQL(q.explanation.hi)}')`;
  });

  sql += values.join(",\n") + ";\n\n";
}

const outputPath = join(__dirname, "seed-data.sql");
writeFileSync(outputPath, sql, "utf-8");
console.log(`✅ Generated ${ALL_QUESTIONS.length} question INSERTs → ${outputPath}`);
