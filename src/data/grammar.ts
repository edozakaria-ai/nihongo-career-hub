import type { GrammarPoint } from "@/lib/types";

/** Pola bunpou contoh — penjelasan dan contoh ditulis orisinal oleh platform. */
export const GRAMMAR: GrammarPoint[] = [
  {
    id: "g-tai", slug: "tai-desu", pattern: "〜たいです", level: "N5",
    meaning: "Ingin melakukan sesuatu (keinginan pembicara).",
    structure: "Verba bentuk ます (tanpa ます) + たいです",
    usage: "Menyatakan keinginan diri sendiri. Untuk keinginan orang lain gunakan 〜たがっています.",
    formality: "sopan",
    examples: [
      { jp: "日本{にほん}へ行{い}きたいです。", romaji: "Nihon e ikitai desu.", translation: "Saya ingin pergi ke Jepang." },
      { jp: "今日{きょう}は何{なに}も食{た}べたくないです。", romaji: "Kyou wa nani mo tabetakunai desu.", translation: "Hari ini saya tidak ingin makan apa pun." },
    ],
    comparison: [{ pattern: "〜がほしいです", note: "ほしい untuk menginginkan BENDA (nomina), たい untuk menginginkan TINDAKAN (verba)." }],
    commonMistakes: [
      "Memakai たい untuk orang ketiga: ✗ 田中さんは行きたいです → ✓ 田中さんは行きたがっています.",
      "Lupa bahwa たい berkonjugasi seperti adjektiva-i: ✗ 行きたいじゃない → ✓ 行きたくない.",
    ],
  },
  {
    id: "g-tekudasai", slug: "te-kudasai", pattern: "〜てください", level: "N5",
    meaning: "Tolong lakukan ~ (permintaan/instruksi sopan).",
    structure: "Verba bentuk て + ください",
    usage: "Instruksi di kelas, kantor, atau pabrik. Untuk atasan lebih halus: 〜ていただけますか.",
    formality: "sopan",
    examples: [
      { jp: "ここに名前{なまえ}を書{か}いてください。", romaji: "Koko ni namae o kaite kudasai.", translation: "Tolong tulis nama Anda di sini." },
      { jp: "安全{あんぜん}メガネをかけてください。", romaji: "Anzen megane o kakete kudasai.", translation: "Tolong pakai kacamata pengaman." },
    ],
    comparison: [{ pattern: "〜ないでください", note: "Bentuk larangan sopan: jangan melakukan ~." }],
    commonMistakes: ["Salah membentuk bentuk て verba golongan 1: ✗ 書きてください → ✓ 書いてください."],
  },
  {
    id: "g-teshimau", slug: "te-shimau", pattern: "〜てしまう", level: "N4",
    meaning: "Telanjur/tidak sengaja melakukan ~; atau menuntaskan sesuatu.",
    structure: "Verba bentuk て + しまう (lisan: 〜ちゃう / 〜じゃう)",
    usage: "Menyatakan penyesalan atau hal yang terjadi di luar kendali; juga bisa berarti 'sampai selesai'.",
    formality: "netral",
    examples: [
      { jp: "資料{しりょう}を家{いえ}に忘{わす}れてしまいました。", romaji: "Shiryou o ie ni wasurete shimaimashita.", translation: "Saya (tidak sengaja) ketinggalan dokumen di rumah." },
      { jp: "報告書{ほうこくしょ}は今日{きょう}中{じゅう}に書{か}いてしまいます。", romaji: "Houkokusho wa kyoujuu ni kaite shimaimasu.", translation: "Laporannya akan saya selesaikan hari ini." },
    ],
    comparison: [{ pattern: "〜ておく", note: "ておく = melakukan sebagai persiapan; てしまう = tuntas atau menyesal." }],
    commonMistakes: ["Menganggap てしまう selalu berarti menyesal — konteks 'menyelesaikan' juga umum."],
  },
  {
    id: "g-youni-suru", slug: "you-ni-suru", pattern: "〜ようにする", level: "N4",
    meaning: "Berusaha agar ~ / membiasakan diri untuk ~.",
    structure: "Verba bentuk kamus / ない + ようにする",
    usage: "Kebiasaan atau upaya berkelanjutan. Bentuk ようにしている = sedang membiasakan diri.",
    formality: "netral",
    examples: [
      { jp: "毎朝{まいあさ}漢字{かんじ}を五{いつ}つ覚{おぼ}えるようにしています。", romaji: "Maiasa kanji o itsutsu oboeru you ni shite imasu.", translation: "Saya membiasakan diri menghafal lima kanji setiap pagi." },
      { jp: "遅刻{ちこく}しないようにしてください。", romaji: "Chikoku shinai you ni shite kudasai.", translation: "Usahakan agar tidak terlambat." },
    ],
    comparison: [{ pattern: "〜ようになる", note: "ようになる = perubahan keadaan (jadi bisa); ようにする = usaha sadar." }],
    commonMistakes: ["Tertukar dengan ようになる: ✗ 漢字が読めるようにします (maksud: sudah jadi bisa) → ✓ 漢字が読めるようになりました."],
  },
  {
    id: "g-wakedewanai", slug: "wake-dewa-nai", pattern: "〜わけではない", level: "N3",
    meaning: "Bukan berarti ~ / tidak selalu ~ (menyangkal sebagian).",
    structure: "Bentuk biasa (adj-na/nomina + な/である) + わけではない",
    usage: "Meluruskan anggapan lawan bicara secara halus tanpa menyangkal total.",
    formality: "netral",
    examples: [
      { jp: "残業{ざんぎょう}が嫌{きら}いなわけではありません。", romaji: "Zangyou ga kirai na wake dewa arimasen.", translation: "Bukan berarti saya tidak suka lembur." },
      { jp: "N2に合格{ごうかく}すれば、必{かなら}ず通訳{つうやく}ができるわけではない。", romaji: "N2 ni goukaku sureba, kanarazu tsuuyaku ga dekiru wake dewa nai.", translation: "Lulus N2 bukan berarti pasti bisa menjadi interpreter." },
    ],
    comparison: [{ pattern: "〜わけがない", note: "わけがない = mustahil (penyangkalan kuat); わけではない = penyangkalan sebagian." }],
    commonMistakes: ["Menerjemahkan sebagai 'tidak' biasa sehingga nuansa 'tidak sepenuhnya' hilang."],
  },
  {
    id: "g-kotoninaru", slug: "koto-ni-naru", pattern: "〜ことになる", level: "N3",
    meaning: "Diputuskan bahwa ~ (keputusan bukan dari pembicara sendiri/hasil situasi).",
    structure: "Verba bentuk kamus / ない + ことになる",
    usage: "Pengumuman keputusan perusahaan, jadwal, atau aturan. ことになっている = sudah menjadi aturan.",
    formality: "netral",
    examples: [
      { jp: "来月{らいげつ}から名古屋{なごや}工場{こうじょう}に出張{しゅっちょう}することになりました。", romaji: "Raigetsu kara Nagoya koujou ni shucchou suru koto ni narimashita.", translation: "Diputuskan saya akan dinas ke pabrik Nagoya mulai bulan depan." },
      { jp: "工場{こうじょう}内{ない}では帽子{ぼうし}をかぶることになっています。", romaji: "Koujou-nai de wa boushi o kaburu koto ni natte imasu.", translation: "Di dalam pabrik, aturannya wajib memakai topi." },
    ],
    comparison: [{ pattern: "〜ことにする", note: "ことにする = keputusan pribadi pembicara; ことになる = keputusan dari pihak lain/keadaan." }],
    commonMistakes: ["Memakai ことにする untuk keputusan perusahaan sehingga terdengar seolah pembicara yang memutuskan."],
  },
  {
    id: "g-nisaishite", slug: "ni-saishite", pattern: "〜に際して", level: "N2",
    meaning: "Pada saat ~ / dalam rangka ~ (momen penting, formal).",
    structure: "Nomina / Verba bentuk kamus + に際して(は)",
    usage: "Pengumuman resmi, email bisnis, sambutan. Lebih formal daripada 〜時に.",
    formality: "formal",
    examples: [
      { jp: "契約{けいやく}に際して、以下{いか}の書類{しょるい}をご提出{ていしゅつ}ください。", romaji: "Keiyaku ni saishite, ika no shorui o go-teishutsu kudasai.", translation: "Dalam rangka kontrak, mohon serahkan dokumen berikut." },
    ],
    comparison: [{ pattern: "〜にあたって", note: "Mirip; にあたって lebih menekankan persiapan menghadapi momen tersebut." }],
    commonMistakes: ["Dipakai untuk kejadian sehari-hari yang sepele: ✗ 昼ご飯に際して."],
  },
  {
    id: "g-ohajime", slug: "wo-hajime", pattern: "〜をはじめ(として)", level: "N2",
    meaning: "Dimulai dari ~ / termasuk ~ (menyebut contoh utama).",
    structure: "Nomina + をはじめ(として)、…",
    usage: "Menyebut contoh paling representatif lalu kelompok yang lebih luas.",
    formality: "formal",
    examples: [
      { jp: "社長{しゃちょう}をはじめ、多{おお}くの社員{しゃいん}が説明会{せつめいかい}に参加{さんか}しました。", romaji: "Shachou o hajime, ooku no shain ga setsumeikai ni sanka shimashita.", translation: "Mulai dari direktur utama, banyak karyawan menghadiri sesi penjelasan." },
    ],
    comparison: [{ pattern: "〜など", note: "など hanya 'dan lain-lain'; をはじめ menonjolkan contoh utama di awal." }],
    commonMistakes: ["Menaruh contoh yang tidak representatif di depan をはじめ."],
  },
];
