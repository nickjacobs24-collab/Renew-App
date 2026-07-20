"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "./system";

/*
 * Panel 2 — PROBLEM (§4, LIGHT). Rebuilt to the "Section 2 Problem" reference:
 * wide panoramic off-white panel. Left: eyebrow → large sans headline (two
 * lines) → two-line grey supporting copy. Right: the italic-serif quote,
 * centre-aligned, sitting close to the supporting-copy baseline. No footer
 * row, no imagery.
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
  const fade = {
    initial: prefersReduced ? false : { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, delay: 0.2, ease: "easeOut" },
  };

  return (
    <section id="problem" style={{ background: "var(--prism-cream)", color: INK }}>
      <div className="relative mx-auto w-full max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* Left block */}
        <div className="max-w-[44rem] lg:max-w-[54rem]">
          <motion.div {...enter()}>
            <Eyebrow mode="light">The problem</Eyebrow>
          </motion.div>

          <motion.h2
            {...enter(0.06)}
            className="mt-6 font-display font-semibold leading-[1.1] tracking-[-0.02em] text-[clamp(1.55rem,6.6vw,1.9rem)] md:text-[3rem] lg:mt-8 lg:text-[4rem]"
            style={{ color: INK }}
          >
            {/* Two beats, two sentences — never reflow into one line. */}
            <span className="block">Do your supplements work?</span>
            <span className="block">How do you know?</span>
          </motion.h2>

          <motion.div
            {...enter(0.14)}
            className="mt-8 space-y-1.5 font-normal leading-relaxed text-[clamp(1rem,1.25vw,1.15rem)] text-[#14140f]/60 lg:mt-10"
          >
            <p>Until now, the only way to check was a blood test.</p>
            <p>But these can be expensive, complicated and hard to understand.</p>
          </motion.div>
        </div>

        {/* Italic quote — centre-aligned, right side, near the support baseline.
            Absolutely positioned on desktop; stacks below on smaller screens. */}
        <motion.p
          {...fade}
          className="mt-14 font-accent italic leading-[1.3] text-[clamp(1rem,2.8vw,2.5rem)] lg:absolute lg:bottom-[3.75rem] lg:right-16 lg:mt-0 lg:w-auto lg:text-center"
          style={{ color: INK }}
        >
          The answer has been on
          <br />
          your wrist all along.
        </motion.p>
      </div>
    </section>
  );
}
