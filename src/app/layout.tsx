import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { themeInitScript } from "@/lib/theme";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — Belajar Bahasa Jepang JLPT N5–N2 & Karier Penerjemah`, template: `%s | ${SITE.name}` },
  description: SITE.tagline,
  applicationName: SITE.name,
  keywords: ["belajar bahasa Jepang", "JLPT N5", "JLPT N4", "JLPT N3", "JLPT N2", "kanji", "lowongan penerjemah Jepang", "interpreter Jepang"],
  openGraph: { type: "website", siteName: SITE.name, locale: SITE.locale, url: "/", title: SITE.name, description: SITE.tagline },
  twitter: { card: "summary_large_image", title: SITE.name, description: SITE.tagline },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F25A22" },
    { media: "(prefers-color-scheme: dark)", color: "#121216" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Terapkan tema sebelum render pertama untuk mencegah kedipan */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          Lewati ke konten utama
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
