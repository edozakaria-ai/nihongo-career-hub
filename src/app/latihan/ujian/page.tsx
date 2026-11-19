import type { Metadata } from "next";
import type { JlptLevel } from "@/lib/types";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { buildExamPool } from "@/lib/question-bank";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ExamRunner } from "@/components/latihan/ExamRunner";

export const metadata: Metadata = pageMetadata({
  title: "Simulasi Ujian JLPT Berwaktu",
  description: "Simulasi ujian bahasa Jepang N5–N2 dengan batas waktu, skor, analisis per kategori, dan rekomendasi materi. Soal buatan platform, bukan soal resmi JLPT.",
  path: "/latihan/ujian",
});

export const dynamic = "force-dynamic";

export default function UjianPage({ searchParams }: { searchParams: { level?: string | string[] } }) {
  const parsed = parseLevelParam(searchParams.level);
  const level: JlptLevel = parsed === "all" ? "N5" : parsed;
  const pool = buildExamPool(level);

  return (
    <div className="container max-w-4xl py-8 sm:py-10">
      <Breadcrumb items={[{ href: "/", label: "Beranda" }, { href: "/latihan", label: "Latihan JLPT" }, { label: "Simulasi ujian" }]} />
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-ink sm:text-3xl">Simulasi Ujian Berwaktu</h1>
        <p className="mt-1 text-ink-muted">Kerjakan semua bagian sebelum waktu habis. Hasil, analisis, dan jawaban salah tersimpan di perangkat ini.</p>
      </header>
      <ExamRunner key={level} pool={pool} />
    </div>
  );
}
