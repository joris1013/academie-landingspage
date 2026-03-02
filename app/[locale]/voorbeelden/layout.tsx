import type { Metadata } from "next";

const BASE_URL = "https://academie.nedanza.nl";

const pageMetadata: Record<string, { title: string; description: string }> = {
  nl: {
    title: "Kleurenpaletten",
    description:
      "Bekijk de kleurenpaletten en visuele stijl van de Nedanza Academie website. Voorbeelden van kleurenschema's en design tokens.",
  },
  en: {
    title: "Color Palettes",
    description:
      "Explore the color palettes and visual style of the Nedanza Academy website. Examples of color schemes and design tokens.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = pageMetadata[locale] ?? pageMetadata.nl;
  const localePath = locale === "nl" ? "" : `/${locale}`;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Nedanza Academie`,
      description: meta.description,
      url: `${BASE_URL}${localePath}/voorbeelden`,
    },
    alternates: {
      canonical: `${BASE_URL}${localePath}/voorbeelden`,
      languages: {
        nl: `${BASE_URL}/voorbeelden`,
        en: `${BASE_URL}/en/voorbeelden`,
        "x-default": `${BASE_URL}/voorbeelden`,
      },
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function VoorbeeldenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
