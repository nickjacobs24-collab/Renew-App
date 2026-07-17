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
            className="relative mx-auto h-[min(84vh,820px)] w-full overflow-hidden rounded-[2rem] ring-1 ring-white/15"
            style={{
              /* Brighter grey/silver, mirror-like: a soft diagonal light
                 sweep over a brushed metallic gradient. */
              background:
                "linear-gradient(120deg, transparent 8%, rgba(255,255,255,0.07) 30%, transparent 44%), radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.12), rgba(255,255,255,0) 55%), linear-gradient(155deg, #666a71 0%, #43464c 38%, #232529 70%, #35383d 100%)",
              boxShadow: "0 50px 150px rgba(0,0,0,0.75)",
            }}
          >
            {/* phone: narrow, centred, bigger, in a SILVER metallic case
                rim, bleeding off the bottom edge */}
            <div className="absolute left-1/2 top-16 -translate-x-1/2">
              <div
                className="relative rounded-t-[2.5rem] p-[6px] pb-0 shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
                style={{
                  aspectRatio: "853 / 1844",
                  height: "min(82vh, 760px)",
                  /* metallic silver case */
                  background:
                    "linear-gradient(145deg, #eef0f2 0%, #b8bbc0 22%, #8f9298 50%, #c6c9ce 78%, #e4e6e9 100%)",
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-t-[2.1rem] bg-black">
                  <Image
                    src="/screens/progress.png"
                    alt="Prism Sleep trend. Total sleep 8h 12m, a rising line with a Magnesium marker where it was started."
                    fill
                    sizes="(max-width: 768px) 60vw, 300px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/45">
            P4 — v1 static chart / to be replaced by live animation
          </span>
        </motion.figure>
      </div>
    </section>
  );
}
