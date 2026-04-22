import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wind, Zap, BarChart3, Tag } from 'lucide-react';
import { Metadata } from 'next';
import { COMPANY_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: `Product Catalog | ${COMPANY_CONFIG.name}`,
  description: 'Complete product catalog for SUV FANS LLP — centrifugal fans, axial fans, HVLS fans, insulated box fans, tube axial fans, flexible ducts, HVAC air ducts, kitchen hoods, turnkey HVAC solutions, and PURE AIR purifiers.',
};

const catalogSections = [
  {
    section: 'CENTRIFUGAL FANS',
    description: 'Direct drive inline cubic fans, belt driven cabinet fans, centrifugal single width fans, circular inline fans, power roof ventilators, and fume exhaust fans.',
    slugs: ['centrifugal-inline-cubic-fans', 'belt-driven-cabinet-fans', 'power-roof-ventilators-upblast-fan', 'kitchen-exhaust-fan'],
    pageRef: 'Pages 2–3',
    color: '#0B2A3C',
  },
  {
    section: 'AXIAL FLOW FANS',
    description: 'Direct drive wall mount fans, propeller fans, belt driven wall mount fans, and tube axial fans for factories, warehouses, car parks, and data centers.',
    slugs: ['axial-wall-exhaust-supply-fans', 'tube-axial-fans'],
    pageRef: 'Pages 4–5',
    color: '#2E86B8',
  },
  {
    section: 'INSULATED BOX FANS',
    description: 'Silent ceiling exhaust fans, circular inline fans, and industrial coolers for laboratories, bathrooms, hotels, cafeterias, and smoke rooms.',
    slugs: ['ceiling-exhaust-cabinet-fans', 'insulated-housing-cabinet-fan'],
    pageRef: 'Page 5',
    color: '#0B2A3C',
  },
  {
    section: 'LARGE DIAMETER FANS (HVLS)',
    description: 'High Volume Low Speed fans from 16 to 24 feet delivering up to 200,000 CFM for industrial and commercial buildings.',
    slugs: ['hvls-fans'],
    pageRef: 'Page 6',
    color: '#2E86B8',
  },
  {
    section: 'HVAC AIR DUCTS & KITCHEN HOODS',
    description: 'Flexible ducts (non-insulated, insulated, semi-rigid, fire-rated), duct connectors, and commercial kitchen hoods in GI and SS.',
    slugs: ['flexible-ducts', 'hvac-air-duct-kitchen-hoods'],
    pageRef: 'Page 6',
    color: '#0B2A3C',
  },
  {
    section: 'TURNKEY HVAC — END-TO-END SOLUTIONS',
    description: 'Complete supply, installation, commissioning, and handover of AHUs, air washers, FCUs, FFUs, air curtains, clean rooms, and more.',
    slugs: ['turnkey-hvac-products'],
    pageRef: 'Page 7',
    color: '#2E86B8',
  },
  {
    section: 'PURE AIR PURIFIERS',
    description: 'Commercial & industrial air purifiers with German Mann+Hummel nano-fiber filtration. ISO 16890 certified. Purifies 2,000 sqft in 10 minutes.',
    slugs: ['air-purifiers'],
    pageRef: 'Page 8',
    color: '#0B2A3C',
  },
];

