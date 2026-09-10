import { useEffect, useRef, useState } from "react";
import {
  Award,
  Clock3,
  Cpu,
  Eye,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import whyVideo from "@/assets/why.mp4";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => { });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const leftBenefits = [
    {
      num: "01",
      title: "17+ Years Master Certified Experience",
      desc: "Artisans with over 17 years of experience and extensive calibration across delicate German, Italian, and exotic multi-stage clear coats.",
      icon: Award,
      callout: "17+ Yrs Mastery",
    },
    {
      num: "02",
      title: "Laboratory Chemistry",
      desc: "Exclusively formulated in world-renowned European and Japanese detailing laboratories with zero harsh caustic agents.",
      icon: Sparkles,
      callout: "Lab Formulated",
    },
    {
      num: "03",
      title: "100% Autonomous Rig",
      desc: "Fully equipped mobile labs bringing clinical deionized spot-free water, clean electricity, and pure air straight to your door.",
      icon: Zap,
      callout: "Self-Contained",
    },
  ];

  const rightBenefits = [
    {
      num: "04",
      title: "Micro-Precision Diagnostics",
      desc: "Zero rushed quotas. High-CRI diagnostic LED inspection detects and eradicates every sub-micron swirl and micro-scratch.",
      icon: Target,
      callout: "Sub-Micron Leveling",
    },
    {
      num: "05",
      title: "Guaranteed Punctuality",
      desc: "Dedicated time reservations, real-time arrival telemetry, and strictly guaranteed arrival windows with zero schedule overlap.",
      icon: Clock3,
      callout: "Punctual Windows",
    },
    {
      num: "06",
      title: "Concours Handover Protocol",
      desc: "Every treatment concludes with an LED-verified customer walkaround to ensure flawless satisfaction before departure.",
      icon: ShieldCheck,
      callout: "Satisfaction Lock",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-surface/45 py-[60px]"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Subtle luxury ambient lighting accents */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 h-[380px] w-[380px] rounded-full bg-sky-500/6 blur-[130px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="eyebrow mb-3.5 justify-center">
            <span />
            <span className="text-primary font-extrabold tracking-widest text-[11px]">
              THE GRAND DUKE ADVANTAGE
            </span>
            <span />
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[42px] leading-tight">
            Why Discerning Collectors{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-600 bg-clip-text text-transparent">
              Trust Grand Duke.
            </span>
          </h2>
          <p className="mt-3.5 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            A disciplined standard for fine vehicle preservation. Advanced diagnostic visualization
            meets master craftsmanship delivered directly to your private garage.
          </p>
        </div>

        {/* 3-Column Technology Visualization Grid */}
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.35fr_1fr] lg:gap-7">
          {/* Left Column Benefits */}
          <div className="space-y-4">
            {leftBenefits.map((item) => (
              <div
                key={item.num}
                className="group relative rounded-2xl border border-border/80 bg-card/90 p-5 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-[0_16px_35px_-8px_rgba(37,99,235,0.12)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(37,99,235,0.35)]">
                    <item.icon className="size-5" />
                  </div>
                  <span className="font-mono text-[11px] font-black tracking-widest text-primary/70 transition-colors group-hover:text-primary">
                    {item.num}
                  </span>
                </div>

                <h3 className="mt-3.5 text-sm sm:text-[15px] font-bold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>

                <div className="mt-3.5 flex items-center justify-between border-t border-border/60 pt-2.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <span>Standard</span>
                  <span className="flex items-center gap-1 font-bold text-primary">
                    <CheckCircle2 className="size-3 text-primary" />
                    {item.callout}
                  </span>
                </div>

                {/* Right-pointing HUD connector pin (desktop) */}
                <div
                  className="pointer-events-none absolute -right-3.5 top-1/2 hidden -translate-y-1/2 items-center lg:flex"
                  aria-hidden="true"
                >
                  <div className="h-px w-3.5 bg-primary/30" />
                  <div className="size-1.5 rounded-full bg-primary ring-2 ring-primary/20 shadow-[0_0_6px_rgba(37,99,235,0.4)]" />
                </div>
              </div>
            ))}
          </div>

          {/* Central 3D Automotive Video Viewport with HUD Scanner */}
          <div className="relative mx-auto w-full">
            {/* Outer Luxury White Porcelain Frame with Chrome Trim */}
            <div className="relative overflow-hidden rounded-[2rem] border border-border/90 bg-card p-2.5 sm:p-3 shadow-[0_25px_70px_-15px_rgba(15,23,42,0.12)] ring-1 ring-border/40 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_30px_80px_-15px_rgba(37,99,235,0.16)]">
              {/* Corner Reticle Accents */}
              <div
                className="pointer-events-none absolute left-4 top-4 size-3.5 border-l-2 border-t-2 border-primary/80 z-20"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute right-4 top-4 size-3.5 border-r-2 border-t-2 border-primary/80 z-20"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute bottom-14 left-4 size-3.5 border-b-2 border-l-2 border-primary/80 z-20"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute bottom-14 right-4 size-3.5 border-b-2 border-r-2 border-primary/80 z-20"
                aria-hidden="true"
              />

              {/* Central Video Player */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-slate-950 shadow-inner">
                <video
                  ref={videoRef}
                  src={whyVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />

                {/* Radar Grid Line Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:18px_18px]"
                  aria-hidden="true"
                />

                {/* Top Floating Badge: Live Status */}
                <div className="absolute left-2.5 top-2.5 sm:left-3.5 sm:top-3.5 z-20 flex items-center gap-2">
                  <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-2.5 sm:px-3 py-1 text-[9.5px] sm:text-[10px] font-mono font-extrabold uppercase tracking-wider text-white shadow-md backdrop-blur-md">
                    <span className="size-2 animate-ping rounded-full bg-emerald-400" />
                    <span><span className="hidden xs:inline">LABORATORY </span>DIAGNOSTICS</span>
                  </div>
                </div>

                {/* Floating Video Controls */}
                <div className="absolute right-2.5 top-2.5 sm:right-3.5 sm:top-3.5 z-20 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="flex size-7 sm:size-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-md backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/80 hover:border-white/40"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="size-3 sm:size-3.5" /> : <Play className="size-3 sm:size-3.5 ml-0.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="flex size-7 sm:size-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-md backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/80 hover:border-white/40"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? <VolumeX className="size-3 sm:size-3.5" /> : <Volume2 className="size-3 sm:size-3.5" />}
                  </button>
                </div>

                {/* Interactive Diagnostic Reticles on Video */}
                <div
                  className="pointer-events-none absolute left-[32%] top-[48%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-sky-400/70 bg-black/75 px-2.5 py-1 text-[9px] font-mono font-bold text-sky-300 shadow-lg backdrop-blur-md"
                  aria-hidden="true"
                >
                  <span className="size-1.5 animate-ping rounded-full bg-sky-400" />
                  <span>PAINT CLARITY 99.8%</span>
                </div>

                <div
                  className="pointer-events-none absolute right-[26%] bottom-[24%] flex translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-sky-400/70 bg-black/75 px-2.5 py-1 text-[9px] font-mono font-bold text-sky-300 shadow-lg backdrop-blur-md"
                  aria-hidden="true"
                >
                  <span className="size-1.5 animate-pulse rounded-full bg-sky-400" />
                  <span>CERAMIC 9H SHIELD</span>
                </div>
              </div>

              {/* Bottom Light Theme Telemetry Status Console */}
              <div className="mt-2.5 flex items-center justify-between rounded-xl border border-border/80 bg-surface/70 px-3.5 py-2 text-[10px] text-muted-foreground">
                <div className="flex items-center gap-2 font-mono">
                  <Cpu className="size-3.5 text-primary" />
                  <span className="text-foreground font-bold">DIAGNOSTIC STATUS:</span>
                  <span className="flex items-center gap-1 font-bold text-emerald-600">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    OPTIMAL
                  </span>
                </div>
                <div className="hidden items-center gap-1.5 font-mono text-[9.5px] sm:flex text-foreground/80">
                  <Eye className="size-3.5 text-primary" />
                  <span>SURFACE TOLERANCE 0.01mm</span>
                </div>
              </div>
            </div>

            {/* Subtle soft ambient glow under center frame */}
            <div
              className="pointer-events-none absolute -bottom-5 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-full bg-primary/15 blur-xl"
              aria-hidden="true"
            />
          </div>

          {/* Right Column Benefits */}
          <div className="space-y-4">
            {rightBenefits.map((item) => (
              <div
                key={item.num}
                className="group relative rounded-2xl border border-border/80 bg-card/90 p-5 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-[0_16px_35px_-8px_rgba(37,99,235,0.12)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(37,99,235,0.35)]">
                    <item.icon className="size-5" />
                  </div>
                  <span className="font-mono text-[11px] font-black tracking-widest text-primary/70 transition-colors group-hover:text-primary">
                    {item.num}
                  </span>
                </div>

                <h3 className="mt-3.5 text-sm sm:text-[15px] font-bold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>

                <div className="mt-3.5 flex items-center justify-between border-t border-border/60 pt-2.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <span>Assurance</span>
                  <span className="flex items-center gap-1 font-bold text-primary">
                    <CheckCircle2 className="size-3 text-primary" />
                    {item.callout}
                  </span>
                </div>

                {/* Left-pointing HUD connector pin (desktop) */}
                <div
                  className="pointer-events-none absolute -left-3.5 top-1/2 hidden -translate-y-1/2 items-center lg:flex"
                  aria-hidden="true"
                >
                  <div className="size-1.5 rounded-full bg-primary ring-2 ring-primary/20 shadow-[0_0_6px_rgba(37,99,235,0.4)]" />
                  <div className="h-px w-3.5 bg-primary/30" />
                </div>
              </div>
            ))}
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
              <span>Experience The Grand Duke Standard</span>
              <ArrowRight className="ml-1.5 size-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
