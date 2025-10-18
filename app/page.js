"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LandingPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col overflow-hidden bg-gradient-to-b from-[#0f2554] to-[#2563eb]">
      {/* NAV - Fixed height for predictable layout */}
      <nav className="relative z-10 h-20 shrink-0 w-full">
        <div className="flex h-full items-center justify-between px-6">
          {/* Logo - Far Left */}
          <div className="flex items-center">
            <Image
              src="/images/renew-logo-white.png"
              alt="Renew logo"
              width={100}
              height={40}
              className="object-contain"
              priority
            />
          </div>

          {/* Right links - Far Right */}
          <div className="flex items-center space-x-8">
            <a
              href="/results/appaboutrenew"
              onClick={(e) => {
                e.preventDefault();
                window.open("/results/appaboutrenew", "_blank", "width=1000,height=800");
              }}
              className="text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
            >
              About Renew
            </a>
            <a
              href="/results/apphowwechoose"
              onClick={(e) => {
                e.preventDefault();
                window.open("/results/apphowwechoose", "_blank", "width=1000,height=800");
              }}
              className="text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
            >
              How We Choose
            </a>
            <a
              href="/results/appprivacy"
              onClick={(e) => {
                e.preventDefault();
                window.open("/results/appprivacy", "_blank", "width=1000,height=800");
              }}
              className="text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/results/appdisclaimer"
              onClick={(e) => {
                e.preventDefault();
                window.open("/results/appdisclaimer", "_blank", "width=1000,height=800");
              }}
              className="text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </nav>

      {/* HERO - Flex grow for remaining space */}
      <main className="flex grow items-center justify-center px-6">
        <div className="w-full max-w-5xl text-center">
          {/* Headline */}
          <h1
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span
              className="block text-white"
              style={{
                fontSize: "clamp(3.5rem, 12vw, 7rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1
              }}
            >
              Supplements
            </span>
            <span
              className="block text-white/80 mt-2"
              style={{
                fontSize: "clamp(3rem, 10vw, 6rem)",
                fontWeight: 100,
                letterSpacing: "-0.02em",
                lineHeight: 1
              }}
            >
              made simple.
            </span>
          </h1>

          {/* Subheading */}
<p
  className={`mt-8 md:mt-10 transition-all duration-1000 delay-200 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
  style={{
    fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.01em"
  }}
>
  <span className="text-white/60">
    Too many products. Too much noise. Renew makes it simple to find what really works
  </span>
  <br />
  <span className="text-white/90" style={{ fontWeight: 500 }}>
    for your goals.
  </span>
</p>

          {/* CTA */}
<div
  className={`mt-14 md:mt-16 transition-all duration-1000 delay-300 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
            <button
              onClick={() => router.push("/goals")}
              className="group relative inline-flex items-center rounded-full bg-white/95 px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-medium text-blue-600 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-blue-600/50 active:scale-100"
              aria-label="Get your supplement recommendations"
            >
              Get your recommendations
              <svg
                className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}