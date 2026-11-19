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
  Eye,
  Layers,
  Phone,
  Shield,
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
import signatureDetailImg from "@/assets/services/signature-detail.jpg";

const description =
  "The Duke Signature Concours Detail: Grand Duke Automotive's flagship full-day master transformation combining multi-stage paint correction, 9H ceramic quartz coating, 220°F interior steam restoration, and engine bay detailing.";

export const Route = createFileRoute("/services/signature-detail")({
  head: () => ({
    meta: [
      {
        title:
          "The Duke Signature Concours Detail | Grand Duke Automotive",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "concours car detailing, signature auto detailing, full car restoration, luxury vehicle detail, exotic car detailing, Grand Duke Automotive",
      },
      { property: "og:title", content: "The Duke Signature Concours Detail | Grand Duke Automotive" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/signature-detail" },
    ],
  }),
  component: SignatureDetailPage,
});

function SignatureDetailPage() {
  const relatedGallery = galleryPhotos
    .filter((p) => p.category === "exotics" || p.category === "ceramic")
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
          aria-label="Brodcome Navigation & Signature Detail Hero"
          className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-blue-900/40 bg-gradient-to-b from-[#060b18] via-[#091430] to-[#040814] text-slate-100"
        >
          {/* Luxury Background Image */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/signature-detail.jpg"
              alt="Grand Duke signature concours detail master transformation"
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
            <PageBreadcrumb
              items={[{ label: "Services", href: "/services" }]}
              currentPage="The Duke Signature Concours Detail"
            />

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-300 backdrop-blur-md shadow-xs mb-4">
                <Crown className="size-3 text-amber-400 animate-pulse" />
                <span>DISCIPLINE 06 • FLAGSHIP FULL-DAY CONCOURS MASTER TRANSFORMATION</span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12] text-center">
                The Duke Signature{" "}
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Concours Detail
                </span>
              </h1>

              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent text-center">
                Our Pinnacle Detailing Experience. Full-Day Transformation.
              </div>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium max-w-3xl mx-auto text-center">
                The pinnacle of our craft. Designed for collectors, track enthusiasts, and discerning drivers who demand absolute perfection. This comprehensive full-day master session integrates multi-stage rotary paint correction, 9H liquid quartz ceramic bonding, 220°F surgical dry steam interior extraction, engine bay detailing, caliper decon, and streak-free optical glass—culminating in an official Certificate of Concours Completion.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>Full-day 1-on-1 Master dedication • HEPA cleanroom cured • Concours certified provenance</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Button
                  variant="hero"
                  className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-[0_0_25px_rgba(245,158,11,0.4)] bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
                  asChild
                >
                  <a href="/book">
                    <Crown className="size-4" />
                    <span>Reserve Signature Experience</span>
                    <ArrowRight className="size-4" />
                  </a>
                </Button>

                <Button
                  variant="glass"
                  className="h-12 rounded-full px-7 text-xs sm:text-sm font-bold text-white border-white/20 bg-white/10 hover:bg-white/20"
                  asChild
                >
                  <a href="/free-estimate">
                    <Sparkles className="size-4 text-amber-300" />
                    <span>Request Free Estimate</span>
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>

                <a
                  href="tel:64687967732"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-black/60 px-6 text-xs sm:text-sm font-bold text-white shadow-xs transition-all duration-200 hover:border-amber-400 hover:text-amber-300"
                >
                  <Phone className="size-3.5 text-amber-400" />
                  <span>Call: 6468 796 7732</span>
                </a>
              </div>
            </div>

            {/* 4-Card Luxury KPI Stats Deck */}
            <div className="mt-14 grid gap-4 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {[
                {
                  value: "Full Day",
                  label: "Master Dedication",
                  sub: "8 to 12 hours intensive session",
                  icon: Clock,
                  color: "text-amber-400",
                },
                {
                  value: "360°",
                  label: "Total Transformation",
                  sub: "Paint, cabin, wheels & bay",
                  icon: Crown,
                  color: "text-yellow-400",
                },
                {
                  value: "99%",
                  label: "Defect Elimination",
                  sub: "Pinnacle optical reflection",
                  icon: ShieldCheck,
                  color: "text-emerald-400",
                },
                {
                  value: "Certificate",
                  label: "Concours Provenance",
                  sub: "Signed master technician log",
                  icon: Award,
                  color: "text-cyan-400",
                },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-5 sm:p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-white/[0.1] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className={cn("text-2xl sm:text-3xl font-black tracking-tight", stat.color)}>
                        {stat.value}
                      </div>
                      <div className="flex size-9 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-slate-300">
                        <Icon className="size-4 text-amber-400" />
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
        {/* SECTION 2: COMPREHENSIVE INCLUSIONS CHECKLIST                             */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="eyebrow mb-3 justify-center">
                <span />
                <span>UNCOMPROMISED SCOPE</span>
                <span />
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Everything Included in The Duke Signature Concours Detail
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                A single unified master program addressing every square inch of your automobile.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Exterior */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                    <Sparkles className="size-4" />
                  </div>
                  <h3 className="font-extrabold text-base text-foreground">Exterior Perfection</h3>
                </div>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>0-PPM deionized foam pre-wash & hand wash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Chemical iron fallout & clay bar decontamination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Multi-stage machine paint correction (95%+ swirls)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>9H liquid quartz ceramic coating application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Exterior plastics, rubber & exhaust tips polished</span>
                  </li>
                </ul>
              </div>

              {/* Interior */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Wind className="size-4" />
                  </div>
                  <h3 className="font-extrabold text-base text-foreground">Cabin Restoration</h3>
                </div>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>220°F dry steam sanitization of all surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Deep hot-water carpet & floor mat extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>European leather rejuvenation (velvety matte)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Alcantara pile reset & gentle oil dissolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Clinical ozone molecular odor purge</span>
                  </li>
                </ul>
              </div>

              {/* Engine Bay */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Zap className="size-4" />
                  </div>
                  <h3 className="font-extrabold text-base text-foreground">Engine Compartment</h3>
                </div>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Sensitive electronic sensor masking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Low-moisture dry vapor degreasing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Underside hood insulation dry brush</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Non-conductive OEM satin plastic dressing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Metal strut towers & brackets hand polished</span>
                  </li>
                </ul>
              </div>

              {/* Running Gear & Glass */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                    <CircleDot className="size-4" />
                  </div>
                  <h3 className="font-extrabold text-base text-foreground">Wheels &amp; Optical Glass</h3>
                </div>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>360° deep wheel barrel iron fallout purge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Painted brake calipers detailed & protected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Dry-touch satin UV tire hydration (zero sling)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Optical streak-free glass inside & outside</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Signed Grand Duke Concours Certificate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: VERIFIED CONCOURS GALLERY SHOWCASE                             */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-surface-raised/40 border-t border-border/80">
          <div className="site-shell relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <div className="eyebrow mb-2">
                  <span />
                  <span>CONCOURS PORTFOLIO</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Verified Flagship Transformations
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Exotic supercars and luxury investments detailed to concours exhibition standards.
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
        {/* SECTION 4: FAQS                                                           */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 bg-background border-t border-border/80">
          <div className="site-shell relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="eyebrow mb-2 justify-center">
                <span />
                <span>FREQUENT QUESTIONS</span>
                <span />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Signature Detail FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How long does The Duke Signature Concours Detail take?",
                  a: "Because this is our most comprehensive treatment, we allocate a full day (8 to 12 hours) with a dedicated Master Technician assigned exclusively to your vehicle.",
                },
                {
                  q: "Can this service be performed via your mobile concierge fleet?",
                  a: "Yes! Our autonomous mobile vans are fully equipped with deionized water, generators, HEPA vacuums, and rotary polishers to perform the entire transformation at your private garage or residence.",
                },
                {
                  q: "What is included with the Certificate of Concours Completion?",
                  a: "Your certificate documents the vehicle VIN, date of treatment, digital paint depth readings across 20 points, ceramic coating warranty registration number, and the master technician's signature—invaluable for maintaining resale provenance.",
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
        {/* SECTION 5: CONSULTATION CTA                                               */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-card via-background to-card border-t border-border/80">
          <div className="site-shell relative z-10 text-center max-w-3xl mx-auto">
            <div className="eyebrow mb-4 justify-center">
              <span />
              <span>THE ULTIMATE EXPERIENCE</span>
              <span />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Treat Your Automobile to The Duke Signature Standard
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Appointments for our flagship concierge experience are strictly limited to ensure total dedication to every vehicle.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950" asChild>
                <a href="/book">
                  <Crown className="size-4" />
                  <span>Reserve Flagship Session</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="glass" className="h-12 rounded-full px-7 text-xs sm:text-sm font-bold" asChild>
                <a href="/free-estimate">
                  <Sparkles className="size-4 text-amber-400" />
                  <span>Request Free Estimate</span>
                </a>
              </Button>
              <a
                href="tel:64687967732"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-6 text-xs sm:text-sm font-bold text-foreground shadow-xs transition-colors hover:border-amber-400 hover:text-amber-400"
              >
                <Phone className="size-3.5 text-amber-400" />
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
