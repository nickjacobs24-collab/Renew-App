import { GRID, PANEL_PAD, Eyebrow } from "./system";

/*
 * Panel 7 — FAQ + FOOTER (§4). CREAM (light) register — flipped from
 * flat black so P4's jet black stays the page's unique register. Quiet
 * utility: left-aligned narrow accordion (native <details>, closed by
 * default), green only on the open-state marker. Footer sits within the
 * cream. Questions locked; every answer is a marked placeholder.
 */

const QUESTIONS = [
  "Do I need a wearable?",
  "Does Prism sell supplements or tell me what to buy?",
  "Is this medical advice?",
  "How does Prism show what's working?",
  "When will I see results?",
  "Why do results vary from person to person?",
];

const PLACEHOLDER_ANSWER =
  "Placeholder answer — the founder supplies final copy before ship.";

const INK = "var(--prism-ink)";

export default function FaqFooter() {
  return (
    <section style={{ background: "var(--prism-cream)", color: INK }}>
      <div className={`${GRID} ${PANEL_PAD} flex flex-col gap-10`}>
        <Eyebrow mode="light">Common questions</Eyebrow>

        <div className="max-w-2xl divide-y divide-black/10">
          {QUESTIONS.map((q) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium md:text-lg">
                {q}
                <span
                  aria-hidden="true"
                  className="text-[#14140f]/40 transition-transform group-open:rotate-45 group-open:text-[#3AB203]"
                >
                  +
                </span>
              </summary>
              <p className="pt-3 text-[15px] leading-relaxed text-[#14140f]/80">
                {PLACEHOLDER_ANSWER}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Footer — within Panel 7's cream */}
      <footer className="border-t border-black/10 py-10">
        <div
          className={`${GRID} flex flex-col gap-4 text-sm text-[#14140f]/70 md:flex-row md:items-center md:justify-between`}
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/privacy" className="hover:text-[#14140f]">
              Privacy
            </a>
            <a href="/terms" className="hover:text-[#14140f]">
              Terms
            </a>
            <a
              href="mailto:nick.jacobs24@gmail.com"
              className="hover:text-[#14140f]"
            >
              Contact
            </a>
          </div>
          <p className="text-[13px]">
            Medical disclaimer — placeholder; the founder supplies final copy
            before ship.
          </p>
        </div>
      </footer>
    </section>
  );
}
