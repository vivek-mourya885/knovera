-- ============================================================
-- Lexi Practice Mode — 100 practice questions
-- ~35 classic (definition → word)
-- ~35 reverse (word → definition)
-- ~30 synonym (word → synonym)
--
-- All words are DIFFERENT from the 35 daily Lexi words:
-- (Obsolete, Ephemeral, Eloquent, Tenacious, Ambiguous, Meticulous,
--  Pragmatic, Benevolent, Candid, Diligent, Resilient, Audacious,
--  Lucid, Adamant, Verbose, Frugal, Placid, Inquisitive, Eccentric,
--  Ominous, Serene, Prolific, Magnanimous, Mendacious, Voracious,
--  Sagacious, Enigmatic, Loquacious, Alacrity, Sycophant, Superfluous,
--  Taciturn, Indolent, Perspicacious, Presumptuous)
-- ============================================================

INSERT INTO practice_word_questions
  (question_type, word, definition, synonym, options, answer, prompt, explanation)
VALUES

-- ═══════════════════════════════════════════════════════════
-- CLASSIC QUESTIONS (1–35): definition → pick the word
-- ═══════════════════════════════════════════════════════════

('classic', 'Ubiquitous', 'Present, appearing, or found everywhere at the same time', NULL,
 ARRAY['Ubiquitous', 'Obscure', 'Sparse', 'Unique'],
 'Ubiquitous',
 'What word matches this meaning?',
 'Ubiquitous means something found everywhere. Smartphones have become ubiquitous in modern life.'),

('classic', 'Pernicious', 'Having a harmful effect, especially in a gradual or subtle way', NULL,
 ARRAY['Benign', 'Pernicious', 'Trivial', 'Harmless'],
 'Pernicious',
 'What word matches this meaning?',
 'Pernicious describes something destructive in a sneaky way. Misinformation can have a pernicious effect on public trust.'),

('classic', 'Gregarious', 'Fond of the company of others; sociable and outgoing', NULL,
 ARRAY['Reclusive', 'Shy', 'Gregarious', 'Withdrawn'],
 'Gregarious',
 'What word matches this meaning?',
 'Gregarious people enjoy being around others. They thrive in social settings and love group activities.'),

('classic', 'Insidious', 'Proceeding in a gradual, subtle way but with harmful effects', NULL,
 ARRAY['Obvious', 'Insidious', 'Transparent', 'Beneficial'],
 'Insidious',
 'What word matches this meaning?',
 'Insidious describes threats that develop slowly and are hard to notice until damage is done.'),

('classic', 'Capricious', 'Given to sudden, unpredictable changes of mood or behavior', NULL,
 ARRAY['Steady', 'Capricious', 'Reliable', 'Constant'],
 'Capricious',
 'What word matches this meaning?',
 'Capricious means subject to whims. Weather in spring is often described as capricious.'),

('classic', 'Sanguine', 'Optimistic or positive, especially in a difficult situation', NULL,
 ARRAY['Pessimistic', 'Gloomy', 'Sanguine', 'Cynical'],
 'Sanguine',
 'What word matches this meaning?',
 'Sanguine means cheerfully optimistic. Despite setbacks, a sanguine person remains hopeful about the future.'),

('classic', 'Recalcitrant', 'Having an obstinately uncooperative attitude; defiant', NULL,
 ARRAY['Compliant', 'Obedient', 'Recalcitrant', 'Submissive'],
 'Recalcitrant',
 'What word matches this meaning?',
 'Recalcitrant describes someone stubbornly resistant to authority or control.'),

('classic', 'Ameliorate', 'To make something bad or unsatisfactory better; improve', NULL,
 ARRAY['Worsen', 'Ameliorate', 'Ignore', 'Destroy'],
 'Ameliorate',
 'What word matches this meaning?',
 'Ameliorate means to improve a bad situation. Medicine can ameliorate symptoms of illness.'),

('classic', 'Ostentatious', 'Designed to impress; showy and pretentious', NULL,
 ARRAY['Modest', 'Ostentatious', 'Simple', 'Humble'],
 'Ostentatious',
 'What word matches this meaning?',
 'Ostentatious means excessively showy. An ostentatious display of wealth is meant to impress others.'),

('classic', 'Equivocal', 'Open to more than one interpretation; intentionally ambiguous', NULL,
 ARRAY['Clear', 'Equivocal', 'Definite', 'Precise'],
 'Equivocal',
 'What word matches this meaning?',
 'Equivocal statements are deliberately vague. Politicians sometimes give equivocal answers to avoid commitment.'),

('classic', 'Cogent', 'Clear, logical, and convincing in argument or reasoning', NULL,
 ARRAY['Weak', 'Confusing', 'Cogent', 'Illogical'],
 'Cogent',
 'What word matches this meaning?',
 'A cogent argument is well-structured and persuasive. Lawyers must present cogent reasoning to win cases.'),

