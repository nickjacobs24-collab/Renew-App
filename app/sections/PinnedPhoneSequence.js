"use client";
import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/*
 * §8.8 motion proof — Beats 3–6 (CLAUDE.md §4).
 * Pin: CSS position:sticky. Motion: scroll-linked opacity/transform only
 * (compositor properties — the 60fps budget rules out anything that
 * triggers layout or paint). Runway height and the band map below are
 * the tuning surface; all judged in situ on the preview.
 */

const ACCENT = "var(--prism-accent)";
const SCREEN_ASPECT = "853 / 1844";

// Scroll-progress band map (0–1 across the 700vh runway).
// Beat 4 takes the largest share — §4 gears it slow.
const BAND = {
  entry: [0, 0.1], //   phone rises from bottom of viewport
  b3: [0.1, 0.28], //   HERE'S HOW          — home.png
  b4: [0.28, 0.58], //  SEE WHAT'S WORKING  — progress.png (slow gear)
  b5a: [0.58, 0.71], // SEE WHAT TO CHANGE  — gap.png
  b5b: [0.71, 0.84], // A BETTER PLAN       — plan.png
  b6: [0.84, 0.93], //  BUILT FOR YOUR GOALS — goals.png
  exit: [0.93, 1], //   phone drifts down and does not return
};

const SCREENS = [
  {
    src: "/screens/home.png",
    alt: "Prism Home screen. Sleep: Stage 2, Improving. Immunity: Stage 3, Maintaining.",
  },
  {
    src: "/screens/progress.png",
    alt: "Prism Sleep trend. Total sleep 8h 12m, rising line with a Magnesium marker.",
  },
  {
    src: "/screens/gap.png",
    alt: "Prism recommendation screen. Magnesium, for your sleep goal.",
  },
  {
    src: "/screens/plan.png",
    alt: "Prism plan screen. Your plan is ready. Checked for overlaps and interactions.",
  },
  {
    src: "/screens/goals.png",
    alt: "Prism goals screen. What do you want to improve?",
  },
];

// Fade+drift for a text element: in over [a→b], hold, out over [c→d].
function useBeat(progress, a, b, c, d) {
  return {
    opacity: useTransform(progress, [a, b, c, d], [0, 1, 1, 0]),
    y: useTransform(progress, [a, b, c, d], [24, 0, 0, -24]),
  };
}

