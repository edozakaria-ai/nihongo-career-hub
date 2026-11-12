import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Daftar",
  description: "Buat akun sebagai pelajar, kandidat, atau HR/rekruter.",
  path: "/register",
});

export default function Page() {
  return (
    <ComingSoon
      title="Daftar"
      stage={5}
      description="Buat akun sebagai pelajar, kandidat, atau HR/rekruter."
      features={[
        "Pilihan peran: pelajar, kandidat, HR/rekruter",
        "Alur registrasi berbeda per peran",
        "Persetujuan sebelum profil kandidat dipublikasikan",
      ]}
    />
  );
}
