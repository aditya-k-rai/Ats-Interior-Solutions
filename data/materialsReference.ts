export interface MaterialSpec {
  name: string;
  category: "Substrate" | "Finish" | "Hardware" | "Countertop" | "MEP" | "Ceiling";
  standard: string;
  density?: string;
  adhesive?: string;
  waterResistance: string;
  idealApplication: string;
  warranty: string;
  advantages: string[];
  specs: Record<string, string>;
}

export const coreSubstrates: MaterialSpec[] = [
  {
    name: "IS 710 Marine Grade BWP Hardwood Plywood",
    category: "Substrate",
    standard: "IS 710: 2010 (Marine Plywood Specification)",
    density: "650 – 750 kg/m³",
    adhesive: "100% Unextended Pure Phenol Formaldehyde (PF) Resin",
    waterResistance: "72 Hours Continuous Boiling Water Immersion at 100°C without delamination",
    idealApplication: "Kitchen Sink Base, Full Base Carcass, Vanities, Wet Utility Zones, High-Moisture Environments",
    warranty: "Lifetime / 25 Years Anti-Termite & Borer Warranty",
    advantages: [
      "Cross-directional tensile and flexural modulus engineered with perpendicular hardwood plies",
      "Exceptional screw holding capacity: Face >1500 N, Edge >1000 N",
      "Vacuum-pressure chemical impregnation (Copper Chrome Boron) prevents organic termite and borer attacks",
      "Resistant to continuous boiling water, steam, and localized plumbing leaks"
    ],
    specs: {
      "Glue Shear Strength (GSS)": "1350 N dry state / 1000 N post-boil",
      "Veneer Composition": "100% Calibrated Gurjan / Keruing / High-Density Hardwood",
      "Core Calibration": "±0.2mm precision thickness tolerance",
      "Application Datum": "Under-counter wet zones & base cabinetry"
    }
  },
  {
    name: "Action Tesa HDHMR (High-Density High-Moisture Resistance)",
    category: "Substrate",
    standard: "Conforms to IS 12406 / IS 14587",
    density: "820 – 900 kg/m³ (Higher density than standard MDF/Plywood)",
    adhesive: "Melamine-fortified Polymeric Diphenylmethane Diisocyanate (PMDI) / Phenolic Resins",
    waterResistance: "<5% to 8% thickness swelling after 24 hours cold-water submersion",
    idealApplication: "CNC-Routed Shutter Profiles, High-Gloss Acrylic Backing, PU Lacquered Doors, Wardrobe Carcasses",
    warranty: "10 Years Manufacturer Warranty",
    advantages: [
      "Isotropic structural density without internal knots or core voids for precision CNC routing",
      "Mirror-flat surface prevents surface ripple telegraphing under ultra-gloss acrylic or lacquer",
      "Superior face screw withdrawal resistance (>1600 N)",
      "Termite and borer resistant engineered wood fiber matrix"
    ],
    specs: {
      "Modulus of Rupture (MOR)": ">30 N/mm²",
      "Modulus of Elasticity (MOE)": ">3500 N/mm²",
      "Surface Calibration": "Optical-flat machine sanded",
      "Ideal Finish Pairings": "2.0mm Acrylic, Multi-coat PU, Gola Handleless Routing"
    }
  },
  {
    name: "IS 303 BWR (Boiling Water Resistant) Plywood",
    category: "Substrate",
    standard: "IS 303: 1989 (Plywood for General Purposes)",
    density: "580 – 680 kg/m³",
    adhesive: "Melamine Urea Formaldehyde (MUF) / Modified Phenolic Resin",
    waterResistance: "8 Hours continuous boiling at 100°C followed by drying cycle",
    idealApplication: "Overhead Kitchen Wall Cabinets, Tall Storage Units, Bedroom Wardrobes in Humid Belts",
    warranty: "15 Years Anti-Borer Warranty",
    advantages: [
      "Cost-effective structural balance between water resistance and interior carpentry budget",
      "High flexural rigidity preventing long shelf spans (up to 900mm) from deflection",
      "Treated with anti-borer and anti-termite chemical additives in resin matrix"
    ],
    specs: {
      "Glue Shear Strength (GSS)": "800 N dry state / 600 N post-boiling",
      "Face Veneer": "Selected hardwood / gurjan core",
      "Application Datum": "Dry and semi-wet upper cabinetry"
    }
  },
  {
    name: "WPC & High-Density PVC Foam Composite Boards",
    category: "Substrate",
    standard: "ASTM D7031 Polymeric Cellular Standard",
    density: "600 – 650 kg/m³",
    adhesive: "Virgin Polyvinyl Chloride Polymer + Calcium Carbonate matrix",
    waterResistance: "100% Impervious (0.0% water absorption under permanent submersion)",
    idealApplication: "Direct Bathroom Vanities, Sub-Sink Under-Cabinet Floor Liners, Plumbing Shaft Access",
    warranty: "Lifetime 100% Waterproof Guarantee",
    advantages: [
      "Total chemical immunity to fungal rot, dampness, and subterranean termites",
      "Zero swelling when exposed to standing sink water or drain leaks",
      "Lightweight and non-toxic virgin polymer build"
    ],
    specs: {
      "Water Absorption Rate": "0.00%",
      "Termite Susceptibility": "Absolute Zero Organic Factor",
      "Application Datum": "Direct contact sub-sink liners"
    }
  }
];

