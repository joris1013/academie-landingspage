"use client";

import { useState } from "react";
import { GraduationCap, ArrowRight, Check } from "lucide-react";

const palettes = [
  {
    id: "navy",
    name: "Koninklijk Navy",
    description:
      "Diep navy met gouden accenten. Prestigieus, academisch en tijdloos. Straalt autoriteit en vertrouwen uit.",
    tag: "Donker",
    colors: {
      background: "#0B1D32",
      foreground: "#E8E0D3",
      primary: "#C9A84C",
      primaryForeground: "#0B1D32",
      card: "#122740",
      cardForeground: "#E8E0D3",
      secondary: "#162D48",
      muted: "#1A3352",
      mutedForeground: "#8BA0B8",
      accent: "#C9A84C",
      border: "#1E3A56",
    },
    swatches: [
      { label: "Navy", hex: "#0B1D32" },
      { label: "Deep Navy", hex: "#122740" },
      { label: "Steel Blue", hex: "#1E3A56" },
      { label: "Gold", hex: "#C9A84C" },
      { label: "Warm Cream", hex: "#E8E0D3" },
      { label: "Soft Blue", hex: "#8BA0B8" },
    ],
  },
  {
    id: "bordeaux",
    name: "Donker Bordeaux",
    description:
      "Warm donker palet met bordeaux en koper. Intiem, verfijnd en introspectief. Past bij de therapeutische sfeer.",
    tag: "Donker",
    colors: {
      background: "#1A1215",
      foreground: "#EDE4DB",
      primary: "#A04858",
      primaryForeground: "#F2E8E0",
      card: "#241A1E",
      cardForeground: "#EDE4DB",
      secondary: "#2C2024",
      muted: "#322529",
      mutedForeground: "#B09098",
      accent: "#C08B6E",
      border: "#3D2C33",
    },
    swatches: [
      { label: "Charcoal", hex: "#1A1215" },
      { label: "Dark Wine", hex: "#241A1E" },
      { label: "Bordeaux", hex: "#A04858" },
      { label: "Koper", hex: "#C08B6E" },
      { label: "Dusty Rose", hex: "#B09098" },
      { label: "Warm Ivory", hex: "#EDE4DB" },
    ],
  },
  {
    id: "smaragd",
    name: "Middernacht Smaragd",
    description:
      "Diep bosgroen met antiek goud. Geeft een gevoel van wijsheid, groei en verankering. Klassiek en rustgevend donker palet.",
    tag: "Donker",
    colors: {
      background: "#0D1510",
      foreground: "#E4E0D8",
      primary: "#4A8B6F",
      primaryForeground: "#0D1510",
      card: "#152018",
      cardForeground: "#E4E0D8",
      secondary: "#1A2A20",
      muted: "#1E3028",
      mutedForeground: "#8A9E90",
      accent: "#C9AB6A",
      border: "#253D30",
    },
    swatches: [
      { label: "Forest", hex: "#0D1510" },
      { label: "Deep Moss", hex: "#152018" },
      { label: "Smaragd", hex: "#4A8B6F" },
      { label: "Antiek Goud", hex: "#C9AB6A" },
      { label: "Sage Mist", hex: "#8A9E90" },
      { label: "Perkament", hex: "#E4E0D8" },
    ],
  },
  {
    id: "ivoor",
    name: "Zacht Ivoor & Teal",
    description:
      "Licht en rustgevend met diepe teal en karamel-accenten. Fris, open en uitnodigend. Compleet anders dan het huidige sage-thema.",
    tag: "Licht",
    colors: {
      background: "#F5F1EB",
      foreground: "#2C3338",
      primary: "#3D7A7A",
      primaryForeground: "#F5F1EB",
      card: "#FFFFFF",
      cardForeground: "#2C3338",
      secondary: "#EBE5DC",
      muted: "#EFE9E0",
      mutedForeground: "#6B7A80",
      accent: "#B8926A",
      border: "#DDD6CB",
    },
    swatches: [
      { label: "Ivoor", hex: "#F5F1EB" },
      { label: "Wit", hex: "#FFFFFF" },
      { label: "Teal", hex: "#3D7A7A" },
      { label: "Karamel", hex: "#B8926A" },
      { label: "Slate", hex: "#6B7A80" },
      { label: "Donker Slate", hex: "#2C3338" },
    ],
  },
  {
    id: "linnen",
    name: "Warm Linnen & Aubergine",
    description:
      "Warm linnenwit met diep aubergine-paars en zacht roze. Verfijnd, vrouwelijk en intellectueel. Straalt warmte en diepgang uit.",
    tag: "Licht",
    colors: {
      background: "#F3ECE2",
      foreground: "#2C2433",
      primary: "#6E4B7A",
      primaryForeground: "#F3ECE2",
      card: "#FFFDF8",
      cardForeground: "#2C2433",
      secondary: "#EAE2D6",
      muted: "#EDE5DA",
      mutedForeground: "#8B7B92",
      accent: "#C89A82",
      border: "#DED4C8",
    },
    swatches: [
      { label: "Linnen", hex: "#F3ECE2" },
      { label: "Crème Wit", hex: "#FFFDF8" },
      { label: "Aubergine", hex: "#6E4B7A" },
      { label: "Dusty Peach", hex: "#C89A82" },
      { label: "Lavendel Grijs", hex: "#8B7B92" },
      { label: "Diep Plum", hex: "#2C2433" },
    ],
  },
  {
    id: "zandkust",
    name: "Zandkust & Indigo",
    description:
      "Zandkleurig licht met krachtig indigo-blauw en terracotta. Helder, rustig en professioneel. Balanceert warmte met autoriteit.",
    tag: "Licht",
    colors: {
      background: "#F6F2EB",
      foreground: "#1E2438",
      primary: "#3F5289",
      primaryForeground: "#F6F2EB",
      card: "#FFFFFF",
      cardForeground: "#1E2438",
      secondary: "#ECE7DE",
      muted: "#F0EBE2",
      mutedForeground: "#7A8090",
      accent: "#C47A5A",
      border: "#E0D9CF",
    },
    swatches: [
      { label: "Zand", hex: "#F6F2EB" },
      { label: "Wit", hex: "#FFFFFF" },
      { label: "Indigo", hex: "#3F5289" },
      { label: "Terracotta", hex: "#C47A5A" },
      { label: "Cool Grijs", hex: "#7A8090" },
      { label: "Nacht Blauw", hex: "#1E2438" },
    ],
  },
];

