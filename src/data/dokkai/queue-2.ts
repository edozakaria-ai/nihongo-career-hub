import type { QueuedReading } from "./types";
export const QUEUE_2: QueuedReading[] = [
    // ═══════════ STOK MINGGU 2 (23–29 Nov 2026 bila QUEUE_START_DATE = "2026-11-20") ═══════════
  // 56 bacaan: 14 per level. Tempel SELURUH blok ini tepat SEBELUM baris "];" terakhir di queue.ts.
  {
    "id": "r-q-kanji-pertama-anak-sd",
    "slug": "kanji-pertama-anak-sd",
    "title": "小学校{しょうがっこう}の漢字{かんじ}",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Belajar",
    "thumb": {
      "emoji": "✏️",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-ni-waktu",
      "n5-adj-i",
      "n5-te-urutan"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の子{こ}どもは、六{ろく}さいで小学校{しょうがっこう}に入{はい}ります。",
      "一年生{いちねんせい}は、「山{やま}」や「川{かわ}」などのやさしい漢字{かんじ}を習{なら}います。",
      "毎日{まいにち}ノートに書{か}いて、少{すこ}しずつ覚{おぼ}えます。"
    ],
    "translation": [
      "Anak-anak Jepang masuk SD pada usia enam tahun.",
      "Siswa kelas satu belajar kanji mudah seperti 「山」 dan 「川」.",
      "Mereka menulisnya di buku setiap hari dan menghafalnya sedikit demi sedikit."
    ],
    "keyVocabulary": [
      {
        "word": "小学校",
        "reading": "しょうがっこう",
        "meaning": "sekolah dasar"
      },
      {
        "word": "習う",
        "reading": "ならう",
        "meaning": "belajar (dari guru)"
      },
      {
        "word": "覚える",
        "reading": "おぼえる",
        "meaning": "menghafal"
      }
    ],
    "questions": [
      {
        "id": "kanji-pertama-anak-sd-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "日本{にほん}の子{こ}どもは 何{なん}さいで 小学校{しょうがっこう}に入{はい}りますか。",
        "options": [
          "五さい",
          "六さい",
          "七さい",
          "八さい"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 六さいで小学校に入ります."
      },
      {
        "id": "kanji-pertama-anak-sd-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "一年生{いちねんせい}は どんな漢字{かんじ}を習{なら}いますか。",
        "options": [
          "むずかしい漢字",
          "やさしい漢字",
          "古い漢字",
          "英語"
        ],
        "answerIndex": 1,
        "explanation": "Teks: やさしい漢字を習います."
      }
    ]
  },
  {
    "id": "r-q-hari-anak-5-mei",
    "slug": "hari-anak-5-mei",
    "title": "五月五日{ごがついつか}は子{こ}どもの日{ひ}",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Budaya",
    "thumb": {
      "emoji": "🎏",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-wa-desu",
      "n5-ni-waktu",
      "n5-ga-suki"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "五月五日{ごがついつか}は「子{こ}どもの日{ひ}」です。学校{がっこう}も会社{かいしゃ}も休{やす}みです。",
      "この日{ひ}、家{いえ}の外{そと}に魚{さかな}の形{かたち}の「こいのぼり」をあげます。",
      "風{かぜ}の中{なか}で、こいのぼりは空{そら}を泳{およ}いでいるようです。"
    ],
    "translation": [
      "Tanggal 5 Mei adalah “Hari Anak”. Sekolah dan kantor libur.",
      "Pada hari ini, orang memasang “koinobori” berbentuk ikan di luar rumah.",
      "Di tengah angin, koinobori tampak seperti berenang di langit."
    ],
    "keyVocabulary": [
      {
        "word": "形",
        "reading": "かたち",
        "meaning": "bentuk"
      },
      {
        "word": "空",
        "reading": "そら",
        "meaning": "langit"
      },
      {
        "word": "泳ぐ",
        "reading": "およぐ",
        "meaning": "berenang"
      }
    ],
    "questions": [
      {
        "id": "hari-anak-5-mei-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "子{こ}どもの日{ひ}は 何月{なんがつ} 何日{なんにち}ですか。",
        "options": [
          "三月三日",
          "五月五日",
          "七月七日",
          "一月一日"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 五月五日は「子どもの日」です."
      },
      {
        "id": "hari-anak-5-mei-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "こいのぼりは 何{なに}の形{かたち}ですか。",
        "options": [
          "鳥",
          "魚",
          "花",
          "山"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 魚の形の「こいのぼり」."
      }
    ]
  },
  {
    "id": "r-q-air-keran-bisa-diminum",
    "slug": "air-keran-bisa-diminum",
    "title": "水道{すいどう}の水{みず}が飲{の}める",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "🚰",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-adj-i",
      "n5-mo",
      "n5-ga-hoshii"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}では、水道{すいどう}の水{みず}をそのまま飲{の}むことができます。",
      "レストランでは、水{みず}はたいてい無料{むりょう}です。",
      "でも、冷{つめ}たい水{みず}がほしい人{ひと}は、コンビニで買{か}います。"
    ],
    "translation": [
      "Di Jepang, air keran bisa diminum langsung.",
      "Di restoran, air biasanya gratis.",
      "Tetapi orang yang ingin air dingin membelinya di minimarket."
    ],
    "keyVocabulary": [
      {
        "word": "水道",
        "reading": "すいどう",
        "meaning": "air leding"
      },
      {
        "word": "無料",
        "reading": "むりょう",
        "meaning": "gratis"
      },
      {
        "word": "冷たい",
        "reading": "つめたい",
        "meaning": "dingin"
      }
    ],
    "questions": [
      {
        "id": "air-keran-bisa-diminum-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "レストランの水{みず}は どうですか。",
        "options": [
          "高い",
          "たいてい無料",
          "ありません",
          "あたたかい"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 水はたいてい無料です."
      },
      {
        "id": "air-keran-bisa-diminum-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "水道{すいどう}の水{みず}について 正{ただ}しいものは どれですか。",
        "options": [
          "飲めない",
          "そのまま飲める",
          "コンビニで売っている",
          "冷たい"
        ],
        "answerIndex": 1,
        "explanation": "Teks: そのまま飲むことができます."
      }
    ]
  },
  {
    "id": "r-q-perpustakaan-kota",
    "slug": "perpustakaan-kota",
    "title": "町{まち}の図書館{としょかん}",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "📚",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-de-tempat",
      "n5-temo-ii",
      "n5-tewa-ikemasen"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "私{わたし}の町{まち}の図書館{としょかん}は、駅{えき}の前{まえ}にあります。",
      "本{ほん}は二週間{にしゅうかん}借{か}りることができます。お金{かね}はいりません。",
      "図書館{としょかん}の中{なか}で、大{おお}きい声{こえ}で話{はな}してはいけません。"
    ],
    "translation": [
      "Perpustakaan kota saya ada di depan stasiun.",
      "Buku bisa dipinjam selama dua minggu. Tidak perlu bayar.",
      "Di dalam perpustakaan, tidak boleh bicara dengan suara keras."
    ],
    "keyVocabulary": [
      {
        "word": "図書館",
        "reading": "としょかん",
        "meaning": "perpustakaan"
      },
      {
        "word": "借りる",
        "reading": "かりる",
        "meaning": "meminjam"
      },
      {
        "word": "声",
        "reading": "こえ",
        "meaning": "suara"
      }
    ],
    "questions": [
      {
        "id": "perpustakaan-kota-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "本{ほん}は どのくらい 借{か}りることが できますか。",
        "options": [
          "一日",
          "一週間",
          "二週間",
          "一か月"
        ],
        "answerIndex": 2,
        "explanation": "Teks: 二週間借りることができます."
      },
      {
        "id": "perpustakaan-kota-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "図書館{としょかん}で してはいけないことは 何{なん}ですか。",
        "options": [
          "本を読むこと",
          "大きい声で話すこと",
          "勉強すること",
          "座ること"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 大きい声で話してはいけません."
      }
    ]
  },
  {
    "id": "r-q-sepeda-di-jepang",
    "slug": "sepeda-di-jepang",
    "title": "自転車{じてんしゃ}で学校{がっこう}へ",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "🚲",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-de-sarana",
      "n5-he-ikimasu",
      "n5-adj-na"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}では、自転車{じてんしゃ}で学校{がっこう}や会社{かいしゃ}へ行{い}く人{ひと}がたくさんいます。",
      "自転車{じてんしゃ}は安{やす}くて、とても便利{べんり}です。",
      "でも、駅{えき}の前{まえ}に自転車{じてんしゃ}を止{と}める場所{ばしょ}はあまりありません。"
    ],
    "translation": [
      "Di Jepang, banyak orang pergi ke sekolah dan kantor naik sepeda.",
      "Sepeda murah dan sangat praktis.",
      "Tetapi tempat parkir sepeda di depan stasiun tidak banyak."
    ],
    "keyVocabulary": [
      {
        "word": "自転車",
        "reading": "じてんしゃ",
        "meaning": "sepeda"
      },
      {
        "word": "止める",
        "reading": "とめる",
        "meaning": "memarkir, menghentikan"
      },
      {
        "word": "場所",
        "reading": "ばしょ",
        "meaning": "tempat"
      }
    ],
    "questions": [
      {
        "id": "sepeda-di-jepang-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "自転車{じてんしゃ}は どうですか。",
        "options": [
          "高い",
          "安くて便利",
          "重い",
          "あぶない"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 安くて、とても便利です."
      },
      {
        "id": "sepeda-di-jepang-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "駅{えき}の前{まえ}に 何{なに}が あまりありませんか。",
        "options": [
          "店",
          "自転車を止める場所",
          "人",
          "電車"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 自転車を止める場所はあまりありません."
      }
    ]
  },
  {
    "id": "r-q-tahun-baru-jepang",
    "slug": "tahun-baru-jepang",
    "title": "日本{にほん}のお正月{しょうがつ}",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Budaya",
    "thumb": {
      "emoji": "🎍",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-ni-iku-tujuan",
      "n5-te-urutan",
      "n5-ni-waktu"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "一月一日{いちがつついたち}は、日本{にほん}のお正月{しょうがつ}です。",
      "多{おお}くの人{ひと}は家族{かぞく}と特別{とくべつ}な料理{りょうり}を食{た}べて、神社{じんじゃ}へお参{まい}りに行{い}きます。",
      "子{こ}どもは「お年玉{としだま}」というお金{かね}をもらいます。"
    ],
    "translation": [
      "1 Januari adalah Tahun Baru di Jepang.",
      "Banyak orang makan masakan khusus bersama keluarga lalu pergi berdoa ke kuil.",
      "Anak-anak menerima uang yang disebut “otoshidama”."
    ],
    "keyVocabulary": [
      {
        "word": "お正月",
        "reading": "おしょうがつ",
        "meaning": "Tahun Baru"
      },
      {
        "word": "神社",
        "reading": "じんじゃ",
        "meaning": "kuil Shinto"
      },
      {
        "word": "お年玉",
        "reading": "おとしだま",
        "meaning": "uang Tahun Baru untuk anak"
      }
    ],
    "questions": [
      {
        "id": "tahun-baru-jepang-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "お正月{しょうがつ}に 多{おお}くの人{ひと}は どこへ 行{い}きますか。",
        "options": [
          "学校",
          "神社",
          "会社",
          "海"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 神社へお参りに行きます."
      },
      {
        "id": "tahun-baru-jepang-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "子{こ}どもは 何{なに}を もらいますか。",
        "options": [
          "本",
          "お年玉",
          "服",
          "花"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 「お年玉」というお金をもらいます."
      }
    ]
  },
  {
    "id": "r-q-toko-100-yen",
    "slug": "toko-100-yen",
    "title": "百円{ひゃくえん}ショップ",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Belanja",
    "thumb": {
      "emoji": "💴",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-mo",
      "n5-adj-i",
      "n5-ichiban"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}には「百円{ひゃくえん}ショップ」という店{みせ}があります。",
      "食器{しょっき}も文房具{ぶんぼうぐ}も、多{おお}くの物{もの}が百円{ひゃくえん}です。",
      "安{やす}いですから、留学生{りゅうがくせい}にとても人気{にんき}があります。"
    ],
    "translation": [
      "Di Jepang ada toko yang disebut “toko 100 yen”.",
      "Peralatan makan maupun alat tulis, banyak barang seharga 100 yen.",
      "Karena murah, toko ini sangat populer di kalangan mahasiswa asing."
    ],
    "keyVocabulary": [
      {
        "word": "食器",
        "reading": "しょっき",
        "meaning": "peralatan makan"
      },
      {
        "word": "文房具",
        "reading": "ぶんぼうぐ",
        "meaning": "alat tulis"
      },
      {
        "word": "人気",
        "reading": "にんき",
        "meaning": "populer"
      }
    ],
    "questions": [
      {
        "id": "toko-100-yen-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "百円{ひゃくえん}ショップで 多{おお}くの物{もの}は いくらですか。",
        "options": [
          "十円",
          "百円",
          "千円",
          "一万円"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 多くの物が百円です."
      },
      {
        "id": "toko-100-yen-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "どうして 留学生{りゅうがくせい}に 人気{にんき}が ありますか。",
        "options": [
          "きれいだから",
          "安いから",
          "近いから",
          "大きいから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 安いですから、…人気があります."
      }
    ]
  },
  {
    "id": "r-q-sarapan-orang-jepang",
    "slug": "sarapan-orang-jepang",
    "title": "日本{にほん}の朝{あさ}ご飯{はん}",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Makanan",
    "thumb": {
      "emoji": "🍚",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-yori-hou",
      "n5-ga-suki",
      "n5-mo"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の朝{あさ}ご飯{はん}は、ご飯{はん}とみそ汁{しる}と魚{さかな}です。",
      "でも、今{いま}はパンを食{た}べる人{ひと}もたくさんいます。",
      "私{わたし}はパンよりご飯{はん}のほうが好{す}きです。"
    ],
    "translation": [
      "Sarapan Jepang adalah nasi, sup miso, dan ikan.",
      "Tetapi sekarang banyak juga orang yang makan roti.",
      "Saya lebih suka nasi daripada roti."
    ],
    "keyVocabulary": [
      {
        "word": "朝ご飯",
        "reading": "あさごはん",
        "meaning": "sarapan"
      },
      {
        "word": "みそ汁",
        "reading": "みそしる",
        "meaning": "sup miso"
      },
      {
        "word": "魚",
        "reading": "さかな",
        "meaning": "ikan"
      }
    ],
    "questions": [
      {
        "id": "sarapan-orang-jepang-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "日本{にほん}の朝{あさ}ご飯{はん}は 何{なん}ですか。",
        "options": [
          "パンと牛乳",
          "ご飯とみそ汁と魚",
          "ラーメン",
          "果物だけ"
        ],
        "answerIndex": 1,
        "explanation": "Teks: ご飯とみそ汁と魚です."
      },
      {
        "id": "sarapan-orang-jepang-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "「私{わたし}」は 何{なに}のほうが 好{す}きですか。",
        "options": [
          "パン",
          "ご飯",
          "魚",
          "みそ汁"
        ],
        "answerIndex": 1,
        "explanation": "Teks: パンよりご飯のほうが好きです."
      }
    ]
  },
  {
    "id": "r-q-salju-di-hokkaido",
    "slug": "salju-di-hokkaido",
    "title": "北海道{ほっかいどう}の雪{ゆき}",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Cuaca",
    "thumb": {
      "emoji": "❄️",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-adj-i",
      "n5-ni-iku-tujuan",
      "n5-kara-alasan"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "北海道{ほっかいどう}は日本{にほん}の北{きた}にあります。冬{ふゆ}はとても寒{さむ}いです。",
      "雪{ゆき}がたくさん降{ふ}りますから、スキーをしに来{く}る人{ひと}が多{おお}いです。",
      "二月{にがつ}には、雪{ゆき}のお祭{まつ}りもあります。"
    ],
    "translation": [
      "Hokkaido ada di utara Jepang. Musim dinginnya sangat dingin.",
      "Karena salju banyak turun, banyak orang datang untuk bermain ski.",
      "Pada bulan Februari juga ada festival salju."
    ],
    "keyVocabulary": [
      {
        "word": "北",
        "reading": "きた",
        "meaning": "utara"
      },
      {
        "word": "雪",
        "reading": "ゆき",
        "meaning": "salju"
      },
      {
        "word": "お祭り",
        "reading": "おまつり",
        "meaning": "festival"
      }
    ],
    "questions": [
      {
        "id": "salju-di-hokkaido-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "北海道{ほっかいどう}は 日本{にほん}の どこに ありますか。",
        "options": [
          "南",
          "北",
          "東",
          "西"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 日本の北にあります."
      },
      {
        "id": "salju-di-hokkaido-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "雪{ゆき}のお祭{まつ}りは いつですか。",
        "options": [
          "二月",
          "五月",
          "八月",
          "十月"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 二月には、雪のお祭りもあります."
      }
    ]
  },
  {
    "id": "r-q-hadiah-saat-berkunjung",
    "slug": "hadiah-saat-berkunjung",
    "title": "お土産{みやげ}を持{も}っていく",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Budaya",
    "thumb": {
      "emoji": "🎁",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-ni-iku-tujuan",
      "n5-hou-ga-ii",
      "n5-toki"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}では、友達{ともだち}の家{いえ}へ行{い}くとき、小{ちい}さいお土産{みやげ}を持{も}っていきます。",
      "お菓子{かし}や果物{くだもの}がいいです。",
      "高{たか}い物{もの}じゃなくてもいいですよ。"
    ],
    "translation": [
      "Di Jepang, saat pergi ke rumah teman, orang membawa oleh-oleh kecil.",
      "Kue atau buah bagus.",
      "Tidak perlu barang yang mahal, lho."
    ],
    "keyVocabulary": [
      {
        "word": "お土産",
        "reading": "おみやげ",
        "meaning": "oleh-oleh"
      },
      {
        "word": "お菓子",
        "reading": "おかし",
        "meaning": "kue, camilan"
      },
      {
        "word": "果物",
        "reading": "くだもの",
        "meaning": "buah"
      }
    ],
    "questions": [
      {
        "id": "hadiah-saat-berkunjung-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "友達{ともだち}の家{いえ}へ行{い}くとき、何{なに}を持{も}っていきますか。",
        "options": [
          "小さいお土産",
          "お金",
          "本だけ",
          "何も持っていきません"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 小さいお土産を持っていきます."
      },
      {
        "id": "hadiah-saat-berkunjung-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "お土産{みやげ}について 正{ただ}しいものは どれですか。",
        "options": [
          "高い物がいい",
          "高くなくてもいい",
          "大きい物がいい",
          "花はだめ"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 高い物じゃなくてもいいですよ."
      }
    ]
  },
  {
    "id": "r-q-bento-buatan-rumah",
    "slug": "bento-buatan-rumah",
    "title": "お弁当{べんとう}を作{つく}る",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Makanan",
    "thumb": {
      "emoji": "🍙",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-mae-ni",
      "n5-teiru-keadaan",
      "n5-adj-i"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "私{わたし}は毎朝{まいあさ}、会社{かいしゃ}へ行{い}く前{まえ}にお弁当{べんとう}を作{つく}ります。",
      "お弁当{べんとう}は安{やす}くて、体{からだ}にもいいです。",
      "今日{きょう}のお弁当{べんとう}は、おにぎりと卵焼{たまごや}きです。"
    ],
    "translation": [
      "Setiap pagi saya membuat bekal sebelum berangkat kerja.",
      "Bekal itu murah dan baik untuk tubuh.",
      "Bekal hari ini onigiri dan telur dadar gulung."
    ],
    "keyVocabulary": [
      {
        "word": "お弁当",
        "reading": "おべんとう",
        "meaning": "bekal makan"
      },
      {
        "word": "体",
        "reading": "からだ",
        "meaning": "tubuh"
      },
      {
        "word": "卵",
        "reading": "たまご",
        "meaning": "telur"
      }
    ],
    "questions": [
      {
        "id": "bento-buatan-rumah-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "「私{わたし}」は いつ お弁当{べんとう}を作{つく}りますか。",
        "options": [
          "夜",
          "会社へ行く前",
          "昼休み",
          "週末"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 会社へ行く前にお弁当を作ります."
      },
      {
        "id": "bento-buatan-rumah-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "今日{きょう}のお弁当{べんとう}は 何{なん}ですか。",
        "options": [
          "パン",
          "おにぎりと卵焼き",
          "ラーメン",
          "魚"
        ],
        "answerIndex": 1,
        "explanation": "Teks: おにぎりと卵焼きです."
      }
    ]
  },
  {
    "id": "r-q-gunung-fuji",
    "slug": "gunung-fuji",
    "title": "富士山{ふじさん}",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Alam",
    "thumb": {
      "emoji": "🗻",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-ichiban",
      "n5-ta-koto-ga-aru",
      "n5-adj-na"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "富士山{ふじさん}は日本{にほん}でいちばん高{たか}い山{やま}です。",
      "七月{しちがつ}と八月{はちがつ}は、山{やま}に登{のぼ}ることができます。",
      "私{わたし}はまだ登{のぼ}ったことがありません。来年{らいねん}、登{のぼ}りたいです。"
    ],
    "translation": [
      "Gunung Fuji adalah gunung tertinggi di Jepang.",
      "Pada bulan Juli dan Agustus, gunung itu bisa didaki.",
      "Saya belum pernah mendakinya. Tahun depan saya ingin mendaki."
    ],
    "keyVocabulary": [
      {
        "word": "高い",
        "reading": "たかい",
        "meaning": "tinggi"
      },
      {
        "word": "登る",
        "reading": "のぼる",
        "meaning": "mendaki"
      },
      {
        "word": "来年",
        "reading": "らいねん",
        "meaning": "tahun depan"
      }
    ],
    "questions": [
      {
        "id": "gunung-fuji-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "富士山{ふじさん}に 登{のぼ}ることが できるのは いつですか。",
        "options": [
          "一月と二月",
          "四月と五月",
          "七月と八月",
          "十一月"
        ],
        "answerIndex": 2,
        "explanation": "Teks: 七月と八月は、山に登ることができます."
      },
      {
        "id": "gunung-fuji-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "「私{わたし}」は 富士山{ふじさん}に 登{のぼ}ったことが ありますか。",
        "options": [
          "はい、あります",
          "いいえ、まだありません",
          "毎年登ります",
          "わかりません"
        ],
        "answerIndex": 1,
        "explanation": "Teks: まだ登ったことがありません."
      }
    ]
  },
  {
    "id": "r-q-gaji-kerja-paruh-waktu",
    "slug": "gaji-kerja-paruh-waktu",
    "title": "アルバイトをしています",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Kerja",
    "thumb": {
      "emoji": "🧑‍🍳",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-teiru-keadaan",
      "n5-de-tempat",
      "n5-kara-made"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "私{わたし}は大学生{だいがくせい}です。週{しゅう}に三回{さんかい}、レストランでアルバイトをしています。",
      "時間{じかん}は夕方{ゆうがた}五時{ごじ}から九時{くじ}までです。",
      "仕事{しごと}は大変{たいへん}ですが、日本語{にほんご}がたくさん使{つか}えて楽{たの}しいです。"
    ],
    "translation": [
      "Saya mahasiswa. Saya kerja paruh waktu di restoran tiga kali seminggu.",
      "Jamnya dari pukul lima sore sampai pukul sembilan.",
      "Pekerjaannya berat, tetapi menyenangkan karena bisa banyak memakai bahasa Jepang."
    ],
    "keyVocabulary": [
      {
        "word": "大学生",
        "reading": "だいがくせい",
        "meaning": "mahasiswa"
      },
      {
        "word": "夕方",
        "reading": "ゆうがた",
        "meaning": "sore"
      },
      {
        "word": "大変",
        "reading": "たいへん",
        "meaning": "berat, repot"
      }
    ],
    "questions": [
      {
        "id": "gaji-kerja-paruh-waktu-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "「私{わたし}」は 週{しゅう}に 何回{なんかい} アルバイトを しますか。",
        "options": [
          "一回",
          "二回",
          "三回",
          "毎日"
        ],
        "answerIndex": 2,
        "explanation": "Teks: 週に三回…アルバイトをしています."
      },
      {
        "id": "gaji-kerja-paruh-waktu-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "アルバイトが 楽{たの}しい理由{りゆう}は 何{なん}ですか。",
        "options": [
          "お金が多いから",
          "日本語がたくさん使えるから",
          "仕事が簡単だから",
          "近いから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 日本語がたくさん使えて楽しいです."
      }
    ]
  },
  {
    "id": "r-q-pemandian-umum-sento",
    "slug": "pemandian-umum-sento",
    "title": "銭湯{せんとう}に行{い}きました",
    "level": "N5",
    "minutes": 3,
    "difficulty": 1,
    "topic": "Budaya",
    "thumb": {
      "emoji": "🛁",
      "from": "#a7f3d0",
      "to": "#10b981"
    },
    "grammar": [
      "n5-ta-koto-ga-aru",
      "n5-adj-i",
      "n5-te-kara"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "昨日{きのう}、初{はじ}めて銭湯{せんとう}に行{い}きました。銭湯{せんとう}は町{まち}の大{おお}きいお風呂{ふろ}です。",
      "入{はい}る前{まえ}にお金{かね}を払{はら}って、体{からだ}を洗{あら}ってからお湯{ゆ}に入{はい}りました。",
      "お湯{ゆ}は少{すこ}し熱{あつ}かったですが、とても気持{きも}ちよかったです。"
    ],
    "translation": [
      "Kemarin saya pertama kali pergi ke sento. Sento adalah pemandian umum besar di kota.",
      "Saya bayar dulu sebelum masuk, lalu setelah mencuci badan saya masuk ke air panas.",
      "Airnya agak panas, tetapi sangat nyaman."
    ],
    "keyVocabulary": [
      {
        "word": "銭湯",
        "reading": "せんとう",
        "meaning": "pemandian umum"
      },
      {
        "word": "お風呂",
        "reading": "おふろ",
        "meaning": "bak mandi, pemandian"
      },
      {
        "word": "気持ちいい",
        "reading": "きもちいい",
        "meaning": "nyaman"
      }
    ],
    "questions": [
      {
        "id": "pemandian-umum-sento-q1",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "銭湯{せんとう}は 何{なん}ですか。",
        "options": [
          "町の大きいお風呂",
          "レストラン",
          "プール",
          "病院"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 銭湯は町の大きいお風呂です."
      },
      {
        "id": "pemandian-umum-sento-q2",
        "level": "N5",
        "category": "membaca",
        "source": "platform",
        "prompt": "お湯{ゆ}は どうでしたか。",
        "options": [
          "冷たかった",
          "少し熱かった",
          "なかった",
          "汚かった"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 少し熱かったです."
      }
    ]
  },
  {
    "id": "r-q-kartu-ic-transportasi",
    "slug": "kartu-ic-transportasi",
    "title": "交通系{こうつうけい}ICカードの使{つか}い方{かた}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "💳",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-kanou-kei",
      "n4-ba",
      "n4-yasui-nikui"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の電車{でんしゃ}やバスでは、ICカードがよく使{つか}われています。",
      "切符{きっぷ}を買{か}わなくても、改札{かいさつ}にカードをタッチすれば乗{の}れるので便利{べんり}です。",
      "コンビニでの買{か}い物{もの}にも使{つか}えます。お金{かね}が足{た}りなくなったら、駅{えき}の機械{きかい}でチャージしましょう。"
    ],
    "translation": [
      "Di kereta dan bus Jepang, kartu IC banyak digunakan.",
      "Praktis karena tanpa membeli tiket pun bisa naik cukup dengan menempelkan kartu di gerbang tiket.",
      "Kartu ini juga bisa dipakai untuk belanja di minimarket. Kalau saldonya kurang, isi ulang di mesin stasiun."
    ],
    "keyVocabulary": [
      {
        "word": "切符",
        "reading": "きっぷ",
        "meaning": "tiket"
      },
      {
        "word": "改札",
        "reading": "かいさつ",
        "meaning": "gerbang tiket"
      },
      {
        "word": "足りる",
        "reading": "たりる",
        "meaning": "cukup"
      }
    ],
    "questions": [
      {
        "id": "kartu-ic-transportasi-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "ICカードの便利{べんり}なところは何{なん}ですか。",
        "options": [
          "安く乗れる",
          "切符を買わなくても乗れる",
          "座れる",
          "速い"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 切符を買わなくても…乗れるので便利です."
      },
      {
        "id": "kartu-ic-transportasi-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "お金{かね}が足{た}りなくなったら、どうしますか。",
        "options": [
          "駅の機械でチャージする",
          "カードを捨てる",
          "切符を買う",
          "店員に借りる"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 駅の機械でチャージしましょう."
      }
    ]
  },
  {
    "id": "r-q-sakura-mekar-dari-selatan",
    "slug": "sakura-mekar-dari-selatan",
    "title": "桜前線{さくらぜんせん}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Cuaca",
    "thumb": {
      "emoji": "🌸",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-you-da",
      "n4-te-iku-kuru",
      "n4-sou-katanya"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "春{はる}になると、天気予報{てんきよほう}で「桜前線{さくらぜんせん}」という言葉{ことば}をよく聞{き}きます。",
      "桜{さくら}は暖{あたた}かい南{みなみ}から咲{さ}き始{はじ}め、少{すこ}しずつ北{きた}へ移{うつ}っていきます。",
      "沖縄{おきなわ}では一月{いちがつ}に咲{さ}くそうですが、北海道{ほっかいどう}では五月{ごがつ}ごろになります。"
    ],
    "translation": [
      "Begitu musim semi tiba, istilah “sakura zensen” (garis depan sakura) sering terdengar di prakiraan cuaca.",
      "Sakura mulai mekar dari selatan yang hangat, lalu sedikit demi sedikit berpindah ke utara.",
      "Katanya di Okinawa mekar pada bulan Januari, sedangkan di Hokkaido sekitar bulan Mei."
    ],
    "keyVocabulary": [
      {
        "word": "天気予報",
        "reading": "てんきよほう",
        "meaning": "prakiraan cuaca"
      },
      {
        "word": "南",
        "reading": "みなみ",
        "meaning": "selatan"
      },
      {
        "word": "移る",
        "reading": "うつる",
        "meaning": "berpindah"
      }
    ],
    "questions": [
      {
        "id": "sakura-mekar-dari-selatan-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "桜{さくら}は どこから 咲{さ}き始{はじ}めますか。",
        "options": [
          "北",
          "南",
          "東",
          "西"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 暖かい南から咲き始め."
      },
      {
        "id": "sakura-mekar-dari-selatan-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "北海道{ほっかいどう}で桜{さくら}が咲{さ}くのは いつごろですか。",
        "options": [
          "一月",
          "三月",
          "五月",
          "八月"
        ],
        "answerIndex": 2,
        "explanation": "Teks: 北海道では五月ごろになります."
      }
    ]
  },
  {
    "id": "r-q-budaya-antre",
    "slug": "budaya-antre",
    "title": "並{なら}んで待{ま}つ文化{ぶんか}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Budaya",
    "thumb": {
      "emoji": "🧍",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-ukemi",
      "n4-noni-padahal",
      "n4-to-joken"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}では、駅{えき}のホームや人気{にんき}の店{みせ}の前{まえ}で、人{ひと}がきちんと並{なら}んで待{ま}っています。",
      "割{わ}り込{こ}むと、周{まわ}りの人{ひと}に注意{ちゅうい}されることもあります。",
      "人気{にんき}のラーメン屋{や}では、一時間{いちじかん}以上{いじょう}並{なら}ぶこともあるのに、みんな静{しず}かに待{ま}っています。"
    ],
    "translation": [
      "Di Jepang, orang mengantre dengan tertib di peron stasiun atau di depan toko populer.",
      "Kalau menyerobot, kadang ditegur orang di sekitar.",
      "Di kedai ramen populer, padahal kadang mengantre lebih dari satu jam, semua orang menunggu dengan tenang."
    ],
    "keyVocabulary": [
      {
        "word": "並ぶ",
        "reading": "ならぶ",
        "meaning": "berbaris, mengantre"
      },
      {
        "word": "割り込む",
        "reading": "わりこむ",
        "meaning": "menyerobot"
      },
      {
        "word": "周り",
        "reading": "まわり",
        "meaning": "sekitar"
      }
    ],
    "questions": [
      {
        "id": "budaya-antre-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "割{わ}り込{こ}むと、どうなることがありますか。",
        "options": [
          "早く入れる",
          "周りの人に注意される",
          "店員にほめられる",
          "安くなる"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 周りの人に注意されることもあります."
      },
      {
        "id": "budaya-antre-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "人気{にんき}のラーメン屋{や}では どのくらい並{なら}ぶことがありますか。",
        "options": [
          "五分",
          "十分",
          "一時間以上",
          "一日"
        ],
        "answerIndex": 2,
        "explanation": "Teks: 一時間以上並ぶこともある."
      }
    ]
  },
  {
    "id": "r-q-musim-flu-dan-masker",
    "slug": "musim-flu-dan-masker",
    "title": "マスクとかぜの季節{きせつ}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Kesehatan",
    "thumb": {
      "emoji": "😷",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-node",
      "n4-you-ni-agar",
      "n4-hazu"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "冬{ふゆ}は空気{くうき}が乾燥{かんそう}するので、かぜやインフルエンザにかかる人{ひと}が増{ふ}えます。",
      "人{ひと}にうつさないように、せきが出{で}るときはマスクをするのがマナーです。",
      "手{て}をよく洗{あら}って、十分{じゅうぶん}に寝{ね}れば、かぜをひきにくくなるはずです。"
    ],
    "translation": [
      "Di musim dingin udaranya kering, jadi orang yang terkena flu dan influenza bertambah.",
      "Agar tidak menulari orang lain, memakai masker saat batuk adalah etika.",
      "Kalau rajin mencuci tangan dan tidur cukup, seharusnya jadi lebih sulit terkena flu."
    ],
    "keyVocabulary": [
      {
        "word": "乾燥",
        "reading": "かんそう",
        "meaning": "kering"
      },
      {
        "word": "うつす",
        "reading": "うつす",
        "meaning": "menulari"
      },
      {
        "word": "せき",
        "reading": "せき",
        "meaning": "batuk"
      }
    ],
    "questions": [
      {
        "id": "musim-flu-dan-masker-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "冬{ふゆ}にかぜをひく人{ひと}が増{ふ}える理由{りゆう}は何{なん}ですか。",
        "options": [
          "空気が乾燥するから",
          "雪が降るから",
          "休みが多いから",
          "食べ物が少ないから"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 空気が乾燥するので."
      },
      {
        "id": "musim-flu-dan-masker-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "マスクをする目的{もくてき}は何{なん}ですか。",
        "options": [
          "寒さを防ぐため",
          "人にうつさないため",
          "顔を隠すため",
          "きれいに見えるため"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 人にうつさないように."
      }
    ]
  },
  {
    "id": "r-q-wawancara-kerja-pertama",
    "slug": "wawancara-kerja-pertama",
    "title": "初{はじ}めての面接{めんせつ}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Karier",
    "thumb": {
      "emoji": "🤝",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-te-oku",
      "n4-tara",
      "n4-te-morau"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "来週{らいしゅう}、日本{にほん}の会社{かいしゃ}で初{はじ}めて面接{めんせつ}を受{う}けます。",
      "面接{めんせつ}の前{まえ}に、自己紹介{じこしょうかい}を何度{なんど}も練習{れんしゅう}しておきました。先輩{せんぱい}にも聞{き}いてもらいました。",
      "もし質問{しつもん}がわからなかったら、「もう一度{いちど}お願{ねが}いします」と言{い}おうと思{おも}います。"
    ],
    "translation": [
      "Minggu depan saya akan menjalani wawancara pertama di perusahaan Jepang.",
      "Sebelum wawancara, saya sudah berlatih perkenalan diri berkali-kali. Saya juga minta senior mendengarkannya.",
      "Kalau tidak memahami pertanyaannya, saya berniat berkata, “Mohon diulangi sekali lagi.”"
    ],
    "keyVocabulary": [
      {
        "word": "面接",
        "reading": "めんせつ",
        "meaning": "wawancara"
      },
      {
        "word": "自己紹介",
        "reading": "じこしょうかい",
        "meaning": "perkenalan diri"
      },
      {
        "word": "先輩",
        "reading": "せんぱい",
        "meaning": "senior"
      }
    ],
    "questions": [
      {
        "id": "wawancara-kerja-pertama-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "面接{めんせつ}の前{まえ}に 何{なに}を練習{れんしゅう}しましたか。",
        "options": [
          "敬語のテスト",
          "自己紹介",
          "漢字",
          "運転"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 自己紹介を何度も練習しておきました."
      },
      {
        "id": "wawancara-kerja-pertama-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "質問{しつもん}がわからなかったら、どうしますか。",
        "options": [
          "黙る",
          "「もう一度お願いします」と言う",
          "帰る",
          "英語で話す"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 「もう一度お願いします」と言おうと思います."
      }
    ]
  },
  {
    "id": "r-q-tradisi-oleh-oleh-kantor",
    "slug": "tradisi-oleh-oleh-kantor",
    "title": "職場{しょくば}へのお土産{みやげ}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Kerja",
    "thumb": {
      "emoji": "🍪",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-tara",
      "n4-yasui-nikui",
      "n4-koto-ga-aru"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の会社{かいしゃ}では、旅行{りょこう}から帰{かえ}ったら、職場{しょくば}の人{ひと}にお菓子{かし}を配{くば}る習慣{しゅうかん}があります。",
      "一{ひと}つずつ包{つつ}んであるお菓子{かし}は配{くば}りやすいので、よく選{えら}ばれます。",
      "休{やす}みをもらったお礼{れい}の気持{きも}ちを伝{つた}えることもあるそうです。"
    ],
    "translation": [
      "Di perusahaan Jepang, ada kebiasaan membagikan kue kepada rekan kerja setelah pulang berlibur.",
      "Kue yang dibungkus satu per satu mudah dibagikan, jadi sering dipilih.",
      "Katanya, ini juga untuk menyampaikan rasa terima kasih karena sudah diberi libur."
    ],
    "keyVocabulary": [
      {
        "word": "職場",
        "reading": "しょくば",
        "meaning": "tempat kerja"
      },
      {
        "word": "配る",
        "reading": "くばる",
        "meaning": "membagikan"
      },
      {
        "word": "包む",
        "reading": "つつむ",
        "meaning": "membungkus"
      }
    ],
    "questions": [
      {
        "id": "tradisi-oleh-oleh-kantor-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "いつ お菓子{かし}を配{くば}りますか。",
        "options": [
          "誕生日",
          "旅行から帰ったとき",
          "会議の前",
          "毎朝"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 旅行から帰ったら…配る習慣."
      },
      {
        "id": "tradisi-oleh-oleh-kantor-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "一{ひと}つずつ包{つつ}んであるお菓子{かし}が選{えら}ばれる理由{りゆう}は何{なん}ですか。",
        "options": [
          "安いから",
          "配りやすいから",
          "おいしいから",
          "大きいから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 配りやすいので."
      }
    ]
  },
  {
    "id": "r-q-dapur-kecil-apartemen",
    "slug": "dapur-kecil-apartemen",
    "title": "アパートの台所{だいどころ}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "🍳",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-sugiru",
      "n4-kanou-kei",
      "n4-noni-padahal"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}のアパートは、台所{だいどころ}が狭{せま}いことが多{おお}いです。",
      "コンロが一{ひと}つしかないので、一度{いちど}に二{ふた}つの料理{りょうり}が作{つく}れません。",
      "料理{りょうり}が好{す}きなのに、狭{せま}すぎて困{こま}っている人{ひと}もいます。電子{でんし}レンジを上手{じょうず}に使{つか}うといいですよ。"
    ],
    "translation": [
      "Apartemen Jepang sering kali dapurnya sempit.",
      "Karena kompornya hanya satu, tidak bisa memasak dua masakan sekaligus.",
      "Ada juga orang yang suka memasak tetapi kesulitan karena terlalu sempit. Sebaiknya pandai-pandai memakai microwave."
    ],
    "keyVocabulary": [
      {
        "word": "台所",
        "reading": "だいどころ",
        "meaning": "dapur"
      },
      {
        "word": "狭い",
        "reading": "せまい",
        "meaning": "sempit"
      },
      {
        "word": "困る",
        "reading": "こまる",
        "meaning": "kesulitan"
      }
    ],
    "questions": [
      {
        "id": "dapur-kecil-apartemen-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "一度{いちど}に二{ふた}つの料理{りょうり}が作{つく}れない理由{りゆう}は何{なん}ですか。",
        "options": [
          "時間がないから",
          "コンロが一つしかないから",
          "鍋がないから",
          "電気が高いから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: コンロが一つしかないので."
      },
      {
        "id": "dapur-kecil-apartemen-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}は 何{なに}を すすめていますか。",
        "options": [
          "引っ越すこと",
          "電子レンジを上手に使うこと",
          "外で食べること",
          "料理をやめること"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 電子レンジを上手に使うといいですよ."
      }
    ]
  },
  {
    "id": "r-q-karaoke-sendirian",
    "slug": "karaoke-sendirian",
    "title": "一人{ひとり}カラオケ",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Hiburan",
    "thumb": {
      "emoji": "🎤",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-te-miru",
      "n4-node",
      "n4-sou-katanya"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "最近{さいきん}、一人{ひとり}でカラオケに行{い}く人{ひと}が増{ふ}えているそうです。",
      "友達{ともだち}に気{き}を使{つか}わずに、好{す}きな歌{うた}を何度{なんど}でも練習{れんしゅう}できるので人気{にんき}です。",
      "日本語{にほんご}の歌{うた}を歌{うた}えば、発音{はつおん}の練習{れんしゅう}にもなります。一度{いちど}試{ため}してみてはどうでしょう。"
    ],
    "translation": [
      "Katanya akhir-akhir ini makin banyak orang pergi karaoke sendirian.",
      "Populer karena bisa berlatih lagu favorit berkali-kali tanpa perlu sungkan pada teman.",
      "Kalau menyanyikan lagu Jepang, itu juga jadi latihan pelafalan. Bagaimana kalau dicoba sekali?"
    ],
    "keyVocabulary": [
      {
        "word": "気を使う",
        "reading": "きをつかう",
        "meaning": "sungkan, menjaga perasaan"
      },
      {
        "word": "発音",
        "reading": "はつおん",
        "meaning": "pelafalan"
      },
      {
        "word": "試す",
        "reading": "ためす",
        "meaning": "mencoba"
      }
    ],
    "questions": [
      {
        "id": "karaoke-sendirian-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "一人{ひとり}カラオケが人気{にんき}の理由{りゆう}は何{なん}ですか。",
        "options": [
          "安いから",
          "好きな歌を何度でも練習できるから",
          "店が近いから",
          "食べ物がおいしいから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 好きな歌を何度でも練習できるので人気です."
      },
      {
        "id": "karaoke-sendirian-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "日本語{にほんご}の歌{うた}を歌{うた}うと、何{なん}の練習{れんしゅう}になりますか。",
        "options": [
          "漢字",
          "発音",
          "敬語",
          "作文"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 発音の練習にもなります."
      }
    ]
  },
  {
    "id": "r-q-hari-olahraga-sekolah",
    "slug": "hari-olahraga-sekolah",
    "title": "運動会{うんどうかい}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Budaya",
    "thumb": {
      "emoji": "🏃",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-ukemi",
      "n4-nagara",
      "n4-te-kureru"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}の小学校{しょうがっこう}では、秋{あき}に運動会{うんどうかい}が行{おこな}われます。",
      "子{こ}どもたちは赤{あか}と白{しろ}のチームに分{わ}かれて、走{はし}ったり、ダンスをしたりします。",
      "家族{かぞく}はお弁当{べんとう}を食{た}べながら応援{おうえん}してくれます。"
    ],
    "translation": [
      "Di SD Jepang, festival olahraga diadakan pada musim gugur.",
      "Anak-anak dibagi menjadi tim merah dan putih, lalu berlari, menari, dan sebagainya.",
      "Keluarga memberi dukungan sambil makan bekal."
    ],
    "keyVocabulary": [
      {
        "word": "運動会",
        "reading": "うんどうかい",
        "meaning": "festival olahraga"
      },
      {
        "word": "分かれる",
        "reading": "わかれる",
        "meaning": "terbagi"
      },
      {
        "word": "応援",
        "reading": "おうえん",
        "meaning": "dukungan, menyemangati"
      }
    ],
    "questions": [
      {
        "id": "hari-olahraga-sekolah-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "運動会{うんどうかい}は いつ 行{おこな}われますか。",
        "options": [
          "春",
          "夏",
          "秋",
          "冬"
        ],
        "answerIndex": 2,
        "explanation": "Teks: 秋に運動会が行われます."
      },
      {
        "id": "hari-olahraga-sekolah-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "家族{かぞく}は 何{なに}を しますか。",
        "options": [
          "一緒に走る",
          "お弁当を食べながら応援する",
          "ダンスを教える",
          "写真だけ撮る"
        ],
        "answerIndex": 1,
        "explanation": "Teks: お弁当を食べながら応援してくれます."
      }
    ]
  },
  {
    "id": "r-q-aturan-sampah-besar",
    "slug": "aturan-sampah-besar",
    "title": "粗大{そだい}ゴミの出{だ}し方{かた}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "🛋️",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-baai",
      "n4-ukemi",
      "n4-made-ni"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "古{ふる}い机{つくえ}やいすなどの大{おお}きいゴミは「粗大{そだい}ゴミ」と呼{よ}ばれます。",
      "普通{ふつう}のゴミの日{ひ}には出{だ}せないので、市役所{しやくしょ}に電話{でんわ}かインターネットで申{もう}し込{こ}む必要{ひつよう}があります。",
      "出{だ}す場合{ばあい}は、コンビニで買{か}ったシールを貼{は}って、決{き}められた日{ひ}の朝{あさ}八時{はちじ}までに出{だ}してください。"
    ],
    "translation": [
      "Sampah besar seperti meja dan kursi bekas disebut “sodai gomi”.",
      "Karena tidak bisa dibuang pada hari sampah biasa, perlu mendaftar ke balai kota lewat telepon atau internet.",
      "Saat membuangnya, tempelkan stiker yang dibeli di minimarket, lalu keluarkan paling lambat pukul delapan pagi pada hari yang ditentukan."
    ],
    "keyVocabulary": [
      {
        "word": "粗大ゴミ",
        "reading": "そだいごみ",
        "meaning": "sampah ukuran besar"
      },
      {
        "word": "申し込む",
        "reading": "もうしこむ",
        "meaning": "mendaftar"
      },
      {
        "word": "貼る",
        "reading": "はる",
        "meaning": "menempel"
      }
    ],
    "questions": [
      {
        "id": "aturan-sampah-besar-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "粗大{そだい}ゴミを出{だ}す前{まえ}に 必要{ひつよう}なことは 何{なん}ですか。",
        "options": [
          "市役所に申し込む",
          "友達に聞く",
          "ゴミを小さく切る",
          "何もしない"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 市役所に…申し込む必要があります."
      },
      {
        "id": "aturan-sampah-besar-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "シールは どこで 買{か}いますか。",
        "options": [
          "駅",
          "コンビニ",
          "病院",
          "銀行"
        ],
        "answerIndex": 1,
        "explanation": "Teks: コンビニで買ったシールを貼って."
      }
    ]
  },
  {
    "id": "r-q-belajar-memasak-dari-video",
    "slug": "belajar-memasak-dari-video",
    "title": "動画{どうが}で料理{りょうり}を覚{おぼ}える",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Makanan",
    "thumb": {
      "emoji": "📹",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-you-ni-naru",
      "n4-nagara",
      "n4-te-miru"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}に来{き}たばかりのころ、私{わたし}は料理{りょうり}がほとんどできませんでした。",
      "でも、インターネットの料理{りょうり}動画{どうが}を見{み}ながら作{つく}ってみたら、少{すこ}しずつ上手{じょうず}になりました。",
      "今{いま}では、日本{にほん}の家庭{かてい}料理{りょうり}も作{つく}れるようになりました。"
    ],
    "translation": [
      "Waktu baru datang ke Jepang, saya hampir tidak bisa memasak.",
      "Tetapi setelah mencoba memasak sambil menonton video masak di internet, sedikit demi sedikit saya jadi pandai.",
      "Sekarang saya sudah bisa membuat masakan rumahan Jepang juga."
    ],
    "keyVocabulary": [
      {
        "word": "動画",
        "reading": "どうが",
        "meaning": "video"
      },
      {
        "word": "ほとんど",
        "reading": "ほとんど",
        "meaning": "hampir (tidak)"
      },
      {
        "word": "家庭料理",
        "reading": "かていりょうり",
        "meaning": "masakan rumahan"
      }
    ],
    "questions": [
      {
        "id": "belajar-memasak-dari-video-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "日本{にほん}に来{き}たころ、筆者{ひっしゃ}は どうでしたか。",
        "options": [
          "料理が上手だった",
          "料理がほとんどできなかった",
          "毎日外で食べた",
          "料理教室に通った"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 料理がほとんどできませんでした."
      },
      {
        "id": "belajar-memasak-dari-video-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}は 何{なに}で 料理{りょうり}を覚{おぼ}えましたか。",
        "options": [
          "本",
          "料理教室",
          "インターネットの動画",
          "友達"
        ],
        "answerIndex": 2,
        "explanation": "Teks: 料理動画を見ながら作ってみたら."
      }
    ]
  },
  {
    "id": "r-q-mengirim-paket-ke-kampung",
    "slug": "mengirim-paket-ke-kampung",
    "title": "国{くに}へ荷物{にもつ}を送{おく}る",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "📮",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-tame-ni",
      "n4-baai",
      "n4-ni-tsuite"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "家族{かぞく}にお土産{みやげ}を送{おく}るために、郵便局{ゆうびんきょく}へ行{い}きました。",
      "海外{かいがい}へ送{おく}る場合{ばあい}は、中身{なかみ}について書{か}く用紙{ようし}に記入{きにゅう}しなければなりません。",
      "船便{ふなびん}は安{やす}いですが、届{とど}くまでに一{いっ}か月{げつ}以上{いじょう}かかることもあります。"
    ],
    "translation": [
      "Saya pergi ke kantor pos untuk mengirim oleh-oleh kepada keluarga.",
      "Kalau mengirim ke luar negeri, harus mengisi formulir tentang isi paketnya.",
      "Pengiriman laut murah, tetapi kadang butuh lebih dari sebulan sampai tiba."
    ],
    "keyVocabulary": [
      {
        "word": "郵便局",
        "reading": "ゆうびんきょく",
        "meaning": "kantor pos"
      },
      {
        "word": "中身",
        "reading": "なかみ",
        "meaning": "isi"
      },
      {
        "word": "船便",
        "reading": "ふなびん",
        "meaning": "kiriman laut"
      }
    ],
    "questions": [
      {
        "id": "mengirim-paket-ke-kampung-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "海外{かいがい}へ送{おく}る場合{ばあい}、何{なに}をしなければなりませんか。",
        "options": [
          "中身について用紙に書く",
          "箱を買う",
          "パスポートを見せる",
          "写真を撮る"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 中身について書く用紙に記入しなければなりません."
      },
      {
        "id": "mengirim-paket-ke-kampung-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "船便{ふなびん}について正{ただ}しいものはどれですか。",
        "options": [
          "高くて速い",
          "安いが時間がかかる",
          "送れない",
          "毎日届く"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 船便は安いですが…一か月以上かかることもあります."
      }
    ]
  },
  {
    "id": "r-q-kebun-di-atap-gedung",
    "slug": "kebun-di-atap-gedung",
    "title": "ビルの屋上{おくじょう}の畑{はたけ}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Lingkungan",
    "thumb": {
      "emoji": "🥬",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-ukemi",
      "n4-kanou-kei",
      "n4-node"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "東京{とうきょう}のビルの屋上{おくじょう}で、野菜{やさい}を育{そだ}てる人{ひと}が増{ふ}えています。",
      "会社員{かいしゃいん}が昼休{ひるやす}みに水{みず}をやったり、週末{しゅうまつ}に収穫{しゅうかく}したりするそうです。",
      "都会{とかい}でも土{つち}に触{さわ}れるので、いい気分転換{きぶんてんかん}になると言{い}われています。"
    ],
    "translation": [
      "Di Tokyo, orang yang menanam sayur di atap gedung bertambah.",
      "Katanya para pegawai menyiramnya saat istirahat siang dan memanennya di akhir pekan.",
      "Karena bisa menyentuh tanah walau di kota, ini dikatakan menjadi penyegar suasana hati."
    ],
    "keyVocabulary": [
      {
        "word": "屋上",
        "reading": "おくじょう",
        "meaning": "atap gedung"
      },
      {
        "word": "育てる",
        "reading": "そだてる",
        "meaning": "menanam, membesarkan"
      },
      {
        "word": "収穫",
        "reading": "しゅうかく",
        "meaning": "panen"
      }
    ],
    "questions": [
      {
        "id": "kebun-di-atap-gedung-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "会社員{かいしゃいん}は いつ 水{みず}を やりますか。",
        "options": [
          "朝早く",
          "昼休み",
          "夜",
          "休みの日だけ"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 昼休みに水をやったり."
      },
      {
        "id": "kebun-di-atap-gedung-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "屋上{おくじょう}の畑{はたけ}は どんな いい点{てん}が ありますか。",
        "options": [
          "お金がもらえる",
          "気分転換になる",
          "会社が近くなる",
          "野菜が安くなる"
        ],
        "answerIndex": 1,
        "explanation": "Teks: いい気分転換になると言われています."
      }
    ]
  },
  {
    "id": "r-q-tanda-tangan-hanko",
    "slug": "tanda-tangan-hanko",
    "title": "はんこの文化{ぶんか}",
    "level": "N4",
    "minutes": 4,
    "difficulty": 2,
    "topic": "Budaya",
    "thumb": {
      "emoji": "🔖",
      "from": "#bae6fd",
      "to": "#0284c7"
    },
    "grammar": [
      "n4-ukemi",
      "n4-te-iku-kuru",
      "n4-kamoshirenai"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}では、サインの代{か}わりに「はんこ」がよく使{つか}われてきました。",
      "銀行{ぎんこう}の口座{こうざ}を作{つく}るときや、荷物{にもつ}を受{う}け取{と}るときにも押{お}します。",
      "でも最近{さいきん}は、はんこがいらない手続{てつづ}きが増{ふ}えてきました。これから、もっと少{すく}なくなるかもしれません。"
    ],
    "translation": [
      "Di Jepang, “hanko” (stempel nama) sudah lama sering dipakai sebagai pengganti tanda tangan.",
      "Stempel ini dibubuhkan saat membuka rekening bank atau menerima paket.",
      "Tetapi akhir-akhir ini prosedur yang tidak memerlukan hanko bertambah. Ke depan, mungkin pemakaiannya akan makin berkurang."
    ],
    "keyVocabulary": [
      {
        "word": "口座",
        "reading": "こうざ",
        "meaning": "rekening"
      },
      {
        "word": "押す",
        "reading": "おす",
        "meaning": "menekan, membubuhkan"
      },
      {
        "word": "手続き",
        "reading": "てつづき",
        "meaning": "prosedur"
      }
    ],
    "questions": [
      {
        "id": "tanda-tangan-hanko-q1",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "はんこは 何{なに}の代{か}わりに 使{つか}われてきましたか。",
        "options": [
          "お金",
          "サイン",
          "名刺",
          "パスポート"
        ],
        "answerIndex": 1,
        "explanation": "Teks: サインの代わりに「はんこ」が…使われてきました."
      },
      {
        "id": "tanda-tangan-hanko-q2",
        "level": "N4",
        "category": "membaca",
        "source": "platform",
        "prompt": "最近{さいきん}どう変{か}わってきましたか。",
        "options": [
          "はんこが必要な手続きが増えた",
          "はんこがいらない手続きが増えた",
          "はんこが高くなった",
          "サインが禁止された"
        ],
        "answerIndex": 1,
        "explanation": "Teks: はんこがいらない手続きが増えてきました."
      }
    ]
  },
  {
    "id": "r-q-lowongan-butuh-n2",
    "slug": "lowongan-butuh-n2",
    "title": "求人{きゅうじん}で求{もと}められる日本語{にほんご}レベル",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Karier",
    "thumb": {
      "emoji": "📋",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-to-wa-kagiranai",
      "n3-kara-to-itte",
      "n3-ni-totte"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "外国人{がいこくじん}向{む}けの求人{きゅうじん}では、「JLPT N2以上{いじょう}」という条件{じょうけん}をよく見{み}かける。",
      "しかし、資格{しかく}を持{も}っているからといって、すぐに仕事{しごと}で日本語{にほんご}が使{つか}えるとは限{かぎ}らない。",
      "会社{かいしゃ}にとっては、電話{でんわ}対応{たいおう}や報告{ほうこく}ができるかどうかも大切{たいせつ}なポイントだ。"
    ],
    "translation": [
      "Di lowongan untuk orang asing, syarat “JLPT N2 ke atas” sering terlihat.",
      "Namun, hanya karena memiliki sertifikat, belum tentu langsung bisa memakai bahasa Jepang dalam pekerjaan.",
      "Bagi perusahaan, bisa tidaknya menangani telepon dan membuat laporan juga merupakan poin penting."
    ],
    "keyVocabulary": [
      {
        "word": "求人",
        "reading": "きゅうじん",
        "meaning": "lowongan kerja"
      },
      {
        "word": "条件",
        "reading": "じょうけん",
        "meaning": "syarat"
      },
      {
        "word": "資格",
        "reading": "しかく",
        "meaning": "sertifikat, kualifikasi"
      }
    ],
    "questions": [
      {
        "id": "lowongan-butuh-n2-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "求人{きゅうじん}でよく見{み}かける条件{じょうけん}は何{なん}か。",
        "options": [
          "N5以上",
          "N2以上",
          "英語が話せる",
          "運転免許"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 「JLPT N2以上」という条件をよく見かける."
      },
      {
        "id": "lowongan-butuh-n2-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "会社{かいしゃ}が大切{たいせつ}にするポイントとして挙{あ}げられているのはどれか。",
        "options": [
          "電話対応や報告ができるか",
          "資格の数",
          "出身大学",
          "年齢"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 電話対応や報告ができるかどうかも大切."
      }
    ]
  },
  {
    "id": "r-q-cuti-tahunan-sulit-diambil",
    "slug": "cuti-tahunan-sulit-diambil",
    "title": "取{と}りにくい有給休暇{ゆうきゅうきゅうか}",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Kerja",
    "thumb": {
      "emoji": "🏖️",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-ni-yotte",
      "n3-gachi",
      "n3-beki"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}では、法律{ほうりつ}によって働{はたら}く人{ひと}に有給休暇{ゆうきゅうきゅうか}が与{あた}えられている。",
      "しかし、同僚{どうりょう}に迷惑{めいわく}をかけたくないという気持{きも}ちから、休{やす}みを取{と}るのを遠慮{えんりょ}しがちな人{ひと}も多{おお}い。",
      "心{こころ}と体{からだ}を休{やす}めるために、計画的{けいかくてき}に休{やす}みを取{と}るべきだという声{こえ}が高{たか}まっている。"
    ],
    "translation": [
      "Di Jepang, berdasarkan hukum, pekerja diberikan cuti berbayar.",
      "Namun, banyak orang yang cenderung sungkan mengambil cuti karena tidak ingin merepotkan rekan kerja.",
      "Suara yang menyatakan cuti sebaiknya diambil secara terencana demi mengistirahatkan pikiran dan tubuh semakin kuat."
    ],
    "keyVocabulary": [
      {
        "word": "有給休暇",
        "reading": "ゆうきゅうきゅうか",
        "meaning": "cuti berbayar"
      },
      {
        "word": "迷惑",
        "reading": "めいわく",
        "meaning": "merepotkan"
      },
      {
        "word": "遠慮",
        "reading": "えんりょ",
        "meaning": "sungkan"
      }
    ],
    "questions": [
      {
        "id": "cuti-tahunan-sulit-diambil-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "休{やす}みを取{と}るのを遠慮{えんりょ}する理由{りゆう}は何{なん}か。",
        "options": [
          "給料が減るから",
          "同僚に迷惑をかけたくないから",
          "休みがないから",
          "上司が怖いから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 同僚に迷惑をかけたくないという気持ちから."
      },
      {
        "id": "cuti-tahunan-sulit-diambil-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "どんな声{こえ}が高{たか}まっているか。",
        "options": [
          "休みを減らすべきだ",
          "計画的に休みを取るべきだ",
          "法律を変えるべきだ",
          "残業を増やすべきだ"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 計画的に休みを取るべきだという声が高まっている."
      }
    ]
  },
  {
    "id": "r-q-kereta-wanita-saja",
    "slug": "kereta-wanita-saja",
    "title": "女性専用車{じょせいせんようしゃ}",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Kehidupan",
    "thumb": {
      "emoji": "🚺",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-tame-sebab",
      "n3-toshite",
      "n3-ni-kanshite"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "都市部{としぶ}の電車{でんしゃ}には、朝{あさ}のラッシュ時{じ}などに女性{じょせい}だけが乗{の}れる「女性専用車{じょせいせんようしゃ}」がある。",
      "混雑{こんざつ}した車内{しゃない}での痴漢{ちかん}被害{ひがい}を防{ふせ}ぐための対策{たいさく}として導入{どうにゅう}された。",
      "小学生{しょうがくせい}以下{いか}の男{おとこ}の子{こ}や、体{からだ}の不自由{ふじゆう}な人{ひと}も乗{の}ることができる路線{ろせん}が多{おお}い。"
    ],
    "translation": [
      "Kereta di perkotaan memiliki “gerbong khusus wanita” yang hanya boleh dinaiki wanita, misalnya pada jam sibuk pagi.",
      "Gerbong ini diperkenalkan sebagai langkah untuk mencegah pelecehan di dalam gerbong yang padat.",
      "Di banyak jalur, anak laki-laki usia SD ke bawah dan penyandang disabilitas juga boleh naik."
    ],
    "keyVocabulary": [
      {
        "word": "専用",
        "reading": "せんよう",
        "meaning": "khusus"
      },
      {
        "word": "被害",
        "reading": "ひがい",
        "meaning": "kerugian, korban"
      },
      {
        "word": "対策",
        "reading": "たいさく",
        "meaning": "langkah penanggulangan"
      }
    ],
    "questions": [
      {
        "id": "kereta-wanita-saja-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "女性専用車{じょせいせんようしゃ}が導入{どうにゅう}された目的{もくてき}は何{なん}か。",
        "options": [
          "座席を増やすため",
          "痴漢被害を防ぐため",
          "料金を上げるため",
          "観光客のため"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 痴漢被害を防ぐための対策として導入された."
      },
      {
        "id": "kereta-wanita-saja-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "女性{じょせい}以外{いがい}で乗{の}れる人{ひと}として挙{あ}げられているのはどれか。",
        "options": [
          "大学生の男性",
          "小学生以下の男の子",
          "会社員の男性",
          "高校生の男性"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 小学生以下の男の子…も乗ることができる."
      }
    ]
  },
  {
    "id": "r-q-toko-makanan-halal",
    "slug": "toko-makanan-halal",
    "title": "増{ふ}えるハラール対応{たいおう}の店{みせ}",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Makanan",
    "thumb": {
      "emoji": "🥘",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-ni-tsurete",
      "n3-okage-de",
      "n3-ue-ni"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "イスラム教徒{きょうと}の観光客{かんこうきゃく}や住民{じゅうみん}が増{ふ}えるにつれて、ハラール対応{たいおう}のレストランも増{ふ}えてきた。",
      "空港{くうこう}や大{おお}きな駅{えき}には、祈{いの}りのための部屋{へや}がある場所{ばしょ}もある。",
      "インドネシアから来{き}た人{ひと}の中{なか}には、こうした店{みせ}のおかげで安心{あんしん}して食事{しょくじ}ができるという人{ひと}が多{おお}い。"
    ],
    "translation": [
      "Seiring bertambahnya wisatawan dan penduduk muslim, restoran yang menyediakan makanan halal juga bertambah.",
      "Di bandara dan stasiun besar, ada juga tempat yang memiliki ruang untuk beribadah.",
      "Banyak orang dari Indonesia mengatakan bisa makan dengan tenang berkat toko-toko seperti ini."
    ],
    "keyVocabulary": [
      {
        "word": "対応",
        "reading": "たいおう",
        "meaning": "menyesuaikan, melayani"
      },
      {
        "word": "祈る",
        "reading": "いのる",
        "meaning": "berdoa"
      },
      {
        "word": "安心",
        "reading": "あんしん",
        "meaning": "tenang, lega"
      }
    ],
    "questions": [
      {
        "id": "toko-makanan-halal-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "ハラール対応{たいおう}の店{みせ}が増{ふ}えた理由{りゆう}は何{なん}か。",
        "options": [
          "料理が安いから",
          "イスラム教徒の観光客や住民が増えたから",
          "法律ができたから",
          "日本人に人気だから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: イスラム教徒の観光客や住民が増えるにつれて."
      },
      {
        "id": "toko-makanan-halal-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "空港{くうこう}や大{おお}きな駅{えき}にある場合{ばあい}があるものはどれか。",
        "options": [
          "祈りのための部屋",
          "ハラールの市場",
          "モスク",
          "料理教室"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 祈りのための部屋がある場所もある."
      }
    ]
  },
  {
    "id": "r-q-lansia-yang-tetap-bekerja",
    "slug": "lansia-yang-tetap-bekerja",
    "title": "働{はたら}き続{つづ}ける高齢者{こうれいしゃ}",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Masyarakat",
    "thumb": {
      "emoji": "👴",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-ni-yotte",
      "n3-ippou-de",
      "n3-wake-da"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}では、六十五歳{ろくじゅうごさい}を過{す}ぎても働{はたら}き続{つづ}ける人{ひと}が増{ふ}えている。",
      "健康{けんこう}のためや社会{しゃかい}とつながるために働{はたら}く人{ひと}がいる一方{いっぽう}で、年金{ねんきん}だけでは生活{せいかつ}が苦{くる}しいという理由{りゆう}の人{ひと}もいる。",
      "長{なが}く働{はたら}ける環境{かんきょう}を整{ととの}えることが、人手不足{ひとでぶそく}の解決{かいけつ}にもつながるわけだ。"
    ],
    "translation": [
      "Di Jepang, orang yang terus bekerja meski sudah lewat 65 tahun bertambah.",
      "Ada yang bekerja demi kesehatan atau agar tetap terhubung dengan masyarakat, di sisi lain ada juga yang beralasan hidup sulit jika hanya dengan pensiun.",
      "Jadi, menata lingkungan agar orang bisa bekerja lebih lama juga berkaitan dengan penyelesaian kekurangan tenaga kerja."
    ],
    "keyVocabulary": [
      {
        "word": "高齢者",
        "reading": "こうれいしゃ",
        "meaning": "lansia"
      },
      {
        "word": "年金",
        "reading": "ねんきん",
        "meaning": "uang pensiun"
      },
      {
        "word": "整える",
        "reading": "ととのえる",
        "meaning": "menata"
      }
    ],
    "questions": [
      {
        "id": "lansia-yang-tetap-bekerja-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "高齢者{こうれいしゃ}が働{はたら}く理由{りゆう}として挙{あ}げられていないのはどれか。",
        "options": [
          "健康のため",
          "社会とつながるため",
          "年金だけでは苦しいため",
          "旅行に行くため"
        ],
        "answerIndex": 3,
        "explanation": "Teks menyebut kesehatan, terhubung dengan masyarakat, dan pensiun tidak cukup."
      },
      {
        "id": "lansia-yang-tetap-bekerja-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "長{なが}く働{はたら}ける環境{かんきょう}を整{ととの}えると、何{なに}につながるか。",
        "options": [
          "人手不足の解決",
          "年金の増加",
          "若者の減少",
          "給料の低下"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 人手不足の解決にもつながるわけだ."
      }
    ]
  },
  {
    "id": "r-q-klinik-24-jam",
    "slug": "klinik-24-jam",
    "title": "夜間{やかん}に具合{ぐあい}が悪{わる}くなったら",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Kesehatan",
    "thumb": {
      "emoji": "🏥",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-uchi-ni",
      "n3-ba-ii",
      "n3-osore-ga-aru"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "夜{よる}遅{おそ}くに急{きゅう}に熱{ねつ}が出{で}たとき、どこへ行{い}けばいいか迷{まよ}う人{ひと}は少{すく}なくない。",
      "多{おお}くの地域{ちいき}には、夜間{やかん}や休日{きゅうじつ}にも診察{しんさつ}する「休日夜間急患{きゅうじつやかんきゅうかん}センター」がある。",
      "命{いのち}にかかわるおそれがある場合{ばあい}はすぐに救急車{きゅうきゅうしゃ}を呼{よ}ぶべきだが、元気{げんき}なうちに近{ちか}くの病院{びょういん}を調{しら}べておくと安心{あんしん}だ。"
    ],
    "translation": [
      "Tidak sedikit orang yang bingung harus ke mana saat tiba-tiba demam larut malam.",
      "Di banyak daerah ada “pusat layanan darurat hari libur dan malam” yang memeriksa pasien di malam hari maupun hari libur.",
      "Jika dikhawatirkan mengancam nyawa, harus segera memanggil ambulans, tetapi akan lebih tenang bila mencari tahu rumah sakit terdekat selagi masih sehat."
    ],
    "keyVocabulary": [
      {
        "word": "診察",
        "reading": "しんさつ",
        "meaning": "pemeriksaan dokter"
      },
      {
        "word": "救急車",
        "reading": "きゅうきゅうしゃ",
        "meaning": "ambulans"
      },
      {
        "word": "迷う",
        "reading": "まよう",
        "meaning": "bingung"
      }
    ],
    "questions": [
      {
        "id": "klinik-24-jam-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "夜間{やかん}や休日{きゅうじつ}にも診察{しんさつ}するのはどこか。",
        "options": [
          "学校",
          "休日夜間急患センター",
          "市役所",
          "薬局"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 夜間や休日にも診察する「休日夜間急患センター」."
      },
      {
        "id": "klinik-24-jam-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "元気{げんき}なうちにしておくといいことは何{なん}か。",
        "options": [
          "救急車を呼ぶ",
          "近くの病院を調べておく",
          "薬をたくさん買う",
          "引っ越す"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 元気なうちに近くの病院を調べておくと安心だ."
      }
    ]
  },
  {
    "id": "r-q-budaya-kartu-nama",
    "slug": "budaya-kartu-nama",
    "title": "名刺交換{めいしこうかん}のマナー",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Kerja",
    "thumb": {
      "emoji": "📇",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-toshite",
      "n3-tame-sebab"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}のビジネスでは、初対面{しょたいめん}の相手{あいて}と名刺{めいし}を交換{こうかん}するのが一般的{いっぱんてき}だ。",
      "名刺{めいし}は相手{あいて}の「顔{かお}」として扱{あつか}われるため、両手{りょうて}で受{う}け取{と}り、すぐにしまわずに机{つくえ}の上{うえ}に置{お}いておく。",
      "細{こま}かいルールだが、相手{あいて}への敬意{けいい}を示{しめ}す大切{たいせつ}な習慣{しゅうかん}である。"
    ],
    "translation": [
      "Dalam bisnis Jepang, bertukar kartu nama dengan orang yang baru pertama kali ditemui adalah hal umum.",
      "Kartu nama diperlakukan sebagai “wajah” orang tersebut, sehingga diterima dengan dua tangan dan tidak langsung disimpan, melainkan diletakkan di atas meja.",
      "Aturannya detail, tetapi ini kebiasaan penting untuk menunjukkan rasa hormat kepada lawan bicara."
    ],
    "keyVocabulary": [
      {
        "word": "名刺",
        "reading": "めいし",
        "meaning": "kartu nama"
      },
      {
        "word": "初対面",
        "reading": "しょたいめん",
        "meaning": "pertemuan pertama"
      },
      {
        "word": "敬意",
        "reading": "けいい",
        "meaning": "rasa hormat"
      }
    ],
    "questions": [
      {
        "id": "budaya-kartu-nama-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "名刺{めいし}を受{う}け取{と}ったあと、どうするか。",
        "options": [
          "すぐにかばんにしまう",
          "机の上に置いておく",
          "返す",
          "メモを書く"
        ],
        "answerIndex": 1,
        "explanation": "Teks: すぐにしまわずに机の上に置いておく."
      },
      {
        "id": "budaya-kartu-nama-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "名刺交換{めいしこうかん}のルールは何{なに}を示{しめ}すためのものか。",
        "options": [
          "会社の大きさ",
          "相手への敬意",
          "自分の能力",
          "名前の読み方"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 相手への敬意を示す大切な習慣."
      }
    ]
  },
  {
    "id": "r-q-kamar-kapsul",
    "slug": "kamar-kapsul",
    "title": "カプセルホテル",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Pariwisata",
    "thumb": {
      "emoji": "🛏️",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-ni-kurabete",
      "n3-ue-ni",
      "n3-ni-totte"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "カプセルホテルは、ベッド一{ひと}つ分{ぶん}ほどの小{ちい}さな空間{くうかん}に泊{と}まるホテルだ。",
      "普通{ふつう}のホテルに比{くら}べて料金{りょうきん}が安{やす}いうえに、駅{えき}の近{ちか}くにあることが多{おお}い。",
      "終電{しゅうでん}を逃{のが}した会社員{かいしゃいん}や、旅行費{りょこうひ}を節約{せつやく}したい若者{わかもの}にとって便利{べんり}な宿泊先{しゅくはくさき}となっている。"
    ],
    "translation": [
      "Hotel kapsul adalah hotel tempat menginap di ruang kecil kira-kira seukuran satu tempat tidur.",
      "Dibanding hotel biasa tarifnya murah, selain itu sering berada di dekat stasiun.",
      "Hotel ini menjadi tempat menginap yang praktis bagi pegawai yang ketinggalan kereta terakhir atau anak muda yang ingin menghemat biaya perjalanan."
    ],
    "keyVocabulary": [
      {
        "word": "空間",
        "reading": "くうかん",
        "meaning": "ruang"
      },
      {
        "word": "終電",
        "reading": "しゅうでん",
        "meaning": "kereta terakhir"
      },
      {
        "word": "宿泊先",
        "reading": "しゅくはくさき",
        "meaning": "tempat menginap"
      }
    ],
    "questions": [
      {
        "id": "kamar-kapsul-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "カプセルホテルの特徴{とくちょう}として正{ただ}しいものはどれか。",
        "options": [
          "部屋が広い",
          "料金が安い",
          "山の中にある",
          "食事が豪華"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 料金が安いうえに."
      },
      {
        "id": "kamar-kapsul-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "カプセルホテルが便利{べんり}な人{ひと}として挙{あ}げられているのはどれか。",
        "options": [
          "家族旅行の人",
          "終電を逃した会社員",
          "長く住みたい人",
          "子ども"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 終電を逃した会社員…にとって便利."
      }
    ]
  },
  {
    "id": "r-q-musim-tahun-ajaran-baru",
    "slug": "musim-tahun-ajaran-baru",
    "title": "四月{しがつ}は新生活{しんせいかつ}の季節{きせつ}",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Budaya",
    "thumb": {
      "emoji": "🎒",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-tabi-ni",
      "n3-ni-yotte",
      "n3-uchi-ni"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}では、学校{がっこう}も会社{かいしゃ}も多{おお}くが四月{しがつ}に新{あたら}しい年度{ねんど}を始{はじ}める。",
      "そのため春{はる}は、入学{にゅうがく}や入社{にゅうしゃ}、引{ひ}っ越{こ}しなど、生活{せいかつ}が大{おお}きく変{か}わる季節{きせつ}だ。",
      "桜{さくら}を見{み}るたびに、初{はじ}めて日本{にほん}に来{き}た日{ひ}を思{おも}い出{だ}すという留学生{りゅうがくせい}もいる。"
    ],
    "translation": [
      "Di Jepang, banyak sekolah maupun perusahaan memulai tahun ajaran atau tahun fiskal baru pada bulan April.",
      "Karena itu, musim semi adalah musim ketika kehidupan banyak berubah, seperti masuk sekolah, masuk kerja, dan pindah rumah.",
      "Ada juga mahasiswa asing yang setiap kali melihat sakura teringat hari pertama datang ke Jepang."
    ],
    "keyVocabulary": [
      {
        "word": "年度",
        "reading": "ねんど",
        "meaning": "tahun ajaran/fiskal"
      },
      {
        "word": "入社",
        "reading": "にゅうしゃ",
        "meaning": "masuk perusahaan"
      },
      {
        "word": "引っ越し",
        "reading": "ひっこし",
        "meaning": "pindah rumah"
      }
    ],
    "questions": [
      {
        "id": "musim-tahun-ajaran-baru-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "日本{にほん}の多{おお}くの学校{がっこう}や会社{かいしゃ}は、いつ新{あたら}しい年度{ねんど}を始{はじ}めるか。",
        "options": [
          "一月",
          "四月",
          "九月",
          "十月"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 四月に新しい年度を始める."
      },
      {
        "id": "musim-tahun-ajaran-baru-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "ある留学生{りゅうがくせい}は桜{さくら}を見{み}るたびに何{なに}を思{おも}い出{だ}すか。",
        "options": [
          "家族",
          "初めて日本に来た日",
          "卒業式",
          "国の料理"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 初めて日本に来た日を思い出す."
      }
    ]
  },
  {
    "id": "r-q-mesin-kasir-mandiri",
    "slug": "mesin-kasir-mandiri",
    "title": "広{ひろ}がるセルフレジ",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Teknologi",
    "thumb": {
      "emoji": "🧾",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-ni-yotte",
      "n3-ippou-de",
      "n3-gachi"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "スーパーやコンビニで、客{きゃく}が自分{じぶん}で会計{かいけい}をする「セルフレジ」が増{ふ}えている。",
      "人手不足{ひとでぶそく}に悩{なや}む店{みせ}にとって、レジの人数{にんずう}を減{へ}らせるのは大{おお}きなメリットだ。",
      "一方{いっぽう}で、高齢者{こうれいしゃ}などは操作{そうさ}に迷{まよ}いがちで、店員{てんいん}のサポートが必要{ひつよう}な場面{ばめん}も多{おお}い。"
    ],
    "translation": [
      "Di supermarket dan minimarket, “kasir mandiri” tempat pelanggan membayar sendiri makin banyak.",
      "Bagi toko yang kesulitan tenaga kerja, bisa mengurangi jumlah petugas kasir adalah keuntungan besar.",
      "Di sisi lain, lansia dan lainnya cenderung bingung mengoperasikannya, sehingga banyak situasi yang memerlukan bantuan petugas."
    ],
    "keyVocabulary": [
      {
        "word": "会計",
        "reading": "かいけい",
        "meaning": "pembayaran (di kasir)"
      },
      {
        "word": "操作",
        "reading": "そうさ",
        "meaning": "pengoperasian"
      },
      {
        "word": "場面",
        "reading": "ばめん",
        "meaning": "situasi"
      }
    ],
    "questions": [
      {
        "id": "mesin-kasir-mandiri-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "店{みせ}にとってのセルフレジのメリットは何{なん}か。",
        "options": [
          "商品が安くなる",
          "レジの人数を減らせる",
          "客が増える",
          "店が広くなる"
        ],
        "answerIndex": 1,
        "explanation": "Teks: レジの人数を減らせるのは大きなメリットだ."
      },
      {
        "id": "mesin-kasir-mandiri-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "セルフレジの課題{かだい}として書{か}かれているものはどれか。",
        "options": [
          "機械が高い",
          "高齢者が操作に迷いがち",
          "時間がかかる",
          "現金が使えない"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 高齢者などは操作に迷いがちで."
      }
    ]
  },
  {
    "id": "r-q-sistem-magang-teknis",
    "slug": "sistem-magang-teknis",
    "title": "技能実習{ぎのうじっしゅう}から育成就労{いくせいしゅうろう}へ",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Kerja",
    "thumb": {
      "emoji": "🔧",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-ni-kawatte",
      "n3-ni-kanshite",
      "n3-wo-tooshite"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "外国人{がいこくじん}が日本{にほん}で働{はたら}きながら技術{ぎじゅつ}を学{まな}ぶ「技能実習{ぎのうじっしゅう}制度{せいど}」は、長{なが}い間{あいだ}さまざまな問題{もんだい}が指摘{してき}されてきた。",
      "そのため政府{せいふ}は、この制度{せいど}に代{か}わる新{あたら}しい「育成就労{いくせいしゅうろう}制度{せいど}」を作{つく}ることを決{き}めた。",
      "働{はたら}く人{ひと}の権利{けんり}をどう守{まも}るかに関{かん}して、今後{こんご}も議論{ぎろん}が続{つづ}くと見{み}られている。"
    ],
    "translation": [
      "“Sistem magang teknis”, tempat orang asing bekerja sambil belajar keterampilan di Jepang, sudah lama dikritik karena berbagai masalah.",
      "Karena itu pemerintah memutuskan membuat “sistem pembinaan kerja” baru sebagai pengganti sistem ini.",
      "Mengenai cara melindungi hak pekerja, diskusi diperkirakan akan terus berlanjut."
    ],
    "keyVocabulary": [
      {
        "word": "制度",
        "reading": "せいど",
        "meaning": "sistem"
      },
      {
        "word": "指摘",
        "reading": "してき",
        "meaning": "menunjukkan (masalah)"
      },
      {
        "word": "権利",
        "reading": "けんり",
        "meaning": "hak"
      }
    ],
    "questions": [
      {
        "id": "sistem-magang-teknis-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "政府{せいふ}が決{き}めたことは何{なん}か。",
        "options": [
          "外国人の受け入れをやめる",
          "技能実習制度に代わる新しい制度を作る",
          "給料を下げる",
          "日本語試験をなくす"
        ],
        "answerIndex": 1,
        "explanation": "Teks: この制度に代わる新しい「育成就労制度」を作ることを決めた."
      },
      {
        "id": "sistem-magang-teknis-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "今後{こんご}も議論{ぎろん}が続{つづ}くと見{み}られているのは何{なに}に関{かん}してか。",
        "options": [
          "働く人の権利の守り方",
          "税金",
          "観光",
          "学校教育"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 働く人の権利をどう守るかに関して."
      }
    ]
  },
  {
    "id": "r-q-tradisi-akhir-tahun-bounenkai",
    "slug": "tradisi-akhir-tahun-bounenkai",
    "title": "忘年会{ぼうねんかい}の今{いま}",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Kerja",
    "thumb": {
      "emoji": "🍻",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-ni-kurabete",
      "n3-to-wa-kagiranai",
      "n3-ni-yotte"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "年末{ねんまつ}になると、職場{しょくば}の仲間{なかま}と一年{いちねん}の苦労{くろう}を忘{わす}れるための「忘年会{ぼうねんかい}」が開{ひら}かれる。",
      "しかし、以前{いぜん}に比{くら}べて参加{さんか}を強制{きょうせい}しない会社{かいしゃ}が増{ふ}え、昼{ひる}にランチ会{かい}にするところもある。",
      "お酒{さけ}の席{せき}が誰{だれ}にとっても楽{たの}しいとは限{かぎ}らないため、会社{かいしゃ}によってやり方{かた}が変{か}わってきている。"
    ],
    "translation": [
      "Menjelang akhir tahun, diadakan “bounenkai”, pesta untuk melupakan jerih payah setahun bersama rekan kerja.",
      "Namun, dibanding dulu, perusahaan yang tidak memaksa karyawan ikut bertambah, dan ada pula yang menggantinya dengan makan siang bersama.",
      "Karena acara minum alkohol belum tentu menyenangkan bagi semua orang, caranya mulai berubah tergantung perusahaan."
    ],
    "keyVocabulary": [
      {
        "word": "忘年会",
        "reading": "ぼうねんかい",
        "meaning": "pesta akhir tahun"
      },
      {
        "word": "苦労",
        "reading": "くろう",
        "meaning": "jerih payah"
      },
      {
        "word": "強制",
        "reading": "きょうせい",
        "meaning": "memaksa"
      }
    ],
    "questions": [
      {
        "id": "tradisi-akhir-tahun-bounenkai-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "忘年会{ぼうねんかい}は何{なん}のための会{かい}か。",
        "options": [
          "新入社員の歓迎",
          "一年の苦労を忘れるため",
          "社長の誕生日",
          "新年の挨拶"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 一年の苦労を忘れるための「忘年会」."
      },
      {
        "id": "tradisi-akhir-tahun-bounenkai-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "最近{さいきん}の変化{へんか}として正{ただ}しいものはどれか。",
        "options": [
          "参加を強制する会社が増えた",
          "昼にランチ会にする会社もある",
          "忘年会がなくなった",
          "お酒が禁止された"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 昼にランチ会にするところもある."
      }
    ]
  },
  {
    "id": "r-q-hemat-listrik-musim-panas",
    "slug": "hemat-listrik-musim-panas",
    "title": "夏{なつ}の節電{せつでん}",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Lingkungan",
    "thumb": {
      "emoji": "💡",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-ni-yotte",
      "n3-uchi-ni",
      "n3-beki"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "夏{なつ}はエアコンの使用{しよう}によって電気{でんき}の消費量{しょうひりょう}が増{ふ}える。",
      "カーテンで日差{ひざ}しを防{ふせ}いだり、扇風機{せんぷうき}を一緒{いっしょ}に使{つか}ったりすると、電気代{でんきだい}を抑{おさ}えることができる。",
      "ただし、暑{あつ}さを我慢{がまん}しすぎるのは危険{きけん}だ。熱中症{ねっちゅうしょう}にならないうちに、エアコンをためらわずに使{つか}うべきである。"
    ],
    "translation": [
      "Di musim panas, konsumsi listrik meningkat karena pemakaian AC.",
      "Dengan menghalangi sinar matahari memakai tirai atau sekaligus memakai kipas angin, biaya listrik bisa ditekan.",
      "Namun, terlalu menahan panas itu berbahaya. Sebelum terkena heatstroke, sebaiknya gunakan AC tanpa ragu."
    ],
    "keyVocabulary": [
      {
        "word": "節電",
        "reading": "せつでん",
        "meaning": "hemat listrik"
      },
      {
        "word": "日差し",
        "reading": "ひざし",
        "meaning": "sinar matahari"
      },
      {
        "word": "熱中症",
        "reading": "ねっちゅうしょう",
        "meaning": "heatstroke"
      }
    ],
    "questions": [
      {
        "id": "hemat-listrik-musim-panas-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "電気代{でんきだい}を抑{おさ}える方法{ほうほう}として挙{あ}げられているものはどれか。",
        "options": [
          "カーテンで日差しを防ぐ",
          "エアコンを一日中消す",
          "冷蔵庫を開けておく",
          "電気を全部消す"
        ],
        "answerIndex": 0,
        "explanation": "Teks: カーテンで日差しを防いだり…電気代を抑えることができる."
      },
      {
        "id": "hemat-listrik-musim-panas-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}の考{かんが}えに合{あ}うものはどれか。",
        "options": [
          "暑さはできるだけ我慢すべきだ",
          "熱中症にならないうちにエアコンを使うべきだ",
          "扇風機だけで十分だ",
          "エアコンは高いので使わないほうがいい"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 熱中症にならないうちに、エアコンをためらわずに使うべきである."
      }
    ]
  },
  {
    "id": "r-q-toko-barang-bekas-online",
    "slug": "toko-barang-bekas-online",
    "title": "広{ひろ}がるフリマアプリ",
    "level": "N3",
    "minutes": 5,
    "difficulty": 3,
    "topic": "Teknologi",
    "thumb": {
      "emoji": "♻️",
      "from": "#c7d2fe",
      "to": "#6366f1"
    },
    "grammar": [
      "n3-wo-tooshite",
      "n3-okage-de",
      "n3-osore-ga-aru"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "使{つか}わなくなった服{ふく}や本{ほん}を、スマホのアプリを通{とお}して個人{こじん}同士{どうし}で売{う}り買{か}いする人{ひと}が増{ふ}えている。",
      "不要{ふよう}な物{もの}を捨{す}てずに済{す}むおかげで、環境{かんきょう}にもやさしいと言{い}われている。",
      "ただし、写真{しゃしん}と実物{じつぶつ}が違{ちが}うなどのトラブルが起{お}きるおそれもあるため、相手{あいて}の評価{ひょうか}をよく確認{かくにん}することが大切{たいせつ}だ。"
    ],
    "translation": [
      "Orang yang memperjualbelikan pakaian dan buku yang tidak terpakai antarperorangan melalui aplikasi HP terus bertambah.",
      "Berkat tidak perlu membuang barang yang tidak diperlukan, cara ini dikatakan ramah lingkungan.",
      "Namun, ada kekhawatiran muncul masalah seperti foto berbeda dengan barang aslinya, jadi penting mengecek penilaian lawan transaksi dengan baik."
    ],
    "keyVocabulary": [
      {
        "word": "個人",
        "reading": "こじん",
        "meaning": "perorangan"
      },
      {
        "word": "実物",
        "reading": "じつぶつ",
        "meaning": "barang asli"
      },
      {
        "word": "評価",
        "reading": "ひょうか",
        "meaning": "penilaian, rating"
      }
    ],
    "questions": [
      {
        "id": "toko-barang-bekas-online-q1",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "フリマアプリが環境{かんきょう}にやさしいと言{い}われる理由{りゆう}は何{なん}か。",
        "options": [
          "送料が無料だから",
          "不要な物を捨てずに済むから",
          "紙を使わないから",
          "電気を使わないから"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 不要な物を捨てずに済むおかげで."
      },
      {
        "id": "toko-barang-bekas-online-q2",
        "level": "N3",
        "category": "membaca",
        "source": "platform",
        "prompt": "トラブルを防{ふせ}ぐために大切{たいせつ}なことは何{なん}か。",
        "options": [
          "安い物だけ買う",
          "相手の評価を確認する",
          "現金で払う",
          "写真を撮らない"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 相手の評価をよく確認することが大切だ."
      }
    ]
  },
  {
    "id": "r-q-investasi-kecil-nisa",
    "slug": "investasi-kecil-nisa",
    "title": "少額投資{しょうがくとうし}制度{せいど}と若者{わかもの}",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Ekonomi",
    "thumb": {
      "emoji": "📈",
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
      "税制{ぜいせい}の優遇{ゆうぐう}がある少額投資{しょうがくとうし}制度{せいど}の拡充{かくじゅう}に伴{ともな}い、投資{とうし}を始{はじ}める若者{わかもの}が増{ふ}えている。",
      "銀行{ぎんこう}に預{あず}けるだけではお金{かね}がほとんど増{ふ}えない反面{はんめん}、投資{とうし}には元本{がんぽん}が減{へ}るリスクもある。",
      "専門家{せんもんか}は、仕組{しく}みを十分{じゅうぶん}に理解{りかい}した上{うえ}で、無理{むり}のない金額{きんがく}から始{はじ}めるよう勧{すす}めている。"
    ],
    "translation": [
      "Seiring diperluasnya sistem investasi kecil yang mendapat keringanan pajak, anak muda yang mulai berinvestasi bertambah.",
      "Menabung di bank saja hampir tidak menambah uang, tetapi di sisi lain investasi juga berisiko mengurangi modal pokok.",
      "Para ahli menganjurkan untuk mulai dari jumlah yang tidak memberatkan setelah memahami mekanismenya dengan baik."
    ],
    "keyVocabulary": [
      {
        "word": "優遇",
        "reading": "ゆうぐう",
        "meaning": "keringanan, perlakuan istimewa"
      },
      {
        "word": "元本",
        "reading": "がんぽん",
        "meaning": "modal pokok"
      },
      {
        "word": "仕組み",
        "reading": "しくみ",
        "meaning": "mekanisme"
      }
    ],
    "questions": [
      {
        "id": "investasi-kecil-nisa-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "若者{わかもの}が投資{とうし}を始{はじ}めている背景{はいけい}は何{なん}か。",
        "options": [
          "銀行の金利が上がった",
          "制度の拡充",
          "給料が増えた",
          "税金が上がった"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 少額投資制度の拡充に伴い."
      },
      {
        "id": "investasi-kecil-nisa-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "専門家{せんもんか}の勧{すす}めに合{あ}うものはどれか。",
        "options": [
          "借金をして投資する",
          "仕組みを理解した上で無理のない額から始める",
          "銀行預金をやめる",
          "短期間で大きく稼ぐ"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 仕組みを十分に理解した上で、無理のない金額から始める."
      }
    ]
  },
  {
    "id": "r-q-kerja-4-hari-seminggu",
    "slug": "kerja-4-hari-seminggu",
    "title": "週休{しゅうきゅう}三日制{みっかせい}の試{こころ}み",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Kerja",
    "thumb": {
      "emoji": "📅",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-tsutsu-aru",
      "n2-ni-oujite",
      "n2-mono-no"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "働{はたら}き方{かた}の多様化{たようか}が進{すす}む中{なか}、週{しゅう}に三日{みっか}休{やす}める制度{せいど}を導入{どうにゅう}する企業{きぎょう}が現{あらわ}れつつある。",
      "育児{いくじ}や介護{かいご}、学{まな}び直{なお}しなど、社員{しゃいん}の事情{じじょう}に応{おう}じて働{はたら}く日数{にっすう}を選{えら}べるのが特徴{とくちょう}だ。",
      "休日{きゅうじつ}が増{ふ}えるのは魅力的{みりょくてき}なものの、その分{ぶん}給与{きゅうよ}が下{さ}がる場合{ばあい}もあり、慎重{しんちょう}に判断{はんだん}する必要{ひつよう}がある。"
    ],
    "translation": [
      "Di tengah makin beragamnya cara kerja, mulai muncul perusahaan yang menerapkan sistem libur tiga hari seminggu.",
      "Cirinya, karyawan bisa memilih jumlah hari kerja sesuai keadaan mereka, seperti mengasuh anak, merawat keluarga, atau belajar kembali.",
      "Meski bertambahnya hari libur menarik, ada kasus gaji ikut turun sebanding, jadi perlu menimbangnya dengan hati-hati."
    ],
    "keyVocabulary": [
      {
        "word": "多様化",
        "reading": "たようか",
        "meaning": "diversifikasi"
      },
      {
        "word": "介護",
        "reading": "かいご",
        "meaning": "perawatan (lansia)"
      },
      {
        "word": "慎重",
        "reading": "しんちょう",
        "meaning": "hati-hati"
      }
    ],
    "questions": [
      {
        "id": "kerja-4-hari-seminggu-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "この制度{せいど}の特徴{とくちょう}は何{なん}か。",
        "options": [
          "残業が増える",
          "事情に応じて働く日数を選べる",
          "給料が必ず上がる",
          "全員が在宅勤務になる"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 社員の事情に応じて働く日数を選べるのが特徴だ."
      },
      {
        "id": "kerja-4-hari-seminggu-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "注意{ちゅうい}点{てん}として挙{あ}げられているのはどれか。",
        "options": [
          "休日が減る",
          "給与が下がる場合がある",
          "仕事が増える",
          "会社が遠くなる"
        ],
        "answerIndex": 1,
        "explanation": "Teks: その分給与が下がる場合もあり."
      }
    ]
  },
  {
    "id": "r-q-rumah-kosong-akiya",
    "slug": "rumah-kosong-akiya",
    "title": "増{ふ}え続{つづ}ける空{あ}き家{や}",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Masyarakat",
    "thumb": {
      "emoji": "🏚️",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-ni-tomonatte",
      "n2-kanenai",
      "n2-wo-megutte"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "人口{じんこう}減少{げんしょう}に伴{ともな}い、住{す}む人{ひと}のいない「空{あ}き家{や}」が全国{ぜんこく}で増{ふ}え続{つづ}けている。",
      "管理{かんり}されないまま放置{ほうち}されると、建物{たてもの}が倒{たお}れたり、防犯上{ぼうはんじょう}の問題{もんだい}が生{しょう}じたりしかねない。",
      "空{あ}き家{や}の活用{かつよう}をめぐっては、改修{かいしゅう}して移住者{いじゅうしゃ}に貸{か}し出{だ}すなど、各地{かくち}でさまざまな取{と}り組{く}みが行{おこな}われている。"
    ],
    "translation": [
      "Seiring berkurangnya penduduk, “rumah kosong” tanpa penghuni terus bertambah di seluruh negeri.",
      "Jika dibiarkan tanpa dirawat, bangunannya bisa saja roboh atau menimbulkan masalah keamanan.",
      "Terkait pemanfaatan rumah kosong, berbagai upaya dilakukan di banyak daerah, seperti merenovasinya lalu menyewakannya kepada pendatang."
    ],
    "keyVocabulary": [
      {
        "word": "空き家",
        "reading": "あきや",
        "meaning": "rumah kosong"
      },
      {
        "word": "放置",
        "reading": "ほうち",
        "meaning": "membiarkan"
      },
      {
        "word": "改修",
        "reading": "かいしゅう",
        "meaning": "renovasi"
      }
    ],
    "questions": [
      {
        "id": "rumah-kosong-akiya-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "空{あ}き家{や}を放置{ほうち}するとどうなるおそれがあるか。",
        "options": [
          "家賃が上がる",
          "建物が倒れたり防犯上の問題が生じたりする",
          "人口が増える",
          "観光客が増える"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 建物が倒れたり、防犯上の問題が生じたりしかねない."
      },
      {
        "id": "rumah-kosong-akiya-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "空{あ}き家{や}の活用例{かつようれい}として挙{あ}げられているのはどれか。",
        "options": [
          "取り壊して駐車場にする",
          "改修して移住者に貸し出す",
          "国が買い取る",
          "倉庫にする"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 改修して移住者に貸し出す."
      }
    ]
  },
  {
    "id": "r-q-sertifikat-atau-pengalaman",
    "slug": "sertifikat-atau-pengalaman",
    "title": "資格{しかく}より実務{じつむ}経験{けいけん}？",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Karier",
    "thumb": {
      "emoji": "🎓",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-ni-kakawarazu",
      "n2-nomi-narazu",
      "n2-ni-suginai"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "外国人{がいこくじん}の採用{さいよう}において、日本語{にほんご}能力{のうりょく}試験{しけん}の級{きゅう}を重視{じゅうし}する企業{きぎょう}は依然{いぜん}として多{おお}い。",
      "しかし最近{さいきん}は、資格{しかく}の有無{うむ}にかかわらず、面接{めんせつ}での受{う}け答{こた}えや実務{じつむ}経験{けいけん}を評価{ひょうか}する企業{きぎょう}も増{ふ}えてきた。",
      "試験{しけん}の結果{けっか}は能力{のうりょく}の一面{いちめん}を示{しめ}すにすぎず、語学力{ごがくりょく}のみならず、仕事{しごと}を進{すす}める力{ちから}が問{と}われているのである。"
    ],
    "translation": [
      "Dalam perekrutan orang asing, perusahaan yang mementingkan level ujian kemampuan bahasa Jepang masih banyak.",
      "Namun akhir-akhir ini, perusahaan yang menilai jawaban saat wawancara dan pengalaman kerja nyata, tanpa memandang ada tidaknya sertifikat, juga bertambah.",
      "Hasil ujian hanyalah menunjukkan satu sisi kemampuan; yang dipertanyakan bukan hanya kemampuan bahasa, tetapi juga kemampuan menjalankan pekerjaan."
    ],
    "keyVocabulary": [
      {
        "word": "採用",
        "reading": "さいよう",
        "meaning": "perekrutan"
      },
      {
        "word": "重視",
        "reading": "じゅうし",
        "meaning": "mementingkan"
      },
      {
        "word": "実務",
        "reading": "じつむ",
        "meaning": "praktik kerja"
      }
    ],
    "questions": [
      {
        "id": "sertifikat-atau-pengalaman-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "最近{さいきん}増{ふ}えている企業{きぎょう}の特徴{とくちょう}はどれか。",
        "options": [
          "資格だけを見る",
          "面接の受け答えや実務経験を評価する",
          "日本人だけを採用する",
          "試験を独自に行う"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 面接での受け答えや実務経験を評価する企業も増えてきた."
      },
      {
        "id": "sertifikat-atau-pengalaman-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}の考{かんが}えに合{あ}うものはどれか。",
        "options": [
          "試験の結果がすべてだ",
          "語学力だけでなく仕事を進める力も問われる",
          "資格は不要だ",
          "経験より若さが大切だ"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 語学力のみならず、仕事を進める力が問われている."
      }
    ]
  },
  {
    "id": "r-q-krisis-pengemudi-logistik",
    "slug": "krisis-pengemudi-logistik",
    "title": "物流{ぶつりゅう}の「2024年{ねん}問題{もんだい}」",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Ekonomi",
    "thumb": {
      "emoji": "🚚",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-ni-tomonatte",
      "n2-zaru-wo-enai",
      "n2-ue-de-wa"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "トラック運転手{うんてんしゅ}の残業{ざんぎょう}時間{じかん}に上限{じょうげん}が設{もう}けられたことに伴{ともな}い、一人{ひとり}が運{はこ}べる荷物{にもつ}の量{りょう}が減{へ}るという課題{かだい}が生{しょう}じた。",
      "運転手{うんてんしゅ}の健康{けんこう}を守{まも}る上{うえ}では必要{ひつよう}な措置{そち}だが、配送{はいそう}の遅{おく}れや送料{そうりょう}の値上{ねあ}げにつながる可能性{かのうせい}もある。",
      "企業{きぎょう}は、荷物{にもつ}の積{つ}み下{お}ろしの効率化{こうりつか}や鉄道{てつどう}輸送{ゆそう}への切{き}り替{か}えなど、仕組{しく}みの見直{みなお}しを迫{せま}られざるを得{え}ない状況{じょうきょう}だ。"
    ],
    "translation": [
      "Seiring ditetapkannya batas jam lembur sopir truk, muncul tantangan berupa berkurangnya jumlah barang yang bisa diangkut satu orang.",
      "Dalam hal melindungi kesehatan sopir, ini langkah yang perlu, tetapi bisa juga berujung pada keterlambatan pengiriman dan naiknya ongkos kirim.",
      "Perusahaan mau tidak mau terdesak untuk meninjau ulang sistemnya, seperti mengefisienkan bongkar muat dan beralih ke angkutan kereta."
    ],
    "keyVocabulary": [
      {
        "word": "上限",
        "reading": "じょうげん",
        "meaning": "batas atas"
      },
      {
        "word": "措置",
        "reading": "そち",
        "meaning": "langkah, tindakan"
      },
      {
        "word": "積み下ろし",
        "reading": "つみおろし",
        "meaning": "bongkar muat"
      }
    ],
    "questions": [
      {
        "id": "krisis-pengemudi-logistik-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "残業{ざんぎょう}の上限{じょうげん}によって生{しょう}じた課題{かだい}は何{なん}か。",
        "options": [
          "運転手が増えた",
          "一人が運べる荷物の量が減った",
          "トラックが余った",
          "送料が下がった"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 一人が運べる荷物の量が減るという課題が生じた."
      },
      {
        "id": "krisis-pengemudi-logistik-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "企業{きぎょう}の対策{たいさく}として挙{あ}げられているのはどれか。",
        "options": [
          "運転手の給料を下げる",
          "鉄道輸送への切り替え",
          "配送をやめる",
          "残業を増やす"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 鉄道輸送への切り替えなど."
      }
    ]
  },
  {
    "id": "r-q-bahasa-sopan-di-email-kerja",
    "slug": "bahasa-sopan-di-email-kerja",
    "title": "ビジネスメールの決{き}まり文句{もんく}",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Kerja",
    "thumb": {
      "emoji": "✉️",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-ni-atatte",
      "n2-ue-de-wa",
      "n2-mono-no"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本{にほん}のビジネスメールには、「お世話{せわ}になっております」や「よろしくお願{ねが}いいたします」など、決{き}まった表現{ひょうげん}が多{おお}い。",
      "形式的{けいしきてき}に見{み}えるものの、相手{あいて}との関係{かんけい}を円滑{えんかつ}にする上{うえ}で重要{じゅうよう}な役割{やくわり}を果{は}たしている。",
      "初{はじ}めて取引先{とりひきさき}に連絡{れんらく}するにあたっては、件名{けんめい}を具体的{ぐたいてき}に書{か}き、要件{ようけん}を簡潔{かんけつ}にまとめることも心{こころ}がけたい。"
    ],
    "translation": [
      "Email bisnis Jepang punya banyak ungkapan baku seperti “osewa ni natte orimasu” dan “yoroshiku onegai itashimasu”.",
      "Meski terlihat formalitas belaka, ungkapan itu berperan penting dalam memperlancar hubungan dengan lawan bicara.",
      "Saat pertama kali menghubungi mitra bisnis, usahakan juga menulis subjek dengan spesifik dan merangkum keperluan secara ringkas."
    ],
    "keyVocabulary": [
      {
        "word": "決まり文句",
        "reading": "きまりもんく",
        "meaning": "ungkapan baku"
      },
      {
        "word": "円滑",
        "reading": "えんかつ",
        "meaning": "lancar"
      },
      {
        "word": "件名",
        "reading": "けんめい",
        "meaning": "subjek (email)"
      }
    ],
    "questions": [
      {
        "id": "bahasa-sopan-di-email-kerja-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "決{き}まった表現{ひょうげん}の役割{やくわり}は何{なん}だと書{か}かれているか。",
        "options": [
          "文章を長くする",
          "相手との関係を円滑にする",
          "敬語を省略する",
          "返信を遅らせる"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 相手との関係を円滑にする上で重要な役割を果たしている."
      },
      {
        "id": "bahasa-sopan-di-email-kerja-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "初{はじ}めて連絡{れんらく}する際{さい}に心{こころ}がけたいことはどれか。",
        "options": [
          "件名を具体的に書く",
          "長い挨拶を書く",
          "絵文字を使う",
          "電話だけで連絡する"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 件名を具体的に書き、要件を簡潔にまとめる."
      }
    ]
  },
  {
    "id": "r-q-lonjakan-wisata-ski",
    "slug": "lonjakan-wisata-ski",
    "title": "雪{ゆき}を求{もと}めて来日{らいにち}する観光客{かんこうきゃく}",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Pariwisata",
    "thumb": {
      "emoji": "🎿",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-wo-kikkake-ni",
      "n2-nomi-narazu",
      "n2-ni-tomonatte"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "北海道{ほっかいどう}や長野{ながの}のスキー場{じょう}では、海外{かいがい}からの観光客{かんこうきゃく}が目立{めだ}つようになった。",
      "さらさらとした質{しつ}の高{たか}い雪{ゆき}が評判{ひょうばん}となったのをきっかけに、オーストラリアのみならず、東南{とうなん}アジアからも人{ひと}が訪{おとず}れている。",
      "外国人{がいこくじん}客{きゃく}の増加{ぞうか}に伴{ともな}い、地価{ちか}や物価{ぶっか}が上昇{じょうしょう}し、地元{じもと}住民{じゅうみん}の生活{せいかつ}に影響{えいきょう}が出{で}ている地域{ちいき}もある。"
    ],
    "translation": [
      "Di area ski Hokkaido dan Nagano, wisatawan dari luar negeri jadi menonjol.",
      "Bermula dari terkenalnya salju berkualitas tinggi yang kering dan halus, orang datang bukan hanya dari Australia, tetapi juga dari Asia Tenggara.",
      "Seiring bertambahnya tamu asing, ada daerah tempat harga tanah dan barang naik sehingga memengaruhi kehidupan warga lokal."
    ],
    "keyVocabulary": [
      {
        "word": "目立つ",
        "reading": "めだつ",
        "meaning": "menonjol"
      },
      {
        "word": "評判",
        "reading": "ひょうばん",
        "meaning": "reputasi"
      },
      {
        "word": "地価",
        "reading": "ちか",
        "meaning": "harga tanah"
      }
    ],
    "questions": [
      {
        "id": "lonjakan-wisata-ski-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "観光客{かんこうきゃく}が増{ふ}えたきっかけは何{なん}か。",
        "options": [
          "新しい空港",
          "質の高い雪の評判",
          "安いホテル",
          "日本語学校"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 質の高い雪が評判となったのをきっかけに."
      },
      {
        "id": "lonjakan-wisata-ski-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "地元{じもと}への影響{えいきょう}として書{か}かれているのはどれか。",
        "options": [
          "地価や物価の上昇",
          "人口の増加",
          "雪の減少",
          "学校の閉鎖"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 地価や物価が上昇し."
      }
    ]
  },
  {
    "id": "r-q-kebocoran-data-pribadi",
    "slug": "kebocoran-data-pribadi",
    "title": "個人情報{こじんじょうほう}の流出{りゅうしゅつ}を防{ふせ}ぐには",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Teknologi",
    "thumb": {
      "emoji": "🔐",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-kanenai",
      "n2-ni-motozuite",
      "n2-zaru-wo-enai"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "企業{きぎょう}へのサイバー攻撃{こうげき}が相次{あいつ}ぎ、顧客{こきゃく}の個人情報{こじんじょうほう}が流出{りゅうしゅつ}する事件{じけん}も報告{ほうこく}されている。",
      "たった一通{いっつう}の不審{ふしん}なメールを開{ひら}いただけで、社内{しゃない}のシステム全体{ぜんたい}が被害{ひがい}を受{う}けかねない。",
      "そのため多{おお}くの企業{きぎょう}が、社内{しゃない}規定{きてい}に基{もと}づいた研修{けんしゅう}を定期的{ていきてき}に行{おこな}い、社員{しゃいん}一人{ひとり}ひとりの意識{いしき}を高{たか}めざるを得{え}なくなっている。"
    ],
    "translation": [
      "Serangan siber terhadap perusahaan terjadi berturut-turut, dan kasus bocornya data pribadi pelanggan juga dilaporkan.",
      "Hanya dengan membuka satu email mencurigakan, seluruh sistem perusahaan bisa saja terkena dampaknya.",
      "Karena itu banyak perusahaan terpaksa rutin mengadakan pelatihan berdasarkan aturan internal untuk meningkatkan kesadaran setiap karyawan."
    ],
    "keyVocabulary": [
      {
        "word": "流出",
        "reading": "りゅうしゅつ",
        "meaning": "kebocoran"
      },
      {
        "word": "不審",
        "reading": "ふしん",
        "meaning": "mencurigakan"
      },
      {
        "word": "規定",
        "reading": "きてい",
        "meaning": "ketentuan, aturan"
      }
    ],
    "questions": [
      {
        "id": "kebocoran-data-pribadi-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "被害{ひがい}のきっかけとして挙{あ}げられているのはどれか。",
        "options": [
          "パソコンの故障",
          "不審なメールを開くこと",
          "停電",
          "社員の退職"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 一通の不審なメールを開いただけで."
      },
      {
        "id": "kebocoran-data-pribadi-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "企業{きぎょう}の対策{たいさく}として正{ただ}しいものはどれか。",
        "options": [
          "メールを禁止する",
          "社内規定に基づいた研修を行う",
          "顧客を減らす",
          "システムを使わない"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 社内規定に基づいた研修を定期的に行い."
      }
    ]
  },
  {
    "id": "r-q-energi-terbarukan-di-desa",
    "slug": "energi-terbarukan-di-desa",
    "title": "地域{ちいき}で作{つく}る再生可能{さいせいかのう}エネルギー",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Lingkungan",
    "thumb": {
      "emoji": "☀️",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-tsutsu-aru",
      "n2-hanmen",
      "n2-ni-suginai"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "太陽光{たいようこう}や小{ちい}さな水力{すいりょく}発電{はつでん}を使{つか}い、地域{ちいき}で必要{ひつよう}な電気{でんき}を自{みずか}ら作{つく}る取{と}り組{く}みが広{ひろ}がりつつある。",
      "発電{はつでん}で得{え}た収益{しゅうえき}を地域{ちいき}の活性化{かっせいか}に生{い}かせる反面{はんめん}、天候{てんこう}によって発電量{はつでんりょう}が大{おお}きく変{か}わるという弱点{じゃくてん}もある。",
      "現時点{げんじてん}では全体{ぜんたい}の電力{でんりょく}のごく一部{いちぶ}にすぎないが、災害{さいがい}時{じ}の備{そな}えとしても注目{ちゅうもく}されている。"
    ],
    "translation": [
      "Upaya membuat sendiri listrik yang dibutuhkan daerah dengan tenaga surya atau pembangkit air kecil mulai meluas.",
      "Keuntungan dari pembangkitan bisa dimanfaatkan untuk menghidupkan daerah, tetapi ada kelemahan berupa jumlah listrik yang sangat berubah tergantung cuaca.",
      "Saat ini hanya sebagian sangat kecil dari seluruh listrik, tetapi juga diperhatikan sebagai persiapan saat bencana."
    ],
    "keyVocabulary": [
      {
        "word": "太陽光",
        "reading": "たいようこう",
        "meaning": "tenaga surya"
      },
      {
        "word": "収益",
        "reading": "しゅうえき",
        "meaning": "keuntungan"
      },
      {
        "word": "活性化",
        "reading": "かっせいか",
        "meaning": "revitalisasi"
      }
    ],
    "questions": [
      {
        "id": "energi-terbarukan-di-desa-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "この取{と}り組{く}みの弱点{じゃくてん}は何{なん}か。",
        "options": [
          "費用が安すぎる",
          "天候によって発電量が変わる",
          "人が集まらない",
          "電気が余る"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 天候によって発電量が大きく変わるという弱点もある."
      },
      {
        "id": "energi-terbarukan-di-desa-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "この取{と}り組{く}みが注目{ちゅうもく}されている理由{りゆう}として書{か}かれているのはどれか。",
        "options": [
          "災害時の備えになる",
          "全国の電力を賄える",
          "税金がかからない",
          "観光客が増える"
        ],
        "answerIndex": 0,
        "explanation": "Teks: 災害時の備えとしても注目されている."
      }
    ]
  },
  {
    "id": "r-q-penggunaan-ai-di-sekolah",
    "slug": "penggunaan-ai-di-sekolah",
    "title": "教育現場{きょういくげんば}とAI",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Teknologi",
    "thumb": {
      "emoji": "🏫",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-wo-megutte",
      "n2-ni-oujite",
      "n2-kagiri"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "生成{せいせい}AIを授業{じゅぎょう}でどう扱{あつか}うかをめぐって、教育{きょういく}関係者{かんけいしゃ}の間{あいだ}で議論{ぎろん}が続{つづ}いている。",
      "生徒{せいと}一人{ひとり}ひとりの理解度{りかいど}に応{おう}じた説明{せつめい}ができるという利点{りてん}がある一方{いっぽう}、宿題{しゅくだい}をAIに任{まか}せてしまう懸念{けねん}もある。",
      "AIの答{こた}えをそのまま信{しん}じるのではなく、自分{じぶん}で確{たし}かめる習慣{しゅうかん}を身{み}につけない限{かぎ}り、本当{ほんとう}の学{まな}びにはつながらないだろう。"
    ],
    "translation": [
      "Terkait bagaimana menangani AI generatif di kelas, diskusi terus berlangsung di kalangan pendidik.",
      "Ada keuntungan bisa memberi penjelasan sesuai tingkat pemahaman setiap siswa, tetapi ada juga kekhawatiran PR diserahkan sepenuhnya ke AI.",
      "Selama siswa tidak membiasakan diri mengecek sendiri alih-alih langsung percaya jawaban AI, hal itu tidak akan berujung pada pembelajaran sejati."
    ],
    "keyVocabulary": [
      {
        "word": "扱う",
        "reading": "あつかう",
        "meaning": "menangani"
      },
      {
        "word": "理解度",
        "reading": "りかいど",
        "meaning": "tingkat pemahaman"
      },
      {
        "word": "懸念",
        "reading": "けねん",
        "meaning": "kekhawatiran"
      }
    ],
    "questions": [
      {
        "id": "penggunaan-ai-di-sekolah-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "AIの利点{りてん}として挙{あ}げられているのはどれか。",
        "options": [
          "宿題が早く終わる",
          "理解度に応じた説明ができる",
          "先生がいらなくなる",
          "試験がなくなる"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 理解度に応じた説明ができるという利点."
      },
      {
        "id": "penggunaan-ai-di-sekolah-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}が大切{たいせつ}だと考{かんが}えていることは何{なん}か。",
        "options": [
          "AIを禁止すること",
          "AIの答えを自分で確かめる習慣",
          "宿題を増やすこと",
          "AIだけで勉強すること"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 自分で確かめる習慣を身につけない限り."
      }
    ]
  },
  {
    "id": "r-q-kesehatan-mental-pekerja",
    "slug": "kesehatan-mental-pekerja",
    "title": "職場{しょくば}のメンタルヘルス対策{たいさく}",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Kerja",
    "thumb": {
      "emoji": "🧘",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-ni-sakidatte",
      "n2-dokoro-ka",
      "n2-ni-motozuite"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "長時間{ちょうじかん}労働{ろうどう}や人間関係{にんげんかんけい}の悩{なや}みから、心{こころ}の不調{ふちょう}を訴{うった}える社員{しゃいん}が少{すく}なくない。",
      "無理{むり}をして働{はたら}き続{つづ}けると、仕事{しごと}の効率{こうりつ}が上{あ}がるどころか、長期{ちょうき}の休職{きゅうしょく}につながることもある。",
      "一定{いってい}の規模{きぼ}の企業{きぎょう}では、法律{ほうりつ}に基{もと}づくストレスチェックが義務{ぎむ}付{づ}けられており、問題{もんだい}が深刻{しんこく}になるに先立{さきだ}って対応{たいおう}することが求{もと}められている。"
    ],
    "translation": [
      "Tidak sedikit karyawan yang mengeluhkan gangguan mental akibat jam kerja panjang atau masalah hubungan antarpribadi.",
      "Jika terus bekerja memaksakan diri, jangankan efisiensi kerja naik, malah bisa berujung pada cuti panjang.",
      "Di perusahaan dengan skala tertentu, pemeriksaan stres berdasarkan hukum diwajibkan, dan perusahaan dituntut menanganinya sebelum masalah menjadi serius."
    ],
    "keyVocabulary": [
      {
        "word": "不調",
        "reading": "ふちょう",
        "meaning": "gangguan, kondisi buruk"
      },
      {
        "word": "休職",
        "reading": "きゅうしょく",
        "meaning": "cuti kerja (panjang)"
      },
      {
        "word": "義務",
        "reading": "ぎむ",
        "meaning": "kewajiban"
      }
    ],
    "questions": [
      {
        "id": "kesehatan-mental-pekerja-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "無理{むり}をして働{はたら}き続{つづ}けるとどうなることがあるか。",
        "options": [
          "効率が大きく上がる",
          "長期の休職につながる",
          "給料が上がる",
          "昇進できる"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 長期の休職につながることもある."
      },
      {
        "id": "kesehatan-mental-pekerja-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "ストレスチェックについて正{ただ}しいものはどれか。",
        "options": [
          "すべての個人に義務",
          "一定規模の企業に法律で義務付けられている",
          "任意で行う",
          "海外企業だけが行う"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 一定の規模の企業では…義務付けられており."
      }
    ]
  },
  {
    "id": "r-q-pernikahan-internasional",
    "slug": "pernikahan-internasional",
    "title": "国際結婚{こくさいけっこん}と手続{てつづ}き",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Masyarakat",
    "thumb": {
      "emoji": "💍",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-ni-atatte",
      "n2-ta-ue-de",
      "n2-ni-kakawarazu"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "日本人{にほんじん}と外国人{がいこくじん}の国際結婚{こくさいけっこん}は、今{いま}では決{けっ}して珍{めずら}しいものではない。",
      "結婚{けっこん}するにあたっては、両国{りょうこく}の法律{ほうりつ}に基{もと}づいた書類{しょるい}を準備{じゅんび}する必要{ひつよう}があり、手続{てつづ}きには時間{じかん}がかかることが多{おお}い。",
      "国籍{こくせき}にかかわらず、互{たが}いの文化{ぶんか}や家族観{かぞくかん}の違{ちが}いを話{はな}し合{あ}った上{うえ}で、共{とも}に生活{せいかつ}を築{きず}いていくことが大切{たいせつ}だ。"
    ],
    "translation": [
      "Pernikahan internasional antara orang Jepang dan orang asing sekarang sama sekali bukan hal yang langka.",
      "Dalam rangka menikah, perlu menyiapkan dokumen berdasarkan hukum kedua negara, dan prosesnya sering memakan waktu.",
      "Tanpa memandang kewarganegaraan, penting untuk membangun kehidupan bersama setelah mendiskusikan perbedaan budaya dan pandangan tentang keluarga."
    ],
    "keyVocabulary": [
      {
        "word": "国籍",
        "reading": "こくせき",
        "meaning": "kewarganegaraan"
      },
      {
        "word": "家族観",
        "reading": "かぞくかん",
        "meaning": "pandangan tentang keluarga"
      },
      {
        "word": "築く",
        "reading": "きずく",
        "meaning": "membangun"
      }
    ],
    "questions": [
      {
        "id": "pernikahan-internasional-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "国際結婚{こくさいけっこん}の手続{てつづ}きについて正{ただ}しいものはどれか。",
        "options": [
          "書類はいらない",
          "両国の法律に基づいた書類が必要",
          "一日で終わる",
          "日本の書類だけでいい"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 両国の法律に基づいた書類を準備する必要があり."
      },
      {
        "id": "pernikahan-internasional-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "筆者{ひっしゃ}が大切{たいせつ}だと考{かんが}えていることは何{なに}か。",
        "options": [
          "同じ国籍であること",
          "互いの違いを話し合った上で生活を築くこと",
          "日本の文化に合わせること",
          "家族と離れて住むこと"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 違いを話し合った上で、共に生活を築いていくことが大切だ."
      }
    ]
  },
  {
    "id": "r-q-produk-lokal-jadi-merek",
    "slug": "produk-lokal-jadi-merek",
    "title": "地方{ちほう}の特産品{とくさんひん}をブランドに",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Ekonomi",
    "thumb": {
      "emoji": "🍶",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-wo-kikkake-ni",
      "n2-ni-hanshite",
      "n2-hanmen"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "ある地方{ちほう}の町{まち}では、昔{むかし}から作{つく}られてきた日本酒{にほんしゅ}が海外{かいがい}の品評会{ひんぴょうかい}で賞{しょう}を取{と}ったのをきっかけに、注文{ちゅうもん}が急増{きゅうぞう}した。",
      "大手{おおて}の酒造会社{しゅぞうがいしゃ}に勝{か}つのは難{むずか}しいという予想{よそう}に反{はん}して、少量{しょうりょう}生産{せいさん}ならではの品質{ひんしつ}が高{たか}く評価{ひょうか}されたのである。",
      "知名度{ちめいど}が上{あ}がった反面{はんめん}、生産{せいさん}が追{お}いつかないという新{あら}たな悩{なや}みも生{う}まれている。"
    ],
    "translation": [
      "Di sebuah kota daerah, pesanan sake yang sudah dibuat sejak dulu melonjak setelah sake itu memenangkan penghargaan di kompetisi luar negeri.",
      "Berlawanan dengan perkiraan bahwa sulit mengalahkan perusahaan sake besar, kualitas khas produksi dalam jumlah kecil justru dinilai tinggi.",
      "Di sisi lain popularitasnya naik, muncul juga masalah baru berupa produksi yang tidak terkejar."
    ],
    "keyVocabulary": [
      {
        "word": "品評会",
        "reading": "ひんぴょうかい",
        "meaning": "kompetisi penilaian produk"
      },
      {
        "word": "急増",
        "reading": "きゅうぞう",
        "meaning": "melonjak"
      },
      {
        "word": "知名度",
        "reading": "ちめいど",
        "meaning": "tingkat keterkenalan"
      }
    ],
    "questions": [
      {
        "id": "produk-lokal-jadi-merek-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "注文{ちゅうもん}が急増{きゅうぞう}したきっかけは何{なん}か。",
        "options": [
          "テレビ番組",
          "海外の品評会で賞を取ったこと",
          "値下げ",
          "新しい工場"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 海外の品評会で賞を取ったのをきっかけに."
      },
      {
        "id": "produk-lokal-jadi-merek-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "新{あら}たな悩{なや}みとして書{か}かれているのはどれか。",
        "options": [
          "売れ残り",
          "生産が追いつかないこと",
          "品質の低下",
          "値段の下落"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 生産が追いつかないという新たな悩み."
      }
    ]
  },
  {
    "id": "r-q-budaya-kerja-lembur-berubah",
    "slug": "budaya-kerja-lembur-berubah",
    "title": "残業{ざんぎょう}を美徳{びとく}とする文化{ぶんか}の変化{へんか}",
    "level": "N2",
    "minutes": 7,
    "difficulty": 4,
    "topic": "Kerja",
    "thumb": {
      "emoji": "⏰",
      "from": "#fed7aa",
      "to": "#ea580c"
    },
    "grammar": [
      "n2-dokoro-ka",
      "n2-ni-hanshite",
      "n2-ni-tomonatte"
    ],
    "source": {
      "label": "Ditulis oleh Nihongo Career Hub berdasarkan informasi umum"
    },
    "paragraphs": [
      "かつての日本{にほん}では、遅{おそ}くまで会社{かいしゃ}に残{のこ}ることが熱心{ねっしん}さの証{あかし}だと考{かんが}えられていた。",
      "しかし長時間{ちょうじかん}労働{ろうどう}は、生産性{せいさんせい}を高{たか}めるどころか、健康{けんこう}を損{そこ}なう原因{げんいん}になることが明{あき}らかになってきた。",
      "法規制{ほうきせい}の強化{きょうか}に伴{ともな}い、定時{ていじ}に帰{かえ}ることを推奨{すいしょう}する企業{きぎょう}も増{ふ}え、働{はたら}き方{かた}に対{たい}する意識{いしき}は確実{かくじつ}に変{か}わりつつある。"
    ],
    "translation": [
      "Dulu di Jepang, tinggal di kantor sampai larut dianggap bukti kesungguhan.",
      "Namun semakin jelas bahwa jam kerja panjang, jangankan meningkatkan produktivitas, malah menjadi penyebab rusaknya kesehatan.",
      "Seiring diperketatnya regulasi, perusahaan yang menganjurkan pulang tepat waktu juga bertambah, dan kesadaran tentang cara bekerja pasti sedang berubah."
    ],
    "keyVocabulary": [
      {
        "word": "美徳",
        "reading": "びとく",
        "meaning": "kebajikan"
      },
      {
        "word": "証",
        "reading": "あかし",
        "meaning": "bukti"
      },
      {
        "word": "推奨",
        "reading": "すいしょう",
        "meaning": "menganjurkan"
      }
    ],
    "questions": [
      {
        "id": "budaya-kerja-lembur-berubah-q1",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "かつて長時間{ちょうじかん}残{のこ}ることは何{なん}と考{かんが}えられていたか。",
        "options": [
          "怠けの証",
          "熱心さの証",
          "病気の原因",
          "法律違反"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 熱心さの証だと考えられていた."
      },
      {
        "id": "budaya-kerja-lembur-berubah-q2",
        "level": "N2",
        "category": "membaca",
        "source": "platform",
        "prompt": "長時間{ちょうじかん}労働{ろうどう}について明{あき}らかになったことはどれか。",
        "options": [
          "生産性を大きく高める",
          "健康を損なう原因になる",
          "給料が上がる",
          "人間関係がよくなる"
        ],
        "answerIndex": 1,
        "explanation": "Teks: 健康を損なう原因になることが明らかになってきた."
      }
    ]
  },
]
