import {
  BadgeCheck,
  Bath,
  BriefcaseBusiness,
  Building2,
  ChefHat,
  Clock3,
  Home,
  Layers3,
  MapPin,
  MessageCircle,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  WalletCards
} from "lucide-react";

export const site = {
  name: "ATS Interior Solutions",
  url: "https://atsinteriorsolutions.in",
  phone: "+91 98737 57487",
  email: "atsinteriorsolution@gmail.com",
  whatsapp: "919873757487",
  address: "Sector 62 & Greater Noida West, Delhi NCR",
  gstin: "07AAAAA0000A1Z5",
  established: "2018",
  founder: "Manoj Sharma (Founder & Managing Director)",
  memberships: ["CREDAI NCR Partner", "ASSOCHAM Member", "Indian Institute of Interior Designers (IIID)"],
  tagline: "Premium interior design, custom modular kitchens, wardrobes and house construction across Greater Noida, Noida, Ghaziabad and Delhi NCR."
};

export const services = [
  {
    slug: "interior-design",
    name: "Interior Design",
    short: "End-to-end home interiors with planning, 3D concepts, materials and site execution by Manoj Sharma & team.",
    icon: Home,
    budget: "Rs. 3L to Rs. 50L+",
    timeline: "6 to 12 weeks"
  },
  {
    slug: "modular-kitchen",
    name: "Modular Kitchen",
    short: "Factory-finished kitchens planned around storage, workflow, HDMR/Plywood and durable hardware.",
    icon: ChefHat,
    budget: "Rs. 1.5L to Rs. 8L+",
    timeline: "3 to 6 weeks"
  },
  {
    slug: "false-ceiling",
    name: "False Ceiling",
    short: "Clean ceiling designs with layered cove lighting, POP details and electrical integration.",
    icon: Layers3,
    budget: "Rs. 60K to Rs. 3L+",
    timeline: "1 to 3 weeks"
  },
  {
    slug: "wardrobe",
    name: "Wardrobe",
    short: "Acrylic cream, metallic blue, sliding and hinged fitted storage tailored to bedroom size.",
    icon: Building2,
    budget: "Rs. 75K to Rs. 5L+",
    timeline: "2 to 5 weeks"
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    short: "Vanities, tiles, waterproofing and premium fittings for compact and luxury bathrooms.",
    icon: Bath,
    budget: "Rs. 1L to Rs. 6L+",
    timeline: "3 to 6 weeks"
  },
  {
    slug: "wallpaper",
    name: "Wallpaper",
    short: "Feature walls, 3D textures and subtle patterns that transform rooms without heavy civil work.",
    icon: Paintbrush,
    budget: "Rs. 20K to Rs. 2L+",
    timeline: "2 to 7 days"
  },
  {
    slug: "office-interior",
    name: "Office Interior",
    short: "Commercial spaces planned for workflow, executive cabins, reception and fast delivery.",
    icon: BriefcaseBusiness,
    budget: "Rs. 5L to Rs. 60L+",
    timeline: "5 to 14 weeks"
  }
];

export const cities = [
  {
    slug: "greater-noida",
    name: "Greater Noida",
    focus: "family homes, villas and new apartment handovers around Pari Chowk, Gaur City, Omega & Jaypee Greens",
    areas: ["alpha-1", "alpha-2", "beta-1", "beta-2", "pari-chowk", "gaur-city", "jaypee-greens", "knowledge-park", "tech-zone", "nri-city"]
  },
  {
    slug: "noida",
    name: "Noida",
    focus: "high-rise apartments, premium societies and IT professional residences across central & expressway sectors",
    areas: ["sector-18-noida", "sector-44-noida", "sector-50-noida", "sector-62-noida", "sector-77-noida", "sector-93a-noida", "sector-107-noida", "sector-120-noida", "sector-137-noida", "ats-greens"]
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    focus: "full home renovations, modular upgrades and compact living projects across established residential clusters",
    areas: ["indirapuram", "raj-nagar-extension", "vaishali", "kaushambi", "crossing-republik", "siddharth-vihar", "vasundhara", "niti-khand", "abhay-khand", "nyay-khand"]
  },
  {
    slug: "delhi",
    name: "Delhi NCR",
    focus: "selected luxury residential, builder floors and commercial workspace designs in South, West, North & East Delhi",
    areas: ["dwarka", "janakpuri", "saket", "hauz-khas", "vasant-kunj", "malviya-nagar", "rohini", "pitampura", "preet-vihar", "mayur-vihar"]
  }
];

