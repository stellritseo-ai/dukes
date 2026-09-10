import { useState } from "react";
import {
  Navigation,
  MapPin,
  CheckCircle2,
  Phone,
  ExternalLink,
  Maximize2,
  Plus,
  Minus,
  Radio,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import mapTexture from "@/assets/service-area-map.jpg";

interface CityLocation {
  id: string;
  name: string;
  isHQ?: boolean;
  x: number; // percentage left on map
  y: number; // percentage top on map
  status?: string;
}

export const primaryLocations: CityLocation[] = [
  { id: "hq", name: "1234 MAIN STREET", isHQ: true, x: 65.2, y: 36.5, status: "Fleet Base HQ" },
  { id: "dfw", name: "DFW FORT-WORTH", x: 62.2, y: 37.0, status: "Active Corridor" },
  { id: "dallas", name: "DALLAS", x: 67.8, y: 36.8, status: "Active Corridor" },
  { id: "houston", name: "HOUSTON", x: 73.2, y: 62.5, status: "Metro Coverage" },
  { id: "plano", name: "PLANO", x: 67.2, y: 33.5, status: "North Corridor" },
  { id: "frisco", name: "FRISCO", x: 65.8, y: 32.2, status: "North Corridor" },
  { id: "southlake", name: "SOUTHLAKE", x: 63.8, y: 35.2, status: "Metro Corridor" },
  { id: "highland-park", name: "HIGHLAND PARK", x: 66.8, y: 36.0, status: "Prime Service" },
  { id: "woodlands", name: "THE WOODLANDS", x: 72.5, y: 58.5, status: "South Corridor" },
  { id: "austin", name: "AUSTIN", x: 58.5, y: 55.0, status: "Extended 300mi" },
  { id: "san-antonio", name: "SAN ANTONIO", x: 55.0, y: 65.5, status: "Extended 300mi" },
  { id: "tyler", name: "TYLER", x: 76.5, y: 39.0, status: "East Corridor" },
];

export function ServiceAreas() {
  const [activeCityId, setActiveCityId] = useState<string | null>("hq");
  const [zoomLevel, setZoomLevel] = useState(1);

  const activeCity = primaryLocations.find((c) => c.id === activeCityId) ?? primaryLocations[0];

  return (
    <section
      id="service-area"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50/60 via-background to-sky-50/50 dark:from-emerald-950/20 dark:via-background dark:to-sky-950/20 border-y border-border/70 py-[60px]"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Subtle Blueprint Grid Background Accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45] bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      {/* Radiant Luxury Ambient Gradient Glows */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-500/12 via-teal-500/6 to-transparent blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-primary/12 via-emerald-500/8 to-transparent blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/3 -bottom-24 h-[350px] w-[600px] rounded-full bg-gradient-to-t from-sky-500/10 to-transparent blur-[130px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN: Service Info, Metrics & City Pills */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-6">
            <div>
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 shadow-2xs">
                <Navigation className="size-3 text-emerald-600 dark:text-emerald-400" />
                <span>SERVICE AREA</span>
              </div>

              {/* Main Headline */}
              <h2 className="mt-4 text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-extrabold tracking-tight text-foreground leading-tight">
                Proudly Serving a{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-primary bg-clip-text text-transparent">
                  300-Mile Radius.
                </span>
              </h2>

              {/* Subtitle Description */}
              <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
                Based in <strong className="text-foreground font-semibold">1234 Main Street, City, Country</strong> — our
                autonomous mobile detailing rigs travel throughout the DFW Metroplex, Dallas, Houston,
                and surrounding corridors within our 300-mile service radius.
              </p>
            </div>

            {/* 4 Stat Cards in a Single Compact Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-center transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">
                  300mi
                </div>
                <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  COVERAGE RADIUS
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-center transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">
                  DFW
                </div>
                <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  METROPLEX CORE
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-center transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">
                  15+
                </div>
                <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  MAJOR CITIES
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-center transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">
                  Fast
                </div>
                <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  MOBILE DISPATCH
                </div>
              </div>
            </div>

            {/* City Location Pills / Tags */}
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Click or hover any location to inspect on map:
              </div>
              <div className="flex flex-wrap gap-2">
                {primaryLocations.map((loc) => {
                  const isActive = activeCityId === loc.id;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setActiveCityId(loc.id)}
                      onMouseEnter={() => setActiveCityId(loc.id)}
                      className={cn(
                        "group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer shadow-2xs",
                        isActive
                          ? "border-emerald-500 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 ring-2 ring-emerald-500/30 font-bold"
                          : "border border-border/80 bg-card text-foreground/80 hover:border-emerald-500/50 hover:bg-surface hover:text-foreground"
                      )}
                    >
                      <MapPin
                        className={cn(
                          "size-3 shrink-0 transition-colors",
                          isActive
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-muted-foreground group-hover:text-emerald-600"
                        )}
                      />
                      <span>{loc.name}</span>
                      {loc.isHQ && (
                        <span className="ml-0.5 rounded bg-emerald-600 px-1.5 py-0.2 text-[9px] font-extrabold uppercase text-white shadow-xs">
                          HQ
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Reassurance Banner */}
            <div className="rounded-2xl border border-emerald-500/30 bg-card p-4 sm:p-4.5 shadow-sm ring-1 ring-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/30">
                  <CheckCircle2 className="size-5" />
                </div>
                <p className="text-xs sm:text-[13px] leading-snug text-muted-foreground">
                  Don't see your city? <strong className="text-foreground">Call us</strong> — our mobile detailing lab
                  travels up to 300 miles for collections & VIP bookings.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:scale-102 active:scale-98"
              >
                <Phone className="size-3.5" />
                <span>CALL NOW</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Pixel-Perfect Styled Map */}
          <div className="lg:col-span-6">
            <div className="group relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/80 bg-[#070c14] shadow-2xl ring-1 ring-white/5">
              {/* Dark Mode Topographic/Highway Cartographic Map Image */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={mapTexture}
                  alt="Grand Duke 300-Mile Service Corridor - Texas, DFW, Houston"
                  className="size-full object-cover opacity-90 filter contrast-110 brightness-95"
                />

                {/* Radar Grid Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf812_1px,transparent_1px)] bg-[size:28px_28px]"
                  aria-hidden="true"
                />

                {/* 300-MILE RADIUS RADAR CIRCLE */}
                {/* Center at DFW HQ (x: 65.2%, y: 36.5%) */}
                <div
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/50 bg-emerald-500/10 shadow-[0_0_80px_rgba(16,185,129,0.22)] ring-1 ring-emerald-400/30"
                  style={{
                    left: "65.2%",
                    top: "36.5%",
                    width: "74%",
                    height: "94%",
                  }}
                >
                  {/* Concentric Radar Rings */}
                  <div className="absolute inset-[15%] rounded-full border border-emerald-400/25 border-dashed" />
                  <div className="absolute inset-[32%] rounded-full border border-emerald-400/20" />
                  <div className="absolute inset-[50%] rounded-full border border-emerald-400/30 border-dashed" />

                  {/* Pulsing Radar Ring Wave */}
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400/40 animate-ping opacity-25" />
                </div>

                {/* INTERACTIVE CITY MAP PINS */}
                {primaryLocations.map((loc) => {
                  const isActive = activeCityId === loc.id;
                  return (
                    <div
                      key={`pin-${loc.id}`}
                      onClick={() => setActiveCityId(loc.id)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20"
                      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    >
                      {/* Pulsing Target Dot */}
                      <div className="relative flex items-center justify-center">
                        <div
                          className={cn(
                            "absolute rounded-full transition-all duration-300",
                            isActive
                              ? "size-7 bg-emerald-400/30 animate-ping"
                              : "size-4 bg-emerald-400/20"
                          )}
                        />
                        <div
                          className={cn(
                            "relative rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)] transition-all duration-300",
                            loc.isHQ
                              ? "size-3.5 bg-amber-400 ring-2 ring-amber-300"
                              : isActive
                              ? "size-3 bg-emerald-300 ring-2 ring-white"
                              : "size-2.5 bg-emerald-400 ring-1 ring-emerald-200"
                          )}
                        />
                      </div>

                      {/* City Label Tag */}
                      <div
                        className={cn(
                          "absolute left-1/2 -translate-x-1/2 top-4 whitespace-nowrap rounded-md px-2 py-0.5 text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-wider transition-all duration-200 shadow-md",
                          loc.isHQ
                            ? "bg-amber-500 text-slate-950 ring-1 ring-amber-300 scale-105"
                            : isActive
                            ? "bg-emerald-600 text-white ring-2 ring-emerald-300 scale-110 z-30"
                            : "bg-slate-900/90 text-slate-200 border border-slate-700/80 backdrop-blur-xs opacity-85 hover:opacity-100 hover:scale-105"
                        )}
                      >
                        {loc.name}
                        {loc.isHQ && " (HQ)"}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* MAP TOP-LEFT CARD: Location Title Overlay */}
              <div className="absolute left-2.5 sm:left-3.5 top-2.5 sm:top-3.5 z-30 flex items-center gap-2 sm:gap-3 rounded-xl border border-white/10 bg-slate-950/85 px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 shadow-xl backdrop-blur-md max-w-[210px] sm:max-w-none">
                <div>
                  <div className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5 truncate">
                    <MapPin className="size-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">1234 Main Street, City, Country</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium truncate">
                    DFW • Dallas • Houston 300-Mile Fleet Corridor
                  </div>
                </div>
                <div className="flex items-center gap-1 text-slate-400 hidden sm:flex">
                  <button
                    type="button"
                    aria-label="Directions"
                    className="p-1 rounded hover:bg-white/10 text-slate-300 transition-colors"
                  >
                    <ArrowUpRight className="size-3.5" />
                  </button>
                </div>
              </div>

              {/* MAP TOP-RIGHT BADGE: Active Coverage Pulse */}
              <div className="absolute right-2.5 sm:right-3.5 top-2.5 sm:top-3.5 z-30 hidden xs:flex items-center gap-2 rounded-full border border-emerald-500/40 bg-slate-950/90 px-3 py-1.5 text-[11px] font-bold text-white shadow-xl backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                  ACTIVE COVERAGE
                </span>
              </div>

              {/* MAP BOTTOM-LEFT BADGE: Coverage Info Pill */}
              <div className="absolute left-2.5 sm:left-3.5 bottom-2.5 sm:bottom-3.5 z-30 rounded-xl border border-white/10 bg-slate-950/90 px-2.5 sm:px-3.5 py-1.5 sm:py-2 shadow-xl backdrop-blur-md max-w-[220px] sm:max-w-none">
                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-slate-400 truncate">
                  1234 MAIN STREET HQ • 300-MILE RADIUS
                </div>
                <div className="text-xs font-bold text-white flex items-center gap-1 sm:gap-1.5 mt-0.5 flex-wrap">
                  <span className="text-emerald-400 font-extrabold">DFW</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-emerald-400 font-extrabold">DALLAS</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-emerald-400 font-extrabold">HOUSTON</span>
                  <span className="text-slate-400 font-normal text-[10px] sm:text-[11px] hidden sm:inline">Coverage Zone</span>
                </div>
              </div>

              {/* MAP BOTTOM-RIGHT CONTROLS: Zoom & Fullscreen Mockup */}
              <div className="absolute right-2.5 sm:right-3.5 bottom-2.5 sm:bottom-3.5 z-30 flex flex-col gap-1.5">
                <div className="flex flex-col rounded-lg border border-white/10 bg-slate-950/90 shadow-xl backdrop-blur-md overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((prev) => Math.min(prev + 0.15, 1.45))}
                    aria-label="Zoom in"
                    className="flex size-7 items-center justify-center text-slate-300 hover:bg-white/15 hover:text-white transition-colors"
                  >
                    <Plus className="size-3.5" />
                  </button>
                  <div className="h-px w-full bg-white/10" />
                  <button
                    type="button"
                    onClick={() => setZoomLevel((prev) => Math.max(prev - 0.15, 1.0))}
                    aria-label="Zoom out"
                    className="flex size-7 items-center justify-center text-slate-300 hover:bg-white/15 hover:text-white transition-colors"
                  >
                    <Minus className="size-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setZoomLevel(1.0)}
                  aria-label="Reset zoom"
                  className="flex size-7 items-center justify-center rounded-lg border border-white/10 bg-slate-950/90 text-slate-300 hover:bg-white/15 hover:text-white transition-colors shadow-xl backdrop-blur-md"
                >
                  <Maximize2 className="size-3.5" />
                </button>
              </div>

              {/* Google Watermark Simulation for Authentic Map Feel */}
              <div className="absolute bottom-1 right-24 z-20 text-[9px] text-slate-500/80 select-none font-medium hidden sm:block">
                Map data ©2026 Grand Duke Fleet • 300mi Terms
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
