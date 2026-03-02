"use client";

import { cn } from "@/lib/utils";

interface GradientBlobsProps {
  className?: string;
  variant?: "hero" | "section" | "subtle";
}

export function GradientBlobs({
  className,
  variant = "hero",
}: GradientBlobsProps) {
  const sizes = {
    hero: "h-[500px] w-[500px]",
    section: "h-[300px] w-[300px]",
    subtle: "h-[200px] w-[200px]",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute rounded-full opacity-20 blur-3xl",
          "bg-indigo-300",
          "animate-blob",
          sizes[variant],
          variant === "hero" ? "-top-20 -left-20" : "top-0 left-1/4"
        )}
      />

      <div
        className={cn(
          "absolute rounded-full opacity-20 blur-3xl",
          "bg-terracotta-300",
          "animate-blob animation-delay-2000",
          sizes[variant],
          variant === "hero" ? "top-1/3 right-0" : "top-1/2 right-1/4"
        )}
      />

      <div
        className={cn(
          "absolute rounded-full opacity-15 blur-3xl",
          "bg-sand-200",
          "animate-blob animation-delay-4000",
          sizes[variant],
          variant === "hero"
            ? "bottom-0 left-1/3"
            : "bottom-1/4 left-1/2"
        )}
      />
    </div>
  );
}
