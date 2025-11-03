"use client"
import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Zap, Brain, SmileIcon, HeartIcon } from 'lucide-react';
import PersonalisationTail from './PersonalisationTail';
import EnergyVitaminB from "./Modals/energy/EnergyVitaminB";
import EnergyCreatine from "./Modals/energy/EnergyCreatine";
import EnergyOmega3 from "./Modals/energy/EnergyOmega3";
import SleepGlycine from "./Modals/Sleep/SleepGlycine";
import SleepLtheanine from "./Modals/Sleep/SleepLtheanine";
import SleepMagnesium from "./Modals/Sleep/SleepMagnesium";
import CalmMagnesium from "./Modals/Calm/CalmMagnesium";
import CalmLtheanine from "./Modals/Calm/CalmLtheanine";
import CalmGlycine from "./Modals/Calm/CalmGlycine";
import ImmZinc from "./Modals/Immunity/ImmZinc.js";
import ImmVitaminC from "./Modals/Immunity/ImmVitaminC";
import ImmVitaminD from "./Modals/Immunity/ImmVitaminD";
import GuthealthPrebioticsFibre from "./Modals/Guthealth/GuthealthPrebioticsFibre";
import GuthealthDigestiveEnzymes from "./Modals/Guthealth/GuthealthDigestiveEnzymes";
import GuthealthProbiotics from "./Modals/Guthealth/GuthealthProbiotics";
//
// ---------------------------
// DATA (unchanged)
// ---------------------------
//

// HARDCODED ENERGY SUPPLEMENTS - Design phase
const energySupplements = [
 {
  id: 'EnergyVitaminB',
  name: 'Vitamin B',
  benefitStatement: 'Turns food into energy',
  stat: 'Your body can’t store it',
  image: '/images/vitamin-b-energy.jpg',
  isPriority: true
  },
  {
  id: 'EnergyOmega3',
  name: 'Omega-3',
  benefitStatement: 'Helps your mind stay focused',
  stat: 'Your body can’t make it',
  image: '/images/omega3-energy.jpg',
  },
  {
  id: 'EnergyCreatine',
  name: 'Creatine',
  benefitStatement: 'Supports steady energy levels',
  stat: 'Your body makes it in small amounts',
  image: '/images/creatine-energy.jpg'
  }
];

// HARDCODED IMMUNITY SUPPLEMENTS - Design phase
const immunitySupplements = [
{
  id: 'ImmVitaminD',
  name: 'Vitamin D',
  benefitStatement: 'Helps build immune defences',
  stat: "Your body makes it from sunlight but it’s hard to get enough all year round",
  image: '/images/zinc-immunity.jpg',
  isPriority: true
  },
  {
    id: 'ImmVitaminC',
    name: 'Vitamin C',
    benefitStatement: 'Maintains immune defences',
    stat: "Your body can’t store it",
    image: '/images/vitamin-c-immunity.jpg'
  },
   {
    id: 'ImmZinc',
    name: 'Zinc',
    benefitStatement: 'Helps you recover when unwell',
    stat: 'Your body uses more when fighting illness',
    image: '/images/vitamin-d-immunity.jpg'
  }
];

// HARDCODED GUT HEALTH SUPPLEMENTS Design phase
const gutHealthSupplements = [
  {
    id: 'GuthealthProbiotics',
    name: 'Probiotics',
    benefitStatement: 'Helps keeps your gut in balance',
    stat: 'Your gut needs good bacteria to support immunity, mood, digestion',
    image: '/images/probiotics-guthealth.jpg',
    isPriority: true
  },
  {
    id: 'GuthealthDigestiveEnzymes',
    name: 'Digestive Enzymes',
    benefitStatement: 'Eases bloating and supports digestion',
    stat: 'Your body makes enzymes to digest food but sometimes needs extra help',
    image: '/images/digestive-enzymes-guthealth.jpg'
  },
  {
    id: 'GuthealthPrebioticsFibre',
    name: 'Fibre',
    benefitStatement: 'Helps keep you regular',
    stat: 'Most diets don’t provide enough Fibre',
    image: '/images/fibre-prebiotics-guthealth.jpg'
  }
];