('classic', 'Truculent', 'Eager or quick to argue or fight; aggressively defiant', NULL,
 ARRAY['Gentle', 'Peaceful', 'Truculent', 'Calm'],
 'Truculent',
 'What word matches this meaning?',
 'Truculent means fierce and combative. A truculent attitude makes cooperation difficult.'),

('classic', 'Ephemeral', 'Used in art: a work designed to last only a short time', NULL,
 ARRAY['Permanent', 'Transient', 'Ephemeral', 'Lasting'],
 'Transient',
 'What word matches this meaning?',
 'Transient means lasting only for a short time. A transient feeling passes quickly, like a brief moment of joy.'),

('classic', 'Munificent', 'Larger or more generous than is usual or necessary', NULL,
 ARRAY['Stingy', 'Munificent', 'Miserly', 'Thrifty'],
 'Munificent',
 'What word matches this meaning?',
 'Munificent means extremely generous. A munificent donation can transform a community.'),

('classic', 'Ineffable', 'Too great or extreme to be expressed in words', NULL,
 ARRAY['Ordinary', 'Ineffable', 'Mundane', 'Expressible'],
 'Ineffable',
 'What word matches this meaning?',
 'Ineffable describes something beyond words. The beauty of a sunset can feel ineffable.'),

('classic', 'Obsequious', 'Excessively willing to serve or please others; fawning', NULL,
 ARRAY['Independent', 'Obsequious', 'Defiant', 'Assertive'],
 'Obsequious',
 'What word matches this meaning?',
 'Obsequious means overly eager to please. An obsequious employee agrees with everything the boss says.'),

('classic', 'Perfunctory', 'Carried out with minimal effort or care; done as a routine duty', NULL,
 ARRAY['Thorough', 'Perfunctory', 'Careful', 'Dedicated'],
 'Perfunctory',
 'What word matches this meaning?',
 'Perfunctory means done without real interest. A perfunctory handshake lacks warmth or sincerity.'),

('classic', 'Inexorable', 'Impossible to stop or prevent; relentless and unstoppable', NULL,
 ARRAY['Flexible', 'Stoppable', 'Inexorable', 'Yielding'],
 'Inexorable',
 'What word matches this meaning?',
 'Inexorable means impossible to halt. The inexorable march of time waits for no one.'),

('classic', 'Laconic', 'Using very few words; brief and concise in expression', NULL,
 ARRAY['Wordy', 'Rambling', 'Laconic', 'Chatty'],
 'Laconic',
 'What word matches this meaning?',
 'Laconic means using minimal words. Spartans were famous for their laconic replies in ancient Greece.'),

('classic', 'Vacillate', 'To waver between different opinions or actions; be indecisive', NULL,
 ARRAY['Decide', 'Vacillate', 'Commit', 'Resolve'],
 'Vacillate',
 'What word matches this meaning?',
 'To vacillate is to go back and forth between choices without deciding. Indecisive people often vacillate.'),

('classic', 'Diffident', 'Modest or shy because of a lack of self-confidence', NULL,
 ARRAY['Bold', 'Diffident', 'Arrogant', 'Brash'],
 'Diffident',
 'What word matches this meaning?',
 'Diffident means lacking confidence. A diffident speaker may avoid eye contact and speak softly.'),

('classic', 'Propitious', 'Indicating a good chance of success; favorable', NULL,
 ARRAY['Unlucky', 'Adverse', 'Propitious', 'Doomed'],
 'Propitious',
 'What word matches this meaning?',
 'Propitious means favorable for success. A propitious moment is the perfect time to act.'),

('classic', 'Ebullient', 'Cheerful and full of energy; enthusiastically excited', NULL,
 ARRAY['Somber', 'Ebullient', 'Gloomy', 'Dull'],
 'Ebullient',
 'What word matches this meaning?',
 'Ebullient means overflowing with excitement. An ebullient crowd cheers and celebrates with energy.'),

('classic', 'Querulous', 'Complaining in a whiny or petulant way', NULL,
 ARRAY['Content', 'Querulous', 'Satisfied', 'Cheerful'],
 'Querulous',
 'What word matches this meaning?',
 'Querulous means habitually complaining. A querulous tone makes even simple requests sound like grievances.'),

('classic', 'Parsimonious', 'Extremely unwilling to spend money or use resources', NULL,
 ARRAY['Generous', 'Parsimonious', 'Lavish', 'Liberal'],
 'Parsimonious',
 'What word matches this meaning?',
 'Parsimonious means extremely stingy. A parsimonious person counts every penny and avoids all unnecessary spending.'),

