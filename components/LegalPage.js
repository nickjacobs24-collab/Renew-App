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

export default function LegalPage({ title, children }) {
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

        {/* Body — normal reading size, standard paragraph spacing */}
        <div className="mt-6 space-y-5 text-[1.0625rem] leading-[1.7]">
          {children}
        </div>
      </div>
    </main>
  );
}
