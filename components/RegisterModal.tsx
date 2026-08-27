"use client";

import React, { useState } from "react";
import { X, Flame, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

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
      
      <div className="relative w-full max-w-md rounded-xl border border-[#222632] bg-[#12141a] p-6 text-[#ededed]">
        
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 text-[#8a8f9d] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-6 w-6 text-[#ff5500]" />
              <h3 className="font-heading text-xl font-black text-white">
                Register for Apogee 2027
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs font-bold text-[#8a8f9d] uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kasun Perera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-[#262b3a] bg-[#0a0a0c] p-3 text-sm text-white placeholder-[#8a8f9d]/50 focus:outline-none focus:border-[#ff5500]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-[#8a8f9d] uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. student@univ.ac.lk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-[#262b3a] bg-[#0a0a0c] p-3 text-sm text-white placeholder-[#8a8f9d]/50 focus:outline-none focus:border-[#ff5500]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-[#8a8f9d] uppercase mb-1">
                  University or School
                </label>
                <input
                  type="text"
                  placeholder="e.g. University of Moratuwa"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full rounded-lg border border-[#262b3a] bg-[#0a0a0c] p-3 text-sm text-white placeholder-[#8a8f9d]/50 focus:outline-none focus:border-[#ff5500]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-[#8a8f9d] uppercase mb-1">
                  Track
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full rounded-lg border border-[#262b3a] bg-[#0a0a0c] p-3 text-xs font-bold text-white focus:outline-none focus:border-[#ff5500]"
                >
                  <option value="Propulsion">Propulsion</option>
                  <option value="Mission Software">Mission Software</option>
                  <option value="Satellite Systems">Satellite Systems</option>
                  <option value="Space Biology">Space Biology</option>
                  <option value="Open Track">Open Track</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 rounded-lg bg-[#ff5500] py-3 font-mono text-sm font-bold text-white hover:bg-[#ff661a] transition-all"
              >
                Confirm Free Registration
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-[#ffc857] mx-auto mb-3" />
            <h3 className="font-heading text-2xl font-black text-white mb-2">
              Registration Confirmed!
            </h3>
            <p className="font-sans text-sm text-[#8a8f9d] mb-6">
              Welcome, <span className="text-white font-bold">{formData.name}</span>. Details sent to <span className="font-mono text-xs text-[#ffc857]">{formData.email}</span>.
            </p>
            <button
              onClick={resetAndClose}
              className="rounded-lg bg-[#ff5500] px-6 py-2 font-mono text-xs font-bold text-white"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
