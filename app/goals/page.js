'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Zap, Brain, Moon, Heart, Shield, Smile } from 'lucide-react';
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
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600'
  },
  {
    id: 'wellness',
    name: 'Wellness',
    description: 'Overall health and vitality',
    icon: Smile,
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
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-200">
      {/* Header - Fixed 64px */}
      <header className="h-16 shrink-0 px-6 py-3 border-b border-gray-200 shadow-lg shadow-gray-300/40 bg-white/95 backdrop-blur-sm">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/renew-logo-black.png"
              alt="Renew logo"
              width={80}
              height={26}
              className="object-contain"
              priority
            />
          </div>

          <button 
            onClick={() => router.back()}
            className="flex items-center text-gray-400 hover:text-gray-900 transition-colors p-2 -m-2 rounded-lg hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span className="text-sm">Back</span>
          </button>
        </div>
      </header>

      {/* Main content - Uses remaining space */}
      <main className="flex-1 overflow-y-auto px-4 py-3">
        <div className="w-full max-w-lg mx-auto h-full flex flex-col">
          {/* Hero text - Compact */}
          <div className="text-center mb-3 shrink-0">
            <h1 className={`font-black text-gray-900 text-3xl mb-1 leading-tight tracking-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Choose your
              <br />
              wellness goals.
            </h1>
            <p className={`text-gray-600 font-medium text-sm transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Select up to 2 goals
            </p>
          </div>

          {/* Goals grid - Compact spacing */}
          <div className="space-y-1.5 mb-3 flex-1">
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
                    className={`w-full p-2.5 rounded-xl border-2 transition-all duration-300 ease-out text-left group relative focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.99] ${
                      selected 
                        ? `text-white shadow-xl border-transparent focus:ring-white/50`
                        : disabled
                          ? 'bg-gray-50/50 border-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                          : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400 hover:shadow-lg shadow-md focus:ring-gray-400'
                    }`}
                    style={selected ? {
                      background: `linear-gradient(135deg, ${goal.lightColor} 0%, ${goal.darkColor} 100%)`
                    } : {}}
                    aria-label={`${goal.name}: ${goal.description}`}
                  >
                    <div className="flex items-center gap-2.5">
                      {/* Icon - Compact */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                        selected 
                          ? 'bg-white/90 shadow-sm' 
                          : disabled
                            ? 'bg-gray-100'
                            : `${goal.iconBg} group-hover:scale-110`
                      }`}>
                        <Icon 
                          className="w-4 h-4 transition-all duration-300"
                          style={{
                            color: selected ? goal.baseColor : disabled ? '#9CA3AF' : goal.baseColor
                          }}
                          aria-hidden="true"
                        />
                      </div>
                      
                      {/* Text - Compact */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-base mb-0 transition-all duration-300 ${
                          selected ? 'text-white' : disabled ? 'text-gray-400' : 'text-gray-900'
                        }`}>
                          {goal.name}
                        </h3>
                        <p className={`font-medium text-xs transition-all duration-300 ${
                          selected ? 'text-white/90' : disabled ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {goal.description}
                        </p>
                      </div>

                      {/* Checkmark - Smaller */}
                      {selected && (
                        <div className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg shrink-0">
                          <svg 
                            className="h-3.5 w-3.5" 
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

          {/* Continue button - Compact */}
          <div className={`shrink-0 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={handleContinue}
              className={`w-full py-3 px-8 rounded-xl font-bold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                selectedGoals.length > 0
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 focus:ring-blue-500'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
              }`}
              disabled={selectedGoals.length === 0}
              aria-disabled={selectedGoals.length === 0}
            >
              {selectedGoals.length === 0 ? 'Select a goal to continue' : 'Continue'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}