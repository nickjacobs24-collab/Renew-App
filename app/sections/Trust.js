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
 * Panel 5 — TRUST / OUR PROMISE (§4, DARK; Whoop-pattern recomposition).
 * ENTIRE panel left-aligned within the grid — the hero (P1) is the only
 * centred panel on the page. Headline stepped down (multi-line), caps +
 * green EVIDENCE kept. Paragraph small, ~60ch measure. The strap
 * dissolves into the three card labels (YOUR BODY / YOUR GOALS / YOUR
 * RESULTS) — Whoop-card proportions, HUMAN VISUAL TBD until the founder
 * supplies imagery. Height content-driven, not viewport-filling.
 */

const ACCENT = "var(--prism-accent)";
const CARDS = ["Your body", "Your goals", "Your results"];

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

        {/* Strap dissolved into the card labels — future human imagery */}
        <motion.div
          {...enter(0.22)}
          className="mt-2 grid w-full grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {CARDS.map((label) => (
            <HumanPlaceholder
              key={label}
              mode="dark"
              label={label}
              marker="Representative / abstract — TBD (not human)"
              className="aspect-[4/5]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
