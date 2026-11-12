import type { Metadata } from "next";
import { VOCABULARY } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { KotobaSearch } from "@/components/kotoba/KotobaSearch";

export const metadata: Metadata = pageMetadata({
  title: "Kamus Kotoba Jepang–Indonesia",
  description: "Cari kosakata bahasa Jepang dengan kanji, hiragana, katakana, romaji, Bahasa Indonesia, atau Inggris. Lengkap dengan level JLPT, contoh kalimat berfurigana, dan daftar simpan pribadi.",
  path: "/kotoba",
});

export default function KotobaPage() {
  return (
    <div className="container py-8 sm:py-10">
      <header className="mb-6">
        <h1 className="flex items-baseline gap-2 text-2xl font-extrabold text-ink sm:text-3xl">
          Kotoba <span lang="ja" className="font-jp text-base font-medium text-brand-600 dark:text-brand-300">言葉</span>
        </h1>
        <p className="mt-1 text-ink-muted">Mesin pencarian kosakata. Kosakata tersimpan dan riwayat pencarian disimpan di perangkat ini.</p>
      </header>
      <KotobaSearch items={VOCABULARY} />
      <p className="mt-8 text-xs text-ink-muted">
        Data kosakata saat ini adalah contoh orisinal platform. Integrasi kamus berlisensi terbuka akan menyertakan atribusi sumber.
      </p>
    </div>
  );
}
