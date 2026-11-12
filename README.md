# Nihongo Career Hub

Platform belajar bahasa Jepang JLPT N5–N2 untuk pengguna Indonesia, plus marketplace karier penerjemah & interpreter.
Stack: **Next.js 14 (App Router) · TypeScript · Tailwind CSS 3 · Supabase**.

> Status: **Tahap 1** — fondasi, sistem desain, navigasi, beranda. Lihat `docs/PROJECT_STATE.md`.

## Prasyarat
- Node.js ≥ 18.18 (disarankan 20 LTS) dan npm
- (Tahap 5) Akun Supabase + Supabase CLI

## Instalasi
```bash
npm install
cp .env.example .env.local     # isi NEXT_PUBLIC_SITE_URL; variabel Supabase boleh kosong di Tahap 1–4
npm run dev                    # http://localhost:3000
```

## Environment variable
| Variabel | Wajib | Keterangan |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | ya | URL publik untuk canonical, sitemap, Open Graph |
| `NEXT_PUBLIC_SUPABASE_URL` | Tahap 5 | URL proyek Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Tahap 5 | Anon key (aman di klien karena RLS) |
| `SUPABASE_SERVICE_ROLE_KEY` | Tahap 5 | **Server saja**. Jangan pernah diberi prefix `NEXT_PUBLIC_` |

## Skrip
| Perintah | Fungsi |
|---|---|
| `npm run dev` | Server pengembangan |
| `npm run build && npm start` | Build & jalankan produksi |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run typecheck` | Pemeriksaan TypeScript |

## Database (Tahap 5)
```bash
supabase link --project-ref <ref>
supabase db push               # menjalankan supabase/migrations/0001_init_schema.sql
```

## Pengujian (saat ini)
1. `npm run typecheck && npm run lint && npm run build` harus lulus tanpa error.
2. Manual: navigasi semua menu (desktop & mobile), tombol Tab/Shift+Tab, skip link, Esc menutup menu mobile, toggle dark mode tersimpan setelah reload.
3. Lighthouse (Chrome DevTools) untuk Accessibility/SEO.
Unit test (Vitest + Testing Library) dan E2E (Playwright) ditambahkan di Tahap 5.

## Mengembangkan
- Tambah materi: edit file di `src/data/*` (ikuti tipe di `src/lib/types.ts`; furigana pakai notasi `漢字{かんじ}`).
- Tambah halaman: buat `src/app/<rute>/page.tsx`, ekspor `metadata` via `pageMetadata()`, daftarkan di `MAIN_NAV` (`src/lib/constants.ts`) dan `sitemap.ts`.
- Komponen UI bersama di `src/components/ui`; jangan mengimpor Supabase langsung dari komponen.

## Hak cipta konten
Semua bacaan dan soal dibuat orisinal dan **bukan** soal resmi JLPT. Buku seperti Shin Kanzen Master, TRY!, Sou Matome, Minna no Nihongo, dan Genki hanya dijadikan acuan struktur kurikulum, tidak disalin.