// HARDCODED SLEEP SUPPLEMENTS - Design phase (you can edit content later)
const SleepSupplements = [
 
{
  id: 'SleepMagnesium',
  name: 'Magnesium',
  benefitStatement: 'Helps you fall asleep faster',
  stat: 'Hard to get enough from diet alone',
  image: '/images/magnesium-sleep.jpg',
  isPriority: true
  },
  {
  id: 'SleepLtheanine',
  name: 'L-Theanine',
  benefitStatement: 'Calms the mind before sleep',
  stat: 'A busy mind makes it hard to wind down',
  image: '/images/l-theanine-sleep.jpg',
  },
   {
    id: 'SleepGlycine',
    name: 'Glycine',
    benefitStatement: 'Supports deeper, more restful sleep',
    stat: 'Made naturally in the body but often in small amounts',
    image: '/images/glycine-sleep.jpg'
  }
];

// HARDCODED CALM SUPPLEMENTS - Design phase (3 items)
const CalmSupplements = [
{
  id: 'CalmLtheanine',
  name: 'L-Theanine',
  benefitStatement: 'Calms your mind without drowsiness',
  stat: 'Your body can’t make it',
  image: '/images/l-theanine-calm.jpg',
  isPriority: true
  },
  {
    id: 'CalmGlycine',
    name: 'Glycine',
    benefitStatement: 'Helps ease stress',
    stat: 'Your body makes some but uses more under stress',
    image: '/images/glycine-calm.jpg'
  },
  {
    id: 'CalmMagnesium',
    name: 'Magnesium',
    benefitStatement: 'Supports muscle releaxation',
    stat: 'Hard to get enough from diet alone',
    image: '/images/magnesium-calm.jpg'
  }
];

//
// ---------------------------
// PRESENTATIONAL PARTS (unchanged)
// ---------------------------
//

const IconBolt = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
  </svg>
);
const IconBrain = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 6a3 3 0 0 0-6 3 3 3 0 0 0 2 2.83V13a4 4 0 0 0 8 0V7A3 3 0 0 0 9 6z"/>
    <path d="M15 6a3 3 0 0 1 6 3 3 3 0 0 1-2 2.83V13a4 4 0 0 1-8 0V7a3 3 0 0 1 4-1z"/>
  </svg>
);
const IconSmile = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <path d="M9 9h.01M15 9h.01"/>
  </svg>
);
const IconClock = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
  </svg>
);
const IconShield = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3l7 3v6c0 4.3-3 8-7 9-4-1-7-4.7-7-9V6l7-3z"/>
  </svg>
);

// Premium full-width supplement card component
const SupplementCard = ({ supplement, index, category = 'Energy', categoryColor = '#F97316' }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    let timeoutId;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => setIsVisible(true), 1500 + (index * 200));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(node);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.unobserve(node);
    };
  }, [index]);

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e) => e.key === 'Escape' && setShowModal(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showModal]);

  useEffect(() => {
    if (showModal) {
      previousFocusRef.current = document.activeElement;
      const modal = document.querySelector('[role="dialog"]');
      modal?.querySelector('button, [href], input, textarea, [tabindex]')?.focus();
      return;
    }
    previousFocusRef.current?.focus?.();
  }, [showModal]);

  const getImageClasses = () => {
    switch(supplement.id) {
      case 'Vitamin B':
      case 'Vitamin B-mind':
        return supplement.id === 'Vitamin B-mind'
          ? 'filter brightness-115 saturate-90 contrast-95'
          : 'filter brightness-105 saturate-90 contrast-95';
      case 'creatine':
        return 'filter brightness-110 saturate-95 hue-rotate-[6deg] contrast-95 [filter:sepia(6%)]';
      case 'coq10':
        return 'filter brightness-105 saturate-95 contrast-95 blur-[1px]';
      case 'citicoline':
        return 'filter brightness-105 saturate-65 contrast-95';
      case 'omega3':
        return 'filter brightness-105 saturate-85 contrast-95';
      default:
        return '';
    }
  };

  const getOverlayClasses = () => {
    switch(supplement.id) {
      case 'Vitamin B':
      case 'Vitamin B-mind':
        return 'bg-gradient-to-t from-amber-50/25 via-white/10 to-transparent';
      case 'creatine':
        return 'bg-gradient-to-t from-amber-50/15 via-white/15 to-transparent';
      case 'coq10':
        return 'bg-gradient-to-t from-white/30 via-white/20 to-transparent';
      case 'citicoline':
        return 'bg-gradient-to-t from-white/40 via-slate-100/30 to-transparent';
      case 'omega3':
        return 'bg-gradient-to-t from-blue-50/30 via-white/15 to-transparent';
      default:
        return 'bg-gradient-to-t from-white/35 via-white/15 to-transparent';
    }
  };

