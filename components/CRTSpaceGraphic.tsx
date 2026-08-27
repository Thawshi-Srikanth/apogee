"use client";

import React from "react";

export function CRTSpaceGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer retro CRT monitor frame */}
      <div className="relative w-full max-w-lg rounded-2xl border-4 border-black bg-[#120B24] p-4 shadow-[8px_8px_0px_0px_#000000] transition-transform duration-200 hover:scale-[1.01]">
        
        {/* Top CRT screen bezel controls */}
        <div className="mb-3 flex items-center justify-between border-b-4 border-black pb-2 px-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border-2 border-black bg-[#FF5500]" />
            <span className="h-3 w-3 rounded-full border-2 border-black bg-[#FFC857]" />
            <span className="h-3 w-3 rounded-full border-2 border-black bg-[#4CC9F0]" />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFC857]">
            APOGEE CRT-2027 // SLST
          </span>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#00F0FF] animate-ping" />
            <span className="font-mono text-[10px] font-bold text-[#00F0FF]">LIVE</span>
          </div>
        </div>

        {/* CRT Screen content area */}
        <div className="relative overflow-hidden rounded-xl border-4 border-black bg-black p-6 font-mono">
          {/* Retro CRT scanline effect overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,38,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] opacity-70" />

          {/* Saturated retro text stack */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-2 font-mono text-[11px] font-black tracking-widest uppercase text-[#FFC857]">
              MISSION CONTROL • COLOMBO
            </div>

            {/* Stacked Rainbow Text */}
            <div className="my-2 flex flex-col font-mono text-3xl font-black leading-none tracking-tighter uppercase sm:text-4xl">
              <span className="text-[#FF5500] drop-shadow-[2px_2px_0px_#000]">ORBIT</span>
              <span className="text-[#FFC857] drop-shadow-[2px_2px_0px_#000]">LAUNCH</span>
              <span className="text-[#F72585] drop-shadow-[2px_2px_0px_#000]">APOGEE</span>
              <span className="text-[#00F0FF] drop-shadow-[2px_2px_0px_#000]">2027</span>
            </div>

            {/* Retro Vector Space Rocket Illustration */}
            <div className="relative my-4 flex items-center justify-center">
              <svg
                width="140"
                height="120"
                viewBox="0 0 140 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[4px_4px_0px_#000]"
              >
                {/* Star / Spark Sparks */}
                <path d="M15 25 L20 15 L25 25 L35 30 L25 35 L20 45 L15 35 L5 30 Z" fill="#FFC857" stroke="#000" strokeWidth="2.5" />
                <path d="M115 15 L120 5 L125 15 L135 20 L125 25 L120 35 L115 25 L105 20 Z" fill="#F72585" stroke="#000" strokeWidth="2.5" />
                <path d="M110 80 L113 72 L116 80 L124 83 L116 86 L113 94 L110 86 L102 83 Z" fill="#00F0FF" stroke="#000" strokeWidth="2.5" />

                {/* Rocket Body */}
                <path d="M70 10 C85 30 88 65 88 80 L52 80 C52 65 55 30 70 10 Z" fill="#F4EFE6" stroke="#000" strokeWidth="3" />
                {/* Nose Cone */}
                <path d="M70 10 C78 20 82 32 82 42 L58 42 C58 32 62 20 70 10 Z" fill="#FF5500" stroke="#000" strokeWidth="3" />
                {/* Porthole Window */}
                <circle cx="70" cy="56" r="10" fill="#00F0FF" stroke="#000" strokeWidth="3" />
                <circle cx="70" cy="56" r="4" fill="#FFFFFF" />
                {/* Left Fin */}
                <path d="M52 65 L36 85 L52 82 Z" fill="#F72585" stroke="#000" strokeWidth="3" />
                {/* Right Fin */}
                <path d="M88 65 L104 85 L88 82 Z" fill="#F72585" stroke="#000" strokeWidth="3" />
                {/* Exhaust Flame */}
                <path d="M60 82 L70 115 L80 82 Z" fill="#FFC857" stroke="#000" strokeWidth="3" />
                <path d="M64 82 L70 102 L76 82 Z" fill="#FF5500" />
              </svg>
            </div>

            <div className="inline-block rounded-md border-2 border-black bg-[#FFC857] px-3 py-1 font-mono text-xs font-bold text-black uppercase">
              24-HR STUDENT MISSION
            </div>
          </div>
        </div>

        {/* Bottom monitor knobs & speaker grill */}
        <div className="mt-3 flex items-center justify-between px-2 pt-1 font-mono text-[10px] text-[#A39BB5]">
          <div className="flex gap-1.5">
            <span className="h-4 w-4 rounded-full border-2 border-black bg-[#1E1436]" />
            <span className="h-4 w-4 rounded-full border-2 border-black bg-[#1E1436]" />
          </div>
          <span>SLST: UTC+05:30</span>
        </div>
      </div>
    </div>
  );
}
