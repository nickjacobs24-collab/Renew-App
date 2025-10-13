"use client"
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles, Zap, Brain, ChevronRight, Clock, Shield, X } from 'lucide-react';

// Correct goal data from CSV
const goalData = {
  'Energy': { 
    top3: ['B-Complex', 'Creatine', 'CoQ10'], 
    advanced: ['Magnesium Glycinate', 'Rhodiola Rosea']
  },
  'Mind': { 
    top3: ['Omega-3', 'B-Complex', 'Citicoline'], 
    advanced: ["Lion's Mane", 'Rhodiola Rosea']
  },
  'Sleep': { 
    top3: ['Glycine', 'L-Theanine', 'Magnesium L-Threonate'], 
    advanced: ['Magnesium Glycinate', 'Ashwagandha']
  },
  'Calm': { 
    top3: ['Glycine', 'L-Theanine', 'Apigenin'], 
    advanced: ['Magnesium Glycinate', 'Ashwagandha']
  },
  'Immunity': { 
    top3: ['Vitamin D3', 'Zinc', 'Quercetin'], 
    advanced: ['Vitamin C', 'NAC']
  },
  'Wellness': { 
    top3: ['Vitamin D3', 'Omega-3', 'Magnesium Glycinate'], 
    advanced: ['Vitamin C', 'Multivitamin']
  }
};

