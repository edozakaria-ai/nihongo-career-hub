import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dashboard Admin",
  description: "Area administrasi konten dan moderasi.",
  path: "/admin",
  noIndex: true,
});

export default function Page() {
  return (
    <ComingSoon
      title="Dashboard Admin"
      stage={5}
      description="Area administrasi konten dan moderasi."
      features={[
        "Kelola materi & soal",
        "Verifikasi lowongan & perusahaan",
        "Moderasi laporan",
        "Hanya untuk peran admin (RBAC)",
      ]}
    />
  );
}