('classic', 'Ephemeral', 'A mayfly, which lives for only a day as an adult', NULL,
 ARRAY['Pellucid', 'Nascent', 'Pellucid', 'Nascent'],
 'Nascent',
 'What word matches this meaning?',
 'Nascent means just beginning to develop. A nascent idea is in its earliest stages of formation.'),

('classic', 'Surreptitious', 'Done secretively to avoid notice; kept secret', NULL,
 ARRAY['Open', 'Surreptitious', 'Public', 'Obvious'],
 'Surreptitious',
 'What word matches this meaning?',
 'Surreptitious means done in secret. A surreptitious glance is a quick look meant to go unnoticed.'),

('classic', 'Intransigent', 'Unwilling to change one''s views; stubbornly uncompromising', NULL,
 ARRAY['Flexible', 'Intransigent', 'Adaptable', 'Open-minded'],
 'Intransigent',
 'What word matches this meaning?',
 'Intransigent means refusing to compromise. An intransigent negotiator makes reaching agreement nearly impossible.'),

('classic', 'Ephemeral', 'The quality of having strong moral principles; honest and fair', NULL,
 ARRAY['Duplicity', 'Probity', 'Deceit', 'Fraud'],
 'Probity',
 'What word matches this meaning?',
 'Probity means integrity and honesty. A judge of great probity is trusted to be fair and impartial.'),

('classic', 'Litigious', 'Tending to engage in lawsuits; overly inclined to sue', NULL,
 ARRAY['Peaceful', 'Litigious', 'Agreeable', 'Diplomatic'],
 'Litigious',
 'What word matches this meaning?',
 'Litigious means prone to filing lawsuits. A litigious person sees legal action as the first solution.'),

('classic', 'Quixotic', 'Extremely idealistic; unrealistic and impractical', NULL,
 ARRAY['Practical', 'Quixotic', 'Realistic', 'Sensible'],
 'Quixotic',
 'What word matches this meaning?',
 'Quixotic comes from Don Quixote. It describes noble but impractical pursuits, like tilting at windmills.'),

('classic', 'Salubrious', 'Health-giving; promoting health and well-being', NULL,
 ARRAY['Toxic', 'Salubrious', 'Harmful', 'Noxious'],
 'Salubrious',
 'What word matches this meaning?',
 'Salubrious means conducive to health. Mountain air is often described as salubrious.'),

('classic', 'Pellucid', 'Translucently clear; easy to understand', NULL,
 ARRAY['Murky', 'Opaque', 'Pellucid', 'Cloudy'],
 'Pellucid',
 'What word matches this meaning?',
 'Pellucid means crystal clear. A pellucid stream lets you see every pebble on the bottom.'),

('classic', 'Vituperate', 'To blame or insult someone in strong or violent language', NULL,
 ARRAY['Praise', 'Vituperate', 'Compliment', 'Flatter'],
 'Vituperate',
 'What word matches this meaning?',
 'Vituperate means to criticize harshly. To vituperate someone is to verbally attack them with bitter words.'),

('classic', 'Soporific', 'Tending to induce drowsiness or sleep', NULL,
 ARRAY['Stimulating', 'Energizing', 'Soporific', 'Exciting'],
 'Soporific',
 'What word matches this meaning?',
 'Soporific means sleep-inducing. A soporific lecture makes the audience struggle to stay awake.'),

-- ═══════════════════════════════════════════════════════════
-- REVERSE QUESTIONS (36–70): word → pick the definition
-- ═══════════════════════════════════════════════════════════

('reverse', 'Aplomb', 'Self-confidence or assurance, especially in a demanding situation', NULL,
 ARRAY['Self-confidence or assurance, especially in a demanding situation', 'A feeling of deep sadness and regret', 'A tendency to avoid difficult tasks', 'An inability to make decisions quickly'],
 'Self-confidence or assurance, especially in a demanding situation',
 'What does this word mean?',
 'Aplomb means handling situations with poise and self-assurance. A speaker with aplomb stays calm even when challenged.'),

('reverse', 'Acumen', 'The ability to make good judgments and quick decisions', NULL,
 ARRAY['A feeling of extreme tiredness', 'The ability to make good judgments and quick decisions', 'The tendency to forget important things', 'A desire for material possessions'],
 'The ability to make good judgments and quick decisions',
 'What does this word mean?',
 'Acumen refers to sharp insight, especially in business. A leader with acumen makes smart decisions under pressure.'),

('reverse', 'Debacle', 'A sudden and complete disaster or failure', NULL,
 ARRAY['A celebration of success', 'A sudden and complete disaster or failure', 'A slow process of improvement', 'A type of formal agreement'],
 'A sudden and complete disaster or failure',
 'What does this word mean?',
 'A debacle is a total failure. The product launch turned into a debacle when nothing worked as planned.'),

