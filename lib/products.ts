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
  { name: 'HVAC Air Ducts & Hoods', slug: 'hvlsfans' },
  { name: 'Turnkey HVAC Solutions', slug: 'turnkey-hvac-products' },
  { name: 'PURE AIR Purifiers', slug: 'air-purifiers' },
];

export const PRODUCTS: Product[] = [];
