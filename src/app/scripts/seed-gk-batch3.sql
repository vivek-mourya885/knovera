-- ============================================================
-- KNOVERA GK BATCH 3 — day_set 86 to 105
-- 20 sets x 5 questions = 100 questions
-- Date range: May 12 to May 31, 2026
-- ============================================================
-- Topics:
--   86-90:  Computer Science, Technology, Internet, Digital India, Inventions
--   91-95:  Indian Geography deeper - Rivers, Dams, National Parks, Passes, Islands
--   96-100: World History, World Wars, UN, International Treaties, Famous Leaders
--   101-105: Mixed GK - Awards, Books, Languages, Transport, Agriculture, Misc
-- ============================================================


-- ============================================================
-- DAY SET 86 — Computer Science Basics (May 12)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(86, 'Who is known as the father of Computer Science?', 'कंप्यूटर विज्ञान का जनक किसे कहा जाता है?',
 ARRAY['Charles Babbage','Alan Turing','John von Neumann','Tim Berners-Lee'],
 ARRAY['चार्ल्स बैबेज','एलन ट्यूरिंग','जॉन वॉन न्यूमैन','टिम बर्नर्स-ली'],
 'Alan Turing', 'एलन ट्यूरिंग',
 'Alan Turing is widely regarded as the father of Computer Science and Artificial Intelligence for his foundational work on computation theory.', 'एलन ट्यूरिंग को गणना सिद्धांत पर उनके मूलभूत कार्य के लिए कंप्यूटर विज्ञान और कृत्रिम बुद्धिमत्ता का जनक माना जाता है।'),

(86, 'What does CPU stand for?', 'CPU का पूरा नाम क्या है?',
 ARRAY['Central Processing Unit','Central Program Unit','Computer Processing Unit','Central Peripheral Unit'],
 ARRAY['सेंट्रल प्रोसेसिंग यूनिट','सेंट्रल प्रोग्राम यूनिट','कंप्यूटर प्रोसेसिंग यूनिट','सेंट्रल पेरिफेरल यूनिट'],
 'Central Processing Unit', 'सेंट्रल प्रोसेसिंग यूनिट',
 'CPU stands for Central Processing Unit. It is the primary component of a computer that performs most of the processing.', 'CPU का मतलब सेंट्रल प्रोसेसिंग यूनिट है। यह कंप्यूटर का प्राथमिक घटक है जो अधिकांश प्रोसेसिंग करता है।'),

(86, 'Which programming language was developed by James Gosling?', 'कौन सी प्रोग्रामिंग भाषा जेम्स गोस्लिंग द्वारा विकसित की गई थी?',
 ARRAY['Python','C++','Java','Ruby'],
 ARRAY['पायथन','सी++','जावा','रूबी'],
 'Java', 'जावा',
 'Java was developed by James Gosling at Sun Microsystems and released in 1995. It follows the principle of "Write Once, Run Anywhere".', 'जावा को जेम्स गोस्लिंग ने सन माइक्रोसिस्टम्स में विकसित किया था और 1995 में जारी किया गया था। यह "एक बार लिखो, कहीं भी चलाओ" के सिद्धांत का पालन करता है।'),

(86, 'What is the binary number system based on?', 'बाइनरी संख्या प्रणाली किस पर आधारित है?',
 ARRAY['0 and 1','0 to 9','0 to 7','0 to F'],
 ARRAY['0 और 1','0 से 9','0 से 7','0 से F'],
 '0 and 1', '0 और 1',
 'The binary number system uses only two digits: 0 and 1. All computer data is ultimately represented in binary form.', 'बाइनरी संख्या प्रणाली केवल दो अंकों का उपयोग करती है: 0 और 1। सभी कंप्यूटर डेटा अंततः बाइनरी रूप में दर्शाया जाता है।'),

(86, 'Which device is used to convert digital signals to analog signals for telephone lines?', 'टेलीफोन लाइनों के लिए डिजिटल सिग्नल को एनालॉग सिग्नल में बदलने के लिए किस उपकरण का उपयोग किया जाता है?',
 ARRAY['Router','Modem','Switch','Hub'],
 ARRAY['राउटर','मॉडेम','स्विच','हब'],
 'Modem', 'मॉडेम',
 'A Modem (Modulator-Demodulator) converts digital signals to analog and vice versa, enabling data transmission over telephone lines.', 'मॉडेम (मॉड्यूलेटर-डीमॉड्यूलेटर) डिजिटल सिग्नल को एनालॉग में और इसके विपरीत बदलता है, जिससे टेलीफोन लाइनों पर डेटा ट्रांसमिशन संभव होता है।');


-- ============================================================
-- DAY SET 87 — Technology & Software (May 13)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(87, 'What does HTML stand for?', 'HTML का पूरा नाम क्या है?',
 ARRAY['Hyper Text Markup Language','High Tech Modern Language','Hyper Transfer Markup Language','Home Tool Markup Language'],
 ARRAY['हाइपर टेक्स्ट मार्कअप लैंग्वेज','हाई टेक मॉडर्न लैंग्वेज','हाइपर ट्रांसफर मार्कअप लैंग्वेज','होम टूल मार्कअप लैंग्वेज'],
 'Hyper Text Markup Language', 'हाइपर टेक्स्ट मार्कअप लैंग्वेज',
 'HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages.', 'HTML का मतलब हाइपर टेक्स्ट मार्कअप लैंग्वेज है। यह वेब पेज बनाने के लिए मानक मार्कअप भाषा है।'),

(87, 'Which company developed the Android operating system?', 'एंड्रॉइड ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया?',
 ARRAY['Apple','Microsoft','Google','Samsung'],
 ARRAY['एप्पल','माइक्रोसॉफ्ट','गूगल','सैमसंग'],
 'Google', 'गूगल',
 'Android was originally developed by Android Inc., which was acquired by Google in 2005. Google then developed it into a major mobile operating system.', 'एंड्रॉइड को मूल रूप से एंड्रॉइड इंक. द्वारा विकसित किया गया था, जिसे 2005 में गूगल ने अधिग्रहित किया। फिर गूगल ने इसे एक प्रमुख मोबाइल ऑपरेटिंग सिस्टम में विकसित किया।'),

(87, 'What is the full form of RAM in computers?', 'कंप्यूटर में RAM का पूरा नाम क्या है?',
 ARRAY['Random Access Memory','Read Access Memory','Run Application Memory','Random Application Memory'],
 ARRAY['रैंडम एक्सेस मेमोरी','रीड एक्सेस मेमोरी','रन एप्लीकेशन मेमोरी','रैंडम एप्लीकेशन मेमोरी'],
 'Random Access Memory', 'रैंडम एक्सेस मेमोरी',
 'RAM stands for Random Access Memory. It is the computer''s short-term memory used to store data that is currently being processed.', 'RAM का मतलब रैंडम एक्सेस मेमोरी है। यह कंप्यूटर की अल्पकालिक मेमोरी है जिसका उपयोग वर्तमान में संसाधित किए जा रहे डेटा को संग्रहीत करने के लिए किया जाता है।'),

(87, 'Who co-founded Microsoft along with Paul Allen?', 'पॉल एलन के साथ माइक्रोसॉफ्ट की सह-स्थापना किसने की?',
 ARRAY['Steve Jobs','Bill Gates','Mark Zuckerberg','Larry Page'],
 ARRAY['स्टीव जॉब्स','बिल गेट्स','मार्क जुकरबर्ग','लैरी पेज'],
 'Bill Gates', 'बिल गेट्स',
 'Bill Gates and Paul Allen co-founded Microsoft in 1975. It became the world''s largest personal computer software company.', 'बिल गेट्स और पॉल एलन ने 1975 में माइक्रोसॉफ्ट की सह-स्थापना की। यह दुनिया की सबसे बड़ी पर्सनल कंप्यूटर सॉफ्टवेयर कंपनी बन गई।'),

(87, 'Which of the following is an open-source operating system?', 'निम्नलिखित में से कौन सा एक ओपन-सोर्स ऑपरेटिंग सिस्टम है?',
 ARRAY['Windows','macOS','Linux','iOS'],
 ARRAY['विंडोज़','मैकओएस','लिनक्स','आईओएस'],
 'Linux', 'लिनक्स',
 'Linux is an open-source operating system created by Linus Torvalds in 1991. Its source code is freely available for anyone to modify and distribute.', 'लिनक्स एक ओपन-सोर्स ऑपरेटिंग सिस्टम है जिसे 1991 में लिनस टोरवाल्ड्स ने बनाया था। इसका सोर्स कोड किसी के भी संशोधन और वितरण के लिए स्वतंत्र रूप से उपलब्ध है।');


-- ============================================================
-- DAY SET 88 — Internet & Networking (May 14)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(88, 'Who is credited with inventing the World Wide Web?', 'वर्ल्ड वाइड वेब के आविष्कार का श्रेय किसे दिया जाता है?',
 ARRAY['Vint Cerf','Tim Berners-Lee','Robert Kahn','Marc Andreessen'],
 ARRAY['विंट सर्फ','टिम बर्नर्स-ली','रॉबर्ट कान','मार्क एंड्रीसन'],
 'Tim Berners-Lee', 'टिम बर्नर्स-ली',
 'Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN. He also created the first web browser and web server.', 'टिम बर्नर्स-ली ने 1989 में CERN में काम करते हुए वर्ल्ड वाइड वेब का आविष्कार किया। उन्होंने पहला वेब ब्राउज़र और वेब सर्वर भी बनाया।'),