function PhoneFrame({ children }) {
  return (
    <div
      className="relative rounded-[2.6rem] border border-white/15 bg-black p-[6px] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
      style={{ aspectRatio: SCREEN_ASPECT, height: "min(62vh, 78vw / 0.4626)" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.2rem]">
        {children}
      </div>
    </div>
  );
}

function Headline({ children, className = "", style }) {
  return (
    <motion.h2
      style={style}
      className={`text-center font-bold uppercase tracking-tight text-white leading-[1.05] text-[clamp(2rem,6vw,4.25rem)] ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export default function PinnedPhoneSequence() {
  const containerRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress: p } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Phone: rise on entry, hold, drift down on exit.
  const phoneY = useTransform(
    p,
    [BAND.entry[0], BAND.entry[1], BAND.exit[0], BAND.exit[1]],
    ["110%", "0%", "0%", "130%"]
  );

  // Screen crossfades at band boundaries (0.03 window).
  const screenOpacity = [
    useTransform(p, [BAND.b3[1], BAND.b3[1] + 0.03], [1, 0]),
    useTransform(p, [BAND.b3[1], BAND.b3[1] + 0.03, BAND.b4[1], BAND.b4[1] + 0.03], [0, 1, 1, 0]),
    useTransform(p, [BAND.b4[1], BAND.b4[1] + 0.03, BAND.b5a[1], BAND.b5a[1] + 0.03], [0, 1, 1, 0]),
    useTransform(p, [BAND.b5a[1], BAND.b5a[1] + 0.03, BAND.b5b[1], BAND.b5b[1] + 0.03], [0, 1, 1, 0]),
    useTransform(p, [BAND.b5b[1], BAND.b5b[1] + 0.03], [0, 1]),
  ];

  // Beat 3 — six elements, sequenced (the §4 layout note's in-situ call:
  // built as a stagger, not a merge).
  const b3Head = useBeat(p, 0.1, 0.13, 0.25, 0.28);
  const b3Lines = useBeat(p, 0.13, 0.16, 0.25, 0.28);
  const b3Bubble = useBeat(p, 0.15, 0.18, 0.25, 0.28);
  const b3Whisper = useBeat(p, 0.19, 0.22, 0.25, 0.28);
  const b3Strip = useBeat(p, 0.11, 0.13, 0.26, 0.28);
  // Beat 4 — second line lands one scroll beat after the first.
  const b4Head1 = useBeat(p, 0.3, 0.33, 0.55, 0.58);
  const b4Head2 = useBeat(p, 0.4, 0.44, 0.55, 0.58);
  const b4Note = useBeat(p, 0.33, 0.36, 0.55, 0.58);
  const b5aHead = useBeat(p, 0.6, 0.63, 0.68, 0.71);
  const b5bHead = useBeat(p, 0.73, 0.76, 0.81, 0.84);
  const b6Head = useBeat(p, 0.86, 0.89, 0.92, 0.94);

  // §8.8 reduced-motion fallback: static frames, no pin, no transforms.
  if (prefersReduced) {
    return <StaticSequence />;
  }

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      style={{ height: "700vh" }}
      aria-label="How Prism works"
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* Headline layer */}
        <div className="pointer-events-none absolute inset-x-0 top-[8vh] z-20 px-6">
          <Headline style={b3Head}>Here&rsquo;s how</Headline>
          <motion.p
            style={b3Lines}
            className="mt-3 text-center text-lg font-medium text-white/85 md:text-xl"
          >
            No blood tests. No guesswork.
          </motion.p>

          <div className="absolute inset-x-0 top-0">
            <Headline style={b4Head1}>See what&rsquo;s working</Headline>
            <Headline style={b4Head2} className="mt-2">
              And what&rsquo;s <span style={{ color: ACCENT }}>not</span>
            </Headline>
          </div>

          <div className="absolute inset-x-0 top-0">
            <Headline style={b5aHead}>See what to change</Headline>
          </div>
          <div className="absolute inset-x-0 top-0">
            <Headline style={b5bHead}>A better plan</Headline>
          </div>
          <div className="absolute inset-x-0 top-0">
            <Headline style={b6Head}>Built for your goals</Headline>
          </div>
        </div>

        {/* Phone layer */}
        <motion.div
          style={{ y: phoneY }}
          className="relative z-10 mt-[10vh] will-change-transform"
        >
          <PhoneFrame>
            {SCREENS.map((screen, i) => (
              <motion.div
                key={screen.src}
                style={{ opacity: screenOpacity[i] }}
                className="absolute inset-0"
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  sizes="(max-width: 768px) 70vw, 420px"
                  priority={i === 0}
                  className="object-cover"
                />
              </motion.div>
            ))}
          </PhoneFrame>

          {/* Beat 3 floating bubble, beside the phone */}
          <motion.div
            style={b3Bubble}
            className="absolute -right-4 top-[22%] rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md md:-right-6 md:translate-x-full"
          >
            Based on your health data
          </motion.div>

          {/* Beat 4 annotation, near the chart */}
          <motion.p
            style={b4Note}
            className="absolute -bottom-12 inset-x-0 text-center text-sm text-white/60 md:inset-x-auto md:-left-8 md:bottom-auto md:top-1/2 md:w-48 md:-translate-x-full md:text-right"
          >
            Two-week rolling average against your baseline.
          </motion.p>
        </motion.div>

        {/* Beat 3 trust whisper */}
        <motion.p
          style={b3Whisper}
          className="pointer-events-none absolute bottom-[14vh] z-20 text-center text-sm text-white/50"
        >
          We don&rsquo;t sell supplements.
        </motion.p>

        {/* Beat 3 integrations strip, viewport base */}
        <motion.p
          style={b3Strip}
          className="pointer-events-none absolute bottom-6 z-20 px-6 text-center text-xs font-medium tracking-[0.25em] text-white/40"
        >
          APPLE WATCH&ensp;|&ensp;WHOOP&ensp;|&ensp;OURA&ensp;|&ensp;GARMIN
        </motion.p>
      </div>
    </section>
  );
}

/* Static frames + stacked sections: the prefers-reduced-motion path. */
function StaticSequence() {
  const beats = [
    {
      screen: SCREENS[0],
      head: <>Here&rsquo;s how</>,
      sub: "No blood tests. No guesswork.",
    },
    {
      screen: SCREENS[1],
      head: (
        <>
          See what&rsquo;s working
          <br />
          and what&rsquo;s <span style={{ color: ACCENT }}>not</span>
        </>
      ),
      sub: "Two-week rolling average against your baseline.",
    },
    { screen: SCREENS[2], head: <>See what to change</> },
    { screen: SCREENS[3], head: <>A better plan</> },
    { screen: SCREENS[4], head: <>Built for your goals</> },
  ];

  return (
    <section id="how-it-works" aria-label="How Prism works">
      {beats.map((beat, i) => (
        <div
          key={i}
          className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-16"
        >
          <h2 className="text-center font-bold uppercase tracking-tight text-white leading-[1.05] text-[clamp(2rem,6vw,4.25rem)]">
            {beat.head}
          </h2>
          {beat.sub && (
            <p className="text-center text-lg text-white/70">{beat.sub}</p>
          )}
          <PhoneFrame>
            <Image
              src={beat.screen.src}
              alt={beat.screen.alt}
              fill
              sizes="(max-width: 768px) 70vw, 420px"
              priority={i === 0}
              className="object-cover"
            />
          </PhoneFrame>
          {i === 0 && (
            <>
              <p className="text-sm text-white/50">
                We don&rsquo;t sell supplements.
              </p>
              <p className="text-xs font-medium tracking-[0.25em] text-white/40">
                APPLE WATCH&ensp;|&ensp;WHOOP&ensp;|&ensp;OURA&ensp;|&ensp;GARMIN
              </p>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
