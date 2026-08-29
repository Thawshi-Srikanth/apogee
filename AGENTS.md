<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Apogee Design System & UI Style Guide for AI Agents

Strict design rules, copywriting standards, and aesthetic guidelines for building UI components in the **Apogee** codebase. All AI agents MUST follow these guidelines to preserve design system integrity and prevent generic or out-of-place UI implementations.

---

## Core Aesthetic Identity
Apogee is Sri Lanka's 1st 24-Hour Space Hackathon.
- **Style Genre:** Neo-Brutalist Space-Tech. High-contrast, tactile, bold typography, hard offset shadows, pixel elements, and retro CRT/Mission Control motifs.
- **Anti-Pattern Guardrail (NO AI SLOP):** 
  - NEVER use generic purple/indigo AI gradients, glossy blue badges, unrequested floating cartoon mascots, or floating stickers unless explicitly requested with provided assets.
  - NEVER use generic SaaS template layout cards without neo-brutalist borders and curated palette tokens.
  - NEVER use unwanted blinking, flashing, or pinging animations (e.g., `animate-ping`, incessant blinking dots) that create visual noise.
  - DO NOT overuse icons. Use icons with restraint and intention—never clutter buttons, badges, or headers with redundant icons.

---

## Tone of Voice, Copywriting & Title Rules

1. **No Corporate Jargon:**
   - NEVER use empty corporate buzzwords like "synergy," "cutting-edge paradigm," "next-gen empowerment," or "scalable solutions."
   - Speak like a real engineer talking to a student builder. Be direct, grounded, and punchy.

2. **Simple & Direct Titles:**
   - Titles MUST be short, clean, and unambiguous.
   - Examples of correct titles: `WHAT IS APOGEE`, `WHY APOGEE`, `TRACKS`, `TIMELINE`, `MENTORS`, `PRIZES`, `FAQ`, `PARTNERS`, `COUNTDOWN`.
   - Avoid long-winded or inflated headings. Keep titles concise and high-impact.

3. **Description Formatting:**
   - Keep section descriptions short (max 1-2 sentences).
   - Use clear, practical statements (e.g., "24 hours. One weekend in Colombo. You show up, you build, you demo.").

4. **No Meaningless Jargon or Inflated Placeholders:**
   - NEVER use inflated or dramatic jargon like "MISSION CONTROL DEV PANEL", "NEO-BRUTALIST MISSION CTRL", or "SIMULATED TIME & TRAJECTORY CONTROLS".
   - Keep titles, subtitles, and button labels simple, practical, and direct (e.g., `Dev Panel`, `Timeline Controls`).

5. **No Unwanted / Fluff Code Comments:**
   - Do NOT add redundant, dramatic, or fluffy code comments (e.g., `/* ── Section 1: Time Scrubber ── */` or `/* Neo-Brutalist Space-Tech Style */`).
   - Keep code clean and self-documenting. Only add comments when explaining non-obvious logic.

---

## Color Palette & CSS Variables
Always use predefined CSS variables from `app/globals.css` so layouts adapt seamlessly between **Dark Mode** (default) and **Light Mode** (`data-theme="light"`).

| CSS Variable | Dark Mode Value | Light Mode Value | Usage |
| :--- | :--- | :--- | :--- |
| `var(--bg-void)` | `#0a0a0c` | `#f5f2eb` | Page main background |
| `var(--bg-card)` | `#12141a` | `#fefcf8` | Cards, modals, containers |
| `var(--text-cloud)` | `#ffffff` | `#262930` | Primary headings & text |
| `var(--text-muted)` | `#9499a8` | `#686d7a` | Subtitles, body descriptions |
| `var(--accent-orange)` | `#ff5500` | `#e64a00` | Primary CTAs, highlights |
| `var(--accent-yellow)` | `#ffd000` / `#ffc857` | `#e6b000` | Accent badges, countdown digits |
| `var(--accent-cyan)` | `#00f0ff` | `#0084a3` | Tech tags, mission software |
| `var(--accent-pink)` | `#ff0055` / `#f72585` | `#d61b6f` | Special tracks, alerts |

---

## Section Layout & Header Standards

### 1. Section Title Sizing & Alignment
All section headers MUST use the standardized display scale and centered layout with generous vertical separation:

```tsx
<div className="col-span-4 sm:col-span-8 lg:col-span-12 text-center mb-8 sm:mb-12">
  <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text-cloud)] uppercase tracking-tight mb-3">
    [SECTION TITLE]
  </h2>
  <p className="font-sans text-lg text-[var(--accent-orange)] font-medium max-w-2xl mx-auto">
    [Short, punchy section description]
  </p>
</div>
```

