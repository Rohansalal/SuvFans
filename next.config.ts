import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses for smaller transfer sizes
  compress: true,
  // Don't expose Next.js version in response headers (small security/SEO win)
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 1 year — sets Cache-Control on /_next/image responses
    minimumCacheTTL: 31536000,
    // Trim default device sizes to ones we actually use
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'suvfans.weblok.in',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.fastly.net',
      },
    ],
  },
  // Security and SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml' },
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }],
      },
      // Long-lived cache for optimized image responses
      {
        source: '/_next/image(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Static product images live in /public/products — safe to cache for a year
      {
        source: '/products/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Hero and brand assets in /public
      {
        source: '/:file(home|home1|homepage1|homepage2|logo|logo1|Aboutus|ProductImage|pureair).:ext(webp|png|jpg|jpeg|svg)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
