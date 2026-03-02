"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/lib/i18n/routing";
import { NEDANZA_MAIN_SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowLeft, LogIn, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ACADEMY_SECTIONS = [
  { id: "introductie", label: "Over de Academie" },
  { id: "systeemtherapie", label: "Systeemtherapie" },
  { id: "exodus-model", label: "Exodus Model" },
  { id: "contactuele-therapie", label: "Contactuele Therapie" },
  { id: "toelating", label: "Toelating" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/images/logo_cut.png"
                alt="Nedanza Academie"
                width={140}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <span className="hidden sm:block text-border">|</span>
            <a
              href={NEDANZA_MAIN_SITE}
              className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Nedanza
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {ACADEMY_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={sectionHref(section.id)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-secondary/50"
              >
                {section.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <a
              href="https://nedanza-portaal.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary p-2 lg:px-4 lg:py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 hover:shadow-md"
            >
              <LogIn className="h-4 w-4" />
              <span className="hidden lg:inline">Inloggen</span>
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-foreground/80 hover:bg-secondary/50 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-card shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border p-4">
                  <span className="font-serif text-lg font-semibold text-foreground">
                    Nedanza Academie
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg p-2 text-muted-foreground hover:bg-secondary/50"
                    aria-label="Sluit menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <nav className="space-y-1">
                    {ACADEMY_SECTIONS.map((section) => (
                      <a
                        key={section.id}
                        href={sectionHref(section.id)}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary/50"
                      >
                        {section.label}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="border-t border-border p-4 space-y-3">
                  <a
                    href="https://nedanza-portaal.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <LogIn className="h-4 w-4" />
                    Inloggen
                  </a>
                  <a
                    href={NEDANZA_MAIN_SITE}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Terug naar Nedanza
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
