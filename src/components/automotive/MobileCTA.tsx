import { CalendarDays, Phone } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="mobile-cta" role="region" aria-label="Quick mobile booking actions">
      <a href="tel:+15043502935">
        <Phone className="size-4 text-primary" />
        <span>Call Now</span>
      </a>
      <a href="/book">
        <CalendarDays className="size-4" />
        <span>Book Now</span>
      </a>
    </div>
  );
}
