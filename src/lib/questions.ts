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

  // ===== DAY 11 SET (Q51-Q55) =====
  {
    question: {
      en: "Which is the largest continent in the world?",
      hi: "विश्व का सबसे बड़ा महाद्वीप कौन सा है?",
    },
    options: {
      en: ["Africa", "Europe", "Asia", "North America"],
      hi: ["अफ्रीका", "यूरोप", "एशिया", "उत्तरी अमेरिका"],
    },
    answer: { en: "Asia", hi: "एशिया" },
    explanation: {
      en: "Asia is the largest continent, covering about 44.58 million sq km.",
      hi: "एशिया सबसे बड़ा महाद्वीप है, जो लगभग 44.58 मिलियन वर्ग किमी में फैला है।",
    },
  },
  {
    question: {
      en: "Who was the first woman Prime Minister of India?",
      hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    },
    options: {
      en: ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sonia Gandhi"],
      hi: ["सरोजिनी नायडू", "इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी"],
    },
    answer: { en: "Indira Gandhi", hi: "इंदिरा गांधी" },
    explanation: {
      en: "Indira Gandhi served as PM from 1966-1977 and 1980-1984.",
      hi: "इंदिरा गांधी ने 1966-1977 और 1980-1984 तक प्रधानमंत्री के रूप में कार्य किया।",
    },
  },
  {
    question: {
      en: "Which blood group is known as the universal donor?",
      hi: "किस रक्त समूह को सार्वभौमिक दाता कहा जाता है?",
    },
    options: {
      en: ["A", "B", "AB", "O"],
      hi: ["A", "B", "AB", "O"],
    },
    answer: { en: "O", hi: "O" },
    explanation: {
      en: "Blood group O negative is the universal donor as it can be given to anyone.",
      hi: "रक्त समूह O नेगेटिव सार्वभौमिक दाता है क्योंकि इसे किसी को भी दिया जा सकता है।",
    },
  },
  {
    question: {
      en: "The Indian Constitution came into effect on which date?",
      hi: "भारतीय संविधान किस तारीख को लागू हुआ?",
    },
    options: {
      en: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1950"],
      hi: ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवंबर 1949", "2 अक्टूबर 1950"],
    },
    answer: { en: "26 January 1950", hi: "26 जनवरी 1950" },
    explanation: {
      en: "The Constitution of India came into effect on 26 January 1950, celebrated as Republic Day.",
      hi: "भारत का संविधान 26 जनवरी 1950 को लागू हुआ, जिसे गणतंत्र दिवस के रूप में मनाया जाता है।",
    },
  },
  {
    question: {
      en: "Which is the largest ocean in the world?",
      hi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
    },
    options: {
      en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      hi: ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    },
    answer: { en: "Pacific Ocean", hi: "प्रशांत महासागर" },
    explanation: {
      en: "The Pacific Ocean is the largest and deepest ocean, covering about 165.25 million sq km.",
      hi: "प्रशांत महासागर सबसे बड़ा और सबसे गहरा महासागर है, जो लगभग 165.25 मिलियन वर्ग किमी में फैला है।",
    },
  },

  // ===== DAY 12 SET (Q56-Q60) =====
  {
    question: {
      en: "Who is the supreme commander of the Indian Armed Forces?",
      hi: "भारतीय सशस्त्र बलों का सर्वोच्च कमांडर कौन है?",
    },
    options: {
      en: ["Prime Minister", "Defence Minister", "President", "Army Chief"],
      hi: ["प्रधानमंत्री", "रक्षा मंत्री", "राष्ट्रपति", "सेना प्रमुख"],
    },
    answer: { en: "President", hi: "राष्ट्रपति" },
    explanation: {
      en: "The President of India is the supreme commander of the Indian Armed Forces.",
      hi: "भारत के राष्ट्रपति भारतीय सशस्त्र बलों के सर्वोच्च कमांडर हैं।",
    },
  },
  {
    question: {
      en: "Mahatma Gandhi was born in which year?",
      hi: "महात्मा गांधी का जन्म किस वर्ष हुआ था?",
    },
    options: {
      en: ["1867", "1869", "1871", "1873"],
      hi: ["1867", "1869", "1871", "1873"],
    },
    answer: { en: "1869", hi: "1869" },
    explanation: {
      en: "Mahatma Gandhi was born on 2 October 1869 in Porbandar, Gujarat.",
      hi: "महात्मा गांधी का जन्म 2 अक्टूबर 1869 को पोरबंदर, गुजरात में हुआ था।",
    },
  },
  {
    question: {
      en: "Which is the longest national highway in India?",
      hi: "भारत का सबसे लंबा राष्ट्रीय राजमार्ग कौन सा है?",
    },
    options: {
      en: ["NH 44", "NH 48", "NH 27", "NH 7"],
      hi: ["NH 44", "NH 48", "NH 27", "NH 7"],
    },
    answer: { en: "NH 44", hi: "NH 44" },
    explanation: {
      en: "NH 44 is the longest national highway in India, running from Srinagar to Kanyakumari (3,745 km).",
      hi: "NH 44 भारत का सबसे लंबा राष्ट्रीय राजमार्ग है, जो श्रीनगर से कन्याकुमारी तक (3,745 किमी) जाता है।",
    },
  },
  {
    question: {
      en: "What is the SI unit of force?",
      hi: "बल की SI इकाई क्या है?",
    },
    options: {
      en: ["Joule", "Newton", "Watt", "Pascal"],
      hi: ["जूल", "न्यूटन", "वाट", "पास्कल"],
    },
    answer: { en: "Newton", hi: "न्यूटन" },
    explanation: {
      en: "The SI unit of force is Newton (N), named after Sir Isaac Newton.",
      hi: "बल की SI इकाई न्यूटन (N) है, जो सर आइजैक न्यूटन के नाम पर है।",
    },
  },
  {
    question: {
      en: "Which Indian city is known as the 'Pink City'?",
      hi: "किस भारतीय शहर को 'गुलाबी शहर' कहा जाता है?",
    },
    options: {
      en: ["Udaipur", "Jodhpur", "Jaipur", "Bikaner"],
      hi: ["उदयपुर", "जोधपुर", "जयपुर", "बीकानेर"],
    },
    answer: { en: "Jaipur", hi: "जयपुर" },
    explanation: {
      en: "Jaipur is called the Pink City due to the distinctive color of its old buildings.",
      hi: "जयपुर को इसकी पुरानी इमारतों के विशिष्ट रंग के कारण गुलाबी शहर कहा जाता है।",
    },
  },

  // ===== DAY 13 SET (Q61-Q65) =====
  {
    question: {
      en: "How many members are there in the Rajya Sabha?",
      hi: "राज्यसभा में कितने सदस्य होते हैं?",
    },
    options: {
      en: ["230", "245", "250", "260"],
      hi: ["230", "245", "250", "260"],
    },
    answer: { en: "245", hi: "245" },
    explanation: {
      en: "Rajya Sabha has a maximum of 245 members - 233 elected and 12 nominated by the President.",
      hi: "राज्यसभा में अधिकतम 245 सदस्य होते हैं - 233 निर्वाचित और 12 राष्ट्रपति द्वारा मनोनीत।",
    },
  },
  {
    question: {
      en: "The Simon Commission visited India in which year?",
      hi: "साइमन कमीशन भारत किस वर्ष आया?",
    },
    options: {
      en: ["1925", "1928", "1930", "1932"],
      hi: ["1925", "1928", "1930", "1932"],
    },
    answer: { en: "1928", hi: "1928" },
    explanation: {
      en: "The Simon Commission arrived in India in 1928 and was boycotted as it had no Indian members.",
      hi: "साइमन कमीशन 1928 में भारत आया और इसका बहिष्कार किया गया क्योंकि इसमें कोई भारतीय सदस्य नहीं था।",
    },
  },
  {
    question: {
      en: "Which lake is the largest freshwater lake in India?",
      hi: "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
    },
    options: {
      en: ["Dal Lake", "Wular Lake", "Chilika Lake", "Loktak Lake"],
      hi: ["डल झील", "वुलर झील", "चिल्का झील", "लोकटक झील"],
    },
    answer: { en: "Wular Lake", hi: "वुलर झील" },
    explanation: {
      en: "Wular Lake in Jammu & Kashmir is the largest freshwater lake in India.",
      hi: "जम्मू-कश्मीर में वुलर झील भारत की सबसे बड़ी मीठे पानी की झील है।",
    },
  },
  {
    question: {
      en: "Which element has the chemical symbol 'Fe'?",
      hi: "किस तत्व का रासायनिक प्रतीक 'Fe' है?",
    },
    options: {
      en: ["Fluorine", "Iron", "Francium", "Fermium"],
      hi: ["फ्लोरीन", "लोहा", "फ्रैंसियम", "फर्मियम"],
    },
    answer: { en: "Iron", hi: "लोहा" },
    explanation: {
      en: "Fe is the chemical symbol for Iron, derived from the Latin word 'Ferrum'.",
      hi: "Fe लोहे का रासायनिक प्रतीक है, जो लैटिन शब्द 'Ferrum' से लिया गया है।",
    },
  },
  {
    question: {
      en: "Who was the first Indian to win a Nobel Prize?",
      hi: "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
    },
    options: {
      en: ["C.V. Raman", "Rabindranath Tagore", "Amartya Sen", "Hargobind Khorana"],
      hi: ["सी.वी. रमन", "रबीन्द्रनाथ टैगोर", "अमर्त्य सेन", "हरगोबिंद खुराना"],
    },
    answer: { en: "Rabindranath Tagore", hi: "रबीन्द्रनाथ टैगोर" },
    explanation: {
      en: "Rabindranath Tagore won the Nobel Prize in Literature in 1913.",
      hi: "रबीन्द्रनाथ टैगोर ने 1913 में साहित्य में नोबेल पुरस्कार जीता।",
    },
  },

  // ===== DAY 14 SET (Q66-Q70) =====
  {
    question: {
      en: "Which amendment is known as the 'Mini Constitution'?",
      hi: "किस संशोधन को 'मिनी संविधान' कहा जाता है?",
    },
    options: {
      en: ["42nd Amendment", "44th Amendment", "73rd Amendment", "86th Amendment"],
      hi: ["42वां संशोधन", "44वां संशोधन", "73वां संशोधन", "86वां संशोधन"],
    },
    answer: { en: "42nd Amendment", hi: "42वां संशोधन" },
    explanation: {
      en: "The 42nd Amendment (1976) is called the 'Mini Constitution' due to its sweeping changes.",
      hi: "42वां संशोधन (1976) को व्यापक परिवर्तनों के कारण 'मिनी संविधान' कहा जाता है।",
    },
  },
  {
    question: {
      en: "Who gave the slogan 'Jai Hind'?",
      hi: "'जय हिन्द' का नारा किसने दिया?",
    },
    options: {
      en: ["Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh", "Lala Lajpat Rai"],
      hi: ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "लाला लाजपत राय"],
    },
    answer: { en: "Subhas Chandra Bose", hi: "सुभाष चंद्र बोस" },
    explanation: {
      en: "Subhas Chandra Bose popularized the greeting 'Jai Hind' as a patriotic slogan.",
      hi: "सुभाष चंद्र बोस ने 'जय हिन्द' को एक देशभक्ति नारे के रूप में लोकप्रिय बनाया।",
    },
  },
  {
    question: {
      en: "Which state is known as the 'Spice Garden of India'?",
      hi: "किस राज्य को 'भारत का मसाला बगीचा' कहा जाता है?",
    },
    options: {
      en: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"],
      hi: ["तमिलनाडु", "कर्नाटक", "केरल", "आंध्र प्रदेश"],
    },
    answer: { en: "Kerala", hi: "केरल" },
    explanation: {
      en: "Kerala is known as the 'Spice Garden of India' for its rich spice production.",
      hi: "केरल को इसके समृद्ध मसाला उत्पादन के लिए 'भारत का मसाला बगीचा' कहा जाता है।",
    },
  },
  {
    question: {
      en: "What is the boiling point of water at sea level?",
      hi: "समुद्र तल पर पानी का क्वथनांक क्या है?",
    },
    options: {
      en: ["90°C", "95°C", "100°C", "110°C"],
      hi: ["90°C", "95°C", "100°C", "110°C"],
    },
    answer: { en: "100°C", hi: "100°C" },
    explanation: {
      en: "Water boils at 100°C (212°F) at standard atmospheric pressure at sea level.",
      hi: "समुद्र तल पर मानक वायुमंडलीय दाब पर पानी 100°C (212°F) पर उबलता है।",
    },
  },
  {
    question: {
      en: "Which country has the largest population in the world?",
      hi: "विश्व में सबसे अधिक जनसंख्या किस देश की है?",
    },
    options: {
      en: ["China", "India", "USA", "Indonesia"],
      hi: ["चीन", "भारत", "अमेरिका", "इंडोनेशिया"],
    },
    answer: { en: "India", hi: "भारत" },
    explanation: {
      en: "India surpassed China to become the world's most populous country.",
      hi: "भारत ने चीन को पछाड़कर विश्व का सबसे अधिक जनसंख्या वाला देश बन गया।",
    },
  },

  // ===== DAY 15 SET (Q71-Q75) =====
  {
    question: {
      en: "Who was the first President of India?",
      hi: "भारत के पहले राष्ट्रपति कौन थे?",
    },
    options: {
      en: ["B. R. Ambedkar", "Rajendra Prasad", "S. Radhakrishnan", "Zakir Husain"],
      hi: ["बी. आर. अंबेडकर", "राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन"],
    },
    answer: { en: "Rajendra Prasad", hi: "राजेंद्र प्रसाद" },
    explanation: {
      en: "Dr. Rajendra Prasad was the first President of India (1950-1962).",
      hi: "डॉ. राजेंद्र प्रसाद भारत के पहले राष्ट्रपति थे (1950-1962)।",
    },
  },
  {
    question: {
      en: "The Swadeshi Movement started after which partition?",
      hi: "स्वदेशी आंदोलन किस विभाजन के बाद शुरू हुआ?",
    },
    options: {
      en: ["Partition of India", "Partition of Bengal", "Partition of Punjab", "Partition of Madras"],
      hi: ["भारत का विभाजन", "बंगाल का विभाजन", "पंजाब का विभाजन", "मद्रास का विभाजन"],
    },
    answer: { en: "Partition of Bengal", hi: "बंगाल का विभाजन" },
    explanation: {
      en: "The Swadeshi Movement (1905) was launched in protest against the Partition of Bengal by Lord Curzon.",
      hi: "स्वदेशी आंदोलन (1905) लॉर्ड कर्जन द्वारा बंगाल विभाजन के विरोध में शुरू हुआ।",
    },
  },
  {
    question: {
      en: "Which is the largest delta in the world?",
      hi: "विश्व का सबसे बड़ा डेल्टा कौन सा है?",
    },
    options: {
      en: ["Nile Delta", "Mekong Delta", "Sundarbans Delta", "Mississippi Delta"],
      hi: ["नील डेल्टा", "मीकांग डेल्टा", "सुंदरबन डेल्टा", "मिसिसिपी डेल्टा"],
    },
    answer: { en: "Sundarbans Delta", hi: "सुंदरबन डेल्टा" },
    explanation: {
      en: "The Sundarbans Delta formed by the Ganges and Brahmaputra is the largest delta in the world.",
      hi: "गंगा और ब्रह्मपुत्र द्वारा निर्मित सुंदरबन डेल्टा विश्व का सबसे बड़ा डेल्टा है।",
    },
  },
  {
    question: {
      en: "Which gas is most abundant in Earth's atmosphere?",
      hi: "पृथ्वी के वायुमंडल में सबसे अधिक कौन सी गैस है?",
    },
    options: {
      en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
    },
    answer: { en: "Nitrogen", hi: "नाइट्रोजन" },
    explanation: {
      en: "Nitrogen makes up about 78% of Earth's atmosphere.",
      hi: "नाइट्रोजन पृथ्वी के वायुमंडल का लगभग 78% हिस्सा बनाती है।",
    },
  },
  {
    question: {
      en: "What is the capital of Australia?",
      hi: "ऑस्ट्रेलिया की राजधानी क्या है?",
    },
    options: {
      en: ["Sydney", "Melbourne", "Canberra", "Perth"],
      hi: ["सिडनी", "मेलबर्न", "कैनबरा", "पर्थ"],
    },
    answer: { en: "Canberra", hi: "कैनबरा" },
    explanation: {
      en: "Canberra is the capital city of Australia, not Sydney or Melbourne.",
      hi: "कैनबरा ऑस्ट्रेलिया की राजधानी है, न कि सिडनी या मेलबर्न।",
    },
  },

  // ===== DAY 16 SET (Q76-Q80) =====
  {
    question: {
      en: "Article 370 was related to which state?",
      hi: "अनुच्छेद 370 किस राज्य से संबंधित था?",
    },
    options: {
      en: ["Punjab", "Jammu & Kashmir", "Assam", "Nagaland"],
      hi: ["पंजाब", "जम्मू और कश्मीर", "असम", "नागालैंड"],
    },
    answer: { en: "Jammu & Kashmir", hi: "जम्मू और कश्मीर" },
    explanation: {
      en: "Article 370 granted special autonomous status to Jammu & Kashmir. It was abrogated in 2019.",
      hi: "अनुच्छेद 370 जम्मू-कश्मीर को विशेष स्वायत्त दर्जा देता था। इसे 2019 में निरस्त किया गया।",
    },
  },
  {
    question: {
      en: "Who was known as 'Loh Purush' (Iron Man of India)?",
      hi: "'लौह पुरुष' (भारत का लौह पुरुष) किसे कहा जाता था?",
    },
    options: {
      en: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "B. R. Ambedkar"],
      hi: ["जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस", "बी. आर. अंबेडकर"],
    },
    answer: { en: "Sardar Vallabhbhai Patel", hi: "सरदार वल्लभभाई पटेल" },
    explanation: {
      en: "Sardar Vallabhbhai Patel is called the Iron Man of India for unifying the princely states.",
      hi: "सरदार वल्लभभाई पटेल को रियासतों के एकीकरण के लिए भारत का लौह पुरुष कहा जाता है।",
    },
  },
  {
    question: {
      en: "Which river originates from Amarkantak?",
      hi: "कौन सी नदी अमरकंटक से निकलती है?",
    },
    options: {
      en: ["Ganga", "Narmada", "Godavari", "Krishna"],
      hi: ["गंगा", "नर्मदा", "गोदावरी", "कृष्णा"],
    },
    answer: { en: "Narmada", hi: "नर्मदा" },
    explanation: {
      en: "The Narmada river originates from Amarkantak in Madhya Pradesh.",
      hi: "नर्मदा नदी मध्य प्रदेश में अमरकंटक से निकलती है।",
    },
  },
  {
    question: {
      en: "Which planet is the largest in our solar system?",
      hi: "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
    },
    options: {
      en: ["Saturn", "Jupiter", "Neptune", "Uranus"],
      hi: ["शनि", "बृहस्पति", "नेपच्यून", "यूरेनस"],
    },
    answer: { en: "Jupiter", hi: "बृहस्पति" },
    explanation: {
      en: "Jupiter is the largest planet in the solar system with a diameter of about 139,820 km.",
      hi: "बृहस्पति लगभग 139,820 किमी व्यास के साथ सौर मंडल का सबसे बड़ा ग्रह है।",
    },
  },
  {
    question: {
      en: "GST was implemented in India from which date?",
      hi: "भारत में GST किस तारीख से लागू किया गया?",
    },
    options: {
      en: ["1 April 2017", "1 July 2017", "1 January 2018", "1 April 2018"],
      hi: ["1 अप्रैल 2017", "1 जुलाई 2017", "1 जनवरी 2018", "1 अप्रैल 2018"],
    },
    answer: { en: "1 July 2017", hi: "1 जुलाई 2017" },
    explanation: {
      en: "GST (Goods and Services Tax) was implemented in India from 1 July 2017.",
      hi: "GST (वस्तु एवं सेवा कर) भारत में 1 जुलाई 2017 से लागू किया गया।",
    },
  },

  // ===== DAY 17 SET (Q81-Q85) =====
  {
    question: {
      en: "What is the tenure of a Rajya Sabha member?",
      hi: "राज्यसभा सदस्य का कार्यकाल कितना होता है?",
    },
    options: {
      en: ["4 years", "5 years", "6 years", "Life"],
      hi: ["4 वर्ष", "5 वर्ष", "6 वर्ष", "आजीवन"],
    },
    answer: { en: "6 years", hi: "6 वर्ष" },
    explanation: {
      en: "A Rajya Sabha member serves for a term of 6 years, with one-third retiring every 2 years.",
      hi: "राज्यसभा सदस्य 6 वर्ष का कार्यकाल पूरा करता है, हर 2 वर्ष में एक-तिहाई सेवानिवृत्त होते हैं।",
    },
  },
  {
    question: {
      en: "Who started the Bhoodan Movement?",
      hi: "भूदान आंदोलन किसने शुरू किया?",
    },
    options: {
      en: ["Mahatma Gandhi", "Vinoba Bhave", "Jayaprakash Narayan", "Ram Manohar Lohia"],
      hi: ["महात्मा गांधी", "विनोबा भावे", "जयप्रकाश नारायण", "राम मनोहर लोहिया"],
    },
    answer: { en: "Vinoba Bhave", hi: "विनोबा भावे" },
    explanation: {
      en: "Vinoba Bhave started the Bhoodan (Land Gift) Movement in 1951.",
      hi: "विनोबा भावे ने 1951 में भूदान (भूमि दान) आंदोलन शुरू किया।",
    },
  },
  {
    question: {
      en: "Which pass connects India and China through Sikkim?",
      hi: "कौन सा दर्रा सिक्किम के माध्यम से भारत और चीन को जोड़ता है?",
    },
    options: {
      en: ["Khyber Pass", "Bolan Pass", "Nathu La", "Rohtang Pass"],
      hi: ["खैबर दर्रा", "बोलन दर्रा", "नाथू ला", "रोहतांग दर्रा"],
    },
    answer: { en: "Nathu La", hi: "नाथू ला" },
    explanation: {
      en: "Nathu La pass in Sikkim connects India and China at an altitude of 4,310 m.",
      hi: "सिक्किम में नाथू ला दर्रा 4,310 मीटर की ऊंचाई पर भारत और चीन को जोड़ता है।",
    },
  },
  {
    question: {
      en: "How many bones are there in an adult human body?",
      hi: "एक वयस्क मानव शरीर में कितनी हड्डियां होती हैं?",
    },
    options: {
      en: ["196", "206", "216", "226"],
      hi: ["196", "206", "216", "226"],
    },
    answer: { en: "206", hi: "206" },
    explanation: {
      en: "An adult human body has 206 bones.",
      hi: "एक वयस्क मानव शरीर में 206 हड्डियां होती हैं।",
    },
  },
  {
    question: {
      en: "Which organization regulates the stock market in India?",
      hi: "भारत में शेयर बाजार को कौन सी संस्था नियंत्रित करती है?",
    },
    options: {
      en: ["RBI", "SEBI", "NABARD", "SIDBI"],
      hi: ["RBI", "SEBI", "NABARD", "SIDBI"],
    },
    answer: { en: "SEBI", hi: "SEBI" },
    explanation: {
      en: "SEBI (Securities and Exchange Board of India) regulates the Indian stock market.",
      hi: "SEBI (भारतीय प्रतिभूति और विनिमय बोर्ड) भारतीय शेयर बाजार को नियंत्रित करता है।",
    },
  },

  // ===== DAY 18 SET (Q86-Q90) =====
  {
    question: {
      en: "How many Fundamental Duties are listed in the Indian Constitution?",
      hi: "भारतीय संविधान में कितने मौलिक कर्तव्य सूचीबद्ध हैं?",
    },
    options: {
      en: ["9", "10", "11", "12"],
      hi: ["9", "10", "11", "12"],
    },
    answer: { en: "11", hi: "11" },
    explanation: {
      en: "There are 11 Fundamental Duties listed under Article 51A of the Constitution.",
      hi: "संविधान के अनुच्छेद 51A के तहत 11 मौलिक कर्तव्य सूचीबद्ध हैं।",
    },
  },
  {
    question: {
      en: "The Treaty of Lahore was signed in which year?",
      hi: "लाहौर की संधि किस वर्ष हुई?",
    },
    options: {
      en: ["1840", "1846", "1849", "1853"],
      hi: ["1840", "1846", "1849", "1853"],
    },
    answer: { en: "1846", hi: "1846" },
    explanation: {
      en: "The Treaty of Lahore (1846) was signed after the First Anglo-Sikh War.",
      hi: "लाहौर की संधि (1846) प्रथम आंग्ल-सिख युद्ध के बाद हुई।",
    },
  },
  {
    question: {
      en: "Which waterfall is the highest in India?",
      hi: "भारत का सबसे ऊंचा जलप्रपात कौन सा है?",
    },
    options: {
      en: ["Jog Falls", "Dudhsagar Falls", "Kunchikal Falls", "Nohkalikai Falls"],
      hi: ["जोग प्रपात", "दूधसागर प्रपात", "कुंचिकल प्रपात", "नोहकलिकाई प्रपात"],
    },
    answer: { en: "Kunchikal Falls", hi: "कुंचिकल प्रपात" },
    explanation: {
      en: "Kunchikal Falls in Karnataka is the highest waterfall in India at 455 m.",
      hi: "कर्नाटक में कुंचिकल प्रपात 455 मीटर ऊंचाई के साथ भारत का सबसे ऊंचा जलप्रपात है।",
    },
  },
  {
    question: {
      en: "What is the powerhouse of the cell?",
      hi: "कोशिका का पावरहाउस क्या है?",
    },
    options: {
      en: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
      hi: ["केंद्रक", "राइबोसोम", "माइटोकॉन्ड्रिया", "गॉल्जी बॉडी"],
    },
    answer: { en: "Mitochondria", hi: "माइटोकॉन्ड्रिया" },
    explanation: {
      en: "Mitochondria are called the powerhouse of the cell as they produce ATP (energy).",
      hi: "माइटोकॉन्ड्रिया को कोशिका का पावरहाउस कहा जाता है क्योंकि वे ATP (ऊर्जा) उत्पन्न करते हैं।",
    },
  },
  {
    question: {
      en: "Which is the national game of India?",
      hi: "भारत का राष्ट्रीय खेल कौन सा है?",
    },
    options: {
      en: ["Cricket", "Hockey", "Kabaddi", "Badminton"],
      hi: ["क्रिकेट", "हॉकी", "कबड्डी", "बैडमिंटन"],
    },
    answer: { en: "Hockey", hi: "हॉकी" },
    explanation: {
      en: "Hockey is traditionally considered the national game of India.",
      hi: "हॉकी को पारंपरिक रूप से भारत का राष्ट्रीय खेल माना जाता है।",
    },
  },

  // ===== DAY 19 SET (Q91-Q95) =====
  {
    question: {
      en: "The Comptroller and Auditor General of India is appointed under which article?",
      hi: "भारत के नियंत्रक एवं महालेखा परीक्षक की नियुक्ति किस अनुच्छेद के तहत होती है?",
    },
    options: {
      en: ["Article 148", "Article 155", "Article 280", "Article 324"],
      hi: ["अनुच्छेद 148", "अनुच्छेद 155", "अनुच्छेद 280", "अनुच्छेद 324"],
    },
    answer: { en: "Article 148", hi: "अनुच्छेद 148" },
    explanation: {
      en: "Article 148 deals with the appointment of the CAG of India.",
      hi: "अनुच्छेद 148 भारत के CAG की नियुक्ति से संबंधित है।",
    },
  },
  {
    question: {
      en: "The Lucknow Pact of 1916 was between which two parties?",
      hi: "1916 का लखनऊ समझौता किन दो दलों के बीच हुआ था?",
    },
    options: {
      en: ["Congress & Muslim League", "Congress & British", "Muslim League & British", "Congress & Hindu Mahasabha"],
      hi: ["कांग्रेस और मुस्लिम लीग", "कांग्रेस और ब्रिटिश", "मुस्लिम लीग और ब्रिटिश", "कांग्रेस और हिंदू महासभा"],
    },
    answer: { en: "Congress & Muslim League", hi: "कांग्रेस और मुस्लिम लीग" },
    explanation: {
      en: "The Lucknow Pact (1916) was an agreement between Congress and Muslim League for joint political reform.",
      hi: "लखनऊ समझौता (1916) कांग्रेस और मुस्लिम लीग के बीच संयुक्त राजनीतिक सुधार हेतु एक समझौता था।",
    },
  },
  {
    question: {
      en: "Which Indian state has the most number of districts?",
      hi: "किस भारतीय राज्य में सबसे अधिक जिले हैं?",
    },
    options: {
      en: ["Madhya Pradesh", "Uttar Pradesh", "Maharashtra", "Rajasthan"],
      hi: ["मध्य प्रदेश", "उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान"],
    },
    answer: { en: "Uttar Pradesh", hi: "उत्तर प्रदेश" },
    explanation: {
      en: "Uttar Pradesh has the most number of districts (75) among Indian states.",
      hi: "उत्तर प्रदेश में भारतीय राज्यों में सबसे अधिक जिले (75) हैं।",
    },
  },
  {
    question: {
      en: "What is the pH value of pure water?",
      hi: "शुद्ध पानी का pH मान क्या है?",
    },
    options: {
      en: ["5", "6", "7", "8"],
      hi: ["5", "6", "7", "8"],
    },
    answer: { en: "7", hi: "7" },
    explanation: {
      en: "Pure water has a neutral pH of 7.",
      hi: "शुद्ध पानी का pH मान 7 (उदासीन) होता है।",
    },
  },
  {
    question: {
      en: "Who is the author of the book 'Discovery of India'?",
      hi: "'डिस्कवरी ऑफ इंडिया' पुस्तक के लेखक कौन हैं?",
    },
    options: {
      en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "B. R. Ambedkar"],
      hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "रबीन्द्रनाथ टैगोर", "बी. आर. अंबेडकर"],
    },
    answer: { en: "Jawaharlal Nehru", hi: "जवाहरलाल नेहरू" },
    explanation: {
      en: "Jawaharlal Nehru wrote 'The Discovery of India' in 1946 while imprisoned at Ahmednagar Fort.",
      hi: "जवाहरलाल नेहरू ने 1946 में अहमदनगर किले में कैद रहते हुए 'डिस्कवरी ऑफ इंडिया' लिखी।",
    },
  },

  // ===== DAY 20 SET (Q96-Q100) =====
  {
    question: {
      en: "Which writ means 'to have the body'?",
      hi: "किस रिट का अर्थ 'शरीर प्रस्तुत करो' है?",
    },
    options: {
      en: ["Mandamus", "Habeas Corpus", "Certiorari", "Quo Warranto"],
      hi: ["परमादेश", "बंदी प्रत्यक्षीकरण", "उत्प्रेषण", "अधिकार पृच्छा"],
    },
    answer: { en: "Habeas Corpus", hi: "बंदी प्रत्यक्षीकरण" },
    explanation: {
      en: "Habeas Corpus literally means 'to have the body' and protects against unlawful detention.",
      hi: "बंदी प्रत्यक्षीकरण का शाब्दिक अर्थ 'शरीर प्रस्तुत करो' है और यह गैरकानूनी हिरासत से बचाता है।",
    },
  },
  {
    question: {
      en: "Who started the newspaper 'Kesari'?",
      hi: "'केसरी' समाचार पत्र किसने शुरू किया?",
    },
    options: {
      en: ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Gopal Krishna Gokhale", "Dadabhai Naoroji"],
      hi: ["महात्मा गांधी", "बाल गंगाधर तिलक", "गोपाल कृष्ण गोखले", "दादाभाई नौरोजी"],
    },
    answer: { en: "Bal Gangadhar Tilak", hi: "बाल गंगाधर तिलक" },
    explanation: {
      en: "Bal Gangadhar Tilak started the Marathi newspaper 'Kesari' in 1881.",
      hi: "बाल गंगाधर तिलक ने 1881 में मराठी समाचार पत्र 'केसरी' शुरू किया।",
    },
  },
  {
    question: {
      en: "Which soil is best suited for cotton cultivation?",
      hi: "कपास की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
    },
    options: {
      en: ["Alluvial Soil", "Black Soil", "Red Soil", "Laterite Soil"],
      hi: ["जलोढ़ मिट्टी", "काली मिट्टी", "लाल मिट्टी", "लेटेराइट मिट्टी"],
    },
    answer: { en: "Black Soil", hi: "काली मिट्टी" },
    explanation: {
      en: "Black soil (Regur soil) is best for cotton cultivation due to its moisture retention.",
      hi: "काली मिट्टी (रेगुर मिट्टी) नमी धारण क्षमता के कारण कपास की खेती के लिए सर्वोत्तम है।",
    },
  },
  {
    question: {
      en: "Which vitamin deficiency causes scurvy?",
      hi: "किस विटामिन की कमी से स्कर्वी होता है?",
    },
    options: {
      en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    },
    answer: { en: "Vitamin C", hi: "विटामिन C" },
    explanation: {
      en: "Scurvy is caused by deficiency of Vitamin C (ascorbic acid).",
      hi: "स्कर्वी विटामिन C (एस्कॉर्बिक एसिड) की कमी से होता है।",
    },
  },
  {
    question: {
      en: "What is the full form of UNESCO?",
      hi: "UNESCO का पूर्ण रूप क्या है?",
    },
    options: {
      en: ["United Nations Educational, Scientific and Cultural Organization", "United Nations Economic and Social Council Organization", "United Nations Environmental and Scientific Committee Organization", "United Nations Educational and Social Cooperation Organization"],
      hi: ["संयुक्त राष्ट्र शैक्षिक, वैज्ञानिक और सांस्कृतिक संगठन", "संयुक्त राष्ट्र आर्थिक और सामाजिक परिषद संगठन", "संयुक्त राष्ट्र पर्यावरण और वैज्ञानिक समिति संगठन", "संयुक्त राष्ट्र शैक्षिक और सामाजिक सहयोग संगठन"],
    },
    answer: { en: "United Nations Educational, Scientific and Cultural Organization", hi: "संयुक्त राष्ट्र शैक्षिक, वैज्ञानिक और सांस्कृतिक संगठन" },
    explanation: {
      en: "UNESCO stands for United Nations Educational, Scientific and Cultural Organization, established in 1945.",
      hi: "UNESCO का अर्थ है संयुक्त राष्ट्र शैक्षिक, वैज्ञानिक और सांस्कृतिक संगठन, जो 1945 में स्थापित हुआ।",
    },
  },

  // ===== DAY 21 SET (Q101-Q105) =====
  {
    question: {
      en: "Who is the chairman of the Rajya Sabha?",
      hi: "राज्यसभा के सभापति कौन होते हैं?",
    },
    options: {
      en: ["President", "Vice President", "Prime Minister", "Speaker"],
      hi: ["राष्ट्रपति", "उपराष्ट्रपति", "प्रधानमंत्री", "अध्यक्ष"],
    },
    answer: { en: "Vice President", hi: "उपराष्ट्रपति" },
    explanation: {
      en: "The Vice President of India is the ex-officio chairman of the Rajya Sabha.",
      hi: "भारत के उपराष्ट्रपति राज्यसभा के पदेन सभापति होते हैं।",
    },
  },
  {
    question: {
      en: "The Champaran Satyagraha took place in which year?",
      hi: "चंपारण सत्याग्रह किस वर्ष हुआ?",
    },
    options: {
      en: ["1915", "1917", "1919", "1920"],
      hi: ["1915", "1917", "1919", "1920"],
    },
    answer: { en: "1917", hi: "1917" },
    explanation: {
      en: "The Champaran Satyagraha (1917) was Gandhiji's first major civil disobedience in India.",
      hi: "चंपारण सत्याग्रह (1917) भारत में गांधीजी का पहला प्रमुख सविनय अवज्ञा आंदोलन था।",
    },
  },
  {
    question: {
      en: "Which Indian state shares its border with the most number of states?",
      hi: "कौन सा भारतीय राज्य सबसे अधिक राज्यों के साथ सीमा साझा करता है?",
    },
    options: {
      en: ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Assam"],
      hi: ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "असम"],
    },
    answer: { en: "Uttar Pradesh", hi: "उत्तर प्रदेश" },
    explanation: {
      en: "Uttar Pradesh shares its border with 9 states, the most of any Indian state.",
      hi: "उत्तर प्रदेश 9 राज्यों के साथ सीमा साझा करता है, जो किसी भी भारतीय राज्य में सबसे अधिक है।",
    },
  },
  {
    question: {
      en: "Which is the nearest star to Earth?",
      hi: "पृथ्वी का निकटतम तारा कौन सा है?",
    },
    options: {
      en: ["Proxima Centauri", "Sun", "Sirius", "Alpha Centauri"],
      hi: ["प्रॉक्सिमा सेंटॉरी", "सूर्य", "सिरियस", "अल्फा सेंटॉरी"],
    },
    answer: { en: "Sun", hi: "सूर्य" },
    explanation: {
      en: "The Sun is the nearest star to Earth at about 150 million km distance.",
      hi: "सूर्य लगभग 150 मिलियन किमी की दूरी पर पृथ्वी का निकटतम तारा है।",
    },
  },
  {
    question: {
      en: "What is the currency of Bangladesh?",
      hi: "बांग्लादेश की मुद्रा क्या है?",
    },
    options: {
      en: ["Rupee", "Taka", "Kyat", "Ngultrum"],
      hi: ["रुपया", "टका", "क्यात", "नगुलट्रम"],
    },
    answer: { en: "Taka", hi: "टका" },
    explanation: {
      en: "The Taka is the official currency of Bangladesh.",
      hi: "टका बांग्लादेश की आधिकारिक मुद्रा है।",
    },
  },

  // ===== DAY 22 SET (Q106-Q110) =====
  {
    question: {
      en: "Money bills can be introduced in which house of Parliament?",
      hi: "धन विधेयक संसद के किस सदन में पेश किया जा सकता है?",
    },
    options: {
      en: ["Rajya Sabha", "Lok Sabha", "Both Houses", "Joint Session"],
      hi: ["राज्यसभा", "लोकसभा", "दोनों सदन", "संयुक्त सत्र"],
    },
    answer: { en: "Lok Sabha", hi: "लोकसभा" },
    explanation: {
      en: "Money bills can only be introduced in the Lok Sabha as per Article 110.",
      hi: "अनुच्छेद 110 के अनुसार धन विधेयक केवल लोकसभा में ही पेश किया जा सकता है।",
    },
  },
  {
    question: {
      en: "Who established the Servants of India Society?",
      hi: "सर्वेंट्स ऑफ इंडिया सोसाइटी की स्थापना किसने की?",
    },
    options: {
      en: ["Bal Gangadhar Tilak", "Gopal Krishna Gokhale", "Lala Lajpat Rai", "Bipin Chandra Pal"],
      hi: ["बाल गंगाधर तिलक", "गोपाल कृष्ण गोखले", "लाला लाजपत राय", "बिपिन चंद्र पाल"],
    },
    answer: { en: "Gopal Krishna Gokhale", hi: "गोपाल कृष्ण गोखले" },
    explanation: {
      en: "Gopal Krishna Gokhale founded the Servants of India Society in 1905 in Pune.",
      hi: "गोपाल कृष्ण गोखले ने 1905 में पुणे में सर्वेंट्स ऑफ इंडिया सोसाइटी की स्थापना की।",
    },
  },
  {
    question: {
      en: "Which Indian river flows through a rift valley?",
      hi: "कौन सी भारतीय नदी दरार घाटी से होकर बहती है?",
    },
    options: {
      en: ["Ganga", "Yamuna", "Narmada", "Godavari"],
      hi: ["गंगा", "यमुना", "नर्मदा", "गोदावरी"],
    },
    answer: { en: "Narmada", hi: "नर्मदा" },
    explanation: {
      en: "The Narmada and Tapi rivers flow through rift valleys, unlike most other Indian rivers.",
      hi: "नर्मदा और ताप्ती नदियां दरार घाटियों से बहती हैं, अन्य भारतीय नदियों से भिन्न।",
    },
  },
  {
    question: {
      en: "Which instrument is used to measure atmospheric pressure?",
      hi: "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    },
    options: {
      en: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
      hi: ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    },
    answer: { en: "Barometer", hi: "बैरोमीटर" },
    explanation: {
      en: "A barometer is used to measure atmospheric pressure.",
      hi: "बैरोमीटर का उपयोग वायुमंडलीय दबाव मापने के लिए किया जाता है।",
    },
  },
  {
    question: {
      en: "Which is the smallest country in the world by area?",
      hi: "क्षेत्रफल के अनुसार विश्व का सबसे छोटा देश कौन सा है?",
    },
    options: {
      en: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      hi: ["मोनाको", "वेटिकन सिटी", "सैन मरीनो", "लिकटेंस्टीन"],
    },
    answer: { en: "Vatican City", hi: "वेटिकन सिटी" },
    explanation: {
      en: "Vatican City is the smallest country in the world with an area of just 0.44 sq km.",
      hi: "वेटिकन सिटी केवल 0.44 वर्ग किमी क्षेत्रफल के साथ विश्व का सबसे छोटा देश है।",
    },
  },

  // ===== DAY 23 SET (Q111-Q115) =====
  {
    question: {
      en: "The concept of 'Welfare State' in the Indian Constitution is found in which part?",
      hi: "भारतीय संविधान में 'कल्याणकारी राज्य' की अवधारणा किस भाग में है?",
    },
    options: {
      en: ["Part III", "Part IV", "Part IX", "Part XII"],
      hi: ["भाग III", "भाग IV", "भाग IX", "भाग XII"],
    },
    answer: { en: "Part IV", hi: "भाग IV" },
    explanation: {
      en: "Part IV (Directive Principles) embodies the concept of a Welfare State.",
      hi: "भाग IV (नीति निदेशक तत्व) कल्याणकारी राज्य की अवधारणा को दर्शाता है।",
    },
  },
  {
    question: {
      en: "The first Battle of Panipat was fought in which year?",
      hi: "पानीपत का प्रथम युद्ध किस वर्ष लड़ा गया?",
    },
    options: {
      en: ["1526", "1556", "1576", "1761"],
      hi: ["1526", "1556", "1576", "1761"],
    },
    answer: { en: "1526", hi: "1526" },
    explanation: {
      en: "The first Battle of Panipat (1526) was fought between Babur and Ibrahim Lodi.",
      hi: "पानीपत का प्रथम युद्ध (1526) बाबर और इब्राहिम लोदी के बीच लड़ा गया।",
    },
  },
  {
    question: {
      en: "Which soil is found in the northern plains of India?",
      hi: "भारत के उत्तरी मैदानों में कौन सी मिट्टी पाई जाती है?",
    },
    options: {
      en: ["Black Soil", "Red Soil", "Alluvial Soil", "Laterite Soil"],
      hi: ["काली मिट्टी", "लाल मिट्टी", "जलोढ़ मिट्टी", "लेटेराइट मिट्टी"],
    },
    answer: { en: "Alluvial Soil", hi: "जलोढ़ मिट्टी" },
    explanation: {
      en: "Alluvial soil is found in the northern plains, deposited by rivers like Ganga and Yamuna.",
      hi: "जलोढ़ मिट्टी उत्तरी मैदानों में पाई जाती है, जो गंगा और यमुना जैसी नदियों द्वारा जमा की गई है।",
    },
  },
  {
    question: {
      en: "Which metal is liquid at room temperature?",
      hi: "कौन सी धातु कमरे के तापमान पर तरल अवस्था में होती है?",
    },
    options: {
      en: ["Aluminum", "Mercury", "Iron", "Copper"],
      hi: ["एल्युमीनियम", "पारा", "लोहा", "तांबा"],
    },
    answer: { en: "Mercury", hi: "पारा" },
    explanation: {
      en: "Mercury is the only metal that is liquid at room temperature.",
      hi: "पारा एकमात्र धातु है जो कमरे के तापमान पर तरल अवस्था में होती है।",
    },
  },
  {
    question: {
      en: "Which organization manages India's space program?",
      hi: "भारत के अंतरिक्ष कार्यक्रम का प्रबंधन कौन सी संस्था करती है?",
    },
    options: {
      en: ["NASA", "ISRO", "DRDO", "BARC"],
      hi: ["NASA", "ISRO", "DRDO", "BARC"],
    },
    answer: { en: "ISRO", hi: "ISRO" },
    explanation: {
      en: "ISRO (Indian Space Research Organisation) manages India's space program since 1969.",
      hi: "ISRO (भारतीय अंतरिक्ष अनुसंधान संगठन) 1969 से भारत के अंतरिक्ष कार्यक्रम का प्रबंधन करता है।",
    },
  },

  // ===== DAY 24 SET (Q116-Q120) =====
  {
    question: {
      en: "Residuary powers in India lie with which government?",
      hi: "भारत में अवशिष्ट शक्तियां किस सरकार के पास हैं?",
    },
    options: {
      en: ["State Government", "Central Government", "Local Government", "Concurrent List"],
      hi: ["राज्य सरकार", "केंद्र सरकार", "स्थानीय सरकार", "समवर्ती सूची"],
    },
    answer: { en: "Central Government", hi: "केंद्र सरकार" },
    explanation: {
      en: "Under Article 248, residuary powers of legislation rest with the Central Government.",
      hi: "अनुच्छेद 248 के तहत, विधान की अवशिष्ट शक्तियां केंद्र सरकार के पास हैं।",
    },
  },
  {
    question: {
      en: "The Rowlatt Act was passed in which year?",
      hi: "रॉलेट एक्ट किस वर्ष पारित हुआ?",
    },
    options: {
      en: ["1917", "1919", "1921", "1923"],
      hi: ["1917", "1919", "1921", "1923"],
    },
    answer: { en: "1919", hi: "1919" },
    explanation: {
      en: "The Rowlatt Act was passed in March 1919, allowing detention without trial.",
      hi: "रॉलेट एक्ट मार्च 1919 में पारित हुआ, जो बिना मुकदमे के हिरासत की अनुमति देता था।",
    },
  },
  {
    question: {
      en: "Which dam is the tallest in India?",
      hi: "भारत का सबसे ऊंचा बांध कौन सा है?",
    },
    options: {
      en: ["Bhakra Nangal", "Tehri Dam", "Hirakud Dam", "Sardar Sarovar"],
      hi: ["भाखड़ा नांगल", "टिहरी बांध", "हीराकुड बांध", "सरदार सरोवर"],
    },
    answer: { en: "Tehri Dam", hi: "टिहरी बांध" },
    explanation: {
      en: "Tehri Dam in Uttarakhand is the tallest dam in India at 260.5 meters.",
      hi: "उत्तराखंड में टिहरी बांध 260.5 मीटर ऊंचाई के साथ भारत का सबसे ऊंचा बांध है।",
    },
  },
  {
    question: {
      en: "What is the normal body temperature of a human?",
      hi: "मानव शरीर का सामान्य तापमान कितना होता है?",
    },
    options: {
      en: ["36.1°C", "37°C", "38°C", "39°C"],
      hi: ["36.1°C", "37°C", "38°C", "39°C"],
    },
    answer: { en: "37°C", hi: "37°C" },
    explanation: {
      en: "The normal human body temperature is approximately 37°C (98.6°F).",
      hi: "मानव शरीर का सामान्य तापमान लगभग 37°C (98.6°F) होता है।",
    },
  },
  {
    question: {
      en: "Which planet is closest to the Sun?",
      hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
    },
    options: {
      en: ["Venus", "Mars", "Mercury", "Earth"],
      hi: ["शुक्र", "मंगल", "बुध", "पृथ्वी"],
    },
    answer: { en: "Mercury", hi: "बुध" },
    explanation: {
      en: "Mercury is the closest planet to the Sun at about 57.9 million km distance.",
      hi: "बुध लगभग 57.9 मिलियन किमी की दूरी पर सूर्य का सबसे निकटतम ग्रह है।",
    },
  },

  // ===== DAY 25 SET (Q121-Q125) =====
  {
    question: {
      en: "What is the voting age in India?",
      hi: "भारत में मतदान की आयु क्या है?",
    },
    options: {
      en: ["16 years", "18 years", "21 years", "25 years"],
      hi: ["16 वर्ष", "18 वर्ष", "21 वर्ष", "25 वर्ष"],
    },
    answer: { en: "18 years", hi: "18 वर्ष" },
    explanation: {
      en: "The voting age in India was reduced from 21 to 18 years by the 61st Amendment Act, 1988.",
      hi: "भारत में मतदान की आयु 61वें संशोधन अधिनियम, 1988 द्वारा 21 से घटाकर 18 वर्ष की गई।",
    },
  },
  {
    question: {
      en: "Who led the Salt March with Mahatma Gandhi?",
      hi: "महात्मा गांधी के साथ नमक मार्च किसने किया?",
    },
    options: {
      en: ["78 followers", "100 followers", "50 followers", "200 followers"],
      hi: ["78 अनुयायी", "100 अनुयायी", "50 अनुयायी", "200 अनुयायी"],
    },
    answer: { en: "78 followers", hi: "78 अनुयायी" },
    explanation: {
      en: "Gandhi started the 390 km Dandi March on 12 March 1930 with 78 trusted followers.",
      hi: "गांधी ने 12 मार्च 1930 को 78 विश्वसनीय अनुयायियों के साथ 390 किमी दांडी मार्च शुरू किया।",
    },
  },
  {
    question: {
      en: "Which is the most populous state of India?",
      hi: "भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
    },
    options: {
      en: ["Maharashtra", "Bihar", "Uttar Pradesh", "West Bengal"],
      hi: ["महाराष्ट्र", "बिहार", "उत्तर प्रदेश", "पश्चिम बंगाल"],
    },
    answer: { en: "Uttar Pradesh", hi: "उत्तर प्रदेश" },
    explanation: {
      en: "Uttar Pradesh is the most populous state in India with over 200 million people.",
      hi: "उत्तर प्रदेश 200 मिलियन से अधिक जनसंख्या के साथ भारत का सबसे अधिक आबादी वाला राज्य है।",
    },
  },
  {
    question: {
      en: "Which disease is caused by Plasmodium parasite?",
      hi: "प्लाज्मोडियम परजीवी से कौन सा रोग होता है?",
    },
    options: {
      en: ["Dengue", "Malaria", "Typhoid", "Cholera"],
      hi: ["डेंगू", "मलेरिया", "टाइफाइड", "हैजा"],
    },
    answer: { en: "Malaria", hi: "मलेरिया" },
    explanation: {
      en: "Malaria is caused by Plasmodium parasites transmitted through Anopheles mosquito bites.",
      hi: "मलेरिया प्लाज्मोडियम परजीवी से होता है जो एनोफिलीज मच्छर के काटने से फैलता है।",
    },
  },
  {
    question: {
      en: "Which is the longest wall in the world?",
      hi: "विश्व की सबसे लंबी दीवार कौन सी है?",
    },
    options: {
      en: ["Berlin Wall", "Great Wall of China", "Hadrian's Wall", "Western Wall"],
      hi: ["बर्लिन की दीवार", "चीन की महान दीवार", "हैड्रियन की दीवार", "पश्चिमी दीवार"],
    },
    answer: { en: "Great Wall of China", hi: "चीन की महान दीवार" },
    explanation: {
      en: "The Great Wall of China is approximately 21,196 km long, the longest wall ever built.",
      hi: "चीन की महान दीवार लगभग 21,196 किमी लंबी है, जो अब तक बनी सबसे लंबी दीवार है।",
    },
  },

  // ===== DAY 26 SET (Q126-Q130) =====
  {
    question: {
      en: "How many languages are listed in the Eighth Schedule of the Constitution?",
      hi: "संविधान की आठवीं अनुसूची में कितनी भाषाएं सूचीबद्ध हैं?",
    },
    options: {
      en: ["18", "20", "22", "24"],
      hi: ["18", "20", "22", "24"],
    },
    answer: { en: "22", hi: "22" },
    explanation: {
      en: "The Eighth Schedule of the Indian Constitution lists 22 official languages.",
      hi: "भारतीय संविधान की आठवीं अनुसूची में 22 आधिकारिक भाषाएं सूचीबद्ध हैं।",
    },
  },
  {
    question: {
      en: "Who was the Viceroy of India during the Quit India Movement?",
      hi: "भारत छोड़ो आंदोलन के दौरान भारत का वायसराय कौन था?",
    },
    options: {
      en: ["Lord Irwin", "Lord Linlithgow", "Lord Wavell", "Lord Mountbatten"],
      hi: ["लॉर्ड इरविन", "लॉर्ड लिनलिथगो", "लॉर्ड वेवेल", "लॉर्ड माउंटबेटन"],
    },
    answer: { en: "Lord Linlithgow", hi: "लॉर्ड लिनलिथगो" },
    explanation: {
      en: "Lord Linlithgow was the Viceroy of India during the Quit India Movement (1942).",
      hi: "भारत छोड़ो आंदोलन (1942) के दौरान लॉर्ड लिनलिथगो भारत के वायसराय थे।",
    },
  },
  {
    question: {
      en: "Which state is known as the 'Land of Five Rivers'?",
      hi: "किस राज्य को 'पांच नदियों की भूमि' कहा जाता है?",
    },
    options: {
      en: ["Haryana", "Rajasthan", "Punjab", "Uttar Pradesh"],
      hi: ["हरियाणा", "राजस्थान", "पंजाब", "उत्तर प्रदेश"],
    },
    answer: { en: "Punjab", hi: "पंजाब" },
    explanation: {
      en: "Punjab means 'Land of Five Rivers' - Jhelum, Chenab, Ravi, Beas, and Sutlej.",
      hi: "पंजाब का अर्थ है 'पांच नदियों की भूमि' - झेलम, चिनाब, रावी, ब्यास और सतलज।",
    },
  },
  {
    question: {
      en: "Which gland is known as the 'Master Gland'?",
      hi: "किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
    },
    options: {
      en: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
      hi: ["थायरॉयड", "पिट्यूटरी", "एड्रीनल", "अग्न्याशय"],
    },
    answer: { en: "Pituitary", hi: "पिट्यूटरी" },
    explanation: {
      en: "The pituitary gland is called the Master Gland as it controls other endocrine glands.",
      hi: "पिट्यूटरी ग्रंथि को मास्टर ग्रंथि कहा जाता है क्योंकि यह अन्य अंतःस्रावी ग्रंथियों को नियंत्रित करती है।",
    },
  },
  {
    question: {
      en: "Which country gifted the Statue of Liberty to the USA?",
      hi: "किस देश ने अमेरिका को स्टैच्यू ऑफ लिबर्टी उपहार में दी?",
    },
    options: {
      en: ["Britain", "France", "Germany", "Spain"],
      hi: ["ब्रिटेन", "फ्रांस", "जर्मनी", "स्पेन"],
    },
    answer: { en: "France", hi: "फ्रांस" },
    explanation: {
      en: "France gifted the Statue of Liberty to the USA in 1886.",
      hi: "फ्रांस ने 1886 में अमेरिका को स्टैच्यू ऑफ लिबर्टी उपहार में दी।",
    },
  },

  // ===== DAY 27 SET (Q131-Q135) =====
  {
    question: {
      en: "Which article of the Constitution provides for the formation of new states?",
      hi: "संविधान का कौन सा अनुच्छेद नए राज्यों के गठन का प्रावधान करता है?",
    },
    options: {
      en: ["Article 1", "Article 2", "Article 3", "Article 4"],
      hi: ["अनुच्छेद 1", "अनुच्छेद 2", "अनुच्छेद 3", "अनुच्छेद 4"],
    },
    answer: { en: "Article 3", hi: "अनुच्छेद 3" },
    explanation: {
      en: "Article 3 empowers Parliament to form new states and alter boundaries of existing states.",
      hi: "अनुच्छेद 3 संसद को नए राज्य बनाने और मौजूदा राज्यों की सीमाओं को बदलने का अधिकार देता है।",
    },
  },
  {
    question: {
      en: "Who gave the theory of relativity?",
      hi: "सापेक्षता का सिद्धांत किसने दिया?",
    },
    options: {
      en: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Stephen Hawking"],
      hi: ["आइजैक न्यूटन", "अल्बर्ट आइंस्टीन", "नील्स बोर", "स्टीफन हॉकिंग"],
    },
    answer: { en: "Albert Einstein", hi: "अल्बर्ट आइंस्टीन" },
    explanation: {
      en: "Albert Einstein published his theory of general relativity in 1915.",
      hi: "अल्बर्ट आइंस्टीन ने 1915 में सामान्य सापेक्षता का सिद्धांत प्रकाशित किया।",
    },
  },
  {
    question: {
      en: "Bandipur National Park is located in which state?",
      hi: "बांदीपुर राष्ट्रीय उद्यान किस राज्य में स्थित है?",
    },
    options: {
      en: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
      hi: ["तमिलनाडु", "केरल", "कर्नाटक", "आंध्र प्रदेश"],
    },
    answer: { en: "Karnataka", hi: "कर्नाटक" },
    explanation: {
      en: "Bandipur National Park is located in Karnataka and is a famous tiger reserve.",
      hi: "बांदीपुर राष्ट्रीय उद्यान कर्नाटक में स्थित है और एक प्रसिद्ध बाघ अभयारण्य है।",
    },
  },
  {
    question: {
      en: "What is the chemical formula of common salt?",
      hi: "सामान्य नमक का रासायनिक सूत्र क्या है?",
    },
    options: {
      en: ["NaCl", "KCl", "CaCl2", "MgCl2"],
      hi: ["NaCl", "KCl", "CaCl2", "MgCl2"],
    },
    answer: { en: "NaCl", hi: "NaCl" },
    explanation: {
      en: "Common salt (Sodium Chloride) has the chemical formula NaCl.",
      hi: "सामान्य नमक (सोडियम क्लोराइड) का रासायनिक सूत्र NaCl है।",
    },
  },
  {
    question: {
      en: "Which city is known as the 'Silicon Valley of India'?",
      hi: "किस शहर को 'भारत की सिलिकॉन वैली' कहा जाता है?",
    },
    options: {
      en: ["Hyderabad", "Pune", "Bangalore", "Chennai"],
      hi: ["हैदराबाद", "पुणे", "बेंगलुरु", "चेन्नई"],
    },
    answer: { en: "Bangalore", hi: "बेंगलुरु" },
    explanation: {
      en: "Bangalore is called the Silicon Valley of India for its thriving IT industry.",
      hi: "बेंगलुरु को इसके फलते-फूलते IT उद्योग के लिए भारत की सिलिकॉन वैली कहा जाता है।",
    },
  },

  // ===== DAY 28 SET (Q136-Q140) =====
  {
    question: {
      en: "Emergency provisions in the Indian Constitution are borrowed from which country?",
      hi: "भारतीय संविधान में आपातकालीन प्रावधान किस देश से लिए गए हैं?",
    },
    options: {
      en: ["USA", "UK", "Germany", "Canada"],
      hi: ["अमेरिका", "ब्रिटेन", "जर्मनी", "कनाडा"],
    },
    answer: { en: "Germany", hi: "जर्मनी" },
    explanation: {
      en: "Emergency provisions in the Indian Constitution were borrowed from the Weimar Republic (Germany).",
      hi: "भारतीय संविधान में आपातकालीन प्रावधान वाइमर गणराज्य (जर्मनी) से लिए गए हैं।",
    },
  },
  {
    question: {
      en: "In which year did the Partition of Bengal take place?",
      hi: "बंगाल विभाजन किस वर्ष हुआ?",
    },
    options: {
      en: ["1903", "1905", "1907", "1911"],
      hi: ["1903", "1905", "1907", "1911"],
    },
    answer: { en: "1905", hi: "1905" },
    explanation: {
      en: "The Partition of Bengal was carried out by Lord Curzon on 16 October 1905.",
      hi: "बंगाल विभाजन 16 अक्टूबर 1905 को लॉर्ड कर्जन द्वारा किया गया।",
    },
  },
  {
    question: {
      en: "Which tropic passes through India?",
      hi: "कौन सी उष्णकटिबंधीय रेखा भारत से होकर गुजरती है?",
    },
    options: {
      en: ["Tropic of Capricorn", "Tropic of Cancer", "Equator", "Prime Meridian"],
      hi: ["मकर रेखा", "कर्क रेखा", "भूमध्य रेखा", "प्रधान मध्याह्न रेखा"],
    },
    answer: { en: "Tropic of Cancer", hi: "कर्क रेखा" },
    explanation: {
      en: "The Tropic of Cancer (23.5°N) passes through the middle of India.",
      hi: "कर्क रेखा (23.5°N) भारत के मध्य से होकर गुजरती है।",
    },
  },
  {
    question: {
      en: "Which acid is present in lemon?",
      hi: "नींबू में कौन सा अम्ल पाया जाता है?",
    },
    options: {
      en: ["Acetic Acid", "Citric Acid", "Hydrochloric Acid", "Oxalic Acid"],
      hi: ["एसिटिक एसिड", "सिट्रिक एसिड", "हाइड्रोक्लोरिक एसिड", "ऑक्सालिक एसिड"],
    },
    answer: { en: "Citric Acid", hi: "सिट्रिक एसिड" },
    explanation: {
      en: "Lemon contains citric acid, which gives it its sour taste.",
      hi: "नींबू में सिट्रिक एसिड होता है, जो इसे खट्टा स्वाद देता है।",
    },
  },
  {
    question: {
      en: "Who is known as the 'Father of the Nation'?",
      hi: "'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
    },
    options: {
      en: ["Jawaharlal Nehru", "B. R. Ambedkar", "Mahatma Gandhi", "Sardar Patel"],
      hi: ["जवाहरलाल नेहरू", "बी. आर. अंबेडकर", "महात्मा गांधी", "सरदार पटेल"],
    },
    answer: { en: "Mahatma Gandhi", hi: "महात्मा गांधी" },
    explanation: {
      en: "Mahatma Gandhi is honored as the Father of the Nation for leading India's independence movement.",
      hi: "महात्मा गांधी को भारत के स्वतंत्रता आंदोलन का नेतृत्व करने के लिए राष्ट्रपिता के रूप में सम्मानित किया जाता है।",
    },
  },

  // ===== DAY 29 SET (Q141-Q145) =====
  {
    question: {
      en: "The Inter-State Council is constituted under which article?",
      hi: "अंतर-राज्य परिषद किस अनुच्छेद के तहत गठित की जाती है?",
    },
    options: {
      en: ["Article 260", "Article 263", "Article 280", "Article 300"],
      hi: ["अनुच्छेद 260", "अनुच्छेद 263", "अनुच्छेद 280", "अनुच्छेद 300"],
    },
    answer: { en: "Article 263", hi: "अनुच्छेद 263" },
    explanation: {
      en: "Article 263 provides for the establishment of an Inter-State Council.",
      hi: "अनुच्छेद 263 अंतर-राज्य परिषद की स्थापना का प्रावधान करता है।",
    },
  },
  {
    question: {
      en: "Who was the first woman to become the President of India?",
      hi: "भारत की पहली महिला राष्ट्रपति कौन बनीं?",
    },
    options: {
      en: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
      hi: ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सुषमा स्वराज"],
    },
    answer: { en: "Pratibha Patil", hi: "प्रतिभा पाटिल" },
    explanation: {
      en: "Pratibha Patil served as the 12th President of India (2007-2012), the first woman to hold the office.",
      hi: "प्रतिभा पाटिल भारत की 12वीं राष्ट्रपति (2007-2012) थीं, यह पद संभालने वाली पहली महिला।",
    },
  },
  {
    question: {
      en: "Kaziranga National Park is famous for which animal?",
      hi: "काजीरंगा राष्ट्रीय उद्यान किस जानवर के लिए प्रसिद्ध है?",
    },
    options: {
      en: ["Bengal Tiger", "Asian Elephant", "One-Horned Rhinoceros", "Snow Leopard"],
      hi: ["बंगाल टाइगर", "एशियाई हाथी", "एक सींग वाला गैंडा", "हिम तेंदुआ"],
    },
    answer: { en: "One-Horned Rhinoceros", hi: "एक सींग वाला गैंडा" },
    explanation: {
      en: "Kaziranga National Park in Assam is famous for the Indian one-horned rhinoceros.",
      hi: "असम में काजीरंगा राष्ट्रीय उद्यान भारतीय एक सींग वाले गैंडे के लिए प्रसिद्ध है।",
    },
  },
  {
    question: {
      en: "What is the study of earthquakes called?",
      hi: "भूकंपों के अध्ययन को क्या कहते हैं?",
    },
    options: {
      en: ["Geology", "Seismology", "Meteorology", "Volcanology"],
      hi: ["भूविज्ञान", "भूकंप विज्ञान", "मौसम विज्ञान", "ज्वालामुखी विज्ञान"],
    },
    answer: { en: "Seismology", hi: "भूकंप विज्ञान" },
    explanation: {
      en: "Seismology is the scientific study of earthquakes and related phenomena.",
      hi: "भूकंप विज्ञान भूकंपों और संबंधित घटनाओं का वैज्ञानिक अध्ययन है।",
    },
  },
  {
    question: {
      en: "Which planet has the most moons?",
      hi: "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
    },
    options: {
      en: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      hi: ["बृहस्पति", "शनि", "यूरेनस", "नेपच्यून"],
    },
    answer: { en: "Saturn", hi: "शनि" },
    explanation: {
      en: "Saturn has the most known moons of any planet in our solar system.",
      hi: "शनि के पास हमारे सौर मंडल में किसी भी ग्रह के सबसे अधिक ज्ञात चंद्रमा हैं।",
    },
  },

  // ===== DAY 30 SET (Q146-Q150) =====
  {
    question: {
      en: "The Finance Commission is constituted every how many years?",
      hi: "वित्त आयोग का गठन प्रत्येक कितने वर्ष में किया जाता है?",
    },
    options: {
      en: ["3 years", "4 years", "5 years", "6 years"],
      hi: ["3 वर्ष", "4 वर्ष", "5 वर्ष", "6 वर्ष"],
    },
    answer: { en: "5 years", hi: "5 वर्ष" },
    explanation: {
      en: "The Finance Commission is constituted every 5 years under Article 280.",
      hi: "अनुच्छेद 280 के तहत प्रत्येक 5 वर्ष में वित्त आयोग का गठन किया जाता है।",
    },
  },
  {
    question: {
      en: "Who was the first Indian to go to space?",
      hi: "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
    },
    options: {
      en: ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Gaganyaan Crew"],
      hi: ["कल्पना चावला", "राकेश शर्मा", "सुनीता विलियम्स", "गगनयान क्रू"],
    },
    answer: { en: "Rakesh Sharma", hi: "राकेश शर्मा" },
    explanation: {
      en: "Rakesh Sharma became the first Indian to travel to space on 2 April 1984.",
      hi: "राकेश शर्मा 2 अप्रैल 1984 को अंतरिक्ष में जाने वाले पहले भारतीय बने।",
    },
  },
  {
    question: {
      en: "Which is the largest island in the world?",
      hi: "विश्व का सबसे बड़ा द्वीप कौन सा है?",
    },
    options: {
      en: ["Madagascar", "Greenland", "Borneo", "New Guinea"],
      hi: ["मेडागास्कर", "ग्रीनलैंड", "बोर्नियो", "न्यू गिनी"],
    },
    answer: { en: "Greenland", hi: "ग्रीनलैंड" },
    explanation: {
      en: "Greenland is the largest island in the world with an area of about 2.166 million sq km.",
      hi: "ग्रीनलैंड लगभग 2.166 मिलियन वर्ग किमी क्षेत्रफल के साथ विश्व का सबसे बड़ा द्वीप है।",
    },
  },
  {
    question: {
      en: "What is the process of conversion of water vapor to liquid called?",
      hi: "जलवाष्प को तरल में बदलने की प्रक्रिया को क्या कहते हैं?",
    },
    options: {
      en: ["Evaporation", "Condensation", "Sublimation", "Precipitation"],
      hi: ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "वर्षण"],
    },
    answer: { en: "Condensation", hi: "संघनन" },
    explanation: {
      en: "Condensation is the process where water vapor turns into liquid water.",
      hi: "संघनन वह प्रक्रिया है जिसमें जलवाष्प तरल पानी में बदलती है।",
    },
  },
  {
    question: {
      en: "Which Indian festival is known as the 'Festival of Lights'?",
      hi: "किस भारतीय त्योहार को 'रोशनी का त्योहार' कहा जाता है?",
    },
    options: {
      en: ["Holi", "Diwali", "Eid", "Christmas"],
      hi: ["होली", "दिवाली", "ईद", "क्रिसमस"],
    },
    answer: { en: "Diwali", hi: "दिवाली" },
    explanation: {
      en: "Diwali is known as the Festival of Lights, celebrated across India with lamps and fireworks.",
      hi: "दिवाली को रोशनी का त्योहार कहा जाता है, जो पूरे भारत में दीपों और आतिशबाजी के साथ मनाया जाता है।",
    },
  },

  // ===== DAY 31 SET (Q151-Q155) =====
  {
    question: {
      en: "Which constitutional amendment reduced the voting age from 21 to 18?",
      hi: "किस संविधान संशोधन ने मतदान की आयु 21 से घटाकर 18 वर्ष कर दी?",
    },
    options: {
      en: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
      hi: ["42वां संशोधन", "44वां संशोधन", "61वां संशोधन", "73वां संशोधन"],
    },
    answer: { en: "61st Amendment", hi: "61वां संशोधन" },
    explanation: {
      en: "The 61st Constitutional Amendment Act, 1988 reduced the voting age from 21 to 18 years.",
      hi: "61वें संविधान संशोधन अधिनियम, 1988 ने मतदान की आयु 21 से घटाकर 18 वर्ष कर दी।",
    },
  },
  {
    question: {
      en: "The Dandi March was associated with which movement?",
      hi: "दांडी मार्च किस आंदोलन से जुड़ा था?",
    },
    options: {
      en: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
      hi: ["असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन", "स्वदेशी आंदोलन"],
    },
    answer: { en: "Civil Disobedience Movement", hi: "सविनय अवज्ञा आंदोलन" },
    explanation: {
      en: "The Dandi March (1930) launched the Civil Disobedience Movement against the British Salt Tax.",
      hi: "दांडी मार्च (1930) ने ब्रिटिश नमक कर के खिलाफ सविनय अवज्ञा आंदोलन की शुरुआत की।",
    },
  },
  {
    question: {
      en: "Which is the highest peak in India?",
      hi: "भारत की सबसे ऊंची चोटी कौन सी है?",
    },
    options: {
      en: ["Mount Everest", "K2", "Kangchenjunga", "Nanda Devi"],
      hi: ["माउंट एवरेस्ट", "K2", "कंचनजंगा", "नंदा देवी"],
    },
    answer: { en: "Kangchenjunga", hi: "कंचनजंगा" },
    explanation: {
      en: "Kangchenjunga (8,586 m) is the highest peak in India, located on the India-Nepal border in Sikkim.",
      hi: "कंचनजंगा (8,586 मी) भारत की सबसे ऊंची चोटी है, जो सिक्किम में भारत-नेपाल सीमा पर स्थित है।",
    },
  },
  {
    question: {
      en: "What is the SI unit of electric current?",
      hi: "विद्युत धारा की SI इकाई क्या है?",
    },
    options: {
      en: ["Volt", "Ampere", "Ohm", "Watt"],
      hi: ["वोल्ट", "एम्पियर", "ओम", "वाट"],
    },
    answer: { en: "Ampere", hi: "एम्पियर" },
    explanation: {
      en: "The Ampere (A) is the SI unit of electric current.",
      hi: "एम्पियर (A) विद्युत धारा की SI इकाई है।",
    },
  },
  {
    question: {
      en: "Who composed the national anthem of India, 'Jana Gana Mana'?",
      hi: "भारत के राष्ट्रगान 'जन गण मन' की रचना किसने की?",
    },
    options: {
      en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Muhammad Iqbal", "Sarojini Naidu"],
      hi: ["बंकिम चंद्र चटर्जी", "रबीन्द्रनाथ टैगोर", "मुहम्मद इकबाल", "सरोजिनी नायडू"],
    },
    answer: { en: "Rabindranath Tagore", hi: "रबीन्द्रनाथ टैगोर" },
    explanation: {
      en: "Rabindranath Tagore composed Jana Gana Mana, adopted as India's national anthem on 24 January 1950.",
      hi: "रबीन्द्रनाथ टैगोर ने जन गण मन की रचना की, जिसे 24 जनवरी 1950 को भारत के राष्ट्रगान के रूप में अपनाया गया।",
    },
  },

  // ===== DAY 32 SET (Q156-Q160) =====
  {
    question: {
      en: "How many schedules are there in the Indian Constitution?",
      hi: "भारतीय संविधान में कितनी अनुसूचियां हैं?",
    },
    options: {
      en: ["8", "10", "12", "15"],
      hi: ["8", "10", "12", "15"],
    },
    answer: { en: "12", hi: "12" },
    explanation: {
      en: "The Indian Constitution currently has 12 schedules dealing with various provisions.",
      hi: "भारतीय संविधान में वर्तमान में 12 अनुसूचियां हैं जो विभिन्न प्रावधानों से संबंधित हैं।",
    },
  },
  {
    question: {
      en: "Who was the last Mughal emperor?",
      hi: "अंतिम मुगल सम्राट कौन था?",
    },
    options: {
      en: ["Aurangzeb", "Shah Alam II", "Bahadur Shah Zafar", "Akbar II"],
      hi: ["औरंगजेब", "शाह आलम II", "बहादुर शाह जफर", "अकबर II"],
    },
    answer: { en: "Bahadur Shah Zafar", hi: "बहादुर शाह जफर" },
    explanation: {
      en: "Bahadur Shah Zafar (1837-1857) was the last Mughal emperor, exiled by the British after the 1857 revolt.",
      hi: "बहादुर शाह जफर (1837-1857) अंतिम मुगल सम्राट थे, जिन्हें 1857 के विद्रोह के बाद अंग्रेजों ने निर्वासित किया।",
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
      en: "The Kosi river is called the 'Sorrow of Bihar' due to its frequent devastating floods.",
      hi: "कोसी नदी को बार-बार आने वाली विनाशकारी बाढ़ के कारण 'बिहार का शोक' कहा जाता है।",
    },
  },
  {
    question: {
      en: "What is the chemical symbol for gold?",
      hi: "सोने का रासायनिक प्रतीक क्या है?",
    },
    options: {
      en: ["Go", "Gd", "Au", "Ag"],
      hi: ["Go", "Gd", "Au", "Ag"],
    },
    answer: { en: "Au", hi: "Au" },
    explanation: {
      en: "The chemical symbol for gold is Au, derived from the Latin word 'Aurum'.",
      hi: "सोने का रासायनिक प्रतीक Au है, जो लैटिन शब्द 'Aurum' से लिया गया है।",
    },
  },
  {
    question: {
      en: "Which city is known as the 'Pink City' of India?",
      hi: "भारत के 'गुलाबी शहर' के रूप में कौन सा शहर जाना जाता है?",
    },
    options: {
      en: ["Jaipur", "Jodhpur", "Udaipur", "Mysore"],
      hi: ["जयपुर", "जोधपुर", "उदयपुर", "मैसूर"],
    },
    answer: { en: "Jaipur", hi: "जयपुर" },
    explanation: {
      en: "Jaipur is called the Pink City because of the pink-colored buildings in its old city area.",
      hi: "जयपुर को गुलाबी शहर कहा जाता है क्योंकि इसके पुराने शहर क्षेत्र में गुलाबी रंग की इमारतें हैं।",
    },
  },

  // ===== DAY 33 SET (Q161-Q165) =====
  {
    question: {
      en: "Who is considered the first citizen of India?",
      hi: "भारत का प्रथम नागरिक किसे माना जाता है?",
    },
    options: {
      en: ["Prime Minister", "President", "Chief Justice", "Speaker"],
      hi: ["प्रधानमंत्री", "राष्ट्रपति", "मुख्य न्यायाधीश", "अध्यक्ष"],
    },
    answer: { en: "President", hi: "राष्ट्रपति" },
    explanation: {
      en: "The President of India is considered the first citizen of the country.",
      hi: "भारत के राष्ट्रपति को देश का प्रथम नागरिक माना जाता है।",
    },
  },
  {
    question: {
      en: "The Rowlatt Act was passed in which year?",
      hi: "रौलट एक्ट किस वर्ष पारित हुआ?",
    },
    options: {
      en: ["1917", "1919", "1921", "1923"],
      hi: ["1917", "1919", "1921", "1923"],
    },
    answer: { en: "1919", hi: "1919" },
    explanation: {
      en: "The Rowlatt Act (1919) allowed detention without trial, leading to widespread protests.",
      hi: "रौलट एक्ट (1919) ने बिना मुकदमे के हिरासत की अनुमति दी, जिससे व्यापक विरोध हुआ।",
    },
  },
  {
    question: {
      en: "Which Indian state is known as the 'Spice Garden of India'?",
      hi: "किस भारतीय राज्य को 'भारत का मसालों का बागान' कहा जाता है?",
    },
    options: {
      en: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
      hi: ["तमिलनाडु", "केरल", "कर्नाटक", "आंध्र प्रदेश"],
    },
    answer: { en: "Kerala", hi: "केरल" },
    explanation: {
      en: "Kerala is called the Spice Garden of India due to its production of cardamom, pepper, and other spices.",
      hi: "केरल को इलायची, काली मिर्च और अन्य मसालों के उत्पादन के कारण भारत का मसालों का बागान कहा जाता है।",
    },
  },
  {
    question: {
      en: "What gas do plants absorb during photosynthesis?",
      hi: "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस अवशोषित करते हैं?",
    },
    options: {
      en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    },
    answer: { en: "Carbon Dioxide", hi: "कार्बन डाइऑक्साइड" },
    explanation: {
      en: "Plants absorb carbon dioxide (CO2) from the atmosphere during photosynthesis.",
      hi: "पौधे प्रकाश संश्लेषण के दौरान वायुमंडल से कार्बन डाइऑक्साइड (CO2) अवशोषित करते हैं।",
    },
  },
  {
    question: {
      en: "What is the currency of Japan?",
      hi: "जापान की मुद्रा क्या है?",
    },
    options: {
      en: ["Yuan", "Won", "Yen", "Ringgit"],
      hi: ["युआन", "वॉन", "येन", "रिंगिट"],
    },
    answer: { en: "Yen", hi: "येन" },
    explanation: {
      en: "The Yen is the official currency of Japan.",
      hi: "येन जापान की आधिकारिक मुद्रा है।",
    },
  },

  // ===== DAY 34 SET (Q166-Q170) =====
  {
    question: {
      en: "Which article of the Indian Constitution deals with the Right to Freedom of Religion?",
      hi: "भारतीय संविधान का कौन सा अनुच्छेद धर्म की स्वतंत्रता के अधिकार से संबंधित है?",
    },
    options: {
      en: ["Article 19", "Article 21", "Article 25", "Article 32"],
      hi: ["अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 25", "अनुच्छेद 32"],
    },
    answer: { en: "Article 25", hi: "अनुच्छेद 25" },
    explanation: {
      en: "Article 25 provides freedom of conscience and free profession, practice, and propagation of religion.",
      hi: "अनुच्छेद 25 अंतःकरण की स्वतंत्रता और धर्म के स्वतंत्र प्रचार, अभ्यास और प्रसार का अधिकार देता है।",
    },
  },
  {
    question: {
      en: "Who gave the slogan 'Tum Mujhe Khoon Do, Main Tumhe Azadi Dunga'?",
      hi: "'तुम मुझे खून दो, मैं तुम्हें आज़ादी दूंगा' का नारा किसने दिया?",
    },
    options: {
      en: ["Bhagat Singh", "Mahatma Gandhi", "Subhas Chandra Bose", "Chandrashekhar Azad"],
      hi: ["भगत सिंह", "महात्मा गांधी", "सुभाष चंद्र बोस", "चंद्रशेखर आजाद"],
    },
    answer: { en: "Subhas Chandra Bose", hi: "सुभाष चंद्र बोस" },
    explanation: {
      en: "Subhas Chandra Bose gave this famous slogan meaning 'Give me blood and I shall give you freedom'.",
      hi: "सुभाष चंद्र बोस ने यह प्रसिद्ध नारा दिया जिसका अर्थ है 'तुम मुझे खून दो, मैं तुम्हें आज़ादी दूंगा'।",
    },
  },
  {
    question: {
      en: "Which is the largest desert in India?",
      hi: "भारत का सबसे बड़ा मरुस्थल कौन सा है?",
    },
    options: {
      en: ["Rann of Kutch", "Thar Desert", "Ladakh Desert", "Spiti Valley"],
      hi: ["कच्छ का रण", "थार मरुस्थल", "लद्दाख मरुस्थल", "स्पीति घाटी"],
    },
    answer: { en: "Thar Desert", hi: "थार मरुस्थल" },
    explanation: {
      en: "The Thar Desert (Great Indian Desert) in Rajasthan is the largest desert in India.",
      hi: "राजस्थान में थार मरुस्थल (महान भारतीय मरुस्थल) भारत का सबसे बड़ा मरुस्थल है।",
    },
  },
  {
    question: {
      en: "Which metal is liquid at room temperature?",
      hi: "कौन सी धातु कमरे के तापमान पर तरल होती है?",
    },
    options: {
      en: ["Iron", "Aluminium", "Mercury", "Lead"],
      hi: ["लोहा", "एल्युमिनियम", "पारा", "सीसा"],
    },
    answer: { en: "Mercury", hi: "पारा" },
    explanation: {
      en: "Mercury (Hg) is the only metal that is liquid at room temperature.",
      hi: "पारा (Hg) एकमात्र धातु है जो कमरे के तापमान पर तरल अवस्था में रहती है।",
    },
  },
  {
    question: {
      en: "Who is credited with inventing the practical electric light bulb?",
      hi: "व्यावहारिक विद्युत बल्ब के आविष्कार का श्रेय किसे दिया जाता है?",
    },
    options: {
      en: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Michael Faraday"],
      hi: ["निकोला टेस्ला", "अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "माइकल फैराडे"],
    },
    answer: { en: "Thomas Edison", hi: "थॉमस एडिसन" },
    explanation: {
      en: "Thomas Edison invented the first commercially practical incandescent light bulb in 1879.",
      hi: "थॉमस एडिसन ने 1879 में पहले व्यावसायिक रूप से व्यावहारिक तापदीप्त बल्ब का आविष्कार किया।",
    },
  },

  // ===== DAY 35 SET (Q171-Q175) =====
  {
    question: {
      en: "What is the minimum age to become the President of India?",
      hi: "भारत का राष्ट्रपति बनने के लिए न्यूनतम आयु क्या है?",
    },
    options: {
      en: ["25 years", "30 years", "35 years", "40 years"],
      hi: ["25 वर्ष", "30 वर्ष", "35 वर्ष", "40 वर्ष"],
    },
    answer: { en: "35 years", hi: "35 वर्ष" },
    explanation: {
      en: "According to Article 58, the minimum age to become the President of India is 35 years.",
      hi: "अनुच्छेद 58 के अनुसार, भारत का राष्ट्रपति बनने के लिए न्यूनतम आयु 35 वर्ष है।",
    },
  },
  {
    question: {
      en: "The Battle of Buxar was fought in which year?",
      hi: "बक्सर का युद्ध किस वर्ष लड़ा गया?",
    },
    options: {
      en: ["1757", "1761", "1764", "1767"],
      hi: ["1757", "1761", "1764", "1767"],
    },
    answer: { en: "1764", hi: "1764" },
    explanation: {
      en: "The Battle of Buxar (1764) established British supremacy in Bengal and Bihar.",
      hi: "बक्सर का युद्ध (1764) ने बंगाल और बिहार में ब्रिटिश सर्वोच्चता स्थापित की।",
    },
  },
  {
    question: {
      en: "Which mountain pass connects India and China through Sikkim?",
      hi: "कौन सा दर्रा सिक्किम के रास्ते भारत और चीन को जोड़ता है?",
    },
    options: {
      en: ["Khyber Pass", "Bom Di La", "Nathu La", "Rohtang Pass"],
      hi: ["खैबर दर्रा", "बोम डि ला", "नाथू ला", "रोहतांग दर्रा"],
    },
    answer: { en: "Nathu La", hi: "नाथू ला" },
    explanation: {
      en: "Nathu La pass in Sikkim connects India with the Tibet Autonomous Region of China.",
      hi: "सिक्किम में नाथू ला दर्रा भारत को चीन के तिब्बत स्वायत्त क्षेत्र से जोड़ता है।",
    },
  },
  {
    question: {
      en: "What is known as the 'powerhouse of the cell'?",
      hi: "'कोशिका का पावरहाउस' किसे कहा जाता है?",
    },
    options: {
      en: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
      hi: ["केंद्रक", "राइबोसोम", "माइटोकॉन्ड्रिया", "गॉल्जी बॉडी"],
    },
    answer: { en: "Mitochondria", hi: "माइटोकॉन्ड्रिया" },
    explanation: {
      en: "Mitochondria are called the powerhouse of the cell as they produce energy (ATP).",
      hi: "माइटोकॉन्ड्रिया को कोशिका का पावरहाउस कहा जाता है क्योंकि वे ऊर्जा (ATP) उत्पन्न करते हैं।",
    },
  },
  {
    question: {
      en: "Which is the largest democracy in the world?",
      hi: "विश्व का सबसे बड़ा लोकतंत्र कौन सा है?",
    },
    options: {
      en: ["United States", "India", "Brazil", "Indonesia"],
      hi: ["संयुक्त राज्य अमेरिका", "भारत", "ब्राजील", "इंडोनेशिया"],
    },
    answer: { en: "India", hi: "भारत" },
    explanation: {
      en: "India is the largest democracy in the world by population.",
      hi: "जनसंख्या के अनुसार भारत विश्व का सबसे बड़ा लोकतंत्र है।",
    },
  },

  // ===== DAY 36 SET (Q176-Q180) =====
  {
    question: {
      en: "The concept of Directive Principles of State Policy is borrowed from which country's constitution?",
      hi: "राज्य नीति के निर्देशक सिद्धांतों की अवधारणा किस देश के संविधान से ली गई है?",
    },
    options: {
      en: ["USA", "UK", "Ireland", "Canada"],
      hi: ["अमेरिका", "ब्रिटेन", "आयरलैंड", "कनाडा"],
    },
    answer: { en: "Ireland", hi: "आयरलैंड" },
    explanation: {
      en: "Directive Principles of State Policy were borrowed from the Irish Constitution.",
      hi: "राज्य नीति के निर्देशक सिद्धांत आयरलैंड के संविधान से लिए गए हैं।",
    },
  },
  {
    question: {
      en: "Who founded the Brahmo Samaj?",
      hi: "ब्रह्म समाज की स्थापना किसने की?",
    },
    options: {
      en: ["Swami Vivekananda", "Swami Dayanand Saraswati", "Raja Ram Mohan Roy", "Ishwar Chandra Vidyasagar"],
      hi: ["स्वामी विवेकानंद", "स्वामी दयानंद सरस्वती", "राजा राम मोहन रॉय", "ईश्वर चंद्र विद्यासागर"],
    },
    answer: { en: "Raja Ram Mohan Roy", hi: "राजा राम मोहन रॉय" },
    explanation: {
      en: "Raja Ram Mohan Roy founded the Brahmo Samaj in 1828 in Kolkata.",
      hi: "राजा राम मोहन रॉय ने 1828 में कोलकाता में ब्रह्म समाज की स्थापना की।",
    },
  },
  {
    question: {
      en: "Which major Indian river flows westward into the Arabian Sea?",
      hi: "कौन सी प्रमुख भारतीय नदी पश्चिम की ओर अरब सागर में बहती है?",
    },
    options: {
      en: ["Godavari", "Krishna", "Narmada", "Kaveri"],
      hi: ["गोदावरी", "कृष्णा", "नर्मदा", "कावेरी"],
    },
    answer: { en: "Narmada", hi: "नर्मदा" },
    explanation: {
      en: "The Narmada river flows westward through a rift valley and empties into the Arabian Sea.",
      hi: "नर्मदा नदी एक भ्रंश घाटी से होकर पश्चिम की ओर बहती है और अरब सागर में गिरती है।",
    },
  },
  {
    question: {
      en: "Which planet is closest to the Sun?",
      hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
    },
    options: {
      en: ["Venus", "Mercury", "Earth", "Mars"],
      hi: ["शुक्र", "बुध", "पृथ्वी", "मंगल"],
    },
    answer: { en: "Mercury", hi: "बुध" },
    explanation: {
      en: "Mercury is the closest planet to the Sun, at an average distance of about 58 million km.",
      hi: "बुध सूर्य के सबसे निकट ग्रह है, लगभग 58 मिलियन किमी की औसत दूरी पर।",
    },
  },
  {
    question: {
      en: "Which Indian state is the largest producer of tea?",
      hi: "कौन सा भारतीय राज्य चाय का सबसे बड़ा उत्पादक है?",
    },
    options: {
      en: ["West Bengal", "Kerala", "Assam", "Tamil Nadu"],
      hi: ["पश्चिम बंगाल", "केरल", "असम", "तमिलनाडु"],
    },
    answer: { en: "Assam", hi: "असम" },
    explanation: {
      en: "Assam is the largest producer of tea in India, contributing about 50% of the country's total production.",
      hi: "असम भारत में चाय का सबसे बड़ा उत्पादक है, जो देश के कुल उत्पादन का लगभग 50% योगदान देता है।",
    },
  },

  // ===== DAY 37 SET (Q181-Q185) =====
  {
    question: {
      en: "How many members can the President nominate to the Rajya Sabha?",
      hi: "राष्ट्रपति राज्यसभा में कितने सदस्यों को मनोनीत कर सकते हैं?",
    },
    options: {
      en: ["2", "8", "12", "15"],
      hi: ["2", "8", "12", "15"],
    },
    answer: { en: "12", hi: "12" },
    explanation: {
      en: "The President can nominate 12 members to the Rajya Sabha from fields of literature, science, art, and social service.",
      hi: "राष्ट्रपति साहित्य, विज्ञान, कला और समाज सेवा के क्षेत्रों से राज्यसभा में 12 सदस्यों को मनोनीत कर सकते हैं।",
    },
  },
  {
    question: {
      en: "The Jallianwala Bagh massacre took place in which year?",
      hi: "जलियांवाला बाग हत्याकांड किस वर्ष हुआ?",
    },
    options: {
      en: ["1917", "1919", "1921", "1930"],
      hi: ["1917", "1919", "1921", "1930"],
    },
    answer: { en: "1919", hi: "1919" },
    explanation: {
      en: "The Jallianwala Bagh massacre took place on 13 April 1919 in Amritsar under General Dyer's orders.",
      hi: "जलियांवाला बाग हत्याकांड 13 अप्रैल 1919 को अमृतसर में जनरल डायर के आदेश पर हुआ।",
    },
  },
  {
    question: {
      en: "Which is the largest freshwater lake in India?",
      hi: "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
    },
    options: {
      en: ["Dal Lake", "Chilika Lake", "Wular Lake", "Loktak Lake"],
      hi: ["डल झील", "चिल्का झील", "वुलर झील", "लोकटक झील"],
    },
    answer: { en: "Wular Lake", hi: "वुलर झील" },
    explanation: {
      en: "Wular Lake in Jammu & Kashmir is the largest freshwater lake in India.",
      hi: "जम्मू-कश्मीर में वुलर झील भारत की सबसे बड़ी मीठे पानी की झील है।",
    },
  },
  {
    question: {
      en: "What is the hardest natural substance on Earth?",
      hi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ क्या है?",
    },
    options: {
      en: ["Iron", "Quartz", "Diamond", "Platinum"],
      hi: ["लोहा", "क्वार्ट्ज", "हीरा", "प्लेटिनम"],
    },
    answer: { en: "Diamond", hi: "हीरा" },
    explanation: {
      en: "Diamond is the hardest known natural material, scoring 10 on the Mohs hardness scale.",
      hi: "हीरा सबसे कठोर ज्ञात प्राकृतिक पदार्थ है, जो मोह्स कठोरता पैमाने पर 10 अंक प्राप्त करता है।",
    },
  },
  {
    question: {
      en: "Who is known as the 'Missile Man of India'?",
      hi: "'भारत के मिसाइल मैन' के रूप में किसे जाना जाता है?",
    },
    options: {
      en: ["Vikram Sarabhai", "Homi Bhabha", "APJ Abdul Kalam", "C. V. Raman"],
      hi: ["विक्रम साराभाई", "होमी भाभा", "एपीजे अब्दुल कलाम", "सी. वी. रमन"],
    },
    answer: { en: "APJ Abdul Kalam", hi: "एपीजे अब्दुल कलाम" },
    explanation: {
      en: "Dr. APJ Abdul Kalam is known as the Missile Man of India for his role in developing India's missile technology.",
      hi: "डॉ. एपीजे अब्दुल कलाम को भारत की मिसाइल प्रौद्योगिकी विकसित करने में उनकी भूमिका के लिए भारत का मिसाइल मैन कहा जाता है।",
    },
  },

  // ===== DAY 38 SET (Q186-Q190) =====
  {
    question: {
      en: "Which part of the Indian Constitution deals with Fundamental Duties?",
      hi: "भारतीय संविधान का कौन सा भाग मौलिक कर्तव्यों से संबंधित है?",
    },
    options: {
      en: ["Part III", "Part IV", "Part IVA", "Part V"],
      hi: ["भाग III", "भाग IV", "भाग IVA", "भाग V"],
    },
    answer: { en: "Part IVA", hi: "भाग IVA" },
    explanation: {
      en: "Fundamental Duties are listed in Part IVA (Article 51A), added by the 42nd Amendment in 1976.",
      hi: "मौलिक कर्तव्य भाग IVA (अनुच्छेद 51A) में सूचीबद्ध हैं, जो 1976 में 42वें संशोधन द्वारा जोड़े गए।",
    },
  },
  {
    question: {
      en: "Who gave the title 'Mahatma' to Mohandas Karamchand Gandhi?",
      hi: "मोहनदास करमचंद गांधी को 'महात्मा' की उपाधि किसने दी?",
    },
    options: {
      en: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Rabindranath Tagore", "Sardar Patel"],
      hi: ["जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "रबीन्द्रनाथ टैगोर", "सरदार पटेल"],
    },
    answer: { en: "Rabindranath Tagore", hi: "रबीन्द्रनाथ टैगोर" },
    explanation: {
      en: "Rabindranath Tagore is widely credited with giving the title 'Mahatma' (Great Soul) to Gandhi.",
      hi: "रबीन्द्रनाथ टैगोर को गांधी को 'महात्मा' (महान आत्मा) की उपाधि देने का श्रेय दिया जाता है।",
    },
  },
  {
    question: {
      en: "Which is the longest national highway in India?",
      hi: "भारत का सबसे लंबा राष्ट्रीय राजमार्ग कौन सा है?",
    },
    options: {
      en: ["NH-44", "NH-27", "NH-48", "NH-7"],
      hi: ["NH-44", "NH-27", "NH-48", "NH-7"],
    },
    answer: { en: "NH-44", hi: "NH-44" },
    explanation: {
      en: "NH-44 (Srinagar to Kanyakumari) is the longest national highway in India at about 3,745 km.",
      hi: "NH-44 (श्रीनगर से कन्याकुमारी) लगभग 3,745 किमी के साथ भारत का सबसे लंबा राष्ट्रीय राजमार्ग है।",
    },
  },
  {
    question: {
      en: "What is the boiling point of water at sea level in Celsius?",
      hi: "समुद्र तल पर पानी का क्वथनांक सेल्सियस में क्या है?",
    },
    options: {
      en: ["90°C", "95°C", "100°C", "110°C"],
      hi: ["90°C", "95°C", "100°C", "110°C"],
    },
    answer: { en: "100°C", hi: "100°C" },
    explanation: {
      en: "Water boils at 100°C (212°F) at standard atmospheric pressure at sea level.",
      hi: "समुद्र तल पर मानक वायुमंडलीय दबाव पर पानी 100°C (212°F) पर उबलता है।",
    },
  },
  {
    question: {
      en: "Which sport is Sachin Tendulkar primarily associated with?",
      hi: "सचिन तेंदुलकर मुख्य रूप से किस खेल से जुड़े हैं?",
    },
    options: {
      en: ["Hockey", "Football", "Cricket", "Badminton"],
      hi: ["हॉकी", "फुटबॉल", "क्रिकेट", "बैडमिंटन"],
    },
    answer: { en: "Cricket", hi: "क्रिकेट" },
    explanation: {
      en: "Sachin Tendulkar is one of the greatest cricketers of all time, known as the 'God of Cricket'.",
      hi: "सचिन तेंदुलकर सभी समय के महानतम क्रिकेटरों में से एक हैं, जिन्हें 'क्रिकेट के भगवान' के रूप में जाना जाता है।",
    },
  },

  // ===== DAY 39 SET (Q191-Q195) =====
  {
    question: {
      en: "The Preamble of the Indian Constitution begins with which words?",
      hi: "भारतीय संविधान की प्रस्तावना किन शब्दों से शुरू होती है?",
    },
    options: {
      en: ["India, that is Bharat", "We, the people of India", "The Constitution of India", "Justice, Liberty and Equality"],
      hi: ["इंडिया, दैट इज भारत", "हम, भारत के लोग", "भारत का संविधान", "न्याय, स्वतंत्रता और समानता"],
    },
    answer: { en: "We, the people of India", hi: "हम, भारत के लोग" },
    explanation: {
      en: "The Preamble begins with 'WE, THE PEOPLE OF INDIA', emphasizing popular sovereignty.",
      hi: "प्रस्तावना 'हम, भारत के लोग' से शुरू होती है, जो लोकप्रिय संप्रभुता पर जोर देती है।",
    },
  },
  {
    question: {
      en: "Who was the founder of the Maurya Empire?",
      hi: "मौर्य साम्राज्य के संस्थापक कौन थे?",
    },
    options: {
      en: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
      hi: ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "बिम्बिसार"],
    },
    answer: { en: "Chandragupta Maurya", hi: "चंद्रगुप्त मौर्य" },
    explanation: {
      en: "Chandragupta Maurya founded the Maurya Empire around 321 BCE with the help of Chanakya.",
      hi: "चंद्रगुप्त मौर्य ने चाणक्य की सहायता से लगभग 321 ईसा पूर्व में मौर्य साम्राज्य की स्थापना की।",
    },
  },
  {
    question: {
      en: "Which Indian state receives the highest average annual rainfall?",
      hi: "किस भारतीय राज्य में सबसे अधिक औसत वार्षिक वर्षा होती है?",
    },
    options: {
      en: ["Kerala", "Assam", "Meghalaya", "Sikkim"],
      hi: ["केरल", "असम", "मेघालय", "सिक्किम"],
    },
    answer: { en: "Meghalaya", hi: "मेघालय" },
    explanation: {
      en: "Meghalaya, particularly Mawsynram and Cherrapunji, receives the highest average rainfall in India.",
      hi: "मेघालय, विशेषकर मासिनराम और चेरापूंजी, भारत में सबसे अधिक औसत वर्षा प्राप्त करते हैं।",
    },
  },
  {
    question: {
      en: "What is the largest organ of the human body?",
      hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    },
    options: {
      en: ["Liver", "Brain", "Heart", "Skin"],
      hi: ["यकृत", "मस्तिष्क", "हृदय", "त्वचा"],
    },
    answer: { en: "Skin", hi: "त्वचा" },
    explanation: {
      en: "The skin is the largest organ of the human body, covering about 1.5 to 2 square meters.",
      hi: "त्वचा मानव शरीर का सबसे बड़ा अंग है, जो लगभग 1.5 से 2 वर्ग मीटर तक फैली होती है।",
    },
  },
  {
    question: {
      en: "Which country gifted the Statue of Liberty to the United States?",
      hi: "किस देश ने संयुक्त राज्य अमेरिका को स्टैच्यू ऑफ लिबर्टी उपहार में दी?",
    },
    options: {
      en: ["United Kingdom", "France", "Italy", "Spain"],
      hi: ["यूनाइटेड किंगडम", "फ्रांस", "इटली", "स्पेन"],
    },
    answer: { en: "France", hi: "फ्रांस" },
    explanation: {
      en: "France gifted the Statue of Liberty to the United States, which was dedicated on 28 October 1886.",
      hi: "फ्रांस ने संयुक्त राज्य अमेरिका को स्टैच्यू ऑफ लिबर्टी उपहार में दी, जिसका समर्पण 28 अक्टूबर 1886 को हुआ।",
    },
  },

  // ===== DAY 40 SET (Q196-Q200) =====
  {
    question: {
      en: "Who was the first Speaker of the Lok Sabha?",
      hi: "लोकसभा के पहले अध्यक्ष कौन थे?",
    },
    options: {
      en: ["Hukam Singh", "G. V. Mavalankar", "M. A. Ayyangar", "Neelam Sanjiva Reddy"],
      hi: ["हुकम सिंह", "जी. वी. मावलंकर", "एम. ए. अय्यंगार", "नीलम संजीव रेड्डी"],
    },
    answer: { en: "G. V. Mavalankar", hi: "जी. वी. मावलंकर" },
    explanation: {
      en: "Ganesh Vasudev Mavalankar served as the first Speaker of the Lok Sabha from 1952 to 1956.",
      hi: "गणेश वासुदेव मावलंकर ने 1952 से 1956 तक लोकसभा के पहले अध्यक्ष के रूप में कार्य किया।",
    },
  },
  {
    question: {
      en: "The Permanent Settlement was introduced by which British Governor-General?",
      hi: "स्थायी बंदोबस्त किस ब्रिटिश गवर्नर-जनरल द्वारा लागू किया गया?",
    },
    options: {
      en: ["Lord Wellesley", "Lord Cornwallis", "Lord Dalhousie", "Lord Hastings"],
      hi: ["लॉर्ड वेलेजली", "लॉर्ड कॉर्नवालिस", "लॉर्ड डलहौजी", "लॉर्ड हेस्टिंग्स"],
    },
    answer: { en: "Lord Cornwallis", hi: "लॉर्ड कॉर्नवालिस" },
    explanation: {
      en: "Lord Cornwallis introduced the Permanent Settlement in 1793 in Bengal.",
      hi: "लॉर्ड कॉर्नवालिस ने 1793 में बंगाल में स्थायी बंदोबस्त लागू किया।",
    },
  },
  {
    question: {
      en: "Which gas is most abundant in Earth's atmosphere?",
      hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
    },
    options: {
      en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
    },
    answer: { en: "Nitrogen", hi: "नाइट्रोजन" },
    explanation: {
      en: "Nitrogen makes up about 78% of Earth's atmosphere.",
      hi: "नाइट्रोजन पृथ्वी के वायुमंडल का लगभग 78% हिस्सा बनाती है।",
    },
  },
  {
    question: {
      en: "Who painted the Mona Lisa?",
      hi: "मोना लिसा किसने चित्रित की?",
    },
    options: {
      en: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Vincent van Gogh"],
      hi: ["माइकलएंजेलो", "लियोनार्डो दा विंची", "राफेल", "विंसेंट वैन गॉग"],
    },
    answer: { en: "Leonardo da Vinci", hi: "लियोनार्डो दा विंची" },
    explanation: {
      en: "Leonardo da Vinci painted the Mona Lisa in the early 16th century.",
      hi: "लियोनार्डो दा विंची ने 16वीं शताब्दी की शुरुआत में मोना लिसा चित्रित की।",
    },
  },
  {
    question: {
      en: "Which is the southernmost point of mainland India?",
      hi: "भारत की मुख्य भूमि का सबसे दक्षिणी बिंदु कौन सा है?",
    },
    options: {
      en: ["Kanyakumari", "Indira Point", "Rameswaram", "Dhanushkodi"],
      hi: ["कन्याकुमारी", "इंदिरा पॉइंट", "रामेश्वरम", "धनुषकोडी"],
    },
    answer: { en: "Kanyakumari", hi: "कन्याकुमारी" },
    explanation: {
      en: "Kanyakumari in Tamil Nadu is the southernmost point of mainland India.",
      hi: "तमिलनाडु में कन्याकुमारी भारत की मुख्य भूमि का सबसे दक्षिणी बिंदु है।",
    },
  },

  // ===== DAY 41 SET (Q201-Q205) =====
  {
    question: {
      en: "Which article of the Indian Constitution provides for the formation of new states?",
      hi: "भारतीय संविधान का कौन सा अनुच्छेद नए राज्यों के गठन का प्रावधान करता है?",
    },
    options: {
      en: ["Article 1", "Article 2", "Article 3", "Article 4"],
      hi: ["अनुच्छेद 1", "अनुच्छेद 2", "अनुच्छेद 3", "अनुच्छेद 4"],
    },
    answer: { en: "Article 3", hi: "अनुच्छेद 3" },
    explanation: {
      en: "Article 3 empowers Parliament to form new states, alter boundaries, or change names of existing states.",
      hi: "अनुच्छेद 3 संसद को नए राज्य बनाने, सीमाएं बदलने या मौजूदा राज्यों के नाम बदलने का अधिकार देता है।",
    },
  },
  {
    question: {
      en: "The Doctrine of Lapse was introduced by which British Governor-General?",
      hi: "व्यपगत का सिद्धांत किस ब्रिटिश गवर्नर-जनरल ने लागू किया?",
    },
    options: {
      en: ["Lord Canning", "Lord Dalhousie", "Lord Wellesley", "Lord Bentinck"],
      hi: ["लॉर्ड कैनिंग", "लॉर्ड डलहौजी", "लॉर्ड वेलेजली", "लॉर्ड बेंटिंक"],
    },
    answer: { en: "Lord Dalhousie", hi: "लॉर्ड डलहौजी" },
    explanation: {
      en: "Lord Dalhousie introduced the Doctrine of Lapse to annex princely states without natural heirs.",
      hi: "लॉर्ड डलहौजी ने प्राकृतिक उत्तराधिकारी के बिना रियासतों को हड़पने के लिए व्यपगत का सिद्धांत लागू किया।",
    },
  },
  {
    question: {
      en: "Which is the coldest inhabited place in India?",
      hi: "भारत का सबसे ठंडा बसा हुआ स्थान कौन सा है?",
    },
    options: {
      en: ["Shimla", "Leh", "Dras", "Srinagar"],
      hi: ["शिमला", "लेह", "द्रास", "श्रीनगर"],
    },
    answer: { en: "Dras", hi: "द्रास" },
    explanation: {
      en: "Dras in Ladakh is one of the coldest inhabited places in India, with temperatures dropping below -40°C.",
      hi: "लद्दाख में द्रास भारत के सबसे ठंडे बसे हुए स्थानों में से एक है, जहां तापमान -40°C से नीचे गिर जाता है।",
    },
  },
  {
    question: {
      en: "How many bones are there in an adult human body?",
      hi: "एक वयस्क मानव शरीर में कितनी हड्डियां होती हैं?",
    },
    options: {
      en: ["196", "206", "216", "256"],
      hi: ["196", "206", "216", "256"],
    },
    answer: { en: "206", hi: "206" },
    explanation: {
      en: "An adult human body has 206 bones.",
      hi: "एक वयस्क मानव शरीर में 206 हड्डियां होती हैं।",
    },
  },
  {
    question: {
      en: "Which is the tallest building in the world?",
      hi: "विश्व की सबसे ऊंची इमारत कौन सी है?",
    },
    options: {
      en: ["Shanghai Tower", "One World Trade Center", "Burj Khalifa", "Merdeka 118"],
      hi: ["शंघाई टावर", "वन वर्ल्ड ट्रेड सेंटर", "बुर्ज खलीफा", "मर्डेका 118"],
    },
    answer: { en: "Burj Khalifa", hi: "बुर्ज खलीफा" },
    explanation: {
      en: "The Burj Khalifa in Dubai stands at 828 meters, making it the tallest building in the world.",
      hi: "दुबई में बुर्ज खलीफा 828 मीटर ऊंचा है, जो इसे विश्व की सबसे ऊंची इमारत बनाता है।",
    },
  },

  // ===== DAY 42 SET (Q206-Q210) =====
  {
    question: {
      en: "Who was the first Chief Justice of India?",
      hi: "भारत के पहले मुख्य न्यायाधीश कौन थे?",
    },
    options: {
      en: ["Patanjali Sastri", "H. J. Kania", "M. C. Mahajan", "B. K. Mukherjea"],
      hi: ["पतंजलि शास्त्री", "एच. जे. कानिया", "एम. सी. महाजन", "बी. के. मुखर्जी"],
    },
    answer: { en: "H. J. Kania", hi: "एच. जे. कानिया" },
    explanation: {
      en: "Justice Harilal Jekisundas Kania was the first Chief Justice of India (1950-1951).",
      hi: "न्यायमूर्ति हरिलाल जेकीसुंदस कानिया भारत के पहले मुख्य न्यायाधीश (1950-1951) थे।",
    },
  },
  {
    question: {
      en: "The Revolt of 1857 started from which city?",
      hi: "1857 का विद्रोह किस शहर से शुरू हुआ?",
    },
    options: {
      en: ["Delhi", "Lucknow", "Meerut", "Kanpur"],
      hi: ["दिल्ली", "लखनऊ", "मेरठ", "कानपुर"],
    },
    answer: { en: "Meerut", hi: "मेरठ" },
    explanation: {
      en: "The Revolt of 1857 began on 10 May 1857 at Meerut when Indian sepoys rebelled against British officers.",
      hi: "1857 का विद्रोह 10 मई 1857 को मेरठ से शुरू हुआ जब भारतीय सिपाहियों ने ब्रिटिश अधिकारियों के खिलाफ विद्रोह किया।",
    },
  },
  {
    question: {
      en: "Which is the largest state of India by area?",
      hi: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?",
    },
    options: {
      en: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"],
      hi: ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान", "उत्तर प्रदेश"],
    },
    answer: { en: "Rajasthan", hi: "राजस्थान" },
    explanation: {
      en: "Rajasthan is the largest state of India by area, covering about 342,239 sq km.",
      hi: "राजस्थान क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य है, जो लगभग 342,239 वर्ग किमी में फैला है।",
    },
  },
  {
    question: {
      en: "What is the chemical formula of common salt?",
      hi: "साधारण नमक का रासायनिक सूत्र क्या है?",
    },
    options: {
      en: ["KCl", "NaCl", "CaCl2", "MgCl2"],
      hi: ["KCl", "NaCl", "CaCl2", "MgCl2"],
    },
    answer: { en: "NaCl", hi: "NaCl" },
    explanation: {
      en: "Common salt (sodium chloride) has the chemical formula NaCl.",
      hi: "साधारण नमक (सोडियम क्लोराइड) का रासायनिक सूत्र NaCl है।",
    },
  },
  {
    question: {
      en: "Which language has the most native speakers in the world?",
      hi: "विश्व में सबसे अधिक मूल वक्ता किस भाषा के हैं?",
    },
    options: {
      en: ["English", "Hindi", "Spanish", "Mandarin Chinese"],
      hi: ["अंग्रेजी", "हिंदी", "स्पेनिश", "मंदारिन चीनी"],
    },
    answer: { en: "Mandarin Chinese", hi: "मंदारिन चीनी" },
    explanation: {
      en: "Mandarin Chinese has the most native speakers, with over 920 million people.",
      hi: "मंदारिन चीनी में सबसे अधिक मूल वक्ता हैं, 920 मिलियन से अधिक लोग।",
    },
  },

  // ===== DAY 43 SET (Q211-Q215) =====
  {
    question: {
      en: "Which Schedule of the Indian Constitution contains the list of recognized languages?",
      hi: "भारतीय संविधान की कौन सी अनुसूची मान्यता प्राप्त भाषाओं की सूची रखती है?",
    },
    options: {
      en: ["Fifth Schedule", "Seventh Schedule", "Eighth Schedule", "Tenth Schedule"],
      hi: ["पांचवीं अनुसूची", "सातवीं अनुसूची", "आठवीं अनुसूची", "दसवीं अनुसूची"],
    },
    answer: { en: "Eighth Schedule", hi: "आठवीं अनुसूची" },
    explanation: {
      en: "The Eighth Schedule lists 22 officially recognized languages of India.",
      hi: "आठवीं अनुसूची में भारत की 22 आधिकारिक रूप से मान्यता प्राप्त भाषाएं सूचीबद्ध हैं।",
    },
  },
  {
    question: {
      en: "Who built the Red Fort in Delhi?",
      hi: "दिल्ली में लाल किला किसने बनवाया?",
    },
    options: {
      en: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
      hi: ["अकबर", "जहांगीर", "शाहजहां", "औरंगजेब"],
    },
    answer: { en: "Shah Jahan", hi: "शाहजहां" },
    explanation: {
      en: "Shah Jahan built the Red Fort (Lal Qila) in Delhi between 1638 and 1648.",
      hi: "शाहजहां ने 1638 और 1648 के बीच दिल्ली में लाल किला बनवाया।",
    },
  },
  {
    question: {
      en: "Which Indian state has the highest literacy rate?",
      hi: "किस भारतीय राज्य में सबसे अधिक साक्षरता दर है?",
    },
    options: {
      en: ["Goa", "Mizoram", "Kerala", "Tripura"],
      hi: ["गोवा", "मिजोरम", "केरल", "त्रिपुरा"],
    },
    answer: { en: "Kerala", hi: "केरल" },
    explanation: {
      en: "Kerala has the highest literacy rate among Indian states at approximately 96.2%.",
      hi: "केरल की साक्षरता दर लगभग 96.2% है, जो भारतीय राज्यों में सबसे अधिक है।",
    },
  },
  {
    question: {
      en: "What is the nearest star to Earth?",
      hi: "पृथ्वी का सबसे निकटतम तारा कौन सा है?",
    },
    options: {
      en: ["Proxima Centauri", "Alpha Centauri", "Sirius", "Sun"],
      hi: ["प्रॉक्सिमा सेंचुरी", "अल्फा सेंचुरी", "सीरियस", "सूर्य"],
    },
    answer: { en: "Sun", hi: "सूर्य" },
    explanation: {
      en: "The Sun is the nearest star to Earth, at a distance of about 150 million km.",
      hi: "सूर्य पृथ्वी का सबसे निकटतम तारा है, लगभग 150 मिलियन किमी की दूरी पर।",
    },
  },
  {
    question: {
      en: "Which is the national bird of India?",
      hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
    },
    options: {
      en: ["Parrot", "Eagle", "Peacock", "Sparrow"],
      hi: ["तोता", "बाज", "मोर", "गौरैया"],
    },
    answer: { en: "Peacock", hi: "मोर" },
    explanation: {
      en: "The Indian Peacock (Pavo cristatus) was declared the national bird of India in 1963.",
      hi: "भारतीय मोर (पावो क्रिस्टेटस) को 1963 में भारत का राष्ट्रीय पक्षी घोषित किया गया।",
    },
  },

  // ===== DAY 44 SET (Q216-Q220) =====
  {
    question: {
      en: "Who administers the oath of office to the President of India?",
      hi: "भारत के राष्ट्रपति को पद की शपथ कौन दिलाता है?",
    },
    options: {
      en: ["Prime Minister", "Vice President", "Chief Justice of India", "Speaker of Lok Sabha"],
      hi: ["प्रधानमंत्री", "उपराष्ट्रपति", "भारत के मुख्य न्यायाधीश", "लोकसभा अध्यक्ष"],
    },
    answer: { en: "Chief Justice of India", hi: "भारत के मुख्य न्यायाधीश" },
    explanation: {
      en: "The Chief Justice of India administers the oath of office to the President under Article 60.",
      hi: "भारत के मुख्य न्यायाधीश अनुच्छेद 60 के तहत राष्ट्रपति को पद की शपथ दिलाते हैं।",
    },
  },
  {
    question: {
      en: "The Khilafat Movement was started in which year?",
      hi: "खिलाफत आंदोलन किस वर्ष शुरू हुआ?",
    },
    options: {
      en: ["1918", "1919", "1920", "1922"],
      hi: ["1918", "1919", "1920", "1922"],
    },
    answer: { en: "1920", hi: "1920" },
    explanation: {
      en: "The Khilafat Movement started in 1920 to protest against British treatment of the Ottoman Caliphate.",
      hi: "खिलाफत आंदोलन 1920 में ऑटोमन खिलाफत के साथ ब्रिटिश व्यवहार के विरोध में शुरू हुआ।",
    },
  },
  {
    question: {
      en: "Which is the easternmost state of India?",
      hi: "भारत का सबसे पूर्वी राज्य कौन सा है?",
    },
    options: {
      en: ["Nagaland", "Manipur", "Arunachal Pradesh", "Mizoram"],
      hi: ["नागालैंड", "मणिपुर", "अरुणाचल प्रदेश", "मिजोरम"],
    },
    answer: { en: "Arunachal Pradesh", hi: "अरुणाचल प्रदेश" },
    explanation: {
      en: "Arunachal Pradesh is the easternmost state of India, where the sun rises first in the country.",
      hi: "अरुणाचल प्रदेश भारत का सबसे पूर्वी राज्य है, जहां देश में सबसे पहले सूर्योदय होता है।",
    },
  },
  {
    question: {
      en: "What is the SI unit of force?",
      hi: "बल की SI इकाई क्या है?",
    },
    options: {
      en: ["Joule", "Pascal", "Newton", "Watt"],
      hi: ["जूल", "पास्कल", "न्यूटन", "वाट"],
    },
    answer: { en: "Newton", hi: "न्यूटन" },
    explanation: {
      en: "The Newton (N) is the SI unit of force, named after Sir Isaac Newton.",
      hi: "न्यूटन (N) बल की SI इकाई है, जिसका नाम सर आइजक न्यूटन के नाम पर रखा गया है।",
    },
  },
  {
    question: {
      en: "Which country has the largest population in the world?",
      hi: "विश्व में सबसे अधिक जनसंख्या किस देश की है?",
    },
    options: {
      en: ["China", "India", "United States", "Indonesia"],
      hi: ["चीन", "भारत", "संयुक्त राज्य अमेरिका", "इंडोनेशिया"],
    },
    answer: { en: "India", hi: "भारत" },
    explanation: {
      en: "India surpassed China as the most populous country in the world in 2023.",
      hi: "भारत ने 2023 में चीन को पीछे छोड़कर विश्व का सबसे अधिक जनसंख्या वाला देश बन गया।",
    },
  },
];

