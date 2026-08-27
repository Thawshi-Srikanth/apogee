"use client";

import React from "react";
import { Rocket, Code2, Satellite, Dna, Compass } from "lucide-react";

export function Tracks() {
  const tracks = [
    {
      name: "Propulsion",
      icon: Rocket,
      desc: "Design something that gets mass from A to B in space, efficiently.",
      color: "var(--accent-orange)",
      span: "col-span-4 sm:col-span-4 lg:col-span-4",
    },
    {
      name: "Mission Software",
      icon: Code2,
      desc: "Build reliable flight software, ground station control, or live satellite telemetry dashboards.",
      color: "var(--accent-cyan)",
      span: "col-span-4 sm:col-span-4 lg:col-span-4",
    },
    {
      name: "Satellite Systems",
      icon: Satellite,
      desc: "Create small-satellite payloads, communications arrays, or constellation controllers.",
      color: "var(--accent-yellow)",
      span: "col-span-4 sm:col-span-4 lg:col-span-4",
    },
    {
      name: "Space Biology",
      icon: Dna,
      desc: "Develop life-support systems, bio-reactors, or extreme environment habitats.",
      color: "var(--accent-pink)",
      span: "col-span-4 sm:col-span-4 lg:col-span-6",
    },
    {
      name: "Open Track",
      icon: Compass,
      desc: "Anything space-tech. If it belongs in orbit or beyond, it counts.",
      color: "var(--accent-cyan)",
      span: "col-span-4 sm:col-span-8 lg:col-span-6",
    },
  ];

  return (
    <section id="tracks" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Header */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12">
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[var(--text-cloud)] uppercase mb-2">
              Tracks
            </h2>
            <p className="font-sans text-lg text-[#00f0ff] font-bold">
              Pick your orbit. Choose the challenge that matches your team's skills.
            </p>
          </div>

          {/* Track Cards */}
          {tracks.map((track, idx) => {
            const IconComp = track.icon;
            return (
              <div
                key={idx}
                className={`${track.span} rounded-xl bg-[var(--bg-card)] card-border p-6 flex flex-col justify-between card-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-2xl font-bold text-[var(--text-cloud)]">
                      {track.name}
                    </h3>
                    <IconComp className="h-6 w-6" style={{ color: track.color }} />
                  </div>

                  <p className="font-sans text-base text-[var(--text-muted)] leading-relaxed">
                    {track.desc}
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
