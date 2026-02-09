"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryTag, HeroTile } from "../types/portfolio";

type HeroGridProps = {
  tiles: HeroTile[];
  onSelectCategory: (category: GalleryTag) => void;
};

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08 },
  }),
};

export default function HeroGrid({ tiles, onSelectCategory }: HeroGridProps) {
  return (
    <div className="hero-grid">
      {tiles.map((tile, index) => {
        const layoutClass =
          index === 0
            ? "col-span-12 lg:col-span-7 lg:row-span-3"
            : index === 1
              ? "col-span-12 lg:col-span-5 lg:row-span-3"
              : "col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2";

        return (
        <motion.button
          key={tile.title}
          type="button"
          className={`hero-tile text-left ${layoutClass}`}
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          onClick={() => onSelectCategory(tile.category)}
        >
          <Image
            src={tile.src}
            alt={tile.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={index < 2}
          />
          <div className="tile-label">
            <span>{tile.subtitle}</span>
            <h2>{tile.title}</h2>
          </div>
        </motion.button>
        );
      })}
    </div>
  );
}