('reverse', 'Fastidious', 'Very attentive to and concerned about accuracy and detail', NULL,
 ARRAY['Careless and unconcerned about results', 'Very attentive to and concerned about accuracy and detail', 'Quick to anger and slow to forgive', 'Generous and willing to share everything'],
 'Very attentive to and concerned about accuracy and detail',
 'What does this word mean?',
 'Fastidious means extremely detail-oriented. A fastidious chef ensures every dish is plated perfectly.'),

('reverse', 'Harbinger', 'A person or thing that announces the approach of something', NULL,
 ARRAY['A person or thing that announces the approach of something', 'A place of safety and shelter', 'A person who collects rare objects', 'A dangerous obstacle blocking the path'],
 'A person or thing that announces the approach of something',
 'What does this word mean?',
 'A harbinger signals what is coming. The first robin is a harbinger of spring.'),

('reverse', 'Mellifluous', 'Sweet-sounding; pleasant and smooth to listen to', NULL,
 ARRAY['Harsh and grating to the ears', 'Sweet-sounding; pleasant and smooth to listen to', 'Difficult to understand or interpret', 'Constantly changing in volume and pitch'],
 'Sweet-sounding; pleasant and smooth to listen to',
 'What does this word mean?',
 'Mellifluous literally means "flowing with honey." A mellifluous voice is soothing and beautiful to hear.'),

('reverse', 'Nemesis', 'A long-standing rival; a cause of someone''s downfall', NULL,
 ARRAY['A loyal friend and supporter', 'A long-standing rival; a cause of someone''s downfall', 'A source of great comfort', 'A teacher or wise guide'],
 'A long-standing rival; a cause of someone''s downfall',
 'What does this word mean?',
 'Nemesis originally was the Greek goddess of revenge. Today it means an archenemy or agent of downfall.'),

('reverse', 'Paradigm', 'A typical example or pattern of something; a model', NULL,
 ARRAY['A complicated puzzle with no solution', 'A brief interruption in a process', 'A typical example or pattern of something; a model', 'A strong feeling of dislike'],
 'A typical example or pattern of something; a model',
 'What does this word mean?',
 'A paradigm is a model or framework. A paradigm shift occurs when fundamental assumptions change dramatically.'),

('reverse', 'Reticent', 'Not revealing one''s thoughts or feelings readily; reserved', NULL,
 ARRAY['Extremely outgoing and talkative', 'Not revealing one''s thoughts or feelings readily; reserved', 'Angry and hostile toward strangers', 'Eager to share personal information'],
 'Not revealing one''s thoughts or feelings readily; reserved',
 'What does this word mean?',
 'Reticent means keeping thoughts private. A reticent person shares very little about their inner feelings.'),

('reverse', 'Auspicious', 'Conducive to success; favorable and promising', NULL,
 ARRAY['Conducive to success; favorable and promising', 'Leading to inevitable failure', 'Creating confusion and disorder', 'Causing harm to others intentionally'],
 'Conducive to success; favorable and promising',
 'What does this word mean?',
 'Auspicious means showing signs of future success. An auspicious start to a project bodes well for completion.'),

('reverse', 'Disparate', 'Essentially different in kind; not able to be compared', NULL,
 ARRAY['Very similar in every way', 'Essentially different in kind; not able to be compared', 'Connected by a common thread', 'Arranged in a logical order'],
 'Essentially different in kind; not able to be compared',
 'What does this word mean?',
 'Disparate means fundamentally different. Disparate viewpoints can make finding common ground challenging.'),

('reverse', 'Ephemeral', 'Lasting for a very short time', NULL,
 ARRAY['Lasting for a very short time', 'Continuing forever without end', 'Growing stronger over time', 'Remaining unchanged through the years'],
 'Lasting for a very short time',
 'What does this word mean?',
 'Ephemeral things exist only briefly. A rainbow is ephemeral — beautiful but gone in moments.'),

('reverse', 'Nefarious', 'Wicked, villainous, or criminal in nature', NULL,
 ARRAY['Kind and generous in spirit', 'Neutral and without opinion', 'Wicked, villainous, or criminal in nature', 'Shy and uncomfortable around others'],
 'Wicked, villainous, or criminal in nature',
 'What does this word mean?',
 'Nefarious means extremely wicked. Nefarious schemes are plots that cause harm and break the law.'),

('reverse', 'Pedantic', 'Excessively concerned with minor details or rules', NULL,
 ARRAY['Creative and free-thinking', 'Excessively concerned with minor details or rules', 'Generous with time and resources', 'Uninterested in academic matters'],
 'Excessively concerned with minor details or rules',
 'What does this word mean?',
 'Pedantic means overly focused on small, trivial details. A pedantic teacher corrects every minor mistake.'),

