# Project State — Nihongo Career Hub
_Diperbarui: Tahap 3 (Latihan JLPT & Progress Belajar)_

## Stack
Next.js 14.2.35 (App Router) · React 18 · TypeScript strict · Tailwind 3.4 · Supabase (disiapkan, belum dipakai) · Deploy GitHub → Vercel

## Struktur penting (terkini)
```
src/data/            kanji, vocabulary, grammar, readings, questions, jobs, candidates, index
src/data/open/       schema, kanji-n5..n2, vocab-n5..n2, grammar-n5..n2, index
src/data/dokkai/     types, articles, queue, queue-2, schedule, index
src/lib/             types, constants, utils, ruby, seo, theme, kana, search, quiz, params,
                     kanji-links, kanji-level,
                     local-store (BARU), storage (DIUBAH), progress (BARU),
                     gamification (BARU), exam (BARU), question-bank (BARU)
src/components/latihan/   QuestionStem (BARU), PracticeExplorer (DIUBAH), ExamRunner (BARU), WrongReview (BARU)
src/components/dashboard/ XpChart (BARU), DashboardView (BARU)
src/app/latihan/          page (DIUBAH), ujian/page (BARU), ulang/page (BARU)
src/app/dashboard/page    (DIUBAH — sebelumnya placeholder)
```

## Fitur selesai
- Tahap 1: fondasi, desain, navigasi, beranda, SEO dasar, skema DB + RLS
- Tahap 2: kanji (N4 terisi; N5/N3/N2 template), kotoba N5–N2, bunpou N5–N2 (403 pola), dokkai bergaya berita + jadwal terbit otomatis + pagination
- Tahap 3:
  - Bank soal otomatis dari materi situs (kanji-baca, kosakata 2 arah, tata bahasa, bacaan dokkai) + soal kurasi; berganti tiap hari
  - Latihan per topik (filter level & kategori, 10 soal per muatan)
  - Simulasi ujian berwaktu (mode Mini/Standar), timer + kumpul otomatis, analisis per kategori, rekomendasi materi, pembahasan
  - Daftar jawaban salah tersimpan + halaman ulangi
  - XP (dengan batas 3×/hari per sumber), level, streak, target harian & mingguan, grafik 14/30 hari, statistik kanji/bunpou/kosakata/dokkai, riwayat ujian, 12 badge, pengingat positif, tombol hapus progres

## Kunci localStorage
nch-learning · nch-saved-words · nch-search-history · nch-dokkai-history · nch-activity · nch-exam-history · nch-wrong · nch-goals · nch-xp-awarded · nch-theme

## Aturan XP
kuis kanji/bunpou 5 · selesai dokkai 15 · pertama kali "dikuasai" 10 · latihan benar 3 / salah 1 · ujian 3 per benar + 20 bonus · ulang benar 3

## Keputusan
- XP dicatat otomatis lewat useLearningState (markAtLeast/setStatus) sehingga komponen lama tidak perlu diubah
- Soal otomatis selalu berlabel "platform"; disclaimer "bukan soal resmi JLPT" di latihan & ujian
- Pengingat tidak memakai rasa bersalah; ada pesan istirahat bila XP hari ini ≥ 3× target

## Technical debt
- Beranda (ProgressOverview) masih memakai DEMO_PROGRESS → hubungkan ke data nyata
- Progres hanya di perangkat (localStorage) sampai Tahap 5
- Kualitas pengecoh otomatis bergantung pada data (arti mirip bisa lolos); soal bisa dilaporkan nanti
- Data besar masih di file; build makin lama → Supabase (Tahap 5)
- Halaman admin belum dilindungi login

## Langkah berikutnya
Tahap 4 — Career marketplace (profil kandidat, lowongan, HR/rekruter, lamaran, laporan lowongan palsu)
