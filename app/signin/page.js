"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  
  // Get the callback URL from the query params (or default to /results)
  const callbackUrl = searchParams.get("callback") || "/results";

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn("email", {
        email,
        redirect: false,
        callbackUrl, // Use the dynamic callback URL
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      maxWidth: "420px",
      margin: "60px auto",
      padding: "24px",
      fontFamily: "system-ui, sans-serif"
    }}>
      <h1 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "20px" }}>
        Sign in to Renew
      </h1>

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>
          Email address
        </label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px",
            marginBottom: "16px"
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            fontWeight: "600",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            opacity: loading ? 0.6 : 1
          }}
        >
          {loading ? "Sending..." : "Continue with Email"}
        </button>
      </form>
    </div>
  );
}