'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_CONFIG } from '@/lib/config';

const WhatsAppButton = () => {
  // Use a fallback number if the config is not set
  const whatsappNumber = COMPANY_CONFIG.whatsapp || '+919772614848';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <div className="fixed bottom-8 left-8 z-[100] group">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          {/* Tooltip */}
          <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-[#0B2A3C] text-white text-[10px] font-heading font-black uppercase tracking-[0.2em] px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
            Chat with Engineer
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-[#0B2A3C]"></div>
          </div>

          {/* Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          {/* Main Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.6)] transition-all border-4 border-white"
          >
            <Image
              src="/whatsapp.1897bfc4.svg"
              alt="WhatsApp"
              width={28}
              height={28}
              className="brightness-0 invert group-hover:rotate-[15deg] transition-transform duration-300"
            />
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton;
