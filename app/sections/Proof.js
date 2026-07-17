"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  GRID,
  PANEL_PAD,
  Eyebrow,
  Contained,
  HEADLINE_STEPPED,
  GAP_STACK,
  GAP_SPLIT,
} from "./system";

/*
 * Panel 4 — PROOF (§4, LIGHT). Split panel per §2.2: copy one side,
 * the contained visual the other. The single app screenshot on the
 * entire site — Progress 1.png in a device frame against the cream
 * ground. Accent NOT uses the locked token #3AB203; its ~2.5:1 ratio
 * on cream is flagged in CLAUDE.md §11.11 for the founder's call.
 */

const INK = "var(--prism-ink)";
const ACCENT = "var(--prism-accent)";

export default function Proof() {
  const prefersReduced = useReducedMotion();

  const enter = (delay = 0) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <section style={{ background: "var(--prism-cream)", color: INK }}>
      <div
        className={`${GRID} ${PANEL_PAD} grid items-center ${GAP_SPLIT} md:grid-cols-2`}
      >
        {/* Copy side */}
        <div className={`flex flex-col items-start ${GAP_STACK} text-left`}>
          <motion.div {...enter()}>
            <Eyebrow mode="light">The evidence</Eyebrow>
          </motion.div>

          <motion.h2
            {...enter(0.06)}
            className={`font-display uppercase leading-[1.0] ${HEADLINE_STEPPED}`}
            style={{ color: INK }}
          >
            See what&rsquo;s working
            <br />
            and what&rsquo;s <span style={{ color: ACCENT }}>not</span>
          </motion.h2>
        </div>

        {/* Visual side — the sleep-chart screen, contained-card
            treatment: grounded, subtle shadow, deliberate scale.
            Screen contents never altered. */}
        <motion.figure
          {...enter(0.14)}
          className="flex flex-col items-center gap-4 justify-self-center md:justify-self-end"
        >
          <Contained
            mode="light"
            className="flex items-end justify-center px-10 pt-10"
          >
            <div
              className="relative rounded-t-[2.6rem] border border-b-0 border-black/10 bg-black p-[6px] pb-0 shadow-[0_18px_50px_rgba(20,20,15,0.18)]"
              style={{
                aspectRatio: "853 / 1600",
                height: "min(58vh, 500px)",
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-t-[2.2rem]">
                <Image
                  src="/screens/progress.png"
                  alt="Prism Sleep trend. Total sleep 8h 12m, a rising line with a Magnesium marker where it was started."
                  fill
                  sizes="(max-width: 768px) 70vw, 300px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Contained>
          <figcaption className="text-sm text-[#14140f]/80">
            Two-week rolling average against your baseline.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