export default function VoorbeeldenPage() {
  const [active, setActive] = useState(0);
  const p = palettes[active];
  const c = p.colors;

  return (
    <div className="min-h-screen bg-background pb-16 pt-28 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 text-center sm:mb-12">
          <h1 className="font-serif text-2xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Kleurenpaletten
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-lg">
            Zes luxueuze, professionele kleurencombinaties voor de Nedanza
            Academie. Klik op een palet om de hero-preview te zien.
          </p>
        </div>

        {/* Palette selector — compact 3-col on mobile */}
        <div className="mb-4 grid grid-cols-3 gap-2 sm:mb-10 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {palettes.map((pal, i) => (
            <button
              key={pal.id}
              onClick={() => setActive(i)}
              className={`group relative flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-center transition-all sm:flex-row sm:gap-3 sm:px-5 sm:py-4 sm:text-left ${
                active === i
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
              }`}
            >
              <div className="flex -space-x-1.5 sm:-space-x-1">
                {pal.swatches.slice(0, 4).map((sw, swIdx) => (
                  <div
                    key={sw.hex}
                    className={`h-4 w-4 rounded-full border-[1.5px] border-white sm:h-6 sm:w-6 sm:border-2 ${swIdx === 3 ? "hidden sm:block" : ""}`}
                    style={{ backgroundColor: sw.hex }}
                  />
                ))}
              </div>
              <div className="min-w-0">
                <p className="truncate text-[10px] font-semibold leading-tight text-foreground sm:text-sm">
                  {pal.name}
                </p>
                <span
                  className={`text-[9px] font-medium sm:text-xs ${
                    pal.tag === "Donker"
                      ? "text-muted-foreground"
                      : "text-primary"
                  }`}
                >
                  {pal.tag}
                </span>
              </div>
              {active === i && (
                <Check className="absolute right-1.5 top-1.5 h-3 w-3 text-primary sm:static sm:ml-auto sm:h-4 sm:w-4" />
              )}
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="mb-4 text-center sm:mb-8">
          <p className="mx-auto max-w-xl text-xs text-muted-foreground sm:text-base">
            {p.description}
          </p>
        </div>

        {/* Swatches */}
        <div className="mx-auto mb-6 flex max-w-2xl flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
          {p.swatches.map((sw) => (
            <div key={sw.hex} className="flex flex-col items-center gap-1">
              <div
                className="h-10 w-10 rounded-lg border border-border/40 shadow-sm sm:h-14 sm:w-14 sm:rounded-xl"
                style={{ backgroundColor: sw.hex }}
              />
              <span className="text-[9px] font-medium text-muted-foreground sm:text-[11px]">
                {sw.label}
              </span>
              <span className="font-mono text-[8px] text-muted-foreground/70 sm:text-[10px]">
                {sw.hex}
              </span>
            </div>
          ))}
        </div>

        {/* Hero preview — scaled on mobile to keep desktop ratio */}
        <div className="overflow-hidden rounded-xl border border-border/50 shadow-2xl sm:rounded-2xl">
          <div
            className="origin-top-left transition-colors duration-500 sm:!transform-none"
            style={{ backgroundColor: c.background }}
          >
            {/* Simulated navbar */}
            <div
              className="flex items-center justify-between border-b px-4 py-2.5 sm:px-6 sm:py-4 lg:px-10"
              style={{ borderColor: c.border }}
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <GraduationCap
                  className="h-3.5 w-3.5 sm:h-5 sm:w-5"
                  style={{ color: c.primary }}
                />
                <span
                  className="font-serif text-xs font-bold sm:text-lg"
                  style={{ color: c.foreground }}
                >
                  Nedanza Academie
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-6">
                {["Over", "Opleidingen", "Toelating", "Contact"].map(
                  (item) => (
                    <span
                      key={item}
                      className="hidden text-sm sm:inline"
                      style={{ color: c.mutedForeground }}
                    >
                      {item}
                    </span>
                  )
                )}
                <span
                  className="rounded-md px-2.5 py-1 text-[10px] font-medium sm:rounded-lg sm:px-4 sm:py-2 sm:text-sm"
                  style={{
                    backgroundColor: c.primary,
                    color: c.primaryForeground,
                  }}
                >
                  Inloggen
                </span>
              </div>
            </div>

            {/* Hero section */}
            <div className="relative px-4 py-10 text-center sm:px-6 sm:py-20 lg:px-10 lg:py-28">
              <div
                className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full opacity-20 blur-3xl sm:h-64 sm:w-64"
                style={{ backgroundColor: c.primary }}
              />
              <div
                className="absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full opacity-10 blur-3xl sm:h-48 sm:w-48"
                style={{ backgroundColor: c.accent }}
              />

              <div className="relative z-10">
                <div
                  className="mb-3 inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 sm:mb-6 sm:gap-2 sm:rounded-2xl sm:px-4 sm:py-2"
                  style={{
                    borderColor: c.primary + "33",
                    backgroundColor: c.primary + "15",
                  }}
                >
                  <GraduationCap
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    style={{ color: c.primary }}
                  />
                  <span
                    className="text-[10px] font-medium sm:text-sm"
                    style={{ color: c.primary }}
                  >
                    Nedanza Academie
                  </span>
                </div>

                <h2
                  className="mx-auto max-w-3xl font-serif text-xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                  style={{ color: c.foreground }}
                >
                  Welkom bij de Nedanza Academie
                </h2>

                <p
                  className="mx-auto mt-3 max-w-xl text-xs sm:mt-6 sm:text-lg"
                  style={{ color: c.mutedForeground }}
                >
                  Het opleidings- en verdiepingscentrum van Nedanza Psychologen
                </p>

                <div className="mt-5 flex items-center justify-center gap-2 sm:mt-10 sm:flex-row sm:gap-4">
                  <span
                    className="inline-flex cursor-default items-center gap-1.5 rounded-md px-3 py-2 text-[10px] font-medium shadow-lg sm:gap-2 sm:rounded-lg sm:px-6 sm:py-3 sm:text-sm"
                    style={{
                      backgroundColor: c.primary,
                      color: c.primaryForeground,
                    }}
                  >
                    Inloggen
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </span>
                  <span
                    className="inline-flex cursor-default items-center gap-1.5 rounded-md border px-3 py-2 text-[10px] font-medium sm:gap-2 sm:rounded-lg sm:px-6 sm:py-3 sm:text-sm"
                    style={{
                      borderColor: c.border,
                      color: c.foreground,
                    }}
                  >
                    Meer informatie
                  </span>
                </div>
              </div>
            </div>

            {/* Preview cards row */}
            <div
              className="border-t px-4 py-6 sm:px-6 sm:py-12 lg:px-10"
              style={{ borderColor: c.border }}
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { title: "Systemische Hulpverlening", sub: "De context" },
                  { title: "Exodus Model", sub: "De beweging" },
                  { title: "Contactuele Therapie", sub: "De ontmoeting" },
                ].map((mod) => (
                  <div
                    key={mod.title}
                    className="rounded-lg border p-3 transition-all sm:rounded-xl sm:p-5"
                    style={{
                      borderColor: c.border,
                      backgroundColor: c.card,
                    }}
                  >
                    <div
                      className="mb-2 inline-flex rounded-md p-1.5 sm:mb-3 sm:rounded-lg sm:p-2"
                      style={{ backgroundColor: c.primary + "20" }}
                    >
                      <GraduationCap
                        className="h-3.5 w-3.5 sm:h-5 sm:w-5"
                        style={{ color: c.primary }}
                      />
                    </div>
                    <h3
                      className="font-serif text-[10px] font-bold leading-tight sm:text-base"
                      style={{ color: c.cardForeground }}
                    >
                      {mod.title}
                    </h3>
                    <p
                      className="mt-0.5 font-serif text-[9px] italic sm:mt-1 sm:text-sm"
                      style={{ color: c.mutedForeground }}
                    >
                      {mod.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview accent block */}
            <div className="px-4 pb-6 sm:px-6 sm:pb-12 lg:px-10">
              <div
                className="rounded-lg border p-4 sm:rounded-xl sm:p-8"
                style={{
                  borderColor: c.primary + "30",
                  backgroundColor: c.primary + "0D",
                }}
              >
                <p
                  className="font-serif text-xs italic leading-relaxed sm:text-lg"
                  style={{ color: c.foreground + "CC" }}
                >
                  &ldquo;De Nedanza Academie is een plek om te vertragen, te
                  verdiepen en te leren zien &mdash; in jezelf, in de ander en in
                  wat zich tussen beiden ontvouwt.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CSS variable output */}
        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-border/50 bg-card p-4 sm:mt-12 sm:p-6">
          <h3 className="mb-3 font-serif text-sm font-bold text-foreground sm:mb-4 sm:text-lg">
            CSS Variabelen &mdash; {p.name}
          </h3>
          <pre className="overflow-x-auto rounded-lg bg-secondary/50 p-3 text-[10px] leading-relaxed text-muted-foreground sm:p-4 sm:text-xs">
            {`:root {
  /* ${p.name} */
${p.swatches.map((sw) => `  /* ${sw.label}: ${sw.hex} */`).join("\n")}
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
