import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Crown,
  Droplets,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Wind,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BrandMark } from "./BrandMark";

export const navItems = [
  "Home",
  "About Us",
  "Services",
  "Our Work",
  "Reviews",
  "Free Estimate",
  "Contact Us",
];

export const navHref = (item: string) => {
  if (item === "About Us") return "/about";
  if (item === "Services") return "/services";
  if (item === "Our Work") return "/our-work";
  if (item === "Reviews") return "/reviews";
  if (item === "Free Estimate") return "/free-estimate";
  if (item === "Contact Us") return "/contact";
  return `#${item.toLowerCase().replaceAll(" ", "-")}`;
};

export const navigationLinks = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About Us", href: "/about", id: "about" },
  { label: "Services", href: "/services", id: "services" },
  { label: "Our Work", href: "/our-work", id: "our-work" },
  { label: "Reviews", href: "/reviews", id: "reviews" },
  { label: "Free Estimate", href: "/free-estimate", id: "free-estimate" },
  { label: "Contact Us", href: "/contact", id: "contact" },
];

export interface SubService {
  title: string;
  id: string;
  href: string;
  desc: string;
  badge: string;
  icon: typeof Sparkles;
  accent: string;
  badgeAccent: string;
}

export const subServices: SubService[] = [
  {
    title: "Multi-Stage Machine Polish",
    id: "machine-polish",
    href: "/services/machine-polish",
    desc: "Dual-action rotary swirl eradication & micro-jewel finishing.",
    badge: "Stage 1 & 2",
    icon: Sparkles,
    accent: "text-amber-400 bg-amber-400/10 border-amber-400/25 group-hover:bg-amber-400 group-hover:text-slate-950",
    badgeAccent: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  },
  {
    title: "Concours Ceramic & Quartz Shield",
    id: "ceramic-shield",
    href: "/services/ceramic-shield",
    desc: "9H nanotech quartz molecular bonding & liquid candy gloss.",
    badge: "9H Liquid Quartz",
    icon: ShieldCheck,
    accent: "text-cyan-400 bg-cyan-400/10 border-cyan-400/25 group-hover:bg-cyan-400 group-hover:text-slate-950",
    badgeAccent: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
  },
  {
    title: "Deionized Spot-Free Hydro Wash",
    id: "deionized-wash",
    href: "/services/deionized-wash",
    desc: "0 PPM aerospace deionized water foam dirt encapsulation bath.",
    badge: "0 PPM Pure",
    icon: Droplets,
    accent: "text-sky-400 bg-sky-400/10 border-sky-400/25 group-hover:bg-sky-400 group-hover:text-slate-950",
    badgeAccent: "border-sky-400/30 bg-sky-400/10 text-sky-300",
  },
  {
    title: "Interior Leather Restoration & Steam",
    id: "interior-steam",
    href: "/services/interior-steam",
    desc: "220°F dry thermal vapor, aniline nourishment & sterile cabin prep.",
    badge: "220°F Vapor",
    icon: Wind,
    accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/25 group-hover:bg-emerald-400 group-hover:text-slate-950",
    badgeAccent: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  },
  {
    title: "Wheel Decon & Satin Dressing",
    id: "wheel-glass",
    href: "/services/wheel-glass",
    desc: "Barrel iron dissolution, caliper detail & non-sling satin UV tire coat.",
    badge: "Iron Purge",
    icon: CircleDot,
    accent: "text-indigo-400 bg-indigo-400/10 border-indigo-400/25 group-hover:bg-indigo-400 group-hover:text-white",
    badgeAccent: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
  },
  {
    title: "The Duke Signature Concours Detail",
    id: "signature-detail",
    href: "/services/signature-detail",
    desc: "Our master full-day comprehensive exterior & interior transformation.",
    badge: "Flagship Detail",
    icon: Crown,
    accent: "text-amber-300 bg-amber-400/15 border-amber-400/30 group-hover:bg-amber-400 group-hover:text-slate-950",
    badgeAccent: "border-amber-400/40 bg-amber-400/15 text-amber-200",
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isHomePage = pathname === "/" || pathname === "";
  const isAboutPage = pathname === "/about" || pathname === "/about-us";
  const isServicesPage = pathname.startsWith("/services");
  const isWorkPage = pathname === "/our-work" || pathname === "/work" || pathname === "/gallery";
  const isReviewsPage = pathname === "/reviews";
  const isEstimatePage = pathname === "/free-estimate" || pathname === "/estimate";
  const isContactPage = pathname === "/contact" || pathname === "/contact-us";
  const isBookPage = pathname === "/book";

  const defaultActive = isServicesPage
    ? "services"
    : isBookPage
      ? "book"
      : isContactPage
        ? "contact"
        : isEstimatePage
          ? "free-estimate"
          : isReviewsPage
            ? "reviews"
            : isWorkPage
              ? "our-work"
              : isAboutPage
                ? "about"
                : "home";
  const [activeSection, setActiveSection] = useState(defaultActive);

  useEffect(() => {
    if (isServicesPage) {
      setActiveSection("services");
    } else if (isBookPage) {
      setActiveSection("book");
    } else if (isContactPage) {
      setActiveSection("contact");
    } else if (isEstimatePage) {
      setActiveSection("free-estimate");
    } else if (isReviewsPage) {
      setActiveSection("reviews");
    } else if (isWorkPage) {
      setActiveSection("our-work");
    } else if (isAboutPage) {
      setActiveSection("about");
    }
  }, [isAboutPage, isWorkPage, isReviewsPage, isEstimatePage, isContactPage, isBookPage, isServicesPage]);

  const currentNavLinks = [
    { label: "Home", href: !isHomePage ? "/#home" : "#home", id: "home" },
    { label: "About Us", href: "/about", id: "about" },
    { label: "Services", href: "/services", id: "services" },
    { label: "Our Work", href: "/our-work", id: "our-work" },
    { label: "Reviews", href: "/reviews", id: "reviews" },
    { label: "Free Estimate", href: "/free-estimate", id: "free-estimate" },
    { label: "Contact Us", href: "/contact", id: "contact" },
  ];

  // Mouse hover buffer for smooth interaction
  const handleServicesEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  // Close dropdown on click outside or escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 28);

      if (!isHomePage) {
        return;
      }

      // ScrollSpy section detection for home page
      const sections = currentNavLinks.map((item) => document.getElementById(item.id));
      const scrollPosition = scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            const activeId = currentNavLinks[i]?.id;
            if (activeId) {
              setActiveSection(activeId);
            }
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-card/95 backdrop-blur-2xl text-foreground shadow-[0_4px_25px_-4px_rgba(15,23,42,0.06)] transition-all duration-300">
      {/* Top Micro Concierge Ribbon */}
      <div
        className={cn(
          "hidden transition-all duration-300 lg:block",
          scrolled
            ? "max-h-0 overflow-hidden opacity-0"
            : "max-h-9 border-b border-border/40 py-2 text-muted-foreground",
        )}
      >
        <div className="site-shell flex items-center justify-between text-[11px] font-semibold">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="tracking-wide font-bold text-foreground">
              Mobile Detailing Fleet Active
            </span>
            <span className="opacity-40">•</span>
            <span className="opacity-85 font-semibold text-primary">17+ Years of Experience</span>
            <span className="opacity-40">•</span>
            <span className="opacity-85">Self-Contained Power & Deionized Water Units</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="opacity-85">Hours: Monday – Friday: 24 Hours • 24X7 Emergency Service As Well</span>
            <span className="opacity-40">•</span>
            <a
              href="tel:+15043502935"
              className="flex items-center gap-1.5 font-bold text-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-3 text-primary" />
              <span>Direct Concierge: (504) 350-2935</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={cn(
          "site-shell flex items-center justify-between transition-all duration-300",
          scrolled
            ? "h-18 sm:h-20 py-1.5"
            : "h-22 sm:h-24 md:h-26 lg:h-28 py-2",
        )}
      >
        {/* Brand Logo */}
        <BrandMark compact={scrolled} />

        {/* Center Segmented Luxury Capsule */}
        <nav
          className="hidden items-center xl:flex xl:translate-x-16 2xl:translate-x-24 transition-transform duration-200"
          aria-label="Primary navigation"
        >
          <div className="flex items-center gap-0.5 rounded-full border border-border/80 bg-surface-raised/70 p-1.5 text-muted-foreground backdrop-blur-xl shadow-xs transition-all duration-300">
            {currentNavLinks.map((item) => {
              const isActive = activeSection === item.id;

              // Services Dropdown Mega-Menu
              if (item.id === "services") {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <a
                      href={item.href}
                      onClick={() => {
                        setActiveSection(item.id);
                        setServicesOpen(false);
                      }}
                      className={cn(
                        "relative inline-flex items-center gap-1.5 justify-center rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.06em] transition-all duration-200 whitespace-nowrap",
                        isActive || servicesOpen
                          ? "bg-card text-primary shadow-xs ring-1 ring-primary/25"
                          : "text-muted-foreground hover:bg-card/70 hover:text-foreground",
                      )}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-3 transition-transform duration-200 opacity-70",
                          servicesOpen && "rotate-180 text-primary opacity-100",
                        )}
                      />
                    </a>

                    {/* Ultra-Premium Glassmorphic Mega Dropdown Menu */}
                    <div
                      className={cn(
                        "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-250 z-50 w-[670px]",
                        servicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto visible"
                          : "opacity-0 -translate-y-2 pointer-events-none invisible",
                      )}
                    >
                      <div className="relative overflow-hidden rounded-3xl border border-border/90 bg-card/98 p-5 text-foreground shadow-[0_30px_70px_-15px_rgba(15,23,42,0.28)] backdrop-blur-3xl ring-1 ring-border/50">
                        {/* Radiant Top Multi-Color Laser Beam */}
                        <div
                          className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-blue-500 via-primary via-cyan-400 to-transparent"
                          aria-hidden="true"
                        />

                        {/* Ambient Glow Orb */}
                        <div
                          className="pointer-events-none absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[60px]"
                          aria-hidden="true"
                        />

                        {/* Header Micro-Strip */}
                        <div className="relative z-10 mb-3.5 flex items-center justify-between border-b border-border/60 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="flex size-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-primary">
                              6 Bespoke Concours Detailing Disciplines
                            </span>
                          </div>
                          <a
                            href="/services"
                            onClick={() => {
                              setActiveSection("services");
                              setServicesOpen(false);
                            }}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <span>View All Disciplines</span>
                            <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>

                        {/* 2-Column Grid of 6 Sub-Services */}
                        <div className="relative z-10 grid grid-cols-2 gap-2.5">
                          {subServices.map((sub) => {
                            const Icon = sub.icon;
                            return (
                              <a
                                key={sub.id}
                                href={sub.href}
                                onClick={() => {
                                  setActiveSection("services");
                                  setServicesOpen(false);
                                }}
                                className="group relative flex items-start gap-3 rounded-2xl border border-transparent p-2.5 transition-all duration-200 hover:border-primary/30 hover:bg-surface-raised hover:shadow-xs"
                              >
                                {/* Custom Icon Capsule */}
                                <div
                                  className={cn(
                                    "flex size-10 shrink-0 items-center justify-center rounded-xl border shadow-xs transition-all duration-200 group-hover:scale-108 group-hover:shadow-md",
                                    sub.accent,
                                  )}
                                >
                                  <Icon className="size-5" />
                                </div>

                                {/* Content Details */}
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between gap-1.5">
                                    <span className="text-[12.5px] font-extrabold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                      {sub.title}
                                    </span>
                                  </div>
                                  <div className="mt-0.5 flex items-center gap-1.5">
                                    <span
                                      className={cn(
                                        "shrink-0 rounded-md border px-1.5 py-0.5 text-[9px] font-extrabold tracking-tight",
                                        sub.badgeAccent,
                                      )}
                                    >
                                      {sub.badge}
                                    </span>
                                    <p className="text-[11px] leading-relaxed text-muted-foreground line-clamp-1 group-hover:text-foreground/90">
                                      {sub.desc}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* Bottom Quick-Action Bar */}
                        <div className="relative z-10 mt-3.5 flex items-center justify-between rounded-xl border border-border/60 bg-muted/40 px-3.5 py-2.5">
                          <div className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                            <Sparkles className="size-3.5 text-cyan-400" />
                            <span>100% Laboratory-Grade Chemistry • HEPA Cleanroom Studio • Fully Insured</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <a
                              href="/free-estimate"
                              onClick={() => setServicesOpen(false)}
                              className="text-[11px] font-bold text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                            >
                              Free Estimate
                            </a>
                            <a
                              href="/book"
                              onClick={() => setServicesOpen(false)}
                              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-extrabold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                            >
                              <span>Book Detail</span>
                              <ChevronRight className="size-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Standard Link Item
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={cn(
                    "relative inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.06em] transition-all duration-200 whitespace-nowrap",
                    isActive
                      ? "bg-card text-primary shadow-xs ring-1 ring-primary/25"
                      : "text-muted-foreground hover:bg-card/70 hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Right CTA Area */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+15043502935"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-xs transition-all duration-200 hover:border-primary/40 hover:text-primary"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform duration-200 group-hover:scale-110">
              <Phone className="size-2.5" />
            </span>
            <span>(504) 350-2935</span>
          </a>

          <Button
            variant="hero"
            size="default"
            className="h-11 rounded-full px-6 text-xs font-extrabold shadow-premium tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            asChild
          >
            <a href="/book">
              <CalendarDays className="size-3.5" />
              <span>Book Your Detail</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="tel:+15043502935"
            aria-label="Call concierge"
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-xs transition-colors hover:text-primary md:hidden"
          >
            <Phone className="size-4 text-primary" />
          </a>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-xs transition-colors backdrop-blur-md hover:bg-surface-raised"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? <X className="size-5 text-primary" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Modern Mobile Slide-Down Drawer */}
      <div
        className={cn(
          "border-t border-border/80 bg-card/98 text-foreground backdrop-blur-2xl transition-all duration-300 xl:hidden",
          open
            ? "max-h-[calc(100dvh-5rem)] overflow-y-auto opacity-100 shadow-2xl"
            : "max-h-0 overflow-hidden opacity-0",
        )}
      >
        <div className="site-shell flex flex-col py-6">
          {/* Quick status card */}
          <div className="mb-4 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 rounded-xl border border-border bg-surface p-3.5">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-bold">Mobile Units Active</span>
            </div>
            <span className="text-[11px] font-semibold text-muted-foreground">
              Monday – Friday: 24 Hours • 24X7 Emergency
            </span>
          </div>

          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {currentNavLinks.map((item, index) => {
              const isActive = activeSection === item.id;

              // Services item in mobile menu with expandable accordion
              if (item.id === "services") {
                return (
                  <div key={item.label} className="flex flex-col">
                    <div
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                        isActive
                          ? "bg-primary/15 font-bold text-primary"
                          : "text-foreground hover:bg-muted hover:text-primary",
                      )}
                    >
                      <a
                        href={item.href}
                        onClick={() => {
                          setActiveSection(item.id);
                          setOpen(false);
                        }}
                        className="flex items-center gap-3 flex-1"
                      >
                        <span className="text-[10px] font-extrabold text-muted-foreground">
                          0{index + 1}
                        </span>
                        <span>{item.label}</span>
                        <span className="rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px] font-extrabold text-primary">
                          6 Disciplines
                        </span>
                      </a>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setMobileServicesOpen(!mobileServicesOpen);
                        }}
                        aria-label={mobileServicesOpen ? "Collapse services" : "Expand services"}
                        className="p-1.5 rounded-lg hover:bg-card text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform duration-200",
                            mobileServicesOpen && "rotate-180 text-primary",
                          )}
                        />
                      </button>
                    </div>

                    {/* Subservices Accordion Content */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 pl-4 pr-1",
                        mobileServicesOpen
                          ? "max-h-[500px] opacity-100 py-1"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      <div className="flex flex-col gap-1 border-l-2 border-primary/30 pl-3 my-1">
                        <a
                          href="/services"
                          onClick={() => {
                            setActiveSection("services");
                            setOpen(false);
                          }}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold text-primary hover:bg-primary/10 transition-colors"
                        >
                          <span>Explore All 6 Disciplines</span>
                          <ArrowUpRight className="size-3.5" />
                        </a>

                        {subServices.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <a
                              key={sub.id}
                              href={sub.href}
                              onClick={() => {
                                setActiveSection("services");
                                setOpen(false);
                              }}
                              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors group"
                            >
                              <div
                                className={cn(
                                  "flex size-7 shrink-0 items-center justify-center rounded-lg border",
                                  sub.accent,
                                )}
                              >
                                <Icon className="size-3.5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="font-bold text-foreground group-hover:text-primary transition-colors truncate">
                                    {sub.title}
                                  </span>
                                  <span className="text-[9px] font-bold text-muted-foreground shrink-0">
                                    {sub.badge}
                                  </span>
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              // Normal Item
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-primary/15 font-bold text-primary"
                      : "text-foreground hover:bg-muted hover:text-primary",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-extrabold text-muted-foreground">
                      0{index + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="size-4 opacity-50" />
                </a>
              );
            })}
          </nav>

          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5">
            <a
              href="tel:+15043502935"
              className="flex h-12 items-center justify-center gap-2.5 rounded-xl border border-border bg-surface text-xs font-bold text-foreground shadow-xs transition-colors hover:border-primary/50"
            >
              <Phone className="size-4 text-primary" />
              <span>Call Concierge: (504) 350-2935</span>
            </a>

            <Button variant="hero" className="h-12 w-full rounded-xl text-xs font-bold" asChild>
              <a href="/book" onClick={() => setOpen(false)}>
                <Sparkles className="size-4" />
                <span>Book Your Detail Now</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
