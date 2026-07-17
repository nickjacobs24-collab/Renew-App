/*
 * §2.2 composition system — the ONE grid that governs the page.
 * Identical margins, gutters and spacing rhythm across all panels;
 * variation happens in arrangement only, never in the system.
 */

// Horizontal grid: same max-width and margins on every panel.
export const GRID = "mx-auto w-full max-w-6xl px-6 md:px-10";

// §4 Panel 6: THE launch flag. Flipping this swaps the waitlist block
// to the App Store state (badge + pricing) and the nav CTA to the App
// Store link — one flag, not scattered edits. Launch state renders are
// built when the App Store link and badge asset exist.
export const IS_LAUNCHED = false;

// Vertical rhythm: same block padding on every non-hero panel.
export const PANEL_PAD = "py-28 md:py-36";

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
// clearly labelled, correct proportions.
export function HumanPlaceholder({ mode = "light", className = "" }) {
  return (
    <div
      role="img"
      aria-label="Placeholder for human imagery, to be supplied"
      className={`flex items-center justify-center rounded-[var(--prism-radius)] ring-1 ${
        mode === "dark"
          ? "bg-white/[0.06] ring-white/10 text-white/50"
          : "bg-black/[0.08] ring-black/10 text-[#14140f]/50"
      } ${className}`}
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.3em]">
        Human visual TBD
      </span>
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
