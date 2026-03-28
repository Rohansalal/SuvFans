'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { COMPANY_CONFIG } from '@/lib/config';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const ContactCTAStrip = () => {
  return (
    <section className="py-20 bg-[#0B2A3C] border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#2E86B8]/10 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            {/* H2: Montserrat */}
            <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-4 leading-tight uppercase tracking-tight">
              Ready to <span className="text-[#F5A02E]">Transform Your Space</span> with Superior Ventilation?
            </h2>
            {/* Body: Inter */}
            <p className="font-body text-gray-400 text-sm font-bold uppercase tracking-[0.15em] leading-relaxed">
              Contact our engineering team today for expert consultation and industrial-grade solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-12">
            {/* Contact Info - Larger */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              <a href={`tel:${COMPANY_CONFIG.phone}`} className="font-heading text-2xl font-black text-white hover:text-[#F5A02E] transition-all flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#F5A02E]/10 flex items-center justify-center shrink-0 border border-[#F5A02E]/20 group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-[#F5A02E]" />
                </div>
                {COMPANY_CONFIG.phone}
              </a>
              <a href={`mailto:${COMPANY_CONFIG.email}`} className="font-body text-xs font-black text-gray-400 hover:text-[#F5A02E] transition-all flex items-center gap-3 uppercase tracking-widest">
                <Mail size={14} className="text-[#F5A02E]" />
                {COMPANY_CONFIG.email}
              </a>
            </div>
            {/* CTA Button - Slightly smaller */}
            <Button asChild className="font-heading bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] h-12 px-8 text-[10px] font-black uppercase tracking-[0.2em] min-w-[180px] rounded-xl shadow-lg hover:shadow-[#F5A02E]/20 transition-all">
              <Link href="/get-quote" className="flex items-center gap-2">
                Request Quote <ArrowRight className="ml-1" size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTAStrip;
