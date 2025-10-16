'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Zap, Brain, Moon, Heart, Shield, Smile } from 'lucide-react';
import Image from "next/image";

const goals = [
  { id: 'energy', name: 'Energy', description: 'Boost energy, reduce fatigue', icon: Zap, baseColor: '#F97316', lightColor: '#FB923C', darkColor: '#EA580C', iconBg: 'bg-orange-100' },
  { id: 'mind', name: 'Mind', description: 'Sharper thinking and memory', icon: Brain, baseColor: '#7C3AED', lightColor: '#9333EA', darkColor: '#6D28D9', iconBg: 'bg-purple-100' },
  { id: 'sleep', name: 'Sleep', description: 'Deeper and more restful sleep', icon: Moon, baseColor: '#1E40AF', lightColor: '#3B82F6', darkColor: '#1E3A8A', iconBg: 'bg-indigo-100' },
  { id: 'calm', name: 'Calm', description: 'Reduce stress, feel calmer', icon: Heart, baseColor: '#0D9488', lightColor: '#14B8A6', darkColor: '#0F766E', iconBg: 'bg-teal-100' },
  { id: 'wellness', name: 'Wellness', description: 'Overall health and vitality', icon: Smile, baseColor: '#F59E0B', lightColor: '#FBBF24', darkColor: '#D97706', iconBg: 'bg-amber-100' },
  { id: 'immunity', name: 'Immunity', description: 'Strengthen immune system', icon: Shield, baseColor: '#059669', lightColor: '#10B981', darkColor: '#047857', iconBg: 'bg-emerald-100' }
];

