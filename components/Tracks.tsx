"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { RocketIcon, CpuIcon, SatelliteIcon, DnaIcon, Compass01Icon } from "@hugeicons/core-free-icons";

export function Tracks() {
  const tracks = [
    {
      name: "Propulsion",
      icon: RocketIcon,
      desc: "Design something that gets mass from A to B in space, efficiently.",
      color: "var(--accent-orange)",
      span: "col-span-4 sm:col-span-4 lg:col-span-4",
    },
    {
      name: "Mission Software",
      icon: CpuIcon,
      desc: "Build reliable flight software, ground station control, or live satellite telemetry dashboards.",
      color: "var(--accent-cyan)",
      span: "col-span-4 sm:col-span-4 lg:col-span-4",
    },
    {
      name: "Satellite Systems",
      icon: SatelliteIcon,
      desc: "Create small-satellite payloads, communications arrays, or constellation controllers.",
      color: "var(--accent-yellow)",
      span: "col-span-4 sm:col-span-4 lg:col-span-4",
    },
    {
      name: "Space Biology",
      icon: DnaIcon,
      desc: "Life support systems, automated bio-payload experiments, or radiation-shielding analysis.",
      color: "var(--accent-pink)",
      span: "col-span-4 sm:col-span-4 lg:col-span-6",
    },
    {
      name: "Open Orbit",
      icon: Compass01Icon,
      desc: "Have a wild space idea that doesn't fit the classic tracks? If it flies, orbits, or analyzes the cosmos, bring it.",
      color: "var(--text-cloud)",
      span: "col-span-4 sm:col-span-8 lg:col-span-6",
    },
  ];

  return (
    <section id="tracks" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Header */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-cloud)] uppercase tracking-tight mb-3">
              Tracks
            </h2>
            <p className="font-sans text-lg text-[#00f0ff] font-medium max-w-2xl mx-auto">
              5 core challenge areas. Hardware prototypes, software systems, or deep research models.
            </p>
          </div>

          {/* Track Cards */}
          {tracks.map((tr, idx) => {
            const IconComp = tr.icon;
            return (
              <div
                key={idx}
                className={`${tr.span} rounded-2xl bg-[var(--bg-card)] card-border p-6 sm:p-8 flex flex-col justify-between card-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform`}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl border-3 border-black flex items-center justify-center mb-6 shadow-[3px_3px_0px_0px_#000]"
                    style={{ backgroundColor: tr.color }}
                  >
                    <HugeiconsIcon icon={IconComp} className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[var(--text-cloud)] uppercase tracking-wide mb-3">
                    {tr.name}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[var(--text-muted)] font-normal leading-relaxed">
                    {tr.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[var(--border-card)] flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase">Track #0{idx + 1}</span>
                  <span className="font-mono text-xs font-bold uppercase" style={{ color: tr.color }}>Active</span>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
