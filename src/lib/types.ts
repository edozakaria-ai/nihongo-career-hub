/**
 * Tipe data domain Nihongo Career Hub.
 * Nama field mengikuti kolom tabel Supabase (snake_case di DB → camelCase di sini)
 * agar migrasi dari data contoh ke database bersifat 1:1. Lihat supabase/migrations.
 */

export type JlptLevel = "N5" | "N4" | "N3" | "N2";
export const JLPT_LEVELS: readonly JlptLevel[] = ["N5", "N4", "N3", "N2"] as const;

export type UserRole = "learner" | "candidate" | "recruiter" | "admin";
export type LearningStatus = "new" | "learning" | "mastered";
export type Formality = "kasual" | "netral" | "sopan" | "formal";
export type ModuleKey = "kanji" | "kotoba" | "bunpou" | "dokkai" | "latihan";

/**
 * Teks Jepang dengan notasi furigana ringkas: `漢字{かんじ}`.
 * Contoh: "私{わたし}は水{みず}を飲{の}みます。"
 * Format ini mudah ditulis, disimpan sebagai TEXT di database, dan di-parse oleh
 * `parseRuby()` (src/lib/ruby.ts) menjadi elemen <ruby>.
 */
export type RubyText = string;

export interface ExampleSentence {
  jp: RubyText;
  romaji?: string;
  translation: string;
}

export interface Kanji {
  id: string;
  character: string;
  level: JlptLevel;
  meanings: string[];
  onyomi: string[];
  kunyomi: string[];
  strokeCount: number;
  category: string;
  /** Path SVG diagram urutan goresan (diisi kemudian, mis. dari KanjiVG – lisensi CC BY-SA). */
  strokeOrderSvg?: string | null;
  mnemonic: string;
  vocabulary: { word: string; reading: string; meaning: string }[];
  examples: ExampleSentence[];
}

export type PartOfSpeech =
  | "nomina"
  | "verba-1"
  | "verba-2"
  | "verba-3"
  | "adjektiva-i"
  | "adjektiva-na"
  | "adverbia"
  | "ungkapan";

export interface Vocabulary {
  id: string;
  word: string; // bentuk kanji (atau kana jika tidak ada kanji)
  reading: string; // hiragana/katakana
  romaji: string;
  meaningId: string[];
  meaningEn: string[];
  partOfSpeech: PartOfSpeech;
  level: JlptLevel;
  examples: ExampleSentence[];
  related?: string[];
  tags?: string[];
}

export interface GrammarPoint {
  id: string;
  slug: string;
  pattern: string;
  level: JlptLevel;
  meaning: string;
  structure: string;
  usage: string;
  formality: Formality;
  examples: ExampleSentence[];
  comparison?: { pattern: string; note: string }[];
  commonMistakes: string[];
}

export interface ReadingLesson {
  id: string;
  slug: string;
  title: string;
  level: JlptLevel;
  minutes: number;
  difficulty: 1 | 2 | 3 | 4 | 5;
  paragraphs: RubyText[];
  translation: string[];
  keyVocabulary: { word: string; reading: string; meaning: string }[];
  questions: Question[];
}

export type QuestionCategory = "kanji" | "kosakata" | "tata-bahasa" | "membaca";

export interface Question {
  id: string;
  level: JlptLevel;
  category: QuestionCategory;
  prompt: string;
  /** Teks pendukung (mis. kalimat dengan bagian bergaris bawah ditandai [[...]]). */
  stem?: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  /** Selalu "platform" untuk soal buatan sendiri. "licensed" hanya untuk materi berizin. */
  source: "platform" | "licensed";
  relatedTopic?: string;
}

export type EmploymentType = "full-time" | "part-time" | "freelance" | "kontrak";
export type WorkMode = "remote" | "hybrid" | "on-site";
export type JobRole = "translator" | "interpreter" | "localization" | "japanese-speaker" | "liaison";

export interface Company {
  id: string;
  name: string;
  industry: string;
  city: string;
  verified: boolean;
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  company: Company;
  role: JobRole;
  minJlpt: JlptLevel | null;
  languages: string[];
  fields: string[];
  location: string;
  workMode: WorkMode;
  employmentType: EmploymentType;
  salaryMin: number | null;
  salaryMax: number | null;
  currency: "IDR" | "JPY";
  salaryPeriod: "bulan" | "jam" | "proyek";
  description: string;
  requirements: string[];
  postedAt: string; // ISO date
  verified: boolean;
}

export interface CandidateProfile {
  id: string;
  displayName: string;
  headline: string;
  jlpt: JlptLevel | null;
  languagePairs: string[];
  fields: string[];
  roles: JobRole[];
  yearsExperience: number;
  city: string;
  workModes: WorkMode[];
  portfolio: { title: string; description: string }[];
  /** Profil hanya tampil di pencarian rekruter jika true (persetujuan eksplisit). */
  isPublic: boolean;
}

export interface UserProgress {
  displayName: string;
  xp: number;
  userLevel: number;
  xpToNextLevel: number;
  streakDays: number;
  dailyGoalMinutes: number;
  todayMinutes: number;
  weeklyGoalDays: number;
  weeklyActiveDays: boolean[]; // Senin..Minggu
  targetLevel: JlptLevel;
  modules: Record<ModuleKey, { done: number; total: number }>;
  masteredKanji: number;
  masteredVocabulary: number;
  nextLesson: { module: ModuleKey; title: string; href: string; minutes: number };
}
