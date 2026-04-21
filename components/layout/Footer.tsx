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
    <footer className="relative bg-[#0B2A3C] text-white pt-16 pb-8 overflow-hidden border-t-2 border-[#F5A02E] px-4 md:px-8 lg:px-16">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#2E86B8]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F5A02E]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      {/* Fan Manufacturing Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2A3C] via-transparent to-[#0B2A3C]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-12">
          {/* Company Info - Span 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Image 
                src="/logo.png" 
                alt="SUV FANS - Industrial Fans Manufacturer" 
                width={360} 
                height={126} 
                className="h-20 md:h-24 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            
            <p className="font-body text-[#D1D5DB] text-sm leading-relaxed max-w-sm">
              <span className="text-[#F5A02E] font-bold">SUV FANS</span> is India's leading manufacturer of high-performance <strong>industrial fans</strong>. Engineering excellence for global industries.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 rounded-md hover:bg-[#F5A02E] group transition-all duration-300" 
                  aria-label={social.label}
                >
                  <social.icon size={16} className="text-[#D1D5DB] group-hover:text-[#0B2A3C] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-base font-bold mb-4 text-white relative inline-block uppercase tracking-wider">
              Explore
              <span className="absolute -bottom-1 left-0 w-6 h-0.5 bg-[#F5A02E]" />
            </h4>
            <ul className="font-body space-y-2 text-sm">
              {['Home', 'About Us', 'Products', 'Applications', 'Careers', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : item === 'Applications' ? '/application' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-[#D1D5DB] hover:text-[#F5A02E] transition-all flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#2E86B8] group-hover:bg-[#F5A02E] transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Products */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-base font-bold mb-4 text-white relative inline-block uppercase tracking-wider">
              Products
              <span className="absolute -bottom-1 left-0 w-6 h-0.5 bg-[#F5A02E]" />
            </h4>
            <ul className="font-body space-y-2 text-sm">
              {PRODUCT_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products/${cat.slug}`} className="text-[#D1D5DB] hover:text-[#F5A02E] transition-all flex items-start gap-2 group">
                    <ArrowRight size={12} className="text-[#2E86B8] mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="line-clamp-1">{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-heading text-base font-bold mb-4 text-white relative inline-block uppercase tracking-wider">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-6 h-0.5 bg-[#F5A02E]" />
            </h4>
            <ul className="font-body space-y-3 text-sm">
              <li className="flex gap-3 group">
                <MapPin size={16} className="text-[#F5A02E] shrink-0 mt-1" />
                <span className="text-[#D1D5DB] leading-snug">{COMPANY_CONFIG.address}</span>
              </li>
              <li className="flex gap-3 items-center group">
                <Phone size={16} className="text-[#F5A02E] shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="text-[#D1D5DB] font-semibold hover:text-[#F5A02E] transition-colors">
                  {COMPANY_CONFIG.phone}
                </a>
              </li>
              <li className="flex gap-3 items-center group">
                <Mail size={16} className="text-[#F5A02E] shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-[#D1D5DB] font-semibold hover:text-[#F5A02E] transition-colors break-all">
                  {COMPANY_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certification Strip - More Compact */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-center">
            <div className="space-y-0.5">
              <div className="font-heading text-lg font-black text-[#F5A02E] uppercase tracking-tighter italic">ISO Certified</div>
              <div className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">{COMPANY_CONFIG.iso}</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="space-y-0.5">
              <div className="font-heading text-2xl font-black text-white">{COMPANY_CONFIG.yearsOfExperience}+</div>
              <div className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">Years of Excellence</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="space-y-0.5">
              <div className="font-heading text-lg font-black text-[#2E86B8] uppercase tracking-widest">Pan India</div>
              <div className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">Service & Support</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-body">
          <div className="text-[#6B7280] text-xs">
            © {currentYear} <span className="text-white font-bold tracking-tight">{COMPANY_CONFIG.name}</span>. Built for Industrial Excellence.
          </div>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
            <Link href="/privacy" className="text-[#6B7280] hover:text-[#F5A02E] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[#6B7280] hover:text-[#F5A02E] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
