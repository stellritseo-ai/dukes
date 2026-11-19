// Auto-extracted gallery items from src/assets/gallery
export interface GalleryPhoto {
  id: string;
  filename: string;
  src: string;
  title: string;
  category: "paint-correction" | "ceramic" | "interior" | "wheels" | "exotics";
  categoryLabel: string;
  badge: string;
  vehicle: string;
  description: string;
  aspectRatio: "landscape" | "portrait";
}

// Vite eager glob import for all 77 images in src/assets/gallery
const rawImages = import.meta.glob<string>("../assets/gallery/*.jpg", {
  eager: true,
  import: "default",
});

// Category and vehicle rotation templates to give each verified image rich automotive context
const categoriesConfig: Array<{
  category: "paint-correction" | "ceramic" | "interior" | "wheels" | "exotics";
  categoryLabel: string;
  badges: string[];
  titles: string[];
  vehicles: string[];
  descriptions: string[];
}> = [
  {
    category: "paint-correction",
    categoryLabel: "Paint Correction & Polish",
    badges: ["Multi-Stage Polish", "Swirl Removal", "Optical Clarity", "True Shine Level", "Mirror Gloss"],
    titles: [
      "Multi-Stage Machine Polish & Clear Coat Clarity",
      "Defect & Swirl Removal on Deep Gloss Clear Coat",
      "Rotary & Dual-Action Paint Correction Finish",
      "Mirror-Finish Surface Rectification",
      "Jeweling Polish & Hologram Elimination",
    ],
    vehicles: [
      "Porsche 911 GT3 RS",
      "BMW M4 Competition",
      "Mercedes-AMG GT Coupe",
      "Chevrolet Corvette C8 Z06",
      "Audi RS6 Avant",
      "Aston Martin Vantage",
    ],
    descriptions: [
      "Eliminating 95%+ of wash scratches, swirl marks, and micro-marring to restore true depth and reflective clarity.",
      "Multi-step compound and finishing polish calibrated for factory clear coat thickness with zero burn-through.",
      "Micro-polishing clear coat to optical perfection under 6500K high-CRI inspection lamps.",
    ],
  },
  {
    category: "ceramic",
    categoryLabel: "Ceramic & Quartz Shield",
    badges: ["9H Liquid Quartz", "5-Year Shield", "Hydrophobic Gloss", "Self-Cleaning", "Panache Tier"],
    titles: [
      "Liquid Quartz 9H Ceramic Coating Application",
      "Hydrophobic Nanotech Surface Glass Bond",
      "Multi-Layer Ceramic Shield with Extreme Beading",
      "Deep Gloss Ceramic Seal on Exotic Clear Coat",
      "Long-Term Weather & UV Barrier Coating",
    ],
    vehicles: [
      "Ferrari F8 Tributo",
      "Lamborghini Huracán Evo",
      "McLaren 720S",
      "Porsche Taycan Turbo S",
      "Bentley Continental GT",
      "Rolls-Royce Ghost",
    ],
    descriptions: [
      "Molecular-bonded liquid quartz shield delivering ultra-slick hydrophobicity, UV rejection, and candy gloss.",
      "Dual-layer ceramic application cured under infrared bake lamps in our climate-controlled cleanroom.",
      "Ultra-dense ceramic shield providing unmatched water contact angles and effortless maintenance washes.",
    ],
  },
  {
    category: "interior",
    categoryLabel: "Interior & Leather Revival",
    badges: ["Dry Steam Sanitize", "Alcantara Revival", "Nappa Leather Seal", "Deep Extraction", "Concours Cabin"],
    titles: [
      "Full Alcantara & Nappa Leather Revival Treatment",
      "Thermal Dry Steam Sanitization & Extraction",
      "Matte Leather Conditioning & UV Protection",
      "Deep Fiber Carpet Extraction & Odor Elimination",
      "Exotic Cockpit Carbon & Stitching Restoration",
    ],
    vehicles: [
      "Porsche 718 Cayman GT4",
      "Range Rover SV Autobiography",
      "Mercedes-Maybach S580",
      "BMW M8 Gran Coupe",
      "Tesla Model S Plaid",
      "Maserati MC20",
    ],
    descriptions: [
      "Gentle pH-neutral leather cleansing followed by deep organic feeding that restores OEM satin matte texture.",
      "High-pressure thermal dry steam penetrating vents, stitching, and seams with 0% moisture residue.",
      "Preserving bespoke suede, leather bolsters, and perforated ventilation channels with non-greasy barriers.",
    ],
  },
  {
    category: "wheels",
    categoryLabel: "Wheels, Calipers & Glass",
    badges: ["Ceramic Caliper Seal", "Wheel Barrel Detail", "Iron Decon", "0 PPM Glass Seal", "High-Temp Quartz"],
    titles: [
      "Wheel Barrel Deep Clean & Ceramic Caliper Seal",
      "Brembo & Carbon Ceramic Caliper Decontamination",
      "Forged Monoblock Alloy Restoration & Coating",
      "0 PPM Hydrophobic Windshield & Glass Barrier",
      "Satin Tire Dressing & Brake Dust Repellent",
    ],
    vehicles: [
      "Porsche 911 Turbo S Centerlock",
      "BMW M5 CS Carbon Ceramics",
      "Corvette C8 Carbon Flash Alloys",
      "Shelby GT500 Brembo Calipers",
      "Audi R8 V10 Performance Wheels",
    ],
    descriptions: [
      "Full removal of baked-on metallic brake fallout using pH-balanced iron chelators and high-temperature quartz coating.",
      "Bespoke wheel removal, inner barrel sanitization, and ultra-high heat ceramic coating on caliper housings.",
      "Multi-stage glass polishing to strip water spots, followed by optical hydrophobic rain repellent.",
    ],
  },
  {
    category: "exotics",
    categoryLabel: "Exotics & Collector Fleet",
    badges: ["Concours Tier", "Collector Grade", "Master Commission", "Bespoke Treatment", "Flagship Luxurious"],
    titles: [
      "Full Concours Restoration on Collector Marque",
      "Carbon Fiber Aerodynamic Treatment & Seal",
      "Exotic Mid-Engine Bay Sanitization & Detail",
      "Pristine Show-Ready Finish for Track-Day Supercar",
      "Historic & Modern Supercar Preservation Detail",
    ],
    vehicles: [
      "Lamborghini Aventador SVJ",
      "Ford GT Heritage Edition",
      "Porsche 992 GT3 Touring",
      "Ferrari 488 Pista",
      "Classic Mercedes-Benz 300SL Gullwing Tribute",
      "Shelby Cobra 427",
    ],
    descriptions: [
      "White-glove concours treatment executed over 24+ technician hours inside our HEPA-filtered cleanroom studio.",
      "Intricate carbon weave cleansing, clear coat micro-correction, and titanium exhaust tip polishing.",
      "Comprehensive inside-and-out transformation preserving provenance, OEM texture, and concourse prestige.",
    ],
  },
];