export default function GoalsPage() {
  const router = useRouter();
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    router.prefetch('/results');
    return () => clearTimeout(t);
  }, [router]);

  const handleGoalSelect = (goalId) => {
    setSelectedGoals(prev =>
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : prev.length < 2 ? [...prev, goalId] : prev
    );
  };

  const handleContinue = () => {
    if (selectedGoals.length > 0) {
      router.push(`/results?goals=${encodeURIComponent(selectedGoals.join(','))}`);
    }
  };

  const isSelected = (id) => selectedGoals.includes(id);
  const isDisabled = (id) => selectedGoals.length >= 2 && !isSelected(id);

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-gray-200" />

      {/* Header */}
      <header
        className="h-20 shrink-0 border-b border-gray-200 shadow-md shadow-gray-200/40 bg-white/95 backdrop-blur-sm"
        style={{ padding: 'clamp(0.75rem, 2vw, 1.5rem) clamp(1rem, 3vw, 2rem)' }}
      >
        <div className="flex h-full items-center justify-between">
          <Image src="/images/renew-logo-black.png" alt="Renew logo" width={90} height={30} className="object-contain" priority />
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-400 hover:text-gray-900 transition-colors p-2 -m-2 rounded-lg hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span style={{ fontSize: 'clamp(0.9rem, 1vw, 1rem)' }}>Back</span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main
        className="flex-1 flex items-start justify-center overflow-y-auto scroll-smooth"
        style={{ padding: 'clamp(1rem, 3vw, 4rem) clamp(1rem, 3vw, 3rem) clamp(2rem, 4vw, 5rem)' }}
      >
        {/* CHANGE #1: Container width differs by breakpoint - laptop gets 44rem, desktop gets 52rem, xl gets 60rem */}
        <div className="w-full mx-auto" style={{ maxWidth: 'min(92vw, 44rem)' }}>
          <div className="lg:max-w-[52rem] xl:max-w-[60rem] mx-auto">

            {/* Hero */}
            <div className="text-center" style={{ marginBottom: 'clamp(1rem, 3vw, 2.5rem)' }}>
              <h1
                className={`font-black text-gray-900 mb-2 leading-tight tracking-tight transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                /* CHANGE #2: Headline larger on desktop - clamp(1.7rem, 1.4vw + 1.1rem, 3.1rem) */
                style={{ fontSize: 'clamp(1.7rem, 1.4vw + 1.1rem, 3.1rem)' }}
              >
                Choose your
                <br />
                wellness goals.
              </h1>
              <p
                className={`text-gray-600 font-medium transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ fontSize: 'clamp(0.95rem, 0.7vw + 0.3rem, 1.15rem)' }}
              >
                Select up to 2 goals
              </p>
            </div>

            {/* Grid */}
            <div
              className="flex flex-col"
              style={{ gap: 'clamp(0.5rem, 1vw, 1rem)', marginBottom: 'clamp(1rem, 3vw, 2.5rem)' }}
            >
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
                      role="checkbox"
                      aria-checked={selected}
                      className={`w-full border-2 transition-all duration-300 ease-out text-left group relative focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.99] ${
                        selected
                          ? 'text-white shadow-xl border-transparent focus:ring-white/50'
                          : disabled
                          ? 'bg-gray-50/50 border-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                          : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400 hover:shadow-lg shadow-md focus:ring-gray-400'
                      } 
                      p-3 md:p-3.5 lg:p-5 rounded-xl md:rounded-2xl
                      `}
                      style={{
                        background: selected
                          ? `linear-gradient(135deg, ${goal.lightColor} 0%, ${goal.darkColor} 100%)`
                          : undefined
                      }}
                      aria-label={`${goal.name}: ${goal.description}`}
                    >
                      {/* CHANGE #3: Pill height responsive via Tailwind padding (p-3 md:p-3.5 lg:p-5) */}
                      <div className="flex items-center gap-3 md:gap-3.5 lg:gap-4">
                        {/* Icon */}
                        <div
                          className={`flex items-center justify-center shrink-0 transition-all duration-300 ${
                            selected ? 'bg-white/90 shadow-sm' : disabled ? 'bg-gray-100' : `${goal.iconBg} group-hover:scale-110`
                          } w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12 rounded-lg md:rounded-xl`}
                        >
                          <Icon
                            className="transition-all duration-300"
                            style={{
                              width: 'clamp(1rem, 1.2vw, 1.5rem)',
                              height: 'clamp(1rem, 1.2vw, 1.5rem)',
                              color: selected ? goal.baseColor : disabled ? '#9CA3AF' : goal.baseColor
                            }}
                            aria-hidden="true"
                          />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`font-bold transition-all duration-300 ${
                              selected ? 'text-white' : disabled ? 'text-gray-400' : 'text-gray-900'
                            }`}
                            style={{ fontSize: 'clamp(1rem, 1.1vw + 0.25rem, 1.35rem)', marginBottom: '.1rem' }}
                          >
                            {goal.name}
                          </h3>
                          <p
                            className={`font-medium transition-all duration-300 ${
                              selected ? 'text-white/90' : disabled ? 'text-gray-400' : 'text-gray-600'
                            }`}
                            style={{ fontSize: 'clamp(0.82rem, 0.7vw + 0.25rem, 0.98rem)' }}
                          >
                            {goal.description}
                          </p>
                        </div>

                        {/* Checkmark */}
                        {selected && (
                          <div className="absolute -right-2 -top-2 md:-right-2 md:-top-2 flex items-center justify-center rounded-full bg-white shadow-lg shrink-0 w-6 h-6 md:w-7 md:h-7">
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill={goal.baseColor} viewBox="0 0 20 20" aria-hidden="true">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Continue */}
            <div
              className={`transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={handleContinue}
                disabled={selectedGoals.length === 0}
                aria-disabled={selectedGoals.length === 0}
                className={`w-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  selectedGoals.length > 0
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } rounded-xl md:rounded-2xl py-3 md:py-4 lg:py-5`}
                style={{ fontSize: 'clamp(0.95rem, 0.9vw, 1.15rem)' }}
              >
                {selectedGoals.length === 0 ? 'Select a goal to continue' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}