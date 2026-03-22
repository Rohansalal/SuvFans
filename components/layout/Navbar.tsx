'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Briefcase, Factory } from 'lucide-react';
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
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-3 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group ml-2 md:ml-6">
            <Image 
              src="/logo.png" 
              alt="SUV FANS" 
              width={220} 
              height={80} 
              className="h-16 w-auto" 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-5">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-semibold transition-colors hover:text-primary text-[#1A1A2E]',
                    pathname === link.href && 'text-primary'
                  )}
                >
                  {link.name}
                </Link>
              ))}

              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold transition-colors outline-none hover:text-primary text-[#1A1A2E]">
                  Products <ChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 p-2 bg-white shadow-xl border-gray-100 z-[60]">
                  <DropdownMenuItem asChild>
                    <Link href="/products" className="font-bold cursor-pointer hover:bg-gray-50 text-[#1A1A2E]">All Products</Link>
                  </DropdownMenuItem>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <DropdownMenuItem key={cat.slug} asChild>
                      <Link
                        href={`/products/${cat.slug}`}
                        className="cursor-pointer hover:bg-gray-50 text-[#1A1A2E]"
                      >
                        {cat.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Industries Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold transition-colors outline-none hover:text-primary text-[#1A1A2E]">
                  Industries <ChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-72 p-2 bg-white shadow-xl border-gray-100 z-[60]">
                  <DropdownMenuItem asChild>
                    <Link href="/industries" className="font-bold cursor-pointer hover:bg-gray-50 text-[#1A1A2E]">All Industries</Link>
                  </DropdownMenuItem>
                  {INDUSTRIES.map((ind) => (
                    <DropdownMenuItem key={ind.slug} asChild>
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="cursor-pointer flex flex-col items-start gap-0.5 hover:bg-gray-50 text-[#1A1A2E]"
                      >
                        <span className="font-semibold">{ind.name}</span>
                        <span className="text-[10px] text-gray-400 line-clamp-1">{ind.description}</span>
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
                    'text-sm font-semibold transition-colors hover:text-primary text-[#1A1A2E]',
                    pathname === link.href && 'text-primary'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="hidden xl:flex items-center gap-2 text-sm font-bold transition-colors hover:text-primary text-[#1A1A2E]"
              >
                <Phone size={16} className="text-primary" />
                {COMPANY_CONFIG.phone}
              </a>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <Link href="/get-quote">Get Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[#1A1A2E]"
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
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-bold py-2 border-b border-gray-50 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="flex items-center gap-3 text-lg font-bold text-[#1A1A2E]"
                >
                  <Phone size={20} className="text-primary" />
                  {COMPANY_CONFIG.phone}
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
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
