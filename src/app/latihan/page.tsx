import type { Metadata } from "next";
import { QUESTIONS } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { PracticeExplorer } from "@/components/latihan/PracticeExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Latihan JLPT N5–N2",
  description: "Latihan soal bahasa Jepang buatan platform per level (N5–N2) dan kategori: kanji, kosakata, tata bahasa, dan membaca — lengkap dengan pembahasan.",
  path: "/latihan",
});

export default function LatihanPage({ searchParams }: { searchParams: { level?: string | string[] } }) {
  const initialLevel = parseLevelParam(searchParams.level);
  return (
    <div className="container py-8 sm:py-10">
      <header className="mb-6">
        <h1 className="flex items-baseline gap-2 text-2xl font-extrabold text-ink sm:text-3xl">
          Latihan JLPT <span lang="ja" className="font-jp text-base font-medium text-brand-600 dark:text-brand-300">練習</span>
        </h1>
        <p className="mt-1 text-ink-muted">Mode latihan per topik. Mode ujian berwaktu dan analisis kemampuan menyusul di Tahap 3.</p>
      </header>
      <PracticeExplorer key={initialLevel} questions={QUESTIONS} initialLevel={initialLevel} />
    </div>
  );
}
