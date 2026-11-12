"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ACCOUNT_NAV, MAIN_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { buttonClass } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Tutup menu mobile saat pindah halaman
  useEffect(() => setOpen(false), [pathname]);

  // Tutup dengan tombol Escape dan kembalikan fokus ke tombol menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/75">
      {/* Strip atas bergaya e-commerce */}
      <div className="hidden bg-brand-500 text-white sm:block">
        <div className="container flex h-8 items-center justify-between text-xs">
          <p>🎯 Belajar 20 menit sehari sudah cukup untuk progres yang konsisten.</p>
          <nav aria-label="Tautan akun" className="flex items-center gap-4">
            <Link href="/career" className="hover:underline focus-visible:underline focus-visible:outline-none">Untuk Perusahaan</Link>
            <Link href="/profil" className="hover:underline focus-visible:underline focus-visible:outline-none">Profil</Link>
          </nav>
        </div>
      </div>

      <div className="container flex h-16 items-center gap-4">
        <Logo />

        <nav aria-label="Navigasi utama" className="ml-4 hidden flex-1 lg:block">
          <ul className="flex items-center gap-1">
            {MAIN_NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                      active ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200" : "text-ink-muted hover:text-brand-600",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Link href="/login" className={buttonClass("ghost", "sm", "hidden sm:inline-flex")}>Masuk</Link>
          <Link href="/register" className={buttonClass("primary", "sm", "hidden sm:inline-flex")}>Daftar</Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigasi seluler" className="animate-fade-in border-t border-line bg-surface lg:hidden">
          <ul className="container grid grid-cols-2 gap-1 py-3 sm:grid-cols-3">
            {[...MAIN_NAV, ...ACCOUNT_NAV].map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                      active ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200" : "text-ink hover:bg-surface-muted",
                    )}
                  >
                    {item.label}
                    {item.jp && <span lang="ja" className="font-jp text-xs text-ink-muted">{item.jp}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
