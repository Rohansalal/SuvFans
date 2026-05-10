'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { getAllProducts } from '@/lib/productdetail';
import { APPLICATIONS } from '@/lib/applications';
import { COMPANY_CONFIG } from '@/lib/config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const FEATURED_NAV_PRODUCT_SLUGS = [
  'direct-drive-duct-cabinet-inline-fan',
  'kitchen-laundry-fan',
  'direct-drive-wall-mount-fan',
  'direct-drive-tube-axial-fan',
  'insulated-housing-cabinet-fan',
  'high-volume-low-speed-fan',
  'industrial-cooler',
  'commercial-kitchen-hood',
  'pure-air-commercial-purifier',
];

const ALL_NAV_PRODUCTS = getAllProducts();
const NAV_FEATURED_PRODUCTS = FEATURED_NAV_PRODUCT_SLUGS
  .map((slug) => ALL_NAV_PRODUCTS.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))
  .slice(0, 9);

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
  const phoneIsPlaceholder = COMPANY_CONFIG.phone.includes('XXX');

  const linkClass = (active: boolean) =>
    cn(
      'text-[15px] font-extrabold uppercase tracking-wider transition-colors duration-200 whitespace-nowrap',
      active ? 'text-[#F5A02E]' : 'text-[#0B2A3C] hover:text-[#F5A02E]'
    );

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[88px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="SUV FANS"
              width={200}
              height={64}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9 ml-4 xl:ml-6">

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
                  'flex items-center gap-1 text-[15px] font-extrabold uppercase tracking-wider transition-colors duration-200 outline-none whitespace-nowrap',
                  isProductsActive ? 'text-[#F5A02E]' : 'text-[#0B2A3C] hover:text-[#F5A02E]'
                )}
              >
                Products <ChevronDown size={13} className="mt-px" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[420px] p-0 bg-white shadow-2xl border border-[#E5E7EB] rounded-xl z-[60] overflow-hidden"
              >
                <div className="px-5 pt-4 pb-2 border-b border-[#E5E7EB] bg-gradient-to-r from-[#F4F6F8] to-white">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2E86B8]">
                    Featured Products
                  </span>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">
                    Industrial fans &amp; ventilation systems
                  </p>
                </div>
                <div className="py-2 max-h-[70vh] overflow-y-auto">
                  {NAV_FEATURED_PRODUCTS.map((product) => (
                    <DropdownMenuItem key={product.slug} asChild>
                      <Link
                        href={`/products/${product.slug}`}
                        className="group cursor-pointer flex items-center gap-3 px-4 py-2.5 hover:bg-[#F4F6F8] focus:bg-[#F4F6F8] transition-colors"
                      >
                        <div className="relative w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-[#F4F6F8] border border-[#E5E7EB] flex items-center justify-center">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="48px"
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[13px] font-bold text-[#0B2A3C] group-hover:text-[#F5A02E] transition-colors line-clamp-1 leading-tight">
                            {product.name}
                          </div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#2E86B8] mt-0.5 line-clamp-1">
                            {product.categoryName}
                          </div>
                        </div>
                        <ChevronRight
                          size={14}
                          className="shrink-0 text-[#D1D5DB] group-hover:text-[#F5A02E] group-hover:translate-x-0.5 transition-all"
                        />
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
                <DropdownMenuItem asChild>
                  <Link
                    href="/products"
                    className="font-black cursor-pointer bg-[#0B2A3C] hover:bg-[#2E86B8] focus:bg-[#2E86B8] py-3.5 px-5 text-white text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors rounded-none"
                  >
                    View More Products
                    <ChevronRight size={14} />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Applications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  'flex items-center gap-1 text-[15px] font-extrabold uppercase tracking-wider transition-colors duration-200 outline-none whitespace-nowrap',
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
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 ml-6 xl:ml-10 pl-6 xl:pl-8 border-l border-gray-200">
            {!phoneIsPlaceholder && (
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="hidden xl:flex items-center gap-2 text-[15px] font-extrabold text-[#0B2A3C] hover:text-[#F5A02E] transition-colors whitespace-nowrap"
              >
                <Phone size={16} className="text-[#2E86B8]" />
                {COMPANY_CONFIG.phone}
              </a>
            )}
            <Button
              asChild
              className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-black uppercase tracking-wide text-sm px-7 h-11 rounded-md shadow-sm hover:shadow-md transition-shadow"
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
                  <div className="pb-3 flex flex-col gap-1">
                    {NAV_FEATURED_PRODUCTS.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="group flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-[#F4F6F8] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="relative w-11 h-11 shrink-0 rounded-lg overflow-hidden bg-[#F4F6F8] border border-[#E5E7EB] flex items-center justify-center">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="44px"
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[13px] font-bold text-[#0B2A3C] group-hover:text-[#F5A02E] transition-colors line-clamp-1 leading-tight">
                            {product.name}
                          </div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#2E86B8] mt-0.5 line-clamp-1">
                            {product.categoryName}
                          </div>
                        </div>
                        <ChevronRight size={12} className="shrink-0 text-[#D1D5DB]" />
                      </Link>
                    ))}
                    <Link
                      href="/products"
                      className="mt-2 py-3 px-4 text-xs font-black uppercase tracking-widest text-white bg-[#0B2A3C] hover:bg-[#2E86B8] flex items-center justify-center gap-2 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      View More Products
                      <ChevronRight size={12} />
                    </Link>
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
