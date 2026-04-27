// lib/products.ts

export interface ProductSpec {
  sizes?: string[];
  capacityRange: string;
  staticPressure?: string;
  voltage?: string;
  powerRange?: string;
  rpmRange?: string;
  soundLevel?: string;
  temperatureRating?: string;
  weight?: string;
  coverage?: string;
  efficiency?: string;
  materials?: string[];
  shapes?: string[];
  dimensions?: string;
}

export interface SpecTableRow {
  size: string;
  airflow: string;
  voltage: string;
  power: string;
  rpm: string;
  sound: string;
}

export interface SpecFeatureRow {
  feature: string;
  value: string;
}

export interface ProductDetailSection {
  title: string;
  content: string;
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  longDescription?: string;
  applications: string[];
  features: string[];
  specs: ProductSpec;
  specTable?: SpecTableRow[];
  specFeatureTable?: SpecFeatureRow[];
  badge?: string;
  image?: string;
  images?: string[];
  pricing?: string;
  seoKeywords?: string[];
  details?: ProductDetailSection[];
  whyChooseContent?: string[];
}

export const PRODUCT_CATEGORIES = [
  { name: 'Centrifugal Fans', slug: 'centrifugal-inline-cubic-fans' },
  { name: 'Axial Flow Fans', slug: 'axial-wall-exhaust-supply-fans' },
  { name: 'Insulated Box Fans', slug: 'insulated-housing-cabinet-fan' },
  { name: 'Tube Axial Fans', slug: 'tube-axial-fans' },
  { name: 'Belt Driven Cabinet Fans', slug: 'belt-driven-cabinet-fans' },
  { name: 'Large Diameter HVLS Fans', slug: 'hvls-fans' },
  { name: 'HVAC Air Ducts & Hoods', slug: 'hvac-air-duct-kitchen-hoods' },
  { name: 'Turnkey HVAC Solutions', slug: 'turnkey-hvac-products' },
  { name: 'PURE AIR Purifiers', slug: 'air-purifiers' },
];

