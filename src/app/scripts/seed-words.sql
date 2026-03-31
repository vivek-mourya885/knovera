-- ============================================================
-- Lexi (word_questions) seed data — Day 44 through 105
-- Paste this entire file into Supabase SQL Editor and run it
-- ============================================================

INSERT INTO word_questions (day_set, definition, options, answer, explanation) VALUES
(44, 'Providing a feeling of comfort, warmth, and relaxation; friendly and welcoming',
 ARRAY['Austere','Genial','Hostile','Rigid'], 'Genial',
 'Genial means warm, friendly, and cheerful. A genial host makes every guest feel welcome and at ease.'),

(45, 'Seemingly reasonable or probable but actually false or deceptive',
 ARRAY['Genuine','Plausible','Authentic','Verifiable'], 'Plausible',
 'Plausible means appearing worthy of belief but not necessarily true. A plausible excuse sounds convincing even if it isn''t factual.'),

(46, 'Having mixed feelings or contradictory ideas about something',
 ARRAY['Decisive','Certain','Ambivalent','Resolute'], 'Ambivalent',
 'Ambivalent means having simultaneously conflicting feelings about something. Many people feel ambivalent about big life changes.'),

(47, 'Inclined to lay down principles as undeniably true; overbearingly authoritative',
 ARRAY['Flexible','Dogmatic','Tolerant','Submissive'], 'Dogmatic',
 'Dogmatic means asserting opinions in an arrogant and inflexible way. A dogmatic person presents their beliefs as absolute facts.'),

(48, 'To officially forbid something; to ban or prohibit',
 ARRAY['Proscribe','Endorse','Sanction','Encourage'], 'Proscribe',
 'Proscribe means to formally forbid or condemn. Laws proscribe dangerous activities to protect public safety.'),

(49, 'A person who lives a solitary life and tends to avoid other people',
 ARRAY['Socialite','Recluse','Extrovert','Celebrity'], 'Recluse',
 'A recluse is someone who lives in seclusion and avoids society. Some famous authors were known recluses who shunned public attention.'),

(50, 'To make something less severe, serious, or painful; to lessen',
 ARRAY['Aggravate','Intensify','Mitigate','Worsen'], 'Mitigate',
 'Mitigate means to reduce the severity or impact of something negative. Wearing a seatbelt helps mitigate injuries in a car accident.'),

(51, 'Happening by a lucky chance; fortunate and unexpected',
 ARRAY['Deliberate','Planned','Serendipitous','Calculated'], 'Serendipitous',
 'Serendipitous describes a happy accident or fortunate discovery made by chance. Many scientific breakthroughs were serendipitous.'),

(52, 'Feeling or expressing overwhelming happiness or joyful excitement',
 ARRAY['Despondent','Euphoric','Melancholy','Morose'], 'Euphoric',
 'Euphoric means feeling intense excitement and happiness. Athletes often feel euphoric after winning a major competition.'),

(53, 'To praise enthusiastically; to raise in rank, power, or character',
 ARRAY['Demote','Criticize','Exalt','Diminish'], 'Exalt',
 'Exalt means to hold something in very high regard or to elevate in status. Great achievements exalt a person in the eyes of society.'),

(54, 'Extremely delicate and light, seeming too perfect for this world',
 ARRAY['Coarse','Mundane','Ethereal','Crude'], 'Ethereal',
 'Ethereal describes something exquisitely delicate and heavenly. The ethereal beauty of a sunrise over misty mountains feels otherworldly.'),

(55, 'Having an unpleasant smell; smelling extremely bad',
 ARRAY['Fragrant','Aromatic','Fetid','Perfumed'], 'Fetid',
 'Fetid means having a strong offensive smell. Stagnant water in a swamp often becomes fetid due to decaying organic matter.'),

(56, 'To destroy completely; to wipe out or obliterate',
 ARRAY['Create','Preserve','Annihilate','Restore'], 'Annihilate',
 'Annihilate means to destroy utterly and completely. The word comes from Latin meaning to reduce to nothing.'),

(57, 'Extremely hungry; suffering from severe lack of food',
 ARRAY['Satiated','Famished','Content','Nourished'], 'Famished',
 'Famished means extremely hungry, almost to the point of starvation. After a full day of hiking without lunch, you might feel famished.'),