// Supplement database with all details - COMPLETE
const supplementDatabase = {
  'B-Complex': {
    name: 'B-Complex',
    benefitStatement: 'Turns food into fuel',
    stat: 'Essential for energy metabolism',
    description: 'B vitamins are essential cofactors in energy metabolism. Without adequate B vitamins, your body cannot efficiently convert nutrients into usable energy.',
    keyBenefits: [
      'Helps convert food to energy',
      'Supports brain function',
      'Reduces tiredness and fatigue'
    ],
    timeToEffect: '3-7 days',
    dosage: 'Per label instructions'
  },
  'Creatine': {
    name: 'Creatine',
    benefitStatement: 'Powers muscles and brain',
    stat: 'Strength gains in 1-2 weeks',
    description: 'Boosts cellular energy for muscles and brain. One of the most evidence-backed supplements for performance.',
    keyBenefits: [
      'Boosts cellular ATP energy',
      'Improves workout performance',
      'Enhances mental focus'
    ],
    timeToEffect: '1-2 weeks',
    dosage: '3-5g daily'
  },
  'CoQ10': {
    name: 'CoQ10',
    benefitStatement: 'Powers every cell in your body',
    stat: '30% more cellular energy',
    description: 'Powers cellular energy production and heart health. Essential for mitochondrial function, especially over 40.',
    keyBenefits: [
      'Supports cellular energy',
      'Essential for heart health',
      'Powerful antioxidant'
    ],
    timeToEffect: '2-4 weeks',
    dosage: '100-200mg daily'
  },
  'Omega-3': {
    name: 'Omega-3 DHA/EPA',
    benefitStatement: 'Sharper mind and mood',
    stat: 'Mental clarity in 2-4 weeks',
    description: 'Reduces inflammation and supports heart, brain and mood. Your brain is 60% fat, and omega-3s are essential building blocks.',
    keyBenefits: [
      'Supports cognitive performance',
      'Reduces inflammation',
      'Improves mood balance'
    ],
    timeToEffect: '2-4 weeks',
    dosage: '2-3g EPA+DHA daily'
  },
  'Citicoline': {
    name: 'Citicoline',
    benefitStatement: 'Enhanced focus and memory',
    stat: 'Mental clarity in 1-2 weeks',
    description: 'Enhances focus, memory, and brain energy. Supports acetylcholine and brain energy production.',
    keyBenefits: [
      'Improves focus and attention',
      'Enhances memory formation',
      'Boosts brain energy'
    ],
    timeToEffect: '1-2 weeks',
    dosage: '250-500mg daily'
  },
  "Lion's Mane": {
    name: "Lion's Mane",
    benefitStatement: 'Natural brain boost',
    stat: 'Cognitive benefits in 4-8 weeks',
    description: 'Supports nerve growth and cognitive function. Contains compounds that stimulate nerve growth factor production.',
    keyBenefits: [
      'Promotes nerve growth',
      'Improves memory and focus',
      'Supports brain health'
    ],
    timeToEffect: '4-8 weeks',
    dosage: '1000-3000mg daily'
  },
  'Rhodiola Rosea': {
    name: 'Rhodiola Rosea',
    benefitStatement: 'Stress resilience and energy',
    stat: 'Reduced fatigue in 1-2 weeks',
    description: 'Adapts body to stress, boosts resilience and mental stamina. Excellent for mental fatigue and burnout.',
    keyBenefits: [
      'Reduces mental fatigue',
      'Builds stress resilience',
      'Improves mental stamina'
    ],
    timeToEffect: '1-2 weeks',
    dosage: '200-400mg standardized'
  },
  'Magnesium Glycinate': {
    name: 'Magnesium Glycinate',
    benefitStatement: 'Relaxation and recovery',
    stat: 'Better sleep in 3-7 days',
    description: 'Relaxes muscles, calms nerves, and improves sleep quality. The most gentle and absorbable form of magnesium.',
    keyBenefits: [
      'Promotes muscle relaxation',
      'Improves sleep quality',
      'Reduces stress and tension'
    ],
    timeToEffect: '3-7 days',
    dosage: '200-400mg before bed'
  },
  'Glycine': {
    name: 'Glycine',
    benefitStatement: 'Deeper sleep and relaxation',
    stat: 'Deeper sleep in 3-7 days',
    description: 'Promotes deeper sleep and relaxation. Supports collagen production and calms the nervous system.',
    keyBenefits: [
      'Promotes deep sleep',
      'Supports relaxation',
      'Aids recovery'
    ],
    timeToEffect: '3-7 days',
    dosage: '3g before bed'
  },
  'L-Theanine': {
    name: 'L-Theanine',
    benefitStatement: 'Calm focus without drowsiness',
    stat: 'Calm focus in 30-60 minutes',
    description: 'Creates calm focus without drowsiness. Balances stress and pairs perfectly with coffee.',
    keyBenefits: [
      'Promotes calm alertness',
      'Reduces anxiety',
      'Improves focus'
    ],
    timeToEffect: '30-60 minutes',
    dosage: '100-400mg as needed'
  },
  'Magnesium L-Threonate': {
    name: 'Magnesium L-Threonate',
    benefitStatement: 'Brain-specific magnesium',
    stat: 'Cognitive improvements in 2-6 weeks',
    description: 'The only form of magnesium proven to cross the blood-brain barrier and increase brain magnesium levels.',
    keyBenefits: [
      'Enhances memory and learning',
      'Supports cognitive function',
      'Improves brain health'
    ],
    timeToEffect: '2-6 weeks',
    dosage: '1000-2000mg daily'
  },
  'Ashwagandha': {
    name: 'Ashwagandha',
    benefitStatement: 'Reduces cortisol and stress',
    stat: 'Cortisol reduction in 2-4 weeks',
    description: 'Reduces cortisol and anxiety while building stress resilience. Clinically proven adaptogen.',
    keyBenefits: [
      'Lowers cortisol levels',
      'Reduces anxiety',
      'Improves stress resilience'
    ],
    timeToEffect: '2-4 weeks',
    dosage: '300-600mg standardized'
  },
  'Apigenin': {
    name: 'Apigenin',
    benefitStatement: 'Natural sleep promoter',
    stat: 'Sleep improvements within days',
    description: 'Natural compound that promotes calm and deeper sleep. Found in chamomile.',
    keyBenefits: [
      'Promotes sleep onset',
      'Reduces anxiety',
      'Enhances relaxation'
    ],
    timeToEffect: 'Within days',
    dosage: '50mg before bed'
  },
  'Vitamin D3': {
    name: 'Vitamin D3',
    benefitStatement: 'Sunshine vitamin for immunity',
    stat: 'Energy boost in 2-4 weeks',
    description: 'Supports immunity, bone strength, mood and energy. Essential for overall health.',
    keyBenefits: [
      'Boosts immune function',
      'Improves mood and energy',
      'Supports bone health'
    ],
    timeToEffect: '2-4 weeks',
    dosage: '2000-5000 IU daily'
  },
  'Zinc': {
    name: 'Zinc',
    benefitStatement: 'Immune system supercharger',
    stat: 'Stronger immunity in 1-2 weeks',
    description: 'Supercharges immune function and wound healing. Critical for immune defense.',
    keyBenefits: [
      'Enhances immune function',
      'Speeds wound healing',
      'Supports skin health'
    ],
    timeToEffect: '1-2 weeks',
    dosage: '8-15mg daily'
  },
  'Quercetin': {
    name: 'Quercetin',
    benefitStatement: 'Natural antihistamine',
    stat: 'Allergy relief in 1-2 weeks',
    description: 'Powerful antioxidant that supports immune function and reduces allergies.',
    keyBenefits: [
      'Reduces allergies',
      'Supports immune system',
      'Anti-inflammatory'
    ],
    timeToEffect: '1-2 weeks',
    dosage: '500-1000mg daily'
  },
  'Vitamin C': {
    name: 'Vitamin C',
    benefitStatement: 'Essential immune support',
    stat: 'Ongoing immune protection',
    description: 'Essential antioxidant for immune function and collagen production.',
    keyBenefits: [
      'Boosts immune system',
      'Supports skin health',
      'Aids recovery'
    ],
    timeToEffect: 'Ongoing',
    dosage: '500-1000mg daily'
  },
  'NAC': {
    name: 'NAC',
    benefitStatement: 'Respiratory and detox support',
    stat: 'Respiratory benefits in 1-2 weeks',
    description: 'Boosts glutathione, supporting detox and lung health.',
    keyBenefits: [
      'Supports respiratory health',
      'Enhances detoxification',
      'Boosts glutathione'
    ],
    timeToEffect: '1-2 weeks',
    dosage: '600-1200mg daily'
  },
  'Multivitamin': {
    name: 'Multivitamin',
    benefitStatement: 'Nutritional insurance policy',
    stat: 'General wellness support',
    description: 'Fills nutritional gaps with essential vitamins and minerals.',
    keyBenefits: [
      'Fills dietary gaps',
      'Supports overall health',
      'Provides essential nutrients'
    ],
    timeToEffect: 'Ongoing',
    dosage: 'Per product instructions'
  }
};

