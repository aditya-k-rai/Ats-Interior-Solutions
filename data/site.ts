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
  phone: "+91 98765 43210",
  email: "hello@atsinteriorsolutions.in",
  whatsapp: "919876543210",
  address: "Sector 62 & Greater Noida West, Delhi NCR",
  gstin: "07AAAAA0000A1Z5",
  established: "2018",
  founder: "Anand Sharma & Team",
  memberships: ["CREDAI NCR Partner", "ASSOCHAM Member", "Indian Institute of Interior Designers (IIID)"],
  tagline: "Premium interior design and modular execution for homes, kitchens and offices across Greater Noida, Noida, Ghaziabad and Delhi NCR."
};

export const services = [
  {
    slug: "interior-design",
    name: "Interior Design",
    short: "End-to-end home interiors with planning, 3D concepts, materials and site execution.",
    icon: Home,
    budget: "Rs. 3L to Rs. 50L+",
    timeline: "6 to 12 weeks"
  },
  {
    slug: "modular-kitchen",
    name: "Modular Kitchen",
    short: "Factory-finished kitchens planned around storage, workflow, hardware and durability.",
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
    short: "Sliding, hinged and walk-in storage tailored to room size and daily routines.",
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
    short: "Commercial spaces planned for workflow, brand presence, acoustics and fast delivery.",
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
    title: "3 BHK Contemporary Interior",
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
    slug: "3-bhk-contemporary-interior-noida-sector-137",
    challenge: "The client needed maximum storage, a soothing open-plan living area, and a functional kitchen for a 4-member family without cluttering walkable corridors.",
    solution: "ATS crafted custom concealed storage, warm ambient LED cove lighting, neutral palette laminates, and an optimized modular kitchen layout.",
    scope: ["Living and dining design", "Bedroom wardrobes with lofts", "Modular kitchen with acrylic finish", "POP false ceiling and cove lighting", "Balcony seating and wall decor"],
    materials: ["BWP Marine Plywood", "High-gloss Acrylic shutters", "Quartz countertop", "Warm LED cove lighting", "Hettich soft-close channels"],
    testimonial: "The design felt premium but stayed completely practical. Every corner was utilized effectively."
  },
  {
    title: "Acrylic Modular Kitchen Transformation",
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
    slug: "acrylic-modular-kitchen-gaur-city",
    challenge: "The existing kitchen had poor corner utilization, limited prep space, and visible appliance clutter.",
    solution: "We designed an L-shaped acrylic kitchen with a tall pantry unit, tandem pull-outs, and a seamless quartz breakfast ledge.",
    scope: ["Kitchen measurement & 3D render", "L-shaped modular layout", "Tall storage pantry", "Quartz countertop & tile dado", "Hettich hardware installation"],
    materials: ["18mm BWP Plywood", "Euro-gloss Acrylic finish", "Kaff built-in appliances", "Kalingastone Quartz", "Hafele soft-close hinges"],
    testimonial: "The kitchen is bright, easy to clean every day, and has double the storage space we used to have."
  },
  {
    title: "Sliding Wardrobe & Bedroom Makeover",
    city: "Ghaziabad",
    area: "Indirapuram",
    service: "Wardrobe",
    serviceSlug: "wardrobe",
    property: "2 BHK apartment",
    size: "Master Bedroom & Kids Room",
    style: "Compact storage-led",
    budget: "Rs. 2L to Rs. 3L",
    timeline: "3 weeks",
    className: "wardrobe-image",
    slug: "wardrobe-storage-indirapuram",
    challenge: "The home needed expansive clothes and luggage storage without obstructing movement in compact 12x11 ft bedrooms.",
    solution: "Fitted floor-to-ceiling sliding wardrobes with full lofts, integrated dressers, and anti-warp aluminum frame profiles.",
    scope: ["Master bedroom sliding wardrobe", "Kids room study & wardrobe", "Full ceiling lofts", "Internal drawer organizers", "Site assembly"],
    materials: ["Commercial HDMR board", "Laminate in suede finish", "Anodized aluminum profiles", "Ozone soft-close sliding tracks"],
    testimonial: "The wardrobe installation was clean and completed within the exact 3-week promised timeline."
  },
  {
    title: "Luxury POP Ceiling & Cove Lighting",
    city: "Delhi NCR",
    area: "Dwarka Sector 12",
    service: "False Ceiling",
    serviceSlug: "false-ceiling",
    property: "4 BHK Builder Floor",
    size: "2,200 sqft overall",
    style: "Architectural cove & recessed",
    budget: "Rs. 1.8L to Rs. 2.5L",
    timeline: "2.5 weeks",
    className: "living-image",
    slug: "luxury-pop-ceiling-dwarka",
    challenge: "High ceiling height needed a layered design that concealed air conditioning ducts while creating grand ambient light.",
    solution: "Multi-tiered POP ceiling with double cove LED troughs, magnetic track lighting, and flush AC vent integrations.",
    scope: ["Living hall multi-cove design", "Dining floating island ceiling", "Bedroom peripheral coves", "Electrical wiring & fixtures"],
    materials: ["Gyproc Gypsum board", "Kaufmann POP plaster", "Wipro Dimmable COB lights", "Havells FRLS copper wiring"],
    testimonial: "The lighting mood transformed our entire drawing room. Very clean ceiling finish."
  },
  {
    title: "Modern Minimalist Villa Interior",
    city: "Greater Noida",
    area: "Jaypee Greens",
    service: "Interior Design",
    serviceSlug: "interior-design",
    property: "4 BHK Luxury Villa",
    size: "3,800 sqft",
    style: "Luxury Contemporary",
    budget: "Rs. 28L to Rs. 38L",
    timeline: "14 weeks",
    className: "living-image",
    slug: "modern-minimalist-villa-jaypee-greens",
    challenge: "Large open spaces required visual warmth, acoustic dampening, and seamless indoor-outdoor aesthetic transition.",
    solution: "Veneer panelling, double-height chandelier feature wall, Italian marble accenting, and custom loose furniture.",
    scope: ["Double height living room", "4 ensuite bedrooms", "Island kitchen & bar", "Home office suite", "Landscaped patio interior"],
    materials: ["Teak Veneer", "Italian Botticino Marble", "BWP Plywood", "REHAU edge banding", "Blum Servo-Drive hardware"],
    testimonial: "ATS delivered luxury detailing that matched international standards right here in Greater Noida."
  },
  {
    title: "Boutique Corporate Office Design",
    city: "Noida",
    area: "Sector 62",
    service: "Office Interior",
    serviceSlug: "office-interior",
    property: "Commercial Workspace",
    size: "2,400 sqft",
    style: "Modern Industrial Ergonomic",
    budget: "Rs. 18L to Rs. 24L",
    timeline: "7 weeks",
    className: "living-image",
    slug: "boutique-corporate-office-noida-sector-62",
    challenge: "Fast-growing tech team needed 35 workstations, 2 conference rooms, a reception area, and a breakroom delivered under strict deadline.",
    solution: "Open ceiling acoustic spray, modular workstation pods, glass partition rooms, and energetic brand-color wall accenting.",
    scope: ["Reception & waiting lounge", "35 ergonomic workstations", "Executive cabins & boardrooms", "Pantry & cafeteria", "HVAC & networking"],
    materials: ["Saint-Gobain Acoustic Glass", "Featherlite Workstations", "Armstrong Ceiling Tiles", "Polyflor Vinyl Flooring"],
    testimonial: "Handed over on time so our team could move in without missing a single workday."
  }
];

