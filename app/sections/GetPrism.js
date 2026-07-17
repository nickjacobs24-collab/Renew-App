"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GRID, PANEL_PAD, Eyebrow, IS_LAUNCHED, GAP_STACK } from "./system";

/*
 * Panel 6 — GET PRISM (§4, LIGHT). Stacked: header above, form below.
 * Header is locked copy; its "No more guessing" repeat of a Panel 5
 * line is flagged (§5 collision 1) — built as-is, founder resolves.
 * The only input on the entire site. POSTs to /api/waitlist (Airtable,
 * §8.10 preview-gated). Form-state microcopy is drafted, flagged in
 * CLAUDE.md §11. At launch IS_LAUNCHED swaps this block (§4).
 * Left-aligned (P5-round rule: the hero is the only centred panel).
 */

const INK = "var(--prism-ink)";

export default function GetPrism() {
  const prefersReduced = useReducedMotion();
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

  const enter = (delay = 0) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] },
  });

  // Launch state not built yet — needs the App Store link and badge
  // asset; IS_LAUNCHED stays false until then (§4 Panel 6).
  if (IS_LAUNCHED) return null;

  return (
    <section
      id="get-prism"
      style={{ background: "var(--prism-cream)", color: INK }}
    >
      <div
        className={`${GRID} ${PANEL_PAD} flex flex-col items-start ${GAP_STACK} text-left`}
      >
        <motion.div {...enter()}>
          <Eyebrow mode="light">Get started</Eyebrow>
        </motion.div>

        <motion.h2
          {...enter(0.06)}
          className="font-display max-w-2xl tracking-[-0.025em] text-[clamp(2rem,4.4vw,3.4rem)]"
          style={{ color: INK }}
        >
          No more guessing. See for yourself.
        </motion.h2>

        {status === "success" ? (
          <motion.p
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[clamp(1.1rem,2.2vw,1.4rem)]"
            style={{ color: INK }}
          >
            You&rsquo;re on the list.
          </motion.p>
        ) : (
          <motion.form
            {...enter(0.14)}
            onSubmit={onSubmit}
            className="flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-black/15 bg-white px-6 py-3.5 text-base outline-none placeholder:text-[#14140f]/50 focus:border-black/40"
              style={{ color: INK }}
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-full bg-[#14140f] px-8 py-3.5 text-base font-medium text-[#f7f2e8] transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "submitting" ? "Joining…" : "Join the waitlist"}
            </button>
          </motion.form>
        )}

        {status === "error" && (
          <p className="text-sm" style={{ color: INK }}>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
