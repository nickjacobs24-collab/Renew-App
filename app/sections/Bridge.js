"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  GRID,
  PANEL_PAD,
  Eyebrow,
  HEADLINE_STEPPED,
  BODY_TEXT,
  GAP_STACK,
} from "./system";

/*
 * Panel 2 — BRIDGE (§4, LIGHT). Text-only statement: eyebrow → headline →
 * two one-line supporting sentences → the green wrist line, with breathing
 * room above it. (The landscape image placeholder was removed at the
 * founder's request.)
 */

const INK = "var(--prism-ink)";
const ACCENT = "var(--prism-accent)";

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

        <motion.div {...enter(0.14)} className="max-w-3xl">
          {/* Each sentence forced to EXACTLY one line — inline
              white-space:nowrap (guaranteed, not a purge-able utility class)
              plus a stepped-down clamp so the full sentence fits on one line
              at every width down to the smallest phone. */}
          <div className="font-light leading-relaxed text-[#14140f]/80 text-[clamp(0.72rem,3.2vw,1.2rem)]">
            <p style={{ whiteSpace: "nowrap" }}>
              The only way to check was a blood test.
            </p>
            <p style={{ whiteSpace: "nowrap" }}>
              Expensive, complicated, hard to understand.
            </p>
          </div>
          {/* Green wrist line, dropped down for breathing room */}
          <p className={`mt-8 ${BODY_TEXT}`} style={{ color: ACCENT }}>
            The answer has been on your wrist all along.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
