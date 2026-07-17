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
 * Panel 5 — TRUST / OUR PROMISE (§4, DARK). ENTIRE panel left-aligned —
 * the hero (P1) is the only centred panel. Headline stepped down, caps +
 * green EVIDENCE kept. Paragraph ~60ch. Typographic-variation pass: the
 * three cards are removed; the strap YOUR BODY / YOUR GOALS / YOUR RESULTS
 * becomes the panel's visual — a large stacked typographic moment, the
 * final "results" set in the italic serif accent as the payoff.
 */

const ACCENT = "var(--prism-accent)";

export default function Trust() {
  const prefersReduced = useReducedMotion();

  const enter = (delay = 0) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <section
      style={{
        /* Subtle DARK MUTED green at the TOP edge (below P4's jet black) so
           the evidence panel is framed green→black→green, then mostly black
           down to P6's cream — not a bright half-and-half green. */
        background:
          "linear-gradient(180deg, #0c2a0d 0%, #071a06 20%, #000000 45%, #000000 100%)",
      }}
    >
      <div
        className={`${GRID} ${PANEL_PAD} flex flex-col items-start ${GAP_STACK} text-left`}
      >
        <motion.div {...enter()}>
          <Eyebrow mode="dark">Our promise</Eyebrow>
        </motion.div>

        <motion.h2
          {...enter(0.06)}
          className={`font-display uppercase leading-[1.04] text-white ${HEADLINE_STEPPED}`}
        >
          We don&rsquo;t sell supplements
          <br />
          we show you{" "}
          <span className="whitespace-nowrap">
            the&nbsp;<span style={{ color: ACCENT }}>evidence</span>
          </span>
        </motion.h2>

        <motion.p
          {...enter(0.14)}
          className={`max-w-[60ch] text-white/85 ${BODY_TEXT}`}
        >
          Supplements are sold with sales and marketing. Studies on someone
          else, somewhere else. Not you. Not your data. So how can you be sure
          it&rsquo;s working? Prism just shows you what&rsquo;s changing, using
          your data.
        </motion.p>

        {/* Quiet strap line — a separate closing beat, not part of the
            paragraph. Clear air above it, pushed toward the base of the
            section so it breathes as its own element. Small horizontal
            one-line strap, segments split by thin vertical dividers.
            Uniform small-caps across all three — no italic, no accent. */}
        <motion.div
          {...enter(0.22)}
          className="mt-12 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 md:mt-16 md:text-[13px]"
        >
          <span className="whitespace-nowrap">Your body</span>
          <span aria-hidden="true" className="h-3 w-px shrink-0 bg-white/25" />
          <span className="whitespace-nowrap">Your goals</span>
          <span aria-hidden="true" className="h-3 w-px shrink-0 bg-white/25" />
          <span className="whitespace-nowrap">Your results</span>
        </motion.div>
      </div>
    </section>
  );
}
