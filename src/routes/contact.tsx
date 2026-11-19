import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CalendarDays,
  Car,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Compass,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  RotateCcw,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/automotive/Header";
import { Footer } from "@/components/automotive/Footer";
import { MobileCTA } from "@/components/automotive/MobileCTA";
import { TrustStrip } from "@/components/automotive/TrustStrip";
import { PageBreadcrumb } from "@/components/automotive/PageBreadcrumb";
import { QuoteForm } from "@/components/automotive/QuoteForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const description =
  "Contact Grand Duke Automotive in City, Country. Speak directly with Master Technicians for luxury auto detailing, ceramic coatings, paint correction, and mobile concierge services.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title:
          "Contact Grand Duke Automotive | Studio & Concierge Detailing",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "contact grand duke automotive, car detailing contact, ceramic coating inquiry, paint correction booking, mobile detailing phone number, automotive detailing studio address",
      },
      {
        property: "og:title",
        content: "Contact Grand Duke Automotive | Let's Talk About Your Vehicle",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Contact Grand Duke Automotive | Let's Talk About Your Vehicle",
      },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Grand Duke Automotive",
          description,
          mainEntity: {
            "@type": "AutomotiveBusiness",
            name: "Grand Duke Automotive",
            telephone: "+14697967732",
            email: "info@grandduke.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1234 Main Street",
              addressLocality: "City",
              addressCountry: "Country",
            },
            openingHours: "Mo-Fr 07:00-18:00, Sa 08:00-16:00",
            areaServed: "300-Mile Radius",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const subjectOptions = [
  "Book an Appointment",
  "Request a Free Estimate",
  "Ceramic Coating Inquiry",
  "Paint Correction Inquiry",
  "Interior Restoration Inquiry",
  "Mobile Detailing Inquiry",
  "General Question",
  "Other",
];

const contactFaqs = [
  {
    q: "Do I need an appointment, or do you accept walk-ins?",
    a: "Because our services are highly detailed and time-intensive, we operate by appointment only. This ensures that every vehicle receives the undivided attention of our certified technicians without rush or compromise. Contact us today to schedule your visit.",
  },
  {
    q: "How far in advance should I book?",
    a: "For maintenance detailing, we typically recommend booking 3 to 5 days in advance. For multi-stage paint correction and ceramic coating packages, our studio schedule fills quickly—we recommend reserving your slot 1 to 2 weeks ahead, especially during peak spring and summer months.",
  },
  {
    q: "Can I drop off my vehicle before or after studio hours?",
    a: "Yes! We offer a secure key drop box for early morning drop-offs and after-hours key retrieval. Please let us know in advance if you plan to use this service, and we will provide detailed instructions.",
  },
  {
    q: "Do you offer mobile detailing, or do I need to bring my car to your studio?",
    a: "We offer both! Our state-of-the-art studio provides the ideal controlled environment for advanced services like paint correction and ceramic coatings. However, we also operate fully equipped mobile detailing units for clients who prefer the convenience of service at their home or office. Mobile availability depends on the service requested and location—contact us to learn more.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, Apple Pay, Google Pay, and bank transfers. Payment is collected upon completion of your service and after your final walkaround inspection.",
  },
];

