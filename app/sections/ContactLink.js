"use client";
import { useEffect, useRef, useState } from "react";

/*
 * Footer "Contact" link that opens a small in-page modal (not a mailto, not
 * a page). The email is shown as selectable text AND is a mailto link.
 * Closes via the X, a click on the backdrop, or the Escape key. Styled to
 * the design system: cream card, ink text, shared radius.
 */
export default function ContactLink() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer text-white/70 transition-colors hover:text-white"
      >
        Contact
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop — click to close */}
          <button
            type="button"
            aria-label="Close contact"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-black/70"
          />

          {/* Card */}
          <div
            className="relative w-full max-w-sm rounded-[var(--prism-radius)] p-6 text-left shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:p-8"
            style={{ background: "var(--prism-cream)", color: "var(--prism-ink)" }}
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-2xl leading-none text-[#14140f]/45 transition-colors hover:text-[#14140f]"
            >
              &times;
            </button>

            <h2
              id="contact-modal-title"
              className="text-lg font-semibold tracking-tight"
            >
              Contact
            </h2>

            <p className="mt-3 text-[15px] leading-relaxed text-[#14140f]/80">
              For any questions about Prism, email us at{" "}
              <a
                href="mailto:hello@prismhealthco.com"
                className="select-text font-medium text-[#14140f] underline underline-offset-2 hover:opacity-70"
              >
                hello@prismhealthco.com
              </a>
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-[#14140f]/80">
              We&rsquo;ll get back to you as soon as we can.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
