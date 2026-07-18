"use client";
import { useState } from "react";

/*
 * Footer links. Privacy is a real page (/privacy). Contact is an inline
 * expand/collapse — clicking it reveals a small panel directly beneath the
 * links, in place at the bottom of the page (no modal, no overlay). Clicking
 * again collapses it. Styled to the design system: sharp edges, no rounded
 * corners, no shadow, no background — just quiet text and the site's thin
 * hairline divider.
 */
export default function FooterLinks() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
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
      </div>

      {open && (
        <div id="footer-contact">
          <a
            href="mailto:hello@prismhealthco.com"
            className="select-text text-white transition-colors hover:text-white/80"
          >
            hello@prismhealthco.com
          </a>
          <p className="mt-1 text-white/55">For any questions about Prism.</p>
        </div>
      )}
    </div>
  );
}
