import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Masuk",
  description: "Masuk ke akun Nihongo Career Hub.",
  path: "/login",
});

export default function Page() {
  return (
    <ComingSoon
      title="Masuk"
      stage={5}
      description="Masuk ke akun Nihongo Career Hub."
      features={[
        "Login email & kata sandi (Supabase Auth)",
        "Validasi input sisi klien & server",
        "Redirect sesuai peran",
      ]}
    />
  );
}
