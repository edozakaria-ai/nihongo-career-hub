import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Profil Pengguna",
  description: "Kelola profil, preferensi belajar, dan privasi akunmu.",
  path: "/profil",
  noIndex: true,
});

export default function Page() {
  return (
    <ComingSoon
      title="Profil Pengguna"
      stage={5}
      description="Kelola profil, preferensi belajar, dan privasi akunmu."
      features={[
        "Data akun & preferensi tema",
        "Pengaturan visibilitas profil kandidat (opt-in)",
        "Riwayat belajar",
        "Keamanan akun",
      ]}
    />
  );
}
