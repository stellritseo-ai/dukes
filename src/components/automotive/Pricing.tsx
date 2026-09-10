import { useState } from "react";
import {
  Check,
  ArrowRight,
  Sparkles,
  Clock,
  Car,
  Truck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const packages = [
  {
    tier: "01",
    name: "True Shine",
    category: "Express Preservation",
    tagline: "Essential gloss and interior freshness for routine maintenance.",
    duration: "~1.5 – 2.0 hrs",
    prices: [75, 100, 120],
    features: [
      "Distinctive scratch-free hand wash",
      "De-dust & clean wheels & calipers",
      "Interior UV wipe-down & full vacuum",
      "Crystal streak-free glass cleaning",
      "Satin non-sling tire shine dress",
    ],
  },
  {
    tier: "02",
    name: "Sigmate",
    category: "Deep Protection",
    tagline: "Enhanced surface shield with premium carnauba hand sealant.",
    duration: "~2.5 – 3.0 hrs",
    prices: [190, 235, 280],
    features: [
      "Distinctive hand wash & deep wheel debarment",
      "Brazilian carnauba hand wax application",
      "Complete interior condition & protectant",
      "Crystal glass clarity & deep tire conditioning",
      "Door jambs & trunk seal detail",
    ],
  },
  {
    tier: "03",
    name: "Panache",
    category: "Polish & Gloss Refresh",
    tagline: "Surface decontamination and single-pass machine gloss enhancement.",
    duration: "~3.5 – 4.5 hrs",
    prices: [220, 270, 320],
    features: [
      "Fine-grade clay bar decontamination",
      "Single-stage machine paint polish",
      "Synthetic high-gloss polymer sealant",
      "Complete interior deep refresh & UV shield",
      "Exhaust tip polish & satin trim dress",
    ],
    featured: true,
    badge: "Most Requested",
  },
  {
    tier: "04",
    name: "Steam Clean",
    category: "Clinical Sanitization",
    tagline: "Hospital-grade interior sterilization targeting bacteria and stains.",
    duration: "~4.0 – 5.0 hrs",
    prices: [300, 340, 370],
    features: [
      "220°F pressurized steam interior injection",
      "Deep extraction & dry foam upholstery shampoo",
      "Leather hide gentle cleanse & matte seal",
      "Air vent bacterial purge & odor neutralization",
      "Full exterior deionized hand wash",
    ],
    badge: "Deep Interior",
  },
  {
    tier: "05",
    name: "Luxurious",
    category: "Master Concours Detail",
    tagline: "Our premier comprehensive paint correction and ceramic protection.",
    duration: "~6.0 – 8.0 hrs",
    prices: [450, 520, 580],
    features: [
      "Multi-stage chemical iron fallout decontam",
      "Full one-step paint defect correction",
      "6-month hydrophobic ceramic paint shield",
      "Deep surgical interior leather restoration",
      "Ceramic wheel face & windshield treatment",
    ],
    badge: "Concours Grade",
  },
];

export function Pricing() {
  const [vehicle, setVehicle] = useState(0);

  const vehicleClasses = [
    {
      label: "Sedan / Coupe",
      type: "Car",
      hint: "Standard Chassis",
      icon: Car,
    },
    {
      label: "Mid-Size SUV / 2D Truck",
      type: "2D Truck/SUV",
      hint: "Mid-Size Vehicle",
      icon: Truck,
    },
    {
      label: "Full-Size SUV / 4D Truck",
      type: "4D Truck/SUV",
      hint: "Large / 3-Row / Exotic",
      icon: Car,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-background py-[60px]"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Ambient luxury lighting accents */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[480px] w-[500px] -translate-x-1/2 rounded-full bg-primary/6 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-500/5 blur-[150px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10">
        {/* Section Header & Vehicle Class Switcher */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="eyebrow mb-4">
              <span />
              <span>SERVICE PACKAGES & INVESTMENT</span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-[38px] lg:text-[42px] leading-[1.15]">
              Calibrated Packages for{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Every Standard of Perfection.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Transparent, upfront investment rates for mobile care at your private residence, corporate office, or hangar. All treatments include 100% deionized spot-free water and laboratory-grade chemistry.
            </p>
          </div>

          {/* Interactive Vehicle Switcher */}
          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Select Vehicle Class
            </span>
            <div
              className="inline-flex rounded-2xl border border-border/80 bg-card/90 p-1.5 shadow-xs backdrop-blur-md"
              role="group"
              aria-label="Vehicle type selector"
            >
              {vehicleClasses.map((item, i) => {
                const Icon = item.icon;
                const isActive = vehicle === i;
                return (
                  <button
                    key={item.type}
                    type="button"
                    onClick={() => setVehicle(i)}
                    className={cn(
                      "group relative flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 cursor-pointer",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-raised/60"
                    )}
                  >
                    <Icon className={cn("size-3.5", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")} />
                    <span className="hidden sm:inline">{item.label}</span>
                    <span className="sm:hidden">{item.type}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE VIEW ONLY: Infinite Sliding Cards Marquee (< md) */}
        <div className="relative -mx-4 sm:-mx-6 overflow-hidden md:hidden">
          {/* Edge gradient vignettes for smooth aesthetic boundary */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-8 xs:w-12 bg-gradient-to-r from-background to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-8 xs:w-12 bg-gradient-to-l from-background to-transparent"
            aria-hidden="true"
          />

          <div className="marquee-container py-3">
            <div className="animate-marquee flex items-stretch gap-4 px-4 hover:[animation-play-state:paused] active:[animation-play-state:paused]">
              {[...packages, ...packages].map((pkg, idx) => {
                const isFeatured = pkg.featured;
                const currentPrice = pkg.prices[vehicle];

                return (
                  <article
                    key={`mobile-${pkg.name}-${idx}`}
                    className={cn(
                      "group relative flex w-[280px] xs:w-[310px] shrink-0 flex-col rounded-3xl border transition-all duration-300 p-5",
                      isFeatured
                        ? "border-primary/80 bg-gradient-to-b from-primary/10 via-card to-card shadow-lg shadow-primary/10 ring-1 ring-primary/40"
                        : "border-border/80 bg-card/75 backdrop-blur-md"
                    )}
                  >
                    {/* Popular / Concours Badge */}
                    {pkg.badge && (
                      <div className="absolute -top-3 right-5">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[9.5px] font-black uppercase tracking-wider shadow-xs",
                            isFeatured
                              ? "bg-primary text-primary-foreground"
                              : "border border-border bg-surface-raised text-foreground"
                          )}
                        >
                          {isFeatured && <Sparkles className="size-2.5" />}
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    {/* Card Top: Tier and Duration */}
                    <div className="flex items-center justify-between border-b border-border/50 pb-3.5">
                      <span className="rounded-md border border-border/70 bg-surface/70 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-primary">
                        Tier {pkg.tier}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                        <Clock className="size-3 text-muted-foreground/80" />
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Package Name & Tagline */}
                    <div className="mt-3.5">
                      <h3 className="text-lg font-extrabold text-foreground transition-colors group-hover:text-primary">
                        {pkg.name}
                      </h3>
                      <p className="text-[10.5px] font-semibold text-primary/90 mt-0.5">
                        {pkg.category}
                      </p>
                      <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted-foreground min-h-[34px]">
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Price Display */}
                    <div className="my-4 rounded-2xl border border-border/60 bg-surface/50 p-3.5 transition-colors group-hover:border-primary/30">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-primary">USD</span>
                        <span className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
                          ${currentPrice}
                        </span>
                        <span className="ml-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                          starting
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[10.5px] text-muted-foreground">
                        <Zap className="size-3 text-emerald-400" />
                        <span>Rate for {vehicleClasses[vehicle].type}</span>
                      </div>
                    </div>

                    {/* Treatment Checklist */}
                    <ul className="mb-5 flex-1 space-y-2 border-t border-border/50 pt-3.5">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[11.5px] text-foreground/90 leading-snug"
                        >
                          <div className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                            <Check className="size-2 stroke-[2.5]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action CTA */}
                    <Button
                      variant={isFeatured ? "hero" : "glass"}
                      className={cn(
                        "mt-auto h-10 w-full rounded-xl text-xs font-bold transition-all duration-200",
                        isFeatured
                          ? "shadow-premium hover:scale-[1.02]"
                          : "hover:bg-primary/10 hover:border-primary/40 hover:text-primary"
                      )}
                      asChild
                    >
                      <a href="#free-estimate">
                        <span>Reserve {pkg.name}</span>
                        <ArrowRight className="size-3.5" />
                      </a>
                    </Button>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Micro hint for mobile user interaction */}
          <div className="mt-2.5 flex items-center justify-center gap-2 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/80 px-3 py-1 text-[10.5px] font-medium text-muted-foreground shadow-2xs backdrop-blur-md">
              <Sparkles className="size-2.5 text-primary" />
              <span>Auto-sliding • Tap or hold any card to pause</span>
            </span>
          </div>
        </div>

        {/* 5-Tier Luxury Pricing Grid - DESKTOP & TABLET VIEW (md+) */}
        <div className="hidden md:grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {packages.map((pkg) => {
            const isFeatured = pkg.featured;
            const currentPrice = pkg.prices[vehicle];

            return (
              <article
                key={pkg.name}
                className={cn(
                  "group relative flex flex-col rounded-3xl border transition-all duration-300 p-6",
                  isFeatured
                    ? "border-primary/80 bg-gradient-to-b from-primary/10 via-card to-card shadow-lg shadow-primary/10 ring-1 ring-primary/40 -translate-y-1"
                    : "border-border/80 bg-card/75 backdrop-blur-md hover:-translate-y-1 hover:border-border-strong hover:shadow-md"
                )}
              >
                {/* Popular / Concours Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3 right-6">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-xs",
                        isFeatured
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-surface-raised text-foreground"
                      )}
                    >
                      {isFeatured && <Sparkles className="size-2.5" />}
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Card Top: Tier and Duration */}
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                  <span className="rounded-md border border-border/70 bg-surface/70 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-primary">
                    Tier {pkg.tier}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                    <Clock className="size-3 text-muted-foreground/80" />
                    {pkg.duration}
                  </span>
                </div>

                {/* Package Name & Tagline */}
                <div className="mt-4">
                  <h3 className="text-xl font-extrabold text-foreground transition-colors group-hover:text-primary">
                    {pkg.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-primary/90 mt-0.5">
                    {pkg.category}
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground min-h-[36px]">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="my-5 rounded-2xl border border-border/60 bg-surface/50 p-4 transition-colors group-hover:border-primary/30">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-primary">USD</span>
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                      ${currentPrice}
                    </span>
                    <span className="ml-1 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                      starting
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Zap className="size-3 text-emerald-400" />
                    <span>Rate for {vehicleClasses[vehicle].type}</span>
                  </div>
                </div>

                {/* Treatment Checklist */}
                <ul className="mb-6 flex-1 space-y-2.5 border-t border-border/50 pt-4">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-xs text-foreground/90 leading-snug"
                    >
                      <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-2.5 stroke-[2.5]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA */}
                <Button
                  variant={isFeatured ? "hero" : "glass"}
                  className={cn(
                    "mt-auto h-11 w-full rounded-xl text-xs font-bold transition-all duration-200",
                    isFeatured
                      ? "shadow-premium hover:scale-[1.02]"
                      : "hover:bg-primary/10 hover:border-primary/40 hover:text-primary"
                  )}
                  asChild
                >
                  <a href="#free-estimate">
                    <span>Reserve {pkg.name}</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </Button>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
