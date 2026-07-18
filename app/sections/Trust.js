"use client";
import { motion, useReducedMotion } from "framer-motion";
import { GRID, PANEL_PAD, Eyebrow, BODY_TEXT, GAP_STACK } from "./system";

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

        {/* Mobile: exactly three lines (mobile-only break after "sell");
            desktop keeps two lines. Green EVIDENCE preserved. Mobile size
            fits the lines; desktop scale restored via md:. Extra top space
            on mobile so the section feels less compressed. */}
        {/* Two complete thoughts: "WE DON'T SELL SUPPLEMENTS" kept on one
            line (mobile size reduced just enough to hold it), then "WE SHOW
            THE EVIDENCE". Green EVIDENCE preserved. Desktop restored via md:. */}
        <motion.h2
          {...enter(0.06)}
          className="font-display uppercase leading-[1.04] text-white max-md:mt-3 text-[clamp(1.4rem,6vw,1.6rem)] tracking-[-0.045em] md:text-[clamp(2.1rem,4.8vw,3.9rem)] md:tracking-[-0.04em]"
        >
          <span className="whitespace-nowrap">We don&rsquo;t sell supplements</span>
          <br />
          we show{" "}
          <span className="whitespace-nowrap">
            the&nbsp;<span style={{ color: ACCENT }}>evidence</span>
          </span>
        </motion.h2>

        {/* Mobile: three editorial beats — statement, "Not you. Not your
            data.", then the conclusion set apart as a reflective italic-serif
            line (same language as Bridge's wrist line). All beat styling is
            max-md only, so DESKTOP stays one continuous paragraph, unchanged. */}
        <motion.p
          {...enter(0.14)}
          className={`max-w-[60ch] text-white/85 max-md:mt-3 ${BODY_TEXT}`}
        >
          Supplements are sold with marketing and studies based on someone
          else.{" "}
          <span className="max-md:mt-4 max-md:block">Not you. Not your data.</span>{" "}
          <span className="max-md:mt-10 max-md:ml-4 max-md:block max-md:font-accent max-md:text-[1.2rem] max-md:italic max-md:leading-[1.35] max-md:text-white">
            See what&rsquo;s changing{" "}
            <br className="md:hidden" />
            using your own health data.
          </span>
        </motion.p>

        {/* Quiet strap line — a separate closing beat, not part of the
            paragraph. Clear air above it, pushed toward the base of the
            section so it breathes as its own element. Small horizontal
            one-line strap, segments split by thin vertical dividers.
            Uniform small-caps across all three — no italic, no accent. */}
        <motion.div
          {...enter(0.22)}
          className="mt-20 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white/45 md:mt-16 md:text-[13px] md:text-white/70"
        >
          <span className="whitespace-nowrap">Your body</span>
          <span aria-hidden="true" className="h-3 w-px shrink-0 bg-white/15 md:bg-white/25" />
          <span className="whitespace-nowrap">Your goals</span>
          <span aria-hidden="true" className="h-3 w-px shrink-0 bg-white/15 md:bg-white/25" />
          <span className="whitespace-nowrap">Your results</span>
        </motion.div>
      </div>
    </section>
  );
}
