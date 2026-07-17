import { GRID, PANEL_PAD, Eyebrow } from "./system";

/*
 * Panel 7 — FAQ + FOOTER (§4). BLACK — it was always black; the cream
 * flip was wrong. P4's jet black is the standout by being framed green
 * (P3) → black (P4) → green (P5), not by being the only black on the
 * page, so a black footer at the very bottom is fine. Quiet utility:
 * left-aligned accordion (native <details>, closed by default), green
 * only on the open-state marker. Footer sits within the black.
 */

const QUESTIONS = [
  {
    q: "Do I need a wearable?",
    a: "Yes. Your health data comes from your device, like a watch or a ring. That’s what’s used to show you what’s changing.",
  },
  {
    q: "Is this a medical device?",
    a: "No. It isn’t a medical device or medical advice. Always speak to a doctor or qualified professional before making any decisions about your health.",
  },
  {
    q: "How do I see what’s working?",
    a: "Your health data is tracked over time, so you can see what changes after you start, stop, or adjust a supplement. You see the difference for yourself.",
  },
  {
    q: "When will I see results?",
    a: "Your first view comes after two weeks. That’s once there’s enough data to show how things are starting to change.",
  },
];

export default function FaqFooter() {
  return (
    <section className="bg-black text-white">
      <div className={`${GRID} ${PANEL_PAD} flex flex-col gap-10`}>
        <Eyebrow mode="dark">Common questions</Eyebrow>

        <div className="max-w-2xl divide-y divide-white/10">
          {QUESTIONS.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-white md:text-base">
                {q}
                <span
                  aria-hidden="true"
                  className="text-white/40 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pt-3 text-[15px] leading-relaxed text-white/80">
                {a}
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
