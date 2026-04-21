export interface Application {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  applications: string[];
  keyProducts: string[];
  environments: string[];
  industryRequirements: string[];
  challenges: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  featuredProducts: {
    name: string;
    description: string;
    specs: string[];
    image: string;
  }[];
}

export const APPLICATIONS: Application[] = [
  {
    id: '1',
    slug: 'air-conditioning',
    name: 'Air Conditioning',
    description:
      'High-performance centrifugal and axial fans engineered for HVAC systems in commercial and industrial air conditioning applications.',
    longDescription:
      'Air conditioning systems demand fans that deliver high efficiency, low noise, and reliable performance under continuous operation. Our comprehensive range of centrifugal and axial fans are designed for supply and exhaust applications in AHUs, packaged units, and clean room environments. Every fan is tested in accordance with AMCA210 and AMCA300 Standards, with wheels statically and dynamically balanced to ISO1940 and AMCA204 G2.5 Standards.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    applications: ['AHU Supply & Exhaust', 'Clean Room Ventilation', 'Packaged Units', 'HVAC Systems', 'Pressure Control'],
    keyProducts: ['BDB Series – DIDW Backward Curved', 'ADA Series – Airfoil Wheels', 'FDA Series – Forward Curved', 'BNC Series – Plenum Fans', 'KAT Series – Forward Curved'],
    environments: [
      'Corporate Office Towers',
      'Hospital & Healthcare Facilities',
      'IT Data Centres',
      'Pharmaceutical Clean Rooms',
      'Hotel & Hospitality Properties',
      'Shopping Malls & Retail Complexes',
    ],
    industryRequirements: [
      'AMCA 210 — Fan Airflow Performance Testing',
      'AMCA 300 — Fan Sound Rating Standard',
      'ISO 1940 — Dynamic Balancing (G2.5)',
      'ASHRAE 62.1 — Ventilation for Acceptable IAQ',
      'NABH Standards for Healthcare HVAC',
      'BEE Energy Star Compliance',
    ],
    challenges: [
      {
        title: 'Continuous 24/7 Operation',
        description:
          'Critical facilities like hospitals and data centres require fans that run without interruption. Our fans are built with Class F insulation and rated for continuous duty cycles exceeding 40,000 hours.',
      },
      {
        title: 'Low Noise in Occupied Spaces',
        description:
          'Offices, hotels, and hospitals demand near-silent operation. Our backward-curved and airfoil impellers minimise turbulence noise while maintaining full airflow rates.',
      },
      {
        title: 'Variable Airflow Demand',
        description:
          'Occupancy-based ventilation requires VFD-compatible fans. Our range delivers precise airflow at reduced speeds, cutting energy consumption by up to 40% during low-occupancy periods.',
      },
      {
        title: 'Energy Efficiency Mandates',
        description:
          'Rising energy costs and BEE norms demand high-efficiency motors. Our IE3-rated and ECM motors reduce running costs significantly versus standard motors.',
      },
    ],
    stats: [
      { value: '95%+', label: 'Peak Efficiency' },
      { value: '45 dB(A)', label: 'Min. Noise Level' },
      { value: '680,000', label: 'Max m³/h Capacity' },
      { value: 'IE3', label: 'Motor Efficiency Class' },
    ],
    featuredProducts: [
      {
        name: 'BDB Series – Direct Coupling Double Inlet Centrifugal Fans',
        description: 'Backward curved wheels for high-efficiency HVAC applications. Capacities to 680,000 m³/h with total pressure up to 4500 Pa.',
        specs: ['Size from 315 to 1400 mm', 'Capacities to 680,000 m³/h', 'Total pressure up to 4500 Pa', 'High efficiency and low noise'],
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      },
      {
        name: 'ADA Series – Double Inlet Centrifugal Fans – Airfoil Wheels',
        description: 'Premium airfoil wheel design for maximum efficiency in commercial HVAC systems.',
        specs: ['Size from 315 to 1400 mm', 'Capacities to 350,000 m³/h', 'Total pressure up to 4500 Pa', 'High efficiency and low noise'],
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
      },
      {
        name: 'BNC Series – Plenum Fans – Backward Curved Wheels',
        description: 'Compact plenum fan design suitable for AHU and clean room applications.',
        specs: ['Size from 315 to 1800', 'Capacity up to 400,000 m³/h', 'Total pressure up to 5800 Pa', 'Suitable for AHU and clean room'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=600&h=400&fit=crop',
      },
    ],
  },
  {
    id: '2',
    slug: 'car-park',
    name: 'Car Park',
    description:
      'Jet fans and axial fans designed for underground and multi-story car park ventilation, including emergency smoke extraction systems.',
    longDescription:
      'Car park ventilation requires specialised jet fans and axial fans to ensure adequate air quality and emergency smoke control. Our solutions include induced jet fans, cabinet jet fans, and vane axial fans with smokespill capability rated up to 400°C/2 hours. All systems comply with fire safety regulations and integrate with CO/NO2 monitoring for demand-controlled ventilation.',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=600&fit=crop',
    applications: ['CO/NO2 Dilution', 'Emergency Smoke Extraction', 'General Ventilation', 'Jet Thrust Ventilation', 'Fire Safety Compliance'],
    keyProducts: ['IJC Series – Cabinet Jet Fan', 'IJC II Series – Induced Jet Fan', 'IJM-N Series – Jet Fan', 'IJB Series – Jet Fan', 'TDC/TDD Series – Vane Axial'],
    environments: [
      'Underground Basement Parking',
      'Multi-Storey Car Parks',
      'Airport Parking Structures',
      'Mall & Commercial Basements',
      'Hospital Parking Facilities',
      'Residential Building Basements',
    ],
    industryRequirements: [
      'BS 7346-7 — Components for Smoke & Heat Control',
      'NFPA 88A — Parking Structures Standard',
      'NBC India — Fire Protection Requirements',
      'IS 3103 — Industrial Ventilation Standard',
      'CO/NO2 Demand Controlled Ventilation',
      'UL Listed Fire-Rated Components',
    ],
    challenges: [
      {
        title: 'Emergency Smoke Extraction',
        description:
          'In a fire event, fans must activate instantly and sustain operation at up to 400°C for 2 hours to enable safe evacuation. Our fans are certified and rated for this exact scenario.',
      },
      {
        title: 'CO & NOx Dilution',
        description:
          'Vehicle exhaust accumulates rapidly in enclosed parks. Our jet fans create controlled airflow patterns that flush pollutants efficiently, reducing sensor-triggered run time and energy use.',
      },
      {
        title: 'Limited Ceiling Height',
        description:
          'Most car parks have headroom constraints of 2.1–2.4 m. Our slim-profile jet fans mount within tight clearances without compromising thrust or airflow performance.',
      },
      {
        title: 'Moisture & Corrosion Resistance',
        description:
          'Underground environments are humid and exposed to road chemicals. Our fans feature epoxy-coated housings and corrosion-resistant impellers for long service life.',
      },
    ],
    stats: [
      { value: '400°C', label: 'Smoke Rating (2 hrs)' },
      { value: '97 N', label: 'Max Thrust Force' },
      { value: '430,000', label: 'Max m³/h (Axial)' },
      { value: 'IP55', label: 'Enclosure Protection' },
    ],
    featuredProducts: [
      {
        name: 'IJC II Series – Induced Jet Fan',
        description: 'Suitable for ventilation and smokespill application with thrust force up to 97N.',
        specs: ['Size from 50 to 100', 'Capacity up to 11,100 m³/h', 'Thrust force up to 97N', 'Smoke rated: 200°C–400°C / 2 hrs'],
        image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600&h=400&fit=crop',
      },
      {
        name: 'IJB Series – Induced Jet Fan',
        description: 'High-capacity jet fan for large car park ventilation with uni-directional airflow.',
        specs: ['Size from 315 to 450', 'Capacity up to 13,000 m³/h', 'Thrust force up to 98 N', 'Reversible available upon request'],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
      },
      {
        name: 'TDC Series – Vane Axial Flow Fan',
        description: 'High-capacity axial fan for supply and exhaust in car park ventilation systems.',
        specs: ['Size from 450 to 2000', 'Capacity up to 430,000 m³/h', 'Static pressure up to 2200 Pa', 'Smokespill up to 300°C/2Hrs'],
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
      },
    ],
  },
  {
    id: '3',
    slug: 'commercial-building',
    name: 'Commercial Building',
    description:
      'Comprehensive ventilation solutions for office towers, shopping malls, hotels, and mixed-use commercial developments.',
    longDescription:
      'Commercial buildings demand ventilation systems that balance performance, energy efficiency, and occupant comfort. Our range includes vane axial fans, mixed flow fans, in-line duct fans, and ceiling mount solutions designed for shopping malls, office complexes, hotels, and high-rise developments. All systems support both standard ventilation and emergency smokespill applications.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    applications: ['General Building Ventilation', 'Smoke Extraction', 'Stairwell Pressurisation', 'Kitchen Exhaust', 'Car Park Ventilation'],
    keyProducts: ['TDC/TDD Series – Vane Axial', 'MXA/MXC Series – Mixed Flow', 'CFQ-B/CCE Series – In-Line', 'KCE Series – Ceiling Mount', 'CFC Series – Cabinet Fan'],
    environments: [
      'Grade A Office Towers',
      'Shopping Malls & Retail Complexes',
      '5-Star Hotels & Resorts',
      'Convention & Exhibition Centres',
      'Mixed-Use High-Rise Developments',
      'Co-Working & Flexible Office Spaces',
    ],
    industryRequirements: [
      'ASHRAE 62.1 — Indoor Air Quality Standard',
      'NBC India 2016 — Part 8 Building Services',
      'GRIHA / LEED Green Building Ratings',
      'IS 659 — Safety Code for Air Conditioning',
      'BEE Energy Conservation Requirements',
      'ECBC 2017 — Energy Conservation Building Code',
    ],
    challenges: [
      {
        title: 'Multi-Zone Occupancy Control',
        description:
          'Commercial buildings serve spaces with widely varying occupancy. Our fans integrate with BMS systems and CO2 sensors for demand-controlled ventilation, cutting energy use during low-occupancy periods.',
      },
      {
        title: 'Noise Management in Occupied Zones',
        description:
          'Open-plan offices and hotel rooms are highly noise-sensitive. Our mixed flow and in-line fans operate below 35 dB(A) at rated conditions, ensuring acoustic comfort without sacrificing airflow.',
      },
      {
        title: 'Emergency Smoke Pressurisation',
        description:
          'Stairwells and escape routes must be pressurised during fire events. Our smokespill-rated fans maintain positive pressure corridors to 400°C/2hrs, meeting NBC fire safety mandates.',
      },
      {
        title: 'LEED / GRIHA Compliance',
        description:
          'Green-rated buildings require high-efficiency equipment with energy reporting. Our fans carry IE3 motor ratings and are VFD-compatible to help projects achieve sustainability targets.',
      },
    ],
    stats: [
      { value: '450,000', label: 'Max m³/h Capacity' },
      { value: '400°C', label: 'Smokespill Rating' },
      { value: '35 dB(A)', label: 'Min. Noise Level' },
      { value: 'LEED', label: 'Green Rating Compatible' },
    ],
    featuredProducts: [
      {
        name: 'TDD Series – Vane Axial Flow Fan',
        description: 'Premium vane axial fan with capacity up to 450,000 m³/h for large commercial buildings.',
        specs: ['Size from 450 to 2000', 'Capacity up to 450,000 m³/h', 'Static pressure up to 2,300 Pa', 'Smokespill up to 400°C/2Hrs'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      },
      {
        name: 'MXC Series – Mixed Flow Fan',
        description: 'Energy efficient, powerful and low noise fan for commercial building ventilation.',
        specs: ['Size from 315 to 2,000', 'Capacity up to 230,000 m³/h', 'Static pressure up to 2000 Pa', 'Kitchen & smokespill rated'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      },
      {
        name: 'CFQ-B Series – In-Line Fan',
        description: 'Belt driven in-line fan for ducted ventilation in commercial buildings.',
        specs: ['Size from 200 to 1000', 'Capacity up to 120,000 m³/h', 'Static pressure up to 1800 Pa', 'Acoustic lining available'],
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
      },
    ],
  },
  {
    id: '4',
    slug: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial',
    description:
      'Heavy-duty ventilation solutions for factories, warehouses, production floors, and industrial process applications.',
    longDescription:
      'Industrial environments require robust ventilation solutions capable of handling high temperatures, corrosive atmospheres, and heavy dust loads. Our manufacturing and industrial range includes roof extractors, centrifugal fans, axial fans, and HVLS fans designed for factories, warehouses, processing plants, and production facilities. Every fan is built for continuous duty and long service life.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop',
    applications: ['General Factory Ventilation', 'Heat & Fume Exhaust', 'Dust Collection', 'Process Cooling', 'Warehouse Climate Control'],
    keyProducts: ['RCU/RCV Series – Roof Extractors', 'APN/APL Series – Propeller Fans', 'KVS Series – HVLS Fan', 'BSB Series – Centrifugal', 'RCD Series – Roof Fans'],
    environments: [
      'Automobile Assembly Plants',
      'Steel & Metal Processing Units',
      'Textile & Garment Factories',
      'Chemical & Pharmaceutical Plants',
      'Large-Scale Warehouses & Logistics Hubs',
      'Casting, Forging & Foundry Shops',
    ],
    industryRequirements: [
      'ATEX Certification for Hazardous Areas',
      'IS 3103 — Industrial Ventilation Code',
      'OSHA Ventilation Standards for Worker Safety',
      'High-Temperature Operation up to 400°C',
      'IP65 Enclosure Rating for Dusty Environments',
      'Anti-Corrosion Coatings for Chemical Plants',
    ],
    challenges: [
      {
        title: 'Extreme Heat Buildup',
        description:
          'Press shops, foundries, and paint booths can reach 55°C+. Our HVLS fans and roof extractors provide massive air movement that reduces floor temperatures by up to 9°C, improving worker safety and output.',
      },
      {
        title: 'Corrosive & Dusty Atmospheres',
        description:
          'Chemical fumes, metal dust, and process gases accelerate corrosion. Our fans are available in FRP, stainless steel, and epoxy-coated variants to resist aggressive environments without performance loss.',
      },
      {
        title: 'Continuous Duty Cycles',
        description:
          'Manufacturing runs 18–24 hours a day. Our industrial fans use Class F/H insulated motors, sealed bearings, and robust impellers rated for continuous operation with TBO exceeding 40,000 hours.',
      },
      {
        title: 'Large Floor Area Coverage',
        description:
          'Warehouses spanning 50,000–200,000 sq ft need uniform air circulation. Our HVLS fans (up to 24 ft diameter) cover massive floor areas efficiently, replacing dozens of conventional fans.',
      },
    ],
    stats: [
      { value: '24 ft', label: 'Max HVLS Diameter' },
      { value: '403,000', label: 'Max m³/h (HVLS)' },
      { value: '400°C', label: 'High-Temp Operation' },
      { value: '40,000+', label: 'Hours TBO' },
    ],
    featuredProducts: [
      {
        name: 'KVS Series – High Volume Low Speed Fan',
        description: 'Massive air movement for large industrial spaces with energy-efficient permanent magnet motor.',
        specs: ['Diameter up to 7300 mm', 'Capacity up to 403,000 m³/h', 'Thrust force up to 357N', 'IP65 permanent magnet motor'],
        image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop',
      },
      {
        name: 'RCU Series – Roof Fan',
        description: 'Belt/direct driven centrifugal roof fan for industrial ventilation.',
        specs: ['Size from 315 to 1000', 'Capacity up to 40,000 m³/h', 'Static pressure up to 600 Pa', 'Industrial & commercial use'],
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      },
      {
        name: 'APN Series – Direct Driven Propeller Fan',
        description: 'High-capacity propeller fan for wall mounting in factory ventilation.',
        specs: ['Size from 315 to 1000', 'Capacity up to 60,000 m³/h', 'Static pressure up to 360 Pa', 'Operating: -20°C to +55°C'],
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
      },
    ],
  },
  {
    id: '5',
    slug: 'kitchen',
    name: 'Kitchen',
    description:
      'Specialised exhaust systems for commercial kitchens, restaurants, and food processing facilities handling grease-laden air.',
    longDescription:
      'Commercial kitchens require fans that can handle high-temperature, grease-laden air while maintaining reliable performance. Our kitchen ventilation range includes bifurcated fans, mixed flow fans, and centrifugal fans specifically rated for grease and high-temperature applications up to 205°C. All kitchen fans are designed for easy cleaning and maintenance.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
    applications: ['Kitchen Exhaust', 'Make-up Air Supply', 'Grease-Laden Air Handling', 'Restaurant Ventilation', 'Food Processing Exhaust'],
    keyProducts: ['TDB II Series – Bifurcated Fan', 'MXC Series – Mixed Flow (Kitchen Rated)', 'CFC Series – Cabinet Fan', 'CPF Series – In-Line Smokespill', 'RDC Series – Roof Centrifugal'],
    environments: [
      'Restaurant & Hotel Kitchens',
      'Hospital & Institutional Cafeterias',
      'Food Court & Mall Food Zones',
      'Bakeries & Food Processing Plants',
      'Cloud Kitchens & Catering Facilities',
      'Industrial Canteens',
    ],
    industryRequirements: [
      'FSSAI Food Safety Standards for Kitchen Ventilation',
      'Grease-Rated Construction (UL 762)',
      'NFPA 96 — Ventilation Control & Fire Protection for Cooking',
      'Continuous Operation up to 205°C',
      'Easy-Clean Smooth Internal Surfaces',
      'HSE (Health & Safety Executive) Compliance',
    ],
    challenges: [
      {
        title: 'Grease Accumulation & Fire Risk',
        description:
          'Grease-laden exhaust air is highly flammable. Our bifurcated fans route airflow around the motor, eliminating direct motor contact with grease vapours and dramatically reducing fire risk.',
      },
      {
        title: 'High-Temperature Operation',
        description:
          'Commercial cooking environments sustain temperatures of 150–205°C continuously. Our kitchen-rated fans are designed with heat-resistant impellers, sealed high-temperature bearings, and Class H insulation.',
      },
      {
        title: 'Cleaning & Maintenance Speed',
        description:
          'Grease-coated fans are a fire hazard. Our smooth-bore internal housings and accessible impellers make deep cleaning fast, reducing kitchen downtime to under 30 minutes per service.',
      },
      {
        title: 'Make-Up Air Pressure Balance',
        description:
          'Excessive exhaust without adequate make-up air creates negative pressure, affecting cooking performance and door operation. We supply matched make-up air units for balanced kitchen pressure.',
      },
    ],
    stats: [
      { value: '205°C', label: 'Max Operating Temp' },
      { value: '140,000', label: 'Max m³/h Capacity' },
      { value: 'NFPA 96', label: 'Fire Safety Compliant' },
      { value: '<30 min', label: 'Avg. Clean Cycle' },
    ],
    featuredProducts: [
      {
        name: 'TDB II Series – Direct Driven Bifurcated Fan',
        description: 'Purpose-built for kitchen exhaust and removal of contaminated air with motor isolation.',
        specs: ['Size from 400 to 1400 mm', 'Capacity up to 140,000 m³/h', 'Static pressure up to 1000 Pa', 'Operating: -20°C to +180°C'],
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop',
      },
      {
        name: 'MXC Series – Kitchen Rated Mixed Flow',
        description: 'Compact, energy efficient mixed flow fan rated for commercial kitchen grease-laden air up to 205°C.',
        specs: ['Size from 315 to 2,000', 'Capacity up to 230,000 m³/h', 'Static pressure up to 2000 Pa', 'Kitchen rated up to 205°C'],
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
      },
      {
        name: 'CFC Series – Cabinet Fan',
        description: 'Compact cabinet fan suitable for commercial kitchen grease-laden air up to 205°C.',
        specs: ['Size from 315 to 800', 'Capacity up to 30,000 m³/h', 'Static pressure up to 1,000 Pa', 'Kitchen rated up to +205°C'],
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      },
    ],
  },
  {
    id: '6',
    slug: 'residential',
    name: 'Residential',
    description:
      'Quiet, efficient ventilation solutions for apartments, condominiums, and premium residential developments.',
    longDescription:
      'Residential ventilation demands low-noise, energy-efficient fans that integrate seamlessly with modern architectural designs. Our residential range includes ceiling mount fans, slimline axial fans, compact axial fans, and in-line duct fans designed for toilet exhaust, kitchen ventilation, and whole-house ventilation systems. All products are engineered for quiet operation and long maintenance-free life.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    applications: ['Toilet & Bathroom Exhaust', 'Kitchen Ventilation', 'Living Area Fresh Air', 'Basement Ventilation', 'Whole-House Ventilation'],
    keyProducts: ['KCE Series – Ceiling Mount Fan', 'DWA Series – Slimline Axial', 'APM Series – Compact Axial', 'TSK II Series – In-Line Duct', 'MTD Series – Mixed Flow Duct'],
    environments: [
      'High-Rise Apartment Complexes',
      'Luxury Condominiums & Villas',
      'Student Housing & PG Facilities',
      'Senior Living Communities',
      'Affordable Housing Projects',
      'Builder Floors & Row Houses',
    ],
    industryRequirements: [
      'NBC India — Ventilation for Residential Buildings',
      'IS 3103 — Code of Practice for Ventilation',
      'BEE 5-Star Rating for Residential Fans',
      'Low Noise Below 35 dB(A) in Bedrooms',
      'IP44 Moisture Protection for Bathrooms',
      'CPCB Energy Efficiency Standards',
    ],
    challenges: [
      {
        title: 'Acoustic Comfort in Bedrooms',
        description:
          'Residents tolerate near-zero background noise during sleep. Our residential fans achieve as low as 22 dB(A) using precision-balanced impellers, anti-vibration mounts, and aerodynamic blade profiles.',
      },
      {
        title: 'Compact Size for False Ceilings',
        description:
          'Apartment builders demand fans that fit within shallow false ceilings and narrow duct runs. Our slimline and in-line range installs in ceiling voids as shallow as 200 mm without compromising airflow.',
      },
      {
        title: 'Long Maintenance-Free Life',
        description:
          'Residents expect years of trouble-free operation. Our permanently lubricated sealed bearings and brushless EC motors are rated for 30,000+ hours — virtually eliminating maintenance calls.',
      },
      {
        title: 'Humidity & Condensation Resistance',
        description:
          'Bathroom and kitchen fans face constant moisture exposure. Our IP44/IP55 sealed motor enclosures prevent condensation ingress, while corrosion-resistant housings ensure long-term reliability.',
      },
    ],
    stats: [
      { value: '22 dB(A)', label: 'Min. Noise Level' },
      { value: '30,000+', label: 'Motor Hours Rated' },
      { value: 'IP55', label: 'Moisture Protection' },
      { value: '5-Star', label: 'BEE Energy Rating' },
    ],
    featuredProducts: [
      {
        name: 'KCE Series – Ceiling Mount Fan',
        description: 'High performance ceiling mount fan with low noise level for residential bathrooms and toilets.',
        specs: ['Size from 100 to 600 mm', 'Capacities to 600 m³/h', 'Static pressure up to 250 Pa', 'Low noise operation'],
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
      },
      {
        name: 'TSK II Series – In-Line Centrifugal Duct Fan',
        description: 'Compact in-line fan for ducted residential ventilation with flexible mounting options.',
        specs: ['Size from 100 to 315 mm', 'Capacities to 1700 m³/h', 'Static pressure up to 1000 Pa', 'Any mounting position'],
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
      },
      {
        name: 'MTD Series – In-Line Mixed Flow Duct Fan',
        description: 'Easy-to-install mixed flow duct fan for residential ventilation systems.',
        specs: ['Size from 100 to 315 mm', 'Capacities to 1800 m³/h', 'Two speed motor standard', 'Easy installation & maintenance'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      },
    ],
  },
  {
    id: '7',
    slug: 'transport',
    name: 'Transport',
    description:
      'Ventilation solutions for transportation infrastructure including tunnels, metro systems, railways, and airports.',
    longDescription:
      'Transportation infrastructure requires high-reliability ventilation systems for tunnels, metro stations, railway platforms, and airport terminals. Our transport range includes tunnel jet fans, tunnel axial fans, and HVLS fans designed for emergency smoke control and passenger comfort. All products meet stringent fire safety requirements and are built for continuous operation in demanding environments.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
    applications: ['Tunnel Ventilation', 'Metro Station Ventilation', 'Railway Platform Cooling', 'Airport Terminal HVAC', 'Emergency Smoke Control'],
    keyProducts: ['KJF Series – Tunnel Jet Fan', 'KTF Series – Tunnel Axial Fan', 'KVS Series – HVLS Fan', 'TDA Series – Tube Axial', 'MXA Series – Mixed Flow'],
    environments: [
      'Road & Highway Tunnels',
      'Metro Rail Stations & Tunnels',
      'Railway Platforms & Underpasses',
      'Airport Terminals & Jet Bridges',
      'Ferry Terminals & Port Buildings',
      'Bus Depots & Underground Terminals',
    ],
    industryRequirements: [
      'NFPA 502 — Standard for Road Tunnels & Garages',
      'BS 7346 — Components for Smoke & Heat Control',
      'RDSO / Indian Railways Specifications',
      'DMRC / Metro Rail Corporation Standards',
      'Seismic Zone IV & V Compliance',
      'CE Marking for Fire-Rated Products',
    ],
    challenges: [
      {
        title: 'Life-Safety Emergency Smoke Control',
        description:
          'Tunnel and metro fires are catastrophic. Our tunnel jet fans switch to emergency mode in under 30 seconds, maintaining airflow at 400°C for 2 hours to enable safe passenger evacuation.',
      },
      {
        title: 'Bidirectional & Reversible Airflow',
        description:
          'Traffic direction in tunnels reverses throughout the day. Our reversible jet fans switch thrust direction on command, providing full ventilation efficiency in both directions without mechanical changeover.',
      },
      {
        title: 'Vibration & Seismic Resistance',
        description:
          'Rail environments generate continuous vibration. Our transport fans are designed with anti-vibration mounting systems and seismic bracing to comply with Zone IV & V requirements across India.',
      },
      {
        title: 'Passenger Thermal Comfort at Scale',
        description:
          'Metro platforms serving 50,000+ daily passengers require massive, consistent airflow. Our HVLS fans provide gentle, wide-area airflow without creating uncomfortable drafts for commuters.',
      },
    ],
    stats: [
      { value: '400°C', label: 'Fire Rating (2 hrs)' },
      { value: '<30 sec', label: 'Emergency Response' },
      { value: '403,000', label: 'Max m³/h (HVLS)' },
      { value: 'Zone IV', label: 'Seismic Compliance' },
    ],
    featuredProducts: [
      {
        name: 'KJF Series – Tunnel Jet Fan',
        description: 'Purpose-built jet fan for longitudinal tunnel ventilation and emergency smoke extraction.',
        specs: ['Bidirectional operation', 'High thrust force', 'Fire rated construction', 'Low noise emission'],
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
      },
      {
        name: 'KTF Series – Tunnel Axial Fan',
        description: 'Heavy-duty axial fan designed for tunnel ventilation and smoke extraction systems.',
        specs: ['High capacity design', 'Fire rated options', 'Corrosion resistant coating', 'Custom configurations available'],
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop',
      },
      {
        name: 'KVS Series – HVLS Fan for Transport',
        description: 'High Volume Low Speed fan for railway platforms and airport terminals.',
        specs: ['Diameter up to 7300 mm', 'Capacity up to 403,000 m³/h', 'Energy efficient PM motor', 'Quiet operation'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=600&h=400&fit=crop',
      },
    ],
  },
];
