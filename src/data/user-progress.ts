import type { UserProgress } from "@/lib/types";

/** Progress pengguna demo (mode prototipe). Tahap 5: diganti query Supabase `learning_progress`. */
export const DEMO_PROGRESS: UserProgress = {
  displayName: "Pelajar",
  xp: 1240,
  userLevel: 7,
  xpToNextLevel: 260,
  streakDays: 5,
  dailyGoalMinutes: 20,
  todayMinutes: 12,
  weeklyGoalDays: 5,
  weeklyActiveDays: [true, true, false, true, true, false, false],
  targetLevel: "N3",
  modules: {
    kanji: { done: 4, total: 9 },
    kotoba: { done: 6, total: 13 },
    bunpou: { done: 3, total: 8 },
    dokkai: { done: 1, total: 3 },
    latihan: { done: 5, total: 12 },
  },
  masteredKanji: 4,
  masteredVocabulary: 6,
  nextLesson: { module: "bunpou", title: "〜ことになる — keputusan dari pihak lain", href: "/bunpou", minutes: 8 },
};
