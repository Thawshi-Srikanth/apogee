"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  onOpenRegister: () => void;
}

export function Hero({ onOpenRegister }: HeroProps) {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Master 4-8-12 Grid Container */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 8-Bit Arcade HUD Chip with crisp mono numbers */}
            <div className="inline-flex items-center gap-2.5 rounded-lg bg-[var(--bg-card)] card-border px-3.5 py-1.5 font-pixel text-xs font-bold text-[#ffd000] mb-6 card-shadow-sm uppercase">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5500] animate-ping" />
              <span>HIGH SCORE • <span className="font-mono font-black text-white">500,000 LKR</span> PRIZE POOL</span>
            </div>

            {/* Main Bold Silkscreen 8-Bit Pixel Title */}
            <h1 className="font-pixel text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] text-[var(--text-cloud)] uppercase mb-6">
              Rocket fuel for <br />
              <span className="text-[#00f0ff]">developers.</span>
            </h1>

            {/* Clean Readable Subheadline */}
            <p className="font-sans text-lg sm:text-2xl text-[var(--text-muted)] font-medium max-w-xl mb-8 leading-relaxed">
              Sri Lanka's 24-hour space hackathon in Colombo. Building{" "}
              <span className="font-bold text-[#ff5500]">real challenges</span>{" "}
              &&{" "}
              <span className="font-bold text-[#f72585]">real judges</span>.
            </p>

            {/* Prominent Hero CTA Button */}
            <Button onClick={onOpenRegister} variant="primary" size="lg">
              PRESS START → REGISTER NOW
            </Button>

          </div>

          {/* Right 8-Bit Graphic */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] rounded-3xl card-border bg-black p-3 card-shadow crt-scanlines">
              <Image
                src="/8bit_arcade.jpg"
                alt="8-Bit Retro Space Arcade Graphic"
                width={340}
                height={340}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
