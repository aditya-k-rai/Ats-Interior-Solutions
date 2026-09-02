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
  WalletCards,
  Wrench
} from "lucide-react";

export const site = {
  name: "ATS Interior Solutions",
  url: "https://atsinteriorsolution.com",
  slogan: "Elegance in Every Corner",
  phone: "+91 8448774055",
  phoneAlt: "+91 98737 57487",
  phoneRaw: "08448774055",
  email: "info@atsinteriorsolution.com",
  emailAlt: "atsinteriorsolution@gmail.com",
  whatsapp: "918448774055",
  address: "Plot No. 49, 1st Floor, Sector-31, Site IV, Greater Noida, Uttar Pradesh 201308",
  streetAddress: "Plot No. 49, 1st Floor, Sector-31, Site IV",
  city: "Greater Noida",
  state: "Uttar Pradesh",
  pincode: "201308",
  gstin: "09AXHPK0269P1ZV",
  established: "2018",
  experienceYears: "8+",
  satisfiedClients: "450+",
  founder: "Manoj Pal (Founder & Managing Director)",
  founderName: "Manoj Pal",
  memberships: ["CREDAI NCR Partner", "ASSOCHAM Member", "Indian Institute of Interior Designers (IIID)"],
  tagline: "Elegance in Every Corner — Minimal, interior-inspired design, custom modular kitchens, wardrobes, civil construction and Vastu-compliant spaces across Greater Noida, Noida, Ghaziabad and Delhi NCR.",
  geo: {
    latitude: 28.4549694,
    longitude: 77.5365544
  },
  mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.815772792102!2d77.5365544!3d28.4549694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc03bc0000001%3A0x45f8c681a004c24e!2sATS%20INTERIOR%20SOLUTION!5e0!3m2!1sen!2sin!4v1787609773989!5m2!1sen!2sin",
  mapUrl: "https://maps.google.com/?q=ATS+INTERIOR+SOLUTION+Greater+Noida",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61588562688008#",
    pinterest: "https://www.pinterest.com/Atsinteriorsolution/",
    instagram: "https://www.instagram.com/atsinterior_/"
  },
  directories: {
    indiamart: "https://www.indiamart.com/ats-interior-solution/profile.html?srsltid=AfmBOopHEvr4Qb8R8RPSqD_98kZfSOM5MlaosjnGOSPDRac3lXQSv9Ey",
    justdial: "https://www.justdial.com/Greater-Noida/Ats-Interior-Solution-Surajpur-Site-4/011PXX11-XX11-221104210703-W3S1_BZDET",
    kreatecube: "https://kreatecube.com/profile/ats-interior-solution",
    greaterNoidaDirectory: "https://greater-noida.idbf.in/418044/ats-interior-solution",
    magicpin: "https://magicpin.in/Greater-Noida/Ithums-Galleria/Lifestyle/Ats-Interior-Solution/store/1a49a09?srsltid=AfmBOoqVtL02CUY2h2nV8rOynCdDmbV96D2IdZycsKVK7cU3z-rmKSdb"
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61588562688008#",
    "https://www.pinterest.com/Atsinteriorsolution/",
    "https://www.instagram.com/atsinterior_/",
    "https://www.indiamart.com/ats-interior-solution/profile.html",
    "https://www.justdial.com/Greater-Noida/Ats-Interior-Solution-Surajpur-Site-4/011PXX11-XX11-221104210703-W3S1_BZDET",
    "https://kreatecube.com/profile/ats-interior-solution",
    "https://greater-noida.idbf.in/418044/ats-interior-solution",
    "https://magicpin.in/Greater-Noida/Ithums-Galleria/Lifestyle/Ats-Interior-Solution/store/1a49a09"
  ]
};

