"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import type { PortfolioItem } from "../types/portfolio";

type GalleryModalProps = {
  item: PortfolioItem | null;
  onClose: () => void;
};

export default function GalleryModal({ item, onClose }: GalleryModalProps) {
  if (!item) return null;

  return (
    <Dialog open={!!item} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-6">
        <Dialog.Panel className="w-full max-w-4xl border border-[color:var(--edge)] bg-[#0f0e0d]">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 border-t border-[color:var(--edge)] px-6 py-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {item.category}
            </p>
            <Dialog.Title className="font-[family:var(--font-serif)] text-2xl uppercase tracking-wide">
              {item.title}
            </Dialog.Title>
            <p className="text-sm text-[color:var(--muted)]">
              {item.location} · {item.year}
            </p>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