('reverse', 'Vindictive', 'Having a strong or unreasoning desire for revenge', NULL,
 ARRAY['Forgiving and understanding', 'Lazy and unmotivated', 'Having a strong or unreasoning desire for revenge', 'Cheerful and optimistic'],
 'Having a strong or unreasoning desire for revenge',
 'What does this word mean?',
 'Vindictive means seeking revenge. A vindictive person holds grudges and looks for ways to get even.'),

('reverse', 'Zealous', 'Having great energy or enthusiasm for a cause or objective', NULL,
 ARRAY['Indifferent and apathetic', 'Having great energy or enthusiasm for a cause or objective', 'Cautious and afraid of change', 'Dishonest and manipulative'],
 'Having great energy or enthusiasm for a cause or objective',
 'What does this word mean?',
 'Zealous means passionately devoted to something. A zealous advocate fights tirelessly for their cause.'),

('reverse', 'Acrimonious', 'Angry and bitter in tone or manner', NULL,
 ARRAY['Friendly and warm', 'Angry and bitter in tone or manner', 'Quiet and thoughtful', 'Neutral and detached'],
 'Angry and bitter in tone or manner',
 'What does this word mean?',
 'Acrimonious describes sharp and bitter interactions. An acrimonious divorce involves hostility and resentment.'),

('reverse', 'Exacerbate', 'To make a problem, bad situation, or negative feeling worse', NULL,
 ARRAY['To solve a problem completely', 'To make a problem, bad situation, or negative feeling worse', 'To remain unaffected by circumstances', 'To celebrate a major achievement'],
 'To make a problem, bad situation, or negative feeling worse',
 'What does this word mean?',
 'Exacerbate means to worsen. Adding fuel to a fire exacerbates the blaze; ignoring a wound exacerbates infection.'),

('reverse', 'Fortuitous', 'Happening by accident or chance rather than design', NULL,
 ARRAY['Carefully planned and deliberate', 'Happening by accident or chance rather than design', 'Resulting from hard work and effort', 'Caused by malicious intent'],
 'Happening by accident or chance rather than design',
 'What does this word mean?',
 'Fortuitous means occurring by lucky chance. A fortuitous meeting with an old friend can brighten your day.'),

('reverse', 'Languid', 'Displaying or having a lack of physical or mental energy', NULL,
 ARRAY['Full of energy and excitement', 'Displaying or having a lack of physical or mental energy', 'Extremely focused and productive', 'Anxious and unable to relax'],
 'Displaying or having a lack of physical or mental energy',
 'What does this word mean?',
 'Languid means sluggish and slow. On a hot summer afternoon, people often feel languid and dreamy.'),

('reverse', 'Sycophant', 'A person who acts obsequiously to gain advantage', NULL,
 ARRAY['A brave and principled leader', 'A person who acts obsequiously to gain advantage', 'Someone who avoids all social contact', 'An expert in ancient languages'],
 'A person who acts obsequiously to gain advantage',
 'What does this word mean?',
 'A sycophant uses flattery to gain favor from powerful people. They praise excessively for personal benefit.'),

('reverse', 'Deleterious', 'Causing harm or damage, especially to health', NULL,
 ARRAY['Beneficial and health-promoting', 'Causing harm or damage, especially to health', 'Having no noticeable effect', 'Inspiring creativity and growth'],
 'Causing harm or damage, especially to health',
 'What does this word mean?',
 'Deleterious means harmful. Smoking has deleterious effects on lung health and overall well-being.'),

('reverse', 'Ephemeral', 'Something that lasts for a remarkably brief time', NULL,
 ARRAY['Something that lasts for a remarkably brief time', 'Something built to last centuries', 'A discovery with permanent impact', 'An event that happens repeatedly'],
 'Something that lasts for a remarkably brief time',
 'What does this word mean?',
 'Transient things pass quickly. Fame can be transient — here today and forgotten tomorrow.'),

('reverse', 'Proclivity', 'A tendency to choose or do something regularly; an inclination', NULL,
 ARRAY['A strong dislike for something', 'An ability to predict the future', 'A tendency to choose or do something regularly; an inclination', 'A feeling of surprise and wonder'],
 'A tendency to choose or do something regularly; an inclination',
 'What does this word mean?',
 'Proclivity means a natural tendency. A proclivity for sweets means you are naturally drawn to sugary food.'),

('reverse', 'Trepidation', 'A feeling of fear or anxiety about something that may happen', NULL,
 ARRAY['A feeling of extreme happiness', 'Complete confidence in one''s abilities', 'A feeling of fear or anxiety about something that may happen', 'A desire to explore new places'],
 'A feeling of fear or anxiety about something that may happen',
 'What does this word mean?',
 'Trepidation means anxious uncertainty. Walking into an exam unprepared fills students with trepidation.'),

