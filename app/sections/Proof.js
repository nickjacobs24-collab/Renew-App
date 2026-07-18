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

        {/* robin hood 2 card: near FULL-WIDTH card (fills the grid, so only
            the grid's slight side padding sits between the jet-black section
            and the silver box), a BRIGHTER GREY/SILVER MIRROR sheen (not
            near-black), running tall close to the bottom. The phone sits
            centred and STRAIGHT in a SILVER metallic case rim, larger, and
            bleeds off the card's bottom edge.
            VISUALS ROUND — P4 slot: v1 = this static Progress 1.png;
            v2 UPGRADE = live proof animation in the same frame (line
            climbing, Magnesium marker). The ONLY product animation on
            the page — the proof payoff. Screen contents never altered. */}
        <motion.figure {...enter(0.14)} className="flex w-full flex-col items-center gap-4">
          <div
            className="relative mx-auto h-[min(72vh,700px)] w-full overflow-hidden rounded-[2rem] ring-1 ring-white/[0.08]"
            style={{
              /* Refined charcoal/graphite surface — a single soft radial for
                 depth (light gathered gently toward the top, falling to a
                 deeper graphite at the base and edges). No diagonal streak,
                 no glow. A hairline top light + soft drop shadow give it
                 material without competing with the product. */
              background:
                "radial-gradient(130% 115% at 50% -12%, #26282c 0%, #181a1d 52%, #0d0e10 100%)",
              boxShadow:
                "0 40px 120px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* A real iPhone — titanium rail, black bezel, Dynamic Island,
                side buttons — bigger and wider, rising from the card's
                bottom edge. Screen contents never altered. */}
            <div className="absolute left-1/2 top-10 -translate-x-1/2">
              <div
                className="relative"
                style={{ aspectRatio: "72 / 148", height: "min(86vh, 810px)" }}
              >
                {/* titanium metal rail */}
                <div
                  className="absolute inset-0 rounded-[3.2rem] rounded-b-none"
                  style={{
                    background:
                      "linear-gradient(135deg,#f0f1f3 0%,#a6a9af 16%,#cfd2d6 34%,#8b8e94 52%,#dcdee1 72%,#a9acb2 88%,#c4c7cc 100%)",
                    boxShadow: "0 25px 70px rgba(0,0,0,0.55)",
                  }}
                />
                {/* side buttons: mute + volume (left), power (right) */}
                <span className="absolute -left-[2px] top-[19%] h-8 w-[3px] rounded-l-sm bg-[#8b8e94]" />
                <span className="absolute -left-[2px] top-[28%] h-16 w-[3px] rounded-l-sm bg-[#c4c7cc]" />
                <span className="absolute -left-[2px] top-[40%] h-16 w-[3px] rounded-l-sm bg-[#c4c7cc]" />
                <span className="absolute -right-[2px] top-[30%] h-24 w-[3px] rounded-r-sm bg-[#c4c7cc]" />
                {/* black bezel + screen */}
                <div className="absolute inset-[7px] bottom-0 rounded-[2.7rem] rounded-b-none bg-black p-[3px] pb-0">
                  <div className="relative h-full w-full overflow-hidden rounded-[2.55rem] rounded-b-none bg-black">
                    <Image
                      src="/screens/progress.png"
                      alt="Prism Sleep trend. Total sleep 8h 12m, a rising line with a Magnesium marker where it was started."
                      fill
                      sizes="(max-width: 768px) 82vw, 360px"
                      className="object-cover object-top"
                    />
                    {/* Dynamic Island */}
                    <span className="absolute left-1/2 top-[10px] h-[24px] w-[86px] -translate-x-1/2 rounded-full bg-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
