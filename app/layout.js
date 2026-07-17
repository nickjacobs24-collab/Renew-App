import "./globals.css";
import { Archivo, Inter } from "next/font/google";

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

export const metadata = {
  title: "Prism",
  description: "Know if your supplements actually work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
