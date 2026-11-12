import type { Metadata } from "next";
import { GRAMMAR } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { BunpouExplorer } from "@/components/bunpou/BunpouExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Bunpou — Tata Bahasa JLPT N5–N2",
  description: "Cari dan pelajari pola tata bahasa Jepang JLPT N5–N2 dengan penjelasan Bahasa Indonesia, struktur, tingkat formalitas, perbandingan pola mirip, kesalahan umum, dan latihan.",
  path: "/bunpou",
});

export default function BunpouPage({ searchParams }: { searchParams: { level?: string | string[] } }) {
  const initialLevel = parseLevelParam(searchParams.level);
  return (
    <div className="container py-8 sm:py-10">
      <header className="mb-6">
        <h1 className="flex items-baseline gap-2 text-2xl font-extrabold text-ink sm:text-3xl">
          Bunpou <span lang="ja" className="font-jp text-base font-medium text-brand-600 dark:text-brand-300">文法</span>
        </h1>
        <p className="mt-1 text-ink-muted">Pahami fungsi, nuansa, dan kesalahan umum tiap pola, lalu langsung berlatih.</p>
      </header>
      <BunpouExplorer key={initialLevel} grammar={GRAMMAR} initialLevel={initialLevel} />
    </div>
  );
}
