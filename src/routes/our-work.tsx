import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  CalendarDays,
  Camera,
  Car,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Filter,
  Grid2X2,
  Grid3X3,
  Layers,
  LayoutGrid,
  Maximize2,
  Phone,
  RotateCcw,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
  ZoomIn,
} from "lucide-react";
import { Header } from "@/components/automotive/Header";
import { Footer } from "@/components/automotive/Footer";
import { MobileCTA } from "@/components/automotive/MobileCTA";
import { TrustStrip } from "@/components/automotive/TrustStrip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  galleryPhotos,
  galleryStats,
  type GalleryPhoto,
} from "@/data/galleryImages";

const description =
  "Explore 77+ verified luxury automotive detailing transformations by Grand Duke Automotive. Multi-stage paint correction, 9H liquid quartz ceramic coatings, interior steam revival, and supercar restoration.";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      {
        title:
          "Our Work & Gallery | Grand Duke Automotive — Precision Detailing Exhibition",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "grand duke automotive our work, car detailing gallery, paint correction portfolio, ceramic coating before and after, luxury auto detailing photos, exotic car detailing studio, vehicle transformations",
      },
      {
        property: "og:title",
        content: "Our Work & Gallery | Grand Duke Automotive",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-work" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Our Work & Gallery | Grand Duke Automotive",
      },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/our-work" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Our Work & Gallery | Grand Duke Automotive",
          description,
          provider: {
            "@type": "AutomotiveBusiness",
            name: "Grand Duke Automotive",
            telephone: "+14697967732",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1234 Main Street",
              addressLocality: "City",
              addressCountry: "Country",
            },
          },
        }),
      },
    ],
  }),
  component: OurWorkPage,
});

// Category pills
const categoryTabs = [
  { id: "all", label: "All Works", count: galleryStats.total },
  {
    id: "paint-correction",
    label: "Paint Correction",
    count: galleryStats.paintCorrection,
  },
  { id: "ceramic", label: "Ceramic & Quartz", count: galleryStats.ceramic },
  { id: "interior", label: "Interior & Steam", count: galleryStats.interior },
  { id: "wheels", label: "Wheels & Calipers", count: galleryStats.wheels },
  { id: "exotics", label: "Exotics & Fleet", count: galleryStats.exotics },
];

const categoryColorStyles: Record<
  GalleryPhoto["category"],
  { badge: string; border: string; glow: string }
> = {
  "paint-correction": {
    badge: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    border: "hover:border-blue-500/40",
    glow: "group-hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.2)]",
  },
  ceramic: {
    badge: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20",
    border: "hover:border-cyan-500/40",
    glow: "group-hover:shadow-[0_12px_28px_-6px_rgba(6,182,212,0.2)]",
  },
  interior: {
    badge: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    border: "hover:border-emerald-500/40",
    glow: "group-hover:shadow-[0_12px_28px_-6px_rgba(16,185,129,0.2)]",
  },
  wheels: {
    badge: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    border: "hover:border-amber-500/40",
    glow: "group-hover:shadow-[0_12px_28px_-6px_rgba(245,158,11,0.2)]",
  },
  exotics: {
    badge: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    border: "hover:border-purple-500/40",
    glow: "group-hover:shadow-[0_12px_28px_-6px_rgba(168,85,247,0.2)]",
  },
};