export const expertTeam = [
  {
    name: "Mr. Manoj Pal",
    role: "Founder & Managing Director",
    credentials: "Visionary Leader",
    experience: "8+ Years",
    bio: "Pioneered ATS Interior Solutions with a focus on precision, transparency, and high-quality infrastructure and interior execution across Delhi NCR."
  },
  {
    name: "Mr. Krishan Pal",
    role: "Head of Operations",
    credentials: "MBA in Operations & Marketing",
    experience: "16+ Years",
    bio: "Extensive background in project planning, supply chain, and seamless site execution across residential and commercial developments."
  },
  {
    name: "Ar. Nishchay Channana",
    role: "Lead Architect",
    credentials: "Qualified Architect",
    experience: "5 Years",
    bio: "Specializes in 3D spatial planning, modern architectural aesthetics, structural layouts, and Vastu-compliant residential designs."
  },
  {
    name: "Mr. Mohit Kumar",
    role: "Interior Designer",
    credentials: "Senior Interior Designer",
    experience: "5+ Years",
    bio: "Focuses on modern trend integration, custom modular joinery, PU lacquer finishes, and ergonomic space optimization."
  },
  {
    name: "On-Site Execution Force",
    role: "Construction & Carpentry Team",
    credentials: "15 Skilled Carpenters & 3 Site Supervisors",
    experience: "Dedicated Field Staff",
    bio: "Equipped with advanced German technology at our state-of-the-art manufacturing facility to deliver millimetre precision."
  }
];

export const businessTypes = [
  "Interior Designer",
  "Modular Kitchen Designer & Manufacturer",
  "Civil Construction & Renovation Contractor"
];

export const services = [
  {
    slug: "modular-interior",
    name: "Modular Interior",
    short: "German tandem island kitchens, Action Tesa HDHMR, sliding wardrobes, Dekton stone countertops & Blum hardware.",
    icon: ChefHat,
    budget: "Rs. 3L to Rs. 30L+",
    timeline: "3 to 8 weeks",
    subcategories: [
      "L-Shaped Kitchen",
      "U-Shaped Kitchen",
      "Parallel Kitchen",
      "Island Kitchen",
      "Italian Modular Kitchen",
      "Cabinets & Woodwork"
    ]
  },
  {
    slug: "interior-design",
    name: "Full Home Interior",
    short: "Turnkey 3BHK/4BHK home interiors, 3D architectural planning, PU lacquer joinery & end-to-end execution.",
    icon: Home,
    budget: "Rs. 10L to Rs. 1.5Cr+",
    timeline: "6 to 16 weeks",
    subcategories: [
      "3BHK & 4BHK Villa Interiors",
      "Living & Dining Room Styling",
      "Master Bedroom Suites",
      "Kids Room & Custom Study",
      "Pooja Room Mandir Design",
      "Balcony & Bar Lounge Setup"
    ]
  },
  {
    slug: "civil-construction",
    name: "Renovation",
    short: "Smart renovation, masonry, CPVC 10-bar pressure plumbing, FRLS wiring, marble flooring & luxury bathrooms.",
    icon: Wrench,
    budget: "Rs. 5L to Rs. 50L+",
    timeline: "4 to 16 weeks",
    subcategories: [
      "Full Home & Structural Renovation",
      "CPVC 10-Bar Pressure Plumbing",
      "FRLS Heavy Duty Rewiring",
      "Italian Marble & Slab Tiling",
      "Terrace & Wet Area Waterproofing",
      "Luxury Bathroom Fit-Outs"
    ]
  },
  {
    slug: "office-interior",
    name: "Office Interior",
    short: "Executive cabins, ergonomic workstations, acoustic conference rooms & fast commercial handover.",
    icon: BriefcaseBusiness,
    budget: "Rs. 10L to Rs. 80L+",
    timeline: "4 to 12 weeks",
    subcategories: [
      "Executive Cabins & Workstations",
      "Acoustic Conference Rooms",
      "Reception & Branding Walls",
      "Cafeteria & Lounge Fit-Outs",
      "Raised Access & Carpet Flooring",
      "HVAC & Commercial Lighting"
    ]
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
    solution: "Founder Manoj Pal & team crafted custom concealed storage, warm ambient LED cove lighting, neutral palette laminates, and an optimized modular kitchen layout.",
    scope: ["Living and dining design", "Custom TV unit panel", "Bedroom wardrobes with lofts", "Modular kitchen with acrylic finish", "POP false ceiling and cove lighting"],
    materials: ["BWP Marine Plywood", "High-gloss Acrylic shutters", "Quartz countertop", "Warm LED cove lighting", "Hettich soft-close channels"],
    testimonial: "Mr. Manoj Pal personally reviewed our site layout. The design felt premium and was delivered right on time."
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
    testimonial: "Very sturdy kitchen build quality. Storage planning was handled brilliantly by Mr. Manoj Pal."
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
    description: "Founder Manoj Pal with Site Engineer Utkarsh in the ATS Noida Executive Cabin."
  },
  {
    title: "Architecture & 3D Design Consultation",
    category: "Design Process",
    image: "/images/work/owner-architect-discussion.jpg",
    description: "Manoj Pal reviewing floor plans and 3D concept renders with Senior Architect."
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
    name: "Rahul Sharma",
    city: "Greater Noida",
    project: "SDS NRI City — Full Interior & Modular Kitchen",
    rating: 5,
    quote: "ATS turned our vision into reality. Their professionalism and quality exceeded our expectations."
  },
  {
    name: "Neha & Arjun Mehta",
    city: "Greater Noida",
    project: "Purvanchal Heights — Modern Kitchen & Interiors",
    rating: 5,
    quote: "The interiors are stunning and practical. ATS combined creativity with functionality perfectly."
  },
  {
    name: "Sanjay Gupta",
    city: "Delhi NCR",
    project: "Individual Villa — Luxury Vastu-Compliant Home",
    rating: 5,
    quote: "Attention to detail, timely delivery, and Vastu compliance made the entire experience outstanding."
  },
  {
    name: "Ritika Sharma",
    city: "Noida",
    project: "3 BHK Interior (Sector 137)",
    rating: 5,
    quote: "Manoj Pal Sir and his team helped us understand budget options and material grades before work began. Handover was smooth and on schedule."
  },
  {
    name: "Amit Bansal",
    city: "Greater Noida",
    project: "Modular Kitchen (Gaur City)",
    rating: 5,
    quote: "The ATS team fixed our storage and counter-space issues. The modular kitchen is easy to maintain, and the finish quality is top notch."
  }
];

