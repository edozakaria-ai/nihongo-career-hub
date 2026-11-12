import { clsx, type ClassValue } from "clsx";

/** Gabungkan className kondisional. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/** Format rupiah/yen ringkas, mis. 12.000.000 → "Rp12 jt". */
export function formatSalary(
  min: number | null,
  max: number | null,
  currency: "IDR" | "JPY",
  period: string,
): string {
  if (min === null && max === null) return "Gaji dapat dinegosiasikan";
  const fmt = (n: number) => {
    if (currency === "IDR") {
      if (n >= 1_000_000) return `Rp${(n / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} jt`;
      if (n >= 1_000) return `Rp${(n / 1_000).toLocaleString("id-ID", { maximumFractionDigits: 0 })} rb`;
      return `Rp${n.toLocaleString("id-ID")}`;
    }
    return `¥${n.toLocaleString("ja-JP")}`;
  };
  const range = min !== null && max !== null ? `${fmt(min)} – ${fmt(max)}` : fmt((min ?? max) as number);
  return `${range} / ${period}`;
}

/** Tanggal relatif dalam Bahasa Indonesia. `now` dapat diinjeksi untuk pengujian. */
export function timeAgo(iso: string, now: Date = new Date()): string {
  const diffMs = now.getTime() - new Date(iso).getTime();
  const days = Math.floor(diffMs / 86_400_000);
  if (Number.isNaN(days)) return "";
  if (days <= 0) return "Hari ini";
  if (days === 1) return "Kemarin";
  if (days < 7) return `${days} hari lalu`;
  if (days < 30) return `${Math.floor(days / 7)} minggu lalu`;
  return new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

export function percent(done: number, total: number): number {
  if (total <= 0) return 0;
  return Math.min(100, Math.max(0, Math.round((done / total) * 100)));
}

/** Pilih item deterministik berdasarkan tanggal (untuk "kosakata harian"). */
export function pickDaily<T>(items: readonly T[], date: Date = new Date()): T {
  const dayIndex = Math.floor(date.getTime() / 86_400_000);
  return items[dayIndex % items.length];
}
