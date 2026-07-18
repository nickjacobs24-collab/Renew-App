"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GRID } from "./system";

/*
 * Panel 1 — HERO. Rebuilt to the approved landing-page mock: dark canvas,
 * PRISM wordmark top-left (no nav), a serif headline + supporting line +
 * working waitlist form on the LEFT, and the large prism artwork on the
 * RIGHT. Two-column on desktop; stacks content-first on mobile.
 *
 * The artwork is a TEMPORARY placeholder (cropped from the mock) and is the
 * only non-final element. Swapping it later is just changing the <Image>
 * src — the layout, sizing and object-fit are already production-ready and
 * do not depend on the placeholder's exact dimensions.
 */

const ACCENT = "var(--prism-accent)";
const HERO_ART_SRC = "/hero/prism-hero.png"; // swap for the final artwork

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function onSubmit(e) {
    e.preventDefault();
    if (!email || status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-black text-white">
      {/* Header — logo only, no navigation. */}
      <header className="absolute inset-x-0 top-0 z-20 py-6 md:py-8">
        <div className={GRID}>
          <Link
            href="/"
            className="font-accent text-xl tracking-[0.28em] text-white md:text-2xl"
          >
            PRISM
          </Link>
        </div>
      </header>

      <div
        className={`${GRID} grid min-h-screen items-center gap-10 pt-28 pb-16 md:grid-cols-2 md:gap-14 md:pt-24 md:pb-20`}
      >
        {/* LEFT — content (stacks first on mobile, keeping hierarchy). */}
        <div className="flex flex-col">
          <h1 className="fade-rise font-accent text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.06] tracking-[-0.01em] text-white">
            Know if your supplements are actually{" "}
            <span style={{ color: ACCENT }}>working</span>.
          </h1>

          <p className="mt-6 max-w-md text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-white/55">
            See what&rsquo;s changing in your health, so you can keep what works
            and change what doesn&rsquo;t.
          </p>

          {status === "success" ? (
            <p className="mt-9 text-lg text-white/90">You&rsquo;re on the list.</p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-9 flex w-full max-w-md flex-col gap-2.5 sm:flex-row"
            >
              <label htmlFor="hero-email" className="sr-only">
                Email address
              </label>
              <input
                id="hero-email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-[15px] text-white outline-none transition-colors placeholder:text-white/40 focus:border-white/40"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="shrink-0 rounded-xl bg-white px-6 py-3.5 text-[15px] font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "submitting" ? "Joining…" : "Join the waitlist"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-white/70">
              Something went wrong. Please try again.
            </p>
          )}

          {/* Waitlist supporting line — no lock icon, generous spacing. */}
          <p className="mt-7 text-[13px] text-white/45">
            We&rsquo;ll email you once when Prism launches.
          </p>
        </div>

        {/* RIGHT — hero artwork (temporary placeholder; swap the src only).
            Scales responsively, preserves composition, never overlaps text. */}
        <div className="relative w-full overflow-hidden aspect-[5/6] sm:aspect-[4/3] md:aspect-auto md:h-[min(80vh,780px)]">
          <Image
            src={HERO_ART_SRC}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
