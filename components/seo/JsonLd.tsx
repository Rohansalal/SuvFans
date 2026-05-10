// components/seo/JsonLd.tsx
// Server-rendered JSON-LD script. Safely stringifies and inlines structured data.
import React from 'react';

interface JsonLdProps {
  data: object | object[];
}

export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      // Trusted content, generated server-side from typed data — safe to inject.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
