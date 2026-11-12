import Link from "next/link";
import type { UserProgress } from "@/lib/types";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { Card, CardTitle } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { buttonClass } from "@/components/ui/Button";

const DAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

/** Progress belajar, target harian, target mingguan, dan rekomendasi pelajaran berikutnya. */
export function ProgressOverview({ progress }: { progress: UserProgress }) {
  const activeDays = progress.weeklyActiveDays.filter(Boolean).length;
  const dailyDone = progress.todayMinutes >= progress.dailyGoalMinutes;
  const minutesLeft = Math.max(0, progress.dailyGoalMinutes - progress.todayMinutes);

  return (
    <section aria-labelledby="progress-title" className="container py-10">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 id="progress-title" className="text-xl font-extrabold text-ink sm:text-2xl">
          Progress Belajarmu
        </h2>
        <Badge tone="info">Mode demo · masuk untuk menyimpan progres</Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* XP & level */}
        <Card>
          <div className="flex items-center justify-between">
            <CardTitle>Level {progress.userLevel}</CardTitle>
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-300">{progress.xp.toLocaleString("id-ID")} XP</span>
          </div>
          <ProgressBar
            className="mt-4"
            value={progress.xp % 500}
            max={(progress.xp % 500) + progress.xpToNextLevel}
            label={`${progress.xpToNextLevel} XP lagi ke Level ${progress.userLevel + 1}`}
          />
          <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg bg-surface-muted p-2">
              <dt className="text-[11px] text-ink-muted">Streak</dt>
              <dd className="text-lg font-extrabold text-ink">🔥 {progress.streakDays}</dd>
            </div>
            <div className="rounded-lg bg-surface-muted p-2">
              <dt className="text-[11px] text-ink-muted">Kanji dikuasai</dt>
              <dd className="text-lg font-extrabold text-ink">{progress.masteredKanji}</dd>
            </div>
            <div className="rounded-lg bg-surface-muted p-2">
              <dt className="text-[11px] text-ink-muted">Kosakata</dt>
              <dd className="text-lg font-extrabold text-ink">{progress.masteredVocabulary}</dd>
            </div>
          </dl>
          <p className="mt-4 flex items-center gap-2 text-xs text-ink-muted">
            Target ujian: <LevelBadge level={progress.targetLevel} />
          </p>
        </Card>

        {/* Target harian & mingguan */}
        <Card>
          <CardTitle>Target Harian</CardTitle>
          <ProgressBar className="mt-4" value={progress.todayMinutes} max={progress.dailyGoalMinutes} label={`${progress.todayMinutes} dari ${progress.dailyGoalMinutes} menit`} />
          <p className="mt-3 text-sm text-ink" aria-live="polite">
            {dailyDone
              ? "Target hari ini tercapai. Kerja bagus — istirahat juga bagian dari belajar! 🌸"
              : `Tinggal ${minutesLeft} menit lagi. Satu pelajaran singkat sudah cukup.`}
          </p>
          <h3 className="mt-5 text-sm font-bold text-ink">
            Target mingguan: {activeDays}/{progress.weeklyGoalDays} hari
          </h3>
          <ol className="mt-2 grid grid-cols-7 gap-1.5" aria-label="Aktivitas minggu ini">
            {progress.weeklyActiveDays.map((active, i) => (
              <li key={DAYS[i]} className="text-center">
                <span
                  className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                    active ? "bg-brand-500 text-white" : "bg-surface-muted text-ink-muted"
                  }`}
                >
                  {active ? "✓" : ""}
                  <span className="sr-only">{active ? "aktif" : "belum aktif"}</span>
                </span>
                <span className="mt-1 block text-[10px] text-ink-muted">{DAYS[i]}</span>
              </li>
            ))}
          </ol>
        </Card>

        {/* Rekomendasi berikutnya */}
        <Card className="flex flex-col bg-gradient-to-br from-brand-50 to-surface dark:from-brand-500/10">
          <CardTitle>Rekomendasi Pelajaran Berikutnya</CardTitle>
          <p className="mt-1 text-xs uppercase tracking-wide text-ink-muted">Modul {progress.nextLesson.module}</p>
          <p lang="ja" className="mt-3 flex-1 font-jp text-lg font-bold text-ink">
            {progress.nextLesson.title}
          </p>
          <p className="mt-2 text-sm text-ink-muted">± {progress.nextLesson.minutes} menit · dipilih dari materi yang belum selesai di level targetmu.</p>
          <Link href={progress.nextLesson.href} className={buttonClass("primary", "md", "mt-4 w-full")}>
            Lanjutkan Belajar
          </Link>
        </Card>
      </div>
    </section>
  );
}
