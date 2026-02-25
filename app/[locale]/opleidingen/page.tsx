import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { PageTransition } from "@/components/animations/PageTransition";
import { CTABanner } from "@/components/shared/CTABanner";
import { GraduationCap, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opleidingen",
};

export default function OpleidingenPage() {
  const t = useTranslations("academie");
  const tCommon = useTranslations("common");

  return (
    <PageTransition>
      <PageHeader title={t("courses.title")} description={t("intro")} />

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="group rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h2 className="mb-3 font-serif text-2xl font-bold text-card-foreground">
                {t("courses.systemicTherapy.title")}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("courses.systemicTherapy.description")}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 hover:shadow-md"
              >
                <ExternalLink className="h-4 w-4" />
                Academie Portaal
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <CTABanner
        title={tCommon("contactUs")}
        primaryCta={{ label: tCommon("contactUs"), href: "/" }}
      />
    </PageTransition>
  );
}
