import type { Question } from "@/lib/types";

/**
 * Soal latihan BUATAN PLATFORM (source: "platform").
 * Mengikuti pola kompetensi umum JLPT (membaca kanji, kosakata dalam konteks,
 * tata bahasa, pemahaman bacaan) tetapi BUKAN soal resmi JLPT dan tidak disalin
 * dari buku persiapan mana pun.
 */
export const QUESTIONS: Question[] = [
  // ── N5 ───────────────────────────────────────────
  {
    id: "q-n5-01", level: "N5", category: "kanji", source: "platform", relatedTopic: "k-mizu",
    prompt: "Bagaimana cara membaca kata bergaris bawah?",
    stem: "つめたい [[水]]を のみます。",
    options: ["みず", "すい", "こおり", "みつ"], answerIndex: 0,
    explanation: "水 dibaca みず (kunyomi) saat berdiri sendiri. すい adalah onyomi, dipakai dalam kata majemuk seperti 水曜日.",
  },
  {
    id: "q-n5-02", level: "N5", category: "kosakata", source: "platform", relatedTopic: "v-taberu",
    prompt: "Pilih kata yang paling tepat untuk ( ).",
    stem: "しょくどうで ひるごはんを (　　)。",
    options: ["のみます", "たべます", "ねます", "かきます"], answerIndex: 1,
    explanation: "ひるごはん (makan siang) dipasangkan dengan たべます (makan).",
  },
  {
    id: "q-n5-03", level: "N5", category: "tata-bahasa", source: "platform", relatedTopic: "g-tai",
    prompt: "Pilih bentuk yang benar.",
    stem: "わたしは にほんへ (　　)です。",
    options: ["いく", "いきたい", "いって", "いった"], answerIndex: 1,
    explanation: "Keinginan pembicara: verba bentuk ます tanpa ます + たいです → いきたいです.",
  },
  // ── N4 ───────────────────────────────────────────
  {
    id: "q-n4-01", level: "N4", category: "kanji", source: "platform", relatedTopic: "k-kai",
    prompt: "Bagaimana cara membaca kata bergaris bawah?",
    stem: "ごご 三時から [[会議]]が あります。",
    options: ["かいぎ", "かいき", "がいぎ", "あいぎ"], answerIndex: 0,
    explanation: "会議 = かいぎ (rapat). 会 dibaca カイ, 議 dibaca ギ.",
  },
  {
    id: "q-n4-02", level: "N4", category: "tata-bahasa", source: "platform", relatedTopic: "g-teshimau",
    prompt: "Pilih bentuk yang paling tepat.",
    stem: "でんしゃに かさを わすれて (　　)。",
    options: ["しまいました", "おきました", "みました", "あげました"], answerIndex: 0,
    explanation: "Kejadian tidak disengaja yang disesali → 〜てしまいました.",
  },
  {
    id: "q-n4-03", level: "N4", category: "kosakata", source: "platform", relatedTopic: "v-junbi",
    prompt: "Pilih kata yang paling tepat untuk ( ).",
    stem: "あしたの めんせつの (　　)を しています。",
    options: ["じゅんび", "しゅくだい", "りょこう", "さんぽ"], answerIndex: 0,
    explanation: "めんせつ (wawancara) → じゅんび (persiapan) adalah kolokasi yang wajar.",
  },
  // ── N3 ───────────────────────────────────────────
  {
    id: "q-n3-01", level: "N3", category: "kanji", source: "platform", relatedTopic: "k-kaku",
    prompt: "Bagaimana cara membaca kata bergaris bawah?",
    stem: "出荷の前に数量を[[確認]]してください。",
    options: ["かくにん", "かくじん", "かくいん", "がくにん"], answerIndex: 0,
    explanation: "確認 = かくにん (pengecekan/konfirmasi).",
  },
  {
    id: "q-n3-02", level: "N3", category: "kosakata", source: "platform", relatedTopic: "v-koshou",
    prompt: "Pilih kata yang paling tepat untuk ( ).",
    stem: "機械が(　　)したので、修理を依頼しました。",
    options: ["故障", "停電", "注文", "出張"], answerIndex: 0,
    explanation: "Mesin yang perlu diperbaiki (修理) → 故障 (rusak/mogok).",
  },
  {
    id: "q-n3-03", level: "N3", category: "tata-bahasa", source: "platform", relatedTopic: "g-kotoninaru",
    prompt: "Pilih ungkapan yang paling tepat.",
    stem: "会社の方針で、来月から全員が制服を着る(　　)。",
    options: ["ことになりました", "ことにしました", "ようにしました", "はずでした"], answerIndex: 0,
    explanation: "Keputusan berasal dari kebijakan perusahaan (bukan pembicara) → ことになりました.",
  },
  // ── N2 ───────────────────────────────────────────
  {
    id: "q-n2-01", level: "N2", category: "kanji", source: "platform", relatedTopic: "k-kan",
    prompt: "Bagaimana cara membaca kata bergaris bawah?",
    stem: "部品は倉庫で適切に[[保管]]されている。",
    options: ["ほかん", "ほうかん", "ぼかん", "ほがん"], answerIndex: 0,
    explanation: "保管 = ほかん (penyimpanan). Hati-hati dengan vokal panjang: bukan ほうかん.",
  },
  {
    id: "q-n2-02", level: "N2", category: "tata-bahasa", source: "platform", relatedTopic: "g-nisaishite",
    prompt: "Pilih ungkapan yang paling tepat.",
    stem: "新工場の稼働(　　)、安全講習を実施いたします。",
    options: ["に際して", "にしては", "に比べて", "に反して"], answerIndex: 0,
    explanation: "Momen penting yang formal (mulai beroperasinya pabrik baru) → に際して.",
  },
  {
    id: "q-n2-03", level: "N2", category: "membaca", source: "platform", relatedTopic: "r-n2-email",
    prompt: "Bacalah lalu jawab: Apa yang diminta penulis?",
    stem: "来週の監査に際し、各部署は過去三か月分の点検記録を金曜日までに品質管理課へ提出してください。なお、記録に不備がある場合は、提出前に担当者が修正すること。",
    options: [
      "Setiap departemen menyerahkan catatan inspeksi 3 bulan terakhir paling lambat Jumat.",
      "Departemen QC akan memperbaiki semua catatan yang salah.",
      "Audit dibatalkan dan diganti minggu depan.",
      "Hanya catatan bulan ini yang perlu diserahkan.",
    ],
    answerIndex: 0,
    explanation: "Kalimat utama: 各部署は過去三か月分の点検記録を金曜日までに…提出. Perbaikan dilakukan oleh penanggung jawab tiap departemen, bukan QC.",
  },
];
