// src/app/scripts/seed-english-questions.ts
// Run: npx tsx src/app/scripts/seed-english-questions.ts

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
// 44 day_sets × 5 questions = 220 English grammar questions
// day_set 0  → Feb 24, 2026
// day_set 43 → Apr 8, 2026
// Categories: Preposition, Article, Tense, Subject-Verb Agreement,
//   Conjunction, Pronoun, Adjective/Adverb, Modal Verb
// ─────────────────────────────────────────────────────────────

interface EnglishQuestion {
  day_set: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  hint: string | null;
  category: string;
}

const QUESTIONS: EnglishQuestion[] = [
  // ── Day Set 0 ──────────────────────────────────────────────
  { day_set: 0, question: "She is afraid ___ dogs.", options: ["of", "from", "by", "with"], answer: "of", explanation: "'Afraid of' is the correct collocation. We always say 'afraid of something'.", hint: "Think about what follows 'afraid'.", category: "Preposition" },
  { day_set: 0, question: "I have been waiting ___ two hours.", options: ["since", "for", "from", "during"], answer: "for", explanation: "'For' is used with a duration of time (two hours), while 'since' is used with a point in time.", hint: "Duration vs. point in time.", category: "Preposition" },
  { day_set: 0, question: "He ___ to school every day.", options: ["go", "goes", "going", "gone"], answer: "goes", explanation: "Third person singular (he/she/it) takes 'goes' in simple present tense.", hint: "Simple present, third person.", category: "Subject-Verb Agreement" },
  { day_set: 0, question: "___ sun rises in the east.", options: ["A", "An", "The", "No article"], answer: "The", explanation: "'The' is used for unique objects — there is only one sun.", hint: "Is there more than one sun?", category: "Article" },
  { day_set: 0, question: "She sings ___ than her sister.", options: ["good", "better", "best", "more good"], answer: "better", explanation: "'Better' is the comparative form of 'good/well'. We use comparatives with 'than'.", hint: "Comparative form needed.", category: "Adjective/Adverb" },

  // ── Day Set 1 ──────────────────────────────────────────────
  { day_set: 1, question: "I will call you ___ I arrive.", options: ["when", "while", "during", "until"], answer: "when", explanation: "'When' introduces a time clause for a specific moment. 'While' is for duration.", hint: "A specific moment, not a duration.", category: "Conjunction" },
  { day_set: 1, question: "Neither the teacher nor the students ___ present.", options: ["was", "were", "is", "has been"], answer: "were", explanation: "With 'neither...nor', the verb agrees with the nearest subject ('students' = plural).", hint: "Which subject is closer to the verb?", category: "Subject-Verb Agreement" },
  { day_set: 1, question: "She gave the book to ___.", options: ["I", "me", "my", "myself"], answer: "me", explanation: "After a preposition ('to'), we use the object pronoun 'me', not 'I'.", hint: "Object of a preposition.", category: "Pronoun" },
  { day_set: 1, question: "He ___ playing cricket since morning.", options: ["is", "was", "has been", "had been"], answer: "has been", explanation: "'Has been + -ing' forms the present perfect continuous, used for actions starting in the past and continuing now.", hint: "'Since' signals a tense that connects past to present.", category: "Tense" },
  { day_set: 1, question: "You ___ drive without a license.", options: ["mustn't", "needn't", "wouldn't", "couldn't"], answer: "mustn't", explanation: "'Mustn't' expresses prohibition — it is illegal to drive without a license.", hint: "Is this about permission or prohibition?", category: "Modal Verb" },

  // ── Day Set 2 ──────────────────────────────────────────────
  { day_set: 2, question: "She is good ___ mathematics.", options: ["in", "at", "on", "with"], answer: "at", explanation: "'Good at' is the correct collocation for skills and subjects.", hint: "Which preposition pairs with 'good' for skills?", category: "Preposition" },
  { day_set: 2, question: "___ honest man is respected by all.", options: ["A", "An", "The", "No article"], answer: "An", explanation: "'Honest' starts with a silent 'h', so the vowel sound requires 'an'.", hint: "How is the 'h' pronounced?", category: "Article" },
  { day_set: 2, question: "The children ___ in the garden now.", options: ["play", "plays", "are playing", "played"], answer: "are playing", explanation: "'Now' signals the present continuous tense: subject + are + verb-ing.", hint: "'Now' tells you the tense.", category: "Tense" },
  { day_set: 2, question: "This is the ___ movie I have ever seen.", options: ["bad", "worse", "worst", "more bad"], answer: "worst", explanation: "'Worst' is the superlative of 'bad'. 'Ever' signals we need the superlative form.", hint: "'Ever seen' needs a superlative.", category: "Adjective/Adverb" },
  { day_set: 2, question: "He ran fast ___ he could catch the bus.", options: ["so that", "because", "although", "unless"], answer: "so that", explanation: "'So that' expresses purpose — he ran fast for the purpose of catching the bus.", hint: "What was his purpose?", category: "Conjunction" },

  // ── Day Set 3 ──────────────────────────────────────────────
  { day_set: 3, question: "The news ___ very surprising.", options: ["are", "were", "is", "have been"], answer: "is", explanation: "'News' is an uncountable noun and always takes a singular verb.", hint: "Is 'news' singular or plural?", category: "Subject-Verb Agreement" },
  { day_set: 3, question: "I ___ rather stay home today.", options: ["would", "should", "could", "might"], answer: "would", explanation: "'Would rather' is a fixed expression meaning 'prefer to'.", hint: "___ rather = prefer to.", category: "Modal Verb" },
  { day_set: 3, question: "He depends ___ his parents for money.", options: ["at", "in", "on", "with"], answer: "on", explanation: "'Depend on' is the correct phrasal verb meaning 'to rely on'.", hint: "Which preposition completes 'depend ___'?", category: "Preposition" },
  { day_set: 3, question: "Each of the students ___ given a book.", options: ["was", "were", "are", "have been"], answer: "was", explanation: "'Each' is always singular, so it takes 'was' regardless of the following noun.", hint: "'Each' is always treated as ___.", category: "Subject-Verb Agreement" },
  { day_set: 3, question: "She speaks English ___.", options: ["fluent", "fluently", "fluence", "more fluent"], answer: "fluently", explanation: "An adverb ('fluently') is needed to modify the verb 'speaks'.", hint: "You need a word that modifies a verb.", category: "Adjective/Adverb" },

  // ── Day Set 4 ──────────────────────────────────────────────
  { day_set: 4, question: "If I ___ you, I would apologize.", options: ["am", "was", "were", "be"], answer: "were", explanation: "In second conditional (hypothetical), we use 'were' for all subjects: 'If I were you'.", hint: "Hypothetical condition uses a special form.", category: "Tense" },
  { day_set: 4, question: "He insisted ___ paying the bill.", options: ["on", "in", "at", "for"], answer: "on", explanation: "'Insist on' is the correct preposition combination.", hint: "Insist ___.", category: "Preposition" },
  { day_set: 4, question: "___ Himalayas are the highest mountain range.", options: ["A", "An", "The", "No article"], answer: "The", explanation: "We use 'the' with mountain ranges, rivers, and other geographical features.", hint: "Mountain ranges need an article.", category: "Article" },
  { day_set: 4, question: "She ___ cook well when she was young.", options: ["can", "could", "may", "might"], answer: "could", explanation: "'Could' is the past tense of 'can', expressing past ability.", hint: "'When she was young' tells you the tense.", category: "Modal Verb" },
  { day_set: 4, question: "Tom and Jerry ___ good friends.", options: ["is", "am", "are", "was"], answer: "are", explanation: "Two subjects joined by 'and' form a plural subject, requiring 'are'.", hint: "Two names = plural subject.", category: "Subject-Verb Agreement" },

  // ── Day Set 5 ──────────────────────────────────────────────
  { day_set: 5, question: "She looked at ___ in the mirror.", options: ["her", "herself", "she", "hers"], answer: "herself", explanation: "A reflexive pronoun is needed when the subject and object are the same person.", hint: "Subject = object → reflexive.", category: "Pronoun" },
  { day_set: 5, question: "The train had already ___ when we arrived.", options: ["leave", "left", "leaving", "leaves"], answer: "left", explanation: "Past perfect ('had + past participle') shows an action completed before another past action.", hint: "'Had already ___' = past perfect.", category: "Tense" },
  { day_set: 5, question: "I am looking forward ___ your reply.", options: ["for", "at", "to", "on"], answer: "to", explanation: "'Look forward to' is a fixed phrasal verb meaning 'eagerly await'.", hint: "Look forward ___.", category: "Preposition" },
  { day_set: 5, question: "He works ___ than anyone in the office.", options: ["hard", "harder", "hardest", "more hard"], answer: "harder", explanation: "'Harder' is the comparative form, required by 'than'.", hint: "'Than' needs a comparative.", category: "Adjective/Adverb" },
  { day_set: 5, question: "___ you study hard, you will fail.", options: ["If", "Unless", "When", "Because"], answer: "Unless", explanation: "'Unless' means 'if not'. The sentence warns of failure without studying.", hint: "Means 'if you do not'.", category: "Conjunction" },

  // ── Day Set 6 ──────────────────────────────────────────────
  { day_set: 6, question: "I ___ a strange noise last night.", options: ["hear", "heared", "heard", "hearing"], answer: "heard", explanation: "'Heard' is the simple past tense of 'hear'. 'Last night' signals past tense.", hint: "Irregular past tense of 'hear'.", category: "Tense" },
  { day_set: 6, question: "He is allergic ___ peanuts.", options: ["with", "from", "to", "by"], answer: "to", explanation: "'Allergic to' is the correct collocation.", hint: "Allergic ___ something.", category: "Preposition" },
  { day_set: 6, question: "___ apple a day keeps the doctor away.", options: ["A", "An", "The", "No article"], answer: "An", explanation: "'Apple' starts with a vowel sound, so 'an' is used.", hint: "Vowel sound at the start.", category: "Article" },
  { day_set: 6, question: "Everyone ___ their own opinion.", options: ["have", "has", "are having", "were having"], answer: "has", explanation: "'Everyone' is singular and takes 'has' in simple present.", hint: "'Everyone' is singular.", category: "Subject-Verb Agreement" },
  { day_set: 6, question: "You ___ see a doctor about that cough.", options: ["would", "could", "should", "might"], answer: "should", explanation: "'Should' is used for advice and recommendations.", hint: "Giving medical advice.", category: "Modal Verb" },

  // ── Day Set 7 ──────────────────────────────────────────────
  { day_set: 7, question: "I couldn't find my keys, so I looked ___ them everywhere.", options: ["at", "for", "after", "into"], answer: "for", explanation: "'Look for' means to search for something.", hint: "Search = look ___.", category: "Preposition" },
  { day_set: 7, question: "She is ___ intelligent ___ her brother.", options: ["as...as", "so...as", "more...as", "much...as"], answer: "as...as", explanation: "'As...as' is used for equal comparisons in affirmative sentences.", hint: "Equal comparison structure.", category: "Adjective/Adverb" },
  { day_set: 7, question: "By next year, I ___ graduated.", options: ["will", "will have", "would", "had"], answer: "will have", explanation: "Future perfect ('will have + past participle') for actions completed before a future point.", hint: "'By next year' signals future perfect.", category: "Tense" },
  { day_set: 7, question: "The book on the table is ___.", options: ["my", "me", "mine", "I"], answer: "mine", explanation: "'Mine' is a possessive pronoun that replaces 'my book'.", hint: "Possessive pronoun, not adjective.", category: "Pronoun" },
  { day_set: 7, question: "He came ___ it was raining heavily.", options: ["although", "because", "so", "therefore"], answer: "although", explanation: "'Although' introduces a contrast — he came despite the rain.", hint: "Shows contrast/concession.", category: "Conjunction" },

  // ── Day Set 8 ──────────────────────────────────────────────
  { day_set: 8, question: "She is married ___ a doctor.", options: ["with", "to", "by", "from"], answer: "to", explanation: "'Married to' is the correct preposition. We say 'married to someone'.", hint: "Married ___ someone.", category: "Preposition" },
  { day_set: 8, question: "Mathematics ___ my favourite subject.", options: ["are", "is", "were", "have been"], answer: "is", explanation: "'Mathematics' ends in '-s' but is a singular noun.", hint: "Subject names ending in -s are still singular.", category: "Subject-Verb Agreement" },
  { day_set: 8, question: "We ___ finish the project by Friday.", options: ["must", "would", "could", "might"], answer: "must", explanation: "'Must' expresses strong obligation or necessity.", hint: "Strong obligation.", category: "Modal Verb" },
  { day_set: 8, question: "He asked me where I ___.", options: ["live", "lived", "living", "lives"], answer: "lived", explanation: "In reported speech, present tense shifts to past: 'live' → 'lived'.", hint: "Reported speech shifts tense back.", category: "Tense" },
  { day_set: 8, question: "___ United Kingdom is in Europe.", options: ["A", "An", "The", "No article"], answer: "The", explanation: "'The' is used with country names that include 'Kingdom', 'Republic', 'States', etc.", hint: "Country names with 'Kingdom' need ___.", category: "Article" },

  // ── Day Set 9 ──────────────────────────────────────────────
  { day_set: 9, question: "She congratulated me ___ my success.", options: ["for", "on", "at", "about"], answer: "on", explanation: "'Congratulate someone on something' is the correct pattern.", hint: "Congratulate ___ something.", category: "Preposition" },
  { day_set: 9, question: "The cake smells ___.", options: ["deliciously", "delicious", "more deliciously", "deliciousness"], answer: "delicious", explanation: "After linking verbs (smells, tastes, looks), we use adjectives, not adverbs.", hint: "Linking verb + adjective.", category: "Adjective/Adverb" },
  { day_set: 9, question: "I wish I ___ taller.", options: ["am", "was", "were", "be"], answer: "were", explanation: "After 'wish' for unreal present situations, we use 'were' (subjunctive mood).", hint: "'Wish' takes a special form.", category: "Tense" },
  { day_set: 9, question: "Both the manager and the assistant ___ on leave.", options: ["is", "was", "are", "has been"], answer: "are", explanation: "'Both...and' always creates a plural subject.", hint: "'Both...and' = plural.", category: "Subject-Verb Agreement" },
  { day_set: 9, question: "She will help you ___ you ask her politely.", options: ["unless", "although", "if", "until"], answer: "if", explanation: "'If' introduces a condition: her help depends on asking politely.", hint: "Condition for help.", category: "Conjunction" },

  // ── Day Set 10 ─────────────────────────────────────────────
  { day_set: 10, question: "The letter was written ___ him.", options: ["from", "with", "by", "to"], answer: "by", explanation: "In passive voice, the doer is introduced by 'by'.", hint: "Passive voice agent.", category: "Preposition" },
  { day_set: 10, question: "I ___ swim when I was five years old.", options: ["can", "could", "may", "shall"], answer: "could", explanation: "'Could' expresses past ability.", hint: "Past ability.", category: "Modal Verb" },
  { day_set: 10, question: "She is one of the girls who ___ selected.", options: ["was", "were", "is", "has been"], answer: "were", explanation: "The relative pronoun 'who' refers to 'girls' (plural), so 'were' is correct.", hint: "'Who' refers to 'girls'.", category: "Subject-Verb Agreement" },
  { day_set: 10, question: "He ___ his homework before he went out.", options: ["finishes", "finished", "had finished", "has finished"], answer: "had finished", explanation: "Past perfect for an action completed before another past action.", hint: "Which happened first?", category: "Tense" },
  { day_set: 10, question: "This pen is not ___. It belongs to Sara.", options: ["my", "me", "mine", "I"], answer: "mine", explanation: "'Mine' is a possessive pronoun standing alone (= my pen).", hint: "Stands alone without a noun.", category: "Pronoun" },

  // ── Day Set 11 ─────────────────────────────────────────────
  { day_set: 11, question: "She is interested ___ learning French.", options: ["on", "at", "in", "for"], answer: "in", explanation: "'Interested in' is the correct collocation.", hint: "Interested ___ something.", category: "Preposition" },
  { day_set: 11, question: "We haven't met ___ last December.", options: ["for", "since", "from", "during"], answer: "since", explanation: "'Since' is used with a specific point in time (last December).", hint: "Point in time, not duration.", category: "Preposition" },
  { day_set: 11, question: "___ European country hosted the event.", options: ["A", "An", "The", "No article"], answer: "A", explanation: "'European' starts with a consonant sound /j/, so 'a' is used.", hint: "Listen to the first sound, not the letter.", category: "Article" },
  { day_set: 11, question: "She speaks ___ slowly ___ clearly.", options: ["both...and", "either...or", "neither...nor", "not only...but also"], answer: "both...and", explanation: "'Both...and' connects two qualities that are both true.", hint: "Both qualities apply.", category: "Conjunction" },
  { day_set: 11, question: "He ___ be at home; his car is in the driveway.", options: ["can", "must", "should", "would"], answer: "must", explanation: "'Must' here expresses logical deduction based on evidence.", hint: "Logical conclusion from evidence.", category: "Modal Verb" },

  // ── Day Set 12 ─────────────────────────────────────────────
  { day_set: 12, question: "The police ___ investigating the case.", options: ["is", "was", "are", "has been"], answer: "are", explanation: "'Police' is always treated as plural in English.", hint: "'Police' is always ___.", category: "Subject-Verb Agreement" },
  { day_set: 12, question: "She is ___ than her classmates.", options: ["intelligent", "more intelligent", "most intelligent", "intelligenter"], answer: "more intelligent", explanation: "Long adjectives use 'more' for comparatives. 'Than' signals comparison.", hint: "Long adjective + 'than'.", category: "Adjective/Adverb" },
  { day_set: 12, question: "I ___ reading a book when the phone rang.", options: ["am", "was", "were", "had been"], answer: "was", explanation: "Past continuous ('was + -ing') for an ongoing action interrupted by another.", hint: "Interrupted ongoing past action.", category: "Tense" },
  { day_set: 12, question: "Let ___ go to the park.", options: ["we", "us", "our", "ours"], answer: "us", explanation: "After 'let', we use the object pronoun 'us'.", hint: "'Let' takes an object pronoun.", category: "Pronoun" },
  { day_set: 12, question: "She went to the market ___ buy vegetables.", options: ["for", "to", "so", "because"], answer: "to", explanation: "'To + infinitive' expresses purpose.", hint: "Infinitive of purpose.", category: "Conjunction" },

  // ── Day Set 13 ─────────────────────────────────────────────
  { day_set: 13, question: "He is accused ___ theft.", options: ["for", "of", "with", "about"], answer: "of", explanation: "'Accused of' is the correct legal/formal collocation.", hint: "Accused ___ a crime.", category: "Preposition" },
  { day_set: 13, question: "I ___ like to have a cup of tea.", options: ["will", "would", "shall", "could"], answer: "would", explanation: "'Would like' is a polite way to express a wish or preference.", hint: "Polite request.", category: "Modal Verb" },
  { day_set: 13, question: "Neither of the answers ___ correct.", options: ["are", "is", "were", "have been"], answer: "is", explanation: "'Neither of' takes a singular verb.", hint: "'Neither of' = singular.", category: "Subject-Verb Agreement" },
  { day_set: 13, question: "She said that she ___ busy the day before.", options: ["is", "was", "has been", "had been"], answer: "had been", explanation: "In reported speech, past tense shifts to past perfect.", hint: "Reported speech: 'was' → ___.", category: "Tense" },
  { day_set: 13, question: "___ Mount Everest is in Nepal.", options: ["A", "An", "The", "No article"], answer: "No article", explanation: "Individual mountain peaks don't take an article (unlike mountain ranges).", hint: "Single peaks vs. ranges.", category: "Article" },

  // ── Day Set 14 ─────────────────────────────────────────────
  { day_set: 14, question: "She takes ___ her mother in looks.", options: ["after", "on", "up", "over"], answer: "after", explanation: "'Take after' means to resemble a family member.", hint: "Resemble = take ___.", category: "Preposition" },
  { day_set: 14, question: "The teacher told us ___ make noise.", options: ["don't", "not to", "to not", "didn't"], answer: "not to", explanation: "In reported commands, we use 'not to + infinitive'.", hint: "Reported negative command.", category: "Tense" },
  { day_set: 14, question: "This is the house ___ I was born.", options: ["which", "where", "that", "whose"], answer: "where", explanation: "'Where' is used for places in relative clauses.", hint: "Relative pronoun for places.", category: "Pronoun" },
  { day_set: 14, question: "He can run very ___.", options: ["quick", "quickly", "quicker", "quickest"], answer: "quickly", explanation: "An adverb ('quickly') is needed to modify the verb 'run'.", hint: "Modifying a verb needs an ___.", category: "Adjective/Adverb" },
  { day_set: 14, question: "I like tea ___ she prefers coffee.", options: ["and", "but", "so", "or"], answer: "but", explanation: "'But' shows contrast between two preferences.", hint: "Contrast between preferences.", category: "Conjunction" },

  // ── Day Set 15 ─────────────────────────────────────────────
  { day_set: 15, question: "We are accustomed ___ hard work.", options: ["for", "with", "to", "at"], answer: "to", explanation: "'Accustomed to' means being used to something.", hint: "Accustomed ___ = used ___.", category: "Preposition" },
  { day_set: 15, question: "A lot of water ___ wasted every day.", options: ["are", "is", "were", "have been"], answer: "is", explanation: "'Water' is uncountable, so it takes a singular verb.", hint: "Uncountable noun = singular verb.", category: "Subject-Verb Agreement" },
  { day_set: 15, question: "By the time you arrive, I ___ left.", options: ["will", "will have", "would", "shall"], answer: "will have", explanation: "Future perfect for an action that will be completed before another future event.", hint: "'By the time' signals future perfect.", category: "Tense" },
  { day_set: 15, question: "___ you help me carry this box?", options: ["Will", "Shall", "Could", "Must"], answer: "Could", explanation: "'Could' is the most polite way to make a request.", hint: "Polite request.", category: "Modal Verb" },
  { day_set: 15, question: "He is ___ honest man I know.", options: ["a most", "the most", "most", "more"], answer: "the most", explanation: "Superlative form ('the most') is needed with 'I know' (comparing all).", hint: "Comparing among all people you know.", category: "Adjective/Adverb" },

  // ── Day Set 16 ─────────────────────────────────────────────
  { day_set: 16, question: "She apologized ___ being late.", options: ["about", "for", "of", "on"], answer: "for", explanation: "'Apologize for' is the correct collocation.", hint: "Apologize ___ something.", category: "Preposition" },
  { day_set: 16, question: "The furniture ___ very expensive.", options: ["are", "is", "were", "have been"], answer: "is", explanation: "'Furniture' is an uncountable noun and takes a singular verb.", hint: "Uncountable = singular.", category: "Subject-Verb Agreement" },
  { day_set: 16, question: "I ___ go to the party if I finish my work.", options: ["would", "will", "could", "should"], answer: "will", explanation: "First conditional (real possibility): 'If + present, will + base verb'.", hint: "Real possibility = first conditional.", category: "Tense" },
  { day_set: 16, question: "She is the woman ___ car was stolen.", options: ["who", "whom", "whose", "which"], answer: "whose", explanation: "'Whose' is the possessive relative pronoun for people.", hint: "Possessive relative pronoun.", category: "Pronoun" },
  { day_set: 16, question: "He not only sings ___ also dances.", options: ["and", "but", "or", "yet"], answer: "but", explanation: "'Not only...but also' is a correlative conjunction pair.", hint: "Not only...___also.", category: "Conjunction" },

  // ── Day Set 17 ─────────────────────────────────────────────
  { day_set: 17, question: "She is fond ___ chocolates.", options: ["at", "of", "in", "with"], answer: "of", explanation: "'Fond of' is the correct collocation meaning 'to like'.", hint: "Fond ___ something.", category: "Preposition" },
  { day_set: 17, question: "___  Ganges is a sacred river.", options: ["A", "An", "The", "No article"], answer: "The", explanation: "'The' is used with names of rivers.", hint: "Rivers always take ___.", category: "Article" },
  { day_set: 17, question: "If he had studied, he ___ passed.", options: ["will have", "would have", "could", "should"], answer: "would have", explanation: "Third conditional (unreal past): 'If + had + PP, would have + PP'.", hint: "Unreal past = third conditional.", category: "Tense" },
  { day_set: 17, question: "Every boy and girl ___ a prize.", options: ["get", "gets", "are getting", "were getting"], answer: "gets", explanation: "'Every' makes the compound subject singular.", hint: "'Every' = singular.", category: "Subject-Verb Agreement" },
  { day_set: 17, question: "The movie was ___ boring that we left early.", options: ["very", "too", "so", "such"], answer: "so", explanation: "'So + adjective + that' is the correct pattern.", hint: "___ + adjective + that.", category: "Adjective/Adverb" },

  // ── Day Set 18 ─────────────────────────────────────────────
  { day_set: 18, question: "She prevented me ___ going there.", options: ["to", "from", "for", "against"], answer: "from", explanation: "'Prevent someone from doing something' is the correct pattern.", hint: "Prevent ___ doing.", category: "Preposition" },
  { day_set: 18, question: "You ___ to finish your homework before playing.", options: ["should", "ought", "must", "could"], answer: "ought", explanation: "'Ought to' expresses moral obligation or advice.", hint: "___ to = should.", category: "Modal Verb" },
  { day_set: 18, question: "The committee ___ divided in their opinion.", options: ["is", "was", "are", "has been"], answer: "are", explanation: "When 'committee' refers to individual members, it takes a plural verb.", hint: "Members acting individually = plural.", category: "Subject-Verb Agreement" },
  { day_set: 18, question: "She ___ here since 2019.", options: ["is living", "was living", "has been living", "had been living"], answer: "has been living", explanation: "Present perfect continuous for an action that started in the past and continues.", hint: "'Since 2019' connects past to now.", category: "Tense" },
  { day_set: 18, question: "He did the work all by ___.", options: ["him", "his", "himself", "he"], answer: "himself", explanation: "'By himself' means 'alone' — reflexive pronoun for emphasis.", hint: "By ___ = alone.", category: "Pronoun" },

  // ── Day Set 19 ─────────────────────────────────────────────
  { day_set: 19, question: "She is superior ___ her colleagues.", options: ["from", "than", "to", "over"], answer: "to", explanation: "'Superior to' is correct. Unlike most comparatives, 'superior' doesn't use 'than'.", hint: "Superior ___ (not 'than').", category: "Preposition" },
  { day_set: 19, question: "I ___ play the piano, but now I can't.", options: ["used to", "use to", "am used to", "was used to"], answer: "used to", explanation: "'Used to + base verb' describes past habits or states that no longer exist.", hint: "Past habit that stopped.", category: "Tense" },
  { day_set: 19, question: "___ umbrella is useful in the rain.", options: ["A", "An", "The", "No article"], answer: "An", explanation: "'Umbrella' starts with a vowel sound, so 'an' is used.", hint: "Vowel sound at the start.", category: "Article" },
  { day_set: 19, question: "She walks ___ than her friend.", options: ["more slowly", "more slow", "slowlier", "most slowly"], answer: "more slowly", explanation: "Two-syllable adverbs ending in '-ly' use 'more' for comparatives.", hint: "Adverb comparative with 'more'.", category: "Adjective/Adverb" },
  { day_set: 19, question: "He stayed home ___ he was feeling unwell.", options: ["so", "because", "although", "but"], answer: "because", explanation: "'Because' gives the reason for staying home.", hint: "Reason/cause.", category: "Conjunction" },

  // ── Day Set 20 ─────────────────────────────────────────────
  { day_set: 20, question: "The scissors ___ on the table.", options: ["is", "was", "are", "has been"], answer: "are", explanation: "'Scissors' is always plural and takes a plural verb.", hint: "Always plural.", category: "Subject-Verb Agreement" },
  { day_set: 20, question: "You ___ not worry about the exam.", options: ["need", "dare", "must", "shall"], answer: "need", explanation: "'Need not' means 'it is not necessary'. It's a semi-modal verb.", hint: "Not necessary = ___ not.", category: "Modal Verb" },
  { day_set: 20, question: "He jumped ___ the wall and ran away.", options: ["above", "on", "over", "upon"], answer: "over", explanation: "'Over' indicates movement from one side to the other.", hint: "Movement across a barrier.", category: "Preposition" },
  { day_set: 20, question: "She asked ___ I had seen her keys.", options: ["that", "if", "what", "which"], answer: "if", explanation: "'If' introduces indirect yes/no questions in reported speech.", hint: "Indirect yes/no question.", category: "Pronoun" },
  { day_set: 20, question: "The exam was ___ difficult that nobody passed.", options: ["very", "too", "so", "such"], answer: "so", explanation: "'So + adjective + that' describes a result.", hint: "___ + adjective + that + result.", category: "Adjective/Adverb" },

  // ── Day Set 21 ─────────────────────────────────────────────
  { day_set: 21, question: "She differs ___ her sister in many ways.", options: ["with", "to", "from", "by"], answer: "from", explanation: "'Differ from' is the correct collocation meaning 'to be different from'.", hint: "Differ ___ someone.", category: "Preposition" },
  { day_set: 21, question: "Bread and butter ___ my usual breakfast.", options: ["are", "is", "were", "have been"], answer: "is", explanation: "When 'bread and butter' refers to a single item (a common dish), it takes singular.", hint: "A single dish, not two items.", category: "Subject-Verb Agreement" },
  { day_set: 21, question: "She ___ TV when I visited her.", options: ["watches", "watched", "was watching", "has watched"], answer: "was watching", explanation: "Past continuous for an ongoing action at a specific past moment.", hint: "Ongoing action when interrupted.", category: "Tense" },
  { day_set: 21, question: "___ hour ago, she was still here.", options: ["A", "An", "The", "No article"], answer: "An", explanation: "'Hour' has a silent 'h' and starts with a vowel sound /aʊ/.", hint: "Silent 'h' = vowel sound.", category: "Article" },
  { day_set: 21, question: "You may go ___ you have finished your work.", options: ["unless", "until", "after", "before"], answer: "after", explanation: "'After' indicates the condition of completion before leaving.", hint: "Sequence: finish first, then go.", category: "Conjunction" },

  // ── Day Set 22 ─────────────────────────────────────────────
  { day_set: 22, question: "She deals ___ furniture.", options: ["with", "in", "at", "on"], answer: "in", explanation: "'Deal in' means to trade in a particular type of goods.", hint: "Trade/commerce = deal ___.", category: "Preposition" },
  { day_set: 22, question: "Either you or he ___ to go.", options: ["have", "has", "are", "were"], answer: "has", explanation: "'Either...or' — the verb agrees with the nearest subject ('he' = singular).", hint: "Verb agrees with nearest subject.", category: "Subject-Verb Agreement" },
  { day_set: 22, question: "I ___ have dinner by 8 PM.", options: ["will", "shall", "would", "will have"], answer: "shall", explanation: "'Shall' with first person ('I') expresses future intention formally.", hint: "First person formal future.", category: "Modal Verb" },
  { day_set: 22, question: "She is ___ a beautiful dress today.", options: ["wearing", "putting", "dressing", "carrying"], answer: "wearing", explanation: "'Wearing' describes having clothes on your body.", hint: "Having clothes on = ___.", category: "Tense" },
  { day_set: 22, question: "This book is more interesting than ___.", options: ["that", "those", "this", "these"], answer: "that", explanation: "'That' replaces the singular noun 'book' in the comparison.", hint: "Replaces singular 'book'.", category: "Pronoun" },

  // ── Day Set 23 ─────────────────────────────────────────────
  { day_set: 23, question: "He is blind ___ his own faults.", options: ["at", "for", "to", "from"], answer: "to", explanation: "'Blind to' means unaware of or unwilling to see.", hint: "Blind ___ faults.", category: "Preposition" },
  { day_set: 23, question: "___ Pacific Ocean is the largest ocean.", options: ["A", "An", "The", "No article"], answer: "The", explanation: "'The' is used with names of oceans.", hint: "Oceans take ___.", category: "Article" },
  { day_set: 23, question: "She said she ___ come the next day.", options: ["will", "would", "can", "shall"], answer: "would", explanation: "In reported speech, 'will' changes to 'would'.", hint: "Reported speech: 'will' → ___.", category: "Tense" },
  { day_set: 23, question: "Ten miles ___ a long distance to walk.", options: ["are", "is", "were", "have been"], answer: "is", explanation: "Distances, amounts, and periods of time take singular verbs.", hint: "Distance = singular.", category: "Subject-Verb Agreement" },
  { day_set: 23, question: "He is ___ honest ___ hardworking.", options: ["not only...but also", "either...or", "neither...nor", "both...and"], answer: "not only...but also", explanation: "'Not only...but also' adds emphasis to both qualities.", hint: "Emphasizes both qualities.", category: "Conjunction" },

  // ── Day Set 24 ─────────────────────────────────────────────
  { day_set: 24, question: "She abstained ___ voting.", options: ["of", "from", "for", "against"], answer: "from", explanation: "'Abstain from' means to choose not to do something.", hint: "Abstain ___ doing.", category: "Preposition" },
  { day_set: 24, question: "He ___ be the right person for the job.", options: ["can", "may", "must", "shall"], answer: "may", explanation: "'May' expresses possibility — it's uncertain.", hint: "Uncertain possibility.", category: "Modal Verb" },
  { day_set: 24, question: "She ___ to New York twice this year.", options: ["went", "has gone", "has been", "had gone"], answer: "has been", explanation: "'Has been' means she visited and returned. 'This year' signals present perfect.", hint: "Visited and returned, still this year.", category: "Tense" },
  { day_set: 24, question: "It was ___ a cold day that we stayed indoors.", options: ["very", "too", "so", "such"], answer: "such", explanation: "'Such + a + adjective + noun + that' is the pattern.", hint: "___ + a + adjective + noun.", category: "Adjective/Adverb" },
  { day_set: 24, question: "The man ___ is standing there is my uncle.", options: ["which", "who", "whom", "whose"], answer: "who", explanation: "'Who' is the relative pronoun for people as subjects.", hint: "Relative pronoun for people (subject).", category: "Pronoun" },

  // ── Day Set 25 ─────────────────────────────────────────────
  { day_set: 25, question: "She is keen ___ learning new things.", options: ["at", "on", "in", "for"], answer: "on", explanation: "'Keen on' means enthusiastic about.", hint: "Keen ___ = enthusiastic about.", category: "Preposition" },
  { day_set: 25, question: "Two-thirds of the work ___ completed.", options: ["are", "is", "were", "have been"], answer: "is", explanation: "Fractions with uncountable nouns ('work') take singular verbs.", hint: "Fraction + uncountable = singular.", category: "Subject-Verb Agreement" },
  { day_set: 25, question: "She hardly ___ visits us.", options: ["never", "ever", "always", "often"], answer: "ever", explanation: "'Hardly ever' means almost never — double negative with 'never' would be incorrect.", hint: "Hardly + ___ = almost never.", category: "Adjective/Adverb" },
  { day_set: 25, question: "I ___ finished my work before the deadline.", options: ["have", "had", "has", "having"], answer: "had", explanation: "Past perfect ('had + PP') for an action completed before a past reference point.", hint: "'Before the deadline' = earlier past.", category: "Tense" },
  { day_set: 25, question: "He will succeed ___ he works hard.", options: ["unless", "provided", "although", "despite"], answer: "provided", explanation: "'Provided' means 'on the condition that' — success depends on hard work.", hint: "On the condition that.", category: "Conjunction" },

  // ── Day Set 26 ─────────────────────────────────────────────
  { day_set: 26, question: "I am not familiar ___ this topic.", options: ["to", "at", "with", "about"], answer: "with", explanation: "'Familiar with' is the correct collocation.", hint: "Familiar ___ something.", category: "Preposition" },
  { day_set: 26, question: "___ rich should help ___ poor.", options: ["A...a", "The...the", "A...the", "The...a"], answer: "The...the", explanation: "'The + adjective' refers to a group: 'the rich', 'the poor'.", hint: "'The' + adjective = group of people.", category: "Article" },
  { day_set: 26, question: "I ___ reading this book by tomorrow.", options: ["will finish", "will have finished", "would finish", "shall finish"], answer: "will have finished", explanation: "Future perfect for completion before a future point ('by tomorrow').", hint: "'By tomorrow' = future perfect.", category: "Tense" },
  { day_set: 26, question: "You ___ as well stay here tonight.", options: ["can", "may", "might", "should"], answer: "might", explanation: "'Might as well' means 'there's no reason not to'.", hint: "___ as well = no reason not to.", category: "Modal Verb" },
  { day_set: 26, question: "She writes ___ neatly ___ her mother.", options: ["so...as", "as...as", "more...as", "much...as"], answer: "as...as", explanation: "'As...as' for equal comparison.", hint: "Equal comparison.", category: "Adjective/Adverb" },

  // ── Day Set 27 ─────────────────────────────────────────────
  { day_set: 27, question: "He complained ___ the noise to the manager.", options: ["for", "about", "on", "at"], answer: "about", explanation: "'Complain about' is the correct collocation for grievances.", hint: "Complain ___ something.", category: "Preposition" },
  { day_set: 27, question: "The number of students ___ increasing.", options: ["are", "is", "were", "have been"], answer: "is", explanation: "'The number of' takes a singular verb (the number itself is one thing).", hint: "'The number' is singular.", category: "Subject-Verb Agreement" },
  { day_set: 27, question: "She ___ me that she was leaving.", options: ["said", "told", "says", "tells"], answer: "told", explanation: "'Told' takes an indirect object (me). 'Said' doesn't take a person directly.", hint: "___ someone something.", category: "Tense" },
  { day_set: 27, question: "The boy ___ broke the window has apologized.", options: ["which", "whom", "who", "whose"], answer: "who", explanation: "'Who' is the relative pronoun for a person as subject.", hint: "Person as subject of clause.", category: "Pronoun" },
  { day_set: 27, question: "He is tall ___ not very strong.", options: ["and", "but", "or", "so"], answer: "but", explanation: "'But' introduces a contrast between tall and not strong.", hint: "Contrast.", category: "Conjunction" },

  // ── Day Set 28 ─────────────────────────────────────────────
  { day_set: 28, question: "She is devoted ___ her family.", options: ["for", "at", "to", "with"], answer: "to", explanation: "'Devoted to' is the correct collocation.", hint: "Devoted ___ someone.", category: "Preposition" },
  { day_set: 28, question: "I wish he ___ here right now.", options: ["is", "was", "were", "be"], answer: "were", explanation: "After 'wish', use 'were' for unreal present situations.", hint: "Wish + subjunctive.", category: "Tense" },
  { day_set: 28, question: "___ USA is a large country.", options: ["A", "An", "The", "No article"], answer: "The", explanation: "'The' is used with country names that are abbreviations.", hint: "Abbreviation country names take ___.", category: "Article" },
  { day_set: 28, question: "He is one of ___ in the class.", options: ["the tallest boy", "the tallest boys", "tallest boy", "tallest boys"], answer: "the tallest boys", explanation: "'One of the + superlative + plural noun' is the correct pattern.", hint: "One of + superlative + plural.", category: "Adjective/Adverb" },
  { day_set: 28, question: "___ you ___ I is wrong.", options: ["Either...or", "Neither...nor", "Both...and", "Not only...but"], answer: "Either...or", explanation: "'Either...or' presents two alternatives, one of which is wrong.", hint: "One of two alternatives.", category: "Conjunction" },

  // ── Day Set 29 ─────────────────────────────────────────────
  { day_set: 29, question: "She is eligible ___ the scholarship.", options: ["to", "for", "at", "of"], answer: "for", explanation: "'Eligible for' is the correct collocation.", hint: "Eligible ___ something.", category: "Preposition" },
  { day_set: 29, question: "No sooner had he arrived ___ it started raining.", options: ["when", "than", "then", "that"], answer: "than", explanation: "'No sooner...than' is a fixed correlative pair.", hint: "No sooner...___ .", category: "Conjunction" },
  { day_set: 29, question: "She ___ working here for ten years next month.", options: ["will be", "will have been", "would be", "has been"], answer: "will have been", explanation: "Future perfect continuous for duration leading up to a future point.", hint: "'Next month' + duration = future perfect.", category: "Tense" },
  { day_set: 29, question: "I don't have ___ money to buy that car.", options: ["many", "much", "enough", "few"], answer: "enough", explanation: "'Enough' means 'sufficient' — the sentence says he can't afford it.", hint: "Sufficient = ___.", category: "Adjective/Adverb" },
  { day_set: 29, question: "The girl ___ bag was stolen reported to the police.", options: ["who", "whom", "which", "whose"], answer: "whose", explanation: "'Whose' shows possession — the girl's bag.", hint: "Possessive for people.", category: "Pronoun" },

  // ── Day Set 30 ─────────────────────────────────────────────
  { day_set: 30, question: "He has been suffering ___ fever.", options: ["with", "by", "from", "of"], answer: "from", explanation: "'Suffer from' is the correct medical collocation.", hint: "Suffer ___ an illness.", category: "Preposition" },
  { day_set: 30, question: "A number of students ___ absent today.", options: ["is", "was", "are", "has been"], answer: "are", explanation: "'A number of' means 'many' and takes a plural verb.", hint: "'A number of' = many = plural.", category: "Subject-Verb Agreement" },
  { day_set: 30, question: "He ___ to leave before the announcement.", options: ["dare not", "dares not", "dare doesn't", "not dare"], answer: "dare not", explanation: "'Dare' as a modal verb: 'dare not + base verb'.", hint: "Modal usage of 'dare'.", category: "Modal Verb" },
  { day_set: 30, question: "She has been studying ___ 8 o'clock.", options: ["for", "from", "since", "at"], answer: "since", explanation: "'Since' is used with a specific point in time.", hint: "Point in time.", category: "Tense" },
  { day_set: 30, question: "He ran fast; ___, he missed the bus.", options: ["but", "however", "although", "so"], answer: "however", explanation: "'However' (with semicolon) contrasts two independent clauses.", hint: "Contrast between two clauses.", category: "Conjunction" },

  // ── Day Set 31 ─────────────────────────────────────────────
  { day_set: 31, question: "She is very particular ___ her dress.", options: ["of", "about", "for", "with"], answer: "about", explanation: "'Particular about' means careful or fussy about.", hint: "Particular ___ something.", category: "Preposition" },
  { day_set: 31, question: "___ few students attended the seminar.", options: ["A", "The", "Very", "Quite"], answer: "Very", explanation: "'Very few' means almost none — emphasizing the small number negatively.", hint: "Emphasizing how small the number is.", category: "Adjective/Adverb" },
  { day_set: 31, question: "The teacher, along with her students, ___ gone on a trip.", options: ["have", "has", "are", "were"], answer: "has", explanation: "'Along with' doesn't change the subject — 'teacher' is singular.", hint: "'Along with' doesn't make it plural.", category: "Subject-Verb Agreement" },
  { day_set: 31, question: "I ___ play in the garden when I was a child.", options: ["use to", "used to", "am used to", "was used to"], answer: "used to", explanation: "'Used to + base verb' for past habits.", hint: "Past habit.", category: "Tense" },
  { day_set: 31, question: "She ___ be at the meeting; it's compulsory.", options: ["should", "must", "could", "might"], answer: "must", explanation: "'Must' for strong obligation when something is compulsory.", hint: "Compulsory = ___.", category: "Modal Verb" },

  // ── Day Set 32 ─────────────────────────────────────────────
  { day_set: 32, question: "He is jealous ___ his neighbour's success.", options: ["from", "about", "of", "for"], answer: "of", explanation: "'Jealous of' is the correct collocation.", hint: "Jealous ___ something.", category: "Preposition" },
  { day_set: 32, question: "The cattle ___ grazing in the field.", options: ["is", "was", "are", "has been"], answer: "are", explanation: "'Cattle' is always plural.", hint: "Always plural.", category: "Subject-Verb Agreement" },
  { day_set: 32, question: "She ___ already left when I reached.", options: ["has", "had", "have", "was"], answer: "had", explanation: "Past perfect ('had left') for action completed before another past action ('reached').", hint: "Which happened first?", category: "Tense" },
  { day_set: 32, question: "___ information he gave was incorrect.", options: ["A", "An", "The", "No article"], answer: "The", explanation: "'The' is used for specific information that was given.", hint: "Specific known information.", category: "Article" },
  { day_set: 32, question: "She is ___ younger ___ the two sisters.", options: ["a...of", "the...of", "more...of", "most...of"], answer: "the...of", explanation: "'The + comparative + of the two' is the correct pattern.", hint: "Comparing two = the + comparative.", category: "Adjective/Adverb" },

  // ── Day Set 33 ─────────────────────────────────────────────
  { day_set: 33, question: "He objected ___ the proposal.", options: ["on", "for", "to", "against"], answer: "to", explanation: "'Object to' is the correct collocation.", hint: "Object ___ something.", category: "Preposition" },
  { day_set: 33, question: "If I ___ a bird, I would fly.", options: ["am", "was", "were", "be"], answer: "were", explanation: "Second conditional uses 'were' for all subjects (subjunctive).", hint: "Hypothetical = subjunctive.", category: "Tense" },
  { day_set: 33, question: "He asked me ___ I wanted tea or coffee.", options: ["that", "if", "whether", "what"], answer: "whether", explanation: "'Whether' is used for indirect alternative questions (A or B).", hint: "Choice between two options.", category: "Pronoun" },
  { day_set: 33, question: "___ you ___ I will attend the meeting.", options: ["Either...or", "Neither...nor", "Both...and", "Whether...or"], answer: "Either...or", explanation: "'Either...or' presents two alternatives — one will attend.", hint: "One of two will go.", category: "Conjunction" },
  { day_set: 33, question: "You ___ take an umbrella; it might rain.", options: ["would", "could", "should", "must"], answer: "should", explanation: "'Should' for advice based on possibility.", hint: "Advice.", category: "Modal Verb" },

  // ── Day Set 34 ─────────────────────────────────────────────
  { day_set: 34, question: "She agreed ___ my proposal.", options: ["with", "to", "on", "for"], answer: "to", explanation: "'Agree to' a proposal/plan. 'Agree with' a person.", hint: "Agree ___ a plan.", category: "Preposition" },
  { day_set: 34, question: "None of the food ___ wasted.", options: ["are", "were", "is", "have been"], answer: "is", explanation: "'None of + uncountable noun' takes a singular verb.", hint: "None of + uncountable.", category: "Subject-Verb Agreement" },
  { day_set: 34, question: "I ___ go to the store, but I changed my mind.", options: ["was going to", "am going to", "will", "would"], answer: "was going to", explanation: "'Was going to' expresses a past intention that didn't happen.", hint: "Past intention, not fulfilled.", category: "Tense" },
  { day_set: 34, question: "___ honest person is always admired.", options: ["A", "An", "The", "No article"], answer: "An", explanation: "'Honest' has a silent 'h', starting with vowel sound /ɒ/.", hint: "Silent 'h'.", category: "Article" },
  { day_set: 34, question: "She is ___ of all the sisters.", options: ["beautiful", "more beautiful", "the most beautiful", "most beautiful"], answer: "the most beautiful", explanation: "'The most + adjective' for superlative with three or more.", hint: "Comparing all sisters = superlative.", category: "Adjective/Adverb" },

  // ── Day Set 35 ─────────────────────────────────────────────
  { day_set: 35, question: "He is addicted ___ gaming.", options: ["with", "to", "for", "by"], answer: "to", explanation: "'Addicted to' is the correct collocation.", hint: "Addicted ___ something.", category: "Preposition" },
  { day_set: 35, question: "Not only the students but also the teacher ___ surprised.", options: ["was", "were", "are", "have been"], answer: "was", explanation: "'Not only...but also' — verb agrees with the nearest subject ('teacher' = singular).", hint: "Verb agrees with nearest subject.", category: "Subject-Verb Agreement" },
  { day_set: 35, question: "She ___ never visited Paris before last year.", options: ["has", "had", "have", "was"], answer: "had", explanation: "Past perfect for experience before a past reference point ('before last year').", hint: "Before a past reference point.", category: "Tense" },
  { day_set: 35, question: "You ___ have told me earlier!", options: ["would", "should", "could", "might"], answer: "should", explanation: "'Should have + PP' expresses regret about a past action not done.", hint: "Regret about the past.", category: "Modal Verb" },
  { day_set: 35, question: "She is taller than ___ in her class.", options: ["anyone", "everyone", "anyone else", "no one"], answer: "anyone else", explanation: "'Anyone else' excludes herself from the comparison.", hint: "Exclude the subject from comparison.", category: "Pronoun" },

  // ── Day Set 36 ─────────────────────────────────────────────
  { day_set: 36, question: "He is indifferent ___ praise or blame.", options: ["for", "to", "about", "with"], answer: "to", explanation: "'Indifferent to' means not caring about.", hint: "Indifferent ___ something.", category: "Preposition" },
  { day_set: 36, question: "___ Mars is known as the Red Planet.", options: ["A", "An", "The", "No article"], answer: "No article", explanation: "Planet names don't take articles (except 'the Earth' sometimes).", hint: "Planet names usually have no article.", category: "Article" },
  { day_set: 36, question: "She ___ tennis every Saturday.", options: ["play", "plays", "is playing", "played"], answer: "plays", explanation: "'Every Saturday' signals habitual present — third person singular takes 'plays'.", hint: "Habitual action, third person.", category: "Tense" },
  { day_set: 36, question: "This dress is ___ expensive than that one.", options: ["lesser", "less", "least", "little"], answer: "less", explanation: "'Less + adjective + than' for comparative with 'not as much'.", hint: "Comparative meaning 'not as much'.", category: "Adjective/Adverb" },
  { day_set: 36, question: "He will wait ___ she returns.", options: ["unless", "until", "if", "when"], answer: "until", explanation: "'Until' means up to the time that.", hint: "Up to the time that.", category: "Conjunction" },

  // ── Day Set 37 ─────────────────────────────────────────────
  { day_set: 37, question: "She takes pride ___ her work.", options: ["at", "on", "in", "of"], answer: "in", explanation: "'Take pride in' is the correct collocation.", hint: "Pride ___ something.", category: "Preposition" },
  { day_set: 37, question: "The jury ___ given their verdict.", options: ["has", "have", "is", "was"], answer: "have", explanation: "When 'jury' acts as individuals giving their own verdict, it takes plural.", hint: "Individual members acting.", category: "Subject-Verb Agreement" },
  { day_set: 37, question: "She ___ studying before I arrived.", options: ["is", "was", "has been", "had been"], answer: "had been", explanation: "Past perfect continuous for an action ongoing before another past action.", hint: "Ongoing before a past moment.", category: "Tense" },
  { day_set: 37, question: "___ can answer this question? It's very difficult.", options: ["Who", "Whom", "Which", "What"], answer: "Who", explanation: "'Who' is the subject pronoun for asking about a person.", hint: "Subject asking about a person.", category: "Pronoun" },
  { day_set: 37, question: "She failed ___ she didn't study hard enough.", options: ["so", "because", "although", "but"], answer: "because", explanation: "'Because' gives the reason for failure.", hint: "Reason.", category: "Conjunction" },

  // ── Day Set 38 ─────────────────────────────────────────────
  { day_set: 38, question: "He is liable ___ make mistakes.", options: ["for", "to", "of", "at"], answer: "to", explanation: "'Liable to' means likely to do something.", hint: "Likely to = liable ___.", category: "Preposition" },
  { day_set: 38, question: "The information ___ very useful.", options: ["are", "is", "were", "have been"], answer: "is", explanation: "'Information' is uncountable and always takes singular.", hint: "Uncountable = singular.", category: "Subject-Verb Agreement" },
  { day_set: 38, question: "I ___ finish this task before leaving.", options: ["must", "may", "might", "could"], answer: "must", explanation: "'Must' expresses necessity — the task must be done.", hint: "Necessity.", category: "Modal Verb" },
  { day_set: 38, question: "___ slowly you walk, ___ more tired you feel.", options: ["The...the", "More...more", "So...so", "As...as"], answer: "The...the", explanation: "'The + comparative...the + comparative' shows parallel increase.", hint: "Double comparative structure.", category: "Adjective/Adverb" },
  { day_set: 38, question: "She has lived here ___ she was born.", options: ["for", "from", "since", "during"], answer: "since", explanation: "'Since' with a point in time (birth) in present perfect.", hint: "Point in time + present perfect.", category: "Tense" },

  // ── Day Set 39 ─────────────────────────────────────────────
  { day_set: 39, question: "He was acquitted ___ all charges.", options: ["from", "for", "of", "with"], answer: "of", explanation: "'Acquitted of' is the correct legal collocation.", hint: "Acquitted ___ charges.", category: "Preposition" },
  { day_set: 39, question: "I don't know ___ to believe him.", options: ["if", "that", "whether", "what"], answer: "whether", explanation: "'Whether' introduces an indirect question about uncertainty.", hint: "Uncertainty about believing.", category: "Conjunction" },
  { day_set: 39, question: "Each and every student ___ responsible.", options: ["are", "is", "were", "have been"], answer: "is", explanation: "'Each and every' always takes a singular verb.", hint: "Each and every = singular.", category: "Subject-Verb Agreement" },
  { day_set: 39, question: "She speaks English ___ if she were a native speaker.", options: ["like", "as", "as if", "so"], answer: "as if", explanation: "'As if' introduces a comparison to an unreal situation.", hint: "Comparing to unreal situation.", category: "Tense" },
  { day_set: 39, question: "___ Sahara is the largest desert.", options: ["A", "An", "The", "No article"], answer: "The", explanation: "'The' is used with names of deserts.", hint: "Deserts take ___.", category: "Article" },

  // ── Day Set 40 ─────────────────────────────────────────────
  { day_set: 40, question: "She is absorbed ___ her studies.", options: ["at", "in", "on", "with"], answer: "in", explanation: "'Absorbed in' means deeply focused on.", hint: "Absorbed ___ something.", category: "Preposition" },
  { day_set: 40, question: "The team ___ won the match celebrated all night.", options: ["who", "which", "that", "whom"], answer: "that", explanation: "'That' is used for defining relative clauses with things or collective nouns.", hint: "Defining clause for a team.", category: "Pronoun" },
  { day_set: 40, question: "She ___ go to the gym, but she doesn't anymore.", options: ["used to", "use to", "is used to", "gets used to"], answer: "used to", explanation: "'Used to' for a discontinued past habit.", hint: "Past habit, no longer done.", category: "Tense" },
  { day_set: 40, question: "He drives very ___, which worries his parents.", options: ["careless", "carelessly", "carelessness", "more careless"], answer: "carelessly", explanation: "Adverb needed to modify the verb 'drives'.", hint: "Modifies a verb.", category: "Adjective/Adverb" },
  { day_set: 40, question: "You ___ to apply by Friday.", options: ["need", "dare", "must", "can"], answer: "need", explanation: "'Need to' expresses requirement.", hint: "Requirement.", category: "Modal Verb" },

  // ── Day Set 41 ─────────────────────────────────────────────
  { day_set: 41, question: "He is averse ___ taking risks.", options: ["at", "for", "to", "from"], answer: "to", explanation: "'Averse to' means opposed to or disliking.", hint: "Averse ___ = opposed to.", category: "Preposition" },
  { day_set: 41, question: "___ Taj Mahal is a beautiful monument.", options: ["A", "An", "The", "No article"], answer: "The", explanation: "'The' is used with famous buildings and monuments.", hint: "Famous monuments take ___.", category: "Article" },
  { day_set: 41, question: "Many a student ___ failed this exam.", options: ["have", "has", "are", "were"], answer: "has", explanation: "'Many a + singular noun' takes a singular verb despite meaning 'many'.", hint: "'Many a' = singular verb.", category: "Subject-Verb Agreement" },
  { day_set: 41, question: "She ___ cook dinner while he sets the table.", options: ["will", "shall", "would", "should"], answer: "will", explanation: "'Will' for future plans and arrangements.", hint: "Future plan.", category: "Modal Verb" },
  { day_set: 41, question: "This is the place ___ I lost my wallet.", options: ["which", "that", "where", "when"], answer: "where", explanation: "'Where' for relative clauses about places.", hint: "Relative pronoun for place.", category: "Pronoun" },

  // ── Day Set 42 ─────────────────────────────────────────────
  { day_set: 42, question: "She is jealous ___ her friend's promotion.", options: ["from", "about", "of", "for"], answer: "of", explanation: "'Jealous of' is the standard collocation.", hint: "Jealous ___ something.", category: "Preposition" },
  { day_set: 42, question: "He ___ go out yesterday because it was raining.", options: ["can't", "couldn't", "won't", "mustn't"], answer: "couldn't", explanation: "'Couldn't' is the past of 'can't' — past inability.", hint: "Past inability.", category: "Modal Verb" },
  { day_set: 42, question: "The audience ___ applauding loudly.", options: ["is", "was", "were", "has been"], answer: "were", explanation: "'Audience' as a collective noun acting together can take plural in British English.", hint: "Collective noun, plural context.", category: "Subject-Verb Agreement" },
  { day_set: 42, question: "She ___ to the store when she met her friend.", options: ["goes", "went", "was going", "has gone"], answer: "was going", explanation: "Past continuous for an ongoing action interrupted by meeting her friend.", hint: "Ongoing action interrupted.", category: "Tense" },
  { day_set: 42, question: "He is not only smart ___ also humble.", options: ["and", "but", "or", "yet"], answer: "but", explanation: "'Not only...but also' is a fixed correlative pair.", hint: "Not only...___ also.", category: "Conjunction" },

  // ── Day Set 43 ─────────────────────────────────────────────
  { day_set: 43, question: "She is proficient ___ French.", options: ["at", "in", "on", "with"], answer: "in", explanation: "'Proficient in' is the correct collocation for languages.", hint: "Proficient ___ a language.", category: "Preposition" },
  { day_set: 43, question: "___  moon shines at night.", options: ["A", "An", "The", "No article"], answer: "The", explanation: "'The' is used for unique objects — there is only one moon.", hint: "Unique object.", category: "Article" },
  { day_set: 43, question: "By next month, she ___ here for five years.", options: ["will work", "will have worked", "would work", "has worked"], answer: "will have worked", explanation: "Future perfect for a duration completed by a future point.", hint: "'By next month' + duration.", category: "Tense" },
  { day_set: 43, question: "Neither he nor his friends ___ invited.", options: ["was", "were", "is", "has been"], answer: "were", explanation: "'Neither...nor' — verb agrees with nearest subject ('friends' = plural).", hint: "Nearest subject is plural.", category: "Subject-Verb Agreement" },
  { day_set: 43, question: "She finished the work ___ being very tired.", options: ["although", "despite", "because", "unless"], answer: "despite", explanation: "'Despite' + gerund/-ing expresses contrast.", hint: "Contrast with -ing form.", category: "Conjunction" },
];

// ─────────────────────────────────────────────────────────────
// Seed runner
// ─────────────────────────────────────────────────────────────
async function seed() {
  console.log(`🌱 Seeding ${QUESTIONS.length} English grammar questions (${QUESTIONS.length / 5} day sets)…`);

  // Upsert in batches of 25
  for (let i = 0; i < QUESTIONS.length; i += 25) {
    const batch = QUESTIONS.slice(i, i + 25);
    const { error } = await supabase.from("english_questions").insert(batch);
    if (error) {
      console.error(`❌ Batch ${i / 25 + 1} failed:`, error.message);
      process.exit(1);
    }
    console.log(`  ✅ Inserted batch ${i / 25 + 1} (${batch.length} rows)`);
  }

  console.log("🎉 Done! All English grammar questions seeded.");
}

seed();
