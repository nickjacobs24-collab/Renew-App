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
  const [emailSent, setEmailSent] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackUrl = searchParams.get("callback") || "/results";
  console.log("DEBUG - Full callback URL:", callbackUrl);  // ADD THIS LINE

  async function handleEmailSignIn(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn("email", {
        email,
        redirect: false,
        callbackUrl,
      });
      setEmailSent(true);
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
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/signin-visual.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      <div className="absolute inset-0 z-10 bg-black/40" />
      
      <div className="relative z-20 min-h-screen flex flex-col">
        
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

        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-md">
            
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              
              {!emailSent ? (
                <>
                  <div className="text-center mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight tracking-tight">
                      Create your Renew profile
                    </h1>
                    <p className="text-gray-600 font-medium text-sm">
                      Save your personalised results and track your progress over time.
                    </p>
                  </div>

{/* <button
  onClick={handleGoogle}
  className="w-full py-3.5 mb-4 rounded-xl bg-white border-2 border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 flex items-center justify-center gap-3"
>
  <svg width="18" height="18" viewBox="0 0 18 18">
    <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
    <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
    <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"/>
    <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"/>
  </svg>
  Continue with Google
</button> */}

{/* <div className="flex items-center my-6">
  <div className="flex-grow h-px bg-gray-300" />
  <span className="px-4 text-sm text-gray-500 font-medium">or</span>
  <div className="flex-grow h-px bg-gray-300" />
</div> */}

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

                  <div className="mt-6 text-center pt-4 border-t border-gray-200">
                    <button
                      onClick={handleBypass}
                      className="text-sm text-gray-600 hover:text-gray-900 font-medium underline underline-offset-2 transition-colors inline-flex items-center gap-1"
                    >
                      View results once without saving
                      <span className="text-gray-400">→</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Check your email
                  </h2>
                  
                  <p className="text-gray-700 mb-1">
                    We sent a link to
                  </p>
                  <p className="text-gray-900 font-semibold mb-4">
                    {email}
                  </p>

                  <p className="text-sm text-gray-500 mb-6">
                    Click the link to sign in. It expires in 10 minutes.
                  </p>

                  <button
                    onClick={() => {
                      setEmailSent(false);
                      setEmail("");
                    }}
                    className="text-sm text-gray-600 hover:text-gray-900 font-medium underline underline-offset-2"
                  >
                    Didn't receive it? Try again
                  </button>
                </div>
              )}
              
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}