import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Droplets,
  Facebook,
  Gauge,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  X,
  Zap,
} from "lucide-react";

import heroAsset from "@/assets/grand-duke-hero.jpg.asset.json";
import polishAsset from "@/assets/grand-duke-polish.jpg.asset.json";
import interiorAsset from "@/assets/grand-duke-interior.jpg.asset.json";
import washAsset from "@/assets/grand-duke-wash.jpg.asset.json";
import wheelAsset from "@/assets/grand-duke-wheel.jpg.asset.json";
import ceramicAsset from "@/assets/grand-duke-ceramic.jpg.asset.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const description = "Premium mobile auto detailing, interior car detailing, paint correction and ceramic coating by Grand Duke Automotive.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Mobile Auto Detailing | Grand Duke Automotive" },
      { name: "description", content: description },
      { property: "og:title", content: "Grand Duke Automotive | Premium Mobile Detailing" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AutomotiveBusiness",
              name: "Grand Duke Automotive",
              url: "/",
              description,
              priceRange: "$$$",
              makesOffer: ["Mobile auto detailing", "Interior detailing", "Paint correction", "Ceramic coating"],
            },
            {
              "@type": "Service",
              serviceType: "Premium mobile automotive detailing",
              provider: { "@type": "AutomotiveBusiness", name: "Grand Duke Automotive" },
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: GrandDukePage,
});

const navItems = ["Home", "About", "Services", "Why Choose Us", "Our Work", "Testimonials", "FAQ", "Contact"];
const navHref = (item: string) => `#${item.toLowerCase().replaceAll(" ", "-")}`;

const services = [
  { title: "Interior Cleaning", text: "A meticulous cabin reset for surfaces, carpets, creases, and high-touch areas.", image: interiorAsset.url, icon: Sparkles },
  { title: "Glass Cleaning & Tire Shine", text: "Crystal-clear glass paired with a precise satin finish for every tire.", image: wheelAsset.url, icon: Droplets },
  { title: "Machine Polish & Iron Removal", text: "Decontamination and polishing engineered to restore clarity and depth.", image: polishAsset.url, icon: Zap },
  { title: "Pressure Washing", text: "Controlled, professional exterior cleaning that prepares every surface properly.", image: washAsset.url, icon: Droplets },
  { title: "Interior Steam Detail", text: "Professional steam techniques reach deep without compromising refined materials.", image: interiorAsset.url, icon: Gauge },
  { title: "Signature Detail", text: "Our complete inside-and-out service for a polished, protected, remarkable finish.", image: ceramicAsset.url, icon: Award },
];

const packages = [
  { name: "True Shine", prices: [75, 100, 120], features: ["Distinctive hand wash", "Clean wheels", "Interior wipe & vacuum", "Glass cleaning", "Tire shine"] },
  { name: "Sigmate", prices: [190, 235, 280], features: ["Signature hand wash", "Complete interior condition", "Added hand wax", "Wheel and glass finish"] },
  { name: "Panache", prices: [220, 270, 320], features: ["Clay bar treatment", "Interior refresh", "Machine polish", "Paint clarity finish"], featured: true },
  { name: "Steam Clean", prices: [300, 340, 370], features: ["Interior steam cleaning", "Deep cleaning", "Dry foam treatment", "Surface sanitization"] },
  { name: "Luxurious", prices: [450, 520, 580], features: ["Paint decontamination", "Iron removal", "One-step paint correction", "6-month ceramic coating"] },
];