const getTextTint = () => {
  switch(supplement.id) {
    case 'Vitamin B':
      return 'text-amber-700/80'; // Energy Vitamin B gets amber
    case 'Vitamin B-mind':
      return 'text-purple-700/80'; // Mind Vitamin B gets purple
    case 'creatine':
      return 'text-amber-700/80'; // Energy creatine gets amber
    case 'coq10':
      return 'text-orange-700/80';
    default:
      // Handle by category
      if (category === 'Energy') return 'text-amber-700/80';
      if (category === 'Mind') return 'text-purple-700/80';
      if (category === 'Sleep') return 'text-blue-700/80';
      if (category === 'Calm') return 'text-teal-700/80';
      if (category === 'Immunity') return 'text-teal-700/80';
      if (category === 'GutHealth') return 'text-orange-700/80';
      return 'text-gray-700/80'; // fallback
  }
};

  return (
    <>
      <div
        ref={cardRef}
        className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
<div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 h-[280px] w-full">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={supplement.image || '/images/Vitamin B.jpg'}
              alt={supplement.name || ''}
              fill
              priority={false}
              className={`object-cover ${getImageClasses()} ${category === 'Mind' ? 'opacity-96' : ''}`}
            />
          </div>

          <div className={`absolute inset-0 pointer-events-none ${getOverlayClasses()}`}></div>

<div className="relative z-20 flex h-[280px] items-center p-5 md:p-8">
  <div className="relative ml-auto w-full md:w-[55%] bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-7 shadow-lg ring-1 ring-black/5">
    {supplement.isPriority && (
      <div className="absolute top-2 right-2 bg-black text-white text-[11px] font-medium uppercase tracking-normal rounded-md px-4 py-[3px] z-10">
        TRY THIS FIRST
      </div>
    )}
    <div className={`text-[11px] tracking-wide uppercase font-semibold ${getTextTint()}`}>{category}</div>
    <h3 className="mt-1 text-[20px] md:text-[22px] font-semibold text-gray-900 tracking-tight">{supplement.name}</h3>
<p className="mt-1 text-[16px] font-semibold text-gray-600/85 leading-snug">
  {supplement.benefitStatement}
</p>
<p className="mt-1 text-[15px] text-gray-500">
  {supplement.stat}
</p>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold ${getTextTint()} hover:underline transition-colors`}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        {showModal && supplement.id === "EnergyVitaminB" && (
    <EnergyVitaminB onClose={() => setShowModal(false)} />
  )}

  {showModal && supplement.id === "EnergyCreatine" && (
    <EnergyCreatine onClose={() => setShowModal(false)} />
  )}

 {showModal && supplement.id === "EnergyOmega3" && (
    <EnergyOmega3 onClose={() => setShowModal(false)} />
  )}

       {showModal && supplement.id === "SleepGlycine" && (
    <SleepGlycine onClose={() => setShowModal(false)} />
  )}

     {showModal && supplement.id === "SleepLtheanine" && (
    <SleepLtheanine onClose={() => setShowModal(false)} />
  )}

     {showModal && supplement.id === "SleepMagnesium" && (
    <SleepMagnesium onClose={() => setShowModal(false)} />
  )}

       {showModal && supplement.id === "CalmGlycine" && (
    <CalmGlycine onClose={() => setShowModal(false)} />
  )}
       {showModal && supplement.id === "CalmMagnesium" && (
    <CalmMagnesium onClose={() => setShowModal(false)} />
  )}

       {showModal && supplement.id === "CalmLtheanine" && (
    <CalmLtheanine onClose={() => setShowModal(false)} />
  )}

         {showModal && supplement.id === "ImmVitaminC" && (
    <ImmVitaminC onClose={() => setShowModal(false)} />
  )}

         {showModal && supplement.id === "ImmVitaminD" && (
    <ImmVitaminD onClose={() => setShowModal(false)} />
  )}

           {showModal && supplement.id === "ImmZinc" && (
    <ImmZinc onClose={() => setShowModal(false)} />
  )}

{showModal && supplement.id === "GuthealthProbiotics" && (
  <GuthealthProbiotics onClose={() => setShowModal(false)} />
)}

{showModal && supplement.id === "GuthealthDigestiveEnzymes" && (
  <GuthealthDigestiveEnzymes onClose={() => setShowModal(false)} />
)}

{showModal && supplement.id === "GuthealthPrebioticsFibre" && (
  <GuthealthPrebioticsFibre onClose={() => setShowModal(false)} />
)}

      </div>      
    </>
  );
};

// Section header component
const SectionHeader = ({ icon: Icon, color, title, description, secondParagraph }) => {
  const headerRef = useRef(null);
  const [visibleElements, setVisibleElements] = useState({
    icon: false, title: false, description: false, secondPara: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements({ icon: false, title: false, description: false, secondPara: false });
          setTimeout(() => setVisibleElements(prev => ({ ...prev, icon: true })), 100);
          setTimeout(() => setVisibleElements(prev => ({ ...prev, title: true })), 400);
          setTimeout(() => setVisibleElements(prev => ({ ...prev, description: true })), 800);
          setTimeout(() => setVisibleElements(prev => ({ ...prev, secondPara: true })), 1200);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    if (headerRef.current) observer.observe(headerRef.current);
    return () => { if (headerRef.current) observer.unobserve(headerRef.current); };
  }, []);

  return (
    <div ref={headerRef}>
      <div className={`transition-all duration-1000 ${visibleElements.icon ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-4 shadow-lg"
             style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }}>
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>

