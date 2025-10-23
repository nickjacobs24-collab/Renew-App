"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isSignedIn } = useUser();
  const [redirectUrl, setRedirectUrl] = useState("/results");

  // Store params and calculate redirect URL
  useEffect(() => {
    const urlParams = searchParams.toString();
    if (urlParams) {
      sessionStorage.setItem("renew_quiz_params", urlParams);
      setRedirectUrl(`/results?${urlParams}`);
    } else {
      const storedParams = sessionStorage.getItem("renew_quiz_params");
      if (storedParams) {
        setRedirectUrl(`/results?${storedParams}`);
      }
    }
  }, [searchParams]);

  // Fallback redirect
  useEffect(() => {
    if (isSignedIn) {
      const finalUrl = redirectUrl;
      sessionStorage.removeItem("renew_quiz_params");
      router.push(finalUrl);
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