export const testimonials = [
  {
    name: "Ritika Sharma",
    city: "Noida",
    project: "3 BHK Interior (Sector 137)",
    rating: 5,
    quote: "ATS helped us understand budget options and material grades before work began. The handover was smooth, and the home feels personal and high quality."
  },
  {
    name: "Amit Bansal",
    city: "Greater Noida",
    project: "Modular Kitchen (Gaur City)",
    rating: 5,
    quote: "The team fixed our storage and counter-space issues. The kitchen is much easier to maintain, and the finish quality is exactly what was promised."
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
  { title: "Free Consultation", copy: "Understand scope, property layout, budget band and timeline expectations." },
  { title: "Design Brief & 3D Concept", copy: "Finalize room layouts, 3D visual renders and detailed material selections." },
  { title: "Transparent Quotation", copy: "Detailed itemized breakdown with board grades, hardware and finish clarity." },
  { title: "Factory & Site Execution", copy: "Precision factory modular production paired with supervised site execution." },
  { title: "Handover & Warranty", copy: "Final snag list closure, thorough cleaning, formal handover and 1-year warranty tag." }
];

export const faqs = [
  // --- GENERAL & COST FAQS ---
  {
    q: "How much does a 3 BHK interior cost in Noida or Greater Noida?",
    a: "A 3 BHK interior in Noida or Greater Noida typically costs Rs. 8 Lakhs to Rs. 14 Lakhs for standard essentials (modular kitchen, wardrobes, false ceiling, basic decor). Premium projects with customized veneer, Italian marble, and smart automation range between Rs. 15 Lakhs and Rs. 25 Lakhs+."
  },
  {
    q: "What is the cost of a modular kitchen in Noida?",
    a: "A modular kitchen in Noida costs between Rs. 1.5 Lakhs and Rs. 4.5 Lakhs for standard L-shape or U-shape layouts using HDMR or BWP Plywood with Laminate shutters. High-gloss Acrylic or Lacquered Glass kitchens with premium Hettich/Blum hardware range from Rs. 4 Lakhs to Rs. 7.5 Lakhs."
  },
  {
    q: "Can ATS Interior Solutions handle both 3D design and site execution?",
    a: "Yes, ATS Interior Solutions provides end-to-end services. We handle initial space planning, photorealistic 3D rendering, material selection, factory manufacturing of modular components, site civil & electrical work, and final handover."
  },
  {
    q: "Which areas in NCR does ATS Interior Solutions cover?",
    a: "We serve Greater Noida (Pari Chowk, Gaur City, Jaypee Greens), Noida (Sector 18, 50, 62, 77, 137, Expressway), Ghaziabad (Indirapuram, Vaishali, Raj Nagar Ext, Vasundhara), and Delhi NCR (Dwarka, Saket, Hauz Khas, Janakpuri, Rohini)."
  },
  {
    q: "How fast can a modular kitchen or full home interior be completed?",
    a: "A modular kitchen takes 3 to 5 weeks from measurement to installation. Full 2 BHK or 3 BHK home interior execution takes approximately 6 to 10 weeks depending on civil scope and custom woodwork."
  },
  {
    q: "What is included in a full home interior package?",
    a: "A complete package covers space planning, 3D renders, modular kitchen, sliding/hinged wardrobes, TV entertainment unit, POP false ceiling with cove lighting, accent wall finishes/wallpapers, vanity units, and electrical coordination."
  },
  {
    q: "What carcass material is recommended for kitchens in Delhi NCR?",
    a: "For Delhi NCR humidity and water exposure, BWP (Boiling Water Proof) Marine Plywood (IS 710 grade) or HDMR (High Density Moisture Resistant) board is strongly recommended for kitchen sink and wet zones."
  },
  {
    q: "Do you provide pricing quotes before a physical site visit?",
    a: "Yes. We can provide an accurate budget range based on your floor plan layout, property size (sqft), service selection, and material preference during our initial consultation."
  },
  {
    q: "Why hire a local interior designer instead of a national chain?",
    a: "Local designers like ATS offer faster site resolution, direct access to project heads, lower overhead costs passed to clients, understanding of local builder society guidelines, and personalized material inspection."
  },
  {
    q: "Does ATS offer warranty on modular furniture and woodwork?",
    a: "Yes. ATS provides a 1-Year comprehensive after-service warranty on execution and up to 10-15 years manufacturer warranty on BWP boards and branded hardware (Hettich, Hafele, Blum)."
  },
  {
    q: "Can ATS renovate just one kitchen or one bedroom?",
    a: "Yes. We undertake partial home renovations, including single modular kitchen upgrades, master bedroom wardrobe installations, false ceiling revamps, or office reception redesigns."
  },

  // --- HINDI VOICE SEARCH & AEO FAQS (CRITICAL FOR VOICE SEARCH TRAFFIC) ---
  {
    q: "[Hindi] Noida mein 3 BHK interior ka kharcha kitna hota hai?",
    a: "Noida mein 3 BHK flat ke interior ka kharcha lagbhag Rs. 8 Lakh se Rs. 14 Lakh tak aata hai basic modular kitchen, wardrobes, aur false ceiling ke saath. Premium interiors Rs. 15 Lakh se Rs. 25 Lakh+ tak ja sakte hain."
  },
  {
    q: "[Hindi] Modular kitchen Noida mein kitne mein banta hai?",
    a: "Modular kitchen ka rate Noida mein Rs. 1.5 Lakh se shuru hokar Rs. 5 Lakh tak hota hai. Rate aapke kitchen size, material (Plywood vs HDMR), shutter finish (Laminate vs Acrylic), aur hardware par nirbhar karta hai."
  },
  {
    q: "[Hindi] Greater Noida mein sabse accha interior designer kaun hai?",
    a: "ATS Interior Solutions Greater Noida (Pari Chowk, Gaur City, Jaypee Greens) mein high-quality modular kitchen aur full home interior design ke liye ek bharosemand naam hai. Hum 1-year warranty aur transparent pricing dete hain."
  },
  {
    q: "[Hindi] Acrylic vs Laminate kitchen mein kya antar hai?",
    a: "Acrylic kitchen mein high-gloss mirror-like finish milti hai jo modern dikhti hai lekin thodi mehangi hoti hai. Laminate kitchen scratches-resistant hoti hai, budget-friendly hai, aur maintenance mein aasan hai."
  },
  {
    q: "[Hindi] Interior design ke liye ATS se kaise sampark karein?",
    a: "Aap ATS Interior Solutions ko direct call karein (+91 98765 43210) ya humare WhatsApp button par click karke instant consultation aur free 3D design estimate praapt karein."
  },
  {
    q: "[Hindi] False ceiling ka rate Noida mein per sqft kya hai?",
    a: "Noida mein POP false ceiling ka rate Rs. 90 se Rs. 130 per sqft aur Gypsum board ceiling ka rate Rs. 100 se Rs. 150 per sqft ke beech hota hai (LED lighting aur painting alag se)."
  },
  {
    q: "[Hindi] Indirapuram Ghaziabad mein interior designer ka phone number kya hai?",
    a: "Indirapuram aur Ghaziabad ke liye ATS Interior Solutions ka phone number +91 98765 43210 hai. Aap humein direct WhatsApp par apna floor plan bhej sakte hain."
  }
];

export const blogPosts = [
  {
    slug: "modular-kitchen-cost-noida",
    title: "Modular Kitchen Cost in Noida: Materials, Hardware and Budget Ranges",
    category: "Cost Guide",
    readTime: "7 min",
    excerpt: "Complete pricing breakdown for L-shape, U-shape, and parallel modular kitchens in Noida & Greater Noida with board grade and hardware comparison."
  },
  {
    slug: "3-bhk-interior-cost-greater-noida",
    title: "3 BHK Interior Cost in Greater Noida: What Changes the Final Quote",
    category: "Planning",
    readTime: "8 min",
    excerpt: "Detailed budget breakdown for 3 BHK flat interior design in Gaur City, Pari Chowk, and Jaypee Greens with material recommendations."
  },
  {
    slug: "acrylic-vs-laminate-kitchen",
    title: "Acrylic vs Laminate Kitchen: Which Finish Works Better for NCR Homes?",
    category: "Comparison",
    readTime: "6 min",
    excerpt: "Detailed head-to-head comparison between Acrylic gloss shutters and Laminate suede shutters for Delhi NCR climate and daily usage."
  },
  {
    slug: "plywood-vs-mdf-modular-furniture",
    title: "BWP Plywood vs Commercial Plywood vs HDMR: Complete Material Guide",
    category: "Material Guide",
    readTime: "9 min",
    excerpt: "Understand IS 710 BWP plywood, HDMR, and Commercial MR plywood to choose the right board grade for kitchens and wardrobes."
  }
];

export const materialComparisons = [
  {
    title: "Acrylic vs Laminate Shutters",
    factor: "Finish & Durability",
    optionA: "Acrylic: High mirror gloss, premium look, UV-resistant, scratch-sensitive.",
    optionB: "Laminate: Matte/suede/gloss textures, scratch-resistant, economical, highly durable."
  },
  {
    title: "BWP Plywood vs HDMR Board",
    factor: "Moisture & Strength",
    optionA: "BWP Plywood (IS 710): 100% waterproof, suitable for wet sink zones & kitchens.",
    optionB: "HDMR Board: High density moisture resistant, smooth surface, ideal for bedroom wardrobes."
  },
  {
    title: "POP Ceiling vs Gypsum Board Ceiling",
    factor: "Execution & Finish",
    optionA: "POP Ceiling: Highly customizable molded designs, seamless surface, takes longer on-site.",
    optionB: "Gypsum Board: Fast installation, lightweight, clean linear coves, zero cracking."
  }
];

export const usp = [
  { title: "Factory-direct materials", copy: "Clear material options, branded hardware (Hettich/Hafele) and transparent board grade selection.", icon: Sparkles },
  { title: "In-house design team", copy: "Photorealistic 3D renders and execution stay connected from brief to final handover.", icon: Home },
  { title: "Transparent pricing", copy: "Itemized estimates with zero hidden surprises or sudden cost escalations.", icon: WalletCards },
  { title: "On-time delivery", copy: "Strict milestone schedule with dedicated project manager oversight.", icon: Clock3 },
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
  { href: "/about", label: "About" },
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
