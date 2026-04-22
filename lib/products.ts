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
  {
    id: '1',
    slug: 'centrifugal-inline-cubic-fans',
    name: 'Centrifugal Inline Cubic Fans Direct Drive',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-fans',
    description: 'Direct drive duct cabinet inline fans for supply, exhaust, clean air, and general ventilation with compact galvanized housing.',
    longDescription: 'SUV Direct Drive Duct Cabinet Inline Fans feature aviation-grade aluminum backward inclined impellers for maximum efficiency and low sound levels. The compact cubic housing provides installation flexibility — horizontal, vertical, or at any angle — eliminating the need for costly square-to-round transition pieces. Optional air pre-filter and 25 mm insulated housing make these fans ideal for indoor clean air applications including intake, exhaust, return, or make-up air systems.',
    applications: ['Supply & Exhaust Ventilation', 'Clean Room Ventilation', 'Office Buildings', 'Commercial Kitchens', 'General HVAC Systems'],
    features: [
      'Galvanized housing construction',
      'Backward inclined aviation-grade aluminum impeller',
      'Low power consumption and low sound level',
      'Compact in size — installation flexibility and ease of service',
      'Available in single & three phase',
      'Optional air pre-filter and 25 mm insulated housing'
    ],
    specs: {
      capacityRange: '850 CMH to 10,000 CMH',
      staticPressure: 'Up to 30 mmwg',
      voltage: '220V / 415V',
      powerRange: '0.18 kW to 3.7 kW'
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['centrifugal inline fan', 'cubic duct fan', 'direct drive ventilation', 'industrial inline blower', 'commercial HVAC fan India', 'backward inclined impeller', 'HVAC duct fan datasheet'],
    image: '/products/centrifugal-inline-cubic-fans/direct-drive-inline.jpg',
    images: [
      '/products/centrifugal-inline-cubic-fans/direct-drive-inline.jpg',
      '/products/centrifugal-inline-cubic-fans/centrifugal-single-width.jpg',
      '/products/centrifugal-inline-cubic-fans/circular-inline-fan.jpg',
      '/products/centrifugal-inline-cubic-fans/mixed-flow-inline.jpg',
      '/products/centrifugal-inline-cubic-fans/centrifugal-fan-3.jpg',
    ],
    details: [
      {
        title: 'Direct Drive Duct Cabinet Inline Fan',
        content: 'Application: Supply / Exhaust / Clean Air / General ventilation. Galvanized housing construction with backward inclined aviation-grade aluminum impeller. Low power consumption and low sound level. Compact in size — installation flexibility and ease of service. Available in Single & Three Phase. Optional air pre-filter and 25 mm insulated housing.',
        image: '/products/centrifugal-inline-cubic-fans/direct-drive-inline.jpg'
      },
      {
        title: 'Centrifugal Single Width Fan',
        content: 'Application: Supply / Exhaust, Heating, Filtration, Kitchen, Fume exhaust. High-pressure capacity to handle larger ducted systems or filtration requirements. Heavy duty high GSM galvanized housing construction. Statically and dynamically balanced impeller for maximum efficiency. Low power consumption. Available in Three Phase.',
        image: '/products/centrifugal-inline-cubic-fans/centrifugal-single-width.jpg'
      },
      {
        title: 'Circular Inline Fan',
        content: 'Available up to 1,880 m³/hr (1,100 CFM) for supply / exhaust air applications. Dynamically balanced backward curved fan impeller. Direct drive external rotor motor with ball bearing. Motor equipped with overheat protection with auto restart. Mounting brackets supplied as standard. Optional pre-fitted Hum-Free speed controller.',
        image: '/products/centrifugal-inline-cubic-fans/circular-inline-fan.jpg'
      }
    ],
    whyChooseContent: [
      'Compact in Size',
      'High Efficiency',
      'Installation Flexibility',
      'Ease of Service',
      'Cost Effective',
      'Low Power Consumption',
      'Low Sound Levels'
    ]
  },
  {
    id: '2',
    slug: 'axial-wall-exhaust-supply-fans',
    name: 'Axial Wall Exhaust and Supply Fans',
    category: 'Axial Flow Fans',
    categorySlug: 'axial-flow-fans',
    description: 'Direct drive wall-mount axial fans for factories, warehouses, car parks, industrial environments, and data centers with inlet and outlet safety guards.',
    longDescription: 'SUV Axial Wall Exhaust and Supply Fans are engineered to move massive volumes of air at low resistance. Available in direct drive wall mount, propeller fan, and belt driven wall mount configurations, they feature aerodynamically designed blades for maximum airflow with minimal energy consumption. Inlet and outlet guards ensure 100% safe operation. Suitable for large industrial spaces, manufacturing plants, poultry farms, and agriculture where high-volume ventilation at low static pressure is required.',
    applications: ['Factories & Warehouses', 'Car Parks', 'Data Centers', 'Poultry Farms & Agriculture', 'Industrial Environments'],
    features: [
      'Direct drive and belt drive configurations available',
      'Inlet and outlet guard for 100% safe operation',
      'Low power consumption',
      'Weather-proof motor options for outdoor exposure',
      'Variable speed drive compatible',
      'Easy wall-frame mounting'
    ],
    specs: {
      capacityRange: '900 CMH to 55,800 CMH',
      staticPressure: 'Up to 15 mmwg',
      voltage: '220V / 415V',
      sizes: ['200mm', '300mm', '450mm', '500mm', '600mm', '630mm', '800mm', '1000mm', '1220mm', '1380mm', '1530mm']
    },
    specTable: [
      { size: '1530 mm', airflow: '55,800', voltage: '220/415', power: '1500', rpm: '325', sound: '<65' },
      { size: '1380 mm', airflow: '44,000', voltage: '220/415', power: '1100', rpm: '440', sound: '<65' },
      { size: '1220 mm', airflow: '38,000', voltage: '220/415', power: '750',  rpm: '450', sound: '<65' },
      { size: '1000 mm', airflow: '32,000', voltage: '220/415', power: '550',  rpm: '600', sound: '<65' },
      { size: '800 mm',  airflow: '20,000', voltage: '220/415', power: '370',  rpm: '600', sound: '<65' },
      { size: '650 mm',  airflow: '16,000', voltage: '220/415', power: '370',  rpm: '600', sound: '<65' },
      { size: '630 mm',  airflow: '20,500', voltage: '220/415', power: '1500', rpm: '1450', sound: '<85' },
      { size: '500 mm',  airflow: '8,500',  voltage: '220/415', power: '750',  rpm: '1450', sound: '<85' },
      { size: '600 mm',  airflow: '10,500', voltage: '220',     power: '750',  rpm: '1380', sound: '72' },
      { size: '450 mm',  airflow: '4,800',  voltage: '220',     power: '230',  rpm: '1350', sound: '64' },
      { size: '300 mm',  airflow: '2,100',  voltage: '220',     power: '125',  rpm: '2400', sound: '58' },
      { size: '200 mm',  airflow: '900',    voltage: '220',     power: '50',   rpm: '2450', sound: '49' },
    ],
    pricing: 'Contact for Quote',
    seoKeywords: ['axial wall fan', 'industrial exhaust fan', 'factory ventilation fan', 'warehouse supply fan', 'wall mounted axial blower', 'industrial wall ventilator specs'],
    image: '/products/axial-wall-exhaust-supply-fans/direct-drive-wall-mount.jpg',
    images: [
      '/products/axial-wall-exhaust-supply-fans/direct-drive-wall-mount.jpg',
      '/products/axial-wall-exhaust-supply-fans/propeller-fan.jpg',
      '/products/axial-wall-exhaust-supply-fans/belt-driven-wall-mount.jpg',
    ],
    details: [
      {
        title: 'Direct Drive Wall Mount Fans',
        content: 'Application: Factories, Warehouses, car parks, industrial environments, data centers. Low power consumption. Inlet and outlet guard for 100% safe operation.',
        image: '/products/axial-wall-exhaust-supply-fans/direct-drive-wall-mount.jpg'
      },
      {
        title: 'Propeller Fan',
        content: 'Application: Factories, Poultry Farm, Agriculture. High-airflow direct drive design for ventilation of large agricultural and industrial spaces at low static pressure.',
        image: '/products/axial-wall-exhaust-supply-fans/propeller-fan.jpg'
      },
      {
        title: 'Belt Driven Wall Mount Fans',
        content: 'Application: Supply and Exhaust — high flow with low resistance. Belt drive system allows precise speed adjustment via pulley ratio for large-scale industrial ventilation.',
        image: '/products/axial-wall-exhaust-supply-fans/belt-driven-wall-mount.jpg'
      }
    ]
  },
  {
    id: '4',
    slug: 'power-roof-ventilators-upblast-fan',
    name: 'Power Roof Ventilators Upblast Fan',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-inline-cubic-fans',
    description: 'Weather-tight curb cap roof ventilators with rhombus hood — direct drive (850–10,000 CMH) and belt drive (5,000–25,000 CMH) variants for commercial and industrial rooftop exhaust.',
    longDescription: 'SUV Power Roof Ventilators (PRV) with Upblast discharge throw air high above the roofline, preventing re-entrainment of odors and pollutants. The aerodynamic Rhombus hood is specially designed to withstand high wind speeds while providing efficacious cooling of the motor to maximize motor life. Available in two variants: Direct Drive (850–10,000 CMH, up to 30 mmwg) and Belt Drive (5,000–25,000 CMH, up to 70 mmwg). The single-piece curb cap with punched mounting holes allows easy rooftop installation.',
    applications: ['Rooftop Exhaust', 'Commercial Kitchen Grease Exhaust', 'Warehouse Ventilation', 'Multi-story Building Exhaust', 'Industrial Fume Exhaust'],
    features: [
      'Direct Drive variant: 850–10,000 CMH, up to 30 mmwg',
      'Belt Drive variant: 5,000–25,000 CMH, up to 70 mmwg',
      'Rhombus hood designed to withstand high-speed wind with cooling fins',
      'Single-piece weather-tight curb cap with punched mounting holes',
      'Galvanized housing with backward inclined aluminum impeller',
      'Available in Single & Three Phase'
    ],
    specs: {
      capacityRange: '850 CMH to 25,000 CMH',
      staticPressure: 'Up to 70 mmwg (belt drive) / 30 mmwg (direct drive)',
      voltage: '220V / 415V'
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['roof ventilator fan', 'upblast exhaust fan', 'kitchen roof fan', 'commercial roof exhaust', 'industrial rooftop ventilation'],
    image: '/products/power-roof-ventilators-upblast-fan/power-roof-ventilator.jpg',
    images: [
      '/products/power-roof-ventilators-upblast-fan/power-roof-ventilator.jpg',
    ],
    details: [
      {
        title: 'Power Roof Ventilator — Upblast Fan',
        content: 'Rhombus hood specially designed to withstand high-speed wind with cooling fins on sides to maximize motor life. Single-piece weather-tight curb cap with punched mounting holes for easy rooftop installation. Galvanized housing construction with backward inclined aluminum impeller. Low power consumption and low sound level. Available in Single & Three Phase.',
        image: '/products/power-roof-ventilators-upblast-fan/power-roof-ventilator.jpg'
      }
    ]
  },
  {
    id: '5',
    slug: 'ceiling-exhaust-cabinet-fans',
    name: 'Ceiling Exhaust & Circular Inline Fans',
    category: 'Insulated Box Fans',
    categorySlug: 'insulated-box-fans',
    description: 'Ultra-quiet ceiling-mounted exhaust and circular inline fans for laboratories, bathrooms, hotels, cafeterias, and smoke rooms.',
    longDescription: 'SUV Silent Ceiling Exhaust Fans mount under false ceilings with grilled inlet and ducted exhaust for discreet ventilation. The dynamically balanced backward curved fan impeller and direct drive external rotor motor with ball bearing deliver very low sound and low power consumption. Circular Inline Fans are available up to 1880 m³/hr (1100 CFM) and can be supplied with a pre-fitted Hum-Free speed controller. Motor is equipped with overheat protection with auto restart. Standard mounting brackets included.',
    applications: ['Laboratories', 'Bathrooms & Toilets', 'Hotels & Cafeterias', 'Smoke Rooms', 'Hospital Wards'],
    features: [
      'Mount under false ceiling with grilled inlet / ducted exhaust',
      'Very low sound and low power consumption',
      'Dynamically balanced backward curved fan impeller',
      'Direct drive external rotor motor with ball bearing',
      'Motor equipped with overheat protection with auto restart',
      'Optional pre-fitted Hum-Free speed controller'
    ],
    specs: {
      capacityRange: '200 CFM to 1,500 CFM (up to 1,880 m³/hr)',
      voltage: '220V Single Phase',
      soundLevel: '<45 dBA'
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['ceiling exhaust fan', 'silent cabinet fan', 'circular inline fan', 'commercial bathroom exhaust', 'quiet office ventilation'],
    image: '/products/ceiling-exhaust-cabinet-fans/silent-ceiling-exhaust.jpg',
    images: [
      '/products/ceiling-exhaust-cabinet-fans/silent-ceiling-exhaust.jpg',
    ],
    details: [
      {
        title: 'Silent Ceiling Exhaust Fan',
        content: 'Application: Laboratory, Bathroom, Hotel, Cafeteria, Smoke room. Mounts under false ceiling with grilled inlet and ducted exhaust. Very low sound and low power consumption. Capacity: 200 CFM to 1,500 CFM.',
        image: '/products/ceiling-exhaust-cabinet-fans/silent-ceiling-exhaust.jpg'
      },
      {
        title: 'Motor & Drive',
        content: 'Direct drive external rotor motor with ball bearing. Dynamically balanced backward curved fan impeller. Motor equipped with overheat protection with auto restart. Optional pre-fitted Hum-Free speed controller.'
      }
    ],
    whyChooseContent: [
      'Very Low Sound Levels',
      'Low Power Consumption',
      'Overheat Protection',
      'Easy Ceiling Installation',
      'Optional Speed Control',
      'Compact Design'
    ]
  },
  {
    id: '6',
    slug: 'hvls-fans',
    name: 'HVLS Fans (High Volume Low Speed)',
    category: 'Large Diameter HVLS Fans',
    categorySlug: 'hvls-fans',
    description: 'Large-diameter industrial HVLS fans up to 24 feet delivering up to 200,000 CFM for factories, warehouses, and commercial buildings with speed control.',
    longDescription: 'SUV High Volume Low Speed (HVLS) fans move massive volumes of air with slow, gentle rotation. Available in sizes from 16 to 24 feet, a single HVLS fan can replace dozens of small high-speed fans, dramatically reducing energy costs. PVC coated fabric blades (fire retardant, Class B fire rating, suitable up to 85°C) or Silicone coated fabric (tested suitable up to 270°C for 1 hour) options provide high anti-tear and tensile strength for longer life. Built-in speed control for variable airflow. Ideal for large industrial and commercial buildings requiring year-round comfort and destratification.',
    applications: ['Large Warehouses', 'Distribution Centers', 'Manufacturing Plants', 'Gymnasiums', 'Airport Hangars'],
    features: [
      'Available up to 200,000 CFM capacity',
      'Size range: 16 feet to 24 feet diameter',
      'Built-in speed control',
      'Fire retardant PVC coated fabric — Class B fire rating, up to 85°C',
      'Silicone coated fabric option — tested to 270°C for 1 hour',
      'High anti-tear and tensile strength for longer blade life'
    ],
    specs: {
      capacityRange: 'Up to 200,000 CFM',
      sizes: ['16 ft', '18 ft', '20 ft', '22 ft', '24 ft'],
      coverage: 'Up to 20,000 sq. ft per fan'
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['HVLS fan India', 'industrial ceiling fan', 'large warehouse fan', 'energy efficient cooling', 'big diameter fan manufacturer', 'HVLS fan specifications'],
    image: '/products/hvls-fans/hvls-fan-1.jpg',
    images: [
      '/products/hvls-fans/hvls-fan-1.jpg',
      '/products/hvls-fans/hvls-fan-2.jpg',
    ],
    details: [
      {
        title: 'HVLS Fan — Large Diameter',
        content: 'Application: Industrial and commercial buildings. Available up to 200,000 CFM. Size range: 16 feet to 24 feet. Speed control standard. PVC coated fabric (fire retardant, Class B fire rating, up to 85°C) or silicone coated fabric (tested to 270°C for 1 hour). High anti-tear and tensile strength for longer life.',
        image: '/products/hvls-fans/hvls-fan-1.jpg'
      },
      {
        title: 'Installed View',
        content: 'A single HVLS fan replaces dozens of small high-speed fans, providing gentle, consistent air movement across the entire floor area. Ideal for destratification in winter and cooling in summer.',
        image: '/products/hvls-fans/hvls-fan-2.jpg'
      }
    ]
  },
  {
    id: '7',
    slug: 'flexible-ducts',
    name: 'Flexible Ducts and Duct Connectors',
    category: 'HVAC Air Ducts & Hoods',
    categorySlug: 'hvac-ducts',
    description: 'Non-insulated, insulated, semi-rigid, and fire-rated flexible ducts in round, rectangle, and oval types for all HVAC applications.',
    longDescription: 'SUV flexible ducting covers every HVAC connection need. Non-Insulated (100–500 mm / 25 ft), Insulated (100–450 mm / 25 ft), Semi Rigid (75–500 mm / 10 ft), and Fire Rated (100–450 mm / 10 ft) options are available. Material options include MS, GI, AL, and SS in round, rectangular, and oval duct shapes. Duct connectors provide vibration isolation between fan outlets and duct systems. The robust spring steel wire helix construction maintains shape under both suction and pressure conditions.',
    applications: ['HVAC Secondary Ducting', 'VAV Box Connections', 'Kitchen Hood Exhaust', 'Bathroom Ventilation', 'Industrial Fume Extraction'],
    features: [
      'Non-Insulated: 100–500 mm diameter, 25 ft length',
      'Insulated: 100–450 mm diameter, 25 ft length',
      'Semi Rigid: 75–500 mm diameter, 10 ft length',
      'Fire Rated: 100–450 mm diameter, 10 ft length',
      'Types: Round, Rectangle, and Oval',
      'Materials: MS, GI, AL, SS'
    ],
    specs: {
      capacityRange: 'Custom sizes',
      temperatureRating: '-30°C to +150°C',
      staticPressure: 'Up to 2,500 Pa',
      sizes: ['75mm', '100mm', '150mm', '200mm', '250mm', '300mm', '450mm', '500mm'],
      materials: ['MS (Mild Steel)', 'GI (Galvanized Iron)', 'AL (Aluminum)', 'SS (Stainless Steel)'],
      shapes: ['Round', 'Rectangle', 'Oval']
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['flexible ducting', 'insulated HVAC duct', 'aluminum flex duct', 'ventilation connector', 'flexible air pipe India'],
    image: '/products/flexible-ducts/flexible-duct-main.jpg',
    images: [
      '/products/flexible-ducts/flexible-duct-main.jpg',
      '/products/flexible-ducts/duct-connector.jpg',
    ],
    details: [
      {
        title: 'Flexible Duct Types',
        content: 'Non-Insulated (100–500 mm / 25 ft), Insulated (100–450 mm / 25 ft), Semi Rigid (75–500 mm / 10 ft), Fire Rated (100–450 mm / 10 ft). Available in Round, Rectangle, and Oval shapes in MS, GI, AL, and SS materials.',
        image: '/products/flexible-ducts/flexible-duct-main.jpg'
      },
      {
        title: 'Duct Connectors',
        content: 'Flexible duct connectors provide vibration isolation between fan outlets and duct systems, preventing the transmission of fan noise and vibration into the building structure.',
        image: '/products/flexible-ducts/duct-connector.jpg'
      }
    ]
  },
  {
    id: '8',
    slug: 'insulated-housing-cabinet-fan',
    name: 'Insulated Housing Cabinet Fan / Industrial Cooler',
    category: 'Insulated Box Fans',
    categorySlug: 'insulated-box-fans',
    description: 'Heavy-duty insulated industrial coolers and cabinet fans for ducted exhaust in industrial and commercial environments.',
    longDescription: 'SUV Insulated Housing Cabinet Fans and Industrial Coolers provide high-volume ventilation with reduced thermal and acoustic losses. The auto-clean drain valve and ducted exhaust design make them ideal for industrial and commercial cooling. Available in M-180 (18,000 CMH) and M-300 (30,000 CMH) configurations. Double-skin insulated construction minimizes heat transfer and reduces operational sound levels significantly. These units are the preferred choice for large commercial spaces and demanding industrial environments.',
    applications: ['Industrial Cooling', 'Commercial Spaces', 'Ducted Exhaust Systems', 'Hospital HVAC', 'Data Center Cooling'],
    features: [
      'Ducted exhaust design',
      'Auto-clean drain valve',
      'Double-skin insulated housing for thermal and acoustic performance',
      'High-efficiency centrifugal impeller',
      'Available in single and three phase',
      'Robust galvanized steel cabinet construction'
    ],
    specs: {
      capacityRange: '18,000 CMH to 30,000 CMH',
      staticPressure: 'Up to 60 mmwg',
      voltage: '220V / 415V'
    },
    specTable: [
      { size: 'M-300', airflow: '30,000', voltage: '415',     power: '3000', rpm: '—', sound: '<80' },
      { size: 'M-180', airflow: '18,000', voltage: '220/415', power: '1100', rpm: '—', sound: '<70' },
    ],
    pricing: 'Contact for Quote',
    seoKeywords: ['insulated cabinet fan', 'industrial cooler', 'double skin box fan', 'quiet air handler', 'industrial cabinet blower'],
    image: '/products/insulated-housing-cabinet-fan/sound-insulated-box-fan.jpg',
    images: [
      '/products/insulated-housing-cabinet-fan/sound-insulated-box-fan.jpg',
      '/products/insulated-housing-cabinet-fan/industrial-cooler.jpg',
    ],
    details: [
      {
        title: 'Sound Insulated Box Fan',
        content: 'Double-skin insulated housing construction with forward curved impeller. Ultra-quiet operation for noise-sensitive environments. Ideal for laboratories, hotels, hospitals, and commercial buildings requiring discreet ventilation.',
        image: '/products/insulated-housing-cabinet-fan/sound-insulated-box-fan.jpg'
      },
      {
        title: 'Industrial Cooler',
        content: 'Application: Industrial / Commercial. Ducted exhaust system with auto clean drain valve. M-300 model: 30,000 CMH, 415V, 3,000W, 100 kg weight, < 80 dBA. M-180 model: 18,000 CMH, 220/415V, 1,100W, 55 kg weight, < 70 dBA.',
        image: '/products/insulated-housing-cabinet-fan/industrial-cooler.jpg'
      }
    ]
  },
  {
    id: '9',
    slug: 'kitchen-exhaust-fan',
    name: 'Kitchen & Laundry Exhaust Fans',
    category: 'Centrifugal Fume Exhaust Fans',
    categorySlug: 'centrifugal-fans',
    description: 'Specialized fume exhaust fans designed for smoke, grease-laden, humid and hot air in commercial kitchens and laundries up to 120°C.',
    longDescription: 'SUV Kitchen and Laundry Exhaust Fans use galvanized housing construction with backward inclined, non-overloading, statically and dynamically balanced aviation-grade aluminum impellers for maximum efficiency. Designed to handle ventilation of smoke, grease-laden, humid and hot air at temperatures up to 120°C. Low power consumption and low sound levels are maintained even in demanding conditions. Available in single and three phase. Capacity range covers both light-duty laundry fans and heavy commercial kitchen exhaust systems.',
    applications: ['Restaurant Kitchens', 'Hotel Main Kitchens', 'Commercial Laundries', 'Food Processing Facilities', 'Fast Food Outlets'],
    features: [
      'Galvanized housing construction',
      'Backward inclined non-overloading aviation-grade aluminum impeller',
      'Statically and dynamically balanced for maximum efficiency',
      'Handles smoke, grease-laden, humid and hot air up to 120°C',
      'Low power consumption and low sound level',
      'Available in single & three phase'
    ],
    specs: {
      capacityRange: '850 CMH to 25,000 CMH',
      staticPressure: 'Up to 70 mmwg',
      temperatureRating: 'Up to 120°C',
      voltage: '220V / 415V'
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['kitchen exhaust fan', 'commercial kitchen blower', 'grease exhaust fan', 'restaurant ventilation', 'high temperature fan India', 'laundry exhaust fan'],
    image: '/products/kitchen-exhaust-fan/kitchen-laundry-fan.jpg',
    images: [
      '/products/kitchen-exhaust-fan/kitchen-laundry-fan.jpg',
    ],
    details: [
      {
        title: 'Kitchen & Laundry Fume Exhaust Fan',
        content: 'Designed for ventilation of smoke, grease-laden, humid, and hot air with temperature up to 120°C. Galvanized housing construction with backward inclined, non-overloading, statically and dynamically balanced aviation-grade aluminum impeller for maximum efficiency. Low power consumption and low sound level. Installation flexibility and ease of service. Available in Single & Three Phase.',
        image: '/products/kitchen-exhaust-fan/kitchen-laundry-fan.jpg'
      }
    ]
  },
  {
    id: '10',
    slug: 'laundry-fan',
    name: 'Laundry Fan',
    category: 'Centrifugal Fume Exhaust Fans',
    categorySlug: 'centrifugal-fans',
    description: 'Robust exhaust fans designed to handle high humidity and lint-laden air in commercial laundry facilities.',
    longDescription: 'Laundry facilities present a unique challenge for ventilation: high humidity combined with airborne lint. Our Laundry Fans are built to handle these conditions without clogging or corroding. The impellers are designed with a self-cleaning profile to minimize lint accumulation, while the housing is treated with moisture-resistant coatings. These fans ensure quick moisture removal, preventing mold growth and ensuring the efficiency of commercial dryers.',
    applications: ['Commercial Laundries', 'Hotel Laundry Rooms', 'Hospital Linen Services', 'Garment Factories', 'Dry Cleaning Plants'],
    features: [
      'Moisture-resistant motor and housing',
      'Self-cleaning impeller reduces lint buildup',
      'High static pressure for long duct runs',
      'Corrosion-resistant finishes',
      'Available in direct and belt drive',
      'Variable speed control for energy savings'
    ],
    specs: {
      capacityRange: '1,500 CMH to 15,000 CMH',
      staticPressure: 'Up to 50 mmwg',
      voltage: '220V / 415V'
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['laundry exhaust fan', 'commercial laundry blower', 'humid air exhaust', 'lint resistant fan', 'industrial dryer exhaust'],
    image: '/products/kitchen-exhaust-fan/kitchen-laundry-fan.jpg'
  },
  {
    id: '11',
    slug: 'toilet-exhaust',
    name: 'Toilet Exhaust Systems',
    category: 'Insulated Box Fans',
    categorySlug: 'insulated-box-fans',
    description: 'Efficient and quiet exhaust solutions for maintaining hygiene and air quality in commercial restrooms.',
    longDescription: 'Effective restroom ventilation is critical for maintaining hygiene and preventing odors in commercial buildings. Our Toilet Exhaust Systems range from small ceiling-mounted units for individual restrooms to large centralized cabinet fans for multi-story facilities. We focus on providing high air exchange rates with minimal noise, ensuring a pleasant environment for users. These systems can be integrated with occupancy sensors and building management systems for automated operation.',
    applications: ['Office Restrooms', 'Public Washrooms', 'Shopping Mall Toilets', 'Hospital Bathrooms', 'Airport Restrooms'],
    features: [
      'Quiet operation for discreet ventilation',
      'Continuous duty rated motors',
      'Backdraft dampers prevent odor migration',
      'Corrosion-resistant internal components',
      'Easy integration with lighting/occupancy sensors',
      'Compact designs for easy installation'
    ],
    specs: {
      capacityRange: '200 CMH to 5,000 CMH',
      soundLevel: 'Below 45 dBA',
      voltage: '220V Single Phase'
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['toilet exhaust fan', 'bathroom ventilation system', 'commercial restroom fan', 'centralized toilet exhaust', 'quiet washroom fan'],
    image: '/ProductImage.webp'
  },
  {
    id: '12',
    slug: 'turnkey-hvac-products',
    name: 'Turnkey HVAC — End-to-End Solutions',
    category: 'Turnkey HVAC Solutions',
    categorySlug: 'turnkey-solutions',
    description: 'Complete supply, installation, commissioning, and handover of air handling equipment including AHUs, air washers, FCUs, FFUs, air curtains, and integrated clean room solutions.',
    longDescription: 'SUV offers end-to-end HVAC service covering supply, professional installation, precision commissioning, and final handover of essential air handling equipment. Our Turnkey HVAC product list includes Air Handling Units (AHU), Air Washer Systems, Fan Coil Units (FCU), Fan Filter Units (FFU), Air Curtains, Air Distribution Terminals (Grilles, Diffusers), and Complete Clean Room solutions with insulated panels, HVAC integration, specialized ducting, and electrical systems.',
    applications: ['Pharmaceutical Labs', 'Precision Manufacturing', 'Hospitals', 'Data Centers', 'Large Commercial Complexes'],
    features: [
      'Air Handling Units (AHU)',
      'Air Washer Systems',
      'Fan Coil Units (FCU) & Fan Filter Units (FFU)',
      'Air Curtains & Distribution Terminals (Grilles, Diffusers)',
      'Complete Clean Rooms — panels, HVAC, ducting, electrical',
      'Full professional installation, commissioning, and handover'
    ],
    specs: {
      capacityRange: 'Customizable up to 1,000,000 CMH',
      efficiency: 'System-wide energy optimization',
      coverage: 'Complete facility HVAC'
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['turnkey HVAC India', 'air handling unit service', 'industrial HVAC installation', 'complete ventilation solution', 'AHU commissioning', 'clean room solution'],
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
        image: '/products/turnkey-hvac-products/turnkey-hvac-1.jpg'
      },
      {
        title: 'Air Curtains & Distribution Terminals',
        content: 'Supply and installation of air curtains, grilles, diffusers, and complete air distribution terminals for balanced airflow throughout the facility.',
        image: '/products/turnkey-hvac-products/turnkey-hvac-2.jpg'
      },
      {
        title: 'Integrated Clean Room Solutions',
        content: 'Complete clean room delivery including insulated panels, HVAC integration, specialized ducting, and electrical systems. Suitable for pharmaceutical, medical device, and precision manufacturing facilities.',
        image: '/products/turnkey-hvac-products/clean-room.jpg'
      },
      {
        title: 'End-to-End Project Execution',
        content: 'From initial load calculations and system design to professional on-site installation and final commissioning. Full documentation, training, and Annual Maintenance Contracts (AMC) available.',
        image: '/products/turnkey-hvac-products/turnkey-hvac-4.jpg'
      }
    ]
  },
  {
    id: '13',
    slug: 'hvac-air-duct-kitchen-hoods',
    name: 'HVAC Air Ducts / Commercial Kitchen Hoods',
    category: 'HVAC Air Ducts & Hoods',
    categorySlug: 'hvac-ducts',
    description: 'GI, SS, AL, and MS air ducts in round, rectangle, and oval shapes plus commercial kitchen hoods in GI and SS for complete air distribution.',
    longDescription: 'High-quality ducting is the backbone of any efficient HVAC system. We manufacture a wide range of air ducts in round, rectangular, and oval shapes in Galvanized Steel (GI), Stainless Steel (SS), Aluminum (AL), and Mild Steel (MS). Our ducts are fabricated using CNC machines for perfect fit and minimal leakage. Commercial Kitchen Hoods are available in GI and premium SS finishes, designed with optimal capture velocities to ensure all smoke and grease are efficiently removed from the cooking area.',
    applications: ['Kitchen Exhaust', 'Centralized Air Conditioning', 'Fume Extraction', 'Fresh Air Supply', 'Industrial Ventilation'],
    features: [
      'Available in GI, SS, AL, and MS materials',
      'Duct types: Round, Rectangle, and Oval',
      'Commercial Kitchen Hoods in GI and SS',
      'CNC fabricated for high precision and low leakage',
      'Compliance with SMACNA and local standards',
      'Custom sizes and configurations available'
    ],
    specs: {
      capacityRange: 'Custom sizes',
      materials: ['GI (Galvanized)', 'SS (Stainless Steel)', 'AL (Aluminum)', 'MS (Mild Steel)'],
      shapes: ['Rectangular', 'Round', 'Oval']
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['HVAC ducting manufacturer', 'commercial kitchen hood', 'GI ducting India', 'SS kitchen exhaust', 'industrial air ducts'],
    image: '/products/hvac-air-duct-kitchen-hoods/hvac-air-duct.jpg',
    images: [
      '/products/hvac-air-duct-kitchen-hoods/hvac-air-duct.jpg',
      '/products/hvac-air-duct-kitchen-hoods/kitchen-hood.jpg',
    ],
    details: [
      {
        title: 'HVAC Air Ducts',
        content: 'Type: Round, Rectangle, and Oval. Material: MS, GI, AL, SS. CNC fabricated for high precision and minimal leakage. Compliance with SMACNA and local standards. Custom sizes and configurations available on order.',
        image: '/products/hvac-air-duct-kitchen-hoods/hvac-air-duct.jpg'
      },
      {
        title: 'Commercial Kitchen Hoods',
        content: 'Available in GI and SS finishes. Designed with optimal capture velocities to efficiently remove smoke and grease from the cooking area. Compliant with fire safety and ventilation standards.',
        image: '/products/hvac-air-duct-kitchen-hoods/kitchen-hood.jpg'
      }
    ]
  },
  {
    id: '14',
    slug: 'tube-axial-fans',
    name: 'Tube Axial Fans',
    category: 'Axial Flow Fans',
    categorySlug: 'axial-flow-fans',
    description: 'Direct drive tube axial fans for ducted and non-ducted indoor and outdoor systems, 315 mm to 1600 mm diameter, up to 100,000 CFM.',
    longDescription: 'SUV Tube Axial Fans are designed for high-volume air movement in both ducted and non-ducted systems. Direct drive construction ensures maintenance-free operation indoors and outdoors. Available in sizes from 315 mm to 1600 mm diameter, these fans can handle up to 100,000 CFM capacity. The heavy-gauge steel housing and aerodynamically optimized impellers ensure longevity and performance in industrial exhaust, tunnel ventilation, and process cooling applications.',
    applications: ['Tunnel Ventilation', 'Industrial Exhaust', 'Mine Ventilation', 'Paint Booth Exhaust', 'Process Cooling'],
    features: [
      'Direct drive tube axial design',
      'Indoor and outdoor installation',
      'Easy installation in ducted and non-ducted systems',
      'Size range: 315 mm to 1600 mm diameter',
      'Capacity up to 100,000 CFM',
      'Explosion-proof motor options available'
    ],
    specs: {
      capacityRange: 'Up to 100,000 CFM',
      staticPressure: 'Up to 100 mmwg',
      voltage: '415V 3-Phase',
      sizes: ['315mm', '400mm', '500mm', '630mm', '800mm', '1000mm', '1250mm', '1600mm']
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['tube axial fan', 'ducted axial blower', 'industrial exhaust blower', 'tunnel fan manufacturer', 'heavy duty axial fan'],
    image: '/products/tube-axial-fans/tube-axial-fan.jpg',
    images: [
      '/products/tube-axial-fans/tube-axial-fan.jpg',
      '/products/tube-axial-fans/axial-fan-2.jpg',
    ],
    details: [
      {
        title: 'Direct Drive Tube Axial Fan',
        content: 'Indoor and outdoor installation. Easy installation in ducted and non-ducted systems. Size range: 315 mm to 1600 mm diameter. Capacity up to 100,000 CFM. Ideal for tunnel ventilation, industrial exhaust, mine ventilation, and process cooling.',
        image: '/products/tube-axial-fans/tube-axial-fan.jpg'
      },
      {
        title: 'Axial Fan',
        content: 'Heavy-duty axial fan designed for high-volume air movement in demanding industrial environments. Features aerodynamically optimized blades, overheat-protected motor, and robust casing for continuous operation.',
        image: '/products/tube-axial-fans/axial-fan-2.jpg'
      }
    ]
  },
  {
    id: '15',
    slug: 'belt-driven-cabinet-fans',
    name: 'Belt Driven Cabinet Fans',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-fans',
    description: 'High-capacity belt driven cabinet fans for supply, exhaust, pressurization, kitchen, and smoke spill applications up to 25,000 CMH.',
    longDescription: 'SUV Belt Driven Cabinet Fans are the preferred choice for large air handling requirements. The belt-drive system allows precise fan speed tuning by changing pulley ratios. Available for indoor and outdoor installation with easy duct connection in ducted and non-ducted systems. These fans handle supply, exhaust, pressurization, kitchen ventilation, and smoke spill applications. The robust galvanized housing protects motor and drive components while delivering up to 70 mmwg static pressure.',
    applications: ['Supply & Exhaust Systems', 'Building Pressurization', 'Kitchen Ventilation', 'Smoke Spill Systems', 'High-Static HVAC Systems'],
    features: [
      'Suitable for supply, exhaust, pressurization, kitchen, and smoke spill',
      'Indoor and outdoor installation',
      'Easy installation in ducted and non-ducted systems',
      'Capacity up to 25,000 CMH',
      'High static pressure up to 70 mmwg',
      'Motor isolated from airstream for longevity'
    ],
    specs: {
      capacityRange: '5,000 CMH to 25,000 CMH',
      staticPressure: 'Up to 70 mmwg',
      voltage: '220V / 415V'
    },
    pricing: 'Contact for Quote',
    seoKeywords: ['belt driven fan', 'adjustable speed blower', 'cabinet exhaust fan', 'industrial HVAC supply', 'belt drive centrifugal fan'],
    image: '/products/belt-driven-cabinet-fans/belt-driven-cabinet.jpg',
    images: [
      '/products/belt-driven-cabinet-fans/belt-driven-cabinet.jpg',
      '/products/belt-driven-cabinet-fans/belt-driven-cabinet-2.jpg',
    ],
    details: [
      {
        title: 'Belt Driven Cabinet Fan',
        content: 'Application: Supply / Exhaust / Pressurization / Kitchen / Smoke Spill. Indoor & Outdoor installation. Easy installation in ducted and non-ducted systems. Capacity up to 25,000 CMH. Static pressure up to 70 mm H2O. Belt drive allows speed adjustment via pulley ratio.',
        image: '/products/belt-driven-cabinet-fans/belt-driven-cabinet.jpg'
      },
      {
        title: 'Direct Drive Box Fan',
        content: 'Compact direct drive design for space-constrained installations. Suitable for supply and exhaust ventilation in commercial and light industrial applications. Easy maintenance with accessible motor and impeller assembly.',
        image: '/products/belt-driven-cabinet-fans/belt-driven-cabinet-2.jpg'
      }
    ]
  },
  {
    id: '16',
    slug: 'air-purifiers',
    name: 'PURE AIR Commercial & Industrial Air Purifiers',
    category: 'PURE AIR Purifiers',
    categorySlug: 'air-purifiers',
    badge: 'German Engineering',
    description: 'German Mann+Hummel nano-fiber filtration technology purifying 2,000 sqft in 10 minutes. ISO 16890 certified. Made in India.',
    longDescription: 'PURE AIR by SUV FANS brings German filtration excellence to commercial and industrial India. Nano fiber-enhanced filters designed by MANN+HUMMEL provide superior dust capture and best-in-class flow resistance. Two-stage filtration removes harmful particles including PM0.1, PM1.0, PM2.5, and PM10. The wall-mount design saves space while delivering 2,000 m³/h airflow that purifies a 1,000 sqft area in just 4 minutes. Filter life up to 6 months with professional disposal service. Customized units available for bulk orders.',
    applications: ['Offices', 'Hospitals', 'Hotels', 'Cafeterias', 'Factories & Laboratories'],
    features: [
      'Premium Filters by Mann+Hummel (Germany) — nano fiber-enhanced',
      'Two-stage filtration for exceptional particle removal',
      'Removes PM0.1, PM1.0, PM2.5, and PM10',
      'Filter efficiency: >95% for PM10, 80% for PM2.5 (ISO 16890)',
      'Filter life up to 6 months — reduces maintenance costs',
      'Live report sharing for real-time air quality monitoring'
    ],
    specs: {
      capacityRange: '2,000 m³/h',
      soundLevel: '<55 dB',
      powerRange: '80W',
      coverage: 'Purifies 1,000 sqft in 4 min / 2,000 sqft in 10 min',
      dimensions: '950 mm (L) × 750 mm (W) × 250 mm (H)',
      efficiency: '>95% PM10, 80% PM2.5 — ISO 16890 Certified'
    },
    pricing: 'Contact for Bulk Pricing',
    specFeatureTable: [
      { feature: 'Filter',                          value: 'Premium Filters by Mann+Hummel (Germany)' },
      { feature: 'Manufacturing',                   value: 'Mass Production-Ready, Proudly Made in India' },
      { feature: 'Air Purifier Technology',         value: 'Removes Harmful Particles: PM0.1, PM1.0, PM2.5 & PM10' },
      { feature: 'Filter Design',                   value: 'Nano Fiber-Enhanced Filters for Superior Dust Capture and Airflow' },
      { feature: 'Filtration Performance',          value: 'Two-Stage Filtration for Exceptional Particle Removal' },
      { feature: 'Filter Life',                     value: 'Lasts Up to 6 Months, Reducing Maintenance Costs' },
      { feature: 'Filter Efficiency',               value: 'Over 95% for PM10 and 80% for PM2.5 (ISO 16890 Certified)' },
      { feature: 'Wall Mount',                      value: 'Convenient Wall Mount for Space-Saving Installation' },
      { feature: 'Noise Levels & Energy Efficiency', value: 'Low Noise Levels (<55 dB) for a Distraction-Free Environment' },
      { feature: 'Product Dimensions',              value: 'Compact Design: 950 mm (L) × 750 mm (W) × 250 mm (H)' },
      { feature: 'Airflow Capacity',                value: 'High-Capacity 2,000 m³/h for Rapid Air Circulation' },
      { feature: 'Power Consumption',               value: 'Efficient 80W Power Usage for Lower Operating Costs' },
      { feature: 'Time to Recirculate Air',         value: 'Quickly Refreshes a 1,000 Sqft Area in Just 4 Minutes' },
      { feature: 'Warranty',                        value: '3 Years (Excluding Electronics); Filters Replaced as Required' },
      { feature: 'Filter Disposal',                 value: 'Professional, Responsible Filter Disposal Service' },
      { feature: 'Service Interval',                value: 'Requires Service Only Once Every 6 Months' },
    ],
    seoKeywords: ['air purifier India', 'PURE AIR purifier', 'industrial air purifier', 'Mann Hummel filter', 'commercial air purifier', 'PM2.5 filter India', 'ISO 16890 air purifier'],
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
        title: 'Filter Technology — Mann+Hummel Germany',
        content: 'Premium nano fiber-enhanced filters by MANN+HUMMEL (Germany). Provides superior dust capture with best-in-class flow resistance. Two-stage filtration removes PM0.1, PM1.0, PM2.5, and PM10.',
        image: '/products/air-purifiers/air-purifier-logo.jpg'
      },
      {
        title: 'Filtration Performance',
        content: 'Filter efficiency: >95% for PM10 (dust & pollen), 85% for PM2.5 (smoke & fog), 80% for PM0.1–1.0 (bacteria & viruses). ISO 16890 certified. Filter life up to 6 months.',
        image: '/products/air-purifiers/air-purifier-3.jpg'
      },
      {
        title: 'Wall Mount Installation',
        content: 'Convenient wall mount for space-saving installation. Compact design: 950 mm (L) × 750 mm (W) × 250 mm (H). Purifies 1,000 sqft in 4 minutes and 2,000 sqft in 10 minutes at 2,000 m³/h.',
        image: '/products/air-purifiers/air-purifier-4.jpg'
      },
      {
        title: 'Service & Warranty',
        content: '3-year warranty (excluding electronics). Service interval: once every 6 months. Professional, responsible filter disposal service. Live report sharing for real-time air quality monitoring. Customised for bulk orders.',
        image: '/products/air-purifiers/air-purifier-5.jpg'
      }
    ],
    whyChooseContent: [
      'ISO 16890 Certified Filters',
      'German Mann+Hummel Technology',
      'Made in India',
      '3-Year Warranty',
      'Service Only Every 6 Months',
      'Live Air Quality Report Sharing',
      'Customised for Bulk Orders'
    ]
  }
];
