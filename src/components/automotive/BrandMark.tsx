import logoImg from "@/assets/logo.png";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#home"
      className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
      aria-label="Grand Duke Automotive home"
    >
      <img
        src={logoImg}
        alt="Grand Duke Automotive Logo"
        width={1000}
        height={1000}
        className={
          compact
            ? "h-12 sm:h-13 md:h-14 w-auto object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:scale-105"
            : "h-16 sm:h-18 md:h-20 lg:h-22 w-auto object-contain drop-shadow-[0_4px_18px_rgba(0,0,0,0.22)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_6px_24px_rgba(37,99,235,0.3)]"
        }
      />
    </a>
  );
}
