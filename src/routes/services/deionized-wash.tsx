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
  Filter,
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
import foamWashImg from "@/assets/services/foam-wash.jpg";

const description =
  "Grand Duke Automotive Deionized Spot-Free Hydro Wash: 0 PPM ultra-pure deionized water and gentle touchless snow foam encapsulation guaranteeing zero mineral water spots.";

export const Route = createFileRoute("/services/deionized-wash")({
  head: () => ({
    meta: [
      {
        title:
          "Deionized Spot-Free Hydro Wash | Grand Duke Automotive",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "deionized water car wash, spot-free car wash, luxury mobile wash, foam cannon wash, zero water spots detailing, Grand Duke Automotive",
      },
      { property: "og:title", content: "Deionized Spot-Free Hydro Wash | Grand Duke Automotive" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/deionized-wash" },
    ],
  }),
  component: DeionizedWashPage,
});

function DeionizedWashPage() {
  // Curate 6 real wash & exterior transformation photos
  const relatedGallery = galleryPhotos.slice(6, 12);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      <Header />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: BRODCOME HERO BANNER                                           */}
        {/* ========================================================================= */}
        <section
          id="brodcome"
          aria-label="Brodcome Navigation & Deionized Wash Hero"
          className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-blue-900/40 bg-gradient-to-b from-[#060b18] via-[#091430] to-[#040814] text-slate-100"
        >
          {/* Luxury Background Image */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/foam-wash.jpg"
              alt="Grand Duke deionized spot-free foam wash"
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
              currentPage="Deionized Spot-Free Hydro Wash"
            />

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-cyan-300 backdrop-blur-md shadow-xs mb-4">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>DISCIPLINE 03 • 0 PPM ULTRA-PURE FILTERED HYDRO CARE</span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12] text-center">
                Deionized Spot-Free{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Hydro Wash
                </span>
              </h1>

              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent text-center">
                Zero Mineral Water Spots. Gentle Snow Foam Encapsulation.
              </div>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium max-w-3xl mx-auto text-center">
                Tap water contains hundreds of parts per million of dissolved calcium, magnesium, and limestone that bake into clear coat etching under direct sunlight. Our Deionized Spot-Free Hydro Wash utilizes laboratory-grade ion-exchange resin to purify water to true 0 PPM. Combined with high-lubricity pH-balanced foam baths and heated filtered air drying, we deliver a flawless, spot-free finish anywhere our mobile fleet travels.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>0 PPM digital TDS certified • Self-contained mobile water tanks • Zero swirl wash technique</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Button
                  variant="hero"
                  className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-[0_0_25px_rgba(37,99,235,0.4)] tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
                  asChild
                >
                  <a href="/book">
                    <CalendarDays className="size-4" />
                    <span>Book Hydro Wash</span>
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
                  value: "0 PPM",
                  label: "Water Purity",
                  sub: "Zero total dissolved solids",
                  icon: Droplets,
                  color: "text-cyan-400",
                },
                {
                  value: "100%",
                  label: "Zero Mineral Spots",
                  sub: "No calcium or lime residues",
                  icon: ShieldCheck,
                  color: "text-sky-400",
                },
                {
                  value: "pH 7.0",
                  label: "Neutral Chemistry",
                  sub: "100% safe on ceramic coatings",
                  icon: Sparkles,
                  color: "text-emerald-400",
                },
                {
                  value: "300 Mi",
                  label: "Autonomous Range",
                  sub: "Self-contained mobile wash fleet",
                  icon: Compass,
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
        {/* SECTION 2: THE SCIENCE OF 0 PPM WATER                                     */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="eyebrow mb-3">
                  <span />
                  <span>MOLECULAR PURITY</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                  Why Regular City Tap Water Destroys Exotic Vehicle Paint
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Municipal tap water contains between 150 to 450 PPM (parts per million) of dissolved minerals like calcium carbonate, chlorine, iron, and magnesium. When tap water dries on hot clear coat, the pure H2O evaporates into the air, leaving concentrated alkali crystals that physically etch circular craters into your paint.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Grand Duke mobile wash vans carry custom dual-bed deionizing filtration tanks. Cation and anion resin beds pull out 100% of mineral ions. When our water evaporates under direct 95°F sun, literally nothing remains on your paintwork.
                </p>

                <div className="mt-8 space-y-3.5">
                  <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500 mt-0.5">
                      <Droplets className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-foreground">
                        High-Lubricity Foam Encapsulation
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Thick foam clings to vertical panels, encapsulating road grit in polymers so it rinses away before mitt contact.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 mt-0.5">
                      <ShieldCheck className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-foreground">
                        Two-Bucket Grit Guard Protocol
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Separate wash and rinse buckets with sediment traps ensure dirty water is never reintroduced to the finish.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface p-3.5">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 mt-0.5">
                      <Wind className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-foreground">
                        Heated Filtered Air Crevice Purge
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        High-velocity filtered warm air blows water out from mirror housings, grilles, and door jams—preventing water drip streaks.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Comparison Diagram */}
              <div className="relative overflow-hidden rounded-3xl border border-border/90 bg-card p-6 sm:p-8 shadow-xl">
                <h3 className="font-extrabold text-base text-foreground mb-4">
                  Water Quality Comparison (TDS Meter Test)
                </h3>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4">
                    <div className="flex items-center justify-between text-xs font-bold text-rose-400">
                      <span>STANDARD CITY TAP WATER</span>
                      <span>220 – 450 PPM TDS</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Leaves permanent mineral rings and white calcium deposits. Destroys ceramic coating hydrophobic performance.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                      <span>COMMERCIAL CAR WASH RECYCLED WATER</span>
                      <span>350 – 700 PPM TDS</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Heavily contaminated with recycled road salts, harsh caustic degreasers, and abrasive sand particles.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-primary/40 bg-primary/10 p-4 shadow-sm ring-1 ring-primary/30">
                    <div className="flex items-center justify-between text-xs font-extrabold text-primary">
                      <span>GRAND DUKE DEIONIZED HYDRO SYSTEM</span>
                      <span className="text-cyan-400 font-black">TRUE 0 PPM TDS</span>
                    </div>
                    <div className="mt-2 text-xs text-foreground/90 font-medium">
                      Aerospace-grade ion exchange purity. 100% mineral free. Evaporates completely clean with zero towel marring or spotting.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: 6-STEP MASTER WASH SEQUENCE                                    */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-surface-raised/40 border-t border-border/80">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="eyebrow mb-3 justify-center">
                <span />
                <span>EXECUTION SEQUENCE</span>
                <span />
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                6-Stage Gentle Hydro Wash Protocol
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Engineered to safely preserve factory clear coats and high-end quartz coatings without introducing wash marring.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
              {[
                {
                  step: "01",
                  title: "Underbody & Arch Flush",
                  desc: "Pressure rinse clears brake dust and corrosive road salts from fender liners and chassis.",
                },
                {
                  step: "02",
                  title: "Snow Foam Pre-Soak",
                  desc: "High-lubricity foam dwells on panels for 5 minutes, lifting and loosening bonded road grime.",
                },
                {
                  step: "03",
                  title: "Grit-Guard Hand Wash",
                  desc: "Ultra-plush Korean microfiber mitts glide along straight paint lines with zero pressure.",
                },
                {
                  step: "04",
                  title: "0 PPM Deionized Rinse",
                  desc: "Full vehicle bath with laboratory deionized water cascading away all remaining detergents.",
                },
                {
                  step: "05",
                  title: "Crevice Air Blow-Dry",
                  desc: "Warm filtered air dries mirrors, emblems, lug nuts, and weather seals without towel friction.",
                },
                {
                  step: "06",
                  title: "Hydrophobic Gloss Seal",
                  desc: "Polymer quartz booster misted and buffed with 1000 GSM microfiber for slick finish.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="group relative flex flex-col rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/50"
                >
                  <span className="font-mono text-xl font-black text-sky-400 mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-xs font-extrabold text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
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
                  <span>GALLERY ARCHIVE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Spot-Free Finishes in Any Weather
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Witness true optical depth without water marks or swirls.
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
                Hydro Wash FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Can you wash my car in direct sunlight without water spots?",
                  a: "Yes! Because our water is purified to 0 PPM total dissolved solids (containing zero calcium or mineral hardness), it leaves absolutely no residue when it dries under direct sunlight.",
                },
                {
                  q: "Do your mobile detailing vans bring their own water and electricity?",
                  a: "Yes. Our mobile concierge rigs are 100% self-contained with onboard 100-gallon deionized water tanks, ultra-quiet Honda generators, and commercial high-pressure pumps. We require zero hookups from your home or office.",
                },
                {
                  q: "Is your foam wash safe for matte and satin paint finishes?",
                  a: "Yes. Our foam wash utilizes 100% pH-neutral shampoo free of gloss enhancers, silicones, or waxes, ensuring delicate OEM matte, frozen, and satin finishes remain unaltered.",
                },
                {
                  q: "How often should I have a Deionized Hydro Wash performed?",
                  a: "For daily driven luxury vehicles, we recommend bi-weekly or monthly washes to prevent road film, iron particles, and bird droppings from bonding to your clear coat.",
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
              <span>EXPERIENCE SPOT-FREE PURITY</span>
              <span />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Schedule Your Deionized Spot-Free Wash Today
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Book your in-studio appointment or schedule our mobile concierge rig to visit your residence or workplace.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium" asChild>
                <a href="/book">
                  <CalendarDays className="size-4" />
                  <span>Book Hydro Wash</span>
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