(58, 'Tending to find fault or criticize; expressing disapproval',
 ARRAY['Supportive','Censorious','Lenient','Praising'], 'Censorious',
 'Censorious means severely critical of others. A censorious person is quick to judge and point out flaws in everything.'),

(59, 'An excessive amount of something; an oversupply',
 ARRAY['Scarcity','Deficit','Glut','Shortage'], 'Glut',
 'A glut is an excessively large supply of something. A glut of products on the market drives prices down due to oversupply.'),

(60, 'Impossible to stop or prevent; relentless and unstoppable',
 ARRAY['Avoidable','Inexorable','Preventable','Flexible'], 'Inexorable',
 'Inexorable means impossible to stop or prevent. The inexorable march of time waits for no one.'),

(61, 'To make a situation or problem worse; to irritate or annoy',
 ARRAY['Soothe','Exacerbate','Alleviate','Calm'], 'Exacerbate',
 'Exacerbate means to make something already bad even worse. Arguing during a disagreement can exacerbate the conflict.'),

(62, 'Extremely idealistic; unrealistic and impractical in the pursuit of perfection',
 ARRAY['Pragmatic','Quixotic','Realistic','Cynical'], 'Quixotic',
 'Quixotic comes from Don Quixote and means exceedingly idealistic and impractical. A quixotic quest is noble in intention but unlikely to succeed.'),

(63, 'Feeling or showing deep respect mixed with fear or wonder',
 ARRAY['Contemptuous','Irreverent','Reverent','Dismissive'], 'Reverent',
 'Reverent means showing deep respect and admiration. The audience sat in reverent silence as the symphony reached its final movement.'),

(64, 'To officially revoke or cancel a law, right, or agreement',
 ARRAY['Abrogate','Establish','Enact','Institute'], 'Abrogate',
 'Abrogate means to formally repeal or abolish a law, agreement, or right. A government may abrogate a treaty if it is no longer beneficial.'),

(65, 'A natural inclination or tendency toward a particular behavior',
 ARRAY['Aversion','Propensity','Reluctance','Hostility'], 'Propensity',
 'Propensity means a natural tendency to behave in a particular way. Someone with a propensity for generosity gives freely to others.'),

(66, 'Present, appearing, or found everywhere at the same time',
 ARRAY['Rare','Scarce','Ubiquitous','Uncommon'], 'Ubiquitous',
 'Ubiquitous means seeming to be everywhere at once. Smartphones have become ubiquitous in modern life.'),

(67, 'To strongly urge or advise; to caution or warn against something',
 ARRAY['Encourage','Admonish','Applaud','Condone'], 'Admonish',
 'Admonish means to warn or reprimand someone firmly but not harshly. A teacher might admonish students for not completing their homework.'),

(68, 'Fond of or inclined to drink alcohol; often slightly intoxicated',
 ARRAY['Abstemious','Sober','Bibulous','Temperate'], 'Bibulous',
 'Bibulous means overly fond of drinking alcohol. The word comes from the Latin bibere meaning to drink.'),

(69, 'A beginner or a person new to a subject, skill, or activity',
 ARRAY['Expert','Novice','Veteran','Specialist'], 'Novice',
 'A novice is someone who is new and inexperienced in a particular field. Every expert was once a novice who kept practicing.'),

(70, 'Existing in thought or as an idea but not having a physical or concrete existence',
 ARRAY['Tangible','Concrete','Abstract','Material'], 'Abstract',
 'Abstract describes concepts that exist as ideas rather than physical things. Love, justice, and freedom are abstract concepts.'),

(71, 'Arousing curiosity or interest; fascinating in a mysterious way',
 ARRAY['Boring','Intriguing','Tedious','Mundane'], 'Intriguing',
 'Intriguing means arousing great curiosity or interest. An intriguing mystery keeps you wanting to discover the truth.'),

(72, 'To gradually grow less or smaller; to decrease over time',
 ARRAY['Surge','Flourish','Dwindle','Expand'], 'Dwindle',
 'Dwindle means to gradually become smaller, fewer, or less. Savings can dwindle quickly if spending is not carefully managed.'),

(73, 'Extremely unpleasant or repulsive; causing horror or disgust',
 ARRAY['Delightful','Heinous','Pleasant','Charming'], 'Heinous',
 'Heinous means utterly wicked or shockingly evil. Heinous crimes are those considered the most morally reprehensible.'),

