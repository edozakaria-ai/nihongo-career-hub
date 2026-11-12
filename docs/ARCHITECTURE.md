# Nihongo Career Hub — Arsitektur & Desain (Tahap 1)

## 1. Asumsi utama
1. Bahasa antarmuka utama Bahasa Indonesia; konten Jepang memakai kanji + furigana, romaji hanya untuk N5–N4 dan contoh kalimat.
2. Tahap 1–4 berjalan **tanpa backend** (data contoh di `src/data`). Supabase diaktifkan di Tahap 5 tanpa mengubah komponen UI.
3. Level kanji/kosakata adalah **estimasi kurikulum platform** — JLPT tidak menerbitkan daftar resmi sejak 2010.
4. Semua soal/bacaan adalah **buatan platform** (`source: "platform"`); materi berlisensi diberi label `licensed` + catatan lisensi.
5. Kamus produksi akan memakai sumber terbuka berlisensi (mis. JMdict/EDRDG, CC BY-SA) dan diagram goresan dari KanjiVG (CC BY-SA) dengan atribusi.
6. Lowongan & kandidat dalam data contoh **fiktif**.

## 2. Sitemap
```
/                     Beranda
/dashboard            Dashboard Belajar            (login)
/kanji                Daftar + filter kanji        → /kanji/[id]        (Tahap 2)
/kotoba               Pencarian kosakata           → /kotoba/[id]       (Tahap 2)
/bunpou               Daftar pola                  → /bunpou/[slug]     (Tahap 2)
/dokkai               Daftar bacaan                → /dokkai/[slug]     (Tahap 2)
/latihan              Latihan per topik & simulasi → /latihan/[slug], /latihan/hasil/[attemptId] (Tahap 3)
/career               Lowongan                     → /career/jobs/[slug], /career/kandidat, /career/perusahaan (Tahap 4)
/profil               Profil Pengguna              (login)
/login, /register     Autentikasi                  (Tahap 5)
/admin                Dashboard Admin              (role: admin)
```

## 3. Alur pengguna
- **Pelajar:** Beranda → pilih level → modul (kanji/kotoba/bunpou/dokkai) → kuis → XP & progres → rekomendasi berikutnya.
- **Kandidat:** Daftar (peran kandidat) → lengkapi profil profesional → **setujui publikasi profil** → cari & simpan lowongan → lamar → pantau status.
- **HR/Rekruter:** Daftar (peran rekruter) → buat/hubungkan profil perusahaan → pasang lowongan (status *belum diverifikasi* sampai ditinjau admin) → cari kandidat publik → simpan → kelola tahapan rekrutmen.
- **Admin:** Kelola materi & soal → verifikasi perusahaan/lowongan → tindak laporan.

## 4. Arsitektur aplikasi
```
Browser ──► Next.js App Router (RSC by default)
              ├─ Server Components: halaman, metadata SEO, pengambilan data
              ├─ Client Components ("use client"): Header (menu mobile), ThemeToggle, kuis, filter
              ├─ src/data        ← data contoh (Tahap 1–4)
              └─ src/lib/repo    ← (Tahap 5) lapisan repository: Supabase bila env ada, fallback ke src/data
                                       │
                                       ▼
                              Supabase: Postgres + RLS, Auth, Storage
```
Prinsip: UI tidak pernah mengimpor Supabase secara langsung; semua akses data lewat repository agar migrasi data contoh → DB tidak menyentuh komponen.

## 5. Struktur folder
```
nihongo-career-hub/
├─ docs/                  ARCHITECTURE.md, PROJECT_STATE.md
├─ supabase/migrations/   0001_init_schema.sql
├─ src/
│  ├─ app/                route App Router (layout, page, loading, error, not-found, robots, sitemap, 11 rute)
│  ├─ components/
│  │  ├─ layout/          Header, Footer, Logo, ThemeToggle
│  │  ├─ ui/              Button, Card, Badge, ProgressBar, SectionHeading, Furigana, ComingSoon
│  │  └─ home/            Hero, LevelPicker, ModuleGrid, ProgressOverview, DailyWord, LatestJobs
│  ├─ data/               kanji, vocabulary, grammar, readings, questions, jobs, candidates, user-progress, index
│  └─ lib/                types, constants, utils, ruby, seo, theme
├─ tailwind.config.ts · next.config.mjs · tsconfig.json · package.json · .env.example
```

