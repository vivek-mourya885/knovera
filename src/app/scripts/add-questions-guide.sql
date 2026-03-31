-- ============================================================
-- KNOVERA — How to Add Questions for New Months
-- ============================================================
-- The system is now AUTOMATIC. Just INSERT questions with the
-- correct day_set value and they will be served on that date.
-- NO CODE CHANGES NEEDED!
--
-- Formula:
--   day_set = FIRST_SET + (days since Feb 24, 2026)
--
--   GK (questions table):      FIRST_SET = 9
--   Word (word_questions):     FIRST_SET = 9
--   English (english_questions): FIRST_SET = 0
-- ============================================================

-- ============================================================
-- DATE → day_set REFERENCE for GK & WORD (FIRST_SET = 9)
-- ============================================================
-- Already done: Feb 24 → Mar 30 (day_set 9–43)
--
-- MARCH 2026 (remaining):
--   Mar 31 → day_set 44
--
-- APRIL 2026:
--   Apr 01 → day_set 45    Apr 11 → day_set 55    Apr 21 → day_set 65
--   Apr 02 → day_set 46    Apr 12 → day_set 56    Apr 22 → day_set 66
--   Apr 03 → day_set 47    Apr 13 → day_set 57    Apr 23 → day_set 67
--   Apr 04 → day_set 48    Apr 14 → day_set 58    Apr 24 → day_set 68
--   Apr 05 → day_set 49    Apr 15 → day_set 59    Apr 25 → day_set 69
--   Apr 06 → day_set 50    Apr 16 → day_set 60    Apr 26 → day_set 70
--   Apr 07 → day_set 51    Apr 17 → day_set 61    Apr 27 → day_set 71
--   Apr 08 → day_set 52    Apr 18 → day_set 62    Apr 28 → day_set 72
--   Apr 09 → day_set 53    Apr 19 → day_set 63    Apr 29 → day_set 73
--   Apr 10 → day_set 54    Apr 20 → day_set 64    Apr 30 → day_set 74
--
-- MAY 2026:
--   May 01 → day_set 75    May 11 → day_set 85    May 21 → day_set 95
--   May 02 → day_set 76    May 12 → day_set 86    May 22 → day_set 96
--   May 03 → day_set 77    May 13 → day_set 87    May 23 → day_set 97
--   May 04 → day_set 78    May 14 → day_set 88    May 24 → day_set 98
--   May 05 → day_set 79    May 15 → day_set 89    May 25 → day_set 99
--   May 06 → day_set 80    May 16 → day_set 90    May 26 → day_set 100
--   May 07 → day_set 81    May 17 → day_set 91    May 27 → day_set 101
--   May 08 → day_set 82    May 18 → day_set 92    May 28 → day_set 102
--   May 09 → day_set 83    May 19 → day_set 93    May 29 → day_set 103
--   May 10 → day_set 84    May 20 → day_set 94    May 30 → day_set 104
--                                                   May 31 → day_set 105

-- ============================================================
-- DATE → day_set REFERENCE for ENGLISH (FIRST_SET = 0)
-- ============================================================
-- Already done: Feb 24 → Apr 8 (day_set 0–43)
--
-- APRIL 2026 (remaining):
--   Apr 09 → day_set 44    Apr 16 → day_set 51    Apr 23 → day_set 58
--   Apr 10 → day_set 45    Apr 17 → day_set 52    Apr 24 → day_set 59
--   Apr 11 → day_set 46    Apr 18 → day_set 53    Apr 25 → day_set 60
--   Apr 12 → day_set 47    Apr 19 → day_set 54    Apr 26 → day_set 61
--   Apr 13 → day_set 48    Apr 20 → day_set 55    Apr 27 → day_set 62
--   Apr 14 → day_set 49    Apr 21 → day_set 56    Apr 28 → day_set 63
--   Apr 15 → day_set 50    Apr 22 → day_set 57    Apr 29 → day_set 64
--                                                   Apr 30 → day_set 65
--
-- MAY 2026:
--   May 01 → day_set 66    May 11 → day_set 76    May 21 → day_set 86
--   May 02 → day_set 67    May 12 → day_set 77    May 22 → day_set 87
--   May 03 → day_set 68    May 13 → day_set 78    May 23 → day_set 88
--   May 04 → day_set 69    May 14 → day_set 79    May 24 → day_set 89
--   May 05 → day_set 70    May 15 → day_set 80    May 25 → day_set 90
--   May 06 → day_set 71    May 16 → day_set 81    May 26 → day_set 91
--   May 07 → day_set 72    May 17 → day_set 82    May 27 → day_set 92
--   May 08 → day_set 73    May 18 → day_set 83    May 28 → day_set 93
--   May 09 → day_set 74    May 19 → day_set 84    May 29 → day_set 94
--   May 10 → day_set 75    May 20 → day_set 85    May 30 → day_set 95
--                                                   May 31 → day_set 96


