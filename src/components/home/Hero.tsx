import { ButtonLink } from "@/components/ui/Button";
import { Furigana } from "@/components/ui/Furigana";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-500 to-brand-700 text-white">
      {/* Ornamen dekoratif orisinal: lingkaran matahari & pola seigaiha sederhana */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-40 h-64 w-64 rounded-full bg-white/5" />

      <div className="container relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            <span aria-hidden="true">🇮🇩 ⇄ 🇯🇵</span> Untuk pelajar & pencari kerja Indonesia
          </p>
          <h1 id="hero-title" className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Belajar bahasa Jepang <span className="whitespace-nowrap">N5 → N2</span>,
            <br className="hidden sm:block" /> lalu bangun karier sebagai penerjemah.
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
            Kanji, kotoba, bunpou, dokkai, dan simulasi latihan JLPT dalam satu tempat — dilengkapi marketplace
            lowongan translator & interpreter.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/dashboard" size="lg" variant="outline" className="border-white bg-white text-brand-700 hover:bg-brand-50 hover:text-brand-800">
              Mulai Belajar
            </ButtonLink>
            <ButtonLink href="/career" size="lg" variant="ghost" className="border border-white/60 text-white hover:bg-white/10 hover:text-white">
              Cari Pekerjaan
            </ButtonLink>
          </div>
          <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 text-center">
            {[
              ["4", "Level JLPT"],
              ["5", "Modul belajar"],
              ["100%", "Soal orisinal"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-xl bg-white/10 px-2 py-3">
                <dt className="sr-only">{l}</dt>
                <dd className="text-2xl font-extrabold">{v}</dd>
                <dd className="text-xs text-white/80">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Kartu contoh pelajaran */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="rotate-2 rounded-2xl bg-white p-6 text-ink shadow-2xl dark:bg-[#1f1f24]">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-brand-500 px-2 py-0.5 text-xs font-bold text-white">N3</span>
              <span className="text-xs text-ink-muted">Kosakata hari ini</span>
            </div>
            <p className="mt-4 text-center text-5xl font-bold">
              <Furigana text="確認{かくにん}" className="text-ink" />
            </p>
            <p className="mt-2 text-center text-sm font-semibold text-brand-600">kakunin · konfirmasi, pengecekan</p>
            <p className="mt-4 rounded-lg bg-surface-muted p-3 text-sm leading-loose">
              <Furigana text="図面{ずめん}を確認{かくにん}してください。" />
              <span className="mt-1 block text-xs text-ink-muted">Tolong cek gambar tekniknya.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
