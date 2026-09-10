import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Droplet,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Volume2,
  VolumeX,
  Zap,
} from "lucide-react";
import welcomeVideo from "@/assets/welcome.mp4";
import heroAsset from "@/assets/grand-duke-hero.jpg.asset.json";
import { Button } from "@/components/ui/button";

export function Hero() {
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

  return (
    <section id="home" className="hero-section dark">
      {/* Cinematic Background Video with Poster Fallback */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={heroAsset.url}
        className="hero-video"
        aria-label="Grand Duke Automotive detailing and craftsmanship background video"
      >
        <source src={welcomeVideo} type="video/mp4" />
        <source src="/welcome.mp4" type="video/mp4" />
        <img
          src={heroAsset.url}
          width={1920}
          height={1088}
          className="hero-image"
          alt="Professional automotive detailer applying high gloss ceramic finish to luxury vehicle"
        />
      </video>

      {/* Atmospheric Vignette & Specular Radial Lights */}
      <div className="hero-overlay" />
      <div className="hero-grid" aria-hidden="true" />

      {/* Radiant Specular Glow Spheres */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-[580px] w-[580px] rounded-full bg-primary/25 blur-[180px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 top-16 h-[480px] w-[480px] rounded-full bg-sky-500/10 blur-[190px]"
        aria-hidden="true"
      />

      {/* Main Hero Container */}
      <div className="site-shell relative z-10 flex min-h-[82vh] flex-col justify-center py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl xl:max-w-4xl animate-hero-in">
          {/* Live Concierge Status Badge */}
          <div
            className="mb-5 inline-flex items-center gap-2.5 self-start rounded-full border border-white/20 bg-white/10 px-4 py-1.5 shadow-lg backdrop-blur-xl mt-4 sm:mt-8 lg:mt-[80px]"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white">
              17+ Years Experience • Mobile Fleet Active
            </span>
            <Sparkles className="size-3 text-primary-bright" />
          </div>

          {/* Monumental Headline */}
          <h1
            className="hero-title mt-0 text-[32px] xs:text-[38px] sm:text-[46px] md:text-[52px] lg:text-[57px] leading-[1.08] mb-3 lg:-mb-[19px]"
          >
            Luxury Detailing.
            <br />
            <span className="hero-title-gradient">Showroom Perfection.</span>
          </h1>

          {/* Elevated Subtitle */}
          <p
            className="mt-6 max-w-2xl font-normal text-slate-200/90 text-xs sm:text-sm lg:text-[15px] leading-relaxed lg:leading-[36px] mb-6 lg:-mb-[15px]"
          >
            Backed by 17+ years of master-tier craftsmanship. Bespoke mobile paint correction,
            concours ceramic coatings, and sterile interior restoration delivered directly to your
            driveway, executive office, or private hangar — with 100% self-contained power and
            deionized water.
          </p>

          {/* Primary Action Button Cluster */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              variant="hero"
              className="group h-11 sm:h-12 rounded-full px-6 text-xs sm:text-[13px] font-bold tracking-wide shadow-[0_6px_24px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              asChild
            >
              <a href="#free-estimate">
                <CalendarDays className="size-3.5 transition-transform group-hover:scale-110" />
                <span>Book Your Mobile Detail</span>
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>

            <Button
              variant="glass"
              className="h-11 sm:h-12 rounded-full border-white/20 bg-white/10 px-6 text-xs sm:text-[13px] font-bold text-white backdrop-blur-xl transition-all duration-200 hover:border-white/40 hover:bg-white/20 hover:text-white"
              asChild
            >
              <a href="#pricing">
                <span>Explore Packages & Pricing</span>
                <ArrowRight className="size-3.5" />
              </a>
            </Button>
          </div>

          {/* 4 Pillars of Luxury Trust */}
          <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/15 pt-7 sm:grid-cols-4 sm:gap-4">
            {[
              {
                icon: Droplet,
                label: "100% Deionized Water",
                sub: "Zero mineral spots",
              },
              {
                icon: Zap,
                label: "Self-Contained Rig",
                sub: "Zero client hookups",
              },
              {
                icon: ShieldCheck,
                label: "$2M Insured Coverage",
                sub: "Exotic & luxury certified",
              },
              {
                icon: Star,
                label: "5.0-Star Rated",
                sub: "180+ verified clients",
              },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-primary-bright">
                  <Icon className="size-4 shrink-0 text-primary" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wide text-white">
                    {label}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Cinematic Video Controls Capsule */}
      <div className="absolute bottom-6 right-6 z-20 hidden items-center gap-2 rounded-full border border-white/20 bg-black/65 px-3 py-1.5 shadow-2xl backdrop-blur-xl md:flex">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          className="grid size-7 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        >
          {isPlaying ? <Pause className="size-3" /> : <Play className="size-3" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
          className="grid size-7 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        >
          {isMuted ? <VolumeX className="size-3" /> : <Volume2 className="size-3" />}
        </button>
        <div className="h-3 w-px bg-white/20" />
        <div className="flex items-center gap-1.5 pr-1">
          <span className="size-1.5 rounded-full bg-primary-bright animate-pulse" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/80">
            Cinematic Reel
          </span>
        </div>
      </div>

      {/* Discover Scroll Cue */}
      <a href="#about" aria-label="Scroll to about section" className="scroll-cue">
        <span>Discover</span>
        <i />
      </a>
    </section>
  );
}
