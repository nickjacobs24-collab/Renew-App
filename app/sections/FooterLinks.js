"use client";
import { useEffect, useRef, useState } from "react";

/*
 * Footer links. Privacy is a real page (/privacy). Contact opens a small
 * contact card anchored above the footer (a popover on desktop, a restrained
 * bottom sheet on mobile). The email is a plain, standard mailto anchor —
 * clicking it opens the visitor's mail composer. No clipboard behaviour.
 * Obvious link affordance: pointer cursor, persistent underline, hover and
 * focus states. Closes on the X, a click outside, or Escape.
 */
export default function FooterLinks() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <a href="/privacy" className="hover:text-white">
        Privacy
      </a>
      <span aria-hidden="true" className="h-3 w-px bg-white/20" />

      <div ref={wrapRef} className="relative">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-controls="contact-card"
          className="cursor-pointer text-white/70 transition-colors hover:text-white"
        >
          Contact
        </button>

        {open && (
          <div
            id="contact-card"
            role="dialog"
            aria-labelledby="contact-card-heading"
            className="fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-[440px] p-8 text-left md:absolute md:inset-x-auto md:bottom-full md:left-0 md:mx-0 md:mb-3 md:w-[420px]"
            style={{
              background: "var(--prism-cream)",
              color: "var(--prism-ink)",
              borderRadius: "var(--prism-radius)",
              border: "1px solid rgba(20,20,15,0.12)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
            }}
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-xl leading-none text-[#14140f]/40 transition-colors hover:text-[#14140f]"
            >
              &times;
            </button>

            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#14140f]/60">
              Contact
            </p>
            <h3
              id="contact-card-heading"
              className="mt-4 text-xl font-semibold tracking-tight"
            >
              Questions about Prism?
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#14140f]/70">
              Email us and we&rsquo;ll get back to you.
            </p>

            {/* Plain, standard mailto link — opens the mail composer. Obvious
                affordance: pointer, persistent underline, hover + focus. */}
            <a
              href="mailto:hello@prismhealthco.com"
              className="group mt-7 flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-[15px] font-medium transition-colors hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14140f]/40"
              style={{
                borderRadius: "calc(var(--prism-radius) - 0.45rem)",
                border: "1px solid rgba(20,20,15,0.18)",
              }}
            >
              <span className="underline decoration-[#14140f]/40 underline-offset-4 transition-colors group-hover:decoration-[#14140f]">
                hello@prismhealthco.com
              </span>
              <span
                aria-hidden="true"
                className="text-base leading-none opacity-60 transition-transform group-hover:translate-x-0.5"
              >
                &#8599;
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
