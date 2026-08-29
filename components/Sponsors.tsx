"use client";

import React from "react";

export function Sponsors() {
  const partners = [
    {
      name: "Arthur C. Clarke Institute",
      code: "ACCIMT",
      type: "Space Research Partner",
      desc: "Sri Lanka's national space applications & satellite research centre.",
      color: "var(--accent-orange)",
      bgBg: "bg-orange-950/40",
    },
    {
      name: "SLIIT",
      code: "SLIIT",
      type: "Academic & Venue Partner",
      desc: "Sri Lanka Institute of Information Technology campus & research labs.",
      color: "var(--accent-cyan)",
      bgBg: "bg-cyan-950/40",
    },
    {
      name: "Industry & Cloud",
      code: "CLOUD PARTNERS",
      type: "Supporting Bodies",
      desc: "Providing cloud infrastructure credits, developer tools & prize pool backing.",
      color: "var(--accent-yellow)",
      bgBg: "bg-yellow-950/40",
    },
  ];

  return (
    <section id="partners" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Standard Section Header */}
        <div className="col-span-4 sm:col-span-8 lg:col-span-12 text-center mb-8 sm:mb-12">
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-cloud)] uppercase tracking-tight mb-3">
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
              className="group col-span-4 sm:col-span-4 lg:col-span-4 rounded-xl bg-[var(--bg-card)] card-border flex flex-col justify-between card-shadow overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[7px_7px_0px_0px_#000000]"
            >
              {/* 4:3 Aspect Ratio Image / Logo Container (Vibrant Solid Theme Color) */}
              <div
                className="relative w-full aspect-[4/3] border-b-3 border-[var(--card-border-color)] overflow-hidden"
                style={{ backgroundColor: p.color }}
              />

              {/* Card Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-bold uppercase mb-1" style={{ color: p.color }}>
                    {p.type}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--text-cloud)] mb-2">
                    {p.name}
                  </h3>
                  <p className="font-sans text-xs text-[var(--text-muted)] font-normal leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
