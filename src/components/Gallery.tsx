"use client";

import Image from "next/image";
import type { PortfolioItem } from "../data/portfolio";

type GalleryProps = {
  items: PortfolioItem[];
  onSelect: (item: PortfolioItem) => void;
};

export default function Gallery({ items, onSelect }: GalleryProps) {
  return (
    <div className="gallery-masonry">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className="gallery-card text-left"
          onClick={() => onSelect(item)}
        >
          <div className="relative w-full">
            <Image
              src={item.src}
              alt={item.title}
              width={800}
              height={item.size === "wide" ? 520 : 900}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="gallery-caption">
            <span>{item.category}</span>
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-sm text-[color:var(--muted)]">
              {item.location} · {item.year}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