// Get supplements for each goal - with explicit ordering
const getSupplementsForGoal = (goal, includeAdvanced = false) => {
  const goalConfig = goalData[goal];
  if (!goalConfig) return [];
  
  const supplementNames = includeAdvanced 
    ? [...goalConfig.top3, ...goalConfig.advanced]
    : goalConfig.top3;
    
  return supplementNames.map(name => {
    const supplement = supplementDatabase[name];
    if (!supplement) {
      console.warn(`Supplement ${name} not found in database`);
      return null;
    }
    return {
      ...supplement,
      id: name.toLowerCase().replace(/[^a-z0-9]/g, '-')
    };
  }).filter(Boolean);
};

// Initial supplements to show (Top 3 only) - EXPLICIT
const energySupplements = [
  {
    ...supplementDatabase['B-Complex'],
    id: 'b-complex'
  },
  {
    ...supplementDatabase['Creatine'],
    id: 'creatine'
  },
  {
    ...supplementDatabase['CoQ10'],
    id: 'coq10'
  }
];

const mindSupplements = [
  {
    ...supplementDatabase['Omega-3'],
    id: 'omega-3'
  },
  {
    ...supplementDatabase['B-Complex'],
    id: 'b-complex-mind'
  },
  {
    ...supplementDatabase['Citicoline'],
    id: 'citicoline'
  }
];