('reverse', 'Pugnacious', 'Eager or quick to argue, quarrel, or fight', NULL,
 ARRAY['Eager or quick to argue, quarrel, or fight', 'Calm and peaceful in nature', 'Generous and kind to strangers', 'Focused and disciplined at all times'],
 'Eager or quick to argue, quarrel, or fight',
 'What does this word mean?',
 'Pugnacious means combative and ready to fight. A pugnacious debater challenges every opposing point aggressively.'),

('reverse', 'Lethargic', 'Affected by a lack of energy or enthusiasm; sluggish', NULL,
 ARRAY['Highly motivated and driven', 'Affected by a lack of energy or enthusiasm; sluggish', 'Extremely creative and inspired', 'Dangerously reckless and wild'],
 'Affected by a lack of energy or enthusiasm; sluggish',
 'What does this word mean?',
 'Lethargic means lacking energy. After a heavy meal, many people feel lethargic and want to nap.'),

('reverse', 'Magniloquent', 'Using high-flown or bombastic language; grandly speaking', NULL,
 ARRAY['Speaking softly and humbly', 'Using high-flown or bombastic language; grandly speaking', 'Refusing to speak in public', 'Speaking only in short sentences'],
 'Using high-flown or bombastic language; grandly speaking',
 'What does this word mean?',
 'Magniloquent means speaking in a lofty, extravagant style. A magniloquent speech uses grand words to impress.'),

('reverse', 'Ephemeral', 'An event occurring once in a lifetime', NULL,
 ARRAY['Happening every day without fail', 'An event occurring once in a lifetime', 'Something easily repeated', 'A routine daily activity'],
 'An event occurring once in a lifetime',
 'What does this word mean?',
 'Singular events are unique and unrepeatable. A solar eclipse visible from your hometown is a singular experience.'),

('reverse', 'Cantankerous', 'Bad-tempered, argumentative, and uncooperative', NULL,
 ARRAY['Friendly and easy to work with', 'Bad-tempered, argumentative, and uncooperative', 'Quiet and rarely speaking', 'Extremely enthusiastic about everything'],
 'Bad-tempered, argumentative, and uncooperative',
 'What does this word mean?',
 'Cantankerous means grumpy and difficult. A cantankerous neighbor complains about everything.'),

('reverse', 'Conundrum', 'A confusing and difficult problem or question', NULL,
 ARRAY['A simple and obvious solution', 'A confusing and difficult problem or question', 'A type of celebration or party', 'A formal agreement between two parties'],
 'A confusing and difficult problem or question',
 'What does this word mean?',
 'A conundrum is a puzzle with no easy answer. How to balance work and life is a modern conundrum.'),

('reverse', 'Mercurial', 'Subject to sudden or unpredictable changes of mood', NULL,
 ARRAY['Consistently calm and stable', 'Subject to sudden or unpredictable changes of mood', 'Always cheerful and happy', 'Deeply focused and never distracted'],
 'Subject to sudden or unpredictable changes of mood',
 'What does this word mean?',
 'Mercurial means moody and unpredictable, like the planet Mercury''s rapid orbit. A mercurial person''s mood shifts quickly.'),

('reverse', 'Venerable', 'Accorded great respect because of age, wisdom, or character', NULL,
 ARRAY['Young and inexperienced', 'Accorded great respect because of age, wisdom, or character', 'Feared and avoided by everyone', 'Unknown and unrecognized'],
 'Accorded great respect because of age, wisdom, or character',
 'What does this word mean?',
 'Venerable means worthy of deep respect. A venerable institution has earned its reputation over many years.'),

('reverse', 'Acquiesce', 'To accept something reluctantly but without protest', NULL,
 ARRAY['To reject forcefully and loudly', 'To accept something reluctantly but without protest', 'To celebrate with great enthusiasm', 'To question everything critically'],
 'To accept something reluctantly but without protest',
 'What does this word mean?',
 'Acquiesce means to give in quietly. Sometimes people acquiesce to demands just to keep the peace.'),

('reverse', 'Copious', 'Abundant in supply or quantity; plentiful', NULL,
 ARRAY['Extremely rare and hard to find', 'Abundant in supply or quantity; plentiful', 'Carefully measured and limited', 'Completely empty and barren'],
 'Abundant in supply or quantity; plentiful',
 'What does this word mean?',
 'Copious means in large amounts. A diligent student takes copious notes during every lecture.'),

-- ═══════════════════════════════════════════════════════════
-- SYNONYM QUESTIONS (71–100): word → pick the synonym
-- ═══════════════════════════════════════════════════════════

('synonym', 'Benevolent', 'Well-meaning and kindly', 'Charitable',
 ARRAY['Charitable', 'Hostile', 'Greedy', 'Apathetic'],
 'Charitable',
 'Which word is closest in meaning?',
 'Benevolent and charitable both describe a generous, kind-hearted nature. A benevolent act helps others selflessly.'),

