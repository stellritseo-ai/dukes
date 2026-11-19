import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  Eye,
  Layers,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
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

const description =
  "Grand Duke Automotive Multi-Stage Machine Polish: Precision dual-action rotary paint correction removing 95%+ of swirl marks, scratches, and micro-marring while preserving factory clear coats.";

export const Route = createFileRoute("/services/machine-polish")({
  head: () => ({
    meta: [
      {
        title:
          "Multi-Stage Machine Polish & Paint Correction | Grand Duke Automotive",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "multi-stage machine polish, paint correction, swirl mark removal, auto detailing polishing, car paint restoration, luxury car polish, Grand Duke Automotive",
      },
      { property: "og:title", content: "Multi-Stage Machine Polish | Grand Duke Automotive" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/machine-polish" },
    ],
  }),
  component: MachinePolishPage,
});

function MachinePolishPage() {
  // Curate 6 real paint-correction gallery images
  const relatedGallery = galleryPhotos
    .filter((p) => p.category === "paint-correction")
    .slice(0, 6);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      <Header />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: BRODCOME HERO BANNER                                           */}
        {/* ========================================================================= */}
        <section
          id="brodcome"
          aria-label="Brodcome Navigation & Machine Polish Hero"
          className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-blue-900/40 bg-gradient-to-b from-[#060b18] via-[#091430] to-[#040814] text-slate-100"
        >
          {/* Luxury Background Image */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/machine-polish.jpg"
              alt="Grand Duke precision machine polish clear coat correction"
              className="h-full w-full object-cover object-center scale-105 opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#060b18]/92 via-[#091430]/80 to-[#040814]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060b18] via-transparent to-[#060b18]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:36px_36px]" />
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 via-primary via-cyan-400 to-transparent"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/25 via-primary/20 to-cyan-400/20 blur-[160px]"
            aria-hidden="true"
          />

          <div className="site-shell relative z-10">
            {/* Breadcrumb Capsule Pill */}
            <PageBreadcrumb
              items={[{ label: "Services", href: "/services" }]}
              currentPage="Multi-Stage Machine Polish"
            />

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              {/* Eyebrow Ribbon */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-cyan-300 backdrop-blur-md shadow-xs mb-4">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>DISCIPLINE 01 • HIGH-PRECISION ROTARY &amp; ORBITAL PAINT CORRECTION</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12] text-center">
                Multi-Stage{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Machine Polish
                </span>
              </h1>

              {/* Anthem Tagline */}
              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent text-center">
                Optical Reflection Restored. Zero Clear Coat Compromise.
              </div>

              {/* Narrative */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium max-w-3xl mx-auto text-center">
                Over years of driving, improper washing, and environmental exposure, your vehicle’s factory clear coat accumulates thousands of micro-scratches, swirl marks, and oxidation that scatter light and dull the paint. Our Multi-Stage Machine Polish levels these imperfections using diminishing micro-abrasives and dual-action calibration—revealing a mirror-like candy reflection with zero clear coat thinning.
              </p>

              {/* Trust Badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>Digital ultrasonic depth mapping • Zero silicone glazes • 100% True defect leveling</span>
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
                    <span>Book Machine Polish</span>
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
                  value: "95%+",
                  label: "Swirl Eradication",
                  sub: "Permanent defect rectification",
                  icon: Sparkles,
                  color: "text-cyan-400",
                },
                {
                  value: "6500K",
                  label: "Inspection Lamps",
                  sub: "High-CRI defect mapping lighting",
                  icon: Eye,
                  color: "text-amber-400",
                },
                {
                  value: "100%",
                  label: "True Reflection",
                  sub: "No fillers, silicones or glazes",
                  icon: ShieldCheck,
                  color: "text-emerald-400",
                },
                {
                  value: "17+ Yrs",
                  label: "Rotary Craftsmanship",
                  sub: "Certified master artisans",
                  icon: Award,
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
        {/* SECTION 2: THE SCIENCE & CLEAR COAT ANATOMY                               */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="eyebrow mb-3">
                  <span />
                  <span>THE SCIENCE OF REFLECTION</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                  How Machine Polish Permanently Eliminates Swirls
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Automotive paint is composed of primer, base coat (color), and a clear coat measuring just 35 to 50 microns thick (about the thickness of a Post-it note). Many rapid detailers use glazes containing heavy fillers that temporarily hide scratches for two weeks until washed away.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Grand Duke Automotive practices true surgical paint correction. Using diminishing micro-abrasives and temperature-monitored dual-action orbital polishers, we level the microscopic ridges surrounding the scratch by just 1 to 2 microns, restoring optical flatness so light reflects straight back to your eye.
                </p>

                <div className="mt-8 space-y-3.5">
                  {[
                    {
                      title: "Digital Ultrasonic Depth Verification",
                      desc: "We measure clear coat thickness across 20+ panel points prior to polishing to ensure safe tolerances.",
                    },
                    {
                      title: "Diminishing Micro-Abrasive Compounds",
                      desc: "Formulations break down from cutting particles into jewel finishing crystals during the cycle.",
                    },
                    {
                      title: "Temperature-Regulated Dual-Action Polishers",
                      desc: "Eliminates heat friction risk, preventing clear-coat softening or burn-through on delicate corners.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-3.5">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                        <CheckCircle2 className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-foreground">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Visual Card */}
              <div className="relative overflow-hidden rounded-3xl border border-border/90 bg-card p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Layers className="size-5 text-primary" />
                    <span className="font-extrabold text-sm text-foreground">
                      Clear Coat Micro-Layer Anatomy
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Laboratory Protocol
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4">
                    <div className="text-xs font-bold text-rose-400 uppercase tracking-wide">
                      Before Machine Polish (Damaged Surface)
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Microscopic V-shaped scratches scatter incoming light rays at uneven angles. Paint appears grey, hazy, and dull under sunlight with heavy circular swirl webs.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                      Stage 1: Precision Compound Leveling
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Micro-abrasives level microscopic peaks, safely smoothing 90%+ of defects and eliminating oxidation without heating delicate OEM clear coats.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                      Stage 2: Micro-Jeweling Polish (Candy Clarity)
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Ultra-fine finishing pads and sub-micron jeweling polish restore 100% optical clarity, creating mirror reflections and deep color saturation.
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  <span>Defect Reduction: <b>95% – 99%</b></span>
                  <span>Clear Coat Preserved: <b>98%+</b></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: 5-STEP CALIBRATED POLISHING PROTOCOL                           */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-surface-raised/40 border-t border-border/80">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="eyebrow mb-3 justify-center">
                <span />
                <span>STEP-BY-STEP MASTERY</span>
                <span />
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Our 5-Step Surgical Polishing Protocol
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Every vehicle undergoing paint correction follows an uncompromising sequence executed inside our dust-free HEPA studio.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              {[
                {
                  step: "01",
                  title: "Chemical & Clay Decon",
                  desc: "Complete iron fallout dissolution and clay bar exfoliation to ensure a 100% contaminant-free surface.",
                },
                {
                  step: "02",
                  title: "Depth Gauge Mapping",
                  desc: "Ultrasonic digital gauge measures clear coat thickness across all body panels to identify thin areas.",
                },
                {
                  step: "03",
                  title: "Stage 1 Defect Leveling",
                  desc: "Rotary or long-throw dual action polisher with heavy foam or microfiber pads removes swirls and etching.",
                },
                {
                  step: "04",
                  title: "Stage 2 Jeweling Refinement",
                  desc: "Ultra-fine foam pad with nano-jeweling polish refines paint to an extreme high-gloss liquid mirror finish.",
                },
                {
                  step: "05",
                  title: "IPA Chemical Wipe & QC",
                  desc: "Pure isopropyl alcohol wipe removes all polishing oils. Inspected under 6500K high-CRI inspection lights.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="group relative flex flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-black text-primary">
                      {item.step}
                    </span>
                    <span className="size-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  </div>
                  <h3 className="text-sm font-extrabold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: REAL VERIFIED GALLERY SHOWCASE                                 */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-background border-t border-border/80">
          <div className="site-shell relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <div className="eyebrow mb-2">
                  <span />
                  <span>STUDIO GALLERY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Verified Paint Correction Results
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Real client transformations executed by Grand Duke Master Technicians. Pure photography, no filters.
                </p>
              </div>

              <a
                href="/our-work"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-primary hover:underline"
              >
                <span>View Full 77+ Works Exhibition</span>
                <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {relatedGallery.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/80 bg-slate-950 shadow-md"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: FAQS                                                           */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 bg-surface-raised/30 border-t border-border/80">
          <div className="site-shell relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="eyebrow mb-2 justify-center">
                <span />
                <span>FREQUENT QUESTIONS</span>
                <span />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Paint Correction FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Will machine polishing burn or thin my car's clear coat?",
                  a: "No. Our technicians measure clear coat thickness digitally with ultrasonic gauges prior to touching your vehicle. We operate dual-action polishers with controlled pad oscillations and heat-dispersing pads that preserve over 98% of your clear coat.",
                },
                {
                  q: "What is the difference between a 1-Stage and 2-Stage polish?",
                  a: "A 1-Stage polish uses an all-in-one or medium finishing compound that removes 60%–75% of minor defects, ideal for lightly swirled paint. A 2-Stage polish separates heavy cutting (removing 90%–95%+ defects) from micro-jeweling finishing, delivering maximum showroom reflection.",
                },
                {
                  q: "Can you polish out scratches that catch my fingernail?",
                  a: "Scratches deep enough to catch your fingernail have usually penetrated through the clear coat into the base color coat. These cannot be safely polished out without risking clear coat failure. We can round the scratch edges to make it significantly less visible.",
                },
                {
                  q: "Do you recommend ceramic coating after machine polishing?",
                  a: "Yes, absolutely. Once paint is corrected to optical perfection, it is completely bare and vulnerable to new scratches and UV damage. Applying a 9H liquid quartz ceramic coating locks in the mirror finish for years.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs">
                  <h3 className="text-sm sm:text-base font-extrabold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: CONSULTATION CTA                                               */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-card via-background to-card border-t border-border/80">
          <div className="site-shell relative z-10 text-center max-w-3xl mx-auto">
            <div className="eyebrow mb-4 justify-center">
              <span />
              <span>RESERVE YOUR CORRECTION</span>
              <span />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Ready to Restore Showroom Clarity to Your Vehicle?
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Book your Multi-Stage Machine Polish online or request a complimentary paint assessment from our Master Technicians.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium" asChild>
                <a href="/book">
                  <CalendarDays className="size-4" />
                  <span>Book Multi-Stage Polish</span>
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
