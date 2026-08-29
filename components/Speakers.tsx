"use client";

import React from "react";
import Image from "next/image";

export function Speakers() {
  const mentors = [
    {
      name: "[Name]",
      role: "Satellite Systems Engineer",
      cred: "Designed CubeSat attitude determination for 40+ micro-satellites.",
      image: "/mentors/person-1.png",
      color: "var(--accent-orange)",
    },
    {
      name: "[Name]",
      role: "Flight Software Tech Lead",
      cred: "Built autonomous launch telemetry and ground-station software.",
      image: "/mentors/person-2.png",
      color: "var(--accent-cyan)",
    },
    {
      name: "[Name]",
      role: "Avionics Research Lead",
      cred: "Engineered high-altitude balloon payload communication systems.",
      image: "/mentors/person-3.png",
      color: "var(--accent-yellow)",
    },
    {
      name: "[Name]",
      role: "Orbital Mechanics Researcher",
      cred: "Developed mission trajectory simulation engines.",
      image: "/mentors/person-5.png",
      color: "var(--accent-pink)",
    },
  ];

  return (
    <section id="mentors" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="col-span-4 sm:col-span-8 lg:col-span-12 text-center mb-8 sm:mb-12">
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-cloud)] uppercase tracking-tight mb-3">
            MENTORS
          </h2>
          <p className="font-sans text-lg text-[var(--accent-orange)] font-medium max-w-2xl mx-auto">
            People who actually build this stuff. Working engineers and satellite researchers.
          </p>
        </div>

        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="group col-span-4 sm:col-span-4 lg:col-span-3 rounded-xl bg-[var(--bg-card)] card-border flex flex-col justify-between card-shadow overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[7px_7px_0px_0px_#000000]"
            >
              {/* Mentor Photo (Edge-to-Edge at Top) */}
              <div className="relative w-full aspect-square border-b-3 border-[var(--card-border-color)] bg-[var(--bg-void)] overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-all duration-300 ease-out group-hover:brightness-110"
                />
              </div>

              {/* Card Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--text-cloud)] mb-1">
                    {m.name}
                  </h3>
                  <div className="font-mono text-xs text-[var(--accent-orange)] mb-2 font-semibold uppercase">
                    {m.role}
                  </div>
                  <p className="font-sans text-xs text-[var(--text-muted)] font-normal leading-relaxed">
                    {m.cred}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
