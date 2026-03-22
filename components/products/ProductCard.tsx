'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Wind } from 'lucide-react';
import { Product } from '@/lib/products';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="aspect-[4/3] bg-[#F8FAFC] relative overflow-hidden">
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#0A2E5C]/10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <Wind size={120} />
                </motion.div>
              </div>
            )}
            
            {product.badge && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-accent text-white border-none shadow-lg px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                  {product.badge}
                </Badge>
              </div>
            )}
            
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-[#0A2E5C] border-none text-[10px] font-bold">
                {product.category}
              </Badge>
            </div>
          </div>
          
          <div className="p-8 flex flex-col grow">
            <h3 className="text-xl font-heading font-bold text-[#0A2E5C] mb-3 group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            
            <p className="text-gray-500 text-sm line-clamp-2 mb-6 leading-relaxed">
              {product.description}
            </p>
            
            <div className="mt-auto flex flex-col gap-4">
               <div className="flex items-center gap-2">
                 <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Capacity Range</div>
                 <div className="h-[1px] grow bg-gray-100"></div>
                 <div className="text-xs font-bold text-[#0A2E5C]">{product.specs.capacityRange}</div>
               </div>
               
               <div className="flex gap-2">
                 <Button asChild className="grow bg-[#0A2E5C] hover:bg-[#0A2E5C]/90 text-white font-bold h-11">
                    <Link href={`/products/${product.categorySlug}/${product.slug}`}>
                      View Details
                    </Link>
                 </Button>
                 <Button asChild variant="outline" size="icon" className="h-11 w-11 border-gray-200 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Link href="/get-quote">
                      <ArrowRight size={18} />
                    </Link>
                 </Button>
               </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
