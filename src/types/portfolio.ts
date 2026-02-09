export type GalleryTag = string;

export type MediaType = "image" | "video";

export type HeroTile = {
  title: string;
  subtitle?: string;
  category: GalleryTag;
  src: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: GalleryTag;
  location?: string;
  year?: string;
  src: string;
  type: MediaType;
  size?: "tall" | "wide";
};

export type Service = {
  title: string;
  description?: string;
  preview: string;
};

export type SiteInfo = {
  name: string;
  location: string;
  handle?: string;
  email?: string;
  tagline?: string;
};
