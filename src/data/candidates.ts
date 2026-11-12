import type { CandidateProfile } from "@/lib/types";

/** Profil kandidat FIKTIF. Data kontak sengaja TIDAK disimpan di sini;
 *  di produksi kontak hanya dibuka untuk rekruter setelah kandidat menyetujui. */
export const CANDIDATES: CandidateProfile[] = [
  {
    id: "cand-001", displayName: "Andi P.", headline: "Interpreter manufaktur · 4 tahun di lini otomotif",
    jlpt: "N2", languagePairs: ["Jepang ⇄ Indonesia"], fields: ["Manufaktur", "Otomotif"],
    roles: ["interpreter", "translator"], yearsExperience: 4, city: "Bekasi", workModes: ["on-site", "hybrid"],
    portfolio: [{ title: "Terjemahan SOP mesin press", description: "120 halaman SOP & check sheet maintenance JP→ID." }],
    isPublic: true,
  },
  {
    id: "cand-002", displayName: "Sari W.", headline: "Translator teknis IT & lokalisasi aplikasi",
    jlpt: "N3", languagePairs: ["Jepang → Indonesia", "Inggris → Indonesia"], fields: ["IT"],
    roles: ["translator", "localization"], yearsExperience: 2, city: "Yogyakarta", workModes: ["remote"],
    portfolio: [{ title: "Lokalisasi aplikasi kasir", description: "String UI & dokumentasi pengguna, ±8.000 kata." }],
    isPublic: true,
  },
  {
    id: "cand-003", displayName: "Rudi H.", headline: "Fresh graduate Sastra Jepang · minat pariwisata",
    jlpt: null, languagePairs: ["Jepang ⇄ Indonesia"], fields: ["Pariwisata", "Bisnis"],
    roles: ["japanese-speaker", "liaison"], yearsExperience: 0, city: "Denpasar", workModes: ["on-site", "hybrid"],
    portfolio: [{ title: "Magang pemandu wisata", description: "3 bulan memandu tamu Jepang di Ubud." }],
    isPublic: false,
  },
];
