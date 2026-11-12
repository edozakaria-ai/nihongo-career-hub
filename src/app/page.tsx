import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { LevelPicker } from "@/components/home/LevelPicker";
import { ModuleGrid } from "@/components/home/ModuleGrid";
import { ProgressOverview } from "@/components/home/ProgressOverview";
import { DailyWord } from "@/components/home/DailyWord";
import { LatestJobs } from "@/components/home/LatestJobs";
import { DEMO_PROGRESS, JOBS, VOCABULARY } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { pickDaily } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Beranda",
  description: "Belajar kanji, kotoba, bunpou, dan dokkai JLPT N5–N2 dalam Bahasa Indonesia, lalu temukan lowongan penerjemah & interpreter bahasa Jepang.",
  path: "/",
});

// Regenerasi tiap jam agar "kosakata harian" & lowongan tetap segar
export const revalidate = 3600;

export default function HomePage() {
  const dailyWord = pickDaily(VOCABULARY);
  const latestJobs = [...JOBS].sort((a, b) => b.postedAt.localeCompare(a.postedAt)).slice(0, 3);

  return (
    <>
      <Hero />
      <ProgressOverview progress={DEMO_PROGRESS} />
      <LevelPicker />
      <ModuleGrid progress={DEMO_PROGRESS} />
      <div className="container grid gap-8 py-10 lg:grid-cols-2">
        <DailyWord word={dailyWord} />
        <LatestJobs jobs={latestJobs} />
      </div>
    </>
  );
}
