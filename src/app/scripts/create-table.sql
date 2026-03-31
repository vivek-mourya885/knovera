-- Run this SQL in Supabase SQL Editor (Dashboard > SQL Editor > New Query)

-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  day_set INTEGER NOT NULL,
  question_en TEXT NOT NULL,
  question_hi TEXT NOT NULL,
  options_en TEXT[] NOT NULL,
  options_hi TEXT[] NOT NULL,
  answer_en TEXT NOT NULL,
  answer_hi TEXT NOT NULL,
  explanation_en TEXT NOT NULL,
  explanation_hi TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for fast daily set lookups
CREATE INDEX IF NOT EXISTS idx_questions_day_set ON questions(day_set);

-- Allow public read access (anon key can SELECT)
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON questions
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Allow insert for the seed script (service role or authenticated)
CREATE POLICY "Allow insert for authenticated"
  ON questions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
