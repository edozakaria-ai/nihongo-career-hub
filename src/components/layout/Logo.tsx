import Link from "next/link";
import { SITE } from "@/lib/constants";

/** Logo orisinal: lingkaran matahari terbit + karakter 語 (bahasa) di dalam "tag" karier. */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      aria-label={`${SITE.name} — Beranda`}
    >
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="10" className="fill-brand-500" />
        <circle cx="29" cy="11" r="5" className="fill-white/90" />
        <text x="18" y="29" textAnchor="middle" fontSize="18" fontWeight="700" className="fill-white" fontFamily="'Noto Sans JP', sans-serif">
          語
        </text>
      </svg>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-base font-extrabold tracking-tight text-ink">
            Nihongo<span className="text-brand-500">Career</span>
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">Hub</span>
        </span>
      )}
    </Link>
  );
}
