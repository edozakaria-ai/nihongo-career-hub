"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function GlobalSegmentError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Tahap 5: kirim ke layanan logging. Jangan tampilkan detail error ke pengguna.
    console.error(error);
  }, [error]);

  return (
    <div className="container py-16 text-center" role="alert">
      <p lang="ja" aria-hidden="true" className="font-jp text-5xl font-bold text-brand-500">すみません</p>
      <h1 className="mt-3 text-2xl font-extrabold text-ink">Maaf, terjadi kesalahan</h1>
      <p className="mt-2 text-ink-muted">Halaman ini gagal dimuat. Silakan coba lagi beberapa saat lagi.</p>
      <Button className="mt-6" onClick={reset}>Coba lagi</Button>
    </div>
  );
}
