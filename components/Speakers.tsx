"use client";

import React from "react";

export function Speakers() {
  const mentors = [
    {
      name: "Dr. Kanishka Perera",
      role: "Satellite Systems Engineer",
      cred: "Designed CubeSat attitude determination for 40+ micro-satellites.",
      initials: "KP",
      color: "var(--accent-orange)",
    },
    {
      name: "Dilshan Jayasinghe",
      role: "Flight Software Tech Lead",
      cred: "Built autonomous launch telemetry and ground-station software.",
      initials: "DJ",
      color: "var(--accent-cyan)",
    },
    {
      name: "Nethmi Fernando",
      role: "Avionics Research Lead",
      cred: "Engineered high-altitude balloon payload communication systems.",
      initials: "NF",
      color: "var(--accent-yellow)",
    },
    {
      name: "Tharindu Silva",
      role: "Orbital Mechanics Researcher",
      cred: "Developed mission trajectory simulation engines.",
      initials: "TS",
      color: "var(--accent-pink)",
    },
  ];

  return (
    <section id="mentors" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Header */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12">
            <div className="mb-2 inline-block font-mono text-xs font-bold text-[var(--accent-orange)] uppercase tracking-wider">
              // MENTORS
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[var(--text-cloud)]">
              People who <span className="text-[var(--accent-yellow)]">actually build</span> this stuff.
            </h2>
          </div>

          {/* 4 Mentor Cards: Each spans 4 cols on mobile, 4 on tablet (2x2), 3 on desktop (4 per row!) */}
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="col-span-4 sm:col-span-4 lg:col-span-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center font-mono font-black text-black mb-4 text-sm"
                  style={{ backgroundColor: m.color }}
                >
                  {m.initials}
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-cloud)] mb-1">
                  {m.name}
                </h3>
                <div className="font-mono text-xs text-[var(--accent-orange)] mb-3 font-bold">
                  {m.role}
                </div>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  {m.cred}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
