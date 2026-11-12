# Project State — Nihongo Career Hub
_Diperbarui: Tahap 1 selesai_

## Stack teknologi
Next.js 14.2 (App Router) · React 18.3 · TypeScript 5 (strict) · Tailwind CSS 3.4 (darkMode: class) · clsx · zod (disiapkan) · Supabase (`@supabase/supabase-js`, `@supabase/ssr` — disiapkan, belum dipakai)

## Struktur folder terkini
```
docs/ARCHITECTURE.md, docs/PROJECT_STATE.md
supabase/migrations/0001_init_schema.sql
src/app/            layout.tsx, page.tsx, globals.css, loading.tsx, error.tsx, not-found.tsx, robots.ts, sitemap.ts
src/app/{dashboard,kanji,kotoba,bunpou,dokkai,latihan,career,profil,login,register,admin}/page.tsx
src/components/layout/  Header.tsx, Footer.tsx, Logo.tsx, ThemeToggle.tsx
src/components/ui/      Button.tsx, Card.tsx, Badge.tsx, ProgressBar.tsx, SectionHeading.tsx, Furigana.tsx, ComingSoon.tsx
src/components/home/    Hero.tsx, LevelPicker.tsx, ModuleGrid.tsx, ProgressOverview.tsx, DailyWord.tsx, LatestJobs.tsx
src/data/               kanji.ts, vocabulary.ts, grammar.ts, readings.ts, questions.ts, jobs.ts, candidates.ts, user-progress.ts, index.ts
src/lib/                types.ts, constants.ts, utils.ts, ruby.ts, seo.ts, theme.ts
```

## Fitur selesai
- Fondasi proyek, konfigurasi TS/Tailwind/ESLint, header keamanan HTTP
- Sistem desain (token warna light/dark, tipografi, tombol, card, badge, progress bar)
- Navigasi responsif + menu mobile (Esc, aria-expanded), skip link, dark mode tanpa kedipan
- Beranda lengkap: hero + CTA, progres, target harian/mingguan, rekomendasi berikutnya, pilihan level, ringkasan modul, kosakata harian, lowongan terbaru
- Metadata SEO + Open Graph per halaman, robots.txt, sitemap.xml, loading/error/404
- 11 rute aktif (placeholder "Dijadwalkan pada Tahap N" — tanpa link mati)
- Data contoh orisinal: 9 kanji, 13 kosakata, 8 bunpou, 3 dokkai (6 soal), 12 soal latihan, 4 lowongan, 3 kandidat
- Skema database Supabase lengkap + RLS (belum diterapkan)

## Belum selesai
- Tahap 2: halaman kanji/kotoba (search, autocomplete, riwayat), bunpou, dokkai (toggle furigana, skor)
- Tahap 3: mesin latihan & simulasi berwaktu, dashboard belajar, XP/badge, grafik
- Tahap 4: career marketplace (kandidat, HR, lamaran, laporan)
- Tahap 5: auth Supabase, repository layer, admin, validasi zod server, tes otomatis

## Keputusan desain & arsitektur
- Data contoh terpisah di `src/data`, bentuk 1:1 dengan kolom DB (camelCase ↔ snake_case)
- Furigana disimpan sebagai notasi `漢字{かんじ}`, dirender aman via `<Furigana>`
- Server Components default; client hanya untuk interaksi (Header, ThemeToggle)
- RBAC di DB lewat `app_role()`/`is_admin()` + RLS; peran admin tidak bisa dipilih saat daftar
- Kandidat dicari lewat view `candidate_public` (tanpa kontak, opt-in `is_public` + `consent_at`)
- Lowongan baru selalu `verified = false` sampai admin memverifikasi
- Level JLPT kandidat opsional — bukan satu-satunya ukuran kemampuan

## Skema database terkini
Enum: jlpt_level, user_role, learning_status, formality, question_cat, content_source, exercise_mode, job_role, employment_type, work_mode, application_stage, report_target, report_status.
Tabel: profiles, kanji, vocabulary, grammar, reading_lessons, exercises, questions, exercise_questions, learning_progress, attempts, saved_words, achievements, user_achievements, user_stats, companies, recruiter_profiles, candidate_profiles, jobs, job_applications, saved_jobs, saved_candidates, reports. View: candidate_public.

## Bug / technical debt
- Belum diverifikasi dengan `npm run build` di lingkungan nyata (lingkungan pembuatan tidak memiliki paket Next.js); validasi dilakukan dengan transpile TS per file + cek resolusi import
- Progres beranda memakai `DEMO_PROGRESS` statis
- `diagram urutan goresan` masih null
- Policy `app_withdraw` mengizinkan kandidat meng-update baris lamarannya secara umum → batasi ke `stage = 'ditarik'` via trigger (Tahap 5)
- Kontak kandidat masih satu tabel dengan profil; pertimbangkan tabel `candidate_contacts` terpisah
- Belum ada unit/E2E test

## Langkah berikutnya
Tahap 2 — Kanji (daftar + filter level/goresan/kategori/status + detail + kuis), Kotoba (search multi-skrip + autocomplete + riwayat + simpan), Bunpou (detail + 3 jenis latihan), Dokkai (toggle furigana, terjemahan setelah mencoba, skor, riwayat di localStorage).
