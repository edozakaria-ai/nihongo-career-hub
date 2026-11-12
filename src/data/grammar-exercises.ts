/**
 * Latihan bunpou buatan platform (orisinal), dikelompokkan per id pola di grammar.ts.
 * Tiga jenis: pilihan ganda (mc), menyusun kalimat (order), melengkapi kalimat (fill).
 */
export interface GrammarExerciseSet {
  mc: { stem: string; options: string[]; answerIndex: number; explanation: string };
  order: { tokens: string[]; translation: string };
  fill: { stem: string; answers: string[]; hint: string; translation: string };
}

export const GRAMMAR_EXERCISES: Record<string, GrammarExerciseSet> = {
  "g-tai": {
    mc: {
      stem: "あたらしい くつが（　　）です。",
      options: ["かいたい", "ほしい", "かいたがる", "ほしがり"],
      answerIndex: 0,
      explanation: "Kalimat ini memakai partikel が + です, keduanya cocok dengan かいたい (ingin membeli). ほしい juga benar secara tata bahasa tetapi artinya ‘ingin punya’; di soal ini fokusnya bentuk 〜たい dari verba かう.",
    },
    order: { tokens: ["わたしは", "日本で", "はたらき", "たいです"], translation: "Saya ingin bekerja di Jepang." },
    fill: { stem: "つめたい みずが のみ＿＿です。", answers: ["たい"], hint: "Bentuk keinginan diri sendiri", translation: "Saya ingin minum air dingin." },
  },
  "g-tekudasai": {
    mc: {
      stem: "すみません、もう いちど（　　）ください。",
      options: ["いって", "いいて", "いう", "いった"],
      answerIndex: 0,
      explanation: "いう (berkata) adalah verba golongan 1 berakhiran う → bentuk て menjadi いって.",
    },
    order: { tokens: ["ここに", "名前を", "書いて", "ください"], translation: "Tolong tulis nama di sini." },
    fill: { stem: "ヘルメットを かぶって＿＿＿。", answers: ["ください"], hint: "Permintaan sopan", translation: "Tolong pakai helm." },
  },
  "g-teshimau": {
    mc: {
      stem: "電車に かさを 忘れて（　　）。",
      options: ["しまいました", "おきました", "みました", "いきました"],
      answerIndex: 0,
      explanation: "Kejadian tidak disengaja yang disesali → 〜てしまいました.",
    },
    order: { tokens: ["大切な", "書類を", "なくして", "しまいました"], translation: "Saya (tidak sengaja) menghilangkan dokumen penting." },
    fill: { stem: "ケーキを ぜんぶ 食べて しま＿＿＿た。", answers: ["いまし", "っ"], hint: "Bentuk lampau sopan atau biasa dari しまう", translation: "Saya telanjur menghabiskan semua kuenya." },
  },
  "g-youni-suru": {
    mc: {
      stem: "健康のために、毎日 歩く（　　）しています。",
      options: ["ように", "ことに", "ために", "そうに"],
      answerIndex: 0,
      explanation: "Kebiasaan yang diusahakan terus-menerus → 〜ようにしている.",
    },
    order: { tokens: ["毎朝", "早く", "起きる", "ようにしています"], translation: "Saya membiasakan diri bangun pagi setiap hari." },
    fill: { stem: "会議に 遅れない よう＿＿ して ください。", answers: ["に"], hint: "Partikel setelah よう", translation: "Usahakan agar tidak terlambat rapat." },
  },
  "g-wakedewanai": {
    mc: {
      stem: "日本語が 話せるからといって、通訳が できる（　　）。",
      options: ["わけではない", "わけがない", "わけだ", "はずだ"],
      answerIndex: 0,
      explanation: "Menyangkal sebagian anggapan (‘tidak otomatis bisa’) → わけではない. わけがない terlalu kuat (mustahil).",
    },
    order: { tokens: ["残業が", "嫌いな", "わけでは", "ありません"], translation: "Bukan berarti saya tidak suka lembur." },
    fill: { stem: "高い 製品が いつも 良い わけでは＿＿。", answers: ["ない", "ありません"], hint: "Penyangkalan sebagian", translation: "Produk mahal tidak selalu bagus." },
  },
  "g-kotoninaru": {
    mc: {
      stem: "部長の 指示で、来週 タイへ 出張する（　　）。",
      options: ["ことになりました", "ことにしました", "ようにしました", "ところでした"],
      answerIndex: 0,
      explanation: "Keputusan datang dari atasan (pihak lain) → ことになりました.",
    },
    order: { tokens: ["来月から", "夜勤を", "する", "ことになりました"], translation: "Diputuskan saya akan kerja shift malam mulai bulan depan." },
    fill: { stem: "工場では 安全靴を はく ことに＿＿＿います。", answers: ["なって"], hint: "Aturan yang sudah berlaku", translation: "Di pabrik, aturannya wajib memakai sepatu keselamatan." },
  },
  "g-nisaishite": {
    mc: {
      stem: "ご入社（　　）、必要な 書類を ご案内します。",
      options: ["に際して", "にしては", "に対して", "に比べて"],
      answerIndex: 0,
      explanation: "Momen penting dan formal (masuk perusahaan) → に際して.",
    },
    order: { tokens: ["契約の", "更新に", "際して", "面談を行います"], translation: "Dalam rangka perpanjangan kontrak, akan diadakan wawancara." },
    fill: { stem: "工場見学に＿＿して、注意事項を説明します。", answers: ["際"], hint: "Kanji: さい", translation: "Dalam rangka kunjungan pabrik, kami jelaskan hal-hal yang perlu diperhatikan." },
  },
  "g-ohajime": {
    mc: {
      stem: "社長（　　）、多くの 社員が 式に 出席した。",
      options: ["をはじめ", "をもとに", "をめぐって", "を通じて"],
      answerIndex: 0,
      explanation: "Menyebut contoh utama (direktur) lalu kelompok lebih luas → をはじめ.",
    },
    order: { tokens: ["大手メーカーを", "はじめ", "多くの自動車会社が", "参加した"], translation: "Banyak perusahaan otomotif ikut serta, mulai dari Toyota." },
    fill: { stem: "日本語を＿＿＿＿、英語や中国語も話せる人を探しています。", answers: ["はじめ", "はじめとして"], hint: "Dimulai dari ~", translation: "Kami mencari orang yang bisa berbahasa Jepang, juga Inggris dan Mandarin." },
  },
};
