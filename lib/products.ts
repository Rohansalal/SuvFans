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
}

export interface SpecTableRow {
  size: string;
  airflow: string;
  voltage: string;
  power: string;
  rpm: string;
  sound: string;
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
  badge?: string;
  image?: string;
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
    description: 'High-performance direct drive cubic fans designed for efficient inline duct ventilation in commercial and industrial HVAC systems.',
    longDescription: 'SUV’s model CUBIC centrifugal inline fans feature a unique combination of installation flexibility, rugged construction, ease of service, high efficiency and low sound levels. These compact inline fans are the ideal selection for indoor clean air applications including intake, exhaust, return or make-up air systems where space is a prime consideration. The need for costly square-to-round transition pieces is eliminated reducing installation costs. The square housing design, compact size and straight-thru airflow also give the system designer the flexibility to mount CUBIC fans in any configuration — horizontal, vertical or at any angle.',
    applications: ['Commercial Kitchens', 'Office Buildings', 'Industrial Workshops', 'Clean Room Ventilation', 'General HVAC Systems'],
    features: [
      'Direct drive motor for maintenance-free operation',
      'Backward inclined aviation-grade aluminum impeller',
      'Compact cubic design for easy installation',
      'Galvanized steel housing with optional powder coating',
      'Low power consumption with high efficiency',
      'Statically and dynamically balanced for vibration-free running'
    ],
    specs: {
      capacityRange: '850 CMH to 12,000 CMH',
      staticPressure: 'Up to 45 mmwg',
      voltage: '220V/415V',
      powerRange: '0.18 kW to 3.7 kW'
    },
    seoKeywords: ['centrifugal inline fan', 'cubic duct fan', 'direct drive ventilation', 'industrial inline blower', 'commercial HVAC fan India', 'AMCA certified fan', 'backward inclined impeller', 'HVAC duct fan datasheet'],
    image: '/products/centrifugal-inline-cubic-fans/Centrifugal Fans.webp',
    details: [
      {
        title: 'Housing Construction',
        content: 'The fan housing is constructed of rigid structural members and formed galvanized steel panels. (Aluminum construction is optional) Constructed from heavy-gauge steel for maximum durability and corrosion resistance.'
      },
      {
        title: 'Wheel',
        content: 'Backward inclined, non-overloading centrifugal wheel is utilized to deliver maximum efficiency. Each wheel is statically and dynamically balanced to ensure smooth, vibration-free operation.'
      },
      {
        title: 'Duct Collars',
        content: 'Inlet and discharge duct collars are provided for easy duct connection. The square design provides a larger discharge area than tubular centrifugal and vane axial fans; outlet velocities are reduced for quieter operation.'
      },
      {
        title: 'Motor',
        content: 'Permanently lubricated, sealed ball bearing motors are selected to provide years of trouble-free operation with minimal maintenance. Motors are sized for continuous duty and are available in single or three-phase options.'
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
    description: 'Heavy-duty wall-mounted axial fans for large-scale air displacement in factories, warehouses, and industrial facilities.',
    longDescription: 'SUV Fans Axial Wall Exhaust and Supply Fans are engineered to move massive volumes of air at low resistance. These fans are essential for maintaining indoor air quality and thermal comfort in large industrial spaces. Available in both exhaust and supply configurations, they feature aerodynamically designed blades that maximize airflow while minimizing energy consumption. The robust wall-mount design allows for easy installation and maintenance, making them a cost-effective solution for factory ventilation, warehouse cooling, and parking garage exhaust.',
    applications: ['Manufacturing Plants', 'Warehouses', 'Large Commercial Spaces', 'Parking Garages', 'Agricultural Buildings'],
    features: [
      'High-volume air displacement with low noise',
      'Corrosion-resistant blades and housing',
      'Inlet and outlet safety guards included',
      'Weather-proof motor options for outdoor exposure',
      'Variable speed drive compatible',
      'Easy wall-frame mounting'
    ],
    specs: {
      capacityRange: '5,000 CMH to 60,000 CMH',
      staticPressure: 'Up to 15 mmwg',
      voltage: '415V 3-Phase / 220V 1-Phase',
      sizes: ['300mm', '450mm', '600mm', '900mm', '1200mm']
    },
    seoKeywords: ['axial wall fan', 'industrial exhaust fan', 'factory ventilation fan', 'warehouse supply fan', 'wall mounted axial blower', 'AMCA axial fan', 'industrial wall ventilator specs'],
    image: '/products/axial-wall-exhaust-supply-fans/Axial_Wall.webp'
  },
  {
    id: '3',
    slug: 'commercial-industrial-application',
    name: 'Commercial & Industrial Ventilation Systems',
    category: 'Turnkey HVAC Solutions',
    categorySlug: 'turnkey-solutions',
    description: 'Custom-engineered ventilation solutions tailored for complex indoor and outdoor commercial and industrial environments.',
    longDescription: 'We provide comprehensive ventilation systems designed specifically for the unique challenges of commercial and industrial facilities. Whether it is a high-temperature factory floor or a multi-story commercial complex, our systems ensure optimal air exchange, temperature control, and pollutant removal. Our approach includes site assessment, system design using advanced CFD modeling, and the integration of high-efficiency fans and filtration units. We focus on creating sustainable environments that enhance worker productivity and meet all regulatory safety standards.',
    applications: ['Chemical Plants', 'Data Centers', 'Shopping Malls', 'Food Processing Units', 'Steel Mills'],
    features: [
      'Tailored design based on specific facility requirements',
      'Energy-efficient system integration',
      'Advanced control systems for automated operation',
      'Compliance with international ventilation standards',
      'Full lifecycle support from design to commissioning',
      'Indoor and outdoor grade components'
    ],
    specs: {
      capacityRange: 'Customizable up to 500,000 CMH',
      efficiency: 'High IE3/IE4 standard motors',
      coverage: 'Scalable for any facility size'
    },
    seoKeywords: ['industrial ventilation system', 'commercial air handling', 'custom HVAC solutions', 'factory air exchange', 'turnkey ventilation India'],
    image: '/products/commercial-industrial-application/main.webp'
  },
  {
    id: '4',
    slug: 'power-roof-ventilators-upblast-fan',
    name: 'Power Roof Ventilators Upblast Fan',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-inline-cubic-fans',
    description: 'Weather-tight vertical discharge roof ventilators designed for high-efficiency exhaust in commercial buildings.',
    longDescription: 'Our Power Roof Ventilators (PRV) with Upblast discharge are the ideal solution for vertical exhaust applications. Designed to throw air high above the roofline, they prevent re-entrainment of odors and pollutants into the building. The aerodynamic Rhombus hood is engineered to withstand high wind speeds while maintaining a weather-tight seal. Built with non-overloading backward inclined aluminum impellers, these fans provide reliable performance even in high-static pressure situations common in ducted roof exhaust systems.',
    applications: ['Roof-top Exhaust', 'Commercial Kitchen Grease Exhaust', 'Warehouse Ventilation', 'Multi-story Building Exhaust'],
    features: [
      'Upblast discharge protects roof surface from grease and heat',
      'One-piece leak-proof curb cap',
      'Direct drive or belt drive options',
      'Corrosion-resistant aluminum construction',
      'Bird screen and backdraft dampers optional',
      'High-speed wind resistant design'
    ],
    specs: {
      capacityRange: '1,000 CMH to 25,000 CMH',
      staticPressure: 'Up to 50 mmwg',
      voltage: '220V/415V'
    },
    seoKeywords: ['roof ventilator fan', 'upblast exhaust fan', 'kitchen roof fan', 'commercial roof exhaust', 'industrial rooftop ventilation'],
    image: '/products/power-roof-ventilators-upblast-fan/main.webp'
  },
  {
    id: '5',
    slug: 'ceiling-exhaust-cabinet-fans',
    name: 'Ceiling Exhaust Cabinet & Circular Inline Fans',
    category: 'Insulated Box Fans',
    categorySlug: 'insulated-box-fans',
    description: 'Ultra-quiet and compact ceiling-mounted fans for discreet ventilation in premium commercial spaces.',
    longDescription: 'SUV’s model CEILING centrifugal inline cabinet fans feature a unique combination of installation flexibility, rugged construction, ease of service, high efficiency and low sound levels. These compact inline fans are the ideal selection for indoor clean air applications including intake, exhaust, return or make-up air systems where space is a prime consideration. The need for costly square-to-round transition pieces is eliminated reducing installation costs. The square housing design, compact size and straight-thru airflow also give the system designer the flexibility to mount CEILING fans in any configuration — horizontal, vertical or at any angle.',
    applications: ['Hotel Rooms', 'Hospital Wards', 'Conference Rooms', 'Laboratories', 'Premium Residences'],
    features: [
      'Ultra-low noise operation (as low as 35 dBA)',
      'Compact design fits in tight ceiling spaces',
      'Built-in backdraft damper',
      'Easy access for maintenance through ceiling panels',
      'Energy-efficient motors with thermal protection',
      'Aesthetic inlet grilles available'
    ],
    specs: {
      capacityRange: '150 CMH to 2,500 CMH',
      voltage: '220V Single Phase',
      soundLevel: '35 dBA to 55 dBA'
    },
    seoKeywords: ['ceiling exhaust fan', 'silent cabinet fan', 'circular inline fan', 'commercial bathroom exhaust', 'quiet office ventilation'],
    image: '/products/ceiling-exhaust-cabinet-fans/main.webp',
    details: [
      {
        title: 'Housing Construction',
        content: 'The fan housing is constructed of rigid structural members and formed galvanized steel panels. (Aluminum construction is optional) Constructed from heavy-gauge steel for maximum durability and corrosion resistance.'
      },
      {
        title: 'Wheel',
        content: 'Backward inclined, non-overloading centrifugal wheel is utilized to deliver maximum efficiency. Each wheel is statically and dynamically balanced to ensure smooth, vibration-free operation.'
      },
      {
        title: 'Duct Collars',
        content: 'Inlet and discharge duct collars are provided for easy duct connection. The square design provides a larger discharge area than tubular centrifugal and vane axial fans; outlet velocities are reduced for quieter operation.'
      },
      {
        title: 'Motor',
        content: 'Permanently lubricated, sealed ball bearing motors are selected to provide years of trouble-free operation with minimal maintenance. Motors are sized for continuous duty and are available in single or three-phase options.'
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
    id: '6',
    slug: 'hvls-fans',
    name: 'HVLS Fans (High Volume Low Speed)',
    category: 'Large Diameter HVLS Fans',
    categorySlug: 'hvls-fans',
    description: 'Large-diameter industrial ceiling fans that move massive amounts of air to provide natural cooling in large facilities.',
    longDescription: 'High Volume Low Speed (HVLS) fans are a game-changer for large-scale facility cooling. With diameters ranging from 8 to 24 feet, a single SUV HVLS fan can replace dozens of small high-speed fans, significantly reducing energy costs. By creating a gentle, constant breeze, these fans enhance the natural evaporative cooling of the human body, making the perceived temperature feel up to 8°C cooler. Beyond cooling, they help in destratification during winter, pushing warm air down from the ceiling to the floor, ensuring year-round energy savings.',
    applications: ['Large Warehouses', 'Distribution Centers', 'Manufacturing Plants', 'Gymnasiums', 'Airport Hangers'],
    features: [
      'Aerospace-grade aluminum blades with winglets',
      'High-torque, low-RPM permanent magnet motors',
      'Variable frequency drive (VFD) for precise speed control',
      'Safety cables and blade retainers for maximum security',
      'Minimal maintenance required',
      'Extremely energy efficient'
    ],
    specs: {
      capacityRange: 'Up to 350,000 CFM',
      sizes: ['8ft', '12ft', '16ft', '20ft', '24ft'],
      coverage: 'Up to 20,000 sq. ft per fan'
    },
    seoKeywords: ['HVLS fan India', 'industrial ceiling fan', 'large warehouse fan', 'energy efficient cooling', 'big diameter fan manufacturer', 'HVLS fan specifications', 'industrial cooling destratification'],
    image: '/products/hvls-fans/main.webp'
  },
  {
    id: '7',
    slug: 'flexible-ducts',
    name: 'Non-Insulated, Insulated and Aluminum Flexible Ducts',
    category: 'HVAC Air Ducts & Hoods',
    categorySlug: 'hvac-ducts',
    description: 'High-quality flexible ducting solutions for versatile HVAC connections and air distribution.',
    longDescription: 'Our flexible ducting range provides the ultimate versatility for HVAC system installers. Available in non-insulated, thermally insulated, and semi-rigid aluminum versions, these ducts are designed to handle various air pressures and temperatures. The insulated versions feature high-density fiberglass wool to prevent condensation and minimize heat loss. The robust construction includes a high-tensile spring steel wire helix, ensuring the duct maintains its shape even under high suction or pressure. These ducts are essential for connecting diffusers, grilles, and other terminal units to main duct runs.',
    applications: ['HVAC Secondary Ducting', 'VAV Box Connections', 'Kitchen Hood Exhaust', 'Bathroom Ventilation', 'Industrial Fume Extraction'],
    features: [
      'Available in sizes from 100mm to 600mm',
      'Fire-retardant materials (UL listed options)',
      'Excellent flexibility for easy routing around obstacles',
      'High tear and puncture resistance',
      'Low friction loss for efficient airflow',
      'Standard 10-meter or 25-feet lengths'
    ],
    specs: {
      capacityRange: 'Custom sizes',
      temperatureRating: '-30°C to +150°C',
      staticPressure: 'Up to 2,500 Pa',
      sizes: ['100mm', '150mm', '200mm', '250mm', '300mm', '450mm']
    },
    seoKeywords: ['flexible ducting', 'insulated HVAC duct', 'aluminum flex duct', 'ventilation connector', 'flexible air pipe India'],
    image: '/products/flexible-ducts/main.webp'
  },
  {
    id: '8',
    slug: 'insulated-housing-cabinet-fan',
    name: 'Insulated Housing Cabinet Fan',
    category: 'Insulated Box Fans',
    categorySlug: 'insulated-box-fans',
    description: 'Double-skin insulated cabinet fans designed for quiet operation and thermal protection in sensitive HVAC applications.',
    longDescription: 'The SUV Insulated Housing Cabinet Fan is the professional choice for indoor air handling where noise and thermal leakage must be minimized. Featuring a double-skin construction with high-density acoustic insulation, these fans are exceptionally quiet. The rigid aluminum pentapost frame ensures structural integrity, while the removable panels allow for easy access to the motor and impeller. These fans are often used as supply or exhaust units in hospitals, offices, and hotels where a ducted cabinet solution is required.',
    applications: ['Hospital HVAC', 'Office Exhaust Systems', 'Hotel Fresh Air Supply', 'Clean Room Pre-filtration', 'Data Center Cooling'],
    features: [
      'Double-skin panels with 25mm/50mm insulation',
      'Acoustically lined for ultra-quiet performance',
      'High-efficiency backward curved centrifugal impeller',
      'Rigid aluminum frame with nylon corners',
      'Easy-to-clean smooth internal surfaces',
      'Weather-proof versions available for outdoor use'
    ],
    specs: {
      capacityRange: '1,000 CMH to 30,000 CMH',
      staticPressure: 'Up to 60 mmwg',
      voltage: '220V/415V'
    },
    seoKeywords: ['insulated cabinet fan', 'double skin box fan', 'quiet air handler', 'acoustic_fan_housing', 'industrial cabinet blower'],
    image: '/products/insulated-housing-cabinet-fan/main.webp'
  },
  {
    id: '9',
    slug: 'kitchen-exhaust-fan',
    name: 'Kitchen Exhaust Fan',
    category: 'Fume Exhaust Fans',
    categorySlug: 'fume-exhaust-fans',
    description: 'Specialized high-temperature fans designed to handle grease-laden air and steam in commercial kitchens.',
    longDescription: 'Commercial kitchen ventilation requires fans that can withstand high temperatures and heavy grease accumulation. Our Kitchen Exhaust Fans are specifically engineered for this demanding environment. Featuring motors located outside the airstream (in belt-drive models) or high-temperature rated direct drive motors, they ensure long-term reliability. The impellers are designed to be easily cleaned of grease buildup, maintaining optimal airflow. These fans are essential for complying with fire safety regulations and ensuring a comfortable working environment for kitchen staff.',
    applications: ['Restaurant Kitchens', 'Hotel Main Kitchens', 'Canteen Ventilation', 'Food Processing Facilities', 'Fast Food Outlets'],
    features: [
      'High temperature rating (up to 120°C continuous)',
      'Grease-resistant impeller design',
      'Easy-access cleanout doors',
      'Drain plugs for grease management',
      'Weather-proof housing for rooftop installation',
      'Compliant with NFPA 96 standards'
    ],
    specs: {
      capacityRange: '2,000 CMH to 25,000 CMH',
      staticPressure: 'Up to 75 mmwg',
      temperatureRating: 'Up to 120°C'
    },
    seoKeywords: ['kitchen exhaust fan', 'commercial kitchen blower', 'grease exhaust fan', 'restaurant ventilation', 'high temperature fan India'],
    image: '/products/kitchen-exhaust-fan/main.webp' 
  },
  {
    id: '10',
    slug: 'laundry-fan',
    name: 'Laundry Fan',
    category: 'Fume Exhaust Fans',
    categorySlug: 'fume-exhaust-fans',
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
      voltage: '220V/415V'
    },
    seoKeywords: ['laundry exhaust fan', 'commercial laundry blower', 'humid air exhaust', 'lint resistant fan', 'industrial dryer exhaust'],
    image: '/products/laundry-fan/main.webp'
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
    seoKeywords: ['toilet exhaust fan', 'bathroom ventilation system', 'commercial restroom fan', 'centralized toilet exhaust', 'quiet washroom fan'],
    image: '/ProductImage.webp'
  },
  {
    id: '12',
    slug: 'turnkey-hvac-products',
    name: 'Turnkey HVAC Air Handling Products',
    category: 'Turnkey HVAC Solutions',
    categorySlug: 'turnkey-solutions',
    description: 'Comprehensive air handling solutions including supply, installation, and commissioning for complex industrial projects.',
    longDescription: 'Our Turnkey HVAC Air Handling service offers a complete end-to-end solution for your facility. We don\'t just supply products; we provide a fully engineered system. This includes high-capacity Air Handling Units (AHUs), advanced filtration systems, integrated cooling/heating coils, and sophisticated control panels. Our team of experienced engineers handles everything from initial load calculations and ducting design to professional installation and final commissioning. We ensure your entire HVAC system operates at peak efficiency from day one.',
    applications: ['Pharmaceutical Labs', 'Precision Manufacturing', 'Hospitals', 'Data Centers', 'Large Commercial Complexes'],
    features: [
      'Full system engineering and design',
      'Supply of AHUs, chillers, and ducting',
      'Professional on-site installation by expert teams',
      'Precision commissioning and balancing',
      'Comprehensive documentation and training',
      'Annual Maintenance Contracts (AMC) available'
    ],
    specs: {
      capacityRange: 'Customizable up to 1,000,000 CMH',
      efficiency: 'System-wide energy optimization',
      coverage: 'Complete facility HVAC'
    },
    seoKeywords: ['turnkey HVAC India', 'air handling unit service', 'industrial HVAC installation', 'complete ventilation solution', 'AHU commissioning'],
    image: '/products/turnkey-hvac-products/main.webp'
  },
  {
    id: '13',
    slug: 'hvac-air-duct-kitchen-hoods',
    name: 'HVAC AIR DUCT / Commercial Kitchen Hoods',
    category: 'HVAC Air Ducts & Hoods',
    categorySlug: 'hvac-ducts',
    description: 'Precision-manufactured air ducts and specialized kitchen hoods for efficient air distribution and grease extraction.',
    longDescription: 'High-quality ducting is the backbone of any efficient HVAC system. We manufacture a wide range of air ducts in various shapes (round, rectangular, oval) and materials (Galvanized Steel, Stainless Steel, Aluminum). Our ducts are fabricated using CNC machines for perfect fit and minimal leakage. In addition to general HVAC ducting, we specialize in Commercial Kitchen Hoods. Our hoods are designed with optimal capture velocities to ensure all smoke and grease are efficiently removed from the cooking area, available in both GI and premium SS finishes.',
    applications: ['Kitchen Exhaust', 'Centralized Air Conditioning', 'Fume Extraction', 'Fresh Air Supply', 'Industrial Ventilation'],
    features: [
      'CNC fabricated for high precision and low leakage',
      'Available in GI, SS, and Aluminum',
      'Kitchen hoods with integrated grease filters',
      'Compliance with SMACNA and local standards',
      'Custom sizes and configurations',
      'Insulated and non-insulated options'
    ],
    specs: {
      capacityRange: 'Custom sizes',
      materials: ['GI (Galvanized)', 'SS (Stainless Steel)', 'AL (Aluminum)', 'MS (Mild Steel)'],
      shapes: ['Rectangular', 'Round', 'Spiral', 'Flat Oval']
    },
    seoKeywords: ['HVAC ducting manufacturer', 'commercial kitchen hood', 'GI ducting India', 'SS kitchen exhaust', 'industrial air ducts'],
    image: '/products/hvac-air-duct-kitchen-hoods/main.webp'
  },
  {
    id: '14',
    slug: 'tube-axial-fans',
    name: 'Tube Axial Fans',
    category: 'Axial Flow Fans',
    categorySlug: 'axial-flow-fans',
    description: 'High-performance ducted axial fans for industrial exhaust and ventilation in demanding environments.',
    longDescription: 'SUV Tube Axial Fans are designed for high-volume air movement in ducted systems. Unlike standard axial fans, the tube axial design allows for higher static pressure, making them suitable for long duct runs. The motor is typically mounted within the air stream for direct drive models or outside for belt-drive versions handling hot or contaminated air. These fans are built with heavy-gauge steel housings and aerodynamically optimized impellers, ensuring longevity and performance in industrial exhaust, tunnel ventilation, and process cooling applications.',
    applications: ['Tunnel Ventilation', 'Industrial Exhaust', 'Mine Ventilation', 'Paint Booth Exhaust', 'Process Cooling'],
    features: [
      'Heavy-duty welded steel housing',
      'Adjustable pitch blades for performance tuning',
      'Direct drive or belt drive configurations',
      'Indoor and outdoor grade motors',
      'Explosion-proof motor options available',
      'Wide range of sizes from 315mm to 1600mm'
    ],
    specs: {
      capacityRange: '2,000 CMH to 150,000 CMH',
      staticPressure: 'Up to 100 mmwg',
      voltage: '415V 3-Phase'
    },
    seoKeywords: ['tube axial fan', 'ducted axial blower', 'industrial exhaust blower', 'tunnel fan manufacturer', 'heavy duty axial fan'],
    image: '/products/tube-axial-fans/main.webp'
  },
  {
    id: '15',
    slug: 'belt-driven-cabinet-fans',
    name: 'Belt Driven Cabinet Fans',
    category: 'Centrifugal Fans',
    categorySlug: 'centrifugal-fans',
    description: 'High-capacity, adjustable-speed cabinet fans for large-scale commercial and industrial HVAC systems.',
    longDescription: 'Our Belt Driven Cabinet Fans offer the ultimate in performance flexibility. By using a belt-drive system, the fan speed can be precisely tuned to meet the specific requirements of your system by simply changing the pulley ratios. These fans are housed in a robust, often insulated cabinet that protects the motor and drive components while significantly reducing noise. They are the preferred choice for large air handling requirements where high static pressure and variable performance are needed, such as in large office complexes, hospitals, and industrial plants.',
    applications: ['Main AHU Supply', 'Large Scale Exhaust', 'Building Pressurization', 'Industrial Process Air', 'High-Static HVAC Systems'],
    features: [
      'Adjustable speed via pulley/belt system',
      'Motor isolated from airstream for longevity',
      'Robust galvanized steel cabinet construction',
      'High-capacity forward or backward curved impellers',
      'Easy access for maintenance and belt tensioning',
      'Quiet operation due to enclosed design'
    ],
    specs: {
      capacityRange: '5,000 CMH to 60,000 CMH',
      staticPressure: 'Up to 120 mmwg',
      voltage: '415V 3-Phase'
    },
    seoKeywords: ['belt driven fan', 'adjustable speed blower', 'cabinet exhaust fan', 'industrial HVAC supply', 'belt drive centrifugal fan'],
    image: '/products/belt-driven-cabinet-fans/main.webp'
  }
];
