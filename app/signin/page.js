"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackUrl = searchParams.get("callback") || "/results";

  async function handleEmailSignIn(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn("email", {
        email,
        redirect: false,
        callbackUrl,
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    await signIn("google", { callbackUrl });
  }

  function handleBypass() {
    router.push(callbackUrl);
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Background Image - NO MODIFICATIONS */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/signin-visual.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Dark Overlay - DARKER */}
      <div className="absolute inset-0 z-10 bg-black/10" />
      
      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex flex-col">
        
        {/* NAV - NO BAR, JUST LOGO */}
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-transparent">
          <div className="flex h-full items-start justify-start px-4 md:px-6 pt-4">
            <Image
              src="/images/renew-logo-white.png"
              alt="Renew logo"
              width={80}
              height={32}
              className="object-contain md:w-[100px] md:h-[40px]"
              priority
            />
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-md">
            
            {/* Title */}
            <div className="text-center mb-8">
              <h1 
                className="font-extrabold text-white mb-3 leading-tight tracking-tight"
                style={{
                  fontSize: '1.875rem',
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
                }}
              >
                Create your Renew profile
              </h1>
              <p 
                className="text-white/90 font-medium"
                style={{
                  fontSize: '0.9375rem',
                  textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)"
                }}
              >
                Save your personalised results and track your progress over time.
              </p>
            </div>

            {/* Card - WHITE AND PROMINENT */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              
              {/* Google button */}
              <button
                onClick={handleGoogle}
                className="w-full py-3.5 mb-4 rounded-xl border-2 border-gray-300 text-gray-900 font-semibold text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Continue with Google
              </button>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-300" />
                <span className="px-4 text-sm text-gray-500 font-medium">or</span>
                <div className="flex-grow h-px bg-gray-300" />
              </div>

              {/* Email form */}
              <form onSubmit={handleEmailSignIn}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email address
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full p-3.5 rounded-xl border-2 border-gray-300 text-gray-900 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {loading ? "Sending magic link..." : "Continue with Email"}
                </button>
              </form>
            </div>

            {/* Skip option */}
            <div className="mt-8 text-center">
              <button
                onClick={handleBypass}
                className="text-sm text-white/90 hover:text-white font-medium underline underline-offset-2 transition-colors inline-flex items-center gap-1"
                style={{
                  textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)"
                }}
              >
                View results once without saving
                <span className="text-white/70">→</span>
              </button>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}