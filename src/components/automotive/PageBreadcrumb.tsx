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
      <div className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-3.5 py-1.5 text-xs shadow-[0_2px_12px_-2px_rgba(15,23,42,0.06)] backdrop-blur-xl ring-1 ring-border/40 transition-all duration-300 hover:border-primary/40 hover:shadow-md">
        {/* Home root link */}
        <a
          href="/"
          className="inline-flex items-center gap-1.5 font-bold text-muted-foreground transition-colors hover:text-primary"
        >
          <Home className="size-3.5 text-primary transition-transform duration-200 group-hover:scale-110" />
          <span>Home</span>
        </a>

        {/* Intermediate crumbs if any */}
        {items?.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-2">
            <ChevronRight className="size-3 text-muted-foreground/40 shrink-0" />
            {item.href ? (
              <a
                href={item.href}
                className="font-bold text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-muted-foreground font-semibold">
                {item.label}
              </span>
            )}
          </div>
        ))}

        {/* Separator */}
        <ChevronRight className="size-3 text-muted-foreground/40 shrink-0" />

        {/* Active Leaf Pill */}
        <span className="inline-flex items-center gap-1.5 font-extrabold text-foreground tracking-wide">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60 opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
          </span>
          <span>{currentPage}</span>
        </span>
      </div>
    </nav>
  );
}
