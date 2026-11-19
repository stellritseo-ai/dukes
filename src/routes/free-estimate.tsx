import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarDays,
  Car,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  Droplets,
  HelpCircle,
  Image as ImageIcon,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  UploadCloud,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/automotive/Header";
import { Footer } from "@/components/automotive/Footer";
import { MobileCTA } from "@/components/automotive/MobileCTA";
import { TrustStrip } from "@/components/automotive/TrustStrip";
import { PageBreadcrumb } from "@/components/automotive/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const description =
  "Request a complimentary, transparent free estimate from Grand Duke Automotive. Master technicians with 17+ years of experience provide personalized quotes for paint correction, ceramic coatings, and luxury detailing.";

export const Route = createFileRoute("/free-estimate")({
  head: () => ({
    meta: [
      {
        title:
          "Request Your Free Estimate | Grand Duke Automotive — Precision Detailing",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "free auto detailing estimate, car detailing quote, ceramic coating estimate, paint correction quote, luxury vehicle detailing estimate, grand duke automotive quote",
      },
      {
        property: "og:title",
        content: "Request Your Free Estimate | Grand Duke Automotive",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/free-estimate" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Request Your Free Estimate | Grand Duke Automotive",
      },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [{ rel: "canonical", href: "/free-estimate" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Request Your Free Estimate | Grand Duke Automotive",
          description,
          mainEntity: {
            "@type": "AutomotiveBusiness",
            name: "Grand Duke Automotive",
            telephone: "+15043502935",
            email: "info@grandduke.com",
            priceRange: "$$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1234 Main Street",
              addressLocality: "City",
              addressCountry: "Country",
            },
            openingHours: "Mo-Fr 07:00-18:00",
          },
        }),
      },
    ],
  }),
  component: FreeEstimatePage,
});

const serviceOptions = [
  { id: "wash-decon", label: "Maintenance Wash & Decontamination" },
  { id: "paint-correction", label: "Paint Correction (Single or Multi-Stage)" },
  { id: "ceramic-coating", label: "Ceramic Coating / Quartz Shield" },
  { id: "interior-restoration", label: "Interior Restoration & Leather Care" },
  { id: "wheel-caliper", label: "Wheel & Caliper Detailing" },
  { id: "full-package", label: "Full Package (Please recommend)" },
  { id: "not-sure", label: "Not sure — I'd like a consultation" },
];

const vehicleTypes = [
  "Sedan",
  "SUV",
  "Truck",
  "Coupe",
  "Exotic / Supercar",
  "Classic / Vintage",
  "Other",
];

const conditionOptions = [
  {
    id: "excellent",
    label: "Excellent",
    sub: "Minor maintenance needed",
  },
  {
    id: "good",
    label: "Good",
    sub: "Some swirl marks or light staining",
  },
  {
    id: "fair",
    label: "Fair",
    sub: "Noticeable scratches, oxidation, or interior wear",
  },
  {
    id: "poor",
    label: "Poor",
    sub: "Heavy correction and restoration needed",
  },
];

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Vehicle",
    desc: "Complete the form below with your vehicle's make, model, year, and current condition. Let us know which services you are interested in—or simply tell us your goals, and we will recommend the right path.",
    icon: Car,
  },
  {
    num: "02",
    title: "Speak with a Certified Technician",
    desc: "One of our detailing specialists will reach out within 24 hours to discuss your vehicle's needs. We will ask about paint condition, interior materials, and any specific concerns you may have. If needed, we may request photos to better understand the scope of work.",
    icon: Phone,
  },
  {
    num: "03",
    title: "Receive Your Transparent Quote",
    desc: "We will provide a clear, itemized estimate based on our calibrated service packages. You will know exactly what is included, how long it will take, and what results to expect—before you ever commit.",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "Book Your Experience",
    desc: "Once you approve your estimate, we will schedule your appointment at our state-of-the-art studio or arrange a mobile detailing visit at your convenience.",
    icon: CalendarDays,
  },
];

