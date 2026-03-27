'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/products';
import { ArrowRight, Wind, ShieldCheck, Zap, Settings, BarChart3, Download, Search, ChevronDown, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory 
        ? product.category === selectedCategory 
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const activeCategoryName = useMemo(() => {
    if (!selectedCategory) return 'Filter By Category';
    return PRODUCT_CATEGORIES.find(c => c.name === selectedCategory)?.name || selectedCategory;
  }, [selectedCategory]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Hero Section - Industry Professional Look */}
      <section className="relative bg-[#0B2A3C] text-white pt-[84px] md:pt-[104px] pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2E86B8]/20 -skew-x-12 translate-x-1/4" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-0 pb-8 lg:pb-12">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="max-w-4xl mx-auto lg:mx-0">
                <span className="inline-block px-4 py-1 rounded-full bg-[#F5A02E] text-[#0B2A3C] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  Industrial Ventilation Solutions
                </span> 
                <h1 className="text-4xl text-white md:text-6xl lg:text-7xl font-black font-montserrat mb-6 leading-[1.1] uppercase">
                  Precision Engineered <br className="hidden md:block" /> 
                  <span className="text-[#2E86B8]">Air Systems</span>
                </h1>
                <p className="text-lg md:text-xl font-body text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Explore India's most comprehensive range of AMCA-compliant industrial fans and HVAC components. 
                  <span className="block mt-2 text-[#F5A02E] font-bold">Expert selection support available for every project.</span>
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Button asChild size="lg" className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-black h-14 px-8 uppercase tracking-wide shadow-lg shadow-[#F5A02E]/20">
                    <a href="/Full_Catalogue.pdf" download="SUV_FANS_Full_Catalogue.pdf">
                      Download Full Catalog
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white/20 text-black hover:bg-white/10 font-black h-14 px-8 uppercase tracking-wide backdrop-blur-sm">
                    <Link href="/contact">
                      Technical Support
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Image - Research & Development choice */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative aspect-square w-full max-w-[450px] mx-auto">
                {/* Decorative glow behind image */}
                <div className="absolute inset-0 bg-[#2E86B8]/30 blur-[120px] rounded-full animate-pulse" />
                
                {/* 
                  R&D Image Selection: 
                  A high-performance industrial centrifugal blower is the gold standard for 
                  "Industrial Ventilation Solutions". It conveys power, engineering precision, 
                  and the core business of SUV FANS.
                */}
                <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                  <Image
                    src="/ProductImage.webp"
                    alt="Industrial Centrifugal Blower Engineering"
                    fill
                    className="object-cover brightness-110 contrast-110"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2A3C]/40 via-transparent to-transparent" />
                </div>

                {/* Floating Technical Badge */}
                {/* <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 hidden sm:flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <ShieldCheck className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Certified</p>
                    <p className="text-[#0B2A3C] font-black text-sm">AMCA Standards</p>
                  </div>
                </div> */}

                {/* Performance Stat */}
                {/* <div className="absolute -top-4 -right-4 bg-[#2E86B8] p-4 rounded-2xl shadow-2xl border border-white/20 hidden sm:block">
                  <div className="flex flex-col items-center">
                    <Zap className="text-[#F5A02E] mb-1" size={20} />
                    <p className="text-white font-black text-lg leading-none">98%</p>
                    <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest mt-1">Efficiency</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Filter & Search Bar - Fixed scroll gap */}
      <section className="sticky top-[84px] md:top-[104px] z-30 bg-white/95 backdrop-blur-md border-b shadow-xl py-4 -mt-px">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            
            {/* Category Dropdown */}
            <div className="w-full lg:w-auto shrink-0">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline" className="w-full lg:w-72 h-12 border-2 border-gray-100 flex items-center justify-between px-4 bg-white hover:bg-gray-50 transition-all">
                    <span className="flex items-center gap-2">
                      <Filter size={16} className="text-[#2E86B8]" />
                      <span className={selectedCategory ? "text-[#0B2A3C] font-black" : "text-gray-500"}>
                        {activeCategoryName}
                      </span>
                    </span>
                    <ChevronDown size={16} className="text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-full lg:w-72 p-2 bg-white shadow-2xl border-2 border-gray-100 z-[60] rounded-xl">
                  <DropdownMenuItem 
                    onClick={() => setSelectedCategory(null)}
                    className="p-3 cursor-pointer rounded-lg font-black text-[#0B2A3C] uppercase text-[10px] tracking-widest hover:bg-[#F4F6F8]"
                  >
                    All Products
                  </DropdownMenuItem>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <DropdownMenuItem 
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`p-3 cursor-pointer rounded-lg font-bold uppercase text-[10px] tracking-widest hover:bg-[#F4F6F8] hover:text-[#2E86B8] ${selectedCategory === cat.name ? 'text-[#2E86B8] bg-blue-50' : 'text-gray-600'}`}
                    >
                      {cat.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2E86B8]" size={18} />
              <Input 
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, specification, or application..." 
                className="pl-12 h-12 border-2 border-gray-100 focus:border-[#2E86B8] focus:ring-0 rounded-xl bg-gray-50 text-sm shadow-inner w-full"
                aria-label="Search products"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0B2A3C]"
                >
                  <X size={16} />
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Main Product Grid - Professional Showcase Layout */}
      <section className="container mx-auto py-24 px-4 md:px-6">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(46,134,184,0.12)] hover:border-[#2E86B8]/30 transition-all duration-700"
              >
                {/* Image Area with Professional Overlay */}
                <div className="relative aspect-[16/11] overflow-hidden bg-gray-50">
                  <Image
                    src={product.image || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[1.02]"
                  />
                  
                  {/* Brand Accent Top Right */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-sm border border-white/20">
                      <ShieldCheck size={18} className="text-green-500" />
                    </div>
                  </div>

                  {/* Technical Quick Look - Modern Slide Up */}
                  <div className="absolute inset-0 bg-[#0B2A3C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                     <div className="w-full bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Performance Profile</span>
                          <div className="flex gap-1">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-1 h-1 rounded-full bg-[#2E86B8]" />
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <span className="text-[9px] text-gray-500 font-bold uppercase">Max Capacity</span>
                            <span className="text-[#0B2A3C] font-black text-xs truncate">{product.specs.capacityRange}</span>
                          </div>
                          <div className="flex flex-col text-right">
                            <span className="text-[9px] text-gray-500 font-bold uppercase">Compliance</span>
                            <span className="text-[#2E86B8] font-black text-xs">AMCA FEG</span>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Content Area - Refined Padding and Typography */}
                <div className="p-8 lg:p-10 flex-grow flex flex-col bg-gradient-to-b from-white to-gray-50/30">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-px w-6 bg-[#2E86B8]/30" />
                      <span className="text-[10px] font-black text-[#2E86B8] uppercase tracking-[0.25em]">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-black font-montserrat text-[#0B2A3C] mb-4 group-hover:text-[#2E86B8] transition-colors line-clamp-2 uppercase leading-tight tracking-tighter">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-500 font-body text-sm mb-0 line-clamp-3 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {product.description}
                    </p>
                  </div>

                  {/* Footer of Card */}
                  <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between gap-4">
                    <Link 
                      href={`/products/${product.slug}`}
                      className="flex-grow flex items-center justify-center gap-3 bg-[#0B2A3C] text-white py-3.5 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#2E86B8] transition-all duration-300 shadow-lg shadow-[#0B2A3C]/10"
                    >
                      Explore Technical Specs
                      <ArrowRight size="14" className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    
                    <button 
                      title="Download Technical Datasheet"
                      className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl border-2 border-gray-100 text-gray-400 hover:text-[#0B2A3C] hover:border-[#0B2A3C] hover:bg-white transition-all duration-300"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-black text-[#0B2A3C] uppercase mb-2">No Products Found</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              We couldn't find any products matching your current filters. Try adjusting your search or selecting a different category.
            </p>
            <Button 
              onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
              className="bg-[#0B2A3C] text-white hover:bg-[#2E86B8] px-8"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </section>

      {/* Industry Support CTA */}
      <section className="bg-white py-20 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#0B2A3C] rounded-3xl p-8 md:p-16 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F5A02E]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white font-montserrat mb-6 uppercase tracking-tighter">
                  Need Expert Engineering <span className="text-[#F5A02E]">Consultation?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Our team of technical experts is ready to assist you with fan selection, system design, and customized ventilation solutions for any complex project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-[#0B2A3C] hover:bg-[#F4F6F8] font-black h-14 px-10 uppercase tracking-wide">
                    <Link href="/contact">
                      Contact Engineering
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 font-black h-14 px-10 uppercase tracking-wide">
                    <Link href="/contact">
                      Selection Guide
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: BarChart3, title: 'Fan Curves', desc: 'Precision performance data' },
                  { icon: Settings, title: 'CAD Data', desc: '3D & 2D system files' },
                  { icon: Zap, title: 'Efficiency', desc: 'IE3/IE4 standard motors' },
                  { icon: ShieldCheck, title: 'AMCA', desc: 'Certified test procedures' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <item.icon className="text-[#F5A02E] mb-4" size={24} />
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
