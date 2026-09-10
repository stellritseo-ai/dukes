import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock,
  Droplets,
  Gauge,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import ceramicShieldImg from "@/assets/services/ceramic-shield.jpg";
import foamWashImg from "@/assets/services/foam-wash.jpg";
import interiorSteamImg from "@/assets/services/interior-steam.jpg";
import machinePolishImg from "@/assets/services/machine-polish.jpg";
import signatureDetailImg from "@/assets/services/signature-detail.jpg";
import wheelGlassImg from "@/assets/services/wheel-glass.jpg";
import { Button } from "@/components/ui/button";

export interface ServiceItem {
  id: string;
  title: string;
  category: "all" | "correction" | "protection" | "interior";
  categoryLabel: string;
  badge: string;
  tier: string;
  text: string;
  specs: string[];
  image: string;
  icon: typeof Sparkles;
}

export const services: ServiceItem[] = [
  {
    id: "machine-polish",
    title: "Multi-Stage Machine Polish",
    category: "correction",
    categoryLabel: "Paint Correction",
    badge: "95%+ Swirl Eradication",
    tier: "Stage 1 & 2 Polish",
    text: "Dual-action rotary machine polish that removes oxidized hazing, micro-scratches, and buffer trails without thinning delicate OEM clear coats.",
    specs: [
      "High-lumen LED swirl & defect diagnostic inspection",
      "Clay bar decontamination & chemical iron fallout purge",
      "Ultra-refining micro-abrasive jewel finishing polish",
    ],
    image: machinePolishImg,
    icon: Sparkles,
  },
  {
    id: "ceramic-shield",
    title: "Concours Ceramic & Quartz Shield",
    category: "protection",
    categoryLabel: "Ceramic Coating",
    badge: "9H Hardness Matrix",
    tier: "3 to 5 Year Protection",
    text: "Nanotech quartz coating bonding molecularly to paintwork, wheels, and calipers for extreme hydrophobicity and multi-year environmental defense.",
    specs: [
      "Multi-year clear coat warranty coverage guarantee",
      "Defends against UV oxidation, acid rain & bird etching",
      "Liquid candy mirror gloss & self-cleaning surface effect",
    ],
    image: ceramicShieldImg,
    icon: Shield,
  },
  {
    id: "deionized-wash",
    title: "Deionized Spot-Free Hydro Wash",
    category: "correction",
    categoryLabel: "Exterior Wash",
    badge: "0 PPM Filtered Water",
    tier: "Zero Mineral Spots",
    text: "Gentle high-lubricity foam soak paired with aerospace-grade deionized water filtration, guaranteeing zero mineral spots under direct sunlight.",
    specs: [
      "Touchless pre-wash dirt encapsulation foam bath",
      "Two-bucket grit guard gentle microfiber hand wash",
      "Heated filtered air dry in all body crevices and badges",
    ],
    image: foamWashImg,
    icon: Droplets,
  },
  {
    id: "interior-steam",
    title: "Interior Leather Restoration & Steam",
    category: "interior",
    categoryLabel: "Interior Detail",
    badge: "220°F Thermal Vapor",
    tier: "Sterile Cabin Prep",
    text: "Surgical detailing of cockpits, delicate aniline leathers, Alcantara, and carbon weave using pressurized dry vapor steam extraction.",
    specs: [
      "pH-balanced European leather nourishment and matte finish",
      "Crevice air purging & deep fabric fiber extraction",
      "Hospital-grade allergen, bacteria & odor neutralization",
    ],
    image: interiorSteamImg,
    icon: Award,
  },
  {
    id: "wheel-glass",
    title: "Wheel Decon & Satin Dressing",
    category: "correction",
    categoryLabel: "Wheels & Glass",
    badge: "Non-Sling Satin Finish",
    tier: "Iron Dissolution",
    text: "Deep barrel iron and brake-dust chemical dissolution, calipers detailing, streak-free optical glass, and UV tire nourishment.",
    specs: [
      "pH-neutral wheel face & barrel iron fallout purge",
      "Optically clear streak-free exterior & interior glass clarity",
      "Dry-to-the-touch satin UV tire nourishment barrier",
    ],
    image: wheelGlassImg,
    icon: Zap,
  },
  {
    id: "signature-detail",
    title: "The Duke Signature Concours Detail",
    category: "protection",
    categoryLabel: "Full Concours Experience",
    badge: "Complete Transformation",
    tier: "Master Full-Day Detail",
    text: "Our flagship comprehensive rejuvenation: full exterior paint correction and ceramic prep paired with bespoke surgical interior restoration.",
    specs: [
      "Full exterior machine polish & ceramic paint coating",
      "Bespoke leather restoration & 220°F steam sanitization",
      "Engine bay aesthetic detail & certificate of completion",
    ],
    image: signatureDetailImg,
    icon: Gauge,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-surface/45 py-[60px]"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Subtle luxury ambient lighting accents */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 h-[380px] w-[380px] rounded-full bg-sky-500/5 blur-[130px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="eyebrow">
              <span />
              <span>OUR EXCLUSIVE TREATMENTS</span>
            </div>

            {/* Live Mobile Fleet Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-3.5 py-1.5 text-xs font-bold text-foreground shadow-xs backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>Mobile Fleet Active Across Metro</span>
              <span className="hidden text-muted-foreground/60 sm:inline">•</span>
              <span className="hidden text-[11px] font-normal text-muted-foreground sm:inline">
                100% Self-Contained
              </span>
            </div>
          </div>

          <h2 className="mt-0 -mb-[9px] text-2xl sm:text-[34px] md:text-[41px] font-extrabold tracking-tight text-foreground leading-tight sm:whitespace-nowrap">
            Precision Disciplines for{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
              Showroom Perfection.
            </span>
          </h2>

          <p className="mt-4 mb-6 sm:mb-8 lg:-mb-[35px] max-w-3xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            Six disciplined mobile detailing treatments engineered for exotic, luxury, and vintage automobiles. Formulated with laboratory-grade chemistry and safe for OEM factory clear coats, soft paints, and matte finishes.
          </p>
        </div>

        {/* 6 Luxury Service Bento Cards Grid */}
        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group relative flex flex-col overflow-hidden rounded-[2.25rem] border border-border/80 bg-card p-2 sm:p-2.5 shadow-[0_15px_40px_-15px_rgba(15,23,42,0.08)] ring-1 ring-border/40 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_28px_70px_-12px_rgba(37,99,235,0.18)]"
              >
                {/* Upper Media Canvas with Custom High-Definition Imagery */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] bg-slate-950">
                  <img
                    src={service.image}
                    width={1200}
                    height={900}
                    loading="lazy"
                    alt={`${service.title} by Grand Duke Automotive`}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Gradient Vignette for Text Contrast */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35" />

                  {/* Top Left Category Pill */}
                  <div className="absolute left-3.5 top-3.5 z-10 inline-flex items-center rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {service.categoryLabel}
                  </div>

                  {/* Top Right Sequence Order Pill */}
                  <div className="absolute right-3.5 top-3.5 z-10 inline-flex items-center rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] font-mono font-extrabold text-white backdrop-blur-md">
                    0{index + 1}
                  </div>

                  {/* Bottom Floating Value Pill on Image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10.5px] font-bold text-white shadow-md backdrop-blur-md">
                      <Sparkles className="size-3 text-primary-bright" />
                      <span>{service.badge}</span>
                    </span>
                  </div>
                </div>

                {/* Card Lower Body */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 pt-3">
                  {/* Floating Icon Badge Overlapping Seam */}
                  <div className="-mt-8 mb-3 flex size-12 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-md ring-4 ring-card transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="mt-2 min-h-[3.5rem] text-xs sm:text-[13px] leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>

                  {/* Technical Specifications Checklist */}
                  <ul className="mt-4 space-y-2 border-t border-border/60 pt-3.5 text-[11.5px] text-muted-foreground/90">
                    {service.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 shrink-0 text-emerald-500 mt-0.5" />
                        <span className="leading-snug">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link & Duration Tier Footer */}
                  <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
                      <Clock className="size-3 text-primary" />
                      <span>{service.tier}</span>
                    </div>

                    <a
                      href="#free-estimate"
                      className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-foreground"
                    >
                      <span>Book Treatment</span>
                      <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Concierge Assurance Ribbon */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-border/80 bg-card p-6 sm:p-8 shadow-[0_15px_45px_-10px_rgba(15,23,42,0.06)] ring-1 ring-border/40 backdrop-blur-md lg:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center text-xs font-semibold text-muted-foreground lg:justify-start lg:text-left">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary">
                <Droplets className="size-4.5" />
              </div>
              <div>
                <b className="block text-foreground leading-tight text-xs sm:text-sm">100% Deionized Water</b>
                <span className="text-[11px] text-muted-foreground">0 PPM pure mineral filtration</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary">
                <Zap className="size-4.5" />
              </div>
              <div>
                <b className="block text-foreground leading-tight text-xs sm:text-sm">Autonomous Mobile Lab</b>
                <span className="text-[11px] text-muted-foreground">Silent onboard power supply</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary">
                <Shield className="size-4.5" />
              </div>
              <div>
                <b className="block text-foreground leading-tight text-xs sm:text-sm">$2M Fully Insured</b>
                <span className="text-[11px] text-muted-foreground">Exotic & supercar certified</span>
              </div>
            </div>
          </div>

          {/* Quick Concierge CTA Button */}
          <div className="flex items-center gap-3">
            <Button
              variant="hero"
              className="h-11 rounded-full px-6 text-xs sm:text-[13px] font-bold shadow-premium transition-all duration-200 hover:scale-[1.02]"
              asChild
            >
              <a href="#free-estimate">
                <CalendarDays className="size-3.5" />
                <span>Reserve Your Appointment</span>
                <ArrowRight className="size-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