// Date-to-set mapping: "YYYY-MM-DD" → set index (0-based)
// Feb 24, 2026 starts at set 9 (Day 10 questions) through Mar 30, 2026
const DATE_TO_SET: Record<string, number> = {
  // February 2026
  "2026-02-24": 9,
  "2026-02-25": 10,
  "2026-02-26": 11,
  "2026-02-27": 12,
  "2026-02-28": 13,
  // March 2026
  "2026-03-01": 14,
  "2026-03-02": 15,
  "2026-03-03": 16,
  "2026-03-04": 17,
  "2026-03-05": 18,
  "2026-03-06": 19,
  "2026-03-07": 20,
  "2026-03-08": 21,
  "2026-03-09": 22,
  "2026-03-10": 23,
  "2026-03-11": 24,
  "2026-03-12": 25,
  "2026-03-13": 26,
  "2026-03-14": 27,
  "2026-03-15": 28,
  "2026-03-16": 29,
  "2026-03-17": 30,
  "2026-03-18": 31,
  "2026-03-19": 32,
  "2026-03-20": 33,
  "2026-03-21": 34,
  "2026-03-22": 35,
  "2026-03-23": 36,
  "2026-03-24": 37,
  "2026-03-25": 38,
  "2026-03-26": 39,
  "2026-03-27": 40,
  "2026-03-28": 41,
  "2026-03-29": 42,
  "2026-03-30": 43,
};

/**
 * Date-based daily questions.
 * Looks up today's date in the DATE_TO_SET map to get the question set.
 * Fallback: if today's date is not mapped, picks a deterministic set based on date
 * (same questions all day, different questions each day).
 */
export function getDailyQuestions(): Question[] {
  const today = new Date();
  const dateKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const totalSets = Math.floor(ALL_QUESTIONS.length / 5);

  let setIndex: number;

  if (DATE_TO_SET[dateKey] !== undefined) {
    // Mapped date — use the assigned set
    setIndex = DATE_TO_SET[dateKey];
  } else {
    // Fallback: deterministic random based on date (consistent throughout the day)
    const dateNum =
      today.getFullYear() * 10000 +
      (today.getMonth() + 1) * 100 +
      today.getDate();
    setIndex = dateNum % totalSets;
  }

  const startIdx = setIndex * 5;
  return ALL_QUESTIONS.slice(startIdx, startIdx + 5);
}