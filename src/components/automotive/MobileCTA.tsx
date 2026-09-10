import { CalendarDays, Phone } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="mobile-cta" role="region" aria-label="Quick mobile booking actions">
      <a href="tel:+14697967732">
        <Phone className="size-4 text-primary" />
        <span>Call Now</span>
      </a>
      <a href="#free-estimate">
        <CalendarDays className="size-4" />
        <span>Book Now</span>
      </a>
    </div>
  );
}
