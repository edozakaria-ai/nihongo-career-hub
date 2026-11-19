import type { JlptLevel, QuestionCategory } from "./types";

/* Perhitungan murni (tanpa React/localStorage) untuk XP, level, streak, badge, dan analisis. */

export interface DayActivity {
  xp: number;
  actions: number;
  /** Penghitung per sumber untuk hari ini saja (batas XP harian per item). */
  keys?: Record<string, number>;
}
export type ActivityMap = Record<string, DayActivity>;

export interface ExamAttempt {
  id: string;
  /** Waktu selesai, ISO lengkap. */
  date: string;
  level: JlptLevel;
  mode: string;
  score: number;
  total: number;
  durationSec: number;
  byCategory: Partial<Record<QuestionCategory, { correct: number; total: number }>>;
}

/** Tanggal lokal perangkat, YYYY-MM-DD. */
export function dateISO(d: Date): string {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + m + "-" + day;
}

export function shiftISO(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export function totalXp(a: ActivityMap): number {
  return Object.values(a).reduce((s, d) => s + (d.xp || 0), 0);
}

/** Level L dicapai pada 50·(L−1)·L XP: L1=0, L2=100, L3=300, L4=600, … */
export function levelInfo(xp: number) {
  let level = 1;
  while (50 * level * (level + 1) <= xp && level < 999) level++;
  const base = 50 * (level - 1) * level;
  const next = 50 * level * (level + 1);
  return { level, base, next, into: xp - base, need: next - base };
}

export function streakInfo(a: ActivityMap, today: string) {
  const active = (d: string) => (a[d]?.xp ?? 0) > 0;
  const activeToday = active(today);
  let d = activeToday ? today : shiftISO(today, -1);
  let current = 0;
  while (active(d) && current < 3650) {
    current++;
    d = shiftISO(d, -1);
  }
  let best = 0;
  let run = 0;
  let prev = "";
  for (const day of Object.keys(a).filter(active).sort()) {
    run = prev && shiftISO(prev, 1) === day ? run + 1 : 1;
    best = Math.max(best, run);
    prev = day;
  }
  return { current, best: Math.max(best, current), activeToday };
}

/** XP per hari untuk n hari terakhir (lama → baru). */
export function lastDays(a: ActivityMap, today: string, n: number) {
  return Array.from({ length: n }, (_, i) => {
    const date = shiftISO(today, i - (n - 1));
    return { date, xp: a[date]?.xp ?? 0 };
  });
}

/** Aktivitas minggu ini (Senin–Minggu). */
export function weekActivity(a: ActivityMap, today: string) {
  const weekday = (new Date(today + "T00:00:00Z").getUTCDay() + 6) % 7;
  const monday = shiftISO(today, -weekday);
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = shiftISO(monday, i);
    return { date, active: (a[date]?.xp ?? 0) > 0, future: date > today };
  });
  return { days, activeCount: days.filter((d) => d.active).length };
}

export function categoryAccuracy(attempts: ExamAttempt[]) {
  const acc: Record<QuestionCategory, { correct: number; total: number }> = {
    kanji: { correct: 0, total: 0 },
    kosakata: { correct: 0, total: 0 },
    "tata-bahasa": { correct: 0, total: 0 },
    membaca: { correct: 0, total: 0 },
  };
  for (const at of attempts) {
    for (const [cat, v] of Object.entries(at.byCategory) as [QuestionCategory, { correct: number; total: number }][]) {
      acc[cat].correct += v.correct;
      acc[cat].total += v.total;
    }
  }
  return acc;
}

export interface BadgeStats {
  totalXp: number;
  bestStreak: number;
  masteredKanji: number;
  masteredGrammar: number;
  savedWords: number;
  dokkaiDone: number;
  examsTaken: number;
  perfectExams: number;
}

export interface BadgeDef {
  id: string;
  icon: string;
  title: string;
  description: string;
  target: number;
  value: (s: BadgeStats) => number;
}

export const BADGES: BadgeDef[] = [
  { id: "first-step", icon: "🌱", title: "Langkah Pertama", description: "Dapatkan XP pertamamu", target: 1, value: (s) => s.totalXp },
  { id: "xp-500", icon: "⭐", title: "500 XP", description: "Kumpulkan 500 XP", target: 500, value: (s) => s.totalXp },
  { id: "xp-2000", icon: "🌟", title: "2.000 XP", description: "Kumpulkan 2.000 XP", target: 2000, value: (s) => s.totalXp },
  { id: "streak-3", icon: "🔥", title: "Konsisten 3 Hari", description: "Belajar 3 hari berturut-turut", target: 3, value: (s) => s.bestStreak },
  { id: "streak-7", icon: "🏅", title: "Konsisten 7 Hari", description: "Belajar 7 hari berturut-turut", target: 7, value: (s) => s.bestStreak },
  { id: "kanji-10", icon: "字", title: "10 Kanji", description: "Kuasai 10 kanji", target: 10, value: (s) => s.masteredKanji },
  { id: "kanji-50", icon: "漢", title: "50 Kanji", description: "Kuasai 50 kanji", target: 50, value: (s) => s.masteredKanji },
  { id: "grammar-10", icon: "文", title: "10 Pola Bunpou", description: "Kuasai 10 pola tata bahasa", target: 10, value: (s) => s.masteredGrammar },
  { id: "words-50", icon: "語", title: "Kolektor Kata", description: "Simpan 50 kosakata", target: 50, value: (s) => s.savedWords },
  { id: "reader-5", icon: "読", title: "Pembaca", description: "Selesaikan 5 bacaan dokkai", target: 5, value: (s) => s.dokkaiDone },
  { id: "exam-1", icon: "📝", title: "Ujian Pertama", description: "Selesaikan 1 simulasi ujian", target: 1, value: (s) => s.examsTaken },
  { id: "perfect", icon: "💯", title: "Nilai Sempurna", description: "Raih skor penuh di simulasi ujian", target: 1, value: (s) => s.perfectExams },
];

/** Pesan pengingat yang positif dan tidak memaksa. */
export function reminderMessage(opts: { everActive: boolean; todayXp: number; goal: number; streak: number }): string {
  const { everActive, todayXp, goal, streak } = opts;
  if (!everActive) return "Selamat datang! Mulai dengan satu latihan singkat — 5 menit pun sudah cukup.";
  if (todayXp >= goal * 3) return "Kamu sudah belajar banyak hari ini. Jangan lupa istirahat — otak juga butuh waktu untuk mengingat. 🌙";
  if (todayXp >= goal) return "Target hari ini sudah tercapai 🎉 Belajar secukupnya saja — istirahat juga bagian dari proses.";
  if (todayXp > 0) return "Bagus, kamu sudah belajar hari ini. Sisa " + (goal - todayXp) + " XP menuju target, kalau masih ada waktu.";
  if (streak > 0) return "Kamu belajar " + streak + " hari berturut-turut. Kalau sempat, satu latihan singkat hari ini sudah cukup — kalau tidak, tidak apa-apa.";
  return "Selamat datang kembali! Lanjutkan dari mana saja, tanpa perlu mengejar yang terlewat.";
}
