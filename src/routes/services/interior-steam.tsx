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
  HeartHandshake,
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
import interiorSteamImg from "@/assets/services/interior-steam.jpg";

const description =
  "Grand Duke Automotive Interior Leather Restoration & Steam: 220°F dry thermal vapor sanitization, delicate European aniline leather rejuvenation, and factory matte cabin restoration.";

export const Route = createFileRoute("/services/interior-steam")({
  head: () => ({
    meta: [
      {
        title:
          "Interior Leather Restoration & Steam Detailing | Grand Duke Automotive",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "interior car detailing, car steam cleaning, leather restoration, leather seat conditioning, luxury car interior cleaning, Grand Duke Automotive",
      },
      { property: "og:title", content: "Interior Leather Restoration & Steam | Grand Duke Automotive" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/interior-steam" },
    ],
  }),
  component: InteriorSteamPage,
});

function InteriorSteamPage() {
  const relatedGallery = galleryPhotos
    .filter((p) => p.category === "interior")
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
          aria-label="Brodcome Navigation & Interior Steam Hero"
          className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-blue-900/40 bg-gradient-to-b from-[#060b18] via-[#091430] to-[#040814] text-slate-100"
        >
          {/* Luxury Background Image */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/interior-steam.jpg"
              alt="Grand Duke luxury automotive interior leather restoration and steam"
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
              currentPage="Interior Leather Restoration & Steam"
            />

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-cyan-300 backdrop-blur-md shadow-xs mb-4">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>DISCIPLINE 04 • SURGICAL 220°F THERMAL CABIN SANITIZATION</span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12] text-center">
                Interior Leather Restoration &amp;{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Thermal Steam
                </span>
              </h1>

              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent text-center">
                Aniline Leather Rejuvenation. Sterile Hospital-Grade Cockpit Prep.
              </div>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium max-w-3xl mx-auto text-center">
                Your cockpit is an intimate sanctuary where natural body oils, perspiration, makeup, and airborne dust accumulate within perforated seat hides and Alcantara fibers. Using 220°F pressurized dry vapor steam with under 5% moisture content, we melt away embedded contaminants and sterilize all touchpoints—restoring European leather to its velvety, non-greasy matte factory texture.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>Delicate aniline & Alcantara safe • pH-neutral matte conditioners • 100% Zero greasy gloss</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Button
                  variant="hero"
                  className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-[0_0_25px_rgba(37,99,235,0.4)] tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
                  asChild
                >
                  <a href="/book">
                    <CalendarDays className="size-4" />
                    <span>Book Interior Detail</span>
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
                  value: "220°F",
                  label: "Dry Vapor Steam",
                  sub: "Hospital-grade thermal sanitization",
                  icon: Wind,
                  color: "text-emerald-400",
                },
                {
                  value: "99.9%",
                  label: "Bacteria Eradication",
                  sub: "Allergens & microbes neutralized",
                  icon: ShieldCheck,
                  color: "text-cyan-400",
                },
                {
                  value: "100%",
                  label: "OEM Matte Texture",
                  sub: "Zero slick silicone dressings",
                  icon: Award,
                  color: "text-amber-400",
                },
                {
                  value: "pH 7.0",
                  label: "Hide Preservation",
                  sub: "Calibrated aniline nourishment",
                  icon: Sparkles,
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
        {/* SECTION 2: THE SCIENCE OF LEATHER RESTORATION                             */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="eyebrow mb-3">
                  <span />
                  <span>SURGICAL PRESERVATION</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                  Why Cheap Interior Wipes Damage Luxury Leather
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Most commercial car washes spray heavy silicone shine sprays onto your seats and dashboard. These cheap oils act as a magnet for dust and trap body sebum inside leather pores, causing the natural hide to harden, stretch, and eventually develop permanent bolster cracks.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Real European luxury leather (Nappa, Merino, Connolly) is naturally matte. We use 220°F pressurized dry steam vapor with natural horsehair brushes to lift embedded soils, then nourish the hide with organic lipid emulsions that restore suppleness and UV resistance without leaving a slippery film.
                </p>

                <div className="mt-8 space-y-3.5">
                  <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mt-0.5">
                      <Wind className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-foreground">
                        Micro-Vapor Penetration
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Dry vapor reaches inside tight seat perforations, air vents, and stitched seams without wetting electronics.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                      <ShieldCheck className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-foreground">
                        Alcantara & Suede Delicate Care
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Gentle steam brushing resets crushed synthetic microfiber piles, removing oil grime without pilling.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 mt-0.5">
                      <Sparkles className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-foreground">
                        UV & Dye-Transfer Protection
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Breathable barrier prevents blue jean denim dye transfer from penetrating light-colored leather hides.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Comparison Diagram */}
              <div className="relative overflow-hidden rounded-3xl border border-border/90 bg-card p-6 sm:p-8 shadow-xl">
                <h3 className="font-extrabold text-base text-foreground mb-4">
                  Leather Finish Standard
                </h3>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4">
                    <div className="text-xs font-bold text-rose-400 uppercase tracking-wide">
                      Standard Car Wash "Detail"
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      High-gloss silicone spray dressings. Leaves steering wheel sticky and shiny. Traps dirt inside seat seams. Causes glare on windshield glass and accelerates leather drying and cracking.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-primary/40 bg-primary/10 p-4 shadow-sm ring-1 ring-primary/30">
                    <div className="text-xs font-extrabold text-primary uppercase tracking-wide">
                      Grand Duke Concours Leather Restoration
                    </div>
                    <div className="mt-2 text-xs text-foreground/90 font-medium leading-relaxed">
                      Surgically steam-extracted, pH-balanced organic lipid nourishment. Completely non-greasy, velvety factory matte touch with rich authentic leather fragrance and full UV shielding.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: 5-STEP SURGICAL INTERIOR PROTOCOL                              */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-surface-raised/40 border-t border-border/80">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="eyebrow mb-3 justify-center">
                <span />
                <span>5-STAGE PROCEDURE</span>
                <span />
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                The 5-Stage Cabin Restoration Procedure
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Executed with surgical tools to revitalize every touchpoint from floor pan to headliner.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              {[
                {
                  step: "01",
                  title: "Crevice Air Purge",
                  desc: "High-pressure compressed air purges deeply hidden dust, crumbs, and debris from seat rails and console gaps.",
                },
                {
                  step: "02",
                  title: "220°F Dry Steam Vapor",
                  desc: "Dry steam vapor sanitizes dash switches, leather bolsters, door panels, and HVAC ventilation ductwork.",
                },
                {
                  step: "03",
                  title: "Deep Fiber Extraction",
                  desc: "Heated extraction cleans carpet mats and fabric footwells, pulling out trapped mud, spills, and allergens.",
                },
                {
                  step: "04",
                  title: "Aniline Nourishment",
                  desc: "Organic lipid cream massaged into leather seats to replenish lost moisture and restore soft OEM flexibility.",
                },
                {
                  step: "05",
                  title: "Glass & Optical Clarity",
                  desc: "Streak-free optical glass cleaning eliminates interior outgassing haze for crystal clear windshield vision.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="group relative flex flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-black text-emerald-400">
                      {item.step}
                    </span>
                    <span className="size-2 rounded-full bg-emerald-400/40 group-hover:bg-emerald-400 transition-colors" />
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
                  <span>COCKPIT GALLERY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Verified Cabin Transformations
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Pristine leathers, sterile cockpits, and restored European cockpits.
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
                Interior Detailing FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Will hot steam damage my heated or ventilated seat electronics?",
                  a: "No. Our dry vapor steam contains less than 5% moisture. It evaporates almost instantly upon contact, lifting dirt and killing bacteria without penetrating through the perforation backing into electronic seat heaters or cooling fans.",
                },
                {
                  q: "Can you eliminate severe smoke, mold, or pet odors?",
                  a: "Yes. In addition to deep steam vapor extraction of fabrics, we utilize clinical-grade ozone generators that neutralize odor-causing volatile organic compounds at a molecular level, leaving clean, fresh cabin air.",
                },
                {
                  q: "Will my vehicle's interior be damp when finished?",
                  a: "No. Because our process relies on dry steam rather than flooding carpets with water, interior surfaces dry completely within 30 to 45 minutes, ready for immediate driving.",
                },
                {
                  q: "How do you clean Alcantara without matting the fibers?",
                  a: "Alcantara requires ultra-low moisture and dedicated soft-bristle brushes. We gently mist dry steam onto a microfiber towel, wiping along the grain of the fibers to dissolve oils while maintaining the original suede texture.",
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
              <span>COCKPIT RESTORATION</span>
              <span />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Revitalize Your Cabin to Showroom Perfection
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Book your Interior Leather Restoration & Steam online or speak directly with our Master Technicians.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium" asChild>
                <a href="/book">
                  <CalendarDays className="size-4" />
                  <span>Book Interior Detail</span>
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

