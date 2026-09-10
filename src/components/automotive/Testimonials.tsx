import { Star, BadgeCheck, Car, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Official Google "G" 4-color SVG Icon
export function GoogleGIcon({ className = "size-4" }: { className?: string }) {
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

export interface TestimonialReview {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  vehicle: string;
  service: string;
  rating: number;
  timeAgo: string;
  quote: string;
}

// ROW 1: Right-to-Left Continuous Slide
export const row1Reviews: TestimonialReview[] = [
  {
    id: "r1-1",
    name: "Harrison Brooks",
    initials: "HB",
    avatarBg: "bg-blue-600/10 text-blue-700 border-blue-200",
    vehicle: "Porsche 911 GT3 RS",
    service: "Signature Detail & 9H Ceramic",
    rating: 5,
    timeAgo: "3 days ago",
    quote:
      "The level of care was immediately clear. Every surface was treated like fine art, and the paint depth under direct sunlight looks richer than when it rolled out of the Weissach factory. Truly magnificent work.",
  },
  {
    id: "r1-2",
    name: "Elena Rostova",
    initials: "ER",
    avatarBg: "bg-emerald-600/10 text-emerald-700 border-emerald-200",
    vehicle: "Range Rover SV Autobiography",
    service: "Multi-Stage Paint Correction",
    rating: 5,
    timeAgo: "1 week ago",
    quote:
      "Convenient, professional, and exceptionally thorough. Their mobile unit came to my private residence and removed years of tunnel wash micro-swirls. The Santorini Black finish now has a flawless mirror reflection.",
  },
  {
    id: "r1-3",
    name: "David Chen",
    initials: "DC",
    avatarBg: "bg-amber-600/10 text-amber-700 border-amber-200",
    vehicle: "Ferrari 488 Pista",
    service: "Full Concours Decon & Ceramic",
    rating: 5,
    timeAgo: "2 weeks ago",
    quote:
      "By far the most meticulous detailing service I've ever booked. Their master technicians take immense pride in their craft and communicate clearly before touching a single carbon fiber panel.",
  },
  {
    id: "r1-4",
    name: "Dr. Arthur Sterling",
    initials: "AS",
    avatarBg: "bg-indigo-600/10 text-indigo-700 border-indigo-200",
    vehicle: "Aston Martin DB11 V12",
    service: "Interior Steam & Leather Revival",
    rating: 5,
    timeAgo: "3 weeks ago",
    quote:
      "The interior steam extraction restored the OEM matte look of the aniline leather without any greasy residue. The mobile trailer setup is astonishingly self-contained, quiet, and spotless.",
  },
  {
    id: "r1-5",
    name: "Julian Vance",
    initials: "JV",
    avatarBg: "bg-violet-600/10 text-violet-700 border-violet-200",
    vehicle: "Audi RS6 Avant",
    service: "High-Gloss Machine Polish & Seal",
    rating: 5,
    timeAgo: "1 month ago",
    quote:
      "Grand Duke treats every car with white-glove respect. The inner wheel barrels and ceramic brake calipers were completely spotless. I will not trust anyone else with my collection.",
  },
];

// ROW 2: Left-to-Right Continuous Slide
export const row2Reviews: TestimonialReview[] = [
  {
    id: "r2-1",
    name: "Marcus Sterling",
    initials: "MS",
    avatarBg: "bg-sky-600/10 text-sky-700 border-sky-200",
    vehicle: "Mercedes-AMG G63",
    service: "Liquid Glass 9H Shield",
    rating: 5,
    timeAgo: "4 days ago",
    quote:
      "Flawless execution. They completely stripped heavy road grime and sealed the matte paint properly. Rain beads right off like mercury now. Highly recommend their executive mobile team.",
  },
  {
    id: "r2-2",
    name: "Sarah Montgomery",
    initials: "SM",
    avatarBg: "bg-rose-600/10 text-rose-700 border-rose-200",
    vehicle: "BMW M5 CS",
    service: "Panache Paint Correction Package",
    rating: 5,
    timeAgo: "1 week ago",
    quote:
      "I am extremely particular about clear coat thickness. The team measured panel depth with digital gauges before compounding and explained their methodology. Unbelievable professionalism.",
  },
  {
    id: "r2-3",
    name: "Michael DeLuca",
    initials: "MD",
    avatarBg: "bg-teal-600/10 text-teal-700 border-teal-200",
    vehicle: "Corvette Z06 (C8)",
    service: "Full Exterior Decon & Ceramic Pro",
    rating: 5,
    timeAgo: "2 weeks ago",
    quote:
      "The mobile service arrived right on schedule at my office building. The gloss enhancement on Torch Red turns heads at every stoplight. Absolutely worth every single dollar.",
  },
  {
    id: "r2-4",
    name: "Claire Kensington",
    initials: "CK",
    avatarBg: "bg-purple-600/10 text-purple-700 border-purple-200",
    vehicle: "Bentley Continental GT",
    service: "Connoisseur Interior & Exterior Resto",
    rating: 5,
    timeAgo: "3 weeks ago",
    quote:
      "From the soft horsehair brushes on the knurled metal switches to the spotless wool carpets, this is genuinely world-class automotive detailing. Truly immaculate in every dimension.",
  },
  {
    id: "r2-5",
    name: "Alexander Wright",
    initials: "AW",
    avatarBg: "bg-blue-600/10 text-blue-700 border-blue-200",
    vehicle: "McLaren 720S Performance",
    service: "Exotic Multi-Stage Paint Correction",
    rating: 5,
    timeAgo: "1 month ago",
    quote:
      "Grand Duke delivered showroom perfection right in my driveway. Swirl marks are 100% gone, leaving pure liquid glass clarity. An absolute 5-star experience from start to finish.",
  },
];

// Backwards compatibility export
export const reviews = [...row1Reviews, ...row2Reviews];

// Duplicate each row for seamless infinite scrolling loop
const marqueeRow1 = [...row1Reviews, ...row1Reviews];
const marqueeRow2 = [...row2Reviews, ...row2Reviews];

// Single Testimonial Card Component
function TestimonialCard({ review }: { review: TestimonialReview }) {
  return (
    <div className="group relative flex w-[285px] xs:w-[320px] sm:w-[410px] shrink-0 flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.05)] ring-1 ring-border/30 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.12)]">
      {/* Top Bar: Reviewer Profile & Google Badge */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Avatar Initials with Google badge corner */}
            <div className="relative shrink-0">
              <div
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border text-xs font-bold shadow-xs",
                  review.avatarBg
                )}
              >
                {review.initials}
              </div>
              <div className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-white shadow-xs ring-1 ring-black/5">
                <GoogleGIcon className="size-2.5" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-foreground leading-snug">
                  {review.name}
                </span>
                <BadgeCheck className="size-3.5 text-blue-500 fill-blue-500/20" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Google Verified
                </span>
                <span>•</span>
                <span>{review.timeAgo}</span>
              </div>
            </div>
          </div>

          {/* Google Verified Review Pill */}
          <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-border/70 bg-muted/40 px-2.5 py-1 text-[10px] font-medium text-muted-foreground shadow-2xs">
            <GoogleGIcon className="size-3" />
            <span className="font-semibold text-slate-700 dark:text-slate-200">Review</span>
          </div>
        </div>

        {/* 5 Golden Stars */}
        <div className="mt-3.5 flex items-center gap-1 text-amber-400">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-1.5 text-xs font-bold text-foreground">5.0</span>
        </div>

        {/* Review Quote */}
        <blockquote className="mt-3 text-[13px] sm:text-[13.5px] leading-relaxed text-foreground/85 line-clamp-3">
          "{review.quote}"
        </blockquote>
      </div>

      {/* Card Footer: Vehicle Model & Service Tags */}
      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/60 pt-3">
        <div className="flex items-center gap-1.5 rounded-md bg-surface/80 px-2.5 py-1 text-[11px] font-medium text-foreground/90 border border-border/40">
          <Car className="size-3 text-primary" />
          <span className="truncate max-w-[170px]">{review.vehicle}</span>
        </div>
        <div className="flex items-center gap-1 rounded-md bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary border border-primary/15">
          <Sparkles className="size-3 text-primary" />
          <span className="truncate max-w-[165px]">{review.service}</span>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-background py-[60px]"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <div id="testimonials" className="pointer-events-none absolute -top-24" />
      {/* Subtle luxury ambient lighting accents */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 h-[380px] w-[380px] rounded-full bg-sky-500/5 blur-[140px]"
        aria-hidden="true"
      />

      {/* Header Container */}
      <div className="site-shell relative z-10 max-w-7xl">
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          {/* Eyebrow */}
          <div className="eyebrow mb-3 justify-center">
            <span />
            <span className="text-primary font-extrabold tracking-widest text-[11px] uppercase">
              CLIENT TESTIMONIALS
            </span>
            <span />
          </div>

          {/* Section Title */}
          <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-extrabold tracking-tight text-foreground leading-tight sm:whitespace-nowrap">
            Loved by Discerning Owners.{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-600 bg-clip-text text-transparent">
              Verified on Google.
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground mx-auto">
            Every review represents an authentic experience from supercar collectors, luxury car owners,
            and automotive enthusiasts who trust us with their vehicles.
          </p>

          {/* Google Verified Rating Summary Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-2xl sm:rounded-full border border-border/90 bg-card px-4 sm:px-6 py-2 shadow-xs ring-1 ring-border/20">
            <div className="flex items-center gap-2">
              <GoogleGIcon className="size-4.5" />
              <span className="text-sm font-bold text-foreground">Google</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold text-foreground">5.0</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">185+ Reviews</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                <BadgeCheck className="size-3.5 text-emerald-600 fill-emerald-100" />
                100% Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2-ROW TESTIMONIAL SLIDER TRACKS */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6">
        {/* Soft Fade Edge Overlays for Ultra-Smooth Boundary Transition */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-background via-background/80 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-background via-background/80 to-transparent"
          aria-hidden="true"
        />

        {/* ROW 1: Slides Right to Left */}
        <div className="marquee-container py-1">
          <div
            className="animate-marquee flex items-center gap-4 sm:gap-6 py-1"
            style={{ animationDuration: "42s" }}
          >
            {marqueeRow1.map((review, idx) => (
              <TestimonialCard key={`row1-${review.id}-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* ROW 2: Slides Left to Right */}
        <div className="marquee-container py-1">
          <div
            className="animate-marquee-reverse flex items-center gap-4 sm:gap-6 py-1"
            style={{ animationDuration: "46s" }}
          >
            {marqueeRow2.map((review, idx) => (
              <TestimonialCard key={`row2-${review.id}-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Subtle Link */}
      <div className="site-shell relative z-10 mt-10 sm:mt-12 text-center">
        <p className="text-xs sm:text-sm text-muted-foreground">
          Experience the Grand Duke difference for yourself.{" "}
          <a
            href="#free-estimate"
            className="inline-flex items-center gap-1 font-semibold text-primary underline-offset-4 hover:underline transition-colors"
          >
            Schedule Your Vehicle Service
            <ArrowRight className="size-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
