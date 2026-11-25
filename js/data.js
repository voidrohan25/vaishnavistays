/**
 * VaishnaviStays - Centralized Site Configuration, Icons & Villa Inventory
 * Primary Phone & WhatsApp: +91 9767674307
 */

const SITE_CONFIG = {
  brandName: "VaishnaviStays",
  phone: "9767674307",
  formattedPhone: "+91 9767674307",
  telHref: "tel:+919767674307",
  whatsappBase: "https://wa.me/919767674307",
  region: "Lonavala & Khandala, Maharashtra",
  siteUrl: "https://vaishnavistays.netlify.app"
};

// Minimalist 1.5px stroke inline SVG icon library (zero external CDN dependency)
const ICONS = {
  phone: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  whatsapp: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  mapPin: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  pool: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0"/><path d="M2 20c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0"/><path d="M8 12V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2"/><path d="M15 12V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2"/><line x1="8" y1="9" x2="15" y2="9"/></svg>',
  bed: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
  users: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  arrowRight: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  zoomIn: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
  home: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
};

const VILLAS_DATA = [
  {
    id: 1,
    slug: "lonavala-villa",
    name: "Lonavala Villa",
    category: "lonavala",
    tags: ["lonavala", "pool", "party"],
    highlight: "4 BHK Villa",
    badge: "Most Popular",
    webp: "images/villa-lonavala.webp",
    jpg: "images/lonavala villa.jpg",
    width: 960,
    height: 1280,
    location: "Lonavala",
    tagline: "Luxury 4BHK villa with private pool & rain dance",
    description:
      "Framed by lush flowering greenery, Lonavala Villa is a spacious 4BHK private residence featuring a dedicated swimming pool, rain dance area, air-conditioned rooms, and relaxed outdoor seating designed for family stays, weekend getaways, and group celebrations.",
    specs: {
      accommodation: "4 BHK AC Villa",
      pool: "Private Pool & Rain Dance",
      idealFor: "Families & Parties"
    },
    amenities: [
      "Private Swimming Pool",
      "Rain Dance Setup",
      "Air-Conditioned Rooms",
      "Lush Greenery & Sit-out",
      "Party & Celebration Friendly",
      "Direct Booking Support"
    ]
  },
  {
    id: 2,
    slug: "nayak-villa",
    name: "Nayak Villa",
    category: "lonavala",
    tags: ["lonavala", "pool"],
    highlight: "Modern Interiors",
    badge: "Classic Architecture",
    webp: "images/villa-nayak.webp",
    jpg: "images/villa2.jpg",
    width: 960,
    height: 1280,
    location: "Lonavala & Khandala",
    tagline: "Premium villa with modern interiors & private stay",
    description:
      "Featuring arched balconies, a covered ground portico, and welcoming interiors, Nayak Villa offers a refined private retreat near Mumbai and Pune tailored for unhurried family holidays and peaceful weekend stays.",
    specs: {
      accommodation: "AC Villa Rooms",
      pool: "Private Pool Access",
      idealFor: "Family & Weekend Stays"
    },
    amenities: [
      "Private Swimming Pool",
      "Modern Interiors & Lounge",
      "Arched Balcony & Portico",
      "Air-Conditioned Rooms",
      "Family-Friendly Setting",
      "Direct Booking Support"
    ]
  },
  {
    id: 3,
    slug: "muscut-house",
    name: "Muscut House",
    category: "lonavala",
    tags: ["lonavala", "nature", "pool"],
    highlight: "Terrace View",
    badge: "Terrace View",
    webp: "images/villa-muscut.webp",
    jpg: "images/villa3.jpg",
    width: 960,
    height: 1280,
    location: "Lonavala & Khandala",
    tagline: "Peaceful villa with terrace view & spacious living lounge",
    description:
      "Designed around an expansive, sunlit indoor living hall and serene terrace viewpoints, Muscut House brings families and friends together in quiet comfort with private pool access and air-conditioned rooms.",
    specs: {
      accommodation: "Spacious Lounge & AC Rooms",
      pool: "Private Pool Access",
      idealFor: "Peaceful Retreats"
    },
    amenities: [
      "Scenic Terrace View",
      "Expansive Living Lounge",
      "Private Swimming Pool",
      "Air-Conditioned Rooms",
      "Serene Atmosphere",
      "Direct Booking Support"
    ]
  },
  {
    id: 4,
    slug: "khandala-villa",
    name: "Khandala Villa",
    category: "khandala",
    tags: ["khandala", "pool", "party"],
    highlight: "5-Star Villa",
    badge: "Large Pool & Lawn",
    webp: "images/villa-khandala.webp",
    jpg: "images/villa4.jpg",
    width: 1280,
    height: 853,
    location: "Khandala",
    tagline: "5-star villa with large illuminated private pool & lawn",
    description:
      "Set in Khandala, this upscale retreat centers around an illuminated private swimming pool, timber sun loungers, and manicured green lawn — suited for family gatherings, celebrations, and luxury weekend escapes.",
    specs: {
      accommodation: "Luxury AC Suites",
      pool: "Large Private Pool",
      idealFor: "Groups & Celebrations"
    },
    amenities: [
      "Large Illuminated Private Pool",
      "Manicured Lawn & Loungers",
      "Air-Conditioned Suites",
      "Celebration & Party Friendly",
      "Mountain Surroundings",
      "Direct Booking Support"
    ]
  },
  {
    id: 5,
    slug: "captain-villa-7",
    name: "Captain Villa 7",
    category: "lonavala",
    tags: ["lonavala", "party", "pool"],
    highlight: "Spacious Garden",
    badge: "Garden Villa",
    webp: "images/villa-captain-7.webp",
    jpg: "images/villa5.jpg",
    width: 1280,
    height: 852,
    location: "Lonavala & Khandala",
    tagline: "Spacious villa with garden, covered veranda & private pool",
    description:
      "Shaded by tall evergreen trees, Captain Villa 7 combines warm brick-clad architecture with a spacious courtyard garden, covered veranda, upper balcony, private pool access, and air-conditioned bedrooms.",
    specs: {
      accommodation: "AC Villa Rooms",
      pool: "Private Pool Access",
      idealFor: "Families & Gatherings"
    },
    amenities: [
      "Spacious Garden & Courtyard",
      "Covered Veranda & Balcony",
      "Private Swimming Pool",
      "Air-Conditioned Rooms",
      "Family & Group Friendly",
      "Direct Booking Support"
    ]
  },
  {
    id: 6,
    slug: "captain-villa-8",
    name: "Captain Villa 8",
    category: "lonavala",
    tags: ["lonavala", "party", "nature"],
    highlight: "Bonfire Setup",
    badge: "Waterfall Pool & Bonfire",
    webp: "images/villa-captain-8.webp",
    jpg: "images/villa6.jpg",
    width: 1280,
    height: 852,
    location: "Lonavala & Khandala",
    tagline: "Villa with bonfire setup, waterfall pool & hill views",
    description:
      "Built for crisp hill-station evenings, Captain Villa 8 pairs a private waterfall-feature swimming pool and elevated hill-view balcony with an outdoor bonfire setup and comfortable air-conditioned interiors.",
    specs: {
      accommodation: "AC Villa Rooms",
      pool: "Waterfall Feature Pool",
      idealFor: "Parties & Bonfires"
    },
    amenities: [
      "Dedicated Bonfire Setup",
      "Private Waterfall Pool",
      "Hill View Balcony",
      "Air-Conditioned Rooms",
      "Party & Celebration Ready",
      "Direct Booking Support"
    ]
  },
  {
    id: 7,
    slug: "captain-villa-10",
    name: "Captain Villa 10",
    category: "khandala",
    tags: ["khandala", "nature", "pool"],
    highlight: "Nature Retreat",
    badge: "Nature View",
    webp: "images/villa-captain-10.webp",
    jpg: "images/villa7.jpg",
    width: 1280,
    height: 852,
    location: "Lonavala & Khandala",
    tagline: "Nature view relaxing villa with cozy dining & kitchen",
    description:
      "A calm hillside sanctuary offering a dedicated family dining space, modular kitchen area, comfortable air-conditioned bedrooms, and private pool access surrounded by serene greenery.",
    specs: {
      accommodation: "AC Rooms & Kitchen",
      pool: "Private Pool Access",
      idealFor: "Nature & Relaxation"
    },
    amenities: [
      "Nature View Surroundings",
      "Dining Area & Modular Kitchen",
      "Private Swimming Pool",
      "Air-Conditioned Rooms",
      "Peaceful Weekend Stay",
      "Direct Booking Support"
    ]
  }
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Lonavala Villa – Private Pool & Tropical Greenery",
    category: "pools",
    categoryLabel: "Private Pools",
    webp: "images/villa-lonavala.webp",
    jpg: "images/lonavala villa.jpg",
    width: 960,
    height: 1280,
    villaSlug: "lonavala-villa"
  },
  {
    id: 2,
    title: "Khandala Villa – Illuminated Pool & Lawn",
    category: "pools",
    categoryLabel: "Private Pools",
    webp: "images/villa-khandala.webp",
    jpg: "images/villa4.jpg",
    width: 1280,
    height: 853,
    villaSlug: "khandala-villa"
  },
  {
    id: 3,
    title: "Captain Villa 8 – Waterfall Pool & Hill Backdrop",
    category: "views",
    categoryLabel: "Hill Views & Pools",
    webp: "images/villa-captain-8.webp",
    jpg: "images/villa6.jpg",
    width: 1280,
    height: 852,
    villaSlug: "captain-villa-8"
  },
  {
    id: 4,
    title: "Nayak Villa – Arched Facade & Balconies",
    category: "exteriors",
    categoryLabel: "Villa Exteriors",
    webp: "images/villa-nayak.webp",
    jpg: "images/villa2.jpg",
    width: 960,
    height: 1280,
    villaSlug: "nayak-villa"
  },
  {
    id: 5,
    title: "Captain Villa 7 – Brick Exterior & Covered Veranda",
    category: "exteriors",
    categoryLabel: "Villa Exteriors",
    webp: "images/villa-captain-7.webp",
    jpg: "images/villa5.jpg",
    width: 1280,
    height: 852,
    villaSlug: "captain-villa-7"
  },
  {
    id: 6,
    title: "Muscut House – Spacious Living Hall & Lounge",
    category: "interiors",
    categoryLabel: "Interiors",
    webp: "images/villa-muscut.webp",
    jpg: "images/villa3.jpg",
    width: 960,
    height: 1280,
    villaSlug: "muscut-house"
  },
  {
    id: 7,
    title: "Captain Villa 10 – Dining Area & Modular Kitchen",
    category: "interiors",
    categoryLabel: "Interiors",
    webp: "images/villa-captain-10.webp",
    jpg: "images/villa7.jpg",
    width: 1280,
    height: 852,
    villaSlug: "captain-villa-10"
  }
];