export const trustMetrics = [
  { label: "Satisfied Clients", value: "4500+", icon: BadgeCheck },
  { label: "Years Experience", value: "8+ Yrs", icon: Clock3 },
  { label: "Active Skilled Carpenters", value: "15 Force", icon: Sparkles },
  { label: "German Tech Factory", value: "100% In-House", icon: ShieldCheck }
];

export const processStepsData = [
  {
    id: 1,
    number: "01",
    title: "Consultation",
    subtitle: "Understanding Requirements & Vision",
    description: "In-depth consultation to understand requirements, lifestyle, budget, and vision. We conduct precise on-site measurements and analyze space potential.",
    highlights: ["Free On-Site Measurement", "Lifestyle & Budget Mapping", "Vastu Preference Evaluation"],
    deliverables: "Initial Requirement Scope & Budget Estimation"
  },
  {
    id: 2,
    number: "02",
    title: "Concept & Design",
    subtitle: "Creative Layouts & 3D Visualizations",
    description: "Creative concepts with detailed layouts incorporating functionality and aesthetics. Includes high-definition 3D renders, material mood boards, and finish samples.",
    highlights: ["Photo-realistic 3D Renders", "IS 710 & HDMR Material Samples", "Space & Lighting Layouts"],
    deliverables: "Approved 3D Renders & Itemized Cost Sheet"
  },
  {
    id: 3,
    number: "03",
    title: "Execution",
    subtitle: "German Tech Factory & On-Site Precision",
    description: "Skilled workforce brings plans to life with quality checks and timeline management. Modular joinery is crafted in our German-tech factory with site engineer supervision.",
    highlights: ["15 Skilled Carpenters & 3 Supervisors", "German Technology Manufacturing", "Milestone WhatsApp Photo Updates"],
    deliverables: "Precision Factory Production & Civil Assembly"
  },
  {
    id: 4,
    number: "04",
    title: "Handover",
    subtitle: "Thorough Inspections & Warranty Tag",
    description: "Thorough inspections ensure quality standards before complete project delivery. Final snag list resolution, deep cleaning, and formal 1-year warranty card handover.",
    highlights: ["100-Point Quality Inspection", "Deep Site Cleaning & Polishing", "1-Year Warranty Card Issued"],
    deliverables: "Ready-to-Move Home & Formal Snag Closing"
  }
];

