import type { JlptLevel, Question, QuestionCategory } from "./types";

/** Soal latihan/ujian: Question + tautan materi & judul bacaan (bila dari dokkai). */
export interface ExamQuestion extends Question {
  href?: string;
  passageTitle?: string;
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
  passages: ExamPassage[];
}

export const CATEGORY_LABEL: Record<QuestionCategory, string> = {
  kanji: "Kanji",
  kosakata: "Kosakata",
  "tata-bahasa": "Tata bahasa",
  membaca: "Membaca",
};

export const CATEGORY_ORDER: QuestionCategory[] = ["kanji", "kosakata", "tata-bahasa", "membaca"];

/** Skema ujian. "real" mendekati durasi bagian pengetahuan bahasa + membaca JLPT (tanpa choukai). */
export type ExamMode = "mini" | "real";

export interface ExamConfig {
  mode: ExamMode;
  label: string;
  tagline: string;
  minutes: number;
  kanji: number;
  kosakata: number;
  grammar: number;
  passages: number;
  membaca: number;
}

/** Jumlah soal & waktu per level untuk Real Test (perkiraan; bukan format resmi). */
const REAL: Record<JlptLevel, Omit<ExamConfig, "mode" | "label" | "tagline">> = {
  N5: { minutes: 60, kanji: 12, kosakata: 18, grammar: 16, passages: 3, membaca: 1 },
  N4: { minutes: 80, kanji: 14, kosakata: 20, grammar: 18, passages: 4, membaca: 1 },
  N3: { minutes: 100, kanji: 14, kosakata: 22, grammar: 20, passages: 5, membaca: 1 },
  N2: { minutes: 105, kanji: 12, kosakata: 22, grammar: 22, passages: 6, membaca: 1 },
};

export function examConfig(mode: ExamMode, level: JlptLevel): ExamConfig {
  if (mode === "real") {
    return { mode, label: "Real Test", tagline: "Simulasi lengkap dengan durasi mendekati ujian sesungguhnya", ...REAL[level] };
  }
  return { mode, label: "Mini Test", tagline: "Latihan singkat untuk sehari-hari", minutes: 12, kanji: 4, kosakata: 4, grammar: 4, passages: 1, membaca: 0 };
}

/** Perkiraan jumlah soal (bacaan dihitung ±2 soal). */
export function estimatedCount(c: ExamConfig): number {
  return c.kanji + c.kosakata + c.grammar + c.membaca + c.passages * 2;
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
