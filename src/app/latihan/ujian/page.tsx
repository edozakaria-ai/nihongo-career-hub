import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { examConfig, parseModeParam } from "@/lib/exam";
import { buildExamPool } from "@/lib/question-bank";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ExamRunner } from "@/components/latihan/ExamRunner";

export const metadata: Metadata = pageMetadata({
  title: "Simulasi Ujian JLPT",
  description: "Mini Test (20 soal) dan Real Test (jumlah soal mengikuti perkiraan resmi JLPT, 90 menit) untuk N5–N2. Soal buatan platform, bukan soal resmi JLPT.",
  path: "/latihan/ujian",
});

export const dynamic = "force-dynamic";

export default function UjianPage({ searchParams }: { searchParams: { level?: string | string[]; mode?: string | string[] } }) {
  const level = parseLevelParam(searchParams.level);
  const mode = parseModeParam(searchParams.mode);
  if (level === "all" || !mode) redirect(level === "all" ? "/latihan" : "/latihan?level=" + level);

  const cfg = examConfig(mode, level);
  const pool = buildExamPool(level);

  return (
    <div className="container max-w-4xl py-8 sm:py-10">
      <Breadcrumb items={[{ href: "/", label: "Beranda" }, { href: "/latihan?level=" + level, label: "Latihan JLPT" }, { label: cfg.label + " " + level }]} />
      <ExamRunner key={level + "-" + mode} pool={pool} mode={mode} />
    </div>
  );
}