-- ============================================================
-- TEMPLATE: Insert GK Questions (5 per day_set)
-- ============================================================
-- Copy this block for each day. Change the day_set number.
-- Each day needs exactly 5 questions.

/*
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(44, 'English question 1?', 'Hindi question 1?',
 ARRAY['Option A','Option B','Option C','Option D'],
 ARRAY['विकल्प A','विकल्प B','विकल्प C','विकल्प D'],
 'Option A', 'विकल्प A',
 'English explanation', 'Hindi explanation'),

(44, 'English question 2?', 'Hindi question 2?',
 ARRAY['Option A','Option B','Option C','Option D'],
 ARRAY['विकल्प A','विकल्प B','विकल्प C','विकल्प D'],
 'Option A', 'विकल्प A',
 'English explanation', 'Hindi explanation'),

(44, 'English question 3?', 'Hindi question 3?',
 ARRAY['Option A','Option B','Option C','Option D'],
 ARRAY['विकल्प A','विकल्प B','विकल्प C','विकल्प D'],
 'Option A', 'विकल्प A',
 'English explanation', 'Hindi explanation'),

(44, 'English question 4?', 'Hindi question 4?',
 ARRAY['Option A','Option B','Option C','Option D'],
 ARRAY['विकल्प A','विकल्प B','विकल्प C','विकल्प D'],
 'Option A', 'विकल्प A',
 'English explanation', 'Hindi explanation'),

(44, 'English question 5?', 'Hindi question 5?',
 ARRAY['Option A','Option B','Option C','Option D'],
 ARRAY['विकल्प A','विकल्प B','विकल्प C','विकल्प D'],
 'Option A', 'विकल्प A',
 'English explanation', 'Hindi explanation');
*/


-- ============================================================
-- TEMPLATE: Insert Word Questions (1 per day_set)
-- ============================================================

/*
INSERT INTO word_questions (day_set, definition, options, answer, explanation)
VALUES
(44, 'The definition of the word', ARRAY['Word A','Word B','Word C','Word D'], 'Word A', 'Explanation of why this is correct');
*/


-- ============================================================
-- TEMPLATE: Insert English Questions (5 per day_set)
-- ============================================================

/*
INSERT INTO english_questions (day_set, question, options, answer, explanation, hint, category)
VALUES
(44, 'She has been living here ___ 2010.', ARRAY['since','for','from','by'], 'since', 'We use "since" with a specific point in time.', 'Point in time vs duration', 'Preposition'),
(44, 'Question 2 with ___', ARRAY['a','b','c','d'], 'a', 'Explanation', 'Hint', 'Category'),
(44, 'Question 3 with ___', ARRAY['a','b','c','d'], 'a', 'Explanation', 'Hint', 'Category'),
(44, 'Question 4 with ___', ARRAY['a','b','c','d'], 'a', 'Explanation', 'Hint', 'Category'),
(44, 'Question 5 with ___', ARRAY['a','b','c','d'], 'a', 'Explanation', 'Hint', 'Category');
*/


-- ============================================================
-- QUICK CHECK: See what day_set is needed for any future date
-- ============================================================
-- Run this in Supabase SQL Editor to calculate day_set for any date:

-- For GK & Word (FIRST_SET = 9):
-- SELECT 9 + ('2026-04-15'::date - '2026-02-24'::date) AS day_set;
-- Result: 59

-- For English (FIRST_SET = 0):
-- SELECT 0 + ('2026-04-15'::date - '2026-02-24'::date) AS day_set;
-- Result: 50

-- ============================================================
-- VERIFY: Check which dates already have questions
-- ============================================================
-- SELECT day_set, COUNT(*) as q_count FROM questions GROUP BY day_set ORDER BY day_set;
-- SELECT day_set, COUNT(*) as q_count FROM word_questions GROUP BY day_set ORDER BY day_set;
-- SELECT day_set, COUNT(*) as q_count FROM english_questions GROUP BY day_set ORDER BY day_set;
