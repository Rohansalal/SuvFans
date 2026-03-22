'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Wind, 
  ShieldCheck, 
  Zap, 
  Thermometer,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import SpecTable from '@/components/products/SpecTable';
import { motion } from 'framer-motion';

const ProductDetailPage = ({ params }: { params: { category: string, slug: string } }) => {
  const product = PRODUCTS.find(p => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#F8FAFC] pb-24">
      {/* Breadcrumb & Back */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link href={`/products/${params.category}`} className="flex items-center gap-2 text-sm font-bold text-accent hover:text-[#0A2E5C] transition-colors mb-6 group w-fit">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to {product.category}
        </Link>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-12 sticky top-24 aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <Wind size={600} className="text-[#0A2E5C] absolute -top-1/4 -right-1/4" />
               </div>
               
               <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-[#0A2E5C]/10 mb-8"
               >
                  <Wind size={200} strokeWidth={1} />
               </motion.div>
               
               {product.badge && (
                 <Badge className="absolute top-8 left-8 bg-accent text-white px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                    {product.badge}
                 </Badge>
               )}
               
               <div className="text-center relative z-10">
                 <h2 className="text-4xl font-heading font-black text-[#0A2E5C]/10 select-none uppercase tracking-tighter">SUV FANS</h2>
                 <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-2">Precision Air Movement</p>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="border-accent text-accent font-bold px-3 py-1">
                {product.category}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-[#0A2E5C] mb-6 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              {product.description}
            </p>

            {/* Quick Specs Pills */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Capacity</div>
                  <div className="text-sm font-bold text-[#0A2E5C]">{product.specs.capacityRange}</div>
                </div>
              </div>
              
              {product.specs.staticPressure && (
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Static Pressure</div>
                    <div className="text-sm font-bold text-[#0A2E5C]">{product.specs.staticPressure}</div>
                  </div>
                </div>
              )}
              
              {product.specs.voltage && (
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Wind size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Voltage</div>
                    <div className="text-sm font-bold text-[#0A2E5C]">{product.specs.voltage}</div>
                  </div>
                </div>
              )}
              
              {product.specs.temperatureRating && (
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Thermometer size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Temp Rating</div>
                    <div className="text-sm font-bold text-[#0A2E5C]">{product.specs.temperatureRating}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Features List */}
            <div className="mb-12">
              <h3 className="text-xl font-heading font-bold text-[#0A2E5C] mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 group">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                    <span className="text-gray-600 font-medium group-hover:text-[#0A2E5C] transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="mb-12">
              <h3 className="text-xl font-heading font-bold text-[#0A2E5C] mb-6">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <Badge key={app} variant="secondary" className="bg-[#0A2E5C]/5 text-[#0A2E5C] px-4 py-1.5 font-bold uppercase tracking-tighter hover:bg-[#0A2E5C] hover:text-white transition-all cursor-default">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button asChild size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white h-14 px-8 text-lg font-bold min-w-[200px]">
                <Link href="/get-quote">Request a Quote</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-[#0A2E5C] text-[#0A2E5C] hover:bg-[#0A2E5C] hover:text-white h-14 px-8 text-lg font-bold group">
                <Download className="mr-2 group-hover:-translate-y-1 transition-transform" size={20} />
                Download Specs
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Specification Table Section */}
        {product.specTable && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <div className="mb-8">
               <h2 className="text-3xl font-heading font-bold text-[#0A2E5C] mb-2">Technical Specifications</h2>
               <div className="w-20 h-1 bg-accent"></div>
            </div>
            <SpecTable data={product.specTable} />
          </motion.div>
        )}

        {/* General Spec Sheet Section */}
        {!product.specTable && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 p-8 md:p-12 bg-white rounded-3xl border border-gray-100 shadow-xl"
          >
             <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-heading font-bold text-[#0A2E5C] mb-4">Engineering Precision</h3>
                  <p className="text-gray-500">
                    All our fans are statically and dynamically balanced to ensure vibration-free performance and longevity. Contact our engineering team for detailed CAD drawings and custom configurations.
                  </p>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {Object.entries(product.specs).map(([key, value]) => {
                    if (!value || key === 'capacityRange') return null;
                    return (
                      <div key={key} className="border-l-4 border-accent pl-6">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{key.replace(/([A-Z])/g, ' $1')}</div>
                        <div className="text-lg font-bold text-[#0A2E5C]">{value}</div>
                      </div>
                    );
                  })}
                </div>
             </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
