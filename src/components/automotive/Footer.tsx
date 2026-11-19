import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
  ShieldCheck,
  Droplets,
  CalendarDays,
  CheckCircle2,
  Award,
  Star,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { BrandMark } from "./BrandMark";
import { Button } from "@/components/ui/button";

// Official Google 4-color SVG Icon
function GoogleGIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export function Footer() {
  const signatureServices = [
    {
      name: "Multi-Stage Machine Polish",
      tag: "Stage 1 & 2",
      href: "/services/machine-polish",
      accent: "text-amber-400 group-hover:text-amber-300",
    },
    {
      name: "Concours Ceramic & Quartz Shield",
      tag: "9H Quartz",
      href: "/services/ceramic-shield",
      accent: "text-cyan-400 group-hover:text-cyan-300",
    },
    {
      name: "Deionized Spot-Free Hydro Wash",
      tag: "0 PPM Pure",
      href: "/services/deionized-wash",
      accent: "text-sky-400 group-hover:text-sky-300",
    },
    {
      name: "Interior Leather Restoration & Steam",
      tag: "220°F Vapor",
      href: "/services/interior-steam",
      accent: "text-emerald-400 group-hover:text-emerald-300",
    },
    {
      name: "Wheel Decon & Satin Dressing",
      tag: "Iron Purge",
      href: "/services/wheel-glass",
      accent: "text-indigo-400 group-hover:text-indigo-300",
    },
    {
      name: "The Duke Signature Concours Detail",
      tag: "Master Tier",
      href: "/services/signature-detail",
      accent: "text-amber-300 group-hover:text-amber-200",
    },
  ];

  const navigationLinks = [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/about" },
    { label: "Services Hub", href: "/services" },
    { label: "Our Work & Gallery (77+)", href: "/our-work" },
    { label: "Verified Reviews", href: "/reviews" },
    { label: "Free Online Estimate", href: "/free-estimate" },
    { label: "Book Your Detail", href: "/book" },
    { label: "Contact Concierge", href: "/contact" },
  ];

  const serviceCorridors = [
    { city: "DFW Metroplex Core", note: "Daily active mobile dispatch" },
    { city: "Dallas & Highland Park", note: "Prime executive & estate coverage" },
    { city: "Fort Worth & Southlake", note: "Private collection & hangar care" },
    { city: "Houston & The Woodlands", note: "Scheduled coastal corridor trips" },
    { city: "Extended 300-Mile Radius", note: "Austin, San Antonio & beyond" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#050914] via-[#091326] via-[#060c1c] to-[#03060f] text-slate-100 pt-16 sm:pt-20 pb-10 border-t border-blue-900/40"
    >
      {/* Radiant Top Multi-Color Jewel Beam */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/80 via-primary via-cyan-400/80 to-transparent shadow-[0_0_14px_rgba(56,189,248,0.7)]"
        aria-hidden="true"
      />

      {/* Subtle Luminous Blueprint Mesh Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      {/* Multi-Spectrum Ambient Atmospheric Glows */}
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-primary/15 to-purple-600/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-16 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-emerald-500/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-3/4 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* VIP CONCIERGE DISPATCH HERO CALLOUT BANNER                                */}
        {/* ========================================================================= */}
        <div className="relative mb-12 lg:mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-950/70 via-slate-900/90 to-blue-950/70 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10">
          {/* Subtle light streak reflection */}
          <div
            className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-primary-bright shadow-xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span>17+ Years Master Experience • Mobile Fleet Active</span>
              </div>

              <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Ready for Showroom Perfection?{" "}
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  Reserve Your Commission.
                </span>
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                Autonomous mobile detailing laboratories dispatched directly to your private
                residence, executive corporate suite, or private aviation hangar. 100% self-powered with
                zero client hookup required.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
              <Button
                variant="hero"
                className="h-12 rounded-full px-7 text-xs sm:text-[13px] font-bold shadow-[0_6px_24px_rgba(37,99,235,0.4)] tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                asChild
              >
                <a href="/book">
                  <CalendarDays className="size-4" />
                  <span>Book Your Detail Now</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>

              <Button
                variant="glass"
                className="h-12 rounded-full border-white/20 bg-white/10 px-6 text-xs sm:text-[13px] font-bold text-white backdrop-blur-xl transition-all duration-200 hover:border-white/40 hover:bg-white/20 hover:text-white w-full sm:w-auto"
                asChild
              >
                <a href="tel:+15043502935">
                  <Phone className="size-3.5 text-primary-bright" />
                  <span>Call (504) 350-2935</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DECK 1: EXECUTIVE 3-CARD COMMAND TIER (PIXEL-PERFECT ALIGNMENT)            */}
        {/* ========================================================================= */}
        <div className="grid gap-5 md:grid-cols-3 mb-14 lg:mb-16 items-stretch">
          {/* Card 1: Direct Hotline */}
          <a
            href="tel:+15043502935"
            className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/85 backdrop-blur-xl p-5 sm:p-6 shadow-xl ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-slate-900/95 hover:shadow-[0_20px_45px_-10px_rgba(37,99,235,0.25)] flex flex-col justify-between h-full"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-blue-600/15 text-primary border border-primary/30 shrink-0 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone className="size-5" />
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 shadow-2xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span>24/7 ACTIVE DISPATCH</span>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                DIRECT CONCIERGE HOTLINE
              </div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-primary transition-colors mt-0.5">
                (504) 350-2935
              </div>
              <p className="text-xs text-slate-300/90 mt-1.5 leading-relaxed">
                Instant dispatch, VIP consultation &amp; emergency vehicle collection.
              </p>
            </div>

            <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-primary group-hover:text-primary-bright">
              <span>Connect with Master Detailer</span>
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>

          {/* Card 2: Hours Of Operation */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/85 backdrop-blur-xl p-5 sm:p-6 shadow-xl ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-slate-900/95 hover:shadow-[0_20px_45px_-10px_rgba(16,185,129,0.2)] flex flex-col justify-between h-full">
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/25 to-teal-600/15 text-emerald-400 border border-emerald-500/30 shrink-0 shadow-sm">
                <Clock className="size-5" />
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-300 shadow-2xs">
                <Sparkles className="size-3 text-amber-300" />
                <span>CONCIERGE ON-CALL</span>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                OPERATING SCHEDULE
              </div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Monday – Friday : 24 Hours
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  <Zap className="size-3.5 text-emerald-400 shrink-0" />
                  <span>24X7 Emergency Service As Well</span>
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Climate-Controlled Detailing Lab</span>
              <span className="font-mono text-emerald-400 font-bold">100% Guaranteed</span>
            </div>
          </div>

          {/* Card 3: Base HQ & Service Corridors */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/85 backdrop-blur-xl p-5 sm:p-6 shadow-xl ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900/95 hover:shadow-[0_20px_45px_-10px_rgba(14,165,233,0.2)] flex flex-col justify-between h-full">
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-sky-600/15 text-blue-400 border border-blue-500/30 shrink-0 shadow-sm">
                <MapPin className="size-5" />
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-blue-300 shadow-2xs">
                <Navigation className="size-3 text-blue-300" />
                <span>300-MILE RADIUS</span>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                FLEET BASE &amp; DISPATCH
              </div>
              <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                1234 Main Street, City, Country
              </div>
              <div className="text-xs text-slate-300 mt-1.5 flex flex-wrap items-center gap-2">
                <span className="text-emerald-400 font-semibold">DFW • Dallas • Houston</span>
                <span className="text-slate-500">•</span>
                <a
                  href="mailto:detailbrandco@gmail.com"
                  className="font-semibold text-sky-400 hover:text-sky-300 hover:underline"
                >
                  detailbrandco@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span>Extended Regional Transport</span>
              <a href="/contact" className="font-bold text-sky-400 hover:underline inline-flex items-center gap-0.5">
                <span>Check Corridor</span>
                <ArrowRight className="size-3" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DECK 2: ATELIER DIRECTORY (4-COLUMN BALANCED ARCHITECTURE)                 */}
        {/* ========================================================================= */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand Philosophy & Badges (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <BrandMark />

            <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 max-w-sm">
              Backed by over 17 years of experience, Grand Duke Automotive operates autonomous mobile
              detailing laboratories with 0 PPM deionized spotless water and silent inverter electricity.
              We deploy directly to your private estate, executive hangar, or corporate garage with zero
              client hookups.
            </p>

            {/* Google Rating Badge */}
            <a
              href="/reviews"
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-3 text-xs text-slate-300 transition-all hover:border-primary/50 hover:bg-white/[0.07] hover:text-white"
            >
              <div className="flex items-center gap-2.5">
                <GoogleGIcon className="size-4 shrink-0" />
                <div>
                  <div className="flex items-center gap-1 font-bold text-white text-[12px]">
                    <span>5.0</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-2.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Based on 185+ Verified Client Reviews
                  </div>
                </div>
              </div>
              <ArrowRight className="size-3.5 text-primary transition-transform group-hover:translate-x-1" />
            </a>

            {/* 4 Pill Certification Badges */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-200">
                <Award className="size-3 text-amber-400 shrink-0" />
                <span className="truncate">17+ Yrs Mastery</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-200">
                <ShieldCheck className="size-3 text-emerald-400 shrink-0" />
                <span className="truncate">$2M Insured</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-200">
                <Droplets className="size-3 text-sky-400 shrink-0" />
                <span className="truncate">0 PPM Deionized</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-200">
                <Navigation className="size-3 text-primary shrink-0" />
                <span className="truncate">300mi Corridor</span>
              </div>
            </div>

            {/* Social Media Network Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="/contact"
                aria-label="Facebook Profile"
                className="flex size-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-slate-300 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/80 hover:text-white hover:shadow-md"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="/contact"
                aria-label="Instagram Profile"
                className="flex size-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-slate-300 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/80 hover:text-white hover:shadow-md"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="/contact"
                aria-label="LinkedIn Profile"
                className="flex size-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-slate-300 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/80 hover:text-white hover:shadow-md"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Signature Detailing Disciplines (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <Sparkles className="size-3 text-primary-bright" />
              <span>Signature Disciplines</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {signatureServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group flex items-center justify-between py-1 text-slate-300 transition-colors duration-150 hover:text-white"
                  >
                    <span className="group-hover:translate-x-1 transition-transform font-medium truncate mr-2">
                      {service.name}
                    </span>
                    <span className="rounded-md border border-white/15 bg-white/[0.08] px-2 py-0.5 text-[9px] font-bold text-slate-300 group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                      {service.tag}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-white/10">
              <a
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-bright transition-colors"
              >
                <span>Explore All Treatments & Chemistry</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Column 3: Navigation Portals (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Client Portals
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-300 transition-all duration-150 hover:text-white hover:translate-x-1 inline-block font-medium py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Fleet Deployment Corridors & Quick Book (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <Navigation className="size-3 text-emerald-400" />
              <span>Service Corridors</span>
            </h4>

            <div className="space-y-2.5 text-xs">
              {serviceCorridors.map((c) => (
                <div
                  key={c.city}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 transition-all hover:border-emerald-500/30 hover:bg-white/[0.06]"
                >
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{c.city}</span>
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[10.5px] text-slate-400 mt-0.5">{c.note}</div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button
                variant="hero"
                className="w-full h-10 rounded-xl text-xs font-bold shadow-md"
                asChild
              >
                <a href="/book">
                  <CalendarDays className="size-3.5" />
                  <span>Reserve Mobile Slot</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DECK 3: QUALITY ASSURANCE, LEGAL COMPLIANCE & COPYRIGHT                   */}
        {/* ========================================================================= */}
        <div className="pt-8 space-y-6">
          {/* Quality Assurance Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-400 border-b border-white/10 pb-6">
            <div className="flex items-center gap-2 text-slate-300">
              <Droplets className="size-4 text-sky-400" />
              <span>100% Deionized 0 PPM Filtered Reverse-Osmosis Water</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Zap className="size-4 text-amber-400" />
              <span>Autonomous Silent Power Rig (Zero Client Hookup)</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="size-4 text-emerald-400" />
              <span>$2,000,000 Fully Insured Garage-Keepers Protection</span>
            </div>
          </div>

          {/* Copyright & Legal Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p className="text-center sm:text-left font-medium">
              © 2026 Grand Duke Automotive LLC. All Rights Reserved. Master Craftsmanship Since 2007. Design by StellR IT LLC.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
              <a href="/contact" className="hover:text-white transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="/contact" className="hover:text-white transition-colors font-medium">
                Terms of Service
              </a>
              <a href="/contact" className="hover:text-white transition-colors font-medium">
                Service Radius
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5 text-[11px] font-bold text-slate-200 hover:border-primary hover:bg-primary hover:text-white transition-all shadow-2xs cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="size-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
