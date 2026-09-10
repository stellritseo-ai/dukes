import { Sparkles } from "lucide-react";
import brand1 from "@/assets/brands/1.png";
import brand2 from "@/assets/brands/2.png";
import brand3 from "@/assets/brands/3.png";
import brand4 from "@/assets/brands/4.png";
import brand5 from "@/assets/brands/5.png";
import brand6 from "@/assets/brands/6.png";
import brand7 from "@/assets/brands/7.png";
import brand8 from "@/assets/brands/8.png";
import brand9 from "@/assets/brands/9.png";
import brand10 from "@/assets/brands/10.png";
import brand11 from "@/assets/brands/11.png";
import brand12 from "@/assets/brands/12.png";
import brand13 from "@/assets/brands/13.png";
import brand14 from "@/assets/brands/14.png";
import brand15 from "@/assets/brands/15.png";
import brand16 from "@/assets/brands/16.png";

const brandLogos = [
  { id: 1, src: brand1, alt: "Automotive Partner Brand 1" },
  { id: 2, src: brand2, alt: "Automotive Partner Brand 2" },
  { id: 3, src: brand3, alt: "Automotive Partner Brand 3" },
  { id: 4, src: brand4, alt: "Automotive Partner Brand 4" },
  { id: 5, src: brand5, alt: "Automotive Partner Brand 5" },
  { id: 6, src: brand6, alt: "Automotive Partner Brand 6" },
  { id: 7, src: brand7, alt: "Automotive Partner Brand 7" },
  { id: 8, src: brand8, alt: "Automotive Partner Brand 8" },
  { id: 9, src: brand9, alt: "Automotive Partner Brand 9" },
  { id: 10, src: brand10, alt: "Automotive Partner Brand 10" },
  { id: 11, src: brand11, alt: "Automotive Partner Brand 11" },
  { id: 12, src: brand12, alt: "Automotive Partner Brand 12" },
  { id: 13, src: brand13, alt: "Automotive Partner Brand 13" },
  { id: 14, src: brand14, alt: "Automotive Partner Brand 14" },
  { id: 15, src: brand15, alt: "Automotive Partner Brand 15" },
  { id: 16, src: brand16, alt: "Automotive Partner Brand 16" },
];

// Duplicate array twice for completely seamless, stutter-free infinite sliding
const marqueeBrands = [...brandLogos, ...brandLogos];

export function TrustStrip() {
  return (
    <section
      className="relative overflow-hidden border-y border-border/80 bg-surface/70 backdrop-blur-xl"
      style={{ paddingTop: "40px", paddingBottom: "10px" }}
    >
      {/* Subtle Center Spotlight Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-[750px] rounded-full bg-primary/4 blur-[110px]"
        aria-hidden="true"
      />

      {/* Header Container */}
      <div className="site-shell relative z-10 mb-8 sm:mb-10 flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary shadow-xs">
            <Sparkles className="size-3" />
            <span>Precision Marque Calibration</span>
          </div>
          <h2 className="mt-2.5 text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.75rem]">
            Trusted Across Premier Automotive Engineering
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-2xl mb-2 md:-mb-[35px]">
            Custom paint correction chemistry, ceramic coatings, and leather care formulated specifically for factory clear coats and exotic finishes.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-border/80 bg-card px-4 py-2 text-xs font-semibold text-foreground shadow-xs">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span>100% Paint-Safe & PPF Compatible</span>
        </div>
      </div>

      {/* Infinite Seamless Logo Marquee */}
      <div className="relative z-10 w-full py-2">
        <div className="marquee-container">
          <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
            {marqueeBrands.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="group flex h-20 w-44 sm:h-22 sm:w-48 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-card p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-[0_10px_25px_-5px_rgba(37,99,235,0.12)]"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  loading="lazy"
                  width={150}
                  height={80}
                  className="max-h-10 sm:max-h-11 w-auto max-w-[110px] sm:max-w-[125px] object-contain opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
