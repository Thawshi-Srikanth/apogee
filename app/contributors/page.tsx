"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowUpRight01Icon,
  GitPullRequestIcon,
  CodeIcon,
  FavouriteIcon,
  GithubIcon,
} from "@hugeicons/core-free-icons";
import { Logo } from "@/components/Logo";

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type: string;
}

const FALLBACK_CONTRIBUTORS: Contributor[] = [
  {
    id: 1,
    login: "Thawshi-Srikanth",
    avatar_url: "https://github.com/Thawshi-Srikanth.png",
    html_url: "https://github.com/Thawshi-Srikanth",
    contributions: 42,
    type: "User",
  },
];

export default function ContributorsPage() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const res = await fetch("https://api.github.com/repos/Thawshi-Srikanth/apogee/contributors");
        if (!res.ok) {
          throw new Error("Failed to fetch contributors");
        }
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setContributors(data);
        } else {
          setContributors(FALLBACK_CONTRIBUTORS);
        }
      } catch (err) {
        console.warn("GitHub API rate-limited or offline. Using default contributors list.", err);
        setError(true);
        setContributors(FALLBACK_CONTRIBUTORS);
      } finally {
        setLoading(false);
      }
    }

    fetchContributors();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-cloud)] selection:bg-[var(--accent-orange)] selection:text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between pb-6 mb-10 border-b-4 border-[var(--card-border-color)]">
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

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-cloud)] uppercase tracking-tight mb-3">
            CONTRIBUTORS
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[var(--accent-orange)] font-medium max-w-2xl mx-auto">
            Engineers, designers, and space enthusiasts who built Apogee 2027.
          </p>
        </div>

        {/* Lead Organizers Banner */}
        <div className="rounded-2xl bg-[var(--bg-card)] card-border p-6 sm:p-10 card-shadow mb-12">
          <div className="flex items-center gap-3 mb-3">
            <HugeiconsIcon icon={FavouriteIcon} className="h-6 w-6 text-[var(--accent-pink)] fill-current" />
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-[var(--text-cloud)]">
              BUILDING SRI LANKA'S SPACE TECH ECOSYSTEM
            </h2>
          </div>
          <p className="font-sans text-base sm:text-lg text-[var(--text-muted)] font-normal leading-relaxed max-w-3xl mb-8">
            Apogee is built as an open-source educational platform by student engineers from SEDS Sri Lanka & SEDS SLIIT. We welcome open-source contributions from anyone passionate about satellite software, web tech, and space engineering.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Thawshi-Srikanth/apogee"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--accent-orange)] text-black font-mono text-xs sm:text-sm font-black uppercase tracking-wider card-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
            >
              <HugeiconsIcon icon={GithubIcon} className="h-5 w-5" />
              VIEW REPOSITORY ON GITHUB
              <HugeiconsIcon icon={ArrowUpRight01Icon} className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Contributors Grid Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b-2 border-white/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[var(--text-cloud)] flex items-center gap-3">
              <span className="font-mono text-sm font-black text-[var(--accent-cyan)]">01/</span>
              PROJECT CONTRIBUTORS
            </h2>
            <span className="font-mono text-xs font-bold text-[var(--text-muted)] uppercase">
              {loading ? "FETCHING..." : `${contributors.length} CONTRIBUTORS`}
            </span>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="rounded-xl bg-[var(--bg-card)] card-border p-6 animate-pulse space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 mx-auto" />
                  <div className="h-4 bg-white/10 rounded w-2/3 mx-auto" />
                  <div className="h-3 bg-white/10 rounded w-1/2 mx-auto" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contributors.map((user) => (
                <a
                  key={user.id}
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl bg-[var(--bg-card)] card-border p-6 flex flex-col items-center text-center card-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <div className="relative mb-4">
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="w-20 h-20 rounded-full border-3 border-black shadow-[3px_3px_0px_0px_#000000] object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-[var(--accent-yellow)] text-black p-1 rounded-full border border-black">
                      <HugeiconsIcon icon={CodeIcon} className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[var(--text-cloud)] group-hover:text-[var(--accent-orange)] transition-colors mb-1">
                    @{user.login}
                  </h3>

                  <div className="font-mono text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-wider">
                    {user.contributions} {user.contributions === 1 ? "COMMIT" : "COMMITS"}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* How to Contribute Section */}
        <div className="rounded-2xl bg-[var(--bg-card)] card-border p-6 sm:p-10 card-shadow mb-16 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-white/10">
            <span className="font-mono text-sm font-black text-[var(--accent-yellow)] uppercase">02/</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[var(--text-cloud)]">
              HOW TO CONTRIBUTE
            </h2>
          </div>

          <p className="font-sans text-base text-[var(--text-cloud)]/90 leading-relaxed">
            We welcome open-source contributions! Whether you want to fix a bug, enhance responsive layouts, add new space-tech tracks, or write documentation:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-sans text-sm">
            <div className="p-5 rounded-xl bg-[var(--bg-void)] card-border">
              <div className="font-mono text-xs font-bold text-[var(--accent-yellow)] uppercase mb-2">
                STEP 01
              </div>
              <h3 className="font-heading text-base font-bold text-[var(--text-cloud)] mb-1 uppercase">
                FORK & CLONE
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Fork the repository on GitHub and clone your local copy to start building features.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--bg-void)] card-border">
              <div className="font-mono text-xs font-bold text-[var(--accent-cyan)] uppercase mb-2">
                STEP 02
              </div>
              <h3 className="font-heading text-base font-bold text-[var(--text-cloud)] mb-1 uppercase">
                CREATE A BRANCH
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Create a feature branch following Neo-Brutalist design tokens and clean code guidelines.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--bg-void)] card-border">
              <div className="font-mono text-xs font-bold text-[var(--accent-pink)] uppercase mb-2">
                STEP 03
              </div>
              <h3 className="font-heading text-base font-bold text-[var(--text-cloud)] mb-1 uppercase">
                SUBMIT A PR
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Open a Pull Request describing your changes. Our team will review and merge your work!
              </p>
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