function ContactPage() {
  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState<"phone" | "email" | "text">("phone");
  const [selectedSubject, setSelectedSubject] = useState("Book an Appointment");
  const [message, setMessage] = useState("");
  const [vehicleMakeModel, setVehicleMakeModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
    if (!message.trim()) {
      toast.error("Please share details about your inquiry");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message Sent Successfully!", {
        description:
          "Thank you for reaching out. A Grand Duke specialist will get back to you within one business day.",
      });
    }, 850);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setContactMethod("phone");
    setSelectedSubject("Book an Appointment");
    setMessage("");
    setVehicleMakeModel("");
    setVehicleYear("");
    setIsSubmitted(false);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
      <Header />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & ANTHEM                                                  */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-border/70 bg-gradient-to-b from-card via-background to-surface/40">
          {/* Luxury High-Gloss Automotive Background Image with Atmospheric Overlays */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/services/wheel-glass.jpg"
              alt="Grand Duke automotive wheel and caliper detailing"
              className="h-full w-full object-cover object-center scale-105 opacity-[0.16]"
            />
            {/* Ambient Light Vignette & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/85 via-background/90 to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/12 via-transparent to-transparent" />
            {/* Subtle Luminous Blueprint Mesh */}
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
            {/* Premium Floating Breadcrumb Pill */}
            <PageBreadcrumb currentPage="Contact Us" />

            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              {/* Eyebrow Status Ribbon - Centered */}
              <div className="eyebrow mb-4 mx-auto justify-center">
                <span />
                <span>EXCEPTIONAL SERVICE • CLEAR COMMUNICATION</span>
                <span />
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[44px] lg:leading-[1.15] text-center">
                Contact Grand Duke Automotive
              </h1>

              {/* Anthem Tagline with Luxury Sapphire Gradient */}
              <div className="mt-2.5 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent text-center">
                Let's Talk About Your Vehicle.
              </div>

              {/* Narrative Paragraph */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground font-medium max-w-3xl mx-auto text-center">
                Whether you are ready to book your detailing experience, have questions about our ceramic coating packages, or simply want to learn more about how we can protect your investment, our team is here to help. At Grand Duke Automotive, we believe that exceptional service begins with clear, responsive communication.
              </p>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground/90 max-w-2xl mx-auto text-center">
                Reach out to us today—we would be honored to care for your vehicle.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Button
                  variant="hero"
                  className="h-12 rounded-full px-7 text-xs sm:text-sm font-extrabold shadow-premium tracking-wide transition-all duration-200 hover:scale-[1.02]"
                  asChild
                >
                  <a href="#send-message">
                    <Send className="size-4" />
                    <span>Send Us a Message</span>
                    <ArrowRight className="size-4" />
                  </a>
                </Button>

                <Button
                  variant="glass"
                  className="h-12 rounded-full px-6 text-xs sm:text-sm font-bold"
                  asChild
                >
                  <a href="#online-booking">
                    <CalendarDays className="size-4" />
                    <span>Book Online Directly</span>
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
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: GET IN TOUCH (4 CONCIERGE CHANNELS)                            */}
        {/* ========================================================================= */}
        <section id="get-in-touch" className="relative overflow-hidden py-16 sm:py-20 bg-background">
          <div className="site-shell relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>DIRECT ACCESS</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Get in{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Connect directly with our master detailing artisans through your preferred channel.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
              {/* Card 1: Call Us */}
              <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <Phone className="size-6" />
                  </div>
                  <div className="mt-4 text-[10.5px] font-extrabold uppercase tracking-widest text-primary">
                    Direct Line
                  </div>
                  <h3 className="text-lg font-bold text-foreground mt-0.5">Call Us</h3>
                  <a
                    href="tel:64687967732"
                    className="mt-2 block text-xl font-black text-foreground hover:text-primary transition-colors tracking-tight"
                  >
                    6468 796 7732
                  </a>
                  <a
                    href="tel:+14697967732"
                    className="block text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mt-0.5"
                  >
                    Hotline: (469) 796-7732
                  </a>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Speak directly with a detailing specialist about your vehicle's needs, service availability, or to schedule an appointment.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/50 text-[11px] font-bold text-emerald-600 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Lines open Monday – Friday</span>
                </div>
              </div>

              {/* Card 2: Email Us */}
              <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:-translate-y-1">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    <Mail className="size-6" />
                  </div>
                  <div className="mt-4 text-[10.5px] font-extrabold uppercase tracking-widest text-emerald-600">
                    Electronic Mail
                  </div>
                  <h3 className="text-lg font-bold text-foreground mt-0.5">Email Us</h3>
                  <a
                    href="mailto:info@grandduke.com"
                    className="mt-2 block text-base font-black text-foreground hover:text-primary transition-colors tracking-tight truncate"
                  >
                    info@grandduke.com
                  </a>
                  <a
                    href="mailto:detailbrandco@gmail.com"
                    className="block text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mt-0.5 truncate"
                  >
                    detailbrandco@gmail.com
                  </a>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Send us your questions, photos of your vehicle, or service inquiries. We respond to all emails within 24 hours.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/50 text-[11px] font-bold text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5" />
                  <span>Guaranteed 24-hr reply</span>
                </div>
              </div>

              {/* Card 3: Visit Our Studio */}
              <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:border-sky-500/50 hover:shadow-lg hover:-translate-y-1">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 border border-sky-500/20">
                    <MapPin className="size-6" />
                  </div>
                  <div className="mt-4 text-[10.5px] font-extrabold uppercase tracking-widest text-sky-600">
                    Facility Base
                  </div>
                  <h3 className="text-lg font-bold text-foreground mt-0.5">Visit Our Studio</h3>
                  <div className="mt-2 text-sm font-extrabold text-foreground leading-snug">
                    1234 Main Street
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold">
                    City, Country
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Stop by to see our state-of-the-art facility, meet our Master Technicians, and discuss your vehicle in person.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/50 text-[11px] font-bold text-sky-600 flex items-center gap-1.5">
                  <Sparkles className="size-3.5" />
                  <span>Controlled HEPA cleanroom bays</span>
                </div>
              </div>

              {/* Card 4: Studio Hours */}
              <div className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:border-amber-500/50 hover:shadow-lg hover:-translate-y-1">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                    <Clock className="size-6" />
                  </div>
                  <div className="mt-4 text-[10.5px] font-extrabold uppercase tracking-widest text-amber-600">
                    Operating Schedule
                  </div>
                  <h3 className="text-lg font-bold text-foreground mt-0.5">Studio Hours</h3>
                  <div className="mt-2 text-sm font-extrabold text-foreground leading-snug">
                    Monday – Friday: 7:00 AM – 6:00 PM
                  </div>
                  <div className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold mt-1">
                    Saturday: By Request • Sunday: Closed
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    (Saturday appointments available by request. Closed Sundays.)
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/50 text-[11px] font-bold text-amber-600 flex items-center gap-1.5">
                  <Zap className="size-3.5" />
                  <span>24X7 Emergency Service As Well</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: SEND US A MESSAGE (INTERACTIVE CONTACT FORM)                   */}
        {/* ========================================================================= */}
        <section id="send-message" className="relative overflow-hidden py-16 sm:py-24 bg-surface/50 border-y border-border/70">
          <div className="site-shell relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>INQUIRY &amp; CALLBACK DISPATCH</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Send Us a{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Have a question or want to request a callback? Fill out the form below and a member of our team will get back to you within one business day.
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
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
                    Thank you, <b className="text-foreground">{fullName}</b>. We have received your inquiry regarding <b className="text-foreground">"{selectedSubject}"</b>. A member of our team will review your message and contact you via {contactMethod} within one business day.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <Button
                      variant="hero"
                      onClick={handleReset}
                      className="rounded-full px-6 text-xs font-bold"
                    >
                      <RotateCcw className="size-3.5" />
                      <span>Send Another Message</span>
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
                          Preferred Contact Method (Phone / Email / Text)
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

                  {/* Block 2: How Can We Help? (Subject) */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-border/60">
                      <div className="flex items-center gap-2">
                        <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                          2
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-foreground">
                            How Can We Help?
                          </h3>
                          <div className="text-xs font-bold text-primary mt-0.5">
                            Subject *
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-muted-foreground">
                        Select one option
                      </span>
                    </div>

                    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {subjectOptions.map((subj) => {
                        const isSelected = selectedSubject === subj;
                        return (
                          <div
                            key={subj}
                            onClick={() => setSelectedSubject(subj)}
                            className={cn(
                              "flex items-center gap-3 rounded-2xl border p-3.5 transition-all cursor-pointer select-none",
                              isSelected
                                ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary/30 shadow-2xs"
                                : "border-border/80 bg-surface/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            <div
                              className={cn(
                                "flex size-5 shrink-0 items-center justify-center rounded-full border transition-all",
                                isSelected
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-muted-foreground/40 bg-background"
                              )}
                            >
                              {isSelected && <div className="size-2 rounded-full bg-white" />}
                            </div>
                            <span className="text-xs font-semibold leading-tight">
                              {subj}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Block 3: Message & Vehicle Info */}
                  <div>
                    <div className="flex items-center gap-2 pb-3 border-b border-border/60">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
                        3
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        Message &amp; Vehicle Details
                      </h3>
                    </div>

                    <div className="mt-4 space-y-5">
                      <div>
                        <div className="flex items-baseline justify-between mb-1.5">
                          <label className="block text-xs font-bold text-foreground">
                            Message *
                          </label>
                          <span className="text-[11px] text-muted-foreground">
                            Please share details about your vehicle and how we can assist you.
                          </span>
                        </div>
                        <Textarea
                          required
                          rows={4}
                          placeholder="Please share details about your vehicle and how we can assist you..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="rounded-2xl text-xs bg-background border-border/80 leading-relaxed"
                        />
                      </div>

                      {/* Vehicle Information (Optional) */}
                      <div className="pt-2 border-t border-border/50">
                        <div className="mb-3">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                            Vehicle Information (Optional)
                          </span>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-bold text-foreground mb-1.5">
                              Vehicle Make &amp; Model
                            </label>
                            <Input
                              type="text"
                              placeholder="e.g. Porsche 911 GT3"
                              value={vehicleMakeModel}
                              onChange={(e) => setVehicleMakeModel(e.target.value)}
                              className="h-11 rounded-xl text-xs bg-background border-border/80"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-foreground mb-1.5">
                              Vehicle Year
                            </label>
                            <Input
                              type="text"
                              placeholder="e.g. 2024"
                              value={vehicleYear}
                              onChange={(e) => setVehicleYear(e.target.value)}
                              className="h-11 rounded-xl text-xs bg-background border-border/80"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-muted-foreground text-center sm:text-left">
                      <span className="font-semibold text-foreground">Privacy Pledge:</span>{" "}
                      We will never sell or share your contact details.
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
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          <span>SEND MESSAGE</span>
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
        {/* SECTION 4: PREFER TO BOOK DIRECTLY?                                       */}
        {/* ========================================================================= */}
        <section id="online-booking" className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10 max-w-4xl mx-auto text-center mb-10 sm:mb-14">
            <div className="eyebrow mb-4 justify-center">
              <span />
              <span>DIRECT RESERVATION ENGINE</span>
              <span />
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
              Prefer to Book{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Directly?
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium max-w-2xl mx-auto">
              Skip the wait and reserve your detailing experience online. Our seamless booking system allows you to select your service package, choose your preferred date and time, and secure your appointment in minutes.
            </p>

            <div className="mt-6 flex justify-center">
              <Button
                variant="hero"
                className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium tracking-wide transition-all hover:scale-[1.02]"
                asChild
              >
                <a href="#online-booking-form">
                  <Calendar className="size-4" />
                  <span>BOOK YOUR APPOINTMENT ONLINE</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div id="online-booking-form" className="site-shell relative z-10 scroll-mt-24">
            <QuoteForm />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: SERVING CITY, COUNTRY & BEYOND                                 */}
        {/* ========================================================================= */}
        <section id="serving-community" className="relative overflow-hidden py-16 sm:py-24 bg-surface/60 border-y border-border/70">
          <div className="site-shell relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="eyebrow mb-4">
                  <span />
                  <span>300-MILE REGIONAL CORRIDOR</span>
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                  Serving City, Country{" "}
                  <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                    &amp; Beyond
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                  Our studio is conveniently located in the heart of City, Country, and we proudly serve discerning vehicle owners across a 300-mile radius.
                </p>
              </div>

              {/* 3 Structured Specification Cards */}
              <div className="space-y-3.5">
                {/* Studio Location */}
                <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs transition-all hover:border-primary/40">
                  <div className="flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                        Studio Location:
                      </div>
                      <div className="mt-0.5 text-sm font-bold text-foreground">
                        Grand Duke Automotive
                      </div>
                      <div className="text-xs text-muted-foreground">
                        1234 Main Street, City, Country
                      </div>
                    </div>
                  </div>
                </div>

                {/* Serving Regions */}
                <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs transition-all hover:border-primary/40">
                  <div className="flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                      <Compass className="size-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600">
                        Serving:
                      </div>
                      <div className="mt-1 text-xs sm:text-sm font-medium text-foreground leading-relaxed">
                        City Center, North County, South Shore, West End, Lakeview District, Mountain Valley, and the entire 300-mile corridor.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Concierge Transport */}
                <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs transition-all hover:border-primary/40">
                  <div className="flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                      <Car className="size-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
                        Concierge Transport:
                      </div>
                      <div className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground leading-relaxed">
                        Enclosed vehicle transport is available for clients outside our immediate area who require multi-day paint correction or ceramic coating packages. Contact us for details and availability.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500" />
                  <span>Climate-Controlled Cleanroom</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500" />
                  <span>Autonomous Power &amp; 0 PPM Water</span>
                </div>
              </div>
            </div>

            {/* Right Map Image */}
            <div className="relative lg:col-span-6">
              <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-3 shadow-xl ring-1 ring-border/40 backdrop-blur-md">
                <div className="relative overflow-hidden rounded-2xl bg-black">
                  <img
                    src="/service-area-map.jpg"
                    alt="Grand Duke Automotive regional 300-mile service map"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/65 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-xl">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    <span>300-Mile Radius Active</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-xl border border-white/20 bg-black/75 p-3 text-xs text-white backdrop-blur-xl">
                    <div>
                      <div className="font-extrabold text-sm">1234 Main Street, City, Country</div>
                      <div className="text-[11px] text-slate-300">Studio &amp; Mobile Concierge Fleet Base</div>
                    </div>
                    <a
                      href="tel:64687967732"
                      className="rounded-lg bg-primary px-3 py-1.5 text-[11px] font-bold text-white hover:bg-primary-bright"
                    >
                      Call Base
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS                                     */}
        {/* ========================================================================= */}
        <section id="contact-faq" className="relative overflow-hidden py-16 sm:py-24 bg-background">
          <div className="site-shell relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <div className="eyebrow mb-4 justify-center">
                <span />
                <span>COMMON CLIENT INQUIRIES</span>
                <span />
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
                Clear answers to help you plan your vehicle detailing experience.
              </p>
            </div>

            <div className="space-y-3.5">
              {contactFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-sm sm:text-base text-foreground transition-colors hover:text-primary cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                          isOpen && "rotate-180 text-primary"
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-border/60 px-5 pt-3 pb-5 text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium bg-surface/30">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: WE LOOK FORWARD TO HEARING FROM YOU                            */}
        {/* ========================================================================= */}
        <section id="closing-contact" className="relative overflow-hidden py-16 sm:py-24 bg-surface/50 border-t border-border/70">
          <div className="site-shell relative z-10 max-w-4xl mx-auto text-center">
            <div className="eyebrow mb-4 justify-center">
              <span />
              <span>THE GRAND DUKE COMMITMENT</span>
              <span />
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
              We Look Forward to{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Hearing from You
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium max-w-2xl mx-auto">
              Your vehicle deserves the highest standard of care. Contact Grand Duke Automotive today and experience the difference that certified expertise, laboratory-grade products, and true passion make.
            </p>

            {/* Direct hotline & Estimate CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="hero"
                className="h-12 rounded-full px-8 text-xs sm:text-sm font-extrabold shadow-premium tracking-wide transition-all hover:scale-[1.02]"
                asChild
              >
                <a href="/free-estimate">
                  <Sparkles className="size-4" />
                  <span>REQUEST A FREE ESTIMATE</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>

              <a
                href="tel:64687967732"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-7 text-xs sm:text-sm font-extrabold text-primary shadow-xs transition-all hover:bg-primary hover:text-white"
              >
                <Phone className="size-4" />
                <span>CALL US: 6468 796 7732</span>
              </a>

              <a
                href="mailto:info@grandduke.com"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 bg-card px-6 text-xs sm:text-sm font-bold text-foreground shadow-xs transition-all hover:border-primary/40 hover:text-primary"
              >
                <Mail className="size-4 text-primary" />
                <span>info@grandduke.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: PARTNER BRAND MARQUE TRUST STRIP                               */}
        {/* ========================================================================= */}
        <TrustStrip />
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
}
