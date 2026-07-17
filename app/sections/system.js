/*
 * §2.2 composition system — the ONE grid that governs the page.
 * Identical margins, gutters and spacing rhythm across all panels;
 * variation happens in arrangement only, never in the system.
 */

// Horizontal grid: same max-width and margins on every panel.
export const GRID = "mx-auto w-full max-w-6xl px-6 md:px-10";

// Vertical rhythm: same block padding on every non-hero panel.
export const PANEL_PAD = "py-28 md:py-36";

// Every contained visual (UI fragments, device frames' outer wrap,
// designed elements) shares one radius + treatment.
export function Contained({ as: Tag = "div", className = "", children }) {
  return (
    <Tag
      className={`rounded-[var(--prism-radius)] bg-white/[0.03] ring-1 ring-white/10 ${className}`}
    >
      {children}
    </Tag>
  );
}
