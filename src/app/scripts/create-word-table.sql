-- ============================================================
-- Lexi (Guess the Word) — word_questions table
-- One question per day: definition → pick the correct word
-- ============================================================

CREATE TABLE IF NOT EXISTS word_questions (
  id          SERIAL PRIMARY KEY,
  day_set     INTEGER NOT NULL,        -- matches DATE_TO_SET index
  definition  TEXT    NOT NULL,        -- shown to the user
  options     TEXT[]  NOT NULL,        -- 4 answer choices
  answer      TEXT    NOT NULL,        -- correct word
  explanation TEXT    NOT NULL,        -- why this word is correct
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Fast lookup by day_set
CREATE INDEX IF NOT EXISTS idx_word_questions_day_set ON word_questions(day_set);

-- Row Level Security
ALTER TABLE word_questions ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Allow public read on word_questions"
  ON word_questions FOR SELECT
  USING (true);
