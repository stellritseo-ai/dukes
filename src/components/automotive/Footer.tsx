import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  ArrowRight,
  ArrowUp,
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const signatureServices = [
    { name: "Multi-Stage Machine Paint Correction", tag: "Flagship" },
    { name: "Liquid Quartz 9H Ceramic Shield", tag: "5-Yr Shield" },
    { name: "Alcantara & Nappa Leather Revival", tag: "Interior" },
    { name: "Touchless 0 PPM Snow Foam Wash", tag: "Deionized" },
    { name: "Wheel Barrel & Ceramic Caliper Seal", tag: "Bespoke" },
    { name: "Full Concours Vehicle Restoration", tag: "Master Tier" },
    { name: "Thermal Steam Engine Bay Sanitization", tag: "Precision" },
  ];

  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#our-work" },
    { label: "Reviews", href: "#reviews" },
    { label: "Free Estimate", href: "#free-estimate" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#080e1e] via-[#0d1d3f] via-[#091530] to-[#040712] text-slate-100 pt-[60px] pb-10 border-t border-blue-900/40"
    >
      {/* Radiant Top Multi-Color Gradient Beam */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 via-primary via-cyan-400 to-transparent"
        aria-hidden="true"
      />

      {/* Subtle Luminous Blueprint Mesh Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      {/* Multi-Spectrum Ambient Gradient Glows */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-96 w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/25 via-indigo-500/20 to-purple-600/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-gradient-to-br from-sky-500/20 via-blue-600/15 to-emerald-500/15 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-3/4 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* DECK 1: EXECUTIVE 3-CARD COMMAND TIER (PIXEL-PERFECT ALIGNMENT)            */}
        {/* ========================================================================= */}
        <div className="grid gap-5 md:grid-cols-3 mb-14 items-stretch">
          {/* Card 1: Direct Hotline */}
          <a
            href="tel:+14697967732"
            className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 backdrop-blur-xl p-5 sm:p-6 shadow-xl hover:shadow-2xl hover:border-primary/60 hover:bg-slate-900/95 transition-all duration-200 flex flex-col justify-between h-full"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/30 shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="size-5" />
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>24/7 ACTIVE</span>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                DIRECT CONCIERGE HOTLINE
              </div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-primary transition-colors mt-0.5">
                (469) 796-7732
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Instant dispatch &amp; private collection bookings
              </p>
            </div>
          </a>

          {/* Card 2: Hours Of Operation */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 backdrop-blur-xl p-5 sm:p-6 shadow-xl hover:shadow-2xl hover:border-emerald-500/50 hover:bg-slate-900/95 transition-all duration-200 flex flex-col justify-between h-full">
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                <Clock className="size-5" />
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                <Sparkles className="size-3 text-amber-300" />
                <span>ALWAYS ON CALL</span>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                HOURS OF OPERATION
              </div>
              <div className="text-lg sm:text-xl font-black tracking-tight text-white">
                Monday – Friday : 24 Hours
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  <Zap className="size-3.5 text-emerald-400 shrink-0" />
                  <span>24X7 Emergency Service As Well</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Base HQ & Service Corridors */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 backdrop-blur-xl p-5 sm:p-6 shadow-xl hover:shadow-2xl hover:border-sky-500/50 hover:bg-slate-900/95 transition-all duration-200 flex flex-col justify-between h-full">
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 shrink-0">
                <MapPin className="size-5" />
              </div>
              <div className="inline-flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-blue-300">
                <span>300-MILE RADIUS</span>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                FLEET BASE &amp; DISPATCH
              </div>
              <div className="text-base font-bold text-white mt-0.5">
                1234 Main Street, City, Country
              </div>
              <div className="text-xs text-slate-300 mt-1 flex flex-wrap items-center gap-2">
                <span>DFW • Dallas • Houston</span>
                <span className="text-slate-500">•</span>
                <a
                  href="mailto:detailbrandco@gmail.com"
                  className="font-semibold text-sky-400 hover:text-sky-300 hover:underline"
                >
                  detailbrandco@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DECK 2: ATELIER DIRECTORY (3-COLUMN BALANCED ARCHITECTURE)                 */}
        {/* ========================================================================= */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand Philosophy & Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <BrandMark />

            <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 max-w-sm">
              Backed by over 17 years of experience, Grand Duke Automotive operates autonomous mobile
              detailing laboratories with 0 PPM deionized spotless water and silent inverter electricity.
              We deploy directly to your private estate, executive hangar, or corporate garage with zero
              client hookups.
            </p>

            {/* Pill Certification Badges */}
            <div className="space-y-2 pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-200 shadow-2xs">
                  <span className="size-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span>17+ YEARS EXPERIENCE</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-200 shadow-2xs">
                  <span className="size-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span>$2,000,000 INSURED</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-200 shadow-2xs">
                  <span className="size-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span>IDA MASTER CERTIFIED</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-200 shadow-2xs">
                  <span className="size-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span>300-MILE CORRIDOR SERVICE</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#contact"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-slate-300 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/80 hover:text-white hover:shadow-md"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="#contact"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-slate-300 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/80 hover:text-white hover:shadow-md"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-slate-300 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/80 hover:text-white hover:shadow-md"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Signature Detailing Disciplines (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Signature Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {signatureServices.map((service) => (
                <li key={service.name}>
                  <a
                    href="#services"
                    className="group flex items-center justify-between text-slate-300 transition-colors duration-150 hover:text-white"
                  >
                    <span className="group-hover:translate-x-1 transition-transform font-medium">
                      {service.name}
                    </span>
                    <span className="rounded-md border border-white/15 bg-white/[0.08] px-2 py-0.5 text-[9px] font-bold text-slate-300 group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                      {service.tag}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-300 transition-all duration-150 hover:text-white hover:translate-x-1 inline-block font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DECK 3: COPYRIGHT & ATTRIBUTION BAR                                       */}
        {/* ========================================================================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left font-medium">
            © 2026 Grand Duke Automotive LLC. All Rights Reserved. Design by StellR IT LLC
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#contact" className="hover:text-white transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-white transition-colors font-medium">
              Terms of Service
            </a>
            <a href="#service-area" className="hover:text-white transition-colors font-medium">
              Service Radius
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[11px] font-bold text-slate-200 hover:border-primary hover:bg-primary hover:text-white transition-all shadow-2xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
