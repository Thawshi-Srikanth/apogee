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
    <section id="why" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      <div className="mb-4 inline-block font-mono text-xs font-bold text-[var(--accent-yellow)] uppercase tracking-wider">
        // WHY APOGEE
      </div>

      <h2 className="font-heading text-3xl sm:text-4xl font-black text-[var(--text-cloud)] mb-8">
        Built by students. <span className="text-[var(--accent-orange)]">For Sri Lanka.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {points.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-5 flex flex-col justify-between hover:border-[var(--accent-orange)] transition-colors shadow-sm"
          >
            <div>
              <span
                className="inline-block rounded font-mono text-[10px] font-bold px-2 py-0.5 mb-3 text-black uppercase"
                style={{ backgroundColor: item.color }}
              >
                {item.badge}
              </span>
              <h3 className="font-heading text-xl font-bold text-[var(--text-cloud)] mb-1">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-[var(--text-muted)]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
