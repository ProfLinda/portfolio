"use client";

import type { GalleryTag } from "../data/portfolio";

type FilterBarProps = {
  tags: GalleryTag[];
  active: GalleryTag;
  onChange: (tag: GalleryTag) => void;
};

export default function FilterBar({ tags, active, onChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className="filter-pill"
          data-active={tag === active}
          onClick={() => onChange(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