(88, 'What does URL stand for?', 'URL का पूरा नाम क्या है?',
 ARRAY['Uniform Resource Locator','Universal Reference Link','Unified Resource Link','Uniform Reference Locator'],
 ARRAY['यूनिफॉर्म रिसोर्स लोकेटर','यूनिवर्सल रेफरेंस लिंक','यूनिफाइड रिसोर्स लिंक','यूनिफॉर्म रेफरेंस लोकेटर'],
 'Uniform Resource Locator', 'यूनिफॉर्म रिसोर्स लोकेटर',
 'URL stands for Uniform Resource Locator. It is the address used to access resources on the internet, such as web pages.', 'URL का मतलब यूनिफॉर्म रिसोर्स लोकेटर है। यह इंटरनेट पर संसाधनों जैसे वेब पेजों तक पहुंचने के लिए उपयोग किया जाने वाला पता है।'),

(88, 'What is the maximum speed of 5G technology approximately?', '5G तकनीक की अधिकतम गति लगभग कितनी है?',
 ARRAY['100 Mbps','1 Gbps','10 Gbps','100 Gbps'],
 ARRAY['100 एमबीपीएस','1 जीबीपीएस','10 जीबीपीएस','100 जीबीपीएस'],
 '10 Gbps', '10 जीबीपीएस',
 '5G technology can theoretically achieve peak download speeds of up to 10 Gbps, which is about 100 times faster than 4G.', '5G तकनीक सैद्धांतिक रूप से 10 जीबीपीएस तक की अधिकतम डाउनलोड गति प्राप्त कर सकती है, जो 4G से लगभग 100 गुना तेज है।'),

(88, 'Which protocol is used to send emails?', 'ईमेल भेजने के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?',
 ARRAY['HTTP','FTP','SMTP','TCP'],
 ARRAY['एचटीटीपी','एफटीपी','एसएमटीपी','टीसीपी'],
 'SMTP', 'एसएमटीपी',
 'SMTP (Simple Mail Transfer Protocol) is the standard protocol used for sending emails across the internet.', 'SMTP (सिंपल मेल ट्रांसफर प्रोटोकॉल) इंटरनेट पर ईमेल भेजने के लिए उपयोग किया जाने वाला मानक प्रोटोकॉल है।'),

(88, 'What does Wi-Fi stand for?', 'Wi-Fi का पूरा नाम क्या है?',
 ARRAY['Wireless Fidelity','Wireless Frequency','Wide Fidelity','Wired Facility'],
 ARRAY['वायरलेस फिडेलिटी','वायरलेस फ्रीक्वेंसी','वाइड फिडेलिटी','वायर्ड फैसिलिटी'],
 'Wireless Fidelity', 'वायरलेस फिडेलिटी',
 'Wi-Fi stands for Wireless Fidelity. It is a wireless networking technology that allows devices to connect to the internet without physical cables.', 'Wi-Fi का मतलब वायरलेस फिडेलिटी है। यह एक वायरलेस नेटवर्किंग तकनीक है जो उपकरणों को भौतिक केबल के बिना इंटरनेट से जुड़ने की अनुमति देती है।');


-- ============================================================
-- DAY SET 89 — Digital India & Indian Technology (May 15)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(89, 'When was the Digital India programme launched?', 'डिजिटल इंडिया कार्यक्रम कब शुरू किया गया था?',
 ARRAY['1 July 2014','1 July 2015','15 August 2015','26 January 2016'],
 ARRAY['1 जुलाई 2014','1 जुलाई 2015','15 अगस्त 2015','26 जनवरी 2016'],
 '1 July 2015', '1 जुलाई 2015',
 'The Digital India programme was launched on 1 July 2015 by Prime Minister Narendra Modi to transform India into a digitally empowered society.', 'डिजिटल इंडिया कार्यक्रम 1 जुलाई 2015 को प्रधानमंत्री नरेंद्र मोदी द्वारा भारत को डिजिटल रूप से सशक्त समाज में बदलने के लिए शुरू किया गया था।'),

(89, 'What is the UPI payment system?', 'UPI भुगतान प्रणाली क्या है?',
 ARRAY['Unified Payments Interface','Universal Payment Integration','United Payment Infrastructure','Unified Processing Interface'],
 ARRAY['यूनिफाइड पेमेंट्स इंटरफेस','यूनिवर्सल पेमेंट इंटीग्रेशन','यूनाइटेड पेमेंट इंफ्रास्ट्रक्चर','यूनिफाइड प्रोसेसिंग इंटरफेस'],
 'Unified Payments Interface', 'यूनिफाइड पेमेंट्स इंटरफेस',
 'UPI stands for Unified Payments Interface. Developed by NPCI, it enables instant real-time bank-to-bank payments through mobile phones.', 'UPI का मतलब यूनिफाइड पेमेंट्स इंटरफेस है। NPCI द्वारा विकसित, यह मोबाइल फोन के माध्यम से तत्काल रीयल-टाइम बैंक-टू-बैंक भुगतान को सक्षम बनाता है।'),

(89, 'Which Indian city is known as the Silicon Valley of India?', 'भारत के किस शहर को भारत की सिलिकॉन वैली कहा जाता है?',
 ARRAY['Hyderabad','Pune','Chennai','Bengaluru'],
 ARRAY['हैदराबाद','पुणे','चेन्नई','बेंगलुरु'],
 'Bengaluru', 'बेंगलुरु',
 'Bengaluru (Bangalore) is known as the Silicon Valley of India due to its large number of IT companies and tech startups.', 'बेंगलुरु (बैंगलोर) को भारत की सिलिकॉन वैली कहा जाता है क्योंकि यहां बड़ी संख्या में आईटी कंपनियां और टेक स्टार्टअप हैं।'),

(89, 'What is Aadhaar?', 'आधार क्या है?',
 ARRAY['A passport system','A 12-digit unique identity number','A banking scheme','A voter ID card'],
 ARRAY['एक पासपोर्ट प्रणाली','12 अंकों की विशिष्ट पहचान संख्या','एक बैंकिंग योजना','एक मतदाता पहचान पत्र'],
 'A 12-digit unique identity number', '12 अंकों की विशिष्ट पहचान संख्या',
 'Aadhaar is a 12-digit unique identity number issued by UIDAI to every resident of India based on their biometric and demographic data.', 'आधार UIDAI द्वारा भारत के प्रत्येक निवासी को उनके बायोमेट्रिक और जनसांख्यिकीय डेटा के आधार पर जारी 12 अंकों की विशिष्ट पहचान संख्या है।'),

(89, 'Which app was launched by the Indian government for contact tracing during COVID-19?', 'COVID-19 के दौरान कॉन्टैक्ट ट्रेसिंग के लिए भारत सरकार द्वारा कौन सा ऐप लॉन्च किया गया था?',
 ARRAY['CoWIN','Aarogya Setu','DigiLocker','UMANG'],
 ARRAY['कोविन','आरोग्य सेतु','डिजीलॉकर','उमंग'],
 'Aarogya Setu', 'आरोग्य सेतु',
 'Aarogya Setu was launched by the Indian government in April 2020 for COVID-19 contact tracing using Bluetooth and GPS technology.', 'आरोग्य सेतु को भारत सरकार ने अप्रैल 2020 में ब्लूटूथ और जीपीएस तकनीक का उपयोग करके COVID-19 कॉन्टैक्ट ट्रेसिंग के लिए लॉन्च किया था।');


-- ============================================================
-- DAY SET 90 — Famous Inventions & Inventors (May 16)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(90, 'Who invented the telephone?', 'टेलीफोन का आविष्कार किसने किया?',
 ARRAY['Thomas Edison','Nikola Tesla','Alexander Graham Bell','Guglielmo Marconi'],
 ARRAY['थॉमस एडिसन','निकोला टेस्ला','अलेक्जेंडर ग्राहम बेल','गुल्येल्मो मार्कोनी'],
 'Alexander Graham Bell', 'अलेक्जेंडर ग्राहम बेल',
 'Alexander Graham Bell is credited with inventing the first practical telephone in 1876.', 'अलेक्जेंडर ग्राहम बेल को 1876 में पहले व्यावहारिक टेलीफोन के आविष्कार का श्रेय दिया जाता है।'),

(90, 'Who invented the electric bulb?', 'बिजली के बल्ब का आविष्कार किसने किया?',
 ARRAY['Benjamin Franklin','Thomas Edison','Michael Faraday','James Watt'],
 ARRAY['बेंजामिन फ्रैंकलिन','थॉमस एडिसन','माइकल फैराडे','जेम्स वॉट'],
 'Thomas Edison', 'थॉमस एडिसन',
 'Thomas Edison invented the first commercially practical incandescent light bulb in 1879.', 'थॉमस एडिसन ने 1879 में पहला व्यावसायिक रूप से व्यावहारिक तापदीप्त प्रकाश बल्ब का आविष्कार किया।'),

(90, 'Who is credited with inventing the printing press?', 'प्रिंटिंग प्रेस के आविष्कार का श्रेय किसे दिया जाता है?',
 ARRAY['Johannes Gutenberg','Leonardo da Vinci','Isaac Newton','Galileo Galilei'],
 ARRAY['जोहानेस गुटेनबर्ग','लियोनार्दो दा विंची','आइज़ैक न्यूटन','गैलीलियो गैलीली'],
 'Johannes Gutenberg', 'जोहानेस गुटेनबर्ग',
 'Johannes Gutenberg invented the movable-type printing press around 1440, which revolutionized the spread of knowledge in Europe.', 'जोहानेस गुटेनबर्ग ने लगभग 1440 में चल-प्रकार प्रिंटिंग प्रेस का आविष्कार किया, जिसने यूरोप में ज्ञान के प्रसार में क्रांति ला दी।'),

(90, 'Who invented dynamite?', 'डायनामाइट का आविष्कार किसने किया?',
 ARRAY['Alfred Nobel','Albert Einstein','Nikola Tesla','Marie Curie'],
 ARRAY['अल्फ्रेड नोबेल','अल्बर्ट आइंस्टीन','निकोला टेस्ला','मैरी क्यूरी'],
 'Alfred Nobel', 'अल्फ्रेड नोबेल',
 'Alfred Nobel invented dynamite in 1867. He later used his fortune to establish the Nobel Prizes.', 'अल्फ्रेड नोबेल ने 1867 में डायनामाइट का आविष्कार किया। बाद में उन्होंने अपनी संपत्ति का उपयोग नोबेल पुरस्कार स्थापित करने के लिए किया।'),

