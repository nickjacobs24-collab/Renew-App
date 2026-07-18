/*
 * §2.2 composition system — the ONE grid that governs the page.
 * Identical margins, gutters and spacing rhythm across all panels;
 * variation happens in arrangement only, never in the system.
 */

// Horizontal grid: same max-width and margins on every panel.
// Global-refinement round: widened + less side padding (was max-w-6xl
// px-6 md:px-10) for the wider, less-boxed feel of Levels/Oura/Whoop.
export const GRID = "mx-auto w-full max-w-7xl px-5 md:px-8";

// ── Global type + spacing tokens (global-refinement round) ──────────
// Applied to ALL panels; never restyle per-panel.

// §4 headline-scale calibration. Hero (P1) is the singular display PEAK
// (own larger scale). Interior headlines are multi-line → STEPPED.
// Sizes bumped up to compensate for the lighter medium weight; tracking
// tightened. Tracking travels with the size token so it can't be
// dropped or double-set per panel.
// Tracking tightened (was -0.025em) — the loose default left large word
// gaps at display size ("ARE YOUR"). Travels with the size token.
export const HEADLINE_DISPLAY = "text-[clamp(2.6rem,6vw,4.9rem)] tracking-[-0.04em]";
export const HEADLINE_STEPPED = "text-[clamp(2.4rem,4.8vw,3.9rem)] tracking-[-0.04em]";

// Supporting/body copy: lighter weight, comfortable size — thinner and
// larger reads calmer. Colour (contrast) is set per mode at call site.
export const BODY_TEXT = "font-light leading-relaxed text-[clamp(1.1rem,1.6vw,1.3rem)]";

// Vertical rhythm — Levels-precision density. Panel padding cut ~50%
// (was py-16 md:py-24) AND interior panels are content-driven (no
// forced viewport height) — the two-colour band edge is the section
// separator, so tight padding is enough. GAP_STACK = intra-panel
// element gap (eyebrow→headline→support→content); GAP_SPLIT = between
// split columns.
// PANEL_PAD restored to the P6/P7 rhythm — py-8/12 crammed content
// against the top edge. Content-driven panels + this padding = composed,
// not the earlier viewport-forced over-spacing.
export const PANEL_PAD = "py-16 md:py-24";
export const GAP_STACK = "gap-4";
export const GAP_SPLIT = "gap-10 md:gap-12";

// §4 Panel 6: THE launch flag. Flipping this swaps the waitlist block
// to the App Store state (badge + pricing) and the nav CTA to the App
// Store link — one flag, not scattered edits. Launch state renders are
// built when the App Store link and badge asset exist.
export const IS_LAUNCHED = false;

// Every contained visual (UI fragments, device frames' outer wrap,
// designed elements) shares one radius + treatment, tinted per mode.
export function Contained({ as: Tag = "div", mode = "dark", className = "", children }) {
  return (
    <Tag
      className={`rounded-[var(--prism-radius)] ring-1 ${
        mode === "dark"
          ? "bg-white/[0.03] ring-white/10"
          : "bg-black/[0.03] ring-black/10"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

// §4 visual slots: marker for future HUMAN imagery. Founder supplies
// direction later — never source or generate imagery. Grey block,
// clearly labelled, correct proportions. With `label` (Whoop-card
// pattern) the label sits top-left inside the card and the TBD marker
// moves to the bottom-left; without it the marker centres.
export function HumanPlaceholder({
  mode = "light",
  label,
  marker = "Human visual TBD",
  className = "",
}) {
  const isDark = mode === "dark";
  const box = isDark
    ? "bg-white/[0.06] ring-white/10"
    : "bg-black/[0.08] ring-black/10";
  const strong = isDark ? "text-white/85" : "text-[#14140f]/85";
  const faint = isDark ? "text-white/45" : "text-[#14140f]/45";

  return (
    <div
      role="img"
      aria-label={`Placeholder for ${label ? label + " " : ""}human imagery, to be supplied`}
      className={`relative overflow-hidden rounded-[var(--prism-radius)] ring-1 ${box} ${className}`}
    >
      {label ? (
        <>
          <span
            className={`absolute left-4 top-4 max-w-[80%] text-xs font-medium uppercase tracking-[0.25em] ${strong}`}
          >
            {label}
          </span>
          <span
            className={`absolute bottom-4 left-4 max-w-[80%] text-[11px] font-medium uppercase leading-relaxed tracking-[0.25em] ${faint}`}
          >
            {marker}
          </span>
        </>
      ) : (
        <span
          className={`absolute inset-0 flex items-center justify-center px-6 text-center text-[11px] font-medium uppercase leading-relaxed tracking-[0.25em] ${faint}`}
        >
          {marker}
        </span>
      )}
    </div>
  );
}

// §2 grammar: eyebrow label — REQUIRED on every panel except the hero.
// One treatment in both modes (muted to 60% of the mode's type colour).
export function Eyebrow({ mode = "dark", children }) {
  return (
    <p
      className={`text-[11px] font-medium uppercase tracking-[0.3em] ${
        mode === "dark" ? "text-white/60" : "text-[#14140f]/60"
      }`}
    >
      {children}
    </p>
  );
}
