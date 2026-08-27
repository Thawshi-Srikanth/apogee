"use client";

import React, { useState } from "react";
import { X, Flame, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/Button";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    track: "Mission Software",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ff5500", "#ffc857", "#00f0ff", "#f72585"],
    });
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      
      <div className="relative w-full max-w-md rounded-2xl border-4 border-black bg-[var(--bg-card)] p-6 text-[var(--text-cloud)] shadow-[10px_10px_0px_0px_#000]">
        
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-white cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Flame className="h-6 w-6 text-[#ff5500]" />
              <h3 className="font-mono text-xs font-bold text-white uppercase">
                REGISTER FOR APOGEE 2027
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kasun Perera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border-3 border-black bg-[var(--bg-void)] p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] font-semibold"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. student@univ.ac.lk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border-3 border-black bg-[var(--bg-void)] p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] font-semibold"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">
                  University or School
                </label>
                <input
                  type="text"
                  placeholder="e.g. University of Moratuwa"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full rounded-xl border-3 border-black bg-[var(--bg-void)] p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] font-semibold"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">
                  Track
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full rounded-xl border-3 border-black bg-[var(--bg-void)] p-3 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)] font-mono"
                >
                  <option value="Propulsion">Propulsion</option>
                  <option value="Mission Software">Mission Software</option>
                  <option value="Satellite Systems">Satellite Systems</option>
                  <option value="Space Biology">Space Biology</option>
                  <option value="Open Track">Open Track</option>
                </select>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="accent" size="md" className="w-full">
                  CONFIRM REGISTRATION →
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-[#ffc857] mx-auto mb-3" />
            <h3 className="font-heading text-xl font-bold text-white mb-2 uppercase">
              PLAYER 1 READY!
            </h3>
            <p className="font-sans text-sm text-[var(--text-muted)] mb-6">
              Welcome, <span className="text-white font-bold">{formData.name}</span>. Details sent to <span className="font-mono text-xs text-[#ffc857]">{formData.email}</span>.
            </p>
            <Button onClick={resetAndClose} variant="primary" size="sm">
              DONE
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
