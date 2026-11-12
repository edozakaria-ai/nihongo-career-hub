import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container py-16 text-center">
      <p className="text-6xl font-extrabold text-brand-500">404</p>
      <h1 className="mt-3 text-2xl font-extrabold text-ink">Halaman tidak ditemukan</h1>
      <p lang="ja" className="mt-1 font-jp text-ink-muted">ページが見つかりません</p>
      <p className="mt-2 text-ink-muted">Tautan mungkin salah atau halaman sudah dipindahkan.</p>
      <ButtonLink href="/" className="mt-6">Kembali ke Beranda</ButtonLink>
    </div>
  );
}
