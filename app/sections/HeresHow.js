"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { GRID, PANEL_PAD, Eyebrow, GAP_STACK } from "./system";

/*
 * Panel 3 — HOW IT WORKS (§4). DARK band (consolidated round band
 * map). Split: visual LEFT (Home.png in device frame, §2.1 screens
 * allowance) / text RIGHT, with the wearable brand row beneath the
 * text. Brand row is text-styled wordmarks only — no fabricated
 * logos; swap for licensed SVGs when supplied.
 */

export default function HeresHow() {
  const prefersReduced = useReducedMotion();

  const enter = (delay = 0) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <section
      id="how-it-works"
      style={{
        /* Mostly black, with only a subtle DARK MUTED green settling in at
           the base — enough to sit above P4's jet black (green→black
           frame) without a bright half-and-half green wall. */
        background:
          "linear-gradient(180deg, #000000 0%, #000000 55%, #071a06 80%, #0c2a0d 100%)",
      }}
    >
      {/* robin hood 4: phone on the LEFT but pulled back toward the centre
          (not hugging the edge, not oversized) with a clear gap to the text
          on the right. P4 is the page's dominant device moment — P3's phone
          stays a supporting visual, not the star. */}
      <div className={`${GRID} ${PANEL_PAD}`}>
       <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Visual — left column, pulled toward centre. Home 1 placed as-is,
            no frame or styling around it. Position/size unchanged. */}
        <motion.div
          {...enter(0.18)}
          className="order-2 justify-self-center md:order-1 md:justify-self-center"
        >
          <Image
            src="/screens/home-1.png"
            alt="Prism Home screen. Sleep at Stage 2, Improving. Immunity at Stage 3, Maintaining."
            width={869}
            height={1810}
            sizes="(max-width: 768px) 66vw, 320px"
            className="max-w-none select-none"
            style={{ height: "min(66vh, 600px)", width: "auto" }}
          />
        </motion.div>

        {/* Text — right */}
        <div className={`order-1 flex flex-col ${GAP_STACK} md:order-2`}>
          <motion.div {...enter()}>
            <Eyebrow mode="dark">How it works</Eyebrow>
          </motion.div>

          {/* Two beats, two sentences — stacked, same size, never one line.
              Matches the two-beat question in the Problem section. */}
          <motion.h2
            {...enter(0.06)}
            className="font-display leading-[1.15] tracking-[-0.02em] text-white text-[clamp(1.5rem,6.4vw,1.85rem)] md:text-[1.5rem] lg:text-[clamp(2rem,3.3vw,2.6rem)]"
          >
            <span className="block">We show you the evidence.</span>
            <span className="block text-white/70">Based on your health data.</span>
          </motion.h2>

          {/* Compatibility line — same wordmark styling as the Apple Watch
              brand mark (the only supported device at launch). */}
          <motion.div {...enter(0.22)} className="mt-4 md:mt-6">
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/75 md:text-sm">
              Works with Apple Watch
            </span>
          </motion.div>
        </div>
       </div>
      </div>
    </section>
  );
}
