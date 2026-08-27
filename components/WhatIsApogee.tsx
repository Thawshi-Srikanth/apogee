"use client";

import React from "react";
import Image from "next/image";

export function WhatIsApogee() {
  return (
    <section id="what" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Header Tag spanning full width */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12">
            <div className="mb-2 inline-block font-mono text-xs font-bold text-[var(--accent-orange)] uppercase tracking-wider">
              // WHAT IS APOGEE
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[var(--text-cloud)]">
              Not a lecture. Not a career fair. <span className="text-[var(--accent-orange)]">A hackathon.</span>
            </h2>
          </div>

          {/* Body Paragraph Cards: Spans 4 cols on mobile, 8 on tablet, 8 on desktop */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-8 space-y-4 font-sans text-base sm:text-lg text-[var(--text-cloud)] leading-relaxed">
            <p className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 shadow-sm">
              Apogee is 24 hours. One weekend in Colombo. Teams of Sri Lankan students building real space-tech projects. Satellites, mission software, rover systems, orbital mechanics tools, whatever you can ship.
            </p>

            <p className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 font-bold text-[var(--accent-yellow)] shadow-sm">
              No fluff talks. No "networking sessions." You show up, you build, you demo.
            </p>
          </div>

          {/* Retro Rocket Graphic: Spans 4 cols on mobile, 8 on tablet, 4 on desktop */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] rounded-3xl border-4 border-black bg-black p-3 shadow-[8px_8px_0px_0px_#000]">
              <Image
                src="/retro_space_rocket.jpg"
                alt="Retro Space Rocket Graphic"
                width={280}
                height={280}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
