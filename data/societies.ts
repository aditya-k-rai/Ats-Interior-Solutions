export interface SocietyProject {
  slug: string;
  name: string;
  sector: string;
  city: "Noida" | "Greater Noida" | "Greater Noida West";
  zone: string;
  propertyType: string;
  propertyPrice: string;
  sqftRange: string;
  interiorBudgetRange: string;
  kitchenBudgetRange: string;
  turnaroundTime: string;
  heroImage: string;
  galleryImages: string[];
  workDoneTitle: string;
  workDoneSummary: string;
  scopeOfWork: string[];
  materialsUsed: {
    substrate: string;
    shutters: string;
    hardware: string;
    countertop: string;
    lighting: string;
  };
  clientStory: {
    clientName: string;
    bhk: string;
    quote: string;
    rating: number;
  };
  societyHighlights: string[];
  faqs: { q: string; a: string }[];
}

export const societiesData: SocietyProject[] = [
  {
    slug: "kalpataru-vista-sector-128-noida",
    name: "Kalpataru Vista",
    sector: "Sector 128",
    city: "Noida",
    zone: "Noida Expressway Corridor",
    propertyType: "Golf-Facing 3BHK & 4BHK Sky Mansions",
    propertyPrice: "₹5.4 Cr – ₹14.5 Cr",
    sqftRange: "3,000 – 4,200 sq.ft.",
    interiorBudgetRange: "₹25L – ₹85L+",
    kitchenBudgetRange: "₹10L – ₹22L",
    turnaroundTime: "10 to 14 weeks",
    heroImage: "/images/work/tv-unit-living-1.jpg",
    galleryImages: [
      "/images/work/tv-unit-living-1.jpg",
      "/images/work/modular-kitchen-1.jpg",
      "/images/work/wardrobe-acrylic-blue.jpg",
      "/images/work/owner-engineer-cabin.jpg"
    ],
    workDoneTitle: "Bare-Shell 4BHK Turnkey Interior & German Blum Island Kitchen",
    workDoneSummary: "ATS Interior Solutions executed complete bare-shell architectural fit-outs for a 3,800 sq.ft. golf-facing apartment at Kalpataru Vista. Works included customized Italian marble flooring integration, seamless gypsum ceiling with magnetic track lighting, full IS 710 marine ply woodwork, and an imported Blum Aventos handleless kitchen.",
    scopeOfWork: [
      "Civil layout alterations & acoustic wall panelling in drawing lounge",
      "True Gola handleless modular kitchen with Blum Servo-Drive motorized lift systems",
      "Kalingastone Calacatta Quartz island breakfast counter with mitered waterfall edge",
      "Floor-to-ceiling master walk-in wardrobe with lacquered glass and sensor LED profiles",
      "False ceiling with Gyproc moisture-resistant boards and magnetic slimline track channels",
      "Smart automation conduit wiring with 4.0 sq.mm dedicated lines for heavy appliances"
    ],
    materialsUsed: {
      substrate: "100% Calibrated IS 710 Marine Grade BWP Plywood (Boiling Water Proof)",
      shutters: "2.0mm High-Gloss PMMA Acrylic + Multi-Coat Matte PU Architectural Lacquer",
      hardware: "Blum (Austria) Legrabox Drawers & Aventos HF Motorized Bi-Fold Lifts",
      countertop: "20mm Kalingastone Engineered Quartz with 40mm Mitered Edge",
      lighting: "24V DC IP65 Linear LED Extrusions (3000K Warm White, CRI >92)"
    },
    clientStory: {
      clientName: "Mr. Rajeev Singhania (VP, Global Tech)",
      bhk: "4 BHK Luxury Residence (Tower B, Kalpataru Vista)",
      quote: "Manoj Pal & his engineering team handled our bare-shell unit with precision. The woodwork finish and Blum motorized kitchen feel like an ultra-luxury European penthouse.",
      rating: 5
    },
    societyHighlights: [
      "Overlooking 18-hole Graham Cooke signature golf course",
      "Low-density dual towers with 11-foot floor-to-ceiling clear heights",
      "Strict society execution norms requiring certified MEP and zero-debris protocols"
    ],
    faqs: [
      {
        q: "What is the typical interior cost for a 4BHK at Kalpataru Vista Sector 128?",
        a: "A full turnkey interior for a 3,000–4,200 sq.ft. 4BHK at Kalpataru Vista ranges from ₹28 Lakhs to ₹65 Lakhs for premium specifications (HDHMR/BWP, Blum hardware, Quartz kitchen, designer ceilings). Bespoke luxury executions with Italian marble and PU lacquer range from ₹65L to ₹1.2 Cr+."
      },
      {
        q: "How does ATS handle society interior approvals at Sector 128?",
        a: "ATS Interior Solutions handles all society permissions, structural core-cutting NOCs, freight elevator bookings, and dust-barrier installations in full compliance with Kalpataru Vista estate management."
      }
    ]
  },
  {
    slug: "mahagun-manorialle-sector-128-noida",
    name: "Mahagun Manorialle",
    sector: "Sector 128",
    city: "Noida",
    zone: "Noida Expressway Corridor",
    propertyType: "40-Storey Ultra-Luxury Condominiums & Duplex Penthouses",
    propertyPrice: "₹6.5 Cr – ₹42.0 Cr",
    sqftRange: "3,400 – 6,000 sq.ft.",
    interiorBudgetRange: "₹35L – ₹1.5 Cr+",
    kitchenBudgetRange: "₹12L – ₹28L",
    turnaroundTime: "12 to 16 weeks",
    heroImage: "/images/work/modular-kitchen-1.jpg",
    galleryImages: [
      "/images/work/modular-kitchen-1.jpg",
      "/images/work/tv-unit-living-2.jpg",
      "/images/work/bedroom-kids.jpg",
      "/images/work/owner-architect-discussion.jpg"
    ],
    workDoneTitle: "4BHK Contemporary Neoclassical Interior & Sintered Stone Modular Kitchen",
    workDoneSummary: "Engineered high-end turnkey interiors for an expansive 4,800 sq.ft. residence at Mahagun Manorialle. Features include custom fluted wall cladding, concealed pivot doors, Dekton sintered stone kitchen countertops, and motorized sliding wardrobes with Häfele hardware.",
    scopeOfWork: [
      "Neoclassical wall boiserie moulding and PU matte finish wall panelling",
      "German modular kitchen with Häfele Matrix Box drawers and built-in Siemens appliances",
      "Sintered porcelain 12mm scratch-proof and heat-proof worktop with undermount sink",
      "Master bedroom walk-in closet with tinted glass fluted shutters and internal motion sensors",
      "Living room architectural TV feature wall with Italian Statuario marble back panel",
      "Hydrostatic 10-bar pressure tested CPVC plumbing and soundproof drain wrapping"
    ],
    materialsUsed: {
      substrate: "Action Tesa HDHMR (850 kg/m³) + IS 710 Marine Plywood for wet zones",
      shutters: "Multi-Coat Polyurethane (PU) Lacquer (RAL 9010 Warm White & Charcoal)",
      hardware: "Häfele (Germany) Matrix Box S35 Drawers & Free Fold Lift-up Mechanisms",
      countertop: "Dekton Sintered Porcelain Ceramic Slab (12mm Slimline)",
      lighting: "Architectural Dimmable COB Spotlights & Recessed Magnetic Profiles"
    },
    clientStory: {
      clientName: "Dr. Arvind & Sunita Kapoor",
      bhk: "4 BHK Golf View Residence (Mahagun Manorialle)",
      quote: "ATS delivered flawless joinery with zero visible edge joints. The PU lacquer finish on our wardrobes and kitchen shutters is truly world-class.",
      rating: 5
    },
    societyHighlights: [
      "Iconic 40-storey skyscraper with panoramic 180-degree golf vistas",
      "Double-height sky lounges and private elevator access",
      "Requires high structural engineering standards for high-rise ceiling wind resistance"
    ],
    faqs: [
      {
        q: "Can ATS integrate built-in appliances (Bosch/Siemens/Miele) in Mahagun Manorialle kitchens?",
        a: "Yes. ATS designs exact factory CNC carcasses tailored to the precise ventilation and electrical specs of Siemens, Bosch, Miele, and Gaggenau built-in ovens, warming drawers, hobs, and dishwashers."
      }
    ]
  },
  {
    slug: "m3m-the-cullinan-sector-94-noida",
    name: "M3M The Cullinan",
    sector: "Sector 94",
    city: "Noida",
    zone: "Noida-Delhi Gateway Corridor",
    propertyType: "Ultra-Luxury Mixed-Use Sky Suites & Penthouses",
    propertyPrice: "₹7.8 Cr – ₹22.0 Cr",
    sqftRange: "3,200 – 5,800 sq.ft.",
    interiorBudgetRange: "₹30L – ₹1.2 Cr+",
    kitchenBudgetRange: "₹12L – ₹30L",
    turnaroundTime: "10 to 14 weeks",
    heroImage: "/images/work/tv-unit-living-2.jpg",
    galleryImages: [
      "/images/work/tv-unit-living-2.jpg",
      "/images/work/modular-kitchen-4.jpg",
      "/images/work/wardrobe-acrylic-blue.jpg",
      "/images/work/founder-manoj-sharma.jpg"
    ],
    workDoneTitle: "Bespoke Modern Minimalist Penthouse Styling & Island Bar Counter",
    workDoneSummary: "Designed and executed a modern luxury interior fit-out for high-profile clients at M3M The Cullinan. Integrated a custom wine lounge, backlit onyx bar counter, lacquered glass Italian wardrobe suites, and a parallel island modular kitchen.",
    scopeOfWork: [
      "Custom backlit Brazilian quartzite feature wall with brass inlay profiles",
      "Parallel luxury modular kitchen with integrated breakfast bar and rolling pantry",
      "Acoustically treated private home theatre lounge with fabric stretch panels",
      "Smart touch-sensitive concealed switchboards and automated curtain tracks",
      "Complete bathroom vanity makeovers with seamless Corian solid surfaces"
    ],
    materialsUsed: {
      substrate: "IS 710 Gurjan Core BWP Plywood + High-Density Polyurethane Composites",
      shutters: "Lacquered Back-Painted Toughened Glass on Aluminum Profile Frames",
      hardware: "Blum Tip-On Mechanical Push-to-Open & Soft-Close Concealed Hinges",
      countertop: "Brazilian Quartzite + Kalingastone Composite Quartz (20mm)",
      lighting: "Philips Smart WiZ Tunable LED Strips & Concealed Cove Troughs"
    },
    clientStory: {
      clientName: "Vikram & Tanya Mehra",
      bhk: "5 BHK Luxury Sky Suite (M3M The Cullinan)",
      quote: "The seamless glass wardrobe shutters and the island bar console created by ATS transformed our apartment into an architectural showpiece.",
      rating: 5
    },
    societyHighlights: [
      "Direct 0-km connectivity to South Delhi via Kalindi Kunj bridge",
      "Unobstructed views of the Yamuna riverfront and Delhi skyline",
      "5-star concierge services requiring low-noise dustless installation tools"
    ],
    faqs: [
      {
        q: "What is the estimated cost of an island modular kitchen at Sector 94?",
        a: "An island modular kitchen with built-in tall pantry, quartz waterfall island, and Blum tandem organizers costs between ₹8.5 Lakhs and ₹22 Lakhs depending on shutter finishes (Acrylic, PU Lacquer, or Sintered Porcelain)."
      }
    ]
  },
  {
    slug: "ats-knightsbridge-sector-124-noida",
    name: "ATS Knightsbridge",
    sector: "Sector 124",
    city: "Noida",
    zone: "Noida Expressway Corridor",
    propertyType: "Super-Luxury Sky Mansions (1 Residence per Floor)",
    propertyPrice: "₹7.5 Cr – ₹16.0 Cr+",
    sqftRange: "4,000 – 7,000 sq.ft.",
    interiorBudgetRange: "₹40L – ₹1.8 Cr+",
    kitchenBudgetRange: "₹15L – ₹35L",
    turnaroundTime: "14 to 18 weeks",
    heroImage: "/images/work/tv-unit-living-3.jpg",
    galleryImages: [
      "/images/work/tv-unit-living-3.jpg",
      "/images/work/modular-kitchen-2.jpg",
      "/images/work/wardrobe-site-1.jpg",
      "/images/work/owner-engineer-cabin.jpg"
    ],
    workDoneTitle: "6,000 sq.ft. Sky Mansion Turnkey Architecture & Dual-Kitchen Fit-out",
    workDoneSummary: "Executed an end-to-end luxury fit-out for a full-floor sky mansion at ATS Knightsbridge. The project features a 'Show Kitchen' with sintered porcelain claddings paired with a heavy-duty 'Wet Utility Kitchen' using 100% IS 710 marine plywood.",
    scopeOfWork: [
      "Dual kitchen planning: Dry Show Kitchen with island + Heavy Wet Kitchen",
      "Grand master suite with 25-foot custom walk-in wardrobe and dressing island",
      "3.6-meter high ceiling suspensions with Saint-Gobain Gyproc false ceiling",
      "Custom book-matched walnut veneer paneling across formal foyer and dining room",
      "Dedicated servant quarter and utility storage optimization"
    ],
    materialsUsed: {
      substrate: "100% Gurjan Face IS 710 Marine Grade Plywood",
      shutters: "Natural American Walnut Veneer + Sintered Porcelain Shutter Faces",
      hardware: "Blum (Austria) Legrabox & Aventos Servo-Drive Lift Systems",
      countertop: "20mm Silestone Engineered Quartz (Spain)",
      lighting: "Architectural Low-Glare Downlights with Honeycomb Louvers"
    },
    clientStory: {
      clientName: "Shri R. K. Goel (Industrialist)",
      bhk: "6,000 sq.ft. Single-Floor Mansion (ATS Knightsbridge)",
      quote: "Manoj Pal's team showed immense technical depth in handling large 6,000 sq.ft. layouts. Every detail, from MEP conduits to veneer matching, was executed without compromise.",
      rating: 5
    },
    societyHighlights: [
      "Five 47-storey iconic towers with single apartment per floor privacy",
      "360-degree panoramic skyline views of Delhi and Noida",
      "Grand 3.6-meter floor-to-floor structural clearances"
    ],
    faqs: [
      {
        q: "Why is a dual kitchen (Wet + Dry) recommended for ATS Knightsbridge apartments?",
        a: "In large 4,000–7,000 sq.ft. luxury apartments, a Dry Show Kitchen acts as an aesthetic entertaining hub for the family, while the heavy spice cooking and dishwashing are contained in an IS 710 BWP wet kitchen."
      }
    ]
  },
  {
    slug: "county-107-sector-107-noida",
    name: "County 107",
    sector: "Sector 107",
    city: "Noida",
    zone: "Central & Expressway Hub",
    propertyType: "IGBC Platinum Certified Ultra-Luxury Residences",
    propertyPrice: "₹4.2 Cr – ₹28.6 Cr",
    sqftRange: "3,500 – 6,500 sq.ft.",
    interiorBudgetRange: "₹25L – ₹75L+",
    kitchenBudgetRange: "₹9L – ₹20L",
    turnaroundTime: "8 to 12 weeks",
    heroImage: "/images/work/modular-kitchen-3.jpg",
    galleryImages: [
      "/images/work/modular-kitchen-3.jpg",
      "/images/work/tv-unit-living-1.jpg",
      "/images/work/wardrobe-acrylic-blue.jpg",
      "/images/work/owner-architect-discussion.jpg"
    ],
    workDoneTitle: "Platinum Green Interior Fit-Out & Sustainable Hardwood Joinery",
    workDoneSummary: "Completed turnkey green interior styling for a 4BHK apartment at County 107. Followed eco-friendly low-VOC paints, sustainable HDHMR boards, and energy-efficient LED cove lighting systems.",
    scopeOfWork: [
      "Low-VOC Asian Paints Royale Aspira painting & eco-friendly false ceiling",
      "U-shaped acrylic modular kitchen with rolling shutter tall pantry and Blum tandem boxes",
      "Master bedroom acoustic timber slatted headboard with integrated nightstands",
      "Kids study room with ergonomic adjustable desks and pastel wardrobe shutters",
      "Balcony vertical green wall framing with automated drip irrigation channels"
    ],
    materialsUsed: {
      substrate: "Action Tesa HDHMR E1 Emission Grade + IS 710 BWP Plywood",
      shutters: "Anti-Fingerprint Super Matte Laminate + 2.0mm PMMA Acrylic",
      hardware: "Hettich InnoTech Atira Drawers & Sensys Soft-Close Hinges",
      countertop: "Kalingastone Premium Quartz (18mm)",
      lighting: "Energy-Efficient Low-Voltage LED Profiles (CRI >90)"
    },
    clientStory: {
      clientName: "Anil & Priya Sachdeva",
      bhk: "4 BHK Platinum Residence (County 107)",
      quote: "ATS understood the sustainable green theme of County 107 perfectly. The low-VOC finishes and seamless kitchen design made our move-in effortless.",
      rating: 5
    },
    societyHighlights: [
      "India's first residential project with an elevated aerial walkway",
      "Zero vehicular movement on ground level with pristine landscape gardens",
      "Strict green building compliance requiring certified non-toxic adhesives"
    ],
    faqs: [
      {
        q: "What materials does ATS use for eco-friendly green interiors at County 107?",
        a: "We utilize E1/E0 low-emission HDHMR panels, water-based non-toxic adhesives (PUR/PVAc), low-VOC PU polishes, and 100% recyclable aluminum Gola handleless profiles."
      }
    ]
  },
  {
    slug: "ace-parkway-sector-150-noida",
    name: "ACE Parkway",
    sector: "Sector 150",
    city: "Noida",
    zone: "Sector 150 Sports City",
    propertyType: "Modern Art-Deco High-Rise Residences",
    propertyPrice: "₹1.8 Cr – ₹5.5 Cr",
    sqftRange: "1,750 – 3,200 sq.ft.",
    interiorBudgetRange: "₹14L – ₹40L+",
    kitchenBudgetRange: "₹5L – ₹14L",
    turnaroundTime: "6 to 10 weeks",
    heroImage: "/images/work/modular-kitchen-1.jpg",
    galleryImages: [
      "/images/work/modular-kitchen-1.jpg",
      "/images/work/tv-unit-living-1.jpg",
      "/images/work/bedroom-kids.jpg",
      "/images/work/founder-manoj-sharma.jpg"
    ],
    workDoneTitle: "Turnkey 3BHK Art-Deco Interior & Gloss Acrylic Modular Kitchen",
    workDoneSummary: "Executed comprehensive turnkey woodwork and false ceiling for a 3BHK flat at ACE Parkway Sector 150. Focused on space-saving joinery, modern metallic blue accents, and an L-shaped acrylic kitchen.",
    scopeOfWork: [
      "Living room Art-Deco TV panel with fluted louvers and LED backlight",
      "L-shaped acrylic gloss kitchen with quartz countertop and spice pull-outs",
      "Floor-to-ceiling master wardrobe with sliding aluminum profile shutters",
      "Kids bedroom bunk-bed storage combo with integrated study desk",
      "Full house Royale painting and moisture-sealed false ceiling"
    ],
    materialsUsed: {
      substrate: "Action Tesa HDHMR + IS 303 BWR Plywood",
      shutters: "High-Gloss Acrylic (1.5mm) + Soft Suede Laminates",
      hardware: "Hettich Soft-Close Channels & Wide-Angle Concealed Hinges",
      countertop: "Jet Black Granite / Kalingastone Quartz",
      lighting: "Warm White COB Spotlights & T5 LED Battens"
    },
    clientStory: {
      clientName: "Deepak Verma (Senior Software Architect)",
      bhk: "3 BHK Apartment (ACE Parkway, Sector 150)",
      quote: "ATS completed our 3BHK woodwork in 7 weeks flat. The pricing was completely transparent with zero last-minute additions.",
      rating: 5
    },
    societyHighlights: [
      "Overlooks 42-acre Shaheed Bhagat Singh mega green park",
      "Sports-themed development with 51 active sports facilities",
      "High possession velocity in Sector 150 requiring quick-turnaround fit-outs"
    ],
    faqs: [
      {
        q: "What is the cost of full home interior for a 3BHK at ACE Parkway Sector 150?",
        a: "A turnkey 3BHK interior at ACE Parkway costs between ₹12 Lakhs and ₹22 Lakhs for complete modular kitchen, 3 wardrobes, TV console, POP false ceiling, electrical fixtures, and painting."
      }
    ]
  },
  {
    slug: "prateek-canary-sector-150-noida",
    name: "Prateek Canary",
    sector: "Sector 150",
    city: "Noida",
    zone: "Sector 150 Sports City",
    propertyType: "Ultra-Luxury Low-Density Duplexes & Penthouses",
    propertyPrice: "₹2.8 Cr – ₹9.5 Cr",
    sqftRange: "2,550 – 6,100 sq.ft.",
    interiorBudgetRange: "₹20L – ₹70L+",
    kitchenBudgetRange: "₹8L – ₹18L",
    turnaroundTime: "8 to 12 weeks",
    heroImage: "/images/work/tv-unit-living-2.jpg",
    galleryImages: [
      "/images/work/tv-unit-living-2.jpg",
      "/images/work/modular-kitchen-4.jpg",
      "/images/work/wardrobe-acrylic-blue.jpg",
      "/images/work/owner-engineer-cabin.jpg"
    ],
    workDoneTitle: "Duplex Penthouse Interior Architecture & Open Island Kitchen",
    workDoneSummary: "Crafted a bespoke luxury interior for a 4BHK duplex at Prateek Canary. Built a double-height chandelier ceiling grid, floating cantilever wooden staircase paneling, and an open island kitchen with built-in wine chiller space.",
    scopeOfWork: [
      "Double-height living room acoustic paneling and decorative POP punning",
      "Gola profile handleless island kitchen with built-in chimney and induction hob",
      "Custom cantilever wooden staircase cladding with tempered glass railing",
      "Walk-in master wardrobe with bronze-tinted glass and internal LED sensors",
      "Terrace garden wooden deck seating with weather-resistant WPC panels"
    ],
    materialsUsed: {
      substrate: "IS 710 Marine Grade BWP Plywood + HDHMR",
      shutters: "Matte PU Lacquer + Sintered Ceramic Slim Fronts",
      hardware: "Blum Tandembox Drawers & Aventos HF Lift Mechanisms",
      countertop: "20mm Kalingastone Calacatta Gold Quartz",
      lighting: "Magnetic Track Lights + Dimmable Chandelier Controls"
    },
    clientStory: {
      clientName: "Sanjay & Meenakshi Bansal",
      bhk: "4 BHK Duplex Residence (Prateek Canary)",
      quote: "The double-height living room execution and island kitchen by ATS Interior Solutions are stunning. Manoj Pal supervised the site personally.",
      rating: 5
    },
    societyHighlights: [
      "Sprawling low-density development across 12.55 acres with only 664 units",
      "Features private rooftop party decks and panoramic sports city views"
    ],
    faqs: [
      {
        q: "Can ATS design double-height ceilings for Prateek Canary duplexes?",
        a: "Yes. ATS specializes in engineered steel suspension frameworks for double-height ceilings, acoustic wall paneling, and statement chandelier installations."
      }
    ]
  },
  {
    slug: "godrej-woods-sector-43-noida",
    name: "Godrej Woods",
    sector: "Sector 43",
    city: "Noida",
    zone: "Central Noida Luxury Hub",
    propertyType: "Forest-Themed Luxury Condominiums",
    propertyPrice: "₹2.5 Cr – ₹8.5 Cr",
    sqftRange: "2,100 – 3,800 sq.ft.",
    interiorBudgetRange: "₹18L – ₹50L+",
    kitchenBudgetRange: "₹7L – ₹16L",
    turnaroundTime: "8 to 11 weeks",
    heroImage: "/images/work/modular-kitchen-2.jpg",
    galleryImages: [
      "/images/work/modular-kitchen-2.jpg",
      "/images/work/tv-unit-living-1.jpg",
      "/images/work/bedroom-kids.jpg",
      "/images/work/owner-architect-discussion.jpg"
    ],
    workDoneTitle: "Nature-Inspired Biophilic Interior Styling & Modular Kitchen",
    workDoneSummary: "Designed contemporary biophilic home interiors for a 3BHK residence at Godrej Woods. Incorporated natural oak veneer panels, warm fluted wooden accents, and a U-shaped modular kitchen with quartz countertop.",
    scopeOfWork: [
      "Natural oak wood veneer wall panelling with matte PU sealer polish",
      "U-shaped modular kitchen with Häfele soft-close tandem drawers",
      "Fitted master wardrobe with synchronized sliding doors and top lofts",
      "Living room false ceiling with continuous ambient warm LED cove",
      "Balcony timber look decking with weather-sealed composite panels"
    ],
    materialsUsed: {
      substrate: "Action Tesa HDHMR + IS 710 BWP Plywood",
      shutters: "Natural Oak Veneer + Anti-Scratch High Gloss Acrylic",
      hardware: "Häfele Metalla Soft-Close Hinges & Matrix Box Drawers",
      countertop: "Kalingastone White Quartz (18mm)",
      lighting: "3000K Warm White Linear Profiles & Spotlights"
    },
    clientStory: {
      clientName: "Rohit & Ananya Sen",
      bhk: "3 BHK Forest View Residence (Godrej Woods)",
      quote: "The warm wooden tones ATS created complement the forest green views of Godrej Woods beautifully. Flawless workmanship.",
      rating: 5
    },
    societyHighlights: [
      "Over 600 mature trees and dense urban forest canopy",
      "Adjacent to Sector 43 Golf Course and rapid Dadri Main Road connectivity"
    ],
    faqs: [
      {
        q: "What is the cost of 3BHK interior at Godrej Woods Sector 43?",
        a: "A full 3BHK interior package at Godrej Woods ranges from ₹16 Lakhs to ₹28 Lakhs covering modular kitchen with quartz, 3 wardrobes, living room console, false ceiling, and lighting."
      }
    ]
  },
  {
    slug: "gulshan-dynasty-sector-144-noida",
    name: "Gulshan Dynasty",
    sector: "Sector 144",
    city: "Noida",
    zone: "Noida Expressway Corridor",
    propertyType: "Ultra-Luxury Wellness Homes (4BHK Sky Villas)",
    propertyPrice: "₹5.5 Cr – ₹12.0 Cr",
    sqftRange: "4,700 sq.ft. (Uniform Large Floor Plate)",
    interiorBudgetRange: "₹35L – ₹1.2 Cr+",
    kitchenBudgetRange: "₹12L – ₹28L",
    turnaroundTime: "12 to 16 weeks",
    heroImage: "/images/work/tv-unit-living-1.jpg",
    galleryImages: [
      "/images/work/tv-unit-living-1.jpg",
      "/images/work/modular-kitchen-1.jpg",
      "/images/work/wardrobe-site-1.jpg",
      "/images/work/owner-engineer-cabin.jpg"
    ],
    workDoneTitle: "4,700 sq.ft. Wellness Penthouse Interior & German Island Kitchen",
    workDoneSummary: "Completed luxury interior execution for an expansive 4,700 sq.ft. residence at Gulshan Dynasty. Engineered zero-VOC finishes, high-filtration air duct ceiling integrations, and an imported Blum handleless kitchen.",
    scopeOfWork: [
      "Custom medical-grade low-VOC coatings & antimicrobial surface laminates",
      "German island modular kitchen with Blum Servo-Drive motorized lift units",
      "Grand drawing room TV console with fluted Italian marble and brass inlays",
      "Master walk-in wardrobe with floor-to-ceiling glass shutters and humidity control",
      "Private gym & wellness lounge acoustic wall treatments"
    ],
    materialsUsed: {
      substrate: "Calibrated 100% BWP Marine Plywood IS 710",
      shutters: "Multi-Layer High-Gloss PU Lacquer + Sintered Slim Stone",
      hardware: "Blum Legrabox + Aventos Motorized Lift Systems",
      countertop: "20mm Dekton Sintered Porcelain Ceramic Slab",
      lighting: "Tunable White Circadian Rhythm LED Lighting (2700K – 6500K)"
    },
    clientStory: {
      clientName: "Col. Sanjeev & Madhu Malik",
      bhk: "4 BHK Wellness Suite (Gulshan Dynasty)",
      quote: "ATS understood the high-spec wellness standards of Gulshan Dynasty. The precision of the Blum kitchen and the zero-odor PU paint job were exemplary.",
      rating: 5
    },
    societyHighlights: [
      "Platinum green building with only 2 apartments per floor",
      "Integrated rooftop hydroponic farm and 7-tier wellness infrastructure"
    ],
    faqs: [
      {
        q: "Does ATS support customized home automation and wellness lighting at Gulshan Dynasty?",
        a: "Yes. We integrate smart home automation conduits, DALI dimmable circadian lighting, and concealed air filtration grilles seamlessly into gypsum ceilings."
      }
    ]
  },
  {
    slug: "jaypee-greens-golf-villas-pari-chowk",
    name: "Jaypee Greens Golf Villas",
    sector: "Pari Chowk",
    city: "Greater Noida",
    zone: "Greater Noida Luxury Township",
    propertyType: "Standalone Luxury Golf Villas & Estates",
    propertyPrice: "₹6.1 Cr – ₹40.0 Cr+",
    sqftRange: "4,500 – 10,000 sq.ft.",
    interiorBudgetRange: "₹45L – ₹2.5 Cr+",
    kitchenBudgetRange: "₹15L – ₹35L",
    turnaroundTime: "14 to 20 weeks",
    heroImage: "/images/work/modular-kitchen-4.jpg",
    galleryImages: [
      "/images/work/modular-kitchen-4.jpg",
      "/images/work/tv-unit-living-3.jpg",
      "/images/work/wardrobe-acrylic-blue.jpg",
      "/images/work/founder-manoj-sharma.jpg"
    ],
    workDoneTitle: "Sprawling Golf Villa Civil Renovation & Bespoke German Modular Kitchen",
    workDoneSummary: "Carried out complete structural civil remodeling, floor extensions, and bespoke interior styling for a 6,500 sq.ft. villa overlooking the Jaypee Greens golf course. Built a massive island kitchen, formal drawing room boiserie paneling, and an outdoor BBQ gazebo.",
    scopeOfWork: [
      "Civil layout expansion, structural beam retrofitting, and waterproofing",
      "Huge island modular kitchen with Blum hardware and built-in Gaggenau appliances",
      "Double-height living room neoclassical wall panelling with PU matte finish",
      "5 Ensuite bedroom custom wardrobes with internal jewelry drawers and dressers",
      "Basement home theatre fit-out with acoustic bass traps and starlight ceiling"
    ],
    materialsUsed: {
      substrate: "100% Marine Grade BWP Plywood IS 710 + Calibrated HDHMR",
      shutters: "Multi-Coat PU Lacquer (Custom NCS Palette) + Natural Teak Veneer",
      hardware: "Blum (Austria) Tandembox & Aventos Lift Mechanisms",
      countertop: "20mm Dekton Sintered Stone + Kalingastone Calacatta Quartz",
      lighting: "Architectural Dimmable DALI Spotlights & Waterproof IP67 Balcony LEDs"
    },
    clientStory: {
      clientName: "Mr. Harish Chawla (Managing Director)",
      bhk: "5 BHK Luxury Golf Villa (Jaypee Greens, Pari Chowk)",
      quote: "Manoj Pal took personal ownership of our villa's extensive civil remodeling and interior woodwork. The finish quality rivals top international design houses.",
      rating: 5
    },
    societyHighlights: [
      "452-acre integrated golf township featuring Greg Norman 18-hole course",
      "Private swimming pools, golf cart trails, and ultra-high security gates"
    ],
    faqs: [
      {
        q: "What is the average interior and civil renovation budget for a Jaypee Greens Villa?",
        a: "Villa renovations at Jaypee Greens typically range from ₹40 Lakhs to ₹1.5 Crore+ depending on structural changes, MEP overhaul, imported Italian kitchens, and bespoke woodwork."
      }
    ]
  },
  {
    slug: "godrej-golf-links-the-crest-sector-27-greater-noida",
    name: "Godrej Golf Links (The Crest & Evoke)",
    sector: "Sector 27",
    city: "Greater Noida",
    zone: "Greater Noida Central",
    propertyType: "Bespoke Golf Township Villas & Suites",
    propertyPrice: "₹3.5 Cr – ₹12.0 Cr",
    sqftRange: "2,800 – 4,800 sq.ft.",
    interiorBudgetRange: "₹25L – ₹65L+",
    kitchenBudgetRange: "₹9L – ₹20L",
    turnaroundTime: "10 to 14 weeks",
    heroImage: "/images/work/tv-unit-living-2.jpg",
    galleryImages: [
      "/images/work/tv-unit-living-2.jpg",
      "/images/work/modular-kitchen-1.jpg",
      "/images/work/bedroom-kids.jpg",
      "/images/work/owner-architect-discussion.jpg"
    ],
    workDoneTitle: "Turnkey Luxury Villa Woodwork & Island Modular Kitchen",
    workDoneSummary: "Delivered complete interior architecture for a 4BHK standalone villa at Godrej Golf Links. Included private elevator lobby panelling, island open kitchen, and rooftop entertainment lounge.",
    scopeOfWork: [
      "Living room marble console with fluted charcoal acoustic paneling",
      "Island modular kitchen with Häfele Matrix Box drawers and quartz breakfast bar",
      "Master suite walk-in closet with lacquered glass sliding doors",
      "Kids bedroom customized loft storage with soft-touch pastel laminates",
      "Rooftop terrace lounge with weather-resistant pergola false ceiling"
    ],
    materialsUsed: {
      substrate: "Action Tesa HDHMR + IS 710 BWP Plywood",
      shutters: "2.0mm High-Gloss PMMA Acrylic + Matte PU Lacquer",
      hardware: "Häfele Matrix Box Drawers & Metalla 510 Hinges",
      countertop: "Kalingastone Engineered Quartz (18mm)",
      lighting: "Warm LED Strip Troughs (3000K) + Magnetic Spotlights"
    },
    clientStory: {
      clientName: "Nitin & Rashmi Agarwal",
      bhk: "4 BHK Golf Villa (The Crest, Godrej Golf Links)",
      quote: "The team at ATS Interior Solutions delivered outstanding quality. Our open modular kitchen and wardrobe closets exceeded all expectations.",
      rating: 5
    },
    societyHighlights: [
      "100-acre township built around a 9-hole golf course",
      "Modern clubhouses, private terrace gardens, and low-density enclave layout"
    ],
    faqs: [
      {
        q: "What is the cost of modular kitchen and wardrobe package for a Godrej Golf Links Villa?",
        a: "A comprehensive villa package (Island Kitchen + 4 Wardrobes + TV Consoles + Vanities) ranges from ₹18 Lakhs to ₹35 Lakhs depending on hardware and finish choices."
      }
    ]
  },
  {
    slug: "rise-resort-residences-techzone-4-greater-noida-west",
    name: "Rise Resort Residences",
    sector: "Techzone 4",
    city: "Greater Noida West",
    zone: "Noida Extension High-End Hub",
    propertyType: "Luxury Standalone Resort-Style Villas",
    propertyPrice: "₹2.5 Cr – ₹8.5 Cr",
    sqftRange: "3,000 – 4,800 sq.ft.",
    interiorBudgetRange: "₹20L – ₹55L+",
    kitchenBudgetRange: "₹8L – ₹16L",
    turnaroundTime: "9 to 12 weeks",
    heroImage: "/images/work/modular-kitchen-1.jpg",
    galleryImages: [
      "/images/work/modular-kitchen-1.jpg",
      "/images/work/tv-unit-living-1.jpg",
      "/images/work/wardrobe-site-1.jpg",
      "/images/work/owner-engineer-cabin.jpg"
    ],
    workDoneTitle: "Resort-Style Standalone Villa Interior & Modular Kitchen",
    workDoneSummary: "Engineered high-end woodwork and civil enhancements for a 3,600 sq.ft. villa at Rise Resort Residences. Created an open American-style modular kitchen with rolling pantry, home office study, and basement media room.",
    scopeOfWork: [
      "American open modular kitchen with quartz waterfall counter and tandem organizers",
      "Basement media room acoustic wood slat panelling and concealed ambient lighting",
      "Master bedroom sliding wardrobe with floor-to-ceiling lofts and integrated dresser",
      "Balcony wooden look ceilings with concealed IP65 weather-proof spotlights",
      "Whole-house false ceiling and Asian Paints Royale painting"
    ],
    materialsUsed: {
      substrate: "100% IS 710 BWP Plywood for wet zones + Action Tesa HDHMR",
      shutters: "Anti-Scratch Acrylic Gloss + Suede Finish Textured Laminates",
      hardware: "Hettich InnoTech Atira Drawers & Sensys Soft-Close Hinges",
      countertop: "20mm Kalingastone Quartz with Mitered Edge",
      lighting: "Low-Voltage Linear LEDs (24V) & Dimmable Cove Troughs"
    },
    clientStory: {
      clientName: "Alok & Shweta Srivastava",
      bhk: "4 BHK Villa (Rise Resort Residences)",
      quote: "ATS brought our dream resort villa to life! The basement media room and modular kitchen were crafted with meticulous precision.",
      rating: 5
    },
    societyHighlights: [
      "Car-free ground level with golf carts for internal transport",
      "Personal swimming pools, rolling green lawns, and forest stream features"
    ],
    faqs: [
      {
        q: "Can ATS customize basement entertainment zones for Rise Resort villas?",
        a: "Yes. We design and install acoustic sound-absorbing wall slats, moisture-resistant subfloors, projector ceiling mounts, and bar consoles tailored for basements."
      }
    ]
  },
  {
    slug: "purvanchal-royal-city-chi-5-greater-noida",
    name: "Purvanchal Royal City",
    sector: "Sector Chi 5",
    city: "Greater Noida",
    zone: "Greater Noida South Hub",
    propertyType: "Royal Luxury 3BHK & 4BHK High-Rise Apartments",
    propertyPrice: "₹1.5 Cr – ₹4.5 Cr",
    sqftRange: "1,725 – 3,210 sq.ft.",
    interiorBudgetRange: "₹12L – ₹35L+",
    kitchenBudgetRange: "₹4.5L – ₹12L",
    turnaroundTime: "6 to 9 weeks",
    heroImage: "/images/work/modular-kitchen-4.jpg",
    galleryImages: [
      "/images/work/modular-kitchen-4.jpg",
      "/images/work/tv-unit-living-2.jpg",
      "/images/work/bedroom-kids.jpg",
      "/images/work/founder-manoj-sharma.jpg"
    ],
    workDoneTitle: "Turnkey 3BHK Royal Fit-Out & Heavy-Duty HDMR Modular Kitchen",
    workDoneSummary: "Completed turnkey 3BHK interior woodwork for multiple homeowners at Purvanchal Royal City Chi 5. Delivered heavy-duty oil-resistant modular kitchens, custom bedroom wardrobes, and elegant drawing room TV panels.",
    scopeOfWork: [
      "Heavy-duty U-shaped modular kitchen using Action Tesa HDHMR with Blum hardware",
      "Drawing room accent wall with fluted charcoal panel and marble console",
      "Master and kids bedroom floor-to-ceiling wardrobes with soft-close sliding tracks",
      "POP false ceiling with cove lighting across living, dining, and bedrooms",
      "Complete electrical re-wiring and Asian Paints luxury emulsion coats"
    ],
    materialsUsed: {
      substrate: "Action Tesa HDHMR Board + IS 303 BWR Plywood",
      shutters: "High-Gloss PMMA Acrylic + Suede Textured Laminates",
      hardware: "Hettich InnoTech Drawers & Soft-Close Concealed Hinges",
      countertop: "Granite / Kalingastone Engineered Quartz",
      lighting: "Warm White LED Strips & High-Lumen Recessed Spotlights"
    },
    clientStory: {
      clientName: "Gaurav & Vandana Joshi",
      bhk: "3 BHK Apartment (Tower 6, Purvanchal Royal City)",
      quote: "Manoj Pal Sir and his team handled our handover fit-out very smoothly. Delivered within 6 weeks with excellent craftsmanship.",
      rating: 5
    },
    societyHighlights: [
      "Sprawling 22-acre campus near the upcoming Jewar Airport expressway link",
      "World-class clubhouse, sports academy, and open landscaped courtyards"
    ],
    faqs: [
      {
        q: "What is the cost of a 3BHK turnkey interior in Purvanchal Royal City Chi 5?",
        a: "A complete turnkey 3BHK package (Modular kitchen, 3 wardrobes, TV console, false ceiling, painting, lights) ranges from ₹10 Lakhs to ₹18 Lakhs."
      }
    ]
  },
  {
    slug: "ats-greens-paradiso-chi-4-greater-noida",
    name: "ATS Greens Paradiso",
    sector: "Sector Chi 4",
    city: "Greater Noida",
    zone: "Greater Noida Prime Corridor",
    propertyType: "Low-Density Sprawling Luxury Residences",
    propertyPrice: "₹2.2 Cr – ₹5.5 Cr",
    sqftRange: "2,400 – 4,000 sq.ft.",
    interiorBudgetRange: "₹18L – ₹45L+",
    kitchenBudgetRange: "₹6.5L – ₹15L",
    turnaroundTime: "7 to 10 weeks",
    heroImage: "/images/work/tv-unit-living-1.jpg",
    galleryImages: [
      "/images/work/tv-unit-living-1.jpg",
      "/images/work/modular-kitchen-1.jpg",
      "/images/work/wardrobe-acrylic-blue.jpg",
      "/images/work/owner-architect-discussion.jpg"
    ],
    workDoneTitle: "Full Home Renovation, Woodwork Restoration & Italian Modular Kitchen",
    workDoneSummary: "Executed complete resale renovation and modern upgrade for a large 4BHK apartment in ATS Greens Paradiso. Upgraded 15-year-old plumbing, re-modeled the kitchen with Blum soft-close mechanics, and built modern wardrobe suites.",
    scopeOfWork: [
      "Full civil gut renovation, bathroom plumbing replacement, and re-tiling",
      "Parallel modular kitchen with quartz countertop and tall larder pantry",
      "Living room fluted louvers TV wall with floating marble slab console",
      "Solid hardwood frame wardrobes with acrylic gloss shutter finishes",
      "Saint-Gobain gypsum false ceiling with warm ambient cove lighting"
    ],
    materialsUsed: {
      substrate: "100% Calibrated IS 710 Marine Plywood + HDHMR",
      shutters: "2.0mm High-Gloss Acrylic + Natural Timber Veneer",
      hardware: "Blum (Austria) Soft-Close Tandem Drawers & Hinges",
      countertop: "Kalingastone Calacatta Quartz (20mm)",
      lighting: "Dimmable LED Coves & Spotlights (3000K)"
    },
    clientStory: {
      clientName: "Mr. Sunil & Reena Gupta",
      bhk: "4 BHK Residence (ATS Greens Paradiso, Chi 4)",
      quote: "ATS transformed our 10-year-old flat into a brand-new contemporary luxury home. The renovation was clean, disciplined, and completed right on schedule.",
      rating: 5
    },
    societyHighlights: [
      "One of Greater Noida's most prestigious low-density residential landmarks",
      "Sprawling green grounds directly adjoining the Yamuna Expressway interchange"
    ],
    faqs: [
      {
        q: "Does ATS handle complete resale flat renovations in ATS Greens Paradiso?",
        a: "Yes. We handle structural civil demolition, plumbing replacements, electrical modernization, new flooring, modular kitchens, and custom woodwork."
      }
    ]
  },
  {
    slug: "gaur-saundaryam-sector-1-greater-noida-west",
    name: "Gaur Saundaryam",
    sector: "Sector 1",
    city: "Greater Noida West",
    zone: "Noida Extension Prime Corridor",
    propertyType: "Lake-Facing Premium 3BHK & 4BHK Residences",
    propertyPrice: "₹1.8 Cr – ₹3.8 Cr",
    sqftRange: "1,850 – 3,100 sq.ft.",
    interiorBudgetRange: "₹14L – ₹35L+",
    kitchenBudgetRange: "₹5L – ₹14L",
    turnaroundTime: "6 to 9 weeks",
    heroImage: "/images/work/modular-kitchen-1.jpg",
    galleryImages: [
      "/images/work/modular-kitchen-1.jpg",
      "/images/work/tv-unit-living-1.jpg",
      "/images/work/wardrobe-site-1.jpg",
      "/images/work/owner-engineer-cabin.jpg"
    ],
    workDoneTitle: "Contemporary Lake-View 3BHK Interior & Acrylic Gloss Kitchen",
    workDoneSummary: "Crafted a bright, modern interior for a lake-facing 3BHK flat in Gaur Saundaryam. Features include an open L-shaped acrylic kitchen with quartz countertop, ceiling-height wardrobes, and LED cove false ceiling.",
    scopeOfWork: [
      "L-shaped acrylic gloss modular kitchen with tandem pull-outs and quartz counter",
      "Living room architectural TV console with marble texture backdrop",
      "3 Bedroom custom wardrobes with lofts and internal drawer organizers",
      "POP false ceiling with multi-tier cove lighting",
      "Complete painting with Asian Paints Royale Luxury Emulsion"
    ],
    materialsUsed: {
      substrate: "Action Tesa HDHMR + IS 710 BWP Plywood for wet zones",
      shutters: "Euro-Gloss Acrylic (1.5mm) + Textured Suede Laminates",
      hardware: "Hettich Soft-Close Channels & Wide-Angle Hinges",
      countertop: "Kalingastone Quartz (18mm)",
      lighting: "Recessed COB Spotlights & 3000K LED Troughs"
    },
    clientStory: {
      clientName: "Vivek & Shilpa Chauhan",
      bhk: "3 BHK Lake-Facing Flat (Gaur Saundaryam)",
      quote: "The acrylic modular kitchen is beautiful and so easy to clean! ATS delivered our complete 3BHK interior ahead of the committed deadline.",
      rating: 5
    },
    societyHighlights: [
      "Expansive 130-meter wide road connectivity to Central Noida",
      "Zero-surface parking with resort-style landscaping and lake view towers"
    ],
    faqs: [
      {
        q: "What is the cost of interior design for a 3BHK in Gaur Saundaryam?",
        a: "A turnkey 3BHK interior at Gaur Saundaryam typically costs between ₹11 Lakhs and ₹20 Lakhs including modular kitchen, wardrobes, false ceiling, and electrical fittings."
      }
    ]
  },
  {
    slug: "ats-nobility-sector-10-greater-noida-west",
    name: "ATS Nobility",
    sector: "Sector 10",
    city: "Greater Noida West",
    zone: "Noida Extension Modern Hub",
    propertyType: "Ultra-Low-Density 3BHK+Study Luxury Apartments",
    propertyPrice: "₹1.4 Cr – ₹3.2 Cr",
    sqftRange: "1,675 sq.ft. (Uniform 3BHK+Study Layout)",
    interiorBudgetRange: "₹11L – ₹28L+",
    kitchenBudgetRange: "₹4.5L – ₹10L",
    turnaroundTime: "5 to 8 weeks",
    heroImage: "/images/work/tv-unit-living-2.jpg",
    galleryImages: [
      "/images/work/tv-unit-living-2.jpg",
      "/images/work/modular-kitchen-4.jpg",
      "/images/work/bedroom-kids.jpg",
      "/images/work/founder-manoj-sharma.jpg"
    ],
    workDoneTitle: "Turnkey 3BHK+Study Fresh Handover Interior Package",
    workDoneSummary: "Executed end-to-end fresh handover interior packages for multiple homeowners at ATS Nobility Sector 10. Included modular kitchen with Hettich hardware, 3 bedroom wardrobes, study desk console, and false ceilings.",
    scopeOfWork: [
      "Modular kitchen with acrylic finish and granite/quartz countertop",
      "Custom study unit & library rack in the designated study alcove",
      "Master and kids bedroom floor-to-ceiling wardrobes with lofts",
      "Living room designer TV unit with fluted charcoal paneling",
      "Saint-Gobain false ceiling and warm LED lighting setup"
    ],
    materialsUsed: {
      substrate: "Action Tesa HDHMR + IS 303 BWR Plywood",
      shutters: "1.5mm Acrylic Gloss + 1.0mm Anti-Scratch Laminate",
      hardware: "Hettich Soft-Close Drawer Systems & Hinges",
      countertop: "Jet Black Granite / Kalingastone Quartz",
      lighting: "Warm White LED Strips & Recessed Spotlights"
    },
    clientStory: {
      clientName: "Prashant & Ritu Nair",
      bhk: "3 BHK + Study (Tower 3, ATS Nobility)",
      quote: "ATS Interior Solutions offered the best value and quality for our ATS Nobility flat. The study room setup and kitchen storage are super functional.",
      rating: 5
    },
    societyHighlights: [
      "Only 2 apartments per floor ensuring maximum natural light and cross ventilation",
      "Spanish-inspired architectural facade with dedicated green sports zones"
    ],
    faqs: [
      {
        q: "What is the typical completion time for an ATS Nobility 3BHK flat?",
        a: "ATS completes turnkey 3BHK+Study fit-outs at ATS Nobility in 5 to 7 weeks from design sign-off."
      }
    ]
  },
  {
    slug: "aba-cleo-county-sector-121-noida",
    name: "ABA Cleo County",
    sector: "Sector 121",
    city: "Noida",
    zone: "Central Noida Corridor",
    propertyType: "Egyptian-Themed Luxury Condominiums",
    propertyPrice: "₹2.2 Cr – ₹5.5 Cr",
    sqftRange: "1,820 – 3,195 sq.ft.",
    interiorBudgetRange: "₹15L – ₹35L+",
    kitchenBudgetRange: "₹5.5L – ₹14L",
    turnaroundTime: "6 to 9 weeks",
    heroImage: "/images/work/modular-kitchen-1.jpg",
    galleryImages: [
      "/images/work/modular-kitchen-1.jpg",
      "/images/work/tv-unit-living-1.jpg",
      "/images/work/wardrobe-acrylic-blue.jpg",
      "/images/work/owner-engineer-cabin.jpg"
    ],
    workDoneTitle: "Modern Egyptian-Inspired 3BHK Interior & Acrylic Modular Kitchen",
    workDoneSummary: "Completed full home woodwork and interior decor for a 3BHK apartment at ABA Cleo County. Features include an acrylic L-shaped modular kitchen, marble floating TV console, and fitted wardrobes with top lofts.",
    scopeOfWork: [
      "L-shaped acrylic gloss modular kitchen with quartz countertop and tandem drawers",
      "Living room feature TV panel with warm LED backlighting and louvers",
      "3 Bedroom custom wardrobes with sliding and hinged shutter options",
      "POP false ceiling with layered cove lighting in living and master bedroom",
      "Full wall painting with Asian Paints Royale Luxury Emulsion"
    ],
    materialsUsed: {
      substrate: "Action Tesa HDHMR + IS 710 Marine Plywood for sink base",
      shutters: "2.0mm Acrylic PMMA + Anti-Fingerprint Suede Laminates",
      hardware: "Hettich Soft-Close Tandem Drawers & Concealed Hinges",
      countertop: "Kalingastone White Quartz (18mm)",
      lighting: "3000K Warm White Linear Profiles & Spotlights"
    },
    clientStory: {
      clientName: "Manish & Shweta Agnihotri",
      bhk: "3 BHK Apartment (Tower Cleopatra, Cleo County)",
      quote: "The quality of woodwork and the gloss finish on our kitchen are top-tier. ATS completed the work neatly without damaging existing flooring.",
      rating: 5
    },
    societyHighlights: [
      "Noida's only Egyptian-themed luxury township with five cascading swimming pools",
      "Centrally located with immediate access to FNG Expressway and Sector 122"
    ],
    faqs: [
      {
        q: "What is the cost of modular kitchen at ABA Cleo County Sector 121?",
        a: "An acrylic or PU modular kitchen at Cleo County costs between ₹3.5 Lakhs and ₹8 Lakhs depending on size and internal tandem basket fittings."
      }
    ]
  },
  {
    slug: "purvanchal-royal-park-sector-137-noida",
    name: "Purvanchal Royal Park",
    sector: "Sector 137",
    city: "Noida",
    zone: "Noida Expressway Hub",
    propertyType: "Luxury Condominiums & Penthouses",
    propertyPrice: "₹1.4 Cr – ₹4.0 Cr",
    sqftRange: "1,650 – 2,955 sq.ft.",
    interiorBudgetRange: "₹12L – ₹30L+",
    kitchenBudgetRange: "₹4.5L – ₹12L",
    turnaroundTime: "5 to 8 weeks",
    heroImage: "/images/work/tv-unit-living-1.jpg",
    galleryImages: [
      "/images/work/tv-unit-living-1.jpg",
      "/images/work/modular-kitchen-1.jpg",
      "/images/work/bedroom-kids.jpg",
      "/images/work/owner-architect-discussion.jpg"
    ],
    workDoneTitle: "Turnkey 3BHK Contemporary Interior & TV Unit Panel",
    workDoneSummary: "Engineered a contemporary warm minimal 3BHK interior for a family at Purvanchal Royal Park Sector 137. Delivered customized concealed storage, warm ambient LED cove lighting, and an optimized modular kitchen layout.",
    scopeOfWork: [
      "Drawing room custom fluted TV unit panel with marble floating console",
      "L-shaped acrylic gloss modular kitchen with quartz countertop",
      "Master and kids bedroom fitted wardrobes with full ceiling lofts",
      "Saint-Gobain gypsum false ceiling with ambient cove lighting",
      "Complete electrical overhaul and premium wall painting"
    ],
    materialsUsed: {
      substrate: "100% Calibrated IS 710 Marine Plywood + Action Tesa HDHMR",
      shutters: "High-Gloss PMMA Acrylic + High-Pressure Decorative Laminates",
      hardware: "Hettich (Germany) Soft-Close Channels & Hinges",
      countertop: "20mm Kalingastone Engineered Quartz",
      lighting: "24V Constant Voltage Warm LED Strips (3000K)"
    },
    clientStory: {
      clientName: "Ritika & Sameer Sharma",
      bhk: "3 BHK Apartment (Purvanchal Royal Park, Sector 137)",
      quote: "Manoj Pal personally reviewed our site layout. The design felt premium and was delivered right on time.",
      rating: 5
    },
    societyHighlights: [
      "Walking distance to Sector 137 Aqua Line Metro Station",
      "Established residential community with large green central parks"
    ],
    faqs: [
      {
        q: "What is the cost of 3BHK interior at Purvanchal Royal Park Sector 137?",
        a: "A standard 3BHK interior at Sector 137 costs ₹10 Lakhs to ₹16 Lakhs, while a premium fit-out with acrylic kitchen and veneer TV panel ranges between ₹16L and ₹24 Lakhs."
      }
    ]
  },
  {
    slug: "mahagun-moderne-sector-78-noida",
    name: "Mahagun Moderne",
    sector: "Sector 78",
    city: "Noida",
    zone: "Central Noida Expressway Hub",
    propertyType: "Modern High-Rise Condominiums & Duplexes",
    propertyPrice: "₹1.8 Cr – ₹4.8 Cr",
    sqftRange: "1,550 – 3,100 sq.ft.",
    interiorBudgetRange: "₹12L – ₹32L+",
    kitchenBudgetRange: "₹4.5L – ₹12L",
    turnaroundTime: "6 to 9 weeks",
    heroImage: "/images/work/tv-unit-living-2.jpg",
    galleryImages: [
      "/images/work/tv-unit-living-2.jpg",
      "/images/work/modular-kitchen-4.jpg",
      "/images/work/wardrobe-acrylic-blue.jpg",
      "/images/work/founder-manoj-sharma.jpg"
    ],
    workDoneTitle: "Modern 3BHK Interior Makeover & Heavy-Duty Modular Kitchen",
    workDoneSummary: "Executed a complete interior makeover for a 3BHK apartment in Mahagun Moderne Sector 78. Features include custom sliding wardrobes, U-shaped HDMR modular kitchen, and POP cove false ceiling.",
    scopeOfWork: [
      "U-shaped modular kitchen with tandem drawers and oil-resistant matte shutters",
      "Living room entertainment console with warm LED backlighting and louvers",
      "Floor-to-ceiling master sliding wardrobe with integrated mirror vanity",
      "False ceiling with dual cove lighting in drawing and dining zones",
      "Asian Paints Royale luxury emulsion with feature accent wall"
    ],
    materialsUsed: {
      substrate: "Action Tesa HDHMR + IS 710 BWP Plywood for sink area",
      shutters: "High-Pressure Laminate (1.0mm) + Acrylic High-Gloss",
      hardware: "Hettich InnoTech Atira Drawers & Soft-Close Hinges",
      countertop: "Jet Black Natural Granite with Mitered Bullnose",
      lighting: "Recessed COB LED Spotlights & Warm White Strips"
    },
    clientStory: {
      clientName: "Abhishek & Neha Mathur",
      bhk: "3 BHK Flat (Mahagun Moderne, Sector 78)",
      quote: "ATS modernized our Sector 78 apartment completely. The kitchen workflow is super practical and the wardrobes have huge storage.",
      rating: 5
    },
    societyHighlights: [
      "One of Central Noida's largest and most vibrant residential communities",
      "Immediate connectivity to Sector 76 metro station and high-street markets"
    ],
    faqs: [
      {
        q: "What is the cost of modular kitchen renovation in Mahagun Moderne?",
        a: "A full kitchen renovation including dismantling, tiling, new BWP/HDMR carcass, and quartz countertop costs between ₹2.5 Lakhs and ₹6 Lakhs."
      }
    ]
  },
  {
    slug: "sobha-aurum-sector-36-greater-noida",
    name: "SOBHA Aurum & Swarn Nagari Mansions",
    sector: "Sector 36",
    city: "Greater Noida",
    zone: "Greater Noida Central",
    propertyType: "Luxury Authority Plots, Mansions & Kothis",
    propertyPrice: "₹2.5 Cr – ₹8.0 Cr",
    sqftRange: "3,200 – 6,000 sq.ft.",
    interiorBudgetRange: "₹22L – ₹65L+",
    kitchenBudgetRange: "₹8L – ₹20L",
    turnaroundTime: "10 to 14 weeks",
    heroImage: "/images/work/tv-unit-living-3.jpg",
    galleryImages: [
      "/images/work/tv-unit-living-3.jpg",
      "/images/work/modular-kitchen-1.jpg",
      "/images/work/wardrobe-site-1.jpg",
      "/images/work/owner-engineer-cabin.jpg"
    ],
    workDoneTitle: "Independent Kothi Civil Additions & Italian Modular Kitchen",
    workDoneSummary: "Handled complete structural civil additions, extra floor construction, and turnkey luxury interior woodwork for an independent mansion in Swarn Nagari Sector 36. Built a large open Italian modular kitchen with Blum fittings.",
    scopeOfWork: [
      "Civil floor addition, RCC slab casting, and waterproofing",
      "Large open modular kitchen with island counter and tall pantry larder",
      "Drawing room neoclassical boiserie panelling with PU matte finish",
      "4 Bedroom customized wooden wardrobes with lofts and dressers",
      "Staircase wooden cladding and decorative false ceilings"
    ],
    materialsUsed: {
      substrate: "100% IS 710 Marine Plywood + Action Tesa HDHMR",
      shutters: "Multi-Coat PU Lacquer + 2.0mm High-Gloss PMMA Acrylic",
      hardware: "Blum (Austria) Legrabox Drawers & Aventos HF Lifts",
      countertop: "20mm Kalingastone Engineered Quartz",
      lighting: "Dimmable Architectural LED Spotlights & Warm Cove Strips"
    },
    clientStory: {
      clientName: "Choudhary Devendra Singh (Senior Advocate)",
      bhk: "5 BHK Independent Kothi (Swarn Nagari, Sector 36)",
      quote: "Manoj Pal and his civil engineering team built our additional floor and transformed the interiors. Superb structural and woodwork quality.",
      rating: 5
    },
    societyHighlights: [
      "Gated low-density VIP residential enclave in central Greater Noida",
      "Wide avenues with large 200–500 sq. meter authority plots"
    ],
    faqs: [
      {
        q: "Does ATS execute civil construction for independent kothis in Sector 36 Greater Noida?",
        a: "Yes. ATS provides turnkey civil construction, floor additions, RCC casting, map approvals, and complete interior fit-outs."
      }
    ]
  }
];

export function getSocietyBySlug(slug: string) {
  return societiesData.find((society) => society.slug === slug);
}