export default function CatalogPage() {
  const allCategories = PRODUCT_CATEGORIES.length;
  const allProducts = PRODUCTS.length;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#0B2A3C] text-white pt-[84px] md:pt-[104px] pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2E86B8]/20 -skew-x-12 translate-x-1/4" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#F5A02E] font-bold uppercase tracking-widest text-sm mb-4">Product Catalog 2024–25</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6">
              SUV FANS LLP<br />
              <span className="text-[#2E86B8]">Full Catalogue</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
              Your partner in air movement. {allCategories} product categories, {allProducts} product lines — centrifugal fans, axial fans, HVLS fans, HVAC ducts, turnkey solutions, and PURE AIR purifiers. Manufactured in Bhiwadi, Rajasthan.
            </p>
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { label: 'Product Lines', value: String(allProducts) },
                { label: 'Categories', value: String(allCategories) },
                { label: 'Experience', value: '19+ Years' },
                { label: 'Location', value: 'Bhiwadi, RJ' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-[#F5A02E]">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-black h-12 px-8 uppercase tracking-wider">
                <Link href="/get-quote">Request Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8 font-bold">
                <Link href="/products">Browse All Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-[#F8FAFC] border-b">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold font-heading text-[#0B2A3C] mb-6">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {catalogSections.map((section, idx) => (
              <a
                key={idx}
                href={`#section-${idx}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#2E86B8] hover:shadow-md transition-all group"
              >
                <span className="w-8 h-8 rounded-full bg-[#0B2A3C] text-white text-sm font-black flex items-center justify-center shrink-0 group-hover:bg-[#2E86B8] transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[#0B2A3C] text-sm truncate">{section.section}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest">{section.pageRef}</div>
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-[#2E86B8] transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Sections */}
      <div className="divide-y divide-gray-100">
        {catalogSections.map((section, sectionIdx) => {
          const sectionProducts = PRODUCTS.filter(p => section.slugs.includes(p.slug));
          return (
            <section key={sectionIdx} id={`section-${sectionIdx}`} className="py-20 scroll-mt-20">
              <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 h-10 rounded-full bg-[#0B2A3C] text-white text-sm font-black flex items-center justify-center">
                        {String(sectionIdx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{section.pageRef}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black font-heading text-[#0B2A3C] mb-3">{section.section}</h2>
                    <p className="text-gray-500 max-w-2xl">{section.description}</p>
                  </div>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sectionProducts.map(product => (
                    <div key={product.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
                      {/* Product Image */}
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-gray-100">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Wind size={64} className="text-gray-200" />
                          </div>
                        )}
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-[#F5A02E] text-[#0B2A3C] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                            {product.badge}
                          </span>
                        )}
                        {product.images && product.images.length > 1 && (
                          <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                            +{product.images.length - 1} photos
                          </span>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-[10px] text-[#2E86B8] font-black uppercase tracking-widest mb-2">{product.category}</span>
                        <h3 className="text-lg font-bold font-heading text-[#0B2A3C] mb-3 leading-tight">{product.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>

                        {/* Key Specs */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg p-2">
                            <Wind size={12} className="text-[#2E86B8] shrink-0" />
                            <span className="truncate font-medium">{product.specs.capacityRange}</span>
                          </div>
                          {product.specs.staticPressure && (
                            <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg p-2">
                              <BarChart3 size={12} className="text-[#2E86B8] shrink-0" />
                              <span className="truncate font-medium">{product.specs.staticPressure}</span>
                            </div>
                          )}
                          {product.specs.voltage && (
                            <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg p-2">
                              <Zap size={12} className="text-[#F5A02E] shrink-0" />
                              <span className="truncate font-medium">{product.specs.voltage}</span>
                            </div>
                          )}
                          {product.pricing && (
                            <div className="flex items-center gap-2 text-xs text-gray-600 bg-amber-50 rounded-lg p-2">
                              <Tag size={12} className="text-[#F5A02E] shrink-0" />
                              <span className="truncate font-medium text-[#0B2A3C]">{product.pricing}</span>
                            </div>
                          )}
                        </div>

                        {/* Spec Table indicator */}
                        {product.specTable && product.specTable.length > 0 && (
                          <p className="text-[10px] text-[#2E86B8] font-bold uppercase tracking-widest mb-4">
                            ✓ {product.specTable.length}-row performance table available
                          </p>
                        )}

                        <div className="flex gap-3 mt-auto">
                          <Button asChild className="flex-1 bg-[#0B2A3C] hover:bg-[#2E86B8] text-white text-xs font-black uppercase tracking-wider h-10 rounded-xl">
                            <Link href={`/products/${product.slug}`}>View Details</Link>
                          </Button>
                          <Button asChild variant="outline" className="border-[#F5A02E] text-[#F5A02E] hover:bg-[#F5A02E] hover:text-[#0B2A3C] text-xs font-black h-10 px-4 rounded-xl">
                            <Link href="/get-quote">Quote</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Company Info Footer Strip */}
      <section className="py-16 bg-[#0B2A3C] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-bold text-lg mb-2">Works</h4>
              <p className="text-gray-400 text-sm">Block-7, B229, RIICO Industrial Area<br />Bhiwadi, Alwar, Rajasthan</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">About</h4>
              <p className="text-gray-400 text-sm">Founded by a mechanical engineer with 19+ years of HVAC and air ventilation manufacturing expertise. B.Tech Mechanical + PGDBA Operations & Research.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Our Value</h4>
              <p className="text-gray-400 text-sm">Ease of Doing Business · Application-Driven Engineering · Best-in-Class Responsiveness</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-black h-12 px-10 uppercase tracking-wider">
              <Link href="/contact">Contact Us for Any Requirement</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
