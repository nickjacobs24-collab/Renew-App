"use client";
import { motion, useReducedMotion } from "framer-motion";
import { GRID } from "./system";

/*
 * Panel 2 — BRIDGE (§4 FINAL, locked copy). Typography panel, three
 * stanzas paced down the scroll in normal flow — no pinning. Entrance:
 * one whileInView fade per stanza; static under prefers-reduced-motion.
 */

const STANZAS = [
  "Are your supplements making a difference?",
  "The only way to check was a blood test. Expensive, complicated, hard to understand.",
  "The answer has been on your wrist all along.",
];

export default function Bridge() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #052605 0%, #041f04 55%, #000000 100%)",
      }}
    >
      {STANZAS.map((stanza, i) => (
        <div
          key={i}
          className={`${GRID} flex items-center justify-center ${
            i === 0 ? "min-h-[80vh]" : "min-h-[70vh]"
          }`}
        >
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className={`max-w-3xl text-center font-semibold tracking-tight ${
              i === 0
                ? "text-white text-[clamp(1.9rem,4.5vw,3.4rem)]"
                : "text-white/85 text-[clamp(1.5rem,3.6vw,2.7rem)] leading-snug"
            }`}
          >
            {stanza}
          </motion.p>
        </div>
      ))}
    </section>
  );
}
