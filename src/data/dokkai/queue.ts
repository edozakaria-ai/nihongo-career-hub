// ════════════════════════════════════════════════════════════════════
// ANTREAN BACAAN DOKKAI — terbit otomatis 2 bacaan per level per hari.
// Ditulis orisinal oleh Nihongo Career Hub (tidak menyalin artikel media mana pun).
//
// ATURAN PENTING:
// 1. Bacaan di sini TIDAK punya field "date". Tanggal terbit dihitung otomatis
//    dari urutan per level (lihat schedule.ts).
// 2. Tambahkan bacaan baru SELALU DI BAGIAN PALING BAWAH (sebelum "];").
//    Menyisipkan di tengah atau menghapus bacaan lama akan menggeser tanggal
//    terbit bacaan sesudahnya.
// 3. Slug harus unik. Furigana: 漢字{かんじ}.
// ════════════════════════════════════════════════════════════════════
import type { QueuedReading } from "./types";

export const QUEUE: QueuedReading[] = [
  {
    "id": "r-q-ekiben-bento-stasiun",
    "slug": "ekiben-bento-stasiun",
    "title": "駅弁{えきべん}を知{し}っていますか",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Makanan",
    "thumb": {
      "emoji": "🍱",
      "from": "#bbf7d0",
      "to": "#22c55e"
    },
    "grammar": [
      "n5-de-tempat",
      "n5-arimasu-imasu",
      "n5-adj-i"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "駅弁{えきべん}は、駅{えき}で売{う}っているお弁当{べんとう}です。",
      "新幹線{しんかんせん}の中{なか}で、駅弁{えきべん}を食{た}べる人{ひと}がたくさんいます。",
      "どの町{まち}にも、その町{まち}の駅弁{えきべん}があります。旅行{りょこう}のとき、いろいろな駅弁{えきべん}を食{た}べるのは楽{たの}しいです。"
    ],
    "translation": [
      "Ekiben adalah bento yang dijual di stasiun.",
      "Banyak orang makan ekiben di dalam shinkansen.",
      "Setiap kota punya ekiben khas kotanya sendiri. Saat bepergian, makan berbagai ekiben itu menyenangkan."
    ],
    "keyVocabulary": [
      {
        "word": "駅弁",
        "reading": "えきべん",
        "meaning": "bento stasiun"
      },
      {
        "word": "新幹線",
        "reading": "しんかんせん",
        "meaning": "shinkansen"
      },
      {
        "word": "旅行",
        "reading": "りょこう",
        "meaning": "perjalanan"
      }
    ],
    "questions": [
      {
        "id": "ekiben-bento-stasiun-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "駅弁{えきべん}は どこで 売{う}っていますか。",
        "options": [
          "駅",
          "学校",
          "病院",
          "銀行"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 駅弁は、駅で売っているお弁当です."
      },
      {
        "id": "ekiben-bento-stasiun-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "旅行{りょこう}のとき、何{なに}が 楽{たの}しいですか。",
        "options": [
          "新幹線で寝ること",
          "いろいろな駅弁を食べること",
          "駅で働くこと",
          "お弁当を作ること"
        ],
        "answerIndex": 1,
        "explanation": "Teks: いろいろな駅弁を食べるのは楽しいです."
      }
    ]
  },
  {
    "id": "r-q-hari-buang-sampah",
    "slug": "hari-buang-sampah",
    "title": "ゴミを出{だ}す日{ひ}",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "♻️",
      "from": "#d9f99d",
      "to": "#65a30d"
    },
    "grammar": [
      "n5-mae-ni",
      "n5-wo-objek",
      "n5-ni-waktu"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}では、ゴミを出{だ}す日{ひ}が決{き}まっています。",
      "たとえば、私{わたし}の町{まち}では、月曜日{げつようび}と木曜日{もくようび}は燃{も}えるゴミ、水曜日{すいようび}はプラスチックのゴミを出{だ}します。",
      "ゴミは朝{あさ}八時{はちじ}の前{まえ}に出{だ}してください。日本{にほん}に来{き}たら、町{まち}のルールを見{み}てください。"
    ],
    "translation": [
      "Di Jepang, hari membuang sampah sudah ditentukan.",
      "Misalnya, di kota saya, hari Senin dan Kamis untuk sampah yang bisa dibakar, hari Rabu untuk sampah plastik.",
      "Tolong buang sampah sebelum jam delapan pagi. Kalau datang ke Jepang, tolong lihat aturan kotanya."
    ],
    "keyVocabulary": [
      {
        "word": "燃える",
        "reading": "もえる",
        "meaning": "terbakar"
      },
      {
        "word": "決まる",
        "reading": "きまる",
        "meaning": "ditentukan"
      },
      {
        "word": "出す",
        "reading": "だす",
        "meaning": "mengeluarkan, membuang (sampah)"
      }
    ],
    "questions": [
      {
        "id": "hari-buang-sampah-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "この町{まち}で、水曜日{すいようび}に出{だ}すゴミは何{なん}ですか。",
        "options": [
          "燃えるゴミ",
          "プラスチックのゴミ",
          "古い本",
          "何も出しません"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 水曜日はプラスチックのゴミを出します."
      },
      {
        "id": "hari-buang-sampah-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "ゴミは 何時{なんじ}の前{まえ}に出{だ}しますか。",
        "options": [
          "七時",
          "八時",
          "九時",
          "十時"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 朝八時の前に出してください."
      }
    ]
  },
  {
    "id": "r-q-sopan-santun-di-kereta",
    "slug": "sopan-santun-di-kereta",
    "title": "電車{でんしゃ}の中{なか}のマナー",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "🚃",
      "from": "#a7f3d0",
      "to": "#059669"
    },
    "grammar": [
      "n5-adj-na",
      "n5-naide-kudasai",
      "n5-mo"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の電車{でんしゃ}の中{なか}は、とても静{しず}かです。",
      "電車{でんしゃ}の中{なか}で、電話{でんわ}で話{はな}す人{ひと}はあまりいません。大{おお}きい声{こえ}で話{はな}さないでください。",
      "お年寄{としよ}りや体{からだ}の悪{わる}い人{ひと}のための席{せき}もあります。"
    ],
    "translation": [
      "Di dalam kereta Jepang sangat tenang.",
      "Di dalam kereta, jarang ada orang yang bicara di telepon. Tolong jangan bicara dengan suara keras.",
      "Ada juga kursi khusus untuk lansia dan orang yang kondisi tubuhnya kurang baik."
    ],
    "keyVocabulary": [
      {
        "word": "静か",
        "reading": "しずか",
        "meaning": "tenang"
      },
      {
        "word": "声",
        "reading": "こえ",
        "meaning": "suara"
      },
      {
        "word": "席",
        "reading": "せき",
        "meaning": "kursi, tempat duduk"
      }
    ],
    "questions": [
      {
        "id": "sopan-santun-di-kereta-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "日本{にほん}の電車{でんしゃ}の中{なか}は どうですか。",
        "options": [
          "うるさい",
          "静か",
          "暑い",
          "暗い"
        ],
        "answerIndex": 1,
        "explanation": "Teks: とても静かです."
      },
      {
        "id": "sopan-santun-di-kereta-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "電車{でんしゃ}の中{なか}で しないほうが いいことは 何{なん}ですか。",
        "options": [
          "本を読むこと",
          "大きい声で話すこと",
          "座ること",
          "寝ること"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 大きい声で話さないでください."
      }
    ]
  },
  {
    "id": "r-q-pasar-pagi-hari-minggu",
    "slug": "pasar-pagi-hari-minggu",
    "title": "日曜日{にちようび}の朝市{あさいち}",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Budaya",
    "thumb": {
      "emoji": "🥕",
      "from": "#fde68a",
      "to": "#84cc16"
    },
    "grammar": [
      "n5-yori-hou",
      "n5-ya-nado",
      "n5-ni-ga-arimasu"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "私{わたし}の町{まち}では、日曜日{にちようび}の朝{あさ}に市場{いちば}があります。",
      "野菜{やさい}や果物{くだもの}、魚{さかな}などを売{う}っています。スーパーより安{やす}くて新{あたら}しいです。",
      "私{わたし}は毎週{まいしゅう}母{はは}と行{い}きます。お店{みせ}の人{ひと}と話{はな}すのも楽{たの}しいです。"
    ],
    "translation": [
      "Di kota saya, ada pasar setiap Minggu pagi.",
      "Mereka menjual sayur, buah, ikan, dan lain-lain. Lebih murah dan lebih segar daripada supermarket.",
      "Saya pergi setiap minggu bersama ibu. Mengobrol dengan penjualnya juga menyenangkan."
    ],
    "keyVocabulary": [
      {
        "word": "市場",
        "reading": "いちば",
        "meaning": "pasar"
      },
      {
        "word": "果物",
        "reading": "くだもの",
        "meaning": "buah"
      },
      {
        "word": "毎週",
        "reading": "まいしゅう",
        "meaning": "setiap minggu"
      }
    ],
    "questions": [
      {
        "id": "pasar-pagi-hari-minggu-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "市場{いちば}は いつ ありますか。",
        "options": [
          "土曜日の夜",
          "日曜日の朝",
          "毎日",
          "月曜日の朝"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 日曜日の朝に市場があります."
      },
      {
        "id": "pasar-pagi-hari-minggu-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "市場{いちば}の野菜{やさい}は スーパーと くらべて どうですか。",
        "options": [
          "高い",
          "安くて新しい",
          "古い",
          "少ない"
        ],
        "answerIndex": 1,
        "explanation": "Teks: スーパーより安くて新しいです."
      }
    ]
  },
  {
    "id": "r-q-sebelum-masuk-onsen",
    "slug": "sebelum-masuk-onsen",
    "title": "温泉{おんせん}に入{はい}る前{まえ}に",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Budaya",
    "thumb": {
      "emoji": "♨️",
      "from": "#99f6e4",
      "to": "#0d9488"
    },
    "grammar": [
      "n5-mae-ni",
      "n5-naide-kudasai",
      "n5-ta-ato-de"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}には温泉{おんせん}がたくさんあります。",
      "温泉{おんせん}に入{はい}る前{まえ}に、体{からだ}を洗{あら}います。タオルはお湯{ゆ}の中{なか}に入{い}れないでください。",
      "温泉{おんせん}のあとで、冷{つめ}たい牛乳{ぎゅうにゅう}を飲{の}む人{ひと}も多{おお}いです。"
    ],
    "translation": [
      "Di Jepang ada banyak pemandian air panas.",
      "Sebelum masuk onsen, kita mencuci badan. Tolong jangan masukkan handuk ke dalam air panas.",
      "Banyak juga orang yang minum susu dingin setelah berendam di onsen."
    ],
    "keyVocabulary": [
      {
        "word": "温泉",
        "reading": "おんせん",
        "meaning": "pemandian air panas"
      },
      {
        "word": "洗う",
        "reading": "あらう",
        "meaning": "mencuci"
      },
      {
        "word": "お湯",
        "reading": "おゆ",
        "meaning": "air panas"
      }
    ],
    "questions": [
      {
        "id": "sebelum-masuk-onsen-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "温泉{おんせん}に入{はい}る前{まえ}に 何{なに}を しますか。",
        "options": [
          "牛乳を飲みます",
          "体を洗います",
          "寝ます",
          "タオルを入れます"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 温泉に入る前に、体を洗います."
      },
      {
        "id": "sebelum-masuk-onsen-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "お湯{ゆ}の中{なか}に 入{い}れては いけない ものは 何{なん}ですか。",
        "options": [
          "体",
          "タオル",
          "足",
          "手"
        ],
        "answerIndex": 1,
        "explanation": "Teks: タオルはお湯の中に入れないでください."
      }
    ]
  },
  {
    "id": "r-q-juni-musim-hujan",
    "slug": "juni-musim-hujan",
    "title": "六月{ろくがつ}は雨{あめ}の季節{きせつ}",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Cuaca",
    "thumb": {
      "emoji": "☔",
      "from": "#bae6fd",
      "to": "#10b981"
    },
    "grammar": [
      "n5-kara-alasan",
      "n5-adj-na",
      "n5-wa-desu"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の六月{ろくがつ}は、雨{あめ}がよく降{ふ}ります。この季節{きせつ}を「梅雨{つゆ}」と言{い}います。",
      "毎日{まいにち}雨{あめ}ですから、洗濯物{せんたくもの}がなかなか乾{かわ}きません。",
      "でも、雨{あめ}の中{なか}のあじさいの花{はな}はとてもきれいです。"
    ],
    "translation": [
      "Di Jepang, bulan Juni sering hujan. Musim ini disebut “tsuyu”.",
      "Karena hujan setiap hari, cucian susah kering.",
      "Tetapi bunga ajisai (hortensia) di tengah hujan sangat indah."
    ],
    "keyVocabulary": [
      {
        "word": "梅雨",
        "reading": "つゆ",
        "meaning": "musim hujan (Juni–Juli)"
      },
      {
        "word": "季節",
        "reading": "きせつ",
        "meaning": "musim"
      },
      {
        "word": "乾く",
        "reading": "かわく",
        "meaning": "kering"
      }
    ],
    "questions": [
      {
        "id": "juni-musim-hujan-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "「梅雨{つゆ}」は 何月{なんがつ}ですか。",
        "options": [
          "一月",
          "四月",
          "六月",
          "十月"
        ],
        "answerIndex": 2,
        "explanation": "Teks: 日本の六月は、雨がよく降ります…「梅雨」."
      },
      {
        "id": "juni-musim-hujan-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "梅雨{つゆ}のとき、何{なに}が 困{こま}りますか。",
        "options": [
          "花がきれいなこと",
          "洗濯物が乾かないこと",
          "暑いこと",
          "雪が降ること"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 洗濯物がなかなか乾きません."
      }
    ]
  },
  {
    "id": "r-q-festival-musim-panas",
    "slug": "festival-musim-panas",
    "title": "日本{にほん}の夏祭{なつまつ}り",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Budaya",
    "thumb": {
      "emoji": "🏮",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-to-joken",
      "n4-ukemi",
      "n4-te-miru",
      "n4-nara"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "夏{なつ}になると、日本{にほん}の各地{かくち}で夏祭{なつまつ}りが開{ひら}かれます。",
      "浴衣{ゆかた}を着{き}て出{で}かける人{ひと}も多{おお}く、屋台{やたい}ではたこ焼{や}きやかき氷{ごおり}などが売{う}られています。",
      "祭{まつ}りの最後{さいご}には花火{はなび}が上{あ}がることもあります。日本{にほん}に住{す}んでいるなら、一度{いちど}行{い}ってみるといいでしょう。"
    ],
    "translation": [
      "Kalau sudah musim panas, festival musim panas diadakan di berbagai daerah di Jepang.",
      "Banyak orang pergi memakai yukata, dan di kios-kios dijual takoyaki, es serut, dan lain-lain.",
      "Di akhir festival kadang ada kembang api. Kalau tinggal di Jepang, sebaiknya coba datang sekali."
    ],
    "keyVocabulary": [
      {
        "word": "浴衣",
        "reading": "ゆかた",
        "meaning": "yukata (kimono musim panas)"
      },
      {
        "word": "屋台",
        "reading": "やたい",
        "meaning": "kios makanan"
      },
      {
        "word": "花火",
        "reading": "はなび",
        "meaning": "kembang api"
      }
    ],
    "questions": [
      {
        "id": "festival-musim-panas-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "祭{まつ}りで 屋台{やたい}は 何{なに}を していますか。",
        "options": [
          "花火を上げている",
          "食べ物を売っている",
          "浴衣を作っている",
          "道を掃除している"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 屋台ではたこ焼きやかき氷などが売られています."
      },
      {
        "id": "festival-musim-panas-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}は 日本{にほん}に住{す}んでいる人{ひと}に 何{なに}を すすめていますか。",
        "options": [
          "浴衣を買うこと",
          "祭りに一度行ってみること",
          "かき氷を作ること",
          "花火を見ないこと"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 一度行ってみるといいでしょう."
      }
    ]
  },
  {
    "id": "r-q-kantong-plastik-berbayar",
    "slug": "kantong-plastik-berbayar",
    "title": "レジ袋{ぶくろ}が有料{ゆうりょう}になって",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Lingkungan",
    "thumb": {
      "emoji": "🛍️",
      "from": "#a5f3fc",
      "to": "#0891b2"
    },
    "grammar": [
      "n4-node",
      "n4-te-oku",
      "n5-naru"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}では2020年{ねん}から、店{みせ}のレジ袋{ぶくろ}が有料{ゆうりょう}になりました。",
      "そのため、自分{じぶん}の袋{ふくろ}を持{も}って買{か}い物{もの}に行{い}く人{ひと}が増{ふ}えました。",
      "小{ちい}さく折{お}りたためるエコバッグは、かばんに入{い}れておけるので便利{べんり}です。"
    ],
    "translation": [
      "Di Jepang, sejak tahun 2020 kantong plastik di toko menjadi berbayar.",
      "Karena itu, orang yang berbelanja membawa tas sendiri bertambah.",
      "Tas belanja yang bisa dilipat kecil praktis karena bisa disimpan di dalam tas."
    ],
    "keyVocabulary": [
      {
        "word": "有料",
        "reading": "ゆうりょう",
        "meaning": "berbayar"
      },
      {
        "word": "増える",
        "reading": "ふえる",
        "meaning": "bertambah"
      },
      {
        "word": "折りたたむ",
        "reading": "おりたたむ",
        "meaning": "melipat"
      }
    ],
    "questions": [
      {
        "id": "kantong-plastik-berbayar-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "レジ袋{ぶくろ}が有料{ゆうりょう}になって、どうなりましたか。",
        "options": [
          "袋を持って行く人が増えた",
          "買い物をする人が減った",
          "店が閉まった",
          "袋が安くなった"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 自分の袋を持って買い物に行く人が増えました."
      },
      {
        "id": "kantong-plastik-berbayar-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "エコバッグが便利{べんり}な理由{りゆう}は何{なん}ですか。",
        "options": [
          "色がきれいだから",
          "かばんに入れておけるから",
          "無料だから",
          "大きいから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: かばんに入れておけるので便利です."
      }
    ]
  },
  {
    "id": "r-q-belajar-dengan-aplikasi",
    "slug": "belajar-dengan-aplikasi",
    "title": "日本語{にほんご}の勉強{べんきょう}はアプリで",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Belajar",
    "thumb": {
      "emoji": "📱",
      "from": "#bfdbfe",
      "to": "#2563eb"
    },
    "grammar": [
      "n4-sou-katanya",
      "n4-nagara",
      "n4-yasui-nikui",
      "n5-hou-ga-ii"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "最近{さいきん}、スマホのアプリで日本語{にほんご}を勉強{べんきょう}する人{ひと}が増{ふ}えているそうです。",
      "電車{でんしゃ}を待{ま}ちながら、短{みじか}い時間{じかん}でも練習{れんしゅう}できるのが便利{べんり}です。",
      "でも、アプリだけでは話{はな}す力{ちから}がつきにくいので、日本人{にほんじん}と話{はな}す機会{きかい}も作{つく}ったほうがいいでしょう。"
    ],
    "translation": [
      "Katanya akhir-akhir ini makin banyak orang belajar bahasa Jepang dengan aplikasi HP.",
      "Praktisnya, bisa berlatih meski sebentar sambil menunggu kereta.",
      "Tetapi dengan aplikasi saja kemampuan berbicara sulit berkembang, jadi sebaiknya juga mencari kesempatan bicara dengan orang Jepang."
    ],
    "keyVocabulary": [
      {
        "word": "練習",
        "reading": "れんしゅう",
        "meaning": "latihan"
      },
      {
        "word": "機会",
        "reading": "きかい",
        "meaning": "kesempatan"
      },
      {
        "word": "力がつく",
        "reading": "ちからがつく",
        "meaning": "kemampuan meningkat"
      }
    ],
    "questions": [
      {
        "id": "belajar-dengan-aplikasi-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "アプリのいいところは何{なん}ですか。",
        "options": [
          "無料なこと",
          "短い時間でも練習できること",
          "先生がいること",
          "試験がないこと"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 短い時間でも練習できるのが便利です."
      },
      {
        "id": "belajar-dengan-aplikasi-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}は アプリのほかに 何{なに}を すすめていますか。",
        "options": [
          "本を読むこと",
          "日本人と話す機会を作ること",
          "テレビを見ること",
          "漢字を書くこと"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 日本人と話す機会も作ったほうがいいでしょう."
      }
    ]
  },
  {
    "id": "r-q-izin-sakit-ke-kantor",
    "slug": "izin-sakit-ke-kantor",
    "title": "会社{かいしゃ}を休{やす}むときの連絡{れんらく}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Kerja",
    "thumb": {
      "emoji": "🤒",
      "from": "#c7d2fe",
      "to": "#3b82f6"
    },
    "grammar": [
      "n4-te-oku",
      "n4-node",
      "n4-sasete-kudasai"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の会社{かいしゃ}では、病気{びょうき}で休{やす}むときは、始業{しぎょう}時間{じかん}の前{まえ}に上司{じょうし}に連絡{れんらく}するのが一般的{いっぱんてき}です。",
      "メールより電話{でんわ}のほうがいいという会社{かいしゃ}もあるので、最初{さいしょ}に確認{かくにん}しておきましょう。",
      "連絡{れんらく}するときは、「熱{ねつ}があるので、今日{きょう}は休{やす}ませていただけませんか」のように、理由{りゆう}もていねいに伝{つた}えるといいです。"
    ],
    "translation": [
      "Di perusahaan Jepang, kalau izin karena sakit, biasanya menghubungi atasan sebelum jam kerja dimulai.",
      "Ada perusahaan yang lebih suka telepon daripada email, jadi pastikan dulu sejak awal.",
      "Saat menghubungi, sebaiknya sampaikan alasannya dengan sopan, misalnya “Karena demam, bolehkah saya izin hari ini?”."
    ],
    "keyVocabulary": [
      {
        "word": "上司",
        "reading": "じょうし",
        "meaning": "atasan"
      },
      {
        "word": "連絡",
        "reading": "れんらく",
        "meaning": "menghubungi, kabar"
      },
      {
        "word": "始業",
        "reading": "しぎょう",
        "meaning": "mulai kerja"
      }
    ],
    "questions": [
      {
        "id": "izin-sakit-ke-kantor-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "病気{びょうき}で休{やす}むとき、いつ連絡{れんらく}しますか。",
        "options": [
          "次の日",
          "始業時間の前",
          "昼休み",
          "仕事が終わったあと"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 始業時間の前に上司に連絡する."
      },
      {
        "id": "izin-sakit-ke-kantor-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "最初{さいしょ}に確認{かくにん}しておくといいことは何{なん}ですか。",
        "options": [
          "上司の住所",
          "メールと電話のどちらがいいか",
          "会社の場所",
          "休みの日"
        ],
        "answerIndex": 1,
        "explanation": "Teks: メールより電話のほうがいいという会社もあるので、最初に確認しておきましょう."
      }
    ]
  },
  {
    "id": "r-q-ambil-paket-di-konbini",
    "slug": "ambil-paket-di-konbini",
    "title": "コンビニで荷物{にもつ}を受{う}け取{と}る",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "📦",
      "from": "#e0f2fe",
      "to": "#0ea5e9"
    },
    "grammar": [
      "n4-kanou-kei",
      "n4-ukemi",
      "n4-dake",
      "n4-node"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "インターネットで買{か}った物{もの}を、コンビニで受{う}け取{と}れるサービスがあります。",
      "昼間{ひるま}家{いえ}にいない人{ひと}でも、仕事{しごと}の帰{かえ}りに受{う}け取{と}れるので便利{べんり}です。",
      "受{う}け取{と}るときは、メールで送{おく}られてきた番号{ばんごう}を店員{てんいん}に見{み}せるだけです。"
    ],
    "translation": [
      "Ada layanan untuk mengambil barang belanjaan internet di minimarket.",
      "Praktis karena orang yang siang hari tidak di rumah pun bisa mengambilnya sepulang kerja.",
      "Saat mengambil, cukup tunjukkan nomor yang dikirim lewat email kepada petugas toko."
    ],
    "keyVocabulary": [
      {
        "word": "受け取る",
        "reading": "うけとる",
        "meaning": "menerima, mengambil"
      },
      {
        "word": "昼間",
        "reading": "ひるま",
        "meaning": "siang hari"
      },
      {
        "word": "番号",
        "reading": "ばんごう",
        "meaning": "nomor"
      }
    ],
    "questions": [
      {
        "id": "ambil-paket-di-konbini-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "このサービスは どんな人{ひと}に 便利{べんり}ですか。",
        "options": [
          "昼間家にいない人",
          "コンビニで働く人",
          "車を持っている人",
          "毎日買い物をする人"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 昼間家にいない人でも…便利です."
      },
      {
        "id": "ambil-paket-di-konbini-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "受{う}け取{と}るときに 必要{ひつよう}なものは 何{なん}ですか。",
        "options": [
          "パスポート",
          "メールで送られてきた番号",
          "お金",
          "写真"
        ],
        "answerIndex": 1,
        "explanation": "Teks: メールで送られてきた番号を店員に見せるだけです."
      }
    ]
  },
  {
    "id": "r-q-sebelum-topan-datang",
    "slug": "sebelum-topan-datang",
    "title": "台風{たいふう}が来{く}る前{まえ}に",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Keselamatan",
    "thumb": {
      "emoji": "🌀",
      "from": "#cbd5e1",
      "to": "#1d4ed8"
    },
    "grammar": [
      "n4-kamoshirenai",
      "n4-te-oku",
      "n4-koto-ga-aru",
      "n4-node"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "夏{なつ}や秋{あき}には、日本{にほん}によく台風{たいふう}が来{き}ます。",
      "台風{たいふう}が来{く}るかもしれないときは、ニュースをよく見{み}て、外{そと}にある物{もの}を家{いえ}の中{なか}に入{い}れておきましょう。",
      "電車{でんしゃ}が止{と}まることもあるので、無理{むり}に出{で}かけないほうが安全{あんぜん}です。"
    ],
    "translation": [
      "Di musim panas dan gugur, topan sering datang ke Jepang.",
      "Kalau topan mungkin datang, perhatikan berita dan masukkan barang-barang di luar ke dalam rumah.",
      "Kereta juga kadang berhenti, jadi lebih aman tidak memaksakan diri bepergian."
    ],
    "keyVocabulary": [
      {
        "word": "台風",
        "reading": "たいふう",
        "meaning": "topan"
      },
      {
        "word": "無理に",
        "reading": "むりに",
        "meaning": "memaksakan diri"
      },
      {
        "word": "安全",
        "reading": "あんぜん",
        "meaning": "aman"
      }
    ],
    "questions": [
      {
        "id": "sebelum-topan-datang-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "台風{たいふう}が来{く}る前{まえ}に するといいことは 何{なん}ですか。",
        "options": [
          "外の物を家の中に入れる",
          "窓を開ける",
          "遠くへ旅行する",
          "電車に乗る"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 外にある物を家の中に入れておきましょう."
      },
      {
        "id": "sebelum-topan-datang-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "なぜ 無理{むり}に出{で}かけないほうがいいのですか。",
        "options": [
          "お店が休みだから",
          "電車が止まることがあるから",
          "寒いから",
          "ニュースがないから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 電車が止まることもあるので."
      }
    ]
  },
  {
    "id": "r-q-budaya-hourensou",
    "slug": "budaya-hourensou",
    "title": "日本{にほん}の「報連相{ほうれんそう}」",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Kerja",
    "thumb": {
      "emoji": "💼",
      "from": "#ddd6fe",
      "to": "#7c3aed"
    },
    "grammar": [
      "n3-to-iu-no-wa",
      "n3-ni-totte",
      "n4-yasui-nikui",
      "n4-ba"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の職場{しょくば}では、「報連相{ほうれんそう}」という言葉{ことば}がよく使{つか}われる。報告{ほうこく}・連絡{れんらく}・相談{そうだん}の頭文字{かしらもじ}をとったものだ。",
      "仕事{しごと}の進{すす}み具合{ぐあい}をこまめに報告{ほうこく}し、問題{もんだい}があれば早{はや}めに相談{そうだん}することが大切{たいせつ}だとされている。",
      "外国人{がいこくじん}にとっては細{こま}かすぎると感{かん}じることもあるが、トラブルを防{ふせ}ぐための習慣{しゅうかん}だと考{かんが}えれば理解{りかい}しやすいだろう。"
    ],
    "translation": [
      "Di tempat kerja Jepang, istilah “hourensou” sering dipakai. Ini singkatan dari laporan, kabar, dan konsultasi.",
      "Dianggap penting untuk sering melaporkan perkembangan kerja dan segera berkonsultasi jika ada masalah.",
      "Bagi orang asing kadang terasa terlalu detail, tetapi akan lebih mudah dipahami jika dianggap sebagai kebiasaan untuk mencegah masalah."
    ],
    "keyVocabulary": [
      {
        "word": "職場",
        "reading": "しょくば",
        "meaning": "tempat kerja"
      },
      {
        "word": "頭文字",
        "reading": "かしらもじ",
        "meaning": "huruf awal"
      },
      {
        "word": "防ぐ",
        "reading": "ふせぐ",
        "meaning": "mencegah"
      }
    ],
    "questions": [
      {
        "id": "budaya-hourensou-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "「報連相{ほうれんそう}」は 何{なに}の頭文字{かしらもじ}ですか。",
        "options": [
          "報告・連絡・相談",
          "放送・連休・相手",
          "報告・練習・相談",
          "方法・連絡・想像"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 報告・連絡・相談の頭文字をとったものだ."
      },
      {
        "id": "budaya-hourensou-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}によると、報連相{ほうれんそう}の目的{もくてき}は何{なん}ですか。",
        "options": [
          "上司を喜ばせること",
          "トラブルを防ぐこと",
          "会議を増やすこと",
          "給料を上げること"
        ],
        "answerIndex": 1,
        "explanation": "Teks: トラブルを防ぐための習慣."
      }
    ]
  },
  {
    "id": "r-q-pembayaran-nontunai",
    "slug": "pembayaran-nontunai",
    "title": "広{ひろ}がるキャッシュレス決済{けっさい}",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Ekonomi",
    "thumb": {
      "emoji": "💳",
      "from": "#e9d5ff",
      "to": "#9333ea"
    },
    "grammar": [
      "n3-ippou-de",
      "n4-sugiru",
      "n4-yasui-nikui"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "以前{いぜん}の日本{にほん}は現金{げんきん}を使{つか}う人{ひと}が多{おお}い国{くに}だと言{い}われていた。",
      "しかし最近{さいきん}は、スマホやカードで支払{しはら}うキャッシュレス決済{けっさい}が広{ひろ}がり、小{ちい}さな店{みせ}でも使{つか}えるところが増{ふ}えている。",
      "便利{べんり}な一方{いっぽう}で、使{つか}いすぎに気{き}づきにくいという声{こえ}もある。アプリで使{つか}ったお金{かね}を確認{かくにん}する習慣{しゅうかん}をつけるといいだろう。"
    ],
    "translation": [
      "Dulu Jepang dikatakan sebagai negara yang banyak penduduknya memakai uang tunai.",
      "Namun akhir-akhir ini pembayaran nontunai dengan HP atau kartu makin meluas, dan toko kecil yang menerimanya pun bertambah.",
      "Meski praktis, ada juga suara bahwa pemakaian berlebihan sulit disadari. Sebaiknya membiasakan diri mengecek pengeluaran lewat aplikasi."
    ],
    "keyVocabulary": [
      {
        "word": "現金",
        "reading": "げんきん",
        "meaning": "uang tunai"
      },
      {
        "word": "支払う",
        "reading": "しはらう",
        "meaning": "membayar"
      },
      {
        "word": "決済",
        "reading": "けっさい",
        "meaning": "pembayaran"
      }
    ],
    "questions": [
      {
        "id": "pembayaran-nontunai-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "以前{いぜん}の日本{にほん}について、正{ただ}しいものはどれか。",
        "options": [
          "現金を使う人が多かった",
          "カードしか使えなかった",
          "店が少なかった",
          "スマホがなかった"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 現金を使う人が多い国だと言われていた."
      },
      {
        "id": "pembayaran-nontunai-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "キャッシュレス決済{けっさい}の問題点{もんだいてん}として書{か}かれているのはどれか。",
        "options": [
          "店で使えない",
          "使いすぎに気づきにくい",
          "手数料が高い",
          "スマホが壊れやすい"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 使いすぎに気づきにくいという声もある."
      }
    ]
  },
  {
    "id": "r-q-cek-kesehatan-tahunan",
    "slug": "cek-kesehatan-tahunan",
    "title": "健康診断{けんこうしんだん}は毎年{まいとし}受{う}けよう",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Kesehatan",
    "thumb": {
      "emoji": "🩺",
      "from": "#c4b5fd",
      "to": "#6d28d9"
    },
    "grammar": [
      "koto-ni-naru",
      "n3-gachi",
      "you-ni-suru",
      "n4-ba"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の会社{かいしゃ}では、年{ねん}に一回{いっかい}、社員{しゃいん}が健康診断{けんこうしんだん}を受{う}けることになっている。",
      "身長{しんちょう}や体重{たいじゅう}、血圧{けつあつ}などを測{はか}り、病気{びょうき}が見{み}つかれば早{はや}めに治療{ちりょう}を始{はじ}められる。",
      "忙{いそが}しいとつい後回{あとまわ}しにしがちだが、自分{じぶん}の体{からだ}の状態{じょうたい}を知{し}るいい機会{きかい}なので、必{かなら}ず受{う}けるようにしたい。"
    ],
    "translation": [
      "Di perusahaan Jepang, karyawan menjalani pemeriksaan kesehatan setahun sekali.",
      "Tinggi badan, berat badan, tekanan darah, dan lainnya diukur, sehingga jika ditemukan penyakit, pengobatan bisa dimulai lebih awal.",
      "Kalau sibuk, cenderung menundanya, tetapi ini kesempatan bagus untuk mengetahui kondisi tubuh, jadi usahakan selalu ikut."
    ],
    "keyVocabulary": [
      {
        "word": "健康診断",
        "reading": "けんこうしんだん",
        "meaning": "pemeriksaan kesehatan"
      },
      {
        "word": "血圧",
        "reading": "けつあつ",
        "meaning": "tekanan darah"
      },
      {
        "word": "後回し",
        "reading": "あとまわし",
        "meaning": "menunda"
      }
    ],
    "questions": [
      {
        "id": "cek-kesehatan-tahunan-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "会社{かいしゃ}の健康診断{けんこうしんだん}は どのくらいの頻度{ひんど}で受{う}けるか。",
        "options": [
          "毎月",
          "年に一回",
          "三年に一回",
          "入社のときだけ"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 年に一回…健康診断を受けることになっている."
      },
      {
        "id": "cek-kesehatan-tahunan-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "健康診断{けんこうしんだん}を受{う}けるいい点{てん}は何{なん}か。",
        "options": [
          "休みがもらえる",
          "病気を早く見つけられる",
          "給料が上がる",
          "体重が減る"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 病気が見つかれば早めに治療を始められる."
      }
    ]
  },
  {
    "id": "r-q-papan-petunjuk-multibahasa",
    "slug": "papan-petunjuk-multibahasa",
    "title": "外国人{がいこくじん}観光客{かんこうきゃく}と多言語{たげんご}表示{ひょうじ}",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Pariwisata",
    "thumb": {
      "emoji": "🗺️",
      "from": "#ddd6fe",
      "to": "#4f46e5"
    },
    "grammar": [
      "n3-ni-tsurete",
      "n4-you-ni-agar",
      "n4-ukemi",
      "n4-te-iku-kuru"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "外国人{がいこくじん}観光客{かんこうきゃく}が増{ふ}えるにつれて、駅{えき}や観光地{かんこうち}の案内{あんない}も変{か}わってきた。",
      "以前{いぜん}は日本語{にほんご}と英語{えいご}だけの表示{ひょうじ}が多{おお}かったが、今{いま}では中国語{ちゅうごくご}や韓国語{かんこくご}で書{か}かれた案内{あんない}も珍{めずら}しくない。",
      "また、文字{もじ}が読{よ}めなくてもわかるように、絵{え}や記号{きごう}を使{つか}った「ピクトグラム」も多{おお}く使{つか}われている。"
    ],
    "translation": [
      "Seiring bertambahnya wisatawan asing, papan petunjuk di stasiun dan tempat wisata pun berubah.",
      "Dulu banyak papan hanya berbahasa Jepang dan Inggris, tetapi sekarang petunjuk dalam bahasa Mandarin dan Korea pun tidak jarang.",
      "Selain itu, “piktogram” yang memakai gambar dan simbol juga banyak dipakai agar bisa dipahami meski tidak bisa membaca hurufnya."
    ],
    "keyVocabulary": [
      {
        "word": "観光客",
        "reading": "かんこうきゃく",
        "meaning": "wisatawan"
      },
      {
        "word": "表示",
        "reading": "ひょうじ",
        "meaning": "tanda, tulisan petunjuk"
      },
      {
        "word": "記号",
        "reading": "きごう",
        "meaning": "simbol"
      }
    ],
    "questions": [
      {
        "id": "papan-petunjuk-multibahasa-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "観光客{かんこうきゃく}が増{ふ}えて、何{なに}が変{か}わったか。",
        "options": [
          "電車の料金",
          "駅や観光地の案内",
          "ホテルの数",
          "食べ物の味"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 駅や観光地の案内も変わってきた."
      },
      {
        "id": "papan-petunjuk-multibahasa-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "ピクトグラムのいい点{てん}は何{なん}か。",
        "options": [
          "文字が読めなくてもわかる",
          "色がきれい",
          "安く作れる",
          "日本語の勉強になる"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 文字が読めなくてもわかるように."
      }
    ]
  },
  {
    "id": "r-q-apa-itu-furusato-nouzei",
    "slug": "apa-itu-furusato-nouzei",
    "title": "ふるさと納税{のうぜい}とは",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Ekonomi",
    "thumb": {
      "emoji": "🎁",
      "from": "#f5d0fe",
      "to": "#a21caf"
    },
    "grammar": [
      "n3-to-iu-no-wa",
      "n3-ippou-de",
      "n4-bakari",
      "n3-gachi"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "「ふるさと納税{のうぜい}」とは、自分{じぶん}が選{えら}んだ地方{ちほう}の町{まち}や村{むら}に寄付{きふ}をする制度{せいど}のことだ。",
      "寄付{きふ}をすると、その地域{ちいき}の特産品{とくさんひん}がお礼{れい}として届{とど}くことが多{おお}く、人気{にんき}を集{あつ}めている。また、税金{ぜいきん}の控除{こうじょ}を受{う}けることもできる。",
      "一方{いっぽう}で、お礼{れい}の品{しな}ばかりに注目{ちゅうもく}が集{あつ}まり、本来{ほんらい}の目的{もくてき}である地域{ちいき}の応援{おうえん}が忘{わす}れられがちだという意見{いけん}もある。"
    ],
    "translation": [
      "“Furusato nouzei” adalah sistem berdonasi kepada kota atau desa di daerah yang dipilih sendiri.",
      "Jika berdonasi, produk khas daerah tersebut sering dikirim sebagai ucapan terima kasih, sehingga sistem ini populer. Selain itu, bisa mendapat potongan pajak.",
      "Di sisi lain, ada pendapat bahwa perhatian terlalu terpusat pada hadiahnya saja, sehingga tujuan awalnya, yaitu mendukung daerah, cenderung terlupakan."
    ],
    "keyVocabulary": [
      {
        "word": "寄付",
        "reading": "きふ",
        "meaning": "donasi"
      },
      {
        "word": "特産品",
        "reading": "とくさんひん",
        "meaning": "produk khas daerah"
      },
      {
        "word": "控除",
        "reading": "こうじょ",
        "meaning": "potongan (pajak)"
      }
    ],
    "questions": [
      {
        "id": "apa-itu-furusato-nouzei-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "ふるさと納税{のうぜい}で寄付{きふ}をすると、何{なに}が届{とど}くことが多{おお}いか。",
        "options": [
          "税金の書類",
          "地域の特産品",
          "旅行券",
          "現金"
        ],
        "answerIndex": 1,
        "explanation": "Teks: その地域の特産品がお礼として届くことが多く."
      },
      {
        "id": "apa-itu-furusato-nouzei-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "問題点{もんだいてん}として挙{あ}げられているのはどれか。",
        "options": [
          "寄付が少ない",
          "本来の目的が忘れられがち",
          "品物が届かない",
          "手続きが難しい"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 本来の目的である地域の応援が忘れられがちだ."
      }
    ]
  },
  {
    "id": "r-q-menghindari-jam-sibuk",
    "slug": "menghindari-jam-sibuk",
    "title": "通勤{つうきん}ラッシュを避{さ}ける工夫{くふう}",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Kerja",
    "thumb": {
      "emoji": "🚉",
      "from": "#e0e7ff",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-okage-de",
      "n3-nai-de-sumu",
      "n4-yasui-nikui"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "都市部{としぶ}の朝{あさ}の電車{でんしゃ}は、通勤{つうきん}する人{ひと}でとても混雑{こんざつ}する。",
      "そのため、出勤{しゅっきん}時間{じかん}を自分{じぶん}で決{き}められる「フレックスタイム」や、家{いえ}で働{はたら}く「テレワーク」を取{と}り入{い}れる会社{かいしゃ}が増{ふ}えた。",
      "満員{まんいん}電車{でんしゃ}に乗{の}らずに済{す}むおかげで、疲{つか}れにくくなったという人{ひと}も多{おお}い。"
    ],
    "translation": [
      "Kereta pagi di perkotaan sangat padat oleh orang yang berangkat kerja.",
      "Karena itu, perusahaan yang menerapkan “flextime” (jam masuk bisa ditentukan sendiri) dan “telework” (kerja dari rumah) bertambah.",
      "Banyak juga yang merasa jadi tidak mudah lelah berkat tidak perlu naik kereta yang penuh sesak."
    ],
    "keyVocabulary": [
      {
        "word": "通勤",
        "reading": "つうきん",
        "meaning": "pergi-pulang kerja"
      },
      {
        "word": "混雑",
        "reading": "こんざつ",
        "meaning": "padat, ramai"
      },
      {
        "word": "満員",
        "reading": "まんいん",
        "meaning": "penuh sesak"
      }
    ],
    "questions": [
      {
        "id": "menghindari-jam-sibuk-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "朝{あさ}の電車{でんしゃ}が混雑{こんざつ}する理由{りゆう}は何{なん}か。",
        "options": [
          "観光客が多いから",
          "通勤する人が多いから",
          "電車が少ないから",
          "工事中だから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 通勤する人でとても混雑する."
      },
      {
        "id": "menghindari-jam-sibuk-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "フレックスタイムとは どんな制度{せいど}か。",
        "options": [
          "家で働く制度",
          "出勤時間を自分で決められる制度",
          "給料が増える制度",
          "休みが増える制度"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 出勤時間を自分で決められる「フレックスタイム」."
      }
    ]
  },
  {
    "id": "r-q-minat-pindah-ke-daerah",
    "slug": "minat-pindah-ke-daerah",
    "title": "地方{ちほう}移住{いじゅう}への関心{かんしん}の高{たか}まり",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Masyarakat",
    "thumb": {
      "emoji": "🏡",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-ni-tomonatte",
      "n2-hanmen",
      "n2-ta-ue-de"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "テレワークの普及{ふきゅう}に伴{ともな}い、都会{とかい}を離{はな}れて地方{ちほう}へ移住{いじゅう}する人{ひと}が注目{ちゅうもく}されている。",
      "自然{しぜん}の豊{ゆた}かな環境{かんきょう}で子育{こそだ}てができる反面{はんめん}、車{くるま}がなければ生活{せいかつ}が不便{ふべん}だったり、仕事{しごと}の選択肢{せんたくし}が限{かぎ}られたりする面{めん}もある。",
      "自治体{じちたい}の中{なか}には、住宅{じゅうたく}の補助{ほじょ}や仕事{しごと}の紹介{しょうかい}を行{おこな}うところもある。移住{いじゅう}を考{かんが}えるなら、短期間{たんきかん}実際{じっさい}に暮{く}らしてみた上{うえ}で決{き}めるのが賢明{けんめい}だろう。"
    ],
    "translation": [
      "Seiring meluasnya kerja jarak jauh, orang yang meninggalkan kota besar dan pindah ke daerah menarik perhatian.",
      "Di satu sisi bisa membesarkan anak di lingkungan yang kaya alam, di sisi lain hidup bisa tidak praktis tanpa mobil, dan pilihan pekerjaan terbatas.",
      "Sebagian pemerintah daerah memberi bantuan perumahan dan memperkenalkan lowongan kerja. Kalau berniat pindah, sebaiknya memutuskan setelah mencoba tinggal di sana untuk waktu singkat."
    ],
    "keyVocabulary": [
      {
        "word": "移住",
        "reading": "いじゅう",
        "meaning": "pindah tempat tinggal"
      },
      {
        "word": "選択肢",
        "reading": "せんたくし",
        "meaning": "pilihan"
      },
      {
        "word": "自治体",
        "reading": "じちたい",
        "meaning": "pemerintah daerah"
      },
      {
        "word": "賢明",
        "reading": "けんめい",
        "meaning": "bijaksana"
      }
    ],
    "questions": [
      {
        "id": "minat-pindah-ke-daerah-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "地方{ちほう}移住{いじゅう}のデメリットとして挙{あ}げられているのはどれか。",
        "options": [
          "自然が少ない",
          "車がないと不便",
          "子育てができない",
          "家賃が高い"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 車がなければ生活が不便だったり."
      },
      {
        "id": "minat-pindah-ke-daerah-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}が勧{すす}めていることはどれか。",
        "options": [
          "すぐに移住すること",
          "短期間暮らしてみてから決めること",
          "都会に住み続けること",
          "車を買わないこと"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 短期間実際に暮らしてみた上で決めるのが賢明だろう."
      }
    ]
  },
  {
    "id": "r-q-pariwisata-berlebihan",
    "slug": "pariwisata-berlebihan",
    "title": "インバウンド観光{かんこう}と「オーバーツーリズム」",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Pariwisata",
    "thumb": {
      "emoji": "🏯",
      "from": "#fecaca",
      "to": "#f97316"
    },
    "grammar": [
      "n3-ippou-de",
      "n2-wo-megutte",
      "n2-zaru-wo-enai",
      "n3-ka"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "訪日{ほうにち}外国人{がいこくじん}の増加{ぞうか}は地域{ちいき}経済{けいざい}を潤{うるお}す一方{いっぽう}、一部{いちぶ}の観光地{かんこうち}では混雑{こんざつ}やごみ問題{もんだい}が深刻{しんこく}化{か}している。",
      "こうした「オーバーツーリズム」をめぐって、入場{にゅうじょう}人数{にんずう}の制限{せいげん}や、観光客{かんこうきゃく}向{む}けの料金{りょうきん}設定{せってい}を検討{けんとう}する自治体{じちたい}も出{で}てきた。",
      "観光{かんこう}による利益{りえき}と住民{じゅうみん}の生活{せいかつ}をどう両立{りょうりつ}させるかは、今後{こんご}の大{おお}きな課題{かだい}と言{い}わざるを得{え}ない。"
    ],
    "translation": [
      "Bertambahnya wisatawan asing menyejahterakan ekonomi daerah, tetapi di sebagian tempat wisata, kepadatan dan masalah sampah makin serius.",
      "Terkait “overtourism” ini, muncul pemerintah daerah yang mempertimbangkan pembatasan jumlah pengunjung dan penetapan tarif khusus wisatawan.",
      "Bagaimana menyeimbangkan keuntungan pariwisata dengan kehidupan warga, mau tidak mau harus dikatakan sebagai tantangan besar ke depan."
    ],
    "keyVocabulary": [
      {
        "word": "訪日",
        "reading": "ほうにち",
        "meaning": "berkunjung ke Jepang"
      },
      {
        "word": "潤す",
        "reading": "うるおす",
        "meaning": "menyejahterakan"
      },
      {
        "word": "制限",
        "reading": "せいげん",
        "meaning": "pembatasan"
      },
      {
        "word": "両立",
        "reading": "りょうりつ",
        "meaning": "menyeimbangkan"
      }
    ],
    "questions": [
      {
        "id": "pariwisata-berlebihan-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "オーバーツーリズムの問題{もんだい}として挙{あ}げられているのはどれか。",
        "options": [
          "観光客の減少",
          "混雑やごみ問題",
          "ホテル不足",
          "交通費の値上げ"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 混雑やごみ問題が深刻化している."
      },
      {
        "id": "pariwisata-berlebihan-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "自治体{じちたい}が検討{けんとう}している対策{たいさく}はどれか。",
        "options": [
          "観光地を閉鎖する",
          "入場人数を制限する",
          "外国人の入国を禁止する",
          "ごみ箱をなくす"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 入場人数の制限…を検討する自治体も出てきた."
      }
    ]
  },
  {
    "id": "r-q-ai-dan-pekerjaan-penerjemah",
    "slug": "ai-dan-pekerjaan-penerjemah",
    "title": "生成{せいせい}AIと翻訳{ほんやく}の仕事{しごと}",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Karier",
    "thumb": {
      "emoji": "🧠",
      "from": "#fde68a",
      "to": "#f59e0b"
    },
    "grammar": [
      "n3-ni-yotte",
      "n3-to-wa-kagiranai",
      "n2-ni-oujite",
      "n2-tsutsu"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "生成{せいせい}AIの登場{とうじょう}によって、文章{ぶんしょう}の翻訳{ほんやく}は以前{いぜん}よりはるかに速{はや}く、手軽{てがる}に行{おこな}えるようになった。",
      "しかし、AIの訳{やく}が常{つね}に正確{せいかく}だとは限{かぎ}らない。専門用語{せんもんようご}や業界{ぎょうかい}特有{とくゆう}の言{い}い回{まわ}し、相手{あいて}との関係{かんけい}に応{おう}じた敬語{けいご}の使{つか}い分{わ}けなどは、人{ひと}による確認{かくにん}が欠{か}かせない。",
      "これからの翻訳者{ほんやくしゃ}には、AIを道具{どうぐ}として使{つか}いこなしつつ、最終的{さいしゅうてき}な品質{ひんしつ}に責任{せきにん}を持{も}つ力{ちから}が求{もと}められるだろう。"
    ],
    "translation": [
      "Dengan hadirnya AI generatif, penerjemahan teks kini jauh lebih cepat dan mudah dibanding dulu.",
      "Namun, terjemahan AI belum tentu selalu akurat. Istilah teknis, ungkapan khas industri, dan pemilihan keigo sesuai hubungan dengan lawan bicara tetap membutuhkan pengecekan oleh manusia.",
      "Penerjemah ke depan akan dituntut mampu memanfaatkan AI sebagai alat, sambil bertanggung jawab atas kualitas akhir."
    ],
    "keyVocabulary": [
      {
        "word": "専門用語",
        "reading": "せんもんようご",
        "meaning": "istilah teknis"
      },
      {
        "word": "言い回し",
        "reading": "いいまわし",
        "meaning": "ungkapan"
      },
      {
        "word": "欠かせない",
        "reading": "かかせない",
        "meaning": "tak tergantikan"
      },
      {
        "word": "使いこなす",
        "reading": "つかいこなす",
        "meaning": "menguasai pemakaian"
      }
    ],
    "questions": [
      {
        "id": "ai-dan-pekerjaan-penerjemah-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "人{ひと}による確認{かくにん}が必要{ひつよう}なものとして挙{あ}げられていないのはどれか。",
        "options": [
          "専門用語",
          "業界特有の言い回し",
          "敬語の使い分け",
          "文字の大きさ"
        ],
        "answerIndex": 3,
        "explanation": "Teks menyebut 専門用語・言い回し・敬語; ukuran huruf tidak disebut."
      },
      {
        "id": "ai-dan-pekerjaan-penerjemah-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}の考{かんが}えに合{あ}うものはどれか。",
        "options": [
          "翻訳者はもう必要ない",
          "AIを使いながら品質に責任を持つ力が必要だ",
          "AIは使わないほうがいい",
          "AIの訳は常に正確だ"
        ],
        "answerIndex": 1,
        "explanation": "Teks: AIを道具として使いこなしつつ、最終的な品質に責任を持つ力が求められる."
      }
    ]
  },
  {
    "id": "r-q-kenaikan-harga-pangan",
    "slug": "kenaikan-harga-pangan",
    "title": "食品{しょくひん}の値上{ねあ}げと家計{かけい}",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Ekonomi",
    "thumb": {
      "emoji": "🛒",
      "from": "#ffedd5",
      "to": "#c2410c"
    },
    "grammar": [
      "n2-nomi-narazu",
      "n2-kanenai",
      "n3-ni-totte"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "原材料費{げんざいりょうひ}や輸送費{ゆそうひ}の上昇{じょうしょう}を受{う}け、食品{しょくひん}や日用品{にちようひん}の値上{ねあ}げが相次{あいつ}いでいる。",
      "給料{きゅうりょう}が物価{ぶっか}ほど上{あ}がらない中{なか}、多{おお}くの家庭{かてい}では、安{やす}い店{みせ}を探{さが}したり、まとめ買{が}いをしたりして節約{せつやく}に努{つと}めている。",
      "値上{ねあ}げは消費者{しょうひしゃ}のみならず、商品{しょうひん}を売{う}る小売店{こうりてん}にとっても頭{あたま}の痛{いた}い問題{もんだい}だ。価格{かかく}を上{あ}げすぎれば客{きゃく}が離{はな}れかねないからである。"
    ],
    "translation": [
      "Akibat naiknya biaya bahan baku dan transportasi, kenaikan harga makanan dan kebutuhan sehari-hari terjadi berturut-turut.",
      "Di tengah gaji yang tidak naik secepat harga barang, banyak rumah tangga berusaha berhemat dengan mencari toko murah atau membeli dalam jumlah besar sekaligus.",
      "Kenaikan harga bukan hanya masalah bagi konsumen, tetapi juga bagi toko eceran yang menjual produk, karena jika harga dinaikkan terlalu tinggi, pelanggan bisa saja pergi."
    ],
    "keyVocabulary": [
      {
        "word": "値上げ",
        "reading": "ねあげ",
        "meaning": "kenaikan harga"
      },
      {
        "word": "相次ぐ",
        "reading": "あいつぐ",
        "meaning": "terjadi berturut-turut"
      },
      {
        "word": "節約",
        "reading": "せつやく",
        "meaning": "penghematan"
      },
      {
        "word": "小売店",
        "reading": "こうりてん",
        "meaning": "toko eceran"
      }
    ],
    "questions": [
      {
        "id": "kenaikan-harga-pangan-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "値上{ねあ}げの原因{げんいん}として挙{あ}げられているのはどれか。",
        "options": [
          "原材料費や輸送費の上昇",
          "税金の引き下げ",
          "客の増加",
          "店の減少"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 原材料費や輸送費の上昇を受け."
      },
      {
        "id": "kenaikan-harga-pangan-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "小売店{こうりてん}が値段{ねだん}を上{あ}げすぎると、どうなるおそれがあるか。",
        "options": [
          "商品が売り切れる",
          "客が離れる",
          "給料が上がる",
          "輸送費が下がる"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 客が離れかねないからである."
      }
    ]
  },
  {
    "id": "r-q-kerja-sampingan-diizinkan",
    "slug": "kerja-sampingan-diizinkan",
    "title": "広{ひろ}がる「副業{ふくぎょう}」の容認{ようにん}",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Kerja",
    "thumb": {
      "emoji": "💡",
      "from": "#fef3c7",
      "to": "#d97706"
    },
    "grammar": [
      "n2-tsutsu-aru",
      "n3-dake-de-naku",
      "n2-ni-sakidatte",
      "n3-beki"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "かつて多{おお}くの日本{にほん}企業{きぎょう}では副業{ふくぎょう}が禁止{きんし}されていたが、近年{きんねん}は条件{じょうけん}付{つ}きで認{みと}める会社{かいしゃ}が増{ふ}えつつある。",
      "社員{しゃいん}にとっては収入{しゅうにゅう}を増{ふ}やせるだけでなく、社外{しゃがい}で得{え}た経験{けいけん}や人脈{じんみゃく}を本業{ほんぎょう}に生{い}かせるという利点{りてん}もある。",
      "ただし、働{はたら}きすぎによる健康{けんこう}への影響{えいきょう}や、情報{じょうほう}漏洩{ろうえい}のリスクも無視{むし}できない。副業{ふくぎょう}を始{はじ}めるに先立{さきだ}って、会社{かいしゃ}の規則{きそく}を確認{かくにん}しておくべきだ。"
    ],
    "translation": [
      "Dulu banyak perusahaan Jepang melarang kerja sampingan, tetapi belakangan perusahaan yang mengizinkannya dengan syarat terus bertambah.",
      "Bagi karyawan, selain bisa menambah penghasilan, ada keuntungan bisa memanfaatkan pengalaman dan relasi dari luar kantor untuk pekerjaan utama.",
      "Namun, dampak kerja berlebihan terhadap kesehatan dan risiko kebocoran informasi juga tidak bisa diabaikan. Sebelum mulai kerja sampingan, sebaiknya periksa dulu aturan perusahaan."
    ],
    "keyVocabulary": [
      {
        "word": "副業",
        "reading": "ふくぎょう",
        "meaning": "kerja sampingan"
      },
      {
        "word": "人脈",
        "reading": "じんみゃく",
        "meaning": "jejaring relasi"
      },
      {
        "word": "本業",
        "reading": "ほんぎょう",
        "meaning": "pekerjaan utama"
      },
      {
        "word": "漏洩",
        "reading": "ろうえい",
        "meaning": "kebocoran"
      }
    ],
    "questions": [
      {
        "id": "kerja-sampingan-diizinkan-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "副業{ふくぎょう}の利点{りてん}として挙{あ}げられていないのはどれか。",
        "options": [
          "収入が増える",
          "社外の経験を本業に生かせる",
          "人脈が広がる",
          "休みが増える"
        ],
        "answerIndex": 3,
        "explanation": "Teks menyebut penghasilan, pengalaman, dan relasi; libur bertambah tidak disebut."
      },
      {
        "id": "kerja-sampingan-diizinkan-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "副業{ふくぎょう}を始{はじ}める前{まえ}にすべきことは何{なん}か。",
        "options": [
          "本業を辞める",
          "会社の規則を確認する",
          "上司に給料を聞く",
          "新しい会社を作る"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 会社の規則を確認しておくべきだ."
      }
    ]
  },
  {
    "id": "r-q-aplikasi-mitigasi-bencana",
    "slug": "aplikasi-mitigasi-bencana",
    "title": "防災{ぼうさい}アプリと「自助{じじょ}」の意識{いしき}",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Keselamatan",
    "thumb": {
      "emoji": "📲",
      "from": "#fecdd3",
      "to": "#e11d48"
    },
    "grammar": [
      "n2-ni-suginai",
      "n3-ni-totte",
      "n4-kanou-kei"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "地震{じしん}や豪雨{ごうう}などの災害{さいがい}が多{おお}い日本{にほん}では、緊急{きんきゅう}情報{じょうほう}をスマホで受{う}け取{と}れる防災{ぼうさい}アプリが広{ひろ}く利用{りよう}されている。",
      "多言語{たげんご}に対応{たいおう}したアプリもあり、日本語{にほんご}が十分{じゅうぶん}にわからない外国人{がいこくじん}住民{じゅうみん}にとって心強{こころづよ}い存在{そんざい}となっている。",
      "とはいえ、アプリはあくまで情報{じょうほう}を得{え}る手段{しゅだん}にすぎない。いざという時{とき}に命{いのち}を守{まも}るには、避難{ひなん}場所{ばしょ}の確認{かくにん}や備蓄{びちく}といった「自助{じじょ}」の備{そな}えが欠{か}かせないのである。"
    ],
    "translation": [
      "Di Jepang yang sering dilanda bencana seperti gempa dan hujan lebat, aplikasi mitigasi bencana yang bisa menerima informasi darurat lewat HP banyak dipakai.",
      "Ada juga aplikasi multibahasa, yang menjadi penolong bagi warga asing yang belum cukup paham bahasa Jepang.",
      "Meski begitu, aplikasi hanyalah sarana mendapatkan informasi. Untuk melindungi nyawa saat darurat, persiapan “menolong diri sendiri” seperti mengecek tempat evakuasi dan menyimpan persediaan tetap tak tergantikan."
    ],
    "keyVocabulary": [
      {
        "word": "豪雨",
        "reading": "ごうう",
        "meaning": "hujan lebat"
      },
      {
        "word": "心強い",
        "reading": "こころづよい",
        "meaning": "menenangkan, jadi penolong"
      },
      {
        "word": "備蓄",
        "reading": "びちく",
        "meaning": "persediaan"
      },
      {
        "word": "自助",
        "reading": "じじょ",
        "meaning": "menolong diri sendiri"
      }
    ],
    "questions": [
      {
        "id": "aplikasi-mitigasi-bencana-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "多言語{たげんご}対応{たいおう}のアプリは、誰{だれ}にとって心強{こころづよ}いか。",
        "options": [
          "観光ガイド",
          "日本語が十分にわからない外国人住民",
          "アプリの開発者",
          "自治体の職員"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 日本語が十分にわからない外国人住民にとって心強い存在."
      },
      {
        "id": "aplikasi-mitigasi-bencana-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}が最{もっと}も伝{つた}えたいことはどれか。",
        "options": [
          "アプリさえあれば安全だ",
          "アプリに加えて自分での備えが必要だ",
          "アプリは使わないほうがいい",
          "災害は少なくなった"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 「自助」の備えが欠かせないのである."
      }
    ]
  },
];
