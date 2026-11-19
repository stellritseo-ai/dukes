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
  Droplets,
  Eye,
  Layers,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
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
import ceramicShieldImg from "@/assets/services/ceramic-shield.jpg";

const description =
  "Grand Duke Automotive Concours Ceramic & Quartz Shield: 9H liquid quartz nanocoating delivering 3 to 5 years of extreme hydrophobicity, UV defense, and candy mirror gloss.";

export const Route = createFileRoute("/services/ceramic-shield")({
  head: () => ({
    meta: [
      {
        title:
          "Concours Ceramic & Quartz Shield | Grand Duke Automotive",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "ceramic coating, 9H quartz shield, liquid quartz paint protection, hydrophobic coating, car ceramic coating near me, Grand Duke Automotive",
      },
      { property: "og:title", content: "Concours Ceramic & Quartz Shield | Grand Duke Automotive" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/ceramic-shield" },
    ],
  }),
  component: CeramicShieldPage,
});

function CeramicShieldPage() {
  const relatedGallery = galleryPhotos
    .filter((p) => p.category === "ceramic")
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
          aria-label="Brodcome Navigation & Ceramic Shield Hero"
          className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-blue-900/40 bg-gradient-to-b from-[#060b18] via-[#091430] to-[#040814] text-slate-100"
        >
          {/* Luxury Background Image */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/ceramic-shield.jpg"
              alt="Grand Duke automotive liquid quartz ceramic coating reflection"
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
              currentPage="Concours Ceramic & Quartz Shield"
            />

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-cyan-300 backdrop-blur-md shadow-xs mb-4">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>DISCIPLINE 02 • MOLECULAR 9H QUARTZ NANOTECHNOLOGY</span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12] text-center">
                Concours Ceramic &amp;{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Quartz Shield
                </span>
              </h1>

              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent text-center">
                3 to 5 Year Molecular Defense. Liquid Candy Mirror Gloss.
              </div>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium max-w-3xl mx-auto text-center">
                Waxes evaporate in weeks and polymer sealants break down in harsh detergents. Our Concours Ceramic & Quartz Shield forms an impenetrable, semi-permanent cross-linked glass layer over your factory paintwork. Featuring a 115° water contact angle, dirt slides off effortlessly during routine maintenance washes while your clear coat is guarded against chemical etching, UV fading, and bird dropping damage.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>Certified warranty backed • 9H laboratory hardness • Short-wave infrared cleanroom curing</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Button
                  variant="hero"
                  className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-[0_0_25px_rgba(37,99,235,0.4)] tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
                  asChild
                >
                  <a href="/book">
                    <CalendarDays className="size-4" />
                    <span>Book Ceramic Shield</span>
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
                  value: "9H Quartz",
                  label: "Matrix Hardness",
                  sub: "Scratch & chemical resistance",
                  icon: ShieldCheck,
                  color: "text-cyan-400",
                },
                {
                  value: "115°",
                  label: "Hydrophobic Angle",
                  sub: "Extreme water beading tension",
                  icon: Droplets,
                  color: "text-sky-400",
                },
                {
                  value: "3 – 5 Yrs",
                  label: "Warranty Longevity",
                  sub: "Multi-year certified protection",
                  icon: Award,
                  color: "text-emerald-400",
                },
                {
                  value: "100%",
                  label: "UV & Chemical Defense",
                  sub: "Immunity to sun oxidation",
                  icon: Sun,
                  color: "text-amber-400",
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
        {/* SECTION 2: THE SCIENCE OF MOLECULAR CROSS-LINKING                         */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="eyebrow mb-3">
                  <span />
                  <span>NANOTECHNOLOGY CHEMISTRY</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                  How 9H Ceramic Quartz Protects Against Modern Environmental Hazards
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Traditional carnauba waxes sit loosely on the surface of your vehicle and melt under normal engine heat (above 135°F) or wash off after two rainstorms. Ceramic coatings use siloxane polymer nanotechnology that cures into a 3D glass matrix inside the pores of the clear coat.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Once cured, the surface becomes non-porous and ultra-slick. Water and contaminants cannot penetrate or adhere. Brake dust, bug guts, tree sap, and acid rain wash off with gentle contact, dramatically reducing wash marring and eliminating the need for periodic waxing.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/80 bg-surface p-4">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <Droplets className="size-4" />
                      <span>Lotus Hydrophobic Effect</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Water forms tight spherical droplets that roll off at 35+ mph, taking dirt particles with them.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-surface p-4">
                    <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
                      <Sun className="size-4" />
                      <span>UV & Thermal Immunity</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Withstands temperatures up to 800°F without breakdown, protecting clear coat from sun fading.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-surface p-4">
                    <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                      <Shield className="size-4" />
                      <span>Acid Rain & Salt Defense</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Immunity to corrosive chemical etching from road salts, industrial fallout, and bird droppings.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-surface p-4">
                    <div className="flex items-center gap-2 text-cyan-500 font-bold text-sm">
                      <Sparkles className="size-4" />
                      <span>Candy Mirror Depth</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Enhances metallic flake pop and creates a permanent glass-like reflective liquid depth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Comparison Diagram */}
              <div className="relative overflow-hidden rounded-3xl border border-border/90 bg-card p-6 sm:p-8 shadow-xl">
                <h3 className="font-extrabold text-base text-foreground mb-4">
                  Ceramic Coating vs. Traditional Wax
                </h3>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-border/70 bg-muted/40 p-4">
                    <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
                      <span>TRADITIONAL CARNAUBA WAX</span>
                      <span className="text-rose-400">4 – 8 WEEKS</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Melts in warm sun, dissolves with alkaline wash soap, zero scratch protection, frequent reapplication needed.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-muted/40 p-4">
                    <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
                      <span>SYNTHETIC POLYMER SEALANT</span>
                      <span className="text-amber-400">4 – 6 MONTHS</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Moderate chemical resistance, temporary water beading, breaks down under winter road salts and high heat.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-primary/40 bg-primary/10 p-4 shadow-sm ring-1 ring-primary/30">
                    <div className="flex items-center justify-between text-xs font-extrabold text-primary">
                      <span>GRAND DUKE 9H LIQUID QUARTZ</span>
                      <span className="text-cyan-400 font-black">3 – 5 YEARS WARRANTY</span>
                    </div>
                    <div className="mt-2 text-xs text-foreground/90 font-medium">
                      Permanent molecular bond, 9H pencil scratch resistance, 115° hydrophobic contact angle, certified warranty, zero seasonal re-waxing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: 5-STEP CLEANROOM APPLICATION PROTOCOL                          */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-surface-raised/40 border-t border-border/80">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="eyebrow mb-3 justify-center">
                <span />
                <span>CLEANROOM SURGICAL APPLICATION</span>
                <span />
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                The 5-Step Quartz Bonding Sequence
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Ceramic coating is only as good as the preparation and curing protocol. We execute every application in a climate-controlled, dust-free bay.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              {[
                {
                  step: "01",
                  title: "Pre-Coating Correction",
                  desc: "Paint must be machine polished to 95%+ defect-free perfection before coating. Defects underneath cannot be removed once locked in.",
                },
                {
                  step: "02",
                  title: "Surface Stripping Wipe",
                  desc: "Pure solvent and alcohol panel wipe removes all lingering polishing lubricants, waxes, and silicones for 100% bare clear coat bond.",
                },
                {
                  step: "03",
                  title: "Cross-Hatch Application",
                  desc: "Applied panel-by-panel using high-density applicator blocks in a tight horizontal and vertical cross-hatch pattern for even thickness.",
                },
                {
                  step: "04",
                  title: "Flash Point Leveling",
                  desc: "Timed leveling with fresh ultra-plush microfiber towels as the quartz flashes into a rainbow sheen, eliminating high spots.",
                },
                {
                  step: "05",
                  title: "Infrared Curing Bay",
                  desc: "Short-wave infrared heat lamps accelerate the cross-linking process at 160°F, hardening the quartz shell prior to release.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="group relative flex flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-black text-cyan-400">
                      {item.step}
                    </span>
                    <span className="size-2 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors" />
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
                  <span>CERAMIC SHOWCASE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Verified Ceramic Quartz Shield Finishes
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Real client supercars and luxury vehicles protected with our 9H liquid quartz matrix.
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
                Ceramic Coating FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Will ceramic coating protect my vehicle from rock chips?",
                  a: "No coating can stop high-speed physical rock impacts. Paint Protection Film (PPF) is required for impact resistance. Ceramic coating provides extreme chemical resistance, UV defense, ease of washing, and swirl resistance from maintenance washes.",
                },
                {
                  q: "How long must the car stay dry after ceramic coating?",
                  a: "Thanks to our short-wave infrared heat curing process, the initial cure takes just hours. However, we recommend avoiding water and chemical washes for 7 days while the quartz achieves full 9H cross-linked hardness.",
                },
                {
                  q: "Can ceramic coating be applied over existing scratches?",
                  a: "We never recommend applying ceramic coating over swirled or scratched paint because the clear quartz locks in those defects under glass. We always perform machine paint correction prior to ceramic application.",
                },
                {
                  q: "How do I maintain my ceramic coated vehicle?",
                  a: "Maintenance is remarkably easy: simply perform a pH-neutral two-bucket wash using deionized water. Avoid automatic tunnel car washes with abrasive nylon brushes. We also offer concierge maintenance wash packages.",
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
              <span>LIFETIME CLEAR COAT DEFENSE</span>
              <span />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Protect Your Investment with 9H Liquid Quartz
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Book your Concours Ceramic & Quartz Shield online or request a custom package consultation from our Master Technicians.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium" asChild>
                <a href="/book">
                  <CalendarDays className="size-4" />
                  <span>Book Ceramic Shield</span>
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
