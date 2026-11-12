import type { Metadata } from "next";
import { KANJI } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { KanjiExplorer } from "@/components/kanji/KanjiExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Kanji JLPT N5–N2",
  description: "Pelajari kanji JLPT N5–N2 lengkap dengan arti Bahasa Indonesia, onyomi, kunyomi, mnemonik, contoh kalimat berfurigana, dan kuis.",
  path: "/kanji",
});

export default function KanjiPage({ searchParams }: { searchParams: { level?: string | string[] } }) {
  const initialLevel = parseLevelParam(searchParams.level);
  return (
    <div className="container py-8 sm:py-10">
      <header className="mb-6">
        <h1 className="flex items-baseline gap-2 text-2xl font-extrabold text-ink sm:text-3xl">
          Kanji <span lang="ja" className="font-jp text-base font-medium text-brand-600 dark:text-brand-300">漢字</span>
        </h1>
        <p className="mt-1 text-ink-muted">Filter berdasarkan level, jumlah goresan, kategori, dan status belajarmu. Tekan ☆ untuk menyimpan favorit.</p>
      </header>
      <KanjiExplorer key={initialLevel} kanji={KANJI} initialLevel={initialLevel} />
    </div>
  );
}
