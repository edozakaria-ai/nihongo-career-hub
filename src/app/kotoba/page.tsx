import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kotoba",
  description: "Cari kosakata Jepang dengan kanji, hiragana, katakana, romaji, Bahasa Indonesia, atau Inggris.",
  path: "/kotoba",
});

export default function Page() {
  return (
    <ComingSoon
      title="Kotoba"
      jp="言葉"
      stage={2}
      description="Cari kosakata Jepang dengan kanji, hiragana, katakana, romaji, Bahasa Indonesia, atau Inggris."
      features={[
        "Autocomplete & riwayat pencarian",
        "Filter level JLPT",
        "Contoh kalimat dengan furigana",
        "Simpan ke daftar kosakata pribadi",
      ]}
    />
  );
}