(74, 'A person who renounces a religious or political belief or principle',
 ARRAY['Devotee','Apostle','Apostate','Disciple'], 'Apostate',
 'An apostate is someone who abandons their previously held beliefs. Throughout history, apostates have been both condemned and celebrated.'),

(75, 'Lacking energy; feeling weak, tired, and without enthusiasm',
 ARRAY['Energetic','Languid','Vigorous','Dynamic'], 'Languid',
 'Languid means having a slow, relaxed quality reflecting a lack of energy. On a hot summer afternoon, people often feel languid.'),

(76, 'Expressed in a way that is brief and clearly stated; to the point',
 ARRAY['Rambling','Wordy','Succinct','Lengthy'], 'Succinct',
 'Succinct means using few words to express something clearly. A succinct summary captures the main points without unnecessary detail.'),

(77, 'Mercy or leniency shown to someone being punished; forgiveness',
 ARRAY['Vindictiveness','Clemency','Vengeance','Severity'], 'Clemency',
 'Clemency means mercy or leniency shown to someone being punished. A governor may grant clemency to a prisoner by reducing their sentence.'),

(78, 'To regard someone with great respect and warm approval; to admire deeply',
 ARRAY['Despise','Loathe','Esteem','Scorn'], 'Esteem',
 'Esteem means to regard someone with great respect and admiration. A teacher held in high esteem is valued by students and colleagues.'),

(79, 'Eager or quick to argue or fight; aggressively defiant',
 ARRAY['Peaceful','Bellicose','Gentle','Submissive'], 'Bellicose',
 'Bellicose means demonstrating aggression and willingness to fight. Bellicose rhetoric between nations can increase tensions.'),

(80, 'A state of great disturbance, confusion, or uncertainty',
 ARRAY['Serenity','Harmony','Turmoil','Calm'], 'Turmoil',
 'Turmoil means a state of great confusion and disorder. Political turmoil can disrupt economies and everyday life.'),

(81, 'Having or showing a feeling of superiority and disdain for others',
 ARRAY['Humble','Modest','Supercilious','Respectful'], 'Supercilious',
 'Supercilious means behaving as if one is superior to others. A supercilious person looks down on those they consider beneath them.'),

(82, 'Something that is essential or very important; absolutely necessary',
 ARRAY['Optional','Trivial','Imperative','Negligible'], 'Imperative',
 'Imperative means of vital importance or urgently required. In an emergency, quick action is imperative to save lives.'),

(83, 'The use of irony to mock or convey contempt; biting wit',
 ARRAY['Compliment','Flattery','Sarcasm','Praise'], 'Sarcasm',
 'Sarcasm uses irony to mock or express contempt. While sarcasm can be humorous, it can also hurt feelings when used carelessly.'),

(84, 'To officially revoke or cancel a law or act of legislation',
 ARRAY['Ratify','Repeal','Enact','Approve'], 'Repeal',
 'Repeal means to officially revoke or annul a law. Congress can repeal legislation that is no longer considered necessary or just.'),

(85, 'Tending to delay or postpone action; habitually slow to act',
 ARRAY['Prompt','Proactive','Dilatory','Punctual'], 'Dilatory',
 'Dilatory means causing delay or intended to waste time. Dilatory tactics in negotiations are used to stall progress.'),

(86, 'Extremely happy and enthusiastic; overjoyed',
 ARRAY['Miserable','Despondent','Elated','Gloomy'], 'Elated',
 'Elated means feeling great happiness and triumph. Receiving unexpected good news can leave someone feeling elated.'),

(87, 'Done or made using whatever is available; improvised and unplanned',
 ARRAY['Rehearsed','Planned','Impromptu','Scheduled'], 'Impromptu',
 'Impromptu means done without preparation or planning. An impromptu speech is delivered on the spot without prior rehearsal.'),

(88, 'To assign a cause or credit to a particular source or origin',
 ARRAY['Attribute','Withhold','Conceal','Deny'], 'Attribute',
 'Attribute means to assign a cause or credit to something. Scientists attribute climate change to the increase in greenhouse gases.'),

(89, 'Showing deep sincerity or seriousness; heartfelt and passionate',
 ARRAY['Insincere','Earnest','Apathetic','Flippant'], 'Earnest',
 'Earnest means showing sincere and intense conviction. An earnest plea comes from the heart and demonstrates genuine feeling.'),

(90, 'To bring something back to life, health, or good condition; to revive',
 ARRAY['Destroy','Rejuvenate','Deteriorate','Neglect'], 'Rejuvenate',
 'Rejuvenate means to make someone or something look or feel younger or more vital. A vacation can rejuvenate both body and mind.'),