(90, 'Who invented the steam engine that powered the Industrial Revolution?', 'औद्योगिक क्रांति को शक्ति देने वाले भाप इंजन का आविष्कार किसने किया?',
 ARRAY['James Watt','Thomas Newcomen','George Stephenson','Henry Ford'],
 ARRAY['जेम्स वॉट','थॉमस न्यूकॉमन','जॉर्ज स्टीफेंसन','हेनरी फोर्ड'],
 'James Watt', 'जेम्स वॉट',
 'James Watt greatly improved the steam engine in the 1760s-1770s, making it efficient enough to power the Industrial Revolution.', 'जेम्स वॉट ने 1760-1770 के दशक में भाप इंजन में काफी सुधार किया, जिससे यह औद्योगिक क्रांति को शक्ति देने के लिए पर्याप्त कुशल हो गया।');


-- ============================================================
-- DAY SET 91 — Indian Rivers (May 17)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(91, 'Which is the longest river in India?', 'भारत की सबसे लंबी नदी कौन सी है?',
 ARRAY['Yamuna','Godavari','Ganga','Brahmaputra'],
 ARRAY['यमुना','गोदावरी','गंगा','ब्रह्मपुत्र'],
 'Ganga', 'गंगा',
 'The Ganga is the longest river in India, flowing approximately 2,525 km from the Gangotri Glacier to the Bay of Bengal.', 'गंगा भारत की सबसे लंबी नदी है, जो गंगोत्री ग्लेशियर से बंगाल की खाड़ी तक लगभग 2,525 किमी बहती है।'),

(91, 'Which river is known as the "Sorrow of Bihar"?', 'किस नदी को "बिहार का शोक" कहा जाता है?',
 ARRAY['Gandak','Kosi','Son','Ganga'],
 ARRAY['गंडक','कोसी','सोन','गंगा'],
 'Kosi', 'कोसी',
 'The Kosi River is called the "Sorrow of Bihar" because of its frequent devastating floods that cause massive destruction in Bihar.', 'कोसी नदी को "बिहार का शोक" कहा जाता है क्योंकि इसकी बार-बार आने वाली विनाशकारी बाढ़ बिहार में भारी तबाही मचाती है।'),

(91, 'The Godavari River originates from which place?', 'गोदावरी नदी किस स्थान से निकलती है?',
 ARRAY['Amarkantak','Trimbakeshwar','Mahabaleshwar','Gangotri'],
 ARRAY['अमरकंटक','त्र्यंबकेश्वर','महाबलेश्वर','गंगोत्री'],
 'Trimbakeshwar', 'त्र्यंबकेश्वर',
 'The Godavari River originates from Trimbakeshwar near Nashik in Maharashtra. It is the second longest river in India after the Ganga.', 'गोदावरी नदी महाराष्ट्र में नासिक के पास त्र्यंबकेश्वर से निकलती है। यह गंगा के बाद भारत की दूसरी सबसे लंबी नदी है।'),

(91, 'Which two rivers meet at Devprayag to form the Ganga?', 'देवप्रयाग में कौन सी दो नदियां मिलकर गंगा बनाती हैं?',
 ARRAY['Alaknanda and Bhagirathi','Mandakini and Alaknanda','Bhagirathi and Mandakini','Alaknanda and Pindar'],
 ARRAY['अलकनंदा और भागीरथी','मंदाकिनी और अलकनंदा','भागीरथी और मंदाकिनी','अलकनंदा और पिंडर'],
 'Alaknanda and Bhagirathi', 'अलकनंदा और भागीरथी',
 'The Alaknanda and Bhagirathi rivers meet at Devprayag in Uttarakhand to form the holy river Ganga.', 'अलकनंदा और भागीरथी नदियां उत्तराखंड में देवप्रयाग में मिलकर पवित्र गंगा नदी बनाती हैं।'),

(91, 'Which river flows through the rift valley between the Vindhya and Satpura ranges?', 'कौन सी नदी विंध्य और सतपुड़ा पर्वतमालाओं के बीच दरार घाटी से बहती है?',
 ARRAY['Tapti','Narmada','Godavari','Krishna'],
 ARRAY['ताप्ती','नर्मदा','गोदावरी','कृष्णा'],
 'Narmada', 'नर्मदा',
 'The Narmada River flows westward through the rift valley between the Vindhya and Satpura ranges, emptying into the Arabian Sea.', 'नर्मदा नदी विंध्य और सतपुड़ा पर्वतमालाओं के बीच दरार घाटी से पश्चिम की ओर बहती हुई अरब सागर में गिरती है।');


-- ============================================================
-- DAY SET 92 — Indian Dams & Reservoirs (May 18)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(92, 'Which is the tallest dam in India?', 'भारत का सबसे ऊंचा बांध कौन सा है?',
 ARRAY['Bhakra Nangal Dam','Tehri Dam','Hirakud Dam','Sardar Sarovar Dam'],
 ARRAY['भाखड़ा नांगल बांध','टिहरी बांध','हीराकुड बांध','सरदार सरोवर बांध'],
 'Tehri Dam', 'टिहरी बांध',
 'Tehri Dam on the Bhagirathi River in Uttarakhand is the tallest dam in India at 260.5 metres. It is also one of the tallest dams in the world.', 'उत्तराखंड में भागीरथी नदी पर टिहरी बांध 260.5 मीटर की ऊंचाई के साथ भारत का सबसे ऊंचा बांध है। यह दुनिया के सबसे ऊंचे बांधों में से एक है।'),

(92, 'Hirakud Dam is built on which river?', 'हीराकुड बांध किस नदी पर बना है?',
 ARRAY['Godavari','Krishna','Mahanadi','Cauvery'],
 ARRAY['गोदावरी','कृष्णा','महानदी','कावेरी'],
 'Mahanadi', 'महानदी',
 'Hirakud Dam is built on the Mahanadi River in Odisha. It is one of the longest earthen dams in the world at about 25.8 km.', 'हीराकुड बांध ओडिशा में महानदी नदी पर बना है। यह लगभग 25.8 किमी लंबाई के साथ दुनिया के सबसे लंबे मिट्टी के बांधों में से एक है।'),

(92, 'The Sardar Sarovar Dam is located on which river?', 'सरदार सरोवर बांध किस नदी पर स्थित है?',
 ARRAY['Tapti','Narmada','Sabarmati','Mahi'],
 ARRAY['ताप्ती','नर्मदा','साबरमती','माही'],
 'Narmada', 'नर्मदा',
 'The Sardar Sarovar Dam is built on the Narmada River in Gujarat. It is the second tallest concrete dam in India.', 'सरदार सरोवर बांध गुजरात में नर्मदा नदी पर बना है। यह भारत का दूसरा सबसे ऊंचा कंक्रीट बांध है।'),

(92, 'Bhakra Nangal Dam is built on which river?', 'भाखड़ा नांगल बांध किस नदी पर बना है?',
 ARRAY['Beas','Ravi','Sutlej','Chenab'],
 ARRAY['ब्यास','रावी','सतलज','चिनाब'],
 'Sutlej', 'सतलज',
 'Bhakra Nangal Dam is built on the Sutlej River on the border of Himachal Pradesh and Punjab. Jawaharlal Nehru called it a "Temple of Modern India".', 'भाखड़ा नांगल बांध हिमाचल प्रदेश और पंजाब की सीमा पर सतलज नदी पर बना है। जवाहरलाल नेहरू ने इसे "आधुनिक भारत का मंदिर" कहा था।'),

(92, 'Nagarjuna Sagar Dam is located in which state?', 'नागार्जुन सागर बांध किस राज्य में स्थित है?',
 ARRAY['Karnataka','Andhra Pradesh','Telangana','Tamil Nadu'],
 ARRAY['कर्नाटक','आंध्र प्रदेश','तेलंगाना','तमिलनाडु'],
 'Telangana', 'तेलंगाना',
 'Nagarjuna Sagar Dam is located on the Krishna River on the border of Telangana and Andhra Pradesh. It is one of the largest masonry dams in the world.', 'नागार्जुन सागर बांध तेलंगाना और आंध्र प्रदेश की सीमा पर कृष्णा नदी पर स्थित है। यह दुनिया के सबसे बड़े चिनाई बांधों में से एक है।');


-- ============================================================
-- DAY SET 93 — Indian National Parks & Wildlife (May 19)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(93, 'Which is the largest national park in India?', 'भारत का सबसे बड़ा राष्ट्रीय उद्यान कौन सा है?',
 ARRAY['Jim Corbett National Park','Hemis National Park','Kaziranga National Park','Sundarbans National Park'],
 ARRAY['जिम कॉर्बेट राष्ट्रीय उद्यान','हेमिस राष्ट्रीय उद्यान','काजीरंगा राष्ट्रीय उद्यान','सुंदरबन राष्ट्रीय उद्यान'],
 'Hemis National Park', 'हेमिस राष्ट्रीय उद्यान',
 'Hemis National Park in Ladakh is the largest national park in India, covering about 4,400 sq km. It is famous for the snow leopard.', 'लद्दाख में हेमिस राष्ट्रीय उद्यान भारत का सबसे बड़ा राष्ट्रीय उद्यान है, जो लगभग 4,400 वर्ग किमी में फैला है। यह हिम तेंदुए के लिए प्रसिद्ध है।'),

