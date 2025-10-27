'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Comment these out temporarily:
// import EssentialsVitaminD from "./Modals/Essentials/EssentialsVitaminD";
// import EssentialsOmega3 from "./Modals/Essentials/EssentialsOmega3";
// import EssentialsMagnesium from "./Modals/Essentials/EssentialsMagnesium";
// import EssentialsVitaminB from "./Modals/Essentials/EssentialsVitaminB";

// HARDCODED ESSENTIALS SUPPLEMENTS
const EssentialsSupplements = [
  {
    id: 'EssentialsVitaminD',
    name: 'Vitamin D',
    benefitStatement: 'The sunshine vitamin most people lack',
    stat: '70% of people are deficient',
    image: '/images/vitamin-d-essentials.jpg',
    isPriority: true
  },
  {
    id: 'EssentialsOmega3',
    name: 'Omega-3',
    benefitStatement: 'Essential fats your brain needs',
    stat: 'Critical for heart and brain health',
    image: '/images/omega-3-essentials.jpg',
    isPriority: true
  },
  {
    id: 'EssentialsMagnesium',
    name: 'Magnesium',
    benefitStatement: 'The mineral for 300+ body functions',
    stat: 'Hard to get enough from diet alone',
    image: '/images/magnesium-essentials.jpg'
  },
  {
    id: 'EssentialsVitaminB',
    name: 'Vitamin B Complex',
    benefitStatement: 'Energy production at the cellular level',
    stat: 'Depleted by stress and modern life',
    image: '/images/vitamin-b-essentials.jpg'
  }
];

// Icon components
const IconSmile = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <path d="M9 9h.01M15 9h.01"/>
  </svg>
);

const IconClock = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconShield = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconFlash = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />
        <span className="hidden sm:inline-block sm:h-screen sm:align-middle">&#8203;</span>
        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:align-middle">
          {children}
        </div>
      </div>
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ icon: Icon, color, title, description, secondParagraph }) => (
  <div className="flex flex-col items-center text-center">
    <div 
      className="p-3 mb-6 rounded-full"
      style={{
        background: `linear-gradient(135deg, ${color.from} 0%, ${color.to} 100%)`,
        boxShadow: `0 10px 20px -10px ${color.from}50`
      }}
    >
      <Icon className="w-6 h-6 text-white" />
    </div>
    
    <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
      {title}
    </h1>
    
    <div className="text-lg md:text-xl text-gray-600 max-w-3xl space-y-4">
      <p>{description}</p>
      {secondParagraph && <p className="text-base md:text-lg">{secondParagraph}</p>}
    </div>
  </div>
);

// Supplement Card Component
const SupplementCard = ({ supplement, index, category, categoryColor }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group">
        {/* Priority badge */}
        {supplement.isPriority && (
          <div 
            className="absolute -top-1 -right-1 z-10 px-3 py-1.5 rounded-bl-2xl rounded-tr-2xl shadow-lg"
            style={{ backgroundColor: categoryColor }}
          >
            <span className="text-white text-xs font-bold tracking-wide">TOP PRIORITY</span>
          </div>
        )}
        
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src={supplement.image}
              alt={supplement.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className={`w-full md:w-1/2 p-8 md:p-10 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
          <h3 className="text-3xl font-bold mb-3" style={{ color: categoryColor }}>
            {supplement.name}
          </h3>
          
          <p className="text-xl font-semibold text-gray-800 mb-4">
            {supplement.benefitStatement}
          </p>
          
          <p className="text-gray-600 mb-6">
            {supplement.stat}
          </p>
          
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            style={{ 
              backgroundColor: categoryColor,
              boxShadow: `0 4px 14px 0 ${categoryColor}40`
            }}
          >
            See the Science
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Modal Rendering */}
      {showModal && supplement.id === "EssentialsVitaminD" && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <EssentialsVitaminD onClose={() => setShowModal(false)} />
        </Modal>
      )}
      
      {showModal && supplement.id === "EssentialsOmega3" && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <EssentialsOmega3 onClose={() => setShowModal(false)} />
        </Modal>
      )}
      
      {showModal && supplement.id === "EssentialsMagnesium" && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <EssentialsMagnesium onClose={() => setShowModal(false)} />
        </Modal>
      )}
      
      {showModal && supplement.id === "EssentialsVitaminB" && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <EssentialsVitaminB onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
};

// Main Essentials Page Component
export default function EssentialsPage() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = 300;
      const opacity = Math.min(scrolled / maxScroll, 1) * 0.15;
      setBackgroundOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <main className="min-h-screen bg-white">
      <section
        className="relative py-12 lg:py-16"
        style={{
          background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(79, 70, 229, ${backgroundOpacity * 0.6}) 50%, rgba(79, 70, 229, ${backgroundOpacity}) 100%)`,
          transition: 'background 0.3s ease'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              icon={IconShield}
              color={{ from: '#4F46E5', to: '#7C3AED' }}
              title={
                <>
                  <span style={{ color: '#4F46E5' }}>The Essentials</span> everyone needs.
                </>
              }
              description={
                <>
                  These are the <span className="font-extrabold">foundational supplements</span> that support 
                  your health regardless of your specific goals. Research shows most people don't get enough 
                  of these critical nutrients from diet alone<sup className="text-sm">1</sup>.
                </>
              }
              secondParagraph={
                <>
                  Start here for a strong foundation. These four essentials work together to support 
                  your energy, immunity, brain function, and overall wellbeing - no matter what else 
                  you're working on.
                </>
              }
            />

            <div className="mt-16 flex flex-col space-y-8 md:space-y-10 pb-10">
              {EssentialsSupplements.map((supplement, index) => (
                <SupplementCard
                  key={supplement.id}
                  supplement={supplement}
                  index={index}
                  category="Essentials"
                  categoryColor="#4F46E5"
                />
              ))}
            </div>

            {/* Trust bar - subtle, supporting evidence */}
            <div className="flex flex-col items-center justify-center mt-12 mb-16">
              <p className="uppercase text-[10px] tracking-[0.08em] font-medium text-gray-400 mb-2">
                Evidence-led guidance
              </p>
              
              <div className="flex items-center gap-7 ml-6">
                <Image 
                  src="/images/nhs-logo.png" 
                  alt="NHS" 
                  width={70} 
                  height={25} 
                  className="object-contain filter grayscale opacity-35" 
                />
                <Image 
                  src="/images/harvard-health-logo.png" 
                  alt="Harvard Health" 
                  width={75} 
                  height={32} 
                  className="object-contain filter grayscale opacity-35" 
                />
                <Image 
                  src="/images/world-health-organization-logo.png" 
                  alt="World Health Organization" 
                  width={100} 
                  height={30} 
                  className="object-contain filter grayscale opacity-40" 
                />
              </div>
            </div>

            {/* Optional: Add navigation back to quiz or other CTAs */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Want personalized recommendations for your specific goals?
              </p>
              <button
                onClick={() => window.location.href = '/quiz'}
                className="mx-auto inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                Take the Quiz
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}