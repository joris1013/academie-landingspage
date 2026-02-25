"use client";

import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/animations/TextReveal";
import { GradientBlobs } from "@/components/animations/GradientBlobs";
import { SectionReveal } from "@/components/animations/SectionReveal";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  headingLevel?: "h1" | "h2";
}

export function PageHeader({ title, description, className, headingLevel = "h1" }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pb-12 pt-32 sm:pb-16 sm:pt-40",
        className
      )}
    >
      <GradientBlobs variant="section" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <TextReveal
          text={title}
          as={headingLevel}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        />
        {description && (
          <SectionReveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {description}
            </p>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
