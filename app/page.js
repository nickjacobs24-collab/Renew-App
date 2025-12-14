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
          <div className="flex items-center space-x-8">
            <a
href="/results/appaboutrenew"
  className="text-white/90 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
>
  About Renew
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
  <div className="absolute inset-0 z-10 bg-black/55" />
  
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
            fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
          }}
        >
          Lasting Health. Made Simple.
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
          Supplement guidance for your goals.
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
  
  <div className="flex items-center justify-center gap-12 px-6">
    <img src="/images/nhs-logo.png" alt="NHS" className="h-7 brightness-0 invert opacity-35" />
    <img src="/images/harvard-health-logo.png" alt="Harvard" className="h-9 brightness-0 invert opacity-40" />
    <img src="/images/world-health-organization-logo.png" alt="WHO" className="h-9 brightness-0 invert opacity-40" />
    <img src="/images/mayo-clinic-logo.png" alt="Mayo Clinic" className="h-9 brightness-0 invert opacity-40" />
    <img src="/images/cleveland-clinic-logo.png" alt="Cleveland Clinic" className="h-7 brightness-0 invert opacity-30" />
    <img src="/images/nih-logo.png" alt="NIH" className="h-9 brightness-0 invert opacity-30" />
  </div>
  
</div>
    
  </div>
  
</section>

{/* PARALLAX BELIEF BLOCK */}
<section 
  ref={howItWorksRef}
  id="how-renew-works"
  className="relative pt-10 pb-4 overflow-hidden"
  style={{ backgroundColor: '#FFFFFF' }}
>
  <motion.div
    className="absolute inset-0 z-0"
    style={{ backgroundColor: '#FFFFFF' }}
    animate={isInView ? { y: 0 } : { y: -10 }}
    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
  />
  
{/* Centered column, centered text */}
<div className="relative z-10 max-w-[960px] mx-auto px-6">
  
  <motion.h2 
    className="text-5xl md:text-6xl font-bold text-gray-900 mb-13 text-center"
    initial={{ opacity: 0, y: 10 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
    transition={{ duration: 1.8, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
  >
    What we believe.
  </motion.h2>
  
  <motion.div 
    className="mb-10 text-center"
    initial={{ opacity: 0, y: 10 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
    transition={{ duration: 1.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <p className="text-gray-600 font-medium mb-2" style={{ fontSize: '16px', lineHeight: 1.85 }}>
      Health advice should be honest.
    </p>
    <p className="text-gray-500" style={{ fontSize: '16px', lineHeight: 1.85 }}>
      Supplements can be one of the simplest ways to support your health.<br />
      But the way they're presented can make them confusing and hard to trust.
    </p>
  </motion.div>
  
  <motion.div 
    className="mb-10 text-center"
    initial={{ opacity: 0, y: 10 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
    transition={{ duration: 1.6, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <p className="text-gray-600 font-medium mb-2" style={{ fontSize: '16px', lineHeight: 1.85 }}>
      In health, evidence should always come first.
    </p>
    <p className="text-gray-500" style={{ fontSize: '16px', lineHeight: 1.85 }}>
      Companies are often incentivised to promote what sells.<br/> This can influence the advice people encounter. <br/>
      As a result, clarity and transparency can be hard to find.
    </p>
  </motion.div>
  
  <motion.div 
    className="mb-10 text-center"
    initial={{ opacity: 0, y: 10 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
    transition={{ duration: 1.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <p className="text-gray-600 font-medium mb-2" style={{ fontSize: '16px', lineHeight: 1.85 }}>
      Renew was created to be a counterweight.
    </p>
    <p className="text-gray-500" style={{ fontSize: '16px', lineHeight: 1.85 }}>
      Clear, practical and grounded in science. Renew doesn't sell supplements.<br/>
      It shows which ones are supported by evidence from leading health institutions.
    </p>
  </motion.div>
  
  <motion.div 
    className="mb-7 text-center"
    initial={{ opacity: 0, y: 10 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
    transition={{ duration: 1.6, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <p className="text-gray-600 font-medium mb-2" style={{ fontSize: '16px', lineHeight: 1.85 }}>
      You're the only person who knows what's right for your health.
    </p>
    <p className="text-gray-500" style={{ fontSize: '16px', lineHeight: 1.85 }}>
      Renew exists to give you the clarity and confidence to make those decisions.
    </p>
  </motion.div>
  
</div>
</section>

{/* HOW IT WORKS SECTION */}
<section 
  className="relative pt-16 pb-12 px-6" 
  style={{ backgroundColor: '#F0F6F2' }}
>
  <div className="max-w-[90vw] mx-auto">
    
    {/* Section Heading - Center Aligned */}
    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center">
      How it works.
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
          Choose what you want to improve. <br/> Energy, sleep, immunity, focus and more
        </p>
      </div>
      
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
    Renew matches supplements to your goals
  </h3>
  <p className="text-base text-gray-600 leading-relaxed mb-3">
    It reviews the research and identifies three supplements for your goals.
  </p>
<a 
  href="/results/appaboutrenew" 
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
          Buy from a store you trust. We show you where.<br/> We don’t sell. You stay in control.
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
  </section>

{/* FOOTER */}
<footer className="bg-gray-900 py-6">
  <div className="flex flex-col md:flex-row items-center justify-end gap-6 px-4 md:px-6">
    <a 
      href="/results/applegal" 
      className="text-white/70 hover:text-white text-sm transition-colors"
    >
      Legal
    </a>
    <a 
      href="mailto:nick.jacobs24@gmail.com" 
      className="text-white/70 hover:text-white text-sm transition-colors"
    >
      Contact
    </a>
  </div>
</footer>

    </div>
  );
}