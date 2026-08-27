"use client";

import React from "react";

export function Prizes() {
  const prizes = [
    { rank: "🥇 1st Place", amount: "Rs. 250,000", desc: "Cash prize + space lab incubator spot", color: "var(--accent-yellow)" },
    { rank: "🥈 2nd Place", amount: "Rs. 150,000", desc: "Cash prize + $2,500 cloud credits", color: "var(--accent-cyan)" },
    { rank: "🥉 3rd Place", amount: "Rs. 75,000", desc: "Cash prize + hardware kits", color: "var(--accent-pink)" },
    { rank: "🚀 Special Track", amount: "Rs. 40,000", desc: "Best orbital software tool", color: "var(--accent-orange)" },
  ];

  return (
    <section id="prizes" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      <div className="mb-4 inline-block font-mono text-xs font-bold text-[var(--accent-yellow)] uppercase tracking-wider">
        // PRIZES
      </div>

      <h2 className="font-heading text-3xl sm:text-4xl font-black text-[var(--text-cloud)] mb-8">
        Worth <span className="text-[var(--accent-orange)]">showing up for.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {prizes.map((p, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-5 flex flex-col justify-between shadow-sm"
          >
            <div>
              <span className="font-mono text-xs text-[var(--text-muted)] font-bold block mb-2">
                {p.rank}
              </span>
              <div
                className="font-mono text-2xl font-black mb-2"
                style={{ color: p.color }}
              >
                {p.amount}
              </div>
              <p className="font-sans text-xs text-[var(--text-cloud)]">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
