import json, urllib.request, ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = "https://hvgazusuwcbyfchcidby.supabase.co/rest/v1/word_questions"
headers = {
    "apikey": "sb_publishable_NbVHnnXIUpg7cPNSRMb72g_vkV8y0LW",
    "Authorization": "Bearer sb_publishable_NbVHnnXIUpg7cPNSRMb72g_vkV8y0LW",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

words = [
    {"day_set": 44, "definition": "Providing a feeling of comfort, warmth, and relaxation; friendly and welcoming", "options": ["Austere","Genial","Hostile","Rigid"], "answer": "Genial", "explanation": "Genial means warm, friendly, and cheerful. A genial host makes every guest feel welcome and at ease."},
    {"day_set": 45, "definition": "Seemingly reasonable or probable but actually false or deceptive", "options": ["Genuine","Plausible","Authentic","Verifiable"], "answer": "Plausible", "explanation": "Plausible means appearing worthy of belief but not necessarily true."},
    {"day_set": 46, "definition": "Having mixed feelings or contradictory ideas about something", "options": ["Decisive","Certain","Ambivalent","Resolute"], "answer": "Ambivalent", "explanation": "Ambivalent means having simultaneously conflicting feelings about something."},
    {"day_set": 47, "definition": "Inclined to lay down principles as undeniably true; overbearingly authoritative", "options": ["Flexible","Dogmatic","Tolerant","Submissive"], "answer": "Dogmatic", "explanation": "Dogmatic means asserting opinions in an arrogant and inflexible way."},
    {"day_set": 48, "definition": "To officially forbid something; to ban or prohibit", "options": ["Proscribe","Endorse","Sanction","Encourage"], "answer": "Proscribe", "explanation": "Proscribe means to formally forbid or condemn."},
    {"day_set": 49, "definition": "A person who lives a solitary life and tends to avoid other people", "options": ["Socialite","Recluse","Extrovert","Celebrity"], "answer": "Recluse", "explanation": "A recluse is someone who lives in seclusion and avoids society."},
    {"day_set": 50, "definition": "To make something less severe, serious, or painful; to lessen", "options": ["Aggravate","Intensify","Mitigate","Worsen"], "answer": "Mitigate", "explanation": "Mitigate means to reduce the severity or impact of something negative."},
    {"day_set": 51, "definition": "Happening by a lucky chance; fortunate and unexpected", "options": ["Deliberate","Planned","Serendipitous","Calculated"], "answer": "Serendipitous", "explanation": "Serendipitous describes a happy accident or fortunate discovery made by chance."},
    {"day_set": 52, "definition": "Feeling or expressing overwhelming happiness or joyful excitement", "options": ["Despondent","Euphoric","Melancholy","Morose"], "answer": "Euphoric", "explanation": "Euphoric means feeling intense excitement and happiness."},
    {"day_set": 53, "definition": "To praise enthusiastically; to raise in rank, power, or character", "options": ["Demote","Criticize","Exalt","Diminish"], "answer": "Exalt", "explanation": "Exalt means to hold something in very high regard or to elevate in status."},
    {"day_set": 54, "definition": "Extremely delicate and light, seeming too perfect for this world", "options": ["Coarse","Mundane","Ethereal","Crude"], "answer": "Ethereal", "explanation": "Ethereal describes something exquisitely delicate and heavenly."},
    {"day_set": 55, "definition": "Having an unpleasant smell; smelling extremely bad", "options": ["Fragrant","Aromatic","Fetid","Perfumed"], "answer": "Fetid", "explanation": "Fetid means having a strong offensive smell."},
    {"day_set": 56, "definition": "To destroy completely; to wipe out or obliterate", "options": ["Create","Preserve","Annihilate","Restore"], "answer": "Annihilate", "explanation": "Annihilate means to destroy utterly and completely."},
    {"day_set": 57, "definition": "Extremely hungry; suffering from severe lack of food", "options": ["Satiated","Famished","Content","Nourished"], "answer": "Famished", "explanation": "Famished means extremely hungry, almost to the point of starvation."},
    {"day_set": 58, "definition": "Tending to find fault or criticize; expressing disapproval", "options": ["Supportive","Censorious","Lenient","Praising"], "answer": "Censorious", "explanation": "Censorious means severely critical of others."},
    {"day_set": 59, "definition": "An excessive amount of something; an oversupply", "options": ["Scarcity","Deficit","Glut","Shortage"], "answer": "Glut", "explanation": "A glut is an excessively large supply of something."},
    {"day_set": 60, "definition": "Impossible to stop or prevent; relentless and unstoppable", "options": ["Avoidable","Inexorable","Preventable","Flexible"], "answer": "Inexorable", "explanation": "Inexorable means impossible to stop or prevent."},
    {"day_set": 61, "definition": "To make a situation or problem worse; to irritate or annoy", "options": ["Soothe","Exacerbate","Alleviate","Calm"], "answer": "Exacerbate", "explanation": "Exacerbate means to make something already bad even worse."},
    {"day_set": 62, "definition": "Extremely idealistic; unrealistic and impractical in the pursuit of perfection", "options": ["Pragmatic","Quixotic","Realistic","Cynical"], "answer": "Quixotic", "explanation": "Quixotic comes from Don Quixote and means exceedingly idealistic and impractical."},
    {"day_set": 63, "definition": "Feeling or showing deep respect mixed with fear or wonder", "options": ["Contemptuous","Irreverent","Reverent","Dismissive"], "answer": "Reverent", "explanation": "Reverent means showing deep respect and admiration."},
    {"day_set": 64, "definition": "To officially revoke or cancel a law, right, or agreement", "options": ["Abrogate","Establish","Enact","Institute"], "answer": "Abrogate", "explanation": "Abrogate means to formally repeal or abolish a law, agreement, or right."},
    {"day_set": 65, "definition": "A natural inclination or tendency toward a particular behavior", "options": ["Aversion","Propensity","Reluctance","Hostility"], "answer": "Propensity", "explanation": "Propensity means a natural tendency to behave in a particular way."},
    {"day_set": 66, "definition": "Present, appearing, or found everywhere at the same time", "options": ["Rare","Scarce","Ubiquitous","Uncommon"], "answer": "Ubiquitous", "explanation": "Ubiquitous means seeming to be everywhere at once."},
    {"day_set": 67, "definition": "To strongly urge or advise; to caution or warn against something", "options": ["Encourage","Admonish","Applaud","Condone"], "answer": "Admonish", "explanation": "Admonish means to warn or reprimand someone firmly but not harshly."},
    {"day_set": 68, "definition": "Fond of or inclined to drink alcohol; often slightly intoxicated", "options": ["Abstemious","Sober","Bibulous","Temperate"], "answer": "Bibulous", "explanation": "Bibulous means overly fond of drinking alcohol."},
    {"day_set": 69, "definition": "A beginner or a person new to a subject, skill, or activity", "options": ["Expert","Novice","Veteran","Specialist"], "answer": "Novice", "explanation": "A novice is someone who is new and inexperienced in a particular field."},
    {"day_set": 70, "definition": "Existing in thought or as an idea but not having a physical or concrete existence", "options": ["Tangible","Concrete","Abstract","Material"], "answer": "Abstract", "explanation": "Abstract describes concepts that exist as ideas rather than physical things."},
    {"day_set": 71, "definition": "Arousing curiosity or interest; fascinating in a mysterious way", "options": ["Boring","Intriguing","Tedious","Mundane"], "answer": "Intriguing", "explanation": "Intriguing means arousing great curiosity or interest."},
    {"day_set": 72, "definition": "To gradually grow less or smaller; to decrease over time", "options": ["Surge","Flourish","Dwindle","Expand"], "answer": "Dwindle", "explanation": "Dwindle means to gradually become smaller, fewer, or less."},
    {"day_set": 73, "definition": "Extremely unpleasant or repulsive; causing horror or disgust", "options": ["Delightful","Heinous","Pleasant","Charming"], "answer": "Heinous", "explanation": "Heinous means utterly wicked or shockingly evil."},
    {"day_set": 74, "definition": "A person who renounces a religious or political belief or principle", "options": ["Devotee","Apostle","Apostate","Disciple"], "answer": "Apostate", "explanation": "An apostate is someone who abandons their previously held beliefs."},
    {"day_set": 75, "definition": "Lacking energy; feeling weak, tired, and without enthusiasm", "options": ["Energetic","Languid","Vigorous","Dynamic"], "answer": "Languid", "explanation": "Languid means having a slow, relaxed quality reflecting a lack of energy."},
    {"day_set": 76, "definition": "Expressed in a way that is brief and clearly stated; to the point", "options": ["Rambling","Wordy","Succinct","Lengthy"], "answer": "Succinct", "explanation": "Succinct means using few words to express something clearly."},
    {"day_set": 77, "definition": "Mercy or leniency shown to someone being punished; forgiveness", "options": ["Vindictiveness","Clemency","Vengeance","Severity"], "answer": "Clemency", "explanation": "Clemency means mercy or leniency shown to someone being punished."},
    {"day_set": 78, "definition": "To regard someone with great respect and warm approval; to admire deeply", "options": ["Despise","Loathe","Esteem","Scorn"], "answer": "Esteem", "explanation": "Esteem means to regard someone with great respect and admiration."},
    {"day_set": 79, "definition": "Eager or quick to argue or fight; aggressively defiant", "options": ["Peaceful","Bellicose","Gentle","Submissive"], "answer": "Bellicose", "explanation": "Bellicose means demonstrating aggression and willingness to fight."},
    {"day_set": 80, "definition": "A state of great disturbance, confusion, or uncertainty", "options": ["Serenity","Harmony","Turmoil","Calm"], "answer": "Turmoil", "explanation": "Turmoil means a state of great confusion and disorder."},
    {"day_set": 81, "definition": "Having or showing a feeling of superiority and disdain for others", "options": ["Humble","Modest","Supercilious","Respectful"], "answer": "Supercilious", "explanation": "Supercilious means behaving as if one is superior to others."},
    {"day_set": 82, "definition": "Something that is essential or very important; absolutely necessary", "options": ["Optional","Trivial","Imperative","Negligible"], "answer": "Imperative", "explanation": "Imperative means of vital importance or urgently required."},
    {"day_set": 83, "definition": "The use of irony to mock or convey contempt; biting wit", "options": ["Compliment","Flattery","Sarcasm","Praise"], "answer": "Sarcasm", "explanation": "Sarcasm uses irony to mock or express contempt."},
    {"day_set": 84, "definition": "To officially revoke or cancel a law or act of legislation", "options": ["Ratify","Repeal","Enact","Approve"], "answer": "Repeal", "explanation": "Repeal means to officially revoke or annul a law."},
    {"day_set": 85, "definition": "Tending to delay or postpone action; habitually slow to act", "options": ["Prompt","Proactive","Dilatory","Punctual"], "answer": "Dilatory", "explanation": "Dilatory means causing delay or intended to waste time."},
    {"day_set": 86, "definition": "Extremely happy and enthusiastic; overjoyed", "options": ["Miserable","Despondent","Elated","Gloomy"], "answer": "Elated", "explanation": "Elated means feeling great happiness and triumph."},
    {"day_set": 87, "definition": "Done or made using whatever is available; improvised and unplanned", "options": ["Rehearsed","Planned","Impromptu","Scheduled"], "answer": "Impromptu", "explanation": "Impromptu means done without preparation or planning."},
    {"day_set": 88, "definition": "To assign a cause or credit to a particular source or origin", "options": ["Attribute","Withhold","Conceal","Deny"], "answer": "Attribute", "explanation": "Attribute means to assign a cause or credit to something."},
    {"day_set": 89, "definition": "Showing deep sincerity or seriousness; heartfelt and passionate", "options": ["Insincere","Earnest","Apathetic","Flippant"], "answer": "Earnest", "explanation": "Earnest means showing sincere and intense conviction."},
    {"day_set": 90, "definition": "To bring something back to life, health, or good condition; to revive", "options": ["Destroy","Rejuvenate","Deteriorate","Neglect"], "answer": "Rejuvenate", "explanation": "Rejuvenate means to make someone or something look or feel younger or more vital."},
    {"day_set": 91, "definition": "Having a strong dislike or opposition to something; unwilling", "options": ["Willing","Averse","Eager","Inclined"], "answer": "Averse", "explanation": "Averse means having a strong feeling of opposition toward something."},
    {"day_set": 92, "definition": "A long and angry speech of criticism or accusation; a verbal attack", "options": ["Eulogy","Tirade","Compliment","Accolade"], "answer": "Tirade", "explanation": "A tirade is a prolonged outburst of angry criticism."},
    {"day_set": 93, "definition": "Feeling or showing deep regret for wrongdoing; repentant and apologetic", "options": ["Defiant","Remorseful","Unrepentant","Brazen"], "answer": "Remorseful", "explanation": "Remorseful means feeling deep regret for something wrong one has done."},
    {"day_set": 94, "definition": "To increase in speed, rate, or progress; to hasten or quicken", "options": ["Decelerate","Impede","Expedite","Hinder"], "answer": "Expedite", "explanation": "Expedite means to speed up the progress of something."},
    {"day_set": 95, "definition": "Having a meaning that is mysterious or obscure; hard to decipher", "options": ["Transparent","Cryptic","Obvious","Explicit"], "answer": "Cryptic", "explanation": "Cryptic means having a hidden or ambiguous meaning."},
    {"day_set": 96, "definition": "Extremely beautiful and delicate in a way that suggests refined taste", "options": ["Crude","Hideous","Exquisite","Grotesque"], "answer": "Exquisite", "explanation": "Exquisite means intensely beautiful and finely made."},
    {"day_set": 97, "definition": "To make someone extremely angry and impatient; to infuriate", "options": ["Soothe","Pacify","Exasperate","Comfort"], "answer": "Exasperate", "explanation": "Exasperate means to irritate intensely."},
    {"day_set": 98, "definition": "A deep-seated feeling of dislike or aversion; instinctive hostility", "options": ["Affinity","Fondness","Antipathy","Attraction"], "answer": "Antipathy", "explanation": "Antipathy means a deep-seated feeling of dislike or aversion."},
    {"day_set": 99, "definition": "To officially declare or make clearly known; to announce publicly", "options": ["Conceal","Suppress","Proclaim","Whisper"], "answer": "Proclaim", "explanation": "Proclaim means to announce officially or publicly."},
    {"day_set": 100, "definition": "Harsh and stern in manner or appearance; severely simple and without luxury", "options": ["Cheerful","Jovial","Austere","Welcoming"], "answer": "Austere", "explanation": "Austere means strict, severe, or lacking comfort and luxury."},
    {"day_set": 101, "definition": "To weaken or wear away something gradually or insidiously", "options": ["Strengthen","Bolster","Erode","Reinforce"], "answer": "Erode", "explanation": "Erode means to gradually wear away or diminish."},
    {"day_set": 102, "definition": "Deceitful and untrustworthy; acting in a sneaky or dishonest way", "options": ["Forthright","Devious","Candid","Honest"], "answer": "Devious", "explanation": "Devious means showing a skillful use of underhanded tactics to achieve goals."},
    {"day_set": 103, "definition": "To make an accusation seem less serious; to provide partial excuses for wrongdoing", "options": ["Aggravate","Extenuate","Intensify","Condemn"], "answer": "Extenuate", "explanation": "Extenuate means to lessen the seriousness of an offense by providing partial excuses."},
    {"day_set": 104, "definition": "Easily influenced or harmed by something; open to attack or damage", "options": ["Invincible","Impervious","Vulnerable","Fortified"], "answer": "Vulnerable", "explanation": "Vulnerable means exposed to the possibility of being harmed physically or emotionally."},
    {"day_set": 105, "definition": "Deep respect for someone or something; a feeling of profound awe and admiration", "options": ["Contempt","Disdain","Reverence","Scorn"], "answer": "Reverence", "explanation": "Reverence means deep respect and admiration."},
]

for i in range(0, len(words), 30):
    batch = words[i:i+30]
    body = json.dumps(batch).encode()
    req = urllib.request.Request(url, data=body, headers=headers, method="POST")
    resp = urllib.request.urlopen(req, context=ctx)
    print(f"Batch {i//30+1} (day_set {batch[0]['day_set']}-{batch[-1]['day_set']}): {resp.status} {resp.reason}")

print(f"\nDone! Inserted {len(words)} words total.")
