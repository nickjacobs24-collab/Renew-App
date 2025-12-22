"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CommonQuestions() {
  const heroRef = useRef(null);
  const questionsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const questionsInView = useInView(questionsRef, { once: true, margin: "-100px" });

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      id: 1,
      question: "Should I consider supplements?",
      content: (
        <div className="space-y-6" style={{ fontSize: '16px', lineHeight: '1.85' }}>
          <div>
            <p className="text-gray-700 font-medium mb-2">There are two main reasons people take supplements.</p>
            <p className="text-gray-500">Some take essentials for general health support. Others target specific goals like better sleep, more energy, or feeling calmer.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">When might they help?</p>
            <p className="text-gray-500">Modern life, diet, and individual health can all impact how your body functions and what it needs to support you in specific areas such as sleep, stress, and energy levels.</p>
          </div>
          <p className="text-gray-500 font-semibold">Supplements help when you have specific goals or want to support your overall wellbeing.</p>
        </div>
      )
    },
    {
      id: 2,
      question: "How do I choose the right supplements?",
      content: (
        <div className="space-y-6" style={{ fontSize: '16px', lineHeight: '1.85' }}>
          <div>
            <p className="text-gray-700 font-medium mb-2">Start with what you want to achieve.</p>
            <p className="text-gray-500">This might be a specific goal like better sleep, more energy, improved digestion, or feeling calmer. It could also be general health support.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">The supplement market can be overwhelming.</p>
            <p className="text-gray-500">There are many options, and it's not always clear where to start. Not all supplements are created equal.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">We help narrow it down.</p>
            <p className="text-gray-500">For each goal, Renew identifies three supplement options based on evidence from research and established safety profiles. We focus on what each supplement does, how it supports your goal, and a high-level view of safety. Information you need to make an informed decision.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">If you want to go deeper.</p>
            <p className="text-gray-500">Each supplement includes a supporting statement from a leading health organisation, which can be used as a starting point for further research.</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      question: "Are supplements safe?",
      content: (
        <div className="space-y-6" style={{ fontSize: '16px', lineHeight: '1.85' }}>
          <div>
            <p className="text-gray-700 font-medium mb-2">Many commonly used supplements have established safety records.</p>
            <p className="text-gray-500">When used as intended, they are generally well tolerated by most people.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">Your health context matters.</p>
            <p className="text-gray-500">Medications, existing health conditions, and pregnancy can all affect how your body responds to supplements. If you have specific concerns, it's worth speaking to a healthcare provider.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">Quality matters.</p>
            <p className="text-gray-500">Manufacturing standards, purity, sourcing, and dosing all play a role. We focus on supplements with established safety profiles and high quality standards.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">Understanding risks and side effects.</p>
            <p className="text-gray-500">Like anything that affects your health, supplements come with considerations to be aware of. Most people tolerate them well, but individual responses can vary. If you experience any unexpected effects, stop use and consult a healthcare provider.</p>
          </div>
        </div>
      )
    },
   {
      id: 4,
      question: "How do supplements work?",
      content: (
        <div className="space-y-10" style={{ fontSize: '16px', lineHeight: '1.85' }}>
          <p className="text-gray-500">Your body already does a lot on its own. Supplements don't replace that. They support it.</p>
          
          <div className="space-y-6">
            <p className="text-gray-700 font-medium" style={{ fontSize: '18px' }}>Supplements help in three simple ways:</p>
            
            <div>
              <p className="text-gray-600 font-medium mb-2">They top things up.</p>
              <p className="text-gray-500">Sometimes your body doesn't get enough of what it needs.</p>
              <p className="text-gray-500">Vitamin D is a common example.</p>
              <p className="text-gray-500">Many people don't get enough from sunlight alone, especially in winter.</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-2">They help your body feel and function better.</p>
              <p className="text-gray-500">Some supplements support things like calm, sleep, or focus.</p>
              <p className="text-gray-500">Magnesium can help muscles relax, which may make it easier to fall asleep.</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-2">They support long-term health in the background.</p>
              <p className="text-gray-500">Others work more quietly over time.</p>
              <p className="text-gray-500">Omega-3 supports heart and brain health, but the benefits tend to build gradually rather than being felt immediately.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-700 font-medium" style={{ fontSize: '18px' }}>There are a few things worth bearing in mind:</p>
            
            <div>
              <p className="text-gray-600 font-medium mb-2">Not everything works at the same speed.</p>
              <p className="text-gray-500">Some supplements can make a noticeable difference within days.</p>
              <p className="text-gray-500">Others need consistent use over weeks or months.</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-2">Think of supplements as part of your routine.</p>
              <p className="text-gray-500">Taking the right thing once rarely changes much.</p>
              <p className="text-gray-500">Consistency is what creates real results.</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-2">What matters is picking what fits your goals.</p>
              <p className="text-gray-500">Whether you're looking for better sleep, more energy, a calmer mind, or long-term health support, choosing supplements that align with what you're trying to improve makes all the difference.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      question: "What should I look for in a supplement?",
      content: (
        <div className="space-y-6" style={{ fontSize: '16px', lineHeight: '1.85' }}>
          <div>
            <p className="text-gray-700 font-medium mb-2">Evidence from human research.</p>
            <p className="text-gray-500">Look for supplements that have been studied in people, not just in theory or animal studies. This gives you confidence that the effects are relevant to how your body actually works.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">An established safety record.</p>
            <p className="text-gray-500">A supplement should have a history of safe use. This means it's been taken by many people over time without widespread issues.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">Clear, research-backed use.</p>
            <p className="text-gray-500">It should be clear what the supplement is meant to support and how it's typically used. This helps avoid vague claims and unnecessary complexity.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">Quality and manufacturing standards.</p>
            <p className="text-gray-500">Purity, testing, and sourcing matter. A supplement is only as good as what's actually in it and how it's made.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">Credible health backing.</p>
            <p className="text-gray-500">Support or guidance from leading health organisations such as the NHS, Mayo Clinic, or Harvard Health can be a useful signal that a supplement is grounded in established research.</p>
          </div>
          <p className="text-gray-500 font-semibold">These criteria are used to identify the supplements shown on Renew.</p>
        </div>
      )
    },
    {
      id: 6,
      question: "What are some of the main supplement brands?",
      content: (
        <div className="space-y-6" style={{ fontSize: '16px', lineHeight: '1.85' }}>
          <p className="text-gray-500">Even when you know which supplement you're interested in, choosing a brand can feel overwhelming.</p>
          <p className="text-gray-500">There are many options at different price points, and quality isn't always obvious from the label. While price matters, higher cost doesn't automatically mean better. Good quality exists across different ranges.</p>
          <p className="text-gray-500">Below are some widely recognised supplement brands. They have been grouped by price tier to help make the market easier to navigate. We don't partner with or receive payment from any brands.</p>
          
          <div>
            <p className="text-gray-700 font-medium mb-2">Value / Budget-friendly</p>
            <p className="text-gray-500 mb-2">Good for everyday basics. Widely available.</p>
            <ul className="text-gray-500 space-y-1 ml-4">
              <li>• Holland & Barrett</li>
              <li>• Vitabiotics</li>
              <li>• MyVitamins</li>
              <li>• Nature Made</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 font-medium mb-2">Mid-range / Everyday</p>
            <p className="text-gray-500 mb-2">A balance of quality, transparency, and affordability.</p>
            <ul className="text-gray-500 space-y-1 ml-4">
              <li>• Solgar</li>
              <li>• Now Foods</li>
              <li>• Jarrow Formulas</li>
              <li>• Life Extension</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-700 font-medium mb-2">Premium</p>
            <p className="text-gray-500 mb-2">Often focused on purity, testing standards, or specialised formulations.</p>
            <ul className="text-gray-500 space-y-1 ml-4">
              <li>• Pure Encapsulations</li>
              <li>• Thorne</li>
              <li>• Quicksilver Scientific</li>
              <li>• Designs for Health</li>
            </ul>
          </div>

          <p className="text-gray-500">What matters most is evidence, safety, and quality standards. The brand you choose should meet those criteria, whatever your budget.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFBF7' }}>
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="pt-12 pb-2 md:pt-16 md:pb-2">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h1 
            className="font-bold tracking-tight text-gray-900 mb-4" 
            style={{ fontSize: '44px', lineHeight: '1.1' }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Common Questions
          </motion.h1>
          <motion.p 
            className="text-gray-600" 
            style={{ fontSize: '17px', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Clear answers to help you understand supplements better.
          </motion.p>
        </div>
      </section>

      {/* QUESTIONS SECTION */}
      <section ref={questionsRef} className="pt-6 pb-8 md:pt-8 md:pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={questionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {questions.map((q, index) => (
              <div 
                key={q.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-4 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
                >
                  <h2 
                    className="font-bold tracking-tight text-gray-900 pr-4" 
                    style={{ fontSize: '19px', lineHeight: '1.3' }}
                  >
                    {q.question}
                  </h2>
                  <ChevronDown 
                    className={`flex-shrink-0 transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}
                    size={20}
                    strokeWidth={2}
                    color="#374151"
                  />
                </button>
                <AnimatePresence>
                  {openQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4">
                        {q.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LANDSCAPE IMAGE DIVIDER */}
      <section className="w-full pt-0 pb-8 md:pb-12">
        <div className="relative">
          {/* Subtle gradient overlay at top */}
          <div 
            className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(253, 251, 247, 0.6) 0%, transparent 100%)'
            }}
          />
          <img 
            src="/images/l-theanine-calm.jpg" 
            alt="Sunlight breaking through forest"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '500px' }}
          />
        </div>
      </section>

    </div>
  );
}