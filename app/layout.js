import "./globals.css";
import { Inter, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

/*
 * Typography: ONE sans family — Inter — for everything (headlines, body,
 * eyebrows, buttons, nav, footer). Hierarchy is carried by weight only:
 * headlines 600–700, body 400, eyebrow labels 500. Weights 600/700 are
 * loaded here so the headline swap from the old display face is real, not
 * synthesised. Self-hosted by next/font at build — no runtime requests.
 */
const body = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
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
      className={`${body.variable} ${serif.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
