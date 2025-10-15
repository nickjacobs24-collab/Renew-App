'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Zap, Brain, Moon, Heart, Shield, Sparkles, SmileIcon } from 'lucide-react';
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
    darkColor: '#B45309',
    tintColor: '#EFF6FF',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-700'
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
    <div className="min-h-screen relative overflow-hidden">
      {/* White to gray gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 20%, #F3F4F6 50%, #E5E7EB 100%)'
        }}
      />
      
{/* Header */}
<header className="relative z-10 px-6 py-4 border-b border-gray-200 shadow-lg shadow-gray-300/40">
  <div className="flex items-center justify-between">

    {/* Logo Image - far left */}
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

    {/* Back button - far right */}
    <button 
      onClick={() => router.back()}
      className="flex items-center text-gray-400 hover:text-gray-900 transition-colors p-2 -m-2 rounded-lg hover:bg-gray-100/50"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      <span className="font-large">Back</span>
    </button>

  </div>
</header>

<br></br><br></br><br></br><br></br>

      {/* Main content */}
      <main className="relative z-10 px-4 pb-16">
        <div className="max-w-xl mx-auto">
          {/* Hero text - more compact */}
          <div className="text-center mb-10">
            <h1 className={`text-4xl md:text-5xl font-black text-gray-900 mb-3 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Choose your
              <br />
              wellness goals.
            </h1>
            <p className={`text-lg text-gray-600 font-medium transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Select up to 2 goals
            </p>
          </div>

          {/* Goals grid - 70% smaller pills */}
          <div className="space-y-3 mb-10">
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
                    className={`w-full p-4 md:p-5 rounded-2xl border transition-all duration-300 ease-out text-left group ${
                      selected 
                        ? `text-white shadow-xl border-transparent`
                        : disabled
                          ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed opacity-60'
                          : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400 hover:shadow-lg'
                    }`}
                    style={selected ? {
                      background: `linear-gradient(135deg, ${goal.lightColor} 0%, ${goal.darkColor} 100%)`
                    } : {}}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        selected 
                          ? 'bg-white bg-opacity-90' 
                          : disabled
                            ? 'bg-gray-200'
                            : `${goal.iconBg} group-hover:scale-105`
                      }`}>
                        <Icon className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300`}
                          style={{
                            color: selected ? goal.baseColor : disabled ? '#9CA3AF' : goal.baseColor
                          }}
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-2xl font-bold mb-1 transition-all duration-300 ${
                          selected 
                            ? 'text-white' 
                            : disabled
                              ? 'text-gray-400'
                              : 'text-gray-900'
                        }`}>
                          {goal.name}
                        </h3>
                        <p className={`text-sm md:text-base font-medium transition-all duration-300 ${
                          selected 
                            ? 'text-white text-opacity-90' 
                            : disabled
                              ? 'text-gray-400'
                              : 'text-gray-600'
                        }`}>
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Continue button - darker gray when disabled */}
          <div className={`transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={handleContinue}
              className={`w-full py-4 md:py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 ${
                selectedGoals.length > 0
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0'
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed shadow-none'
              }`}
              disabled={selectedGoals.length === 0}
            >
              Continue
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}