import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bunpou",
  description: "Pola tata bahasa JLPT N5–N2 dengan struktur, nuansa, perbandingan, dan kesalahan umum pelajar Indonesia.",
  path: "/bunpou",
});

export default function Page() {
  return (
    <ComingSoon
      title="Bunpou"
      jp="文法"
      stage={2}
      description="Pola tata bahasa JLPT N5–N2 dengan struktur, nuansa, perbandingan, dan kesalahan umum pelajar Indonesia."
      features={[
        "Struktur, fungsi, dan tingkat formalitas",
        "Perbandingan dengan pola mirip",
        "Kesalahan umum pelajar Indonesia",
        "Latihan pilihan ganda, menyusun & melengkapi kalimat",
      ]}
    />
  );
}
