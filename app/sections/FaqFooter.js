import { GRID, PANEL_PAD, Eyebrow } from "./system";
import FooterLinks from "./FooterLinks";

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
    q: "Do I need a smartwatch or fitness tracker?",
    a: "A smartwatch, fitness tracker or smart ring is required to provide the health data needed to show what is changing.",
  },
  {
    q: "Is this medical advice?",
    a: "The information shown is not medical advice. Always speak to a doctor or qualified healthcare professional before making decisions about health.",
  },
  {
    q: "How will I know if a supplement is working?",
    a: "Changes in health data are shown over time after a supplement is started, stopped or changed.",
  },
  {
    q: "When will I see results?",
    a: "The first results are shown after two weeks, once enough data has been collected to identify early changes.",
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
              {/* Mobile hierarchy: question effortless to scan (fits one
                  line), answer clearly secondary (smaller grey), + / × icon
                  a touch larger. Desktop restored via md:. */}
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[clamp(13.5px,3.7vw,15px)] font-medium text-white md:gap-4 md:text-base">
                {q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-lg text-white/40 transition-transform group-open:rotate-45 md:text-base"
                >
                  +
                </span>
              </summary>
              <p className="pt-3 text-[12.5px] leading-relaxed text-white/80 md:text-[15px]">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Footer — within Panel 7's black. Privacy (page link) and Contact
          (inline expand/collapse) — see FooterLinks. */}
      <footer className="border-t border-white/10 py-10">
        <div className={`${GRID} text-sm text-white/70`}>
          <FooterLinks />
        </div>
      </footer>
    </section>
  );
}
