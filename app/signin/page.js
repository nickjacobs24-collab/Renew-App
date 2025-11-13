"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInPageContent />
    </Suspense>
  );
}

function SignInPageContent() {
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
      
      {/* Background Image - UNTOUCHED */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/signin-visual.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      
      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex flex-col">
        
        {/* Logo - Top Left */}
        <div className="absolute top-6 left-6 z-50">
          <Image
            src="/images/renew-logo-white.png"
            alt="Renew logo"
            width={90}
            height={36}
            className="object-contain"
            priority
          />
        </div>

{/* Main Content - CENTERED */}
<div className="flex-1 flex items-center justify-center px-6 py-20">
  <div className="w-full max-w-md">
    
    {/* Card - ALL CONTENT INSIDE */}
    <div className="bg-white rounded-2xl shadow-2xl p-8">
              
              {/* Title - INSIDE CARD */}
              <div className="text-center mb-6">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight tracking-tight">
                  Create your Renew profile
                </h1>
                <p className="text-gray-600 font-medium text-sm">
                  Save your personalised results and track your progress over time.
                </p>
              </div>

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

              {/* Skip option - INSIDE CARD */}
              <div className="mt-6 text-center pt-4 border-t border-gray-200">
                <button
                  onClick={handleBypass}
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium underline underline-offset-2 transition-colors inline-flex items-center gap-1"
                >
                  View results once without saving
                  <span className="text-gray-400">→</span>
                </button>
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}