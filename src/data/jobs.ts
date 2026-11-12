import type { Company, Job } from "@/lib/types";

/** Perusahaan & lowongan FIKTIF untuk data contoh. Nama tidak merujuk perusahaan nyata. */
export const COMPANIES: Company[] = [
  { id: "c-sakura-auto", name: "PT Sakura Otomotif Presisi (fiktif)", industry: "Otomotif", city: "Karawang", verified: true },
  { id: "c-hikari-it", name: "Hikari Digital Solutions (fiktif)", industry: "IT & Software", city: "Jakarta", verified: true },
  { id: "c-nusantara-legal", name: "Nusantara–Japan Legal Partners (fiktif)", industry: "Legal", city: "Jakarta", verified: false },
  { id: "c-bali-tabi", name: "Bali Tabi Travel (fiktif)", industry: "Pariwisata", city: "Denpasar", verified: true },
];

const byId = (id: string): Company => {
  const c = COMPANIES.find((x) => x.id === id);
  if (!c) throw new Error(`Company ${id} tidak ditemukan di data contoh`);
  return c;
};

export const JOBS: Job[] = [
  {
    id: "j-001", slug: "interpreter-pabrik-otomotif-karawang",
    title: "Interpreter Pabrik (Produksi & Maintenance)", company: byId("c-sakura-auto"),
    role: "interpreter", minJlpt: "N2", languages: ["Jepang ⇄ Indonesia"], fields: ["Manufaktur", "Otomotif"],
    location: "Karawang, Jawa Barat", workMode: "on-site", employmentType: "full-time",
    salaryMin: 9_000_000, salaryMax: 13_000_000, currency: "IDR", salaryPeriod: "bulan",
    description: "Mendampingi staf Jepang dalam rapat produksi, kaizen, dan troubleshooting mesin di lini perakitan.",
    requirements: ["Pengalaman interpreter di pabrik minimal 1 tahun", "Memahami istilah 5S, QC, dan maintenance", "Bersedia kerja shift jika diperlukan"],
    postedAt: "2026-10-26", verified: true,
  },
  {
    id: "j-002", slug: "translator-dokumen-it-remote",
    title: "Translator Dokumen IT (JP→ID/EN)", company: byId("c-hikari-it"),
    role: "translator", minJlpt: "N3", languages: ["Jepang → Indonesia", "Jepang → Inggris"], fields: ["IT"],
    location: "Jakarta (remote)", workMode: "remote", employmentType: "freelance",
    salaryMin: 150_000, salaryMax: 300_000, currency: "IDR", salaryPeriod: "jam",
    description: "Menerjemahkan spesifikasi sistem, manual pengguna, dan tiket QA untuk proyek offshore.",
    requirements: ["Terbiasa dengan CAT tool", "Teliti terhadap terminologi teknis", "Portofolio terjemahan teknis"],
    postedAt: "2026-10-22", verified: true,
  },
  {
    id: "j-003", slug: "liaison-legal-jakarta",
    title: "Japanese Liaison – Divisi Legal & Perizinan", company: byId("c-nusantara-legal"),
    role: "liaison", minJlpt: "N2", languages: ["Jepang ⇄ Indonesia"], fields: ["Legal", "Bisnis"],
    location: "Jakarta Selatan", workMode: "hybrid", employmentType: "kontrak",
    salaryMin: 12_000_000, salaryMax: 18_000_000, currency: "IDR", salaryPeriod: "bulan",
    description: "Menjadi penghubung klien Jepang dengan tim legal untuk perizinan usaha dan korespondensi kontrak.",
    requirements: ["Latar belakang hukum atau pengalaman dokumen legal", "Komunikasi bisnis sopan (keigo)"],
    postedAt: "2026-10-18", verified: false,
  },
  {
    id: "j-004", slug: "pemandu-wisata-berbahasa-jepang-bali",
    title: "Pemandu Wisata Berbahasa Jepang (Paruh Waktu)", company: byId("c-bali-tabi"),
    role: "japanese-speaker", minJlpt: "N4", languages: ["Jepang ⇄ Indonesia"], fields: ["Pariwisata"],
    location: "Denpasar, Bali", workMode: "on-site", employmentType: "part-time",
    salaryMin: null, salaryMax: null, currency: "IDR", salaryPeriod: "bulan",
    description: "Memandu wisatawan Jepang ke destinasi budaya, menjelaskan sejarah dan etika lokal.",
    requirements: ["Ramah dan komunikatif", "Bersedia bekerja akhir pekan", "Sertifikat JLPT tidak wajib jika lulus tes lisan"],
    postedAt: "2026-10-28", verified: true,
  },
];
