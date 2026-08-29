"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function SatBoyMascot({
  className = "",
  bubbleText,
  size = 120,
}: {
  className?: string;
  bubbleText?: string;
  size?: number;
}) {
  return (
    <div className={`relative inline-flex flex-col items-center group hover:scale-105 transition-transform ${className}`}>
      {bubbleText && (
        <div className="mb-2 rounded-lg border-2 border-black bg-[#00F0FF] px-2.5 py-1 font-mono text-xs font-black uppercase text-black shadow-[3px_3px_0px_0px_#000] z-10 whitespace-nowrap">
          {bubbleText}
        </div>
      )}
      <div className="relative filter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        <Image
          src="/character/sat-boy.png"
          alt="Sat Boy Character Mascot"
          width={size}
          height={size}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function MonitorMascot({ className = "", bubbleText }: { className?: string; bubbleText?: string }) {
  return (
    <div className={`relative inline-flex flex-col items-center group hover:scale-105 transition-transform ${className}`}>
      {bubbleText && (
        <div className="mb-1 rounded-lg border-2 border-black bg-[#FF5500] px-2 py-0.5 font-mono text-[10px] font-black uppercase text-white shadow-[2px_2px_0px_0px_#000]">
          {bubbleText}
        </div>
      )}
      <div className="relative rounded-2xl border-3 border-black bg-[#FFC857] p-3 shadow-[4px_4px_0px_0px_#000] flex flex-col items-center">
        {/* Antenna */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="h-3 w-1 rounded-full border border-black bg-[#00F0FF]" />
          <div className="h-3 w-1 rounded-full border border-black bg-[#FF0055]" />
        </div>
        {/* Screen */}
        <div className="h-14 w-16 rounded-xl border-2 border-black bg-black p-1.5 flex flex-col justify-between items-center">
          <div className="flex gap-2 mt-1">
            <span className="h-2 w-2 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="h-2 w-2 rounded-full bg-[#FF5500]" />
          </div>
          {/* Happy face */}
          <div className="font-mono text-[10px] font-black text-[#00F0FF]">
            LIVE
          </div>
          <div className="h-1 w-8 rounded bg-[#FFC857]" />
        </div>
        {/* Knobs */}
        <div className="mt-1.5 flex w-full justify-between items-center px-1">
          <div className="h-2 w-2 rounded-full border border-black bg-[#FF0055]" />
          <div className="flex gap-0.5">
            <div className="h-1.5 w-1.5 rounded-full border border-black bg-black" />
            <div className="h-1.5 w-1.5 rounded-full border border-black bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function GameboyMascot({ className = "", bubbleText }: { className?: string; bubbleText?: string }) {
  return (
    <div className={`relative inline-flex flex-col items-center group hover:scale-105 transition-transform ${className}`}>
      {bubbleText && (
        <div className="mb-1 rounded-lg border-2 border-black bg-[#00F0FF] px-2 py-0.5 font-mono text-[10px] font-black uppercase text-black shadow-[2px_2px_0px_0px_#000]">
          {bubbleText}
        </div>
      )}
      <div className="relative rounded-2xl border-3 border-black bg-[#00F0FF] p-3 shadow-[4px_4px_0px_0px_#000] flex flex-col items-center w-20">
        {/* Screen */}
        <div className="h-12 w-14 rounded-lg border-2 border-black bg-[#FFC857] p-1 flex flex-col justify-center items-center">
          <div className="font-mono text-xs font-black text-black">
            {`^  ^`}
          </div>
          <div className="font-mono text-[9px] font-black text-black">
            \__/
          </div>
        </div>
        {/* Buttons */}
        <div className="mt-2 flex w-full justify-between items-center px-1">
          {/* D-Pad */}
          <div className="relative h-4 w-4 bg-black rounded-sm flex items-center justify-center">
            <div className="h-1.5 w-4 bg-black absolute" />
            <div className="h-4 w-1.5 bg-black absolute" />
          </div>
          {/* A B Buttons */}
          <div className="flex gap-1">
            <div className="h-2.5 w-2.5 rounded-full border border-black bg-[#FF0055]" />
            <div className="h-2.5 w-2.5 rounded-full border border-black bg-[#FF5500]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SpaceHatMascot({ className = "", bubbleText }: { className?: string; bubbleText?: string }) {
  return (
    <div className={`relative inline-flex flex-col items-center group hover:scale-105 transition-transform ${className}`}>
      {bubbleText && (
        <div className="mb-1 rounded-lg border-2 border-black bg-[#FFC857] px-2 py-0.5 font-mono text-[10px] font-black uppercase text-black shadow-[2px_2px_0px_0px_#000]">
          {bubbleText}
        </div>
      )}
      <div className="relative rounded-full border-3 border-black bg-[#FF5500] p-3 shadow-[4px_4px_0px_0px_#000] flex items-center justify-center h-16 w-16">
        <div className="h-10 w-10 rounded-full border-2 border-black bg-[#00F0FF] flex flex-col items-center justify-center">
          <span className="font-mono text-xs font-black text-black">{`o  o`}</span>
          <span className="font-mono text-[8px] font-black text-black">--</span>
        </div>
      </div>
    </div>
  );
}

export function RocketMascot({
  className = "",
  size = 180,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Image
          src="/character/rocket.png"
          alt="Rocket Character"
          width={size}
          height={size}
          style={{ width: "100%", height: "auto" }}
          className="object-contain filter drop-shadow-[0_10px_15px_rgba(255,85,0,0.4)]"
        />
      </motion.div>
    </div>
  );
}

export function RoverMascot({
  className = "",
  size = 180,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <Image
        src="/character/rover.png"
        alt="Rover Character on Land"
        width={size}
        height={size}
        style={{ width: "100%", height: "auto" }}
        className="object-contain filter drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]"
      />
    </div>
  );
}

export function TelescopeMascot({
  className = "",
  size = 180,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <Image
        src="/character/telescope.png"
        alt="Telescope Character on Land"
        width={size}
        height={size}
        style={{ width: "100%", height: "auto" }}
        className="object-contain"
      />
    </div>
  );
}

