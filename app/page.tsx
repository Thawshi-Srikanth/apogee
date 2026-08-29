"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
import { CrossStripeTicker } from "@/components/CrossStripeTicker";
import { DevButton } from "@/components/DevButton";
import { DevDrawer } from "@/components/DevDrawer";
import { StarryBackground } from "@/components/StarryBackground";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};


export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenRegister = () => setIsRegisterOpen(true);
  const handleCloseRegister = () => setIsRegisterOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-void)] text-[var(--text-cloud)] selection:bg-[var(--accent-orange)] selection:text-black transition-colors overflow-x-hidden">
      {/* Starry Background */}
      <StarryBackground />

      {/* Navbar */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Content Sections with Framer Motion scroll animations */}
      <main className="relative z-10 flex-grow">
        
        {/* Section 1: Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Hero onOpenRegister={handleOpenRegister} />
        </motion.div>

        {/* Diagonal Cross-Stripe Ticker Tape Banner 1 */}
        <CrossStripeTicker
          text="REGISTER NOW • APOGEE 2027 • SRI LANKA'S 1ST 24-HR SPACE HACKATHON • COLOMBO • BUILD REAL SPACE-TECH • "
          bgColor="bg-[#FFC857]"
          textColor="text-black"
          rotation="-rotate-2 sm:-rotate-3"
          direction="left"
        />

        {/* Section 2: Countdown Timer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <CountdownSection />
        </motion.div>

        {/* Section 3: What is Apogee */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <WhatIsApogee />
        </motion.div>

        {/* Section 4: Why Apogee */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <WhyApogee />
        </motion.div>

        {/* Diagonal Cross-Stripe Ticker Tape Banner 2 */}
        <CrossStripeTicker
          text="HACKATHON TRACKS • SATELLITE TECH • AI & DEEP SPACE • ORBITAL SYSTEMS • GROUND STATIONS • "
          bgColor="bg-[var(--accent-orange)]"
          textColor="text-black"
          rotation="rotate-2 sm:rotate-3"
          direction="right"
        />

        {/* Section 5: Challenge Tracks */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Tracks />
        </motion.div>

        {/* Section 6: Interactive Slingshot Trajectory Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Timeline />
        </motion.div>

        {/* Section 7: Keynote Speakers / Judges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Speakers />
        </motion.div>

        {/* Section 8: Prize Pool */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Prizes />
        </motion.div>

        {/* Section 9: FAQ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <FAQ />
        </motion.div>

        {/* Section 10: Sponsors / Partners */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Sponsors />
        </motion.div>

      </main>

      {/* Section 11: Final CTA & Footer */}
      <FooterCTA onOpenRegister={handleOpenRegister} />

      {/* Interactive Registration Modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
      />

      {/* Trajectory Dev Drawer & Floating Trigger Button */}
      <DevButton />
      <DevDrawer />
    </div>
  );
}
