import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  Info,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/automotive/Header";
import { Footer } from "@/components/automotive/Footer";
import { MobileCTA } from "@/components/automotive/MobileCTA";
import { TrustStrip } from "@/components/automotive/TrustStrip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const description =
  "Book your luxury automotive detailing appointment at Grand Duke Automotive. Choose your vehicle, select your treatment package, and schedule your experience in 3 simple steps.";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      {
        title:
          "Book Your Detail | Grand Duke Automotive — Reserve Your Detailing Experience",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "book car detailing, schedule automotive detailing, ceramic coating appointment, paint correction booking, luxury car care appointment, Grand Duke Automotive",
      },
      { property: "og:title", content: "Book Your Detail | Grand Duke Automotive" },
      { property: "og:description", content: description },
    ],
  }),
  component: BookPage,
});

// ─── Data ────────────────────────────────────────────────────────────────────

const vehicleTypes = [
  "Sedan",
  "SUV",
  "Truck",
  "Coupe",
  "Exotic / Supercar",
  "Classic / Collector",
  "Other",
];

const timeSlots = [
  { id: "morning", label: "Morning", sub: "7:00 AM – 11:00 AM" },
  { id: "midday", label: "Midday", sub: "11:00 AM – 2:00 PM" },
  { id: "afternoon", label: "Afternoon", sub: "2:00 PM – 6:00 PM" },
];

const serviceLocations = [
  {
    id: "studio",
    label: "In-Studio",
    sub: "1234 Main Street, City, Country",
    icon: MapPin,
  },
  {
    id: "mobile",
    label: "Mobile Detailing",
    sub: "At my home or office — select packages only",
    icon: Car,
  },
];

const packages = [
  {
    id: "true-shine",
    name: "True Shine",
    price: "$75",
    tag: null,
    desc: "Exterior maintenance wash, clay bar decontamination, iron fallout removal, pH-balanced wash, polymer sealant, tire dressing, and full exterior glass cleaning.",
    color: "sky",
    duration: "2–3 hrs",
  },
  {
    id: "signature",
    name: "Signature",
    price: "$190",
    tag: "Most Popular",
    desc: "Full decontamination wash, clay bar treatment, one-stage machine polish, premium wax/sealant, wheels and calipers detailed, tire dressing, and full interior vacuum.",
    color: "blue",
    duration: "4–6 hrs",
  },
  {
    id: "panache",
    name: "Panache",
    price: "$220",
    tag: "Most Selected ⭐",
    desc: "Multi-stage machine polish, premium ceramic coating application, full exterior decontamination, wheel face and barrel cleaning, tire dressing, and interior wipe-down.",
    color: "primary",
    duration: "6–8 hrs",
  },
  {
    id: "steam-clean",
    name: "Steam Clean",
    price: "$300",
    tag: null,
    desc: "Deep interior restoration using steam technology. Leather cleaning and conditioning, carpet and upholstery extraction, stain removal, odor elimination, and full exterior hand wash.",
    color: "emerald",
    duration: "5–7 hrs",
  },
  {
    id: "luxurious",
    name: "Luxurious",
    price: "$450",
    tag: "Flagship Experience",
    desc: "Our flagship experience. Full multi-stage paint correction, premium ceramic coating with warranty, complete interior restoration, engine bay detailing, wheel and caliper detailing, and concierge-level finishing.",
    color: "amber",
    duration: "Full Day",
  },
  {
    id: "not-sure",
    name: "Not Sure — Please Recommend",
    price: "Free Consult",
    tag: null,
    desc: "I'd like a consultation to determine the best package for my vehicle. Our team will assess your needs and recommend the ideal treatment.",
    color: "slate",
    duration: "Varies",
  },
];

