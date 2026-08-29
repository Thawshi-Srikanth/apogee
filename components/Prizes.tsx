"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Award01Icon, RocketIcon } from "@hugeicons/core-free-icons";

export function Prizes() {
  const prizes = [
    { rank: "1ST PLACE", icon: Award01Icon, amount: "Rs. 250,000", desc: "Cash prize + space lab incubator spot", color: "var(--accent-yellow)" },
    { rank: "2ND PLACE", icon: Award01Icon, amount: "Rs. 150,000", desc: "Cash prize + $2,500 cloud credits", color: "var(--accent-cyan)" },
    { rank: "3RD PLACE", icon: Award01Icon, amount: "Rs. 75,000", desc: "Cash prize + hardware kits", color: "var(--accent-pink)" },
    { rank: "SPECIAL TRACK", icon: RocketIcon, amount: "Rs. 40,000", desc: "Best orbital software tool", color: "var(--accent-orange)" },
  ];

  return (
    <section id="prizes" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Header */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-cloud)] uppercase tracking-tight mb-3">
              Prizes
            </h2>
            <p className="font-sans text-lg text-[#ff5500] font-medium max-w-2xl mx-auto">
              Worth showing up for. Rs. 500,000+ total prize pool in cash and cloud credits.
            </p>
          </div>

          {/* 4 Prize Cards */}
          {prizes.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="col-span-4 sm:col-span-4 lg:col-span-3 rounded-xl bg-[var(--bg-card)] card-border p-6 flex flex-col justify-between card-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
              >
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] font-bold mb-2 uppercase">
                    <HugeiconsIcon icon={IconComp} className="w-3.5 h-3.5" style={{ color: p.color }} />
                    <span>{p.rank}</span>
                  </div>
                  <div
                    className="font-mono text-2xl font-black mb-3"
                    style={{ color: p.color }}
                  >
                    {p.amount}
                  </div>
                  <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
