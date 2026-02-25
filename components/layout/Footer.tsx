"use client";

import { CONTACT_INFO, NEDANZA_MAIN_SITE } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
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
              Het opleidings- en verdiepingscentrum van Nedanza Psychologen
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_INFO.email}
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {year} Nedanza Academie. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