<h1
  className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight pr-12 lg:pr-20"
  style={{ fontWeight: 800 }}
>
  {title}
</h1>

      <p className={`text-lg text-gray-700 leading-relaxed pr-12 lg:pr-20 transition-all duration-1000 ${visibleElements.description ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {description}
      </p>

      {secondParagraph && (
        <p className={`text-lg text-gray-700 leading-relaxed pr-12 lg:pr-20 mt-3 transition-all duration-1000 ${visibleElements.secondPara ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {secondParagraph}
        </p>
      )}
    </div>
  );
};

//
// ---------------------------
// RESULTS PAGE (updated)
// ---------------------------
//

import { Suspense } from 'react';

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-600">Loading results...</div>}>
      <ResultsPageContent />
    </Suspense>
  );
}

function ResultsPageContent() {
  const router = useRouter();
  const params = useSearchParams();

  // Read goals from query: /results?goals=energy,mind
  const goalsParam = params.get('goals') || '';
  const selectedGoals = goalsParam.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);

  // Booleans for each section
  const showEnergy = selectedGoals.includes('energy');
  const showSleep  = selectedGoals.includes('sleep');
  const showCalm   = selectedGoals.includes('calm');
  const showImm    = selectedGoals.includes('immunity');
  const showGutHealth = selectedGoals.includes('guthealth');

  // UI state
  const [showEnergyAdvanced, setShowEnergyAdvanced] = useState(false);
  const [showSleepAdvanced, setShowSleepAdvanced] = useState(false); 
  const [showImmunityAdvanced, setShowImmunityAdvanced] = useState(false);
  const [showGutHealthAdvanced, setShowGutHealthAdvanced] = useState(false);
  const [showCalmAdvanced, setShowCalmAdvanced] = useState(false);
