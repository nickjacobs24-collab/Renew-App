"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import { useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isSignedIn } = useUser();

  // Calculate redirect URL with params
  const redirectUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      const urlParams = searchParams.toString();
      const storedParams = sessionStorage.getItem("renew_quiz_params");
      const finalParams = urlParams || storedParams;
      return finalParams ? `/results?${finalParams}` : "/results";
    }
    return "/results";
  }, [searchParams]);

  // Store params from URL to sessionStorage when page loads
  useEffect(() => {
    const urlParams = searchParams.toString();
    if (urlParams) {
      sessionStorage.setItem("renew_quiz_params", urlParams);
    }
  }, [searchParams]);

  // Fallback redirect (in case Clerk doesn't use afterSignInUrl)
  useEffect(() => {
    if (isSignedIn) {
      sessionStorage.removeItem("renew_quiz_params");
      router.push(redirectUrl);
    }
  }, [isSignedIn, router, redirectUrl]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/create-account"
        afterSignInUrl={redirectUrl}
        afterSignUpUrl={redirectUrl}
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-white text-blue-900 hover:bg-gray-100 font-medium rounded-xl",
          },
        }}
      />
    </div>
  );
}