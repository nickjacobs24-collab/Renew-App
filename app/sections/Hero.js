"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GRID } from "./system";

/*
 * Panel 1 — HERO. The prism artwork is a FULL-BLEED background layer that
 * spans the whole section (its own wide composition: dark negative space on
 * the left, prism on the right). The logo, headline, supporting copy and
 * waitlist form are real HTML overlaid ABOVE the image — the copy sits over
 * the image's natural dark left through a constrained content width, not a
 * separate black panel or a two-column split.
 *
 * The artwork is a TEMPORARY placeholder (derived from the mock). Swap it by
 * changing HERO_ART_SRC only — the full-bleed layout, object-fit and
 * object-position are production-ready and don't depend on its exact size.
 */

const ACCENT = "var(--prism-accent)";
const HERO_ART_SRC = "/hero/prism-hero.png"; // swap for the final wide artwork

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
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* DESKTOP: full-bleed background artwork — reaches every edge, prism on
          the right, dark negative space behind the copy. */}
      <div className="absolute inset-0 z-0 max-md:hidden">
        <Image
          src={HERO_ART_SRC}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle contrast gradient for legibility — fades to nothing, never
            reads as a separate solid panel. */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
      </div>

      {/* MOBILE: the prism as a DISTINCT object on the right (black canvas on
          the left for the copy — no overlap). Hidden on desktop. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 flex w-[43%] items-center md:hidden">
        <Image
          src="/hero/prism-mobile.png"
          alt=""
          width={600}
          height={660}
          priority
          sizes="43vw"
          className="h-auto w-full"
        />
      </div>

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

      {/* Content — on the LEFT. Mobile is constrained so it never overlaps the
          right-side prism; desktop keeps its content width over the artwork. */}
      <div className={`${GRID} relative z-10 flex min-h-screen items-center`}>
        <div className="w-full max-w-xl py-28 max-md:max-w-[57%] md:py-24">
          <h1 className="fade-rise font-accent leading-[1.08] tracking-[-0.01em] text-white text-[clamp(1.65rem,4.4vw,1.95rem)] md:text-[clamp(2.5rem,5.6vw,4.6rem)] md:leading-[1.06]">
            Know if your supplements are actually{" "}
            <span style={{ color: ACCENT }}>working</span>.
          </h1>

          <p className="mt-6 max-w-md text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-white/60">
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
                className="flex-1 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3.5 text-[15px] text-white outline-none backdrop-blur-sm transition-colors placeholder:text-white/40 focus:border-white/40"
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

          <p className="mt-7 text-[13px] text-white/50">
            We&rsquo;ll email you once when Prism launches.
          </p>
        </div>
      </div>
    </section>
  );
}
