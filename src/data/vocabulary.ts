import type { Vocabulary } from "@/lib/types";

/** Data contoh kosakata orisinal. Untuk produksi, hubungkan ke kamus berlisensi terbuka
 *  (mis. JMdict/EDRDG, lisensi CC BY-SA) dengan atribusi — lihat docs/ARCHITECTURE.md. */
export const VOCABULARY: Vocabulary[] = [
  {
    id: "v-mizu", word: "水", reading: "みず", romaji: "mizu", meaningId: ["air"], meaningEn: ["water"],
    partOfSpeech: "nomina", level: "N5",
    examples: [{ jp: "冷{つめ}たい水{みず}が飲{の}みたいです。", romaji: "Tsumetai mizu ga nomitai desu.", translation: "Saya ingin minum air dingin." }],
    related: ["お湯", "飲む"], tags: ["sehari-hari"],
  },
  {
    id: "v-taberu", word: "食べる", reading: "たべる", romaji: "taberu", meaningId: ["makan"], meaningEn: ["to eat"],
    partOfSpeech: "verba-2", level: "N5",
    examples: [{ jp: "昼{ひる}ご飯{はん}は食堂{しょくどう}で食{た}べます。", romaji: "Hirugohan wa shokudou de tabemasu.", translation: "Makan siang saya makan di kantin." }],
    related: ["飲む", "食事"], tags: ["sehari-hari"],
  },
  {
    id: "v-sensei", word: "先生", reading: "せんせい", romaji: "sensei", meaningId: ["guru", "dosen", "dokter"], meaningEn: ["teacher", "doctor"],
    partOfSpeech: "nomina", level: "N5",
    examples: [{ jp: "田中{たなか}先生{せんせい}は日本語{にほんご}の先生{せんせい}です。", romaji: "Tanaka-sensei wa nihongo no sensei desu.", translation: "Pak/Bu Tanaka adalah guru bahasa Jepang." }],
    related: ["学生", "教える"], tags: ["sekolah"],
  },
  {
    id: "v-kaigi", word: "会議", reading: "かいぎ", romaji: "kaigi", meaningId: ["rapat"], meaningEn: ["meeting", "conference"],
    partOfSpeech: "nomina", level: "N4",
    examples: [{ jp: "午後{ごご}三時{さんじ}から会議{かいぎ}があります。", romaji: "Gogo sanji kara kaigi ga arimasu.", translation: "Ada rapat mulai pukul tiga sore." }],
    related: ["打ち合わせ", "議事録"], tags: ["kantor"],
  },
  {
    id: "v-hataraku", word: "働く", reading: "はたらく", romaji: "hataraku", meaningId: ["bekerja"], meaningEn: ["to work"],
    partOfSpeech: "verba-1", level: "N4",
    examples: [{ jp: "日本{にほん}の会社{かいしゃ}で働{はたら}きたいです。", romaji: "Nihon no kaisha de hatarakitai desu.", translation: "Saya ingin bekerja di perusahaan Jepang." }],
    related: ["仕事", "勤める"], tags: ["kantor"],
  },
  {
    id: "v-junbi", word: "準備", reading: "じゅんび", romaji: "junbi", meaningId: ["persiapan"], meaningEn: ["preparation"],
    partOfSpeech: "nomina", level: "N4",
    examples: [{ jp: "面接{めんせつ}の準備{じゅんび}はできましたか。", romaji: "Mensetsu no junbi wa dekimashita ka.", translation: "Apakah persiapan wawancaranya sudah selesai?" }],
    related: ["用意", "準備する"], tags: ["kantor"],
  },
  {
    id: "v-seihin", word: "製品", reading: "せいひん", romaji: "seihin", meaningId: ["produk"], meaningEn: ["product"],
    partOfSpeech: "nomina", level: "N3",
    examples: [{ jp: "新{あたら}しい製品{せいひん}の検査{けんさ}が始{はじ}まりました。", romaji: "Atarashii seihin no kensa ga hajimarimashita.", translation: "Inspeksi produk baru sudah dimulai." }],
    related: ["部品", "商品"], tags: ["manufaktur"],
  },
  {
    id: "v-kakunin", word: "確認", reading: "かくにん", romaji: "kakunin", meaningId: ["konfirmasi", "pengecekan"], meaningEn: ["confirmation", "check"],
    partOfSpeech: "nomina", level: "N3",
    examples: [{ jp: "図面{ずめん}を確認{かくにん}してから作業{さぎょう}を始{はじ}めます。", romaji: "Zumen o kakunin shite kara sagyou o hajimemasu.", translation: "Saya mulai bekerja setelah mengecek gambar teknik." }],
    related: ["点検", "チェック"], tags: ["manufaktur", "kantor"],
  },
  {
    id: "v-koshou", word: "故障", reading: "こしょう", romaji: "koshou", meaningId: ["kerusakan", "mogok (mesin)"], meaningEn: ["breakdown", "malfunction"],
    partOfSpeech: "nomina", level: "N3",
    examples: [{ jp: "機械{きかい}が故障{こしょう}したので、ラインが止{と}まりました。", romaji: "Kikai ga koshou shita node, rain ga tomarimashita.", translation: "Karena mesin rusak, lini produksi berhenti." }],
    related: ["修理", "トラブル"], tags: ["manufaktur", "maintenance"],
  },
  {
    id: "v-tsuuyaku", word: "通訳", reading: "つうやく", romaji: "tsuuyaku", meaningId: ["interpretasi lisan", "interpreter"], meaningEn: ["interpreting", "interpreter"],
    partOfSpeech: "nomina", level: "N2",
    examples: [{ jp: "工場{こうじょう}見学{けんがく}で通訳{つうやく}をお願{ねが}いできますか。", romaji: "Koujou kengaku de tsuuyaku o onegai dekimasu ka.", translation: "Bisakah Anda menjadi interpreter saat kunjungan pabrik?" }],
    related: ["翻訳", "通訳者"], tags: ["karier"],
  },
  {
    id: "v-honyaku", word: "翻訳", reading: "ほんやく", romaji: "hon'yaku", meaningId: ["terjemahan", "menerjemahkan"], meaningEn: ["translation"],
    partOfSpeech: "nomina", level: "N2",
    examples: [{ jp: "作業{さぎょう}手順書{てじゅんしょ}をインドネシア語{ご}に翻訳{ほんやく}しました。", romaji: "Sagyou tejunsho o Indoneshia-go ni hon'yaku shimashita.", translation: "Saya menerjemahkan SOP kerja ke bahasa Indonesia." }],
    related: ["通訳", "訳す"], tags: ["karier"],
  },
  {
    id: "v-kanri", word: "管理", reading: "かんり", romaji: "kanri", meaningId: ["pengelolaan", "manajemen"], meaningEn: ["management", "control"],
    partOfSpeech: "nomina", level: "N2",
    examples: [{ jp: "在庫{ざいこ}の管理{かんり}はシステムで行{おこな}っています。", romaji: "Zaiko no kanri wa shisutemu de okonatte imasu.", translation: "Pengelolaan stok dilakukan dengan sistem." }],
    related: ["品質管理", "管理者"], tags: ["manufaktur", "kantor"],
  },
  {
    id: "v-kaizen", word: "改善", reading: "かいぜん", romaji: "kaizen", meaningId: ["perbaikan (berkelanjutan)"], meaningEn: ["improvement"],
    partOfSpeech: "nomina", level: "N2",
    examples: [{ jp: "作業{さぎょう}時間{じかん}を短{みじか}くするために改善{かいぜん}案{あん}を出{だ}しました。", romaji: "Sagyou jikan o mijikaku suru tame ni kaizen-an o dashimashita.", translation: "Saya mengajukan usulan perbaikan untuk mempersingkat waktu kerja." }],
    related: ["改良", "提案"], tags: ["manufaktur"],
  },
];
