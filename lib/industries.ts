export interface Industry {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  applications: string[];
  keyProducts: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: '1',
    slug: 'manufacturing-factories',
    name: 'Manufacturing & Factories',
    description: 'High-performance ventilation for heavy industrial environments.',
    longDescription: 'Manufacturing facilities face unique challenges with heat, dust, and fumes. Our industrial-grade fans ensure a safe and productive environment for workers and equipment alike, adhering to the strictest safety standards.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    applications: ['General Ventilation', 'Process Cooling', 'Fume Extraction', 'Dust Collection'],
    keyProducts: ['Centrifugal Fans', 'Axial Flow Fans', 'Roof Extractors']
  },
  {
    id: '2',
    slug: 'commercial-kitchens',
    name: 'Commercial Kitchens',
    description: 'Specialized exhaust systems for grease and high-temperature air.',
    longDescription: 'Commercial kitchens require robust exhaust systems to manage smoke, grease, and moisture. Our specialized kitchen fans are rated for high temperatures and designed for easy maintenance and cleaning.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
    applications: ['Kitchen Exhaust', 'Make-up Air', 'Laundry Ventilation', 'HVAC Solutions'],
    keyProducts: ['Kitchen Exhaust Fans', 'Insulated Box Fans', 'Air Ducts']
  },
  {
    id: '3',
    slug: 'warehouses-logistics',
    name: 'Warehouses & Logistics',
    description: 'Massive air movement for large-scale storage and distribution centers.',
    longDescription: 'Keeping large warehouses cool is critical for worker comfort and inventory preservation. Our HVLS fans move massive volumes of air at low speeds, creating a consistent breeze across thousands of square feet.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    applications: ['Summer Cooling', 'Winter Destratification', 'Humidity Control', 'Worker Comfort'],
    keyProducts: ['HVLS Fans', 'Industrial Coolers', 'Wall Mount Axial Fans']
  },
  {
    id: '4',
    slug: 'healthcare-hospitals',
    name: 'Healthcare & Hospitals',
    description: 'Ultra-clean air solutions for sensitive medical environments.',
    longDescription: 'Hospitals require the highest standards of air filtration and pressure control to prevent cross-contamination. Our PURE AIR systems provide medical-grade filtration to ensure patient and staff safety.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    applications: ['Isolation Rooms', 'OT Ventilation', 'General Wards', 'Pharmacy Storage'],
    keyProducts: ['PURE AIR Purifiers', 'Silent Box Fans', 'High-efficiency Filters']
  },
  {
    id: '5',
    slug: 'data-centers',
    name: 'Data Centers',
    description: 'Precision cooling for mission-critical IT infrastructure.',
    longDescription: 'Data centers generate immense heat that must be managed 24/7. Our high-static pressure fans and precision cooling systems ensure uptime and energy efficiency for server rooms.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&h=600&fit=crop',
    applications: ['Hot Aisle Containment', 'CRAC Unit Support', 'Rack Cooling', 'Emergency Exhaust'],
    keyProducts: ['High-Pressure Blowers', 'In-row Cooling Fans', 'Smart VFD Controls']
  },
  {
    id: '6',
    slug: 'pharmaceutical',
    name: 'Pharmaceutical',
    description: 'Contamination-free air movement for drug manufacturing.',
    longDescription: 'Pharma labs and production lines require sterile environments. We provide SS-304/316 grade fans and specialized filtration housings that meet GMP and FDA requirements.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?w=800&h=600&fit=crop',
    applications: ['Clean Room Ventilation', 'Chemical Fume Hoods', 'Sterile Packing', 'Lab Exhaust'],
    keyProducts: ['Stainless Steel Fans', 'HEPA Filter Modules', 'Fume Scrubbers']
  }
];
