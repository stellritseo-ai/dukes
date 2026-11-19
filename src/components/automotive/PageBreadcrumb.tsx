import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items?: BreadcrumbItem[];
  currentPage: string;
  className?: string;
}

export function PageBreadcrumb({
  items,
  currentPage,
  className,
}: PageBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("mb-6 flex items-center justify-center mx-auto", className)}
    >
      <div className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-semibold backdrop-blur-2xl shadow-xl ring-1 ring-white/10 transition-all duration-300 hover:border-cyan-400/50 hover:bg-black/60">
        {/* Home root link */}
        <a
          href="/"
          className="inline-flex items-center gap-1.5 font-bold text-slate-300 transition-colors hover:text-white"
        >
          <Home className="size-3.5 text-cyan-400 transition-transform duration-200 group-hover:scale-110" />
          <span>Home</span>
        </a>

        {/* Intermediate crumbs if any */}
        {items?.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-2">
            <ChevronRight className="size-3 text-slate-500 shrink-0" />
            {item.href ? (
              <a
                href={item.href}
                className="font-bold text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-slate-400 font-semibold">
                {item.label}
              </span>
            )}
          </div>
        ))}

        {/* Separator */}
        <ChevronRight className="size-3 text-slate-500 shrink-0" />

        {/* Active Leaf Pill */}
        <span className="inline-flex items-center gap-1.5 font-extrabold text-white tracking-wide">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span>{currentPage}</span>
        </span>
      </div>
    </nav>
  );
}
