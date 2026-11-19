import type { Metadata } from "next";
import type { JlptLevel } from "@/lib/types";
import { GRAMMAR, KANJI, VOCABULARY } from "@/data";
import { publishedReadings } from "@/data/dokkai";
import { pageMetadata } from "@/lib/seo";
import { DashboardView, type DashboardTotals } from "@/components/dashboard/DashboardView";

export const metadata: Metadata = pageMetadata({
  title: "Dashboard Belajar",
  description: "Ringkasan progres, XP, streak, target, grafik perkembangan, analisis kemampuan, dan badge pencapaian.",
  path: "/dashboard",
  noIndex: true,
});

export const revalidate = 3600;

export default function DashboardPage() {
  const totals: DashboardTotals = {
    kanji: { N5: 0, N4: 0, N3: 0, N2: 0 },
    grammar: GRAMMAR.length,
    vocabulary: VOCABULARY.length,
    readings: publishedReadings().length,
  };
  const kanjiLevels: Record<string, JlptLevel> = {};
  for (const k of KANJI) {
    totals.kanji[k.level] += 1;
    kanjiLevels[k.id] = k.level;
  }

  return (
    <div className="container py-8 sm:py-10">
      <header className="mb-6">
        <h1 className="flex items-baseline gap-2 text-2xl font-extrabold text-ink sm:text-3xl">
          Dashboard Belajar <span lang="ja" className="font-jp text-base font-medium text-brand-600 dark:text-brand-300">学習</span>
        </h1>
        <p className="mt-1 text-ink-muted">Progresmu dari kanji, kotoba, bunpou, dokkai, dan latihan — dihitung otomatis.</p>
      </header>
      <DashboardView totals={totals} kanjiLevels={kanjiLevels} />
    </div>
  );
}
