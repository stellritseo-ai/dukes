import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  Filter,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Header } from "@/components/automotive/Header";
import { Footer } from "@/components/automotive/Footer";
import { MobileCTA } from "@/components/automotive/MobileCTA";
import { TrustStrip } from "@/components/automotive/TrustStrip";
import { PageBreadcrumb } from "@/components/automotive/PageBreadcrumb";
import { QuoteForm } from "@/components/automotive/QuoteForm";
import { GoogleGIcon } from "@/components/automotive/Testimonials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const description =
  "Read verified Google reviews and client testimonials for Grand Duke Automotive. 5.0-star rated luxury car detailing, paint correction, ceramic coatings, and mobile service in City, Country.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      {
        title:
          "Client Reviews & Testimonials | Grand Duke Automotive — 5.0 Star Verified",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "grand duke automotive reviews, luxury car detailing testimonials, ceramic coating reviews, paint correction reviews, verified google reviews auto detailing",
      },
      {
        property: "og:title",
        content: "Client Reviews & Testimonials | Grand Duke Automotive",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Client Reviews & Testimonials | Grand Duke Automotive",
      },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemPage",
          name: "Client Reviews & Testimonials | Grand Duke Automotive",
          description,
          mainEntity: {
            "@type": "AggregateRating",
            itemReviewed: {
              "@type": "AutomotiveBusiness",
              name: "Grand Duke Automotive",
              telephone: "+15043502935",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1234 Main Street",
                addressLocality: "City",
                addressCountry: "Country",
              },
            },
            ratingValue: "5.0",
            reviewCount: "185",
            bestRating: "5",
            worstRating: "1",
          },
        }),
      },
    ],
  }),
  component: ReviewsPage,
});

interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  vehicle: string;
  service: string;
  category: "all" | "paint-correction" | "ceramic" | "interior" | "mobile";
  headline: string;
  quote: string;
  rating: number;
  timeAgo: string;
}

