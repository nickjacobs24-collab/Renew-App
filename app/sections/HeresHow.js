"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  GRID,
  PANEL_PAD,
  Eyebrow,
  HEADLINE_STEPPED,
  BODY_TEXT,
  GAP_STACK,
  GAP_SPLIT,
} from "./system";

/*
 * Panel 3 — HOW IT WORKS (§4). DARK band (consolidated round band
 * map). Split: visual LEFT (Home.png in device frame, §2.1 screens
 * allowance) / text RIGHT, with the wearable brand row beneath the
 * text. Brand row is text-styled wordmarks only — no fabricated
 * logos; swap for licensed SVGs when supplied.
 */

const BRANDS = [
  { name: "APPLE WATCH", cls: "font-medium tracking-[0.1em]" },
  { name: "WHOOP", cls: "font-extrabold tracking-[0.2em]" },
  { name: "ŌURA", cls: "font-medium tracking-[0.32em]" },
  { name: "GARMIN", cls: "font-bold tracking-[0.16em]" },
];

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
        background: "linear-gradient(180deg, #000000 0%, #052605 100%)",
      }}
    >
      {/* robin hood 4: phone LEFT + text RIGHT pulled toward centre and
          paired close — a narrower centred container inside the wide
          grid, not edge-to-edge. */}
      <div className={`${GRID} ${PANEL_PAD}`}>
       <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-8">
        {/* Visual — left on desktop, below text on mobile. Slightly
            angled with soft shadow (never flat/floating). */}
        <motion.div
          {...enter(0.18)}
          className="order-2 justify-self-center md:order-1 md:justify-self-end"
        >
          <div
            className="relative rotate-[-3deg] rounded-[2.6rem] border border-white/15 bg-black p-[6px] shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
            style={{ aspectRatio: "853 / 1844", height: "min(66vh, 580px)" }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.2rem]">
              <Image
                src="/screens/home.png"
                alt="Prism Home screen. Sleep at Stage 2, Improving. Immunity at Stage 3, Maintaining."
                fill
                sizes="(max-width: 768px) 66vw, 300px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Text — right */}
        <div className={`order-1 flex flex-col ${GAP_STACK} md:order-2`}>
          <motion.div {...enter()}>
            <Eyebrow mode="dark">How it works</Eyebrow>
          </motion.div>

          <motion.h2
            {...enter(0.06)}
            className={`font-display uppercase leading-[1.0] text-white ${HEADLINE_STEPPED}`}
          >
            Based on your health data
          </motion.h2>

          <motion.p
            {...enter(0.14)}
            className={`max-w-xl text-white/90 ${BODY_TEXT}`}
          >
            Cost-effective. Simple. Easy to understand.
          </motion.p>

          {/* Wearable brand row */}
          <motion.div
            {...enter(0.22)}
            className="mt-2 flex flex-wrap items-center gap-x-10 gap-y-4"
          >
            {BRANDS.map((brand) => (
              <span
                key={brand.name}
                className={`text-sm text-white/75 ${brand.cls}`}
              >
                {brand.name}
              </span>
            ))}
          </motion.div>
        </div>
       </div>
      </div>
    </section>
  );
}