const faqs = [
  { q: "What areas do you serve?", a: "Grand Duke Automotive is a mobile service. Share your location when requesting a quote and we’ll confirm availability for your area." },
  { q: "Do you provide mobile detailing?", a: "Yes. We bring premium detailing care to your home or workplace, making professional vehicle care easy to fit into your day." },
  { q: "How long does a detailing service take?", a: "Timing depends on vehicle size, condition, and package. We provide an estimated duration once we know your vehicle and selected service." },
  { q: "What vehicles do you service?", a: "We care for cars, two-door trucks and SUVs, and four-door trucks and SUVs across a wide range of makes and finishes." },
  { q: "Do I need to provide water or electricity?", a: "Site requirements can vary by service. We’ll confirm everything needed before your appointment so your visit runs smoothly." },
  { q: "What is included in your ceramic coating service?", a: "Our Luxurious package includes paint decontamination, iron removal, one-step paint correction, and a six-month ceramic coating." },
  { q: "How do I book an appointment?", a: "Choose Book Your Detail, complete the short quote form, and our team will follow up to confirm the service, location, and appointment time." },
  { q: "How often should I detail my vehicle?", a: "That depends on mileage, storage, weather, and the finish you want to maintain. We can recommend a care rhythm after inspecting your vehicle." },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Grand Duke Automotive home">
      <span className="brand-shield"><span>GD</span></span>
      {!compact && <span className="leading-none"><b className="block font-display text-sm uppercase tracking-wide text-foreground">Grand Duke</b><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] text-muted-foreground">Automotive</span></span>}
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "border-b border-border bg-background/90 shadow-header backdrop-blur-xl" : "bg-transparent")}>
      <div className="site-shell flex h-20 items-center justify-between">
        <BrandMark />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} href={navHref(item)} className="nav-link">{item}</a>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#contact" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"><Phone className="size-4 text-primary" /> Call Now</a>
          <Button variant="hero" size="lg" asChild><a href="#contact">Book Your Detail <ArrowUpRight /></a></Button>
        </div>
        <Button variant="glass" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
      </div>
      <div className={cn("overflow-hidden border-t border-border bg-background/95 transition-all duration-500 md:hidden", open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0")}>
        <nav className="site-shell flex flex-col py-5" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item} href={navHref(item)} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-semibold text-foreground">{item}</a>)}
          <Button variant="hero" className="mt-5 h-12" asChild><a href="#contact" onClick={() => setOpen(false)}>Book Your Detail</a></Button>
        </nav>
      </div>
    </header>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <div className="eyebrow"><span />{children}</div>; }
function SectionTitle({ eyebrow, title, copy, center = false }: { eyebrow: string; title: string; copy?: string; center?: boolean }) {
  return <div className={cn("mb-12 max-w-3xl", center && "mx-auto text-center")}><Eyebrow>{eyebrow}</Eyebrow><h2 className="section-title mt-5">{title}</h2>{copy && <p className="mt-5 text-base leading-8 text-muted-foreground">{copy}</p>}</div>;
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <img src={heroAsset.url} width={1920} height={1088} fetchPriority="high" className="hero-image" alt="Professional applying a protective finish to a glossy black luxury vehicle" />
      <div className="hero-overlay" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="site-shell relative z-10 flex min-h-[92vh] items-end pb-20 pt-32 lg:items-center lg:pb-4">
        <div className="max-w-3xl animate-hero-in">
          <Eyebrow>Premium mobile automotive detailing</Eyebrow>
          <h1 className="hero-title mt-6">Luxury Detailing.<br /><span>Exceptional Results.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-hero-muted md:text-lg">Professional automotive detailing and paint care designed to restore, protect, and elevate your vehicle.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="lg" className="h-13 px-7" asChild><a href="#contact">Book Your Detail <ArrowUpRight /></a></Button>
            <Button variant="glass" size="lg" className="h-13 px-7" asChild><a href="#services">Explore Services <ArrowRight /></a></Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-border/70 pt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-hero-muted">
            {['Premium Mobile Detailing', 'Professional Care', 'Exceptional Results'].map((item) => <span key={item} className="flex items-center gap-2"><Check className="size-3.5 text-primary" />{item}</span>)}
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to about" className="scroll-cue"><span>Discover</span><i /></a>
    </section>
  );
}

function TrustStrip() {
  return <section className="border-y border-border bg-surface"><div className="site-shell grid min-h-36 items-center gap-8 py-8 lg:grid-cols-[1fr_2fr]"><div><p className="font-display text-lg font-semibold text-foreground">Trusted Care. Premium Results.</p><p className="mt-1 text-xs text-muted-foreground">A considered system for every surface.</p></div><div className="grid grid-cols-3 gap-3 sm:grid-cols-5">{['CERAMIC', 'PRECISION', 'PAINTSAFE', 'STEAM PRO', 'DETAIL LAB'].map((brand) => <span key={brand} className="flex h-12 items-center justify-center border-l border-border text-center font-display text-[10px] font-bold tracking-[0.15em] text-muted-foreground">{brand}</span>)}</div></div></section>;
}

