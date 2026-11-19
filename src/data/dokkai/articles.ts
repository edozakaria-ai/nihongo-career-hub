// ════════════════════════════════════════════════════════════════════
// Dokkai bergaya berita — ditulis orisinal oleh Nihongo Career Hub.
// Tidak menyalin artikel media mana pun. Furigana: 漢字{かんじ}.
// Menambah bacaan: salin satu blok { ... }, ganti isinya, tanggal terbaru tampil paling atas.
// Field grammar berisi slug pola dari tab Bunpou (mis. "n4-tara"); slug yang tidak ada diabaikan.
// ════════════════════════════════════════════════════════════════════
import type { NewsReading } from "./types";

export const ARTICLES: NewsReading[] = [
  {
    "id": "r-news-konbini",
    "slug": "konbini-buka-sepanjang-hari",
    "title": "コンビニは一日{いちにち}中{じゅう}開{あ}いている",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "date": "2026-11-19",
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "🏪",
      "from": "#6ee7b7",
      "to": "#059669"
    },
    "grammar": [
      "n5-ni-ga-arimasu",
      "n5-mo",
      "n5-teiru-keadaan",
      "n5-adj-na"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}には、コンビニがたくさんあります。町{まち}の中{なか}にも、駅{えき}の近{ちか}くにもあります。",
      "多{おお}くのコンビニは、朝{あさ}も夜{よる}も開{あ}いています。夜{よる}遅{おそ}い時間{じかん}にも、ご飯{はん}や飲{の}み物{もの}を売{う}っています。",
      "コンビニで、電気{でんき}のお金{かね}を払{はら}う人{ひと}もいます。",
      "コンビニはとても便利{べんり}です。"
    ],
    "translation": [
      "Di Jepang ada banyak minimarket. Ada di tengah kota, ada juga di dekat stasiun.",
      "Banyak minimarket buka pagi maupun malam. Larut malam pun mereka menjual makanan dan minuman.",
      "Ada juga orang yang membayar tagihan listrik di minimarket.",
      "Minimarket sangat praktis."
    ],
    "keyVocabulary": [
      {
        "word": "開く",
        "reading": "あく",
        "meaning": "terbuka, buka"
      },
      {
        "word": "遅い",
        "reading": "おそい",
        "meaning": "larut, terlambat"
      },
      {
        "word": "払う",
        "reading": "はらう",
        "meaning": "membayar"
      },
      {
        "word": "便利",
        "reading": "べんり",
        "meaning": "praktis"
      }
    ],
    "questions": [
      {
        "id": "n5k-1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "コンビニは いつ 開{あ}いていますか。",
        "options": [
          "朝だけ",
          "夜だけ",
          "朝も夜も",
          "日曜日だけ"
        ],
        "answerIndex": 2,
        "explanation": "Teks: 朝も夜も開いています."
      },
      {
        "id": "n5k-2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "文{ぶん}の内容{ないよう}と合{あ}っているものはどれですか。",
        "options": [
          "コンビニは駅の近くにない",
          "コンビニで電気のお金を払える",
          "コンビニは夜に閉まる",
          "日本にはコンビニが少ない"
        ],
        "answerIndex": 1,
        "explanation": "Teks: コンビニで、電気のお金を払う人もいます."
      }
    ]
  },
  {
    "id": "r-news-hanami",
    "slug": "hanami-musim-semi",
    "title": "春{はる}のお花見{はなみ}",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "date": "2026-11-18",
    "topic": "Budaya",
    "thumb": {
      "emoji": "🌸",
      "from": "#fbcfe8",
      "to": "#ec4899"
    },
    "grammar": [
      "n5-adj-na",
      "n5-tari-tari",
      "n5-he-ikimasu",
      "n5-ne-yo"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の春{はる}は、桜{さくら}の花{はな}がとてもきれいです。",
      "三月{さんがつ}の終{お}わりから四月{しがつ}のはじめに、たくさんの桜{さくら}が咲{さ}きます。",
      "このとき、人{ひと}は公園{こうえん}へ行{い}って、桜{さくら}の木{き}の下{した}でご飯{はん}を食{た}べたり、話{はな}したりします。これを「お花見{はなみ}」と言{い}います。",
      "夜{よる}の桜{さくら}も、とてもきれいですよ。"
    ],
    "translation": [
      "Musim semi di Jepang, bunga sakuranya sangat indah.",
      "Dari akhir Maret sampai awal April, banyak sakura mekar.",
      "Saat itu orang pergi ke taman, lalu makan dan mengobrol di bawah pohon sakura. Ini disebut “ohanami”.",
      "Sakura di malam hari juga sangat indah, lho."
    ],
    "keyVocabulary": [
      {
        "word": "桜",
        "reading": "さくら",
        "meaning": "sakura"
      },
      {
        "word": "咲く",
        "reading": "さく",
        "meaning": "mekar"
      },
      {
        "word": "公園",
        "reading": "こうえん",
        "meaning": "taman"
      },
      {
        "word": "お花見",
        "reading": "おはなみ",
        "meaning": "menikmati bunga sakura"
      }
    ],
    "questions": [
      {
        "id": "n5h-1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "桜{さくら}は いつ 咲{さ}きますか。",
        "options": [
          "一月",
          "三月の終わりから四月のはじめ",
          "八月",
          "十二月"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 三月の終わりから四月のはじめに…咲きます."
      },
      {
        "id": "n5h-2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "お花見{はなみ}で、人{ひと}は 何{なに}を しますか。",
        "options": [
          "学校で勉強します",
          "桜の木の下でご飯を食べます",
          "海で泳ぎます",
          "家で寝ます"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 桜の木の下でご飯を食べたり、話したりします."
      }
    ]
  },
  {
    "id": "r-news-wasuremono",
    "slug": "barang-ketinggalan-di-stasiun",
    "title": "駅{えき}に届{とど}く忘{わす}れ物{もの}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "date": "2026-11-17",
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "☂️",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "te-shimau",
      "n4-sou-katanya",
      "n4-tara",
      "n4-te-morau",
      "n5-deshou"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の駅{えき}や電車{でんしゃ}では、毎日{まいにち}たくさんの忘{わす}れ物{もの}が見{み}つかります。",
      "特{とく}に多{おお}いのは傘{かさ}です。雨{あめ}の日{ひ}に持{も}ってきて、帰{かえ}るときには晴{は}れていたので、忘{わす}れてしまう人{ひと}が多{おお}いそうです。",
      "見{み}つかった物{もの}は、しばらく駅{えき}で預{あず}かってもらえます。財布{さいふ}やスマホが持{も}ち主{ぬし}に戻{もど}ることも珍{めずら}しくありません。",
      "もし電車{でんしゃ}に物{もの}を忘{わす}れたら、すぐに駅員{えきいん}に相談{そうだん}するといいでしょう。"
    ],
    "translation": [
      "Di stasiun dan kereta di Jepang, setiap hari banyak barang ketinggalan ditemukan.",
      "Yang paling banyak adalah payung. Katanya banyak orang membawanya saat hujan, lalu lupa karena saat pulang cuacanya sudah cerah.",
      "Barang yang ditemukan disimpankan di stasiun untuk sementara. Dompet atau HP kembali ke pemiliknya pun bukan hal yang jarang.",
      "Kalau ketinggalan barang di kereta, sebaiknya segera berkonsultasi dengan petugas stasiun."
    ],
    "keyVocabulary": [
      {
        "word": "忘れ物",
        "reading": "わすれもの",
        "meaning": "barang ketinggalan"
      },
      {
        "word": "見つかる",
        "reading": "みつかる",
        "meaning": "ditemukan"
      },
      {
        "word": "預かる",
        "reading": "あずかる",
        "meaning": "menyimpan (titipan)"
      },
      {
        "word": "駅員",
        "reading": "えきいん",
        "meaning": "petugas stasiun"
      }
    ],
    "questions": [
      {
        "id": "n4w-1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "忘{わす}れ物{もの}の中{なか}で、特{とく}に 多{おお}いものは 何{なん}ですか。",
        "options": [
          "財布",
          "スマホ",
          "傘",
          "かばん"
        ],
        "answerIndex": 2,
        "explanation": "Teks: 特に多いのは傘です."
      },
      {
        "id": "n4w-2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "傘{かさ}を 忘{わす}れる 人{ひと}が 多{おお}い 理由{りゆう}は 何{なん}ですか。",
        "options": [
          "傘が安いから",
          "帰るときに晴れていたから",
          "駅に傘が多いから",
          "傘が重いから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 帰るときには晴れていたので、忘れてしまう."
      }
    ]
  },
  {
    "id": "r-news-jihanki",
    "slug": "negeri-mesin-penjual-otomatis",
    "title": "自動販売機{じどうはんばいき}の多{おお}い国{くに}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "date": "2026-11-16",
    "topic": "Budaya",
    "thumb": {
      "emoji": "🥤",
      "from": "#fde68a",
      "to": "#f59e0b"
    },
    "grammar": [
      "n4-to-joken",
      "n4-kanou-kei",
      "n4-ukemi",
      "n4-te-iku-kuru"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の町{まち}を歩{ある}くと、あちこちで自動販売機{じどうはんばいき}を見{み}かけます。",
      "冬{ふゆ}には、温{あたた}かいコーヒーやお茶{ちゃ}も買{か}えます。",
      "自動販売機{じどうはんばいき}が多{おお}いのは、町{まち}が安全{あんぜん}で、機械{きかい}が壊{こわ}されることが少{すく}ないからだと言{い}われています。",
      "最近{さいきん}は、スマホで払{はら}える機械{きかい}も増{ふ}えてきました。"
    ],
    "translation": [
      "Kalau berjalan di kota-kota Jepang, mesin penjual otomatis terlihat di mana-mana.",
      "Di musim dingin, kopi dan teh hangat pun bisa dibeli.",
      "Konon mesin penjual otomatis banyak karena kotanya aman dan mesinnya jarang dirusak.",
      "Akhir-akhir ini, mesin yang bisa dibayar dengan HP juga makin banyak."
    ],
    "keyVocabulary": [
      {
        "word": "自動販売機",
        "reading": "じどうはんばいき",
        "meaning": "mesin penjual otomatis"
      },
      {
        "word": "見かける",
        "reading": "みかける",
        "meaning": "(kebetulan) melihat"
      },
      {
        "word": "安全",
        "reading": "あんぜん",
        "meaning": "aman"
      },
      {
        "word": "増える",
        "reading": "ふえる",
        "meaning": "bertambah"
      }
    ],
    "questions": [
      {
        "id": "n4j-1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "冬{ふゆ}の 自動販売機{じどうはんばいき}について、正{ただ}しいものは どれですか。",
        "options": [
          "冷たい飲み物しかない",
          "温かい飲み物も買える",
          "機械が止まる",
          "スマホは使えない"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 冬には、温かいコーヒーやお茶も買えます."
      },
      {
        "id": "n4j-2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "自動販売機{じどうはんばいき}が 多{おお}い 理由{りゆう}として、文{ぶん}に 書{か}いてあるのは どれですか。",
        "options": [
          "町が安全だから",
          "飲み物が安いから",
          "人が少ないから",
          "電気が安いから"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 町が安全で、機械が壊されることが少ないから."
      }
    ]
  },
  {
    "id": "r-news-gaikokujin",
    "slug": "pekerja-asing-terus-bertambah",
    "title": "増{ふ}え続{つづ}ける外国人{がいこくじん}の働{はたら}き手{て}",
    "level": "N3",
    "minutes": 6,
    "difficulty": 3,
    "date": "2026-11-15",
    "topic": "Kerja",
    "thumb": {
      "emoji": "👷",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-ni-yotte",
      "n4-te-morau",
      "n3-ippou-de",
      "n3-ni-totte",
      "n5-tari-tari"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}では、少子高齢化{しょうしこうれいか}によって、働{はたら}く人{ひと}が足{た}りない会社{かいしゃ}が増{ふ}えている。",
      "そのため、外国{がいこく}から来{き}た人{ひと}に働{はたら}いてもらう会社{かいしゃ}が多{おお}くなった。特{とく}に工場{こうじょう}や介護{かいご}、建設{けんせつ}の現場{げんば}では、ベトナムやインドネシアなどから来{き}た人{ひと}が活躍{かつやく}している。",
      "一方{いっぽう}で、言葉{ことば}や生活{せいかつ}習慣{しゅうかん}の違{ちが}いに悩{なや}む人{ひと}も少{すく}なくない。会社{かいしゃ}にとっては、日本語{にほんご}の勉強{べんきょう}を支援{しえん}したり、相談{そうだん}できる窓口{まどぐち}を作{つく}ったりすることが大切{たいせつ}だ。",
      "通訳{つうやく}や翻訳{ほんやく}ができる人材{じんざい}は、これからますます必要{ひつよう}になるだろう。"
    ],
    "translation": [
      "Di Jepang, akibat menurunnya angka kelahiran dan menuanya penduduk, perusahaan yang kekurangan pekerja terus bertambah.",
      "Karena itu, makin banyak perusahaan yang mempekerjakan orang dari luar negeri. Terutama di pabrik, perawatan lansia, dan lokasi konstruksi, orang-orang dari Vietnam, Indonesia, dan negara lain berperan aktif.",
      "Di sisi lain, tidak sedikit yang kesulitan karena perbedaan bahasa dan kebiasaan hidup. Bagi perusahaan, penting untuk mendukung belajar bahasa Jepang dan menyediakan layanan konsultasi.",
      "Tenaga yang bisa menjadi interpreter atau penerjemah akan semakin dibutuhkan ke depannya."
    ],
    "keyVocabulary": [
      {
        "word": "少子高齢化",
        "reading": "しょうしこうれいか",
        "meaning": "penurunan kelahiran & penuaan penduduk"
      },
      {
        "word": "働き手",
        "reading": "はたらきて",
        "meaning": "tenaga kerja"
      },
      {
        "word": "活躍",
        "reading": "かつやく",
        "meaning": "berperan aktif"
      },
      {
        "word": "窓口",
        "reading": "まどぐち",
        "meaning": "loket / layanan konsultasi"
      },
      {
        "word": "人材",
        "reading": "じんざい",
        "meaning": "SDM, tenaga ahli"
      }
    ],
    "questions": [
      {
        "id": "n3g-1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "働{はたら}く人{ひと}が足{た}りない理由{りゆう}は何{なん}ですか。",
        "options": [
          "給料が安いから",
          "少子高齢化のため",
          "工場が多いから",
          "外国人が多いから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 少子高齢化によって、働く人が足りない."
      },
      {
        "id": "n3g-2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "会社{かいしゃ}にとって大切{たいせつ}なことは何{なん}だと書{か}いてありますか。",
        "options": [
          "外国人を減らすこと",
          "日本語の勉強を支援すること",
          "給料を下げること",
          "工場を閉めること"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 日本語の勉強を支援したり…することが大切だ."
      }
    ]
  },
  {
    "id": "r-news-bousai",
    "slug": "hari-pencegahan-bencana",
    "title": "九月一日{くがつついたち}は「防災{ぼうさい}の日{ひ}」",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "date": "2026-11-14",
    "topic": "Keselamatan",
    "thumb": {
      "emoji": "🧯",
      "from": "#fecaca",
      "to": "#dc2626"
    },
    "grammar": [
      "n2-koto-kara",
      "n3-wo-chuushin-ni",
      "n4-ukemi",
      "n4-te-oku",
      "n4-ba"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "毎年{まいとし}九月一日{くがつついたち}は「防災{ぼうさい}の日{ひ}」だ。1923年{ねん}のこの日{ひ}に関東大震災{かんとうだいしんさい}が起{お}きたことから、この日{ひ}に決{き}められた。",
      "この日{ひ}を中心{ちゅうしん}に、学校{がっこう}や会社{かいしゃ}では避難訓練{ひなんくんれん}が行{おこな}われる。地震{じしん}が起{お}きたとき、どこへ逃{に}げればいいかを確認{かくにん}しておくためだ。",
      "家庭{かてい}でも、水{みず}や食{た}べ物{もの}、懐中電灯{かいちゅうでんとう}などを準備{じゅんび}しておくことが勧{すす}められている。",
      "日本{にほん}に住{す}む外国人{がいこくじん}も、住{す}んでいる町{まち}の避難所{ひなんじょ}を一度{いちど}調{しら}べておくと安心{あんしん}だ。"
    ],
    "translation": [
      "Setiap 1 September adalah “Hari Pencegahan Bencana”. Hari ini ditetapkan karena pada tanggal ini tahun 1923 terjadi Gempa Besar Kanto.",
      "Sekitar hari ini, sekolah dan perusahaan mengadakan latihan evakuasi, untuk memastikan ke mana harus menyelamatkan diri saat gempa.",
      "Di rumah pun dianjurkan menyiapkan air, makanan, senter, dan lain-lain.",
      "Orang asing yang tinggal di Jepang juga akan lebih tenang bila sekali saja mengecek tempat pengungsian di kotanya."
    ],
    "keyVocabulary": [
      {
        "word": "防災",
        "reading": "ぼうさい",
        "meaning": "pencegahan bencana"
      },
      {
        "word": "避難訓練",
        "reading": "ひなんくんれん",
        "meaning": "latihan evakuasi"
      },
      {
        "word": "懐中電灯",
        "reading": "かいちゅうでんとう",
        "meaning": "senter"
      },
      {
        "word": "避難所",
        "reading": "ひなんじょ",
        "meaning": "tempat pengungsian"
      }
    ],
    "questions": [
      {
        "id": "n3b-1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "九月一日{くがつついたち}が「防災{ぼうさい}の日{ひ}」になった理由{りゆう}は何{なん}ですか。",
        "options": [
          "台風が多い日だから",
          "関東大震災が起きた日だから",
          "学校が始まる日だから",
          "地震の研究が始まった日だから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 1923年のこの日に関東大震災が起きたことから."
      },
      {
        "id": "n3b-2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "家庭{かてい}で準備{じゅんび}しておくといい物{もの}として、書{か}いていないものはどれですか。",
        "options": [
          "水",
          "食べ物",
          "懐中電灯",
          "テレビ"
        ],
        "answerIndex": 3,
        "explanation": "Teks menyebut 水・食べ物・懐中電灯; テレビ tidak disebut."
      }
    ]
  },
  {
    "id": "r-news-jidouka",
    "slug": "otomatisasi-pabrik",
    "title": "人手{ひとで}不足{ぶそく}で進{すす}む工場{こうじょう}の自動化{じどうか}",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "date": "2026-11-13",
    "topic": "Manufaktur",
    "thumb": {
      "emoji": "🤖",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-ni-tomonatte",
      "n2-tsutsu-aru",
      "n2-hanmen",
      "n3-kara-to-itte",
      "n2-ni-motozuite"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "製造業{せいぞうぎょう}では、人手{ひとで}不足{ぶそく}が深刻{しんこく}になるに伴{ともな}い、ロボットやAIを導入{どうにゅう}する工場{こうじょう}が増{ふ}えつつある。",
      "重{おも}い部品{ぶひん}の運搬{うんぱん}や、同{おな}じ作業{さぎょう}を繰{く}り返{かえ}す工程{こうてい}を機械{きかい}に任{まか}せることで、作業者{さぎょうしゃ}の負担{ふたん}を減{へ}らすことができる。",
      "その反面{はんめん}、機械{きかい}を操作{そうさ}・保守{ほしゅ}できる技術者{ぎじゅつしゃ}の育成{いくせい}が追{お}いついていないという課題{かだい}もある。",
      "自動化{じどうか}が進{すす}んだからといって、人{ひと}の仕事{しごと}がなくなるわけではない。現場{げんば}の経験{けいけん}に基{もと}づいて改善{かいぜん}を考{かんが}える力{ちから}は、今後{こんご}ますます求{もと}められるだろう。"
    ],
    "translation": [
      "Di industri manufaktur, seiring makin seriusnya kekurangan tenaga kerja, pabrik yang menerapkan robot dan AI terus bertambah.",
      "Dengan menyerahkan pengangkutan komponen berat atau proses yang mengulang pekerjaan sama kepada mesin, beban pekerja bisa dikurangi.",
      "Di sisi lain, ada tantangan: pembinaan teknisi yang mampu mengoperasikan dan merawat mesin belum terkejar.",
      "Hanya karena otomatisasi berkembang, bukan berarti pekerjaan manusia hilang. Kemampuan memikirkan perbaikan berdasarkan pengalaman di lapangan akan semakin dibutuhkan."
    ],
    "keyVocabulary": [
      {
        "word": "人手不足",
        "reading": "ひとでぶそく",
        "meaning": "kekurangan tenaga kerja"
      },
      {
        "word": "導入",
        "reading": "どうにゅう",
        "meaning": "penerapan"
      },
      {
        "word": "工程",
        "reading": "こうてい",
        "meaning": "proses (produksi)"
      },
      {
        "word": "保守",
        "reading": "ほしゅ",
        "meaning": "perawatan (maintenance)"
      },
      {
        "word": "育成",
        "reading": "いくせい",
        "meaning": "pembinaan"
      }
    ],
    "questions": [
      {
        "id": "n2j-1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "自動化{じどうか}の課題{かだい}として挙{あ}げられているのはどれか。",
        "options": [
          "ロボットが高すぎること",
          "技術者の育成が追いついていないこと",
          "部品が足りないこと",
          "工場が狭いこと"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 技術者の育成が追いついていないという課題もある."
      },
      {
        "id": "n2j-2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}の考{かんが}えに合{あ}うものはどれか。",
        "options": [
          "自動化で人の仕事はすべてなくなる",
          "現場の経験に基づく改善力が必要になる",
          "ロボットは使わないほうがいい",
          "技術者はもう必要ない"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 現場の経験に基づいて改善を考える力は、今後ますます求められる."
      }
    ]
  },
  {
    "id": "r-news-foodloss",
    "slug": "mengurangi-food-loss",
    "title": "食品{しょくひん}ロス削減{さくげん}への取{と}り組{く}み",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "date": "2026-11-12",
    "topic": "Lingkungan",
    "thumb": {
      "emoji": "🍱",
      "from": "#bbf7d0",
      "to": "#16a34a"
    },
    "grammar": [
      "n4-noni-padahal",
      "n3-ni-oite",
      "n2-ni-suginai",
      "n2-shidai-da",
      "n4-hazu"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "まだ食{た}べられるのに捨{す}てられてしまう食品{しょくひん}、いわゆる「食品{しょくひん}ロス」が社会{しゃかい}問題{もんだい}となっている。",
      "コンビニやスーパーでは、販売{はんばい}期限{きげん}が近{ちか}い商品{しょうひん}を値引{ねび}きしたり、ポイントを付{つ}けたりする動{うご}きが広{ひろ}がっている。",
      "また、家庭{かてい}においても、買{か}いすぎないことや、賞味期限{しょうみきげん}と消費期限{しょうひきげん}の違{ちが}いを正{ただ}しく理解{りかい}することが求{もと}められている。",
      "賞味期限{しょうみきげん}はおいしく食{た}べられる目安{めやす}にすぎず、過{す}ぎてもすぐに食{た}べられなくなるわけではない。一人{ひとり}ひとりの意識{いしき}次第{しだい}で、ロスは確実{かくじつ}に減{へ}らせるはずだ。"
    ],
    "translation": [
      "Makanan yang dibuang padahal masih bisa dimakan, yang disebut “food loss”, telah menjadi masalah sosial.",
      "Di minimarket dan supermarket, makin banyak upaya memberi diskon atau poin pada produk yang mendekati batas penjualan.",
      "Selain itu, di rumah tangga pun dituntut untuk tidak membeli berlebihan dan memahami dengan benar perbedaan batas terbaik konsumsi dan batas aman konsumsi.",
      "Batas terbaik konsumsi hanyalah patokan agar makanan enak dimakan; lewat dari tanggal itu bukan berarti langsung tidak bisa dimakan. Tergantung kesadaran setiap orang, food loss pasti bisa dikurangi."
    ],
    "keyVocabulary": [
      {
        "word": "食品ロス",
        "reading": "しょくひんロス",
        "meaning": "food loss (makanan terbuang)"
      },
      {
        "word": "値引き",
        "reading": "ねびき",
        "meaning": "diskon"
      },
      {
        "word": "賞味期限",
        "reading": "しょうみきげん",
        "meaning": "batas terbaik dikonsumsi"
      },
      {
        "word": "消費期限",
        "reading": "しょうひきげん",
        "meaning": "batas aman dikonsumsi"
      },
      {
        "word": "目安",
        "reading": "めやす",
        "meaning": "patokan"
      }
    ],
    "questions": [
      {
        "id": "n2f-1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "賞味期限{しょうみきげん}について、本文{ほんぶん}の内容{ないよう}と合{あ}うものはどれか。",
        "options": [
          "過ぎたらすぐ捨てなければならない",
          "おいしく食べられる目安である",
          "消費期限と同じ意味である",
          "法律で決められた販売日である"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 賞味期限はおいしく食べられる目安にすぎず."
      },
      {
        "id": "n2f-2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "店{みせ}の取{と}り組{く}みとして書{か}かれているものはどれか。",
        "options": [
          "期限が近い商品を値引きする",
          "商品を減らす",
          "店を早く閉める",
          "期限を延ばす"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 販売期限が近い商品を値引きしたり."
      }
    ]
  },
];