export const projects = [
  {
    title: "3 BHK Contemporary Interior & TV Unit Panel",
    city: "Noida",
    area: "Sector 137",
    service: "Full Home",
    serviceSlug: "interior-design",
    property: "3 BHK apartment",
    size: "1,650 sqft",
    style: "Contemporary warm minimal",
    budget: "Rs. 14L to Rs. 18L",
    timeline: "10 weeks",
    className: "living-image",
    image: "/images/work/tv-unit-living-1.jpg",
    slug: "3-bhk-contemporary-interior-noida-sector-137",
    challenge: "The client needed maximum storage, a soothing open-plan living area with a custom TV panel unit, and a functional kitchen for a 4-member family.",
    solution: "Founder Manoj Sharma & team crafted custom concealed storage, warm ambient LED cove lighting, neutral palette laminates, and an optimized modular kitchen layout.",
    scope: ["Living and dining design", "Custom TV unit panel", "Bedroom wardrobes with lofts", "Modular kitchen with acrylic finish", "POP false ceiling and cove lighting"],
    materials: ["BWP Marine Plywood", "High-gloss Acrylic shutters", "Quartz countertop", "Warm LED cove lighting", "Hettich soft-close channels"],
    testimonial: "Mr. Manoj Sharma personally reviewed our site layout. The design felt premium and was delivered right on time."
  },
  {
    title: "Acrylic Gloss Modular Kitchen",
    city: "Greater Noida",
    area: "Gaur City",
    service: "Kitchen",
    serviceSlug: "modular-kitchen",
    property: "High-rise apartment",
    size: "120 sqft kitchen",
    style: "Gloss acrylic modular",
    budget: "Rs. 3.5L to Rs. 5L",
    timeline: "5 weeks",
    className: "kitchen-image",
    image: "/images/work/modular-kitchen-1.jpg",
    slug: "acrylic-modular-kitchen-gaur-city",
    challenge: "The existing kitchen had poor corner utilization, limited prep space, and visible appliance clutter.",
    solution: "ATS designed an L-shaped acrylic kitchen with a tall pantry unit, tandem pull-outs, HDMR carcass, and a seamless quartz breakfast ledge.",
    scope: ["Kitchen measurement & 3D render", "L-shaped modular layout", "Tall storage pantry", "Quartz countertop & tile dado", "Hettich hardware installation"],
    materials: ["18mm BWP Plywood", "Euro-gloss Acrylic finish", "Kaff built-in appliances", "Kalingastone Quartz", "Hafele soft-close hinges"],
    testimonial: "The kitchen is bright, easy to clean every day, and has double the storage space we used to have."
  },
  {
    title: "Acrylic Cream & Metallic Blue Fitted Wardrobe",
    city: "Ghaziabad",
    area: "Indirapuram",
    service: "Wardrobe",
    serviceSlug: "wardrobe",
    property: "2 BHK apartment",
    size: "Master Bedroom & Kids Room",
    style: "Custom Fitted Storage",
    budget: "Rs. 2L to Rs. 3L",
    timeline: "3 weeks",
    className: "wardrobe-image",
    image: "/images/work/wardrobe-acrylic-blue.jpg",
    slug: "wardrobe-storage-indirapuram",
    challenge: "The family needed expansive clothes and luggage storage without obstructing movement in compact bedrooms.",
    solution: "Fitted floor-to-ceiling sliding wardrobes in dual-tone acrylic cream and metallic blue with full lofts and integrated dressers.",
    scope: ["Master bedroom sliding wardrobe", "Kids room study & wardrobe", "Full ceiling lofts", "Internal drawer organizers", "Site assembly"],
    materials: ["Commercial HDMR board", "Dual-tone Acrylic finish", "Anodized aluminum profiles", "Ozone soft-close sliding tracks"],
    testimonial: "The wardrobe installation was clean and completed within the exact 3-week promised timeline."
  },
  {
    title: "Modern Designer TV Console & Living Room",
    city: "Noida",
    area: "Sector 62",
    service: "Interior Design",
    serviceSlug: "interior-design",
    property: "3 BHK Premium Flat",
    size: "1,800 sqft",
    style: "Modern Architectural",
    budget: "Rs. 16L to Rs. 22L",
    timeline: "9 weeks",
    className: "living-image",
    image: "/images/work/tv-unit-living-2.jpg",
    slug: "modern-designer-tv-console-noida",
    challenge: "Large drawing room needed an architectural focal point with hidden wiring, display shelves, and ambient cove lighting.",
    solution: "Fluted charcoal panel backdrop with warm LED strip troughs, floating marble console, and integrated acoustic wall treatments.",
    scope: ["Drawing room TV panel unit", "Foyer shoe rack & mirror console", "Dining area accent wall", "POP ceiling lighting"],
    materials: ["Louvers Charcoal Panel", "Veneer finish", "Warm LED strips", "Hettich push-to-open channels"],
    testimonial: "The TV unit transformed our living room completely. Stunning craftsmanship!"
  },
  {
    title: "U-Shaped HDMR Modular Kitchen",
    city: "Ghaziabad",
    area: "Vaishali",
    service: "Kitchen",
    serviceSlug: "modular-kitchen",
    property: "Residential Apartment",
    size: "140 sqft kitchen",
    style: "U-Shaped Heavy Duty Modular",
    budget: "Rs. 4L to Rs. 6L",
    timeline: "4.5 weeks",
    className: "kitchen-image",
    image: "/images/work/modular-kitchen-4.jpg",
    slug: "u-shaped-hdmr-kitchen-vaishali",
    challenge: "High daily Indian cooking requirements called for oil-resistant, easy-clean shutter finishes and maximum pantry drawers.",
    solution: "U-shaped HDMR board kitchen with anti-scratch laminate, corner carousel units, and under-counter tandem boxes.",
    scope: ["3D layout rendering", "U-shaped modular carcass", "Corner carousel pull-out", "Chimney & hob installation"],
    materials: ["Action Tesa HDMR Board", "Anti-scratch Matte Laminate", "Granite countertop", "Blum Tandem drawers"],
    testimonial: "Very sturdy kitchen build quality. Storage planning was handled brilliantly by Mr. Manoj Sharma."
  },
  {
    title: "Custom Kids Bedroom & Study Storage",
    city: "Noida",
    area: "Sector 50",
    service: "Wardrobe",
    serviceSlug: "wardrobe",
    property: "3 BHK Apartment",
    size: "Kids Bedroom (14x12 ft)",
    style: "Playful Ergonomic Storage",
    budget: "Rs. 1.8L to Rs. 2.5L",
    timeline: "3 weeks",
    className: "wardrobe-image",
    image: "/images/work/bedroom-kids.jpg",
    slug: "kids-bedroom-study-noida",
    challenge: "Growing children needed combined book storage, clothes wardrobe, and a study desk without crowding walkable floor space.",
    solution: "Custom study desk with overhead bookshelves, integrated wardrobe with soft pastel laminate shutters, and pin-up board.",
    scope: ["Kids wardrobe with lofts", "Integrated study desk & chair space", "Overhead library shelves", "Safety rounded corners"],
    materials: ["High-density MR Plywood", "Soft-touch Pastel Laminates", "Soft-close hinges", "Telescopic drawer channels"],
    testimonial: "Our kids love their new study room setup! Clean execution by the ATS team."
  }
];

