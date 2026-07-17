/*
 * Panel 1 — HERO (§4). Full viewport, own colour band.
 * Bottles: grey placeholder of correct-feeling proportions until the
 * PDF p.1 extraction lands (§3.2) — never a generated substitute.
 * Motion: CSS-only load fade + ambient bottle drift; both disabled
 * under prefers-reduced-motion.
 */

import { GRID } from "./system";

const ACCENT = "var(--prism-accent)";

function BottlePlaceholder({ className = "", height }) {
  return (
    <div
      aria-hidden="true"
      className={`flex flex-col items-center ${className}`}
      style={{ height }}
    >
      {/* cap */}
      <div className="h-[12%] w-[46%] rounded-t-md bg-[#232323]" />
      {/* shoulder + body */}
      <div className="h-[88%] w-full rounded-t-[1.4rem] rounded-b-xl bg-gradient-to-b from-[#1c1c1c] to-[#141414] ring-1 ring-white/[0.06]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #000000 45%, #031803 82%, #052605 100%)",
      }}
    >
      {/* Minimal nav (§4 Panel 1): logo left, "Join waitlist" right — nothing else. */}
      <nav className="absolute inset-x-0 top-0 z-10 py-5">
        <div className={`${GRID} flex items-center justify-between`}>
          <a href="/" className="font-display text-sm tracking-[0.35em] text-white">
            PRISM
          </a>
          <a
            href="#get-prism"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-white/90"
          >
            Join waitlist
          </a>
        </div>
      </nav>

      <div className={`${GRID} flex flex-1 flex-col items-center justify-center gap-12 pb-16 pt-28 text-center md:gap-14`}>
        {/* Headline — no supporting line (§4: deliberate, do not add one) */}
        <h1 className="fade-rise font-display uppercase leading-[0.95] tracking-[-0.01em] text-white text-[clamp(2.6rem,8vw,6.75rem)]">
          Know if your
          <br />
          supplements
          <br />
          actually <span style={{ color: ACCENT }}>work</span>
        </h1>

        {/* Bottles — placeholder pending PDF p.1 extraction */}
        <div className="fade-rise fade-rise-2 flex items-end gap-7">
          <BottlePlaceholder className="bottle-drift w-[74px] md:w-[92px]" height="min(26vh, 240px)" />
          <BottlePlaceholder className="bottle-drift-late w-[64px] md:w-[80px]" height="min(21vh, 196px)" />
        </div>

        {/* CTA */}
        <a
          href="#get-prism"
          className="fade-rise fade-rise-3 rounded-full bg-white px-10 py-4 text-lg font-semibold text-black shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-transform hover:scale-[1.03]"
        >
          Join the waitlist
        </a>
      </div>
    </section>
  );
}
