"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GRID } from "./system";

/*
 * Panel 1 — HERO.
 * Desktop: the "Landing background" prism artwork is a full-bleed, right-
 * weighted background (object-fit: cover) with the copy overlaid on the dark
 * left. Headline sets on two lines with a gutter to the prism.
 * Mobile: its own treatment — the copy stacks ABOVE an uncropped prism image
 * (never over the prism or its light path). H1 size and wrapping are set
 * independently from desktop.
 */

const ACCENT = "var(--prism-accent)";
const HERO_ART_SRC = "/hero/prism-hero.png"; // Landing background (desktop full-bleed)

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
      {/* DESKTOP: right-weighted prism artwork as a CSS background sized in
          vw. Using vw (not object-contain) makes the geometry independent of
          viewport HEIGHT, so the prism/beam land at the same % of the viewport
          width at 1440 and 1920. The asset (public/hero/prism-hero.png) is
          pre-cropped from "Landing page" and left-feathered so no light spills
          past the object; size + position keep every lit pixel right of 50%,
          the prism ~30vw wide, centred in the right half with padding. */}
      <div
        className="absolute inset-0 z-0 max-md:hidden"
        style={{
          backgroundImage: `url(${HERO_ART_SRC})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "46vw auto",
          backgroundPosition: "92.7% center",
        }}
      />
      {/* Feather the seam between the copy side and the artwork so the left
          half stays clean black even if a lit pixel edges near the midline. */}
      <div className="absolute inset-y-0 left-0 z-[1] w-1/2 max-md:hidden bg-gradient-to-r from-black via-black/85 to-transparent" />

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

      {/* Layout: desktop = copy overlaid on the left, vertically centred;
          mobile = copy stacked ABOVE the prism image. */}
      <div
        className={`${GRID} relative z-10 flex min-h-screen flex-col justify-center py-28 md:flex-row md:items-center md:justify-start md:py-24`}
      >
        {/* Copy column. Wider on desktop so the headline sets on two lines
            ("See if your supplements" / "are working.") with a gutter to the
            prism; the subhead and form keep their own widths. */}
        <div className="w-full max-w-xl md:max-w-[38rem]">
          {/* Desktop: forced two-line break; mobile wraps naturally. Sized so
              "See if your supplements" ends at ~48% of the viewport (matching
              the reference) — the hard copy-column width plus this size hold
              the two-line break with a clear gutter to the prism. */}
          <h1 className="fade-rise font-accent leading-[1.08] tracking-[-0.01em] text-white text-[clamp(2.4rem,6.4vw,2.9rem)] md:text-[clamp(2.5rem,4.5vw,3.7rem)] md:leading-[1.1]">
            See if your supplements{" "}
            <br className="max-md:hidden" />
            are <span style={{ color: ACCENT }}>working</span>.
          </h1>

          <p className="mt-7 max-w-[33rem] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-white/60 md:mt-10">
            Prism shows how supplements affect your health,{" "}
            <br className="max-md:hidden" />
            so you can keep what works and change what doesn&rsquo;t.
          </p>

          {status === "success" ? (
            <p className="mt-10 text-lg text-white/90 md:mt-12">
              You&rsquo;re on the list.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 flex w-full max-w-md flex-col gap-2.5 sm:flex-row md:mt-12"
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
                className="w-full min-w-0 flex-1 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3.5 text-[15px] text-white outline-none backdrop-blur-sm transition-colors placeholder:text-white/40 focus:border-white/40"
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

        {/* MOBILE: uncropped prism stacked below the copy (never behind it). */}
        <div className="mt-12 w-full md:hidden">
          <Image
            src="/hero/prism-mobile.png"
            alt=""
            width={560}
            height={700}
            priority
            sizes="(max-width: 768px) 86vw, 0px"
            className="mx-auto h-auto w-[86%] max-w-[21rem]"
          />
        </div>
      </div>
    </section>
  );
}
