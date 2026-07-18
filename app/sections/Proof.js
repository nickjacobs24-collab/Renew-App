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
        className={`${GRID} ${PANEL_PAD} flex flex-col items-center gap-12 text-center`}
      >
        <motion.div {...enter()}>
          <Eyebrow mode="dark">The evidence</Eyebrow>
        </motion.div>

        <motion.h2
          {...enter(0.06)}
          className={`font-display uppercase leading-[1.0] text-white ${HEADLINE_STEPPED}`}
        >
          <span style={{ color: ACCENT }}>See</span> what&rsquo;s working
          <br />
          and what&rsquo;s not
        </motion.h2>

        {/* Progress 2 — the final phone render (full device on black), used
            INTACT. A device-width column crops the render's black margins so
            the phone sits cleanly on the graphite with breathing room; the
            panel's overflow crops the bottom bezel so the device runs off the
            bottom edge while the chart and the three "Your sleep" cards stay
            fully visible. Crop is layout-only (no asset editing) and tunable
            per breakpoint via --w (the render's display width). */}
        <motion.figure {...enter(0.14)} className="flex w-full flex-col items-center">
          <div
            className="relative mx-auto w-full overflow-hidden rounded-[2rem] ring-1 ring-white/[0.08]"
            style={{
              /* --w drives the phone size AND the panel height. The height is
                 set so the crop lands just below the "Your sleep" cards, in
                 the straight bezel — the bottom rounded corners stay hidden
                 and the phone reads as continuing beyond the panel. */
              "--w": "min(92vw, 520px)",
              height: "calc(4rem + 1.38 * var(--w))",
              /* Refined charcoal/graphite surface — a single soft radial for
                 depth. No diagonal streak, no glow. Hairline top light +
                 soft drop shadow give it material without competing. */
              background:
                "radial-gradient(130% 115% at 50% -12%, #26282c 0%, #181a1d 52%, #0d0e10 100%)",
              boxShadow:
                "0 40px 120px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Progress 3 — full device render on a TRANSPARENT background,
                placed directly on the graphite (no black rectangle). Sat a
                little lower (top-16) for breathing room below the headline;
                the panel's overflow crops the bottom bezel. */}
            <Image
              src="/screens/progress-3.png"
              alt="Prism Sleep screen: a rising two-week sleep trend with a Magnesium marker, and Total, REM and Deep sleep summary cards."
              width={1024}
              height={1536}
              priority
              sizes="(max-width: 768px) 92vw, 520px"
              className="pointer-events-none absolute left-1/2 top-16 max-w-none -translate-x-1/2 select-none"
              style={{ width: "var(--w)", height: "auto" }}
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
