"use client";

import { useCallback } from "react";
import { readStore, removeStore, useLocalStorage, writeStore } from "./local-store";
import { dateISO, type ActivityMap, type ExamAttempt } from "./gamification";
import type { ExamQuestion } from "./exam";
import type { LearningStatus } from "./types";

/** Semua kunci localStorage milik progres belajar. */
export const STORE_KEYS = {
  activity: "nch-activity",
  exams: "nch-exam-history",
  wrong: "nch-wrong",
  goals: "nch-goals",
  awarded: "nch-xp-awarded",
  learning: "nch-learning",
  savedWords: "nch-saved-words",
  searchHistory: "nch-search-history",
  dokkaiHistory: "nch-dokkai-history",
} as const;

/** Aturan XP. */
export const XP = {
  answer: 5, // kuis kanji / latihan bunpou
  reading: 15, // menyelesaikan bacaan dokkai
  mastered: 10, // pertama kali menandai "dikuasai"
  practiceCorrect: 3,
  practiceWrong: 1,
  examCorrect: 3,
  examBonus: 20,
  reviewCorrect: 3,
} as const;

/** Batas XP dari sumber yang sama per hari (mencegah XP dari mengulang soal yang sama). */
const MAX_AWARDS_PER_KEY_PER_DAY = 3;

/** Tambah XP hari ini. Mengembalikan XP yang benar-benar diberikan. */
export function addActivity(xp: number, sourceKey?: string): number {
  if (typeof window === "undefined" || xp <= 0) return 0;
  const today = dateISO(new Date());
  const map = readStore<ActivityMap>(STORE_KEYS.activity, {});
  const day = map[today] ?? { xp: 0, actions: 0 };
  const keys = { ...(day.keys ?? {}) };
  if (sourceKey) {
    const n = keys[sourceKey] ?? 0;
    if (n >= MAX_AWARDS_PER_KEY_PER_DAY) return 0;
    keys[sourceKey] = n + 1;
  }
  const next: ActivityMap = {};
  for (const [d, v] of Object.entries(map)) if (d !== today) next[d] = { xp: v.xp, actions: v.actions };
  next[today] = { xp: day.xp + xp, actions: day.actions + 1, keys };
  writeStore(STORE_KEYS.activity, next);
  return xp;
}

/** XP yang hanya diberikan sekali seumur akun (mis. pertama kali menguasai item). */
export function awardOnce(key: string, xp: number): number {
  const list = readStore<string[]>(STORE_KEYS.awarded, []);
  if (list.includes(key)) return 0;
  writeStore(STORE_KEYS.awarded, [...list, key]);
  return addActivity(xp);
}

/* ── Jawaban salah ── */
export interface WrongEntry {
  q: ExamQuestion;
  count: number;
  last: string;
}
export type WrongMap = Record<string, WrongEntry>;
const MAX_WRONG = 200;

function slim(q: ExamQuestion): ExamQuestion {
  return {
    id: q.id,
    level: q.level,
    category: q.category,
    prompt: q.prompt,
    stem: q.stem,
    options: q.options,
    answerIndex: q.answerIndex,
    explanation: q.explanation,
    source: q.source,
    href: q.href,
    passageTitle: q.passageTitle,
  };
}

/** Catat hasil: jawaban benar dihapus dari daftar salah, jawaban salah ditambahkan. */
export function recordResults(results: { q: ExamQuestion; correct: boolean }[]): void {
  if (typeof window === "undefined" || results.length === 0) return;
  const map = readStore<WrongMap>(STORE_KEYS.wrong, {});
  const today = dateISO(new Date());
  for (const { q, correct } of results) {
    if (correct) delete map[q.id];
    else map[q.id] = { q: slim(q), count: (map[q.id]?.count ?? 0) + 1, last: today };
  }
  const ids = Object.keys(map);
  if (ids.length > MAX_WRONG) {
    ids.sort((a, b) => map[a].last.localeCompare(map[b].last)).slice(0, ids.length - MAX_WRONG).forEach((id) => delete map[id]);
  }
  writeStore(STORE_KEYS.wrong, map);
}

export function removeWrong(id: string): void {
  const map = readStore<WrongMap>(STORE_KEYS.wrong, {});
  delete map[id];
  writeStore(STORE_KEYS.wrong, map);
}

export function clearWrong(): void {
  writeStore<WrongMap>(STORE_KEYS.wrong, {});
}

/* ── Riwayat ujian ── */
export function saveExamAttempt(a: ExamAttempt): void {
  const list = readStore<ExamAttempt[]>(STORE_KEYS.exams, []);
  writeStore(STORE_KEYS.exams, [a, ...list].slice(0, 50));
}

/* ── Target ── */
export interface Goals {
  dailyXp: number;
  weeklyDays: number;
}
export const DEFAULT_GOALS: Goals = { dailyXp: 50, weeklyDays: 5 };

/** Semua data progres untuk Dashboard. */
export function useProgressData() {
  const [activity, , r1] = useLocalStorage<Record<string, { xp: number; actions: number }>>(STORE_KEYS.activity, {});
  const [exams, , r2] = useLocalStorage<ExamAttempt[]>(STORE_KEYS.exams, []);
  const [wrong, , r3] = useLocalStorage<WrongMap>(STORE_KEYS.wrong, {});
  const [goals, setGoalsRaw, r4] = useLocalStorage<Goals>(STORE_KEYS.goals, DEFAULT_GOALS);
  const [learning, , r5] = useLocalStorage<Record<string, { status: LearningStatus; favorite: boolean }>>(STORE_KEYS.learning, {});
  const [savedWords, , r6] = useLocalStorage<string[]>(STORE_KEYS.savedWords, []);
  const [dokkaiHistory, , r7] = useLocalStorage<Record<string, { date: string; score: number; total: number }[]>>(STORE_KEYS.dokkaiHistory, {});

  const setGoals = useCallback((g: Partial<Goals>) => setGoalsRaw((prev) => ({ ...DEFAULT_GOALS, ...prev, ...g })), [setGoalsRaw]);

  return {
    ready: r1 && r2 && r3 && r4 && r5 && r6 && r7,
    activity,
    exams,
    wrong,
    goals: { ...DEFAULT_GOALS, ...goals },
    setGoals,
    learning,
    savedWords,
    dokkaiHistory,
  };
}

/** Hapus seluruh progres belajar di perangkat ini (tema tidak ikut dihapus). */
export function resetAllProgress(): void {
  Object.values(STORE_KEYS).forEach((k) => removeStore(k));
}