const allReviews: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Dennis P.",
    initials: "DP",
    avatarBg: "bg-blue-600/10 text-blue-700 border-blue-200",
    vehicle: "Porsche 911",
    service: "Panache Paint Correction & Ceramic",
    category: "paint-correction",
    headline: "The most meticulous detailers I have ever used.",
    quote:
      "I brought my Porsche in for a full paint correction and ceramic coating. The team at Grand Duke treated my car like it was their own. The multi-stage polish removed years of swirl marks, and the ceramic coating has made maintenance washes incredibly easy. The transparency in their pricing packages is a breath of fresh air. I highly recommend the Panache package!",
    rating: 5,
    timeAgo: "2 days ago",
  },
  {
    id: "rev-2",
    name: "James Harrington",
    initials: "JH",
    avatarBg: "bg-emerald-600/10 text-emerald-700 border-emerald-200",
    vehicle: "Chevrolet Corvette C8",
    service: "Panache Package Detail",
    category: "paint-correction",
    headline: "The Panache package is worth every single penny.",
    quote:
      "I booked the Panache package for my Corvette and was blown away by the results. The multi-stage machine polish brought out a depth of color I didn't even know the paint had. The team kept me updated with photos throughout the process, and the final walkaround was incredibly thorough. The ceramic coating they applied has made bug splatter and road grime wipe off effortlessly. Absolute perfection.",
    rating: 5,
    timeAgo: "4 days ago",
  },
  {
    id: "rev-3",
    name: "Marcus Thorne",
    initials: "MT",
    avatarBg: "bg-amber-600/10 text-amber-700 border-amber-200",
    vehicle: "Porsche 718 Cayman",
    service: "True Shine Paint Correction",
    category: "paint-correction",
    headline: "Zero swirl marks. Zero compromises.",
    quote:
      "I am incredibly particular about who touches my paint, and I've had bad experiences with detailers in the past leaving holograms and swirl marks. Grand Duke Automotive is the real deal. Their 100% automotive-grade detailing and controlled environment mean they actually know what they're doing. My black paint is now flawless and mirror-like. I can't recommend their True Shine paint correction enough.",
    rating: 5,
    timeAgo: "1 week ago",
  },
  {
    id: "rev-4",
    name: "Priya Sharma",
    initials: "PS",
    avatarBg: "bg-rose-600/10 text-rose-700 border-rose-200",
    vehicle: "Audi Q7",
    service: "Interior Leather Restoration & Steam",
    category: "interior",
    headline: "They saved my interior. Literally.",
    quote:
      "I spilled a large coffee on my light-colored leather seats and thought they were ruined. I brought my car in for the Interior Leather Restoration & Steam service, and I genuinely cannot tell where the stain was. They also conditioned the leather so it feels soft and looks brand new. The level of care and chemistry knowledge these guys have is unmatched.",
    rating: 5,
    timeAgo: "1 week ago",
  },
  {
    id: "rev-5",
    name: "Christopher Vance",
    initials: "CV",
    avatarBg: "bg-violet-600/10 text-violet-700 border-violet-200",
    vehicle: "Lamborghini Urus",
    service: "pH-Neutral Foam Wash & Decon",
    category: "paint-correction",
    headline: "Flawless execution on a very difficult vehicle.",
    quote:
      "My SUV is wrapped in matte PPF, and I was terrified of anyone using the wrong chemicals on it. The team at Grand Duke explained their pH-neutral foam wash and decontamination process in detail and assured me it was safe. The car came out looking incredible—no residue, no streaks, and the matte finish looks perfect. A very professional operation.",
    rating: 5,
    timeAgo: "2 weeks ago",
  },
  {
    id: "rev-6",
    name: "Olivia Bennett",
    initials: "OB",
    avatarBg: "bg-teal-600/10 text-teal-700 border-teal-200",
    vehicle: "Volvo XC90",
    service: "Steam Clean Package",
    category: "interior",
    headline: "The Steam Clean package is an incredible value.",
    quote:
      "I opted for the Steam Clean package for my family hauler and was thoroughly impressed. They got out years of crumbs, dog hair, and stains from the third row. The HEPA air filtration in their studio is a nice touch, and the car smelled completely fresh without any overpowering chemical perfumes. Five stars for the attention to detail and transparent pricing.",
    rating: 5,
    timeAgo: "2 weeks ago",
  },
  {
    id: "rev-7",
    name: "William Ashford",
    initials: "WA",
    avatarBg: "bg-indigo-600/10 text-indigo-700 border-indigo-200",
    vehicle: "Bentley Continental GT",
    service: "Luxurious Concours Detail",
    category: "ceramic",
    headline: "A true concierge experience from start to finish.",
    quote:
      "From the moment I called to book my appointment to the moment I picked up my car, the customer service was elite. The online booking system is seamless, and the staff is incredibly knowledgeable. I went with the Luxurious package for my Bentley, and they treated the car with the reverence it deserves. This is how a luxury business should be run.",
    rating: 5,
    timeAgo: "3 weeks ago",
  },
  {
    id: "rev-8",
    name: "Nathan Brooks",
    initials: "NB",
    avatarBg: "bg-sky-600/10 text-sky-700 border-sky-200",
    vehicle: "Dodge Challenger Hellcat",
    service: "Duo Signature 5-Yr Ceramic Shield",
    category: "ceramic",
    headline: "The Duo Signature package is a game-changer.",
    quote:
      "I have a garage queen that only sees sunny weekends, so I wanted the best protection possible. The Duo Signature service is phenomenal. The combination of the ceramic coating and the meticulous interior treatment means the car is protected inside and out. I also love that they offer a 5-year warranty on the ceramic coating. Incredible peace of mind.",
    rating: 5,
    timeAgo: "3 weeks ago",
  },
  {
    id: "rev-9",
    name: "Jessica Lawson",
    initials: "JL",
    avatarBg: "bg-purple-600/10 text-purple-700 border-purple-200",
    vehicle: "Lexus RX 350",
    service: "Autonomous Mobile Unit Detail",
    category: "mobile",
    headline: "Mobile service that doesn't compromise on quality.",
    quote:
      "I was skeptical about a mobile detailing service matching the quality of a dedicated studio, but Grand Duke's Mobile Unit exceeded my expectations. The technician arrived on time, was fully self-sufficient with his water and power, and spent hours perfecting the car. The convenience of having a 100% automotive-grade detail in my own driveway is unbeatable.",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    id: "rev-10",
    name: "Thomas Kincaid",
    initials: "TK",
    avatarBg: "bg-emerald-600/10 text-emerald-700 border-emerald-200",
    vehicle: "Mercedes-Benz SL500 (Classic)",
    service: "Single-Stage Historic Polish",
    category: "paint-correction",
    headline: "Incredible results on a classic.",
    quote:
      "Bringing a 25-year-old classic to a modern detailing studio can be risky, but Grand Duke's Master Technicians knew exactly how to handle it. They were honest about what could and couldn't be corrected, and the single-stage polish they recommended brought the original paint back to life. They have a deep respect for automotive history.",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    id: "rev-11",
    name: "Rebecca Miller",
    initials: "RM",
    avatarBg: "bg-amber-600/10 text-amber-700 border-amber-200",
    vehicle: "BMW X5",
    service: "Single-Stage Clear Coat Polish",
    category: "paint-correction",
    headline: "Transparent, honest, and incredibly skilled.",
    quote:
      "What I appreciate most about Grand Duke is their honesty. I initially asked for a full paint correction, but after inspecting my car, they recommended a single-stage polish because my clear coat was still in great shape. They could have easily upsold me, but they didn't. The work they did was flawless, and I've already booked my next maintenance wash.",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    id: "rev-12",
    name: "Elena Roberts",
    initials: "ER",
    avatarBg: "bg-blue-600/10 text-blue-700 border-blue-200",
    vehicle: "Range Rover",
    service: "Signature Detail & Leather Restoration",
    category: "interior",
    headline: "Exceptional professionalism and outstanding results.",
    quote:
      "The professionalism, communication, and outstanding results from Grand Duke Automotive are second to none. I opted for the Signature package for my daily driver. They walked me through the entire process, from the decontamination wash to the interior leather restoration. My car looks better than the day I bought it. Worth every penny.",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    id: "rev-13",
    name: "David Chen",
    initials: "DC",
    avatarBg: "bg-rose-600/10 text-rose-700 border-rose-200",
    vehicle: "Audi RS7",
    service: "Full Engine Bay & Concours Detail",
    category: "ceramic",
    headline: "Truly the best automotive detailing service I've ever experienced.",
    quote:
      "I’ve tried many detailers over the years, but Grand Duke is on another level. The attention to detail is staggering—they even cleaned the engine bay and the intricate stitching on my seats. The team is incredibly knowledgeable about the chemistry behind their products. It’s clear they are true enthusiasts. I will be a lifelong client.",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    id: "rev-14",
    name: "Victoria Sterling",
    initials: "VS",
    avatarBg: "bg-violet-600/10 text-violet-700 border-violet-200",
    vehicle: "BMW M4",
    service: "Leather Restoration & Stain Removal",
    category: "interior",
    headline: "Incredible attention to detail.",
    quote:
      "What an incredible company. They completely transformed the interior of my BMW. The leather restoration and stain removal made the cabin look showroom-fresh again. The team was polite, professional, and kept me updated throughout the day. If you care about your vehicle, this is the only place to go.",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    id: "rev-15",
    name: "Sarah Montgomery",
    initials: "SM",
    avatarBg: "bg-teal-600/10 text-teal-700 border-teal-200",
    vehicle: "Tesla Model S",
    service: "Duo Signature Ceramic Protection",
    category: "ceramic",
    headline: "A seamless, stress-free experience.",
    quote:
      "I used their Duo Signature service for my Tesla. The team is incredibly detail-oriented and took the time to explain the benefits of the specific ceramic coating they used. They even helped me set up the maintenance schedule. Top-tier service from start to finish.",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    id: "rev-16",
    name: "Michael DeLuca",
    initials: "MD",
    avatarBg: "bg-sky-600/10 text-sky-700 border-sky-200",
    vehicle: "Mercedes-Benz G-Class",
    service: "Autonomous Mobile Unit Decontamination",
    category: "mobile",
    headline: "The mobile service is a game-changer.",
    quote:
      "The mobile service arrived right on schedule and set up a flawless operation in my driveway. They performed a full decontamination wash and interior detail. It was incredibly convenient and the results were exceptional. Highly recommended for busy professionals.",
    rating: 5,
    timeAgo: "2 months ago",
  },
];

