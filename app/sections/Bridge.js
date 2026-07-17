"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  GRID,
  PANEL_PAD,
  Eyebrow,
  HEADLINE_STEPPED,
  GAP_STACK,
} from "./system";

/*
 * Panel 2 — BRIDGE (§4, LIGHT). Text-only statement: eyebrow → headline →
 * two one-line supporting sentences → the green wrist line, with breathing
 * room above it. (The landscape image placeholder was removed at the
 * founder's request.)
 */

const INK = "var(--prism-ink)";

export default function Bridge() {
  const prefersReduced = useReducedMotion();

  const enter = (delay = 0) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <section style={{ background: "var(--prism-cream)", color: INK }}>
      <div className={`${GRID} ${PANEL_PAD} flex flex-col ${GAP_STACK}`}>
        <motion.div {...enter()}>
          <Eyebrow mode="light">The problem</Eyebrow>
        </motion.div>

        <motion.h2
          {...enter(0.06)}
          className={`font-display uppercase leading-[1.0] max-w-4xl ${HEADLINE_STEPPED}`}
          style={{ color: INK }}
        >
          Are your supplements making a difference?
        </motion.h2>

        <motion.div {...enter(0.14)} className="max-w-4xl">
          {/* Both supporting sentences on ONE line — tighter block, less
              wasted vertical space (sized to sit on a single line at tablet
              width and up; wraps only on the narrowest phones). */}
          <p className="font-light leading-relaxed text-[#14140f]/80 text-[clamp(0.85rem,1.9vw,1.15rem)]">
            The only way to check was a blood test. Expensive, complicated,
            hard to understand.
          </p>
          {/* The emotional turn — set apart from the two supporting lines:
              italic serif, larger, offset toward centre/right (not hard-left
              with the rest). NEAR-BLACK, not green: bright green accents are
              dark-panels-only; on cream the italic serif carries the
              emphasis and colour would read cheap/low-contrast. */}
          <p
            className="font-accent italic mt-10 md:ml-[20%] max-w-xl text-[clamp(1.5rem,3.6vw,2.7rem)] leading-[1.15]"
            style={{ color: INK }}
          >
            The answer has been on your wrist all along.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
