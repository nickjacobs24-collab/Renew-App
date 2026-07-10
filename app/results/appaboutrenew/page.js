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
            Health advice should be honest.
          </motion.p>
          <motion.p 
            className="text-gray-600" 
            style={{ fontSize: '17px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Supplements can be one of the simplest ways to support your health.
          </motion.p>
          <motion.p 
            className="text-gray-600" 
            style={{ fontSize: '17px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            But the way they're presented can make them confusing and hard to trust.
          </motion.p>
        </div>
      </section>

      {/* WHY RENEW EXISTS */}
      <section ref={whyRef} className="pt-16 pb-8 md:pt-20 md:pb-10">
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
            className="space-y-8" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div>
              <p className="text-gray-700 font-medium mb-2">In health, evidence should always come first.</p>
              <p className="text-gray-500">Companies are often incentivised to promote what sells.</p>
              <p className="text-gray-500">This can influence the advice people encounter.</p>
              <p className="text-gray-500">As a result, clarity and transparency can be hard to find.</p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">Renew was created to be a counterweight.</p>
              <p className="text-gray-500">Clear, practical and grounded in science.</p>
              <p className="text-gray-500">Renew doesn't sell supplements.</p>
              <p className="text-gray-500 mb-4">It shows which ones are supported by evidence from leading health institutions.</p>
              <p className="text-gray-500 font-semibold italic">We make it simple to choose supplements that work for your goals.</p>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">You're the only person who knows what's right for your health.</p>
              <p className="text-gray-500">Renew exists to give you the clarity and confidence to make those decisions.</p>
            </div>
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
            className="space-y-6" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            animate={whoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-gray-500">
              Supplements aren't just for athletes or the 1% chasing peak performance.<br />
              They're not just for the version of "health" you see online.
            </p>
            <p className="text-gray-700 font-medium">
              They're for everyday health. Real people with real goals.
            </p>
              <p className="text-gray-500">
              Whether that's moving better, sleeping better or having more energy.<br />
              New to supplements or more experienced.<br />
              They're for people who want to support their health without pressure, complexity, or confusion.
            </p>
            <p className="text-gray-500">
              
            </p>
            <p className="text-gray-700 font-medium">
              Ten seconds a day. From home.  Benefits you can see and feel.
            </p>
          </motion.div>
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
          <motion.p 
            className="text-gray-400"
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            animate={believeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Supplements should be designed for everyday life. Simple, practical, and sustainable.
          </motion.p>
          <motion.p 
            className="mt-6 text-gray-100 font-medium" 
            style={{ fontSize: '16px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={believeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            We offer guidance. You decide.
          </motion.p>
        </div>
      </section>
      
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
            To keep Renew focused on safety and trust, every recommendation is an evidence-based supplement. It meets three core criteria:
          </motion.p>
          <motion.ul 
            className="space-y-3 mb-6"
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <li className="text-gray-600 font-medium">An established safety profile</li>
            <li className="text-gray-600 font-medium">Evidence from human trials and real-world use</li>
            <li className="text-gray-600 font-medium">A basis in scientific research</li>
          </motion.ul>
          <motion.p 
            className="text-gray-500" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            These criteria are informed by guidance from leading health institutions.<br />
            Including the NHS, Mayo Clinic, and Harvard Health.
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
            Less confusion. Less noise.
          </motion.p>
          <motion.p 
            className="font-medium text-gray-900" 
            style={{ fontSize: '20px', lineHeight: '1.5' }}
            initial={{ opacity: 0, y: 20 }}
            animate={resultInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            More confidence. More control.
          </motion.p>
        </div>
      </section>

    </div>
  );
}