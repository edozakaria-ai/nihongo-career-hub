"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { JlptLevel } from "@/lib/types";
import { estimatedCount, examConfig, type ExamMode } from "@/lib/exam";
import type { ExamAttempt } from "@/lib/gamification";
import { useLocalStorage } from "@/lib/local-store";
import { STORE_KEYS, type WrongMap } from "@/lib/progress";
import { LevelBadge } from "@/components/ui/Badge";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const LEVELS: { level: JlptLevel; title: string; desc: string }[] = [
  { level: "N5", title: "Pemula", desc: "Kalimat dasar sehari-hari" },
  { level: "N4", title: "Dasar", desc: "Percakapan & bacaan sederhana" },
  { level: "N3", title: "Menengah", desc: "Bacaan umum & bahasa kerja" },
  { level: "N2", title: "Menengah atas", desc: "Artikel, dokumen bisnis" },
];

const MODES: { mode: ExamMode; icon: string; points: string[] }[] = [
  { mode: "mini", icon: "⚡", points: ["Kanji, kosakata, tata bahasa, 1 bacaan", "Cocok untuk latihan harian"] },
  { mode: "real", icon: "📝", points: ["4 bagian lengkap: kanji, kosakata, tata bahasa, membaca", "Timer, kumpul otomatis, analisis per bagian"] },
];