(93, 'Kaziranga National Park is famous for which animal?', 'काजीरंगा राष्ट्रीय उद्यान किस जानवर के लिए प्रसिद्ध है?',
 ARRAY['Bengal Tiger','Indian Elephant','One-horned Rhinoceros','Asiatic Lion'],
 ARRAY['बंगाल टाइगर','भारतीय हाथी','एक सींग वाला गैंडा','एशियाई शेर'],
 'One-horned Rhinoceros', 'एक सींग वाला गैंडा',
 'Kaziranga National Park in Assam is famous for the Indian one-horned rhinoceros. It hosts two-thirds of the world''s one-horned rhinos.', 'असम में काजीरंगा राष्ट्रीय उद्यान भारतीय एक सींग वाले गैंडे के लिए प्रसिद्ध है। यहां दुनिया के दो-तिहाई एक सींग वाले गैंडे रहते हैं।'),

(93, 'Which was the first national park established in India?', 'भारत में स्थापित पहला राष्ट्रीय उद्यान कौन सा था?',
 ARRAY['Kaziranga National Park','Gir National Park','Jim Corbett National Park','Ranthambore National Park'],
 ARRAY['काजीरंगा राष्ट्रीय उद्यान','गिर राष्ट्रीय उद्यान','जिम कॉर्बेट राष्ट्रीय उद्यान','रणथंभौर राष्ट्रीय उद्यान'],
 'Jim Corbett National Park', 'जिम कॉर्बेट राष्ट्रीय उद्यान',
 'Jim Corbett National Park in Uttarakhand was established in 1936 as Hailey National Park. It was the first national park in India.', 'उत्तराखंड में जिम कॉर्बेट राष्ट्रीय उद्यान 1936 में हेली राष्ट्रीय उद्यान के रूप में स्थापित किया गया था। यह भारत का पहला राष्ट्रीय उद्यान था।'),

(93, 'Gir National Park is the only home of which animal in the wild?', 'गिर राष्ट्रीय उद्यान जंगल में किस जानवर का एकमात्र घर है?',
 ARRAY['Royal Bengal Tiger','Asiatic Lion','Indian Leopard','Snow Leopard'],
 ARRAY['रॉयल बंगाल टाइगर','एशियाई शेर','भारतीय तेंदुआ','हिम तेंदुआ'],
 'Asiatic Lion', 'एशियाई शेर',
 'Gir National Park in Gujarat is the only natural habitat of the Asiatic Lion in the wild.', 'गुजरात में गिर राष्ट्रीय उद्यान जंगल में एशियाई शेर का एकमात्र प्राकृतिक आवास है।'),

(93, 'Sundarbans National Park is located in which state?', 'सुंदरबन राष्ट्रीय उद्यान किस राज्य में स्थित है?',
 ARRAY['Odisha','West Bengal','Kerala','Andhra Pradesh'],
 ARRAY['ओडिशा','पश्चिम बंगाल','केरल','आंध्र प्रदेश'],
 'West Bengal', 'पश्चिम बंगाल',
 'Sundarbans National Park is located in West Bengal. It is the largest mangrove forest in the world and a UNESCO World Heritage Site.', 'सुंदरबन राष्ट्रीय उद्यान पश्चिम बंगाल में स्थित है। यह दुनिया का सबसे बड़ा मैंग्रोव वन और यूनेस्को विश्व धरोहर स्थल है।');


-- ============================================================
-- DAY SET 94 — Indian Mountain Passes (May 20)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(94, 'Which is the highest motorable pass in India?', 'भारत का सबसे ऊंचा मोटर योग्य दर्रा कौन सा है?',
 ARRAY['Rohtang Pass','Khardung La','Zoji La','Chang La'],
 ARRAY['रोहतांग दर्रा','खारदुंग ला','ज़ोजी ला','चांग ला'],
 'Khardung La', 'खारदुंग ला',
 'Khardung La in Ladakh at about 5,359 metres is one of the highest motorable passes in the world and the highest in India.', 'लद्दाख में खारदुंग ला लगभग 5,359 मीटर की ऊंचाई पर दुनिया के सबसे ऊंचे मोटर योग्य दर्रों में से एक और भारत में सबसे ऊंचा है।'),

(94, 'Rohtang Pass connects which two valleys?', 'रोहतांग दर्रा किन दो घाटियों को जोड़ता है?',
 ARRAY['Kullu and Lahaul-Spiti','Kullu and Kangra','Shimla and Kullu','Lahaul and Kinnaur'],
 ARRAY['कुल्लू और लाहौल-स्पिती','कुल्लू और कांगड़ा','शिमला और कुल्लू','लाहौल और किन्नौर'],
 'Kullu and Lahaul-Spiti', 'कुल्लू और लाहौल-स्पिती',
 'Rohtang Pass at 3,978 metres connects the Kullu Valley with the Lahaul-Spiti Valley in Himachal Pradesh.', 'रोहतांग दर्रा 3,978 मीटर की ऊंचाई पर हिमाचल प्रदेश में कुल्लू घाटी को लाहौल-स्पिती घाटी से जोड़ता है।'),

(94, 'Nathu La Pass is located on the border between India and which country?', 'नाथू ला दर्रा भारत और किस देश की सीमा पर स्थित है?',
 ARRAY['Nepal','Bhutan','China','Myanmar'],
 ARRAY['नेपाल','भूटान','चीन','म्यांमार'],
 'China', 'चीन',
 'Nathu La Pass is located in Sikkim on the Indo-China (Tibet) border at an altitude of 4,310 metres. It was an important part of the ancient Silk Route.', 'नाथू ला दर्रा सिक्किम में भारत-चीन (तिब्बत) सीमा पर 4,310 मीटर की ऊंचाई पर स्थित है। यह प्राचीन रेशम मार्ग का एक महत्वपूर्ण हिस्सा था।'),

(94, 'Banihal Pass is located in which Union Territory?', 'बनिहाल दर्रा किस केंद्र शासित प्रदेश में स्थित है?',
 ARRAY['Ladakh','Jammu and Kashmir','Himachal Pradesh','Uttarakhand'],
 ARRAY['लद्दाख','जम्मू और कश्मीर','हिमाचल प्रदेश','उत्तराखंड'],
 'Jammu and Kashmir', 'जम्मू और कश्मीर',
 'Banihal Pass is located in Jammu and Kashmir. The Jawahar Tunnel passes through this pass, connecting Jammu with the Kashmir Valley.', 'बनिहाल दर्रा जम्मू और कश्मीर में स्थित है। जवाहर सुरंग इस दर्रे से होकर गुज़रती है, जो जम्मू को कश्मीर घाटी से जोड़ती है।'),

(94, 'Shipki La Pass connects India with which country?', 'शिपकी ला दर्रा भारत को किस देश से जोड़ता है?',
 ARRAY['Nepal','Bhutan','China','Pakistan'],
 ARRAY['नेपाल','भूटान','चीन','पाकिस्तान'],
 'China', 'चीन',
 'Shipki La Pass is located in Himachal Pradesh on the Indo-China border. The Sutlej River enters India through this pass.', 'शिपकी ला दर्रा हिमाचल प्रदेश में भारत-चीन सीमा पर स्थित है। सतलज नदी इसी दर्रे से होकर भारत में प्रवेश करती है।');


-- ============================================================
-- DAY SET 95 — Indian Islands & Coastal Geography (May 21)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(95, 'How many islands are there in the Andaman and Nicobar Islands group (approximately)?', 'अंडमान और निकोबार द्वीप समूह में लगभग कितने द्वीप हैं?',
 ARRAY['136','572','836','247'],
 ARRAY['136','572','836','247'],
 '572', '572',
 'The Andaman and Nicobar Islands consist of approximately 572 islands, of which only about 37 are inhabited.', 'अंडमान और निकोबार द्वीप समूह में लगभग 572 द्वीप हैं, जिनमें से केवल लगभग 37 पर लोग रहते हैं।'),

(95, 'Which is the largest island in India?', 'भारत का सबसे बड़ा द्वीप कौन सा है?',
 ARRAY['Majuli','Middle Andaman','Salsette','Great Nicobar'],
 ARRAY['माजुली','मध्य अंडमान','सालसेट','ग्रेट निकोबार'],
 'Middle Andaman', 'मध्य अंडमान',
 'Middle Andaman is the largest island in India by area, located in the Andaman and Nicobar Islands group.', 'मध्य अंडमान क्षेत्रफल के हिसाब से भारत का सबसे बड़ा द्वीप है, जो अंडमान और निकोबार द्वीप समूह में स्थित है।'),

(95, 'Lakshadweep islands are made up of which type of formation?', 'लक्षद्वीप द्वीप किस प्रकार की संरचना से बने हैं?',
 ARRAY['Volcanic','Coral','Continental','Tectonic'],
 ARRAY['ज्वालामुखीय','प्रवाल (मूंगा)','महाद्वीपीय','विवर्तनिक'],
 'Coral', 'प्रवाल (मूंगा)',
 'Lakshadweep islands are coral islands (atolls) formed by coral reef deposits in the Arabian Sea.', 'लक्षद्वीप द्वीप अरब सागर में प्रवाल भित्ति जमाव से बने प्रवाल द्वीप (एटॉल) हैं।'),

(95, 'Indira Point, the southernmost point of India, is located in which island?', 'इंदिरा पॉइंट, भारत का सबसे दक्षिणी बिंदु, किस द्वीप में स्थित है?',
 ARRAY['Little Andaman','Car Nicobar','Great Nicobar','Katchal'],
 ARRAY['लिटिल अंडमान','कार निकोबार','ग्रेट निकोबार','कचल'],
 'Great Nicobar', 'ग्रेट निकोबार',
 'Indira Point on Great Nicobar Island is the southernmost point of India, located at 6 degrees 4 minutes North latitude.', 'ग्रेट निकोबार द्वीप पर इंदिरा पॉइंट भारत का सबसे दक्षिणी बिंदु है, जो 6 डिग्री 4 मिनट उत्तरी अक्षांश पर स्थित है।'),