export const process = processStepsData.map((step) => ({
  title: step.title,
  copy: step.description
}));

export const faqs = [
  {
    q: "How much does a 3 BHK interior cost in Noida or Greater Noida?",
    a: "A 3 BHK interior in Noida or Greater Noida typically costs Rs. 8 Lakhs to Rs. 14 Lakhs for standard essentials (modular kitchen, wardrobes, false ceiling, basic decor). Premium architectural projects range between Rs. 15 Lakhs and Rs. 25 Lakhs+."
  },
  {
    q: "What is the contact number and official email for ATS Interior Solutions?",
    a: "You can reach ATS Interior Solutions directly at +91 8448774055 (or +91 98737 57487) and via email at info@atsinteriorsolution.com for instant on-site consultation and measurement."
  },
  {
    q: "Who leads the team at ATS Interior Solutions?",
    a: "ATS Interior Solutions is led by Founder & Managing Director Mr. Manoj Pal, Head of Operations Mr. Krishan Pal (MBA, 16+ yrs exp), Lead Architect Ar. Nishchay Channana (Qualified B.Arch), Senior Designer Mr. Mohit Kumar, and 15 skilled carpenters supported by 3 site supervisors."
  },
  {
    q: "Does ATS Interior Solutions offer Vastu-compliant interior design and construction?",
    a: "Yes! We offer complete Vastu-compliant spatial planning and construction based on client preferences, optimizing main entrance orientation, Pooja room placement, kitchen water/fire element alignment, and master bedroom positioning."
  },
  {
    q: "What materials are used for modular kitchens and wardrobes?",
    a: "We use 100% IS 710 Boiling Water Proof (BWP) Marine Plywood for wet kitchen sink zones, Action Tesa HDHMR (850 kg/m³) for bedroom storage, Blum/Häfele/Hettich soft-close hardware, 2.0mm high-gloss Acrylic, and Dekton sintered porcelain countertops."
  },
  {
    q: "Does ATS Interior Solutions have an in-house manufacturing factory?",
    a: "Yes! We operate a state-of-the-art manufacturing facility equipped with advanced German technology, ensuring millimetre CNC precision, zero vendor delays, and 100% in-house quality control."
  },
  {
    q: "How long does home interior execution take?",
    a: "Standard modular kitchen and wardrobe projects take 3 to 5 weeks. Turnkey 3BHK/4BHK home interiors take 6 to 12 weeks, managed under strict milestone schedules with weekly WhatsApp photo updates."
  },
  {
    q: "What warranty and after-sales service is provided?",
    a: "Every project comes with a formal 1-year warranty card covering joinery, hardware alignment, and manufacturing defects, backed by a dedicated after-sales support team."
  },
  {
    q: "Can I view photo-realistic 3D renders before starting site work?",
    a: "Yes! Stage 2 of our working process includes detailed 3D floor plan renders, material mood boards, and finish samples so you approve exact visual aesthetics before site execution."
  },
  {
    q: "What are the 4 stages of the ATS Working Process?",
    a: "Our process follows 4 clear phases: 1. Consultation (requirements & measurement), 2. Concept & Design (3D renders & quote), 3. Execution (German factory build & site assembly), and 4. Handover (100-point inspection & warranty card)."
  },
  {
    q: "Which areas in Delhi NCR does ATS Interior Solutions cover?",
    a: "We provide hyperlocal services across Greater Noida (Pari Chowk, Gaur City, Jaypee Greens, Omega), Noida (Sector 18, 50, 62, 77, 137, Expressway), Ghaziabad (Indirapuram, Vaishali, Raj Nagar Ext), and Delhi NCR (Dwarka, Saket, Vasant Kunj)."
  },

  // --- HINDI VOICE SEARCH & AEO FAQS ---
  {
    q: "[Hindi] ATS Interior Solutions ka phone number aur email id kya hai?",
    a: "ATS Interior Solutions ka official contact number +91 8448774055 (ya +91 98737 57487) aur email id info@atsinteriorsolution.com hai. Aap direct WhatsApp par bhi baat kar sakte hain."
  },
  {
    q: "[Hindi] Noida mein 3 BHK interior ka kharcha kitna hota hai?",
    a: "Noida aur Greater Noida mein 3 BHK flat ke interior ka kharcha lagbhag Rs. 8 Lakh se Rs. 14 Lakh tak aata hai basic modular kitchen, wardrobes, aur false ceiling ke saath."
  },
  {
    q: "[Hindi] Greater Noida mein sabse accha interior designer kaun hai?",
    a: "ATS Interior Solutions (Founder Mr. Manoj Pal) Greater Noida, Noida, aur Ghaziabad mein high-quality modular kitchen, Vastu planning, aur full home interior design ke liye sabse bharosemand company hai."
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
    optionA: "Acrylic: High mirror gloss, 2.0mm PMMA solid sheet, UV-resistant, ultra-premium aesthetics.",
    optionB: "Laminate: Anti-scratch matte/suede/gloss textures, highly durable, economical."
  },
  {
    title: "BWP Plywood vs HDMR Board",
    factor: "Moisture & Structural Strength",
    optionA: "BWP Plywood (IS 710): 100% boiling-water-proof (72h test), ideal for wet kitchen sink zones.",
    optionB: "Action Tesa HDHMR (850 kg/m³): High density moisture resistant, smooth surface for bedroom wardrobes."
  },
  {
    title: "Dekton Porcelain vs Quartz Countertop",
    factor: "Heat & Stain Resistance",
    optionA: "Sintered Porcelain (Dekton): 1200°C fireproof, 100% stain-proof, Mohs 8-9 hardness for luxury islands.",
    optionB: "Engineered Quartz (Kalingastone): Non-porous elegance, scratch-resistant, 15-20mm heavy duty durability."
  },
  {
    title: "PU Architectural Lacquer vs Laminate",
    factor: "Seamless Aesthetics & Custom RAL Colors",
    optionA: "PU Lacquer: Multi-coat hand-rubbed finish, zero edge-tape joint lines, unlimited custom color options.",
    optionB: "High-Pressure Laminate: Factory machine-pressed, budget-friendly, scratch-resistant woodgrain finishes."
  },
  {
    title: "Blum Legrabox vs Standard Channels",
    factor: "Hardware Motion & Load Capacity",
    optionA: "Blum Legrabox / Aventos: German engineered, 65kg heavy-duty load rating, 100,000 cycle lifetime warranty.",
    optionB: "Telescopic Soft-Close Channels: Smooth everyday drawer glides, soft-close dampening, economical choice."
  },
  {
    title: "CPVC 10-Bar Plumbing vs Regular PVC",
    factor: "Pressure & Leakage Safety",
    optionA: "CPVC Class 1 (10-Bar Tested): 24-hour pressure tested, heat-resistant up to 93°C, zero joint leakage.",
    optionB: "Standard PVC Piping: Suitable for low-pressure drainage lines, cost-effective for utility zones."
  }
];