function About() {
  return <section id="about" className="section-pad bg-background"><div className="site-shell grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
    <div className="relative"><div className="image-frame"><img src={polishAsset.url} width={1408} height={1056} loading="lazy" alt="Grand Duke detailer inspecting and polishing a luxury vehicle" /></div><div className="floating-detail"><Sparkles className="size-5 text-primary" /><div><b>Professional Detailing</b><span>Precision • Protection • Perfection</span></div></div><div className="image-index">01 <span>/ Craft</span></div></div>
    <div><SectionTitle eyebrow="Welcome to Grand Duke Automotive" title="Where Luxury Meets Perfection" copy="We bring professional mobile automotive detailing directly to you—pairing meticulous technique, premium products, and personalized care to reveal the best in every vehicle." />
      <div className="grid gap-5 sm:grid-cols-3">{[['Premium','Service'],['Professional','Care'],['Mobile','Convenience']].map(([a,b], i) => <div key={a} className="stat-block"><span>0{i+1}</span><b>{a}</b><small>{b}</small></div>)}</div>
      <Button variant="glass" size="lg" className="mt-9" asChild><a href="#why-choose-us">Discover Our Standard <ArrowRight /></a></Button>
    </div>
  </div></section>;
}

function Services() {
  return <section id="services" className="section-pad bg-surface"><div className="site-shell"><SectionTitle eyebrow="Our Services" title="Premium Automotive Care, Done Right" copy="Focused treatments for every finish, surface, and cabin—delivered with discipline and an uncompromising eye." />
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-image"><img src={service.image} width={1200} height={900} loading="lazy" alt={`${service.title} by Grand Duke Automotive`} /><span>0{index+1}</span></div><div className="p-6"><service.icon className="size-5 text-primary" /><h3 className="mt-5 font-display text-xl font-semibold text-foreground">{service.title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{service.text}</p><a href="#contact" className="card-link">Learn more <ArrowUpRight /></a></div></article>)}</div>
  </div></section>;
}

