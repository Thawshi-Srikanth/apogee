"use client";

import React from "react";
import Image from "next/image";

export function WhatIsApogee() {
  return (
    <section id="what" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      <div className="mb-4 inline-block font-mono text-xs font-bold text-[var(--accent-orange)] uppercase tracking-wider">
        // WHAT IS APOGEE
      </div>

      <h2 className="font-heading text-3xl sm:text-4xl font-black text-[var(--text-cloud)] mb-6">
        Not a lecture. Not a career fair. <span className="text-[var(--accent-orange)]">A hackathon.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-8 space-y-4 font-sans text-base sm:text-lg text-[var(--text-cloud)] leading-relaxed">
          <p className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-5 shadow-sm">
            Apogee is 24 hours. One weekend in Colombo. Teams of Sri Lankan students building real space-tech projects. Satellites, mission software, rover systems, orbital mechanics tools, whatever you can ship.
          </p>

          <p className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] p-5 font-bold text-[var(--accent-yellow)] shadow-sm">
            No fluff talks. No "networking sessions." You show up, you build, you demo.
          </p>
        </div>

        {/* Retro Space Rocket Graphic */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative rounded-2xl border-4 border-black bg-black p-2 shadow-[6px_6px_0px_0px_#000] max-w-[240px]">
            <Image
              src="/retro_space_rocket.jpg"
              alt="Retro Space Rocket Sticker"
              width={240}
              height={240}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
