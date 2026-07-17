import { GRID } from "./system";
import HeroVideo from "./HeroVideo";

/*
 * Panel 1 — HERO (§4, DARK, centred; amended round). Bottles removed
 * permanently. Levels-anatomy: dimmed background video (slot in
 * HeroVideo.js, dormant until footage is supplied) under a content
 * layer of headline → CTA. The black→green gradient is the canvas
 * and the video's poster fallback. Motion: CSS-only load fade,
 * disabled under prefers-reduced-motion.
 */

const ACCENT = "var(--prism-accent)";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{
        /* Black at top, deep green through the lower half (App Store
           screen 1 canvas). Also serves as the video poster fallback. */
        background:
          "linear-gradient(180deg, #000000 0%, #000000 38%, #052605 62%, #0A3C0A 100%)",
      }}
    >
      <HeroVideo />

      {/* Minimal nav (§4 Panel 1): logo left, "Join waitlist" right — nothing else. */}
      <nav className="absolute inset-x-0 top-0 z-10 py-5">
        <div className={`${GRID} flex items-center justify-between`}>
          <a href="/" className="font-display text-sm tracking-[0.35em] text-white">
            PRISM
          </a>
          <a
            href="#get-prism"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Join waitlist
          </a>
        </div>
      </nav>

      {/* ONE tight centred stack, vertically centred as a unit:
          headline → small gap → button directly beneath. The video
          slot (above) fills the frame behind this; over the bare
          gradient the tight stack still reads as composed, not
          floating. */}
      <div
        className={`${GRID} relative z-10 flex flex-1 flex-col items-center justify-center gap-8 pt-24 pb-16 text-center`}
      >
        {/* No supporting line (§4: deliberate, do not add one) */}
        <h1 className="fade-rise font-display uppercase leading-[0.98] tracking-[-0.045em] text-white text-[clamp(2.8rem,8.5vw,7rem)]">
          Know if your
          <br />
          supplements
          <br />
          actually <span style={{ color: ACCENT }}>work</span>
        </h1>

        <a
          href="#get-prism"
          className="fade-rise fade-rise-2 rounded-full bg-white px-10 py-4 text-lg font-medium text-black shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-transform hover:scale-[1.03]"
        >
          Join the waitlist
        </a>
      </div>

      {/* Visuals-round slot marker — the full-bleed background video goes
          behind the text (HeroVideo). Unobtrusive; v1 may ship on the
          gradient alone. Remove when footage lands. */}
      <span className="pointer-events-none absolute inset-x-0 bottom-4 z-10 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
        Hero background video — TBD
      </span>
    </section>
  );
}
