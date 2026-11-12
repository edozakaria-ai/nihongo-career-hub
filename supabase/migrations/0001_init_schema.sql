-- ════════════════════════════════════════════════════════════════════
-- Nihongo Career Hub — Skema awal (Tahap 1: desain; diterapkan di Tahap 5)
-- Target: Supabase (PostgreSQL 15+). Jalankan: supabase db push
-- Konvensi: snake_case, uuid PK, created_at/updated_at, RLS aktif di semua tabel.
-- "users" = tabel bawaan auth.users milik Supabase Auth (tidak dibuat ulang).
-- ════════════════════════════════════════════════════════════════════

create extension if not exists pg_trgm;   -- pencarian fuzzy kotoba

-- ── Enum ─────────────────────────────────────────────────────────────
create type jlpt_level      as enum ('N5','N4','N3','N2');
create type user_role       as enum ('learner','candidate','recruiter','admin');
create type learning_status as enum ('new','learning','mastered');
create type formality       as enum ('kasual','netral','sopan','formal');
create type question_cat    as enum ('kanji','kosakata','tata-bahasa','membaca');
create type content_source  as enum ('platform','licensed');
create type exercise_mode   as enum ('topik','ujian');
create type job_role        as enum ('translator','interpreter','localization','japanese-speaker','liaison');
create type employment_type as enum ('full-time','part-time','freelance','kontrak');
create type work_mode       as enum ('remote','hybrid','on-site');
create type application_stage as enum ('dikirim','ditinjau','wawancara','tes','penawaran','diterima','ditolak','ditarik');
create type report_target   as enum ('job','company','candidate','user');
create type report_status   as enum ('baru','ditinjau','ditindak','ditolak');

-- ── Util: updated_at otomatis ────────────────────────────────────────
create or replace function set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

-- ════════════════ 1. PROFIL & PERAN ════════════════
create table profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  display_name  text not null check (char_length(display_name) between 1 and 60),
  role          user_role not null default 'learner',
  target_level  jlpt_level default 'N5',
  daily_goal_minutes smallint not null default 20 check (daily_goal_minutes between 5 and 240),
  avatar_path   text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create trigger trg_profiles_updated before update on profiles for each row execute function set_updated_at();

-- Fungsi helper RBAC (security definer agar bisa dipakai di policy tanpa rekursi)
create or replace function public.app_role() returns user_role
language sql stable security definer set search_path = public as $$
  select role from profiles where id = auth.uid()
$$;
create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select role = 'admin' from profiles where id = auth.uid()), false)
$$;

-- Profil dibuat otomatis saat user mendaftar. Peran 'admin' TIDAK bisa dipilih sendiri.
create or replace function handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare requested text := new.raw_user_meta_data->>'role';
begin
  insert into profiles (id, display_name, role)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data->>'display_name',''), split_part(new.email,'@',1)),
    case when requested in ('learner','candidate','recruiter') then requested::user_role else 'learner' end
  );
  return new;
end $$;
create trigger on_auth_user_created after insert on auth.users for each row execute function handle_new_user();

