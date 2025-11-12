import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Renew - Supplements Made Simple",
  description: "Clear guidance for better health decisions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}