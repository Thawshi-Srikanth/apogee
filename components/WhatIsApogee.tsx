"use client";

import React from "react";
import Image from "next/image";

export function WhatIsApogee() {
  return (
    <section id="what" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Section Header */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12">
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[var(--text-cloud)] uppercase mb-2">
              What Is Apogee
            </h2>
            <p className="font-sans text-lg text-[#ff5500] font-bold">
              Not a lecture. Not a career fair. A 24-hour space hackathon in Colombo.
            </p>
          </div>

          {/* Body Paragraph Cards */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-8 space-y-4 font-sans text-base sm:text-lg text-[var(--text-cloud)] leading-relaxed">
            <p className="rounded-xl bg-[var(--bg-card)] card-border p-6 card-shadow">
              Apogee is 24 hours. One weekend in Colombo. Teams of Sri Lankan students building real space-tech projects. Satellites, mission software, rover systems, orbital mechanics tools, whatever you can ship.
            </p>

            <p className="rounded-xl bg-[var(--bg-card)] card-border p-6 font-bold text-[var(--accent-yellow)] card-shadow">
              No fluff talks. No "networking sessions." You show up, you build, you demo.
            </p>
          </div>

          {/* 8-Bit Pixel Satellite Graphic */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] rounded-3xl card-border bg-black p-3 card-shadow">
              <Image
                src="/8bit_satellite.jpg"
                alt="8-Bit Pixel Satellite Graphic"
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
