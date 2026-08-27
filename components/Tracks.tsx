"use client";

import React from "react";
import { Rocket, Code2, Satellite, Dna, Compass } from "lucide-react";

export function Tracks() {
  const tracks = [
    {
      name: "Propulsion",
      icon: Rocket,
      desc: "Design something that gets mass from A to B in space, efficiently.",
      badge: "TRACK 01",
      color: "var(--accent-orange)",
      span: "col-span-4 sm:col-span-4 lg:col-span-4",
    },
    {
      name: "Mission Software",
      icon: Code2,
      desc: "Build reliable flight software, ground station control, or live satellite telemetry dashboards.",
      badge: "TRACK 02",
      color: "var(--accent-cyan)",
      span: "col-span-4 sm:col-span-4 lg:col-span-4",
    },
    {
      name: "Satellite Systems",
      icon: Satellite,
      desc: "Create small-satellite payloads, communications arrays, or constellation controllers.",
      badge: "TRACK 03",
      color: "var(--accent-yellow)",
      span: "col-span-4 sm:col-span-4 lg:col-span-4",
    },
    {
      name: "Space Biology",
      icon: Dna,
      desc: "Develop life-support systems, bio-reactors, or extreme environment habitats.",
      badge: "TRACK 04",
      color: "var(--accent-pink)",
      span: "col-span-4 sm:col-span-4 lg:col-span-6",
    },
    {
      name: "Open Track",
      icon: Compass,
      desc: "Anything space-tech. If it belongs in orbit or beyond, it counts.",
      badge: "TRACK 05",
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
            <div className="mb-2 inline-block font-mono text-xs font-bold text-[var(--accent-pink)] uppercase tracking-wider">
              // TRACKS
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[var(--text-cloud)]">
              Pick your <span className="text-[var(--accent-yellow)]">orbit.</span>
            </h2>
          </div>

          {/* Track Cards */}
          {tracks.map((track, idx) => {
            const IconComp = track.icon;
            return (
              <div
                key={idx}
                className={`${track.span} rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 flex flex-col justify-between hover:border-[var(--accent-orange)] transition-colors shadow-sm`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="rounded font-mono text-[10px] font-bold px-2 py-0.5 text-black uppercase"
                      style={{ backgroundColor: track.color }}
                    >
                      {track.badge}
                    </span>
                    <IconComp className="h-6 w-6" style={{ color: track.color }} />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[var(--text-cloud)] mb-2">
                    {track.name}
                  </h3>
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
