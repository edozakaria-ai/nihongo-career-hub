import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { buildPracticeQuestions } from "@/lib/question-bank";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PracticeExplorer } from "@/components/latihan/PracticeExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Latihan per Topik",
  description: "Latihan soal kanji, kosakata, tata bahasa, dan membaca per level tanpa batas waktu.",
  path: "/latihan/topik",
});

// Soal disusun ulang setiap hari
export const revalidate = 3600;

export default function TopikPage({ searchParams }: { searchParams: { level?: string | string[] } }) {
  const initialLevel = parseLevelParam(searchParams.level);
  const questions = buildPracticeQuestions();
  return (
    <div className="container py-8 sm:py-10">
      <Breadcrumb items={[{ href: "/", label: "Beranda" }, { href: "/latihan", label: "Latihan JLPT" }, { label: "Latihan per topik" }]} />
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-ink sm:text-3xl">Latihan per Topik</h1>
        <p className="mt-1 text-ink-muted">Tanpa timer — jawab satu per satu dan langsung lihat pembahasannya.</p>
      </header>
      <PracticeExplorer key={initialLevel} questions={questions} initialLevel={initialLevel} />
    </div>
  );
}
