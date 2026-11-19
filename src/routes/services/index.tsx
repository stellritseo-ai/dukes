import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock,
  Compass,
  Crown,
  Droplets,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wind,
  Zap,
} from "lucide-react";
import { Header } from "@/components/automotive/Header";
import { Footer } from "@/components/automotive/Footer";
import { MobileCTA } from "@/components/automotive/MobileCTA";
import { TrustStrip } from "@/components/automotive/TrustStrip";
import { PageBreadcrumb } from "@/components/automotive/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { galleryPhotos } from "@/data/galleryImages";
import machinePolishImg from "@/assets/services/machine-polish.jpg";
import ceramicShieldImg from "@/assets/services/ceramic-shield.jpg";
import foamWashImg from "@/assets/services/foam-wash.jpg";
import interiorSteamImg from "@/assets/services/interior-steam.jpg";
import wheelGlassImg from "@/assets/services/wheel-glass.jpg";
import signatureDetailImg from "@/assets/services/signature-detail.jpg";

const description =
  "Explore the 6 exclusive automotive detailing disciplines by Grand Duke Automotive: Multi-stage paint correction, 9H liquid quartz ceramic coatings, deionized hydro washes, interior steam restoration, and concours transformations.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title:
          "Concours Detailing Services & Disciplines | Grand Duke Automotive",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "luxury car detailing services, paint correction, ceramic coating, leather restoration, wheel detailing, concierge mobile detailing, Grand Duke Automotive",
      },
      { property: "og:title", content: "Concours Detailing Services | Grand Duke Automotive" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
  }),
  component: ServicesIndexPage,
});

