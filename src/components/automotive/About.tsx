import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Pause,
  Play,
  Shield,
  Sparkles,
  Volume2,
  VolumeX,
  Zap,
} from "lucide-react";
import aboutVideo from "@/assets/about-video.mp4";
import polishAsset from "@/assets/grand-duke-polish.jpg.asset.json";
import { Button } from "@/components/ui/button";

export function About() {
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

  const highlights = [
    {
      icon: Sparkles,
      title: "Paint Correction & Clarity",
      tag: "95%+ Swirl Elimination",
      desc: "Multi-stage dual-action machine polish eliminating micro-swirls, scratches, and haze for liquid mirror reflection.",
    },
    {
      icon: Shield,
      title: "Nano Technologies",
      tag: "9H Hardness Shield",
      desc: "Ultra-hydrophobic chemical matrix defending factory clear coats and soft finishes against UV, acid rain, and road salt.",
    },
    {
      icon: Zap,
      title: "100% Autonomous Mobile Lab",
      tag: "Zero-Hookup Required",
      desc: "Self-powered mobile facility equipped with medical-grade spot-free deionized water and hospital-grade steam extraction.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-[60px]"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <div id="about-us" className="pointer-events-none absolute -top-24" />
      {/* Ambient luxury lighting accents */}
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-primary/7 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[450px] w-[450px] rounded-full bg-sky-400/6 blur-[150px]"
        aria-hidden="true"
      />

      {/* Main Grid Container spanning full site-shell width */}
      <div className="site-shell relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
        {/* Left Column: Premium 3D Video Showcase */}
        <div className="relative w-full lg:col-span-5 xl:col-span-5">
          {/* Master Outer Frame with Luxury Glass & Metallic Accents */}
          <div className="group relative w-full overflow-hidden rounded-[2.25rem] border border-border/85 bg-card/60 p-2 sm:p-2.5 shadow-[0_30px_90px_-20px_rgba(15,23,42,0.18)] ring-1 ring-border/40 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-[0_35px_100px_-15px_rgba(37,99,235,0.18)]">
            {/* Inner Video Container */}
            <div className="relative overflow-hidden rounded-[1.75rem] bg-black">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={polishAsset.url}
                className="w-full aspect-[3/4] object-cover block"
                aria-label="Grand Duke Automotive paint correction and detailing demonstration video"
              >
                <source src={aboutVideo} type="video/mp4" />
                <source src="/about-video.mp4" type="video/mp4" />
                <img
                  src={polishAsset.url}
                  width={1408}
                  height={1056}
                  loading="lazy"
                  alt="Grand Duke automotive specialist inspecting paint clarity under studio lights"
                  className="w-full aspect-[3/4] object-cover"
                />
              </video>

              {/* Subtle Gradient Edge Overlays */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

              {/* Top Live Process Status Beacon */}
              <div className="absolute left-2.5 top-2.5 sm:left-3.5 sm:top-3.5 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-lg backdrop-blur-xl text-white">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-widest">
                  Master Detailing Lab
                </span>
              </div>

              {/* Top Right Quality Badge */}
              <div className="absolute right-2.5 top-2.5 sm:right-3.5 sm:top-3.5 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2 sm:px-2.5 py-1 text-[9.5px] sm:text-[10px] font-bold text-white shadow-md backdrop-blur-xl">
                <Shield className="size-3 text-sky-400" />
                <span>17+ Years Experience</span>
              </div>

              {/* Bottom Floating Detail Capsule */}
              <div className="absolute bottom-2.5 left-2.5 right-14 sm:bottom-4 sm:left-4 sm:right-20 z-20 flex items-center gap-3 rounded-2xl border border-white/20 bg-black/60 p-2.5 sm:p-3.5 shadow-xl backdrop-blur-xl text-white">
                <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-primary/30 text-primary-bright ring-1 ring-white/15">
                  <Sparkles className="size-4 sm:size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <b className="block text-xs sm:text-sm font-bold leading-tight truncate">
                    Precision Machine Polish
                  </b>
                  <span className="block mt-0.5 text-[10.5px] text-slate-300 leading-tight truncate">
                    Restoring 95%+ mirror clarity & swirl eradication
                  </span>
                </div>
              </div>

              {/* Interactive Video Playback & Audio Controls */}
              <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 z-20 flex items-center gap-1 rounded-full border border-white/20 bg-black/70 p-1.5 shadow-lg backdrop-blur-xl text-white">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="grid size-7 sm:size-8 place-items-center rounded-full text-white/90 transition-colors hover:bg-white/20 hover:text-white"
                >
                  {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  className="grid size-7 sm:size-8 place-items-center rounded-full text-white/90 transition-colors hover:bg-white/20 hover:text-white"
                >
                  {isMuted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Narrative, Signature Highlights, and CTAs */}
        <div className="flex w-full flex-col justify-center lg:col-span-7 xl:col-span-7">
          {/* Eyebrow */}
          <div className="eyebrow mb-4">
            <span />
            <span>17+ YEARS OF EXPERIENCE • ABOUT GRAND DUKE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
            Where Luxury Meets{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
              Absolute Showroom Perfection.
            </span>
          </h2>

          {/* Narrative paragraphs */}
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Backed by over 17 years of dedicated experience in exotic clear coat restoration, Grand Duke Automotive brings private-hangar-tier detailing directly to discerning vehicle owners. We eliminate the friction of traditional shop drop-offs and rental cars by deploying fully self-contained mobile laboratories engineered with hospital-grade sanitization, onboard electricity, and spot-free deionized water.
          </p>

          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground/80">
            From multi-stage dual-action paint correction that eradicates micro-swirls and hazing to ultra-hard ceramic shields formulated for OEM clear coats — every square inch of your vehicle receives uncompromising precision.
          </p>

          {/* 3 Signature Highlights */}
          <div className="mt-6 grid gap-3">
            {highlights.map(({ icon: Icon, title, tag, desc }) => (
              <div
                key={title}
                className="group relative flex items-start gap-4 rounded-2xl border border-border/75 bg-card/70 p-3.5 sm:p-4 shadow-xs backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-card hover:shadow-md"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105 group-hover:bg-primary/15">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                      {title}
                    </h3>
                    <span className="hidden sm:inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[10.5px] font-bold text-primary">
                      {tag}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button Cluster */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button
              variant="hero"
              className="h-11 sm:h-12 rounded-full px-6 text-xs sm:text-[13px] font-bold shadow-premium tracking-wide transition-all duration-200 hover:scale-[1.02]"
              asChild
            >
              <a href="#free-estimate">
                <CalendarDays className="size-3.5" />
                <span>Book Your Detail</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>

            <Button
              variant="glass"
              className="h-11 sm:h-12 rounded-full px-6 text-xs sm:text-[13px] font-bold"
              asChild
            >
              <a href="#services">
                <span>Explore All Services</span>
                <ArrowRight className="size-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
