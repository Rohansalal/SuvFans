import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { COMPANY_CONFIG } from '@/lib/config';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Thermometer, Wind, FileText, Download, Settings, BarChart3, Ruler, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className="bg-white min-h-screen pt-[72px] md:pt-[88px]">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-body">
            <Link href="/" className="hover:text-[#0B2A3C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#0B2A3C] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#0B2A3C] font-semibold truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Image Side - 7 columns */}
            <div className="lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group border-8 border-gray-50">
              <Image
                src={product.image || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {product.badge && (
                <div className="absolute top-6 left-6 bg-[#F5A02E] text-[#0B2A3C] font-bold px-4 py-1 rounded-full text-sm shadow-lg">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Content Side - 5 columns */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-[#0B2A3C]/10 text-[#0B2A3C] text-xs font-bold uppercase tracking-wider mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-[#0B2A3C] mb-6 leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 font-body mb-8 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Technical Spec Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Capacity Range', value: product.specs.capacityRange, icon: Wind },
                  { label: 'Static Pressure', value: product.specs.staticPressure, icon: BarChart3 },
                  { label: 'Standard Voltage', value: product.specs.voltage, icon: Zap },
                  { label: 'Efficiency', value: product.specs.efficiency || 'High Grade', icon: ShieldCheck }
                ].map((spec, i) => (
                  <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[#2E86B8]">
                      <spec.icon size={16} />
                      <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{spec.label}</span>
                    </div>
                    <p className="text-[#0B2A3C] font-bold text-sm leading-none">{spec.value || 'Contact for Specs'}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="bg-[#0B2A3C] hover:bg-[#1a3a52] text-white font-bold h-14 w-full">
                  <Link href="/get-quote" className="flex items-center justify-center gap-2">
                    Request Technical Datasheet <ArrowRight size={18} />
                  </Link>
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" asChild className="border-2 border-[#0B2A3C] text-[#0B2A3C] hover:bg-[#0B2A3C]/5 font-bold h-12">
                    <Link href="/contact" className="flex items-center gap-2">
                      <Phone size={16} /> Talk to Expert
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="border-2 border-[#2E86B8] text-[#2E86B8] hover:bg-[#2E86B8]/5 font-bold h-12">
                    <Link href="/contact" className="flex items-center gap-2">
                      <Settings size={16} /> Engineering Support
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering & Resources Section - Industry Standard */}
      <section className="py-16 bg-[#0B2A3C] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2E86B8]/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold font-montserrat mb-6 flex items-center gap-3">
                <Settings className="text-[#F5A02E]" /> Engineering Excellence
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
                Our fans are designed and tested in compliance with <span className="text-white font-bold">AMCA standards</span>. We provide comprehensive selection support, including fan curves, acoustic analysis, and system effect considerations to ensure optimal performance in your specific application.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Ruler className="text-[#F5A02E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Custom Selection</h4>
                    <p className="text-gray-400 text-sm">Precisely match fans to your required operating point.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <FileText className="text-[#F5A02E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">CAD & BIM Data</h4>
                    <p className="text-gray-400 text-sm">Revit and AutoCAD files available for system integration.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Download size={20} className="text-[#F5A02E]" /> Technical Resources
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Product Catalog', size: '2.4 MB' },
                  { name: 'Installation Manual (IOM)', size: '1.8 MB' },
                  { name: 'Standard Specifications', size: '0.9 MB' },
                  { name: 'Maintenance Guide', size: '1.2 MB' }
                ].map((file, i) => (
                  <li key={i} className="flex items-center justify-between group cursor-pointer p-3 rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-white/20">
                    <div className="flex items-center gap-3">
                      <FileText size={18} className="text-[#2E86B8]" />
                      <div>
                        <div className="text-sm font-bold">{file.name}</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest">{file.size}</div>
                      </div>
                    </div>
                    <Download size={16} className="text-gray-500 group-hover:text-[#F5A02E] transition-colors" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-montserrat text-[#0B2A3C] mb-8 border-l-4 border-[#F5A02E] pl-6">
              Product Overview
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 font-body leading-relaxed mb-12">
              <p className="mb-6 whitespace-pre-line">
                {product.longDescription || product.description}
              </p>
            </div>

            {/* Additional Details Grid */}
            {product.details && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.details.map((detail, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                    {detail.image && (
                      <div className="relative aspect-video w-full bg-gray-100 border-b">
                        <Image
                          src={detail.image}
                          alt={detail.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-montserrat text-[#0B2A3C] mb-3">
                        {detail.title}
                      </h3>
                      <p className="text-gray-600 font-body leading-relaxed text-sm">
                        {detail.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      {product.whyChooseContent && (
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold font-montserrat text-[#0B2A3C] mb-12 relative inline-block">
              Why {product.slug.includes('cubic') ? 'Cubic' : 'our'} Fans?
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#F5A02E]"></span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {product.whyChooseContent.map((item, idx) => {
                // Assign icons based on text
                const iconMap: Record<string, React.ReactNode> = {
                  'Compact in Size': <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4"><Wind className="text-[#0B2A3C]" /></div>,
                  'High Efficiency': <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4"><Zap className="text-[#0B2A3C]" /></div>,
                  'Installation Flexibility': <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4"><ArrowRight className="text-[#0B2A3C] rotate-45" /></div>,
                  'Ease of Service': <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4"><ShieldCheck className="text-[#0B2A3C]" /></div>,
                  'Cost Effective': <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="text-[#0B2A3C]" /></div>,
                  'Low Power Consumption': <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4"><Zap className="text-[#0B2A3C]" /></div>,
                  'Low Sound Levels': <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4"><Wind className="text-[#0B2A3C]" /></div>,
                };
                return (
                  <div key={idx} className="group p-4 transition-all duration-300 hover:-translate-y-1">
                    {iconMap[item] || <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="text-[#0B2A3C]" /></div>}
                    <p className="font-montserrat font-bold text-[#0B2A3C] group-hover:text-[#F5A02E] transition-colors">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Features & Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold font-montserrat text-[#0B2A3C] mb-8 flex items-center gap-3">
                <Zap className="text-[#F5A02E]" /> Key Features & Benefits
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 font-body leading-tight group-hover:text-[#0B2A3C] transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-2xl font-bold font-montserrat text-[#0B2A3C] mb-8 flex items-center gap-3">
                <Wind className="text-[#2E86B8]" /> Common Applications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 rounded-full bg-[#2E86B8]" />
                    <span className="text-gray-700 font-semibold font-body text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Trust Banner */}
      <section className="py-12 bg-[#0B2A3C] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-[#F5A02E] mb-4" />
              <h4 className="text-xl font-bold mb-2">Quality Certified</h4>
              <p className="text-gray-400 text-sm">Every fan is statically and dynamically balanced to ISO standards.</p>
            </div>
            <div className="flex flex-col items-center">
              <Thermometer className="w-12 h-12 text-[#F5A02E] mb-4" />
              <h4 className="text-xl font-bold mb-2">Tested Performance</h4>
              <p className="text-gray-400 text-sm">Rigorous testing for temperature, noise, and airflow capacity.</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-12 h-12 text-[#F5A02E] mb-4" />
              <h4 className="text-xl font-bold mb-2">Energy Efficient</h4>
              <p className="text-gray-400 text-sm">Engineered to provide maximum airflow with minimal power consumption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold font-montserrat text-[#0B2A3C] mb-6">
            Explore Other Products
          </h2>
          <p className="text-gray-600 font-body mb-10 max-w-2xl mx-auto">
            Discover our full range of industrial ventilation and HVAC solutions designed for peak performance.
          </p>
          <Button asChild variant="outline" size="lg" className="border-2 border-[#0B2A3C] text-[#0B2A3C] hover:bg-[#0B2A3C] hover:text-white font-bold h-14 px-10 transition-all duration-300">
            <Link href="/products" className="flex items-center gap-2">
              View All Products <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
