# Project State — Nihongo Career Hub
_Diperbarui: Tahap 2 selesai (Kanji, Kotoba, Bunpou, Dokkai)_

## Stack teknologi
Next.js 14.2.35 (App Router) · React 18.3 · TypeScript 5 (strict) · Tailwind CSS 3.4 (darkMode: class) · clsx · zod (disiapkan) · Supabase (disiapkan, belum dipakai) · Deploy: GitHub → Vercel (Framework Preset: Next.js)

## Struktur folder terkini
```
docs/ARCHITECTURE.md, docs/PROJECT_STATE.md
supabase/migrations/0001_init_schema.sql
src/app/            layout.tsx, page.tsx, globals.css, loading.tsx, error.tsx, not-found.tsx, robots.ts, sitemap.ts
src/app/kanji/      page.tsx, [id]/page.tsx
src/app/kotoba/     page.tsx
src/app/bunpou/     page.tsx, [slug]/page.tsx
src/app/dokkai/     page.tsx, [slug]/page.tsx
src/app/{dashboard,latihan,career,profil,login,register,admin}/page.tsx   (placeholder)
src/components/layout/  Header, Footer, Logo, ThemeToggle
src/components/ui/      Button, Card, Badge, ProgressBar, SectionHeading, Furigana, ComingSoon, Breadcrumb, EmptyState, LevelTabs
src/components/home/    Hero, LevelPicker, ModuleGrid, ProgressOverview, DailyWord, LatestJobs
src/components/learn/   ChoiceQuestion, ExampleList, FavoriteButton, StatusControl
src/components/kanji/   KanjiExplorer, KanjiQuiz
src/components/kotoba/  KotobaSearch, VocabCard
src/components/bunpou/  GrammarPractice
src/components/dokkai/  ReadingPlayer
src/data/               kanji, vocabulary, grammar, grammar-exercises, readings, questions, jobs, candidates, user-progress, index
src/lib/                types, constants, utils, ruby, seo, theme, kana, search, storage, quiz, params
```

## Fitur selesai
- Tahap 1: fondasi, sistem desain, navigasi, dark mode, beranda, SEO dasar, skema DB + RLS
- Kanji: daftar + filter (level, goresan, kategori, status/favorit), detail (arti, on/kun, mnemonik, tempat diagram goresan, kosakata, contoh berfurigana), favorit, status belajar, kuis pilihan ganda + input bacaan (hiragana/romaji)
- Kotoba: pencarian kanji/hiragana/katakana/romaji/Indonesia/Inggris, autocomplete (combobox ARIA, panah/Enter/Esc), riwayat, filter level, simpan kosakata, kata terkait, empty state
- Bunpou: daftar per level (tab URL), detail (arti, struktur, situasi, formalitas, contoh, perbandingan, kesalahan umum), 3 latihan (pilihan ganda, menyusun kalimat, melengkapi)
- Dokkai: daftar per level, toggle furigana, kosakata penting, pertanyaan + pembahasan, skor, terjemahan terkunci sampai submit, riwayat pengerjaan
- Sitemap mencakup halaman detail kanji/bunpou/dokkai

## Belum selesai
- Tahap 3: latihan JLPT per topik & simulasi berwaktu, analisis kemampuan, daftar jawaban salah, dashboard belajar (XP, streak, badge, grafik) dari data nyata localStorage
- Tahap 4: career marketplace
- Tahap 5: auth Supabase, repository layer, admin, validasi zod server, tes otomatis

## Keputusan desain & arsitektur
- Data contoh di `src/data`, bentuk 1:1 dengan kolom DB
- Progres prototipe disimpan di localStorage via `src/lib/storage.ts` (kunci: nch-learning, nch-saved-words, nch-search-history, nch-dokkai-history, nch-theme). Tahap 5 mengganti implementasi hook, bukan komponen
- Kunci item belajar: `kanji:<id>`, `grammar:<id>`, `reading:<id>`
- Filter level halaman daftar memakai parameter URL `?level=` yang divalidasi whitelist (`lib/params.ts`)
- Kuis memakai pengacakan deterministik (`lib/quiz.ts`) untuk menghindari hydration mismatch
- Pencarian tanpa regex dari input pengguna; input dinormalisasi NFKC dan dibatasi panjangnya
- Furigana notasi `漢字{かんじ}`, dirender aman tanpa dangerouslySetInnerHTML
- Font memakai font sistem (tanpa next/font/google) agar build Vercel stabil

## Skema database terkini
Tidak berubah dari Tahap 1 (lihat supabase/migrations/0001_init_schema.sql). Latihan bunpou (`grammar-exercises.ts`) nantinya dipetakan ke tabel `exercises` + `questions` dengan kolom tambahan `type` (mc | order | fill) — migrasi 0002 di Tahap 5.

## Bug / technical debt
- Diagram urutan goresan masih placeholder
- Status/favorit hanya tersimpan di perangkat (localStorage) sampai Tahap 5
- Beranda masih memakai DEMO_PROGRESS statis (akan dihubungkan di Tahap 3)
- Next.js 15 / ESLint 9 belum dimigrasi (ditunda: perubahan `params` menjadi Promise berisiko memecah build)
- Policy `app_withdraw` perlu dibatasi; kontak kandidat sebaiknya tabel terpisah
- Belum ada tes otomatis

## Langkah berikutnya
Tahap 3 — Latihan JLPT (mode topik & mode ujian berwaktu, skor, pembahasan, analisis per kategori, daftar jawaban salah, rekomendasi materi) dan Dashboard Belajar (XP, level, streak, badge, target mingguan, grafik, statistik kanji/kosakata dari localStorage).
