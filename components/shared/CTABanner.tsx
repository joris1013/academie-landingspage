"use client";

import { cn } from "@/lib/utils";
import { Link } from "@/lib/i18n/routing";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { GradientBlobs } from "@/components/animations/GradientBlobs";

interface CTABannerProps {
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function CTABanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 sm:py-28",
        className
      )}
    >
      <GradientBlobs variant="section" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <TextReveal
          text={title}
          as="h2"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        />

        {description && (
          <SectionReveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              {description}
            </p>
          </SectionReveal>
        )}

        <SectionReveal delay={0.4}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:shadow-md"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