export const realWorkGallery = [
  {
    title: "Executive Cabin Studio & Materials Studio",
    category: "Studio & Team",
    image: "/images/work/owner-engineer-cabin.jpg",
    description: "Founder Manoj Sharma with Site Engineer Utkarsh in the ATS Noida Executive Cabin."
  },
  {
    title: "Architecture & 3D Design Consultation",
    category: "Design Process",
    image: "/images/work/owner-architect-discussion.jpg",
    description: "Manoj Sharma reviewing floor plans and 3D concept renders with Senior Architect."
  },
  {
    title: "Contemporary Living Room TV Panel Unit",
    category: "Living Room",
    image: "/images/work/tv-unit-living-1.jpg",
    description: "Custom fluted paneling and marble floating console delivered in Noida Sector 137."
  },
  {
    title: "High-Gloss Acrylic Modular Kitchen",
    category: "Modular Kitchen",
    image: "/images/work/modular-kitchen-1.jpg",
    description: "L-shaped acrylic kitchen with quartz countertop and tandem pull-outs delivered in Gaur City."
  },
  {
    title: "Acrylic Cream & Metallic Blue Wardrobe",
    category: "Wardrobes",
    image: "/images/work/wardrobe-acrylic-blue.jpg",
    description: "Floor-to-ceiling fitted wardrobe with sliding tracks and top lofts delivered in Indirapuram."
  },
  {
    title: "Heavy-Duty HDMR Kitchen Execution",
    category: "Modular Kitchen",
    image: "/images/work/modular-kitchen-4.jpg",
    description: "U-shaped oil-resistant kitchen using Action Tesa HDMR board and tandem boxes."
  },
  {
    title: "Architectural TV Console & Wall Panel",
    category: "Living Room",
    image: "/images/work/tv-unit-living-2.jpg",
    description: "Modern drawing room entertainment wall with warm LED cove troughs."
  },
  {
    title: "Kids Bedroom Wardrobe & Study Desk",
    category: "Bedrooms",
    image: "/images/work/bedroom-kids.jpg",
    description: "Custom study desk and wardrobe storage delivered for a 3 BHK family home."
  }
];

