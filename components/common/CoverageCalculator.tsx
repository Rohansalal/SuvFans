'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Timer, Wind, Info } from 'lucide-react';

const CoverageCalculator = () => {
  const [sqft, setSqft] = useState<number>(1000);

  // Formula: time = (roomSize / 1000) * 4 minutes
  const time = (sqft / 1000) * 4;

  return (
    <Card className="border-none shadow-2xl bg-[#0A2E5C] text-white overflow-hidden">
      <CardContent className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white">
            <Timer size={24} />
          </div>
          <h3 className="text-2xl font-heading font-bold">Coverage Calculator</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="sqft" className="text-gray-300 font-bold uppercase tracking-widest text-xs">Enter Room Area (Sq. Ft.)</Label>
              <Input 
                id="sqft"
                type="number" 
                value={sqft} 
                onChange={(e) => setSqft(Number(e.target.value))}
                className="bg-white/10 border-white/20 text-white h-14 text-xl font-bold focus:ring-accent focus:border-accent"
              />
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Info className="text-accent shrink-0 mt-1" size={16} />
              <p className="text-xs text-gray-400 leading-relaxed">
                Estimated time for complete air recirculation based on PURE AIR's 2,000 m³/h capacity and standard ceiling heights.
              </p>
            </div>
          </div>

          <div className="text-center md:text-left p-8 bg-accent rounded-3xl relative overflow-hidden group">
            <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Wind size={150} />
            </div>
            <div className="relative z-10">
              <div className="text-sm font-bold uppercase tracking-widest text-white/80 mb-2">Recirculation Time</div>
              <div className="text-5xl md:text-7xl font-heading font-black mb-2">
                {time.toFixed(1)}
              </div>
              <div className="text-xl font-bold">Minutes</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoverageCalculator;