export const usp = [
  { title: "Factory-direct materials", copy: "Clear material options, branded hardware (Hettich/Hafele) and transparent board grade selection.", icon: Sparkles },
  { title: "In-house design team", copy: "Led by Mr. Manoj Pal & senior architects for 3D renders and execution.", icon: Home },
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

import { premiumLocations } from "./locations50";
import { longtailKeywords, getLongtailKeywordBySlug } from "./longtailKeywords";

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

  const premiumLocationPages = services.flatMap((service) =>
    premiumLocations.map((loc) => ({
      slug: `${service.slug}-${loc.slug}`,
      service,
      city: cities.find((c) => c.name.toLowerCase().includes(loc.city.toLowerCase())) ?? cities[1],
      area: loc.slug,
      type: "area" as const
    }))
  );

  const keywordPages = longtailKeywords.map((kw) => ({
    slug: kw.slug,
    service: services.find((s) => s.slug === "interior-design") || services[0],
    city: cities.find((c) => c.name.toLowerCase().includes(kw.city.toLowerCase())) ?? cities[1],
    area: kw.location,
    type: "keyword" as const
  }));

  // Unique slugs map to prevent duplicates
  const allPages = [...servicePages, ...cityPages, ...areaPages, ...premiumLocationPages, ...keywordPages];
  const seen = new Set<string>();
  return allPages.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}

