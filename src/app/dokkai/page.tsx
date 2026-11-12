import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dokkai",
  description: "Bacaan orisinal N5–N2 dengan furigana opsional, kosakata penting, dan pembahasan.",
  path: "/dokkai",
});

export default function Page() {
  return (
    <ComingSoon
      title="Dokkai"
      jp="読解"
      stage={2}
      description="Bacaan orisinal N5–N2 dengan furigana opsional, kosakata penting, dan pembahasan."
      features={[
        "Toggle furigana",
        "Terjemahan dibuka setelah mencoba",
        "Pertanyaan pemahaman & skor",
        "Riwayat pengerjaan",
      ]}
    />
  );
}
