import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";
import { JsonLd } from "@/components/seo/JsonLd";

const BASE_URL = "https://academie.nedanza.nl";

const pageMetadata: Record<string, { title: string; description: string }> = {
  nl: {
    title: "Welkom bij de Nedanza Academie",
    description:
      "Nedanza Academie: opleidingen in systemische hulpverlening, het Exodus Model en contactuele therapie. Voor behandelaren in de GGZ die zich willen verdiepen.",
  },
  en: {
    title: "Welcome to the Nedanza Academy",
    description:
      "Nedanza Academy: training in systemic therapy, the Exodus Model and contactual therapy. For mental health practitioners seeking advanced development.",
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
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}${localePath}`,
    },
    alternates: {
      canonical: `${BASE_URL}${localePath}`,
      languages: {
        nl: BASE_URL,
        en: `${BASE_URL}/en`,
        "x-default": BASE_URL,
      },
    },
  };
}

const coursesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Opleidingen Nedanza Academie",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Vervolgmodule Systemische Hulpverlening",
        description:
          "Opleiding in systemische hulpverlening: leren denken en handelen vanuit samenhang, patronen en loyaliteiten in relaties.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Nedanza Academie",
          url: BASE_URL,
        },
        inLanguage: "nl",
        url: `${BASE_URL}/#systeemtherapie`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Opleiding Exodus Model",
        description:
          "Het Exodus Model beschrijft hoe mensen in gesloten systemen manieren ontwikkelen om te blijven bestaan en hoe beweging mogelijk wordt.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Nedanza Academie",
          url: BASE_URL,
        },
        inLanguage: "nl",
        url: `${BASE_URL}/#exodus-model`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Contactuele Therapie",
        description:
          "Opleiding in contactuele therapie: vertrouwd geraken met de eigen binnenwereld en jezelf als instrument leren gebruiken.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Nedanza Academie",
          url: BASE_URL,
        },
        inLanguage: "nl",
        url: `${BASE_URL}/#contactuele-therapie`,
      },
    },
  ],
};

export default function AcademiePage() {
  return (
    <>
      <JsonLd data={coursesJsonLd} />
      <HomeContent />
    </>
  );
}