export const testimonials = [
  {
    name: "Ritika Sharma",
    city: "Noida",
    project: "3 BHK Interior (Sector 137)",
    rating: 5,
    quote: "Manoj Sharma Sir and his team helped us understand budget options and material grades before work began. Handover was smooth and on schedule."
  },
  {
    name: "Amit Bansal",
    city: "Greater Noida",
    project: "Modular Kitchen (Gaur City)",
    rating: 5,
    quote: "The ATS team fixed our storage and counter-space issues. The modular kitchen is easy to maintain, and the finish quality is top notch."
  },
  {
    name: "Neha & Vikram Arora",
    city: "Ghaziabad",
    project: "Wardrobe & Bedroom (Indirapuram)",
    rating: 5,
    quote: "They gave practical suggestions instead of pushing expensive add-ons. The sliding wardrobes were completed neatly and right on schedule."
  },
  {
    name: "Sanjay Gupta",
    city: "Delhi NCR",
    project: "POP Ceiling & Lighting (Dwarka)",
    rating: 5,
    quote: "Flawless execution on the false ceiling. The cove lighting gives a five-star hotel vibe to our living room."
  }
];

export const trustMetrics = [
  { label: "Projects Completed", value: "50+", icon: BadgeCheck },
  { label: "Cities Served", value: "4", icon: MapPin },
  { label: "Happy Families", value: "200+", icon: Star },
  { label: "After-service Warranty", value: "1 yr", icon: ShieldCheck }
];

export const process = [
  { title: "Free Consultation", copy: "Understand scope, property layout, budget band and timeline expectations with Manoj Sharma & design team." },
  { title: "Design Brief & 3D Concept", copy: "Finalize room layouts, 3D visual renders and detailed material selections." },
  { title: "Transparent Quotation", copy: "Detailed itemized breakdown with board grades, hardware and finish clarity." },
  { title: "Factory & Site Execution", copy: "Precision factory modular production paired with supervised site execution by Site Engineers." },
  { title: "Handover & Warranty", copy: "Final snag list closure, thorough cleaning, formal handover and 1-year warranty tag." }
];

