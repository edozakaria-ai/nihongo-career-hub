import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dashboard Belajar",
  description: "Ringkasan progres, XP, streak, target mingguan, dan grafik perkembanganmu.",
  path: "/dashboard",
  noIndex: true,
});

export default function Page() {
  return (
    <ComingSoon
      title="Dashboard Belajar"
      jp="学習"
      stage={3}
      description="Ringkasan progres, XP, streak, target mingguan, dan grafik perkembanganmu."
      features={[
        "Grafik perkembangan mingguan",
        "Statistik kanji & kosakata yang dikuasai",
        "Badge pencapaian & target mingguan",
        "Rekomendasi materi dari jawaban salah",
      ]}
    />
  );
}
