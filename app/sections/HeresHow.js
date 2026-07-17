"use client";
import { motion, useReducedMotion } from "framer-motion";

/*
 * Panel 3 — HERE'S HOW (§4 FINAL, mechanism). Own band, stepping back
 * into green after the bridge's return to black. The contrast line is
 * a DRAFTED best candidate (flagged in CLAUDE.md §11.8) — founder
 * judges on the preview. Integrations strip is a factual claim;
 * confirm the list before ship.
 */

const WEARABLES = ["APPLE WATCH", "WHOOP", "OURA", "GARMIN"];

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
      className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-28 text-center"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #031a03 60%, #062b06 100%)",
      }}
    >
      <motion.h2
        {...enter()}
        className="font-display uppercase leading-[0.95] tracking-[-0.01em] text-white text-[clamp(2.2rem,6.5vw,5rem)]"
      >
        Here&rsquo;s how
      </motion.h2>

      <motion.div {...enter(0.12)} className="max-w-2xl space-y-4">
        <p className="text-white/90 text-[clamp(1.15rem,2.4vw,1.5rem)] leading-relaxed">
          Prism reads the health data your wearable already records.
        </p>
        {/* Drafted contrast line — flagged for preview judgement */}
        <p className="text-white/60 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
          Simple to read. Nothing new to buy. With you day and night.
        </p>
      </motion.div>

      <motion.p
        {...enter(0.24)}
        className="mt-6 text-xs font-medium tracking-[0.25em] text-white/40"
      >
        {WEARABLES.join(" | ")}
      </motion.p>
    </section>
  );
}
