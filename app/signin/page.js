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
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/signin-visual.jpg"
          alt="Serene lake at sunrise"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      </div>

      {/* Header with logo */}
      <header className="h-20 shrink-0 px-6 py-4 border-b border-white/20 shadow-lg bg-white/80 backdrop-blur-md">
        <div className="flex h-full items-center justify-center">
          <Image
            src="/images/renew-logo-black.png"
            alt="Renew logo"
            width={90}
            height={30}
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-lg" style={{ fontSize: '1.875rem' }}>
              Create your Renew profile
            </h1>
            <p className="text-white/90 font-medium drop-shadow-md" style={{ fontSize: '0.9375rem' }}>
              Save your personalised results and track your progress over time.
            </p>
          </div>

          {/* Card - slightly transparent to show background */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8">
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

          {/* Skip option - with arrow */}
          <div className="mt-8 text-center">
            <button
              onClick={handleBypass}
              className="text-sm text-white/90 hover:text-white font-medium underline underline-offset-2 transition-colors inline-flex items-center gap-1 drop-shadow-md"
            >
              View results once without saving
              <span className="text-white/70">→</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}