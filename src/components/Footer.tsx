"use client";

import type { SiteInfo } from "../types/portfolio";

type FooterProps = {
  info: SiteInfo;
};

export default function Footer({ info }: FooterProps) {
  return (
    <footer className="mt-20 pb-16">
      <div className="footer-grid">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Studio
          </span>
          <p className="font-[family:var(--font-serif)] text-2xl uppercase tracking-wide">
            {info.name}
          </p>
          <p className="text-sm text-[color:var(--muted)]">{info.location}</p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Connect
          </span>
          <a className="nav-link" href={`mailto:${info.email}`}>
            {info.email}
          </a>
          <p className="text-sm text-[color:var(--muted)]">{info.handle}</p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Booking
          </span>
          <p className="text-sm text-[color:var(--muted)]">
            Editorial + commercial bookings for 2025.
          </p>
        </div>
      </div>
      <p className="mt-12 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
        © 2026 SBPhotography. All rights reserved.
      </p>
    </footer>
  );
}
