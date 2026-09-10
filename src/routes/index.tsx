import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/automotive/Header";
import { Hero } from "@/components/automotive/Hero";
import { TrustStrip } from "@/components/automotive/TrustStrip";
import { About } from "@/components/automotive/About";
import { Services } from "@/components/automotive/Services";
import { Pricing } from "@/components/automotive/Pricing";
import { Process } from "@/components/automotive/Process";
import { WhyChooseUs } from "@/components/automotive/WhyChooseUs";
import { Portfolio } from "@/components/automotive/Portfolio";
import { Testimonials } from "@/components/automotive/Testimonials";
import { ServiceAreas } from "@/components/automotive/ServiceAreas";
import { FAQ, faqs } from "@/components/automotive/FAQ";
import { QuoteForm } from "@/components/automotive/QuoteForm";
import { Footer } from "@/components/automotive/Footer";
import { MobileCTA } from "@/components/automotive/MobileCTA";

const description =
  "Backed by 17+ years of master-tier experience, Grand Duke Automotive delivers luxury mobile auto detailing, multi-stage paint correction, and ceramic coatings directly to you.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Grand Duke Automotive | 17+ Years Experience | Luxury Mobile Detailing & Ceramic Coating",
      },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "mobile auto detailing, mobile car detailing, auto detailing near me, car detailing, professional car detailing, mobile detailing service, paint correction, ceramic coating, interior car detailing, exterior car detailing, luxury car detailing",
      },
      {
        property: "og:title",
        content: "Grand Duke Automotive | Premium Mobile Detailing & Paint Protection",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Grand Duke Automotive | Luxury Mobile Detailing",
      },
      { name: "twitter:description", content: description },
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
              telephone: "+14697967732",
              email: "detailbrandco@gmail.com",
              description,
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1234 Main Street",
                addressLocality: "City",
                addressCountry: "Country",
              },
              openingHours: "Mo-Fr 00:00-24:00, Sa-Su 00:00-24:00",
              serviceArea: {
                "@type": "GeoCircle",
                description: "Mobile Detailing Service Area",
              },
              makesOffer: [
                "Mobile auto detailing",
                "Interior car detailing",
                "Machine paint correction",
                "Ceramic coating protection",
                "Thermal steam extraction",
              ],
            },
            {
              "@type": "Service",
              name: "Premium Mobile Automotive Detailing",
              serviceType: "Automotive Detailing & Surface Care",
              provider: {
                "@type": "AutomotiveBusiness",
                name: "Grand Duke Automotive",
              },
              areaServed: "Metropolitan Area",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Detailing Packages",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "True Shine Package",
                    },
                    price: "75",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Sigmate Package",
                    },
                    price: "190",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Panache Package",
                    },
                    price: "220",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Steam Clean Package",
                    },
                    price: "300",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Luxurious Package",
                    },
                    price: "450",
                    priceCurrency: "USD",
                  },
                ],
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: GrandDukePage,
});

function GrandDukePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Pricing />
        <Process />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