const whyUsPillars = [
  {
    title: "Certified Expertise",
    desc: "Our estimates are provided by Master Technicians with 17+ years of experience—not salespeople.",
    icon: Award,
    badge: "Master Tier",
  },
  {
    title: "Honest Recommendations",
    desc: "We will never upsell you on services your vehicle does not need. We recommend only what is right for your car.",
    icon: Shield,
    badge: "Zero Upselling",
  },
  {
    title: "Transparent Pricing",
    desc: "Our packages are clearly defined, so you know exactly what you are paying for before any work begins.",
    icon: ShieldCheck,
    badge: "Itemized Clarity",
  },
  {
    title: "100% Satisfaction Guarantee",
    desc: "Every service we perform is backed by our commitment to your complete satisfaction.",
    icon: Sparkles,
    badge: "Guaranteed",
  },
];

function FreeEstimatePage() {
  // Contact info
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState<"phone" | "email" | "text">("phone");

  // Vehicle info
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleType, setVehicleType] = useState("Sedan");

  // Service interest
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Paint Correction (Single or Multi-Stage)",
    "Ceramic Coating / Quartz Shield",
  ]);

  // Vehicle condition
  const [vehicleCondition, setVehicleCondition] = useState("good");

  // Additional details
  const [additionalDetails, setAdditionalDetails] = useState("");

  // Photo uploads
  const [uploadedPhotos, setUploadedPhotos] = useState<{ id: string; name: string; url: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (uploadedPhotos.length + files.length > 3) {
      toast.error("Maximum 3 photos allowed", {
        description: "Please select up to 3 photos of your vehicle.",
      });
      return;
    }

    Array.from(files).forEach((file) => {
      const photoObj = {
        id: Math.random().toString(36).substring(2, 9),
        name: file.name,
        url: URL.createObjectURL(file),
      };
      setUploadedPhotos((prev) => [...prev.slice(0, 2), photoObj]);
    });

    toast.success("Photo attached", {
      description: "Photo will be included with your quote request.",
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removePhoto = (id: string) => {
    setUploadedPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    if (!vehicleMake.trim() || !vehicleModel.trim() || !vehicleYear.trim()) {
      toast.error("Please provide your vehicle's make, model, and year");
      return;
    }
    if (selectedServices.length === 0) {
      toast.error("Please select at least one service of interest");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Estimate Request Received!", {
        description:
          "A Grand Duke Master Technician will reach out within 24 hours with your transparent quote.",
      });
    }, 900);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setContactMethod("phone");
    setVehicleMake("");
    setVehicleModel("");
    setVehicleYear("");
    setVehicleColor("");
    setVehicleType("Sedan");
    setSelectedServices([
      "Paint Correction (Single or Multi-Stage)",
      "Ceramic Coating / Quartz Shield",
    ]);
    setVehicleCondition("good");
    setAdditionalDetails("");
    setUploadedPhotos([]);
    setIsSubmitted(false);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      <Header />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: BRODCOME (BREADCRUMB & HERO ESTIMATE BANNER)                   */}
        {/* ========================================================================= */}
        <section
          id="brodcome"
          aria-label="Brodcome Navigation & Free Estimate Hero"
          className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 border-b border-blue-900/40 bg-gradient-to-b from-[#060b18] via-[#091430] to-[#040814] text-slate-100"
        >
          {/* High-Gloss Luxury Automotive Background Image with Dramatic Overlays */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/engine-bay.jpg"
              alt="Grand Duke precision detailing engine and clear coat restoration"
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
            <PageBreadcrumb currentPage="Request Your Free Estimate" />

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              {/* Eyebrow Status Ribbon */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-cyan-300 backdrop-blur-md shadow-xs mb-4">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>COMPLIMENTARY &amp; NO-OBLIGATION CONSULTATION</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12] text-center">
                Request Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Free Estimate
                </span>
              </h1>

              {/* Anthem Tagline with Sapphire Gradient */}
              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent text-center">
                Precision Starts with a Personalized Quote.
              </div>

              {/* Narrative Paragraphs */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium max-w-3xl mx-auto text-center">
                Every vehicle is unique. From the condition of your clear coat to the materials in your interior, no two cars require the exact same level of care. That is why Grand Duke Automotive offers complimentary, no-obligation estimates for every client.
              </p>

              {/* Quality Guarantee Pill */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>No hidden fees • No surprise upsells • Honest, expert Master Technician recommendations</span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Button
                  variant="hero"
                  className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-[0_0_25px_rgba(37,99,235,0.4)] tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
                  asChild
                >
                  <a href="#estimate-form">
                    <Send className="size-4" />
                    <span>Complete Estimate Form</span>
                    <ArrowRight className="size-4" />
                  </a>
                </Button>

                <Button
                  variant="glass"
                  className="h-12 rounded-full px-7 text-xs sm:text-sm font-bold text-white border-white/20 bg-white/10 hover:bg-white/20"
                  asChild
                >
                  <a href="/book">
                    <CalendarDays className="size-4 text-cyan-400" />
                    <span>Book Online Directly</span>
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
                  value: "100% Free",
                  label: "Zero Obligation",
                  sub: "No commitment required",
                  icon: ShieldCheck,
                  color: "text-emerald-400",
                },
                {
                  value: "<24 Hrs",
                  label: "Rapid Delivery",
                  sub: "Direct specialist consultation",
                  icon: Clock,
                  color: "text-cyan-400",
                },
                {
                  value: "17+ Yrs",
                  label: "Master Expertise",
                  sub: "Quotes by certified artisans",
                  icon: Award,
                  color: "text-amber-400",
                },
                {
                  value: "Itemized",
                  label: "Transparent Pricing",
                  sub: "Calibrated packages, zero hidden fees",
                  icon: Sparkles,
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
        {/* SECTION 2: HOW IT WORKS (4 STEPS)                                         */}
        {/* ========================================================================= */}
        <section id="how-it-works" className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>OUR ESTIMATION PROCESS</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                How It{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Works
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Four straightforward steps from initial inquiry to flawless handover. No pressure, no confusion.
              </p>
            </div>

            <div className="mt-12 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
              {steps.map((st) => {
                const Icon = st.icon;
                return (
                  <div
                    key={st.num}
                    className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-xs ring-1 ring-border/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                          <Icon className="size-6" />
                        </div>
                        <span className="rounded-full bg-surface-raised px-3 py-1 text-xs font-black text-muted-foreground">
                          Step {st.num}
                        </span>
                      </div>

                      <h3 className="mt-5 text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {st.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-medium">
                        {st.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-semibold text-primary">
                      <span>Grand Duke Quality Standard</span>
                      <Check className="size-3.5 text-emerald-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: REQUEST YOUR FREE ESTIMATE (THE MASTER FORM)                   */}
        {/* ========================================================================= */}
        <section id="estimate-form" className="relative overflow-hidden py-16 sm:py-24 bg-surface/50 border-y border-border/70">
          <div className="site-shell relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>TAILORED QUOTE FORM</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Request Your{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Free Estimate
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Complete the details below to receive a personalized, itemized quote tailored to your vehicle's exact requirements.
              </p>
            </div>

            {/* Form Card */}
            <div className="rounded-3xl border border-border/90 bg-card p-6 sm:p-10 shadow-xl backdrop-blur-xl ring-1 ring-border/40">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="flex size-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-md">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold text-foreground">
                    Estimate Request Submitted Successfully!
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
                    Thank you, <b className="text-foreground">{fullName}</b>. Our Master Technicians have received your request for your <b className="text-foreground">{vehicleYear} {vehicleMake} {vehicleModel}</b>. We will review your details and reach out within 24 hours with your transparent quote.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <Button
                      variant="hero"
                      onClick={handleReset}
                      className="rounded-full px-6 text-xs font-bold"
                    >
                      <RotateCcw className="size-3.5" />
                      <span>Submit Another Request</span>
                    </Button>
                    <Button
                      variant="glass"
                      asChild
                      className="rounded-full px-6 text-xs font-bold"
                    >
                      <a href="/">Return to Home</a>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Block 1: Contact Information */}
                  <div>
                    <div className="flex items-center gap-2 pb-3 border-b border-border/60">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                        1
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        Contact Information
                      </h3>
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="e.g. Dennis Montgomery"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="dennis@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          required
                          placeholder="(555) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Preferred Contact Method
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {(["phone", "email", "text"] as const).map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => setContactMethod(method)}
                              className={cn(
                                "flex h-11 items-center justify-center rounded-xl text-xs font-bold capitalize transition-all border cursor-pointer",
                                contactMethod === method
                                  ? "bg-primary text-primary-foreground border-primary shadow-xs"
                                  : "bg-surface border-border/80 text-muted-foreground hover:bg-muted hover:text-foreground"
                              )}
                            >
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Block 2: Vehicle Information */}
                  <div>
                    <div className="flex items-center gap-2 pb-3 border-b border-border/60">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                        2
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        Vehicle Information
                      </h3>
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Vehicle Make *
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="e.g. Porsche, BMW, Ferrari"
                          value={vehicleMake}
                          onChange={(e) => setVehicleMake(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Vehicle Model *
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="e.g. 911 GT3, M5, 488"
                          value={vehicleModel}
                          onChange={(e) => setVehicleModel(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Vehicle Year *
                        </label>
                        <Input
                          type="text"
                          required
                          placeholder="e.g. 2024"
                          value={vehicleYear}
                          onChange={(e) => setVehicleYear(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Vehicle Color
                        </label>
                        <Input
                          type="text"
                          placeholder="e.g. GT Silver Metallic"
                          value={vehicleColor}
                          onChange={(e) => setVehicleColor(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          Vehicle Type
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {vehicleTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setVehicleType(type)}
                              className={cn(
                                "rounded-xl px-3.5 py-2 text-xs font-bold transition-all border cursor-pointer",
                                vehicleType === type
                                  ? "bg-primary text-primary-foreground border-primary shadow-xs"
                                  : "bg-surface border-border/80 text-muted-foreground hover:bg-muted hover:text-foreground"
                              )}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Block 3: Service Interest */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-border/60">
                      <div className="flex items-center gap-2">
                        <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                          3
                        </div>
                        <h3 className="text-base font-bold text-foreground">
                          Service Interest
                        </h3>
                      </div>
                      <span className="text-[11px] font-semibold text-muted-foreground">
                        Check all that apply
                      </span>
                    </div>

                    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {serviceOptions.map((opt) => {
                        const isSelected = selectedServices.includes(opt.label);
                        return (
                          <div
                            key={opt.id}
                            onClick={() => toggleService(opt.label)}
                            className={cn(
                              "flex items-center gap-3 rounded-2xl border p-3.5 transition-all cursor-pointer select-none",
                              isSelected
                                ? "border-primary bg-primary/5 text-foreground shadow-2xs"
                                : "border-border/80 bg-surface/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            <div
                              className={cn(
                                "flex size-5 shrink-0 items-center justify-center rounded-md border transition-all",
                                isSelected
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "border-muted-foreground/40 bg-background"
                              )}
                            >
                              {isSelected && <Check className="size-3.5 stroke-[3]" />}
                            </div>
                            <span className="text-xs font-semibold leading-tight">
                              {opt.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Block 4: Vehicle Condition */}
                  <div>
                    <div className="flex items-center gap-2 pb-3 border-b border-border/60">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                        4
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        Vehicle Condition
                      </h3>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {conditionOptions.map((cond) => {
                        const isSelected = vehicleCondition === cond.id;
                        return (
                          <div
                            key={cond.id}
                            onClick={() => setVehicleCondition(cond.id)}
                            className={cn(
                              "flex items-start gap-3 rounded-2xl border p-4 transition-all cursor-pointer select-none",
                              isSelected
                                ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary/30 shadow-2xs"
                                : "border-border/80 bg-surface/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            <div
                              className={cn(
                                "flex size-5 shrink-0 items-center justify-center rounded-full border transition-all mt-0.5",
                                isSelected
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-muted-foreground/40 bg-background"
                              )}
                            >
                              {isSelected && <div className="size-2 rounded-full bg-white" />}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-foreground">
                                {cond.label}
                              </div>
                              <div className="mt-0.5 text-[11px] text-muted-foreground leading-tight">
                                {cond.sub}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Block 5: Additional Details */}
                  <div>
                    <div className="flex items-center gap-2 pb-3 border-b border-border/60">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                        5
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        Additional Details &amp; Concerns
                      </h3>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        Specific concerns, problem areas, or goals for your vehicle
                      </label>
                      <Textarea
                        rows={4}
                        placeholder="Please share any scratches, water spots, leather staining, timeline goals, or whether you prefer studio vs mobile service..."
                        value={additionalDetails}
                        onChange={(e) => setAdditionalDetails(e.target.value)}
                        className="rounded-2xl text-xs bg-background border-border/80 leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* Block 6: Photo Upload (Optional) */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-border/60">
                      <div className="flex items-center gap-2">
                        <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                          6
                        </div>
                        <h3 className="text-base font-bold text-foreground">
                          Photo Upload (Optional)
                        </h3>
                      </div>
                      <span className="text-[11px] text-muted-foreground">
                        Up to 3 photos
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border/80 bg-surface/50 p-6 text-center cursor-pointer transition-colors hover:border-primary/50 hover:bg-surface"
                      >
                        <UploadCloud className="size-8 text-primary opacity-80" />
                        <div className="mt-2 text-xs font-bold text-foreground">
                          Click to select or drag &amp; drop photos
                        </div>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">
                          Upload up to 3 photos of your vehicle to help us provide a more accurate estimate.
                        </p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={handlePhotoUpload}
                        />
                      </div>

                      {/* Uploaded Thumbnails Preview */}
                      {uploadedPhotos.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {uploadedPhotos.map((photo) => (
                            <div
                              key={photo.id}
                              className="group relative size-20 overflow-hidden rounded-xl border border-border/80 bg-black shadow-xs"
                            >
                              <img
                                src={photo.url}
                                alt={photo.name}
                                className="h-full w-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => removePhoto(photo.id)}
                                className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-black/70 text-white hover:bg-destructive"
                              >
                                <X className="size-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Form Submission Button */}
                  <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-muted-foreground text-center sm:text-left">
                      <span className="font-semibold text-foreground">Complimentary Guarantee:</span>{" "}
                      No fees, zero spam, and no obligation to book.
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      disabled={isSubmitting}
                      className="h-12 w-full sm:w-auto rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium tracking-wide transition-all duration-200 hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          <span>SUBMIT ESTIMATE REQUEST</span>
                          <ArrowRight className="size-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: PREFER TO SPEAK WITH US DIRECTLY?                              */}
        {/* ========================================================================= */}
        <section id="direct-concierge" className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>DIRECT ARTISAN DIALOGUE</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Prefer to Speak with{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Us Directly?
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                We understand that some vehicles require a conversation. If you have a classic car, an exotic, or a vehicle with unique conditions, our team is happy to speak with you personally.
              </p>
            </div>

            {/* 4 Direct Contact Cards */}
            <div className="mt-12 sm:mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:border-primary/50 hover:shadow-lg">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <Phone className="size-5" />
                  </div>
                  <div className="mt-4 text-[10.5px] font-extrabold uppercase tracking-widest text-primary">
                    Call Us
                  </div>
                  <a
                    href="tel:+15043502935"
                    className="mt-1 block text-base font-bold text-foreground hover:text-primary transition-colors"
                  >
                    (504) 350-2935
                  </a>
                  <span className="text-xs text-muted-foreground">
                    Direct Concierge Hotline
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
                  Direct master technician line
                </div>
              </div>

              <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:border-primary/50 hover:shadow-lg">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    <Mail className="size-5" />
                  </div>
                  <div className="mt-4 text-[10.5px] font-extrabold uppercase tracking-widest text-emerald-600">
                    Email Us
                  </div>
                  <a
                    href="mailto:info@grandduke.com"
                    className="mt-1 block text-sm font-bold text-foreground hover:text-primary transition-colors truncate"
                  >
                    info@grandduke.com
                  </a>
                  <a
                    href="mailto:detailbrandco@gmail.com"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors truncate block"
                  >
                    detailbrandco@gmail.com
                  </a>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
                  Send vehicle specs or photos
                </div>
              </div>

              <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:border-primary/50 hover:shadow-lg">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 border border-sky-500/20">
                    <MapPin className="size-5" />
                  </div>
                  <div className="mt-4 text-[10.5px] font-extrabold uppercase tracking-widest text-sky-600">
                    Visit Our Studio
                  </div>
                  <div className="mt-1 text-sm font-bold text-foreground">
                    1234 Main Street
                  </div>
                  <div className="text-xs text-muted-foreground">
                    City, Country
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
                  State-of-the-art controlled atelier
                </div>
              </div>

              <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:border-primary/50 hover:shadow-lg">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                    <Clock className="size-5" />
                  </div>
                  <div className="mt-4 text-[10.5px] font-extrabold uppercase tracking-widest text-amber-600">
                    Studio Hours
                  </div>
                  <div className="mt-1 text-xs font-bold text-foreground leading-snug">
                    Monday – Friday, 7:00 AM – 6:00 PM
                  </div>
                  <div className="mt-0.5 text-[11px] text-emerald-600 font-semibold">
                    24X7 Emergency Service
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
                  Concierge scheduling on call
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: WHY REQUEST AN ESTIMATE FROM GRAND DUKE? (4 PILLARS)            */}
        {/* ========================================================================= */}
        <section id="why-estimate" className="relative overflow-hidden py-16 sm:py-24 bg-surface/60 border-y border-border/70">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>THE GRAND DUKE ADVANTAGE</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Why Request an Estimate{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  from Grand Duke?
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Built on transparency, technical mastery, and unmatched customer care. Here is our pledge to you:
              </p>
            </div>

            <div className="mt-12 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
              {whyUsPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                          <Icon className="size-6" />
                        </div>
                        <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10.5px] font-bold text-primary">
                          {p.badge}
                        </span>
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-medium">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-border/50 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="size-3.5" />
                      <span>Certified Promise</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: AUTOMOTIVE PARTNER BRAND MARQUE STRIP                          */}
        {/* ========================================================================= */}
        <TrustStrip />

        {/* ========================================================================= */}
        {/* SECTION 7: READY TO EXPERIENCE THE GRAND DUKE DIFFERENCE?                 */}
        {/* ========================================================================= */}
        <section id="closing-cta" className="relative overflow-hidden py-16 sm:py-24 bg-surface/40">
          <div className="site-shell relative z-10 max-w-4xl mx-auto text-center">
            <div className="eyebrow mb-4 justify-center">
              <span />
              <span>THE PURSUIT OF PERFECTION</span>
              <span />
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
              Ready to Experience the{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Grand Duke Difference?
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium max-w-2xl mx-auto">
              Ready to experience the Grand Duke difference? Request your free estimate today and let us show you what precision detailing truly means.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Button
                variant="hero"
                className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium tracking-wide transition-all duration-200 hover:scale-[1.02]"
                asChild
              >
                <a href="#estimate-form">
                  <Send className="size-4" />
                  <span>Request Your Free Estimate</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>

              <Button
                variant="glass"
                className="h-12 rounded-full px-6 text-xs sm:text-sm font-bold"
                asChild
              >
                <a href="/#services">
                  <span>View Our Service Packages</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>

              <a
                href="tel:+15043502935"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 bg-card px-5 text-xs sm:text-sm font-bold text-foreground shadow-xs transition-all duration-200 hover:border-primary/40 hover:text-primary"
              >
                <Phone className="size-3.5 text-primary" />
                <span>Call Concierge: (504) 350-2935</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
}
