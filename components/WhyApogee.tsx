"use client";

import React from "react";

export function WhyApogee() {
  const points = [
    {
      title: "Built by students, for students",
      desc: "Not a corporate promo wearing a NASA logo.",
    },
    {
      title: "Real mentors",
      desc: "Working engineers and satellite researchers, not recruiters.",
    },
    {
      title: "Real prizes",
      desc: "Rs. 500,000+ total prize pool in cash and cloud credits.",
    },
    {
      title: "First of its kind",
      desc: "The only independent student space hackathon in Sri Lanka.",
    },
  ];

  return (
    <section id="why" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Header */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 text-center">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text-cloud)] uppercase tracking-tight mb-3">
              Why Apogee
            </h2>
            <p className="font-sans text-lg text-[#ffc857] font-medium max-w-2xl mx-auto">
              Built by students, for students across Sri Lanka. No corporate fluff.
            </p>
          </div>

          {/* 4 Cards */}
          {points.map((item, idx) => (
            <div
              key={idx}
              className="col-span-4 sm:col-span-4 lg:col-span-6 rounded-xl bg-[var(--bg-card)] card-border p-6 flex flex-col justify-between card-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-[var(--text-cloud)] mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-base text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
