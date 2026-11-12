import Link from "next/link";
import { ACCOUNT_NAV, MAIN_NAV, SITE } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-ink-muted">{SITE.tagline}</p>
          <p className="mt-4 max-w-sm text-xs text-ink-muted">
            Soal dan materi di platform ini dibuat orisinal oleh tim Nihongo Career Hub dan <strong>bukan</strong> soal resmi JLPT.
            JLPT adalah ujian yang diselenggarakan oleh Japan Foundation dan JEES.
          </p>
        </div>
        <nav aria-label="Belajar">
          <h2 className="text-sm font-bold text-ink">Belajar</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {MAIN_NAV.filter((n) => n.href !== "/" && n.href !== "/career").map((n) => (
              <li key={n.href}>
                <Link className="text-ink-muted hover:text-brand-600 focus-visible:outline-none focus-visible:underline" href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Karier & akun">
          <h2 className="text-sm font-bold text-ink">Karier & Akun</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="text-ink-muted hover:text-brand-600 focus-visible:outline-none focus-visible:underline" href="/career">Lowongan & Kandidat</Link></li>
            {ACCOUNT_NAV.map((n) => (
              <li key={n.href}>
                <Link className="text-ink-muted hover:text-brand-600 focus-visible:outline-none focus-visible:underline" href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} {SITE.name}. Prototipe — data lowongan dan kandidat bersifat fiktif.
      </div>
    </footer>
  );
}
