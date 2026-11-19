"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { JlptLevel } from "@/lib/types";
import { CATEGORY_LABEL, CATEGORY_ORDER, moduleHref } from "@/lib/exam";
import {
  BADGES,
  categoryAccuracy,
  dateISO,
  lastDays,
  levelInfo,
  reminderMessage,
  streakInfo,
  totalXp,
  weekActivity,
  type ActivityMap,
  type BadgeStats,
} from "@/lib/gamification";
import { resetAllProgress, useProgressData } from "@/lib/progress";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { XpChart } from "./XpChart";

const LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2"];
const DAY_NAMES = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
const DAILY_OPTIONS = [20, 50, 100, 150];
const WEEKLY_OPTIONS = [3, 4, 5, 6, 7];

export interface DashboardTotals {
  kanji: Record<JlptLevel, number>;
  grammar: number;
  vocabulary: number;
  readings: number;
}

interface DashboardViewProps {
  totals: DashboardTotals;
  kanjiLevels: Record<string, JlptLevel>;
}

const card = "rounded-card border border-line bg-surface p-5 shadow-card";

export function DashboardView({ totals, kanjiLevels }: DashboardViewProps) {
  const data = useProgressData();
  const [today, setToday] = useState("");
  const [range, setRange] = useState<14 | 30>(14);

  useEffect(() => setToday(dateISO(new Date())), []);

  const stats = useMemo(() => {
    const activity = data.activity as ActivityMap;
    const xp = totalXp(activity);
    const kanji: Record<JlptLevel, { mastered: number; learning: number }> = {
      N5: { mastered: 0, learning: 0 },
      N4: { mastered: 0, learning: 0 },
      N3: { mastered: 0, learning: 0 },
      N2: { mastered: 0, learning: 0 },
    };
    let grammarMastered = 0;
    let grammarLearning = 0;
    for (const [key, v] of Object.entries(data.learning)) {
      if (key.startsWith("kanji:")) {
        const lv = kanjiLevels[key.slice(6)];
        if (lv && v.status !== "new") kanji[lv][v.status === "mastered" ? "mastered" : "learning"] += 1;
      } else if (key.startsWith("grammar:")) {
        if (v.status === "mastered") grammarMastered++;
        else if (v.status === "learning") grammarLearning++;
      }
    }
    const dokkaiEntries = Object.values(data.dokkaiHistory).filter((h) => h.length > 0);
    const dokkaiAvg = dokkaiEntries.length
      ? Math.round((dokkaiEntries.reduce((s, h) => s + h[0].score / Math.max(1, h[0].total), 0) / dokkaiEntries.length) * 100)
      : 0;
    const masteredKanji = LEVELS.reduce((s, lv) => s + kanji[lv].mastered, 0);
    return { activity, xp, kanji, masteredKanji, grammarMastered, grammarLearning, dokkaiDone: dokkaiEntries.length, dokkaiAvg };
  }, [data.activity, data.learning, data.dokkaiHistory, kanjiLevels]);

  if (!data.ready || !today) {
    return (
      <div className="grid gap-4 sm:grid-cols-3" role="status" aria-live="polite">
        <span className="sr-only">Memuat progres…</span>
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-36 animate-pulse rounded-card bg-surface-muted" />
        ))}
      </div>
    );
  }

  const lvl = levelInfo(stats.xp);
  const streak = streakInfo(stats.activity, today);
  const todayXp = stats.activity[today]?.xp ?? 0;
  const week = weekActivity(stats.activity, today);
  const chart = lastDays(stats.activity, today, range);
  const accuracy = categoryAccuracy(data.exams);
  const hasExams = data.exams.length > 0;
  const weakest = CATEGORY_ORDER.filter((c) => accuracy[c].total > 0).sort(
    (a, b) => accuracy[a].correct / accuracy[a].total - accuracy[b].correct / accuracy[b].total,
  )[0];
  const lastLevel = data.exams[0]?.level ?? "N5";
  const wrongCount = Object.keys(data.wrong).length;
  const badgeStats: BadgeStats = {
    totalXp: stats.xp,
    bestStreak: streak.best,
    masteredKanji: stats.masteredKanji,
    masteredGrammar: stats.grammarMastered,
    savedWords: data.savedWords.length,
    dokkaiDone: stats.dokkaiDone,
    examsTaken: data.exams.length,
    perfectExams: data.exams.filter((e) => e.total > 0 && e.score === e.total).length,
  };
  const message = reminderMessage({ everActive: stats.xp > 0, todayXp, goal: data.goals.dailyXp, streak: streak.current });

  return (
    <div className="space-y-6">
      {/* Ringkasan atas */}
      <div className="grid gap-4 lg:grid-cols-3">
        <section aria-labelledby="lvl-title" className={card}>
          <div className="flex items-center justify-between">
            <h2 id="lvl-title" className="font-bold text-ink">Level {lvl.level}</h2>
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-300">{stats.xp.toLocaleString("id-ID")} XP</span>
          </div>
          <ProgressBar className="mt-4" value={lvl.into} max={lvl.need} label={lvl.next - stats.xp + " XP lagi ke Level " + (lvl.level + 1)} />
          <dl className="mt-4 grid grid-cols-2 gap-2 text-center">
            <div className="rounded-lg bg-surface-muted p-2">
              <dt className="text-[11px] text-ink-muted">Streak sekarang</dt>
              <dd className="text-lg font-extrabold text-ink">🔥 {streak.current} hari</dd>
            </div>
            <div className="rounded-lg bg-surface-muted p-2">
              <dt className="text-[11px] text-ink-muted">Streak terbaik</dt>
              <dd className="text-lg font-extrabold text-ink">{streak.best} hari</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="goal-title" className={card}>
          <div className="flex items-center justify-between gap-2">
            <h2 id="goal-title" className="font-bold text-ink">Target harian</h2>
            <label className="text-xs text-ink-muted">
              <span className="sr-only">Ubah target harian</span>
              <select
                value={data.goals.dailyXp}
                onChange={(e) => data.setGoals({ dailyXp: Number(e.target.value) })}
                className="h-8 rounded-lg border border-line bg-surface px-2 text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
              >
                {DAILY_OPTIONS.map((n) => (
                  <option key={n} value={n}>{n} XP/hari</option>
                ))}
              </select>
            </label>
          </div>
          <ProgressBar className="mt-4" value={Math.min(todayXp, data.goals.dailyXp)} max={data.goals.dailyXp} label={todayXp + " dari " + data.goals.dailyXp + " XP hari ini"} />
          <div className="mt-4 flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-ink">
              Minggu ini: {week.activeCount}/{data.goals.weeklyDays} hari
            </h3>
            <label className="text-xs text-ink-muted">
              <span className="sr-only">Ubah target mingguan</span>
              <select
                value={data.goals.weeklyDays}
                onChange={(e) => data.setGoals({ weeklyDays: Number(e.target.value) })}
                className="h-8 rounded-lg border border-line bg-surface px-2 text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
              >
                {WEEKLY_OPTIONS.map((n) => (
                  <option key={n} value={n}>{n} hari/minggu</option>
                ))}
              </select>
            </label>
          </div>
          <ol className="mt-2 grid grid-cols-7 gap-1.5" aria-label="Aktivitas minggu ini">
            {week.days.map((d, i) => (
              <li key={d.date} className="text-center">
                <span
                  className={cn(
                    "mx-auto flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold",
                    d.active ? "bg-brand-500 text-white" : d.future ? "border border-dashed border-line text-ink-muted" : "bg-surface-muted text-ink-muted",
                    d.date === today && "ring-2 ring-brand-300",
                  )}
                >
                  {d.active ? "✓" : ""}
                  <span className="sr-only">{d.active ? "aktif" : "tidak aktif"}</span>
                </span>
                <span className="mt-1 block text-[10px] text-ink-muted">{DAY_NAMES[i]}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="next-title" className={cn(card, "flex flex-col bg-gradient-to-br from-brand-50 to-surface dark:from-brand-500/10")}>
          <h2 id="next-title" className="font-bold text-ink">Langkah berikutnya</h2>
          <p className="mt-2 flex-1 text-sm text-ink" aria-live="polite">{message}</p>
          <div className="mt-4 flex flex-col gap-2">
            {wrongCount > 0 && (
              <Link href="/latihan/ulang" className={buttonClass("primary", "md")}>Ulangi {wrongCount} jawaban salah</Link>
            )}
            {weakest && (
              <Link href={moduleHref(weakest, lastLevel)} className={buttonClass(wrongCount > 0 ? "outline" : "primary", "md")}>
                Perkuat {CATEGORY_LABEL[weakest].toLowerCase()} {lastLevel}
              </Link>
            )}
            <Link href="/latihan/ujian" className={buttonClass("outline", "md")}>Simulasi ujian</Link>
          </div>
        </section>
      </div>

      {/* Grafik */}
      <section aria-labelledby="chart-title" className={card}>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 id="chart-title" className="font-bold text-ink">Grafik perkembangan (XP per hari)</h2>
          <div role="group" aria-label="Rentang waktu" className="flex rounded-lg border border-line p-0.5">
            {([14, 30] as const).map((r) => (
              <button
                key={r}
                type="button"
                aria-pressed={range === r}
                onClick={() => setRange(r)}
                className={cn(
                  "h-8 rounded-md px-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  range === r ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200" : "text-ink-muted hover:text-ink",
                )}
              >
                {r} hari
              </button>
            ))}
          </div>
        </div>
        <XpChart data={chart} goal={data.goals.dailyXp} />
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Statistik materi */}
        <section aria-labelledby="stat-title" className={card}>
          <h2 id="stat-title" className="mb-4 font-bold text-ink">Statistik belajar</h2>
          <h3 className="text-sm font-bold text-ink">Kanji dikuasai per level</h3>
          <div className="mt-2 space-y-3">
            {LEVELS.map((lv) => (
              <div key={lv} className="flex items-center gap-3">
                <LevelBadge level={lv} />
                <ProgressBar
                  className="flex-1"
                  value={stats.kanji[lv].mastered}
                  max={Math.max(1, totals.kanji[lv])}
                  label={stats.kanji[lv].mastered + " dikuasai · " + stats.kanji[lv].learning + " sedang dipelajari · " + totals.kanji[lv] + " total"}
                />
              </div>
            ))}
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-surface-muted p-3">
              <dt className="text-ink-muted">Pola bunpou dikuasai</dt>
              <dd className="text-xl font-extrabold text-ink">
                {stats.grammarMastered}<span className="text-sm font-normal text-ink-muted"> / {totals.grammar}</span>
              </dd>
              <dd className="text-xs text-ink-muted">{stats.grammarLearning} sedang dipelajari</dd>
            </div>
            <div className="rounded-lg bg-surface-muted p-3">
              <dt className="text-ink-muted">Kosakata tersimpan</dt>
              <dd className="text-xl font-extrabold text-ink">
                {data.savedWords.length}<span className="text-sm font-normal text-ink-muted"> / {totals.vocabulary.toLocaleString("id-ID")}</span>
              </dd>
            </div>
            <div className="rounded-lg bg-surface-muted p-3">
              <dt className="text-ink-muted">Bacaan dokkai selesai</dt>
              <dd className="text-xl font-extrabold text-ink">
                {stats.dokkaiDone}<span className="text-sm font-normal text-ink-muted"> / {totals.readings}</span>
              </dd>
              {stats.dokkaiDone > 0 && <dd className="text-xs text-ink-muted">rata-rata skor terakhir {stats.dokkaiAvg}%</dd>}
            </div>
            <div className="rounded-lg bg-surface-muted p-3">
              <dt className="text-ink-muted">Simulasi ujian</dt>
              <dd className="text-xl font-extrabold text-ink">{data.exams.length}</dd>
            </div>
          </dl>
        </section>

        {/* Analisis kemampuan */}
        <section aria-labelledby="ana-title" className={card}>
          <h2 id="ana-title" className="mb-4 font-bold text-ink">Analisis kemampuan</h2>
          {!hasExams ? (
            <div className="text-sm text-ink-muted">
              <p>Analisis per kategori muncul setelah kamu menyelesaikan simulasi ujian.</p>
              <Link href="/latihan/ujian" className={buttonClass("primary", "md", "mt-4")}>Mulai simulasi ujian</Link>
            </div>
          ) : (
            <>
              <p className="mb-3 text-xs text-ink-muted">Akurasi gabungan dari {data.exams.length} simulasi ujian terakhir.</p>
              <div className="space-y-3">
                {CATEGORY_ORDER.filter((c) => accuracy[c].total > 0).map((c) => (
                  <ProgressBar key={c} value={accuracy[c].correct} max={accuracy[c].total} label={CATEGORY_LABEL[c] + " (" + accuracy[c].correct + "/" + accuracy[c].total + ")"} />
                ))}
              </div>
              <h3 className="mt-5 text-sm font-bold text-ink">Riwayat terakhir</h3>
              <ul className="mt-2 divide-y divide-line text-sm">
                {data.exams.slice(0, 5).map((e) => (
                  <li key={e.id} className="flex items-center justify-between gap-2 py-2">
                    <span className="flex items-center gap-2">
                      <LevelBadge level={e.level} />
                      <span className="text-ink-muted">
                        {new Date(e.date).toLocaleDateString("id-ID", { day: "numeric", month: "short" })} · {e.mode}
                      </span>
                    </span>
                    <span className="font-semibold text-ink">
                      {e.score}/{e.total} ({Math.round((e.score / Math.max(1, e.total)) * 100)}%)
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </div>

      {/* Badge */}
      <section aria-labelledby="badge-title" className={card}>
        <h2 id="badge-title" className="mb-4 font-bold text-ink">
          Badge pencapaian{" "}
          <span className="text-sm font-normal text-ink-muted">
            ({BADGES.filter((b) => b.value(badgeStats) >= b.target).length}/{BADGES.length})
          </span>
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {BADGES.map((b) => {
            const v = b.value(badgeStats);
            const done = v >= b.target;
            return (
              <li
                key={b.id}
                className={cn("flex flex-col items-center rounded-lg border p-3 text-center", done ? "border-brand-300 bg-brand-50 dark:border-brand-500/40 dark:bg-brand-500/10" : "border-line opacity-70")}
              >
                <span aria-hidden="true" lang="ja" className={cn("font-jp text-3xl", !done && "grayscale")}>{b.icon}</span>
                <span className="mt-1 text-sm font-bold text-ink">{b.title}</span>
                <span className="text-[11px] text-ink-muted">{b.description}</span>
                {done ? (
                  <Badge tone="success" className="mt-2">Didapat</Badge>
                ) : (
                  <span className="mt-2 text-[11px] font-semibold text-ink-muted">
                    {Math.min(v, b.target)}/{b.target}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* Privasi */}
      <section aria-labelledby="data-title" className="rounded-card border border-dashed border-line p-5">
        <h2 id="data-title" className="font-bold text-ink">Data progres</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Progres tersimpan di browser perangkat ini saja dan belum tersinkron ke akun. Menghapus data browser akan menghapus progres.
        </p>
        <button
          type="button"
          onClick={() => window.confirm("Hapus seluruh progres belajar (XP, status, riwayat, jawaban salah) di perangkat ini?") && resetAllProgress()}
          className="mt-3 text-sm font-semibold text-red-600 underline hover:text-red-700 dark:text-red-400"
        >
          Hapus semua progres
        </button>
      </section>
    </div>
  );
}
