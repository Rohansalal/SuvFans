'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { COMPANY_CONFIG } from '@/lib/config';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const ContactCTAStrip = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0B2A3C] to-[#2E86B8]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            {/* H2: Montserrat */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Ready to transform your space with superior air ventilation?
            </h2>
            {/* Body: Inter */}
            <p className="font-body text-[#D1D5DB] font-medium leading-relaxed">
              Contact us today for expert consultation and quality ventilation solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href={`tel:${COMPANY_CONFIG.phone}`} className="font-heading text-xl font-bold text-white hover:text-[#F5A02E] transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#F5A02E]/20 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[#F5A02E]" />
                </div>
                {COMPANY_CONFIG.phone}
              </a>
              <a href={`mailto:${COMPANY_CONFIG.email}`} className="font-body text-sm text-[#D1D5DB] hover:text-[#F5A02E] transition-colors flex items-center gap-2">
                <Mail size={16} className="text-[#F5A02E]" />
                {COMPANY_CONFIG.email}
              </a>
            </div>
            {/* CTA Button */}
            <Button asChild className="font-heading bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] h-12 px-8 font-bold uppercase tracking-wide min-w-[180px]">
              <Link href="/get-quote">
                Get Quote <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTAStrip;
