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
    <div className="relative min-h-screen bg-gradient-to-b from-[#0f2554] via-[#1e3a8a] to-[#2563eb]">
      {/* NAV - Fixed */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-transparent">
        <div className="flex h-full items-center justify-between px-4 md:px-6">
          {/* Logo */}
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

          {/* Right links */}
          <div className="hidden md:flex items-center space-x-8">
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

      {/* SECTION 1: HERO */}
      <section className="relative flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1
            }}
          >
            Find the supplements that actually work - safely.
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
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
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="mt-24"
          >
          <a  
              href="#how-renew-works"
              className="text-white/80 hover:text-white text-xl font-medium transition-colors inline-block"
            >
              See How Renew Works
            </a>
          </motion.div>

    {/* Apple-style fade pulse arrow - CENTERED & MORE OBVIOUS */}
          <div className="mt-8 flex justify-center">
            <motion.div
              initial={{ opacity: 0.3 }}
              animate={{ 
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="pointer-events-none"
            >
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 2: HOW RENEW WORKS - Same gradient background continues */}
       <section id="how-renew-works" className="relative min-h-screen flex items-center justify-center -mt-[250px] px-6">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="text-white text-center mb-24"
            style={{
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1
            }}
          >
            How Renew Works
          </motion.h2>

          {/* 3 Steps with arrows */}
          <div className="relative grid md:grid-cols-3 gap-12 mb-20 items-start">
            
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-center relative"
            >
                 <div className="font-bold text-slate-300 mb-6" style={{ fontSize: "4.95rem", fontWeight: 700 }}>1</div>
                  <p className="text-gray-100 text-sm leading-relaxed" style={{ fontWeight: 500 }}>
                Tell us your goals — energy, sleep, calm, immunity, and more.
              </p>
            </motion.div>

            {/* Arrow 1→2 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
               className="hidden md:flex absolute left-[33.333%] -translate-x-1/2 top-8 items-center justify-center pointer-events-none drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
            >
              <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-center relative"
            >
              <div className="font-bold text-slate-300 mb-6" style={{ fontSize: "4.95rem", fontWeight: 700 }}>2</div>
              <p className="text-gray-100 text-sm leading-relaxed" style={{ fontWeight: 500 }}>
                We narrow it to 3–5 proven, evidence-backed options.
              </p>
               <span className="text-gray-300 text-sm mt-1 block">
                Learn more about{" "}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("/results/apphowwechoose", "_blank", "width=1000,height=800");
                  }}
                  className="underline hover:text-white/90 transition-colors"
                >
                  how we choose
                </button>.
              </span>
            </motion.div>

            {/* Arrow 2→3 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
               className="hidden md:flex absolute left-[66.666%] -translate-x-1/2 top-8 items-center justify-center pointer-events-none drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
            >
              <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-center relative"
            >
               <div className="font-bold text-slate-300 mb-6" style={{ fontSize: "4.95rem", fontWeight: 700 }}>3</div>
                 <p className="text-gray-100 text-sm leading-relaxed" style={{ fontWeight: 500 }}>
                You choose where to buy — we don't sell supplements.
              </p>
            </motion.div>

          </div>

          {/* CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <p className="text-white text-xl font-semibold mb-6">
              Ready to see your options?
            </p>
            <button
              onClick={() => router.push("/goals")}
              className="group relative inline-flex items-center rounded-full bg-white/95 px-8 py-4 text-base font-semibold text-blue-600 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
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
            <p className="text-white/70 text-sm mt-4">
              No sales pitch. Just clarity.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: TRUST BAR - White background for contrast */}
      <section className="bg-white pt-4 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <p className="text-gray-600 text-sm mb-8">
            Evidence-led guidance. Sources include:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Image 
              src="/images/nhs-logo.png" 
              alt="NHS" 
              width={75} 
              height={28} 
              className="object-contain filter grayscale opacity-60" 
            />
            <span className="text-gray-400 text-sm">•</span>
            <Image 
              src="/images/harvard-health-logo.png" 
              alt="Harvard Health" 
              width={80} 
              height={34} 
              className="object-contain filter grayscale opacity-60" 
            />
            <span className="text-gray-400 text-sm">•</span>
            <Image 
              src="/images/world-health-organization-logo.png" 
              alt="Mayo Clinic" 
              width={100} 
              height={32} 
              className="object-contain filter grayscale opacity-60" 
            />
          </div>
        </motion.div>
      </section>

    </div>
  );
}