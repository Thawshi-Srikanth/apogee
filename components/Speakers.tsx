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
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text-cloud)] uppercase tracking-tight mb-3">
              Mentors
            </h2>
            <p className="font-sans text-lg text-[#ffc857] font-medium max-w-2xl mx-auto">
              People who actually build this stuff. Working engineers and satellite researchers.
            </p>
          </div>

          {/* 4 Mentor Cards */}
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="col-span-4 sm:col-span-4 lg:col-span-3 rounded-xl bg-[var(--bg-card)] card-border p-6 flex flex-col justify-between card-shadow"
            >
              <div>
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center font-mono text-xs font-black text-black mb-4"
                  style={{ backgroundColor: m.color }}
                >
                  {m.initials}
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-cloud)] mb-1">
                  {m.name}
                </h3>
                <div className="font-mono text-xs text-[var(--accent-orange)] mb-3 font-semibold uppercase">
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
