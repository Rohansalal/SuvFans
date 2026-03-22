import React from 'react';
import Link from 'next/link';
import { Wind, Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/config';
import { PRODUCT_CATEGORIES } from '@/lib/products';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A2E] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <Wind size={24} />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight block leading-none text-white">
                  SUV FANS
                </span>
                <span className="text-[10px] text-primary uppercase tracking-widest font-semibold block leading-none">
                  LLP
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              At SUV Fans, we are committed to providing innovative, efficient, and high-quality air ventilation solutions for all your needs.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-white/5 hover:bg-primary p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-primary p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-primary p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/get-quote" className="hover:text-primary transition-colors">Get a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {PRODUCT_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products/${cat.slug}`} className="hover:text-primary transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-primary font-medium hover:underline">View All Products</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Head Office</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>{COMPANY_CONFIG.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={20} className="text-primary shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="hover:text-primary transition-colors">
                  {COMPANY_CONFIG.phone}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={20} className="text-primary shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-primary transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} {COMPANY_CONFIG.name}. All rights reserved. | {COMPANY_CONFIG.iso}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
