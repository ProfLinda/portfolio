export type GalleryTag =
  | "All"
  | "Product"
  | "Videography"
  | "Gym + Athletic"
  | "Event Coverage"
  | "Social Media";

export type MediaType = "image" | "video";

export type HeroTile = {
  title: string;
  subtitle: string;
  category: GalleryTag;
  src: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: GalleryTag;
  location: string;
  year: string;
  src: string;
  type: MediaType;
  size?: "tall" | "wide";
};

export type Service = {
  title: string;
  description: string;
  preview: string;
};

export const siteInfo = {
  name: "SBPhotography",
  location: "Tirana, Albania",
  handle: "@sb_photography90",
  email: "saimirbega@gmail.com",
};

export const galleryTags: GalleryTag[] = [
  "All",
  "Product",
  "Videography",
  "Gym + Athletic",
  "Event Coverage",
  "Social Media",
];

export const heroTiles: HeroTile[] = [
  {
    title: "Precision Product",
    subtitle: "Studio sets + clean light",
    category: "Product",
    src: "/portfolio/product-user-01.png",
  },
  {
    title: "Cinematic Motion",
    subtitle: "Short-form direction",
    category: "Videography",
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Athletic Grit",
    subtitle: "Gym + performance energy",
    category: "Gym + Athletic",
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Event Atmosphere",
    subtitle: "Documentary coverage",
    category: "Event Coverage",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Social Campaigns",
    subtitle: "Always-on content",
    category: "Social Media",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "prod-01",
    title: "Sculpted Glassware",
    category: "Product",
    location: "Tirana",
    year: "2025",
    src: "/portfolio/product-user-02.png",
    type: "image",
    size: "tall",
  },
  {
    id: "prod-02",
    title: "Cosmetic Detail",
    category: "Product",
    location: "Tirana",
    year: "2024",
    src: "/portfolio/product-user-03.png",
    type: "image",
  },
  {
    id: "prod-03",
    title: "Luxury Packaging",
    category: "Product",
    location: "Durres",
    year: "2025",
    src: "/portfolio/product-user-04.png",
    type: "image",
    size: "wide",
  },
  {
    id: "video-01",
    title: "Cinematic Launch",
    category: "Videography",
    location: "Tirana",
    year: "2025",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    type: "video",
  },
  {
    id: "video-02",
    title: "Motion Studies",
    category: "Videography",
    location: "Tirana",
    year: "2024",
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
    type: "video",
  },
  {
    id: "video-03",
    title: "Night Grade",
    category: "Videography",
    location: "Vlore",
    year: "2025",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    type: "video",
    size: "wide",
  },
  {
    id: "ath-01",
    title: "Lift Series",
    category: "Gym + Athletic",
    location: "Tirana",
    year: "2025",
    src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "ath-02",
    title: "Strength Focus",
    category: "Gym + Athletic",
    location: "Durres",
    year: "2024",
    src: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1600&q=80",
    type: "image",
    size: "tall",
  },
  {
    id: "ath-03",
    title: "Performance Edge",
    category: "Gym + Athletic",
    location: "Tirana",
    year: "2025",
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be5019b?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "event-01",
    title: "Open Night",
    category: "Event Coverage",
    location: "Tirana",
    year: "2024",
    src: "https://images.unsplash.com/photo-1514516870926-206f73bfe7bd?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "event-02",
    title: "Launch Floor",
    category: "Event Coverage",
    location: "Durres",
    year: "2025",
    src: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1600&q=80",
    type: "image",
    size: "wide",
  },
  {
    id: "event-03",
    title: "Night Ceremony",
    category: "Event Coverage",
    location: "Tirana",
    year: "2025",
    src: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "social-01",
    title: "Cafe Series",
    category: "Social Media",
    location: "Tirana",
    year: "2025",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "social-02",
    title: "Lifestyle Set",
    category: "Social Media",
    location: "Vlore",
    year: "2024",
    src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1600&q=80",
    type: "image",
    size: "tall",
  },
  {
    id: "social-03",
    title: "Daily Brand",
    category: "Social Media",
    location: "Tirana",
    year: "2025",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "prod-04",
    title: "Metal Finishes",
    category: "Product",
    location: "Durres",
    year: "2024",
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "prod-05",
    title: "Fragrance Layers",
    category: "Product",
    location: "Tirana",
    year: "2025",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    type: "image",
    size: "wide",
  },
  {
    id: "video-04",
    title: "Studio Motion",
    category: "Videography",
    location: "Tirana",
    year: "2024",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    type: "video",
  },
  {
    id: "ath-04",
    title: "Sprint Frames",
    category: "Gym + Athletic",
    location: "Durres",
    year: "2024",
    src: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "ath-05",
    title: "Gym Atmosphere",
    category: "Gym + Athletic",
    location: "Tirana",
    year: "2025",
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "event-04",
    title: "Brand Dinner",
    category: "Event Coverage",
    location: "Tirana",
    year: "2024",
    src: "https://images.unsplash.com/photo-1514516870926-206f73bfe7bd?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "event-05",
    title: "Soundcheck",
    category: "Event Coverage",
    location: "Vlore",
    year: "2025",
    src: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "social-04",
    title: "Creator Week",
    category: "Social Media",
    location: "Tirana",
    year: "2025",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
  {
    id: "social-05",
    title: "Street Editorial",
    category: "Social Media",
    location: "Durres",
    year: "2024",
    src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1600&q=80",
    type: "image",
  },
];

export const services: Service[] = [
  {
    title: "Editorial Campaigns",
    description:
      "Concept, lighting, and production for brand visuals with a premium finish.",
    preview: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Product + Ecomm",
    description:
      "High-volume and hero imagery with strict color fidelity and texture.",
    preview: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Athletic Performance",
    description:
      "Gym campaigns, action coverage, and athlete storytelling with grit.",
    preview: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Event Coverage",
    description:
      "Fast capture with cinematic edits for launches, shows, and activations.",
    preview: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Always-On Social",
    description:
      "Short-form reels, daily content packs, and cutdowns for social teams.",
    preview: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
  },
];
