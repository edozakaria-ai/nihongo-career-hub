import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const PUBLIC_ROUTES = ["", "/kanji", "/kotoba", "/bunpou", "/dokkai", "/latihan", "/career", "/login", "/register"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PUBLIC_ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
