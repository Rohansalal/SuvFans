'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PRODUCT_CATEGORIES } from '@/lib/products';
import { APPLICATIONS } from '@/lib/applications';
import { COMPANY_CONFIG } from '@/lib/config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [applicationsOpen, setApplicationsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
    setApplicationsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isProductsActive = pathname.startsWith('/products');
  const isApplicationsActive = pathname.startsWith('/application');

  const linkClass = (active: boolean) =>
    cn(
      'text-sm font-bold uppercase tracking-wider transition-colors duration-200',
      active ? 'text-[#F5A02E]' : 'text-[#0B2A3C] hover:text-[#F5A02E]'
    );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="SUV FANS"
              width={160}
              height={56}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">

            <Link href="/" className={linkClass(isActive('/'))}>
              Home
            </Link>

            <Link href="/about" className={linkClass(isActive('/about'))}>
              About Us
            </Link>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  'flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors duration-200 outline-none',
                  isProductsActive ? 'text-[#F5A02E]' : 'text-[#0B2A3C] hover:text-[#F5A02E]'
                )}
              >
                Products <ChevronDown size={13} className="mt-px" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-64 p-0 bg-white shadow-xl border border-[#E5E7EB] rounded-sm z-[60]"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/products"
                    className="font-bold cursor-pointer hover:bg-[#F4F6F8] py-3 px-4 text-[#0B2A3C] border-b border-[#E5E7EB] text-xs uppercase tracking-widest"
                  >
                    All Products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/catalog"
                    className="font-bold cursor-pointer hover:bg-[#F4F6F8] py-3 px-4 text-[#2E86B8] border-b border-[#E5E7EB] text-xs uppercase tracking-widest"
                  >
                    📄 Full Catalogue
                  </Link>
                </DropdownMenuItem>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <DropdownMenuItem key={cat.slug} asChild>
                    <Link
                      href={`/products/${cat.slug}`}
                      className="cursor-pointer hover:bg-[#F4F6F8] py-2.5 px-4 text-sm text-[#0B2A3C] font-medium"
                    >
                      {cat.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Applications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  'flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors duration-200 outline-none',
                  isApplicationsActive ? 'text-[#F5A02E]' : 'text-[#0B2A3C] hover:text-[#F5A02E]'
                )}
              >
                Applications <ChevronDown size={13} className="mt-px" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-72 p-0 bg-white shadow-xl border border-[#E5E7EB] rounded-sm z-[60]"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/application"
                    className="font-bold cursor-pointer hover:bg-[#F4F6F8] py-3 px-4 text-[#0B2A3C] border-b border-[#E5E7EB] text-xs uppercase tracking-widest"
                  >
                    All Applications
                  </Link>
                </DropdownMenuItem>
                {APPLICATIONS.map((app) => (
                  <DropdownMenuItem key={app.slug} asChild>
                    <Link
                      href={`/application/${app.slug}`}
                      className="cursor-pointer flex flex-col items-start gap-0.5 hover:bg-[#F4F6F8] py-2.5 px-4"
                    >
                      <span className="font-semibold text-sm text-[#0B2A3C]">{app.name}</span>
                      <span className="text-[11px] text-[#6B7280] line-clamp-1">{app.description}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/careers" className={linkClass(isActive('/careers'))}>
              Careers
            </Link>

            <Link href="/contact" className={linkClass(isActive('/contact'))}>
              Contact Us
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4 pl-6 border-l border-gray-200">
            <a
              href={`tel:${COMPANY_CONFIG.phone}`}
              className="hidden xl:flex items-center gap-2 text-sm font-bold text-[#0B2A3C] hover:text-[#F5A02E] transition-colors"
            >
              <Phone size={15} className="text-[#2E86B8]" />
              {COMPANY_CONFIG.phone}
            </a>
            <Button
              asChild
              className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-bold uppercase tracking-wide text-xs px-5 h-9 rounded-sm"
            >
              <Link href="/get-quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[#0B2A3C]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col max-h-[80vh] overflow-y-auto">
              <Link
                href="/"
                className="py-3.5 border-b border-gray-100 text-sm font-bold uppercase tracking-wide text-[#0B2A3C] hover:text-[#F5A02E] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-3.5 border-b border-gray-100 text-sm font-bold uppercase tracking-wide text-[#0B2A3C] hover:text-[#F5A02E] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Products */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full flex items-center justify-between py-3.5 text-sm font-bold uppercase tracking-wide text-[#0B2A3C]"
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  Products
                  <ChevronDown size={16} className={cn('transition-transform', productsOpen && 'rotate-180')} />
                </button>
                {productsOpen && (
                  <div className="pb-2 pl-4 flex flex-col gap-1">
                    <Link href="/products" className="py-2 text-sm font-bold text-[#2E86B8]" onClick={() => setIsOpen(false)}>
                      All Products
                    </Link>
                    <Link href="/catalog" className="py-2 text-sm font-bold text-[#F5A02E]" onClick={() => setIsOpen(false)}>
                      📄 Full Catalogue
                    </Link>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products/${cat.slug}`}
                        className="py-2 text-sm text-[#0B2A3C]/80 hover:text-[#F5A02E] transition-colors flex items-center gap-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <ChevronRight size={12} className="text-[#2E86B8]" />
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Applications */}
              <div className="border-b border-gray-100">
                <button
                  className="w-full flex items-center justify-between py-3.5 text-sm font-bold uppercase tracking-wide text-[#0B2A3C]"
                  onClick={() => setApplicationsOpen(!applicationsOpen)}
                >
                  Applications
                  <ChevronDown size={16} className={cn('transition-transform', applicationsOpen && 'rotate-180')} />
                </button>
                {applicationsOpen && (
                  <div className="pb-2 pl-4 flex flex-col gap-1">
                    <Link href="/application" className="py-2 text-sm font-bold text-[#2E86B8]" onClick={() => setIsOpen(false)}>
                      All Applications
                    </Link>
                    {APPLICATIONS.map((app) => (
                      <Link
                        key={app.slug}
                        href={`/application/${app.slug}`}
                        className="py-2 text-sm text-[#0B2A3C]/80 hover:text-[#F5A02E] transition-colors flex items-center gap-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <ChevronRight size={12} className="text-[#2E86B8]" />
                        {app.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/careers"
                className="py-3.5 border-b border-gray-100 text-sm font-bold uppercase tracking-wide text-[#0B2A3C] hover:text-[#F5A02E] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="py-3.5 border-b border-gray-100 text-sm font-bold uppercase tracking-wide text-[#0B2A3C] hover:text-[#F5A02E] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="flex items-center gap-3 text-sm font-bold text-[#0B2A3C]"
                >
                  <Phone size={16} className="text-[#2E86B8]" />
                  {COMPANY_CONFIG.phone}
                </a>
                <Button asChild className="w-full bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] h-11 font-bold uppercase tracking-wide rounded-sm">
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