(95, 'Majuli, the world''s largest river island, is located in which river?', 'माजुली, दुनिया का सबसे बड़ा नदी द्वीप, किस नदी में स्थित है?',
 ARRAY['Ganga','Godavari','Brahmaputra','Mahanadi'],
 ARRAY['गंगा','गोदावरी','ब्रह्मपुत्र','महानदी'],
 'Brahmaputra', 'ब्रह्मपुत्र',
 'Majuli is the world''s largest river island, located in the Brahmaputra River in Assam. It is also the first island district of India.', 'माजुली दुनिया का सबसे बड़ा नदी द्वीप है, जो असम में ब्रह्मपुत्र नदी में स्थित है। यह भारत का पहला द्वीप जिला भी है।');


-- ============================================================
-- DAY SET 96 — World History & World Wars (May 22)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(96, 'In which year did World War I begin?', 'प्रथम विश्व युद्ध किस वर्ष शुरू हुआ?',
 ARRAY['1912','1914','1916','1918'],
 ARRAY['1912','1914','1916','1918'],
 '1914', '1914',
 'World War I began on 28 July 1914 and ended on 11 November 1918. The assassination of Archduke Franz Ferdinand triggered the war.', 'प्रथम विश्व युद्ध 28 जुलाई 1914 को शुरू हुआ और 11 नवंबर 1918 को समाप्त हुआ। आर्कड्यूक फ्रांज फर्डिनेंड की हत्या ने युद्ध को जन्म दिया।'),

(96, 'Which event is considered the immediate cause of World War I?', 'किस घटना को प्रथम विश्व युद्ध का तात्कालिक कारण माना जाता है?',
 ARRAY['Sinking of Lusitania','Assassination of Archduke Franz Ferdinand','Treaty of Versailles','Russian Revolution'],
 ARRAY['लुसिटानिया का डूबना','आर्कड्यूक फ्रांज फर्डिनेंड की हत्या','वर्साय की संधि','रूसी क्रांति'],
 'Assassination of Archduke Franz Ferdinand', 'आर्कड्यूक फ्रांज फर्डिनेंड की हत्या',
 'The assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo on 28 June 1914 is considered the immediate trigger of World War I.', 'सराजेवो में 28 जून 1914 को ऑस्ट्रिया-हंगरी के आर्कड्यूक फ्रांज फर्डिनेंड की हत्या को प्रथम विश्व युद्ध का तात्कालिक कारण माना जाता है।'),

(96, 'World War II ended in which year?', 'द्वितीय विश्व युद्ध किस वर्ष समाप्त हुआ?',
 ARRAY['1943','1944','1945','1946'],
 ARRAY['1943','1944','1945','1946'],
 '1945', '1945',
 'World War II ended in 1945. Germany surrendered in May 1945, and Japan surrendered in August 1945 after the atomic bombings of Hiroshima and Nagasaki.', 'द्वितीय विश्व युद्ध 1945 में समाप्त हुआ। जर्मनी ने मई 1945 में आत्मसमर्पण किया, और हिरोशिमा और नागासाकी पर परमाणु बमबारी के बाद जापान ने अगस्त 1945 में आत्मसमर्पण किया।'),

(96, 'The French Revolution began in which year?', 'फ्रांसीसी क्रांति किस वर्ष शुरू हुई?',
 ARRAY['1776','1789','1799','1804'],
 ARRAY['1776','1789','1799','1804'],
 '1789', '1789',
 'The French Revolution began in 1789 with the storming of the Bastille on 14 July. It led to the end of the monarchy in France.', 'फ्रांसीसी क्रांति 1789 में 14 जुलाई को बास्तील के तूफान के साथ शुरू हुई। इसने फ्रांस में राजशाही के अंत का मार्ग प्रशस्त किया।'),

(96, 'Which country was divided into East and West by the Berlin Wall?', 'बर्लिन की दीवार द्वारा किस देश को पूर्वी और पश्चिमी भागों में विभाजित किया गया था?',
 ARRAY['Korea','Vietnam','Germany','China'],
 ARRAY['कोरिया','वियतनाम','जर्मनी','चीन'],
 'Germany', 'जर्मनी',
 'The Berlin Wall divided Germany (specifically Berlin) from 1961 to 1989. Its fall on 9 November 1989 symbolized the end of the Cold War.', 'बर्लिन की दीवार ने 1961 से 1989 तक जर्मनी (विशेषकर बर्लिन) को विभाजित किया। 9 नवंबर 1989 को इसका गिरना शीत युद्ध के अंत का प्रतीक था।');


-- ============================================================
-- DAY SET 97 — United Nations & International Organizations (May 23)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(97, 'When was the United Nations established?', 'संयुक्त राष्ट्र की स्थापना कब हुई?',
 ARRAY['1919','1939','1945','1950'],
 ARRAY['1919','1939','1945','1950'],
 '1945', '1945',
 'The United Nations was established on 24 October 1945 after World War II to maintain international peace and security.', 'संयुक्त राष्ट्र की स्थापना 24 अक्टूबर 1945 को द्वितीय विश्व युद्ध के बाद अंतर्राष्ट्रीय शांति और सुरक्षा बनाए रखने के लिए की गई थी।'),

(97, 'How many permanent members are there in the UN Security Council?', 'संयुक्त राष्ट्र सुरक्षा परिषद में कितने स्थायी सदस्य हैं?',
 ARRAY['3','5','7','10'],
 ARRAY['3','5','7','10'],
 '5', '5',
 'The UN Security Council has 5 permanent members: USA, UK, France, Russia, and China. They each have veto power.', 'संयुक्त राष्ट्र सुरक्षा परिषद में 5 स्थायी सदस्य हैं: अमेरिका, ब्रिटेन, फ्रांस, रूस और चीन। प्रत्येक के पास वीटो शक्ति है।'),

(97, 'Where is the headquarters of the United Nations located?', 'संयुक्त राष्ट्र का मुख्यालय कहां स्थित है?',
 ARRAY['Geneva','Paris','New York','London'],
 ARRAY['जिनेवा','पेरिस','न्यूयॉर्क','लंदन'],
 'New York', 'न्यूयॉर्क',
 'The headquarters of the United Nations is located in New York City, USA.', 'संयुक्त राष्ट्र का मुख्यालय न्यूयॉर्क शहर, अमेरिका में स्थित है।'),

(97, 'Which organization is known as the World Bank?', 'किस संगठन को विश्व बैंक के रूप में जाना जाता है?',
 ARRAY['IMF','IBRD','WTO','ADB'],
 ARRAY['आईएमएफ','आईबीआरडी','डब्ल्यूटीओ','एडीबी'],
 'IBRD', 'आईबीआरडी',
 'The International Bank for Reconstruction and Development (IBRD) is commonly known as the World Bank. It provides loans to developing countries.', 'अंतर्राष्ट्रीय पुनर्निर्माण और विकास बैंक (IBRD) को आमतौर पर विश्व बैंक के रूप में जाना जाता है। यह विकासशील देशों को ऋण प्रदान करता है।'),

(97, 'UNESCO is related to which field?', 'यूनेस्को किस क्षेत्र से संबंधित है?',
 ARRAY['Trade and Commerce','Education, Science and Culture','Health and Medicine','Agriculture and Food'],
 ARRAY['व्यापार और वाणिज्य','शिक्षा, विज्ञान और संस्कृति','स्वास्थ्य और चिकित्सा','कृषि और खाद्य'],
 'Education, Science and Culture', 'शिक्षा, विज्ञान और संस्कृति',
 'UNESCO stands for United Nations Educational, Scientific and Cultural Organization. Its headquarters is in Paris, France.', 'UNESCO का मतलब संयुक्त राष्ट्र शैक्षिक, वैज्ञानिक और सांस्कृतिक संगठन है। इसका मुख्यालय पेरिस, फ्रांस में है।');


-- ============================================================
-- DAY SET 98 — International Treaties & Agreements (May 24)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(98, 'The Treaty of Versailles was signed after which war?', 'वर्साय की संधि किस युद्ध के बाद हस्ताक्षरित की गई थी?',
 ARRAY['Napoleonic Wars','World War I','World War II','Franco-Prussian War'],
 ARRAY['नेपोलियन युद्ध','प्रथम विश्व युद्ध','द्वितीय विश्व युद्ध','फ्रेंको-प्रशिया युद्ध'],
 'World War I', 'प्रथम विश्व युद्ध',
 'The Treaty of Versailles was signed on 28 June 1919 after World War I. It imposed harsh penalties on Germany.', 'वर्साय की संधि प्रथम विश्व युद्ध के बाद 28 जून 1919 को हस्ताक्षरित की गई थी। इसने जर्मनी पर कठोर दंड लगाए।'),

(98, 'The Geneva Convention primarily deals with which subject?', 'जिनेवा कन्वेंशन मुख्य रूप से किस विषय से संबंधित है?',
 ARRAY['International Trade','Climate Change','Treatment of War Victims','Nuclear Disarmament'],
 ARRAY['अंतर्राष्ट्रीय व्यापार','जलवायु परिवर्तन','युद्ध पीड़ितों का उपचार','परमाणु निरस्त्रीकरण'],
 'Treatment of War Victims', 'युद्ध पीड़ितों का उपचार',
 'The Geneva Conventions set international legal standards for humanitarian treatment in war, protecting wounded soldiers, prisoners of war, and civilians.', 'जिनेवा कन्वेंशन युद्ध में मानवीय व्यवहार, घायल सैनिकों, युद्धबंदियों और नागरिकों की सुरक्षा के लिए अंतर्राष्ट्रीय कानूनी मानक निर्धारित करते हैं।'),

