"use client"
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Heart, Brain, Activity, Shield, Sun, Bone, Moon, Waves, Zap, Target, Flame } from 'lucide-react';
import EssentialsOmega3 from './modals/EssentialsOmega3';
import EssentialsVitaminD from './modals/EssentialsVitaminD';
import EssentialsMagnesium from './modals/EssentialsMagnesium';
import EssentialsVitaminB from './modals/EssentialsVitaminB';

// Reusable Benefit Tag Component
const BenefitTag = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100/70 px-3 py-1.5 text-[13px] font-medium text-neutral-800 border border-neutral-300 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
    <Icon className="w-4 h-4 stroke-[1.75] text-neutral-700" />
    {children}
  </span>
);

// HARDCODED ESSENTIALS SUPPLEMENTS - Universal supplements for everyone
const essentialsSupplements = [
  {
    id: 'EssentialsOmega3',
    name: 'Omega-3',
    role: 'HEART & MIND',
    benefits: [
      { icon: Heart, text: 'Heart health' },
      { icon: Brain, text: 'Focus' },
      { icon: Activity, text: 'Movement' }
    ],
    burningPlatform: 'Your body finds it hard to get enough from food alone.',
    image: '/images/omega3-essentials.jpg',
  },
  {
    id: 'EssentialsVitaminD',
    name: 'Vitamin D',
    role: 'DAILY PROTECTION',
    benefits: [
      { icon: Shield, text: 'Immunity' },
      { icon: Sun, text: 'Mood' },
      { icon: Bone, text: 'Bone health' }
    ],
    burningPlatform: 'Your body can’t make it without sunlight.',
    image: '/images/vitamind-essentials.jpg'
  },
  {
    id: 'EssentialsMagnesium',
    name: 'Magnesium',
    role: 'REST & RECOVERY',
    benefits: [
      { icon: Moon, text: 'Sleep' },
      { icon: Waves, text: 'Calm' },
      { icon: Activity, text: 'Stress' }
    ],
    burningPlatform: 'Your body uses it for hundreds of processes daily.',
    image: '/images/magnesium-essentials.jpg'
  },
  {
    id: 'EssentialsVitaminB',
    name: 'Vitamin B',
    role: 'DAILY PERFORMANCE',
    benefits: [
      { icon: Zap, text: 'Energy' },
      { icon: Target, text: 'Focus' },
      { icon: Flame, text: 'Metabolism' }
    ],
    burningPlatform: 'Your body can’t store it — it needs daily top-ups.',
    image: '/images/vitaminb-essentials.jpg'
  }
];

// Icon component for Essentials
const IconSparkles = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364 6.364l-2.121-2.121M8.757 8.757 6.636 6.636m12.728 0-2.121 2.121M8.757 15.243l-2.121 2.121"/>
  </svg>
);

// Premium full-width supplement card component (copied from results page)
const SupplementCard = ({ supplement, index, category = 'Essentials', categoryColor = '#F59E0B' }) => {
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
    return 'brightness-105 saturate-90 contrast-95';
  };

  const getOverlayClasses = () => {
    return 'bg-gradient-to-t from-white/55 via-white/25 to-transparent';
  };

  const getTextTint = () => {
    return 'text-[#2563eb]'; // Renew Blue - matches the Essentials headline gradient
  };

  return (
    <>
      <div
        ref={cardRef}
        className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 h-[320px] max-w-[1100px] mx-auto">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={supplement.image || '/images/placeholder.jpg'}
              alt={supplement.name || ''}
              fill
              priority={false}
              className={`object-cover ${getImageClasses()}`}
            />
          </div>

          <div className={`absolute inset-0 pointer-events-none ${getOverlayClasses()}`}></div>

          <div className="relative z-20 flex min-h-[240px] md:min-h-[260px] items-end p-7 md:p">
            <div className="relative w-full md:w-[55%] md:ml-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-
            [0_8px_30px_rgba(0,0,0,0.06)] p-6 md:p-9 pb-7 md:pb-7">
              <div className="text-[22px] md:text-[24px] font-bold tracking-tight text-neutral-900">
                {supplement.name}
              </div>

              <div className="text-[14px] font-medium uppercase tracking-wider text-neutral-700 mt-2">
                {supplement.role}
              </div>

              <div className="flex gap-1.5 mt-3 flex-wrap">
                {supplement.benefits.map((benefit, idx) => (
                  <BenefitTag key={idx} icon={benefit.icon}>
                    {benefit.text}
                  </BenefitTag>
                ))}
              </div>

              <div className="mt-6 text-[16px] leading-relaxed text-neutral-600 mb-1">
                {supplement.burningPlatform}
              </div>

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="mt-4 inline-block text-[17px] font-medium text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline transition-colors"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        
        {/* Modals */}
        {showModal && supplement.id === 'EssentialsOmega3' && (
          <EssentialsOmega3 onClose={() => setShowModal(false)} />
        )}
        {showModal && supplement.id === 'EssentialsVitaminD' && (
          <EssentialsVitaminD onClose={() => setShowModal(false)} />
        )}
        {showModal && supplement.id === 'EssentialsMagnesium' && (
          <EssentialsMagnesium onClose={() => setShowModal(false)} />
        )}
        {showModal && supplement.id === 'EssentialsVitaminB' && (
          <EssentialsVitaminB onClose={() => setShowModal(false)} />
        )}
      </div>      
    </>
  );
};

