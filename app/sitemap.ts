import type { MetadataRoute } from "next";

const BASE_URL = "https://academie.nedanza.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["nl", "en"] as const;

  const routes: {
    path: string;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  }[] = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/opleidingen", changeFrequency: "monthly", priority: 0.8 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      const localePath = locale === "nl" ? "" : `/${locale}`;
      entries.push({
        url: `${BASE_URL}${localePath}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            nl: `${BASE_URL}${route.path}`,
            en: `${BASE_URL}/en${route.path}`,
          },
        },
      });
    }
  }

  return entries;
}
