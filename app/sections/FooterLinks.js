"use client";
import { useState } from "react";

/*
 * Footer links. Privacy is a real page (/privacy). Contact is an inline
 * toggle — clicking it reveals a small box to the RIGHT of the link (in
 * place, not a modal/overlay). The box uses the site's light register
 * (cream, ink text) with SHARP edges — no rounded corners, no shadow. The
 * email is selectable text and a mailto link, so clicking it opens the
 * visitor's email client. Clicking Contact again collapses the box.
 */
export default function FooterLinks() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <a href="/privacy" className="hover:text-white">
        Privacy
      </a>
      <span aria-hidden="true" className="h-3 w-px bg-white/20" />
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="footer-contact"
        className="cursor-pointer text-white/70 transition-colors hover:text-white"
      >
        Contact
      </button>

      {open && (
        <div
          id="footer-contact"
          className="px-4 py-2.5"
          style={{ background: "var(--prism-cream)", color: "var(--prism-ink)" }}
        >
          <a
            href="mailto:hello@prismhealthco.com"
            className="select-text font-medium underline-offset-2 hover:underline"
          >
            hello@prismhealthco.com
          </a>
          <p className="mt-0.5 text-[#14140f]/70">
            For any questions about Prism.
          </p>
        </div>
      )}
    </div>
  );
}
