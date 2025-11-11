"use client";

import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const urlParams = searchParams.toString();
  const redirectUrl = urlParams ? `/results?${urlParams}` : "/results";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/create-account"
        forceRedirectUrl={redirectUrl}
        fallbackRedirectUrl={redirectUrl}
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