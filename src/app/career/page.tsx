import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Career",
  description: "Marketplace lowongan translator & interpreter bahasa Jepang serta pencarian kandidat untuk HR.",
  path: "/career",
});

export default function Page() {
  return (
    <ComingSoon
      title="Career"
      jp="仕事"
      stage={4}
      description="Marketplace lowongan translator & interpreter bahasa Jepang serta pencarian kandidat untuk HR."
      features={[
        "Profil kandidat & portofolio",
        "Pasang & kelola lowongan (HR)",
        "Filter non-diskriminatif & laporan lowongan palsu",
        "Status lamaran & tahapan rekrutmen",
      ]}
    />
  );
}
