import type { Metadata } from "next";
import Link from "next/link";
import { READINGS } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { LevelBadge } from "@/components/ui/Badge";
import { LevelTabs } from "@/components/ui/LevelTabs";
import { EmptyState } from "@/components/ui/EmptyState";
import { Furigana } from "@/components/ui/Furigana";

export const metadata: Metadata = pageMetadata({
  title: "Dokkai — Latihan Membaca Bahasa Jepang",
  description: "Bacaan bahasa Jepang orisinal level N5–N2 dengan furigana opsional, kosakata penting, pertanyaan pemahaman, pembahasan, dan skor.",
  path: "/dokkai",
});

function Difficulty({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Tingkat kesulitan ${value} dari 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} aria-hidden="true" className={i <= value ? "text-brand-500" : "text-line"}>●</span>
      ))}
    </span>
  );
}

export default function DokkaiPage({ searchParams }: { searchParams: { level?: string | string[] } }) {
  const level = parseLevelParam(searchParams.level);
  const list = level === "all" ? READINGS : READINGS.filter((r) => r.level === level);

  return (
    <div className="container py-8 sm:py-10">
      <header className="mb-6">
        <h1 className="flex items-baseline gap-2 text-2xl font-extrabold text-ink sm:text-3xl">
          Dokkai <span lang="ja" className="font-jp text-base font-medium text-brand-600 dark:text-brand-300">読解</span>
        </h1>
        <p className="mt-1 text-ink-muted">Semua bacaan ditulis orisinal oleh platform. Terjemahan dibuka setelah kamu mencoba menjawab.</p>
      </header>
      <LevelTabs basePath="/dokkai" active={level} />
      {list.length === 0 ? (
        <EmptyState title="Belum ada bacaan untuk level ini" description="Bacaan baru akan segera ditambahkan." />
      ) : (
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <li key={r.id}>
              <Link
                href={`/dokkai/${r.slug}`}
                className="flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <div className="flex items-center justify-between">
                  <LevelBadge level={r.level} />
                  <Difficulty value={r.difficulty} />
                </div>
                <h2 className="mt-3 text-lg font-bold leading-loose text-ink"><Furigana text={r.title} /></h2>
                <p className="mt-auto pt-3 text-sm text-ink-muted">⏱ ± {r.minutes} menit · {r.questions.length} pertanyaan</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