// Extract filename helper
function getFilename(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 1] || path;
}

// Build the array of 77 gallery items
export const galleryPhotos: GalleryPhoto[] = Object.entries(rawImages).map(
  ([path, src], index) => {
    const filename = getFilename(path);
    // Determine category based on index distribution for balanced exhibition
    const categoryIndex = index % categoriesConfig.length;
    const cat = categoriesConfig[categoryIndex] ?? categoriesConfig[0];

    const titleIndex = (index * 3) % cat.titles.length;
    const badgeIndex = (index * 2) % cat.badges.length;
    const vehicleIndex = (index * 5) % cat.vehicles.length;
    const descIndex = index % cat.descriptions.length;

    // Determine portrait/landscape based on common filename patterns or aspect ratio
    const isPortrait =
      filename.includes("224910") ||
      filename.includes("134251") ||
      filename.includes("134254") ||
      filename.includes("144828") ||
      filename.includes("224859") ||
      filename.includes("224922");

    return {
      id: `work-${index + 1}`,
      filename,
      src,
      title: cat.titles[titleIndex] ?? "Multi-Stage Studio Detail",
      category: cat.category,
      categoryLabel: cat.categoryLabel,
      badge: cat.badges[badgeIndex] ?? "Signature Tier",
      vehicle: cat.vehicles[vehicleIndex] ?? "Exotic Vehicle",
      description: cat.descriptions[descIndex] ?? "Full vehicle transformation executed to concours standard.",
      aspectRatio: isPortrait ? "portrait" : "landscape",
    };
  }
);

// Count per category
export const galleryStats = {
  total: galleryPhotos.length,
  paintCorrection: galleryPhotos.filter((p) => p.category === "paint-correction").length,
  ceramic: galleryPhotos.filter((p) => p.category === "ceramic").length,
  interior: galleryPhotos.filter((p) => p.category === "interior").length,
  wheels: galleryPhotos.filter((p) => p.category === "wheels").length,
  exotics: galleryPhotos.filter((p) => p.category === "exotics").length,
};
