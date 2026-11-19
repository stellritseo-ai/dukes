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
  Disc,
  Droplets,
  Eye,
  Layers,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
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
import wheelGlassImg from "@/assets/services/wheel-glass.jpg";

const description =
  "Grand Duke Automotive Wheel Decon & Satin Dressing: pH-neutral chemical iron brake dust dissolution, brake caliper detailing, streak-free optical glass, and non-sling UV tire hydration.";

export const Route = createFileRoute("/services/wheel-glass")({
  head: () => ({
    meta: [
      {
        title:
          "Wheel Decon & Satin Dressing | Grand Duke Automotive",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "wheel detailing, brake dust removal, iron decontamination, caliper cleaning, tire dressing, streak-free glass, Grand Duke Automotive",
      },
      { property: "og:title", content: "Wheel Decon & Satin Dressing | Grand Duke Automotive" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/wheel-glass" },
    ],
  }),
  component: WheelGlassPage,
});

function WheelGlassPage() {
  const relatedGallery = galleryPhotos
    .filter((p) => p.category === "wheels")
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
          aria-label="Brodcome Navigation & Wheel Decon Hero"
          className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-blue-900/40 bg-gradient-to-b from-[#060b18] via-[#091430] to-[#040814] text-slate-100"
        >
          {/* Luxury Background Image */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/wheel-glass.jpg"
              alt="Grand Duke automotive wheel and caliper detailing"
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
              currentPage="Wheel Decon & Satin Dressing"
            />

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-cyan-300 backdrop-blur-md shadow-xs mb-4">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>DISCIPLINE 05 • RUNNING GEAR PURGE &amp; OPTICAL CLARITY</span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12] text-center">
                Wheel Decon &amp;{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Satin Dressing
                </span>
              </h1>

              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent text-center">
                Deep Iron Fallout Dissolution. Non-Sling UV Satin Finish.
              </div>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium max-w-3xl mx-auto text-center">
                High-performance braking systems shed microscopic glowing iron particulates that burn directly into your alloy wheel clear coat and brake calipers. We utilize laboratory-formulated, pH-neutral chemical chelating agents that react with metallic fallout—turning purple as they dissolve embedded brake dust without harming painted or carbon-ceramic hardware. Paired with non-sling satin UV tire nourishment and streak-free optical glass clarity.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>100% Acid-free pH neutral • Safe on carbon ceramic rotors • Zero tire sling guarantee</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Button
                  variant="hero"
                  className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-[0_0_25px_rgba(37,99,235,0.4)] tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
                  asChild
                >
                  <a href="/book">
                    <CalendarDays className="size-4" />
                    <span>Book Wheel Detailing</span>
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
                  value: "100%",
                  label: "Iron Purge",
                  sub: "Color-changing chemical dissolution",
                  icon: CircleDot,
                  color: "text-indigo-400",
                },
                {
                  value: "pH 7.0",
                  label: "Acid-Free Formula",
                  sub: "Safe for forged & carbon ceramic",
                  icon: ShieldCheck,
                  color: "text-emerald-400",
                },
                {
                  value: "0% Sling",
                  label: "Dry-Touch Satin",
                  sub: "No greasy tire splatter on paint",
                  icon: Sparkles,
                  color: "text-cyan-400",
                },
                {
                  value: "Optical",
                  label: "Crystal Glass",
                  sub: "Streak-free clarity inside & out",
                  icon: Eye,
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
        {/* SECTION 2: THE SCIENCE OF BRAKE DECON & TIRE NOURISHMENT                  */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="eyebrow mb-3">
                  <span />
                  <span>CHEMICAL PRECISION</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                  How Embedded Brake Dust Causes Permanent Wheel Pitting
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Brake rotors and pads reach temperatures exceeding 700°F during spirited driving. As brake pads wear, they release glowing microscopic iron filings that embed themselves into the clear coat of your wheel faces and deep inner barrels. Left untreated, moisture oxidizes this iron into rust, creating microscopic pits that permanently ruin expensive forged alloys.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Harsh acidic wheel cleaners used by cheap washes strip factory clear coats and etch aluminum brake calipers. Grand Duke Automotive uses advanced pH-neutral sodium thioglycolate chemistry that bonds specifically with iron ions, turning deep purple and turning solid metallic dust into a water-soluble rinse.
                </p>

                <div className="mt-8 space-y-3.5">
                  <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 mt-0.5">
                      <CircleDot className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-foreground">
                        Color-Changing Iron Chelation
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Turns vivid purple as it actively dissolves microscopic sintered iron particles embedded in clear coats.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mt-0.5">
                      <ShieldCheck className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-foreground">
                        Zero-Sling UV Tire Rehydration
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Water-based silicone-free dressing cures dry to the touch, preventing the unsightly brown antiozonant bloom without slinging oil.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500 mt-0.5">
                      <Eye className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-foreground">
                        Optical Crystal Glass Polish
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Microfiber waffle-weave glass cleaning dissolves interior vinyl outgassing film and exterior water film for HD driving clarity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Comparison Diagram */}
              <div className="relative overflow-hidden rounded-3xl border border-border/90 bg-card p-6 sm:p-8 shadow-xl">
                <h3 className="font-extrabold text-base text-foreground mb-4">
                  Brake Dust & Tire Care Standards
                </h3>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4">
                    <div className="text-xs font-bold text-rose-400 uppercase tracking-wide">
                      Standard Car Wash Wheel Treatment
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Caustic acid spray damages caliper finishes, misses inner barrels completely, and slaps greasy tire shine that slings black oil down your freshly washed doors within 1 mile.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-primary/40 bg-primary/10 p-4 shadow-sm ring-1 ring-primary/30">
                    <div className="text-xs font-extrabold text-primary uppercase tracking-wide">
                      Grand Duke Concours Wheel & Tire Protocol
                    </div>
                    <div className="mt-2 text-xs text-foreground/90 font-medium leading-relaxed">
                      100% acid-free pH-neutral iron reaction, 360° deep barrel scrubbing with soft wool wands, painted caliper detailing, and dry-touch satin tire UV nourish barrier with guaranteed zero fling.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: 5-STEP WHEEL & GLASS PROTOCOL                                  */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-surface-raised/40 border-t border-border/80">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="eyebrow mb-3 justify-center">
                <span />
                <span>DEEP CLEANSING SEQUENCE</span>
                <span />
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                5-Stage Running Gear &amp; Glass Sequence
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Every spoke, lug nut recess, barrel depth, and glass pane receives surgical precision.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              {[
                {
                  step: "01",
                  title: "Chemical Iron Purge",
                  desc: "pH-neutral iron remover sprayed onto cool dry wheels, reacting with metallic brake dust for 3–5 minutes.",
                },
                {
                  step: "02",
                  title: "Barrel & Caliper Agitation",
                  desc: "Non-scratch wooly wands scrub the inner barrel depth, brake calipers, and behind spoke faces.",
                },
                {
                  step: "03",
                  title: "Lug Nut & Emblems Detail",
                  desc: "Boar-hair detail brushes delicately clean lug nuts, valve stems, and center hub crests.",
                },
                {
                  step: "04",
                  title: "0-PPM Hydro Rinse & Dry",
                  desc: "High-pressure deionized water flushes dissolved iron away. Blow dried with warm filtered air.",
                },
                {
                  step: "05",
                  title: "Satin Dressing & Glass",
                  desc: "Dry-to-the-touch satin dressing nourished into rubber. Windows polished to optical crystal transparency.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="group relative flex flex-col rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-black text-indigo-400">
                      {item.step}
                    </span>
                    <span className="size-2 rounded-full bg-indigo-400/40 group-hover:bg-indigo-400 transition-colors" />
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
                  <span>WHEEL &amp; CALIPER GALLERY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Verified Wheel Transformations
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Pristine wheel barrels, immaculate calipers, and rich satin tire finishes.
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
                Wheel &amp; Glass FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Is your iron fallout remover safe for carbon ceramic brake rotors (PCCB)?",
                  a: "Yes. Our iron dissolution formulas are 100% pH-neutral and acid-free, fully approved for exotic vehicles equipped with Porsche Ceramic Composite Brakes (PCCB), Ferrari carbon ceramic, and BMW M Carbon rotors.",
                },
                {
                  q: "Will the tire dressing fling greasy residue down the side of my vehicle?",
                  a: "Never. We use water-based, dry-to-the-touch satin emulsions that absorb completely into the tire rubber pores. After a 10-minute dry time, you can drive at highway speeds with zero sling.",
                },
                {
                  q: "Can you ceramic coat my wheels and brake calipers?",
                  a: "Yes! We offer high-temperature 9H wheel and caliper ceramic coatings that resist heat up to 1200°F, preventing brake dust from bonding and making wheels washable with just water pressure.",
                },
                {
                  q: "Why do car windshields develop a hazy interior film?",
                  a: "Modern automotive interiors contain plastics and vinyls that slowly release vapor gases under sunlight (outgassing). This creates an oily film that causes nighttime headlight glare. Our optical glass polish removes this film completely.",
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
              <span>RUNNING GEAR CLARITY</span>
              <span />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Restore Wheel Barrels &amp; Optical Glass Clarity
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Book your Wheel Decon & Satin Dressing online or request a complimentary estimate.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium" asChild>
                <a href="/book">
                  <CalendarDays className="size-4" />
                  <span>Book Wheel Detailing</span>
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

