import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Menu,
  Phone,
  Sparkles,
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

export const navHref = (item: string) => `#${item.toLowerCase().replaceAll(" ", "-")}`;

export const navigationLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About Us", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Our Work", href: "#our-work", id: "our-work" },
  { label: "Reviews", href: "#reviews", id: "reviews" },
  { label: "Free Estimate", href: "#free-estimate", id: "free-estimate" },
  { label: "Contact Us", href: "#contact", id: "contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 28);

      // ScrollSpy section detection
      const sections = navigationLinks.map((item) => document.getElementById(item.id));
      const scrollPosition = scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            const activeId = navigationLinks[i]?.id;
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
  }, []);

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
              href="tel:+14697967732"
              className="flex items-center gap-1.5 font-bold text-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-3 text-primary" />
              <span>Direct Concierge: (469) 796-7732</span>
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
            {navigationLinks.map((item) => {
              const isActive = activeSection === item.id;
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
            href="tel:+14697967732"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-xs transition-all duration-200 hover:border-primary/40 hover:text-primary"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform duration-200 group-hover:scale-110">
              <Phone className="size-2.5" />
            </span>
            <span>(469) 796-7732</span>
          </a>

          <Button
            variant="hero"
            size="default"
            className="h-11 rounded-full px-6 text-xs font-extrabold shadow-premium tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            asChild
          >
            <a href="#free-estimate">
              <CalendarDays className="size-3.5" />
              <span>Book Your Detail</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="tel:+14697967732"
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
            {navigationLinks.map((item, index) => {
              const isActive = activeSection === item.id;
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
              href="tel:+14697967732"
              className="flex h-12 items-center justify-center gap-2.5 rounded-xl border border-border bg-surface text-xs font-bold text-foreground shadow-xs transition-colors hover:border-primary/50"
            >
              <Phone className="size-4 text-primary" />
              <span>Call Concierge: (469) 796-7732</span>
            </a>

            <Button variant="hero" className="h-12 w-full rounded-xl text-xs font-bold" asChild>
              <a href="#free-estimate" onClick={() => setOpen(false)}>
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
