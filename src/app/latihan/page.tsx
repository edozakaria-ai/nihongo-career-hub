import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Latihan JLPT",
  description: "Latihan per topik dan simulasi berwaktu buatan platform, lengkap dengan pembahasan dan analisis kemampuan.",
  path: "/latihan",
});

export default function Page() {
  return (
    <ComingSoon
      title="Latihan JLPT"
      jp="練習"
      stage={3}
      description="Latihan per topik dan simulasi berwaktu buatan platform, lengkap dengan pembahasan dan analisis kemampuan."
      features={[
        "Mode latihan per topik",
        "Mode ujian dengan batas waktu",
        "Analisis kemampuan & daftar jawaban salah",
        "Label jelas: latihan buatan platform vs materi berizin",
      ]}
    />
  );
}
