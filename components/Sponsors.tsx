"use client";

import React from "react";

export function Sponsors() {
  const partners = [
    {
      name: "Arthur C. Clarke Institute (ACCIMT)",
      type: "Space Research Partner",
      desc: "Sri Lanka's premier national space applications & satellite research centre.",
    },
    {
      name: "SLIIT",
      type: "Academic & Venue Partner",
      desc: "Sri Lanka Institute of Information Technology campus & lab facilities.",
    },
    {
      name: "Industry & Cloud Partners",
      type: "Supporting Bodies",
      desc: "Providing cloud credits, developer tools, and prize pool backing.",
    },
  ];

  return (
    <section id="partners" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Standard Section Header */}
        <div className="col-span-4 sm:col-span-8 lg:col-span-12 text-center mb-8 sm:mb-12">
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text-cloud)] uppercase tracking-tight mb-3">
            PARTNERS
          </h2>
          <p className="font-sans text-lg text-[var(--accent-yellow)] font-medium max-w-2xl mx-auto">
            Backed by leading research institutes, universities, and industry supporters.
          </p>
        </div>

        {/* 4-8-12 Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="col-span-4 sm:col-span-4 lg:col-span-4 rounded-xl bg-[var(--bg-card)] card-border p-6 flex flex-col justify-between card-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
            >
              <div>
                <div className="font-mono text-xs font-bold uppercase text-[var(--accent-cyan)] mb-1">
                  {p.type}
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-cloud)] mb-2">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
