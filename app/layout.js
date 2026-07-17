import "./globals.css";
import { Archivo_Black, Inter } from "next/font/google";

/*
 * §3.1a closest-match: Archivo Black as the display grotesque (heavy,
 * tight, all-caps), Inter for body. Self-hosted by next/font at build —
 * no runtime third-party requests. Swap when the founder supplies the
 * exact family from the Canva marketing file.
 */
const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
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