const whyBookReasons = [
  {
    icon: Award,
    title: "17+ Years of Master Craftsmanship",
    desc: "Your vehicle is in the hands of certified, experienced technicians—not trainees.",
    color: "amber",
  },
  {
    icon: Zap,
    title: "Transparent, Calibrated Pricing",
    desc: "Every package is clearly defined. You know exactly what you are getting and what it costs before you book.",
    color: "primary",
  },
  {
    icon: ShieldCheck,
    title: "Climate-Controlled, Dust-Free Studio",
    desc: "We detail in a controlled environment with HEPA air filtration to ensure a flawless, contamination-free finish.",
    color: "sky",
  },
  {
    icon: Shield,
    title: "100% Satisfaction Guarantee",
    desc: "We stand behind every service. If you are not completely thrilled with the results, we will make it right.",
    color: "emerald",
  },
  {
    icon: Car,
    title: "Concierge Convenience",
    desc: "Mobile detailing available for select packages—we bring the Grand Duke experience to your doorstep.",
    color: "blue",
  },
];

const beforeAppointment = [
  "Remove personal belongings from your vehicle's interior, including valuables, car seats, and loose items.",
  "Note any problem areas—stains, scratches, or concerns—so our technicians can address them specifically.",
  "Allow adequate time. Full packages can take several hours to a full day. We will confirm the expected duration when you book.",
  "Arrive on time. Our schedule is carefully planned to give every vehicle the attention it deserves.",
];

const packageColorMap: Record<string, { border: string; bg: string; tag: string; price: string; tagBg: string }> = {
  sky: {
    border: "border-sky-500/50",
    bg: "bg-sky-500/5",
    tag: "text-sky-600",
    price: "text-sky-600",
    tagBg: "bg-sky-500/10 border-sky-500/30",
  },
  blue: {
    border: "border-blue-500/50",
    bg: "bg-blue-500/5",
    tag: "text-blue-600",
    price: "text-blue-600",
    tagBg: "bg-blue-500/10 border-blue-500/30",
  },
  primary: {
    border: "border-primary/50",
    bg: "bg-primary/5",
    tag: "text-primary",
    price: "text-primary",
    tagBg: "bg-primary/10 border-primary/30",
  },
  emerald: {
    border: "border-emerald-500/50",
    bg: "bg-emerald-500/5",
    tag: "text-emerald-600",
    price: "text-emerald-600",
    tagBg: "bg-emerald-500/10 border-emerald-500/30",
  },
  amber: {
    border: "border-amber-500/50",
    bg: "bg-amber-500/5",
    tag: "text-amber-600",
    price: "text-amber-600",
    tagBg: "bg-amber-500/10 border-amber-500/30",
  },
  slate: {
    border: "border-border/60",
    bg: "bg-surface/40",
    tag: "text-muted-foreground",
    price: "text-muted-foreground",
    tagBg: "bg-muted border-border/60",
  },
};

const whyColorMap: Record<string, string> = {
  amber: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  primary: "bg-primary/10 text-primary border-primary/20",
  sky: "bg-sky-500/10 text-sky-600 border-sky-500/20",
  emerald: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
};

// ─── Component ───────────────────────────────────────────────────────────────

