import type { Metadata } from "next";
import type { JlptLevel } from "@/lib/types";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { buildExamPool } from "@/lib/question-bank";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PracticeExplorer } from "@/components/latihan/PracticeExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Latihan per Topik",
  description: "Latihan soal kanji, kosakata, tata bahasa, dan membaca per level tanpa batas waktu — ±100 soal per kategori, diacak setiap sesi.",
  path: "/latihan/topik",
});

export const dynamic = "force-dynamic";

export default function TopikPage({ searchParams }: { searchParams: { level?: string | string[] } }) {
  const parsed = parseLevelParam(searchParams.level);
  const level: JlptLevel = parsed === "all" ? "N5" : parsed;
  const pool = buildExamPool(level);
  return (
    <div className="container py-8 sm:py-10">
      <Breadcrumb items={[{ href: "/", label: "Beranda" }, { href: "/latihan?level=" + level, label: "Latihan JLPT" }, { label: "Latihan per topik" }]} />
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-ink sm:text-3xl">Latihan per Topik · {level}</h1>
        <p className="mt-1 text-ink-muted">Tanpa timer — jawab satu per satu dan langsung lihat pembahasannya.</p>
      </header>
      <PracticeExplorer key={level} pool={pool} />
    </div>
  );
}
