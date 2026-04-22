'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { COMPANY_CONFIG } from '@/lib/config';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Thermometer,
  Wind,
  FileText,
  Settings,
  BarChart3,
  Ruler,
  Phone,
  Send,
  MessageSquare,
  Tag,
  Table2,
  Home,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import SpecTable from '@/components/products/SpecTable';
import SpecFeatureTable from '@/components/products/SpecFeatureTable';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeImage, setActiveImage] = useState(product.image || '');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const galleryImages = product.images && product.images.length > 0
    ? product.images
    : product.image ? [product.image] : [];

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const tocItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Engineering', href: '#engineering' },
    { label: 'Product Details', href: '#product-overview' },
    ...(product.whyChooseContent ? [{ label: 'Why Choose', href: '#why-choose' }] : []),
    ...((product.specTable && product.specTable.length > 0) || (product.specFeatureTable && product.specFeatureTable.length > 0)
      ? [{ label: 'Specifications', href: '#specs' }]
      : []),
    { label: 'Features', href: '#features' },
    { label: 'Quick Inquiry', href: '#quick-inquiry' },
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* ── Breadcrumb bar (static, scrolls away) ── */}
      <div className="bg-[#F8FAFC] border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 py-2.5 flex items-center justify-between gap-4">
          <Breadcrumb>
            <BreadcrumbList className="text-xs">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="flex items-center gap-1 text-gray-400 hover:text-[#0B2A3C] font-medium transition-colors"
                >
                  <Home size={11} />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight size={11} className="text-gray-300" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/products"
                  className="text-gray-400 hover:text-[#0B2A3C] font-medium transition-colors"
                >
                  Products
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight size={11} className="text-gray-300" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/products"
                  className="text-gray-400 hover:text-[#0B2A3C] font-medium transition-colors"
                >
                  {product.category}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight size={11} className="text-gray-300" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#0B2A3C] font-semibold max-w-[180px] md:max-w-none truncate">
                  {product.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* ── Sticky TOC nav — sits just below the fixed navbar ── */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-[0_1px_8px_0_rgba(11,42,60,0.07)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-0">

            {/* Product name — visible when breadcrumb has scrolled away */}
            <span className="hidden md:block shrink-0 pr-5 mr-2 border-r border-gray-200 text-[11px] font-black text-[#0B2A3C] uppercase tracking-widest max-w-[200px] truncate py-3">
              {product.name}
            </span>

            {/* TOC links */}
            <nav aria-label="Page sections" className="flex items-center overflow-x-auto scrollbar-none flex-1">
              {tocItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group shrink-0 relative flex items-center px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#0B2A3C] transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#F5A02E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="shrink-0 pl-4 border-l border-gray-200 py-2">
              <Button
                asChild
                size="sm"
                className="bg-[#0B2A3C] hover:bg-[#F5A02E] hover:text-[#0B2A3C] text-white font-black text-[10px] uppercase tracking-wider h-8 px-4 rounded-lg transition-colors duration-200"
              >
                <a href="#quick-inquiry">Get Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="overview" className="py-12 md:py-20 border-b scroll-mt-[128px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Image Side - 7 columns */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group border-8 border-gray-50 bg-white">
                <Image
                  src={activeImage || product.image || '/ProductImage.webp'}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {product.badge && (
                  <div className="absolute top-6 left-6 bg-[#F5A02E] text-[#0B2A3C] font-bold px-4 py-1 rounded-full text-sm shadow-lg">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Image Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${activeImage === img ? 'border-[#F5A02E] shadow-md' : 'border-gray-200 opacity-70 hover:opacity-100'}`}
                    >
                      <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Technical Spec Grid - Moved here */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
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
            </div>

            {/* Content Side - 5 columns */}
            <div className="lg:col-span-5 space-y-6 sticky top-[100px]">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-[#0B2A3C]/10 text-[#0B2A3C] text-xs font-bold uppercase tracking-wider mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0B2A3C] mb-6 leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 font-body mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Pricing Badge */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 mb-6">
                  <Tag size={20} className="text-[#F5A02E] shrink-0" />
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Pricing</p>
                    <p className="text-[#0B2A3C] font-bold text-sm">{product.pricing || 'Contact for Quote'}</p>
                  </div>
                  <Button asChild size="sm" className="ml-auto bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] text-[10px] font-black uppercase tracking-wider px-4 h-9 rounded-lg">
                    <Link href="/get-quote">Get Quote</Link>
                  </Button>
                </div>
              </div>

              {/* Top features preview */}
              <ul className="space-y-2">
                {product.features.slice(0, 4).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button variant="outline" asChild className="border-gray-200 text-[#0B2A3C] hover:bg-gray-50 font-bold h-11 text-[10px] uppercase tracking-wider rounded-lg">
                  <Link href="/contact" className="flex items-center gap-2">
                    <Phone size={14} /> Talk to Expert
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-gray-200 text-[#2E86B8] hover:bg-blue-50/30 font-bold h-11 text-[10px] uppercase tracking-wider rounded-lg">
                  <Link href="/contact" className="flex items-center gap-2">
                    <Settings size={14} /> Engineering
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering & Resources Section - Industry Standard */}
      <section id="engineering" className="py-16 bg-[#0B2A3C] text-white overflow-hidden relative scroll-mt-[128px]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2E86B8]/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6 flex items-center justify-center gap-3">
              <Settings className="text-[#F5A02E]" /> Engineering Excellence
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Our fans are designed and tested in compliance with <span className="text-white font-bold">AMCA standards</span>. We provide comprehensive selection support, including fan curves, acoustic analysis, and system effect considerations to ensure optimal performance in your specific application.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Ruler className="text-[#F5A02E]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Custom Selection</h4>
                  <p className="text-gray-400 text-sm">Precisely match fans to your required operating point.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FileText className="text-[#F5A02E]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">CAD & BIM Data</h4>
                  <p className="text-gray-400 text-sm">Revit and AutoCAD files available for system integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section id="product-overview" className="py-16 bg-gray-50 scroll-mt-[128px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-[#0B2A3C] mb-8 border-l-4 border-[#F5A02E] pl-6">
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
                      <div className="relative aspect-video w-full bg-white border-b border-gray-100">
                        <Image
                          src={detail.image}
                          alt={detail.title}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-heading text-[#0B2A3C] mb-3">
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
        <section id="why-choose" className="py-16 bg-white border-b scroll-mt-[128px]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold font-heading text-[#0B2A3C] mb-12 relative inline-block">
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
                    <p className="font-heading font-bold text-[#0B2A3C] group-hover:text-[#F5A02E] transition-colors">
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Performance Specification Table */}
      {product.specTable && product.specTable.length > 0 && (
        <section id="specs" className="py-16 bg-gray-50 border-t scroll-mt-[128px]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold font-heading text-[#0B2A3C] mb-4 flex items-center gap-3">
              <Table2 className="text-[#F5A02E]" /> Performance Specifications
            </h2>
            <p className="text-gray-500 text-sm mb-8 font-body">All values are nominal. Actual performance may vary by installation conditions. Contact our engineering team for selection support.</p>
            <SpecTable data={product.specTable} />
          </div>
        </section>
      )}

      {/* Feature Specification Table (Air Purifiers / non-standard specs) */}
      {product.specFeatureTable && product.specFeatureTable.length > 0 && (
        <section id="specs" className="py-16 bg-gray-50 border-t scroll-mt-[128px]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold font-heading text-[#0B2A3C] mb-4 flex items-center gap-3">
              <Table2 className="text-[#F5A02E]" /> Technical Specifications
            </h2>
            <p className="text-gray-500 text-sm mb-8 font-body">Engineered for Performance. Designed for India.</p>
            <SpecFeatureTable data={product.specFeatureTable} />
          </div>
        </section>
      )}

      {/* Features & Applications */}
      <section id="features" className="py-16 scroll-mt-[128px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-[#0B2A3C] mb-8 flex items-center gap-3">
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
              <h2 className="text-2xl font-bold font-heading text-[#0B2A3C] mb-8 flex items-center gap-3">
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

      {/* Quick Inquiry Form */}
      <section id="quick-inquiry" className="py-20 bg-white border-t scroll-mt-[128px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Product CTA text */}
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-[#F5A02E]/10 text-[#F5A02E] text-xs font-black uppercase tracking-widest mb-4">Quick Inquiry</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#0B2A3C] mb-6 leading-tight">
                Interested in<br /><span className="text-[#2E86B8]">{product.name}?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Get a customised quote, technical specification sheet, or application advice from our HVAC engineering team — usually within 4 business hours.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Free application-based fan selection',
                  'Competitive pricing with volume discounts',
                  'Fast dispatch from Bhiwadi, Rajasthan',
                  'Post-installation support & warranty',
                ].map((pt, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                    <span className="font-medium text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-colors"
                >
                  <MessageSquare size={16} /> WhatsApp Us
                </a>
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#0B2A3C] text-[#0B2A3C] hover:bg-[#0B2A3C] hover:text-white font-bold text-sm transition-colors"
                >
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100 shadow-sm">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B2A3C] mb-2">Inquiry Sent!</h3>
                  <p className="text-gray-500 mb-6">Our team will reach out within 4 business hours.</p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-[#0B2A3C] text-[#0B2A3C] hover:bg-[#0B2A3C] hover:text-white font-bold"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <p className="text-[#0B2A3C] font-bold text-xl mb-1">Send an Inquiry</p>
                    <p className="text-gray-500 text-sm">Fill in your details and we'll get back to you shortly.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Your Name *</label>
                      <Input
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={e => handleChange('name', e.target.value)}
                        className="h-11 border-gray-200 focus:border-[#2E86B8] focus:ring-[#2E86B8]/20 rounded-lg"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Phone *</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => handleChange('phone', e.target.value)}
                        className="h-11 border-gray-200 focus:border-[#2E86B8] focus:ring-[#2E86B8]/20 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={e => handleChange('email', e.target.value)}
                      className="h-11 border-gray-200 focus:border-[#2E86B8] focus:ring-[#2E86B8]/20 rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Requirements</label>
                    <Textarea
                      placeholder={`Tell us about your application — airflow needed, installation type, site conditions, quantity, etc.`}
                      value={formData.message}
                      onChange={e => handleChange('message', e.target.value)}
                      rows={4}
                      className="border-gray-200 focus:border-[#2E86B8] focus:ring-[#2E86B8]/20 rounded-lg resize-none"
                    />
                  </div>
                  <input type="hidden" value={product.name} readOnly />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#0B2A3C] hover:bg-[#2E86B8] text-white font-black h-12 uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>Sending…</>
                    ) : (
                      <><Send size={16} /> Submit Inquiry</>
                    )}
                  </Button>
                  <p className="text-[10px] text-gray-400 text-center">
                    By submitting you agree to be contacted by SUV FANS LLP regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-[#0B2A3C] mb-6">
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
