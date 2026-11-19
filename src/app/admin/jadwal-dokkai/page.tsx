import type { Metadata } from "next";
import Link from "next/link";
import type { JlptLevel } from "@/lib/types";
import { ALL_READINGS, PER_DAY_PER_LEVEL, PUBLISH_TIMEZONE, addDaysISO, isPublished, todayISO } from "@/data/dokkai";
import { pageMetadata } from "@/lib/seo";
import { stripRuby } from "@/lib/ruby";
import { LevelBadge } from "@/components/ui/Badge";

export const metadata: Metadata = pageMetadata({
  title: "Jadwal Terbit Dokkai",
  description: "Status stok dan jadwal terbit bacaan dokkai.",
  path: "/admin/jadwal-dokkai",
  noIndex: true,
});

export const dynamic = "force-dynamic";

const LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2"];

function fmt(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString("id-ID", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}

export default function JadwalDokkaiPage() {
  const today = todayISO();
  const warnBefore = addDaysISO(today, 3);

  const rows = LEVELS.map((lv) => {
    const list = ALL_READINGS.filter((r) => r.level === lv);
    const published = list.filter((r) => isPublished(r, today)).length;
    const upcoming = list.filter((r) => !isPublished(r, today));
    const lastDate = list.reduce((max, r) => (r.date > max ? r.date : max), "");
    return { lv, published, upcoming: upcoming.length, lastDate, low: !lastDate || lastDate < warnBefore };
  });

  const nextItems = ALL_READINGS.filter((r) => !isPublished(r, today))
    .sort((a, b) => a.date.localeCompare(b.date) || a.level.localeCompare(b.level))
    .slice(0, 24);

  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-2xl font-extrabold text-ink">Jadwal Terbit Dokkai</h1>
      <p className="mt-1 text-sm text-ink-muted">
        Hari ini: <strong className="text-ink">{fmt(today)}</strong> ({PUBLISH_TIMEZONE}) · {PER_DAY_PER_LEVEL} bacaan baru per level per hari.
      </p>

      <div className="mt-6 overflow-x-auto rounded-card border border-line bg-surface shadow-card">
        <table className="w-full text-sm">
          <thead className="bg-surface-muted text-left text-ink-muted">
            <tr>
              <th className="p-3">Level</th>
              <th className="p-3">Sudah terbit</th>
              <th className="p-3">Menunggu terbit</th>
              <th className="p-3">Stok habis setelah</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.lv} className="border-t border-line">
                <td className="p-3"><LevelBadge level={r.lv} /></td>
                <td className="p-3 text-ink">{r.published}</td>
                <td className="p-3 text-ink">{r.upcoming}</td>
                <td className="p-3">
                  <span className={r.low ? "font-semibold text-red-600 dark:text-red-400" : "text-ink"}>{r.lastDate ? fmt(r.lastDate) : "—"}</span>
                  {r.low && <span className="ml-2 text-xs text-red-600 dark:text-red-400">⚠ Stok hampir habis — tambah bacaan di queue.ts</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-lg font-bold text-ink">Akan terbit</h2>
      {nextItems.length === 0 ? (
        <p className="mt-2 text-sm text-ink-muted">Tidak ada bacaan di antrean.</p>
      ) : (
        <ul className="mt-3 divide-y divide-line rounded-card border border-line bg-surface shadow-card">
          {nextItems.map((r) => (
            <li key={r.slug} className="flex flex-wrap items-center gap-3 p-3 text-sm">
              <span className="w-36 shrink-0 text-ink-muted">{fmt(r.date)}</span>
              <LevelBadge level={r.level} />
              <span lang="ja" className="font-jp text-ink">{stripRuby(r.title)}</span>
              <span className="text-xs text-ink-muted">/{r.slug}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-8 text-xs text-ink-muted">
        Halaman ini belum dilindungi login (Tahap 5). Isinya hanya judul dan tanggal, tidak ada data pribadi.{" "}
        <Link href="/dokkai" className="font-semibold text-brand-600 underline dark:text-brand-300">Kembali ke Dokkai</Link>
      </p>
    </div>
  );
}