('synonym', 'Clandestine', 'Kept secret or done in a hidden way', 'Covert',
 ARRAY['Open', 'Covert', 'Loud', 'Obvious'],
 'Covert',
 'Which word is closest in meaning?',
 'Clandestine and covert both mean done in secret. Spies carry out clandestine operations to avoid detection.'),

('synonym', 'Disparage', 'To regard or represent as being of little worth', 'Belittle',
 ARRAY['Praise', 'Belittle', 'Admire', 'Elevate'],
 'Belittle',
 'Which word is closest in meaning?',
 'Disparage and belittle both mean to undervalue someone. Disparaging remarks can damage confidence.'),

('synonym', 'Exuberant', 'Filled with lively energy and excitement', 'Vivacious',
 ARRAY['Vivacious', 'Dull', 'Gloomy', 'Lethargic'],
 'Vivacious',
 'Which word is closest in meaning?',
 'Exuberant and vivacious both describe bubbling energy. An exuberant child runs, laughs, and plays tirelessly.'),

('synonym', 'Arduous', 'Involving or requiring strenuous effort; difficult', 'Grueling',
 ARRAY['Simple', 'Effortless', 'Grueling', 'Relaxing'],
 'Grueling',
 'Which word is closest in meaning?',
 'Arduous and grueling both describe extremely demanding tasks. Climbing Everest is an arduous undertaking.'),

('synonym', 'Astute', 'Having an ability to accurately assess situations', 'Shrewd',
 ARRAY['Naive', 'Shrewd', 'Foolish', 'Careless'],
 'Shrewd',
 'Which word is closest in meaning?',
 'Astute and shrewd both mean having sharp judgment. An astute investor spots opportunities others miss.'),

('synonym', 'Copious', 'Abundant in supply or quantity', 'Plentiful',
 ARRAY['Scarce', 'Plentiful', 'Limited', 'Meager'],
 'Plentiful',
 'Which word is closest in meaning?',
 'Copious and plentiful both mean in large amounts. After heavy rain, there is copious water in the rivers.'),

('synonym', 'Dearth', 'A scarcity or lack of something', 'Shortage',
 ARRAY['Surplus', 'Shortage', 'Abundance', 'Excess'],
 'Shortage',
 'Which word is closest in meaning?',
 'Dearth and shortage both mean not enough of something. A dearth of talent makes hiring difficult.'),

('synonym', 'Futile', 'Incapable of producing any useful result; pointless', 'Useless',
 ARRAY['Effective', 'Useless', 'Productive', 'Valuable'],
 'Useless',
 'Which word is closest in meaning?',
 'Futile and useless both mean producing no result. Arguing with a closed mind is a futile exercise.'),

('synonym', 'Impervious', 'Not allowing fluid to pass through; unaffected', 'Immune',
 ARRAY['Vulnerable', 'Immune', 'Sensitive', 'Exposed'],
 'Immune',
 'Which word is closest in meaning?',
 'Impervious and immune both mean unaffected. Some people seem impervious to criticism.'),

('synonym', 'Jovial', 'Cheerful and friendly in manner', 'Merry',
 ARRAY['Merry', 'Morose', 'Sullen', 'Grim'],
 'Merry',
 'Which word is closest in meaning?',
 'Jovial and merry both describe a happy, cheerful disposition. A jovial host makes every guest feel welcome.'),

('synonym', 'Kindle', 'To arouse or inspire an emotion or feeling', 'Ignite',
 ARRAY['Extinguish', 'Ignite', 'Suppress', 'Dampen'],
 'Ignite',
 'Which word is closest in meaning?',
 'Kindle and ignite both mean to spark something. A great teacher can kindle a lifelong love of learning.'),

('synonym', 'Meager', 'Lacking in quantity or quality; inadequate', 'Scanty',
 ARRAY['Abundant', 'Generous', 'Scanty', 'Ample'],
 'Scanty',
 'Which word is closest in meaning?',
 'Meager and scanty both mean too little. A meager salary barely covers basic expenses.'),

('synonym', 'Novice', 'A person new to or inexperienced in a field', 'Beginner',
 ARRAY['Expert', 'Beginner', 'Veteran', 'Master'],
 'Beginner',
 'Which word is closest in meaning?',
 'Novice and beginner both describe someone just starting out. Every expert was once a novice.'),

('synonym', 'Ominous', 'Giving the impression that something bad will happen', 'Foreboding',
 ARRAY['Promising', 'Foreboding', 'Cheerful', 'Hopeful'],
 'Foreboding',
 'Which word is closest in meaning?',
 'Ominous and foreboding both signal impending trouble. Dark storm clouds create an ominous atmosphere.'),

