// src/app/scripts/seed-word-questions.ts
// Run: npx tsx src/app/scripts/seed-word-questions.ts

import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// ─────────────────────────────────────────────────────────────
// 35 curated vocabulary questions
// day_set 9  → Feb 24, 2026
// day_set 43 → Mar 30, 2026
// ─────────────────────────────────────────────────────────────
const WORD_QUESTIONS = [
  {
    day_set: 9,
    definition: "No longer in use; outdated",
    options: ["Modern", "Ancient", "Obsolete", "Temporary"],
    answer: "Obsolete",
    explanation: "Obsolete describes something no longer in use or out of date. Technology often becomes obsolete as newer innovations emerge.",
  },
  {
    day_set: 10,
    definition: "Lasting for only a very short time; fleeting",
    options: ["Permanent", "Ephemeral", "Eternal", "Durable"],
    answer: "Ephemeral",
    explanation: "Ephemeral comes from Greek meaning 'lasting only a day'. It describes things that are fleeting, like a rainbow or a soap bubble.",
  },
  {
    day_set: 11,
    definition: "Fluent and persuasive in speaking or writing",
    options: ["Verbose", "Eloquent", "Blunt", "Vague"],
    answer: "Eloquent",
    explanation: "Eloquent describes someone who expresses ideas clearly and persuasively. A great orator is often called eloquent.",
  },
  {
    day_set: 12,
    definition: "Holding firmly to something; persistent and determined",
    options: ["Fickle", "Passive", "Tenacious", "Timid"],
    answer: "Tenacious",
    explanation: "Tenacious means persistent and determined. A tenacious person holds on to their goals despite difficulties or opposition.",
  },
  {
    day_set: 13,
    definition: "Open to more than one interpretation; unclear",
    options: ["Definite", "Precise", "Ambiguous", "Literal"],
    answer: "Ambiguous",
    explanation: "Ambiguous describes something that can be understood in more than one way. Ambiguity often causes confusion in communication.",
  },
  {
    day_set: 14,
    definition: "Showing great attention to detail; extremely careful and precise",
    options: ["Careless", "Hasty", "Meticulous", "Casual"],
    answer: "Meticulous",
    explanation: "Meticulous means being extremely careful and precise about details. A meticulous person leaves nothing to chance.",
  },
  {
    day_set: 15,
    definition: "Dealing with things in a sensible and realistic way; practical",
    options: ["Idealistic", "Pragmatic", "Dreamy", "Impractical"],
    answer: "Pragmatic",
    explanation: "Pragmatic means focusing on practical solutions rather than ideals. A pragmatic leader makes decisions based on what actually works.",
  },
  {
    day_set: 16,
    definition: "Well-meaning and kindly; wishing good to others",
    options: ["Malevolent", "Selfish", "Benevolent", "Indifferent"],
    answer: "Benevolent",
    explanation: "Benevolent means kind and generous in nature. A benevolent person or organization acts for the benefit of others.",
  },
  {
    day_set: 17,
    definition: "Truthful and straightforward; frank and honest",
    options: ["Deceitful", "Reserved", "Candid", "Evasive"],
    answer: "Candid",
    explanation: "Candid means being honest and direct, even when the truth is uncomfortable. A candid conversation leaves nothing hidden.",
  },
  {
    day_set: 18,
    definition: "Having or showing steady effort and care; hardworking",
    options: ["Lazy", "Diligent", "Reckless", "Negligent"],
    answer: "Diligent",
    explanation: "Diligent means working carefully and persistently. A diligent student studies regularly and pays close attention to their work.",
  },
  {
    day_set: 19,
    definition: "Able to recover quickly from difficulties; tough and adaptable",
    options: ["Fragile", "Rigid", "Weak", "Resilient"],
    answer: "Resilient",
    explanation: "Resilient describes the ability to bounce back from adversity. Resilient people adapt and recover when faced with setbacks.",
  },
  {
    day_set: 20,
    definition: "Showing willingness to take bold risks; daring and fearless",
    options: ["Timid", "Cautious", "Audacious", "Hesitant"],
    answer: "Audacious",
    explanation: "Audacious means extremely bold and daring. An audacious plan is one that is ambitious and shows no fear.",
  },
  {
    day_set: 21,
    definition: "Expressed clearly and easy to understand; coherent",
    options: ["Confusing", "Vague", "Lucid", "Complex"],
    answer: "Lucid",
    explanation: "Lucid means perfectly clear and easy to understand. A lucid explanation leaves no room for confusion.",
  },
  {
    day_set: 22,
    definition: "Refusing to be persuaded or to change one's mind; unshakeable",
    options: ["Flexible", "Wavering", "Adamant", "Agreeable"],
    answer: "Adamant",
    explanation: "Adamant means absolutely firm in attitude or opinion. Being adamant means you will not change your position no matter what.",
  },
  {
    day_set: 23,
    definition: "Using more words than necessary; overly wordy",
    options: ["Concise", "Brief", "Verbose", "Silent"],
    answer: "Verbose",
    explanation: "Verbose means using an excessive number of words. A verbose speaker or writer often loses the audience's attention.",
  },
  {
    day_set: 24,
    definition: "Sparing or economical with money; not wasteful",
    options: ["Lavish", "Generous", "Frugal", "Extravagant"],
    answer: "Frugal",
    explanation: "Frugal means being economical and avoiding waste. A frugal person spends money wisely and avoids unnecessary expenses.",
  },
  {
    day_set: 25,
    definition: "Calm, peaceful, and not easily upset or disturbed",
    options: ["Anxious", "Turbulent", "Agitated", "Placid"],
    answer: "Placid",
    explanation: "Placid describes a calm and peaceful disposition. A placid lake has smooth, undisturbed water — just like a placid person.",
  },
  {
    day_set: 26,
    definition: "Having a strong desire to know and learn things; curious",
    options: ["Indifferent", "Inquisitive", "Apathetic", "Bored"],
    answer: "Inquisitive",
    explanation: "Inquisitive means curious and eager to learn. An inquisitive mind always asks questions and seeks to understand the world.",
  },
  {
    day_set: 27,
    definition: "Unconventional and slightly strange in behavior or appearance",
    options: ["Normal", "Conventional", "Eccentric", "Ordinary"],
    answer: "Eccentric",
    explanation: "Eccentric describes someone whose behavior or ideas are unusual or odd. Many great artists and thinkers were considered eccentric.",
  },
  {
    day_set: 28,
    definition: "Giving a warning or sign that something bad is about to happen",
    options: ["Promising", "Cheerful", "Ominous", "Bright"],
    answer: "Ominous",
    explanation: "Ominous means suggesting that something bad is going to happen. Dark clouds gathering can be ominous signs of a coming storm.",
  },
  {
    day_set: 29,
    definition: "Calm, peaceful, and untroubled; utterly tranquil",
    options: ["Chaotic", "Turbulent", "Restless", "Serene"],
    answer: "Serene",
    explanation: "Serene means perfectly calm and at peace. A serene environment, like a quiet mountain lake, brings a sense of deep calm.",
  },
  {
    day_set: 30,
    definition: "Producing many works, results, or ideas; highly productive",
    options: ["Barren", "Idle", "Prolific", "Scarce"],
    answer: "Prolific",
    explanation: "Prolific means producing a great amount. A prolific writer publishes many books; a prolific inventor creates countless innovations.",
  },
  {
    day_set: 31,
    definition: "Generous and forgiving, especially toward a rival or enemy",
    options: ["Petty", "Spiteful", "Magnanimous", "Cruel"],
    answer: "Magnanimous",
    explanation: "Magnanimous means noble and generous in spirit. A magnanimous winner praises their opponent and shows no bitterness in victory.",
  },
  {
    day_set: 32,
    definition: "Not telling the truth; habitually dishonest and deceptive",
    options: ["Honest", "Truthful", "Sincere", "Mendacious"],
    answer: "Mendacious",
    explanation: "Mendacious means given to lying or deception. A mendacious person cannot be trusted because they habitually tell untruths.",
  },
  {
    day_set: 33,
    definition: "Wanting or devouring great quantities; extremely eager or greedy",
    options: ["Moderate", "Indifferent", "Voracious", "Satisfied"],
    answer: "Voracious",
    explanation: "Voracious means having a very strong appetite — for food, reading, or knowledge. A voracious reader finishes books in a single sitting.",
  },
  {
    day_set: 34,
    definition: "Having or showing keen mental judgment and wisdom",
    options: ["Foolish", "Naive", "Reckless", "Sagacious"],
    answer: "Sagacious",
    explanation: "Sagacious means wise, with the ability to make good judgments. A sagacious leader makes decisions based on insight and experience.",
  },
  {
    day_set: 35,
    definition: "Difficult to interpret or understand; mysterious and puzzling",
    options: ["Obvious", "Clear", "Enigmatic", "Simple"],
    answer: "Enigmatic",
    explanation: "Enigmatic means mysterious and difficult to understand. The Mona Lisa's smile is often described as enigmatic.",
  },
  {
    day_set: 36,
    definition: "Tending to talk a great deal; extremely talkative",
    options: ["Reserved", "Quiet", "Loquacious", "Taciturn"],
    answer: "Loquacious",
    explanation: "Loquacious means talking a lot. A loquacious person can speak on any topic at length and often dominates conversations.",
  },
  {
    day_set: 37,
    definition: "Brisk and cheerful readiness or willingness to do something",
    options: ["Reluctance", "Alacrity", "Laziness", "Hesitation"],
    answer: "Alacrity",
    explanation: "Alacrity means eager and enthusiastic willingness. When asked to do something enjoyable, people often respond with alacrity.",
  },
  {
    day_set: 38,
    definition: "A person who flatters important people to gain personal advantage",
    options: ["Critic", "Sycophant", "Mentor", "Adversary"],
    answer: "Sycophant",
    explanation: "A sycophant uses excessive flattery to gain favour. Also called a yes-man, they agree with everything a powerful person says.",
  },
  {
    day_set: 39,
    definition: "More than what is necessary or useful; excessive and redundant",
    options: ["Essential", "Necessary", "Required", "Superfluous"],
    answer: "Superfluous",
    explanation: "Superfluous means unnecessary or excessive. Removing superfluous words from a sentence makes it clearer and more powerful.",
  },
  {
    day_set: 40,
    definition: "Reserved or uncommunicative in speech; saying very little",
    options: ["Chatty", "Loquacious", "Taciturn", "Sociable"],
    answer: "Taciturn",
    explanation: "Taciturn describes someone who speaks very little. A taciturn person expresses feelings through action rather than words.",
  },
  {
    day_set: 41,
    definition: "Avoiding activity; having a dislike of work; habitually lazy",
    options: ["Active", "Diligent", "Energetic", "Indolent"],
    answer: "Indolent",
    explanation: "Indolent means avoiding work or exertion. An indolent person prefers rest and idleness over productive activity.",
  },
  {
    day_set: 42,
    definition: "Having a ready insight into things; keenly perceptive and shrewd",
    options: ["Oblivious", "Naive", "Perspicacious", "Clueless"],
    answer: "Perspicacious",
    explanation: "Perspicacious means having sharp insight and understanding. A perspicacious observer notices details and patterns others easily miss.",
  },
  {
    day_set: 43,
    definition: "Going beyond what is considered proper or appropriate; arrogantly bold",
    options: ["Cautious", "Uncertain", "Presumptuous", "Humble"],
    answer: "Presumptuous",
    explanation: "Presumptuous means behaving with too much confidence or entitlement, often overstepping boundaries or assuming something without permission.",
  },
];

async function seedWordQuestions() {
  console.log(`Seeding ${WORD_QUESTIONS.length} word questions...`);

  const { error } = await supabase
    .from("word_questions")
    .insert(WORD_QUESTIONS);

  if (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }

  console.log(`✅ Successfully seeded ${WORD_QUESTIONS.length} word questions (day_set 9–43)`);
}

seedWordQuestions();
