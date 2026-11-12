import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { GRAMMAR, KANJI, READINGS } from "@/data";

const PUBLIC_ROUTES = ["", "/kanji", "/kotoba", "/bunpou", "/dokkai", "/latihan", "/career", "/login", "/register"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = PUBLIC_ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
  const detail = (paths: string[]): MetadataRoute.Sitemap =>
    paths.map((path) => ({ url: `${SITE.url}${path}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 }));

  return [
    ...staticRoutes,
    ...detail(KANJI.map((k) => `/kanji/${k.id}`)),
    ...detail(GRAMMAR.map((g) => `/bunpou/${g.slug}`)),
    ...detail(READINGS.map((r) => `/dokkai/${r.slug}`)),
  ];
}