(98, 'The Paris Agreement of 2015 is related to which issue?', '2015 का पेरिस समझौता किस मुद्दे से संबंधित है?',
 ARRAY['Nuclear Disarmament','Climate Change','International Trade','Human Rights'],
 ARRAY['परमाणु निरस्त्रीकरण','जलवायु परिवर्तन','अंतर्राष्ट्रीय व्यापार','मानवाधिकार'],
 'Climate Change', 'जलवायु परिवर्तन',
 'The Paris Agreement was adopted in 2015 to limit global warming to well below 2 degrees Celsius above pre-industrial levels.', 'पेरिस समझौता 2015 में वैश्विक तापमान को पूर्व-औद्योगिक स्तरों से 2 डिग्री सेल्सियस से काफी नीचे सीमित करने के लिए अपनाया गया था।'),

(98, 'The Nuclear Non-Proliferation Treaty (NPT) came into force in which year?', 'परमाणु अप्रसार संधि (NPT) किस वर्ष लागू हुई?',
 ARRAY['1960','1968','1970','1975'],
 ARRAY['1960','1968','1970','1975'],
 '1970', '1970',
 'The NPT came into force on 5 March 1970. It aims to prevent the spread of nuclear weapons and promote peaceful use of nuclear energy.', 'NPT 5 मार्च 1970 को लागू हुई। इसका उद्देश्य परमाणु हथियारों के प्रसार को रोकना और परमाणु ऊर्जा के शांतिपूर्ण उपयोग को बढ़ावा देना है।'),

(98, 'The Kyoto Protocol is related to which environmental issue?', 'क्योटो प्रोटोकॉल किस पर्यावरणीय मुद्दे से संबंधित है?',
 ARRAY['Ozone Depletion','Greenhouse Gas Emissions','Ocean Pollution','Deforestation'],
 ARRAY['ओजोन क्षरण','ग्रीनहाउस गैस उत्सर्जन','समुद्री प्रदूषण','वनों की कटाई'],
 'Greenhouse Gas Emissions', 'ग्रीनहाउस गैस उत्सर्जन',
 'The Kyoto Protocol, adopted in 1997, committed industrialized nations to reduce greenhouse gas emissions to combat climate change.', 'क्योटो प्रोटोकॉल, 1997 में अपनाया गया, जिसने औद्योगिक देशों को जलवायु परिवर्तन से निपटने के लिए ग्रीनहाउस गैस उत्सर्जन कम करने के लिए प्रतिबद्ध किया।');


-- ============================================================
-- DAY SET 99 — Famous World Leaders (May 25)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(99, 'Who was the first President of the United States of America?', 'संयुक्त राज्य अमेरिका के पहले राष्ट्रपति कौन थे?',
 ARRAY['Abraham Lincoln','Thomas Jefferson','George Washington','John Adams'],
 ARRAY['अब्राहम लिंकन','थॉमस जेफरसन','जॉर्ज वाशिंगटन','जॉन एडम्स'],
 'George Washington', 'जॉर्ज वाशिंगटन',
 'George Washington served as the first President of the United States from 1789 to 1797.', 'जॉर्ज वाशिंगटन ने 1789 से 1797 तक संयुक्त राज्य अमेरिका के पहले राष्ट्रपति के रूप में कार्य किया।'),

(99, 'Nelson Mandela was the president of which country?', 'नेल्सन मंडेला किस देश के राष्ट्रपति थे?',
 ARRAY['Nigeria','Kenya','South Africa','Zimbabwe'],
 ARRAY['नाइजीरिया','केन्या','दक्षिण अफ्रीका','जिम्बाब्वे'],
 'South Africa', 'दक्षिण अफ्रीका',
 'Nelson Mandela became the first Black president of South Africa in 1994 after spending 27 years in prison for fighting against apartheid.', 'नेल्सन मंडेला रंगभेद के खिलाफ लड़ने के लिए 27 साल जेल में बिताने के बाद 1994 में दक्षिण अफ्रीका के पहले अश्वेत राष्ट्रपति बने।'),

(99, 'Who was known as the "Iron Lady"?', '"आयरन लेडी" के नाम से किसे जाना जाता था?',
 ARRAY['Angela Merkel','Indira Gandhi','Margaret Thatcher','Golda Meir'],
 ARRAY['एंजेला मर्केल','इंदिरा गांधी','मार्गरेट थैचर','गोल्डा मीर'],
 'Margaret Thatcher', 'मार्गरेट थैचर',
 'Margaret Thatcher, the Prime Minister of the United Kingdom from 1979 to 1990, was known as the "Iron Lady" for her strong and uncompromising leadership.', 'मार्गरेट थैचर, 1979 से 1990 तक यूनाइटेड किंगडम की प्रधान मंत्री, अपने मजबूत और अडिग नेतृत्व के लिए "आयरन लेडी" के नाम से जानी जाती थीं।'),

(99, 'Who led the Cuban Revolution?', 'क्यूबा की क्रांति का नेतृत्व किसने किया?',
 ARRAY['Che Guevara','Fidel Castro','Hugo Chavez','Simon Bolivar'],
 ARRAY['चे ग्वेरा','फिदेल कास्त्रो','ह्यूगो शावेज','सिमोन बोलिवर'],
 'Fidel Castro', 'फिदेल कास्त्रो',
 'Fidel Castro led the Cuban Revolution and became the Prime Minister of Cuba in 1959. He ruled Cuba for nearly five decades.', 'फिदेल कास्त्रो ने क्यूबा की क्रांति का नेतृत्व किया और 1959 में क्यूबा के प्रधान मंत्री बने।'),

(99, 'Who was the leader of the Soviet Union during the Cuban Missile Crisis?', 'क्यूबा मिसाइल संकट के दौरान सोवियत संघ का नेता कौन था?',
 ARRAY['Joseph Stalin','Nikita Khrushchev','Leonid Brezhnev','Mikhail Gorbachev'],
 ARRAY['जोसेफ स्टालिन','निकिता ख्रुश्चेव','लियोनिद ब्रेझनेव','मिखाइल गोर्बाचेव'],
 'Nikita Khrushchev', 'निकिता ख्रुश्चेव',
 'Nikita Khrushchev was the leader of the Soviet Union during the Cuban Missile Crisis of 1962, which brought the world to the brink of nuclear war.', 'निकिता ख्रुश्चेव 1962 के क्यूबा मिसाइल संकट के दौरान सोवियत संघ के नेता थे, जिसने दुनिया को परमाणु युद्ध के कगार पर ला दिया।');


-- ============================================================
-- DAY SET 100 — World History Miscellaneous (May 26)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(100, 'The Renaissance period originated in which country?', 'पुनर्जागरण काल किस देश में उत्पन्न हुआ?',
 ARRAY['France','England','Italy','Greece'],
 ARRAY['फ्रांस','इंग्लैंड','इटली','ग्रीस'],
 'Italy', 'इटली',
 'The Renaissance began in Italy in the 14th century, particularly in Florence. It was a period of great cultural and intellectual achievement.', 'पुनर्जागरण 14वीं शताब्दी में इटली में, विशेषकर फ्लोरेंस में शुरू हुआ। यह महान सांस्कृतिक और बौद्धिक उपलब्धि का काल था।'),

(100, 'The American Declaration of Independence was signed in which year?', 'अमेरिकी स्वतंत्रता की घोषणा किस वर्ष हस्ताक्षरित की गई थी?',
 ARRAY['1774','1776','1783','1789'],
 ARRAY['1774','1776','1783','1789'],
 '1776', '1776',
 'The American Declaration of Independence was signed on 4 July 1776, declaring the 13 American colonies free from British rule.', 'अमेरिकी स्वतंत्रता की घोषणा 4 जुलाई 1776 को हस्ताक्षरित की गई, जिसमें 13 अमेरिकी उपनिवेशों को ब्रिटिश शासन से मुक्त घोषित किया गया।'),

(100, 'The Russian Revolution took place in which year?', 'रूसी क्रांति किस वर्ष हुई?',
 ARRAY['1905','1914','1917','1921'],
 ARRAY['1905','1914','1917','1921'],
 '1917', '1917',
 'The Russian Revolution of 1917 led to the fall of the Russian Empire and the rise of the Soviet Union under Vladimir Lenin.', '1917 की रूसी क्रांति ने रूसी साम्राज्य के पतन और व्लादिमीर लेनिन के नेतृत्व में सोवियत संघ के उदय का मार्ग प्रशस्त किया।'),

(100, 'Who discovered America in 1492?', '1492 में अमेरिका की खोज किसने की?',
 ARRAY['Vasco da Gama','Ferdinand Magellan','Christopher Columbus','Amerigo Vespucci'],
 ARRAY['वास्को डी गामा','फर्डिनेंड मैगेलन','क्रिस्टोफर कोलंबस','अमेरिगो वेस्पुची'],
 'Christopher Columbus', 'क्रिस्टोफर कोलंबस',
 'Christopher Columbus reached the Americas in 1492 while sailing west from Spain, though he believed he had reached Asia.', 'क्रिस्टोफर कोलंबस 1492 में स्पेन से पश्चिम की ओर नौकायन करते हुए अमेरिका पहुंचे, हालांकि उनका मानना था कि वे एशिया पहुंचे हैं।'),

(100, 'The Industrial Revolution first started in which country?', 'औद्योगिक क्रांति सबसे पहले किस देश में शुरू हुई?',
 ARRAY['France','Germany','United States','Britain'],
 ARRAY['फ्रांस','जर्मनी','संयुक्त राज्य अमेरिका','ब्रिटेन'],
 'Britain', 'ब्रिटेन',
 'The Industrial Revolution began in Britain in the mid-18th century, driven by innovations in textile manufacturing, steam power, and iron production.', 'औद्योगिक क्रांति 18वीं शताब्दी के मध्य में ब्रिटेन में शुरू हुई, जो कपड़ा निर्माण, भाप शक्ति और लोहा उत्पादन में नवाचारों से प्रेरित थी।');


