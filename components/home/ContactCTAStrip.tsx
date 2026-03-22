'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { COMPANY_CONFIG } from '@/lib/config';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactCTAStrip = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Ready to transform your space with superior air ventilation?
            </h2>
            <p className="text-white/80 font-medium">
              Contact us today for expert consultation and quality ventilation solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href={`tel:${COMPANY_CONFIG.phone}`} className="text-xl font-bold text-white hover:text-[#1A1A2E] transition-colors flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                {COMPANY_CONFIG.phone}
              </a>
              <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-sm text-white/80 hover:text-[#1A1A2E] transition-colors flex items-center gap-2">
                <Mail size={16} className="text-white/80" />
                {COMPANY_CONFIG.email}
              </a>
            </div>
            <Button asChild className="bg-white hover:bg-white/90 text-primary h-12 px-8 font-bold min-w-[180px]">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTAStrip;
