import { useState } from "react";
import {
  HelpCircle,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import mobileRigImg from "@/assets/faq-mobile-rig.jpg";
import brandLogo from "@/assets/logo.png";

export interface FAQItem {
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
  {
    q: "How quickly can you dispatch your mobile detailing lab?",
    a: "We offer expedited concierge scheduling across our 300-mile service radius. For standard reservations, we typically confirm arrival windows within 24 to 48 hours. Emergency decontamination or VIP event prep can often be accommodated same-day based on fleet availability.",
  },
  {
    q: "Are you licensed, certified, and fully insured?",
    a: "Yes. Backed by 17+ years of master detailing experience, Grand Duke Automotive carries comprehensive $2,000,000 garage-keepers and mobile operations liability insurance. Our technicians are certified IDA master craftsmen trained in OEM exotic clear coats, carbon fiber care, and delicate interior leather.",
  },
  {
    q: "What areas do you serve around the DFW & Houston corridor?",
    a: "We serve the entire Dallas–Fort Worth Metroplex, Houston, Austin, and all surrounding luxury residential communities within a 300-mile operating corridor. Our autonomous units come directly to your home, office garage, or private aircraft hangar.",
  },
  {
    q: "Do I need to provide water or electrical connections?",
    a: "No client hookups are necessary. Every Grand Duke mobile unit carries on-board whisper-quiet inverter power generators and pure deionized spot-free water tanks (0 PPM mineral content) to eliminate any risk of hard water stains.",
  },
  {
    q: "How do I request a free quote for my vehicle?",
    a: "Simply click 'Ask a Question' or select 'Book Your Detail' to open our instant quote configurator. Select your vehicle model, condition, and preferred package. Our lead technician will review your specs and send a transparent quote within 2 hours.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-background py-[60px]"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Subtle Blueprint Grid Background Accent matching reference */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45] bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      {/* Subtle Luxury Ambient Glows */}
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-[420px] w-[450px] rounded-full bg-emerald-500/5 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-10 h-[380px] w-[480px] rounded-full bg-primary/5 blur-[160px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN: Header, Accordions, Bottom CTA Strip */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
            <div>
              {/* Eyebrow Pill matching reference */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 shadow-2xs">
                <HelpCircle className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>

              {/* Headline matching reference: "Got Questions? We Have Clear Answers." */}
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-[38px] font-extrabold tracking-tight text-foreground leading-tight">
                Got Questions?{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  We Have Clear Answers.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl">
                Everything you need to know about our mobile detailing, paint correction, ceramic coatings,
                and white-glove concierge services.
              </p>
            </div>

            {/* Accordion List matching reference */}
            <div className="space-y-3">
              {faqs.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={item.q}
                    className={cn(
                      "rounded-2xl border transition-all duration-200 overflow-hidden bg-card shadow-xs",
                      isOpen
                        ? "border-blue-500 dark:border-emerald-500 ring-2 ring-blue-500/20 dark:ring-emerald-500/20"
                        : "border-border/80 hover:border-border-strong hover:shadow-sm"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3 sm:gap-3.5">
                        <span
                          className={cn(
                            "size-2 shrink-0 rounded-full transition-colors",
                            isOpen ? "bg-blue-600 dark:bg-emerald-400" : "bg-slate-300 dark:bg-slate-600"
                          )}
                        />
                        <span className="text-sm sm:text-[15px] font-bold text-foreground leading-snug">
                          {item.q}
                        </span>
                      </div>

                      <div
                        className={cn(
                          "flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 transition-transform duration-200",
                          isOpen && "rotate-180 bg-blue-50 dark:bg-emerald-950/40 text-blue-600 dark:text-emerald-400"
                        )}
                      >
                        <ChevronDown className="size-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="border-t border-border/50 px-5 pb-5 pt-3.5 sm:px-6 sm:pb-6 bg-surface/30">
                        <p className="text-xs sm:text-[13.5px] leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA Row matching reference: Solid pill button + Phone link */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-102 active:scale-98"
              >
                <span>ASK A QUESTION</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                href="tel:+14697967732"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-foreground hover:text-emerald-600 transition-colors"
              >
                <Phone className="size-3.5 text-emerald-600" />
                <span>Call (469) 796-7732</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Framed Luxury Image Card matching reference */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-slate-950 p-2 sm:p-2.5 shadow-2xl ring-1 ring-border/80">
              {/* Featured High-Resolution Mobile Detailing Photo */}
              <div className="relative size-full overflow-hidden rounded-[1.65rem] sm:rounded-[2.15rem]">
                <img
                  src={mobileRigImg}
                  alt="Grand Duke Mobile Detailing Fleet at Luxury Estate"
                  className="size-full object-cover"
                />

                {/* Subtle dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />

                {/* Top-Left Floating Badge: Brand Logo & Title */}
                <div className="absolute left-2.5 top-2.5 sm:left-3.5 sm:top-3.5 z-20 flex items-center gap-2 sm:gap-2.5 rounded-full border border-white/20 bg-slate-950/85 px-2.5 sm:px-3.5 py-1.5 shadow-xl backdrop-blur-md">
                  <img
                    src={brandLogo}
                    alt="Grand Duke"
                    className="size-5 sm:size-6 object-contain"
                  />
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">
                      Grand Duke Detailing
                    </div>
                    <div className="text-[8.5px] sm:text-[9px] text-slate-400 font-medium leading-tight">
                      & Concierge Mobile Lab
                    </div>
                  </div>
                </div>

                {/* Top-Right Floating Badge: Phone pill */}
                <a
                  href="tel:+14697967732"
                  className="absolute right-2.5 top-2.5 sm:right-3.5 sm:top-3.5 z-20 flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                  <Phone className="size-3" />
                  <span><span className="hidden xs:inline">(469) </span>796-7732</span>
                </a>

                {/* Bottom Floating White Card Tray matching reference */}
                <div className="absolute inset-x-3.5 bottom-3.5 z-20 rounded-2xl sm:rounded-3xl border border-border/80 bg-card/95 p-3.5 sm:p-4.5 shadow-2xl backdrop-blur-md">
                  {/* Service Tags Row */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      <Sparkles className="size-2.5" />
                      PAINT CORRECTION
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      <Sparkles className="size-2.5" />
                      CERAMIC COATING
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      <Sparkles className="size-2.5" />
                      MOBILE FLEET
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      <Sparkles className="size-2.5" />
                      INTERIOR STEAM
                    </span>
                  </div>

                  {/* Subtitle, Title & Circular Action Button */}
                  <div className="mt-3 flex items-center justify-between gap-3 border-t border-border/50 pt-2.5">
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                        AUTONOMOUS FLEET • 300-MILE RADIUS
                      </div>
                      <div className="text-xs sm:text-sm font-extrabold text-foreground tracking-tight">
                        Call (469) 796-7732 for Free Quotes
                      </div>
                    </div>

                    <a
                      href="#contact"
                      aria-label="Book a detail"
                      className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full bg-slate-900 dark:bg-emerald-600 text-white shadow-md hover:bg-emerald-600 dark:hover:bg-emerald-700 transition-all hover:scale-105 active:scale-95"
                    >
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