// Premium full-width supplement card component
const SupplementCard = ({ supplement, index, themeColor }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), 1500 + (index * 200));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ perspective: '1000px' }}
    >
      <div 
        className={`relative transition-transform duration-700 preserve-3d ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div 
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex h-[240px]">
            {/* Image Section - 45% */}
            <div className="w-[45%] relative bg-gradient-to-br from-gray-50 to-gray-100">
              {/* Natural source imagery placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  {/* Larger image area for real photos */}
                  <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 mb-3" />
                  <p className="text-sm text-gray-500 font-medium">Natural Source</p>
                </div>
              </div>
            </div>

            {/* Content Section - 55% */}
            <div className="w-[55%] p-8 flex flex-col justify-center">
              <div>
                {/* Supplement Name in theme color */}
                <h3 
                  className="text-3xl font-bold mb-3"
                  style={{ color: themeColor }}
                >
                  {supplement.name}
                </h3>
                
                {/* Key benefit - action oriented */}
                <p className="text-gray-900 font-semibold text-lg mb-3">
                  {supplement.benefitStatement}
                </p>
                
                {/* Supporting stat - lighter gray but bigger */}
                <p className="text-gray-600 text-base mb-5">
                  {supplement.stat}
                </p>

                {/* Learn more link */}
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="text-blue-600 hover:text-blue-700 text-base font-medium flex items-center transition-colors"
                >
                  Learn more 
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute inset-0 bg-white rounded-3xl shadow-lg [transform:rotateY(180deg)]"
          style={{ 
            backfaceVisibility: 'hidden',
            height: '240px'
          }}
        >
          <div className="h-full flex">
            {/* Left side - main description */}
            <div className="w-[55%] p-8 border-r border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold" style={{ color: themeColor }}>{supplement.name}</h3>
                <button
                  onClick={() => setIsFlipped(false)}
                  className="text-gray-400 hover:text-gray-600 -mt-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{supplement.description}</p>
            </div>

            {/* Right side - benefits and details */}
            <div className="w-[45%] p-8 bg-gray-50">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Benefits</h4>
                  <ul className="space-y-1">
                    {supplement.keyBenefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-xs mr-2 mt-0.5" style={{ color: themeColor }}>•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-200 flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {supplement.timeToEffect}
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-3 h-3 mr-1" />
                    Clinically studied
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section header component with staggered animations
const SectionHeader = ({ icon: Icon, color, title, description, secondParagraph }) => {
  const headerRef = useRef(null);
  const [visibleElements, setVisibleElements] = useState({
    icon: false,
    title: false,
    description: false,
    secondPara: false
  });

  useEffect(() => {
    // Staggered fade-in on mount (no scroll needed for initial content)
    const timers = [
      setTimeout(() => setVisibleElements(prev => ({ ...prev, icon: true })), 100),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, title: true })), 400),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, description: true })), 800),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, secondPara: true })), 1200)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div ref={headerRef}>
      <div className={`transition-all duration-1000 ${
        visibleElements.icon ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-8 shadow-lg"
             style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }}>
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>

      <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight pr-12 lg:pr-20 transition-all duration-1000 ${
        visibleElements.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {title}
      </h1>

      <p className={`text-xl text-gray-700 leading-relaxed pr-12 lg:pr-20 transition-all duration-1000 ${
        visibleElements.description ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {description}
      </p>

      {secondParagraph && (
        <p className={`text-xl text-gray-700 leading-relaxed pr-12 lg:pr-20 mt-6 transition-all duration-1000 ${
          visibleElements.secondPara ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {secondParagraph}
        </p>
      )}
    </div>
  );
};

