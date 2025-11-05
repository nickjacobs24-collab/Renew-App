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
<section className="relative min-h-screen overflow-hidden">
  
  {/* Background Image */}
  <div 
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/images/hero-background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  />
  
  {/* Dark Overlay */}
  <div className="absolute inset-0 z-10 bg-black/60" />
  
  {/* Content Container */}
  <div className="relative z-20 min-h-screen flex flex-col">
    
    {/* Main Content (Headline + Subhead + Button) */}
    <div className="flex-1 flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-7xl text-center">
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-white"
          style={{
            fontSize: "clamp(2.75rem, 7.5vw, 5.5rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
          }}
        >
          Lasting health. Easier way.
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-white/90 mb-12 max-w-3xl mx-auto"
          style={{
            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: "0.01em",
            textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)"
          }}
        >
          Supplement guidance for your goals. Proven and unbiased.
        </motion.p>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <a  
            href="#how-renew-works"
            className="inline-flex items-center justify-center rounded-2xl bg-white/95 px-16 py-4 text-xl font-semibold text-gray-800 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
          >
            Get Started
          </a>
        </motion.div>
        
      </div>
    </div>
    {/* ↑ THIS CLOSES "flex-1 flex items-center..." */}
    
{/* Trust Logos - Bottom of Hero */}
<div className="w-full pb-8">
  
  <p className="text-center text-white/25 text-xs mb-4 tracking-wider uppercase">
    Informed by
  </p>
  
  <div className="relative overflow-hidden">
    
    {/* Scrolling Container with Mask Gradient */}
<div 
  className="flex animate-scroll-continuous"
  style={{
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
    maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
  }}
>
  
  {/* Set 1 */}
  <div className="flex items-center gap-24 px-12 shrink-0">
    <img src="/images/nhs-logo.png" alt="NHS" className="h-8 brightness-0 invert opacity-40 mix-blend-screen" />
    <img src="/images/harvard-health-logo.png" alt="Harvard" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/world-health-organization-logo.png" alt="WHO" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/mayo-clinic-logo.png" alt="Mayo Clinic" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/cleveland-clinic-logo.png" alt="Cleveland Clinic" className="h-8 brightness-0 invert opacity-40 mix-blend-screen" />
    <img src="/images/nih-logo.png" alt="NIH" className="h-10 brightness-0 invert opacity-40 mix-blend-screen" />
  </div>
  
  {/* Set 2 */}
  <div className="flex items-center gap-24 px-12 shrink-0">
    <img src="/images/nhs-logo.png" alt="NHS" className="h-8 brightness-0 invert opacity-40 mix-blend-screen" />
    <img src="/images/harvard-health-logo.png" alt="Harvard" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/world-health-organization-logo.png" alt="WHO" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/mayo-clinic-logo.png" alt="Mayo Clinic" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/cleveland-clinic-logo.png" alt="Cleveland Clinic" className="h-8 brightness-0 invert opacity-40 mix-blend-screen" />
    <img src="/images/nih-logo.png" alt="NIH" className="h-10 brightness-0 invert opacity-40 mix-blend-screen" />
  </div>
  
  {/* Set 3 */}
  <div className="flex items-center gap-24 px-12 shrink-0">
    <img src="/images/nhs-logo.png" alt="NHS" className="h-8 brightness-0 invert opacity-40 mix-blend-screen" />
    <img src="/images/harvard-health-logo.png" alt="Harvard" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/world-health-organization-logo.png" alt="WHO" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/mayo-clinic-logo.png" alt="Mayo Clinic" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/cleveland-clinic-logo.png" alt="Cleveland Clinic" className="h-8 brightness-0 invert opacity-40 mix-blend-screen" />
    <img src="/images/nih-logo.png" alt="NIH" className="h-10 brightness-0 invert opacity-40 mix-blend-screen" />
  </div>
  
  {/* Set 4 (duplicate for smoother loop) */}
  <div className="flex items-center gap-24 px-12 shrink-0">
    <img src="/images/nhs-logo.png" alt="NHS" className="h-8 brightness-0 invert opacity-40 mix-blend-screen" />
    <img src="/images/harvard-health-logo.png" alt="Harvard" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/world-health-organization-logo.png" alt="WHO" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/mayo-clinic-logo.png" alt="Mayo Clinic" className="h-10 brightness-0 invert opacity-50 mix-blend-screen" />
    <img src="/images/cleveland-clinic-logo.png" alt="Cleveland Clinic" className="h-8 brightness-0 invert opacity-40 mix-blend-screen" />
    <img src="/images/nih-logo.png" alt="NIH" className="h-10 brightness-0 invert opacity-40 mix-blend-screen" />
  </div>
  
</div>
    
  </div>
  
</div>
    
  </div>
  
</section>

      {/* SECTION 2: HOW RENEW WORKS - Same gradient background continues */}
      <section id="how-renew-works" className="relative min-h-screen flex items-center justify-center -mt-[80px] px-6">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="text-white text-center mb-12"
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
                      <p className="text-gray-100 text-lg leading-relaxed" style={{ fontWeight: 500 }}>
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
                  <p className="text-gray-100 text-lg leading-relaxed" style={{ fontWeight: 500 }}>
                We narrow it to 3–5 proven, evidence-backed options.
              </p>
               <span className="text-gray-300 text-base mt-1 block">
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
                     <p className="text-gray-100 text-lg leading-relaxed" style={{ fontWeight: 500 }}>
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
            <p className="text-white text-2xl font-semibold mb-6">
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

    </div>
  );
}