const serviceDisciplines = [
  {
    id: "machine-polish",
    slug: "machine-polish",
    title: "Multi-Stage Machine Polish",
    category: "Paint Correction & Clarity",
    badge: "95%+ Swirl Eradication",
    tier: "Stage 1 & 2 Polish",
    desc: "Dual-action rotary machine polish engineered to eliminate microscopic clear-coat defects, swirl marks, bird acid etching, and buffer trails without compromising factory clear coat thickness.",
    specs: [
      "High-lumen 6500K LED defect diagnostic analysis",
      "Clay bar surface decon & iron fallout chemical purge",
      "Micro-abrasive jeweling polish for candy reflection",
    ],
    image: machinePolishImg,
    icon: Sparkles,
    accent: "text-amber-400 bg-amber-400/10 border-amber-400/25",
    link: "/services/machine-polish",
  },
  {
    id: "ceramic-shield",
    slug: "ceramic-shield",
    title: "Concours Ceramic & Quartz Shield",
    category: "Long-Term Paint Protection",
    badge: "9H Liquid Quartz Matrix",
    tier: "3 to 5 Year Protection",
    desc: "Nanoscale SiO2 and TiO2 liquid quartz coating bonding molecularly to exterior painted surfaces, wheels, and glass for supreme hydrophobic water beading and permanent UV shield defense.",
    specs: [
      "Multi-year clear coat warranty documentation",
      "Immunity to acid rain, road salts & bird etching",
      "Permanent high-tension hydrophobic self-cleaning effect",
    ],
    image: ceramicShieldImg,
    icon: ShieldCheck,
    accent: "text-cyan-400 bg-cyan-400/10 border-cyan-400/25",
    link: "/services/ceramic-shield",
  },
  {
    id: "deionized-wash",
    slug: "deionized-wash",
    title: "Deionized Spot-Free Hydro Wash",
    category: "Exterior Maintenance & Preservation",
    badge: "0 PPM Filtered Water",
    tier: "Zero Mineral Spots",
    desc: "Gentle high-lubricity foam bath paired with laboratory-grade deionized water filtration (0 PPM Total Dissolved Solids), guaranteeing zero water spotting under direct sun exposure.",
    specs: [
      "Touchless pre-wash dirt encapsulation foam bath",
      "Dual-bucket grit-guard microfiber hand wash",
      "Heated filtered air dry across body gaps & badges",
    ],
    image: foamWashImg,
    icon: Droplets,
    accent: "text-sky-400 bg-sky-400/10 border-sky-400/25",
    link: "/services/deionized-wash",
  },
  {
    id: "interior-steam",
    slug: "interior-steam",
    title: "Interior Leather Restoration & Steam",
    category: "Cabin Revival & Sanitization",
    badge: "220°F Thermal Vapor",
    tier: "Sterile Cabin Protocol",
    desc: "Surgical detailing of automotive cockpits, aniline and semi-aniline leathers, Alcantara weaves, and carbon fiber consoles using pressurized dry vapor steam extraction and pH-balanced nourishment.",
    specs: [
      "pH-balanced European leather matte nourishment",
      "Deep fiber steam extraction for carpet & headliners",
      "Hospital-grade allergen, bacteria & odor neutralization",
    ],
    image: interiorSteamImg,
    icon: Wind,
    accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
    link: "/services/interior-steam",
  },
  {
    id: "wheel-glass",
    slug: "wheel-glass",
    title: "Wheel Decon & Satin Dressing",
    category: "Running Gear & Optical Clarity",
    badge: "Iron Fallout Dissolution",
    tier: "Wheel & Caliper Detail",
    desc: "Intensive chemical dissolution of embedded metallic brake dust in wheel barrels and face spokes, caliper scrubbing, streak-free optical glass clarity, and dry-touch satin UV tire hydration.",
    specs: [
      "pH-neutral brake dust chemical reaction & purge",
      "Optically clear interior & exterior glass clarity",
      "Zero-sling satin tire barrier preventing brown bloom",
    ],
    image: wheelGlassImg,
    icon: CircleDot,
    accent: "text-indigo-400 bg-indigo-400/10 border-indigo-400/25",
    link: "/services/wheel-glass",
  },
  {
    id: "signature-detail",
    slug: "signature-detail",
    title: "The Duke Signature Concours Detail",
    category: "Flagship Full-Day Experience",
    badge: "Complete Studio Transformation",
    tier: "Master Concours Treatment",
    desc: "Our master-grade flagship experience: comprehensive multi-stage exterior paint correction, premium ceramic quartz application, bespoke interior leather rejuvenation, and engine bay finishing.",
    specs: [
      "Full multi-stage paint correction & ceramic coating",
      "Bespoke leather restoration & 220°F steam sanitization",
      "Engine bay aesthetic detailing & certificate of mastery",
    ],
    image: signatureDetailImg,
    icon: Crown,
    accent: "text-amber-400 bg-amber-400/15 border-amber-400/30",
    link: "/services/signature-detail",
  },
];

