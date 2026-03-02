"use client";

import { CONTACT_INFO, NEDANZA_MAIN_SITE } from "@/lib/constants";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer aria-label="Website footer" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Nedanza Psychologen"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_INFO.email}
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 grid grid-cols-3 items-center border-t border-border pt-8">
          <p className="text-left text-xs text-muted-foreground">
            {t("footer.copyright", { year: year.toString() })}
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.jmwebsites.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 transition-all hover:border-foreground/20 hover:bg-foreground/10"
            >
              <Image
                src="/images/Footer_jmwebsitesicon/icon.svg"
                alt="JM Websites"
                width={18}
                height={18}
                className="rounded-[4px]"
              />
              <span className="text-xs text-muted-foreground/60">
                {t("footer.madeBy")}{" "}
                <span className="font-medium text-muted-foreground">
                  JM Websites
                </span>
              </span>
            </a>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-foreground/20 hover:bg-foreground/10"
            >
              <ArrowUp className="h-3 w-3" />
              {t("footer.backToTop")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
