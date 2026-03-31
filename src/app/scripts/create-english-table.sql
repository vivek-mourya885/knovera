-- ============================================================
-- Fluent (Daily English Boost) — english_questions table
-- 5 questions per day_set, grammar fill-in-the-blank format
-- ============================================================

CREATE TABLE IF NOT EXISTS english_questions (
  id          SERIAL PRIMARY KEY,
  day_set     INTEGER NOT NULL,
  question    TEXT    NOT NULL,   -- sentence with blank (e.g. "She is afraid ___ dogs.")
  options     TEXT[]  NOT NULL,   -- 4 answer choices
  answer      TEXT    NOT NULL,   -- correct option
  explanation TEXT    NOT NULL,   -- why this answer is correct
  hint        TEXT,               -- optional grammar hint
  category    TEXT,               -- e.g. Preposition, Article, Tense
  created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_english_questions_day_set ON english_questions(day_set);

ALTER TABLE english_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read on english_questions"
  ON english_questions FOR SELECT
  USING (true);
