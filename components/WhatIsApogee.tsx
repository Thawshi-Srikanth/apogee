"use client";

import React from "react";
import Image from "next/image";
import { TelescopeMascot } from "@/components/RetroMascots";

export function WhatIsApogee() {
  return (
    <section id="what" className="relative py-16 sm:py-24 overflow-visible">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Section Header */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-12 text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text-cloud)] uppercase tracking-tight mb-3">
              What Is Apogee
            </h2>
            <p className="font-sans text-lg text-[var(--accent-orange)] font-medium max-w-2xl mx-auto">
              Not a lecture. Not a career fair. A 24-hour space hackathon in Colombo.
            </p>
          </div>

          {/* Body Paragraph Cards */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-7 space-y-4 font-sans text-base sm:text-lg text-[var(--text-cloud)] leading-relaxed">
            <p className="rounded-xl bg-[var(--bg-card)] card-border p-6 card-shadow">
              Apogee is 24 hours. One weekend in Colombo. Teams of Sri Lankan students building real space-tech projects. Satellites, mission software, rover systems, orbital mechanics tools, whatever you can ship.
            </p>

            <p className="rounded-xl bg-[var(--bg-card)] card-border p-6 font-medium text-[var(--accent-yellow)] card-shadow">
              No fluff talks. No "networking sessions." You show up, you build, you demo.
            </p>
          </div>

          {/* Telescope Character (On Land) & 8-Bit Graphic */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <TelescopeMascot size={260} className="transform hover:scale-105 transition-transform" />
          </div>

        </div>

      </div>
    </section>
  );
}
