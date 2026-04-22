'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/products';
import { ArrowRight, Wind, ShieldCheck, Zap, Settings, BarChart3, Download, Search, ChevronDown, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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
      <section className="relative bg-[#0B2A3C] text-white pt-12 md:pt-16 pb-16 overflow-hidden">
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
                <h1 className="text-4xl text-white md:text-6xl lg:text-7xl font-black font-heading mb-6 leading-[1.1] uppercase">
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

            {/* Right Side - Inquiry Form Card */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                 {isSubmitted ? (
                   <div className="text-center py-12">
                     <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-6 mx-auto">
                       <CheckCircle2 size={40} />
                     </div>
                     <h3 className="text-2xl font-black font-heading text-white mb-4 uppercase tracking-tighter">Inquiry Received!</h3>
                     <p className="text-gray-400 text-sm mb-8 font-body">
                       Our technical engineers will contact you shortly with the catalog and quote.
                     </p>
                     <Button 
                       onClick={() => setIsSubmitted(false)} 
                       className="bg-white text-[#0B2A3C] hover:bg-gray-100 w-full h-14 rounded-xl font-black uppercase text-xs tracking-widest transition-all"
                     >
                       Send New Request
                     </Button>
                   </div>
                 ) : (
                   <>
                     <div className="flex items-center gap-3 mb-8">
                       <div className="w-1.5 h-8 bg-[#F5A02E] rounded-full" />
                       <h3 className="text-2xl font-black font-heading text-white uppercase tracking-tighter">Instant Catalog Request</h3>
                     </div>

                     <form onSubmit={handleSubmit} className="space-y-6">
                       <div className="space-y-2">
                         <label className="text-[10px] font-black text-white/70 uppercase tracking-widest ml-1">Your Full Name</label>
                         <Input 
                           placeholder="e.g. Robert Smith" 
                           className="h-14 bg-white/5 border-white/10 focus:border-[#F5A02E] rounded-2xl px-6 font-bold text-white placeholder:text-white/20 transition-all"
                           value={formData.name}
                           onChange={(e) => handleChange('name', e.target.value)}
                           required
                         />
                       </div>

                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label className="text-[10px] font-black text-white/70 uppercase tracking-widest ml-1">Business Email</label>
                           <Input 
                             type="email"
                             placeholder="email@company.com" 
                             className="h-14 bg-white/5 border-white/10 focus:border-[#F5A02E] rounded-2xl px-6 font-bold text-white placeholder:text-white/20 transition-all"
                             value={formData.email}
                             onChange={(e) => handleChange('email', e.target.value)}
                             required
                           />
                         </div>
                         <div className="space-y-2">
                           <label className="text-[10px] font-black text-white/70 uppercase tracking-widest ml-1">Phone Number</label>
                           <Input 
                             placeholder="+91-XXXXX-XXXXX" 
                             className="h-14 bg-white/5 border-white/10 focus:border-[#F5A02E] rounded-2xl px-6 font-bold text-white placeholder:text-white/20 transition-all"
                             value={formData.phone}
                             onChange={(e) => handleChange('phone', e.target.value)}
                             required
                           />
                         </div>
                       </div>

                       <div className="space-y-2">
                         <label className="text-[10px] font-black text-white/70 uppercase tracking-widest ml-1">Interest Category</label>
                         <Textarea 
                           placeholder="Tell us about your project requirements..." 
                           className="min-h-[120px] bg-white/5 border-white/10 focus:border-[#F5A02E] rounded-3xl p-6 font-bold text-white placeholder:text-white/20 transition-all resize-none"
                           value={formData.message}
                           onChange={(e) => handleChange('message', e.target.value)}
                         />
                       </div>

                       <Button 
                         type="submit" 
                         className="w-full bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] h-16 text-xs font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-[#F5A02E]/20 transition-all active:scale-[0.98]" 
                         disabled={isLoading}
                       >
                         {isLoading ? (
                           <span className="flex items-center gap-2">
                             <div className="w-4 h-4 border-2 border-[#0B2A3C]/30 border-t-[#0B2A3C] rounded-full animate-spin" />
                             Sending Request...
                           </span>
                         ) : (
                           <span className="flex items-center gap-2">
                             <Send size={16} /> Get Catalog & Quote
                           </span>
                         )}
                       </Button>
                     </form>
                   </>
                 )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-[0_1px_8px_0_rgba(11,42,60,0.07)] py-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3">

            {/* Category Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="shrink-0 h-10 border border-gray-200 flex items-center gap-2 px-4 bg-white hover:bg-gray-50 text-[11px] font-black uppercase tracking-widest text-gray-600 min-w-[180px] justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Filter size={13} className="text-[#2E86B8]" />
                    <span className={selectedCategory ? 'text-[#0B2A3C]' : 'text-gray-400'}>
                      {activeCategoryName}
                    </span>
                  </span>
                  <ChevronDown size={13} className="text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 p-1.5 bg-white shadow-xl border border-gray-100 z-[60] rounded-xl">
                <DropdownMenuItem
                  onClick={() => setSelectedCategory(null)}
                  className="px-3 py-2.5 cursor-pointer rounded-lg font-black text-[#0B2A3C] text-[10px] uppercase tracking-widest hover:bg-[#F4F6F8]"
                >
                  All Products
                </DropdownMenuItem>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <DropdownMenuItem
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`px-3 py-2.5 cursor-pointer rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-[#F4F6F8] hover:text-[#2E86B8] ${selectedCategory === cat.name ? 'text-[#2E86B8] bg-blue-50' : 'text-gray-500'}`}
                  >
                    {cat.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-200 shrink-0" />

            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={15} />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, specification, or application..."
                className="pl-10 h-10 border border-gray-200 focus:border-[#2E86B8] focus:ring-0 rounded-lg bg-[#F8FAFC] text-sm w-full"
                aria-label="Search products"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0B2A3C] transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Result count badge */}
            <span className="shrink-0 hidden sm:flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">
              <span className="text-[#0B2A3C]">{filteredProducts.length}</span> products
            </span>

          </div>
        </div>
      </section>

      {/* Main Product Grid - Professional Showcase Layout */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-[0_4px_16px_rgb(0,0,0,0.04)] border border-gray-100/80 overflow-hidden flex flex-col hover:shadow-[0_12px_32px_rgba(46,134,184,0.12)] hover:border-[#2E86B8]/30 transition-all duration-500"
              >
                {/* Image Area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <Image
                    src={product.image || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[1.02]"
                  />

                  {/* Brand Accent Top Right */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-lg shadow-sm border border-white/20">
                      <ShieldCheck size={14} className="text-green-500" />
                    </div>
                  </div>

                  {/* Technical Quick Look - Slide Up on Hover */}
                  <div className="absolute inset-0 bg-[#0B2A3C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                     <div className="w-full bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Performance</span>
                          <div className="flex gap-1">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-1 h-1 rounded-full bg-[#2E86B8]" />
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[8px] text-gray-500 font-bold uppercase">Max Capacity</span>
                            <span className="text-[#0B2A3C] font-black text-[11px] truncate">{product.specs.capacityRange}</span>
                          </div>
                          <div className="flex flex-col text-right">
                            <span className="text-[8px] text-gray-500 font-bold uppercase">Compliance</span>
                            <span className="text-[#2E86B8] font-black text-[11px]">AMCA FEG</span>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-grow flex flex-col bg-gradient-to-b from-white to-gray-50/30">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-px w-4 bg-[#2E86B8]/30" />
                      <span className="text-[9px] font-black text-[#2E86B8] uppercase tracking-[0.2em]">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-base font-black font-heading text-[#0B2A3C] mb-2 group-hover:text-[#2E86B8] transition-colors line-clamp-2 uppercase leading-tight tracking-tighter">
                      {product.name}
                    </h3>

                    <p className="text-gray-500 font-body text-xs mb-0 line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {product.description}
                    </p>
                  </div>

                  {/* Footer of Card */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-grow flex items-center justify-center gap-2 bg-[#0B2A3C] text-white py-2.5 px-4 rounded-lg font-black text-[9px] uppercase tracking-widest hover:bg-[#2E86B8] transition-all duration-300 shadow-sm"
                    >
                      View Details
                      <ArrowRight size="12" className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      title="Download Technical Datasheet"
                      className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg border border-gray-100 text-gray-400 hover:text-[#0B2A3C] hover:border-[#0B2A3C] hover:bg-white transition-all duration-300"
                    >
                      <Download size={14} />
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
                <h2 className="text-3xl md:text-4xl font-black text-white font-heading mb-6 uppercase tracking-tighter">
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