-- ============================================================
-- DAY SET 101 — Awards & Honours (May 27)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(101, 'Which is the highest civilian award in India?', 'भारत का सर्वोच्च नागरिक पुरस्कार कौन सा है?',
 ARRAY['Padma Vibhushan','Padma Bhushan','Bharat Ratna','Padma Shri'],
 ARRAY['पद्म विभूषण','पद्म भूषण','भारत रत्न','पद्म श्री'],
 'Bharat Ratna', 'भारत रत्न',
 'Bharat Ratna is the highest civilian award in India, established in 1954. It is awarded for exceptional service in any field.', 'भारत रत्न भारत का सर्वोच्च नागरिक पुरस्कार है, जिसकी स्थापना 1954 में हुई थी। यह किसी भी क्षेत्र में असाधारण सेवा के लिए दिया जाता है।'),

(101, 'The Nobel Prize was established by which person?', 'नोबेल पुरस्कार की स्थापना किस व्यक्ति ने की?',
 ARRAY['Albert Einstein','Alfred Nobel','Isaac Newton','Marie Curie'],
 ARRAY['अल्बर्ट आइंस्टीन','अल्फ्रेड नोबेल','आइज़ैक न्यूटन','मैरी क्यूरी'],
 'Alfred Nobel', 'अल्फ्रेड नोबेल',
 'The Nobel Prize was established by Alfred Nobel, the Swedish inventor of dynamite. The prizes have been awarded since 1901.', 'नोबेल पुरस्कार की स्थापना स्वीडिश आविष्कारक अल्फ्रेड नोबेल ने की थी। ये पुरस्कार 1901 से दिए जा रहे हैं।'),

(101, 'The Dronacharya Award is given for excellence in which field?', 'द्रोणाचार्य पुरस्कार किस क्षेत्र में उत्कृष्टता के लिए दिया जाता है?',
 ARRAY['Literature','Sports Coaching','Science','Music'],
 ARRAY['साहित्य','खेल प्रशिक्षण','विज्ञान','संगीत'],
 'Sports Coaching', 'खेल प्रशिक्षण',
 'The Dronacharya Award is given to outstanding sports coaches in India who have trained sportspersons who achieved international distinction.', 'द्रोणाचार्य पुरस्कार भारत में उत्कृष्ट खेल प्रशिक्षकों को दिया जाता है जिन्होंने अंतर्राष्ट्रीय स्तर पर विशिष्ट उपलब्धि हासिल करने वाले खिलाड़ियों को प्रशिक्षित किया है।'),

(101, 'Who was the first Indian to win the Nobel Prize?', 'नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?',
 ARRAY['C.V. Raman','Rabindranath Tagore','Amartya Sen','Har Gobind Khorana'],
 ARRAY['सी.वी. रमन','रबींद्रनाथ टैगोर','अमर्त्य सेन','हर गोबिंद खोराना'],
 'Rabindranath Tagore', 'रबींद्रनाथ टैगोर',
 'Rabindranath Tagore was the first Indian to win the Nobel Prize. He received the Nobel Prize in Literature in 1913 for his collection "Gitanjali".', 'रबींद्रनाथ टैगोर नोबेल पुरस्कार जीतने वाले पहले भारतीय थे। उन्हें 1913 में "गीतांजलि" के लिए साहित्य में नोबेल पुरस्कार मिला।'),

(101, 'The Arjuna Award is given in which field?', 'अर्जुन पुरस्कार किस क्षेत्र में दिया जाता है?',
 ARRAY['Cinema','Sports','Literature','Bravery'],
 ARRAY['सिनेमा','खेल','साहित्य','वीरता'],
 'Sports', 'खेल',
 'The Arjuna Award is given annually to outstanding sportspersons in India. It was instituted in 1961 by the Government of India.', 'अर्जुन पुरस्कार भारत में उत्कृष्ट खिलाड़ियों को प्रतिवर्ष दिया जाता है। इसकी स्थापना 1961 में भारत सरकार द्वारा की गई थी।');


-- ============================================================
-- DAY SET 102 — Famous Books & Authors (May 28)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(102, 'Who wrote the book "Discovery of India"?', '"डिस्कवरी ऑफ इंडिया" पुस्तक किसने लिखी?',
 ARRAY['Mahatma Gandhi','Jawaharlal Nehru','Rabindranath Tagore','B.R. Ambedkar'],
 ARRAY['महात्मा गांधी','जवाहरलाल नेहरू','रबींद्रनाथ टैगोर','बी.आर. अंबेडकर'],
 'Jawaharlal Nehru', 'जवाहरलाल नेहरू',
 'Jawaharlal Nehru wrote "The Discovery of India" during his imprisonment at Ahmednagar Fort from 1942 to 1946.', 'जवाहरलाल नेहरू ने 1942 से 1946 तक अहमदनगर किले में अपनी कैद के दौरान "द डिस्कवरी ऑफ इंडिया" लिखी।'),

(102, 'Who is the author of "My Experiments with Truth"?', '"सत्य के साथ मेरे प्रयोग" के लेखक कौन हैं?',
 ARRAY['Jawaharlal Nehru','Sardar Patel','Mahatma Gandhi','Subhas Chandra Bose'],
 ARRAY['जवाहरलाल नेहरू','सरदार पटेल','महात्मा गांधी','सुभाष चंद्र बोस'],
 'Mahatma Gandhi', 'महात्मा गांधी',
 'Mahatma Gandhi wrote his autobiography "My Experiments with Truth" covering his life from childhood to 1921.', 'महात्मा गांधी ने अपनी आत्मकथा "सत्य के साथ मेरे प्रयोग" लिखी जो उनके बचपन से 1921 तक के जीवन को दर्शाती है।'),

(102, 'The famous play "Hamlet" was written by which author?', 'प्रसिद्ध नाटक "हैमलेट" किस लेखक द्वारा लिखा गया था?',
 ARRAY['Charles Dickens','William Shakespeare','Mark Twain','Leo Tolstoy'],
 ARRAY['चार्ल्स डिकेंस','विलियम शेक्सपियर','मार्क ट्वेन','लियो टॉल्स्टॉय'],
 'William Shakespeare', 'विलियम शेक्सपियर',
 'Hamlet was written by William Shakespeare around 1600. It is one of the most performed plays in the world.', 'हैमलेट लगभग 1600 में विलियम शेक्सपियर द्वारा लिखा गया था। यह दुनिया में सबसे अधिक प्रदर्शित नाटकों में से एक है।'),

(102, 'Who wrote the Indian national song "Vande Mataram"?', 'भारतीय राष्ट्रीय गीत "वंदे मातरम" किसने लिखा?',
 ARRAY['Rabindranath Tagore','Bankim Chandra Chattopadhyay','Muhammad Iqbal','Sarojini Naidu'],
 ARRAY['रबींद्रनाथ टैगोर','बंकिम चंद्र चट्टोपाध्याय','मुहम्मद इकबाल','सरोजिनी नायडू'],
 'Bankim Chandra Chattopadhyay', 'बंकिम चंद्र चट्टोपाध्याय',
 'Bankim Chandra Chattopadhyay wrote "Vande Mataram" in his novel "Anandamath" (1882). It is the national song of India.', 'बंकिम चंद्र चट्टोपाध्याय ने अपने उपन्यास "आनंदमठ" (1882) में "वंदे मातरम" लिखा। यह भारत का राष्ट्रीय गीत है।'),

(102, 'The book "Wings of Fire" is an autobiography of whom?', '"विंग्स ऑफ फायर" पुस्तक किसकी आत्मकथा है?',
 ARRAY['Vikram Sarabhai','Homi Bhabha','A.P.J. Abdul Kalam','Satish Dhawan'],
 ARRAY['विक्रम साराभाई','होमी भाभा','ए.पी.जे. अब्दुल कलाम','सतीश धवन'],
 'A.P.J. Abdul Kalam', 'ए.पी.जे. अब्दुल कलाम',
 '"Wings of Fire" is the autobiography of Dr. A.P.J. Abdul Kalam, the former President of India and renowned scientist.', '"विंग्स ऑफ फायर" भारत के पूर्व राष्ट्रपति और प्रसिद्ध वैज्ञानिक डॉ. ए.पी.जे. अब्दुल कलाम की आत्मकथा है।');


-- ============================================================
-- DAY SET 103 — Indian Languages & Culture (May 29)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(103, 'How many languages are listed in the Eighth Schedule of the Indian Constitution?', 'भारतीय संविधान की आठवीं अनुसूची में कितनी भाषाएं सूचीबद्ध हैं?',
 ARRAY['18','20','22','24'],
 ARRAY['18','20','22','24'],
 '22', '22',
 'There are 22 languages listed in the Eighth Schedule of the Indian Constitution, including Hindi, Bengali, Telugu, Marathi, Tamil, and others.', 'भारतीय संविधान की आठवीं अनुसूची में 22 भाषाएं सूचीबद्ध हैं, जिनमें हिंदी, बंगाली, तेलुगु, मराठी, तमिल और अन्य शामिल हैं।'),

(103, 'Which is the most spoken language in India after Hindi?', 'हिंदी के बाद भारत में सबसे अधिक बोली जाने वाली भाषा कौन सी है?',
 ARRAY['Telugu','Tamil','Bengali','Marathi'],
 ARRAY['तेलुगु','तमिल','बंगाली','मराठी'],
 'Bengali', 'बंगाली',
 'Bengali is the second most spoken language in India after Hindi, with over 97 million speakers as per the 2011 Census.', 'बंगाली 2011 की जनगणना के अनुसार 9.7 करोड़ से अधिक बोलने वालों के साथ हिंदी के बाद भारत में दूसरी सबसे अधिक बोली जाने वाली भाषा है।'),

