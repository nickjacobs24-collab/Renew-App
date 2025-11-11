"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function LandingPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Ref for "How It Works" section to trigger animations
  const howItWorksRef = useRef(null);
  const isInView = useInView(howItWorksRef, { once: true, margin: "-100px" });

  // Ref for green cards section
const cardsRef = useRef(null);
const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  // Animation variants for text blocks
  const textBlockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
      <div className="relative min-h-screen bg-white">
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
          transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
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
          transition={{ duration: 1.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
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
          transition={{ duration: 1.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
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
  
  <div 
    className="relative overflow-hidden"
    style={{
      maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
    }}
  >
    
    <div 
      style={{
        display: 'flex',
        animation: 'scroll-logos 30s linear infinite',
      }}
    >
      
      <div className="flex items-center gap-24 px-12 shrink-0">
        <img src="/images/nhs-logo.png" alt="NHS" className="h-7 brightness-0 invert opacity-35 mix-blend-screen" />
                <img src="/images/harvard-health-logo.png" alt="Harvard" className="h-9 brightness-0 invert opacity-40 mix-blend-screen" />
        <img src="/images/world-health-organization-logo.png" alt="WHO" className="h-9 brightness-0 invert opacity-40 mix-blend-screen" />
        <img src="/images/mayo-clinic-logo.png" alt="Mayo Clinic" className="h-9 brightness-0 invert opacity-40 mix-blend-screen" />
        <img src="/images/cleveland-clinic-logo.png" alt="Cleveland Clinic" className="h-7 brightness-0 invert opacity-30 mix-blend-screen" />
        <img src="/images/nih-logo.png" alt="NIH" className="h-9 brightness-0 invert opacity-30 mix-blend-screen" />
      </div>
      
      <div className="flex items-center gap-24 px-12 shrink-0">
        <img src="/images/nhs-logo.png" alt="NHS" className="h-7 brightness-0 invert opacity-35 mix-blend-screen" />
        <img src="/images/harvard-health-logo.png" alt="Harvard" className="h-9 brightness-0 invert opacity-40 mix-blend-screen" />
        <img src="/images/world-health-organization-logo.png" alt="WHO" className="h-9 brightness-0 invert opacity-40 mix-blend-screen" />
        <img src="/images/mayo-clinic-logo.png" alt="Mayo Clinic" className="h-9 brightness-0 invert opacity-40 mix-blend-screen" />
        <img src="/images/cleveland-clinic-logo.png" alt="Cleveland Clinic" className="h-7 brightness-0 invert opacity-30 mix-blend-screen" />
        <img src="/images/nih-logo.png" alt="NIH" className="h-9 brightness-0 invert opacity-30 mix-blend-screen" />
      </div>
      
      <div className="flex items-center gap-24 px-12 shrink-0">
        <img src="/images/nhs-logo.png" alt="NHS" className="h-7 brightness-0 invert opacity-35 mix-blend-screen" />
        <img src="/images/harvard-health-logo.png" alt="Harvard" className="h-9 brightness-0 invert opacity-40 mix-blend-screen" />
        <img src="/images/world-health-organization-logo.png" alt="WHO" className="h-9 brightness-0 invert opacity-40 mix-blend-screen" />
        <img src="/images/mayo-clinic-logo.png" alt="Mayo Clinic" className="h-9 brightness-0 invert opacity-40 mix-blend-screen" />
        <img src="/images/cleveland-clinic-logo.png" alt="Cleveland Clinic" className="h-7 brightness-0 invert opacity-30 mix-blend-screen" />
        <img src="/images/nih-logo.png" alt="NIH" className="h-9 brightness-0 invert opacity-30 mix-blend-screen" />
      </div>
      
    </div>
    
  </div>
  
</div>
    
  </div>
  
</section>

{/* PARALLAX BELIEF BLOCK */}
<section 
  ref={howItWorksRef}
  id="how-renew-works"
  className="relative py-12 flex items-center justify-center px-6 overflow-hidden"
  style={{ backgroundColor: '#FFFFFF' }}
>
  {/* Subtle Parallax Background */}
  <motion.div
    className="absolute inset-0 z-0"
    style={{ backgroundColor: '#FFFFFF' }}
    animate={isInView ? { y: 0 } : { y: -10 }}
    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
  />
  
  {/* Belief Text - Center Aligned */}
  <div className="relative z-10 max-w-[700px] mx-auto text-center">
    
    {/* SECTION HEADING */}
    <motion.h2 
      className="text-5xl md:text-6xl font-bold text-gray-900 mb-20 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 1.8, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
    >
      What we believe
    </motion.h2>
    
    {/* Paragraph 1 Group - The Ideal */}
    <div className="mb-7">
      <motion.p 
className="text-base md:text-lg font-bold text-gray-900 leading-relaxed mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Supplements should be simple
      </motion.p>
      <motion.p 
        className="text-sm md:text-base text-gray-600 leading-relaxed"
        style={{ lineHeight: 1.6 }}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        They can be one of the highest-impact ways to support your health — quick to take, easy to understand, and backed by science.
      </motion.p>
    </div>
    
    {/* Paragraph 2 Group - The Requirement */}
    <div className="mb-7">
      <motion.p 
className="text-base md:text-lg font-bold text-gray-900 leading-relaxed mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1.4, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Guidance should be based on evidence
      </motion.p>
      <motion.p 
        className="text-sm md:text-base text-gray-600 leading-relaxed"
        style={{ lineHeight: 1.6 }}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        But for it to be that simple, you need to know what works and why, based on clear, unbiased facts.
      </motion.p>
    </div>
    
    {/* Paragraph 3 Group - The Problem */}
    <div className="mb-7">
      <motion.p 
className="text-base md:text-lg font-bold text-gray-900 leading-relaxed mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1.4, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Most advice is designed to sell, not help
      </motion.p>
      <motion.p 
        className="text-sm md:text-base text-gray-600 leading-relaxed"
        style={{ lineHeight: 1.6 }}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1.6, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Most brands profit from what they recommend. Marketing claims often trump evidence, making it hard to know what actually works.
      </motion.p>
    </div>
    
    {/* Paragraph 4 Group - The Solution */}
    <div>
      <motion.p 
className="text-base md:text-lg font-bold text-gray-900 leading-relaxed mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1.4, delay: 2.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        We make it simple again
      </motion.p>
      <motion.p 
        className="text-sm md:text-base text-gray-600 leading-relaxed"
        style={{ lineHeight: 1.6 }}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1.6, delay: 2.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Health guidance shouldn't driven by sales targets. We show you what works for your goals, based on research from leading institutions. We'll share where you can buy them, but never profit from it.
      </motion.p>
    </div>
    
  </div>
</section>

{/* HOW IT WORKS SECTION - WITH FADE-IN ON SCROLL */}
<motion.section 
  ref={cardsRef}
  className="relative pt-20 pb-12 px-6" 
  style={{ backgroundColor: '#F0F6F2' }}
  initial={{ opacity: 0 }}
  animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
  transition={{ duration: 0.8, delay: 3.0, ease: [0.4, 0, 0.2, 1] }}
>
  <div className="max-w-[90vw] mx-auto">
    
    {/* Section Heading - Center Aligned */}
    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center">
      How it works
    </h2>
    
    {/* 3 Step Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
      
      {/* Step 1 */}
      <div className="flex flex-col">
        <div className="relative w-full h-[296px] mb-5 rounded-2xl overflow-hidden">
          <img 
            src="/images/howitworks-step1-visual.jpg" 
            alt="Tell us your goals"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded mb-3 self-start">
          Step 1
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2.5">
          Tell us your goals
        </h3>
        <p className="text-base text-gray-600 leading-relaxed">
          Choose what you want to improve — energy, sleep, immunity, or focus. Takes 2 minutes.
        </p>
      </div>
      
      {/* Step 2 */}
{/* Step 2 */}
<div className="flex flex-col">
  <div className="relative w-full h-[296px] mb-5 rounded-2xl overflow-hidden">
    <img 
      src="/images/howitworks-step2-visual.jpg" 
      alt="We match proven options"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded mb-3 self-start">
    Step 2
  </div>
  <h3 className="text-xl font-semibold text-gray-900 mb-2.5">
    We match proven options
  </h3>
  <p className="text-base text-gray-600 leading-relaxed mb-3">
    We analyze trusted research and narrow it to 2-3 supplements that work for your goals.
  </p>
<a 
  href="/results/apphowwechoose" 
  className="text-gray-500 hover:text-blue-600 text-sm font-medium underline hover:no-underline transition-colors"
>
  How we choose
</a>
</div>
      
      {/* Step 3 */}
      <div className="flex flex-col">
        <div className="relative w-full h-[296px] mb-5 rounded-2xl overflow-hidden">
          <img 
            src="/images/howitworks-step3-visual.jpg" 
            alt="You choose where to buy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded mb-3 self-start">
          Step 3
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2.5">
          You choose where to buy
        </h3>
        <p className="text-base text-gray-600 leading-relaxed">
          Pick your retailer. We don't sell — we guide. You stay in control.
        </p>
      </div>
      
    </div>
    
    {/* CTA Button - Center Aligned */}
    <div className="text-center">
     <a 
        href="/goals"
        className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-14 py-3.5 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-black hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-gray-900/50 focus:ring-offset-2"
      >
        Get Started
        <span style={{ fontSize: '1.2rem', transform: 'translateY(-2px)', display: 'inline-block' }}>›</span>
      </a>
    </div>
    
  </div>
</motion.section>

    </div>
  );
}