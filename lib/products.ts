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
}

export interface SpecTableRow {
  size: string;
  airflow: string;
  voltage: string;
  power: string;
  rpm: string;
  sound: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  applications: string[];
  features: string[];
  specs: ProductSpec;
  specTable?: SpecTableRow[];
  badge?: string;
  image?: string;
}

export const PRODUCT_CATEGORIES = [
  { name: 'Centrifugal Fans', slug: 'centrifugal-fans' },
  { name: 'Fume Exhaust Fans', slug: 'fume-exhaust-fans' },
  { name: 'Axial Flow Fans', slug: 'axial-flow-fans' },
  { name: 'Insulated Box Fans', slug: 'insulated-box-fans' },
  { name: 'Industrial Coolers', slug: 'industrial-coolers' },
  { name: 'Large Diameter HVLS Fans', slug: 'hvls-fans' },
  { name: 'HVAC Air Ducts & Hoods', slug: 'hvac-ducts' },
  { name: 'Turnkey HVAC Solutions', slug: 'turnkey-solutions' },
  { name: 'PURE AIR Purifiers', slug: 'air-purifiers' },
];

export const PRODUCTS: Product[] = [
  // CENTRIFUGAL FANS
  {
    id: '1',
    slug: 'direct-drive-duct-cabinet-inline-fan',
    name: 'Direct Drive Duct Cabinet Inline Fan',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-fans',
    description: 'Compact and efficient inline fan designed for various ventilation applications including clean air and general supply/exhaust.',
    applications: ['Supply', 'Exhaust', 'Clean Air', 'General Ventilation'],
    features: [
      'Galvanized housing',
      'Backward inclined Aviation-grade Aluminum Impeller',
      'Low power consumption',
      'Low sound level',
      'Compact size',
      'Single & Three Phase options',
      'Optional air pre-filter and 25mm insulated housing'
    ],
    specs: {
      capacityRange: '850 CMH to 10,000 CMH',
      staticPressure: 'Up to 30 mmwg',
      voltage: 'Single & Three Phase'
    },
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop'
  },
  {
    id: '2',
    slug: 'belt-driven-cabinet-fan',
    name: 'Belt Driven Cabinet Fan',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-fans',
    description: 'High-capacity cabinet fan suitable for demanding industrial and commercial HVAC systems.',
    applications: ['Supply', 'Exhaust', 'Pressurization', 'Kitchen', 'Smoke Spill'],
    features: [
      'Indoor & Outdoor installation',
      'Easy installation in ducted/non-ducted systems',
      'High capacity performance',
      'Durable construction'
    ],
    specs: {
      capacityRange: '5,000 CMH to 25,000 CMH',
      staticPressure: 'Up to 70 mmwg'
    },
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop'
  },
  {
    id: '3',
    slug: 'power-roof-ventilators-upblast-fan',
    name: 'Power Roof Ventilators Upblast Fan',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-fans',
    description: 'Weather-tight roof ventilator designed for efficient vertical exhaust in commercial buildings.',
    applications: ['Roof ventilation', 'Exhaust'],
    features: [
      'Rhombus hood (high-speed wind resistant)',
      'Curb Cap (weather-tight single-piece)',
      'Backward inclined Aluminum Impeller',
      'Single & Three Phase'
    ],
    specs: {
      capacityRange: '850 CMH to 10,000 CMH',
      staticPressure: 'Up to 30 mmwg',
      voltage: 'Single & Three Phase'
    },
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
  },
  {
    id: '4',
    slug: 'centrifugal-single-width-fan',
    name: 'Centrifugal Single Width Fan',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-fans',
    description: 'Heavy-duty single width fan for high-pressure industrial applications.',
    applications: ['Supply', 'Exhaust', 'Heating', 'Filtration', 'Kitchen', 'Fume Exhaust'],
    features: [
      'High-pressure capacity',
      'Heavy duty high-GSM galvanized housing',
      'Statically and dynamically balanced impeller',
      'Three Phase only'
    ],
    specs: {
      capacityRange: '5,000 CMH to 25,000 CMH',
      staticPressure: 'Up to 70 mmwg',
      voltage: 'Three Phase only'
    },
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&h=400&fit=crop'
  },
  {
    id: '5',
    slug: 'circular-inline-fan',
    name: 'Circular Inline Fan',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-fans',
    description: 'Versatile circular fan for easy installation in ductwork, providing reliable airflow.',
    applications: ['Supply', 'Exhaust'],
    features: [
      'Dynamically balanced backward curved impeller',
      'Direct drive external rotor motor with ball bearing',
      'Overheat protection with auto restart',
      'Mounting brackets standard',
      'Optional Hum-Free speed controller'
    ],
    specs: {
      capacityRange: 'Up to 1,880 CMH (1,100 CFM)',
      voltage: '220V'
    },
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&h=400&fit=crop'
  },
  // FUME EXHAUST FANS
  {
    id: '6',
    slug: 'kitchen-laundry-fan',
    name: 'Kitchen / Laundry Fan',
    category: 'Fume Exhaust Fans',
    categorySlug: 'fume-exhaust-fans',
    description: 'Specialized fan rated for high temperatures, perfect for kitchen and laundry exhaust.',
    applications: ['Kitchen ventilation', 'Laundry', 'Smoke/grease/humid/hot air'],
    features: [
      'Rated for temperatures up to 120°C',
      'Galvanized housing',
      'Non-overloading backward inclined Aviation-grade Aluminum Impeller',
      'Single & Three Phase'
    ],
    specs: {
      capacityRange: '850 CMH to 25,000 CMH',
      staticPressure: 'Up to 70 mmwg',
      temperatureRating: 'Up to 120°C'
    },
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
  },
  // AXIAL FLOW FANS
  {
    id: '7',
    slug: 'direct-drive-wall-mount-fan',
    name: 'Direct Drive Wall Mount Fan',
    category: 'Axial Flow Fans',
    categorySlug: 'axial-flow-fans',
    description: 'Efficient axial fan for wall mounting in factories and warehouses.',
    applications: ['Factories', 'Warehouses', 'Car parks', 'Industrial environments', 'Data centers'],
    features: [
      'Low power consumption',
      'Inlet and outlet guard provided',
      'Easy installation'
    ],
    specs: {
      capacityRange: '8,500 CMH to 20,500 CMH',
      voltage: '220/415V'
    },
    specTable: [
      { size: '630', airflow: '20,500 CMH', voltage: '220/415V', power: '1,500W', rpm: '1,450', sound: '<85 dBA' },
      { size: '500', airflow: '8,500 CMH', voltage: '220/415V', power: '750W', rpm: '1,450', sound: '<85 dBA' }
    ],
    image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=600&h=400&fit=crop'
  },
  {
    id: '8',
    slug: 'belt-driven-wall-mount-fan',
    name: 'Belt Driven Wall Mount Fan',
    category: 'Axial Flow Fans',
    categorySlug: 'axial-flow-fans',
    description: 'High-volume wall mount fan specifically designed for agricultural and large industrial spaces.',
    applications: ['Factories', 'Poultry Farm', 'Agriculture'],
    features: [
      'High air volume',
      'Low noise level',
      'Robust belt drive system'
    ],
    specs: {
      capacityRange: '16,000 CMH to 55,800 CMH',
      voltage: '220/415V'
    },
    specTable: [
      { size: '1530', airflow: '55,800 CMH', voltage: '220/415V', power: '1,500W', rpm: '325', sound: '<65 dBA' },
      { size: '1380', airflow: '44,000 CMH', voltage: '220/415V', power: '1,100W', rpm: '440', sound: '<65 dBA' },
      { size: '1220', airflow: '38,000 CMH', voltage: '220/415V', power: '750W', rpm: '450', sound: '<65 dBA' },
      { size: '1000', airflow: '32,000 CMH', voltage: '220/415V', power: '550W', rpm: '600', sound: '<65 dBA' },
      { size: '800', airflow: '20,000 CMH', voltage: '220/415V', power: '370W', rpm: '600', sound: '<65 dBA' },
      { size: '650', airflow: '16,000 CMH', voltage: '220/415V', power: '370W', rpm: '600', sound: '<65 dBA' }
    ],
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop'
  },
  {
    id: '9',
    slug: 'propeller-fan',
    name: 'Propeller Fan',
    category: 'Axial Flow Fans',
    categorySlug: 'axial-flow-fans',
    description: 'Economical propeller fan for simple ventilation tasks with high flow and low resistance.',
    applications: ['Supply and Exhaust', 'High flow with low resistance'],
    features: [
      'Compact design',
      'Direct drive motor',
      'Lightweight'
    ],
    specs: {
      capacityRange: '900 CMH to 10,500 CMH',
      voltage: '220V'
    },
    specTable: [
      { size: '600', airflow: '10,500 CMH', voltage: '220V', power: '750W', rpm: '1,380', sound: '72 dBA' },
      { size: '450', airflow: '4,800 CMH', voltage: '220V', power: '230W', rpm: '1,350', sound: '64 dBA' },
      { size: '300', airflow: '2,100 CMH', voltage: '220V', power: '125W', rpm: '2,400', sound: '58 dBA' },
      { size: '200', airflow: '900 CMH', voltage: '220V', power: '50W', rpm: '2,450', sound: '49 dBA' }
    ],
    image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=600&h=400&fit=crop'
  },
  {
    id: '10',
    slug: 'tube-axial-fan',
    name: 'Tube Axial Fan',
    category: 'Axial Flow Fans',
    categorySlug: 'axial-flow-fans',
    description: 'Heavy-duty tube axial fan for industrial exhaust and ducted systems.',
    applications: ['Industrial exhaust', 'Ducted and non-ducted systems'],
    features: [
      'Direct drive',
      'Indoor & Outdoor usage',
      'Wide range of sizes (315mm to 1,600mm)'
    ],
    specs: {
      capacityRange: 'Up to 100,000 CFM'
    },
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=400&fit=crop'
  },
  // INSULATED BOX FANS
  {
    id: '11',
    slug: 'silent-ceiling-exhaust-fan',
    name: 'Silent Ceiling Exhaust Fan',
    category: 'Insulated Box Fans',
    categorySlug: 'insulated-box-fans',
    description: 'Ultra-quiet ceiling fan designed for laboratories, hotels, and commercial spaces.',
    applications: ['Laboratory', 'Bathroom', 'Hotel', 'Cafeteria', 'Smoke room'],
    features: [
      'Mounts under false ceiling',
      'Grilled inlet/Ducted exhaust',
      'Very low sound level',
      'Low power consumption'
    ],
    specs: {
      capacityRange: '200 CFM to 1,500 CFM'
    },
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop'
  },
  // INDUSTRIAL COOLERS
  {
    id: '12',
    slug: 'industrial-cooler-m300',
    name: 'Industrial Cooler M-300',
    category: 'Industrial Coolers',
    categorySlug: 'industrial-coolers',
    description: 'Large industrial cooler with high airflow capacity for large commercial and industrial spaces.',
    applications: ['Industrial', 'Commercial'],
    features: [
      'Ducted exhaust',
      'Auto Clean drain valve',
      'High efficiency cooling pads'
    ],
    specs: {
      capacityRange: '30,000 CMH',
      voltage: '415V',
      powerRange: '3,000W',
      weight: '100 kg',
      soundLevel: '<80 dBA'
    },
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop'
  },
  {
    id: '13',
    slug: 'industrial-cooler-m180',
    name: 'Industrial Cooler M-180',
    category: 'Industrial Coolers',
    categorySlug: 'industrial-coolers',
    description: 'Compact industrial cooler for efficient spot cooling and general ventilation.',
    applications: ['Industrial', 'Commercial'],
    features: [
      'Ducted exhaust',
      'Auto Clean drain valve',
      'Energy efficient'
    ],
    specs: {
      capacityRange: '18,000 CMH',
      voltage: '220/415V',
      powerRange: '1,100W',
      weight: '55 kg',
      soundLevel: '<70 dBA'
    },
    image: 'https://images.unsplash.com/photo-1597423244039-d4c7db2f3733?w=600&h=400&fit=crop'
  },
  // LARGE DIAMETER FANS
  {
    id: '14',
    slug: 'hvls-fan',
    name: 'HVLS Fan (High Volume Low Speed)',
    category: 'Large Diameter HVLS Fans',
    categorySlug: 'hvls-fans',
    badge: 'Up to 200,000 CFM',
    description: 'Giant ceiling fans designed to move massive amounts of air at low speeds, ideal for warehouses.',
    applications: ['Industrial and commercial buildings', 'Large warehouses', 'Factories'],
    features: [
      'Size 16 feet to 24 feet',
      'Speed control enabled',
      'PVC coated & Silicone coated fabric options',
      'Fire retardant Class B (up to 85°C)',
      'Fireproof Silicone (tested up to 270°C for 1 hour)',
      'High anti-tear & tensile strength'
    ],
    specs: {
      capacityRange: 'Up to 200,000 CFM',
      sizes: ['16ft', '18ft', '20ft', '24ft']
    },
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&h=400&fit=crop'
  },
  // HVAC DUCTS
  {
    id: '15',
    slug: 'flexible-ducts-duct-connectors',
    name: 'Flexible Ducts and Duct Connectors',
    category: 'HVAC Air Ducts & Hoods',
    categorySlug: 'hvac-ducts',
    description: 'Comprehensive range of flexible ducts and connectors for all HVAC requirements.',
    applications: ['HVAC systems', 'Ventilation', 'Industrial exhaust'],
    features: [
      'Non-insulated (100–500mm, 25ft)',
      'Insulated (100–450mm, 25ft)',
      'Semi-rigid (75–500mm, 10ft)',
      'Fire rated (100–450mm, 10ft)',
      'Available in PVC & Silicone coated fabric'
    ],
    specs: {
      capacityRange: 'Various sizes'
    },
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop'
  },
  {
    id: '16',
    slug: 'hvac-air-ducts-kitchen-hoods',
    name: 'HVAC Air Ducts / Commercial Kitchen Hoods',
    category: 'HVAC Air Ducts & Hoods',
    categorySlug: 'hvac-ducts',
    description: 'Durable air ducts and kitchen hoods manufactured with various high-quality materials.',
    applications: ['Commercial kitchens', 'Industrial HVAC', 'Ventilation systems'],
    features: [
      'Types: Round, Rectangle, Oval',
      'Materials: MS, GI, AL, SS',
      'Kitchen Hoods available in GI and SS'
    ],
    specs: {
      capacityRange: 'Custom built'
    },
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
  },
  // AIR PURIFIERS
  {
    id: '17',
    slug: 'pure-air-commercial-industrial',
    name: 'PURE AIR Commercial & Industrial Air Purifier',
    category: 'PURE AIR Purifiers',
    categorySlug: 'air-purifiers',
    badge: 'German Filtration Excellence',
    description: 'Premium air purifier featuring German filtration technology, made in India for industrial use.',
    applications: ['Offices', 'Hospitals', 'Hotels', 'Cafeterias', 'Factories', 'Laboratories'],
    features: [
      'Premium Filters by Mann+Hummel (Germany)',
      'Removes PM0.1, PM1.0, PM2.5, PM10',
      'Nano Fiber–Enhanced Filter Design',
      'Two-Stage Filtration',
      'Wall Mountable (space-saving)',
      '3 Years Warranty (excluding electronics)',
      'Live Report Sharing'
    ],
    specs: {
      capacityRange: '2,000 m³/h',
      powerRange: '80W',
      soundLevel: '<55 dB',
      efficiency: '>95% for PM10, >80% for PM2.5',
      coverage: '1,000 sqft in 4 mins / 2,000 sqft in 10 mins'
    },
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop'
  }
];
