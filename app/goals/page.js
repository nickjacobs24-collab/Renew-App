'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Zap, Brain, Moon, Heart, Shield, Smile } from 'lucide-react';
import Image from "next/image";

// ============================================================================
// GOALS DATA (Question 1 only - with original colors and CORRECT IDs)
// ============================================================================

const goals = [
  { id: 'energy', name: 'Boosting energy and focus', icon: Zap, baseColor: '#F97316', lightColor: '#FB923C', darkColor: '#EA580C', iconBg: 'bg-orange-100' },
  { id: 'sleep', name: 'Better sleep', icon: Moon, baseColor: '#1E40AF', lightColor: '#3B82F6', darkColor: '#1E3A8A', iconBg: 'bg-indigo-100' },
  { id: 'immunity', name: 'Strenthening immunity', icon: Shield, baseColor: '#059669', lightColor: '#10B981', darkColor: '#047857', iconBg: 'bg-emerald-100' },
  { id: 'gutHealth', name: 'Supporting digestion and gut health', icon: Smile, baseColor: '#F59E0B', lightColor: '#FBBF24', darkColor: '#D97706', iconBg: 'bg-amber-100' },
  { id: 'calm', name: 'Feeling calmer', icon: Heart, baseColor: '#0D9488', lightColor: '#14B8A6', darkColor: '#0F766E', iconBg: 'bg-teal-100' }
];

// ============================================================================
// OTHER QUESTIONS DATA (Q2-5)
// ============================================================================

