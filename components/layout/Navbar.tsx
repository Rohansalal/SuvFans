'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PRODUCT_CATEGORIES } from '@/lib/products';
import { INDUSTRIES } from '@/lib/industries';
import { COMPANY_CONFIG } from '@/lib/config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      "bg-white shadow-lg py-2"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Shifted slightly to the right */}
          <Link href="/" className="flex items-center gap-2 group ml-4 md:ml-8 lg:ml-12">
            <Image 
              src="/logo.png" 
              alt="SUV FANS" 
              width={320} 
              height={112} 
              className="h-20 md:h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Moved to the right */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold uppercase tracking-wide transition-colors hover:text-[#F5A02E]",
                    "text-[#0B2A3C]",
                    pathname === link.href && "text-[#F5A02E]"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors outline-none hover:text-[#F5A02E]">
                  <span className="text-[#0B2A3C]">Products</span> <ChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-72 p-0 bg-white shadow-2xl border-2 border-[#D1D5DB] z-[60]">
                  <DropdownMenuItem asChild>
                    <Link href="/products" className="font-bold cursor-pointer hover:bg-[#F4F6F8] py-3 px-4 text-[#0B2A3C] border-b border-[#D1D5DB]">All Products</Link>
                  </DropdownMenuItem>
                  {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
                    <DropdownMenuItem key={cat.slug} asChild>
                      <Link
                        href={`/products/${cat.slug}`}
                        className="cursor-pointer hover:bg-[#F4F6F8] py-2 px-4 text-[#0B2A3E]"
                      >
                        {cat.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Industries Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors outline-none hover:text-[#F5A02E]">
                  <span className="text-[#0B2A3C]">Industries</span> <ChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-80 p-0 bg-white shadow-2xl border-2 border-[#D1D5DB] z-[60]">
                  <DropdownMenuItem asChild>
                    <Link href="/industries" className="font-bold cursor-pointer hover:bg-[#F4F6F8] py-3 px-4 text-[#0B2A3C] border-b border-[#D1D5DB]">All Industries</Link>
                  </DropdownMenuItem>
                  {INDUSTRIES.map((ind) => (
                    <DropdownMenuItem key={ind.slug} asChild>
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="cursor-pointer flex flex-col items-start gap-0.5 hover:bg-[#F4F6F8] py-2 px-4"
                      >
                        <span className="font-semibold text-[#0B2A3C]">{ind.name}</span>
                        <span className="text-[11px] text-[#6B7280] line-clamp-1">{ind.description}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold uppercase tracking-wide transition-colors hover:text-[#F5A02E]",
                    "text-[#0B2A3C]",
                    pathname === link.href && "text-[#F5A02E]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l pl-6 border-[#6B7280]/30 mr-4 md:mr-8 lg:mr-12">
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className={cn(
                  "hidden xl:flex items-center gap-2 text-sm font-bold transition-colors hover:text-[#F5A02E]",
                  "text-[#0B2A3C]"
                )}
              >
                <Phone size={16} className="text-[#2E86B8]" />
                {COMPANY_CONFIG.phone}
              </a>
              <Button asChild className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-bold uppercase tracking-wide text-sm px-5 py-2">
                <Link href="/get-quote">Get Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[#0B2A3C]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold uppercase tracking-wide py-3 border-b border-gray-200 text-[#0B2A3C] hover:text-[#F5A02E] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="flex items-center gap-3 text-lg font-semibold text-[#0B2A3C]"
                >
                  <Phone size={20} className="text-[#2E86B8]" />
                  {COMPANY_CONFIG.phone}
                </a>
                <Button asChild className="w-full bg-[#F5A02E] hover:bg-[#E08F1F] h-12 text-lg font-bold">
                  <Link href="/get-quote" onClick={() => setIsOpen(false)}>Get Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
