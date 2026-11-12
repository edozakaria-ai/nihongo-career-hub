export default function Loading() {
  return (
    <div className="container py-12" role="status" aria-live="polite">
      <span className="sr-only">Memuat halaman…</span>
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-1/3 rounded-lg bg-surface-muted" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-32 rounded-card bg-surface-muted" />
          ))}
        </div>
      </div>
    </div>
  );
}
