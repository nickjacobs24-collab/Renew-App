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
      {/* robin hood 3: CENTRED conversion block. Header two lines, slim
          field + button. (No images — the ref crop is a centred header;
          the three placeholders from last round are removed.) */}
      <div
        className={`${GRID} ${PANEL_PAD} flex flex-col items-center ${GAP_STACK} text-center`}
      >
        <motion.div {...enter()}>
          <Eyebrow mode="light">Get started</Eyebrow>
        </motion.div>

        {/* Typographic-variation pass (general device, FLAGGED for review):
            the payoff half "See for yourself." set in the italic serif
            accent against the grotesque first line. */}
        <motion.h2
          {...enter(0.06)}
          className="font-display tracking-[-0.025em] text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.08]"
          style={{ color: INK }}
        >
          No more guessing.
          <br />
          <span className="font-accent italic font-normal tracking-normal">
            See for yourself.
          </span>
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
          <motion.div
            {...enter(0.14)}
            className="flex w-full flex-col items-center gap-2.5"
          >
            <form
              onSubmit={onSubmit}
              className="mx-auto flex w-full max-w-md flex-col items-stretch gap-2.5 sm:flex-row"
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
                className="flex-1 rounded-full border border-black/15 bg-white px-5 py-2 text-sm outline-none placeholder:text-[#14140f]/50 focus:border-black/40"
                style={{ color: INK }}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full bg-[#14140f] px-6 py-2 text-sm font-medium text-[#fcfbf8] transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "submitting" ? "Joining…" : "Join the waitlist"}
              </button>
            </form>
            {/* Quiet reassurance directly beneath the field */}
            <p className="text-[13px]" style={{ color: "rgba(20,20,15,0.55)" }}>
              We&rsquo;ll email you once when Prism launches. Nothing else.
            </p>
          </motion.div>
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
