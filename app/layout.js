import "./globals.css";
import { Archivo, Inter, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

/*
 * §3.1a closest-match: Archivo (multi-weight grotesque) for display,
 * set to MEDIUM globally (§ global-refinement round — large-and-lighter
 * premium feel per Oura/Levels heroes, not heavy/black). Inter for
 * body, with a light weight for supporting copy. Self-hosted by
 * next/font at build — no runtime third-party requests.
 */
const display = Archivo({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/*
 * Typographic-variation pass: an ITALIC SERIF accent face, matching the
 * serif in the app screens ("Sleep", "Improving"). Newsreader is the
 * closest-match (§3.1a) — a text/display serif with a refined italic, in
 * the Oura/Levels editorial register. Used sparingly as an accent
 * alongside the grotesque; the green accent-word treatment is separate.
 */
const serif = Newsreader({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Prism",
  description: "Know if your supplements actually work.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${serif.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
