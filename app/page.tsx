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
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-void)] text-[var(--text-cloud)] selection:bg-[var(--accent-orange)] selection:text-black transition-colors">
      {/* Navbar */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Content Sections with Framer Motion scroll animations */}
      <main className="flex-grow">
        
        {/* Section 1: Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Hero onOpenRegister={handleOpenRegister} />
        </motion.div>

        {/* Dedicated Countdown Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <CountdownSection />
        </motion.div>

        {/* Section 2: What Is Apogee */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <WhatIsApogee />
        </motion.div>

        {/* Section 3: Why Apogee */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <WhyApogee />
        </motion.div>

        {/* Section 4: Tracks / Themes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Tracks />
        </motion.div>

        {/* Section 5: Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Timeline />
        </motion.div>

        {/* Section 6: Speakers / Mentors */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Speakers />
        </motion.div>

        {/* Section 7: Prizes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Prizes />
        </motion.div>

        {/* Section 8: FAQ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <FAQ />
        </motion.div>

        {/* Section 9: Sponsors / Partners */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Sponsors />
        </motion.div>

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
