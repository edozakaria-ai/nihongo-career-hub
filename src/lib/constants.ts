import type { JlptLevel, ModuleKey } from "./types";

export const SITE = {
  name: "Nihongo Career Hub",
  shortName: "NCH",
  tagline: "Belajar bahasa Jepang N5–N2, lalu wujudkan karier sebagai penerjemah & interpreter.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "id_ID",
} as const;

export interface NavItem {
  href: string;
  label: string;
  jp?: string;
}

/** Navigasi utama (tampil di header). */
export const MAIN_NAV: NavItem[] = [
  { href: "/", label: "Beranda" },
  { href: "/dashboard", label: "Dashboard", jp: "学習" },
  { href: "/kanji", label: "Kanji", jp: "漢字" },
  { href: "/kotoba", label: "Kotoba", jp: "言葉" },
  { href: "/bunpou", label: "Bunpou", jp: "文法" },
  { href: "/dokkai", label: "Dokkai", jp: "読解" },
  { href: "/latihan", label: "Latihan JLPT", jp: "練習" },
  { href: "/career", label: "Career", jp: "仕事" },
];

/** Navigasi akun (tampil di area kanan header / menu mobile). */
export const ACCOUNT_NAV: NavItem[] = [
  { href: "/profil", label: "Profil" },
  { href: "/login", label: "Masuk" },
  { href: "/register", label: "Daftar" },
  { href: "/admin", label: "Admin" },
];

export const LEVEL_INFO: Record<
  JlptLevel,
  { title: string; description: string; kanji: number; vocab: number; color: string }
> = {
  N5: { title: "Pemula", description: "Hiragana, katakana, salam, kalimat dasar sehari-hari.", kanji: 100, vocab: 800, color: "bg-emerald-500" },
  N4: { title: "Dasar", description: "Percakapan sederhana, bentuk te/ta/nai, kalimat kondisi dasar.", kanji: 300, vocab: 1500, color: "bg-sky-500" },
  N3: { title: "Menengah", description: "Bacaan umum, ungkapan kerja, transisi ke bahasa Jepang nyata.", kanji: 650, vocab: 3750, color: "bg-indigo-500" },
  N2: { title: "Menengah Atas", description: "Dokumen bisnis, berita, dan komunikasi profesional.", kanji: 1000, vocab: 6000, color: "bg-brand-500" },
};

export const MODULES: { key: ModuleKey; href: string; title: string; jp: string; description: string; icon: string }[] = [
  { key: "kanji", href: "/kanji", title: "Kanji", jp: "漢字", description: "Arti, onyomi/kunyomi, urutan goresan, mnemonik, dan kuis.", icon: "字" },
  { key: "kotoba", href: "/kotoba", title: "Kotoba", jp: "言葉", description: "Kamus cepat: cari dengan kanji, kana, romaji, Indonesia, atau Inggris.", icon: "語" },
  { key: "bunpou", href: "/bunpou", title: "Bunpou", jp: "文法", description: "Pola tata bahasa, perbandingan pola mirip, dan kesalahan umum.", icon: "文" },
  { key: "dokkai", href: "/dokkai", title: "Dokkai", jp: "読解", description: "Bacaan orisinal dengan furigana opsional dan pembahasan.", icon: "読" },
  { key: "latihan", href: "/latihan", title: "Latihan JLPT", jp: "練習", description: "Latihan per topik & simulasi berwaktu dengan analisis skor.", icon: "試" },
];

export const ROLE_LABEL: Record<string, string> = {
  translator: "Translator",
  interpreter: "Interpreter",
  localization: "Localization Specialist",
  "japanese-speaker": "Japanese Speaker",
  liaison: "Liaison",
};
