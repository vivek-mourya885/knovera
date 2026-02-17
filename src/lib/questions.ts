// src/lib/questions.ts

export interface Question {
  question: {
    en: string;
    hi: string;
  };
  options: {
    en: string[];
    hi: string[];
  };
  answer: {
    en: string;
    hi: string;
  };
  explanation: {
    en: string;
    hi: string;
  };
}

const ALL_QUESTIONS: Question[] = [
  // ===== DAY 1 SET (Q1-Q5) =====
  {
    question: {
      en: "Which article of the Indian Constitution deals with the Right to Equality?",
      hi: "भारतीय संविधान का कौन सा अनुच्छेद समानता के अधिकार से संबंधित है?",
    },
    options: {
      en: ["Article 12", "Article 14", "Article 19", "Article 21"],
      hi: ["अनुच्छेद 12", "अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21"],
    },
    answer: { en: "Article 14", hi: "अनुच्छेद 14" },
    explanation: {
      en: "Article 14 guarantees equality before law and equal protection of laws.",
      hi: "अनुच्छेद 14 कानून के समक्ष समानता और कानूनों के समान संरक्षण की गारंटी देता है।",
    },
  },
  {
    question: {
      en: "Who is known as the Father of the Indian Constitution?",
      hi: "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",
    },
    options: {
      en: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Rajendra Prasad"],
      hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी. आर. अंबेडकर", "राजेंद्र प्रसाद"],
    },
    answer: { en: "B. R. Ambedkar", hi: "बी. आर. अंबेडकर" },
    explanation: {
      en: "Dr. B. R. Ambedkar chaired the Drafting Committee of the Constitution.",
      hi: "डॉ. बी. आर. अंबेडकर ने संविधान की मसौदा समिति की अध्यक्षता की।",
    },
  },
  {
    question: {
      en: "The Quit India Movement was launched in which year?",
      hi: "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
    },
    options: {
      en: ["1940", "1942", "1945", "1939"],
      hi: ["1940", "1942", "1945", "1939"],
    },
    answer: { en: "1942", hi: "1942" },
    explanation: {
      en: "Quit India Movement was launched on 8 August 1942.",
      hi: "भारत छोड़ो आंदोलन 8 अगस्त 1942 को शुरू हुआ।",
    },
  },
  {
    question: {
      en: "Which is the longest river in India?",
      hi: "भारत की सबसे लंबी नदी कौन सी है?",
    },
    options: {
      en: ["Yamuna", "Ganga", "Godavari", "Brahmaputra"],
      hi: ["यमुना", "गंगा", "गोदावरी", "ब्रह्मपुत्र"],
    },
    answer: { en: "Ganga", hi: "गंगा" },
    explanation: {
      en: "The Ganga is the longest river in India at approximately 2,525 km.",
      hi: "गंगा लगभग 2,525 किमी के साथ भारत की सबसे लंबी नदी है।",
    },
  },
  {
    question: {
      en: "What is the chemical formula of water?",
      hi: "पानी का रासायनिक सूत्र क्या है?",
    },
    options: {
      en: ["H2O", "CO2", "NaCl", "O2"],
      hi: ["H2O", "CO2", "NaCl", "O2"],
    },
    answer: { en: "H2O", hi: "H2O" },
    explanation: {
      en: "Water consists of two hydrogen atoms and one oxygen atom (H2O).",
      hi: "पानी दो हाइड्रोजन परमाणुओं और एक ऑक्सीजन परमाणु (H2O) से बना है।",
    },
  },

  // ===== DAY 2 SET (Q6-Q10) =====
  {
    question: {
      en: "Which body conducts elections in India?",
      hi: "भारत में चुनाव कौन सी संस्था कराती है?",
    },
    options: {
      en: ["Supreme Court", "Parliament", "Election Commission", "President"],
      hi: ["सर्वोच्च न्यायालय", "संसद", "चुनाव आयोग", "राष्ट्रपति"],
    },
    answer: { en: "Election Commission", hi: "चुनाव आयोग" },
    explanation: {
      en: "Elections are conducted by the Election Commission of India.",
      hi: "भारत में चुनाव भारतीय चुनाव आयोग द्वारा कराए जाते हैं।",
    },
  },
  {
    question: {
      en: "What is the maximum tenure of the Lok Sabha?",
      hi: "लोकसभा का अधिकतम कार्यकाल कितना है?",
    },
    options: {
      en: ["4 years", "5 years", "6 years", "7 years"],
      hi: ["4 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
    },
    answer: { en: "5 years", hi: "5 वर्ष" },
    explanation: {
      en: "Lok Sabha has a maximum tenure of five years.",
      hi: "लोकसभा का अधिकतम कार्यकाल पांच वर्ष है।",
    },
  },
  {
    question: {
      en: "Who was the first Governor-General of independent India?",
      hi: "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
    },
    options: {
      en: ["Lord Mountbatten", "C. Rajagopalachari", "Rajendra Prasad", "Jawaharlal Nehru"],
      hi: ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "राजेंद्र प्रसाद", "जवाहरलाल नेहरू"],
    },
    answer: { en: "Lord Mountbatten", hi: "लॉर्ड माउंटबेटन" },
    explanation: {
      en: "Lord Mountbatten was the first Governor-General of independent India (1947-48).",
      hi: "लॉर्ड माउंटबेटन स्वतंत्र भारत के पहले गवर्नर-जनरल थे (1947-48)।",
    },
  },
  {
    question: {
      en: "Which planet is known as the Red Planet?",
      hi: "किस ग्रह को लाल ग्रह के रूप में जाना जाता है?",
    },
    options: {
      en: ["Venus", "Mars", "Jupiter", "Saturn"],
      hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    },
    answer: { en: "Mars", hi: "मंगल" },
    explanation: {
      en: "Mars appears red due to iron oxide (rust) on its surface.",
      hi: "मंगल अपनी सतह पर आयरन ऑक्साइड (जंग) के कारण लाल दिखता है।",
    },
  },
  {
    question: {
      en: "Which is the smallest state of India by area?",
      hi: "क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन सा है?",
    },
    options: {
      en: ["Goa", "Sikkim", "Tripura", "Mizoram"],
      hi: ["गोवा", "सिक्किम", "त्रिपुरा", "मिजोरम"],
    },
    answer: { en: "Goa", hi: "गोवा" },
    explanation: {
      en: "Goa is the smallest state of India by area (3,702 sq km).",
      hi: "गोवा क्षेत्रफल (3,702 वर्ग किमी) के अनुसार भारत का सबसे छोटा राज्य है।",
    },
  },

  // ===== DAY 3 SET (Q11-Q15) =====
  {
    question: {
      en: "How many Fundamental Rights are guaranteed by the Indian Constitution?",
      hi: "भारतीय संविधान द्वारा कितने मौलिक अधिकारों की गारंटी दी गई है?",
    },
    options: {
      en: ["5", "6", "7", "8"],
      hi: ["5", "6", "7", "8"],
    },
    answer: { en: "6", hi: "6" },
    explanation: {
      en: "Originally 7 Fundamental Rights were granted, but Right to Property was removed. Now there are 6.",
      hi: "मूल रूप से 7 मौलिक अधिकार दिए गए थे, लेकिन संपत्ति का अधिकार हटा दिया गया। अब 6 हैं।",
    },
  },
  {
    question: {
      en: "The Battle of Plassey was fought in which year?",
      hi: "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
    },
    options: {
      en: ["1757", "1764", "1857", "1947"],
      hi: ["1757", "1764", "1857", "1947"],
    },
    answer: { en: "1757", hi: "1757" },
    explanation: {
      en: "The Battle of Plassey (1757) established British East India Company's power in India.",
      hi: "प्लासी की लड़ाई (1757) ने भारत में ब्रिटिश ईस्ट इंडिया कंपनी की शक्ति स्थापित की।",
    },
  },
  {
    question: {
      en: "Which mountain range separates India from Tibet?",
      hi: "कौन सी पर्वत श्रृंखला भारत को तिब्बत से अलग करती है?",
    },
    options: {
      en: ["Aravalli", "Vindhya", "Himalayas", "Satpura"],
      hi: ["अरावली", "विंध्य", "हिमालय", "सतपुड़ा"],
    },
    answer: { en: "Himalayas", hi: "हिमालय" },
    explanation: {
      en: "The Himalayas form a natural barrier between India and Tibet.",
      hi: "हिमालय भारत और तिब्बत के बीच एक प्राकृतिक बाधा है।",
    },
  },
  {
    question: {
      en: "Who invented the telephone?",
      hi: "टेलीफोन का आविष्कार किसने किया?",
    },
    options: {
      en: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
      hi: ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "गुग्लिएल्मो मार्कोनी"],
    },
    answer: { en: "Alexander Graham Bell", hi: "अलेक्जेंडर ग्राहम बेल" },
    explanation: {
      en: "Alexander Graham Bell patented the first telephone in 1876.",
      hi: "अलेक्जेंडर ग्राहम बेल ने 1876 में पहले टेलीफोन का पेटेंट कराया।",
    },
  },
  {
    question: {
      en: "What is the national animal of India?",
      hi: "भारत का राष्ट्रीय पशु क्या है?",
    },
    options: {
      en: ["Lion", "Tiger", "Elephant", "Peacock"],
      hi: ["शेर", "बाघ", "हाथी", "मोर"],
    },
    answer: { en: "Tiger", hi: "बाघ" },
    explanation: {
      en: "The Royal Bengal Tiger is the national animal of India.",
      hi: "रॉयल बंगाल टाइगर भारत का राष्ट्रीय पशु है।",
    },
  },

  // ===== DAY 4 SET (Q16-Q20) =====
  {
    question: {
      en: "Who appoints the Chief Justice of India?",
      hi: "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
    },
    options: {
      en: ["Prime Minister", "President", "Parliament", "Law Minister"],
      hi: ["प्रधानमंत्री", "राष्ट्रपति", "संसद", "कानून मंत्री"],
    },
    answer: { en: "President", hi: "राष्ट्रपति" },
    explanation: {
      en: "The President of India appoints the Chief Justice of India.",
      hi: "भारत के राष्ट्रपति भारत के मुख्य न्यायाधीश की नियुक्ति करते हैं।",
    },
  },
  {
    question: {
      en: "Who founded the Indian National Congress?",
      hi: "भारतीय राष्ट्रीय कांग्रेस की स्थापना किसने की?",
    },
    options: {
      en: ["A.O. Hume", "Dadabhai Naoroji", "W.C. Bonnerjee", "Surendranath Banerjee"],
      hi: ["ए.ओ. ह्यूम", "दादाभाई नौरोजी", "डब्ल्यू.सी. बनर्जी", "सुरेंद्रनाथ बनर्जी"],
    },
    answer: { en: "A.O. Hume", hi: "ए.ओ. ह्यूम" },
    explanation: {
      en: "Allan Octavian Hume founded the Indian National Congress in 1885.",
      hi: "एलन ऑक्टेवियन ह्यूम ने 1885 में भारतीय राष्ट्रीय कांग्रेस की स्थापना की।",
    },
  },
  {
    question: {
      en: "Which Indian state has the longest coastline?",
      hi: "किस भारतीय राज्य की सबसे लंबी तटरेखा है?",
    },
    options: {
      en: ["Kerala", "Gujarat", "Tamil Nadu", "Maharashtra"],
      hi: ["केरल", "गुजरात", "तमिलनाडु", "महाराष्ट्र"],
    },
    answer: { en: "Gujarat", hi: "गुजरात" },
    explanation: {
      en: "Gujarat has the longest coastline of about 1,600 km among Indian states.",
      hi: "गुजरात की तटरेखा लगभग 1,600 किमी है जो भारतीय राज्यों में सबसे लंबी है।",
    },
  },
  {
    question: {
      en: "Which gas do plants absorb during photosynthesis?",
      hi: "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस अवशोषित करते हैं?",
    },
    options: {
      en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    },
    answer: { en: "Carbon Dioxide", hi: "कार्बन डाइऑक्साइड" },
    explanation: {
      en: "Plants absorb carbon dioxide and release oxygen during photosynthesis.",
      hi: "पौधे प्रकाश संश्लेषण के दौरान कार्बन डाइऑक्साइड अवशोषित करते हैं और ऑक्सीजन छोड़ते हैं।",
    },
  },
  {
    question: {
      en: "What is the full form of GDP?",
      hi: "GDP का पूर्ण रूप क्या है?",
    },
    options: {
      en: ["Gross Domestic Product", "General Domestic Price", "Gross Development Plan", "General Development Product"],
      hi: ["सकल घरेलू उत्पाद", "सामान्य घरेलू मूल्य", "सकल विकास योजना", "सामान्य विकास उत्पाद"],
    },
    answer: { en: "Gross Domestic Product", hi: "सकल घरेलू उत्पाद" },
    explanation: {
      en: "GDP stands for Gross Domestic Product - the total value of goods and services produced.",
      hi: "GDP का अर्थ है सकल घरेलू उत्पाद - उत्पादित वस्तुओं और सेवाओं का कुल मूल्य।",
    },
  },

  // ===== DAY 5 SET (Q21-Q25) =====
  {
    question: {
      en: "The Jallianwala Bagh massacre took place in which year?",
      hi: "जलियांवाला बाग हत्याकांड किस वर्ष हुआ था?",
    },
    options: {
      en: ["1917", "1919", "1921", "1930"],
      hi: ["1917", "1919", "1921", "1930"],
    },
    answer: { en: "1919", hi: "1919" },
    explanation: {
      en: "The Jallianwala Bagh massacre occurred on 13 April 1919 in Amritsar.",
      hi: "जलियांवाला बाग हत्याकांड 13 अप्रैल 1919 को अमृतसर में हुआ।",
    },
  },
  {
    question: {
      en: "Which is the highest peak in India?",
      hi: "भारत की सबसे ऊँची चोटी कौन सी है?",
    },
    options: {
      en: ["Mount Everest", "K2", "Kangchenjunga", "Nanda Devi"],
      hi: ["माउंट एवरेस्ट", "K2", "कंचनजंगा", "नंदा देवी"],
    },
    answer: { en: "Kangchenjunga", hi: "कंचनजंगा" },
    explanation: {
      en: "Kangchenjunga (8,586m) is the highest peak entirely within India.",
      hi: "कंचनजंगा (8,586 मीटर) पूरी तरह भारत के भीतर सबसे ऊँची चोटी है।",
    },
  },
  {
    question: {
      en: "Who wrote the Indian National Anthem?",
      hi: "भारतीय राष्ट्रगान किसने लिखा?",
    },
    options: {
      en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Muhammad Iqbal"],
      hi: ["बंकिम चंद्र चट्टोपाध्याय", "रबीन्द्रनाथ टैगोर", "सरोजिनी नायडू", "मुहम्मद इक़बाल"],
    },
    answer: { en: "Rabindranath Tagore", hi: "रबीन्द्रनाथ टैगोर" },
    explanation: {
      en: "Rabindranath Tagore composed 'Jana Gana Mana', the Indian National Anthem.",
      hi: "रबीन्द्रनाथ टैगोर ने 'जन गण मन' भारतीय राष्ट्रगान की रचना की।",
    },
  },
  {
    question: {
      en: "RBI was established in which year?",
      hi: "RBI की स्थापना किस वर्ष हुई थी?",
    },
    options: {
      en: ["1930", "1935", "1947", "1950"],
      hi: ["1930", "1935", "1947", "1950"],
    },
    answer: { en: "1935", hi: "1935" },
    explanation: {
      en: "The Reserve Bank of India was established on 1 April 1935.",
      hi: "भारतीय रिजर्व बैंक की स्थापना 1 अप्रैल 1935 को हुई थी।",
    },
  },
  {
    question: {
      en: "Which is the hardest natural substance?",
      hi: "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    },
    options: {
      en: ["Gold", "Iron", "Diamond", "Platinum"],
      hi: ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
    },
    answer: { en: "Diamond", hi: "हीरा" },
    explanation: {
      en: "Diamond is the hardest known natural substance, scoring 10 on the Mohs scale.",
      hi: "हीरा सबसे कठोर ज्ञात प्राकृतिक पदार्थ है, मोह स्केल पर 10 अंक।",
    },
  },

  // ===== DAY 6 SET (Q26-Q30) =====
  {
    question: {
      en: "Which part of the Indian Constitution deals with Directive Principles?",
      hi: "भारतीय संविधान का कौन सा भाग नीति निदेशक तत्वों से संबंधित है?",
    },
    options: {
      en: ["Part III", "Part IV", "Part V", "Part VI"],
      hi: ["भाग III", "भाग IV", "भाग V", "भाग VI"],
    },
    answer: { en: "Part IV", hi: "भाग IV" },
    explanation: {
      en: "Part IV (Articles 36-51) contains the Directive Principles of State Policy.",
      hi: "भाग IV (अनुच्छेद 36-51) में राज्य नीति के निदेशक तत्व हैं।",
    },
  },
  {
    question: {
      en: "Who gave the slogan 'Do or Die'?",
      hi: "'करो या मरो' का नारा किसने दिया?",
    },
    options: {
      en: ["Subhas Chandra Bose", "Mahatma Gandhi", "Bal Gangadhar Tilak", "Bhagat Singh"],
      hi: ["सुभाष चंद्र बोस", "महात्मा गांधी", "बाल गंगाधर तिलक", "भगत सिंह"],
    },
    answer: { en: "Mahatma Gandhi", hi: "महात्मा गांधी" },
    explanation: {
      en: "Mahatma Gandhi gave the slogan 'Do or Die' during the Quit India Movement.",
      hi: "महात्मा गांधी ने भारत छोड़ो आंदोलन के दौरान 'करो या मरो' का नारा दिया।",
    },
  },
  {
    question: {
      en: "Which desert is located in western Rajasthan?",
      hi: "पश्चिमी राजस्थान में कौन सा मरुस्थल स्थित है?",
    },
    options: {
      en: ["Sahara", "Gobi", "Thar", "Atacama"],
      hi: ["सहारा", "गोबी", "थार", "अटाकामा"],
    },
    answer: { en: "Thar", hi: "थार" },
    explanation: {
      en: "The Thar Desert (Great Indian Desert) is located in western Rajasthan.",
      hi: "थार मरुस्थल (महान भारतीय मरुस्थल) पश्चिमी राजस्थान में स्थित है।",
    },
  },
  {
    question: {
      en: "Which vitamin is produced when skin is exposed to sunlight?",
      hi: "त्वचा पर सूर्य का प्रकाश पड़ने पर कौन सा विटामिन बनता है?",
    },
    options: {
      en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    },
    answer: { en: "Vitamin D", hi: "विटामिन D" },
    explanation: {
      en: "Vitamin D is synthesized in the skin when exposed to UV rays from sunlight.",
      hi: "सूर्य की UV किरणों से त्वचा में विटामिन D का संश्लेषण होता है।",
    },
  },
  {
    question: {
      en: "Who is known as the 'Missile Man of India'?",
      hi: "'भारत के मिसाइल मैन' के रूप में किसे जाना जाता है?",
    },
    options: {
      en: ["Vikram Sarabhai", "A.P.J. Abdul Kalam", "Homi Bhabha", "C.V. Raman"],
      hi: ["विक्रम साराभाई", "ए.पी.जे. अब्दुल कलाम", "होमी भाभा", "सी.वी. रमन"],
    },
    answer: { en: "A.P.J. Abdul Kalam", hi: "ए.पी.जे. अब्दुल कलाम" },
    explanation: {
      en: "Dr. A.P.J. Abdul Kalam is known as the Missile Man for his work on ballistic missiles.",
      hi: "डॉ. ए.पी.जे. अब्दुल कलाम को बैलिस्टिक मिसाइलों पर काम के लिए मिसाइल मैन कहा जाता है।",
    },
  },

  // ===== DAY 7 SET (Q31-Q35) =====
  {
    question: {
      en: "What is the minimum age to become the President of India?",
      hi: "भारत का राष्ट्रपति बनने की न्यूनतम आयु क्या है?",
    },
    options: {
      en: ["25 years", "30 years", "35 years", "40 years"],
      hi: ["25 वर्ष", "30 वर्ष", "35 वर्ष", "40 वर्ष"],
    },
    answer: { en: "35 years", hi: "35 वर्ष" },
    explanation: {
      en: "A person must be at least 35 years old to be eligible for the office of President.",
      hi: "राष्ट्रपति पद के लिए व्यक्ति की आयु कम से कम 35 वर्ष होनी चाहिए।",
    },
  },
  {
    question: {
      en: "The Dandi March was associated with which movement?",
      hi: "दांडी मार्च किस आंदोलन से जुड़ा था?",
    },
    options: {
      en: ["Non-Cooperation", "Civil Disobedience", "Quit India", "Swadeshi"],
      hi: ["असहयोग", "सविनय अवज्ञा", "भारत छोड़ो", "स्वदेशी"],
    },
    answer: { en: "Civil Disobedience", hi: "सविनय अवज्ञा" },
    explanation: {
      en: "The Dandi March (1930) started the Civil Disobedience Movement against salt tax.",
      hi: "दांडी मार्च (1930) ने नमक कर के खिलाफ सविनय अवज्ञा आंदोलन शुरू किया।",
    },
  },
  {
    question: {
      en: "The Tropic of Cancer passes through how many Indian states?",
      hi: "कर्क रेखा कितने भारतीय राज्यों से होकर गुजरती है?",
    },
    options: {
      en: ["6", "7", "8", "9"],
      hi: ["6", "7", "8", "9"],
    },
    answer: { en: "8", hi: "8" },
    explanation: {
      en: "The Tropic of Cancer passes through 8 Indian states.",
      hi: "कर्क रेखा 8 भारतीय राज्यों से होकर गुजरती है।",
    },
  },
  {
    question: {
      en: "Which is the largest organ of the human body?",
      hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    },
    options: {
      en: ["Heart", "Liver", "Skin", "Brain"],
      hi: ["हृदय", "यकृत", "त्वचा", "मस्तिष्क"],
    },
    answer: { en: "Skin", hi: "त्वचा" },
    explanation: {
      en: "The skin is the largest organ of the human body by surface area.",
      hi: "त्वचा सतह क्षेत्र के हिसाब से मानव शरीर का सबसे बड़ा अंग है।",
    },
  },
  {
    question: {
      en: "ISRO's headquarters is located in which city?",
      hi: "ISRO का मुख्यालय किस शहर में स्थित है?",
    },
    options: {
      en: ["Chennai", "Bangalore", "Hyderabad", "Mumbai"],
      hi: ["चेन्नई", "बेंगलुरु", "हैदराबाद", "मुंबई"],
    },
    answer: { en: "Bangalore", hi: "बेंगलुरु" },
    explanation: {
      en: "ISRO headquarters is located in Bangalore, Karnataka.",
      hi: "ISRO का मुख्यालय बेंगलुरु, कर्नाटक में स्थित है।",
    },
  },

  // ===== DAY 8 SET (Q36-Q40) =====
  {
    question: {
      en: "The Panchayati Raj system was introduced by which Constitutional Amendment?",
      hi: "पंचायती राज व्यवस्था किस संविधान संशोधन द्वारा शुरू की गई?",
    },
    options: {
      en: ["71st Amendment", "72nd Amendment", "73rd Amendment", "74th Amendment"],
      hi: ["71वां संशोधन", "72वां संशोधन", "73वां संशोधन", "74वां संशोधन"],
    },
    answer: { en: "73rd Amendment", hi: "73वां संशोधन" },
    explanation: {
      en: "The 73rd Amendment Act 1992 gave constitutional status to Panchayati Raj institutions.",
      hi: "73वें संशोधन अधिनियम 1992 ने पंचायती राज संस्थाओं को संवैधानिक दर्जा दिया।",
    },
  },
  {
    question: {
      en: "Who was the last Mughal emperor?",
      hi: "अंतिम मुगल सम्राट कौन था?",
    },
    options: {
      en: ["Aurangzeb", "Bahadur Shah Zafar", "Shah Alam II", "Akbar II"],
      hi: ["औरंगजेब", "बहादुर शाह जफर", "शाह आलम II", "अकबर II"],
    },
    answer: { en: "Bahadur Shah Zafar", hi: "बहादुर शाह जफर" },
    explanation: {
      en: "Bahadur Shah Zafar (1837-1857) was the last Mughal emperor.",
      hi: "बहादुर शाह जफर (1837-1857) अंतिम मुगल सम्राट थे।",
    },
  },
  {
    question: {
      en: "Which river is known as the 'Sorrow of Bihar'?",
      hi: "किस नदी को 'बिहार का शोक' कहा जाता है?",
    },
    options: {
      en: ["Ganga", "Kosi", "Son", "Gandak"],
      hi: ["गंगा", "कोसी", "सोन", "गंडक"],
    },
    answer: { en: "Kosi", hi: "कोसी" },
    explanation: {
      en: "The Kosi river is called 'Sorrow of Bihar' due to frequent flooding.",
      hi: "कोसी नदी को बार-बार बाढ़ के कारण 'बिहार का शोक' कहा जाता है।",
    },
  },
  {
    question: {
      en: "What is the speed of light approximately?",
      hi: "प्रकाश की गति लगभग कितनी है?",
    },
    options: {
      en: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
      hi: ["3 × 10⁸ मी/से", "3 × 10⁶ मी/से", "3 × 10¹⁰ मी/से", "3 × 10⁴ मी/से"],
    },
    answer: { en: "3 × 10⁸ m/s", hi: "3 × 10⁸ मी/से" },
    explanation: {
      en: "The speed of light in vacuum is approximately 3 × 10⁸ meters per second.",
      hi: "निर्वात में प्रकाश की गति लगभग 3 × 10⁸ मीटर प्रति सेकंड है।",
    },
  },
  {
    question: {
      en: "The currency of Japan is?",
      hi: "जापान की मुद्रा क्या है?",
    },
    options: {
      en: ["Yuan", "Won", "Yen", "Ringgit"],
      hi: ["युआन", "वॉन", "येन", "रिंगिट"],
    },
    answer: { en: "Yen", hi: "येन" },
    explanation: {
      en: "The Japanese Yen (¥) is the official currency of Japan.",
      hi: "जापानी येन (¥) जापान की आधिकारिक मुद्रा है।",
    },
  },

  // ===== DAY 9 SET (Q41-Q45) =====
  {
    question: {
      en: "Which schedule of the Constitution contains the list of states and union territories?",
      hi: "संविधान की किस अनुसूची में राज्यों और केंद्र शासित प्रदेशों की सूची है?",
    },
    options: {
      en: ["First Schedule", "Second Schedule", "Third Schedule", "Fourth Schedule"],
      hi: ["पहली अनुसूची", "दूसरी अनुसूची", "तीसरी अनुसूची", "चौथी अनुसूची"],
    },
    answer: { en: "First Schedule", hi: "पहली अनुसूची" },
    explanation: {
      en: "The First Schedule lists all states and union territories of India.",
      hi: "पहली अनुसूची में भारत के सभी राज्य और केंद्र शासित प्रदेश सूचीबद्ध हैं।",
    },
  },
  {
    question: {
      en: "The Revolt of 1857 started from which place?",
      hi: "1857 का विद्रोह किस स्थान से शुरू हुआ?",
    },
    options: {
      en: ["Delhi", "Meerut", "Kanpur", "Lucknow"],
      hi: ["दिल्ली", "मेरठ", "कानपुर", "लखनऊ"],
    },
    answer: { en: "Meerut", hi: "मेरठ" },
    explanation: {
      en: "The Revolt of 1857 started from Meerut on 10 May 1857.",
      hi: "1857 का विद्रोह 10 मई 1857 को मेरठ से शुरू हुआ।",
    },
  },
  {
    question: {
      en: "Chilika Lake is located in which state?",
      hi: "चिल्का झील किस राज्य में स्थित है?",
    },
    options: {
      en: ["Andhra Pradesh", "Odisha", "Tamil Nadu", "Kerala"],
      hi: ["आंध्र प्रदेश", "ओडिशा", "तमिलनाडु", "केरल"],
    },
    answer: { en: "Odisha", hi: "ओडिशा" },
    explanation: {
      en: "Chilika Lake is the largest coastal lagoon in India, located in Odisha.",
      hi: "चिल्का झील भारत की सबसे बड़ी तटीय लैगून है, जो ओडिशा में स्थित है।",
    },
  },
  {
    question: {
      en: "Which organization gives the Nobel Prize?",
      hi: "नोबेल पुरस्कार कौन सी संस्था देती है?",
    },
    options: {
      en: ["United Nations", "Nobel Foundation", "World Bank", "UNESCO"],
      hi: ["संयुक्त राष्ट्र", "नोबेल फाउंडेशन", "विश्व बैंक", "यूनेस्को"],
    },
    answer: { en: "Nobel Foundation", hi: "नोबेल फाउंडेशन" },
    explanation: {
      en: "The Nobel Foundation, based in Stockholm, Sweden, awards the Nobel Prizes.",
      hi: "स्टॉकहोम, स्वीडन स्थित नोबेल फाउंडेशन नोबेल पुरस्कार प्रदान करता है।",
    },
  },
  {
    question: {
      en: "Which Indian state was formed most recently?",
      hi: "सबसे हाल में कौन सा भारतीय राज्य बना?",
    },
    options: {
      en: ["Jharkhand", "Uttarakhand", "Telangana", "Chhattisgarh"],
      hi: ["झारखंड", "उत्तराखंड", "तेलंगाना", "छत्तीसगढ़"],
    },
    answer: { en: "Telangana", hi: "तेलंगाना" },
    explanation: {
      en: "Telangana was formed on 2 June 2014, making it the newest Indian state.",
      hi: "तेलंगाना 2 जून 2014 को बना, जो सबसे नया भारतीय राज्य है।",
    },
  },

  // ===== DAY 10 SET (Q46-Q50) =====
  {
    question: {
      en: "Who established the Arya Samaj?",
      hi: "आर्य समाज की स्थापना किसने की?",
    },
    options: {
      en: ["Raja Ram Mohan Roy", "Swami Dayanand Saraswati", "Swami Vivekananda", "Ishwar Chandra Vidyasagar"],
      hi: ["राजा राम मोहन रॉय", "स्वामी दयानंद सरस्वती", "स्वामी विवेकानंद", "ईश्वर चंद्र विद्यासागर"],
    },
    answer: { en: "Swami Dayanand Saraswati", hi: "स्वामी दयानंद सरस्वती" },
    explanation: {
      en: "Swami Dayanand Saraswati founded Arya Samaj in 1875 in Bombay.",
      hi: "स्वामी दयानंद सरस्वती ने 1875 में बंबई में आर्य समाज की स्थापना की।",
    },
  },
  {
    question: {
      en: "Which plateau is known as the 'Deccan Trap'?",
      hi: "किस पठार को 'दक्कन ट्रैप' कहा जाता है?",
    },
    options: {
      en: ["Chota Nagpur Plateau", "Deccan Plateau", "Malwa Plateau", "Ladakh Plateau"],
      hi: ["छोटा नागपुर पठार", "दक्कन पठार", "मालवा पठार", "लद्दाख पठार"],
    },
    answer: { en: "Deccan Plateau", hi: "दक्कन पठार" },
    explanation: {
      en: "The Deccan Plateau region formed by volcanic basalt is known as the Deccan Trap.",
      hi: "ज्वालामुखी बेसाल्ट से बना दक्कन पठार क्षेत्र दक्कन ट्रैप कहलाता है।",
    },
  },
  {
    question: {
      en: "What does UPI stand for?",
      hi: "UPI का पूर्ण रूप क्या है?",
    },
    options: {
      en: ["Unified Payment Interface", "Universal Payment India", "United Payment Integration", "Unified Processing Interface"],
      hi: ["यूनिफाइड पेमेंट इंटरफेस", "यूनिवर्सल पेमेंट इंडिया", "यूनाइटेड पेमेंट इंटीग्रेशन", "यूनिफाइड प्रोसेसिंग इंटरफेस"],
    },
    answer: { en: "Unified Payment Interface", hi: "यूनिफाइड पेमेंट इंटरफेस" },
    explanation: {
      en: "UPI (Unified Payments Interface) was developed by NPCI for instant bank transfers.",
      hi: "UPI (यूनिफाइड पेमेंट इंटरफेस) NPCI द्वारा तत्काल बैंक ट्रांसफर के लिए विकसित किया गया।",
    },
  },
  {
    question: {
      en: "Which article of the Constitution abolishes untouchability?",
      hi: "संविधान का कौन सा अनुच्छेद अस्पृश्यता का उन्मूलन करता है?",
    },
    options: {
      en: ["Article 14", "Article 15", "Article 17", "Article 21"],
      hi: ["अनुच्छेद 14", "अनुच्छेद 15", "अनुच्छेद 17", "अनुच्छेद 21"],
    },
    answer: { en: "Article 17", hi: "अनुच्छेद 17" },
    explanation: {
      en: "Article 17 abolishes untouchability and forbids its practice in any form.",
      hi: "अनुच्छेद 17 अस्पृश्यता का उन्मूलन करता है और किसी भी रूप में इसके आचरण को निषिद्ध करता है।",
    },
  },
  {
    question: {
      en: "Which is the national flower of India?",
      hi: "भारत का राष्ट्रीय फूल कौन सा है?",
    },
    options: {
      en: ["Rose", "Lotus", "Sunflower", "Jasmine"],
      hi: ["गुलाब", "कमल", "सूरजमुखी", "चमेली"],
    },
    answer: { en: "Lotus", hi: "कमल" },
    explanation: {
      en: "The Lotus (Nelumbo nucifera) is the national flower of India.",
      hi: "कमल (नेलुम्बो नूसीफेरा) भारत का राष्ट्रीय फूल है।",
    },
  },
];

/**
 * Sequential daily questions - Day 1 gets Q1-Q5, Day 2 gets Q6-Q10, etc.
 * After all sets are exhausted, it cycles back.
 */
export function getDailyQuestions(): Question[] {
  // Use a fixed reference date (Jan 1, 2025) as Day 0
  const referenceDate = new Date(2025, 0, 1);
  const today = new Date();
  
  // Calculate day number since reference
  const diffTime = today.getTime() - referenceDate.getTime();
  const dayNumber = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // Total sets available (5 questions per set)
  const totalSets = Math.floor(ALL_QUESTIONS.length / 5);
  
  // Which set for today (cycles after exhausting all sets)
  const setIndex = dayNumber % totalSets;
  
  // Get 5 questions for today
  const startIdx = setIndex * 5;
  return ALL_QUESTIONS.slice(startIdx, startIdx + 5);
}