// menu fitur bot
const a = '```'
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal, groupName, premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx) => { 
	return `
╭─────≽「 *USER INFO* 」
┴
┣⊱>  ${a}NAMA USER:${a} *${pushname2}*
┣⊱>  ${a}CEK PREMIUM:${a} ${premi}
┣⊱>  ${a}LIMIT:${a} *${limitt} perhari*
│
┣⊱>  ${a}NAMA GRUP:${a} *${groupName}*
┣⊱>  ${a}MODE WELCOME:${a} *${Welcomee}*
┣⊱>  ${a}MODE SIMI:${a} *${Simihh}*
┣⊱>  ${a}MODE ANIME:${a} *${ModeAnime}*
┣⊱>  ${a}MODE NSFW:${a} *${Nsfww}*
┣⊱>  ${a}MODE ANTI BADWORD:${a} *${BadWordd}*
┣⊱>  ${a}MODE ANTI LINK:${a} *${AntiLinkk}*
┣⊱>  ${a}MODE ANTI VIRTEX:${a} *${AntiVirtexx}*
│
┣⊱>  ${a}JAM:${a} *${jam} WIB*
┣⊱>  ${a}TANGGAL:${a} *${tanggal}*
┣⊱>  ${a}AKTIF:${a} ${kyun(uptime)}
┣⊱>  ${a}VERSION:${a} *0.0.0*
┣⊱>  ${a}USER TERDAFTAR:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *ABOUT NEKO•BOT* 」
┴
┠─≽ *${prefix}mutualan*
│ ${a}Random Teman Chat${a}
│
┠─≽ *${prefix}report lapor bug*
│ ${a}Untuk Melaporkan Bug Ke Owner${a}
│
┠─≽ *${prefix}info*
│ ${a}Untuk Menampilkan Info Bot${a}
│
┠─≽ *${prefix}donasi*
│ ${a}Jika Berkenan Untuk Donasi${a}
│
┠─≽ *${prefix}owner*
│ ${a}Bot Mengirimkan Nomer Owner${a}
│
┠─≽ *${prefix}speed*
│ ${a}Twsting Respon Bot${a}
│
┠─≽ *${prefix}daftar*
│ ${a}Untuk Mendaftar Yg Belom Terdaftar${a}
│
┠─≽ *${prefix}limit*
│ ${a}Untuk Cek Limit Anda${a}
│
┠─≽ *${prefix}blocklist*
│ ${a}Check Kontak Kontak Yg Diblock${a}
│
┠─≽ *${prefix}banlist*
│ ${a}Check Kontak Yg Dibanned${a}
│
┠─≽ *${prefix}premiumlist*
│ ${a}Menampilkan list user premium${a}
│
┠─≽ *${prefix}bahasa*
│ ${a}Untuk Fitur text to speech${a}
│
┠─≽ *${prefix}wame*
│ ${a}Create Link Nomer WA Anda${a}
│
┠─≽ *${prefix}cekpremium*
│ ${a}Check expired title premium anda${a}
│
┠─≽ *${prefix}listbadword*
│ ${a}mengirimkan list badword${a}
┬
╰────────────────────────

╭──≽「 *FITUR SIMPLE NEKO•BOT* 」
┴
┠─≽ *${prefix}menucreator*
│ ${a}Fitur Image Maker${a}
│
┠─≽ *${prefix}menumedia*
│ ${a}Fitur Stalking & Downloader${a}
│
┠─≽ *${prefix}menugrup*
│ ${a}Fitur Khusus Di group${a}
│
┠─≽ *${prefix}menuothers*
│ ${a}Fitur Random${a}
│
┠─≽ *${prefix}menuprimbon*
│ ${a}Fitur primbon Jodoh, DLL${a}
│
┠─≽ *${prefix}menuinformasi*
│ ${a}Fitur Informasi cuaca, DLL${a}
│
┠─≽ *${prefix}menufun*
│ ${a}Fitur Untuk Game Bersama Teman${a}
│
┠─≽ *${prefix}menuscrapper*
│ ${a}Fitur scrapper${a}
│
┠─≽ *${prefix}menuencrypt*
│ ${a}Fitur Encrypt & Decrypt${a}
│
┠─≽ *${prefix}menuspam*
│ ${a}Fitur Spam${a}
│
┠─≽ *${prefix}menupremium*
│ ${a}Fitur Untuk User Premium${a}
│
┠─≽ *${prefix}menuowner*
│ ${a}Fitur Khusus Owner${a}
┬
╰────────────────────────

╭────≽「 🙌 *SUPPORTER* 」
┴
│➲ ${a}Cyda${a}
│➲ ${a}Nicholas Nugraha${a}
│➲ ${a}BROTHERHOOD${a}
┬
╰──────≽ *Created © NEKO•BOT*`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// info bot 
const bottt = (prefix) => {
return `
*NOTE:*
Jika Bot Ini Ada Di Grup Anda, Admin Grup Suruh Aktifkan Bot Dengan Cara *${prefix}bott aktif*

*Adapun Daftar Menu Yang Di Public Sama Owner Dan Bisa Kalian Gunakan Tanpa Di Group*

- ${prefix}brainly
- ${prefix}kalkulator
- ${prefix}ytsearch
- ${prefix}moddroid
- ${prefix}happymod
- ${prefix}playstore
- ${prefix}tanggaljadian
- ${prefix}stiker
- ${prefix}resepmasakan
- ${prefix}film
- ${prefix}infocuaca
- ${prefix}infogempa
- ${prefix}tahta
- ${prefix}igstalk
- ${prefix}tiktokstalk
- ${prefix}instastory
- ${prefix}translate
- ${prefix}quran
- ${prefix}tafsirquran
- ${prefix}lirik
- ${prefix}chord
- ${prefix}nulis
- ${prefix}puisiimg
- ${prefix}randomkpop
- ${prefix}quotes
- ${prefix}bucin
- ${prefix}artinama
- ${prefix}wattpad
- ${prefix}jarak
- ${prefix}infoalamat
- ${prefix}mimpi
- ${prefix}bacotandilan
- ${prefix}instavid
- ${prefix}instaimg

*Apa Yang Terbaru??*

~ random gambar KPOP ✓
~ random gambar EXO ✓
~ Fitur Anti virtex ✓
~ Fitur Anti Link ✓
~ Bacotan Dilan ✓
~ wattpad searching ✓
~ puisi dalam bentuk gambar ✓
~ Mencari resep masakan ✓
~ text to picture (bisa request warna) ✓
~ Tiktok scrapper ✓
~ instagram image downloader ✓ => command: ${prefix}instaimg link url
~ instagram video downloader ✓ => command: ${prefix}instavid link url

~ Resep Masakan ✓ => comand: ${prefix}resepmasakan rawon [ contoh]

~ Anti Virtex on/off ✓ command: ${prefix}antivirtex on
- *Gunakan Apabila Ada Yg Ngirim Virtex*

~ Anti Virtex ✓ => command: ${prefix}antivirtexx
- *Bot Akan Mengirimkan Teks Biar Member Tidak Mengalami Lag*

~ Xnxx scrapper ✓

`
}
exports.bottt = bottt
// donasi menu

const donasi = (name) => { 
	return `       
╭─≽「 *DONASI AGAR BOT TETAP ONLINE* 」
┴
│🔰 ${a}Pulsa: 085158342254${a}
│ *15k Invite Bot Ke Grup selama 1 bulan*
│
│🔰 ${a}OVO: 085158342254${a}
│ *10k Invite Bot Ke Group Selama 1 Bulan*
┬
╰─────≽「 *BY NEKO•BOT* 」

Untuk Kelangsungan Hidup Bot Karna Kuota Mahal:'
`
}
exports.donasi = donasi

const listsurah = () => {
return `
1. Al-Fatihah الفاتحة
2. Al-Baqarah البقرة
3. Ali ‘Imran آل عمران
4. An-Nisa’ النّساء
5. Al-Ma’idah المآئدة
6. Al-An’am الانعام
7. Al-A’raf الأعراف
8. Al-Anfal الأنفال
9. At-Taubah التوبة
10. Yunus ينوس
11. Hud هود
12. Yusuf يسوف
13. Ar-Ra’d الرّعد
14. Ibrahim إبراهيم
15. Al-Hijr الحجر
16. An-Nahl النّحل
17. Al-Isra’ بني إسرائيل
18. Al-Kahf الكهف
19. Maryam مريم
20. Ta Ha طه
21. Al-Anbiya الأنبياء
22. Al-Hajj الحجّ
23. Al-Mu’minun المؤمنون
24. An-Nur النّور
25. Al-Furqan الفرقان
26. Asy-Syu’ara’ الشّعراء
27. An-Naml النّمل
28. Al-Qasas القصص
29. Al-‘Ankabut العنكبوت
30. Ar-Rum الرّوم
31. Luqman لقمان
32. As-Sajdah السّجدة
33. Al-Ahzab الْأحزاب
34. Saba’ سبا
35. Fatir فاطر
36. Ya Sin يس
37. As-Saffat الصّافات
38. Sad ص
39. Az-Zumar الزّمر
40. Al-Mu’min المؤمن
41. Fussilat فصّلت
42. Asy-Syura الشّورى
43. Az-Zukhruf الزّخرف
44. Ad-Dukhan الدّخان
45. Al-Jasiyah الجاثية
46. Al-Ahqaf الَأحقاف
47. Muhammad محمّد
48. Al-Fath الفتح
49. Al-Hujurat الحجرات
50. Qaf ق
51. Az-Zariyat الذّاريات
52. At-Tur الطّور
53. An-Najm النّجْم
54. Al-Qamar القمر
55. Ar-Rahman الرّحْمن
56. Al-Waqi’ah الواقعه
57. Al-Hadid الحديد
58. Al-Mujadilah المجادلة
59. Al-Hasyr الحشْر
60. Al-Mumtahanah الممتحنة
61. As-Saff الصّفّ
62. Al-Jumu’ah الجمعة
63. Al-Munafiqun المنافقون
64. At-Tagabun التّغابن
65. At-Talaq الطّلاق
66. At-Tahrim التّحريم
67. Al-Mulk الملك
68. Al-Qalam القلم
69. Al-Haqqah الحآقّة
70. Al-Ma’arij المعارج
71. Nuh نوح
72. Al-Jinn الجنّ
73. Al-Muzzammil المزمّل
74. Al-Muddassir المدشّر
75. Al-Qiyamah القيمة
76. Al-Insan الْاٍنسان
77. Al-Mursalat المرسلات
78. An-Naba’ النّبا
79. An-Nazi’at النّازعات
80. ‘Abasa عبس
81. At-Takwir التّكوير
82. Al-Infitar الانفطار
83. Al-Tatfif المطفّفين
84. Al-Insyiqaq الانشقاق
85. Al-Buruj البروج
86. At-Tariq الطّارق
87. Al-A’la الْأعلى
88. Al-Gasyiyah الغاشية
89. Al-Fajr الفجر
90. Al-Balad البلد
91. Asy-Syams الشّمس
92. Al-Lail الّيل
93. Ad-Duha الضحى
94. Al-Insyirah الانشراح
95. At-Tin التِّينِ
96. Al-‘Alaq العَلَق
97. Al-Qadr الْقَدْرِ
98. Al-Bayyinah الْبَيِّنَةُ
99. Az-Zalzalah الزلزلة
100. Al-‘Adiyat العاديات
101. Al-Qari’ah القارعة
102. At-Takasur التكاثر
103. Al-‘Asr العصر
104. Al-Humazah الهُمَزة
105. Al-Fil الْفِيلِ
106. Quraisy قُرَيْشٍ
107. Al-Ma’un الْمَاعُونَ
108. Al-Kausar الكوثر
109. Al-Kafirun الْكَافِرُونَ
110. An-Nasr النصر
111. Al-Lahab المسد
112. Al-Ikhlas الإخلاص
113. Al-Falaq الْفَلَقِ
114. An-Nas نَاس
ِ`
}
exports.listsurah = listsurah

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitcount = (limitCounts) => {
        return`
*Limit Kamu:* ${limitCounts}
`
}
exports.limitcount = limitcount