const filterTabs = [
  { id: "all", label: "All Reviews (16)" },
  { id: "paint-correction", label: "Paint Correction" },
  { id: "ceramic", label: "Ceramic & Quartz" },
  { id: "interior", label: "Interior & Steam" },
  { id: "mobile", label: "Mobile Unit" },
];

const pillars = [
  {
    title: "Uncompromising Quality",
    desc: "From multi-stage paint correction to laboratory-grade ceramic coatings, we deliver results that exceed expectations.",
    icon: Sparkles,
    badge: "Concours Grade",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees or surprise upsells. Our calibrated service packages (True Shine, Signature, Panache, Luxurious) ensure you know exactly what you are paying for.",
    icon: ShieldCheck,
    badge: "Fixed Clear Quotes",
  },
  {
    title: "Certified Expertise",
    desc: "Our technicians are highly trained in the latest automotive detailing science, ensuring your vehicle is always in safe, capable hands.",
    icon: Shield,
    badge: "Master Certified",
  },
  {
    title: "Concierge Convenience",
    desc: "With our mobile detailing options and seamless online booking, we make maintaining your vehicle effortless.",
    icon: Zap,
    badge: "At Your Doorstep",
  },
];

function ReviewsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReviews = useMemo(() => {
    return allReviews.filter((item) => {
      const matchesCategory =
        selectedFilter === "all" || item.category === selectedFilter;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.vehicle.toLowerCase().includes(query) ||
        item.service.toLowerCase().includes(query) ||
        item.headline.toLowerCase().includes(query) ||
        item.quote.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      <Header />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: BRODCOME (BREADCRUMB & HERO 5.0 STAR REVIEW BANNER)            */}
        {/* ========================================================================= */}
        <section
          id="brodcome"
          aria-label="Brodcome Navigation & Client Reviews Hero"
          className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-blue-900/40 bg-gradient-to-b from-[#060b18] via-[#091430] to-[#040814] text-slate-100"
        >
          {/* High-Gloss Luxury Automotive Background Image with Dramatic Overlays */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/signature-detail.jpg"
              alt="Grand Duke luxury automotive signature reflection"
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
            <PageBreadcrumb currentPage="Reviews & Testimonials" />

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              {/* Eyebrow Status Ribbon */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-cyan-300 backdrop-blur-md shadow-xs mb-4">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>120+ VERIFIED GOOGLE CLIENT REVIEWS • 5.0 STAR RATED</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12] text-center">
                Client Reviews &amp;{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Testimonials
                </span>
              </h1>

              {/* Anthem Tagline with Sapphire Gradient */}
              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent text-center">
                Trusted by Discerning Owners. Verified by Google.
              </div>

              {/* Narrative Paragraphs */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium max-w-3xl mx-auto text-center">
                At Grand Duke Automotive, we believe that a flawless finish speaks for itself—but the words of our clients speak volumes. We are honored to be the trusted choice for luxury car owners, collectors, and automotive enthusiasts across City, Country, and our surrounding 300-mile radius.
              </p>

              {/* ========================================================================= */}
              {/* GOOGLE 5.0 STAR MASTER VERIFIED CARD (LUXURY GLASSMORPHIC DECK)          */}
              {/* ========================================================================= */}
              <div className="mt-8 w-full max-w-2xl rounded-3xl border border-white/20 bg-white/[0.08] p-6 sm:p-8 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10 transition-all hover:border-cyan-400/50">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  {/* Left: Star & Rating Metrics */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="flex items-center gap-2">
                      <div className="flex size-9 items-center justify-center rounded-xl bg-white shadow-xs border border-white/20">
                        <GoogleGIcon className="size-5" />
                      </div>
                      <span className="text-sm font-extrabold text-white">
                        Google Verified Reviews
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                        <BadgeCheck className="size-3 text-emerald-400" />
                        100% Genuine
                      </span>
                    </div>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                        5.0
                      </span>
                      <span className="text-xl font-bold text-slate-300">/ 5.0</span>
                    </div>

                    <div className="mt-2 flex items-center gap-1.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-5 fill-amber-400 text-amber-400 drop-shadow-xs" />
                      ))}
                    </div>

                    <div className="mt-2 text-xs font-semibold text-slate-300">
                      Based on <b className="text-white font-bold">120+ Verified Google Reviews</b>
                    </div>
                  </div>

                  {/* Right: Leave a Google Review Button */}
                  <div className="flex flex-col items-center sm:items-end w-full sm:w-auto">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-cyan-200 shadow-md backdrop-blur-md transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    >
                      <GoogleGIcon className="size-4 group-hover:scale-110 transition-transform" />
                      <span>LEAVE A GOOGLE REVIEW</span>
                      <ArrowUpRight className="size-4" />
                    </a>

                    <div className="mt-2.5 text-[11px] text-slate-400">
                      Share your experience with our master technicians
                    </div>
                  </div>
                </div>
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
                  href="tel:+15043502935"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-black/60 px-6 text-xs sm:text-sm font-bold text-white shadow-xs transition-all duration-200 hover:border-cyan-400 hover:text-cyan-300"
                >
                  <Phone className="size-3.5 text-cyan-400" />
                  <span>Call: (504) 350-2935</span>
                </a>
              </div>
            </div>

            {/* 4-Card Luxury KPI Stats Deck */}
            <div className="mt-14 grid gap-4 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {[
                {
                  value: "5.0 ★",
                  label: "Google Rating",
                  sub: "Based on 120+ verified reviews",
                  icon: Star,
                  color: "text-amber-400",
                },
                {
                  value: "100%",
                  label: "Satisfaction Rate",
                  sub: "Verified client recommendation",
                  icon: ShieldCheck,
                  color: "text-emerald-400",
                },
                {
                  value: "17+ Yrs",
                  label: "Master Experience",
                  sub: "Certified master technicians",
                  icon: Award,
                  color: "text-cyan-400",
                },
                {
                  value: "300 Mi",
                  label: "Regional Reach",
                  sub: "Studio & mobile concierge fleet",
                  icon: Compass,
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
        {/* SECTION 2: FEATURED CLIENT TESTIMONIALS (16 REVIEWS)                      */}
        {/* ========================================================================= */}
        <section id="featured-testimonials" className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>EXPERIENCES OF PERFECTION</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Featured Client{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Testimonials
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Detailed walkarounds, honest pricing, and forensic surface restoration. Read firsthand accounts from owners of Porsche, Corvette, Bentley, Lamborghini, Audi, BMW, Mercedes-Benz, Volvo, Lexus, and classics.
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card p-3 sm:p-4 shadow-xs">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                {filterTabs.map((tab) => {
                  const isActive = selectedFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedFilter(tab.id)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Keyword Search */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Filter vehicle or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-10 text-xs rounded-xl bg-background border-border/80 focus-visible:ring-primary/40"
                />
              </div>
            </div>

            {/* Result count */}
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground px-1">
              <span>
                Showing <b>{filteredReviews.length}</b> of {allReviews.length} verified reviews
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-primary hover:underline font-semibold"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* Testimonials 2-Column Luxury Grid */}
            <div className="mt-6 sm:mt-8 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 items-stretch">
              {filteredReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-xs ring-1 ring-border/20 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: User Avatar, Initials, Name & Google Verified Pill */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div className="relative shrink-0">
                          <div
                            className={cn(
                              "flex size-11 items-center justify-center rounded-2xl border text-sm font-extrabold shadow-2xs",
                              rev.avatarBg
                            )}
                          >
                            {rev.initials}
                          </div>
                          <div className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-white shadow-xs ring-1 ring-black/5">
                            <GoogleGIcon className="size-3" />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-base font-bold text-foreground">
                              {rev.name}
                            </span>
                            <BadgeCheck className="size-4 text-blue-500 fill-blue-500/20" />
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-muted-foreground mt-0.5">
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                              Verified Google Review
                            </span>
                            <span>•</span>
                            <span>{rev.timeAgo}</span>
                          </div>
                        </div>
                      </div>

                      {/* Google G Pill */}
                      <div className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border/70 bg-surface px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
                        <GoogleGIcon className="size-2.5" />
                        <span>5.0</span>
                      </div>
                    </div>

                    {/* Star Rating Strip */}
                    <div className="mt-4 flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-1 text-xs font-extrabold text-foreground">
                        5.0 / 5.0
                      </span>
                    </div>

                    {/* Testimonial Headline */}
                    <h3 className="mt-3 text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      "{rev.headline}"
                    </h3>

                    {/* Testimonial Detailed Body */}
                    <p className="mt-2.5 text-xs sm:text-[13.5px] leading-relaxed text-muted-foreground font-medium">
                      "{rev.quote}"
                    </p>
                  </div>

                  {/* Card Bottom: Vehicle Model & Treatment Tag */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-4">
                    <div className="flex items-center gap-1.5 rounded-xl border border-border/70 bg-surface/80 px-3 py-1.5 text-xs font-semibold text-foreground">
                      <Car className="size-3.5 text-primary shrink-0" />
                      <span>{rev.vehicle}</span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-xl border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-bold text-primary">
                      <Sparkles className="size-3.5 text-primary shrink-0" />
                      <span>{rev.service}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center">
                <p className="text-sm text-muted-foreground">
                  No testimonials found matching "{searchQuery}".
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedFilter("all");
                  }}
                  className="mt-4 rounded-full text-xs font-bold"
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: WHY OUR CLIENTS CHOOSE GRAND DUKE                              */}
        {/* ========================================================================= */}
        <section id="why-choose-reviews" className="relative overflow-hidden py-16 sm:py-24 bg-surface/60 border-y border-border/70">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>THE REPUTATION STANDARD</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Why Our Clients{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Choose Grand Duke
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Our reviews consistently highlight the pillars of our business that set us apart:
              </p>
            </div>

            <div className="mt-12 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                          <Icon className="size-6" />
                        </div>
                        <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10.5px] font-bold text-primary">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-medium">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-border/50 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="size-3.5" />
                      <span>Verified Client Pillar</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: AUTOMOTIVE PARTNER BRAND MARQUE STRIP                          */}
        {/* ========================================================================= */}
        <TrustStrip />

        {/* ========================================================================= */}
        {/* SECTION 5: READY TO EXPERIENCE THE GRAND DUKE DIFFERENCE?                 */}
        {/* ========================================================================= */}
        <section id="appointment" className="relative overflow-hidden py-16 sm:py-24 bg-surface/40">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>JOIN OUR DISCERNING CLIENTELE</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Ready to Experience the{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Grand Duke Difference?
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Join the ranks of satisfied luxury car owners who trust us with their prized possessions. Whether you need a meticulous maintenance wash or a full ceramic coating transformation, we are ready to exceed your expectations.
              </p>

              {/* Direct Support & Hotline Callout */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-muted-foreground">
                <span>Have questions before booking?</span>
                <a
                  href="tel:+15043502935"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-bold"
                >
                  <Phone className="size-3" />
                  <span>Call (504) 350-2935</span>
                </a>
                <span>•</span>
                <a
                  href="mailto:info@grandduke.com"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-bold"
                >
                  <Mail className="size-3" />
                  <span>info@grandduke.com</span>
                </a>
              </div>
            </div>

            {/* 3 Concierge Quick Cards */}
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
                    href="tel:+15043502935"
                    className="text-sm font-bold text-foreground hover:text-primary truncate block"
                  >
                    (504) 350-2935
                  </a>
                  <div className="text-[10.5px] text-muted-foreground truncate">
                    Available Mon – Fri
                  </div>
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
                  <Mail className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                    Direct Email
                  </div>
                  <a
                    href="mailto:info@grandduke.com"
                    className="text-xs font-bold text-foreground hover:text-primary truncate block"
                  >
                    info@grandduke.com
                  </a>
                  <div className="text-[10.5px] text-muted-foreground truncate">
                    detailbrandco@gmail.com
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive 3-Step Booking Engine */}
            <QuoteForm />
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
}

