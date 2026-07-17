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
} from "./system";

/*
 * Panel 2 — BRIDGE (§4, LIGHT; global-refinement round). Stacked
 * (Whoop horizontal pattern): text block above (eyebrow → headline →
 * supporting lines, left-aligned as one unit), then a WIDE landscape
 * image below at full content width, standard card radius. This is the
 * page's one landscape image — it breaks the portrait rhythm of P3/P4.
 * For now a clearly-marked landscape HUMAN VISUAL TBD placeholder;
 * founder supplies the wide human/lifestyle image later.
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

        <motion.div {...enter(0.14)} className="max-w-2xl space-y-3">
          {/* Each sentence on its own line — never an awkward mid-sentence
              wrap. Stays two clean lines rather than free-wrapping. */}
          <p className={`text-[#14140f]/80 ${BODY_TEXT}`}>
            The only way to check was a blood test.
            <br />
            Expensive, complicated, hard to understand.
          </p>
          <p className={BODY_TEXT} style={{ color: ACCENT }}>
            The answer has been on your wrist all along.
          </p>
        </motion.div>

        {/* The page's one landscape image — full content width */}
        <motion.div {...enter(0.2)} className="mt-3 w-full">
          <HumanPlaceholder
            mode="light"
            marker="P2 — Abstract image framing the problem — TBD"
            className="aspect-[3/1] w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
