"use client";

import React from "react";

export function Sponsors() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* 4-8-12 Master Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8">
          
          <div className="col-span-4 sm:col-span-8 lg:col-span-12">
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[var(--text-cloud)] uppercase mb-2">
              Partners & Supporters
            </h2>
            <p className="font-sans text-lg text-[#ffc857] font-bold mb-6">
              Backed by people who build real space hardware and software.
            </p>
            <p className="font-mono text-xs text-[var(--text-muted)] rounded-lg bg-[var(--bg-card)] border-2 border-black p-4 inline-block shadow-sm max-w-xl">
              In discussion with ACCIMT, regional space bodies, and local universities.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
