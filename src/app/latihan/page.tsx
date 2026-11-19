import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { LatihanSelector } from "@/components/latihan/LatihanSelector";

export const metadata: Metadata = pageMetadata({
  title: "Latihan JLPT N5–N2",
  description: "Pilih level dan skema latihan: Mini Test untuk latihan harian atau Real Test berwaktu. Soal buatan platform, bukan soal resmi JLPT.",
  path: "/latihan",
});

export default function LatihanPage({ searchParams }: { searchParams: { level?: string | string[] } }) {
  const parsed = parseLevelParam(searchParams.level);
  return (
    <div className="container max-w-5xl py-8 sm:py-10">
      <header className="mb-6">
        <h1 className="flex items-baseline gap-2 text-2xl font-extrabold text-ink sm:text-3xl">
          Latihan JLPT <span lang="ja" className="font-jp text-base font-medium text-brand-600 dark:text-brand-300">練習</span>
        </h1>
        <p className="mt-1 text-ink-muted">Pilih level dan skema, lalu mulai.</p>
      </header>
      <LatihanSelector key={parsed} initialLevel={parsed === "all" ? null : parsed} />
    </div>
  );
}