function Pricing() {
  const [vehicle, setVehicle] = useState(0);
  const vehicles = ["Car", "Truck / SUV 2D", "Truck / SUV 4D"];
  return <section id="pricing" className="section-pad pricing-band"><div className="site-shell"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionTitle eyebrow="Detail Packages" title="Choose Your Level of Detail" copy="Select your vehicle type to see straightforward starting prices for each curated care level." /><div className="vehicle-switch" role="group" aria-label="Vehicle category">{vehicles.map((item, i) => <Button key={item} variant="ghost" onClick={() => setVehicle(i)} className={cn("vehicle-option", vehicle === i && "vehicle-option-active")}>{item}</Button>)}</div></div>
    <div className="pricing-grid">{packages.map((pkg, i) => <article className={cn("pricing-card", pkg.featured && "pricing-featured")} key={pkg.name}>{pkg.featured && <span className="recommended">Most Popular</span>}<div className="pricing-top"><span>0{i+1}</span><h3>{pkg.name}</h3><p>{vehicles[vehicle]}</p><div className="price"><sup>$</sup>{pkg.prices[vehicle]}<small>starting</small></div></div><ul>{pkg.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul><Button variant={pkg.featured ? "hero" : "glass"} className="mt-auto h-11 w-full" asChild><a href="#contact">Choose {pkg.name} <ChevronRight /></a></Button></article>)}</div>
  </div></section>;
}

function Process() {
  const items = [
    ["Easy Booking", "Make your appointment quickly and conveniently.", CalendarDays],
    ["Professional Service", "We inspect and service your vehicle with care.", ShieldCheck],
    ["Precision Detailing", "Every surface receives focused professional attention.", Target],
    ["Satisfying Finish", "Your vehicle looks clean, protected, and refreshed.", Sparkles],
  ] as const;
  return <section className="section-pad bg-background"><div className="site-shell"><SectionTitle eyebrow="Our Process" title="Complete Every Step Carefully" center /><div className="process-line">{items.map(([title, text, Icon], i) => <article className="process-step" key={title}><div className="process-icon"><Icon /></div><span>Step 0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function WhyChoose() {
  const benefits = [["Professional Expertise", Award], ["Premium Products", Sparkles], ["Mobile Convenience", Zap], ["Attention to Detail", Target], ["Reliable Service", Clock3], ["Customer Satisfaction", ShieldCheck]] as const;
  return <section id="why-choose-us" className="why-section"><img src={ceramicAsset.url} width={1408} height={1056} loading="lazy" alt="Perfectly finished graphite luxury coupe in the Grand Duke studio" /><div className="why-overlay" /><div className="site-shell relative z-10 py-24 lg:py-32"><SectionTitle eyebrow="The Grand Duke Standard" title="Why Choose Grand Duke Automotive?" copy="A disciplined approach to premium vehicle care, brought directly to your driveway." />
    <div className="why-grid">{benefits.map(([title, Icon], i) => <article key={title}><span>0{i+1}</span><Icon /><div><h3>{title}</h3><p>{['Skilled care backed by a precise process.','Pro-grade solutions selected for every surface.','High-end care delivered around your schedule.','No corner rushed. No finish overlooked.','Clear communication and dependable appointments.','A finish designed to exceed expectations.'][i]}</p></div></article>)}</div>
  </div></section>;
}

function Gallery() {
  const [filter, setFilter] = useState("All");
  const items = [
    { image: ceramicAsset.url, title: "Mirror Finish", cat: "Ceramic Coating" },
    { image: interiorAsset.url, title: "Cabin Renewal", cat: "Interior" },
    { image: polishAsset.url, title: "Refined Clarity", cat: "Paint Correction" },
    { image: washAsset.url, title: "Deep Exterior Clean", cat: "Exterior" },
    { image: wheelAsset.url, title: "Satin Wheel Finish", cat: "Detailing" },
  ];
  const cats = ["All", "Exterior", "Interior", "Paint Correction", "Ceramic Coating", "Detailing"];
  const shown = filter === "All" ? items : items.filter(item => item.cat === filter);
  return <section id="our-work" className="section-pad bg-surface"><div className="site-shell"><div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><SectionTitle eyebrow="Our Projects" title="Work We're Proud Of" /><div className="filter-row">{cats.map(cat => <Button variant="ghost" size="sm" key={cat} onClick={() => setFilter(cat)} className={cn(filter === cat && "filter-active")}>{cat}</Button>)}</div></div><div className="gallery-grid">{shown.map((item, i) => <article className={cn("gallery-item", i === 0 && "gallery-wide")} key={item.title}><img src={item.image} width={1408} height={1056} loading="lazy" alt={`${item.title} — ${item.cat}`} /><div className="gallery-overlay"><div><span>{item.cat}</span><h3>{item.title}</h3></div><a href="#contact" aria-label={`View ${item.title}`}><ArrowUpRight /></a></div></article>)}</div><div className="mt-10 text-center"><Button variant="glass" size="lg" asChild><a href="#contact">View All Work <ArrowRight /></a></Button></div></div></section>;
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const reviews = [
    { quote: "The level of care was immediately clear. Every surface felt considered, and the finish had the kind of depth you usually only see in a showroom.", name: "Premium detailing client", service: "Signature Detail" },
    { quote: "Convenient, professional, and exceptionally thorough. The paint correction brought back clarity I thought was gone for good.", name: "Paint care client", service: "Panache Package" },
    { quote: "The mobile service made everything effortless, but the result was the standout—clean, polished, and genuinely protected.", name: "Mobile service client", service: "Luxurious Package" },
  ];
  const move = (dir: number) => setActive((active + dir + reviews.length) % reviews.length);
  return <section id="testimonials" className="testimonial-section"><div className="site-shell grid items-center gap-14 py-24 lg:grid-cols-[.8fr_1.2fr] lg:py-32"><div><SectionTitle eyebrow="Client Experience" title="What Our Customers Say" copy="Thoughtful service. Remarkable finishes. Care that earns trust one vehicle at a time." /><div className="flex gap-2"><Button variant="glass" size="icon" onClick={() => move(-1)} aria-label="Previous testimonial"><ArrowLeft /></Button><Button variant="glass" size="icon" onClick={() => move(1)} aria-label="Next testimonial"><ArrowRight /></Button></div></div><div className="testimonial-card"><div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">{[1,2,3,4,5].map(n => <Star key={n} className="size-4 fill-current" />)}</div><blockquote>“{reviews[active].quote}”</blockquote><div className="mt-8 flex items-center justify-between border-t border-border pt-6"><div><b>{reviews[active].name}</b><span>{reviews[active].service}</span></div><div className="flex gap-1">{reviews.map((_, i) => <button aria-label={`Show testimonial ${i+1}`} key={i} onClick={() => setActive(i)} className={cn("testimonial-dot", active === i && "testimonial-dot-active")} />)}</div></div></div></div></section>;
}

function FAQ() {
  return <section id="faq" className="section-pad bg-background"><div className="site-shell grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><SectionTitle eyebrow="Need to Know" title="Frequently Asked Questions" copy="Everything you need before your Grand Duke detail." /><div className="contact-mini"><MessageCircle /><span>Have another question?</span><a href="#contact">Talk with our team <ArrowRight /></a></div></div><Accordion type="single" collapsible className="faq-list">{faqs.map((item, i) => <AccordionItem value={`item-${i}`} key={item.q} className="faq-item"><AccordionTrigger className="text-left text-base hover:no-underline"><span><small>0{i+1}</small>{item.q}</span></AccordionTrigger><AccordionContent className="pr-10 text-sm leading-7 text-muted-foreground">{item.a}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

function QuoteForm() {
  const [sent, setSent] = useState(false);
  const fieldClass = "h-12 border-border bg-field px-4";
  return <section id="contact" className="quote-section"><div className="site-shell grid overflow-hidden border border-border bg-card lg:grid-cols-[.72fr_1.28fr]"><div className="quote-copy"><Eyebrow>Request a Quote</Eyebrow><h2 className="section-title mt-5">Give Your Vehicle the Care It Deserves</h2><p className="mt-5 leading-7 text-muted-foreground">Ready to restore your vehicle's shine? Request your personalized quote today.</p><div className="mt-10 space-y-5"><div className="quote-contact"><Phone /><div><small>Prefer to talk?</small><b>Call Grand Duke Automotive</b></div></div><div className="quote-contact"><ShieldCheck /><div><small>Your vehicle. Your schedule.</small><b>Professional mobile care</b></div></div></div></div>
    <form className="quote-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}><div className="grid gap-4 sm:grid-cols-2"><label>First Name<Input required placeholder="First name" className={fieldClass} /></label><label>Last Name<Input required placeholder="Last name" className={fieldClass} /></label><label>Phone<Input required type="tel" placeholder="Your phone" className={fieldClass} /></label><label>Email<Input required type="email" placeholder="Your email" className={fieldClass} /></label><label>Vehicle Make<Input placeholder="e.g. BMW" className={fieldClass} /></label><label>Vehicle Model<Input placeholder="e.g. X5" className={fieldClass} /></label><label>Vehicle Year<Input type="number" placeholder="2024" className={fieldClass} /></label><label>Select Service<Select><SelectTrigger className={fieldClass}><SelectValue placeholder="Choose a service" /></SelectTrigger><SelectContent>{packages.map(pkg => <SelectItem key={pkg.name} value={pkg.name}>{pkg.name}</SelectItem>)}</SelectContent></Select></label><label>Preferred Date<Input type="date" className={fieldClass} /></label><label>Preferred Time<Input type="time" className={fieldClass} /></label><label className="sm:col-span-2">Message<Textarea placeholder="Tell us about your vehicle and its current condition..." className="min-h-28 border-border bg-field p-4" /></label></div><Button type="submit" variant="hero" size="lg" className="mt-5 h-13 w-full">{sent ? <>Request Received <Check /></> : <>Request My Quote <ArrowUpRight /></>}</Button>{sent && <p role="status" className="mt-3 text-center text-xs text-primary">Thank you. Your request is ready for our team to review.</p>}</form>
  </div></section>;
}

function Footer() {
  return <footer className="bg-footer pt-20"><div className="site-shell grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><BrandMark /><p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">Premium mobile automotive detailing and vehicle care focused on precision, protection, and exceptional results.</p><div className="mt-6 flex gap-2">{[Facebook, Instagram, MessageCircle].map((Icon, i) => <a key={i} href="#contact" aria-label={['Facebook','Instagram','Google Business Profile'][i]} className="social-icon"><Icon /></a>)}</div></div><FooterList title="Navigate" items={navItems.slice(0,4).concat(['Contact'])} /><FooterList title="Services" items={['Interior Detailing','Exterior Detailing','Paint Correction','Ceramic Coating','Steam Cleaning']} /><div><h3 className="footer-title">Contact</h3><ul className="footer-list"><li><a href="#contact">Phone — Contact us</a></li><li><a href="#contact">Email — Request a quote</a></li><li>Mobile service area</li><li>Hours by appointment</li></ul></div></div><div className="border-t border-border"><div className="site-shell flex flex-col justify-between gap-4 py-6 text-[11px] text-muted-foreground sm:flex-row"><p>© 2026 Grand Duke Automotive. All Rights Reserved.</p><div className="flex gap-6"><a href="#contact">Privacy Policy</a><a href="#contact">Terms & Conditions</a></div></div></div></footer>;
}
function FooterList({ title, items }: { title: string; items: string[] }) { return <div><h3 className="footer-title">{title}</h3><ul className="footer-list">{items.map(item => <li key={item}><a href={navItems.includes(item) ? navHref(item) : "#services"}>{item}</a></li>)}</ul></div>; }

function GrandDukePage() {
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground"><Header /><main><Hero /><TrustStrip /><About /><Services /><Pricing /><Process /><WhyChoose /><Gallery /><Testimonials /><FAQ /><QuoteForm /></main><Footer /><div className="mobile-cta"><a href="#contact"><Phone />Call Now</a><a href="#contact"><CalendarDays />Book Now</a></div></div>;
}
