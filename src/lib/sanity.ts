import "server-only";
import { createClient } from "@sanity/client";
import type {
  HeroTile,
  PortfolioItem,
  Service,
  SiteInfo,
} from "../types/portfolio";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const token = process.env.SANITY_READ_TOKEN;

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-02-01",
  useCdn: process.env.NODE_ENV === "production",
  token,
  perspective: "published",
});

type PortfolioData = {
  siteInfo: SiteInfo | null;
  categories: { title: string }[];
  heroTiles: HeroTile[];
  portfolioItems: PortfolioItem[];
  services: Service[];
};

const portfolioQuery = `{
  "siteInfo": *[_type == "siteInfo"][0]{
    name,
    location,
    handle,
    email,
    tagline
  },
  "categories": *[_type == "category"]|order(order asc){
    title
  },
  "heroTiles": *[_type == "heroTile"]|order(order asc){
    title,
    subtitle,
    "category": category->title,
    "src": image.asset->url
  },
  "portfolioItems": *[_type == "portfolioItem"]|order(order asc){
    "id": _id,
    title,
    "category": category->title,
    location,
    year,
    "src": image.asset->url,
    type,
    size
  },
  "services": *[_type == "service"]|order(order asc){
    title,
    description,
    "preview": preview.asset->url
  }
}`;

export async function getPortfolioData(): Promise<PortfolioData> {
  if (!projectId || !dataset) {
    return {
      siteInfo: null,
      categories: [],
      heroTiles: [],
      portfolioItems: [],
      services: [],
    };
  }

  return sanityClient.fetch(portfolioQuery);
}
