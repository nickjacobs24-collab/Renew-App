"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function AboutRenew() {
  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const whoRef = useRef(null);
  const believeRef = useRef(null);
  const resultRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const whoInView = useInView(whoRef, { once: true, margin: "-100px" });
  const believeInView = useInView(believeRef, { once: true, margin: "-100px" });
  const resultInView = useInView(resultRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFBF7' }}>
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="pt-16 pb-2 md:pt-20 md:pb-3">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h1 
            className="font-bold tracking-tight text-gray-900 mb-6" 
            style={{ fontSize: '44px', lineHeight: '1.1' }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            About Renew
          </motion.h1>
          <motion.p 
            className="font-semibold tracking-tight text-gray-900 mb-6" 
            style={{ fontSize: '28px', lineHeight: '1.3' }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Health advice should be honest. Most of it isn't.
          </motion.p>
          <motion.p 
            className="text-gray-600" 
            style={{ fontSize: '17px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Supplements can be one of the simplest ways to support your health — but the industry has made them confusing, commercial, and hard to trust.
          </motion.p>
        </div>
      </section>

   {/* WHY RENEW EXISTS */}
      <section ref={whyRef} className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="font-bold tracking-tight text-gray-900 mb-6" 
            style={{ fontSize: '28px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Why Renew Exists
          </motion.h2>
          <motion.div 
            className="space-y-4 text-gray-600" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p>
              The supplement world isn't working as it should. Marketing is often prioritised over evidence. Brands promote what sells, not what works. And most advice comes from someone trying to make money — not someone trying to help you stay healthy.
            </p>
            <p>
              When money's involved, transparency and truth often come second.
            </p>
          </motion.div>
          <motion.p 
            className="font-medium text-gray-900 mt-6" 
            style={{ fontSize: '20px', lineHeight: '1.5' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Renew was created to be a counterweight.
          </motion.p>
          <motion.div 
            className="space-y-4 text-gray-600 mt-6" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p>
              We give you guidance that isn't influenced by sales, sponsorships, or commissions — just clear, human, evidence-led information you can trust.
            </p>
            <motion.p 
              className="font-medium text-gray-800" 
              style={{ fontSize: '18px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              No motive to sell. Only to inform.
            </motion.p>
            <p>
              We believe something simple: you are the only person who can truly know what's right for your health. Our job is to give you the information and clarity you need to make those decisions with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NATURE IMAGE DIVIDER */}
  <section className="w-full pt-4 pb-0 md:pt-6 md:pb-0">
        <img 
          src="/images/about-renew.jpg" 
          alt="Sunlit forest"
          className="w-full h-auto object-cover"
          style={{ maxHeight: '400px' }}
        />
      </section>

      {/* WHO RENEW IS FOR */}
      <section ref={whoRef} className="pt-4 pb-16 md:pt-6 md:pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="font-bold tracking-tight text-gray-900 mb-6" 
            style={{ fontSize: '28px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Who Renew Is For
          </motion.h2>
          <motion.div 
            className="space-y-4 text-gray-600" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p>
              Supplements aren't just for athletes, biohackers, or the 1% chasing ultimate performance. And they're not just for the version of "health" you see online or on Instagram — the gym selfies and protein shake posts.
            </p>
          </motion.div>
          <motion.p 
            className="font-medium text-gray-900 my-6" 
            style={{ fontSize: '20px', lineHeight: '1.5' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            They're for real people with real goals.
          </motion.p>
          <motion.div 
            className="space-y-4 text-gray-600" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p>
              Whether that's moving better, sleeping better, thinking clearer, feeling calmer, having more energy, or simply digesting food more comfortably.
            </p>
            <p>
              The industry markets to extremes. Renew is built for everyone else — the vast majority who just want to feel good and stay well, without pressure, noise, or complexity.
            </p>
          </motion.div>
          <motion.p 
            className="font-medium text-gray-900 mt-6" 
            style={{ fontSize: '20px', lineHeight: '1.5' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Ten seconds a day. From home.
          </motion.p>
          <motion.p 
            className="text-gray-600 mt-4" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Benefits you can see and feel — when someone finally tells you honestly what works for you and your goals.
          </motion.p>
        </div>
      </section>

      {/* WHAT WE BELIEVE - DARK SECTION */}
      <section ref={believeRef} className="pt-16 pb-20 md:pt-20 md:pb-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="font-bold tracking-tight mb-8" 
            style={{ fontSize: '28px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={believeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            What We Believe
          </motion.h2>
          <motion.div 
            className="space-y-3" 
            style={{ fontSize: '17px', lineHeight: '1.7' }}
            initial={{ opacity: 0, y: 20 }}
            animate={believeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p>
              <span className="font-semibold">Safe</span>
              <span className="text-gray-400"> — based on evidence, nothing else</span>
            </p>
            <p>
              <span className="font-semibold">Effective</span>
              <span className="text-gray-400"> — chosen because it works</span>
            </p>
            <p>
              <span className="font-semibold">Human</span>
              <span className="text-gray-400"> — real and written for everyday life</span>
            </p>
            <p>
              <span className="font-semibold">Honest</span>
              <span className="text-gray-400"> — the full picture, so you can choose what's right</span>
            </p>
            <p>
              <span className="font-semibold">Respectful</span>
              <span className="text-gray-400"> — nobody cares more about your health than you</span>
            </p>
          </motion.div>
          <motion.p 
            className="mt-10 text-gray-300 font-medium" 
            style={{ fontSize: '19px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={believeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            We offer guidance. You decide.
          </motion.p>
        </div>
      </section>

            {/* HOW WE CHOOSE */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="font-bold tracking-tight text-gray-900 mb-6" 
            style={{ fontSize: '28px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            How We Choose
          </motion.h2>
                    <motion.p 
            className="text-gray-600 mb-6" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            To keep Renew safe and trustworthy, every supplement must meet three criteria.
          </motion.p>
          <motion.div 
            className="space-y-3" 
            style={{ fontSize: '17px', lineHeight: '1.7' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Safe</span>
              <span> — suitable for everyday use, and shown to be safe over the long term.</span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Proven</span>
              <span> — delivers real benefits, supported by decades of human trials and real-world results.</span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Science-led</span>
              <span> — chosen using guidance from leading medical and scientific organisations.</span>
            </p>
          </motion.div>
          <motion.p 
            className="text-gray-600 mt-6" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            All three filters are informed by the world's most trusted health institutions — including the NHS, Mayo Clinic, and Harvard Health.
          </motion.p>
        </div>
      </section>

      {/* THE RESULT */}
 {/* THE RESULT */}
      <section ref={resultRef} className="py-16 md:py-20" style={{ backgroundColor: '#F2F2EE' }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="font-bold tracking-tight text-gray-900 mb-6" 
            style={{ fontSize: '28px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={resultInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            The Result
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-2" 
            style={{ fontSize: '16px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={resultInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Less confusion. Less noise. Less risk.
          </motion.p>
          <motion.p 
            className="font-medium text-gray-900" 
            style={{ fontSize: '20px', lineHeight: '1.5' }}
            initial={{ opacity: 0, y: 20 }}
            animate={resultInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            More confidence. More safety. More control.
          </motion.p>
        </div>
      </section>

    </div>
  );
}