function BookPage() {
  // Step 1 — Vehicle Details
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  // Step 2 — Package
  const [selectedPackage, setSelectedPackage] = useState("panache");

  // Step 3 — Schedule
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("morning");
  const [serviceLocation, setServiceLocation] = useState("studio");

  // Contact
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // UI State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!vehicleMake.trim()) { toast.error("Please enter your vehicle make"); return; }
    if (!vehicleModel.trim()) { toast.error("Please enter your vehicle model"); return; }
    if (!vehicleYear.trim()) { toast.error("Please enter your vehicle year"); return; }
    if (!vehicleType) { toast.error("Please select your vehicle type"); return; }
    if (!preferredDate) { toast.error("Please select your preferred date"); return; }
    if (!fullName.trim()) { toast.error("Please enter your full name"); return; }
    if (!email.trim() || !email.includes("@")) { toast.error("Please enter a valid email address"); return; }
    if (!phone.trim()) { toast.error("Please enter your phone number"); return; }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Booking Request Confirmed!", {
        description: "Thank you! A Grand Duke specialist will confirm your appointment within one business day.",
      });
    }, 950);
  };

  const handleReset = () => {
    setVehicleMake(""); setVehicleModel(""); setVehicleYear(""); setVehicleColor(""); setVehicleType("");
    setSelectedPackage("panache"); setPreferredDate(""); setPreferredTime("morning"); setServiceLocation("studio");
    setFullName(""); setEmail(""); setPhone(""); setNotes("");
    setIsSubmitted(false);
  };

  const selectedPkg = packages.find((p) => p.id === selectedPackage);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      <Header />

      <main>
        {/* ================================================================== */}
        {/* SECTION 1: HERO & ANTHEM                                            */}
        {/* ================================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-border/70">
          {/* Luxury Background Image */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/machine-polish.jpg"
              alt="Grand Duke Automotive precision machine polish detailing"
              className="h-full w-full object-cover object-center scale-105 opacity-[0.14]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-card/88 via-background/92 to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#00000018_1px,transparent_1px),linear-gradient(to_bottom,#00000018_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>

          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/8 blur-[160px]" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-sky-400/8 blur-[140px]" aria-hidden="true" />

          <div className="site-shell relative z-10">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground" aria-label="Breadcrumb">
              <a href="/" className="transition-colors hover:text-primary">Home</a>
              <ChevronRight className="size-3 opacity-40" />
              <span className="text-foreground">Book Your Detail</span>
            </nav>

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              {/* Eyebrow */}
              <div className="eyebrow mb-4 mx-auto justify-center">
                <span />
                <span>TAILORED IN 3 SIMPLE STEPS • 17+ YEARS OF MASTERY</span>
                <span />
              </div>

              {/* Headline */}
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[44px] lg:leading-[1.15] text-center">
                Book Your{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Detail
                </span>
              </h1>

              {/* Tagline */}
              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent text-center">
                Reserve Your Detailing Experience. Tailored in 3 Simple Steps.
              </div>

              {/* Narrative */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground font-medium max-w-3xl mx-auto text-center">
                Backed by 17+ years of master craftsmanship, Grand Duke Automotive makes it effortless to secure the precise care your vehicle deserves. Choose your vehicle, select your treatment package, and lock in your appointment—all in just a few minutes.
              </p>

              <p className="mt-2 text-sm font-semibold text-foreground/80 text-center">
                No phone tag. No guesswork. Just precision scheduling.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Button variant="hero" className="h-12 rounded-full px-7 text-xs sm:text-sm font-extrabold shadow-premium tracking-wide transition-all duration-200 hover:scale-[1.02]" asChild>
                  <a href="#booking-form">
                    <CalendarDays className="size-4" />
                    <span>Book My Detail Now</span>
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <a href="tel:64687967732" className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 bg-card px-5 text-xs sm:text-sm font-bold text-foreground shadow-xs transition-all duration-200 hover:border-primary/40 hover:text-primary">
                  <Phone className="size-3.5 text-primary" />
                  <span>Call: 6468 796 7732</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 2: HOW BOOKING WORKS — 3-STEP VISUAL GUIDE                 */}
        {/* ================================================================== */}
        <section className="relative overflow-hidden py-14 sm:py-20 bg-background">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>THE BOOKING PROCESS</span>
                <span />
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                How{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Booking Works
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Three effortless steps between you and a flawlessly detailed vehicle.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3 relative">
              {/* Connector line (desktop) */}
              <div className="pointer-events-none absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent sm:block" aria-hidden="true" />

              {[
                {
                  step: "01",
                  title: "Select Your Vehicle",
                  desc: "Tell us about your car—make, model, year, and vehicle type. This helps us assign the right technician, allocate the proper time, and prepare the correct products and equipment before you arrive.",
                  icon: Car,
                  color: "sky",
                },
                {
                  step: "02",
                  title: "Choose Your Treatment Package",
                  desc: "Select from our calibrated service packages—from our foundational True Shine to our ultimate Luxurious experience. Not sure which is right? Our team is happy to recommend the ideal package.",
                  icon: Sparkles,
                  color: "primary",
                },
                {
                  step: "03",
                  title: "Schedule & Confirm",
                  desc: "Pick your preferred date and time, confirm your details, and secure your booking. You will receive an instant confirmation along with preparation instructions so your vehicle is ready.",
                  icon: CalendarDays,
                  color: "emerald",
                },
              ].map(({ step, title, desc, icon: Icon, color }) => (
                <div key={step} className="relative flex flex-col items-center text-center group">
                  {/* Step circle */}
                  <div className={cn(
                    "relative z-10 flex size-16 items-center justify-center rounded-2xl border shadow-md transition-transform duration-300 group-hover:-translate-y-1",
                    color === "sky" && "bg-sky-500/10 text-sky-600 border-sky-500/30",
                    color === "primary" && "bg-primary/10 text-primary border-primary/30",
                    color === "emerald" && "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
                  )}>
                    <Icon className="size-7" />
                    <div className={cn(
                      "absolute -top-2.5 -right-2.5 flex size-6 items-center justify-center rounded-full text-[10px] font-black text-white shadow-xs",
                      color === "sky" && "bg-sky-500",
                      color === "primary" && "bg-primary",
                      color === "emerald" && "bg-emerald-500",
                    )}>
                      {step}
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-border/80 bg-card p-5 shadow-xs w-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-md">
                    <h3 className="text-base font-bold text-foreground">Step {step.replace("0", "")}: {title}</h3>
                    <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-medium">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 3: THE BOOKING FORM                                         */}
        {/* ================================================================== */}
        <section id="booking-form" className="relative overflow-hidden py-16 sm:py-24 bg-surface/50 border-y border-border/70 scroll-mt-24">
          <div className="site-shell relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>SECURE YOUR APPOINTMENT</span>
                <span />
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Book Your{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Appointment
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Complete the form below and a Grand Duke specialist will confirm your booking within one business day.
              </p>
            </div>

            {/* Form Card */}
            <div className="rounded-3xl border border-border/90 bg-card p-6 sm:p-10 shadow-xl ring-1 ring-border/40 backdrop-blur-xl">
              {isSubmitted ? (
                /* ── Success State ── */
                <div className="py-14 text-center flex flex-col items-center">
                  <div className="flex size-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-md">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold text-foreground">Booking Request Confirmed!</h3>
                  <p className="mt-3 max-w-lg text-sm text-muted-foreground leading-relaxed">
                    Thank you, <b className="text-foreground">{fullName}</b>. We have received your booking request for the{" "}
                    <b className="text-primary">{selectedPkg?.name}</b> package for your{" "}
                    <b className="text-foreground">{vehicleYear} {vehicleMake} {vehicleModel}</b>. A specialist will contact you within one business day to confirm your appointment.
                  </p>

                  <div className="mt-8 rounded-2xl border border-border/80 bg-surface/60 p-5 text-left max-w-sm w-full space-y-2">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground mb-3">Your Booking Summary</div>
                    <div className="flex justify-between text-xs"><span className="text-muted-foreground font-semibold">Package:</span> <span className="font-bold text-foreground">{selectedPkg?.name} ({selectedPkg?.price})</span></div>
                    <div className="flex justify-between text-xs"><span className="text-muted-foreground font-semibold">Vehicle:</span> <span className="font-bold text-foreground">{vehicleYear} {vehicleMake} {vehicleModel}</span></div>
                    <div className="flex justify-between text-xs"><span className="text-muted-foreground font-semibold">Date:</span> <span className="font-bold text-foreground">{preferredDate}</span></div>
                    <div className="flex justify-between text-xs"><span className="text-muted-foreground font-semibold">Time:</span> <span className="font-bold text-foreground">{timeSlots.find(t => t.id === preferredTime)?.label}</span></div>
                    <div className="flex justify-between text-xs"><span className="text-muted-foreground font-semibold">Location:</span> <span className="font-bold text-foreground">{serviceLocations.find(l => l.id === serviceLocation)?.label}</span></div>
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <Button variant="hero" onClick={handleReset} className="rounded-full px-6 text-xs font-bold">
                      <RotateCcw className="size-3.5" />
                      <span>Book Another Detail</span>
                    </Button>
                    <Button variant="glass" className="rounded-full px-6 text-xs font-bold" asChild>
                      <a href="/contact">
                        <span>Contact Us</span>
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="space-y-10">

                  {/* ── STEP 1: Vehicle Details ── */}
                  <div>
                    <div className="flex items-center gap-3 pb-4 border-b border-border/60 mb-6">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 border border-sky-500/20 font-black text-sm">1</div>
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-sky-600">Step 1</div>
                        <h3 className="text-base font-bold text-foreground">Vehicle Details</h3>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">Vehicle Make *</label>
                        <Input
                          required
                          type="text"
                          placeholder="e.g. Porsche"
                          value={vehicleMake}
                          onChange={(e) => setVehicleMake(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">Vehicle Model *</label>
                        <Input
                          required
                          type="text"
                          placeholder="e.g. 911 GT3"
                          value={vehicleModel}
                          onChange={(e) => setVehicleModel(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">Vehicle Year *</label>
                        <Input
                          required
                          type="text"
                          placeholder="e.g. 2024"
                          value={vehicleYear}
                          onChange={(e) => setVehicleYear(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">Vehicle Color</label>
                        <Input
                          type="text"
                          placeholder="e.g. Midnight Black"
                          value={vehicleColor}
                          onChange={(e) => setVehicleColor(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-bold text-foreground mb-2">Vehicle Type *</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                        {vehicleTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setVehicleType(type)}
                            className={cn(
                              "flex items-center gap-2.5 rounded-xl border p-3 text-xs font-semibold transition-all cursor-pointer text-left",
                              vehicleType === type
                                ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary/30"
                                : "border-border/80 bg-surface/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            <div className={cn(
                              "flex size-4 shrink-0 items-center justify-center rounded-full border transition-all",
                              vehicleType === type ? "border-primary bg-primary" : "border-muted-foreground/40 bg-background"
                            )}>
                              {vehicleType === type && <div className="size-1.5 rounded-full bg-white" />}
                            </div>
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── STEP 2: Package Selection ── */}
                  <div>
                    <div className="flex items-center gap-3 pb-4 border-b border-border/60 mb-6">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 font-black text-sm">2</div>
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-primary">Step 2</div>
                        <h3 className="text-base font-bold text-foreground">Select Your Package *</h3>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {packages.map((pkg) => {
                        const isSelected = selectedPackage === pkg.id;
                        const colors = packageColorMap[pkg.color];
                        return (
                          <button
                            key={pkg.id}
                            type="button"
                            onClick={() => setSelectedPackage(pkg.id)}
                            className={cn(
                              "relative flex flex-col text-left rounded-2xl border p-4 sm:p-5 transition-all duration-200 cursor-pointer group",
                              isSelected
                                ? `${colors.border} ${colors.bg} ring-1 ring-primary/20 shadow-sm`
                                : "border-border/80 bg-surface/50 hover:bg-muted/50 hover:border-primary/30"
                            )}
                          >
                            {/* Tag badge */}
                            {pkg.tag && (
                              <span className={cn(
                                "absolute top-3 right-3 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold",
                                colors.tagBg, colors.tag
                              )}>
                                {pkg.tag}
                              </span>
                            )}

                            <div className="flex items-start gap-3">
                              <div className={cn(
                                "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border transition-all",
                                isSelected ? "border-primary bg-primary" : "border-muted-foreground/40 bg-background"
                              )}>
                                {isSelected && <div className="size-2 rounded-full bg-white" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-wrap">
                                  <span className="text-sm font-extrabold text-foreground">{pkg.name}</span>
                                  <span className={cn("text-sm font-black", isSelected ? colors.price : "text-muted-foreground")}>
                                    — {pkg.price}
                                  </span>
                                </div>
                                <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-muted-foreground">
                                  {pkg.desc}
                                </p>
                                <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground">
                                  <Clock className="size-3 shrink-0" />
                                  <span>Est. Duration: {pkg.duration}</span>
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* ── STEP 3: Schedule ── */}
                  <div>
                    <div className="flex items-center gap-3 pb-4 border-b border-border/60 mb-6">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-black text-sm">3</div>
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600">Step 3</div>
                        <h3 className="text-base font-bold text-foreground">Schedule Your Appointment</h3>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Date */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold text-foreground mb-1.5">Preferred Date *</label>
                          <Input
                            required
                            type="date"
                            value={preferredDate}
                            onChange={(e) => setPreferredDate(e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                            className="h-11 rounded-xl text-xs bg-background border-border/80"
                          />
                        </div>
                      </div>

                      {/* Time Slots */}
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-2">Preferred Time *</label>
                        <div className="grid gap-2.5 sm:grid-cols-3">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot.id}
                              type="button"
                              onClick={() => setPreferredTime(slot.id)}
                              className={cn(
                                "flex flex-col items-center justify-center gap-1 rounded-2xl border p-4 text-center transition-all cursor-pointer",
                                preferredTime === slot.id
                                  ? "border-emerald-500/50 bg-emerald-500/5 text-foreground ring-1 ring-emerald-500/20"
                                  : "border-border/80 bg-surface/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                              )}
                            >
                              <Clock className={cn("size-5", preferredTime === slot.id ? "text-emerald-500" : "text-muted-foreground/60")} />
                              <span className="text-xs font-extrabold">{slot.label}</span>
                              <span className="text-[11px] font-medium">{slot.sub}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Service Location */}
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-2">Service Location *</label>
                        <div className="grid gap-2.5 sm:grid-cols-2">
                          {serviceLocations.map((loc) => {
                            const Icon = loc.icon;
                            const isSelected = serviceLocation === loc.id;
                            return (
                              <button
                                key={loc.id}
                                type="button"
                                onClick={() => setServiceLocation(loc.id)}
                                className={cn(
                                  "flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-all cursor-pointer",
                                  isSelected
                                    ? "border-primary/50 bg-primary/5 text-foreground ring-1 ring-primary/20"
                                    : "border-border/80 bg-surface/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                              >
                                <div className={cn(
                                  "flex size-10 shrink-0 items-center justify-center rounded-xl border transition-all",
                                  isSelected ? "bg-primary/10 text-primary border-primary/20" : "bg-muted text-muted-foreground border-border/60"
                                )}>
                                  <Icon className="size-5" />
                                </div>
                                <div>
                                  <div className="text-xs font-extrabold text-foreground">{loc.label}</div>
                                  <div className="text-[11px] font-medium text-muted-foreground mt-0.5">{loc.sub}</div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                        {serviceLocation === "mobile" && (
                          <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/5 p-3 text-xs text-amber-700 dark:text-amber-400">
                            <Info className="size-4 shrink-0 mt-0.5" />
                            <span>Mobile detailing is available for select packages only. Our team will confirm availability at your location during the booking review.</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ── Contact Information ── */}
                  <div>
                    <div className="flex items-center gap-3 pb-4 border-b border-border/60 mb-6">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 font-black text-sm">4</div>
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600">Final Step</div>
                        <h3 className="text-base font-bold text-foreground">Contact Information</h3>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="lg:col-span-1">
                        <label className="block text-xs font-bold text-foreground mb-1.5">Full Name *</label>
                        <Input
                          required
                          type="text"
                          placeholder="Your full name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">Email Address *</label>
                        <Input
                          required
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">Phone Number *</label>
                        <Input
                          required
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="h-11 rounded-xl text-xs bg-background border-border/80"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs font-bold text-foreground mb-1.5">Additional Notes</label>
                      <Textarea
                        rows={3}
                        placeholder="Please share any special requests, problem areas, or details we should know before your appointment..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="rounded-2xl text-xs bg-background border-border/80 leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* ── Booking Summary Preview ── */}
                  {selectedPkg && (
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-primary mb-3">Booking Summary</div>
                      <div className="grid gap-2 sm:grid-cols-2 text-xs">
                        <div className="flex gap-2"><span className="font-semibold text-muted-foreground w-20 shrink-0">Package:</span><span className="font-bold text-foreground">{selectedPkg.name} — {selectedPkg.price}</span></div>
                        {vehicleMake && <div className="flex gap-2"><span className="font-semibold text-muted-foreground w-20 shrink-0">Vehicle:</span><span className="font-bold text-foreground">{vehicleYear} {vehicleMake} {vehicleModel}</span></div>}
                        {preferredDate && <div className="flex gap-2"><span className="font-semibold text-muted-foreground w-20 shrink-0">Date:</span><span className="font-bold text-foreground">{preferredDate}</span></div>}
                        <div className="flex gap-2"><span className="font-semibold text-muted-foreground w-20 shrink-0">Time:</span><span className="font-bold text-foreground">{timeSlots.find(t => t.id === preferredTime)?.label}</span></div>
                        <div className="flex gap-2"><span className="font-semibold text-muted-foreground w-20 shrink-0">Location:</span><span className="font-bold text-foreground">{serviceLocations.find(l => l.id === serviceLocation)?.label}</span></div>
                        <div className="flex gap-2"><span className="font-semibold text-muted-foreground w-20 shrink-0">Duration:</span><span className="font-bold text-foreground">~{selectedPkg.duration}</span></div>
                      </div>
                    </div>
                  )}

                  {/* ── Submit ── */}
                  <div className="pt-2 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-muted-foreground text-center sm:text-left">
                      <span className="font-semibold text-foreground">Privacy Pledge:</span>{" "}
                      We will never sell or share your contact details. Booking confirmation within one business day.
                    </div>
                    <Button
                      type="submit"
                      variant="hero"
                      disabled={isSubmitting}
                      className="h-13 w-full sm:w-auto rounded-full px-10 text-xs sm:text-sm font-extrabold shadow-premium tracking-wide transition-all duration-200 hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Confirming Booking...</span>
                        </>
                      ) : (
                        <>
                          <CalendarDays className="size-4" />
                          <span>CONFIRM &amp; BOOK MY DETAIL</span>
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

        {/* ================================================================== */}
        {/* SECTION 4: WHY BOOK WITH GRAND DUKE AUTOMOTIVE                      */}
        {/* ================================================================== */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>THE GRAND DUKE ADVANTAGE</span>
                <span />
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Why Book with{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Grand Duke Automotive?
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Five uncompromising reasons why discerning owners choose Grand Duke.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyBookReasons.map(({ icon: Icon, title, desc, color }, i) => (
                <div
                  key={title}
                  className={cn(
                    "group relative rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-1",
                    i === 4 && "sm:col-span-2 lg:col-span-1"
                  )}
                >
                  <div className={cn("flex size-12 items-center justify-center rounded-2xl border", whyColorMap[color])}>
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-medium">{desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-primary">
                    <Check className="size-3.5" />
                    <span>Included with every booking</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 5: BEFORE YOUR APPOINTMENT                                  */}
        {/* ================================================================== */}
        <section className="relative overflow-hidden py-16 sm:py-20 bg-surface/50 border-y border-border/70">
          <div className="site-shell relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left */}
            <div className="lg:col-span-6">
              <div className="eyebrow mb-4">
                <span />
                <span>PREPARATION GUIDE</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Before Your{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Appointment
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                To help us deliver the best possible results, please review the following preparation checklist before your scheduled visit.
              </p>

              <div className="mt-6 space-y-3.5">
                {beforeAppointment.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5 rounded-2xl border border-border/80 bg-card p-4 shadow-xs transition-all hover:border-primary/30">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-black mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-[13px] leading-relaxed text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Phone Booking Panel */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-border/80 bg-card p-7 sm:p-9 shadow-xl ring-1 ring-border/40">
                <div className="eyebrow mb-5">
                  <span />
                  <span>PREFER TO BOOK OVER THE PHONE?</span>
                </div>
                <h3 className="text-xl font-extrabold text-foreground">
                  Prefer to Book Over{" "}
                  <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                    the Phone?
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-medium">
                  Our team is happy to assist you personally. Reach out through any of the channels below.
                </p>

                <div className="mt-6 space-y-3.5">
                  {[
                    { icon: Phone, label: "Call Us", value: "6468 796 7732", href: "tel:64687967732", color: "primary" },
                    { icon: Mail, label: "Email Us", value: "info@grandduke.com", href: "mailto:info@grandduke.com", color: "emerald" },
                    { icon: MapPin, label: "Visit Our Studio", value: "1234 Main Street, City, Country", href: "#", color: "sky" },
                    { icon: Clock, label: "Hours", value: "Monday – Friday, 7:00 AM – 6:00 PM", href: "#", color: "amber" },
                  ].map(({ icon: Icon, label, value, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-4 rounded-2xl border border-border/80 bg-surface/60 p-4 text-foreground transition-all hover:border-primary/40 hover:bg-muted group"
                    >
                      <div className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-xl border transition-all",
                        color === "primary" && "bg-primary/10 text-primary border-primary/20 group-hover:bg-primary group-hover:text-white",
                        color === "emerald" && "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
                        color === "sky" && "bg-sky-500/10 text-sky-600 border-sky-500/20",
                        color === "amber" && "bg-amber-500/10 text-amber-600 border-amber-500/20",
                      )}>
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">{label}</div>
                        <div className="text-xs sm:text-sm font-bold text-foreground mt-0.5">{value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <Button variant="hero" className="mt-7 w-full h-12 rounded-full text-xs font-extrabold shadow-premium tracking-wide" asChild>
                  <a href="#booking-form">
                    <CalendarDays className="size-4" />
                    <span>BOOK ONLINE INSTEAD</span>
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 6: CLOSING CTA BANNER                                       */}
        {/* ================================================================== */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
          {/* BG Image */}
          <div className="pointer-events-none absolute inset-0">
            <img
              src="/services/ceramic-shield.jpg"
              alt="Grand Duke ceramic coating application"
              className="h-full w-full object-cover object-center opacity-[0.08] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="site-shell relative z-10 max-w-4xl mx-auto text-center">
            {/* Stars */}
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <div className="eyebrow mb-4 justify-center">
              <span />
              <span>THE GRAND DUKE TREATMENT</span>
              <span />
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[40px] lg:leading-[1.15]">
              Your Vehicle Deserves More{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Than a Wash.
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground font-medium max-w-2xl mx-auto">
              It deserves the Grand Duke treatment. Backed by 17+ years of master craftsmanship, laboratory-grade chemistry, and an unwavering commitment to perfection.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" className="h-13 rounded-full px-9 text-xs sm:text-sm font-extrabold shadow-premium tracking-wide transition-all hover:scale-[1.02]" asChild>
                <a href="#booking-form">
                  <Sparkles className="size-4" />
                  <span>BOOK YOUR DETAIL TODAY</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <a
                href="tel:64687967732"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 bg-card px-7 text-xs sm:text-sm font-bold text-foreground shadow-xs transition-all hover:border-primary/40 hover:text-primary"
              >
                <Phone className="size-4 text-primary" />
                <span>Call: 6468 796 7732</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-muted-foreground">
              {[
                { icon: ShieldCheck, label: "100% Satisfaction Guarantee" },
                { icon: Award, label: "17+ Years of Master Craftsmanship" },
                { icon: Zap, label: "No Hidden Fees. Transparent Pricing." },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="size-4 text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <TrustStrip />
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
}