export const faqs = [
  {
    q: "How much does a 3 BHK interior cost in Noida or Greater Noida?",
    a: "A 3 BHK interior in Noida or Greater Noida typically costs Rs. 8 Lakhs to Rs. 14 Lakhs for standard essentials (modular kitchen, wardrobes, false ceiling, basic decor). Premium projects range between Rs. 15 Lakhs and Rs. 25 Lakhs+."
  },
  {
    q: "What is the contact number and email for ATS Interior Solutions?",
    a: "You can reach ATS Interior Solutions directly at +91 98737 57487 or via email at atsinteriorsolution@gmail.com for instant consultation and site measurement."
  },
  {
    q: "Who is the founder of ATS Interior Solutions?",
    a: "ATS Interior Solutions is founded and led by Mr. Manoj Sharma (Founder & Managing Director), supported by Senior Architect & Site Engineer Utkarsh."
  },
  {
    q: "What is the cost of a modular kitchen in Noida?",
    a: "A modular kitchen in Noida costs between Rs. 1.5 Lakhs and Rs. 4.5 Lakhs for standard L-shape or U-shape layouts using HDMR or BWP Plywood with Laminate/Acrylic shutters."
  },
  {
    q: "Which areas in NCR does ATS Interior Solutions cover?",
    a: "We serve Greater Noida (Pari Chowk, Gaur City, Jaypee Greens), Noida (Sector 18, 50, 62, 77, 137, Expressway), Ghaziabad (Indirapuram, Vaishali, Raj Nagar Ext), and Delhi NCR (Dwarka, Saket, Hauz Khas)."
  },

  // --- HINDI VOICE SEARCH FAQS ---
  {
    q: "[Hindi] ATS Interior Solutions ka phone number aur email id kya hai?",
    a: "ATS Interior Solutions ka official contact number +91 98737 57487 aur email id atsinteriorsolution@gmail.com hai. Aap direct WhatsApp par bhi baat kar sakte hain."
  },
  {
    q: "[Hindi] Noida mein 3 BHK interior ka kharcha kitna hota hai?",
    a: "Noida mein 3 BHK flat ke interior ka kharcha lagbhag Rs. 8 Lakh se Rs. 14 Lakh tak aata hai basic modular kitchen, wardrobes, aur false ceiling ke saath."
  },
  {
    q: "[Hindi] Greater Noida mein sabse accha interior designer kaun hai?",
    a: "ATS Interior Solutions (Founder Mr. Manoj Sharma) Greater Noida aur Noida mein high-quality modular kitchen aur full home interior design ke liye ek bharosemand naam hai."
  }
];

export const blogPosts = [
  {
    slug: "modular-kitchen-cost-noida",
    title: "Modular Kitchen Cost in Noida: Materials, Hardware and Budget Ranges",
    category: "Cost Guide",
    readTime: "7 min",
    excerpt: "Complete pricing breakdown for L-shape, U-shape, and parallel modular kitchens in Noida & Greater Noida."
  },
  {
    slug: "3-bhk-interior-cost-greater-noida",
    title: "3 BHK Interior Cost in Greater Noida: What Changes the Final Quote",
    category: "Planning",
    readTime: "8 min",
    excerpt: "Detailed budget breakdown for 3 BHK flat interior design in Gaur City, Pari Chowk, and Jaypee Greens."
  },
  {
    slug: "acrylic-vs-laminate-kitchen",
    title: "Acrylic vs Laminate Kitchen: Which Finish Works Better for NCR Homes?",
    category: "Comparison",
    readTime: "6 min",
    excerpt: "Detailed head-to-head comparison between Acrylic gloss shutters and Laminate suede shutters for Delhi NCR climate."
  }
];

export const materialComparisons = [
  {
    title: "Acrylic vs Laminate Shutters",
    factor: "Finish & Durability",
    optionA: "Acrylic: High mirror gloss, premium look, UV-resistant.",
    optionB: "Laminate: Matte/suede/gloss textures, scratch-resistant, economical."
  },
  {
    title: "BWP Plywood vs HDMR Board",
    factor: "Moisture & Strength",
    optionA: "BWP Plywood (IS 710): 100% waterproof, suitable for wet sink zones.",
    optionB: "HDMR Board: High density moisture resistant, ideal for bedroom wardrobes."
  }
];

