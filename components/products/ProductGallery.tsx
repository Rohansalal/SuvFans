'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const main = images[active] ?? images[0];

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] bg-[#F4F6F8] rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_28px_rgba(11,42,60,0.08)]">
        <Image
          src={main}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
          className="object-contain p-6"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((img, i) => {
            const isActive = i === active;
            return (
              <button
                key={img}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  isActive
                    ? 'border-[#2E86B8] shadow-[0_4px_12px_rgba(46,134,184,0.25)]'
                    : 'border-gray-100 hover:border-[#2E86B8]/40 opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={img}
                  alt={`${alt} thumbnail ${i + 1}`}
                  fill
                  sizes="100px"
                  className="object-contain p-1.5 bg-[#F4F6F8]"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
