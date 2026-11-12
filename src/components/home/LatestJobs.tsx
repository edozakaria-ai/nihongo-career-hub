import Link from "next/link";
import type { Job } from "@/lib/types";
import { ROLE_LABEL } from "@/lib/constants";
import { formatSalary, timeAgo } from "@/lib/utils";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const WORK_MODE: Record<Job["workMode"], string> = { remote: "Remote", hybrid: "Hybrid", "on-site": "On-site" };
const EMPLOYMENT: Record<Job["employmentType"], string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  freelance: "Freelance",
  kontrak: "Kontrak",
};

export function LatestJobs({ jobs }: { jobs: Job[] }) {
  return (
    <section aria-labelledby="jobs-title">
      <SectionHeading id="jobs-title" title="Lowongan Terbaru" jp="求人" action={{ href: "/career", label: "Lihat semua" }} />
      {jobs.length === 0 ? (
        <p className="rounded-card border border-dashed border-line p-6 text-center text-sm text-ink-muted">
          Belum ada lowongan baru. Coba lagi nanti.
        </p>
      ) : (
        <ul className="space-y-3">
          {jobs.map((job) => (
            <li key={job.id}>
              <article className="rounded-card border border-line bg-surface p-4 shadow-card transition hover:border-brand-300">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-bold text-ink">
                      <Link href={`/career`} className="hover:text-brand-600 focus-visible:outline-none focus-visible:underline">
                        {job.title}
                      </Link>
                    </h3>
                    <p className="truncate text-sm text-ink-muted">
                      {job.company.name} · {job.location}
                    </p>
                  </div>
                  {job.minJlpt ? <LevelBadge level={job.minJlpt} /> : <Badge>JLPT opsional</Badge>}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Badge tone="brand">{ROLE_LABEL[job.role]}</Badge>
                  <Badge>{EMPLOYMENT[job.employmentType]}</Badge>
                  <Badge>{WORK_MODE[job.workMode]}</Badge>
                  {job.verified ? (
                    <Badge tone="success">✓ Terverifikasi</Badge>
                  ) : (
                    <Badge tone="warning">⚠ Belum diverifikasi</Badge>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="font-semibold text-brand-600 dark:text-brand-300">
                    {formatSalary(job.salaryMin, job.salaryMax, job.currency, job.salaryPeriod)}
                  </span>
                  <time dateTime={job.postedAt} className="text-xs text-ink-muted">{timeAgo(job.postedAt)}</time>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