export const hardwareBrands = [
  {
    brand: "Blum (Austria)",
    tier: "Ultra-Luxury German Engineering",
    warranty: "Lifetime Operational Warranty (200,000 opening cycles)",
    mechanisms: [
      { name: "Aventos HF Bi-Fold Lift", desc: "Motorized / Servo-Drive and manual bi-fold lift-up system for heavy overhead glass and acrylic wall cabinets." },
      { name: "Aventos HK-XS Up-and-Over", desc: "Compact lift system for top lofts and shallow kitchen wall units with variable stop." },
      { name: "Tandembox Antaro & Legrabox", desc: "Double-walled steel drawer systems with Blumotion silent soft-close and 30kg/65kg dynamic load rating." },
      { name: "Clip Top Blumotion 110°/155°", desc: "Concealed all-metal hinges with integrated soft-close dampening and 3-way eccentric cam adjustment." },
      { name: "Tip-On Blumotion", desc: "Mechanical push-to-open handleless technology with soft-close return." }
    ]
  },
  {
    brand: "Häfele (Germany)",
    tier: "Architectural Premium Hardware",
    warranty: "10 to 25 Years Comprehensive Warranty",
    mechanisms: [
      { name: "Matrix Box S35 / P35 Drawers", desc: "Slim-wall 13mm premium drawer system with synchronized full extension and 35kg/50kg load capacity." },
      { name: "Free Fold & Free Flap Lift Systems", desc: "Multi-position stay mechanisms for effortless loft and overhead shutter movement." },
      { name: "Metalla 510 Soft-Close Hinges", desc: "Heavy-duty 48-hour salt spray tested nickel-plated concealed hinges." },
      { name: "Corner Carousel & Magic Corner II", desc: "Blind-corner swing organizers with anti-slip bases maximizing dead-corner storage." },
      { name: "Tall Larder Pantry Pull-Outs", desc: "Full-extension 12-basket tall unit organizer with synchronized soft-close damper." }
    ]
  },
  {
    brand: "Hettich (Germany)",
    tier: "Precision Engineered Hardware",
    warranty: "15 Years Warranty (100,000 cycle tested)",
    mechanisms: [
      { name: "InnoTech Atira Drawer System", desc: "Clean, sharp-edged modular tandem drawers with Quadro silent runner tracks." },
      { name: "Sensys Soft-Close Concealed Hinges", desc: "Automatic wide-angle closing from 35° with integrated invisible silent system." },
      { name: "TopLine XL Sliding Door System", desc: "Whisper-quiet floor-to-ceiling wardrobe sliding tracks with silent opening and closing." },
      { name: "CargoPlus Wire Baskets (SS 304)", desc: "Grade 304 electro-polished stainless steel pull-out baskets and spice racks." }
    ]
  }
];

export const surfaceFinishes = [
  {
    name: "Solid Cast PMMA Acrylic (2.0mm)",
    glossLevel: ">95 Gloss Units (Ultra Mirror Reflective)",
    durability: "UV-Stabilized, Scratch Repairable with Micro-Buffing",
    idealUse: "Luxury High-Rise Kitchens, Penthouses, Master Wardrobes",
    priceRange: "₹2,200 – ₹3,800 per sq ft (Finished Shutter)",
    description: "Solid extruded optical-grade polymer sheets bonded over calibrated HDHMR with zero-joint laser edge-banding."
  },
  {
    name: "Multi-Layer Polyurethane (PU) Architectural Lacquer",
    glossLevel: "Matte (10 GU) to Deep High-Gloss Mirror (100 GU)",
    durability: "Monolithic Seamless Edge, 100% Stain and Chemical Proof",
    idealUse: "Custom Villa Kitchens, Fluted TV Units, Executive Vanity Cabinets",
    priceRange: "₹2,800 – ₹4,500 per sq ft (Finished Shutter)",
    description: "Multi-stage automated paint booth application featuring isolator coats, high-build polyester primers, and pigmented polyurethane topcoats with zero visible edge joints."
  },
  {
    name: "High-Pressure Decorative Laminates (HPL 1.0mm – 1.5mm)",
    glossLevel: "Suede / Matte / Synchronized Wooden Grain / Anti-Fingerprint",
    durability: "High Surface Abrasion, Heat Resistant up to 135°C, Impact Proof",
    idealUse: "High-Traffic Family Kitchens, Rental Investment Apartments, Wardrobe Interiors",
    priceRange: "₹1,200 – ₹1,800 per sq ft (Finished Shutter)",
    description: "Multi-layer kraft paper and melamine resin sheets compacted under 140°C heat and 100 bar pressure, bonded with PUR hot-melt adhesives."
  },
  {
    name: "Sintered Porcelain & Dekton Slim Slabs (3mm – 6mm)",
    glossLevel: "Natural Honed / Ultra-Sleek Satin / Textured Ceramic",
    durability: "Zero Porosity, Fire Proof (1200°C), Unscratchable, Acid Proof",
    idealUse: "Ultra-Luxury Sky Mansions (Sector 128/94/150), Jaypee Greens Villas",
    priceRange: "₹4,500 – ₹8,500 per sq ft (Finished Shutter)",
    description: "Compact mineral slabs bonded onto structural concealed aluminum profile frames using structural elastic MS-polymers."
  },
  {
    name: "Natural Timber Veneers (Gurjan, Teak, American Walnut)",
    glossLevel: "Natural Open-Pore Matte / Closed-Pore Satin PU Polish",
    durability: "Authentic Architectural Warmth, Multi-Year Recoatable",
    idealUse: "Drawing Room Feature Consoles, Master Bed Paneling, Luxury Mandir Units",
    priceRange: "₹2,500 – ₹4,800 per sq ft",
    description: "0.5mm precision-sliced natural hardwood veneer leaves book-matched over BWP plywood and sealed with protective acrylic polyurethane."
  }
];

