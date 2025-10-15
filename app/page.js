"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import Image from "next/image";

export default function LandingPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
<div className="min-h-screen relative overflow-hidden flex flex-col" 
         style={{ background: 'linear-gradient(to bottom, #0f2554 0%, #2563eb 100%)' }}>
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center mt-2">
            <Image
              src="/images/renew-logo-white.png"
              alt="Renew logo"
              width={100}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/results/appprivacy" 
              onClick={(e) => {
                e.preventDefault();
                window.open('/results/appprivacy', '_blank', 'width=1000,height=800');
              }}
              className="text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/results/appprivacy" 
              onClick={(e) => {
                e.preventDefault();
                window.open('/results/appdisclaimer', '_blank', 'width=1000,height=800');
              }}
              className="text-white/70 hover:text-white transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content - Properly Centered */}
<div className="flex-1 flex items-start justify-center px-6 pt-64">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div 
              className="text-white leading-none"
              style={{
                fontSize: 'clamp(64px, 12vw, 112px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1
              }}
            >
              Supplements
            </div>
            <div 
              className="text-white/80 leading-none"
              style={{
                fontSize: 'clamp(56px, 10vw, 96px)',
                fontWeight: 100,
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              made simple.
            </div>
          </h1>

          {/* Subheading */}
          <p className={`text-white/60 mt-10 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.01em'
          }}>
            Clear, evidence-backed guidance.
          </p>

          {/* CTA Button */}
          <div className={`mt-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={() => router.push('/goals')}
              className="group relative inline-flex items-center px-10 py-5 bg-white/95 backdrop-blur-sm text-blue-600 font-medium text-lg rounded-full ring-1 ring-white/20 shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300"
            >
              Get your recommendations
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}