const otherQuestions = [
  {
    id: 2,
    question: "When do you usually feel most like yourself?",
    options: [
      { id: 'morning', label: 'Morning person' },
      { id: 'afternoon', label: 'Afternoon momentum' },
      { id: 'night', label: 'Night owl' },
      { id: 'varies', label: 'It varies' }
    ]
  },
  {
    id: 3,
    question: "Where are you starting from today?",
    options: [
      { id: 'new', label: 'Totally new to this' },
      { id: 'tried', label: "I've tried a few things" },
      { id: 'routine', label: 'I have a routine already' }
    ]
  },
{
  id: 4,
  question: "How do you like to make progress?",
  options: [
    { id: 'fast', label: 'I like noticing quick shifts' },
    { id: 'steady', label: 'I prefer steady, gradual change' },
    { id: 'impact', label: 'Results matter more than timing' }
  ]
},
  {
    id: 5,
    question: "What's your age range?",
    options: [
      { id: '18-29', label: '18–29' },
      { id: '30-39', label: '30–39' },
      { id: '40-49', label: '40–49' },
      { id: '50-59', label: '50–59' },
      { id: '60+', label: '60+' }
    ]
  }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isCurating, setIsCurating] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    router.prefetch('/results');
    return () => clearTimeout(t);
  }, [router]);

  // Trigger fade animation when step changes
  useEffect(() => {
    setIsVisible(false);
    const t = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(t);
  }, [currentStep]);

  // Q1: Handle goal selection (multi-select, max 2)
  const handleGoalSelect = (goalId) => {
    setSelectedGoals(prev =>
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : prev.length < 2 ? [...prev, goalId] : prev
    );
  };

  // Q2-5: Handle single option selection
  const handleOptionSelect = (optionId) => {
    setAnswers(prev => ({ ...prev, [currentStep]: optionId }));
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      // Save goals and move to Q2
      setAnswers(prev => ({ ...prev, goals: selectedGoals }));
      setCurrentStep(2);
    } else if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Show curating screen, then redirect
      setIsCurating(true);
      
      setTimeout(() => {
        const params = new URLSearchParams();
        params.append('goals', selectedGoals.join(','));
        Object.entries(answers).forEach(([key, value]) => {
          if (key !== 'goals') {
            params.append(`q${key}`, value);
          }
        });
        router.push(`/signup?${params.toString()}`);
      }, 2000); // 2 second curating screen
    }
  };

  const progress = (currentStep / 5) * 100;
  const canContinue = currentStep === 1 ? selectedGoals.length > 0 : !!answers[currentStep];

  // ============================================================================
  // RENDER CURATING SCREEN
  // ============================================================================

  if (isCurating) {
    return (
      <div className="relative flex flex-col min-h-screen">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-gray-200" />

        {/* Progress Bar - Full */}
        <div className="h-1 bg-gray-200">
          <div className="h-full bg-blue-600 transition-all duration-500 ease-out" style={{ width: '100%' }} />
        </div>

        {/* Header */}
        <header className="h-20 shrink-0 px-6 py-4 border-b border-gray-200 shadow-md shadow-gray-200/40 bg-white/95 backdrop-blur-sm">
          <div className="flex h-full items-center justify-center">
            <Image src="/images/renew-logo-black.png" alt="Renew logo" width={90} height={30} className="object-contain" priority />
          </div>
        </header>

        {/* Curating Content */}
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-lg mx-auto text-center">
            
            {/* Pulsing Circle Animation */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-20 h-20">
                {/* Outer pulse */}
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                {/* Middle pulse */}
                <div className="absolute inset-2 rounded-full bg-blue-500/30 animate-pulse" />
                {/* Inner circle */}
                <div className="absolute inset-4 rounded-full bg-blue-600" />
              </div>
            </div>

            {/* Text */}
            <h1 className="font-extrabold text-gray-900 mb-2 leading-tight tracking-tight animate-fade-in" style={{ fontSize: '1.6rem' }}>
              We're preparing your results…
            </h1>
            <p className="text-gray-600 font-medium animate-fade-in" style={{ fontSize: '0.9375rem', animationDelay: '200ms' }}>
              This will only take a moment
            </p>
          </div>
        </main>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }

  // ============================================================================
  // RENDER Q1: GOALS (Multi-select with original colors)
  // ============================================================================

  if (currentStep === 1) {
    const isSelected = (id) => selectedGoals.includes(id);
    const isDisabled = (id) => selectedGoals.length >= 2 && !isSelected(id);

    return (
      <div className="relative flex flex-col min-h-screen">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-gray-200" />

        {/* Progress Bar */}
        <div className="h-1 bg-gray-200">
          <div className="h-full bg-blue-600 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>

        {/* Header */}
        <header className="h-20 shrink-0 px-6 py-4 border-b border-gray-200 shadow-md shadow-gray-200/40 bg-white/95 backdrop-blur-sm">
          <div className="flex h-full items-center justify-between">
            <Image src="/images/renew-logo-black.png" alt="Renew logo" width={90} height={30} className="object-contain" priority />
            <button
              onClick={() => router.back()}
              className="flex items-center text-gray-400 hover:text-gray-900 transition-colors p-2 -m-2 rounded-lg hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm">Back</span>
            </button>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 flex items-start justify-center overflow-y-auto scroll-smooth px-4 py-3 pb-8">
          <div className="w-full max-w-xl mx-auto">
            
{/* Hero */}
<div className="text-center mb-3">
  <p className={`text-gray-500 text-sm font-medium mb-2 transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}>
    Question 1 of 5
  </p>
  <h1 className={`font-extrabold text-gray-900 mb-3 leading-tight tracking-tight transition-all duration-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
  style={{ fontSize: '1.6rem' }}>
    Choose what you want to improve
  </h1>
  <p className={`text-gray-600 font-medium transition-all duration-1000 delay-300 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
  style={{ fontSize: '0.9375rem' }}>
    Pick your main goals — we'll guide you to the safest, most effective options
  </p>
</div>

            {/* Goals */}
            <div className="space-y-2 mb-3 mt-6">
              {goals.map((goal, index) => {
                const Icon = goal.icon;
                const selected = isSelected(goal.id);
                const disabled = isDisabled(goal.id);

                return (
                  <div
                    key={goal.id}
                    className={`transform transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${200 + index * 80}ms` }}
                  >
                    <button
                      onClick={() => handleGoalSelect(goal.id)}
                      disabled={disabled}
                      className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ease-out text-left group relative focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.99] ${
                        selected
                          ? 'text-white shadow-xl border-transparent focus:ring-white/50'
                          : disabled
                          ? 'bg-gray-50/50 border-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                          : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400 hover:shadow-lg shadow-md focus:ring-gray-400'
                      }`}
                      style={{
                        background: selected
                          ? `linear-gradient(135deg, ${goal.lightColor} 0%, ${goal.darkColor} 100%)`
                          : undefined
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        {/* Icon */}
                        <div className={`flex items-center justify-center shrink-0 transition-all duration-300 w-8 h-8 rounded-lg ${
                          selected ? 'bg-white/90 shadow-sm' : disabled ? 'bg-gray-100' : `${goal.iconBg} group-hover:scale-110`
                        }`}>
                          <Icon
                            className="w-4 h-4 transition-all duration-300"
                            style={{
                              color: selected ? goal.baseColor : disabled ? '#9CA3AF' : goal.baseColor
                            }}
                          />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-bold transition-all duration-300 ${
                            selected ? 'text-white' : disabled ? 'text-gray-400' : 'text-gray-900'
                          }`}
                          style={{ fontSize: '1.05rem' }}>
                            {goal.name}
                          </h3>
                        </div>

                        {/* Checkmark */}
                        {selected && (
                          <div className="absolute -right-1.5 -top-1.5 flex items-center justify-center rounded-full bg-white shadow-lg shrink-0 w-6 h-6">
                            <svg className="w-3.5 h-3.5" fill={goal.baseColor} viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Continue Button */}
            <div className={`transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button
                onClick={handleContinue}
                disabled={!canContinue}
                className={`w-full py-3 px-8 rounded-xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  canContinue
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                style={{ fontSize: '1.05rem' }}
              >
                {!canContinue ? 'Select a goal to continue' : 'Continue'}
              </button>
              
              {/* Trust Bar */}
              <div className="w-screen bg-[#F3F3F4] py-4 mt-14 -mx-4 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <p className="text-base text-gray-600 text-center font-medium">
                  Independent, evidence-backed advice. We don't sell supplements.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ============================================================================
  // RENDER Q2-5: OTHER QUESTIONS (Single-select with LIGHT GRAY selected state)
  // ============================================================================

  const currentQuestion = otherQuestions.find(q => q.id === currentStep);
  const currentAnswer = answers[currentStep];

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-gray-200" />

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div className="h-full bg-blue-600 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>

      {/* Header */}
      <header className="h-20 shrink-0 px-6 py-4 border-b border-gray-200 shadow-md shadow-gray-200/40 bg-white/95 backdrop-blur-sm">
        <div className="flex h-full items-center justify-between">
          <Image src="/images/renew-logo-black.png" alt="Renew logo" width={90} height={30} className="object-contain" priority />
          <button
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="flex items-center text-gray-400 hover:text-gray-900 transition-colors p-2 -m-2 rounded-lg hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm">Back</span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-start justify-center overflow-y-auto scroll-smooth px-4 py-3 pb-8">
        <div className="w-full max-w-xl mx-auto">
          
          {/* Question Header */}
          <div className="text-center mb-3">
            <p className={`text-gray-500 text-sm font-medium mb-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Question {currentStep} of 5
            </p>
            <h1 className={`font-extrabold text-gray-900 mb-1.5 leading-tight tracking-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontSize: '1.6rem' }}>
              {currentQuestion?.question}
            </h1>
          </div>

          {/* Answer Options */}
          <div className="space-y-2 mb-3">
            {currentQuestion?.options.map((option, index) => {
              const isSelected = currentAnswer === option.id;

              return (
                <div
                  key={option.id}
                  className={`transform transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  <button
                    onClick={() => handleOptionSelect(option.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ease-out text-left group relative focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.99] ${
                      isSelected
                        ? 'bg-gray-200 border-gray-300 text-gray-900 shadow-lg focus:ring-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400 hover:shadow-lg shadow-md focus:ring-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <p className={`font-bold transition-all duration-300 text-gray-900`} style={{ fontSize: '1.05rem' }}>
                        {option.label}
                      </p>
                    </div>

                    {/* Checkmark */}
                    {isSelected && (
                      <div className="absolute -right-1.5 -top-1.5 flex items-center justify-center rounded-full bg-white shadow-lg shrink-0 w-6 h-6 border-2 border-gray-300">
                        <svg className="w-3.5 h-3.5" fill="#374151" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Continue Button */}
          <div className={`transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={handleContinue}
              disabled={!canContinue}
              className={`w-full py-3 px-8 rounded-xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                canContinue
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              style={{ fontSize: '1.05rem' }}
            >
              {!canContinue 
                ? 'Select an option to continue' 
                : currentStep < 5 
                  ? 'Continue' 
                  : 'See my results'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}