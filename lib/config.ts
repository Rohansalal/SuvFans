// lib/config.ts
export const COMPANY_CONFIG = {
  name: 'SUV FANS LLP',
  shortName: 'SUV FANS',
  legalName: 'SUV FANS LLP',
  tagline: 'Your Partner in Air Movement',
  description: 'India-based manufacturer of heavy-duty industrial fans, centrifugal blowers, axial fans, HVLS fans, industrial coolers, HVAC ducts and turnkey ventilation systems. ISO 9001:2015 certified, 19+ years of engineering expertise.',
  address: 'Block-7, B229, RIICO Industrial Area, Bhiwadi, Alwar, Rajasthan',
  street: 'Block-7, B229, RIICO Industrial Area',
  city: 'Bhiwadi',
  region: 'Rajasthan',
  postalCode: '301019',
  country: 'IN',
  countryName: 'India',
  // approx coords for Bhiwadi RIICO area
  latitude: 28.2087,
  longitude: 76.8559,
  phone: process.env.NEXT_PUBLIC_PHONE || '+91 97726 14848',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@suvfans.in',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '',
  iso: 'ISO 9001:2015 Certified',
  yearsOfExperience: '19+',
  foundingYear: 2005,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://suvfans.in',
  twitter: '@suvfans',
  // social profiles (used in Organization sameAs)
  socials: {
    linkedin: '',
    youtube: '',
    facebook: '',
    instagram: '',
  },
};
