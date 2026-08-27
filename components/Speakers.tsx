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
    <section id="mentors" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      <div className="mb-4 inline-block font-mono text-xs font-bold text-[var(--accent-orange)] uppercase tracking-wider">
        // MENTORS
      </div>

      <h2 className="font-heading text-3xl sm:text-4xl font-black text-[var(--text-cloud)] mb-8">
        People who <span className="text-[var(--accent-yellow)]">actually build</span> this stuff.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mentors.map((m, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-5 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center font-mono font-black text-black mb-3 text-sm"
                style={{ backgroundColor: m.color }}
              >
                {m.initials}
              </div>
              <h3 className="font-heading text-lg font-bold text-[var(--text-cloud)] mb-0.5">
                {m.name}
              </h3>
              <div className="font-mono text-xs text-[var(--accent-orange)] mb-2 font-bold">
                {m.role}
              </div>
              <p className="font-sans text-xs text-[var(--text-muted)] leading-normal">
                {m.cred}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
