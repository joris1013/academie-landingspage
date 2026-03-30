import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "../globals.css";

const BASE_URL = "https://academie.nedanza.nl";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const siteMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
  nl: {
    title: "Nedanza Academie",
    description:
      "Het opleidings- en verdiepingscentrum van Nedanza Psychologen. Opleidingen in systemische hulpverlening, contactuele therapie en het Exodus Model.",
    keywords: [
      "Nedanza Academie",
      "systeemtherapie opleiding",
      "systemische hulpverlening",
      "contactuele therapie",
      "Exodus Model",
      "GGZ opleiding",
      "psychotherapie opleiding",
      "post-master opleiding GGZ",
      "opleiding behandelaren",
      "Nedanza Psychologen",
    ],
  },
  en: {
    title: "Nedanza Academy",
    description:
      "The training and development center of Nedanza Psychologen. Courses in systemic therapy, contactual therapy and the Exodus Model.",
    keywords: [
      "Nedanza Academy",
      "systemic therapy training",
      "systemic counseling",
      "contactual therapy",
      "Exodus Model",
      "mental health training",
      "psychotherapy training",
      "post-master training",
      "practitioner training",
      "Nedanza Psychologen",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = siteMetadata[locale] ?? siteMetadata.nl;
  const localePath = locale === "nl" ? "" : `/${locale}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: meta.title,
      template: `%s | ${meta.title}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    icons: {
      icon: "/images/fav.png",
    },
    openGraph: {
      type: "website",
      siteName: meta.title,
      locale: locale === "nl" ? "nl_NL" : "en_US",
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}${localePath}`,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/og-image.png"],
    },
    alternates: {
      canonical: `${BASE_URL}${localePath}`,
      languages: {
        nl: `${BASE_URL}`,
        en: `${BASE_URL}/en`,
        "x-default": `${BASE_URL}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "color-scheme": "light only",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "nl" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Nedanza Academie",
    alternateName: "Nedanza Academy",
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    description:
      locale === "nl"
        ? siteMetadata.nl.description
        : siteMetadata.en.description,
    telephone: "(085) 303 29 39",
    email: "secretariaat@nedanza.nl",
    parentOrganization: {
      "@type": "Organization",
      name: "Nedanza Psychologen",
      url: "https://nedanza.nl",
    },
    sameAs: ["https://nedanza.nl"],
    inLanguage: [locale === "nl" ? "nl-NL" : "en-US"],
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
      style={{ colorScheme: "light only" }}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <JsonLd data={organizationJsonLd} />
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
