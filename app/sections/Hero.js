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
        /* Mostly black, with only a subtle DARK MUTED green settling in
           at the base (not half-and-half, not bright). Also serves as the
           video poster fallback. */
        background:
          "linear-gradient(180deg, #000000 0%, #000000 62%, #071a06 84%, #0c2a0d 100%)",
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
      {/* Mobile: block sits moderately higher (more bottom than top padding
          with justify-center), tighter gap. Desktop restored via md:. */}
      <div
        className={`${GRID} relative z-10 flex flex-1 flex-col items-center justify-center gap-8 pt-16 pb-28 text-center md:gap-12 md:pt-28 md:pb-20`}
      >
        {/* No supporting line (§4: deliberate, do not add one).
            Forced two-line break — controlled, not free-wrapping:
            line 1 "KNOW IF YOUR SUPPLEMENTS", line 2 "ACTUALLY WORK".
            Mobile: larger scale + tighter tracking (grows on wider phones);
            desktop scale restored via md:. */}
        <h1 className="fade-rise font-display uppercase leading-[1.05] text-white tracking-[-0.05em] text-[clamp(1.5rem,6.4vw,2.05rem)] md:tracking-[-0.04em] md:text-[clamp(1.5rem,6vw,4.75rem)]">
          <span className="whitespace-nowrap">Know if your supplements</span>
          <br />
          actually <span style={{ color: ACCENT }}>work</span>
        </h1>

        {/* Mobile: slightly smaller button so it doesn't overpower the
            heading; desktop size restored via md:. */}
        <a
          href="#get-prism"
          className="fade-rise fade-rise-2 rounded-full bg-white px-8 py-3 text-base font-medium text-black shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-transform hover:scale-[1.03] md:px-10 md:py-4 md:text-lg"
        >
          Join the waitlist
        </a>
      </div>
    </section>
  );
}
