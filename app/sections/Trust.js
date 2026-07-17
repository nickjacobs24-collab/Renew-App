"use client";
import { motion, useReducedMotion } from "framer-motion";
import { GRID, PANEL_PAD, Eyebrow } from "./system";

/*
 * Panel 5 — TRUST (§4, DARK, locked copy). Statement panel: pure
 * typography on the deep band. Elaboration set as stanzas with air,
 * not a paragraph. Strap in small caps, plain (deliberately not the
 * pill treatment — that belongs to the wearable strip).
 */

const ACCENT = "var(--prism-accent)";

const STANZAS = [
  "Supplements are sold with sales and marketing. Studies on someone else, somewhere else. Not you. Not your data.",
  "So how can you be sure it’s working?",
  "Prism shows you what’s changing, using your data.",
  "No more guessing. Just evidence, from your body.",
];

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
      className="flex min-h-screen items-center"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #052605 70%, #0a3c0a 100%)",
      }}
    >
      <div
        className={`${GRID} ${PANEL_PAD} flex flex-col items-center gap-10 text-center`}
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
          we show you the{" "}
          <span style={{ color: ACCENT }}>evidence</span>
        </motion.h2>

        <div className="max-w-2xl space-y-8">
          {STANZAS.map((stanza, i) => (
            <motion.p
              key={i}
              {...enter(0.12 + i * 0.06)}
              className="text-white/95 text-[clamp(1.15rem,2.4vw,1.5rem)] leading-relaxed"
            >
              {stanza}
            </motion.p>
          ))}
        </div>

        <motion.p
          {...enter(0.4)}
          className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-white/75"
        >
          Your body&ensp;|&ensp;Your goals&ensp;|&ensp;Your results
        </motion.p>
      </div>
    </section>
  );
}
