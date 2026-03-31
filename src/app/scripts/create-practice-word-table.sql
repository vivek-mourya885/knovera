-- ============================================================
-- Lexi Practice Mode — practice_word_questions table
-- 100 questions across 3 types: classic, reverse, synonym
-- Separate from daily word_questions to keep content independent
-- ============================================================

CREATE TABLE IF NOT EXISTS practice_word_questions (
  id             SERIAL PRIMARY KEY,
  question_type  TEXT    NOT NULL CHECK (question_type IN ('classic', 'reverse', 'synonym')),
  word           TEXT    NOT NULL,
  definition     TEXT    NOT NULL,
  synonym        TEXT,                    -- only populated for synonym-type questions
  options        TEXT[]  NOT NULL,        -- 4 answer choices
  answer         TEXT    NOT NULL,        -- correct option
  prompt         TEXT    NOT NULL,        -- the question shown to the user
  explanation    TEXT    NOT NULL,
  created_at     TIMESTAMPTZ DEFAULT now()
);

-- Row Level Security
ALTER TABLE practice_word_questions ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Allow public read on practice_word_questions"
  ON practice_word_questions FOR SELECT
  USING (true);