(91, 'Having a strong dislike or opposition to something; unwilling',
 ARRAY['Willing','Averse','Eager','Inclined'], 'Averse',
 'Averse means having a strong feeling of opposition toward something. Someone who is risk-averse avoids taking chances.'),

(92, 'A long and angry speech of criticism or accusation; a verbal attack',
 ARRAY['Eulogy','Tirade','Compliment','Accolade'], 'Tirade',
 'A tirade is a prolonged outburst of angry criticism. Launching into a tirade rarely persuades anyone and usually makes things worse.'),

(93, 'Feeling or showing deep regret for wrongdoing; repentant and apologetic',
 ARRAY['Defiant','Remorseful','Unrepentant','Brazen'], 'Remorseful',
 'Remorseful means feeling deep regret for something wrong one has done. A remorseful apology acknowledges the harm caused.'),

(94, 'To increase in speed, rate, or progress; to hasten or quicken',
 ARRAY['Decelerate','Impede','Expedite','Hinder'], 'Expedite',
 'Expedite means to speed up the progress of something. Paying extra for express shipping can expedite delivery of a package.'),

(95, 'Having a meaning that is mysterious or obscure; hard to decipher',
 ARRAY['Transparent','Cryptic','Obvious','Explicit'], 'Cryptic',
 'Cryptic means having a hidden or ambiguous meaning. A cryptic message requires careful thought and interpretation to understand.'),

(96, 'Extremely beautiful and, typically, delicate in a way that suggests refined taste',
 ARRAY['Crude','Hideous','Exquisite','Grotesque'], 'Exquisite',
 'Exquisite means intensely beautiful and finely made. An exquisite piece of jewelry showcases exceptional craftsmanship.'),

(97, 'To make someone extremely angry and impatient; to infuriate',
 ARRAY['Soothe','Pacify','Exasperate','Comfort'], 'Exasperate',
 'Exasperate means to irritate intensely. Repeating the same mistake over and over can exasperate even the most patient person.'),

(98, 'A deep-seated feeling of dislike or aversion; instinctive hostility',
 ARRAY['Affinity','Fondness','Antipathy','Attraction'], 'Antipathy',
 'Antipathy means a deep-seated feeling of dislike or aversion. There was mutual antipathy between the two rivals from the start.'),

(99, 'To officially declare or make clearly known; to announce publicly',
 ARRAY['Conceal','Suppress','Proclaim','Whisper'], 'Proclaim',
 'Proclaim means to announce officially or publicly. Leaders proclaim new policies to inform citizens of important changes.'),

(100, 'Harsh and stern in manner or appearance; severely simple and without luxury',
 ARRAY['Cheerful','Jovial','Austere','Welcoming'], 'Austere',
 'Austere means strict, severe, or lacking comfort and luxury. An austere lifestyle involves minimal possessions and simple living.'),

(101, 'To weaken or wear away something gradually or insidiously',
 ARRAY['Strengthen','Bolster','Erode','Reinforce'], 'Erode',
 'Erode means to gradually wear away or diminish. Trust can erode slowly if promises are repeatedly broken.'),

(102, 'Deceitful and untrustworthy; acting in a sneaky or dishonest way',
 ARRAY['Forthright','Devious','Candid','Honest'], 'Devious',
 'Devious means showing a skillful use of underhanded tactics to achieve goals. A devious plan involves cunning deception.'),

(103, 'To make an accusation seem less serious; to provide partial excuses for wrongdoing',
 ARRAY['Aggravate','Extenuate','Intensify','Condemn'], 'Extenuate',
 'Extenuate means to lessen the seriousness of an offense by providing partial excuses. Extenuating circumstances may influence a judge''s sentencing decision.'),

(104, 'Easily influenced or harmed by something; open to attack or damage',
 ARRAY['Invincible','Impervious','Vulnerable','Fortified'], 'Vulnerable',
 'Vulnerable means exposed to the possibility of being harmed physically or emotionally. Being vulnerable takes courage and builds deeper connections.'),

(105, 'Deep respect for someone or something; a feeling of profound awe and admiration',
 ARRAY['Contempt','Disdain','Reverence','Scorn'], 'Reverence',
 'Reverence means deep respect and admiration. Many cultures show reverence for their elders and ancestral traditions.');
