"use client";

import React from "react";

export function Prizes() {
  const prizes = [
    { rank: "🥇 1ST PLACE", amount: "Rs. 250,000", desc: "Cash prize + space lab incubator spot", color: "var(--accent-yellow)" },
    { rank: "🥈 2ND PLACE", amount: "Rs. 150,000", desc: "Cash prize + $2,500 cloud credits", color: "var(--accent-cyan)" },
    { rank: "🥉 3RD PLACE", amount: "Rs. 75,000", desc: "Cash prize + hardware kits", color: "var(--accent-pink)" },
    { rank: "🚀 SPECIAL TRACK", amount: "Rs. 40,000", desc: "Best orbital software tool", color: "var(--accent-orange)" },
  ];

  return (
    <section id="prizes" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Header */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12">
            <h2 className="font-pixel text-3xl sm:text-5xl font-black text-[var(--text-cloud)] uppercase mb-3">
              PRIZES
            </h2>
            <p className="font-sans text-lg text-[#ff5500] font-bold">
              Worth showing up for. <span className="font-mono text-xl text-[var(--accent-yellow)]">Rs. 500,000+</span> total prize pool in cash and cloud credits.
            </p>
          </div>

          {/* 4 Prize Cards */}
          {prizes.map((p, idx) => (
            <div
              key={idx}
              className="col-span-4 sm:col-span-4 lg:col-span-3 rounded-xl bg-[var(--bg-card)] card-border p-6 flex flex-col justify-between card-shadow"
            >
              <div>
                <span className="font-pixel text-xs text-[var(--text-muted)] font-bold block mb-2 uppercase">
                  {p.rank}
                </span>
                {/* Crisp Monospace Price Digits (Not Abstract Pixelated) */}
                <div
                  className="font-mono text-2xl sm:text-3xl font-black mb-3 tracking-tight"
                  style={{ color: p.color }}
                >
                  {p.amount}
                </div>
                <p className="font-sans text-sm text-[var(--text-cloud)] leading-relaxed font-semibold">
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
