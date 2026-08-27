"use client";

import React from "react";

export function WhyApogee() {
  const points = [
    {
      title: "Built by students, for students",
      desc: "Not a corporate promo wearing a NASA logo.",
      badge: "INDEPENDENT",
      color: "var(--accent-orange)",
    },
    {
      title: "Real mentors",
      desc: "Working engineers and satellite researchers, not recruiters.",
      badge: "MENTORSHIP",
      color: "var(--accent-yellow)",
    },
    {
      title: "Real prizes",
      desc: "Rs. 500,000+ total prize pool in cash and cloud credits.",
      badge: "REWARDS",
      color: "var(--accent-pink)",
    },
    {
      title: "First of its kind",
      desc: "The only independent student space hackathon in Sri Lanka.",
      badge: "SRI LANKA",
      color: "var(--accent-cyan)",
    },
  ];

  return (
    <section id="why" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Header */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12">
            <div className="mb-2 inline-block font-mono text-xs font-bold text-[var(--accent-yellow)] uppercase tracking-wider">
              // WHY APOGEE
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[var(--text-cloud)]">
              Built by students. <span className="text-[var(--accent-orange)]">For Sri Lanka.</span>
            </h2>
          </div>

          {/* 4 Cards: Each card spans 4 cols on mobile, 4 on tablet (2x2), 6 on desktop (2x2) */}
          {points.map((item, idx) => (
            <div
              key={idx}
              className="col-span-4 sm:col-span-4 lg:col-span-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 flex flex-col justify-between hover:border-[var(--accent-orange)] transition-colors shadow-sm"
            >
              <div>
                <span
                  className="inline-block rounded font-mono text-[10px] font-bold px-2 py-0.5 mb-3 text-black uppercase"
                  style={{ backgroundColor: item.color }}
                >
                  {item.badge}
                </span>
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
