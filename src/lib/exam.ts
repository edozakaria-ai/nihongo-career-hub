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

export type ExamMode = "mini" | "standar";

export const EXAM_MODES: Record<ExamMode, { label: string; description: string; minutes: number; kanji: number; kosakata: number; grammar: number; passages: number; membaca: number }> = {
  mini: { label: "Mini", description: "± 14 soal · 12 menit — cocok untuk latihan harian", minutes: 12, kanji: 4, kosakata: 4, grammar: 4, passages: 1, membaca: 0 },
  standar: { label: "Standar", description: "± 32 soal · 35 menit — mendekati suasana ujian", minutes: 35, kanji: 8, kosakata: 10, grammar: 10, passages: 2, membaca: 1 },
};

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
