// lib/config.ts
export const COMPANY_CONFIG = {
  name: 'SUV FANS LLP',
  tagline: 'Your Partner in Air Movement',
  address: 'Block-7, B229, RIICO Industrial Area, Bhiwadi, Alwar, Rajasthan',
  phone: process.env.NEXT_PUBLIC_PHONE || '+91-XXXXXXXXXX',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@suvfans.in',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '',
  iso: 'ISO 9001:2015 Certified',
  yearsOfExperience: '19+',
};