-- ════════════════ 2. KONTEN BELAJAR ════════════════
create table kanji (
  id            uuid primary key default gen_random_uuid(),
  character     text not null unique check (char_length(character) = 1),
  level         jlpt_level not null,
  meanings      text[] not null,
  onyomi        text[] not null default '{}',
  kunyomi       text[] not null default '{}',
  stroke_count  smallint not null check (stroke_count between 1 and 40),
  category      text,
  stroke_order_svg text,               -- path storage / sumber berlisensi (mis. KanjiVG)
  mnemonic      text,
  vocabulary    jsonb not null default '[]',  -- [{word, reading, meaning}]
  examples      jsonb not null default '[]',  -- [{jp:"漢字{かんじ}", romaji, translation}]
  source        content_source not null default 'platform',
  published     boolean not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create index on kanji (level, stroke_count);

create table vocabulary (
  id            uuid primary key default gen_random_uuid(),
  word          text not null,
  reading       text not null,
  romaji        text not null,
  meaning_id    text[] not null,
  meaning_en    text[] not null default '{}',
  part_of_speech text not null,
  level         jlpt_level not null,
  examples      jsonb not null default '[]',
  related       text[] not null default '{}',
  tags          text[] not null default '{}',
  source        content_source not null default 'platform',
  source_ref    text,                 -- mis. ID entri JMdict bila diimpor dari kamus terbuka
  published     boolean not null default false,
  -- kolom gabungan untuk pencarian multi-bahasa
  search_text   text generated always as (
    word || ' ' || reading || ' ' || romaji || ' ' ||
    array_to_string(meaning_id,' ') || ' ' || array_to_string(meaning_en,' ')
  ) stored,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  unique (word, reading)
);
create index vocabulary_search_trgm on vocabulary using gin (search_text gin_trgm_ops);
create index on vocabulary (level);

create table grammar (
  id            uuid primary key default gen_random_uuid(),
  slug          text not null unique,
  pattern       text not null,
  level         jlpt_level not null,
  meaning       text not null,
  structure     text not null,
  usage         text,
  formality     formality not null default 'netral',
  examples      jsonb not null default '[]',
  comparison    jsonb not null default '[]',   -- [{pattern, note}]
  common_mistakes text[] not null default '{}',
  source        content_source not null default 'platform',
  published     boolean not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create table reading_lessons (
  id            uuid primary key default gen_random_uuid(),
  slug          text not null unique,
  title         text not null,
  level         jlpt_level not null,
  minutes       smallint not null check (minutes > 0),
  difficulty    smallint not null check (difficulty between 1 and 5),
  paragraphs    text[] not null,                -- notasi furigana 漢字{かんじ}
  translation   text[] not null,
  key_vocabulary jsonb not null default '[]',
  source        content_source not null default 'platform',
  published     boolean not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Exercise = kumpulan soal (set latihan per topik atau simulasi berwaktu)
create table exercises (
  id            uuid primary key default gen_random_uuid(),
  slug          text not null unique,
  title         text not null,
  level         jlpt_level not null,
  mode          exercise_mode not null default 'topik',
  category      question_cat,                   -- null = campuran
  time_limit_seconds integer check (time_limit_seconds is null or time_limit_seconds > 0),
  reading_lesson_id uuid references reading_lessons(id) on delete set null,
  source        content_source not null default 'platform',
  published     boolean not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create table questions (
  id            uuid primary key default gen_random_uuid(),
  level         jlpt_level not null,
  category      question_cat not null,
  prompt        text not null,
  stem          text,
  options       text[] not null check (array_length(options,1) between 2 and 6),
  answer_index  smallint not null,
  explanation   text not null,
  related_topic text,                           -- id/slug kanji, kotoba, bunpou terkait
  source        content_source not null default 'platform',
  license_note  text,                           -- wajib diisi bila source = 'licensed'
  created_at    timestamptz not null default now(),
  check (answer_index >= 0 and answer_index < array_length(options,1)),
  check (source = 'platform' or license_note is not null)
);

create table exercise_questions (
  exercise_id   uuid references exercises(id) on delete cascade,
  question_id   uuid references questions(id) on delete cascade,
  position      smallint not null,
  primary key (exercise_id, question_id)
);

-- ════════════════ 3. PROGRES & GAMIFIKASI ════════════════
create table learning_progress (
  user_id       uuid references profiles(id) on delete cascade,
  item_type     text not null check (item_type in ('kanji','vocabulary','grammar','reading')),
  item_id       uuid not null,
  status        learning_status not null default 'new',
  favorite      boolean not null default false,
  correct_count integer not null default 0,
  wrong_count   integer not null default 0,
  last_seen_at  timestamptz,
  next_review_at timestamptz,                   -- untuk SRS sederhana (Tahap 3)
  primary key (user_id, item_type, item_id)
);

create table attempts (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references profiles(id) on delete cascade,
  exercise_id   uuid references exercises(id) on delete set null,
  reading_lesson_id uuid references reading_lessons(id) on delete set null,
  started_at    timestamptz not null default now(),
  finished_at   timestamptz,
  score         smallint,
  total         smallint,
  answers       jsonb not null default '[]',    -- [{question_id, chosen_index, correct, ms}]
  xp_earned     integer not null default 0
);
create index on attempts (user_id, started_at desc);

create table saved_words (
  user_id       uuid references profiles(id) on delete cascade,
  vocabulary_id uuid references vocabulary(id) on delete cascade,
  note          text check (char_length(note) <= 500),
  created_at    timestamptz not null default now(),
  primary key (user_id, vocabulary_id)
);

create table achievements (
  id            uuid primary key default gen_random_uuid(),
  code          text not null unique,           -- mis. 'streak-7', 'kanji-50'
  title         text not null,
  description   text not null,
  icon          text,
  xp_reward     integer not null default 0
);
create table user_achievements (
  user_id        uuid references profiles(id) on delete cascade,
  achievement_id uuid references achievements(id) on delete cascade,
  earned_at      timestamptz not null default now(),
  primary key (user_id, achievement_id)
);
-- Statistik ringkas per user (XP, streak) — diperbarui oleh fungsi server
create table user_stats (
  user_id       uuid primary key references profiles(id) on delete cascade,
  xp            integer not null default 0,
  streak_days   integer not null default 0,
  last_active_date date,
  weekly_goal_days smallint not null default 5 check (weekly_goal_days between 1 and 7)
);

-- ════════════════ 4. KARIER ════════════════
create table companies (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  industry      text,
  city          text,
  website       text check (website is null or website ~* '^https?://'),
  description   text,
  verified      boolean not null default false, -- hanya admin yang boleh mengubah
  created_by    uuid references profiles(id) on delete set null,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create table recruiter_profiles (
  user_id       uuid primary key references profiles(id) on delete cascade,
  company_id    uuid references companies(id) on delete set null,
  job_title     text,
  work_email    text,                            -- privat
  created_at    timestamptz not null default now()
);

create table candidate_profiles (
  user_id       uuid primary key references profiles(id) on delete cascade,
  headline      text check (char_length(headline) <= 120),
  jlpt          jlpt_level,                      -- opsional: bukan satu-satunya ukuran kemampuan
  language_pairs text[] not null default '{}',
  fields        text[] not null default '{}',
  roles         job_role[] not null default '{}',
  years_experience smallint not null default 0 check (years_experience between 0 and 60),
  city          text,
  work_modes    work_mode[] not null default '{}',
  experience    jsonb not null default '[]',     -- [{company, title, from, to, description}]
  portfolio     jsonb not null default '[]',     -- [{title, description, url}]
  -- Data kontak PRIVAT — tidak pernah dipaparkan via view publik
  contact_email text,
  contact_phone text,
  is_public     boolean not null default false,  -- persetujuan eksplisit sebelum tampil
  consent_at    timestamptz,                     -- waktu persetujuan publikasi
  updated_at    timestamptz not null default now(),
  check (is_public = false or consent_at is not null)
);

-- (View candidate_public didefinisikan setelah fungsi RBAC di bagian 5.)

create table jobs (
  id            uuid primary key default gen_random_uuid(),
  slug          text not null unique,
  company_id    uuid not null references companies(id) on delete cascade,
  posted_by     uuid not null references profiles(id) on delete cascade,
  title         text not null check (char_length(title) between 5 and 120),
  role          job_role not null,
  min_jlpt      jlpt_level,
  languages     text[] not null default '{}',
  fields        text[] not null default '{}',
  location      text not null,
  work_mode     work_mode not null,
  employment_type employment_type not null,
  salary_min    bigint check (salary_min is null or salary_min >= 0),
  salary_max    bigint check (salary_max is null or salary_max >= 0),
  currency      text not null default 'IDR' check (currency in ('IDR','JPY')),
  salary_period text not null default 'bulan' check (salary_period in ('bulan','jam','proyek')),
  description   text not null,
  requirements  text[] not null default '{}',
  status        text not null default 'draft' check (status in ('draft','published','closed')),
  verified      boolean not null default false,  -- hanya admin
  posted_at     timestamptz,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  check (salary_min is null or salary_max is null or salary_min <= salary_max)
);
create index on jobs (status, posted_at desc);

create table job_applications (
  id            uuid primary key default gen_random_uuid(),
  job_id        uuid not null references jobs(id) on delete cascade,
  candidate_id  uuid not null references profiles(id) on delete cascade,
  cover_letter  text check (char_length(cover_letter) <= 4000),
  stage         application_stage not null default 'dikirim',
  share_contact boolean not null default true,   -- kandidat setuju kontaknya dilihat perekrut lowongan ini
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  unique (job_id, candidate_id)
);

create table saved_jobs (
  user_id       uuid references profiles(id) on delete cascade,
  job_id        uuid references jobs(id) on delete cascade,
  created_at    timestamptz not null default now(),
  primary key (user_id, job_id)
);

create table saved_candidates (
  recruiter_id  uuid references profiles(id) on delete cascade,
  candidate_id  uuid references profiles(id) on delete cascade,
  note          text check (char_length(note) <= 1000),
  created_at    timestamptz not null default now(),
  primary key (recruiter_id, candidate_id)
);

create table reports (
  id            uuid primary key default gen_random_uuid(),
  reporter_id   uuid references profiles(id) on delete set null,
  target_type   report_target not null,
  target_id     uuid not null,
  reason        text not null check (reason in ('lowongan-palsu','penipuan','diskriminasi','spam','konten-tidak-pantas','lainnya')),
  details       text check (char_length(details) <= 2000),
  status        report_status not null default 'baru',
  created_at    timestamptz not null default now(),
  resolved_by   uuid references profiles(id) on delete set null,
  resolved_at   timestamptz
);

-- Trigger updated_at
create trigger trg_kanji_upd     before update on kanji            for each row execute function set_updated_at();
create trigger trg_vocab_upd     before update on vocabulary       for each row execute function set_updated_at();
create trigger trg_grammar_upd   before update on grammar          for each row execute function set_updated_at();
create trigger trg_reading_upd   before update on reading_lessons  for each row execute function set_updated_at();
create trigger trg_ex_upd        before update on exercises        for each row execute function set_updated_at();
create trigger trg_company_upd   before update on companies        for each row execute function set_updated_at();
create trigger trg_cand_upd      before update on candidate_profiles for each row execute function set_updated_at();
create trigger trg_jobs_upd      before update on jobs             for each row execute function set_updated_at();
create trigger trg_app_upd       before update on job_applications for each row execute function set_updated_at();

-- ════════════════ 5. ROW LEVEL SECURITY ════════════════
alter table profiles            enable row level security;
alter table kanji               enable row level security;
alter table vocabulary          enable row level security;
alter table grammar             enable row level security;
alter table reading_lessons     enable row level security;
alter table exercises           enable row level security;
alter table questions           enable row level security;
alter table exercise_questions  enable row level security;
alter table learning_progress   enable row level security;
alter table attempts            enable row level security;
alter table saved_words         enable row level security;
alter table achievements        enable row level security;
alter table user_achievements   enable row level security;
alter table user_stats          enable row level security;
alter table companies           enable row level security;
alter table recruiter_profiles  enable row level security;
alter table candidate_profiles  enable row level security;
alter table jobs                enable row level security;
alter table job_applications    enable row level security;
alter table saved_jobs          enable row level security;
alter table saved_candidates    enable row level security;
alter table reports             enable row level security;

-- Profil: pemilik baca/ubah miliknya; kolom role dilindungi trigger di bawah
create policy profiles_self_select on profiles for select using (id = auth.uid() or is_admin());
create policy profiles_self_update on profiles for update using (id = auth.uid()) with check (id = auth.uid());
create or replace function prevent_role_escalation() returns trigger language plpgsql as $$
begin
  if new.role is distinct from old.role and not is_admin() then
    raise exception 'Perubahan peran hanya oleh admin';
  end if;
  return new;
end $$;
create trigger trg_profiles_role before update on profiles for each row execute function prevent_role_escalation();

-- Konten belajar: publik bisa membaca yang published; admin mengelola semua
do $$
declare t text;
begin
  foreach t in array array['kanji','vocabulary','grammar','reading_lessons','exercises'] loop
    execute format('create policy %1$s_read on %1$s for select using (published or is_admin())', t);
    execute format('create policy %1$s_admin on %1$s for all using (is_admin()) with check (is_admin())', t);
  end loop;
end $$;
-- Soal: dibaca lewat RPC server (agar kunci jawaban tidak bocor sebelum submit); hanya admin langsung
create policy questions_admin on questions for all using (is_admin()) with check (is_admin());
create policy exq_admin on exercise_questions for all using (is_admin()) with check (is_admin());
create policy achievements_read on achievements for select using (true);
create policy achievements_admin on achievements for all using (is_admin()) with check (is_admin());

-- Data belajar milik pribadi
create policy lp_own   on learning_progress for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy att_own_read on attempts      for select using (user_id = auth.uid());
-- insert/update attempts & user_stats & user_achievements HANYA via fungsi server (service role) agar XP tidak bisa dimanipulasi
create policy sw_own   on saved_words       for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy ua_own   on user_achievements for select using (user_id = auth.uid());
create policy us_own   on user_stats        for select using (user_id = auth.uid());

-- Perusahaan: semua bisa baca; rekruter membuat; pembuat mengubah (kecuali verified); admin penuh
create policy comp_read   on companies for select using (true);
create policy comp_insert on companies for insert with check (app_role() = 'recruiter' and created_by = auth.uid() and verified = false);
create policy comp_update on companies for update using (created_by = auth.uid() or is_admin());
create policy comp_admin  on companies for delete using (is_admin());

create policy rp_own on recruiter_profiles for all using (user_id = auth.uid() or is_admin()) with check (user_id = auth.uid());

-- Kandidat: hanya pemilik (tabel penuh berisi kontak). Rekruter memakai view candidate_public.
create policy cp_own on candidate_profiles for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- View pencarian kandidat untuk rekruter: TANPA kontak & atribut sensitif.
-- Berjalan dengan hak pemilik view (melewati RLS tabel) tetapi difilter ketat:
-- hanya profil yang is_public = true dan hanya bila pemanggil adalah recruiter/admin.
create view candidate_public as
  select cp.user_id, p.display_name, cp.headline, cp.jlpt, cp.language_pairs, cp.fields, cp.roles,
         cp.years_experience, cp.city, cp.work_modes, cp.portfolio
  from candidate_profiles cp join profiles p on p.id = cp.user_id
  where cp.is_public = true and app_role() in ('recruiter','admin');
revoke all on candidate_public from anon;
grant select on candidate_public to authenticated;

-- Lowongan: publik baca yang published; pemilik kelola; admin verifikasi
create policy jobs_read   on jobs for select using (status = 'published' or posted_by = auth.uid() or is_admin());
create policy jobs_insert on jobs for insert with check (app_role() = 'recruiter' and posted_by = auth.uid() and verified = false);
create policy jobs_update on jobs for update using (posted_by = auth.uid() or is_admin());
create policy jobs_delete on jobs for delete using (posted_by = auth.uid() or is_admin());

-- Lamaran: kandidat melihat miliknya; perekrut melihat lamaran ke lowongannya
create policy app_candidate on job_applications for select using (candidate_id = auth.uid());
create policy app_recruiter on job_applications for select using (exists (select 1 from jobs j where j.id = job_id and j.posted_by = auth.uid()));
create policy app_insert    on job_applications for insert with check (candidate_id = auth.uid() and app_role() = 'candidate');
create policy app_stage     on job_applications for update using (exists (select 1 from jobs j where j.id = job_id and j.posted_by = auth.uid()));
create policy app_withdraw  on job_applications for update using (candidate_id = auth.uid());

create policy sj_own on saved_jobs       for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy sc_own on saved_candidates for all using (recruiter_id = auth.uid()) with check (recruiter_id = auth.uid() and app_role() = 'recruiter');

-- Laporan: siapa pun yang login boleh melapor; hanya admin yang membaca & menindak
create policy rep_insert on reports for insert with check (reporter_id = auth.uid());
create policy rep_admin  on reports for all using (is_admin()) with check (is_admin());
