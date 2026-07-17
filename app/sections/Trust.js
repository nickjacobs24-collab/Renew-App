"use client";
import { motion, useReducedMotion } from "framer-motion";
import { GRID, Eyebrow, HumanPlaceholder } from "./system";

/*
 * Panel 5 — TRUST / OUR PROMISE (§4, DARK, centred statement; final
 * copy from the consolidated round). Elaboration is ONE paragraph.
 * Headline re-broken so "THE EVIDENCE" never splits (nbsp). Narrower
 * measure; trimmed vertical padding so the eyebrow doesn't float in
 * dead space. Beneath the strap: three HUMAN VISUAL TBD markers
 * (your body / your goals / your results) — founder supplies
 * direction; never source or generate imagery.
 */

const ACCENT = "var(--prism-accent)";

export default function Trust() {
  const prefersReduced = useReducedMotion();

  const enter = (delay = 0) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #052605 70%, #0a3c0a 100%)",
      }}
    >
      <div
        className={`${GRID} flex flex-col items-center gap-8 py-24 text-center md:py-28`}
      >
        <motion.div {...enter()}>
          <Eyebrow mode="dark">Our promise</Eyebrow>
        </motion.div>

        <motion.h2
          {...enter(0.06)}
          className="font-display uppercase leading-[0.98] tracking-[-0.01em] text-white text-[clamp(2rem,5.5vw,4.5rem)]"
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
          className="max-w-xl text-white/95 text-[clamp(1.1rem,2.2vw,1.4rem)] leading-relaxed"
        >
          Supplements are sold with sales and marketing. Studies on someone
          else, somewhere else. Not you. Not your data. So how can you be sure
          it&rsquo;s working? Prism just shows you what&rsquo;s changing, using
          your data.
        </motion.p>

        <motion.p
          {...enter(0.2)}
          className="mt-2 text-xs font-medium uppercase tracking-[0.3em] text-white/75"
        >
          Your body&ensp;|&ensp;Your goals&ensp;|&ensp;Your results
        </motion.p>

        {/* Future human imagery — strip of three under the strap */}
        <motion.div
          {...enter(0.26)}
          className="mt-6 grid w-full max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3"
        >
          <HumanPlaceholder mode="dark" className="aspect-[4/5]" />
          <HumanPlaceholder mode="dark" className="aspect-[4/5]" />
          <HumanPlaceholder mode="dark" className="aspect-[4/5]" />
        </motion.div>
      </div>
    </section>
  );
}