('synonym', 'Prudent', 'Acting with or showing care and thought for the future', 'Cautious',
 ARRAY['Reckless', 'Cautious', 'Careless', 'Impulsive'],
 'Cautious',
 'Which word is closest in meaning?',
 'Prudent and cautious both mean acting wisely. A prudent investor diversifies their portfolio.'),

('synonym', 'Rancor', 'Bitterness or resentfulness, especially long-standing', 'Animosity',
 ARRAY['Goodwill', 'Animosity', 'Affection', 'Harmony'],
 'Animosity',
 'Which word is closest in meaning?',
 'Rancor and animosity both describe deep-seated hostility. Old rancor between rivals can last for years.'),

('synonym', 'Steadfast', 'Resolutely or dutifully firm and unwavering', 'Resolute',
 ARRAY['Wavering', 'Resolute', 'Fickle', 'Hesitant'],
 'Resolute',
 'Which word is closest in meaning?',
 'Steadfast and resolute both mean firm and determined. A steadfast friend stands by you through thick and thin.'),

('synonym', 'Tranquil', 'Free from disturbance; calm and peaceful', 'Serene',
 ARRAY['Chaotic', 'Serene', 'Turbulent', 'Agitated'],
 'Serene',
 'Which word is closest in meaning?',
 'Tranquil and serene both describe peaceful calm. A tranquil lake at dawn provides perfect stillness.'),

('synonym', 'Unjust', 'Not based on or behaving according to principles of fairness', 'Inequitable',
 ARRAY['Fair', 'Inequitable', 'Balanced', 'Righteous'],
 'Inequitable',
 'Which word is closest in meaning?',
 'Unjust and inequitable both describe unfairness. An unjust law treats people differently without good reason.'),

('synonym', 'Vivid', 'Producing powerful feelings or clear images in the mind', 'Striking',
 ARRAY['Dull', 'Striking', 'Faded', 'Bland'],
 'Striking',
 'Which word is closest in meaning?',
 'Vivid and striking both describe something intensely clear. A vivid sunset paints the sky in unforgettable colors.'),

('synonym', 'Wary', 'Feeling or showing caution about possible dangers', 'Vigilant',
 ARRAY['Careless', 'Vigilant', 'Trusting', 'Naive'],
 'Vigilant',
 'Which word is closest in meaning?',
 'Wary and vigilant both mean watchful for danger. A wary traveler keeps a close eye on their surroundings.'),

('synonym', 'Zenith', 'The highest point reached by a celestial body or career', 'Peak',
 ARRAY['Nadir', 'Peak', 'Decline', 'Base'],
 'Peak',
 'Which word is closest in meaning?',
 'Zenith and peak both mean the highest point. An athlete at the zenith of their career performs at their absolute best.'),

('synonym', 'Altruistic', 'Showing a selfless concern for the well-being of others', 'Selfless',
 ARRAY['Selfish', 'Selfless', 'Greedy', 'Indifferent'],
 'Selfless',
 'Which word is closest in meaning?',
 'Altruistic and selfless both describe putting others first. Volunteering at a shelter is an altruistic act.'),

('synonym', 'Brazen', 'Bold and without shame; audaciously impudent', 'Shameless',
 ARRAY['Timid', 'Shameless', 'Modest', 'Humble'],
 'Shameless',
 'Which word is closest in meaning?',
 'Brazen and shameless both describe bold behavior without embarrassment. A brazen lie is told without a hint of guilt.'),

('synonym', 'Congenial', 'Pleasant because of shared interests or personality', 'Agreeable',
 ARRAY['Hostile', 'Agreeable', 'Irritating', 'Unpleasant'],
 'Agreeable',
 'Which word is closest in meaning?',
 'Congenial and agreeable both describe a pleasant, compatible nature. A congenial workplace makes going to work enjoyable.'),

('synonym', 'Dogmatic', 'Inclined to lay down principles as undeniably true', 'Rigid',
 ARRAY['Flexible', 'Rigid', 'Open-minded', 'Adaptable'],
 'Rigid',
 'Which word is closest in meaning?',
 'Dogmatic and rigid both describe an inflexible approach to beliefs. A dogmatic person refuses to consider other viewpoints.'),

('synonym', 'Elated', 'Extremely happy and excited; ecstatic', 'Ecstatic',
 ARRAY['Depressed', 'Ecstatic', 'Indifferent', 'Melancholy'],
 'Ecstatic',
 'Which word is closest in meaning?',
 'Elated and ecstatic both describe overwhelming joy. Winning a championship makes athletes feel elated.'),

('synonym', 'Fervid', 'Intensely enthusiastic or passionate', 'Passionate',
 ARRAY['Apathetic', 'Passionate', 'Indifferent', 'Lukewarm'],
 'Passionate',
 'Which word is closest in meaning?',
 'Fervid and passionate both describe intense feeling. A fervid supporter cheers with unwavering enthusiasm.');
