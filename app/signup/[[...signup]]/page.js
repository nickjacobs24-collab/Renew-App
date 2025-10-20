'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SignUp, useUser } from "@clerk/nextjs";
import Image from 'next/image';

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isSignedIn } = useUser();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Store quiz params
  useEffect(() => {
    const urlParams = searchParams.toString();
    if (urlParams) {
      sessionStorage.setItem("renew_quiz_params", urlParams);
    }
  }, [searchParams]);

  // Calculate redirect URL
  const getRedirectUrl = () => {
    if (typeof window !== 'undefined') {
      const urlParams = searchParams.toString();
      const storedParams = sessionStorage.getItem("renew_quiz_params");
      const finalParams = urlParams || storedParams;
      return finalParams ? `/results?${finalParams}` : "/results";
    }
    return "/results";
  };

  // Redirect after sign-up
  useEffect(() => {
    if (isSignedIn) {
      sessionStorage.removeItem("renew_quiz_params");
      router.push(getRedirectUrl());
    }
  }, [isSignedIn, router]);

  // Skip authentication
  const handleSkip = () => {
    router.push(`/results?${searchParams.toString()}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background - Deep blue gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0047AB] via-[#002D72] to-[#001F54]" />

      {/* Header */}
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
          {/* Right links */}
          <div className="flex items-center space-x-8">
            <a
              href="/results/appaboutrenew"
              onClick={(e) => {
                e.preventDefault();
                window.open("/results/appaboutrenew", "_blank", "width=1000,height=800");
              }}
              className="text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
            >
              About Renew
            </a>
            <a
              href="/results/apphowwechoose"
              onClick={(e) => {
                e.preventDefault();
                window.open("/results/apphowwechoose", "_blank", "width=1000,height=800");
              }}
              className="text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
            >
              How We Choose
            </a>
            <a
              href="/results/appprivacy"
              onClick={(e) => {
                e.preventDefault();
                window.open("/results/appprivacy", "_blank", "width=1000,height=800");
              }}
              className="text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/results/appdisclaimer"
              onClick={(e) => {
                e.preventDefault();
                window.open("/results/appdisclaimer", "_blank", "width=1000,height=800");
              }}
              className="text-white/70 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </header>

      {/* Main Content - Centered */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          
          {/* Hero Text */}
          <div className="text-center mb-8">
            <h1 className="text-white mb-6 tracking-tight" style={{ lineHeight: '1.2em' }}>
              <span className={`block font-bold transition-all duration-300 ease-in ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ fontSize: '2rem' }}>
                Your personalised results
              </span>
              <span className={`block font-normal text-white/90 mt-6 transition-all duration-400 ease-in delay-[400ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ fontSize: '1.75rem' }}>
                are ready.
              </span>
            </h1>
            <p className={`text-white/80 font-medium mt-8 transition-all duration-1000 delay-[600ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ fontSize: '1rem' }}>
              Create a free Renew account to view your personalized results.
            </p>
          </div>

          {/* Clerk Sign Up Component */}
          <div className={`transition-all duration-1000 delay-[800ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <SignUp
              path="/signup"
              routing="path"
              signInUrl="/sign-in"
              afterSignUpUrl={getRedirectUrl()}
              appearance={{
                elements: {
                  rootBox: "w-full mx-auto",
                  card: "bg-white shadow-xl rounded-2xl",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 shadow-sm",
                  socialButtonsBlockButtonText: "font-semibold text-base",
                  socialButtonsIconButton: "border border-gray-300",
                  dividerRow: "my-4",
                  dividerLine: "bg-gray-200",
                  dividerText: "text-gray-500 text-sm",
                  formFieldLabel: "text-sm font-semibold text-gray-700",
                  formFieldInput: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 text-base",
                  formButtonPrimary: "w-full bg-gray-900 text-white hover:bg-gray-800 font-semibold py-3.5 rounded-xl shadow-lg",
                  footerActionLink: "text-blue-600 hover:text-blue-700 font-semibold text-sm",
                  footerActionText: "text-gray-600 text-sm",
                },
                layout: {
                  socialButtonsPlacement: "top",
                  socialButtonsVariant: "blockButton",
                },
              }}
            />
          </div>

          {/* Reassurance Text */}
          <p className={`text-center text-white/60 text-sm mb-6 mt-6 transition-all duration-1000 delay-[1000ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We'll safely store your answers so you can return anytime.
          </p>

          {/* Skip Link */}
          <div className={`text-center transition-all duration-1000 delay-[1200ms] ${
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