// NEW: sleep advanced toggle
  const [scrollProgress, setScrollProgress] = useState(0);

  const displayedEnergySupplements = showEnergyAdvanced ? [...energySupplements, ...energyAdvanced] : energySupplements;
  const displayedSleepSupplements  = showSleepAdvanced  ? [...SleepSupplements,  ...SleepAdvanced]  : SleepSupplements; // NEW
  const displayedImmunitySupplements = showImmunityAdvanced ? [...immunitySupplements, ...immunityAdvanced]  : immunitySupplements;
  const displayedGutHealthSupplements = gutHealthSupplements;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
        setScrollProgress(progress);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic background tints (safe even if a section isn't shown)
  const energyOpacity = Math.min(0.08 + (scrollProgress * 0.08), 0.15);
  const mindOpacity   = Math.min(0.06 + (scrollProgress * 0.12), 0.15);

  // If someone lands here with no goals, nudge them back
  const noGoals = selectedGoals.length === 0;

  return (
    <div className="min-h-screen bg-white">


{/* Header */}
<header className="bg-white/95 backdrop-blur-md border-b border-gray-200/30 shadow-lg shadow-gray-300/40 px-6 py-4 sticky top-0 z-50">
  <div className="flex items-center justify-between">
    {/* Logo - positioned far left */}
    <div className="flex items-center">
      <Image
        src="/images/renew-logo-black.png"
        alt="Renew logo"
        width={90}
        height={30}
        className="object-contain"
        priority
      />
    </div>
    
    {/* Right side - Back button */}
    <button
      onClick={() => router.push('/goals')}
      className="flex items-center text-gray-400 hover:text-gray-900 transition-colors p-2 -m-2 rounded-lg hover:bg-gray-100/50"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      <span className="font-large">Back</span>
    </button>
  </div>
</header>

      {/* Empty-state if no goals */}
      {noGoals && (
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-2">Choose a goal to see your options</h2>
          <p className="text-gray-600 mb-6">Head back and pick up to two goals â€” weâ€™ll tailor this page to you.</p>
          <button
            onClick={() => router.push('/goals')}
            className="inline-flex items-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Select goals
          </button>
        </div>
      )}

      {/* Content */}
      <div className="relative">
{/* ---------- ENERGY (conditional) ---------- */}
{showEnergy && (
  <>
    <section
      className="relative py-12 lg:py-16 mb-20"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(251, 146, 60, ${energyOpacity * 0.6}) 50%, rgba(251, 146, 60, ${energyOpacity}) 100%)`,
        transition: 'background 0.3s ease'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={Zap}
            color={{ from: '#fb923c', to: '#ea580c' }}
            title={<><span style={{ color: '#ea580c' }}>Energy</span>&nbsp;that&nbsp;powers.</>}
            description={
              <>
                Energy <span className="font-extrabold">powers everything you do</span>. Without enough, even small things can feel harder. Three in four adults regularly feel fatigued<sup className="text-sm">1</sup>.
              </>
            }
            secondParagraph={
              <>
                These supplements help turn food into energy, support focus, and help you stay energised throughout the day
                <PersonalisationTail />
              </>
            }
          />

          <div className="mt-12 flex flex-col space-y-6 md:space-y-8">
            {displayedEnergySupplements.map((supplement, index) => (
              <SupplementCard
                key={supplement.id}
                supplement={supplement}
                index={index}
                category="Energy"
                categoryColor="#F97316"
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA Block - White background */}
    <section className="bg-white pb -mt-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          <p className="text-gray-800 text-lg md:text-xl font-bold mb-2">
            Not focused on one goal?
          </p>
          
          <p className="text-gray-700 text-base md:text-lg font-medium mb-8">
            Start with four essentials that benefit everyone.
          </p>
          
          <button
            onClick={() => window.location.href = '/results/essentials'}
            className="mt-2 inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-black text-white uppercase tracking-wide hover:bg-gray-800 hover:scale-[1.02] shadow-md hover:shadow-lg transition-all duration-300"
          >
            Start with the essentials
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>
      </div>
    </section>

    {/* Combined Trust Section */}
    <section className="bg-[#F3F3F4] py-6 mt-10">
      <div className="max-w-3xl mx-auto text-center px-6 space-y-4 text-gray-700">
        <p className="text-base leading-snug">
          Finding reliable guidance is hard when most sites sell supplements.
        </p>
        <p className="text-base text-gray-700">
          We don't sell supplements.
        </p>
        <p className="text-base text-gray-600 leading-snug">
          We focus on what's proven, evidence-backed, and safe — so you can choose with confidence.
        </p>

        <div className="border-t border-gray-300 my-8 max-w-md mx-auto"></div>

        <p className="uppercase text-[10px] tracking-[0.08em] font-medium text-gray-700">
          Evidence-led guidance
        </p>

        <div className="flex justify-center items-center gap-7 opacity-35">
          <Image 
            src="/images/nhs-logo.png" 
            alt="NHS" 
            width={70} 
            height={25} 
            className="object-contain filter grayscale" 
          />
          <Image 
            src="/images/harvard-health-logo.png" 
            alt="Harvard Health" 
            width={75} 
            height={32} 
            className="object-contain filter grayscale" 
          />
          <Image 
            src="/images/world-health-organization-logo.png" 
            alt="World Health Organization" 
            width={100} 
            height={30} 
            className="object-contain filter grayscale" 
          />
        </div>
      </div>
    </section>

    {/* 80px spacing buffer before next section */}
    <div className="h-20"></div>
  </>
)}

{/* ---------- IMMUNITY (conditional) ---------- */}
{showImm && (
  <>
    <section
      className="relative py-12 lg:py-16 mb-20"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(15, 118, 110, ${mindOpacity * 0.6}) 50%, rgba(15, 118, 110, ${mindOpacity}) 100%)`,
        transition: 'background 0.3s ease'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={IconShield}
            color={{ from: '#14b8a6', to: '#0F766E' }}
            title={<><span style={{ color: '#0F766E' }}>Immunity</span>&nbsp;that&nbsp;protects.</>}
            description={
              <>
                Your immune system <span className="font-extrabold">protects you from everyday threats</span>. When it is strong, your body stays resilient. Half of adults are low in vitamin D, a key nutrient for immune strength<sup className="text-sm">6</sup>.
              </>
            }
            secondParagraph={
              <>
                These supplements help build, maintain, and protect your immune defenses
                <PersonalisationTail />
              </>
            }
          />

          <div className="mt-12 flex flex-col space-y-6 md:space-y-8">
            {(typeof immunitySupplementsSupplements !== 'undefined' ? immunitySupplementsSupplements : immunitySupplements).map((supplement, index) => (
              <SupplementCard
                key={supplement.id}
                supplement={supplement}
                index={index}
                category="Immunity"
                categoryColor="#0F766E"
              />
            ))}
          </div>
        </div>
      </div>
    </section>

{/* CTA Block - White background */}
    <section className="bg-white pb -mt-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          <p className="text-gray-800 text-lg md:text-xl font-bold mb-2">
            Not focused on one goal?
          </p>
          
          <p className="text-gray-700 text-base md:text-lg font-medium mb-8">
            Start with four essentials that benefit everyone.
          </p>
          
          <button
            onClick={() => window.location.href = '/results/essentials'}
            className="mt-2 inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-black text-white uppercase tracking-wide hover:bg-gray-800 hover:scale-[1.02] shadow-md hover:shadow-lg transition-all duration-300"
          >
            Start with the essentials
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>
      </div>
    </section>

    {/* Combined Trust Section */}
    <section className="bg-[#F3F3F4] py-6 mt-10">
      <div className="max-w-3xl mx-auto text-center px-6 space-y-4 text-gray-700">
        <p className="text-base leading-snug">
          Finding reliable guidance is hard when most sites sell supplements.
        </p>
        <p className="text-base text-gray-700">
          We don't sell supplements.
        </p>
        <p className="text-base text-gray-600 leading-snug">
          We focus on what's proven, evidence-backed, and safe — so you can choose with confidence.
        </p>

        <div className="border-t border-gray-300 my-8 max-w-md mx-auto"></div>

        <p className="uppercase text-[10px] tracking-[0.08em] font-medium text-gray-700">
          Evidence-led guidance
        </p>

        <div className="flex justify-center items-center gap-7 opacity-35">
          <Image 
            src="/images/nhs-logo.png" 
            alt="NHS" 
            width={70} 
            height={25} 
            className="object-contain filter grayscale" 
          />
          <Image 
            src="/images/harvard-health-logo.png" 
            alt="Harvard Health" 
            width={75} 
            height={32} 
            className="object-contain filter grayscale" 
          />
          <Image 
            src="/images/world-health-organization-logo.png" 
            alt="World Health Organization" 
            width={100} 
            height={30} 
            className="object-contain filter grayscale" 
          />
        </div>
      </div>
    </section>

    {/* 80px spacing buffer before next section */}
    <div className="h-20"></div>
  </>
)}

{/* ---------- GUT HEALTH (conditional) ---------- */}
{showGutHealth && (
  <>
    <section
      className="relative py-12 lg:py-16 mb-20"
      style={{
        background: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(251,146,60,0.08) 50%, rgba(234,88,12,0.12) 100%)`,
        transition: 'background 0.3s ease'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={SmileIcon}
            color={{ from: '#B45309', to: '#FBBF24' }}
            title={
              <>
                <span style={{ color: '#B45309' }}>Digestion</span>&nbsp;that&nbsp;eases.
              </>
            }
            description={
              <>
                A healthy gut does more than digest food - it{" "}
                <span className="font-extrabold">fuels energy, mood and immunity</span>. 
                When it's off balance, it can cause bloating, discomfot, and low energy. One in two adults experience digestive issues each year <sup className="text-sm">5</sup>.
              </>
            }
            secondParagraph={
              <>
                These supplements help ease discomfort, support healthy digestion, and keep your gut in balance
                <PersonalisationTail />
              </>
            }
          />

          <div className="mt-12 flex flex-col space-y-6 md:space-y-8">
            {displayedGutHealthSupplements.map((supplement, index) => (
              <SupplementCard
                key={supplement.id}
                supplement={supplement}
                index={index}
                category="GutHealth"
                categoryColor="#B45309"
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA Block - White background */}
    <section className="bg-white pb -mt-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          <p className="text-gray-800 text-lg md:text-xl font-bold mb-2">
            Not focused on one goal?
          </p>
          
          <p className="text-gray-700 text-base md:text-lg font-medium mb-8">
            Start with four essentials that benefit everyone.
          </p>
          
          <button
            onClick={() => window.location.href = '/results/essentials'}
            className="mt-2 inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-black text-white uppercase tracking-wide hover:bg-gray-800 hover:scale-[1.02] shadow-md hover:shadow-lg transition-all duration-300"
          >
            Start with the essentials
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>
      </div>
    </section>

    {/* Combined Trust Section */}
    <section className="bg-[#F3F3F4] py-6 mt-10">
      <div className="max-w-3xl mx-auto text-center px-6 space-y-4 text-gray-700">
        <p className="text-base leading-snug">
          Finding reliable guidance is hard when most sites sell supplements.
        </p>
        <p className="text-base text-gray-700">
          We don't sell supplements.
        </p>
        <p className="text-base text-gray-600 leading-snug">
          We focus on what's proven, evidence-backed, and safe — so you can choose with confidence.
        </p>

        <div className="border-t border-gray-300 my-8 max-w-md mx-auto"></div>

        <p className="uppercase text-[10px] tracking-[0.08em] font-medium text-gray-700">
          Evidence-led guidance
        </p>

        <div className="flex justify-center items-center gap-7 opacity-35">
          <Image 
            src="/images/nhs-logo.png" 
            alt="NHS" 
            width={70} 
            height={25} 
            className="object-contain filter grayscale" 
          />
          <Image 
            src="/images/harvard-health-logo.png" 
            alt="Harvard Health" 
            width={75} 
            height={32} 
            className="object-contain filter grayscale" 
          />
          <Image 
            src="/images/world-health-organization-logo.png" 
            alt="World Health Organization" 
            width={100} 
            height={30} 
            className="object-contain filter grayscale" 
          />
        </div>
      </div>
    </section>

    {/* 80px spacing buffer before next section */}
    <div className="h-20"></div>
  </>
)}

{/* ---------- SLEEP (conditional) ---------- */}
{showSleep && (
  <>
    <section
      className="relative py-12 lg:py-16 mb-20"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(79, 70, 229, ${mindOpacity * 0.6}) 50%, rgba(79, 70, 229, ${mindOpacity}) 100%)`,
        transition: 'background 0.3s ease'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={IconClock}
            color={{ from: '#3B82F6', to: '#1E40AF' }}
            title={<><span style={{ color: '#1E40AF' }}>Sleep</span>&nbsp;that&nbsp;restores.</>}
            description={
              <>
                Sleep is when your <span className="font-extrabold">body restores itself</span>. Without enough, you can feel tired, irritable and unfocused. Two out of three adults do not get the quality sleep they need<sup className="text-sm">3</sup>.
              </>
            }
            secondParagraph={
              <>
                These supplements calm the mind before bed, help you fall asleep faster and support deep, restful sleep
                <PersonalisationTail />
              </>
            }
          />

          <div className="mt-12 flex flex-col space-y-6 md:space-y-8">
            {displayedSleepSupplements.map((supplement, index) => (
              <SupplementCard
                key={supplement.id}
                supplement={supplement}
                index={index}
                category="Sleep"
                categoryColor="#1E40AF"
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA Block - White background */}
    <section className="bg-white pb -mt-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          <p className="text-gray-800 text-lg md:text-xl font-bold mb-2">
            Not focused on one goal?
          </p>
          
          <p className="text-gray-700 text-base md:text-lg font-medium mb-8">
            Start with four essentials that benefit everyone.
          </p>
          
          <button
            onClick={() => window.location.href = '/results/essentials'}
            className="mt-2 inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-black text-white uppercase tracking-wide hover:bg-gray-800 hover:scale-[1.02] shadow-md hover:shadow-lg transition-all duration-300"
          >
            Start with the essentials
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>
      </div>
    </section>

    {/* Combined Trust Section */}
    <section className="bg-[#F3F3F4] py-6 mt-10">
      <div className="max-w-3xl mx-auto text-center px-6 space-y-4 text-gray-700">
        <p className="text-base leading-snug">
          Finding reliable guidance is hard when most sites sell supplements.
        </p>
        <p className="text-base text-gray-700">
          We don't sell supplements.
        </p>
        <p className="text-base text-gray-600 leading-snug">
          We focus on what's proven, evidence-backed, and safe — so you can choose with confidence.
        </p>

        <div className="border-t border-gray-300 my-8 max-w-md mx-auto"></div>

        <p className="uppercase text-[10px] tracking-[0.08em] font-medium text-gray-700">
          Evidence-led guidance
        </p>

        <div className="flex justify-center items-center gap-7 opacity-35">
          <Image 
            src="/images/nhs-logo.png" 
            alt="NHS" 
            width={70} 
            height={25} 
            className="object-contain filter grayscale" 
          />
          <Image 
            src="/images/harvard-health-logo.png" 
            alt="Harvard Health" 
            width={75} 
            height={32} 
            className="object-contain filter grayscale" 
          />
          <Image 
            src="/images/world-health-organization-logo.png" 
            alt="World Health Organization" 
            width={100} 
            height={30} 
            className="object-contain filter grayscale" 
          />
        </div>
      </div>
    </section>

    {/* 80px spacing buffer before Immunity section */}
    <div className="h-20"></div>
  </>
)}

{/* ---------- CALM (conditional) ---------- */}
{showCalm && (
  <>
    <section
      className="relative py-12 lg:py-16 mb-20"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(15, 118, 110, ${mindOpacity * 0.6}) 50%, rgba(15, 118, 110, ${mindOpacity}) 100%)`,
        transition: 'background 0.3s ease'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={HeartIcon}
            color={{ from: '#14b8a6', to: '#0F766E' }}
            title={<><span style={{ color: '#0F766E' }}>Calm</span>&nbsp;that&nbsp;relaxes.</>}
            description={
              <>
                Stress <span className="font-extrabold">affects how you feel, think and connect with others</span>. When tension builds, it impacts mood, focus, and relationships. Three out of four adults regularly experience physical symptoms of stress<sup className="text-sm">4</sup>.
              </>
            }
            secondParagraph={
              <>
                These supplements help ease stress, quiet your mind, and relax your body
                <PersonalisationTail />
              </>
            }
          />

          <div className="mt-12 flex flex-col space-y-6 md:space-y-8">
            {(typeof CalmSupplements !== 'undefined' ? CalmSupplements : calmSupplements).map((supplement, index) => (
              <SupplementCard
                key={supplement.id}
                supplement={supplement}
                index={index}
                category="Calm"
                categoryColor="#0F766E"
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA Block - White background */}
    <section className="bg-white pb -mt-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          <p className="text-gray-800 text-lg md:text-xl font-bold mb-2">
            Not focused on one goal?
          </p>
          
          <p className="text-gray-700 text-base md:text-lg font-medium mb-8">
            Start with four essentials that benefit everyone.
          </p>
          
          <button
            onClick={() => window.location.href = '/results/essentials'}
            className="mt-2 inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-black text-white uppercase tracking-wide hover:bg-gray-800 hover:scale-[1.02] shadow-md hover:shadow-lg transition-all duration-300"
          >
            Start with the essentials
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>
      </div>
    </section>

    {/* Combined Trust Section */}
    <section className="bg-[#F3F3F4] py-6 mt-10">
      <div className="max-w-3xl mx-auto text-center px-6 space-y-4 text-gray-700">
        <p className="text-base leading-snug">
          Finding reliable guidance is hard when most sites sell supplements.
        </p>
        <p className="text-base text-gray-700">
          We don't sell supplements.
        </p>
        <p className="text-base text-gray-600 leading-snug">
          We focus on what's proven, evidence-backed, and safe — so you can choose with confidence.
        </p>

        <div className="border-t border-gray-300 my-8 max-w-md mx-auto"></div>

        <p className="uppercase text-[10px] tracking-[0.08em] font-medium text-gray-700">
          Evidence-led guidance
        </p>

        <div className="flex justify-center items-center gap-7 opacity-35">
          <Image 
            src="/images/nhs-logo.png" 
            alt="NHS" 
            width={70} 
            height={25} 
            className="object-contain filter grayscale" 
          />
          <Image 
            src="/images/harvard-health-logo.png" 
            alt="Harvard Health" 
            width={75} 
            height={32} 
            className="object-contain filter grayscale" 
          />
          <Image 
            src="/images/world-health-organization-logo.png" 
            alt="World Health Organization" 
            width={100} 
            height={30} 
            className="object-contain filter grayscale" 
          />
        </div>
      </div>
    </section>

    {/* 80px spacing buffer before next section */}
    <div className="h-20"></div>
  </>
)}

        {/* Citations (kept at the bottom) */}
        {(showEnergy || showSleep || showCalm || showImm || showGutHealth) && (
          <footer className="bg-gray-50 py-12 mt-20">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
              <div className="text-xs text-gray-500 space-y-1">
                <p><sup>1</sup> National Safety Council. (2023). Fatigue in the Workplace Survey Report.</p>
                <p><sup>2</sup> Harvard Medical School. (2023). Brain Fog: Memory and Attention After COVID-19.</p>
                <p><sup>3</sup> Gallup & Casper (2022). Sleep Survey.</p>
                <p><sup>4</sup> American Psychological Association. (2022). Stress in America Survey</p>
                <p><sup>5</sup> Wallace, T.C., McBurney & Fulgoni, V.L.  (2024). Multivitamin/mineral supplement contribution to micronutrient intakes in the United States, 2007–2010. Journal of the American College of Nutrition.
               </p>
                <p><sup>6</sup> Forrest, K.Y., & Stuhldreher, W.L. (2011). Prevalence and correlates of vitamin D deficiency in US adults. </p>
              </div>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}