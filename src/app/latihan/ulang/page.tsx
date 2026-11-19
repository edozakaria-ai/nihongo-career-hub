import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WrongReview } from "@/components/latihan/WrongReview";

export const metadata: Metadata = pageMetadata({
  title: "Ulangi Jawaban Salah",
  description: "Ulangi soal yang pernah dijawab salah di latihan dan simulasi ujian.",
  path: "/latihan/ulang",
  noIndex: true,
});

export default function UlangPage() {
  return (
    <div className="container max-w-4xl py-8 sm:py-10">
      <Breadcrumb items={[{ href: "/", label: "Beranda" }, { href: "/latihan", label: "Latihan JLPT" }, { label: "Ulangi jawaban salah" }]} />
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-ink sm:text-3xl">Ulangi Jawaban Salah</h1>
        <p className="mt-1 text-ink-muted">Soal yang sering salah ditampilkan paling atas.</p>
      </header>
      <WrongReview />
    </div>
  );
}
