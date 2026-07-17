"use client";
import { motion, useReducedMotion } from "framer-motion";
import { GRID, PANEL_PAD, Eyebrow } from "./system";

/*
 * Panel 3 — HERE'S HOW (§4 FINAL — verbatim App Store screen-2
 * narrative; the earlier drafted lines are deleted). LIGHT mode:
 * cream ground, ink type, hard band edge against the bridge's black.
 * Stacked panel: eyebrow → headline → support → contrast → strip
 * (the designed visual-row). Strip is a factual claim; confirm the
 * integration list before ship.
 */

const WEARABLES = ["APPLE WATCH", "WHOOP", "OURA", "GARMIN"];
const INK = "var(--prism-ink)";

export default function HeresHow() {
  const prefersReduced = useReducedMotion();

  const enter = (delay = 0) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <section
      id="how-it-works"
      className="flex min-h-screen items-center"
      style={{ background: "var(--prism-cream)", color: INK }}
    >
      <div
        className={`${GRID} ${PANEL_PAD} flex flex-col items-center gap-8 text-center`}
      >
        <motion.div {...enter()}>
          <Eyebrow mode="light">How it works</Eyebrow>
        </motion.div>

        <motion.h2
          {...enter(0.06)}
          className="font-display uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(2.2rem,6.5vw,5rem)]"
          style={{ color: INK }}
        >
          Here&rsquo;s how
        </motion.h2>

        <motion.div {...enter(0.14)} className="max-w-2xl space-y-4">
          <p
            className="text-[clamp(1.15rem,2.4vw,1.5rem)] leading-relaxed"
            style={{ color: INK }}
          >
            Based on your health data
          </p>
          <p className="text-[#14140f]/80 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
            Cost-effective. Simple. Easy to understand.
          </p>
        </motion.div>

        {/* §2.1: the strip as a designed element — the panel's visual-row */}
        <motion.div
          {...enter(0.24)}
          className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full bg-black/[0.04] px-8 py-3.5 ring-1 ring-black/10"
        >
          {WEARABLES.map((name, i) => (
            <span
              key={name}
              className="flex items-center gap-x-6 text-xs font-medium tracking-[0.25em] text-[#14140f]/75"
            >
              {name}
              {i < WEARABLES.length - 1 && (
                <span aria-hidden="true" className="text-[#14140f]/20">
                  |
                </span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
