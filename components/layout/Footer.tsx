import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/config';
import { PRODUCT_CATEGORIES } from '@/lib/products';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B2A3C] text-white pt-16 pb-8 overflow-hidden">
      {/* Fan Manufacturing Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3C] via-[#0B2A3C]/95 to-[#0B2A3C]" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Image 
                src="/logo.png" 
                alt="SUV FANS - Industrial Fans Manufacturer" 
                width={200} 
                height={70} 
                className="h-14 w-auto brightness-0 invert" 
              />
            </Link>
            {/* Body: Inter - Smaller font for footer */}
            <p className="font-body text-[#D1D5DB] text-sm leading-relaxed">
              Leading manufacturer of <strong>industrial fans</strong>, HVAC solutions, and ventilation systems. {COMPANY_CONFIG.yearsOfExperience}+ years of engineering excellence.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="bg-[#2E86B8]/20 hover:bg-[#F5A02E] p-2.5 rounded transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} className="text-[#2E86B8] hover:text-[#0B2A3C]" />
              </a>
              <a href="#" className="bg-[#2E86B8]/20 hover:bg-[#F5A02E] p-2.5 rounded transition-colors" aria-label="Facebook">
                <Facebook size={18} className="text-[#2E86B8] hover:text-[#0B2A3C]" />
              </a>
              <a href="#" className="bg-[#2E86B8]/20 hover:bg-[#F5A02E] p-2.5 rounded transition-colors" aria-label="Instagram">
                <Instagram size={18} className="text-[#2E86B8] hover:text-[#0B2A3C]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            {/* H4: Montserrat */}
            <h4 className="font-heading text-lg font-bold mb-6 border-l-4 border-[#F5A02E] pl-3">Quick Links</h4>
            <ul className="font-body space-y-3 text-sm">
              <li>
                <Link href="/" className="text-[#D1D5DB] hover:text-[#F5A02E] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-[#D1D5DB] hover:text-[#F5A02E] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="text-[#D1D5DB] hover:text-[#F5A02E] transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/industries" className="text-[#D1D5DB] hover:text-[#F5A02E] transition-colors">Industries</Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#D1D5DB] hover:text-[#F5A02E] transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#D1D5DB] hover:text-[#F5A02E] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            {/* H4: Montserrat */}
            <h4 className="font-heading text-lg font-bold mb-6 border-l-4 border-[#F5A02E] pl-3">Products</h4>
            <ul className="font-body space-y-3 text-sm">
              {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products/${cat.slug}`} className="text-[#D1D5DB] hover:text-[#F5A02E] transition-colors flex items-center gap-2">
                    <ArrowRight size={12} className="text-[#2E86B8]" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            {/* H4: Montserrat */}
            <h4 className="font-heading text-lg font-bold mb-6 border-l-4 border-[#F5A02E] pl-3">Head Office</h4>
            <ul className="font-body space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={20} className="text-[#F5A02E] shrink-0 mt-0.5" />
                <span className="text-[#D1D5DB]">{COMPANY_CONFIG.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={20} className="text-[#F5A02E] shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="text-[#D1D5DB] hover:text-[#F5A02E] transition-colors">
                  {COMPANY_CONFIG.phone}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={20} className="text-[#F5A02E] shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-[#D1D5DB] hover:text-[#F5A02E] transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </li>
            </ul>
            
            <Button asChild className="w-full mt-6 font-heading bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-bold uppercase tracking-wide">
              <Link href="/get-quote">Request Quote</Link>
            </Button>
          </div>
        </div>

        {/* Certification Badge */}
        <div className="flex justify-center mb-8 py-6 border-y border-[#2E86B8]/30">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <span className="font-heading text-[#2E86B8] font-bold uppercase tracking-widest text-sm">{COMPANY_CONFIG.iso}</span>
            <span className="text-[#6B7280]">|</span>
            <span className="font-body text-[#D1D5DB] font-semibold">{COMPANY_CONFIG.yearsOfExperience}+ Years Experience</span>
            <span className="text-[#6B7280]">|</span>
            <span className="font-body text-[#D1D5DB] font-semibold">Pan India Service</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-xs text-[#6B7280]">
          <p>© {currentYear} {COMPANY_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#D1D5DB] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#D1D5DB] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
