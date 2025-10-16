
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Zap, Brain, Moon, Heart, Shield, SmileIcon } from 'lucide-react';
import Image from "next/image";

const goals = [
  {
    id: 'energy',
    name: 'Energy',
    description: 'Boost energy, reduce fatigue',
    icon: Zap,
    baseColor: '#F97316',
    lightColor: '#FB923C',
    darkColor: '#EA580C',
    tintColor: '#FFF7ED',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    id: 'mind',
    name: 'Mind',
    description: 'Sharper thinking and memory',
    icon: Brain,
    baseColor: '#7C3AED',
    lightColor: '#9333EA',
    darkColor: '#6D28D9',
    tintColor: '#FAF5FF',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: 'sleep',
    name: 'Sleep',
    description: 'Deeper and more restful sleep',
    icon: Moon,
    baseColor: '#1E40AF',
    lightColor: '#3B82F6',
    darkColor: '#1E3A8A',   
    tintColor: '#EEF2FF',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600'
  },
  {
    id: 'calm',
    name: 'Calm',
    description: 'Reduce stress, feel calmer',
    icon: Heart,
    baseColor: '#0D9488',
    lightColor: '#14B8A6',
    darkColor: '#0F766E',
    tintColor: '#F0FDFA',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600'
  },
  {
    id: 'wellness',
    name: 'Wellness',
    description: 'Overall health and vitality',
    icon: SmileIcon,
    baseColor: '#F59E0B',
    lightColor: '#FBBF24',
    darkColor: '#D97706',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    id: 'immunity',
    name: 'Immunity',
    description: 'Strengthen immune system',
    icon: Shield,
    baseColor: '#059669',
    lightColor: '#10B981',
    darkColor: '#047857',
    tintColor: '#ECFDF5',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600'
  }
];

export default function GoalsPage() {
  const router = useRouter();
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleGoalSelect = (goalId) => {
    if (selectedGoals.includes(goalId)) {
      setSelectedGoals(selectedGoals.filter(id => id !== goalId));
    } else if (selectedGoals.length < 2) {
      setSelectedGoals([...selectedGoals, goalId]);
    }
  };

  const handleContinue = () => {
    if (selectedGoals.length > 0) {
      router.push(`/results?goals=${encodeURIComponent(selectedGoals.join(","))}`);
    }
  };

  const isSelected = (goalId) => selectedGoals.includes(goalId);
  const isDisabled = (goalId) => selectedGoals.length >= 2 && !isSelected(goalId);

  return (
    <div className="min-h-[100dvh] relative flex flex-col overflow-hidden">
      {/* Background gradient - keeping your exact original */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 20%, #F3F4F6 50%, #E5E7EB 100%)'
        }}
      />
      
      {/* Header - restored to your exact original layout with consistent shadow */}
      <header className="relative z-10 h-20 shrink-0 px-6 py-4 border-b border-gray-200 shadow-lg shadow-gray-300/40">
        <div className="flex h-full items-center justify-between">
          {/* Logo - far left, exactly as original */}
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

          {/* Back button - far right, exactly as original */}
          <button 
            onClick={() => router.back()}
            className="flex items-center text-gray-400 hover:text-gray-900 transition-colors p-2 -m-2 rounded-lg hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-large">Back</span>
          </button>
        </div>
      </header>

      {/* Main content - flex grow for vertical centering */}
      <main className="relative z-10 flex grow items-center justify-center px-4 py-8">
        <div className="max-w-md mx-auto w-full">
          {/* Hero text - keeping your original structure */}
          <div className="text-center mb-6 sm:mb-10">
            <h1 className={`font-black text-gray-900 mb-2 sm:mb-3 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
            >
              Choose your
              <br />
              wellness goals.
            </h1>
            <p className={`text-gray-600 font-medium transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
            }}
            >
              Select up to 2 goals
            </p>
          </div>

          {/* Goals grid - enhanced visibility */}
          <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
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
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <button
                    onClick={() => handleGoalSelect(goal.id)}
                    disabled={disabled}
                    className={`w-full p-3 sm:p-4 md:p-5 rounded-2xl border-2 transition-all duration-300 ease-out text-left group relative focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.99] ${
                      selected 
                        ? `text-white shadow-xl border-transparent focus:ring-white/50`
                        : disabled
                          ? 'bg-gray-50/50 border-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                          : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400 hover:shadow-lg shadow-md focus:ring-gray-400'
                    }`}
                    style={selected ? {
                      background: `linear-gradient(135deg, ${goal.lightColor} 0%, ${goal.darkColor} 100%)`
                    } : {}}
                    aria-label={`${selected ? 'Deselect' : 'Select'} ${goal.name}: ${goal.description}`}
                    aria-pressed={selected}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      {/* Icon container */}
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        selected 
                          ? 'bg-white/90 shadow-sm' 
                          : disabled
                            ? 'bg-gray-100'
                            : `${goal.iconBg} group-hover:scale-110`
                      }`}>
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300`}
                          style={{
                            color: selected ? goal.baseColor : disabled ? '#9CA3AF' : goal.baseColor
                          }}
                          aria-hidden="true"
                        />
                      </div>
                      
                      {/* Text content */}
                      <div className="flex-1">
                        <h3 className={`font-bold mb-0.5 sm:mb-1 transition-all duration-300 ${
                          selected 
                            ? 'text-white' 
                            : disabled
                              ? 'text-gray-400'
                              : 'text-gray-900'
                        }`}
                        style={{
                          fontSize: 'clamp(1rem, 2.5vw, 1.375rem)'
                        }}
                        >
                          {goal.name}
                        </h3>
                        <p className={`font-medium transition-all duration-300 ${
                          selected 
                            ? 'text-white/90' 
                            : disabled
                              ? 'text-gray-400'
                              : 'text-gray-600'
                        }`}
                        style={{
                          fontSize: 'clamp(0.75rem, 1.5vw, 0.9375rem)'
                        }}
                        >
                          {goal.description}
                        </p>
                      </div>

                      {/* Selection indicator - checkmark badge */}
                      {selected && (
                        <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-lg">
                          <svg 
                            className="h-4 w-4" 
                            fill={goal.baseColor} 
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
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

          {/* Continue button - keeping your original style with improvements */}
          <div className={`transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={handleContinue}
              className={`w-full py-4 md:py-5 px-8 rounded-2xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                selectedGoals.length > 0
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 focus:ring-blue-500'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
              }`}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)'
              }}
              disabled={selectedGoals.length === 0}
              aria-label={selectedGoals.length === 0 ? 'Select at least one goal to continue' : 'Continue to results'}
            >
              {selectedGoals.length === 0 ? 'Select a goal to continue' : 'Continue'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}