function ServicesIndexPage() {
  const curatedShowcase = galleryPhotos.slice(0, 8);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      <Header />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: BRODCOME (BREADCRUMB & HERO SERVICES HUB BANNER)               */}
        {/* ========================================================================= */}
        <section
          id="brodcome"
          aria-label="Brodcome Navigation & Services Exhibition Hero"
          className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-blue-900/40 bg-gradient-to-b from-[#060b18] via-[#091430] to-[#040814] text-slate-100"
        >
          {/* High-Gloss Luxury Automotive Background Image with Dramatic Overlays */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/hood-reflection.jpg"
              alt="Grand Duke automotive mirror clear coat reflection"
              className="h-full w-full object-cover object-center scale-105 opacity-35"
            />
            {/* Cinematic Multilayer Lighting & Scrim Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#060b18]/92 via-[#091430]/80 to-[#040814]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060b18] via-transparent to-[#060b18]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
            {/* Subtle Luminous Blueprint Carbon Mesh */}
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:36px_36px]" />
          </div>

          {/* Radiant Top Multi-Color Gradient Beam */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 via-primary via-cyan-400 to-transparent"
            aria-hidden="true"
          />

          {/* Ambient Spectrum Glow Orbs */}
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/25 via-primary/20 to-cyan-400/20 blur-[160px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]"
            aria-hidden="true"
          />

          <div className="site-shell relative z-10">
            {/* Premium Floating Breadcrumb Capsule Pill */}
            <PageBreadcrumb currentPage="Services & Disciplines" />

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              {/* Eyebrow Status Ribbon */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-cyan-300 backdrop-blur-md shadow-xs mb-4">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>6 BESPOKE AUTOMOTIVE DISCIPLINES • 17+ YEARS CRAFTSMANSHIP</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12] text-center">
                Concours Detailing &amp;{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Surface Disciplines
                </span>
              </h1>

              {/* Anthem Tagline with Sapphire Gradient */}
              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent text-center">
                Calibrated Chemistry. Surgical Craftsmanship. Showroom Perfection.
              </div>

              {/* Narrative Paragraph */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium max-w-3xl mx-auto text-center">
                Grand Duke Automotive provides an uncompromised standard of vehicle care. Each treatment is tailored to the exact chemistry of your automobile's factory clear coat, interior aniline leathers, and alloy surfaces. Available inside our HEPA-filtered studio or via our mobile concierge fleet across a 300-mile corridor.
              </p>

              {/* Quality Guarantee Pill */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>100% Laboratory-Grade Products • HEPA Cleanroom Studio • Fully Certified & Insured</span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Button
                  variant="hero"
                  className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-[0_0_25px_rgba(37,99,235,0.4)] tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
                  asChild
                >
                  <a href="/book">
                    <CalendarDays className="size-4" />
                    <span>Book Your Detail</span>
                    <ArrowRight className="size-4" />
                  </a>
                </Button>

                <Button
                  variant="glass"
                  className="h-12 rounded-full px-7 text-xs sm:text-sm font-bold text-white border-white/20 bg-white/10 hover:bg-white/20"
                  asChild
                >
                  <a href="/free-estimate">
                    <Sparkles className="size-4 text-cyan-400" />
                    <span>Request Free Estimate</span>
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>

                <a
                  href="tel:64687967732"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-black/60 px-6 text-xs sm:text-sm font-bold text-white shadow-xs transition-all duration-200 hover:border-cyan-400 hover:text-cyan-300"
                >
                  <Phone className="size-3.5 text-cyan-400" />
                  <span>Call: 6468 796 7732</span>
                </a>
              </div>
            </div>

            {/* 4-Card Luxury KPI Stats Deck */}
            <div className="mt-14 grid gap-4 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {[
                {
                  value: "6",
                  label: "Disciplined Services",
                  sub: "Dedicated master treatment programs",
                  icon: Sparkles,
                  color: "text-cyan-400",
                },
                {
                  value: "17+ Yrs",
                  label: "Master Experience",
                  sub: "Certified master artisans",
                  icon: Award,
                  color: "text-amber-400",
                },
                {
                  value: "99%",
                  label: "Defect Elimination",
                  sub: "Micro-swirl & scratch removal",
                  icon: ShieldCheck,
                  color: "text-emerald-400",
                },
                {
                  value: "300 Mi",
                  label: "Concierge Radius",
                  sub: "Studio & mobile detailing units",
                  icon: Compass,
                  color: "text-sky-400",
                },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-5 sm:p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.1] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className={cn("text-2xl sm:text-3xl font-black tracking-tight", stat.color)}>
                        {stat.value}
                      </div>
                      <div className="flex size-9 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-slate-300">
                        <Icon className="size-4 text-cyan-400" />
                      </div>
                    </div>
                    <div className="mt-2 text-xs sm:text-sm font-extrabold text-white">
                      {stat.label}
                    </div>
                    <div className="mt-0.5 text-[11px] text-slate-300 font-medium">
                      {stat.sub}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: 6 DEDICATED DISCIPLINES SHOWCASE CARDS                         */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <div className="eyebrow mb-3 justify-center">
                <span />
                <span>EXCLUSIVELY CRAFTED DISCIPLINES</span>
                <span />
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Engineered for{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Discerning Collectors & Enthusiasts
                </span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Click any discipline below to view the dedicated breakdown, scientific chemistry, master process steps, and verified project gallery.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {serviceDisciplines.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.id}
                    className="group relative flex flex-col overflow-hidden rounded-[2.25rem] border border-border/80 bg-card p-3 shadow-lg ring-1 ring-border/40 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl"
                  >
                    {/* Media Canvas */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] bg-slate-950">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />

                      <div className="absolute left-3.5 top-3.5 z-10 inline-flex items-center rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                        {service.category}
                      </div>

                      <div className="absolute right-3.5 top-3.5 z-10 inline-flex items-center rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[10px] font-mono font-extrabold text-white backdrop-blur-md">
                        0{idx + 1}
                      </div>

                      <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between">
                        <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] font-extrabold text-white backdrop-blur-md shadow-xs">
                          {service.badge}
                        </span>
                        <span className="text-[11px] font-bold text-slate-200">
                          {service.tier}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={cn("flex size-7 items-center justify-center rounded-lg border", service.accent)}>
                          <Icon className="size-3.5" />
                        </div>
                        <h3 className="text-lg font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted-foreground flex-1">
                        {service.desc}
                      </p>

                      <ul className="mt-4 space-y-1.5 border-t border-border/60 pt-3 text-[11.5px] text-muted-foreground">
                        {service.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Action Bar */}
                      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                        <a
                          href={service.link}
                          className="inline-flex items-center gap-2 text-xs font-extrabold text-primary hover:text-primary/80 transition-colors group/btn"
                        >
                          <span>Explore Dedicated Page</span>
                          <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </a>

                        <a
                          href="/book"
                          className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-surface px-3 py-1.5 text-[11px] font-bold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                        >
                          <span>Book</span>
                          <ChevronRight className="size-3" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: VERIFIED GALLERY SAMPLE EXHIBITION                             */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 bg-surface-raised/40 border-t border-border/80">
          <div className="site-shell relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <div className="eyebrow mb-2">
                  <span />
                  <span>PHOTOGRAPHIC PROOF</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Disciplines in Action
                </h2>
              </div>
              <a
                href="/our-work"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-primary hover:underline"
              >
                <span>View Full 77+ Works Exhibition</span>
                <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {curatedShowcase.map((photo) => (
                <a
                  key={photo.id}
                  href="/our-work"
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/80 bg-slate-950 shadow-md"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: CONSULTATION & BOOKING CTA                                     */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-card via-background to-card border-t border-border/80">
          <div className="site-shell relative z-10 text-center max-w-3xl mx-auto">
            <div className="eyebrow mb-4 justify-center">
              <span />
              <span>CUSTOM VEHICLE ADVICE</span>
              <span />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Not Sure Which Discipline Fits Your Vehicle?
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Our Master Technicians evaluate your paint depth, clear coat hardness, and interior surfaces to prescribe the exact treatment required. No guesswork. No unnecessary upselling.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium" asChild>
                <a href="/book">
                  <CalendarDays className="size-4" />
                  <span>Reserve Your Experience</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="glass" className="h-12 rounded-full px-7 text-xs sm:text-sm font-bold" asChild>
                <a href="/free-estimate">
                  <Sparkles className="size-4 text-primary" />
                  <span>Request Free Estimate</span>
                </a>
              </Button>
              <a
                href="tel:64687967732"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-xs sm:text-sm font-bold text-foreground shadow-xs transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Phone className="size-3.5 text-primary" />
                <span>Call: 6468 796 7732</span>
              </a>
            </div>
          </div>
        </section>

        <TrustStrip />
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
}

