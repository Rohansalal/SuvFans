'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PRODUCT_CATEGORIES } from '@/lib/products';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg text-white group-hover:rotate-90 transition-transform duration-500">
              <Wind size={24} />
            </div>
            <div>
              <span className={cn("text-xl font-bold tracking-tight block leading-none", scrolled ? "text-[#1A1A2E]" : "text-white")}>
                SUV FANS
              </span>
              <span className="text-[10px] text-primary uppercase tracking-widest font-semibold block leading-none">
                LLP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === '/' ? 'text-primary' : scrolled ? 'text-[#1A1A2E]' : 'text-white'
                )}
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={cn("flex items-center gap-1 text-sm font-medium transition-colors outline-none hover:text-primary", scrolled ? 'text-[#1A1A2E]' : 'text-white')}>
                  Products <ChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 p-2">
                  <DropdownMenuItem asChild>
                    <Link href="/products" className="font-bold cursor-pointer">All Products</Link>
                  </DropdownMenuItem>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <DropdownMenuItem key={cat.slug} asChild>
                      <Link
                        href={`/products/${cat.slug}`}
                        className="cursor-pointer"
                      >
                        {cat.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : scrolled ? 'text-[#1A1A2E]' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l pl-8 border-gray-200">
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className={cn("hidden xl:flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary", scrolled ? 'text-[#1A1A2E]' : 'text-white')}
              >
                <Phone size={16} className="text-primary" />
                {COMPANY_CONFIG.phone}
              </a>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
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
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium py-2 border-b border-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Products
                </span>
                <Link
                  href="/products"
                  className="text-lg font-medium pl-4 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  All Products
                </Link>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    className="text-base font-medium pl-4 py-1 text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-4">
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="flex items-center gap-3 text-lg font-semibold text-[#1A1A2E]"
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
