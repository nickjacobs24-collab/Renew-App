"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Legal() {
  const heroRef = useRef(null);
  const disclaimerRef = useRef(null);
  const privacyRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const disclaimerInView = useInView(disclaimerRef, { once: true, margin: "-100px" });
  const privacyInView = useInView(privacyRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFBF7' }}>
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h1 
            className="font-bold tracking-tight text-gray-900 mb-6" 
            style={{ fontSize: '44px', lineHeight: '1.1' }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Legal
          </motion.h1>
          <motion.p 
            className="text-gray-600" 
            style={{ fontSize: '17px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Important information about using Renew, your privacy, and your rights. Last updated December 2025.
          </motion.p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section ref={disclaimerRef} className="py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="font-bold tracking-tight text-gray-900 mb-6" 
            style={{ fontSize: '28px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={disclaimerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Disclaimer
          </motion.h2>
          <motion.div 
            className="space-y-4 text-gray-600" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            animate={disclaimerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p>
              Renew provides information for educational purposes only. It is not medical advice and should not replace professional guidance.
            </p>
            <p>
              Always follow the instructions on your product's label. If you have a medical condition, take prescription medication, are pregnant, breastfeeding, or under 18, please consult a qualified health professional before using supplements.
            </p>
            <p>
              Keep supplements in a cool, dry place, away from direct sunlight and out of reach of children. If you experience any adverse effects, discontinue use and seek professional guidance.
            </p>
            <p>
              Renew may earn a small commission from affiliate links. This never influences what we feature — our priority is to keep all recommendations evidence-based, transparent, and trustworthy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRIVACY POLICY */}
      <section ref={privacyRef} className="py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="font-bold tracking-tight text-gray-900 mb-6" 
            style={{ fontSize: '28px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={privacyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Privacy Policy
          </motion.h2>
          <motion.div 
            className="space-y-4 text-gray-600" 
            style={{ fontSize: '16px', lineHeight: '1.85' }}
            initial={{ opacity: 0, y: 20 }}
            animate={privacyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p>
              Renew values your privacy. This policy explains what information we collect, how we use it, and your rights under UK and EU data protection law.
            </p>
            <p>
              We collect basic usage data such as anonymous analytics (page views, clicks, device type) to understand how people use Renew. We use cookies for basic analytics and site functionality. If you provide feedback or share your email with us, we only collect that information with your consent.
            </p>
            <p>
              We use this information to improve Renew's design, content, and user experience. If you've shared your email, we may use it to follow up on feedback or notify you about updates. We do not sell your data to third parties.
            </p>
            <p>
              When you visit affiliate sites through our links, those retailers may collect their own data in line with their privacy policies. Renew does not control how third-party sites use data.
            </p>
            <p>
              Personal information is stored securely with limited access. We retain data only as long as necessary to provide our service and meet legal obligations. If you request, we will delete your personal data.
            </p>
            <p>
              Under data protection law, you have the right to request a copy of the data we hold about you, ask us to correct or delete your personal data, and withdraw consent at any time.
            </p>
            <p>
              We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={contactRef} className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="font-bold tracking-tight mb-6" 
            style={{ fontSize: '28px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Questions?
          </motion.h2>
          <motion.p 
            className="text-gray-400 mb-6" 
            style={{ fontSize: '16px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            For any privacy questions, to exercise your rights, or if you have questions about this disclaimer:
          </motion.p>
          <motion.a
            href="mailto:nick.jacobs24@gmail.com"
            className="text-white underline hover:no-underline"
            style={{ fontSize: '17px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            nick.jacobs24@gmail.com
          </motion.a>
        </div>
      </section>

    </div>
  );
}