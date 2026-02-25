"use client";

import { SectionReveal } from "@/components/animations/SectionReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { PageTransition } from "@/components/animations/PageTransition";
import { NEDANZA_MAIN_SITE } from "@/lib/constants";
import {
  GraduationCap,
  Users,
  Heart,
  ArrowRight,
  FileText,
  BookOpen,
  CheckCircle,
  Quote,
  LogIn,
} from "lucide-react";

export default function AcademiePage() {
  return (
    <PageTransition>
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mb-6 inline-flex rounded-2xl border border-primary/20 bg-primary/10 px-4 py-2">
              <GraduationCap className="mr-2 h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                Nedanza Academie
              </span>
            </div>
          </SectionReveal>
          <TextReveal
            text="Welkom bij de Nedanza Academie"
            as="h1"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
          />
          <SectionReveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Het opleidings- en verdiepingscentrum van Nedanza Psychologen
            </p>
          </SectionReveal>
          <SectionReveal delay={0.45}>
            <div className="mt-10">
              <a
                href="https://nedanza-academie.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
              >
                <LogIn className="h-4 w-4" />
                Inloggen
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTRODUCTIE
      ═══════════════════════════════════════════ */}
      <section
        id="introductie"
        className="scroll-mt-24 border-t border-border/30 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mb-10 flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Over de Academie
                </h2>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  De Nedanza Academie is het opleidings- en verdiepingscentrum
                  van Nedanza Psychologen. We bieden opleidingen en modules voor
                  mensen die hun werk met anderen en hun verstaan van zichzelf
                  willen verdiepen en verfijnen.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Wij gaan ervan uit dat niemand op zichzelf staat. Ieder mens
                  is gevormd binnen relaties en verbanden zoals gezin en familie,
                  geloof, cultuur en geschiedenis. In deze netwerken ontstaan
                  patronen, loyaliteiten en manieren om staande te blijven.
                  Verandering voltrekt zich daarom niet alleen via inzicht, maar
                  in het contact zelf, in wat zich tussen mensen afstemt, schuurt,
                  zichtbaar wordt of nog verborgen blijft. Vanuit die grondslag
                  verbinden we systemische hulpverlening met contactueel en
                  existentieel georiënteerd werken.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="mt-8 rounded-2xl border border-border/50 bg-card p-8 md:p-10">
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Onze opleidingen zijn ervaringsgericht. Het eigen verhaal en de
                  ingebrachte casuïstiek van deelnemers vormen het hart van het
                  leerproces. We onderzoeken dynamiek en positie, nabijheid en
                  grenzen, spreken en zwijgen. We oefenen in het waarnemen van
                  wat zich aandient in het hier en nu, ook wanneer daar nog geen
                  taal voor is.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Leren betekent hier niet alleen kennis verwerven, maar ook
                  jezelf ontmoeten in je manier van aanwezig zijn. Wie met
                  mensen werkt, werkt altijd vanuit zijn eigen geschiedenis en
                  gevoeligheid. Daarom vraagt onze manier van opleiden
                  betrokkenheid, zelfonderzoek en gezamenlijke reflectie.
                </p>
                <p className="font-serif text-lg italic text-foreground/80">
                  De Nedanza Academie is een plek om te vertragen, te verdiepen
                  en te leren zien &mdash; in jezelf, in de ander en in wat zich
                  tussen beiden ontvouwt.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CURSUSOVERZICHT
      ═══════════════════════════════════════════ */}
      <section className="border-t border-border/30 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground">
              Onze Opleidingen
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Drie procesgerichte modules die samen één samenhangend leerproces
              vormen. Deelnemers kunnen het volledige traject doorlopen of één
              losse module volgen.
            </p>
          </SectionReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Users,
                label: "Module 1",
                title: "Systemische Hulpverlening",
                subtitle: "De context",
                href: "#systeemtherapie",
              },
              {
                icon: ArrowRight,
                label: "Module 2",
                title: "Exodus Model",
                subtitle: "De beweging",
                href: "#exodus-model",
              },
              {
                icon: Heart,
                label: "Module 3",
                title: "Contactuele Therapie",
                subtitle: "De ontmoeting",
                href: "#contactuele-therapie",
              },
            ].map((module, i) => (
              <SectionReveal key={module.href} delay={i * 0.1}>
                <a
                  href={module.href}
                  className="group block rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/15">
                    <module.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {module.label}
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-bold text-foreground">
                    {module.title}
                  </h3>
                  <p className="mt-1 font-serif text-sm italic text-muted-foreground">
                    {module.subtitle}
                  </p>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MODULE 1 – SYSTEMISCHE HULPVERLENING
      ═══════════════════════════════════════════ */}
      <section
        id="systeemtherapie"
        className="scroll-mt-24 border-t border-border/30 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Module 1
                </p>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Vervolgmodule Systemische Hulpverlening
                </h2>
              </div>
            </div>
            <p className="mb-2 font-serif text-xl italic text-muted-foreground">
              De context
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <div className="mb-8 border-l-2 border-primary/30 pl-6">
                <Quote className="mb-3 h-5 w-5 text-primary/50" />
                <p className="font-serif text-lg italic text-foreground/90">
                  &ldquo;Dit boven alles: wees trouw aan jezelf.
                  <br />
                  En daaruit volgt, zoals de dag de nacht,
                  <br />
                  dat je tegenover niemand ontrouw kunt zijn.&rdquo;
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  &mdash; Polonius in <em>Hamlet</em>, Shakespeare
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Systemische hulpverlening begint met het besef dat geen mens
                  losstaat van de systemen waarin hij is grootgebracht. We
                  bewegen ons voortdurend binnen relaties (gezin, partner,
                  familiegeschiedenis, cultuur) en in die relaties ontstaan of
                  verschijnen patronen die we vaak al lang meedragen.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  In deze opleiding nodigen we je uit om niet alleen bij
                  cliënten, maar ook bij jezelf te zien hoe systemen werken. Hoe
                  jij bent gaan doen wat je doet. Hoe je reageert, waar je van
                  wegloopt, waar je op aanslaat, wat je stil maakt en wat je
                  raakt. Zonder bewustzijn van je eigen patronen is de kans groot
                  dat je ze herhaalt, ook in de therapeutische relatie.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Daarom zien we de (persoonlijke) casuïstiek van deelnemers als
                  het belangrijkste leermateriaal. We onderzoeken samen posities,
                  loyaliteiten, geschiedenis en dynamieken… en hoe jij je daarin
                  beweegt. Leren begint met het delen van wat ons heeft gevormd.
                  Vanuit dat vertrekpunt openen we deze syllabus en doen we dat
                  samen: iedereen doet mee.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="mt-6 rounded-2xl border border-border/50 bg-card p-8">
              <p className="mb-4 font-serif text-lg font-semibold text-foreground">
                &ldquo;Zien en horen wat zich tussen mensen voltrekt.&rdquo;
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Deelnemers leren denken en handelen vanuit samenhang: hoe
                patronen en loyaliteiten zich in relaties herhalen, en wat nodig
                is om daar taal aan te geven en het gesprek te openen. De
                opleiding verbindt systemisch inzicht met persoonlijke reflectie,
                en leert je aanwezig te blijven binnen een complexe omgeving.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MODULE 2 – EXODUS MODEL
      ═══════════════════════════════════════════ */}
      <section
        id="exodus-model"
        className="scroll-mt-24 border-t border-border/30 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <ArrowRight className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Module 2
                </p>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Opleiding Exodus Model
                </h2>
              </div>
            </div>
            <p className="mb-2 font-serif text-xl italic text-muted-foreground">
              De beweging
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <div className="mb-8 border-l-2 border-primary/30 pl-6">
                <Quote className="mb-3 h-5 w-5 text-primary/50" />
                <p className="font-serif text-lg italic text-foreground/90">
                  &ldquo;Als je in beweging komt, doe je altijd iemand anders
                  pijn.&rdquo;
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  &mdash; Pir Vilayat Khan,{" "}
                  <em>
                    Spirituele dimensies van counseling en therapie
                  </em>{" "}
                  (2024)
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Het Exodus Model is ontstaan uit de vraag wat er met een mens
                  gebeurt wanneer het systeem waarin hij leeft geen ruimte meer
                  biedt aan zijn bestaan. Systemen (gezinnen, families,
                  organisaties en geloofsgemeenschappen) bieden structuur en
                  verbondenheid, maar kunnen ook een dwingend, gesloten karakter
                  ontwikkelen. In zulke contexten verdwijnt niet zelden de
                  mogelijkheid om vragen te stellen, gevoelens te verwoorden of
                  een eigen positie in te nemen.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Het Exodus Model beschrijft hoe mensen in dergelijke systemen
                  manieren ontwikkelen om te blijven bestaan: door zich te
                  vereenzelvigen met de heersende overtuiging, door innerlijk of
                  openlijk in verzet te gaan, of door zich terug te trekken in
                  een woordeloos bestaan. Deze posities zijn reacties op een
                  omgeving die beweging wantrouwt en afwijking sanctioneert.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Deze opleiding richt zich op het begeleiden van mensen voor wie
                  het blijven zijn dragende betekenis heeft verloren, terwijl het
                  verlaten van het vertrouwde gepaard gaat met angst, schuld en
                  verlies. Niet elke relatie laat zich herstellen en niet elk
                  systeem is te hervormen. Soms vraagt psychisch herstel niet om
                  verdere aanpassing, maar om het verdragen van de vraag of
                  blijven nog wel mogelijk is, of dat een uitgang zich aandient.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  De opleiding nodigt deelnemers uit om het Exodus Model te
                  verkennen als therapeutisch kader en als persoonlijke
                  ervaringsruimte. Het gaat daarbij niet om het aanreiken van
                  oplossingen, maar om het ontwikkelen van een houding waarin
                  nabijheid, taal en betekenis opnieuw mogelijk worden op plekken
                  waar deze zijn verdwenen.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="mt-6 rounded-2xl border border-border/50 bg-card p-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                Deelnemers onderzoeken de innerlijke en relationele beweging van
                verbondenheid naar vrijheid in een bewust geworden
                onthechtingsproces.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MODULE 3 – CONTACTUELE THERAPIE
      ═══════════════════════════════════════════ */}
      <section
        id="contactuele-therapie"
        className="scroll-mt-24 border-t border-border/30 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Module 3
                </p>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Contactuele Therapie
                </h2>
              </div>
            </div>
            <p className="mb-2 font-serif text-xl italic text-muted-foreground">
              De ontmoeting
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <p className="mb-6 font-serif text-lg font-semibold text-foreground">
                &ldquo;Waar verandering begint: in echt contact.&rdquo;
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                De opleiding nodigt uit om vertrouwd te geraken met de eigen
                binnenwereld en jezelf als instrument te leren gebruiken.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TOELATING EN AANNAMEBELEID
      ═══════════════════════════════════════════ */}
      <section
        id="toelating"
        className="scroll-mt-24 border-t border-border/30 py-16 sm:py-20 pb-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Toelating en aannamebeleid
              </h2>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-8 rounded-2xl border border-border/50 bg-card p-8">
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                De drie opleidingen vormen samen één cyclische beweging: leren
                door ontmoeting, onderzoeken in relatie en durven veranderen.
                Leren bij de Nedanza Academie vraagt daarbij om moed,
                zelfonderzoek en de bereidheid verwarring te verwelkomen als
                begin van iets nieuws.
              </p>

              <div className="space-y-6">
                <div className="rounded-xl bg-secondary/30 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      Vooropleidingseisen
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Afgeronde bachelor- of masteropleiding in een relevant
                    vakgebied.
                  </p>
                </div>

                <div className="rounded-xl bg-secondary/30 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      Aanmelding
                    </h3>
                  </div>
                  <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Aan te leveren: motivatiebrief en cv.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Na beoordeling kan een kandidaat worden uitgenodigd voor
                      één of meerdere gesprekken.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl bg-secondary/30 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      Materiaal
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Deelnemers ontvangen tijdens de opleiding ondersteunend
                    materiaal, zoals syllabi en aanvullende literatuur. Deze
                    worden niet openbaar gedeeld via de website, maar zijn
                    beschikbaar via de portal als intern opleidingsmateriaal.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <section className="border-t border-border/30 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Interesse in een van onze opleidingen?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Neem contact met ons op voor meer informatie over toelating,
                data en inhoud van de modules.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={`${NEDANZA_MAIN_SITE}/contact`}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50"
                >
                  Neem contact op
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://nedanza-academie.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
                >
                  <LogIn className="h-4 w-4" />
                  Inloggen
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
