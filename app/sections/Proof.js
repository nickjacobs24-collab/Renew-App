"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { GRID, PANEL_PAD, Eyebrow, HEADLINE_STEPPED } from "./system";

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
      {/* robin hood 2 layout: centred text, then the phone in a
          soft-glow contained card, centred. (Kept on the cream band to
          preserve the alternating chaptering — see CLAUDE.md flag.) */}
      <div
        className={`${GRID} ${PANEL_PAD} flex flex-col items-center gap-10 text-center`}
      >
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

        {/* Soft-glow contained card, phone centred inside, bleeds off the
            bottom (robin hood 2). Device slightly angled, soft shadow.
            VISUALS ROUND — P4 slot: v1 = this static Progress 1.png;
            v2 UPGRADE = live proof animation in the same frame (line
            climbing, Magnesium marker). The ONLY product animation on
            the page — the proof payoff. Screen contents never altered. */}
        <motion.figure {...enter(0.14)} className="flex flex-col items-center gap-4">
          <div className="relative flex w-[min(90vw,420px)] justify-center overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-black/[0.06] to-black/[0.02] px-10 pt-12 shadow-[0_40px_100px_rgba(20,20,15,0.22)] ring-1 ring-black/10">
            <div
              className="relative rotate-[-2deg] rounded-t-[2.4rem] border border-b-0 border-black/15 bg-black p-[6px] pb-0 shadow-[0_20px_60px_rgba(20,20,15,0.28)]"
              style={{ aspectRatio: "853 / 1500", height: "min(56vh, 480px)" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-t-[2.1rem]">
                <Image
                  src="/screens/progress.png"
                  alt="Prism Sleep trend. Total sleep 8h 12m, a rising line with a Magnesium marker where it was started."
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
          <figcaption className="text-sm text-[#14140f]/80">
            Two-week rolling average against your baseline.
          </figcaption>
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#14140f]/45">
            P4 — v1 static chart / to be replaced by live animation
          </span>
        </motion.figure>
      </div>
    </section>
  );
}
