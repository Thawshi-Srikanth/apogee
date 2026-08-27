"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CountdownSection } from "@/components/CountdownSection";
import { WhatIsApogee } from "@/components/WhatIsApogee";
import { WhyApogee } from "@/components/WhyApogee";
import { Tracks } from "@/components/Tracks";
import { Timeline } from "@/components/Timeline";
import { Speakers } from "@/components/Speakers";
import { Prizes } from "@/components/Prizes";
import { FAQ } from "@/components/FAQ";
import { Sponsors } from "@/components/Sponsors";
import { FooterCTA } from "@/components/FooterCTA";
import { RegisterModal } from "@/components/RegisterModal";

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenRegister = () => setIsRegisterOpen(true);
  const handleCloseRegister = () => setIsRegisterOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-void)] text-[var(--text-cloud)] selection:bg-[var(--accent-orange)] selection:text-black">
      {/* Navbar */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onOpenRegister={handleOpenRegister} />

        {/* Dedicated Countdown Section (Blends with background) */}
        <CountdownSection />

        {/* Section 2: What Is Apogee */}
        <WhatIsApogee />

        {/* Section 3: Why Apogee */}
        <WhyApogee />

        {/* Section 4: Tracks / Themes */}
        <Tracks />

        {/* Section 5: Timeline */}
        <Timeline />

        {/* Section 6: Speakers / Mentors */}
        <Speakers />

        {/* Section 7: Prizes */}
        <Prizes />

        {/* Section 8: FAQ */}
        <FAQ />

        {/* Section 9: Sponsors / Partners */}
        <Sponsors />
      </main>

      {/* Section 10: Final CTA & Footer */}
      <FooterCTA onOpenRegister={handleOpenRegister} />

      {/* Interactive Registration Modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
      />
    </div>
  );
}