### 2. Description Weight Rule
- Section subtitles and card descriptions MUST use `font-medium` or `font-normal` (never `font-bold` or heavy solid blocks).
- Subtitle max width MUST be constrained (`max-w-2xl mx-auto`) for optimal readability.

---

## Neo-Brutalist Component Guidelines

### 1. Cards & Containers
- **Borders:** `card-border` (4px solid `var(--card-border-color)`).
- **Hard Offset Shadows:** 
  - Main cards: `card-shadow` (`shadow-[6px_6px_0px_0px_#000000]`)
  - Sub-cards / items: `card-shadow-sm` (`shadow-[4px_4px_0px_0px_#000000]`)
- **Hover Micro-Interactions:** `hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform`

### 2. Buttons (`components/ui/Button.tsx`)
- High contrast, 3px/4px black border, hard offset shadow (`shadow-[4px_4px_0px_0px_#000]`).
- Click state: `active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`.

---

## Component Modularization & Shadcn-Style Architecture

1. **Shadcn-Style Modular Component Architecture:**
   - UI elements MUST be modularized into clean, atomic, reusable primitives (similar to Shadcn UI conventions) placed in `components/ui/` or feature-focused component folders.
   - Avoid monolithic code structures. Extract reusable UI primitives (buttons, cards, badges, drawers, modal overlays, tooltips).

2. **Theme Token Adherence in Modular Primitives:**
   - Every modular component MUST consume Apogee's CSS variable tokens (`var(--bg-card)`, `var(--bg-void)`, `var(--text-cloud)`, `var(--border-card)`, `var(--card-border-color)`).
   - Component primitives should allow custom class extensions via `className` while maintaining strict Neo-Brutalist defaults (hard offset shadows, high contrast borders, tactile click states).

3. **Tabbed Control Panel Conventions (`components/ui/tabs.tsx`):**
   - Complex drawers and control panels MUST use Shadcn-style modular tabbed primitives (`Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`) to separate domain controls into clean tabs (e.g., `SIMULATE` for time scrubbing & presets, `PARAMETERS` for path curvature/orbit radius tuning, `CHECKPOINTS` for node editing).

---

## Animation & Motion Principles

1. **Scroll-Driven Motion:**
   - Use `useScroll` with `useSpring` (`stiffness: 80, damping: 18`) to eliminate mouse wheel stutter.
   - Use `useTransform` with explicit bounds (`[0, 0.5, 1] => [0, -120, 0]`) so elements return to their resting position upon scroll completion.

2. **Dual-Layer Layer Separation (NO Animation Collisions):**
   - **Outer Layer (`motion.div`):** Dedicated exclusively to scroll `y` translation (`style={{ y: springY }}`).
   - **Inner Layer (`motion.div`):** Dedicated exclusively to idle rotation / float (`animate={{ rotate: [-3, 3, -3] }}`).
   - NEVER combine infinite loop `animate={{ y }}` and scroll `style={{ y }}` on the same element.

3. **No Clipping / Overflow:**
   - On sections containing floating character assets or upward scroll lifts, set `overflow-visible` and appropriate `z-index` (`z-20` / `z-30`) so elements are never clipped at section edges.

4. **No Unwanted Blinking or Icon Overuse:**
   - Eliminate distracting `animate-ping` or rapid flashing loops.
   - Use icons sparingly to maintain a clean, high-impact neo-brutalist hierarchy.

---

## Media & Image Handling
- Always use transparent PNGs or SVGs where appropriate.
- Do NOT wrap transparent PNG illustrations in unnecessary colored background boxes unless requested.
- Maintain aspect ratio props in Next.js `<Image />` (`style={{ width: "100%", height: "auto" }}`) to avoid layout shifts.

---

## Theme Compatibility Checklist
When creating or editing ANY component:
- [ ] Uses `var(--text-cloud)` instead of hardcoded `text-white`.
- [ ] Uses `var(--bg-void)` or `var(--bg-card)` instead of hardcoded `bg-black`.
- [ ] SVG icons adapt text fill via `fill-[var(--text-cloud)]`.
- [ ] Card borders use `var(--card-border-color)`.

---

## Attributions & Open Source Registry Rule
Whenever adding, modifying, or removing ANY third-party library, package dependency, font asset, icon system, **or algorithmic implementation**:
- All AI agents MUST immediately update **`ATTRIBUTION.md`** and the dedicated Next.js page at **`app/attributions/page.tsx`**.
- Keep license names, descriptions, package names, and official URL links 100% synchronized between `ATTRIBUTION.md` and `app/attributions/page.tsx`.
- If any algorithm (e.g., sorting, graph traversal, cryptographic) is sourced from an external library or reference, also include its attribution here.

---

Written by Thawshi Srikanth
