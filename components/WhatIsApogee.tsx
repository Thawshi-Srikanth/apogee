"use client";

import React from "react";
import { TelescopeMascot } from "@/components/RetroMascots";

export function WhatIsApogee() {
  return (
    <section id="what" className="relative py-16 sm:py-24 overflow-visible">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Mascot Image Placed Directly Above Title with Generous Gap */}
        <div className="flex justify-center mb-10 sm:mb-20 w-[180px] sm:w-[260px] mx-auto">
          <TelescopeMascot size={260} />
        </div>

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text-cloud)] uppercase tracking-tight mb-3">
            WHAT IS APOGEE
          </h2>
          <p className="font-sans text-lg sm:text-xl text-[var(--accent-orange)] font-medium max-w-2xl mx-auto">
            Not a lecture. Not a career fair. A 24-hour space hackathon in Colombo.
          </p>
        </div>

        {/* Boxy Justified Text Block with Full Context */}
        <div className="font-sans text-lg sm:text-2xl text-[var(--text-cloud)] leading-relaxed text-justify max-w-3xl mx-auto space-y-4">
          <p className="font-normal">
            Apogee is 24 hours. One weekend in Colombo. Teams of <span className="whitespace-nowrap">Sri Lankan</span> students building real space-tech projects: satellites, flight software, rover control systems, orbital mechanics tools, whatever you ship.
          </p>

          <p className="font-normal text-[var(--text-muted)]">
            It starts with a full week of pre-hackathon preparation, technical workshops, and mentor check-ins leading directly into several intense hardware and software challenges.
          </p>

          <p className="font-medium text-[var(--accent-yellow)] text-center sm:text-justify">
            No fluff talks. No "networking sessions." You show up, you build, you demo. Organized by SEDS Sri Lanka & SEDS SLIIT.
          </p>
        </div>

      </div>
    </section>
  );
}
