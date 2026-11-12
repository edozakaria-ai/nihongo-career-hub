import type { Metadata } from "next";
import { SITE } from "./constants";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

/** Helper metadata per halaman (SEO + Open Graph + canonical). */
export function pageMetadata({ title, description, path, noIndex }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: path,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE.name}`, description },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
