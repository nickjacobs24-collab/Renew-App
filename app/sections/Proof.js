"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { GRID, PANEL_PAD, Eyebrow, HEADLINE_STEPPED } from "./system";

/*
 * Panel 4 — PROOF (§4, the standout). Third colour register: PURE JET
 * BLACK (flat #000000), unique on the page — P1/P3/P5 use the gradient
 * fade, P4 is stark flat black so the phone pops (robin hood 2). Centred
 * layout: text above, then the sleep chart in a soft-glow DARK card,
 * centred, STRAIGHT (not angled), with sparing green highlights. Jet
 * black + a little green + the phone is the whole look.
 */

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
    <section style={{ background: "#000000", color: "#ffffff" }}>
      {/* robin hood 2 layout on flat jet black: centred text, then the
          phone in a soft-glow dark card, centred, STRAIGHT. */}
      <div
        className={`${GRID} ${PANEL_PAD} flex flex-col items-center gap-10 text-center`}
      >
        <motion.div {...enter()}>
          <Eyebrow mode="dark">The evidence</Eyebrow>
        </motion.div>

        <motion.h2
          {...enter(0.06)}
          className={`font-display uppercase leading-[1.0] text-white ${HEADLINE_STEPPED}`}
        >
          See what&rsquo;s working
          <br />
          and what&rsquo;s <span style={{ color: ACCENT }}>not</span>
        </motion.h2>

        {/* robin hood 2 card: WIDE dark card, phone NARROW + centred +
            straight, bleeding off the bottom, generous dark space on both
            sides. Card glow = subtle NEUTRAL light from bottom-centre
            (NOT green — the green comes from the phone screen content).
            VISUALS ROUND — P4 slot: v1 = this static Progress 1.png;
            v2 UPGRADE = live proof animation in the same frame (line
            climbing, Magnesium marker). The ONLY product animation on
            the page — the proof payoff. Screen contents never altered. */}
        <motion.figure {...enter(0.14)} className="flex w-full flex-col items-center gap-4">
          <div
            className="relative mx-auto h-[min(64vh,560px)] w-full max-w-4xl overflow-hidden rounded-[2rem] ring-1 ring-white/[0.06]"
            style={{
              background:
                "radial-gradient(60% 55% at 50% 92%, rgba(255,255,255,0.08), rgba(255,255,255,0) 62%), linear-gradient(180deg, #0b0b0b 0%, #070707 100%)",
              boxShadow: "0 50px 150px rgba(0,0,0,0.75)",
            }}
          >
            {/* phone: narrow, centred, bleeds off the bottom edge */}
            <div className="absolute left-1/2 top-16 -translate-x-1/2">
              <div
                className="relative rounded-t-[2.4rem] border border-b-0 border-white/12 bg-black p-[6px] pb-0 shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
                style={{ aspectRatio: "853 / 1844", height: "min(70vh, 620px)" }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-t-[2.1rem]">
                  <Image
                    src="/screens/progress.png"
                    alt="Prism Sleep trend. Total sleep 8h 12m, a rising line with a Magnesium marker where it was started."
                    fill
                    sizes="(max-width: 768px) 60vw, 280px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
          <figcaption className="text-sm text-white/70">
            Two-week rolling average against your baseline.
          </figcaption>
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/45">
            P4 — v1 static chart / to be replaced by live animation
          </span>
        </motion.figure>
      </div>
    </section>
  );
}