export const usp = [
  { title: "Factory-direct materials", copy: "Clear material options, branded hardware (Hettich/Hafele) and transparent board grade selection.", icon: Sparkles },
  { title: "In-house design team", copy: "Led by Mr. Manoj Sharma & senior architects for 3D renders and execution.", icon: Home },
  { title: "Transparent pricing", copy: "Itemized estimates with zero hidden surprises or sudden cost escalations.", icon: WalletCards },
  { title: "On-time delivery", copy: "Strict milestone schedule with dedicated site engineer supervision.", icon: Clock3 },
  { title: "WhatsApp-first support", copy: "Instant photo updates, quick query resolution and direct contact.", icon: MessageCircle }
];

export function titleCaseSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function getLandingPages() {
  const servicePages = services.map((service) => ({
    slug: service.slug,
    service,
    city: null as (typeof cities)[number] | null,
    area: null as string | null,
    type: "service" as const
  }));

  const cityPages = services.flatMap((service) =>
    cities.map((city) => ({
      slug: `${service.slug}-${city.slug}`,
      service,
      city,
      area: null as string | null,
      type: "city" as const
    }))
  );

  const areaPages = services.flatMap((service) =>
    cities.flatMap((city) =>
      city.areas.map((area) => ({
        slug: `${service.slug}-${area}`,
        service,
        city,
        area,
        type: "area" as const
      }))
    )
  );

  return [...servicePages, ...cityPages, ...areaPages];
}

export function getLandingPage(slug: string) {
  return getLandingPages().find((page) => page.slug === slug);
}

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/cost-calculator", label: "Cost" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" }
];

export { Phone };

export const serviceSubtypes: Record<string, string[]> = {
  "interior-design": ["Full home interior", "2 BHK interior", "3 BHK interior", "Villa interior", "Renovation"],
  "modular-kitchen": ["L-shaped kitchen", "U-shaped kitchen", "Parallel kitchen", "Island kitchen", "Straight kitchen"],
  "false-ceiling": ["Living room ceiling", "Bedroom ceiling", "POP ceiling", "Gypsum ceiling", "LED cove ceiling"],
  wardrobe: ["Sliding wardrobe", "Hinged wardrobe", "Walk-in wardrobe", "Loft storage", "Kids room storage"],
  bathroom: ["Compact bathroom", "Luxury bathroom", "Vanity unit", "Tile selection", "Bathroom renovation"],
  wallpaper: ["Accent wall", "Texture finish", "Kids room wallpaper", "3D wallpaper", "Paint and wallpaper"],
  "office-interior": ["Corporate office", "Retail shop", "Clinic interior", "Co-working space", "Reception area"]
};

export const pricingTiers = [
  { tier: "Budget", range: "Rs. 900-1,400/sqft", includes: "Core storage, practical laminates, essential lighting and clean execution." },
  { tier: "Mid-range", range: "Rs. 1,400-2,200/sqft", includes: "Better finishes, more custom storage, feature walls, branded hardware and refined lighting." },
  { tier: "Premium", range: "Rs. 2,200+/sqft", includes: "Premium finishes, detailed ceiling, custom furniture, advanced hardware and higher-touch supervision." }
];

export const contentClusters = [
  { title: "Cost and Pricing", examples: ["Interior design cost in Noida", "3 BHK interior cost Greater Noida", "Budget vs premium interiors"] },
  { title: "Room Guides", examples: ["Living room design", "Bedroom wardrobe planning", "Bathroom makeover guide"] },
  { title: "Buying Guides", examples: ["Questions to ask an interior designer", "Interior designer vs contractor", "Quotation checklist"] },
  { title: "Neighbourhood Guides", examples: ["Indirapuram interior guide", "Sector 50 Noida kitchen guide", "Greater Noida villa interiors"] }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
