"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* NAV - Fixed */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-transparent">
        <div className="flex h-full items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <Image
              src="/images/renew-logo-white.png"
              alt="Renew logo"
              width={80}
              height={32}
              className="object-contain md:w-[100px] md:h-[40px]"
              priority
            />
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO - Deep Blue */}
      <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-[#0f2554] to-[#2563eb] px-6">
        <div className="w-full max-w-4xl text-center">
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1
            }}
          >
            Find the supplements that actually work — safely.
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white/85 mb-12 max-w-3xl mx-auto"
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: "0.01em"
            }}
          >
            Most sites sell supplements. We don't. We show you what's proven, evidence-backed, and safe — so you can choose with confidence.
          </motion.p>

          {/* Scroll Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            
              <a href="#how-renew-works"
              className="text-white/70 hover:text-white text-base font-medium transition-colors inline-block"
            >
              How Renew Works ↓
            </a>
          </motion.div>

          {/* Bouncing scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16"
          >
            <a href="#how-renew-works" className="inline-block animate-bounce">
              <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: HOW RENEW WORKS - Off White */}
      <section id="how-renew-works" className="relative min-h-screen flex items-center justify-center bg-[#F9FAFB] py-24 px-6">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20"
          >
            How Renew Works
          </motion.h2>

          {/* 3 Steps */}
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-6xl font-light text-gray-300 mb-6">1</div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Tell us your goals — energy, sleep, calm, immunity, and more.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-6xl font-light text-gray-300 mb-6">2</div>
              <p className="text-gray-700 text-lg leading-relaxed">
                We narrow it to 3–5 proven, evidence-backed options.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-6xl font-light text-gray-300 mb-6">3</div>
              <p className="text-gray-700 text-lg leading-relaxed">
                You choose where to buy — we don't sell supplements.
              </p>
            </motion.div>

          </div>

          {/* CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-gray-800 text-xl font-semibold mb-6">
              Ready to see your options?
            </p>
            <button
              onClick={() => router.push("/goals")}
              className="group relative inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Take the quiz — 2 minutes
              <svg
                className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p className="text-gray-500 text-sm mt-4">
              No account. No sales pitch.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: TRUST BAR - Light Grey */}
      <section className="bg-[#F3F3F4] py-16 border-t border-gray-200/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <p className="text-gray-600 text-sm mb-8">
            Evidence-led guidance. Sources include:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 opacity-50">
            <Image 
              src="/images/nhs-logo.png" 
              alt="NHS" 
              width={60} 
              height={22} 
              className="object-contain filter grayscale" 
            />
            <span className="text-gray-400 text-sm">•</span>
            <Image 
              src="/images/harvard-health-logo.png" 
              alt="Harvard Health" 
              width={65} 
              height={28} 
              className="object-contain filter grayscale" 
            />
            <span className="text-gray-400 text-sm">•</span>
            <Image 
              src="/images/world-health-organization-logo.png" 
              alt="Mayo Clinic" 
              width={85} 
              height={26} 
              className="object-contain filter grayscale" 
            />
          </div>
        </motion.div>
      </section>

    </div>
  );
}