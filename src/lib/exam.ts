import type { JlptLevel, Question, QuestionCategory } from "./types";

/** Soal latihan/ujian: Question + tautan materi & bacaan (bila soal membaca). */
export interface ExamQuestion extends Question {
  href?: string;
  passageTitle?: string;
  /** Slug bacaan (soal membaca) — teksnya ada di ExamPassage dengan slug yang sama. */
  passageSlug?: string;
}

export interface ExamPassage {
  slug: string;
  title: string;
  paragraphs: string[];
  questions: ExamQuestion[];
}

export interface ExamPool {
  level: JlptLevel;
  kanji: ExamQuestion[];
  kosakata: ExamQuestion[];
  tataBahasa: ExamQuestion[];
  /** Soal membaca berdiri sendiri (teks ada di stem). */
  membaca: ExamQuestion[];
  /** Bacaan dokkai beserta soal-soalnya. */
  passages: ExamPassage[];
}

export const CATEGORY_LABEL: Record<QuestionCategory, string> = {
  kanji: "Kanji",
  kosakata: "Kosakata",
  "tata-bahasa": "Tata bahasa",
  membaca: "Membaca",
};

export const CATEGORY_ORDER: QuestionCategory[] = ["kanji", "kosakata", "tata-bahasa", "membaca"];

/** Target jumlah soal per kategori di bank soal (per level). */
export const POOL_SIZE = 100;

export type ExamMode = "mini" | "real";

export interface ExamConfig {
  mode: ExamMode;
  label: string;
  tagline: string;
  minutes: number;
  kanji: number;
  kosakata: number;
  grammar: number;
  /** Jumlah SOAL membaca (bukan jumlah teks). */
  membaca: number;
}

/**
 * Real Test: jumlah soal mengikuti "目安" (perkiraan) resmi JLPT untuk bagian
 * 言語知識 (文字・語彙・文法) + 読解, tanpa 聴解. Pengelompokan ke 4 kategori situs:
 *  - Kanji        = 漢字読み + 表記
 *  - Kosakata     = 語形成 + 文脈規定 + 言い換え類義 + 用法
 *  - Tata bahasa  = 文の文法1 + 文の文法2 + 文章の文法
 *  - Membaca      = seluruh soal 読解
 * N5/N4 memakai perkiraan baru sejak Desember 2020. Waktu disamakan 90 menit (pengaturan situs).
 */
const REAL: Record<JlptLevel, { kanji: number; kosakata: number; grammar: number; membaca: number }> = {
  N5: { kanji: 12, kosakata: 9, grammar: 17, membaca: 5 }, // 43 soal
  N4: { kanji: 12, kosakata: 16, grammar: 21, membaca: 8 }, // 57 soal
  N3: { kanji: 14, kosakata: 21, grammar: 23, membaca: 16 }, // 74 soal
  N2: { kanji: 10, kosakata: 22, grammar: 22, membaca: 21 }, // 75 soal
};

/** Rincian resmi per 大問 untuk ditampilkan di layar konfirmasi Real Test. */
export const REAL_BREAKDOWN: Record<JlptLevel, { group: QuestionCategory; items: [string, number][] }[]> = {
  N5: [
    { group: "kanji", items: [["漢字読み", 7], ["表記", 5]] },
    { group: "kosakata", items: [["文脈規定", 6], ["言い換え類義", 3]] },
    { group: "tata-bahasa", items: [["文の文法1", 9], ["文の文法2", 4], ["文章の文法", 4]] },
    { group: "membaca", items: [["内容理解（短文）", 2], ["内容理解（中文）", 2], ["情報検索", 1]] },
  ],
  N4: [
    { group: "kanji", items: [["漢字読み", 7], ["表記", 5]] },
    { group: "kosakata", items: [["文脈規定", 8], ["言い換え類義", 4], ["用法", 4]] },
    { group: "tata-bahasa", items: [["文の文法1", 13], ["文の文法2", 4], ["文章の文法", 4]] },
    { group: "membaca", items: [["内容理解（短文）", 3], ["内容理解（中文）", 3], ["情報検索", 2]] },
  ],
  N3: [
    { group: "kanji", items: [["漢字読み", 8], ["表記", 6]] },
    { group: "kosakata", items: [["文脈規定", 11], ["言い換え類義", 5], ["用法", 5]] },
    { group: "tata-bahasa", items: [["文の文法1", 13], ["文の文法2", 5], ["文章の文法", 5]] },
    { group: "membaca", items: [["内容理解（短文）", 4], ["内容理解（中文）", 6], ["内容理解（長文）", 4], ["情報検索", 2]] },
  ],
  N2: [
    { group: "kanji", items: [["漢字読み", 5], ["表記", 5]] },
    { group: "kosakata", items: [["語形成", 5], ["文脈規定", 7], ["言い換え類義", 5], ["用法", 5]] },
    { group: "tata-bahasa", items: [["文の文法1", 12], ["文の文法2", 5], ["文章の文法", 5]] },
    { group: "membaca", items: [["内容理解（短文）", 5], ["内容理解（中文）", 9], ["統合理解", 2], ["主張理解（長文）", 3], ["情報検索", 2]] },
  ],
};

export const REAL_MINUTES = 90;
export const MINI_MINUTES = 20;

export function examConfig(mode: ExamMode, level: JlptLevel): ExamConfig {
  if (mode === "real") {
    return { mode, label: "Real Test", tagline: "Jumlah soal mengikuti perkiraan resmi JLPT (tanpa choukai)", minutes: REAL_MINUTES, ...REAL[level] };
  }
  return { mode, label: "Mini Test", tagline: "20 soal: 5 kanji, 5 kosakata, 5 tata bahasa, 5 membaca", minutes: MINI_MINUTES, kanji: 5, kosakata: 5, grammar: 5, membaca: 5 };
}

export function estimatedCount(c: ExamConfig): number {
  return c.kanji + c.kosakata + c.grammar + c.membaca;
}

export function parseModeParam(value: string | string[] | undefined): ExamMode | null {
  const v = Array.isArray(value) ? value[0] : value;
  return v === "mini" || v === "real" ? v : null;
}

/** Halaman materi untuk mengulang suatu kategori di level tertentu. */
export function moduleHref(category: QuestionCategory, level: JlptLevel): string {
  switch (category) {
    case "kanji":
      return "/kanji?level=" + level;
    case "kosakata":
      return "/kotoba?level=" + level;
    case "tata-bahasa":
      return "/bunpou?level=" + level;
    default:
      return "/dokkai?level=" + level;
  }
}

/** Acak urutan (dipakai di browser agar setiap sesi berbeda). */
export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Ambil n soal membaca dari bacaan: acak bacaan, maksimal `perPassage` soal per teks. */
export function pickReading(passages: ExamPassage[], n: number, perPassage = 4): ExamPassage[] {
  const out: ExamPassage[] = [];
  let left = n;
  for (const p of shuffle(passages)) {
    if (left <= 0) break;
    const qs = shuffle(p.questions).slice(0, Math.min(perPassage, left));
    if (qs.length === 0) continue;
    out.push({ ...p, questions: qs });
    left -= qs.length;
  }
  // Bila bacaan sedikit, tambah soal dari bacaan yang sudah terpilih
  if (left > 0) {
    for (const p of out) {
      if (left <= 0) break;
      const src = passages.find((x) => x.slug === p.slug);
      const extra = (src?.questions ?? []).filter((q) => !p.questions.includes(q)).slice(0, left);
      p.questions = [...p.questions, ...extra];
      left -= extra.length;
    }
  }
  return out;
}
