import { ButtonLink } from "./Button";
import { Card } from "./Card";

interface ComingSoonProps {
  title: string;
  jp?: string;
  stage: number;
  description: string;
  features: string[];
}

/** Halaman sementara untuk modul yang dijadwalkan di tahap berikutnya.
 *  Navigasi tetap berfungsi dan tidak ada link mati. */
export function ComingSoon({ title, jp, stage, description, features }: ComingSoonProps) {
  return (
    <div className="container py-10 sm:py-14">
      <Card className="mx-auto max-w-2xl p-8 text-center">
        {jp && (
          <p lang="ja" aria-hidden="true" className="font-jp text-5xl font-bold text-brand-500">
            {jp}
          </p>
        )}
        <h1 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">{title}</h1>
        <p className="mt-2 text-ink-muted">{description}</p>
        <p className="mt-4 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
          Dijadwalkan pada Tahap {stage}
        </p>
        <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-sm text-ink">
          {features.map((f) => (
            <li key={f} className="flex gap-2">
              <span aria-hidden="true" className="text-brand-500">✓</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Kembali ke Beranda</ButtonLink>
          <ButtonLink href="/dashboard" variant="outline">Dashboard Belajar</ButtonLink>
        </div>
      </Card>
    </div>
  );
}
