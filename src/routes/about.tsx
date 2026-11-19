import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  Droplets,
  Eye,
  HeartHandshake,
  Layers,
  MapPin,
  Pause,
  Phone,
  Play,
  RotateCcw,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Volume2,
  VolumeX,
  Wind,
  Zap,
} from "lucide-react";
import { Header } from "@/components/automotive/Header";
import { Footer } from "@/components/automotive/Footer";
import { MobileCTA } from "@/components/automotive/MobileCTA";
import { TrustStrip } from "@/components/automotive/TrustStrip";
import { PageBreadcrumb } from "@/components/automotive/PageBreadcrumb";
import { QuoteForm } from "@/components/automotive/QuoteForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import aboutVideo from "@/assets/about-video.mp4";
import polishAsset from "@/assets/grand-duke-polish.jpg.asset.json";

const description =
  "About Grand Duke Automotive: 17+ years of master-tier luxury detailing, paint correction, ceramic coatings, and concierge car care across City, Country and a 300-mile corridor.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About Us | Grand Duke Automotive — Precision. Protection. Perfection.",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "about grand duke automotive, luxury car detailing, ceramic coating studio, paint correction master, automotive detailing 17 years experience, certified detailing technicians, mobile detailing corridor",
      },
      {
        property: "og:title",
        content: "About Us | Grand Duke Automotive — Precision. Protection. Perfection.",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "About Grand Duke Automotive | Precision. Protection. Perfection.",
      },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Grand Duke Automotive",
          description,
          mainEntity: {
            "@type": "AutomotiveBusiness",
            name: "Grand Duke Automotive",
            telephone: "+14697967732",
            email: "detailbrandco@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1234 Main Street",
              addressLocality: "City",
              addressCountry: "Country",
            },
            priceRange: "$$$",
            openingHours: "Mo-Fr 00:00-24:00, Sa-Su 00:00-24:00",
            areaServed: "300-Mile Radius",
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const masterPillars = [
    {
      num: "01",
      title: "Certified Master Technicians",
      badge: "Master Certified Team",
      desc: "Our team is highly trained and certified in the latest paint correction and ceramic coating technologies. We treat every vehicle with the respect and meticulous attention to detail it deserves.",
      icon: Award,
      callout: "IDA Master Certified",
      features: [
        "Continuous technical calibration across European, Italian, and exotic clear coats",
        "Micro-measurement of factory paint depth via digital gauge diagnostics",
        "Dedicated senior technician assigned to oversee every stage of detailing",
      ],
    },
    {
      num: "02",
      title: "Laboratory-Grade Chemistry",
      badge: "Scientifically Formulated",
      desc: "We utilize only the finest, industry-leading products. From our multi-stage machine polishes to our advanced ceramic coatings, every chemical we use is selected for its safety, durability, and performance.",
      icon: Sparkles,
      callout: "Zero Caustic Fillers",
      features: [
        "High-purity SiO2 and quartz matrices providing extreme hydrophobic contact angles",
        "pH-neutral, non-staining snow foams engineered for soft clear coats",
        "Solvent-free interior feeding formulas for pristine matte factory revival",
      ],
    },
    {
      num: "03",
      title: "100% Automotive-Grade Detailing",
      badge: "Zero-Swirl Standard",
      desc: "We do not cut corners. Our processes are engineered to be entirely safe for your vehicle's clear coat, trim, and interior materials, ensuring zero swirl marks or damage.",
      icon: Target,
      callout: "Paint-Safe Protocol",
      features: [
        "Single-use edgeless 500+ GSM microfiber towels per panel section",
        "Color-coded, multi-bucket grit guard systems preventing cross-contamination",
        "Non-filling compounds revealing genuine optical clarity instead of temporary maskings",
      ],
    },
    {
      num: "04",
      title: "A Controlled Environment",
      badge: "HEPA Filtered Cleanroom",
      desc: "Dust and contaminants are the enemy of a flawless finish. Our detailing is performed in a climate-controlled, dust-free environment, utilizing HEPA air filtration to ensure a pristine finish every time.",
      icon: Wind,
      callout: "Dust-Free Facility",
      features: [
        "High-efficiency particulate air filtration scrubbing atmospheric contaminants",
        "Regulated temperature & ambient humidity for optimal ceramic bonding",
        "Multi-spectrum high-CRI LED inspection banks revealing micro-hazing and scratches",
      ],
    },
    {
      num: "05",
      title: "100% Satisfaction Guarantee",
      badge: "Unconditional Commitment",
      desc: "We stand behind our work. If you are not entirely thrilled with the results, we will make it right. Your trust is our most valuable asset.",
      icon: HeartHandshake,
      callout: "Guaranteed Perfection",
      features: [
        "Post-service digital multi-point inspection walkthrough before handover",
        "Complimentary touch-up adjustments if any detail falls short of perfection",
        "Ongoing client care advisory and ceramic coating maintenance support",
      ],
    },
  ];

  const disciplines = [
    {
      id: "paint-correction",
      title: "Paint Correction",
      tagline: "Restoring Depth & Optical Gloss",
      image: "/services/machine-polish.jpg",
      badge: "Flagship Discipline",
      desc: "Eliminating swirl marks, scratches, and oxidation through multi-stage machine polishing to restore unmatched depth and gloss.",
      specs: [
        { label: "Swirl Eradication", val: "95% – 99%" },
        { label: "Clarity Stage", val: "Multi-Stage Polish" },
        { label: "Reflection", val: "Deep Liquid Mirror" },
      ],
      details:
        "Using dual-action rotary polishers, precision micro-abrasives, and digital depth gauges, our master technicians systematically remove microscopic imperfections without compromising the structural integrity of your factory clear coat.",
    },
    {
      id: "ceramic-coating",
      title: "Ceramic Coating & Quartz Shields",
      tagline: "Hydrophobic Armor & Candy Shine",
      image: "/services/ceramic-shield.jpg",
      badge: "9H Nano Protection",
      desc: "Applying advanced nano-ceramic technologies that provide years of hydrophobic protection, chemical resistance, and an incredible, candy-like shine.",
      specs: [
        { label: "Hardness Rating", val: "9H Diamond Grade" },
        { label: "Protection Life", val: "Multi-Year Shield" },
        { label: "Surface Beading", val: "115° Contact Angle" },
      ],
      details:
        "Liquid quartz nanoparticles chemically bond with the clear coat at a molecular level, creating a sacrificial, glass-hard protective barrier impervious to road salt, acid rain, bird droppings, and harmful UV radiation.",
    },
    {
      id: "interior-restoration",
      title: "Interior Restoration",
      tagline: "New Car Feel & Leather Preservation",
      image: "/services/interior-steam.jpg",
      badge: "Clinical Sanitization",
      desc: "Deep cleaning and conditioning of leather, Alcantara, and textiles to restore that 'new car' feel while providing UV protection against future wear.",
      specs: [
        { label: "Thermal Steam", val: "220°F Hospital Grade" },
        { label: "Leather Care", val: "pH-Balanced Feeding" },
        { label: "Finish Quality", val: "OEM Matte Sheen" },
      ],
      details:
        "Every surface—from perforated aniline leather to intricate Alcantara stitching and climate vents—undergoes clinical thermal steam extraction, delicate enzyme cleansing, and UV shielding with zero greasy residue.",
    },
    {
      id: "decontamination-wash",
      title: "Decontamination & Wash",
      tagline: "Gentle Stripping of Embedded Fallout",
      image: "/services/foam-wash.jpg",
      badge: "0 PPM Deionized Water",
      desc: "Utilizing specialized iron removers, clay treatments, and pH-neutral foams to gently strip away embedded contaminants without harming the paint.",
      specs: [
        { label: "Water Quality", val: "0 PPM Spot-Free" },
        { label: "Foam Profile", val: "pH-Neutral Snow" },
        { label: "Decon Protocol", val: "Ferrous Iron Dissolution" },
      ],
      details:
        "A multi-phase decontamination process that begins with touchless high-lubricity foam encapsulation, followed by chemical fallout neutralization and ultra-fine clay bar exfoliation to leave paint glass-smooth.",
    },
  ];

  const packagesPreview = [
    {
      name: "True Shine",
      badge: "Foundational Care",
      desc: "Essential exterior deionized wash, deep decontamination, wheel face treatment, and complete interior cabin refresh.",
      bestFor: "Daily luxury maintenance & regular preservation",
      highlight: "Spotless 0 PPM Water Wash",
    },
    {
      name: "Panache",
      badge: "Signature Enhancement",
      desc: "Comprehensive exterior multi-stage wash, light single-stage gloss enhancement machine polish, and protective ceramic spray sealant.",
      bestFor: "Enhancing mirror gloss & introductory protection",
      highlight: "Gloss Polish & Ceramic Seal",
    },
    {
      name: "Luxurious",
      badge: "Master Correction",
      desc: "Multi-stage machine paint correction eradicating swirls, deep leather rejuvenation, and 1-year professional nano ceramic coating.",
      bestFor: "Swirl removal & long-lasting protective shine",
      highlight: "Multi-Stage Paint Correction",
    },
    {
      name: "Duo Signature",
      badge: "Concours Pinnacle",
      desc: "Our ultimate flagship concours detail: complete multi-stage optical correction, multi-year 9H ceramic shield, full interior revival, and engine bay detail.",
      bestFor: "Exotic, collector, and marquee show vehicles",
      highlight: "Multi-Year 9H Ceramic Shield",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      <Header />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: BRODCOME (BREADCRUMB & HERO ANTHEM BANNER)                     */}
        {/* ========================================================================= */}
        <section
          id="brodcome"
          aria-label="Brodcome Navigation & About Us Hero"
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
            <PageBreadcrumb currentPage="About Us" />

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              {/* Eyebrow Status Ribbon */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-cyan-300 backdrop-blur-md shadow-xs mb-4">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>EST. 2009 • 17+ YEARS OF CONCOURS EXCELLENCE</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12] text-center">
                About{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Grand Duke Automotive
                </span>
              </h1>

              {/* Anthem Tagline with Sapphire Gradient */}
              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent text-center">
                Precision. Protection. Perfection.
              </div>

              {/* Welcome Narrative */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium max-w-3xl mx-auto text-center">
                Welcome to Grand Duke Automotive, the premier destination for luxury automotive detailing and ceramic coating. We are not just a car wash; we are a dedicated team of automotive enthusiasts and certified technicians obsessed with the pursuit of perfection. Located in the heart of City, Country, we serve discerning car owners across a 300-mile radius who demand nothing less than absolute excellence for their prized vehicles.
              </p>

              {/* Quality Guarantee Pill */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>Cleanroom HEPA airflow studio • Laboratory-grade ceramic coatings • 100% Insured</span>
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

            {/* 4-Metric Luxury Stats Deck */}
            <div className="mt-14 grid gap-4 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {[
                {
                  value: "17+ Yrs",
                  label: "Mastery & Pedigree",
                  sub: "Continuous exotic clear-coat calibration",
                  icon: Award,
                  color: "text-amber-400",
                },
                {
                  value: "300 Mi",
                  label: "Service Radius",
                  sub: "Regional studio & mobile concierge corridor",
                  icon: Compass,
                  color: "text-cyan-400",
                },
                {
                  value: "100%",
                  label: "Satisfaction Pledge",
                  sub: "Guaranteed perfection on every finish",
                  icon: ShieldCheck,
                  color: "text-emerald-400",
                },
                {
                  value: "HEPA Lab",
                  label: "Cleanroom Facility",
                  sub: "Dust-free, climate-controlled studio",
                  icon: Wind,
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
        {/* SECTION 2: CONTROLLED STUDIO VIDEO SHOWCASE                               */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-14 sm:py-20 bg-surface/50 border-b border-border/60">
          <div className="site-shell relative z-10">
            <div className="mx-auto max-w-5xl">
              {/* Master Outer Frame with Luxury Glass & Metallic Accents */}
              <div className="group relative w-full overflow-hidden rounded-[2.25rem] border border-border/90 bg-card/70 p-2.5 sm:p-3.5 shadow-[0_30px_90px_-20px_rgba(15,23,42,0.18)] ring-1 ring-border/40 backdrop-blur-md transition-all duration-300 hover:border-primary/40">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-black">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={polishAsset.url}
                    className="w-full aspect-[16/9] sm:aspect-[21/9] object-cover block"
                    aria-label="Grand Duke Automotive studio paint correction and ceramic coating application"
                  >
                    <source src={aboutVideo} type="video/mp4" />
                    <source src="/about-video.mp4" type="video/mp4" />
                    <img
                      src={polishAsset.url}
                      width={1408}
                      height={1056}
                      loading="lazy"
                      alt="Grand Duke automotive specialist inspecting paint clarity under studio lights"
                      className="w-full aspect-[16/9] sm:aspect-[21/9] object-cover"
                    />
                  </video>

                  {/* Gradient overlays */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/40" />

                  {/* Top Left Live Status Beacon */}
                  <div className="absolute left-3 top-3 sm:left-5 sm:top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 sm:px-4 py-1.5 shadow-lg backdrop-blur-xl text-white">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest">
                      Controlled Studio Detailing Lab
                    </span>
                  </div>

                  {/* Top Right Experience Pill */}
                  <div className="absolute right-3 top-3 sm:right-5 sm:top-5 z-20 hidden xs:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] sm:text-xs font-bold text-white shadow-md backdrop-blur-xl">
                    <Shield className="size-3.5 text-sky-400" />
                    <span>17+ Years of Industry Mastery</span>
                  </div>

                  {/* Bottom Floating Atmosphere Caption */}
                  <div className="absolute bottom-3 left-3 right-20 sm:bottom-6 sm:left-6 sm:right-28 z-20 flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/20 bg-black/65 p-3 sm:p-4 shadow-xl backdrop-blur-xl text-white">
                    <div className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-primary/30 text-primary-bright ring-1 ring-white/15">
                      <Sparkles className="size-5 sm:size-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <b className="block text-xs sm:text-sm font-bold leading-tight truncate">
                        Where Science Meets Artistry
                      </b>
                      <span className="block mt-0.5 text-[11px] sm:text-xs text-slate-300 leading-tight truncate">
                        Multi-spectrum high-CRI illumination & dust-free HEPA air filtration
                      </span>
                    </div>
                  </div>

                  {/* Playback & Audio Controls */}
                  <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-20 flex items-center gap-1 rounded-full border border-white/20 bg-black/70 p-1.5 shadow-lg backdrop-blur-xl text-white">
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="grid size-8 place-items-center rounded-full text-white/90 transition-colors hover:bg-white/20 hover:text-white"
                    >
                      {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
                    </button>
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                      className="grid size-8 place-items-center rounded-full text-white/90 transition-colors hover:bg-white/20 hover:text-white"
                    >
                      {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: OUR STORY: BUILT ON TRUST, DRIVEN BY PASSION                   */}
        {/* ========================================================================= */}
        <section id="our-story" className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Narrative Column */}
            <div className="flex flex-col justify-center lg:col-span-7">
              <div className="eyebrow mb-4">
                <span />
                <span>OUR STORY &amp; ORIGIN</span>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Our Story:{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Built on Trust, Driven by Passion
                </span>
              </h2>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                With over 17 years of experience in the automotive care industry, Grand Duke Automotive was founded with a singular vision: to elevate the standard of vehicle detailing. We recognized that high-end vehicles—from daily-driven luxury sedans to track-focused supercars—require a level of care that goes far beyond traditional cleaning.
              </p>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                We established our state-of-the-art studio to provide a controlled environment where science meets artistry. Today, we are proud to be the trusted partner for collectors, dealerships, and luxury car owners who understand that proper maintenance is an investment in their vehicle’s value and longevity.
              </p>

              {/* 3 Story Evolution Highlights */}
              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-4 shadow-xs transition-all hover:border-primary/40">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-black text-xs">
                    01
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">The Founding Vision (2009)</h3>
                    <p className="mt-1 text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                      Rejecting high-volume speed washes in favor of forensic paint correction, calibrated chemistry, and artisanal precision for fine automobiles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-4 shadow-xs transition-all hover:border-primary/40">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-black text-xs">
                    02
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Controlled Studio Engineering</h3>
                    <p className="mt-1 text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                      Constructed a cleanroom-grade detailing studio with hospital-level HEPA filtration and optical inspection lighting where nano coatings bond with zero airborne contamination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-4 shadow-xs transition-all hover:border-primary/40">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-black text-xs">
                    03
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">The Trusted Partner Today</h3>
                    <p className="mt-1 text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                      Serving discerning private collectors, boutique luxury dealerships, and daily drivers across a 300-mile corridor who insist on peerless vehicle preservation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="relative lg:col-span-5">
              <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-2 sm:p-3 shadow-xl ring-1 ring-border/40 backdrop-blur-md">
                <div className="relative overflow-hidden rounded-2xl bg-slate-900">
                  <img
                    src="/services/hood-reflection.jpg"
                    alt="Grand Duke automotive mirror finish clarity reflection"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Floating Philosophy Card */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 rounded-2xl border border-white/20 bg-black/70 p-4 shadow-xl backdrop-blur-xl text-white">
                    <div className="flex items-center gap-2 text-primary-bright">
                      <Sparkles className="size-4" />
                      <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-primary-bright">
                        Our Guiding Philosophy
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm font-semibold leading-relaxed text-slate-200 italic">
                      “Proper maintenance is an investment in your vehicle’s value and longevity.”
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Grand Duke Studio Atelier</span>
                      <span className="text-emerald-400 font-bold">17+ Years of Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: THE GRAND DUKE DIFFERENCE: WHY CHOOSE US?                      */}
        {/* ========================================================================= */}
        <section id="why-choose-us" className="relative overflow-hidden py-16 sm:py-24 bg-surface/60 border-y border-border/70">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="eyebrow mb-4">
                <span />
                <span>UNCOMPROMISING STANDARDS</span>
                <span />
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                The Grand Duke Difference:{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Why Choose Us?
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                We believe that true detailing is a craft. Our facility is built around a comprehensive, multi-stage process designed to protect and enhance every square inch of your vehicle.
              </p>
            </div>

            {/* 5 Master Pillars Grid */}
            <div className="mt-12 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {masterPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const isWide = index === 3 || index === 4;
                return (
                  <div
                    key={pillar.title}
                    className={cn(
                      "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1",
                      isWide && "lg:col-span-1.5",
                      index === 4 && "sm:col-span-2 lg:col-span-1",
                    )}
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 transition-transform duration-200 group-hover:scale-110">
                          <Icon className="size-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-surface-raised px-2.5 py-0.5 text-[10px] font-extrabold text-muted-foreground">
                            {pillar.num}
                          </span>
                          <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10.5px] font-bold text-primary">
                            {pillar.callout}
                          </span>
                        </div>
                      </div>

                      <div className="mt-5">
                        <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                          {pillar.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-medium">
                          {pillar.desc}
                        </p>
                      </div>

                      {/* Feature Bullet List */}
                      <ul className="mt-5 space-y-2 border-t border-border/50 pt-4 text-xs text-muted-foreground">
                        {pillar.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-semibold text-primary">
                      <span>{pillar.badge}</span>
                      <ChevronRight className="size-3.5 opacity-60 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: OUR DISCIPLINES: THE SCIENCE OF SHINE                          */}
        {/* ========================================================================= */}
        <section id="disciplines" className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="eyebrow mb-4">
                <span />
                <span>CURATED CORE EXPERTISE</span>
                <span />
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Our Disciplines:{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  The Science of Shine
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                We offer a curated selection of services designed to address every aspect of vehicle preservation. Our expertise includes:
              </p>
            </div>

            {/* 4 Disciplines Grid */}
            <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8 items-stretch">
              {disciplines.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
                >
                  <div>
                    {/* Media Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-black aspect-[16/9] w-full">
                      <img
                        src={item.image}
                        alt={`Grand Duke Automotive ${item.title}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                      {/* Top Left Badge */}
                      <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-extrabold text-white backdrop-blur-md">
                        <Sparkles className="size-3 text-sky-400" />
                        <span>{item.badge}</span>
                      </div>

                      {/* Bottom Title on Image */}
                      <div className="absolute bottom-3 left-3 right-3 z-10">
                        <div className="text-lg font-black text-white">{item.title}</div>
                        <div className="text-[11px] text-slate-300 font-medium">{item.tagline}</div>
                      </div>
                    </div>

                    {/* Content Narrative */}
                    <div className="mt-5 px-1">
                      <p className="text-sm font-semibold text-foreground leading-relaxed">
                        {item.desc}
                      </p>
                      <p className="mt-2 text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                        {item.details}
                      </p>
                    </div>

                    {/* Technical Specs Strip */}
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-border/70 bg-surface/70 p-3 text-center">
                      {item.specs.map((spec) => (
                        <div key={spec.label} className="min-w-0">
                          <div className="text-[10px] uppercase font-bold text-muted-foreground truncate">
                            {spec.label}
                          </div>
                          <div className="mt-0.5 text-xs sm:text-[13px] font-extrabold text-foreground truncate">
                            {spec.val}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-muted-foreground">
                      Laboratory Formulated Treatment
                    </span>
                    <a
                      href="#consultation"
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline"
                    >
                      <span>Inquire Detail</span>
                      <ArrowRight className="size-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: TRANSPARENT PRICING, UNCOMPROMISING QUALITY                    */}
        {/* ========================================================================= */}
        <section id="pricing-transparency" className="relative overflow-hidden py-16 sm:py-24 bg-surface/50 border-y border-border/70">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="eyebrow mb-4">
                <span />
                <span>CALIBRATED CARE PACKAGES</span>
                <span />
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Transparent Pricing,{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Uncompromising Quality
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                We believe in complete transparency. That is why we have structured our services into clear, calibrated packages—from our foundational True Shine to our ultimate Luxurious and Duo Signature services. Whether you are looking for a comprehensive ceramic coating or a meticulous maintenance wash, you can trust that you are receiving the best value and the highest quality of workmanship.
              </p>
            </div>

            {/* 4 Calibrated Tier Cards */}
            <div className="mt-12 sm:mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
              {packagesPreview.map((pkg) => (
                <div
                  key={pkg.name}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10.5px] font-bold text-primary">
                      <Sparkles className="size-3" />
                      <span>{pkg.badge}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-black tracking-tight text-foreground">
                      {pkg.name}
                    </h3>

                    <div className="mt-2 text-xs font-semibold text-emerald-600">
                      {pkg.highlight}
                    </div>

                    <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-muted-foreground">
                      {pkg.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/60">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                      Recommended For
                    </div>
                    <div className="mt-0.5 text-xs font-semibold text-foreground">
                      {pkg.bestFor}
                    </div>

                    <Button
                      variant="hero"
                      size="sm"
                      className="mt-4 w-full rounded-xl text-xs font-bold"
                      asChild
                    >
                      <a href="#consultation">Reserve Package</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/#services"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:underline"
              >
                <span>View Full Comparison Matrix &amp; Vehicle Class Rates</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: SERVING OUR COMMUNITY (300-MILE CORRIDOR)                      */}
        {/* ========================================================================= */}
        <section id="community" className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Narrative */}
            <div className="lg:col-span-6">
              <div className="eyebrow mb-4">
                <span />
                <span>STUDIO ATELIER &amp; CONCIERGE FLEET</span>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Serving Our{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Community
                </span>
              </h2>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Based in City, Country, Grand Duke Automotive is proud to serve the surrounding region. Whether you are local to the area or driving in from out of state, our studio is equipped to handle your vehicle's needs. We also offer specialized concierge and mobile detailing services for select packages, bringing our expertise directly to your home or office.
              </p>

              {/* Corridor Highlights */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 rounded-2xl border border-border/75 bg-card p-4 shadow-xs">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Flagship Studio Facility</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      Located at 1234 Main Street, City, Country. Fully equipped with HEPA cleanroom bays and staging areas for multi-day ceramic applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-border/75 bg-card p-4 shadow-xs">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Zap className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Autonomous Mobile Laboratories</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      For select packages, our self-powered mobile rigs arrive with onboard spotless 0 PPM deionized water and silent electricity. Zero hookups needed at your residence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl border border-border/75 bg-card p-4 shadow-xs">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                    <Compass className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">300-Mile Regional Service Corridor</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      Serving discerning clients, multi-vehicle private collections, and exotic dealerships across our regional 300-mile operating corridor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Map Image */}
            <div className="relative lg:col-span-6">
              <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-3 shadow-xl ring-1 ring-border/40 backdrop-blur-md">
                <div className="relative overflow-hidden rounded-2xl bg-black">
                  <img
                    src="/service-area-map.jpg"
                    alt="Grand Duke Automotive 300-mile service corridor map"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Floating Corridor Status Pill */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/65 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-xl">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    <span>300-Mile Corridor Active</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-xl border border-white/20 bg-black/75 p-3 text-xs text-white backdrop-blur-xl">
                    <div>
                      <div className="font-extrabold text-sm">City, Country Base Studio</div>
                      <div className="text-[11px] text-slate-300">Concierge pick-up &amp; mobile fleet dispatch</div>
                    </div>
                    <a
                      href="tel:+14697967732"
                      className="rounded-lg bg-primary px-3 py-1.5 text-[11px] font-bold text-white hover:bg-primary-bright"
                    >
                      Call Fleet
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: AUTOMAKER BRAND MARQUE TRUST STRIP                            */}
        {/* ========================================================================= */}
        <TrustStrip />

        {/* ========================================================================= */}
        {/* SECTION 9: EXPERIENCE THE GRAND DUKE DIFFERENCE (CONSULTATION & BOOKING)   */}
        {/* ========================================================================= */}
        <section id="consultation" className="relative overflow-hidden py-16 sm:py-24 bg-surface/40">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="eyebrow mb-4">
                <span />
                <span>RESERVE YOUR EXPERIENCE</span>
                <span />
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Experience the{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Grand Duke Difference
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Experience the Grand Duke difference. Contact us today to schedule your consultation or reserve your detailing experience.
              </p>
            </div>

            {/* Direct Hotline Banner */}
            <div className="mb-10 mx-auto max-w-4xl grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card p-4 shadow-xs">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Phone className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                    Direct Concierge
                  </div>
                  <a
                    href="tel:+14697967732"
                    className="text-sm font-bold text-foreground hover:text-primary truncate block"
                  >
                    (469) 796-7732
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card p-4 shadow-xs">
                <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0">
                  <Clock className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                    Operating Hours
                  </div>
                  <div className="text-xs font-bold text-foreground">
                    Mon – Fri: 24 Hours
                  </div>
                  <div className="text-[10px] text-emerald-600 font-semibold">
                    24/7 Emergency Service
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card p-4 shadow-xs">
                <div className="flex size-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                    Studio Atelier
                  </div>
                  <div className="text-xs font-bold text-foreground truncate">
                    1234 Main Street
                  </div>
                  <div className="text-[10.5px] text-muted-foreground truncate">
                    City, Country
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive 3-Step Booking / Consultation Form */}
            <QuoteForm />
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
}

