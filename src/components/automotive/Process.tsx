import { useState } from "react";
import {
  CalendarDays,
  Truck,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import carImg from "@/assets/car.png";

export function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      title: "Instant Digital Booking",
      subtitle: "Select treatment & arrival slot",
      desc: "Reserve your bespoke package, vehicle class, and location online in under 60 seconds with immediate confirmation.",
      icon: CalendarDays,
      x: "18.0%",
      y: "33.3%",
      type: "left",
    },
    {
      num: "02",
      title: "Autonomous Mobile Lab",
      subtitle: "100% deionized water & onboard power",
      desc: "Our self-contained mobile detailing rig arrives equipped with laboratory-grade pure water, clean electricity, and air.",
      icon: Truck,
      x: "27.4%",
      y: "71.0%",
      type: "left",
    },
    {
      num: "03",
      title: "Clinical Decontamination",
      subtitle: "Chemical iron purge & clay bar cleanse",
      desc: "Multi-stage pH-neutral foam bath, iron fallout dissolution, and ultra-fine clay bar clear coat purification.",
      icon: ShieldCheck,
      x: "50.0%",
      y: "86.7%",
      type: "center",
    },
    {
      num: "04",
      title: "Precision Machine Correction",
      subtitle: "Dual-action machine swirl eradication",
      desc: "Sub-micron clear coat leveling, removing swirls, oxidation, and scratches before ceramic shield application.",
      icon: Sparkles,
      x: "72.6%",
      y: "71.0%",
      type: "right",
    },
    {
      num: "05",
      title: "Concours Inspection & Handover",
      subtitle: "Digital LED verification & care warranty",
      desc: "Detailed LED inspection with customer walkaround, interior sanitization check, and care certificate handover.",
      icon: CheckCircle2,
      x: "82.0%",
      y: "33.3%",
      type: "right",
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#07080c] text-white py-[60px]"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Ambient luxury lighting accents */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[850px] -translate-x-1/2 rounded-full bg-blue-600/12 blur-[180px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-sky-500/8 blur-[160px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="eyebrow mb-3.5 justify-center">
            <span />
            <span className="text-sky-400 font-extrabold tracking-widest text-[11px]">
              OUR 5-STAGE PROTOCOL
            </span>
            <span />
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[42px] leading-tight">
            Meticulous Care Engineered for{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">
              Flawless Execution.
            </span>
          </h2>
          <p
            className="mt-3.5 text-xs sm:text-sm md:text-base leading-relaxed text-slate-400 max-w-2xl mx-auto mb-6 sm:mb-8 lg:-mb-[112px]"
          >
            Every treatment follows our aerospace-grade checklist to guarantee zero clear-coat marring, surgical decontamination, and museum-grade finishes.
          </p>
        </div>

        {/* DESKTOP VIEW: Pure Half-Round Circular Orbit (matching reference image) */}
        <div className="relative mx-auto hidden h-[600px] w-full max-w-5xl lg:block select-none">
          {/* Overhead Studio Spotlight */}
          <div
            className="pointer-events-none absolute left-1/2 top-12 h-[340px] w-[580px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
            style={{
              background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.18) 0%, transparent 70%)",
            }}
          />

          {/* Centered Luxury Vehicle (car.png) seated inside the upper portion of the circle */}
          <div className="absolute left-1/2 top-[38%] w-[330px] xl:w-[370px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {/* Soft Tire Ground Shadow */}
            <div className="pointer-events-none absolute -bottom-3 left-1/2 h-6 w-[88%] -translate-x-1/2 rounded-full bg-black/95 blur-md" />
            <div className="pointer-events-none absolute -bottom-1 left-1/2 h-4 w-[75%] -translate-x-1/2 rounded-full bg-sky-500/20 blur-xl" />

            <img
              src={carImg}
              alt="Grand Duke Mobile Detailing Supercar"
              className="relative z-10 w-full object-contain select-none drop-shadow-[0_16px_30px_rgba(0,0,0,0.9)]"
              loading="lazy"
            />
          </div>

          {/* SVG Pure Half-Round Circular Dashed Arc (Semi-Circle) */}
          <svg
            className="pointer-events-none absolute inset-0 size-full"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="half-circle-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="half-circle-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Soft neon underlay glow half-round arc */}
            <path
              d="M 180 200 A 320 320 0 0 0 820 200"
              stroke="url(#half-circle-glow)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* Pure half-round circular dashed trajectory line */}
            <path
              d="M 180 200 A 320 320 0 0 0 820 200"
              stroke="url(#half-circle-grad)"
              strokeWidth="2.5"
              strokeDasharray="8 10"
              strokeLinecap="round"
            />
          </svg>

          {/* The 5 Pinned Nodes along the Half-Round Circle */}
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;

            return (
              <div
                key={step.num}
                style={{ left: step.x, top: step.y }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Node Button with Glowing Outer Aura */}
                <div className="relative group cursor-pointer">
                  {/* Atmospheric outer pulsing aura */}
                  <span
                    className={cn(
                      "absolute -inset-3 rounded-full bg-sky-400/25 blur-md transition-all duration-300",
                      isHovered
                        ? "opacity-100 scale-125 animate-pulse bg-sky-400/55"
                        : "opacity-45 group-hover:opacity-85"
                    )}
                  />

                  {/* Concentric glass ring */}
                  <span className="absolute -inset-1 rounded-full border border-sky-400/40" />

                  {/* Micro Stage Number Tag */}
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-sky-400/60 bg-[#07080c] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-sky-400 shadow-xs z-30 whitespace-nowrap">
                    {step.num}
                  </span>

                  {/* 3D Glossy Blue Sphere Button */}
                  <div
                    className={cn(
                      "relative flex size-12 xl:size-13 items-center justify-center rounded-full border-2 border-sky-300/90 text-white shadow-[0_0_26px_rgba(56,189,248,0.7),inset_0_2px_5px_rgba(255,255,255,0.6),inset_0_-2px_6px_rgba(0,0,0,0.5)] transition-all duration-300",
                      isHovered
                        ? "scale-115 shadow-[0_0_38px_rgba(56,189,248,1)]"
                        : "group-hover:scale-105"
                    )}
                    style={{
                      background:
                        "radial-gradient(circle at 35% 30%, #93c5fd 0%, #3b82f6 35%, #1d4ed8 70%, #0f172a 100%)",
                    }}
                  >
                    <Icon className="size-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]" />
                  </div>

                  {/* Label: Left Side Nodes */}
                  {step.type === "left" && (
                    <div className="absolute right-full top-1/2 mr-4 -translate-y-1/2 text-right w-[190px] xl:w-[220px] pointer-events-none">
                      <h3 className="text-xs xl:text-[13px] font-black uppercase tracking-wider text-white drop-shadow-sm transition-colors group-hover:text-sky-300">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-snug text-slate-400">
                        {step.subtitle}
                      </p>
                    </div>
                  )}

                  {/* Label: Right Side Nodes */}
                  {step.type === "right" && (
                    <div className="absolute left-full top-1/2 ml-4 -translate-y-1/2 text-left w-[190px] xl:w-[220px] pointer-events-none">
                      <h3 className="text-xs xl:text-[13px] font-black uppercase tracking-wider text-white drop-shadow-sm transition-colors group-hover:text-sky-300">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-snug text-slate-400">
                        {step.subtitle}
                      </p>
                    </div>
                  )}

                  {/* Label: Center Bottom Node */}
                  {step.type === "center" && (
                    <div className="absolute top-full left-1/2 mt-3.5 -translate-x-1/2 text-center w-[270px] pointer-events-none">
                      <h3 className="text-xs xl:text-[13px] font-black uppercase tracking-wider text-white drop-shadow-sm transition-colors group-hover:text-sky-300">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-snug text-slate-400">
                        {step.subtitle}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE & TABLET VIEW: Connected Linear Flow (< 1024px) */}
        <div className="lg:hidden">
          {/* Centered Supercar Header Visual */}
          <div className="relative mx-auto mb-8 max-w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg flex items-center justify-center">
            <img
              src={carImg}
              alt="Grand Duke Mobile Detailing Supercar"
              className="w-full object-contain"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-4 right-4 text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/40 bg-black/80 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-sky-400 shadow-xs backdrop-blur-md">
                5-Stage Precision Protocol
              </span>
            </div>
          </div>

          {/* Connected Vertical Timeline */}
          <div className="relative mx-auto max-w-md space-y-4 pl-4 sm:pl-6">
            {/* Vertical dashed line */}
            <div className="absolute left-[38px] sm:left-[46px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-sky-400/40" />

            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xs backdrop-blur-md"
                >
                  {/* Glowing circular node badge */}
                  <div
                    className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-sky-300/80 text-white shadow-[0_0_18px_rgba(56,189,248,0.7)]"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 30%, #93c5fd 0%, #3b82f6 40%, #1d4ed8 75%, #0f172a 100%)",
                    }}
                  >
                    <Icon className="size-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400">
                        Stage {step.num}
                      </span>
                    </div>
                    <h3 className="mt-1 text-sm font-extrabold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Booking Concierge CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="hero"
            className="h-11 rounded-full px-8 text-xs sm:text-[13px] font-bold shadow-premium transition-all duration-200 hover:scale-[1.02]"
            asChild
          >
            <a href="#free-estimate">
              <span>Experience Our 5-Stage Protocol</span>
              <ArrowRight className="ml-1.5 size-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