export default function ResultsPage() {
  const router = useRouter();
  const [showEnergyAdvanced, setShowEnergyAdvanced] = useState(false);
  const [showMindAdvanced, setShowMindAdvanced] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Get all Energy supplements when advanced is toggled
  const displayedEnergySupplements = showEnergyAdvanced 
    ? getSupplementsForGoal('Energy', true)
    : energySupplements;

  // Get all Mind supplements when advanced is toggled  
  const displayedMindSupplements = showMindAdvanced
    ? getSupplementsForGoal('Mind', true)
    : mindSupplements;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic opacity based on scroll
  const energyOpacity = Math.min(0.25 + (scrollProgress * 0.2), 0.35);
  const mindOpacity = Math.min(0.15 + (scrollProgress * 0.3), 0.35);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/30 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push('/goals')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors p-2 -m-2 rounded-lg hover:bg-gray-100/50"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Back</span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">Renew</span>
          </div>
        </div>
      </header>

      {/* Continuous scrolling content */}
      <div className="relative">
        {/* Energy Section */}
        <section className="relative py-20 lg:py-32" style={{ 
          background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(251, 146, 60, ${energyOpacity * 0.6}) 50%, rgba(251, 146, 60, ${energyOpacity}) 100%)`,
          transition: 'background 0.3s ease'
        }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <SectionHeader
                icon={Zap}
                color={{ from: '#fb923c', to: '#ea580c' }}
                title={<><span style={{ color: '#ea580c' }}>Energy</span> that lasts.</>}
                description={
                  <>
                    Energy <span className="font-extrabold">powers everything you do</span>. When you feel tired, it's often because your body isn't efficiently converting food into usable energy. Studies show that 76% of adults report regular fatigue<sup className="text-sm">1</sup>. These research-backed supplements can support energy at the source, helping you maintain more consistent energy throughout the day.
                  </>
                }
                secondParagraph="Below are some of the most researched supplements that can help support energy levels - click each one to learn how they work."
              />

              {/* Energy Cards - Full Width Stack */}
              <div className="mt-20 space-y-6">
                {displayedEnergySupplements.map((supplement, index) => (
                  <SupplementCard 
                    key={supplement.id} 
                    supplement={supplement} 
                    index={index}
                    themeColor="#ea580c"
                  />
                ))}
              </div>

              {/* Advanced Energy Toggle */}
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowEnergyAdvanced(!showEnergyAdvanced)}
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg rounded-full hover:from-orange-600 hover:to-orange-700 transition-colors duration-300 shadow-lg"
                >
                  {showEnergyAdvanced ? 'Show less' : `Explore ${goalData.Energy.advanced.length} more energy solutions`}
                  <ChevronRight className={`w-5 h-5 ml-3 transition-transform ${showEnergyAdvanced ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Smooth transition zone */}
        <div className="h-32 bg-gradient-to-b from-orange-50 to-purple-50" />

        {/* Mind Section */}
        <section className="relative py-20 lg:py-32" style={{ 
          background: `linear-gradient(180deg, rgba(139, 92, 246, ${mindOpacity * 0.6}) 0%, rgba(139, 92, 246, ${mindOpacity}) 100%)`,
          transition: 'background 0.3s ease'
        }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <SectionHeader
                icon={Brain}
                color={{ from: '#a855f7', to: '#7c3aed' }}
                title={<><span style={{ color: '#7c3aed' }}>Clear</span> thinking.</>}
                description={
                  <>
                    Mental clarity <span className="font-extrabold">shapes your entire day</span>. Whether you're solving complex problems or staying focused during conversations, your brain needs the right nutrients to function at its best. Research indicates that 1 in 3 adults struggle with brain fog and concentration issues<sup className="text-sm">2</sup>. These research-backed supplements can help support brain function, helping you think more clearly and maintain mental sharpness throughout the day.
                  </>
                }
                secondParagraph="Below are some of the most researched supplements that can help support clear thinking - click each one to learn how they work."
              />

              {/* Mind Cards - Full Width Stack */}
              <div className="mt-20 space-y-6">
                {displayedMindSupplements.map((supplement, index) => (
                  <SupplementCard 
                    key={supplement.id} 
                    supplement={supplement} 
                    index={index}
                    themeColor="#7c3aed"
                  />
                ))}
              </div>

              {/* Advanced Mind Toggle */}
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowMindAdvanced(!showMindAdvanced)}
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold text-lg rounded-full hover:from-purple-600 hover:to-purple-700 transition-colors duration-300 shadow-lg"
                >
                  {showMindAdvanced ? 'Show less' : `Explore ${goalData.Mind.advanced.length} more cognitive enhancers`}
                  <ChevronRight className={`w-5 h-5 ml-3 transition-transform ${showMindAdvanced ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Citations */}
        <footer className="bg-gray-50 py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-xs text-gray-500 space-y-1">
              <p><sup>1</sup> National Safety Council. (2023). Fatigue in the Workplace Survey Report.</p>
              <p><sup>2</sup> Harvard Medical School. (2023). Brain Fog: Memory and Attention After COVID-19.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}