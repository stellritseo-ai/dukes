import { useState } from "react";
import { ArrowRight, ZoomIn } from "lucide-react";
import ceramicShieldImg from "@/assets/services/ceramic-shield.jpg";
import foamWashImg from "@/assets/services/foam-wash.jpg";
import interiorSteamImg from "@/assets/services/interior-steam.jpg";
import machinePolishImg from "@/assets/services/machine-polish.jpg";
import signatureDetailImg from "@/assets/services/signature-detail.jpg";
import wheelGlassImg from "@/assets/services/wheel-glass.jpg";
import engineBayImg from "@/assets/services/engine-bay.jpg";
import hoodReflectionImg from "@/assets/services/hood-reflection.jpg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "item-1",
    image: machinePolishImg,
    alt: "Grand Duke Automotive - Multi-Stage Machine Paint Correction",
  },
  {
    id: "item-2",
    image: ceramicShieldImg,
    alt: "Grand Duke Automotive - Liquid Glass 9H Ceramic Shield",
  },
  {
    id: "item-3",
    image: interiorSteamImg,
    alt: "Grand Duke Automotive - Deep Alcantara & Nappa Leather Treatment",
  },
  {
    id: "item-4",
    image: foamWashImg,
    alt: "Grand Duke Automotive - Touchless Decontamination & Snow Foam Bath",
  },
  {
    id: "item-5",
    image: wheelGlassImg,
    alt: "Grand Duke Automotive - Inner Wheel Barrel & Caliper Ceramic Seal",
  },
  {
    id: "item-6",
    image: signatureDetailImg,
    alt: "Grand Duke Automotive - Full Concours Vehicle Restoration",
  },
  {
    id: "item-7",
    image: engineBayImg,
    alt: "Grand Duke Automotive - Exotic Supercar Carbon Fiber Engine Detail",
  },
  {
    id: "item-8",
    image: hoodReflectionImg,
    alt: "Grand Duke Automotive - Liquid Mirror Clear Coat Reflection & Inspection",
  },
];

export function Portfolio() {
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  return (
    <section
      id="our-work"
      className="relative overflow-hidden bg-background py-[60px]"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Subtle luxury ambient lighting accents */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 h-[380px] w-[380px] rounded-full bg-sky-500/5 blur-[140px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="eyebrow mb-3 justify-center">
            <span />
            <span className="text-primary font-extrabold tracking-widest text-[11px]">
              OUR PORTFOLIO
            </span>
            <span />
          </div>
          <h2 className="text-2xl sm:text-[34px] md:text-[40px] font-extrabold tracking-tight text-foreground leading-tight">
            Work We're{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-600 bg-clip-text text-transparent">
              Proud Of.
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground mx-auto">
            A curated photographic exhibition of fine vehicle transformations. Every detail
            executed with uncompromising aesthetic perfection.
          </p>
        </div>

        {/* 4 IMAGES PER ROW: Compact, Justified, Pure Photography */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4.5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-border/80 bg-card shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)] ring-1 ring-border/30 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_14px_30px_-6px_rgba(37,99,235,0.16)] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Minimal hover zoom indicator */}
              <div className="pointer-events-none absolute inset-0 bg-black/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <div className="flex size-9 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-lg backdrop-blur-md transform scale-90 transition-transform duration-300 group-hover:scale-100">
                  <ZoomIn className="size-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Concierge CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="hero"
            size="lg"
            className="h-11 rounded-full px-8 text-xs sm:text-[13px] font-bold shadow-premium transition-all duration-200 hover:scale-[1.02]"
            asChild
          >
            <a href="#free-estimate">
              <span>Reserve Your Treatment Commission</span>
              <ArrowRight className="ml-1.5 size-3.5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Pure Image Lightbox Dialog (No Text) */}
      <Dialog
        open={Boolean(lightboxImage)}
        onOpenChange={(open) => !open && setLightboxImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden border border-white/20 bg-black shadow-2xl rounded-2xl sm:rounded-3xl">
          {lightboxImage && (
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.alt}
                className="size-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
