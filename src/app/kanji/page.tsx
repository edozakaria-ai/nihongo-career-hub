import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kanji",
  description: "Pelajari kanji JLPT N5–N2 lengkap dengan onyomi, kunyomi, mnemonik, contoh, dan kuis.",
  path: "/kanji",
});

export default function Page() {
  return (
    <ComingSoon
      title="Kanji"
      jp="漢字"
      stage={2}
      description="Pelajari kanji JLPT N5–N2 lengkap dengan onyomi, kunyomi, mnemonik, contoh, dan kuis."
      features={[
        "Filter level, jumlah goresan, kategori, status",
        "Detail kanji + tempat diagram urutan goresan",
        "Favorit & status sudah dipelajari",
        "Latihan pilihan ganda & input jawaban",
      ]}
    />
  );
}