## 6. Sistem desain
| Token | Nilai | Pemakaian |
|---|---|---|
| `brand-500` | `#F25A22` | Tombol utama, badge N2, aksen |
| `brand-50/100` | `#FFF4EF / #FFE4D6` | Latar tombol sekunder, item nav aktif |
| `canvas` | `rgb(246 246 248)` / dark `rgb(18 18 22)` | Latar halaman |
| `surface` | putih / dark `rgb(28 28 34)` | Card, header |
| `ink` / `ink-muted` | `rgb(28 28 33)` / `rgb(90 90 102)` | Teks utama/sekunder (kontras AA) |
| Level | N5 hijau, N4 biru langit, N3 indigo, N2 oranye | `LevelBadge` |

- **Tipografi:** Plus Jakarta Sans (Latin) + Noto Sans JP (`font-jp`, atribut `lang="ja"`). Skala: h1 30–48px, h2 20–24px, body 14–16px, caption 11–12px. Furigana `rt` 0.5em.
- **Spacing:** kelipatan 4px Tailwind; section `py-10`, card `p-5`, gap grid `gap-4`.
- **Radius & bayangan:** card 14px (`rounded-card`), tombol 8px; `shadow-card`, hover `shadow-card-hover` (oranye lembut).
- **Tombol:** `primary`, `secondary`, `outline`, `ghost` × `sm/md/lg`; semuanya punya `focus-visible` ring oranye.
- **Card:** border tipis + bayangan halus; varian interaktif naik 2px saat hover.
- **Badge:** `brand`, `neutral`, `success` (terverifikasi), `warning` (belum diverifikasi), `info` (mode demo).
- **Form (Tahap 5):** label selalu terlihat di atas input, pesan error `aria-describedby`, tinggi input 40px, ring fokus oranye.
- **Aksesibilitas:** skip link, `aria-current` pada nav, menu mobile dapat ditutup dengan Esc, `role="progressbar"`, `prefers-reduced-motion` dihormati.
- **Identitas visual:** logo orisinal (kotak oranye + matahari + 語). Tidak memakai logo/ikon/aset Shopee.

## 7. Skema database (ringkas) — lihat `supabase/migrations/0001_init_schema.sql`
```
auth.users 1─1 profiles (role: learner|candidate|recruiter|admin)
profiles 1─* learning_progress (item_type + item_id → kanji|vocabulary|grammar|reading_lessons)
profiles 1─* attempts *─1 exercises *─* questions (via exercise_questions)
reading_lessons 1─* exercises (opsional)
profiles *─* vocabulary (saved_words)
profiles *─* achievements (user_achievements) ; profiles 1─1 user_stats (XP, streak)
profiles 1─1 candidate_profiles  ──► view candidate_public (tanpa kontak; hanya is_public & bagi recruiter/admin)
profiles 1─1 recruiter_profiles *─1 companies 1─* jobs
jobs 1─* job_applications *─1 profiles(kandidat)
profiles *─* jobs (saved_jobs) ; profiles(recruiter) *─* profiles(kandidat) (saved_candidates)
reports → target_type + target_id (job|company|candidate|user)
```
Keamanan: RLS aktif di semua tabel; peran tidak bisa dinaikkan sendiri (trigger); `verified` hanya diubah admin; insert attempts/XP hanya via fungsi server (service role) agar skor tidak dimanipulasi; kunci jawaban tidak diekspos ke klien sebelum submit.

### Contoh struktur data
**Materi (vocabulary):**
```json
{ "word": "確認", "reading": "かくにん", "romaji": "kakunin", "meaning_id": ["konfirmasi","pengecekan"],
  "meaning_en": ["confirmation","check"], "part_of_speech": "nomina", "level": "N3",
  "examples": [{ "jp": "図面{ずめん}を確認{かくにん}してから作業{さぎょう}を始{はじ}めます。",
                 "translation": "Saya mulai bekerja setelah mengecek gambar teknik." }],
  "source": "platform", "published": true }
```
**Lowongan (jobs):**
```json
{ "slug": "interpreter-pabrik-otomotif-karawang", "title": "Interpreter Pabrik (Produksi & Maintenance)",
  "role": "interpreter", "min_jlpt": "N2", "work_mode": "on-site", "employment_type": "full-time",
  "salary_min": 9000000, "salary_max": 13000000, "currency": "IDR", "salary_period": "bulan",
  "status": "published", "verified": true }
```

## 8. Notasi furigana
Teks Jepang disimpan sebagai string dengan notasi `漢字{かんじ}` (contoh: `毎日{まいにち}勉強{べんきょう}します`). `parseRuby()` mengubahnya menjadi segmen dan `<Furigana>` merendernya sebagai `<ruby>` **tanpa** `dangerouslySetInnerHTML` (aman dari XSS). `stripRuby()` / `toKana()` dipakai untuk indeks pencarian.