(103, 'Classical language status has been granted to how many Indian languages?', 'कितनी भारतीय भाषाओं को शास्त्रीय भाषा का दर्जा दिया गया है?',
 ARRAY['4','6','7','11'],
 ARRAY['4','6','7','11'],
 '6', '6',
 'Six Indian languages have Classical language status: Tamil (2004), Sanskrit (2005), Kannada (2008), Telugu (2008), Malayalam (2013), and Odia (2014).', 'छह भारतीय भाषाओं को शास्त्रीय भाषा का दर्जा है: तमिल (2004), संस्कृत (2005), कन्नड़ (2008), तेलुगु (2008), मलयालम (2013), और ओडिया (2014)।'),

(103, 'In which script is Hindi written?', 'हिंदी किस लिपि में लिखी जाती है?',
 ARRAY['Urdu','Gurmukhi','Devanagari','Roman'],
 ARRAY['उर्दू','गुरमुखी','देवनागरी','रोमन'],
 'Devanagari', 'देवनागरी',
 'Hindi is written in the Devanagari script. The Indian Constitution also recognizes Devanagari as the script for the official language.', 'हिंदी देवनागरी लिपि में लिखी जाती है। भारतीय संविधान भी देवनागरी को राजभाषा की लिपि के रूप में मान्यता देता है।'),

(103, 'Which Indian language is the oldest among the Scheduled Languages?', 'अनुसूचित भाषाओं में सबसे प्राचीन भारतीय भाषा कौन सी है?',
 ARRAY['Hindi','Sanskrit','Tamil','Kannada'],
 ARRAY['हिंदी','संस्कृत','तमिल','कन्नड़'],
 'Tamil', 'तमिल',
 'Tamil is considered one of the oldest living languages in the world, with a literary history spanning over 2,000 years. It was the first to get Classical language status.', 'तमिल को दुनिया की सबसे पुरानी जीवित भाषाओं में से एक माना जाता है, जिसका साहित्यिक इतिहास 2,000 वर्षों से अधिक पुराना है।');


-- ============================================================
-- DAY SET 104 — Transport & Agriculture (May 30)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(104, 'Which is the longest railway platform in the world?', 'दुनिया का सबसे लंबा रेलवे प्लेटफॉर्म कौन सा है?',
 ARRAY['Gorakhpur, India','Hubballi, India','Kharagpur, India','Ghum, India'],
 ARRAY['गोरखपुर, भारत','हुबली, भारत','खड़गपुर, भारत','घूम, भारत'],
 'Hubballi, India', 'हुबली, भारत',
 'Hubballi (Hubli) railway station in Karnataka holds the Guinness World Record for the longest railway platform at 1,505 metres.', 'कर्नाटक में हुबली रेलवे स्टेशन 1,505 मीटर लंबाई के साथ सबसे लंबे रेलवे प्लेटफॉर्म का गिनीज वर्ल्ड रिकॉर्ड रखता है।'),

(104, 'The Green Revolution in India is associated with which crop?', 'भारत में हरित क्रांति किस फसल से जुड़ी है?',
 ARRAY['Rice and Cotton','Wheat and Rice','Sugarcane and Jute','Pulses and Oilseeds'],
 ARRAY['चावल और कपास','गेहूं और चावल','गन्ना और जूट','दालें और तिलहन'],
 'Wheat and Rice', 'गेहूं और चावल',
 'The Green Revolution in India (1960s-70s) primarily focused on increasing the production of wheat and rice through high-yielding variety seeds.', 'भारत में हरित क्रांति (1960-70 के दशक) ने मुख्य रूप से उच्च उपज वाले बीजों के माध्यम से गेहूं और चावल के उत्पादन को बढ़ाने पर ध्यान केंद्रित किया।'),

(104, 'Who is known as the Father of the Green Revolution in India?', 'भारत में हरित क्रांति के जनक किसे कहा जाता है?',
 ARRAY['Verghese Kurien','M.S. Swaminathan','Norman Borlaug','C. Subramaniam'],
 ARRAY['वर्गीस कुरियन','एम.एस. स्वामीनाथन','नॉर्मन बोरलॉग','सी. सुब्रमण्यम'],
 'M.S. Swaminathan', 'एम.एस. स्वामीनाथन',
 'M.S. Swaminathan is known as the Father of the Green Revolution in India for his role in introducing high-yielding varieties of wheat and rice.', 'एम.एस. स्वामीनाथन को गेहूं और चावल की उच्च उपज वाली किस्मों को शुरू करने में उनकी भूमिका के लिए भारत में हरित क्रांति का जनक कहा जाता है।'),

(104, 'The first metro rail in India started in which city?', 'भारत में पहली मेट्रो रेल किस शहर में शुरू हुई?',
 ARRAY['Delhi','Mumbai','Kolkata','Chennai'],
 ARRAY['दिल्ली','मुंबई','कोलकाता','चेन्नई'],
 'Kolkata', 'कोलकाता',
 'India''s first metro rail started in Kolkata on 24 October 1984. The Kolkata Metro was the first underground railway in India.', 'भारत की पहली मेट्रो रेल 24 अक्टूबर 1984 को कोलकाता में शुरू हुई। कोलकाता मेट्रो भारत में पहला भूमिगत रेलवे था।'),

(104, 'Operation Flood is related to which sector?', 'ऑपरेशन फ्लड किस क्षेत्र से संबंधित है?',
 ARRAY['Agriculture','Dairy Development','Flood Control','Oil Production'],
 ARRAY['कृषि','डेयरी विकास','बाढ़ नियंत्रण','तेल उत्पादन'],
 'Dairy Development', 'डेयरी विकास',
 'Operation Flood (White Revolution) was launched by Dr. Verghese Kurien in 1970 to make India self-sufficient in milk production.', 'ऑपरेशन फ्लड (श्वेत क्रांति) 1970 में डॉ. वर्गीस कुरियन द्वारा भारत को दूध उत्पादन में आत्मनिर्भर बनाने के लिए शुरू किया गया था।');


-- ============================================================
-- DAY SET 105 — Mixed GK - Miscellaneous (May 31)
-- ============================================================
INSERT INTO questions (day_set, question_en, question_hi, options_en, options_hi, answer_en, answer_hi, explanation_en, explanation_hi)
VALUES
(105, 'Which blood group is known as the universal donor?', 'किस रक्त समूह को सार्वभौमिक दाता कहा जाता है?',
 ARRAY['A+','B+','AB+','O-'],
 ARRAY['ए+','बी+','एबी+','ओ-'],
 'O-', 'ओ-',
 'Blood group O negative (O-) is known as the universal donor because it can be given to patients of any blood type in emergencies.', 'रक्त समूह O नेगेटिव (O-) को सार्वभौमिक दाता कहा जाता है क्योंकि इसे आपातकाल में किसी भी रक्त प्रकार के रोगियों को दिया जा सकता है।'),

(105, 'How many bones are there in an adult human body?', 'एक वयस्क मानव शरीर में कितनी हड्डियां होती हैं?',
 ARRAY['186','206','216','256'],
 ARRAY['186','206','216','256'],
 '206', '206',
 'An adult human body has 206 bones. Babies are born with about 270 bones, but many fuse together as they grow.', 'एक वयस्क मानव शरीर में 206 हड्डियां होती हैं। शिशु लगभग 270 हड्डियों के साथ पैदा होते हैं, लेकिन बढ़ने पर कई हड्डियां आपस में जुड़ जाती हैं।'),

(105, 'Which planet is known as the "Morning Star" or "Evening Star"?', 'किस ग्रह को "भोर का तारा" या "सांध्य तारा" कहा जाता है?',
 ARRAY['Mars','Mercury','Venus','Jupiter'],
 ARRAY['मंगल','बुध','शुक्र','बृहस्पति'],
 'Venus', 'शुक्र',
 'Venus is called the Morning Star or Evening Star because it is the brightest object in the sky after the Sun and Moon and is visible at dawn or dusk.', 'शुक्र को भोर का तारा या सांध्य तारा कहा जाता है क्योंकि यह सूर्य और चंद्रमा के बाद आकाश में सबसे चमकीला पिंड है और भोर या शाम को दिखाई देता है।'),

(105, 'What is the national aquatic animal of India?', 'भारत का राष्ट्रीय जलीय जंतु कौन सा है?',
 ARRAY['Whale','Dolphin (Gangetic)','Shark','Crocodile'],
 ARRAY['व्हेल','डॉल्फिन (गंगा)','शार्क','मगरमच्छ'],
 'Dolphin (Gangetic)', 'डॉल्फिन (गंगा)',
 'The Gangetic River Dolphin (Platanista gangetica) was declared as the national aquatic animal of India in 2009.', 'गंगा नदी डॉल्फिन (प्लैटानिस्टा गैंगेटिका) को 2009 में भारत का राष्ट्रीय जलीय जंतु घोषित किया गया था।'),

(105, 'Which vitamin is produced by the human body when exposed to sunlight?', 'सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर कौन सा विटामिन बनाता है?',
 ARRAY['Vitamin A','Vitamin B','Vitamin C','Vitamin D'],
 ARRAY['विटामिन ए','विटामिन बी','विटामिन सी','विटामिन डी'],
 'Vitamin D', 'विटामिन डी',
 'The human body produces Vitamin D when the skin is exposed to ultraviolet B (UVB) rays from sunlight. It is essential for bone health.', 'जब त्वचा सूर्य के प्रकाश से पराबैंगनी बी (UVB) किरणों के संपर्क में आती है तो मानव शरीर विटामिन D का उत्पादन करता है। यह हड्डियों के स्वास्थ्य के लिए आवश्यक है।');


-- ============================================================
-- VERIFICATION QUERY — Run after inserting to verify
-- ============================================================
-- SELECT day_set, COUNT(*) as q_count
-- FROM questions
-- WHERE day_set BETWEEN 86 AND 105
-- GROUP BY day_set
-- ORDER BY day_set;
-- Expected: 20 rows, each with q_count = 5
