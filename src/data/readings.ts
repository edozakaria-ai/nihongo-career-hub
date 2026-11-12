import type { ReadingLesson } from "@/lib/types";

/** Bacaan dokkai orisinal buatan platform. Notasi furigana: 漢字{かんじ}. */
export const READINGS: ReadingLesson[] = [
  {
    id: "r-n5-ichinichi",
    slug: "hari-saya",
    title: "わたしの 一日{いちにち} — Hari Saya",
    level: "N5",
    minutes: 4,
    difficulty: 1,
    paragraphs: [
      "わたしは リナです。インドネシア人{じん}です。今{いま}、バンドンに 住{す}んで います。",
      "毎朝{まいあさ} 六時{ろくじ}に 起{お}きます。七時{しちじ}に 会社{かいしゃ}へ 行{い}きます。会社{かいしゃ}は 日本{にほん}の 会社{かいしゃ}です。",
      "昼{ひる}は 友達{ともだち}と 食堂{しょくどう}で ご飯{はん}を 食{た}べます。夜{よる}は 一時間{いちじかん} 日本語{にほんご}を 勉強{べんきょう}します。",
    ],
    translation: [
      "Saya Rina. Saya orang Indonesia. Sekarang saya tinggal di Bandung.",
      "Setiap pagi saya bangun pukul enam. Pukul tujuh saya berangkat ke kantor. Kantor saya adalah perusahaan Jepang.",
      "Siang hari saya makan bersama teman di kantin. Malam hari saya belajar bahasa Jepang selama satu jam.",
    ],
    keyVocabulary: [
      { word: "住む", reading: "すむ", meaning: "tinggal" },
      { word: "起きる", reading: "おきる", meaning: "bangun" },
      { word: "食堂", reading: "しょくどう", meaning: "kantin" },
      { word: "勉強", reading: "べんきょう", meaning: "belajar" },
    ],
    questions: [
      {
        id: "r-n5-q1", level: "N5", category: "membaca", source: "platform",
        prompt: "リナさんは 何時{なんじ}に 会社{かいしゃ}へ 行{い}きますか。",
        options: ["六時", "七時", "八時", "一時"], answerIndex: 1,
        explanation: "Teks: 七時に 会社へ 行きます.",
      },
      {
        id: "r-n5-q2", level: "N5", category: "membaca", source: "platform",
        prompt: "リナさんは 夜{よる} 何{なに}を しますか。",
        options: ["友達と ご飯を 食べます", "会社へ 行きます", "日本語を 勉強します", "六時に 寝ます"], answerIndex: 2,
        explanation: "Teks: 夜は 一時間 日本語を 勉強します.",
      },
    ],
  },
  {
    id: "r-n3-kaizen",
    slug: "usulan-kaizen-di-pabrik",
    title: "工場{こうじょう}の改善{かいぜん}提案{ていあん} — Usulan Kaizen di Pabrik",
    level: "N3",
    minutes: 7,
    difficulty: 3,
    paragraphs: [
      "私{わたし}が働{はたら}いている工場{こうじょう}では、毎月{まいつき}「改善{かいぜん}提案{ていあん}」を出{だ}すことになっています。小{ちい}さなアイデアでも構{かま}いません。",
      "先月{せんげつ}、私{わたし}は工具{こうぐ}の置{お}き場所{ばしょ}に色{いろ}のテープを貼{は}ることを提案{ていあん}しました。工具{こうぐ}を探{さが}す時間{じかん}が長{なが}く、作業{さぎょう}が遅{おく}れることが多{おお}かったからです。",
      "テープを貼{は}ってから、探{さが}す時間{じかん}は一日{いちにち}約{やく}十分{じっぷん}短{みじか}くなりました。課長{かちょう}にほめられて、とてもうれしかったです。",
    ],
    translation: [
      "Di pabrik tempat saya bekerja, setiap bulan ada aturan untuk mengajukan \"usulan kaizen\". Ide kecil pun tidak masalah.",
      "Bulan lalu, saya mengusulkan agar tempat penyimpanan perkakas ditempeli selotip berwarna. Alasannya, waktu mencari perkakas lama sehingga pekerjaan sering terlambat.",
      "Setelah selotip ditempel, waktu mencari berkurang sekitar sepuluh menit per hari. Saya dipuji oleh kepala seksi dan merasa sangat senang.",
    ],
    keyVocabulary: [
      { word: "提案", reading: "ていあん", meaning: "usulan" },
      { word: "工具", reading: "こうぐ", meaning: "perkakas" },
      { word: "作業", reading: "さぎょう", meaning: "pekerjaan (operasional)" },
      { word: "課長", reading: "かちょう", meaning: "kepala seksi" },
    ],
    questions: [
      {
        id: "r-n3-q1", level: "N3", category: "membaca", source: "platform",
        prompt: "筆者{ひっしゃ}がテープを貼{は}ることを提案{ていあん}した理由{りゆう}は何{なん}ですか。",
        options: ["工具を探すのに時間がかかったから", "工具がよく壊れたから", "課長にほめられたかったから", "テープが安かったから"], answerIndex: 0,
        explanation: "Teks: 工具を探す時間が長く、作業が遅れることが多かったからです.",
      },
      {
        id: "r-n3-q2", level: "N3", category: "membaca", source: "platform",
        prompt: "提案{ていあん}の結果{けっか}、どうなりましたか。",
        options: ["作業が一日十分遅くなった", "探す時間が一日約十分減った", "工具の数が増えた", "提案は採用されなかった"], answerIndex: 1,
        explanation: "Teks: 探す時間は一日約十分短くなりました.",
      },
    ],
  },
  {
    id: "r-n2-audit",
    slug: "pemberitahuan-audit-mutu",
    title: "品質{ひんしつ}監査{かんさ}のお知{し}らせ — Pemberitahuan Audit Mutu",
    level: "N2",
    minutes: 8,
    difficulty: 4,
    paragraphs: [
      "各{かく}部署{ぶしょ}の皆様{みなさま}へ。来週{らいしゅう}水曜日{すいようび}に、取引先{とりひきさき}による品質{ひんしつ}監査{かんさ}が実施{じっし}されます。",
      "監査{かんさ}に際{さい}し、過去{かこ}三{さん}か月分{げつぶん}の点検{てんけん}記録{きろく}を今週{こんしゅう}金曜日{きんようび}までに品質{ひんしつ}管理課{かんりか}へ提出{ていしゅつ}してください。記録{きろく}に不備{ふび}がある場合{ばあい}は、提出{ていしゅつ}前{まえ}に各{かく}担当者{たんとうしゃ}が修正{しゅうせい}することとします。",
      "なお、当日{とうじつ}は通訳{つうやく}が同行{どうこう}しますので、現場{げんば}での説明{せつめい}は日本語{にほんご}またはインドネシア語{ご}のどちらでも構{かま}いません。",
    ],
    translation: [
      "Kepada seluruh departemen. Rabu minggu depan, akan dilaksanakan audit mutu oleh pihak pelanggan.",
      "Dalam rangka audit, mohon serahkan catatan inspeksi tiga bulan terakhir ke Seksi Quality Control paling lambat Jumat minggu ini. Jika ada kekurangan pada catatan, penanggung jawab masing-masing wajib memperbaikinya sebelum diserahkan.",
      "Sebagai tambahan, pada hari tersebut interpreter akan mendampingi, sehingga penjelasan di lapangan boleh dalam bahasa Jepang maupun bahasa Indonesia.",
    ],
    keyVocabulary: [
      { word: "監査", reading: "かんさ", meaning: "audit" },
      { word: "取引先", reading: "とりひきさき", meaning: "mitra bisnis, pelanggan" },
      { word: "不備", reading: "ふび", meaning: "kekurangan, ketidaklengkapan" },
      { word: "同行", reading: "どうこう", meaning: "mendampingi" },
    ],
    questions: [
      {
        id: "r-n2-q1", level: "N2", category: "membaca", source: "platform",
        prompt: "点検{てんけん}記録{きろく}に不備{ふび}があった場合{ばあい}、誰{だれ}が修正{しゅうせい}しますか。",
        options: ["品質管理課", "取引先", "各部署の担当者", "通訳"], answerIndex: 2,
        explanation: "Teks: 提出前に各担当者が修正することとします.",
      },
      {
        id: "r-n2-q2", level: "N2", category: "membaca", source: "platform",
        prompt: "この文書{ぶんしょ}の内容{ないよう}と合{あ}っているものはどれですか。",
        options: ["監査は今週金曜日に行われる", "現場での説明は日本語でなければならない", "監査当日は通訳が同行する", "記録は一か月分だけ提出すればよい"], answerIndex: 2,
        explanation: "Teks: 当日は通訳が同行します. Audit hari Rabu minggu depan; catatan 3 bulan; bahasa bebas.",
      },
    ],
  },
];