// Section header component (copied from results page)
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
        <div className="w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-8 shadow-lg"
             style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }}>
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>

      <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black mb-3 leading-tight pr-12 lg:pr-20 whitespace-nowrap transition-all duration-1000 ${visibleElements.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title}
      </h1>

      <p className={`text-xl md:text-2xl font-semibold text-gray-900 leading-tight pr-12 lg:pr-20 whitespace-nowrap transition-all duration-1000 ${visibleElements.description ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {description}
      </p>

      {secondParagraph && (
        <p className={`text-xl text-gray-700 leading-relaxed pr-12 lg:pr-20 mt-6 transition-all duration-1000 ${visibleElements.secondPara ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {secondParagraph}
        </p>
      )}
    </div>
  );
};

// Main Essentials Page Component
export default function EssentialsPage() {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Dynamic background tint for essentials - using Renew blue
  const essentialsOpacity = Math.min(0.08 + (scrollProgress * 0.08), 0.15);

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

      {/* Content */}
      <div className="relative">
        {/* ---------- ESSENTIALS SECTION ---------- */}
        <section
          className="relative py-12 lg:py-16 mb-20"
          style={{
            background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(37, 99, 235, 0.06) 45%, rgba(37, 99, 235, 0.12) 70%, rgba(37, 99, 235, 0.15) 100%)`,
            transition: 'background 0.3s ease'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <SectionHeader
                icon={Sparkles}
                color={{ from: '#2563eb', to: '#0f2554' }}
                title={<><span style={{ background: 'linear-gradient(135deg, #2563eb, #0f2554)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Essentials</span> that elevate.</>}
                description={
                  <>
                    Four essentials. Everything starts here.
                  </>
                }
              />

              <div className="mt-16 flex flex-col space-y-8 md:space-y-10">
                {essentialsSupplements.map((supplement, index) => (
                  <SupplementCard
                    key={supplement.id}
                    supplement={supplement}
                    index={index}
                    category="Essentials"
                    categoryColor="#F59E0B"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Block - Grey background */}
        <section className="bg-[#F3F3F4] pt-10 pb-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              <div className="flex flex-col items-center justify-center">
                <p className="uppercase text-[10px] tracking-[0.08em] font-medium text-gray-700 mb-2">
                  Evidence-led guidance
                </p>
                
                <div className="flex items-center gap-7 ml-6">
                  <Image 
                    src="/images/nhs-logo.png" 
                    alt="NHS" 
                    width={75} 
                    height={25} 
                    className="object-contain filter grayscale opacity-25" 
                  />
                  <Image 
                    src="/images/harvard-health-logo.png" 
                    alt="Harvard Health" 
                    width={75} 
                    height={32} 
                    className="object-contain filter grayscale opacity-30" 
                  />
                  <Image 
                    src="/images/world-health-organization-logo.png" 
                    alt="World Health Organization" 
                    width={100} 
                    height={30} 
                    className="object-contain filter grayscale opacity-35" 
                  />
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}