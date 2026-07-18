import Link from "next/link";

/*
 * Reusable legal/document page layout — shared by the medical disclaimer,
 * and (later) the privacy policy and terms. Deliberately NOT a landing
 * panel: no gradients, no dark panels, no display headlines, no green
 * accents. A plain, warm off-white document with a centred reading
 * column, near-black body text, and the Prism wordmark linking home.
 *
 * Background is a very slightly warm off-white — lighter than the landing
 * page's cream (#fcfbf8), just a hint of warmth so it isn't stark white.
 */
const PAPER = "#fefdfb";
const INK = "#1a1a18";

export default function LegalPage({ title, updated, children }) {
  return (
    <main
      className="min-h-screen"
      style={{ background: PAPER, color: INK }}
    >
      <div className="mx-auto max-w-[65ch] px-6 py-16 md:py-20">
        {/* Prism wordmark — links back to the home page */}
        <Link
          href="/"
          className="font-display text-sm tracking-[0.35em]"
          style={{ color: INK }}
        >
          PRISM
        </Link>

        {/* Modest heading — document scale, not landing display scale */}
        <h1 className="mt-12 text-2xl font-semibold tracking-tight md:text-[1.75rem]">
          {title}
        </h1>

        {updated && (
          <p className="mt-2 text-sm" style={{ color: "rgba(26,26,24,0.6)" }}>
            Last updated: {updated}
          </p>
        )}

        {/*
         * Body — normal reading size, standard paragraph spacing. Section
         * <h2>s (smaller than the page title, clearly distinct from body,
         * consistent spacing above/below) and inline <a>s are styled here
         * so page files stay clean semantic markup. Reused by every legal
         * page.
         */}
        <div className="mt-8 text-[1.0625rem] leading-[1.7] [&>p]:mt-4 [&>h2]:mt-10 [&>h2]:mb-1 [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:tracking-tight [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </div>
    </main>
  );
}
