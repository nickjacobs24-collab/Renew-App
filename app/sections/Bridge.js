"use client";
import { motion, useReducedMotion } from "framer-motion";

/*
 * Panel 2 — BRIDGE (§4, locked copy). Typography panel, own band one
 * step deeper than the hero's base. The hook lands first; the lines
 * arrive as you move — normal scroll flow (each line holds its own
 * ~70vh block), no pinning. Entrance: one whileInView fade per line;
 * static under prefers-reduced-motion.
 */

const LINES = [
  "Are your supplements working?",
  "There’s been no clear way to know.",
  "Your body has the answer. Prism shows you.",
];

export default function Bridge() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="px-6"
      style={{
        background:
          "linear-gradient(180deg, #052605 0%, #041f04 55%, #000000 100%)",
      }}
    >
      {LINES.map((line, i) => (
        <div
          key={line}
          className={`flex items-center justify-center ${
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
                : "text-white/85 text-[clamp(1.6rem,3.8vw,2.9rem)]"
            }`}
          >
            {line}
          </motion.p>
        </div>
      ))}
    </section>
  );
}
