import { GRID, Eyebrow } from "./system";

/*
 * Panel 7 — FAQ + FOOTER (§4). DARK per the consolidated band map:
 * flat black band, white type, sparing green accents on accordion
 * interactions (the +/× marker turns accent green when open). Footer
 * sits within this black band. Questions are locked; every answer is
 * a marked placeholder — founder supplies final copy before ship.
 * /privacy and /terms do not exist yet (legally required before
 * ship, flagged §11); disclaimer is a marked placeholder.
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

export default function FaqFooter() {
  return (
    <section className="bg-black pt-24 text-white md:pt-32">
      <div className={`${GRID} flex flex-col gap-10 pb-24`}>
        <Eyebrow mode="dark">Common questions</Eyebrow>

        <div className="max-w-2xl divide-y divide-white/10">
          {QUESTIONS.map((q) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-white md:text-lg">
                {q}
                <span
                  aria-hidden="true"
                  className="text-white/40 transition-transform group-open:rotate-45 group-open:text-[#3AB203]"
                >
                  +
                </span>
              </summary>
              <p className="pt-3 text-[15px] leading-relaxed text-white/80">
                {PLACEHOLDER_ANSWER}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Footer — within Panel 7's black */}
      <footer className="border-t border-white/10 py-10">
        <div
          className={`${GRID} flex flex-col gap-4 text-sm text-white/70 md:flex-row md:items-center md:justify-between`}
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a
              href="mailto:nick.jacobs24@gmail.com"
              className="hover:text-white"
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