const disciplines = [
  {
    title: "Optical Paint Clarification",
    subtitle: "Multi-Stage Rotary & Dual-Action Machine Polish",
    desc: "We eliminate up to 95%+ of wash scratches, spiderwebs, swirls, and etching. Clear coat depth is measured with ultrasonic gauges before every machine pass, delivering liquid-mirror gloss without compromising clear coat integrity.",
    badge: "Flagship Discipline",
    icon: Sparkles,
  },
  {
    title: "Liquid Quartz 9H Ceramic Fusion",
    subtitle: "Molecular-Bonded Surface Glass Armor",
    desc: "Cured under infrared bake arrays in our cleanroom studio. The ceramic shield provides hyper-hydrophobic water contact angles (>115°), 5-year chemical resilience (pH 2–13), and permanent candy-wet depth.",
    badge: "5-Year Guarantee",
    icon: ShieldCheck,
  },
  {
    title: "Thermal Dry Steam Cabin Revival",
    subtitle: "High-Pressure Decontamination & Alcantara Restoration",
    desc: "Pressurized 280°F dry thermal steam extracts dirt, body oils, and allergens from carpet fibers, perforated leather, and Alcantara with zero sticky residue or harsh scents. Reconditioned with natural matte lanolin.",
    badge: "Zero Chemical Odor",
    icon: Layers,
  },
  {
    title: "Cleanroom Environmental Control",
    subtitle: "0 PPM Deionized Water & Positive-Pressure HEPA Air",
    desc: "Dust and airborne particulate are the enemies of flawless paint correction. Our studio maintains HEPA-filtered positive air pressure, surgical lighting arrays, and self-contained 0 PPM water filtration.",
    badge: "Laboratory Grade",
    icon: Zap,
  },
];

const clientHighlights = [
  {
    quote:
      "The most meticulous detailers I have ever used. The multi-stage polish removed years of swirl marks, and the ceramic coating has made maintenance washes incredibly easy.",
    author: "Dennis P.",
    vehicle: "Porsche 911",
    tag: "Panache Package",
  },
  {
    quote:
      "The multi-stage machine polish brought out a depth of color I didn't even know the paint had. Bug splatter and road grime wipe off effortlessly.",
    author: "James Harrington",
    vehicle: "Chevrolet Corvette C8",
    tag: "Panache Tier",
  },
  {
    quote:
      "I am incredibly particular about who touches my paint. Grand Duke Automotive is the real deal. My black paint is now flawless and mirror-like.",
    author: "Marcus Thorne",
    vehicle: "Porsche 718 Cayman",
    tag: "True Shine Correction",
  },
];

const INITIAL_BATCH_SIZE = 24;
const BATCH_INCREMENT = 24;

function OurWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [layoutMode, setLayoutMode] = useState<"dense" | "featured">("dense");

  // Filtered photos
  const filteredPhotos = useMemo(() => {
    return galleryPhotos.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.vehicle.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Reset pagination when filter changes
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH_SIZE);
  }, [selectedCategory, searchQuery]);

  // Lightbox keyboard navigation
  const currentIndex = activePhoto
    ? filteredPhotos.findIndex((p) => p.id === activePhoto.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setActivePhoto(filteredPhotos[currentIndex - 1] ?? null);
    } else if (filteredPhotos.length > 0) {
      setActivePhoto(filteredPhotos[filteredPhotos.length - 1] ?? null);
    }
  }, [currentIndex, filteredPhotos]);

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < filteredPhotos.length - 1) {
      setActivePhoto(filteredPhotos[currentIndex + 1] ?? null);
    } else if (filteredPhotos.length > 0) {
      setActivePhoto(filteredPhotos[0] ?? null);
    }
  }, [currentIndex, filteredPhotos]);

  useEffect(() => {
    if (!activePhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setActivePhoto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto, handlePrev, handleNext]);

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPhotos.length;

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      <Header />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & ANTHEM                                                  */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-border/70 bg-gradient-to-b from-card via-background to-surface/40">
          {/* Luxury High-Gloss Automotive Background Image with Overlays */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/hood-reflection.jpg"
              alt="Grand Duke automotive reflection and clear coat mirror finish"
              className="h-full w-full object-cover object-center scale-105 opacity-[0.16]"
            />
            {/* Ambient Vignette & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/85 via-background/90 to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/12 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#00000018_1px,transparent_1px),linear-gradient(to_bottom,#00000018_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>

          {/* Ambient Lighting Gradients */}
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-sky-400/10 blur-[140px]"
            aria-hidden="true"
          />

          <div className="site-shell relative z-10">
            {/* Breadcrumb Navigation - Centered */}
            <nav
              className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground mx-auto"
              aria-label="Breadcrumb"
            >
              <a href="/" className="transition-colors hover:text-primary">
                Home
              </a>
              <ChevronRight className="size-3 opacity-40" />
              <span className="text-foreground">Our Work</span>
            </nav>

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              {/* Eyebrow Ribbon */}
              <div className="eyebrow mb-4 mx-auto justify-center">
                <span />
                <span>EXHIBITION OF PERFECTION • 77 VERIFIED TRANSFORMATIONS</span>
                <span />
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[44px] lg:leading-[1.15] text-center">
                Our Work &amp;{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>

              {/* Tagline */}
              <div className="mt-2.5 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent text-center">
                Precision in Every Reflection. Perfection in Every Line.
              </div>

              {/* Narrative Paragraph */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground font-medium max-w-3xl mx-auto text-center">
                Welcome to the Grand Duke Automotive photographic exhibition. Over 17+ years of master craftsmanship, we have treated, corrected, and ceramic-shielded the world’s most discerning luxury vehicles, track-focused supercars, and prized collector classics. Every vehicle documented below was detailed inside our dust-free, climate-controlled studio or by our autonomous mobile concierge fleet across our 300-mile corridor.
              </p>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground/90 max-w-2xl mx-auto text-center">
                No filters. No staging tricks. Just true laboratory-grade detailing craftsmanship.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Button
                  variant="hero"
                  className="h-12 rounded-full px-7 text-xs sm:text-sm font-extrabold shadow-premium tracking-wide transition-all duration-200 hover:scale-[1.02]"
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
                  className="h-12 rounded-full px-6 text-xs sm:text-sm font-bold"
                  asChild
                >
                  <a href="/free-estimate">
                    <Sparkles className="size-4" />
                    <span>Request Free Estimate</span>
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>

                <a
                  href="tel:64687967732"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 bg-card px-5 text-xs sm:text-sm font-bold text-foreground shadow-xs transition-all duration-200 hover:border-primary/40 hover:text-primary"
                >
                  <Phone className="size-3.5 text-primary" />
                  <span>Call: 6468 796 7732</span>
                </a>
              </div>
            </div>

            {/* 4-Card Luxury KPI Stats Deck */}
            <div className="mt-14 grid gap-4 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {[
                {
                  value: "77+",
                  label: "Studio Works Showcased",
                  sub: "All 77 real project photos archive",
                  icon: Camera,
                  color: "text-primary",
                },
                {
                  value: "17+",
                  label: "Years Master Craftsmanship",
                  sub: "Certified master technicians",
                  icon: Award,
                  color: "text-amber-500",
                },
                {
                  value: "99%",
                  label: "Defect & Swirl Rectification",
                  sub: "Multi-stage machine calibration",
                  icon: ShieldCheck,
                  color: "text-emerald-500",
                },
                {
                  value: "5.0 ★",
                  label: "Verified Client Rating",
                  sub: "Based on 120+ Google reviews",
                  icon: Star,
                  color: "text-sky-500",
                },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-5 shadow-xs backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className={cn("text-2xl sm:text-3xl font-black tracking-tight", stat.color)}>
                        {stat.value}
                      </div>
                      <div className="flex size-9 items-center justify-center rounded-xl bg-surface border border-border/70 text-muted-foreground">
                        <Icon className="size-4" />
                      </div>
                    </div>
                    <div className="mt-2 text-xs sm:text-sm font-extrabold text-foreground">
                      {stat.label}
                    </div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground font-medium">
                      {stat.sub}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: INTERACTIVE GALLERY EXHIBITION (77 IMAGES)                     */}
        {/* ========================================================================= */}
        <section id="gallery-exhibition" className="relative overflow-hidden py-14 sm:py-20 bg-background scroll-mt-24">
          <div className="site-shell relative z-10">
            {/* Header & Controls Bar */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-12">
              <div>
                <div className="eyebrow mb-2">
                  <span />
                  <span>PHOTOGRAPHIC ARCHIVE</span>
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[34px] leading-tight">
                  Exhibition Archive ({filteredPhotos.length} Commissions)
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                  Click any image to launch the high-resolution inspection lightbox.
                </p>
              </div>

              {/* Search & Layout Toggles */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by make or treatment..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 pl-9 pr-8 text-xs rounded-xl bg-card border-border/80"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 size-5 flex items-center justify-center text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-3.5" />
                    </button>
                  )}
                </div>

                {/* Grid Density Switcher */}
                <div className="hidden sm:flex items-center rounded-xl border border-border/80 bg-card p-1 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setLayoutMode("dense")}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                      layoutMode === "dense"
                        ? "bg-primary text-white shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    title="4-Column Exhibition Grid"
                  >
                    <Grid3X3 className="size-3.5" />
                    <span className="hidden md:inline">Dense (4-Col)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLayoutMode("featured")}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                      layoutMode === "featured"
                        ? "bg-primary text-white shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    title="3-Column Cinematic Grid"
                  >
                    <Grid2X2 className="size-3.5" />
                    <span className="hidden md:inline">Cinematic (3-Col)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Filter Tabs Capsule */}
            <div className="mb-8 flex flex-wrap items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categoryTabs.map((tab) => {
                const isSelected = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedCategory(tab.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap",
                      isSelected
                        ? "border-primary bg-primary text-white shadow-xs"
                        : "border-border/80 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-surface"
                    )}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.2 text-[10px] font-extrabold",
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ── Gallery Cards Grid ── */}
            {filteredPhotos.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-border/80 bg-card/60 p-12 text-center my-8">
                <Search className="size-10 text-muted-foreground/40 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground">
                  No transformations match your search
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Try adjusting your keywords or clearing the category filter.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 rounded-full text-xs font-bold"
                >
                  <RotateCcw className="size-3.5 mr-1.5" />
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div
                className={cn(
                  "grid gap-4 sm:gap-5",
                  layoutMode === "dense"
                    ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                )}
              >
                {visiblePhotos.map((photo, index) => {
                  const style = categoryColorStyles[photo.category];
                  return (
                    <div
                      key={photo.id}
                      onClick={() => setActivePhoto(photo)}
                      className={cn(
                        "group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ring-1 ring-border/30",
                        style.border,
                        style.glow
                      )}
                    >
                      {/* Image Frame */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                        <img
                          src={photo.src}
                          alt={`${photo.vehicle} - ${photo.title} by Grand Duke Automotive`}
                          loading={index < 8 ? "eager" : "lazy"}
                          decoding="async"
                          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                        />

                        {/* Top Gradient & Pill Badge */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 p-3 flex items-center justify-between bg-gradient-to-b from-black/60 via-transparent to-transparent">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold backdrop-blur-md shadow-xs",
                              style.badge
                            )}
                          >
                            <Sparkles className="size-2.5 shrink-0" />
                            <span>{photo.badge}</span>
                          </span>

                          <span className="text-[10px] font-mono font-bold text-white/80 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs">
                            #{index + 1}
                          </span>
                        </div>

                        {/* Hover Overlay with Zoom Icon */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                          <div className="flex items-center justify-between text-white">
                            <div>
                              <div className="text-xs font-black tracking-wide">
                                {photo.vehicle}
                              </div>
                              <div className="text-[11px] text-slate-300 font-medium line-clamp-1">
                                {photo.title}
                              </div>
                            </div>
                            <div className="flex size-8 items-center justify-center rounded-full bg-primary/90 text-white shadow-md backdrop-blur-xs transform scale-90 group-hover:scale-100 transition-transform">
                              <ZoomIn className="size-4" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card Bottom Meta (Always Visible for Crisp Hierarchy) */}
                      <div className="p-3.5 sm:p-4 bg-card border-t border-border/50">
                        <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1">
                          <span className="font-bold text-primary truncate max-w-[70%]">
                            {photo.categoryLabel}
                          </span>
                          <span className="text-[10px] font-semibold">Verified</span>
                        </div>
                        <h3 className="text-xs sm:text-[13px] font-bold text-foreground leading-snug line-clamp-1 group-hover:text-primary transition-colors">
                          {photo.vehicle}
                        </h3>
                        <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed line-clamp-1">
                          {photo.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Load More / Show All Pagination Bar */}
            {hasMore && (
              <div className="mt-12 text-center flex flex-col items-center">
                <div className="text-xs text-muted-foreground font-semibold mb-4">
                  Displaying {visiblePhotos.length} of {filteredPhotos.length} studio transformations
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button
                    variant="hero"
                    onClick={() => setVisibleCount((prev) => prev + BATCH_INCREMENT)}
                    className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium tracking-wide transition-all hover:scale-[1.02]"
                  >
                    <span>Load Next {Math.min(BATCH_INCREMENT, filteredPhotos.length - visibleCount)} Works</span>
                    <ChevronRight className="size-4 ml-1" />
                  </Button>

                  <Button
                    variant="glass"
                    onClick={() => setVisibleCount(filteredPhotos.length)}
                    className="h-12 rounded-full px-6 text-xs sm:text-sm font-bold"
                  >
                    <span>Show All {filteredPhotos.length} Works</span>
                    <Maximize2 className="size-3.5 ml-1.5" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: SPOTLIGHT DISCIPLINES (THE SCIENCE OF SHINE)                   */}
        {/* ========================================================================= */}
        <section id="disciplines" className="relative overflow-hidden py-16 sm:py-24 bg-surface/60 border-y border-border/70">
          <div className="site-shell relative z-10 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>METICULOUS STANDARDS</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Our Disciplines:{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  The Science of Shine
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Every reflection documented in our portfolio is the deliberate outcome of chemical science, optical measurement, and 17+ years of certified craft.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {disciplines.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div
                    key={i}
                    className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                        <Icon className="size-6" />
                      </div>

                      <div className="mt-4 text-[10.5px] font-extrabold uppercase tracking-widest text-primary">
                        {d.badge}
                      </div>

                      <h3 className="text-lg font-bold text-foreground mt-1 leading-snug">
                        {d.title}
                      </h3>

                      <div className="mt-1 text-xs font-semibold text-muted-foreground">
                        {d.subtitle}
                      </div>

                      <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-medium">
                        {d.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/50 text-[11px] font-bold text-emerald-600 flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-emerald-500" />
                      <span>Certified Master Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: CLIENT TESTIMONIALS SPOTLIGHT                                   */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10 max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>CLIENT VERIFICATION</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Verified by Discerning{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Vehicle Owners
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Hear what collectors, performance drivers, and daily owners say after inspecting their completed transformations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {clientHighlights.map((rev, i) => (
                <div
                  key={i}
                  className="relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed italic">
                      "{rev.quote}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-foreground">
                        {rev.author}
                      </div>
                      <div className="text-[11px] text-muted-foreground font-medium">
                        {rev.vehicle}
                      </div>
                    </div>
                    <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-extrabold text-primary">
                      {rev.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="/reviews"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-primary-bright transition-colors"
              >
                <span>Read all 120+ Verified Client Reviews</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: CLOSING CALL TO ACTION                                         */}
        {/* ========================================================================= */}
        <section id="closing-cta" className="relative overflow-hidden py-16 sm:py-24 bg-surface/60 border-t border-border/70">
          <div className="site-shell relative z-10 max-w-4xl mx-auto text-center">
            <div className="eyebrow mb-4 justify-center">
              <span />
              <span>COMMISSION YOUR DETAIL</span>
              <span />
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[38px] lg:leading-[1.18]">
              Ready to Give Your Vehicle the{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Grand Duke Treatment?
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium max-w-2xl mx-auto">
              Your vehicle deserves more than a standard wash. Lock in your studio reservation or schedule a mobile detailing visit backed by our 100% satisfaction guarantee.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="hero"
                className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium tracking-wide transition-all hover:scale-[1.02]"
                asChild
              >
                <a href="/book">
                  <CalendarDays className="size-4" />
                  <span>BOOK YOUR DETAIL NOW</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>

              <Button
                variant="glass"
                className="h-12 rounded-full px-7 text-xs sm:text-sm font-bold"
                asChild
              >
                <a href="/free-estimate">
                  <Sparkles className="size-4" />
                  <span>Request Free Estimate</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>

              <a
                href="tel:64687967732"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 text-xs sm:text-sm font-extrabold text-primary shadow-xs transition-all hover:bg-primary hover:text-white"
              >
                <Phone className="size-4" />
                <span>Call: 6468 796 7732</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500" />
                <span>Climate-Controlled HEPA Studio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500" />
                <span>300-Mile Concierge Corridor</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Marque Strip */}
        <TrustStrip />
      </main>

      {/* ========================================================================= */}
      {/* HIGH-RESOLUTION INSPECTION LIGHTBOX DIALOG                                */}
      {/* ========================================================================= */}
      <Dialog
        open={Boolean(activePhoto)}
        onOpenChange={(open) => !open && setActivePhoto(null)}
      >
        <DialogContent className="max-w-5xl p-0 overflow-hidden border border-white/20 bg-slate-950 text-white shadow-2xl rounded-2xl sm:rounded-3xl">
          {activePhoto && (
            <div className="relative flex flex-col bg-slate-950">
              {/* Lightbox Top Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 py-3.5 bg-slate-900/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-xs font-bold text-primary-bright">
                    {activePhoto.badge}
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-white truncate max-w-[220px] sm:max-w-md">
                    {activePhoto.vehicle}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-[11px] font-mono text-slate-400">
                    {currentIndex + 1} of {filteredPhotos.length}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActivePhoto(null)}
                    aria-label="Close Lightbox"
                    className="flex size-8 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              {/* Main Image Stage with Next/Prev Overlay Arrows */}
              <div className="relative flex items-center justify-center bg-black min-h-[300px] max-h-[75vh] overflow-hidden">
                <img
                  src={activePhoto.src}
                  alt={`${activePhoto.vehicle} - ${activePhoto.title}`}
                  className="max-h-[75vh] w-auto max-w-full object-contain mx-auto select-none"
                />

                {/* Left arrow */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Previous Transformation"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 backdrop-blur-md hover:bg-primary transition-all hover:scale-105 cursor-pointer"
                >
                  <ChevronLeft className="size-6" />
                </button>

                {/* Right arrow */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Next Transformation"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 backdrop-blur-md hover:bg-primary transition-all hover:scale-105 cursor-pointer"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>

              {/* Lightbox Bottom Detail & Action Footer */}
              <div className="border-t border-white/10 p-4 sm:p-6 bg-slate-900/90 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="max-w-xl">
                  <div className="text-sm sm:text-base font-extrabold text-white">
                    {activePhoto.title}
                  </div>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
                    {activePhoto.description}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <Button
                    variant="hero"
                    className="h-10 rounded-full px-5 text-xs font-bold w-full sm:w-auto"
                    asChild
                  >
                    <a href="/book">
                      <CalendarDays className="size-3.5 mr-1.5" />
                      <span>Book Treatment</span>
                    </a>
                  </Button>

                  <Button
                    variant="glass"
                    className="h-10 rounded-full px-4 text-xs font-bold text-white border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a href="/free-estimate">
                      <span>Get Quote</span>
                      <ArrowUpRight className="size-3.5 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <MobileCTA />
    </div>
  );
}
