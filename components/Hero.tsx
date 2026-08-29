"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  onOpenRegister: () => void;
}

export function Hero({ onOpenRegister }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll position of the Hero section relative to viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Raw scroll transform
  const rawYLift = useTransform(scrollYProgress, [0, 1, 1], [0, -60, 0]);

  // Apply smooth physics spring to eliminate mouse wheel stutter & lag
  const springY = useSpring(rawYLift, {
    stiffness: 80,
    damping: 18,
    mass: 0.5,
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 overflow-visible z-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Master 4-8-12 Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="relative col-span-4 sm:col-span-8 lg:col-span-7 flex flex-col items-start text-left z-10">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide leading-[1.05] text-[var(--text-cloud)] uppercase mb-6">
              Rocket fuel for <br />
              <span className="text-[#00f0ff]">developers.</span>
            </h1>

            <p className="font-sans text-lg sm:text-2xl text-[var(--text-muted)] font-normal max-w-xl mb-8 leading-relaxed">
              Sri Lanka's 24-hour space hackathon in Colombo. Organized by{" "}
              <span className="font-medium text-[#00f0ff]">SEDS Sri Lanka</span>{" "}
              && <span className="font-medium text-[#ffd000]">SEDS SLIIT</span>.
            </p>

            {/* Prominent Hero CTA Button */}
            <div className="flex items-center gap-4">
              <Button onClick={onOpenRegister} variant="primary" size="lg">
                REGISTER NOW
              </Button>
            </div>
          </div>

          {/* Right Hero Feature: Sat-Boy Main Character Image */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-5 flex justify-center lg:justify-end z-30">
            {/* Outer Layer: Handles GPU Scroll Spring (Y-Axis) without property collisions */}
            <motion.div
              style={{ y: springY }}
              className="relative w-full max-w-[220px] sm:max-w-[360px] flex items-center justify-center transform-gpu will-change-transform z-30"
            >
              {/* Inner Layer: Handles pure GPU Float & Rotation */}
              <motion.div
                animate={{ rotate: [-3, 3, -3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="w-full flex items-center justify-center cursor-pointer transform-gpu"
              >
                <Image
                  src="/character/sat-boy-2.png"
                  alt="Sat-Boy Character Floating in Space"
                  width={360}
                  height={360}
                  style={{ width: "100%", height: "auto" }}
                  className="w-full h-auto object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
