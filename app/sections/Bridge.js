"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  GRID,
  PANEL_PAD,
  Eyebrow,
  HumanPlaceholder,
  HEADLINE_STEPPED,
  BODY_TEXT,
  GAP_STACK,
  GAP_SPLIT,
} from "./system";

/*
 * Panel 2 — BRIDGE (§4, LIGHT — correction round: was dark statement,
 * now Levels-hierarchy split). One coherent text unit, headline-
 * weighted, left-aligned in the grid: eyebrow → dominant headline →
 * ONE subordinate support block, lines together, no viewport gaps.
 * Final line takes the green accent treatment per spec.
 * Visual slot right: HUMAN VISUAL TBD placeholder (consolidated round)
 * — founder supplies imagery direction; never source or generate.
 */

const INK = "var(--prism-ink)";
const ACCENT = "var(--prism-accent)";

export default function Bridge() {
  const prefersReduced = useReducedMotion();

  const enter = (delay = 0) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <section
      className="flex min-h-screen items-center"
      style={{ background: "var(--prism-cream)", color: INK }}
    >
      <div
        className={`${GRID} ${PANEL_PAD} grid items-center ${GAP_SPLIT} md:grid-cols-2`}
      >
        {/* Text — left, headline-weighted, one unit */}
        <div className={`flex flex-col ${GAP_STACK}`}>
          <motion.div {...enter()}>
            <Eyebrow mode="light">The problem</Eyebrow>
          </motion.div>

          <motion.h2
            {...enter(0.06)}
            className={`font-display uppercase leading-[1.0] ${HEADLINE_STEPPED}`}
            style={{ color: INK }}
          >
            Are your supplements making a difference?
          </motion.h2>

          <motion.div {...enter(0.14)} className="max-w-xl space-y-3">
            <p className={`text-[#14140f]/80 ${BODY_TEXT}`}>
              The only way to check was a blood test. Expensive, complicated,
              hard to understand.
            </p>
            <p className={BODY_TEXT} style={{ color: ACCENT }}>
              The answer has been on your wrist all along.
            </p>
          </motion.div>
        </div>

        {/* Visual slot — right: human imagery placeholder (§4, founder
            supplies direction; the trend crop was the prior occupant) */}
        <motion.div
          {...enter(0.18)}
          className="justify-self-center md:justify-self-end"
        >
          <HumanPlaceholder
            mode="light"
            className="aspect-[4/5] w-[min(80vw,420px)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
