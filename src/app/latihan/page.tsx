import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { buildPracticeQuestions } from "@/lib/question-bank";
import { PracticeExplorer } from "@/components/latihan/PracticeExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Latihan JLPT N5–N2",
  description: "Latihan soal bahasa Jepang buatan platform per level dan kategori, simulasi ujian berwaktu, serta pengulangan jawaban salah.",
  path: "/latihan",
});

// Soal disusun ulang setiap hari (paling lambat 1 jam setelah pergantian hari)
export const revalidate = 3600;

const linkCard =
  "group flex items-start gap-4 rounded-card border border-line bg-surface p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500";

export default function LatihanPage({ searchParams }: { searchParams: { level?: string | string[] } }) {
  const initialLevel = parseLevelParam(searchParams.level);
  const questions = buildPracticeQuestions();

  return (
    <div className="container py-8 sm:py-10">
      <header className="mb-6">
        <h1 className="flex items-baseline gap-2 text-2xl font-extrabold text-ink sm:text-3xl">
          Latihan JLPT <span lang="ja" className="font-jp text-base font-medium text-brand-600 dark:text-brand-300">練習</span>
        </h1>
        <p className="mt-1 text-ink-muted">Latihan per topik, simulasi ujian berwaktu, dan pengulangan jawaban salah.</p>
      </header>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <Link href="/latihan/ujian" className={linkCard}>
          <span aria-hidden="true" className="text-3xl">⏱️</span>
          <span>
            <span className="block font-bold text-ink group-hover:text-brand-600">Simulasi ujian berwaktu</span>
            <span className="text-sm text-ink-muted">Kanji, kosakata, tata bahasa & membaca dengan batas waktu, skor, dan analisis.</span>
          </span>
        </Link>
        <Link href="/latihan/ulang" className={linkCard}>
          <span aria-hidden="true" className="text-3xl">🔁</span>
          <span>
            <span className="block font-bold text-ink group-hover:text-brand-600">Ulangi jawaban salah</span>
            <span className="text-sm text-ink-muted">Semua soal yang pernah kamu jawab salah, tersimpan untuk diulang.</span>
          </span>
        </Link>
      </div>

      <h2 className="mb-4 text-xl font-extrabold text-ink">Latihan per topik</h2>
      <PracticeExplorer key={initialLevel} questions={questions} initialLevel={initialLevel} />
    </div>
  );
}
