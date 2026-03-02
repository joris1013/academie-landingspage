import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/voorbeelden", "/en/voorbeelden"],
      },
    ],
    sitemap: "https://academie.nedanza.nl/sitemap.xml",
  };
}