export const PRODUCTS: Product[] = [
  // ─── 1. CENTRIFUGAL INLINE CUBIC FANS ───────────────────────────────────────
  {
    id: '1',
    slug: 'centrifugal-inline-cubic-fans',
    name: 'Centrifugal Inline Cubic Fans — Direct Drive',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-fans',
    description: 'Direct drive duct cabinet inline fans for supply, exhaust, clean air, and general ventilation with compact galvanized cubic housing.',
    longDescription: "SUV's model CUBIC centrifugal inline fans feature a unique combination of installation flexibility, rugged construction, ease of service, high efficiency and low sound levels. These compact inline fans are the ideal selection for indoor clean air applications including intake, exhaust, return or make-up air systems where space is a prime consideration.\n\nThe need for costly square-to-round transition pieces is eliminated, reducing installation costs. The square housing design, compact size and straight-thru airflow give the system designer the flexibility to mount CUBIC fans in any configuration — horizontal, vertical, or at any angle.",
    applications: ['Supply & Exhaust Ventilation', 'Clean Room Ventilation', 'Office Buildings', 'Commercial Kitchens', 'General HVAC Systems'],
    features: [
      'Galvanized housing construction',
      'Backward inclined, aviation grade aluminum impeller',
      'Low power consumption and low sound level',
      'Compact in size — installation flexibility and ease of service',
      'Available in Single & Three Phase',
      'Optional air pre-filter and 25 mm insulated housing',
    ],
    specs: {
      capacityRange: '850 CMH to 10,000 CMH',
      staticPressure: 'Up to 30 mmwg',
      voltage: '220V / 415V',
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['centrifugal inline fan', 'cubic duct fan', 'direct drive ventilation', 'industrial inline blower', 'commercial HVAC fan India'],
    image: '/products/centrifugal-inline-cubic-fans/direct-drive-cubic.png',
    images: [
      '/products/centrifugal-inline-cubic-fans/direct-drive-cubic.png',
      '/products/centrifugal-inline-cubic-fans/centrifugal-single-width-fan.png',
      '/products/centrifugal-inline-cubic-fans/circular-inline-fan.jpg',
    ],
    details: [
      {
        title: 'Housing Construction',
        content: 'The galvanized casing is manufactured from heavy gauge galvanized steel with all panels being continuously seam welded and painted. The CUBIC fan casing is reinforced with integral flanges at each panel joint for a permanent, rigid, air-tight construction. An optional 25 mm thermal and acoustic insulation lining is available for noise-sensitive installations.',
      },
      {
        title: 'Wheel',
        content: 'The CUBIC impeller is manufactured from aviation grade aluminum, providing an excellent strength-to-weight ratio. The impeller consists of backward inclined blades which deliver the highest efficiency of any impeller type. All CUBIC impellers are statically balanced; larger sizes are both statically and dynamically balanced for vibration-free operation.',
      },
      {
        title: 'Duct Collars',
        content: 'The CUBIC fan housing includes four duct collars — one per side. The duct collars are double flanged to allow easy attachment of flexible duct connectors and standard duct flanges. This eliminates the need for costly square-to-round transition pieces and significantly reduces overall installation cost.',
      },
      {
        title: 'Motor',
        content: 'TEFC (Totally Enclosed Fan Cooled) motor mounted inside the fan housing on an adjustable base plate. Premium efficiency motors are available in single-phase (up to 1 HP) and three-phase (from 1 HP). The motor can be serviced without removing the fan from the duct system. Fan can be supplied with a pre-wired junction box for easy field installation.',
      },
      {
        title: 'Direct Drive Duct Cabinet Inline Fan',
        content: 'Application: Supply / Exhaust / Clean Air / General ventilation\n• Galvanized housing construction\n• Backward inclined, aviation grade aluminum impeller\n• Low power consumption / low sound level\n• Compact in size — installation flexibility and ease of service\n• Available in Single & Three Phase\n• Optional: air pre-filter and 25 mm insulated housing\n\nCapacity: 850 CMH to 10,000 CMH\nStatic Pressure: Up to 30 mmwg',
        image: '/products/centrifugal-inline-cubic-fans/direct-drive-cubic.png',
      },
      {
        title: 'Centrifugal Single Width Fan',
        content: 'Application: Supply / Exhaust, Heating, Filtration, Kitchen, Fume exhaust\n• High-pressure capacity to handle larger ducted systems or filtration requirements\n• Heavy duty high GSM galvanized housing construction\n• Statically and dynamically balanced impeller for maximum efficiency\n• Low power consumption\n• Available in Three Phase\n\nCapacity: 5,000 CMH to 25,000 CMH\nStatic Pressure: Up to 70 mmwg',
        image: '/products/centrifugal-inline-cubic-fans/centrifugal-single-width-fan.png',
      },
      {
        title: 'Circular Inline Fan',
        content: 'Available up to 1,880 m³/hr (1,100 CFM) for supply / exhaust air applications\n• Dynamically balanced backward curved fan impeller\n• Direct drive external rotor motor with ball bearing\n• Motor equipped with overheat protection with auto restart\n• Mounting brackets supplied as standard\n• Optional pre-fitted Hum-Free speed controller',
        image: '/products/centrifugal-inline-cubic-fans/circular-inline-fan.jpg',
      },
    ],
    whyChooseContent: [
      'Compact in Size',
      'High Efficiency',
      'Installation Flexibility',
      'Ease of Service',
      'Cost Effective',
      'Low Power Consumption',
      'Low Sound Levels',
    ],
  },

  // ─── 2. AXIAL WALL EXHAUST & SUPPLY FANS ────────────────────────────────────
  {
    id: '2',
    slug: 'axial-wall-exhaust-supply-fans',
    name: 'Axial Wall Exhaust and Supply Fans',
    category: 'Axial Flow Fans',
    categorySlug: 'axial-flow-fans',
    description: 'Direct drive wall mount, belt driven, and propeller fans for factories, warehouses, car parks, poultry farms, and industrial environments.',
    longDescription: 'SUV Axial Wall Exhaust and Supply Fans are engineered to move massive volumes of air at low resistance. Available in three configurations — Direct Drive Wall Mount, Belt Driven Wall Mount, and Propeller Fan — each designed to match specific application requirements. Inlet and outlet guards ensure 100% safe operation. Suitable for large industrial spaces, manufacturing plants, poultry farms, and agriculture where high-volume ventilation at low static pressure is required.',
    applications: ['Factories & Warehouses', 'Car Parks', 'Data Centers', 'Poultry Farms & Agriculture', 'Industrial Environments'],
    features: [
      'Direct drive wall mount, belt driven, and propeller fan configurations',
      'Inlet and outlet guard for 100% safe operation',
      'Low power consumption',
      'Easy wall-frame mounting',
      'Available in Single & Three Phase',
    ],
    specs: {
      capacityRange: '900 CMH to 55,800 CMH',
      voltage: '220V / 415V',
      sizes: ['200mm', '300mm', '450mm', '500mm', '600mm', '630mm', '800mm', '1000mm', '1220mm', '1380mm', '1530mm'],
    },
    specTable: [
      { size: '630 mm (Direct Drive)',  airflow: '20,500', voltage: '220/415', power: '1500', rpm: '1450', sound: '<85' },
      { size: '500 mm (Direct Drive)',  airflow: '8,500',  voltage: '220/415', power: '750',  rpm: '1450', sound: '<85' },
      { size: '1530 mm (Belt Driven)',  airflow: '55,800', voltage: '220/415', power: '1500', rpm: '325',  sound: '<65' },
      { size: '1380 mm (Belt Driven)',  airflow: '44,000', voltage: '220/415', power: '1100', rpm: '440',  sound: '<65' },
      { size: '1220 mm (Belt Driven)',  airflow: '38,000', voltage: '220/415', power: '750',  rpm: '450',  sound: '<65' },
      { size: '1000 mm (Belt Driven)',  airflow: '32,000', voltage: '220/415', power: '550',  rpm: '600',  sound: '<65' },
      { size: '800 mm (Belt Driven)',   airflow: '20,000', voltage: '220/415', power: '370',  rpm: '600',  sound: '<65' },
      { size: '650 mm (Belt Driven)',   airflow: '16,000', voltage: '220/415', power: '370',  rpm: '600',  sound: '<65' },
      { size: '600 mm (Propeller)',     airflow: '10,500', voltage: '220',     power: '750',  rpm: '1380', sound: '72'  },
      { size: '450 mm (Propeller)',     airflow: '4,800',  voltage: '220',     power: '230',  rpm: '1350', sound: '64'  },
      { size: '300 mm (Propeller)',     airflow: '2,100',  voltage: '220',     power: '125',  rpm: '2400', sound: '58'  },
      { size: '200 mm (Propeller)',     airflow: '900',    voltage: '220',     power: '50',   rpm: '2450', sound: '49'  },
    ],
    pricing: 'Contact for Quote',
    seoKeywords: ['axial wall fan', 'industrial exhaust fan', 'factory ventilation fan', 'belt driven wall fan', 'propeller fan India'],
    image: '/products/axial-wall-exhaust-supply-fans/direct-drive-wall-mount.jpg',
    images: [
      '/products/axial-wall-exhaust-supply-fans/direct-drive-wall-mount.jpg',
      '/products/axial-wall-exhaust-supply-fans/belt-driven-wall-mount-fans.png',
      '/products/axial-wall-exhaust-supply-fans/propeller-fan.jpg',
    ],
    details: [
      {
        title: 'Direct Drive Wall Mount Fans',
        content: 'Application: Factories, Warehouses, Car Parks, Industrial Environments, Data Centers\n• Low power consumption\n• Inlet and outlet guard for 100% safe operation\n\nAvailable sizes: 500 mm, 630 mm',
        image: '/products/axial-wall-exhaust-supply-fans/direct-drive-wall-mount.jpg',
      },
      {
        title: 'Belt Driven Wall Mount Fans',
        content: 'Application: Factories, Poultry Farm, Agriculture\n• High-airflow belt drive design for large industrial and agricultural spaces\n• Precise speed adjustment via pulley ratio\n\nAvailable sizes: 650 mm to 1530 mm',
        image: '/products/axial-wall-exhaust-supply-fans/belt-driven-wall-mount-fans.png',
      },
      {
        title: 'Propeller Fan',
        content: 'Application: Supply and Exhaust — high flow with low resistance\n• Aerodynamically designed blades for maximum airflow\n• Low static pressure, high volume ventilation\n\nAvailable sizes: 200 mm to 600 mm',
        image: '/products/axial-wall-exhaust-supply-fans/propeller-fan.jpg',
      },
    ],
  },

  // ─── 3. BELT DRIVEN CABINET FANS ────────────────────────────────────────────
  {
    id: '15',
    slug: 'belt-driven-cabinet-fans',
    name: 'Belt Driven Cabinet Fans',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-fans',
    description: 'High-capacity belt driven cabinet fans for supply, exhaust, pressurization, kitchen, and smoke spill — indoor & outdoor, up to 25,000 CMH.',
    longDescription: 'SUV Belt Driven Cabinet Fans are the preferred choice for large air handling requirements. The belt-drive system allows precise fan speed tuning by changing pulley ratios. Designed for indoor and outdoor installation with easy duct connection in both ducted and non-ducted systems. These fans handle supply, exhaust, pressurization, kitchen ventilation, and smoke spill applications with static pressure up to 70 mmwg.',
    applications: ['Supply & Exhaust Systems', 'Building Pressurization', 'Kitchen Ventilation', 'Smoke Spill Systems', 'High-Static HVAC Systems'],
    features: [
      'Application: Supply / Exhaust / Pressurization / Kitchen / Smoke Spill',
      'Indoor & Outdoor — easy installation in ducted and non-ducted systems',
      'Belt drive allows precise speed adjustment via pulley ratio',
      'High static pressure capability up to 70 mmwg',
      'Motor isolated from airstream for longevity',
    ],
    specs: {
      capacityRange: '5,000 CMH to 25,000 CMH',
      staticPressure: 'Up to 70 mmwg',
      voltage: '220V / 415V',
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['belt driven cabinet fan', 'industrial supply fan', 'smoke spill fan', 'pressurization fan India'],
    image: '/products/belt-driven-cabinet-fans/belt-driven-cabinet.jpg',
    images: [
      '/products/belt-driven-cabinet-fans/belt-driven-cabinet.jpg',
      '/products/belt-driven-cabinet-fans/belt-driven-cabinet-2.jpg',
    ],
    details: [
      {
        title: 'Belt Driven Cabinet Fan',
        content: 'Application: Supply / Exhaust / Pressurization / Kitchen / Smoke Spill\n• Indoor & Outdoor — easy installation in ducted and non-ducted systems\n• Belt drive allows precise speed adjustment via pulley ratio\n\nCapacity: 5,000 CMH to 25,000 CMH\nStatic Pressure: Up to 70 mm of H₂O',
        image: '/products/belt-driven-cabinet-fans/belt-driven-cabinet.jpg',
      },
      {
        title: 'Drive Mechanism',
        content: 'The belt and pulley system separates the motor from the airstream, protecting it from heat, humidity, and contaminants. Speed adjustment is achieved by changing the pulley ratio — no inverter required for basic speed changes. Motor isolated from airstream for long service life.',
        image: '/products/belt-driven-cabinet-fans/belt-driven-cabinet-2.jpg',
      },
    ],
  },

  // ─── 4. POWER ROOF VENTILATORS ──────────────────────────────────────────────
  {
    id: '4',
    slug: 'power-roof-ventilators-upblast-fan',
    name: 'Power Roof Ventilators — Upblast Fan',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-fans',
    description: 'Rhombus hood upblast roof ventilators with single-piece weather-tight curb cap for rooftop exhaust. Galvanized housing, aluminum impeller.',
    longDescription: 'SUV Power Roof Ventilators (PRV) with Upblast discharge throw air high above the roofline, preventing re-entrainment of odors and pollutants. The aerodynamic Rhombus hood is specially designed to withstand high wind speeds, with cooling fins on the sides providing efficacious cooling of the motor to maximize motor life. The single-piece weather-tight curb cap with punched mounting holes allows easy rooftop installation. Galvanized housing construction with backward inclined aluminum impeller for reliable long-term performance.',
    applications: ['Rooftop Exhaust', 'Commercial Kitchen Grease Exhaust', 'Warehouse Ventilation', 'Multi-Storey Building Exhaust', 'Industrial Fume Exhaust'],
    features: [
      'Rhombus hood — specially designed to withstand high-speed wind',
      'Cooling fins on sides for efficacious motor cooling — maximizes motor life',
      'Single-piece weather-tight curb cap with punched mounting holes for easy roof installation',
      'Galvanized housing construction',
      'Backward inclined aluminum impeller',
      'Low power consumption and low sound level',
      'Available in Single & Three Phase',
    ],
    specs: {
      capacityRange: '850 CMH to 10,000 CMH',
      staticPressure: 'Up to 30 mmwg',
      voltage: '220V / 415V',
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['roof ventilator fan', 'upblast exhaust fan', 'kitchen roof fan', 'commercial roof exhaust', 'rooftop ventilation India'],
    image: '/products/power-roof-ventilators-upblast-fan/power-roof-ventilator-upblast.png',
    images: [
      '/products/power-roof-ventilators-upblast-fan/power-roof-ventilator-upblast.png',
    ],
    details: [
      {
        title: 'Rhombus Hood',
        content: 'Specially designed to withstand high-speed wind with cooling fins on sides for efficacious cooling of motor to maximize motor life.',
        image: '/products/power-roof-ventilators-upblast-fan/power-roof-ventilator-upblast.png',
      },
      {
        title: 'Curb Cap & Construction',
        content: 'Single piece weather tight curb cap with punched mounting holes for easy installation in roof.\n• Galvanized housing construction\n• Backward inclined aluminum impeller\n• Low power consumption and low sound level\n• Available in Single & Three Phase\n\nCapacity: 850 CMH to 10,000 CMH\nStatic Pressure: Up to 30 mmwg',
      },
    ],
  },

  // ─── 5. CEILING EXHAUST & CIRCULAR INLINE FANS ──────────────────────────────
  {
    id: '5',
    slug: 'ceiling-exhaust-cabinet-fans',
    name: 'Silent Ceiling Exhaust & Circular Inline Fans',
    category: 'Insulated Box Fans',
    categorySlug: 'insulated-box-fans',
    description: 'Ultra-quiet ceiling-mounted exhaust fans for laboratories, bathrooms, hotels, and cafeterias. Circular inline option up to 1,880 m³/hr with Hum-Free speed control.',
    longDescription: 'SUV Silent Ceiling Exhaust Fans mount under false ceilings with grilled inlet and ducted exhaust for discreet, quiet ventilation. Circular Inline Fans are available up to 1,880 m³/hr (1,100 CFM) with dynamically balanced backward curved impeller, direct drive external rotor motor with ball bearing, overheat protection with auto restart, and optional pre-fitted Hum-Free speed controller. Both types deliver very low sound levels and low power consumption for noise-sensitive installations.',
    applications: ['Laboratories', 'Bathrooms & Toilets', 'Hotels & Cafeterias', 'Smoke Rooms', 'Hospital Wards'],
    features: [
      'Mount under false ceiling — grilled inlet / ducted exhaust',
      'Very low sound and low power consumption',
      'Dynamically balanced backward curved fan impeller',
      'Direct drive external rotor motor with ball bearing',
      'Motor equipped with overheat protection with auto restart',
      'Mounting brackets supplied as standard',
      'Optional pre-fitted Hum-Free speed controller',
    ],
    specs: {
      capacityRange: '200 CFM to 1,500 CFM (ceiling) / up to 1,880 m³/hr (circular inline)',
      voltage: '220V Single Phase',
      soundLevel: '<45 dBA',
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['ceiling exhaust fan', 'silent cabinet fan', 'circular inline fan', 'bathroom exhaust fan', 'quiet ventilation fan India'],
    image: '/products/ceiling-exhaust-cabinet-fans/silent-ceiling-exhaust.jpg',
    images: [
      '/products/ceiling-exhaust-cabinet-fans/silent-ceiling-exhaust.jpg',
    ],
    details: [
      {
        title: 'Silent Ceiling Exhaust Fan',
        content: 'Application: Laboratory, Bathroom, Hotel, Cafeteria, Smoke room\n• Mount under false ceiling\n• Grilled inlet / ducted exhaust\n• Very low sound / low power consumption\n\nCapacity: 200 CFM to 1,500 CFM',
        image: '/products/ceiling-exhaust-cabinet-fans/silent-ceiling-exhaust.jpg',
      },
      {
        title: 'Circular Inline Fan',
        content: 'Available up to 1,880 m³/hr (1,100 CFM) for supply / exhaust air applications\n• Dynamically balanced backward curved fan impeller\n• Direct drive external rotor motor with ball bearing\n• Motor equipped with overheat protection with auto restart\n• Mounting brackets supplied as standard\n• Fan can be supplied with pre-fitted Hum-Free speed controller',
      },
    ],
    whyChooseContent: [
      'Very Low Sound Levels',
      'Low Power Consumption',
      'Overheat Protection',
      'Easy Ceiling Installation',
      'Optional Speed Control',
      'Compact Design',
    ],
  },

  // ─── 6. HVLS FANS ────────────────────────────────────────────────────────────
  {
    id: '6',
    slug: 'hvls-fans',
    name: 'High Volume Low Speed Fan (HVLS)',
    category: 'Large Diameter HVLS Fans',
    categorySlug: 'hvls-fans',
    description: 'Large-diameter industrial HVLS fans 16–24 feet delivering up to 200,000 CFM with speed control for industrial and commercial buildings.',
    longDescription: 'SUV High Volume Low Speed (HVLS) fans deliver massive air movement with slow, gentle rotation. Available in sizes from 16 to 24 feet, a single HVLS fan can replace dozens of small high-speed fans, dramatically reducing energy costs. Built-in speed control provides variable airflow for year-round comfort and air destratification. Ideal for large industrial and commercial buildings requiring effective, energy-efficient ventilation.',
    applications: ['Large Warehouses', 'Distribution Centers', 'Manufacturing Plants', 'Gymnasiums', 'Airport Hangars'],
    features: [
      'Application: Industrial and commercial building',
      'Available up to capacity range up to 200,000 CFM',
      'Size range: 16 feet to 24 feet',
      'Speed control',
      'Replaces multiple small high-speed fans — reduces energy costs',
      'Year-round comfort and air destratification',
    ],
    specs: {
      capacityRange: 'Up to 200,000 CFM',
      sizes: ['16 ft', '18 ft', '20 ft', '22 ft', '24 ft'],
      coverage: 'Up to 20,000 sq. ft per fan',
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['HVLS fan India', 'industrial ceiling fan', 'large warehouse fan', 'high volume low speed fan', 'big diameter fan manufacturer'],
    image: '/products/hvls-fans/hvls-fan-1.jpg',
    images: [
      '/products/hvls-fans/hvls-fan-1.jpg',
      '/products/hvls-fans/hvls-fan-2.jpg',
    ],
    details: [
      {
        title: 'High Volume Low Speed Fan (HVLS)',
        content: '• Application: Industrial and commercial building\n• Available up to capacity range up to 200,000 CFM\n• Size range: 16 feet to 24 feet\n• Speed control',
        image: '/products/hvls-fans/hvls-fan-1.jpg',
      },
      {
        title: 'Installed View',
        content: 'A single HVLS fan replaces dozens of small high-speed fans, providing uniform air movement and dramatically reducing energy costs. Suitable for warehouses, distribution centers, manufacturing plants, gymnasiums, and airport hangars.',
        image: '/products/hvls-fans/hvls-fan-2.jpg',
      },
    ],
  },

  // ─── 7. FLEXIBLE DUCTS ───────────────────────────────────────────────────────
  {
    id: '7',
    slug: 'flexible-ducts',
    name: 'Flexible Ducts and Duct Connectors',
    category: 'HVAC Air Ducts & Hoods',
    categorySlug: 'hvac-ducts',
    description: 'Non-insulated, insulated, semi-rigid, and fire-rated flexible ducts in PVC and silicone coated fabric for all HVAC applications.',
    longDescription: 'SUV flexible ducting covers every HVAC connection need. Available in PVC coated and Silicone coated fabric options. Fire retardant PVC coated fabric conforms to Class B fire rating, suitable up to 85°C. Fireproof Silicone coated fabric is tested and suitable up to 270°C for 1 hour. High anti-tear and tensile strength ensure longer service life across all installation types.',
    applications: ['HVAC Secondary Ducting', 'VAV Box Connections', 'Kitchen Hood Exhaust', 'Bathroom Ventilation', 'Industrial Fume Extraction'],
    features: [
      'Non-Insulated: Size 100–500 mm / Length 25 ft',
      'Insulated: Size 100–450 mm / Length 25 ft',
      'Semi Rigid: Size 75–500 mm / Length 10 ft',
      'Fire Rated: Size 100–450 mm / Length 10 ft',
      'Fire retardant PVC coated fabric — Class B fire rating, suitable up to 85°C',
      'Fireproof Silicone coated fabric — tested & suitable up to 270°C for 1 hour',
      'High anti-tear & tensile strength ensure longer life',
    ],
    specs: {
      capacityRange: 'Custom sizes',
      temperatureRating: 'Up to 270°C (silicone) / 85°C (PVC)',
      sizes: ['75mm', '100mm', '150mm', '200mm', '250mm', '300mm', '450mm', '500mm'],
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['flexible ducting India', 'insulated HVAC duct', 'fire rated flexible duct', 'silicone duct connector', 'PVC flexible duct'],
    image: '/products/flexible-ducts/flexible-duct-main.jpg',
    images: [
      '/products/flexible-ducts/flexible-duct-main.jpg',
      '/products/flexible-ducts/duct-connector.jpg',
    ],
    details: [
      {
        title: 'Flexible Duct Types',
        content: '• Non-Insulated: Size 100–500 mm / Length 25 ft\n• Insulated: Size 100–450 mm / Length 25 ft\n• Semi Rigid: Size 75–500 mm / Length 10 ft\n• Fire Rated: Size 100–450 mm / Length 10 ft',
        image: '/products/flexible-ducts/flexible-duct-main.jpg',
      },
      {
        title: 'Fabric & Material Options',
        content: '• Available in PVC coated & Silicone coated fabric\n• Fire retardant PVC coated fabric — Class B fire rating, suitable up to 85°C\n• Fireproof Silicone coated fabric — tested & suitable up to 270°C for 1 hour\n• High anti-tear & tensile strength ensure longer life',
        image: '/products/flexible-ducts/duct-connector.jpg',
      },
    ],
  },

  // ─── 8. INSULATED HOUSING CABINET FAN / INDUSTRIAL COOLER ───────────────────
  {
    id: '8',
    slug: 'insulated-housing-cabinet-fan',
    name: 'Industrial Coolers',
    category: 'Insulated Box Fans',
    categorySlug: 'insulated-box-fans',
    description: 'Industrial and commercial ducted exhaust coolers with auto-clean drain valve — M-180 (18,000 CMH) and M-300 (30,000 CMH).',
    longDescription: 'SUV Industrial Coolers provide high-volume ventilation and cooling for demanding industrial and commercial environments. The auto-clean drain valve and ducted exhaust design ensure reliable, low-maintenance operation. Available in M-180 (18,000 CMH, 1,100W) and M-300 (30,000 CMH, 3,000W) configurations.',
    applications: ['Industrial Cooling', 'Commercial Spaces', 'Ducted Exhaust Systems', 'Large Manufacturing Facilities', 'Warehouses'],
    features: [
      'Application: Industrial / Commercial — ducted exhaust',
      'Auto-clean drain valve for easy maintenance',
      'M-300: 30,000 CMH, 415V, 3,000W, 100 kg, < 80 dBA',
      'M-180: 18,000 CMH, 220/415V, 1,100W, 55 kg, < 70 dBA',
      'Available in single and three phase',
    ],
    specs: {
      capacityRange: '18,000 CMH to 30,000 CMH',
      voltage: '220V / 415V',
    },
    specTable: [
      { size: 'M-300', airflow: '30,000', voltage: '415',     power: '3000', rpm: '—', sound: '<80' },
      { size: 'M-180', airflow: '18,000', voltage: '220/415', power: '1100', rpm: '—', sound: '<70' },
    ],
    pricing: 'Contact for Quote',
    seoKeywords: ['industrial cooler India', 'commercial evaporative cooler', 'ducted exhaust cooler', 'industrial air cooler'],
    image: '/products/insulated-housing-cabinet-fan/industrial-cooler.jpg',
    images: [
      '/products/insulated-housing-cabinet-fan/sound-insulated-box-fan.jpg',
      '/products/insulated-housing-cabinet-fan/industrial-cooler.jpg',
    ],
    details: [
      {
        title: 'Industrial Cooler — M-180 & M-300',
        content: 'Application: Industrial / Commercial — ducted exhaust\n• Auto-clean drain valve\n\nM-300: 30,000 CMH | 415V | 3,000W | 100 kg | < 80 dBA\nM-180: 18,000 CMH | 220/415V | 1,100W | 55 kg | < 70 dBA',
        image: '/products/insulated-housing-cabinet-fan/industrial-cooler.jpg',
      },
    ],
  },

  // ─── 9. KITCHEN / LAUNDRY EXHAUST FANS ──────────────────────────────────────
  {
    id: '9',
    slug: 'kitchen-exhaust-fan',
    name: 'Kitchen / Laundry Exhaust Fans',
    category: 'Centrifugal Fume Exhaust Fans',
    categorySlug: 'centrifugal-fans',
    description: 'Fume exhaust fans for smoke, grease-laden, humid and hot air ventilation in commercial kitchens and laundries up to 120°C.',
    longDescription: 'SUV Kitchen and Laundry Exhaust Fans are designed for ventilation of smoke, grease-laden, humid and hot air with temperatures up to 120°C. Built with galvanized housing construction and backward inclined, non-overloading, statically and dynamically balanced aviation-grade aluminum impellers for maximum efficiency. Low power consumption and low sound level maintained even in demanding conditions. Available in single and three phase.',
    applications: ['Restaurant Kitchens', 'Hotel Main Kitchens', 'Commercial Laundries', 'Food Processing Facilities', 'Fast Food Outlets'],
    features: [
      'Designed for ventilation of smoke, grease-laden, humid and hot air up to 120°C',
      'Galvanized housing construction',
      'Backward inclined, non-overloading aviation-grade aluminum impeller',
      'Statically and dynamically balanced for maximum efficiency',
      'Low power consumption and low sound level',
      'Installation flexibility and ease of service',
      'Available in Single & Three Phase',
    ],
    specs: {
      capacityRange: '850 CMH to 25,000 CMH',
      staticPressure: 'Up to 70 mmwg',
      temperatureRating: 'Up to 120°C',
      voltage: '220V / 415V',
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['kitchen exhaust fan', 'commercial kitchen blower', 'grease exhaust fan', 'restaurant ventilation', 'high temperature fan India'],
    image: '/products/kitchen-exhaust-fan/kitchen-fume-exhaust.png',
    images: [
      '/products/kitchen-exhaust-fan/kitchen-fume-exhaust.png',
    ],
    details: [
      {
        title: 'Kitchen / Laundry Fume Exhaust Fan',
        content: 'Designed for ventilation of smoke, grease-laden, humid and hot air with temperature up to 120°C\n• Galvanized housing construction\n• Backward inclined, non-overloading, statically and dynamically balanced aviation grade aluminum impeller for maximum efficiency\n• Low power consumption / low sound level\n• Installation flexibility and ease of service\n• Available in Single & Three Phase\n\nCapacity: 850 CMH to 25,000 CMH\nStatic Pressure: Up to 70 mmwg',
        image: '/products/kitchen-exhaust-fan/kitchen-fume-exhaust.png',
      },
    ],
  },

  // ─── 11. TOILET EXHAUST ───────────────────────────────────────────────────────
  {
    id: '11',
    slug: 'toilet-exhaust',
    name: 'Toilet Exhaust Systems',
    category: 'Insulated Box Fans',
    categorySlug: 'insulated-box-fans',
    description: 'Quiet, efficient exhaust solutions for commercial restrooms — low sound, backdraft dampers, continuous duty motors.',
    longDescription: 'Effective restroom ventilation is critical for maintaining hygiene and preventing odors in commercial buildings. SUV Toilet Exhaust Systems deliver quiet, reliable air exchange for individual restrooms and multi-floor facilities with compact, easy-to-install designs.',
    applications: ['Office Restrooms', 'Public Washrooms', 'Shopping Mall Toilets', 'Hospital Bathrooms', 'Airport Restrooms'],
    features: [
      'Quiet operation for discreet ventilation',
      'Continuous duty rated motors',
      'Backdraft dampers prevent odor migration',
      'Corrosion-resistant internal components',
      'Compact design for easy installation',
      'Available in Single Phase',
    ],
    specs: {
      capacityRange: '200 CMH to 5,000 CMH',
      soundLevel: 'Below 45 dBA',
      voltage: '220V Single Phase',
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['toilet exhaust fan', 'bathroom ventilation system', 'commercial restroom fan', 'quiet washroom fan India'],
    image: '/ProductImage.webp',
  },

  // ─── 12. TURNKEY HVAC ────────────────────────────────────────────────────────
  {
    id: '12',
    slug: 'turnkey-hvac-products',
    name: 'Turnkey HVAC — End-to-End Solutions',
    category: 'Turnkey HVAC Solutions',
    categorySlug: 'turnkey-solutions',
    description: 'Complete supply, installation, commissioning, and handover of AHUs, air washers, FCUs, FFUs, air curtains, and integrated clean room solutions.',
    longDescription: 'SUV offers end-to-end HVAC service covering supply, professional installation, precision commissioning, and final handover of essential air handling equipment for all commercial and industrial applications. Our Turnkey HVAC product list includes Air Handling Units (AHU), Air Washer Systems, Fan Coil Units (FCU), Fan Filter Units (FFU), Air Curtains, Air Distribution Terminals (Grilles, Diffusers), and Complete Clean Room solutions — including insulated panels, HVAC integration, specialized ducting, and electrical systems.',
    applications: ['Pharmaceutical Labs', 'Precision Manufacturing', 'Hospitals', 'Data Centers', 'Large Commercial Complexes'],
    features: [
      'Air Handling Units (AHU)',
      'Air Washer Systems',
      'Fan Coil Units (FCU) & Fan Filter Units (FFU)',
      'Air Curtains & Air Distribution Terminals (Grilles, Diffusers)',
      'Complete Clean Rooms — insulated panels, HVAC, ducting, electrical',
      'Full professional installation, commissioning, and handover',
    ],
    specs: {
      capacityRange: 'Customizable up to 1,000,000 CMH',
      efficiency: 'System-wide energy optimization',
      coverage: 'Complete facility HVAC',
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['turnkey HVAC India', 'air handling unit service', 'industrial HVAC installation', 'clean room solution', 'AHU commissioning'],
    image: '/products/turnkey-hvac-products/turnkey-hvac-4.jpg',
    images: [
      '/products/turnkey-hvac-products/turnkey-hvac-4.jpg',
      '/products/turnkey-hvac-products/turnkey-hvac-1.jpg',
      '/products/turnkey-hvac-products/turnkey-hvac-2.jpg',
      '/products/turnkey-hvac-products/turnkey-hvac-3.jpg',
      '/products/turnkey-hvac-products/clean-room.jpg',
    ],
    details: [
      {
        title: 'Air Handling Units (AHU) & Fan Coil Units',
        content: 'Supply, installation, commissioning, and handover of Air Handling Units (AHU), Fan Coil Units (FCU), Fan Filter Units (FFU), and Air Washer Systems for complete commercial and industrial HVAC solutions.',
        image: '/products/turnkey-hvac-products/turnkey-hvac-1.jpg',
      },
      {
        title: 'Air Curtains & Distribution Terminals',
        content: 'Supply and installation of air curtains, grilles, diffusers, and complete air distribution terminals for balanced airflow throughout the facility.',
        image: '/products/turnkey-hvac-products/turnkey-hvac-2.jpg',
      },
      {
        title: 'Integrated Clean Room Solutions',
        content: 'Complete clean room delivery including insulated panels, HVAC integration, specialized ducting, and electrical systems. Suitable for pharmaceutical, medical device, and precision manufacturing facilities.',
        image: '/products/turnkey-hvac-products/clean-room.jpg',
      },
      {
        title: 'End-to-End Project Execution',
        content: 'From initial load calculations and system design to professional on-site installation and final commissioning. Full documentation, training, and Annual Maintenance Contracts (AMC) available.',
        image: '/products/turnkey-hvac-products/turnkey-hvac-4.jpg',
      },
    ],
  },

  // ─── 13. HVAC AIR DUCTS / COMMERCIAL KITCHEN HOODS ──────────────────────────
  {
    id: '13',
    slug: 'hvac-air-duct-kitchen-hoods',
    name: 'HVAC Air Ducts / Commercial Kitchen Hoods',
    category: 'HVAC Air Ducts & Hoods',
    categorySlug: 'hvac-ducts',
    description: 'GI, SS, AL, and MS air ducts in round, rectangle, and oval shapes plus commercial kitchen hoods in GI and SS.',
    longDescription: 'SUV manufactures a comprehensive range of HVAC air ducts in round, rectangular, and oval shapes using Galvanized Steel (GI), Stainless Steel (SS), Aluminum (AL), and Mild Steel (MS). Commercial Kitchen Hoods are available in GI and premium SS finishes, designed for optimal capture velocity to efficiently remove smoke and grease from commercial cooking areas.',
    applications: ['Kitchen Exhaust', 'Centralized Air Conditioning', 'Fume Extraction', 'Fresh Air Supply', 'Industrial Ventilation'],
    features: [
      'Duct types: Round, Rectangle, and Oval',
      'Materials: MS, GI, AL, SS',
      'Commercial Kitchen Hoods in GI and SS',
      'Custom sizes and configurations available',
      'Compliance with SMACNA standards',
    ],
    specs: {
      capacityRange: 'Custom sizes',
      materials: ['GI (Galvanized)', 'SS (Stainless Steel)', 'AL (Aluminum)', 'MS (Mild Steel)'],
      shapes: ['Round', 'Rectangle', 'Oval'],
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['HVAC ducting manufacturer', 'commercial kitchen hood', 'GI ducting India', 'SS kitchen exhaust hood', 'industrial air ducts'],
    image: '/products/hvac-air-duct-kitchen-hoods/hvac-air-duct.jpg',
    images: [
      '/products/hvac-air-duct-kitchen-hoods/hvac-air-duct.jpg',
      '/products/hvac-air-duct-kitchen-hoods/kitchen-hood.jpg',
    ],
    details: [
      {
        title: 'HVAC Air Ducts',
        content: 'Type: Round, Rectangle and Oval\nMaterial: MS, GI, AL, SS\nCustom sizes and configurations available on order.',
        image: '/products/hvac-air-duct-kitchen-hoods/hvac-air-duct.jpg',
      },
      {
        title: 'Commercial Kitchen Hoods',
        content: 'Material: GI and SS\nDesigned with optimal capture velocities to efficiently remove smoke and grease from commercial cooking areas.',
        image: '/products/hvac-air-duct-kitchen-hoods/kitchen-hood.jpg',
      },
    ],
  },

  // ─── 14. TUBE AXIAL FANS ─────────────────────────────────────────────────────
  {
    id: '14',
    slug: 'tube-axial-fans',
    name: 'Tube Axial Fans',
    category: 'Axial Flow Fans',
    categorySlug: 'axial-flow-fans',
    description: 'Direct drive tube axial fans for ducted and non-ducted indoor/outdoor systems — 315 mm to 1600 mm diameter, up to 100,000 CFM.',
    longDescription: 'SUV Tube Axial Fans feature direct drive construction for indoor and outdoor installation. Easy installation in ducted and non-ducted systems. Available in sizes from 315 mm to 1600 mm diameter with capacity up to 100,000 CFM. The robust design handles tunnel ventilation, industrial exhaust, paint booth exhaust, and process cooling applications.',
    applications: ['Tunnel Ventilation', 'Industrial Exhaust', 'Mine Ventilation', 'Paint Booth Exhaust', 'Process Cooling'],
    features: [
      'Direct drive tube axial design',
      'Indoor and outdoor installation',
      'Easy installation in ducted and non-ducted systems',
      'Size range: 315 mm to 1600 mm diameter',
      'Capacity up to 100,000 CFM',
    ],
    specs: {
      capacityRange: 'Up to 100,000 CFM',
      staticPressure: 'Up to 100 mmwg',
      voltage: '415V 3-Phase',
      sizes: ['315mm', '400mm', '500mm', '630mm', '800mm', '1000mm', '1250mm', '1600mm'],
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['tube axial fan', 'ducted axial blower', 'industrial exhaust blower', 'tunnel fan manufacturer', 'heavy duty axial fan'],
    image: '/products/tube-axial-fans/tube-axial-industrial.png',
    images: [
      '/products/tube-axial-fans/tube-axial-industrial.png',
    ],
    details: [
      {
        title: 'Direct Drive Tube Axial Fan',
        content: 'Indoor & Outdoor — easy installation in ducted and non-ducted systems\n• Size range: 315 mm to 1600 mm diameter\n• Capacity up to 100,000 CFM',
        image: '/products/tube-axial-fans/tube-axial-industrial.png',
      },
    ],
  },

  // ─── 16. PURE AIR AIR PURIFIERS ──────────────────────────────────────────────
  {
    id: '16',
    slug: 'air-purifiers',
    name: 'PURE AIR — Commercial & Industrial Air Purifiers',
    category: 'PURE AIR Purifiers',
    categorySlug: 'air-purifiers',
    badge: 'German Engineering',
    description: 'German Mann+Hummel nano-fiber filtration — purifies 2,000 sqft in 10 minutes. ISO 16890 certified. Made in India.',
    longDescription: 'PURE AIR by SUV FANS brings German filtration excellence to commercial and industrial India. Nano fiber-enhanced filters designed by MANN+HUMMEL provide superior dust capture and best-in-class flow resistance. Two-stage filtration removes harmful particles including PM0.1, PM1.0, PM2.5, and PM10. The wall-mount design saves space while delivering 2,000 m³/h airflow that purifies a 1,000 sqft area in just 4 minutes. Filter life up to 6 months. Customised units available for bulk orders.',
    applications: ['Offices', 'Hospitals', 'Hotels', 'Cafeterias', 'Factories & Laboratories'],
    features: [
      'Premium Filters by Mann+Hummel (Germany) — nano fiber-enhanced',
      'Two-stage filtration for exceptional particle removal',
      'Removes PM0.1, PM1.0, PM2.5, and PM10',
      'Filter efficiency: >95% for PM10, 80% for PM2.5 (ISO 16890 Certified)',
      'Filter life up to 6 months — reduces maintenance costs',
      'Live report sharing for real-time air quality monitoring',
    ],
    specs: {
      capacityRange: '2,000 m³/h',
      soundLevel: '<55 dB',
      powerRange: '80W',
      coverage: 'Purifies 1,000 sqft in 4 min / 2,000 sqft in 10 min',
      dimensions: '950 mm (L) × 750 mm (W) × 250 mm (H)',
      efficiency: '>95% PM10, 80% PM2.5 — ISO 16890 Certified',
    },
    pricing: 'Contact for Bulk Pricing',
    specFeatureTable: [
      { feature: 'Filter',                           value: 'Premium Filters by Mann+Hummel (Germany)' },
      { feature: 'Manufacturing',                    value: 'Mass Production-Ready, Proudly Made in India' },
      { feature: 'Air Purifier Technology',          value: 'Removes Harmful Particles: PM0.1, PM1.0, PM2.5 & PM10' },
      { feature: 'Filter Design',                    value: 'Nano Fiber-Enhanced Filters for Superior Dust Capture and Airflow' },
      { feature: 'Filtration Performance',           value: 'Two-Stage Filtration for Exceptional Particle Removal' },
      { feature: 'Filter Life',                      value: 'Lasts Up to 6 Months, Reducing Maintenance Costs' },
      { feature: 'Filter Efficiency',                value: 'Over 95% for PM10 and 80% for PM2.5 (ISO 16890 Certified)' },
      { feature: 'Wall Mount',                       value: 'Convenient Wall Mount for Space-Saving Installation' },
      { feature: 'Noise Levels & Energy Efficiency', value: 'Low Noise Levels (<55 dB) for a Distraction-Free Environment' },
      { feature: 'Product Dimensions',               value: 'Compact Design: 950 mm (L) × 750 mm (W) × 250 mm (H)' },
      { feature: 'Airflow Capacity',                 value: 'High-Capacity 2,000 m³/h for Rapid Air Circulation' },
      { feature: 'Power Consumption',                value: 'Efficient 80W Power Usage for Lower Operating Costs' },
      { feature: 'Time to Recirculate Air',          value: 'Quickly Refreshes a 1,000 Sqft Area in Just 4 Minutes' },
      { feature: 'Warranty',                         value: '3 Years (Excluding Electronics); Filters Replaced as Required' },
      { feature: 'Filter Disposal',                  value: 'Professional, Responsible Filter Disposal Service' },
      { feature: 'Service Interval',                 value: 'Requires Service Only Once Every 6 Months' },
    ],
    seoKeywords: ['air purifier India', 'PURE AIR purifier', 'industrial air purifier', 'Mann Hummel filter', 'commercial air purifier', 'ISO 16890 air purifier'],
    image: '/products/air-purifiers/air-purifier-3.jpg',
    images: [
      '/products/air-purifiers/air-purifier-3.jpg',
      '/products/air-purifiers/air-purifier-4.jpg',
      '/products/air-purifiers/air-purifier-5.jpg',
      '/products/air-purifiers/air-purifier-1.jpg',
      '/products/air-purifiers/air-purifier-2.jpg',
    ],
    details: [
      {
        title: 'German Filtration Excellence — Mann+Hummel',
        content: 'Nano fiber-enhanced filters designed by MANN+HUMMEL (Germany). Provides superior dust capture with best-in-class flow resistance. Two-stage filtration removes PM0.1, PM1.0, PM2.5, and PM10.',
        image: '/products/air-purifiers/air-purifier-3.jpg',
      },
      {
        title: 'Performance',
        content: '• Purifies 2,000 sqft in 10 minutes\n• Filter efficiency: >95% for PM10, 80% for PM2.5 (ISO 16890 Certified)\n• Filter life: up to 6 months\n• Airflow: 2,000 m³/h\n• Power: 80W | Noise: <55 dB',
        image: '/products/air-purifiers/air-purifier-4.jpg',
      },
      {
        title: 'Wall Mount & Dimensions',
        content: 'Convenient wall mount for space-saving installation.\nCompact design: 950 mm (L) × 750 mm (W) × 250 mm (H)\nPurifies 1,000 sqft in 4 minutes.',
        image: '/products/air-purifiers/air-purifier-5.jpg',
      },
      {
        title: 'Warranty & Service',
        content: '3-year warranty (excluding electronics). Service interval: once every 6 months. Professional, responsible filter disposal service. Live report sharing for real-time air quality monitoring. Customised for bulk orders.',
        image: '/products/air-purifiers/air-purifier-1.jpg',
      },
    ],
    whyChooseContent: [
      'ISO 16890 Certified Filters',
      'German Mann+Hummel Technology',
      'Made in India',
      '3-Year Warranty',
      'Service Only Every 6 Months',
      'Live Air Quality Report Sharing',
      'Customised for Bulk Orders',
    ],
  },
];
