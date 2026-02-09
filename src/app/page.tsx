import PortfolioClient from "../components/PortfolioClient";
import {
  galleryTags as fallbackGalleryTags,
  heroTiles as fallbackHeroTiles,
  portfolioItems as fallbackPortfolioItems,
  services as fallbackServices,
  siteInfo as fallbackSiteInfo,
} from "../data/portfolio";
import { getPortfolioData } from "../lib/sanity";

export default async function Home() {
  const cmsData = await getPortfolioData();

  const siteInfo = cmsData.siteInfo ?? fallbackSiteInfo;
  const heroTiles = cmsData.heroTiles.length
    ? cmsData.heroTiles
    : fallbackHeroTiles;
  const portfolioItems = cmsData.portfolioItems.length
    ? cmsData.portfolioItems
    : fallbackPortfolioItems;
  const services = cmsData.services.length ? cmsData.services : fallbackServices;

  const galleryTags =
    cmsData.categories.length > 0
      ? ["All", ...cmsData.categories.map((category) => category.title)]
      : fallbackGalleryTags;

  return (
    <PortfolioClient
      siteInfo={siteInfo}
      galleryTags={galleryTags}
      heroTiles={heroTiles}
      portfolioItems={portfolioItems}
      services={services}
    />
  );
}
