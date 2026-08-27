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
    },
    {
      name: "Mission Software",
      icon: Code2,
      desc: "Build reliable flight software, ground station control, or live satellite telemetry dashboards.",
      badge: "TRACK 02",
      color: "var(--accent-cyan)",
    },
    {
      name: "Satellite Systems",
      icon: Satellite,
      desc: "Create small-satellite payloads, communications arrays, or constellation controllers.",
      badge: "TRACK 03",
      color: "var(--accent-yellow)",
    },
    {
      name: "Space Biology",
      icon: Dna,
      desc: "Develop life-support systems, bio-reactors, or extreme environment habitats.",
      badge: "TRACK 04",
      color: "var(--accent-pink)",
    },
    {
      name: "Open Track",
      icon: Compass,
      desc: "Anything space-tech. If it belongs in orbit or beyond, it counts.",
      badge: "TRACK 05",
      color: "var(--accent-cyan)",
    },
  ];

  return (
    <section id="tracks" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      <div className="mb-4 inline-block font-mono text-xs font-bold text-[var(--accent-pink)] uppercase tracking-wider">
        // TRACKS
      </div>

      <h2 className="font-heading text-3xl sm:text-4xl font-black text-[var(--text-cloud)] mb-8">
        Pick your <span className="text-[var(--accent-yellow)]">orbit.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map((track, idx) => {
          const IconComp = track.icon;
          return (
            <div
              key={idx}
              className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-5 flex flex-col justify-between hover:border-[var(--accent-orange)] transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="rounded font-mono text-[10px] font-bold px-2 py-0.5 text-black uppercase"
                    style={{ backgroundColor: track.color }}
                  >
                    {track.badge}
                  </span>
                  <IconComp className="h-5 w-5" style={{ color: track.color }} />
                </div>

                <h3 className="font-heading text-xl font-bold text-[var(--text-cloud)] mb-2">
                  {track.name}
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-normal">
                  {track.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
