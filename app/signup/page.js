'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Preserve all quiz answers from URL
  const handleSkip = () => {
    router.push(`/results?${searchParams.toString()}`);
  };

  // Placeholder OAuth handlers (you'll connect your auth provider here)
  const handleEmailSignup = () => {
    console.log('Email signup clicked');
    // TODO: Implement your email auth flow
    // After successful signup, redirect with:
    // router.push(`/results?${searchParams.toString()}`);
  };

  const handleAppleSignup = () => {
    console.log('Apple signup clicked');
    // TODO: Implement Apple OAuth
  };

  const handleGoogleSignup = () => {
    console.log('Google signup clicked');
    // TODO: Implement Google OAuth
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background - Deep blue gradient matching Renew hero */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0047AB] via-[#002D72] to-[#001F54]" />

      {/* Header - Minimal */}
      <header className="h-20 shrink-0 px-6 py-4">
        <div className="flex h-full items-center justify-between">
          <Image 
            src="/images/renew-logo-white.png" 
            alt="Renew logo" 
            width={90} 
            height={30} 
            className="object-contain" 
            priority 
          />
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/disclaimer" className="text-white/80 hover:text-white transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </header>

      {/* Main Content - Centered */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto">
          
          {/* Hero Text */}
          <div className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-white font-extrabold mb-3 leading-tight tracking-tight" style={{ fontSize: '1.75rem' }}>
              Your personalized results are ready.
            </h1>
            <p className="text-white/80 font-medium" style={{ fontSize: '1rem' }}>
              Create a free Renew account to view your tailored supplement insights.
            </p>
          </div>

          {/* Auth Buttons */}
          <div className={`space-y-3 mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Email Button */}
            <button
              onClick={handleEmailSignup}
              className="w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-3"
              style={{ fontSize: '1rem' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Continue with Email
            </button>

            {/* Apple Button */}
            <button
              onClick={handleAppleSignup}
              className="w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-3"
              style={{ fontSize: '1rem' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Continue with Apple
            </button>

            {/* Google Button */}
            <button
              onClick={handleGoogleSignup}
              className="w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-3"
              style={{ fontSize: '1rem' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Reassurance Text */}
          <p className={`text-center text-white/60 text-sm mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We'll safely store your answers so you can return anytime.
          </p>

          {/* Skip Link */}
          <div className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={handleSkip}
              className="text-white/50 hover:text-white/80 text-sm transition-colors underline decoration-white/30 hover:decoration-white/60"
            >
              Prefer to browse first? View results once →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}