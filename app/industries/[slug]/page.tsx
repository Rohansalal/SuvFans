'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { INDUSTRIES } from '@/lib/industries';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

const IndustryDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);
  const industry = INDUSTRIES.find(i => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="bg-[#F8FAFC] pb-24">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image 
          src={industry.image} 
          alt={industry.name} 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E5C]/80 via-[#0A2E5C]/60 to-[#0A2E5C]/90" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/industries" 
              className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-8 font-black uppercase tracking-widest text-xs"
            >
              <ArrowLeft size={16} /> Back to Industries
            </Link>
            <h1 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 uppercase italic">
              {industry.name}
            </h1>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              {industry.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Detailed Info */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-2xl"
            >
              <h2 className="text-3xl font-heading font-bold text-[#0A2E5C] mb-8 uppercase italic border-l-8 border-primary pl-6">
                Sector Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12 font-medium">
                {industry.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0A2E5C] mb-6 flex items-center gap-3">
                    <Zap className="text-primary" size={24} /> 
                    Key Applications
                  </h3>
                  <ul className="space-y-4">
                    {industry.applications.map((app) => (
                      <li key={app} className="flex items-start gap-3 group">
                        <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-bold group-hover:text-[#0A2E5C] transition-colors">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2E5C] mb-6 flex items-center gap-3">
                    <Zap className="text-primary" size={24} /> 
                    Key Products
                  </h3>
                  <ul className="space-y-4">
                    {industry.keyProducts.map((prod) => (
                      <li key={prod} className="flex items-start gap-3 group">
                        <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-bold group-hover:text-[#0A2E5C] transition-colors">{prod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* CTA Box */}
            <div className="bg-[#0A2E5C] p-12 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-700" />
               <h3 className="text-3xl font-black mb-6 uppercase italic">Need a custom solution?</h3>
               <p className="text-gray-300 text-lg mb-10 max-w-xl font-medium">
                 Our engineering team can design a ventilation system tailored specifically to your facility's requirements.
               </p>
               <Button asChild size="lg" className="bg-primary hover:bg-white hover:text-[#0A2E5C] text-white h-16 px-10 text-lg font-black uppercase rounded-2xl transition-all shadow-xl shadow-primary/20">
                  <Link href="/get-quote">Get Technical Proposal <ArrowRight className="ml-2" /></Link>
               </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl">
              <h3 className="text-xl font-bold text-[#0A2E5C] mb-8 border-b border-gray-100 pb-4">Other Industries</h3>
              <div className="space-y-4">
                {INDUSTRIES.filter(i => i.slug !== industry.slug).map((i) => (
                  <Link 
                    key={i.id} 
                    href={`/industries/${i.slug}`}
                    className="flex flex-col gap-1 p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group"
                  >
                    <span className="font-bold text-[#0A2E5C] group-hover:text-primary transition-colors">{i.name}</span>
                    <span className="text-xs text-gray-400 line-clamp-1">{i.description}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl text-center">
               <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  <Zap size={32} />
               </div>
               <h4 className="text-lg font-bold text-[#0A2E5C] mb-2">Technical Support</h4>
               <p className="text-gray-500 text-sm mb-6">Available 24/7 for critical ventilation systems.</p>
               <a href="tel:+919876543210" className="text-xl font-black text-[#0A2E5C] hover:text-primary transition-colors italic">
                  +91 98765 43210
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetailPage;