/** Layar awal Latihan JLPT: pilih level → pilih skema → mulai. */
export function LatihanSelector({ initialLevel }: { initialLevel: JlptLevel | null }) {
  const router = useRouter();
  const [level, setLevel] = useState<JlptLevel | null>(initialLevel);
  const [mode, setMode] = useState<ExamMode | null>(null);
  const [exams] = useLocalStorage<ExamAttempt[]>(STORE_KEYS.exams, []);
  const [wrong] = useLocalStorage<WrongMap>(STORE_KEYS.wrong, {});
  const wrongCount = Object.keys(wrong).length;

  function best(lv: JlptLevel, m: ExamMode): string | null {
    const list = exams.filter((e) => e.level === lv && (m === "real" ? e.mode === "real" || e.mode === "standar" : e.mode === "mini"));
    if (list.length === 0) return null;
    const top = Math.max(...list.map((e) => Math.round((e.score / Math.max(1, e.total)) * 100)));
    return top + "%";
  }

  function start() {
    if (level && mode) router.push("/latihan/ujian?level=" + level + "&mode=" + mode);
  }

  const step = "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold";

  return (
    <div className="space-y-6">
      {/* Langkah 1 */}
      <section aria-labelledby="step1" className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
        <h2 id="step1" className="mb-4 flex items-center gap-2 text-lg font-bold text-ink">
          <span className={cn(step, "bg-brand-500 text-white")}>1</span> Pilih level
        </h2>
        <div role="radiogroup" aria-labelledby="step1" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {LEVELS.map((l) => {
            const active = level === l.level;
            return (
              <button
                key={l.level}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setLevel(l.level)}
                className={cn(
                  "flex flex-col items-start rounded-card border-2 p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  active ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10" : "border-line bg-surface hover:border-brand-300",
                )}
              >
                <span className="flex w-full items-center justify-between">
                  <LevelBadge level={l.level} className="h-8 min-w-[3rem] text-sm" />
                  {active && <span aria-hidden="true" className="text-brand-500">✓</span>}
                </span>
                <span className="mt-3 font-bold text-ink">{l.title}</span>
                <span className="text-xs text-ink-muted">{l.desc}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Langkah 2 */}
      <section
        aria-labelledby="step2"
        className={cn("rounded-card border border-line bg-surface p-5 shadow-card transition sm:p-6", !level && "opacity-60")}
      >
        <h2 id="step2" className="mb-4 flex items-center gap-2 text-lg font-bold text-ink">
          <span className={cn(step, level ? "bg-brand-500 text-white" : "bg-surface-muted text-ink-muted")}>2</span> Pilih skema
        </h2>
        {!level ? (
          <p className="text-sm text-ink-muted">Pilih level terlebih dahulu.</p>
        ) : (
          <div role="radiogroup" aria-labelledby="step2" className="grid gap-4 md:grid-cols-2">
            {MODES.map((m) => {
              const cfg = examConfig(m.mode, level);
              const active = mode === m.mode;
              const top = best(level, m.mode);
              return (
                <button
                  key={m.mode}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setMode(m.mode)}
                  className={cn(
                    "flex flex-col rounded-card border-2 p-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                    active ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10" : "border-line bg-surface hover:border-brand-300",
                  )}
                >
                  <span className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xl font-extrabold text-ink">
                      <span aria-hidden="true">{m.icon}</span> {cfg.label}
                    </span>
                    {active && <span aria-hidden="true" className="text-brand-500">✓</span>}
                  </span>
                  <span className="mt-1 text-sm text-ink-muted">{cfg.tagline}</span>
                  <span className="mt-4 flex flex-wrap gap-2 text-sm">
                    <span className="rounded-full bg-surface-muted px-3 py-1 font-semibold text-ink">± {estimatedCount(cfg)} soal</span>
                    <span className="rounded-full bg-surface-muted px-3 py-1 font-semibold text-ink">⏱ {cfg.minutes} menit</span>
                  </span>
                  <ul className="mt-4 space-y-1 text-sm text-ink">
                    {m.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span aria-hidden="true" className="text-brand-500">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 text-xs text-ink-muted">{top ? "Skor terbaikmu: " + top : "Belum pernah dicoba"}</span>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Mulai */}
      <div className="flex flex-col items-center gap-2 rounded-card border border-line bg-surface p-5 text-center shadow-card sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-ink" aria-live="polite">
          {level && mode ? (
            <>
              Siap memulai <strong>{examConfig(mode, level).label} {level}</strong> — {examConfig(mode, level).minutes} menit.
            </>
          ) : (
            "Pilih level dan skema untuk memulai."
          )}
        </p>
        <button type="button" onClick={start} disabled={!level || !mode} className={buttonClass("primary", "lg")}>
          Mulai ujian →
        </button>
      </div>

      {/* Pilihan lain */}
      <section aria-labelledby="other" className="grid gap-4 sm:grid-cols-2">
        <h2 id="other" className="sr-only">Pilihan latihan lain</h2>
        <Link
          href={"/latihan/topik" + (level ? "?level=" + level : "")}
          className="group flex items-start gap-4 rounded-card border border-line bg-surface p-5 shadow-card transition hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <span aria-hidden="true" className="text-3xl">🎯</span>
          <span>
            <span className="block font-bold text-ink group-hover:text-brand-600">Latihan per topik</span>
            <span className="text-sm text-ink-muted">Tanpa timer. Pilih kategori kanji, kosakata, tata bahasa, atau membaca.</span>
          </span>
        </Link>
        <Link
          href="/latihan/ulang"
          className="group flex items-start gap-4 rounded-card border border-line bg-surface p-5 shadow-card transition hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <span aria-hidden="true" className="text-3xl">🔁</span>
          <span>
            <span className="block font-bold text-ink group-hover:text-brand-600">Ulangi jawaban salah</span>
            <span className="text-sm text-ink-muted">{wrongCount > 0 ? wrongCount + " soal menunggu diulang." : "Soal yang pernah salah akan muncul di sini."}</span>
          </span>
        </Link>
      </section>

      <p className="text-xs text-ink-muted">
        Soal disusun dari materi situs dan soal buatan tim Nihongo Career Hub. Real Test mengikuti perkiraan durasi bagian pengetahuan bahasa dan membaca
        (tanpa choukai) — <strong>bukan</strong> soal maupun format resmi JLPT.
      </p>
    </div>
  );
}
