"use client";

import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  CheckmarkCircle02Icon,
  Cancel01Icon,
  AlertCircleIcon,
  Mail01Icon,
  ShieldCheckIcon,
  SecurityCheckIcon,
} from "@hugeicons/core-free-icons";
import { Logo } from "@/components/Logo";

export default function CodeOfConductPage() {
  const expectedBehaviors = [
    "Demonstrate empathy, patience, and kindness toward fellow hackers, mentors, and staff.",
    "Respect differing opinions, skill levels, backgrounds, and engineering approaches.",
    "Give and gracefully receive constructive feedback aimed at improving project quality.",
    "Acknowledge and credit original work, open-source libraries, and team contributions.",
    "Strive for academic and engineering integrity across all hackathon deliverables.",
  ];

  const unacceptableBehaviors = [
    "Harassment, intimidation, offensive verbal comments, or discriminatory jokes.",
    "Sexualized language, inappropriate imagery, or unwelcome personal attention.",
    "Trolling, personal attacks, or public/private harassment of any individual.",
    "Plagiarism, code theft, or intentional sabotage of another team's repository.",
    "Publishing private personal information (doxxing) without explicit permission.",
  ];

  const enforcementSteps = [
    {
      title: "Informal Resolution",
      tag: "01/",
      color: "text-[var(--accent-cyan)]",
      desc: "For minor concerns or misunderstandings, organizers speak privately with involved parties to resolve issues constructively and clarify expectations.",
    },
    {
      title: "Official Warning",
      tag: "02/",
      color: "text-[var(--accent-yellow)]",
      desc: "For clear policy violations, organizers issue a formal written notice specifying the violation and requiring immediate behavioral compliance.",
    },
    {
      title: "Disqualification & Removal",
      tag: "03/",
      color: "text-[var(--accent-pink)]",
      desc: "For severe, repeated, or safety-impacting violations, organizers will revoke hackathon eligibility, prize consideration, and venue/platform access.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-cloud)] selection:bg-[var(--accent-orange)] selection:text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Header Navigation */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b-4 border-[var(--card-border-color)]">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--bg-card)] card-border font-mono text-xs sm:text-sm font-bold uppercase text-[var(--text-cloud)] card-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4 text-[var(--accent-cyan)]" />
            BACK TO HOMEPAGE
          </Link>
        </div>

        {/* Hero Banner Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md bg-[var(--accent-yellow)] text-black font-mono text-xs font-black uppercase tracking-wider">
            <HugeiconsIcon icon={SecurityCheckIcon} className="h-4 w-4" />
            OFFICIAL POLICY • APOGEE 2027
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-cloud)] uppercase tracking-tight mb-4">
            CODE OF CONDUCT
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[var(--accent-orange)] font-medium max-w-3xl leading-relaxed">
            Fostering an inclusive, safe, and high-impact space technology hackathon environment for all participants in Sri Lanka.
          </p>
        </div>

        {/* Section 1: Our Pledge */}
        <div className="mb-16 p-8 rounded-2xl bg-[var(--bg-card)] card-border card-shadow border-l-8 border-l-[var(--accent-cyan)]">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm font-black text-[var(--accent-cyan)] uppercase tracking-wider">
              01/
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[var(--text-cloud)]">
              OUR PLEDGE
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-[var(--text-cloud)]/90 leading-relaxed mb-4">
            We as organizers, mentors, and participants of <strong>Apogee 2027</strong> pledge to make participation in our 24-hour space hackathon a harassment-free experience for everyone: regardless of age, body size, visible or invisible disability, ethnicity, gender identity, level of experience, nationality, race, religion, or technical stack.
          </p>
          <p className="font-sans text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            We pledge to interact in ways that build an open, welcoming, diverse, inclusive, and healthy engineering community.
          </p>
        </div>

        {/* Section 2: Expected vs Unacceptable Conduct (2 Column Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Expected Conduct */}
          <div className="p-8 rounded-2xl bg-[var(--bg-card)] card-border card-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-white/10">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} className="h-7 w-7 text-[#00e676]" />
                <div>
                  <span className="font-mono text-xs font-bold text-[#00e676] uppercase">02/</span>
                  <h2 className="font-heading text-xl sm:text-2xl font-extrabold uppercase text-[var(--text-cloud)]">
                    EXPECTED BEHAVIOR
                  </h2>
                </div>
              </div>
              <ul className="space-y-4">
                {expectedBehaviors.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#00e676] shrink-0 mt-2" />
                    <span className="font-sans text-sm sm:text-base text-[var(--text-cloud)] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 font-mono text-xs text-[#00e676] font-bold uppercase tracking-wider">
              ✓ ENCOURAGED COMMUNITY PRACTICE
            </div>
          </div>

          {/* Unacceptable Conduct */}
          <div className="p-8 rounded-2xl bg-[var(--bg-card)] card-border card-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-white/10">
                <HugeiconsIcon icon={Cancel01Icon} className="h-7 w-7 text-[var(--accent-pink)]" />
                <div>
                  <span className="font-mono text-xs font-bold text-[var(--accent-pink)] uppercase">03/</span>
                  <h2 className="font-heading text-xl sm:text-2xl font-extrabold uppercase text-[var(--text-cloud)]">
                    UNACCEPTABLE BEHAVIOR
                  </h2>
                </div>
              </div>
              <ul className="space-y-4">
                {unacceptableBehaviors.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent-pink)] shrink-0 mt-2" />
                    <span className="font-sans text-sm sm:text-base text-[var(--text-cloud)] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 font-mono text-xs text-[var(--accent-pink)] font-bold uppercase tracking-wider">
              ✕ ZERO TOLERANCE POLICY
            </div>
          </div>

        </div>

        {/* Section 3: Enforcement & Response Policy */}
        <div className="mb-16 p-8 rounded-2xl bg-[var(--bg-card)] card-border card-shadow">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-white/10">
            <HugeiconsIcon icon={ShieldCheckIcon} className="h-7 w-7 text-[var(--accent-yellow)]" />
            <div>
              <span className="font-mono text-xs font-bold text-[var(--accent-yellow)] uppercase">04/</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[var(--text-cloud)]">
                ENFORCEMENT & RESPONSES
              </h2>
            </div>
          </div>
          <p className="font-sans text-base text-[var(--text-cloud)]/90 leading-relaxed mb-6">
            When an incident report is received, Apogee organizers will review the situation promptly and impartially. Participants requested to stop non-compliant behavior are expected to comply immediately.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enforcementSteps.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[var(--bg-void)] card-border card-shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3">
                    <span className={`font-mono text-xs font-black uppercase tracking-wider ${item.color}`}>
                      {item.tag} {item.title}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Reporting Box */}
        <div className="mb-16 p-8 rounded-2xl bg-[var(--bg-card)] card-border card-shadow border-l-8 border-l-[var(--accent-orange)]">
          <div className="flex items-center gap-3 mb-4">
            <HugeiconsIcon icon={AlertCircleIcon} className="h-7 w-7 text-[var(--accent-orange)]" />
            <div>
              <span className="font-mono text-xs font-bold text-[var(--accent-orange)] uppercase">05/</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[var(--text-cloud)]">
                REPORT AN INCIDENT
              </h2>
            </div>
          </div>
          <p className="font-sans text-base text-[var(--text-cloud)]/90 leading-relaxed mb-8 max-w-3xl">
            If you experience or witness unacceptable behavior, or have any concerns, please contact an Apogee organizer immediately. All reports are handled with complete confidentiality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[var(--bg-void)] card-border card-shadow-sm flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-[var(--accent-orange)] uppercase mb-2">
                  CHANNEL 01
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--text-cloud)] mb-2 uppercase">
                  ONSITE HELP DESK
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Visit the main Help Desk at the Colombo hackathon venue to speak privately with an event organizer.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[var(--bg-void)] card-border card-shadow-sm flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-[var(--accent-cyan)] uppercase mb-2">
                  CHANNEL 02
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--text-cloud)] mb-2 uppercase">
                  DISCORD MODERATORS
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
                  Direct message any @Organizer or staff member on the official Apogee Discord server for immediate assistance.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[var(--bg-void)] card-border card-shadow-sm flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-[var(--accent-yellow)] uppercase mb-2">
                  CHANNEL 03
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--text-cloud)] mb-2 uppercase">
                  EMAIL SUPPORT
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  Send a confidential report to <span className="text-[var(--text-cloud)] font-medium">coc@apogee.lk</span>.
                </p>
              </div>
              <a
                href="mailto:coc@apogee.lk"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent-orange)] text-black font-mono text-xs font-black uppercase tracking-wider hover:opacity-90 active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
              >
                <HugeiconsIcon icon={Mail01Icon} className="h-4 w-4" />
                SEND EMAIL
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="text-center border-t-4 border-[var(--card-border-color)] pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--accent-orange)] text-black font-mono text-sm font-black uppercase tracking-wider card-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
          >
            ← RETURN TO APOGEE HOMEPAGE
          </Link>
        </div>

      </div>
    </div>
  );
}
