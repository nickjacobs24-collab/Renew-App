"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "./system";

/*
 * Panel 5 — TRUST / OUR PROMISE (§4, DARK). Rebuilt to the "Section 5 Trust"
 * reference: wide panoramic dark green→black panel (green glow top-left).
 * Left: eyebrow → large sans headline (two lines, only "evidence" in Prism
 * green) → two-line supporting copy. Right: the italic-serif quote,
 * centre-aligned, lower-right. No strap, no footer row, no imagery.
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
  const fade = {
    initial: prefersReduced ? false : { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, delay: 0.2, ease: "easeOut" },
  };

  return (
    <section
      id="promise"
      className="text-white"
      style={{
        background:
          "radial-gradient(115% 105% at 6% 2%, #0e3312 0%, #071a09 34%, #000000 66%)",
      }}
    >
      <div className="relative mx-auto w-full max-w-[1600px] px-6 py-24 sm:px-10 lg:min-h-[42rem] lg:px-16 lg:py-32">
        {/* Left block */}
        <div className="max-w-[52rem]">
          <motion.div {...enter()}>
            <Eyebrow mode="dark">Our promise</Eyebrow>
          </motion.div>

          <motion.h2
            {...enter(0.06)}
            className="mt-6 font-display font-medium leading-[1.05] tracking-[-0.02em] text-white text-[clamp(1.9rem,4.8vw,3.8rem)] lg:mt-8"
          >
            We don&rsquo;t sell supplements
            <br />
            we show the <span style={{ color: ACCENT }}>evidence</span>
          </motion.h2>

          <motion.div
            {...enter(0.14)}
            className="mt-8 space-y-3 font-light leading-relaxed text-[clamp(1rem,1.25vw,1.15rem)] text-white/70 lg:mt-10"
          >
            <p>
              Supplements are sold with marketing and studies based on someone
              else.
            </p>
            <p>Not you. Not your data.</p>
          </motion.div>
        </div>

        {/* Italic quote — centre-aligned, right side, lower. Absolutely
            positioned on desktop; stacks below on smaller screens. */}
        <motion.p
          {...fade}
          className="mt-14 font-accent italic leading-[1.25] text-white text-[clamp(1.7rem,3vw,2.8rem)] lg:absolute lg:bottom-20 lg:right-16 lg:mt-0 lg:w-auto lg:text-center"
        >
          See what&rsquo;s changing using
          <br />
          your own health data.
        </motion.p>
      </div>
    </section>
  );
}