export const countertopSpecs = [
  {
    name: "Engineered Quartz (Kalingastone / Silestone)",
    composition: "93% Natural Quartz Crystals + 7% Polyester Resins & Pigments",
    hardness: "Mohs 6 – 7 (Highly Scratch Resistant)",
    porosity: "<0.05% (Non-Porous, 100% Stain Resistant to Oil, Turmeric & Wine)",
    thickness: "15mm, 18mm, 20mm with Mitered 40mm Apron",
    maintenance: "Zero chemical sealing required; clean with mild soapy water",
    temperatureLimit: "Up to 150°C (Requires trivets for direct-from-hob hot pots)"
  },
  {
    name: "Sintered Porcelain / Dekton Surfaces",
    composition: "100% Natural Minerals Compacted at 25,000 Tonnes and 1200°C",
    hardness: "Mohs 8 – 9 (Diamond-hard scratch proof)",
    porosity: "0.00% (Completely impervious to lemon, vinegar, hot oil)",
    thickness: "12mm, 20mm Ultra-Sleek",
    maintenance: "Immune to stains, direct fire, knife slicing, UV degradation",
    temperatureLimit: "Up to 1000°C (Direct hot pan placement safe)"
  },
  {
    name: "High-Density Natural Granites (Black Galaxy, Jet Black, Tan Brown)",
    composition: "Natural Crystalline Igneous Rock",
    hardness: "Mohs 6 – 6.5",
    porosity: "0.2% – 0.5% (Requires periodic penetrating sealant application)",
    thickness: "18mm – 20mm",
    maintenance: "Heavy-duty durability, high heat resistance, periodic resealing",
    temperatureLimit: "Up to 300°C"
  }
];

export const mepAndCivilStandards = {
  plumbing: {
    supplyPipe: "CPVC Class 1 / Cross-linked Polyethylene (PEX) SDR 9",
    jointingMethod: "ASTM F493 Heavy-Bodied Solvent Cement Welding",
    pressureTest: "Hydrostatic pressure testing at 10 bar (150 PSI) for 24 continuous hours before closing chases",
    drainagePipe: "Rigid PVC / UPVC 40mm – 50mm internal diameter with 1:40 to 1:50 self-cleansing slope",
    odorTrap: "Deep-seal anti-siphon P-trap with 50mm water seal barrier preventing sewer backdrafts"
  },
  electrical: {
    conduits: "Heavy Mechanical Stress (HMS) grade Fire Retardant Low Smoke (FRLS) 20mm/25mm PVC pipes",
    applianceCircuits: "4.0 sq.mm electrolytic multi-strand copper conductors with dedicated 16A/20A Type-C MCB per heavy appliance (Hob, Oven, Dishwasher, Geyser)",
    countertopSockets: "16A modular switch sockets placed 150mm – 200mm above finished countertop",
    taskLighting: "Under-cabinet recessed IP65 LED profiles (24V DC Constant Voltage, CRI >90, 3000K warm white)"
  },
  ventilation: {
    coreCutting: "150mm – 160mm diamond-tipped core drill cutout with 2° to 3° downward slope to exterior preventing rain backflow",
    ductType: "Rigid / Semi-rigid Aluminum ducting under 3.5m length with maximum 2 sweeping 90° bends",
    exhaustCowl: "Gravity louvers or spring-loaded backdraft dampers preventing wind reversal and bird entry"
  },
  waterproofing: {
    substrate: "2 coats elastomeric Polymer-Modified Cementitious (PMC) coating + 45 GSM non-woven glass fiber mesh at all 90° junctions",
    splashbackHeight: "Minimum 450mm above finished floor level (FFL) behind sink and plumbing stack"
  }
};