export function getLandingPage(slug: string) {
  return getLandingPages().find((page) => page.slug === slug);
}

export function whatsappHref(message?: string) {
  const basePrefix = "Hi ATS Team, I visited your website and I am interested in your services.";
  if (!message) return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(basePrefix)}`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`${basePrefix}\n\nInquiry Details: ${message}`)}`;
}

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/team", label: "Team" },
  { href: "/locations", label: "Locations" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/cost-calculator", label: "Cost" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" }
];

export { Phone };

export const serviceSubtypes: Record<string, string[]> = {
  "interior-design": ["Turnkey 3BHK/4BHK interior", "Bare-shell penthouse styling", "Golf villa interior", "Luxury PU lacquer & acrylic joinery", "Full home renovation"],
  "modular-kitchen": ["German tandem island kitchen", "Glass & PU shutter kitchen", "Sintered porcelain Dekton kitchen", "L-shaped & U-shaped acrylic kitchen", "Parallel chef kitchen"],
  "civil-construction": ["Structural alterations & brickwork", "CPVC 10-bar plumbing overhaul", "FRLS electrical 16A/20A rewiring", "Italian marble & vitrified flooring", "Waterproofing & elevation facade"],
  "false-ceiling": ["Living room POP cove ceiling", "Bedroom layered ceiling", "Magnetic track light ceiling", "Gypsum acoustic ceiling", "LED cove trough ceiling"],
  wardrobe: ["Dual-tone acrylic sliding wardrobe", "Floor-to-ceiling walk-in wardrobe", "Hinged PU lacquer wardrobe", "Loft storage units", "Kids room ergonomic storage"],
  bathroom: ["Luxury vanity unit", "CPVC plumbing & shower enclosure", "Large format slab tiling", "Jaquar / Kohler sanitary fitments", "Complete bathroom overhaul"],
  "office-interior": ["Managing Director cabin", "Corporate open workstation", "Reception lounge", "Conference room", "Retail showroom interior"]
};

export const pricingTiers = [
  { tier: "Essential Luxury", range: "Rs. 1,200 - 1,800/sqft", includes: "Interiors starting from Rs. 10 Lakhs; Modular Kitchens from Rs. 5 Lakhs using Action Tesa HDHMR, 1.0mm laminate, Hettich soft-close hardware." },
  { tier: "Premium Architectural", range: "Rs. 1,800 - 3,500/sqft", includes: "Interiors Rs. 25 Lakhs to Rs. 60 Lakhs; Kitchens Rs. 10 Lakhs to Rs. 25 Lakhs using IS 710 BWP marine plywood, 2.0mm acrylic, Blum Legrabox." },
  { tier: "Ultra Luxury Penthouse & Villa", range: "Rs. 3,500 - 7,000+/sqft", includes: "Custom Fit-outs Rs. 60 Lakhs to Rs. 1.5 Crore+; German Island Kitchens Rs. 25 Lakhs to Rs. 50 Lakhs+ featuring PU Lacquer, Dekton sintered porcelain, motorized Aventos." }
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
