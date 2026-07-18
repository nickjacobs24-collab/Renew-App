"use client";
import { motion, useReducedMotion } from "framer-motion";
import { GRID, PANEL_PAD, Eyebrow, GAP_STACK } from "./system";

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

        {/* Mobile: exactly two lines via a mobile-only break, with a mobile
            size that fits both lines; desktop scale/wrap restored via md:. */}
        <motion.h2
          {...enter(0.06)}
          className="font-display uppercase leading-[1.0] max-w-4xl text-[clamp(1.6rem,7vw,2rem)] tracking-[-0.045em] md:text-[clamp(2.1rem,4.8vw,3.9rem)] md:tracking-[-0.04em]"
          style={{ color: INK }}
        >
          Are your supplements{" "}
          <br className="md:hidden" />
          making a difference?
        </motion.h2>

        <motion.div {...enter(0.14)} className="max-w-4xl">
          {/* Supporting copy on ONE line — sized to fit within the headline
              measure (max-w-4xl) at tablet width and up, so it sits under
              the headline as a balanced single line; wraps only on the
              narrowest phones. */}
          <p className="font-light leading-relaxed text-[#14140f]/80 text-[clamp(0.8rem,1.55vw,0.98rem)]">
            Until now, the only way to check was a blood test. But these can be
            expensive, complicated and hard to understand.
          </p>
          {/* Editorial pull quote — italic serif, decisively offset from the
              left body copy (not flush, not merely indented), sitting within
              the text column but clearly separate. Deliberate two-line break.
              Same treatment as the Promise pull quote; near-black on cream
              (bright green is dark-panels only). Consistent across breakpoints,
              only the offset/size scale responsively. */}
          <p
            className="font-accent italic mt-10 md:mt-14 ml-[12%] md:ml-[20%] max-w-md text-[clamp(1.3rem,2.8vw,2.15rem)] leading-[1.25]"
            style={{ color: INK }}
          >
            The answer has been on
            <br />
            your wrist all along.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
