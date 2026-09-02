import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hasanbasheer.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = [
    "",
    "#about",
    "#expertise",
    "#projects",
    "#experience",
    "#ai-lab",
    "#currently-building",
    "#content",
    "#contact",
  ];
  return sections.map((s) => ({
    url: `${siteUrl}/${s}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s === "" ? 1 : 0.6,
  }));
}
