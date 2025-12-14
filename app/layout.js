import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";

export const metadata = {
  title: "Renew - Supplements Made Simple",
  description: "Clear guidance for better health decisions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>

      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}