"use client";

import Image from "next/image";
import { useState } from "react";
import type { Service } from "../data/portfolio";

type ServicesListProps = {
  services: Service[];
};

export default function ServicesList({ services }: ServicesListProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <div className="services-layout">
      <div>
        {services.map((service, index) => (
          <button
            key={service.title}
            type="button"
            className="service-row text-left"
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </button>
        ))}
      </div>
      <div className="service-preview">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={active.preview}
            alt={active.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
