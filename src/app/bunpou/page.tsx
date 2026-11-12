import type { Metadata } from "next";
import Link from "next/link";
import { GRAMMAR } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { LevelBadge, Badge } from "@/components/ui/Badge";
import { LevelTabs } from "@/components/ui/LevelTabs";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = pageMetadata({
  title: "Bunpou — Tata Bahasa JLPT N5–N2",
  description: "Pola tata bahasa Jepang JLPT N5–N2 dengan penjelasan Bahasa Indonesia, struktur, tingkat formalitas, perbandingan pola mirip, kesalahan umum, dan latihan.",
  path: "/bunpou",
});

const FORMALITY_LABEL = { kasual: "Kasual", netral: "Netral", sopan: "Sopan", formal: "Formal" } as const;

export default function BunpouPage({ searchParams }: { searchParams: { level?: string | string[] } }) {
  const level = parseLevelParam(searchParams.level);
  const list = level === "all" ? GRAMMAR : GRAMMAR.filter((g) => g.level === level);
  const counts = {
    all: GRAMMAR.length,
    N5: GRAMMAR.filter((g) => g.level === "N5").length,
    N4: GRAMMAR.filter((g) => g.level === "N4").length,
    N3: GRAMMAR.filter((g) => g.level === "N3").length,
    N2: GRAMMAR.filter((g) => g.level === "N2").length,
  };

  return (
    <div className="container py-8 sm:py-10">
      <header className="mb-6">
        <h1 className="flex items-baseline gap-2 text-2xl font-extrabold text-ink sm:text-3xl">
          Bunpou <span lang="ja" className="font-jp text-base font-medium text-brand-600 dark:text-brand-300">文法</span>
        </h1>
        <p className="mt-1 text-ink-muted">Pahami fungsi, nuansa, dan kesalahan umum tiap pola, lalu langsung berlatih.</p>
      </header>
      <LevelTabs basePath="/bunpou" active={level} counts={counts} />
      {list.length === 0 ? (
        <EmptyState title="Belum ada pola untuk level ini" description="Materi akan terus ditambahkan." />
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((g) => (
            <li key={g.id}>
              <Link
                href={`/bunpou/${g.slug}`}
                className="flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <div className="flex items-center justify-between gap-2">
                  <LevelBadge level={g.level} />
                  <Badge>{FORMALITY_LABEL[g.formality]}</Badge>
                </div>
                <h2 lang="ja" className="mt-3 font-jp text-2xl font-bold text-ink">{g.pattern}</h2>
                <p className="mt-1 flex-1 text-sm text-ink">{g.meaning}</p>
                <p lang="ja" className="mt-3 rounded bg-surface-muted px-2 py-1 font-jp text-xs text-ink-muted">{g.structure}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
