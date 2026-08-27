"use client";

import React from "react";
import { Flame } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FooterCTAProps {
  onOpenRegister: () => void;
}

export function FooterCTA({ onOpenRegister }: FooterCTAProps) {
  return (
    <footer className="bg-[var(--bg-void)] border-t-4 border-black mt-12 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-8-12 Grid for Final CTA */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-6 text-center mb-16">
          <div className="col-span-4 sm:col-span-8 lg:col-span-12">
            <h2 className="font-heading text-4xl sm:text-6xl font-black text-[var(--text-cloud)] mb-6 uppercase">
              Your rocket doesn't <span className="text-[var(--accent-orange)]">build itself.</span>
            </h2>

            <Button onClick={onOpenRegister} variant="primary" size="lg">
              REGISTER NOW
            </Button>
          </div>
        </div>

        {/* 4-8-12 Grid for Footer Meta */}
        <div className="pt-8 border-t-2 border-black grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 items-center font-mono text-xs text-[var(--text-muted)]">
          <div className="col-span-4 sm:col-span-4 lg:col-span-6 flex items-center gap-2">
            <Flame className="h-4 w-4 text-[var(--accent-orange)]" />
            <span className="font-mono font-bold text-[var(--text-cloud)] uppercase">APOGEE 2027</span>
            <span>• COLOMBO, SRI LANKA</span>
          </div>

          <div className="col-span-4 sm:col-span-4 lg:col-span-6 flex sm:justify-end items-center font-mono text-xs text-[var(--accent-yellow)]">
            <span>contact@apogee.lk</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
