"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import type {
  GalleryTag,
  HeroTile,
  PortfolioItem,
  Service,
  SiteInfo,
} from "../types/portfolio";
import FilterBar from "./FilterBar";
import Footer from "./Footer";
import Gallery from "./Gallery";
import GalleryModal from "./GalleryModal";
import HeroGrid from "./HeroGrid";
import ServicesList from "./ServicesList";

type PortfolioClientProps = {
  siteInfo: SiteInfo;
  galleryTags: GalleryTag[];
  heroTiles: HeroTile[];
  portfolioItems: PortfolioItem[];
  services: Service[];
};

export default function PortfolioClient({
  siteInfo,
  galleryTags,
  heroTiles,
  portfolioItems,
  services,
}: PortfolioClientProps) {
  const [activeTag, setActiveTag] = useState<GalleryTag>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const filteredItems = useMemo(() => {
    if (activeTag === "All") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === activeTag);
  }, [activeTag, portfolioItems]);

  const handleSelectCategory = (category: GalleryTag) => {
    setActiveTag(category);
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page-shell grain">
      <div className="page-content">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[color:var(--edge)]">
              <Image
                src="/logo.png"
                alt={`${siteInfo.name} logo`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
                {siteInfo.location}
              </span>
              <span className="font-[family:var(--font-serif)] text-2xl uppercase tracking-wide">
                {siteInfo.name}
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a className="nav-link" href="#work">
              Work
            </a>
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24">
          <section className="flex flex-col gap-6">
            <div className="flex items-end justify-between">
              <div className="max-w-xl text-sm uppercase tracking-[0.35em] text-[color:var(--muted)]">
                {siteInfo.tagline ||
                  "Editorial photography + video for brands, product, and athletic performance."}
              </div>
              <div className="hidden text-right text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] md:block">
                Portfolio 2024–2026
              </div>
            </div>
            <HeroGrid tiles={heroTiles} onSelectCategory={handleSelectCategory} />
          </section>

          <section className="signature-row">
            <strong>Impact. Texture. Motion.</strong>
            <span>Product · Event · Gym · Social · Video</span>
            <span>48h selects · Full edit in 5 days</span>
          </section>

          <section id="work" ref={galleryRef} className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Selected Work
              </p>
              <h2 className="section-title">Gallery</h2>
            </div>
            <FilterBar
              tags={galleryTags}
              active={activeTag}
              onChange={setActiveTag}
            />
            <Gallery items={filteredItems} onSelect={setSelectedItem} />
          </section>

          <section id="services" className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Studio Practice
              </p>
              <h2 className="section-title">Services</h2>
            </div>
            <ServicesList services={services} />
          </section>

          <section
            id="contact"
            className="flex flex-col gap-8 border-y border-[color:var(--line)] py-14"
          >
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Bookings
              </p>
              <h2 className="section-title">Let&apos;s build your next set</h2>
              <p className="text-sm text-[color:var(--muted)]">
                Share the project scope, timeline, and mood. I&apos;ll respond with
                a treatment and rate pack.
              </p>
            </div>
            <form className="cta-form">
              <input
                className="input-dark"
                placeholder="Name"
                name="name"
                type="text"
              />
              <input
                className="input-dark"
                placeholder="Email"
                name="email"
                type="email"
              />
              <button className="btn-solid" type="submit">
                Request
              </button>
            </form>
          </section>

          <Footer info={siteInfo} />
        </main>
      </div>
      <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
