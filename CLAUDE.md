# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**STATUS: Final structure applied (§4 is the 2026-07-17 FINAL panel map). Panels 1–3 built fully dressed and pushed to `rebuild`. STOPPED per §8.4 — awaiting founder judgement on the preview before Panels 4–7 build. Update this line as panels clear. Do not re-run completed phases.**

This file is the single source of truth. `PRISM_WEBSITE_BRIEF.md` has been merged into it and deleted (recoverable from `main` at commit `72cde1e`).

This is the build specification for the Prism website. It is the single source of truth for structure, copy, brand, and build plan. Do not invent copy, structure, or visuals beyond what is specified. Where a decision is marked "in situ", it is judged by the founder on the live preview, not decided in code.

---

## 1. What Prism is (context, not live copy)

Prism is a native iOS consumer subscription app (UK launch, late August 2026) that helps users see what changes in their health data after they start, stop or adjust supplements. It connects to Apple Health and wearables and shows trends against a baseline, for example a sleep trend with a marker where Magnesium was started. First trend view appears at day 14. Pricing: £6.99/month, £49.99/year with a 7-day free trial on annual only.

Positioning: category creation. No product today shows whether supplements are working for an individual, non-invasively. The only alternative is blood panels: £250–400, invasive, 40+ markers, requires paid interpretation, and cannot isolate the supplement from other lifestyle changes. Prism shows the user's own data, readably. Prism never claims supplements work or do not work. The user sees the data and decides.

The website sells a new capability, not an app. Its one job: make this belief land — "I can finally see whether my supplements are working." Every section is judged against: does it increase belief that this capability is real? If a section does not, it gets cut.

## 2. What the website is and is not

**Page model (structural revision 2026-07-17 — supersedes the original "pinned phone demonstration" shape, which is dead; do not resurrect it):**

- One continuous scrollable page built as **self-contained panels** — the App Store model on a webpage. Not a multi-page site.
- Each panel: full-width colour band, one message, one headline moment, self-contained like an App Store card. **No pinning, no scroll-driven screen swapping, no content morphing.** Story through logical sequence, not linkage.
- Band colours chapter the page: shifts within the black → deep-green gradient world (`#000000` → `#0A3C0A` range), contrast handled through gradient depth per band.
- Panel grammar (from Levels/Oura): optional small-caps eyebrow label → large display headline (green accent word where locked) → short supporting copy → content. Generous vertical air. Alternating composition where a panel has a visual.
- Quality bar: **Oura/Levels-grade restraint and finish.**

Unchanged:

- The site gathers no user input except one waitlist email field. No quiz, no goal selectors, no sign-up, no onboarding. All onboarding lives in the app.
- The narrative is the App Store narrative, promoted. The website introduces no new ideas.
- **Only ONE app screen appears anywhere on the site: the sleep chart (`Progress 1.png`), in Panel 4.** The other App Store screens (Home, Plan, Goal 2, Gap) are style reference only — they never enter the build. Never mock up or invent UI. No lifestyle photography. No stock imagery. No supplement-shop composition.
- Copy pattern: every headline is a capability the user gains (Know / See / Change), never a description of software.

### 2.1 Visual vocabulary (addendum, 2026-07-17 — applies to all panels)

What may appear:

- **Cropped UI fragments from the real screens in `brief-assets/`** (trend line, Magnesium marker, stage dial, etc.) as visual anchors — crops of real screens only, **never recompositions of UI that doesn't exist as shown**. Test: could a user see exactly this in the app?
- **The bottles asset.**
- **The wearable strip as a designed element.**
- **Typography-as-visual — preferred where a panel needs no anchor.**

Never: photography of people or nature, stock imagery, generated imagery. Full app screens remain limited to `Progress 1.png` in Panel 4.

### 2.2 Composition system (addendum — how things are arranged)

A small fixed layout vocabulary, varied across panels so **no two consecutive panels use the same arrangement**:

- **Split panel** — copy one side, contained visual the other; alternate sides down the page.
- **Stacked panel** — headline/copy above, visual or visual-row below.
- **Statement panel** — full-width pure typography (Bridge and Trust are this).
- **Full-bleed visual moment** — used sparingly.

System rules: every visual sits in a consistent container (uniform corner radius, treatment); **one grid governs the whole page** — identical margins, gutters, and spacing rhythm across all panels; variation happens in arrangement only, never in the system. Alternate compositions for visual rhythm; keep hierarchy identical: eyebrow → headline → support → content.

Current assignments (1–3 built; 4–7 provisional, settled at build time):
P1 Stacked (headline above, bottles below — bottles float as a cut-out asset, not a contained visual) · P2 Statement · P3 Stacked (strip as the designed visual-row) · P4 Split (framed screen beside copy) · P5 Statement · P6 Stacked (header above, form below) · P7 quiet utility (accordion + footer). **Flag: P6→P7 would be consecutive stacked-ish arrangements — resolve composition at Panel 6/7 build time on the preview.**

In code: the grid and container primitives live in [app/sections/system.js](app/sections/system.js) (`GRID` container class, `Contained` wrapper, `--prism-radius` token). Every panel composes from them — never restyle margins/gutters per panel.

## 3. Brand (locked)

### 3.1 Design tokens (extracted from shipped App Store screens, sRGB)

- Canvas gradient: vertical, `#000000` (top) → `#0A3C0A` (bottom). `linear-gradient(180deg, #000000, #0A3C0A)` matches the screens near-exactly. Per §2 the ramp is **per-band**: each panel's band sits somewhere in this range, contrast through gradient depth.
- Accent green (WORK / NOT / EVIDENCE only): `#3AB203`
- Display type colour: `#FFFFFF`, all caps for headlines.
- **Trap** — in-app greens (`#5FDC02`, `#A8F161`, `#7AC95D`) belong to app screens only. They arrive on the site inside screenshots. Never use them for website type, buttons, or accents.
- Display face: exact family still founder-supplied eventually, but per the closest-match rule below, **build now with the nearest available typeface to the App Store display face (heavy, tight, all-caps grotesque) and flag what was chosen.**
- Body type and CTA button styling: closest-match from reference images; flag choices.
- One green accent word per headline, only where meaning lives: WORK, NOT, EVIDENCE.
- CTA: white pill button.

### 3.1a Design rule — closest-match is correct behaviour

"Do not guess" applies to **FACTS** (prices, claims, product truths, copy) — never to design. For design, closest-match from reference is CORRECT behaviour: pick the nearest available typeface, spacing, sizing, composition to the reference material, implement it, and flag what was chosen. The founder judges on the preview; **iteration is the method.** Never block a panel on a design unknown.

### 3.1b Source roles for reference material

- **`brief-assets/` (App Store screens + PDF): LOOK AND FEEL.** Colour, type style, weight, mood. The visual language source.
- **The old site (recoverable at `main` `72cde1e`, pre-cut — read `git show 72cde1e:app/page.js`): STRUCTURAL SKELETON.** Section anatomy only: full-viewport hero (visual + dark overlay + centred stacked headline/sub/CTA + quiet bottom strip), stacked full-width banded sections, big centred statement headlines, three-column step row (visual → small eyebrow badge → title → sub-line). **Take structure only. No palette, no imagery, no fonts, no copy from it.**

### 3.2 Asset manifest

All visual assets live in [brief-assets/](brief-assets/) in the project root. Never invent UI or imagery. A device frame around real app screenshots is allowed and expected. If an asset is missing, build with a grey placeholder of correct proportions and flag it — never generate a substitute.

`Prism - App Store Screens.pdf` is the composed App Store screens — **the source of truth for colour and composition** (founder-supplied 2026-07-17). The Panel 1 bottles are on page 1: extract them and remove the bottle background when the hero visual lands. Not yet visually verified in-session (no PDF renderer in this environment) — verify page 1 before extraction.

Asset usage (structural revision: only ONE screen enters the build):

| Asset | Role |
|---|---|
| `Progress 1.png` | **The only app screen in the build** — Panel 4, in a device frame. Copied to `public/screens/progress.png`. Sleep chart with Magnesium marker, shipped App Store version (bright data-green, 8h 12m dataset). |
| `Prism - App Store Screens.pdf` | Look/feel source of truth + Panel 1 bottle source (extract p.1, remove background). Grey placeholder until extracted. |
| `Home.png`, `Gap.png`, `Plan.png`, `Goal 2.png` | **Style reference only. Never enter the build.** |
| OG/share image | Hero composition (bottles + headline); blocked until the p.1 extraction lands. |

Hero bottles must carry no labels, flavour names or ecommerce cues. They are symbolic user supplements, not Prism products.

## 4. Page structure and locked copy (7 panels, one scroll — FINAL, 2026-07-17 revision; supersedes all previous panel maps)

Each panel follows the §2 grammar: its own colour band, one message, self-contained. **No pinning, no scroll-driven swapping.** Story through sequence.

### Panel 1 — HERO

- Full viewport. Bottles visual from the App Store PDF p.1 (background removed; grey placeholder of correct proportion until extracted), slow drift. Minimal nav: **logo left; "Join waitlist" right.** No other nav items. (Mobile per §8: logo + one CTA, no hamburger — same composition.)
- Headline: **KNOW IF YOUR SUPPLEMENTS ACTUALLY WORK** (green: WORK)
- CTA: **Join the waitlist** (white pill)
- No supporting line. Deliberate. Do not add one.

### Panel 2 — BRIDGE (locked copy — replaces the earlier bridge lines)

- Typography panel, three stanzas paced down the scroll, in this exact copy:

> Are your supplements making a difference?
> The only way to check was a blood test. Expensive, complicated, hard to understand.
> The answer has been on your wrist all along.

### Panel 3 — HERE'S HOW (mechanism)

- Headline: **HERE'S HOW** (no accent word — green is WORK/NOT/EVIDENCE only)
- Supporting copy theme: Prism reads the health data your wearable already records — followed by a short contrast line on simplicity/cost/always-available. **Draft as best candidate and flag for preview judgement. Observational tone, no superlatives.**
- Then the strip: **APPLE WATCH | WHOOP | OURA | GARMIN** (factual claim — confirm final integration list before ship)

### Panel 4 — PROOF (the one app-screen moment)

- Headline pair: **SEE WHAT'S WORKING** then **AND WHAT'S NOT** (green: NOT)
- The single app screenshot on the entire site: `Progress 1.png` in a device frame, **supporting the panel Levels-style, not filling it.**
- Small annotation near the chart: **Two-week rolling average against your baseline.**
- Rule: app-screen copy is never edited on the website. If a line inside a real screen trips a copy rule, flag it as an app question. Do not patch it on the site.

### Panel 5 — TRUST (locked copy)

- Typography panel. Headline pair: **WE DON'T SELL SUPPLEMENTS** / **WE SHOW YOU THE EVIDENCE** (green: EVIDENCE)
- Elaboration stanzas, exact copy:

> Supplements are sold with sales and marketing. Studies on someone else, somewhere else. Not you. Not your data.
> So how can you be sure it's working?
> Prism shows you what's changing, using your data.
> No more guessing. Just evidence, from your body.

- Strap, small caps: **YOUR BODY | YOUR GOALS | YOUR RESULTS**

### Panel 6 — GET PRISM

- Header: **No more guessing. See for yourself.** (**flagged: repeats a Panel 5 line — build as-is, founder resolves on preview**)
- One email field, one button (**Join the waitlist**). The only input on the entire site. Backend: `app/api/waitlist` (Airtable, with the existing §8.10 preview gate).
- At launch this block swaps to: App Store badge dominant; pricing cards beneath — annual £49.99 highlighted with 7-day free trial flagged and the honest arithmetic shown (£4.17/month, billed annually); monthly £6.99 secondary. No urgency language.
- Nav "Join waitlist" item swaps to the App Store link at launch. Build the swap as **one flag, not scattered edits**.

### Panel 7 — FAQ + FOOTER

- Accordion, closed by default, quiet type. **These six locked questions**, with clearly-marked placeholder answers (founder supplies final copy — do not write final answers):
  1. Do I need a wearable?
  2. Does Prism sell supplements or tell me what to buy?
  3. Is this medical advice?
  4. How does Prism show what's working?
  5. When will I see results?
  6. Why do results vary from person to person?
- Product-truth checks before ship: (a) is a wearable strictly required, or is iPhone/Apple Health data alone sufficient; (b) "when will I see results" uses the concrete day-14 answer.
- Footer: Privacy, Terms, Contact, medical disclaimer. Small, grey, functional. Privacy and Terms are legally required (the waitlist email is personal data under UK GDPR; Apple expects a reachable privacy URL). Rewrite reference: `docs/legacy-legal-copy.md`.

### Deleted from the site entirely (this revision)

The steps section (Tell us what you take / Review your plan / Track your results). **"No blood tests. No guesswork."** All app screenshots except `Progress 1.png` (others remain in `brief-assets/` as style reference only). The old bridge lines and the benched Beat 3 bubble/whisper are superseded — HERE'S HOW and the integrations strip returned as Panel 3; nothing else from the bench survives.

## 5. Copy rules (locked — apply to every word on the page)

- Plain British English. Short sentences. One idea per sentence.
- No mid-sentence em dashes.
- Probabilistic and observational language only. Never causal, never directive. "See what's changing", never "we prove", "proven to", "we know", "which ones work".
- The words "first" and "proof/prove" never appear in live copy.
- Direct address to the reader. Never "most people" or third-person market description.
- Never attack or blame the reader. Concerns are raised about the situation or the industry, never the person.
- Banned: leverage, optimise, unlock, urgency language, marketing intensifiers, wellness clichés.
- Prism presents options, never instructs.
- Green accent appears only on WORK, NOT, EVIDENCE.

### Collision checks (judge on the preview, resolve in situ)

1. "No more guessing" appears in the Panel 5 elaboration and in the locked Panel 6 header. **Build as-is; founder resolves on preview** (final-structure decision).
2. ~~The Panel 2 / Panel 5 "working" echo~~ — resolved: the final Panel 2 copy opens with "making a difference", the echo is gone.

## 6. Delete list (everything web-first-product era)

Quiz and question flows. Goal selectors. Supplement lists and supplement pages. SSO, auth, logins, accounts. Any onboarding. All old marketing pages beyond what Section 4 specifies. All forest/nature photography and the old light palette. Old copy throughout.

§10 maps this list onto the actual files.

## 7. Confirmed infrastructure (verified from live setup — do not re-derive)

- Stack: Next.js (App Router), Tailwind CSS, Prisma, deployed on Vercel.
- Repo: `nickjacobs24-collab/Renew-App` on GitHub. This is the only repo in scope. `renew-backend` and `renew-ios` belong to the app dev agency and are never touched.
- Vercel project: `renew-app`, currently serving www.renewhealth.app, deploying from `main`. Branch previews available by default.
- Vercel holds 13 environment variables and a MailerSend integration. **Never delete, rewrite or commit `.env` / `.env.local`.**
- **Waitlist storage: Airtable (founder decision, supersedes the original brief).** The brief assumed MailerSend was the waitlist path; the code showed otherwise — MailerSend was only ever wired to NextAuth sign-in emails. Beat 8 posts to the existing Airtable table. `AIRTABLE_TOKEN` is the only backend credential the new site needs.
- **MailerSend is cut, not kept** — it dies with the NextAuth route. The Vercel MailerSend integration and its env vars can be retired once the delete pass is merged. Flag before touching anything in the Vercel dashboard; that is founder-side, not a repo change.
- **Prisma and the database are deleted entirely** (founder decision). No table backs the waitlist. Remove `prisma/`, `lib/prisma.js`, the `prisma generate` build step, and the `prisma` / `@prisma/client` dependencies. `DATABASE_URL` becomes dead.
- New domain at cutover: prismhealthco.com (DNS in the founder's Cloudflare account). Old domain renewhealth.app is killed at cutover, no redirect.

## 8. Build plan

1. ~~Baseline commit + push~~ **done** (`main` `72cde1e`).
2. ~~`rebuild` branch~~ **done.** All work happens on the branch; `main` and the live deployment stay untouched.
3. ~~Delete pass~~ **done** (verified building clean).
4. **Panel gating: Panels 1–3 built fully dressed — matched display type (closest match to the App Store face, flagged), real composition, band treatment, spacing, polish. Pushed to `rebuild` for preview. STOP. The founder judges on the preview before Panels 4–7 build.**
5. Iterate on the branch preview URL. The founder judges copy and visuals there.
6. Mobile-first: most traffic arrives on phones via shared links. Spec the mobile scroll in parallel, not as a degradation of desktop. Mobile nav: logo + one CTA. No hamburger menu.
7. Nav: logo + "Join waitlist" only (per Panel 1 — the "How it works" item is gone). "Join waitlist" scrolls to Panel 6; dead until Panel 6 exists — acceptable during gating. At launch it becomes the App Store link (one flag, per Panel 6).
8. Motion: panels are static compositions; motion is limited to restrained entrance treatment (fade/rise on scroll-into-view) and ambient touches like the bottle drift. No pinning, no scroll-linked morphing (§2). `prefers-reduced-motion`: everything renders static. (The original pinned-sequence motion proof was built, then killed by the structural revision — do not resurrect it.)
9. Performance budget: LCP under 2.5s on mid-range mobile, 60fps scroll, CLS near zero. Jank kills belief on an evidence product.
10. **Waitlist writes: preview deployments must never write to the live Airtable table.** Gate on `VERCEL_ENV === 'production'`, not `NODE_ENV` — implemented in `app/api/waitlist/route.js`. Verify on the preview URL before the founder tests Panel 6.
11. Analytics: **[TBC — founder to confirm. Recommended: Vercel Analytics for visits and waitlist conversion.]**
12. OG/share metadata carries the hero line and the OG image from the asset manifest.
13. Cutover: merge to `main`, point prismhealthco.com (DNS in Cloudflare) at the deployment. Rename the GitHub repo to a Prism name at cutover, not before.
14. Old domain (renewhealth.app): killed. No redirect. Site comes down; domain lapses.

## 9. Working rules for build sessions

- Do not relitigate locked decisions: the bare hero (no supporting line), the absence of a separate "what Prism is" section (the bridge does that job), the single-scroll structure, the locked copy in Sections 4 and 5.
- Where the spec marks something in situ, build the best candidate and flag it for founder judgement on the preview.
- If anything in the codebase contradicts this brief, flag it. Do not silently override in either direction.

---

## 10. Codebase after the delete pass

The delete pass (§8.3) ran on `rebuild` on 2026-07-17: 89 files cut — the entire Renew web-first product (quiz, results, 19 supplement modals, NextAuth/MailerSend, accounts, Prisma and its committed dev.db, old marketing pages, all 42 `public/images/`, favicon). The full Renew tree is recoverable from `main` at `72cde1e`.

Commands: `npm run dev`, `npm run build` (plain `next build` — the `prisma generate` hooks are gone), `npm run lint` (eslint — Next 16 never runs it during build; run it yourself). No test suite exists. Plain JavaScript, no TypeScript; `jsconfig.json` maps `@/*` to the repo root. Tailwind v4 via the PostCSS plugin, configured in `app/globals.css`, not a `tailwind.config.js`.

What exists now:

- [app/layout.js](app/layout.js) — Prism shell: fonts via `next/font/google` (self-hosted at build, no runtime third-party requests), title, hero-line description. No analytics yet (§8.11 TBC).
- [app/page.js](app/page.js) — composes the built panels from [app/sections/](app/sections/) (`Hero.js`, `Bridge.js`; one file per panel as they clear the gate).
- [app/globals.css](app/globals.css) — Tailwind import, §3.1 tokens, font wiring, bottle-drift keyframes (with `prefers-reduced-motion` disable). Band gradients live per-panel in the section components, not on `body`.
- [public/screens/progress.png](public/screens/progress.png) — the one in-build app screen (Panel 4, not yet built).
- [app/api/waitlist/route.js](app/api/waitlist/route.js) — the Beat 8 backend: POSTs the email to Airtable, **already carrying the §8.10 gate** (`VERCEL_ENV !== "production"` → log-only, no Airtable write).
- [docs/legacy-legal-copy.md](docs/legacy-legal-copy.md) — the old Renew legal text, extracted as reference for the Beat 9 rewrite. Not surviving copy; not part of the built site.
- Dependencies: `next`, `react`, `react-dom`, plus `framer-motion` and `lucide-react` retained for the §8.8 motion decision. Everything auth/db/email is gone.
- `package.json` `name` stays `renew-app` until cutover (§8.13 renames the repo then, not before).

## 11. Open flags (raised per §9, not resolved in code)

1. **Hero bottles: extraction pending.** The source is `Prism - App Store Screens.pdf` p.1 (see §3.2) — not yet visually verified in-session (no PDF renderer here). When Beat 1 builds: verify p.1, extract the bottles, remove the background. Grey placeholder until then; OG image follows the extraction.
2. **Display face is still TBC (§3.1).** Blocks final typography on every beat. Build with a flagged fallback; do not substitute a lookalike.
3. **Analytics is still TBC (§8.11).** The old GA and hardcoded Microsoft Clarity tags went with the delete pass; nothing replaces them yet.
4. **Integration list is unconfirmed (§4 Beat 3).** **APPLE WATCH | WHOOP | OURA | GARMIN** is a factual claim and needs confirming before ship.
5. **FAQ copy is founder-supplied (§4 Beat 9).** Placeholders only, plus the two product-truth checks (wearable required or not; day-14 answer).
6. **Vercel-side cleanup after merge (founder-side, not repo work):** retire the MailerSend integration and its env vars, `DATABASE_URL`, `NEXTAUTH_*`, `GOOGLE_CLIENT_*`. Only `AIRTABLE_TOKEN` (and any analytics var) remains needed. Flag, don't touch — the dashboard is the founder's.
7. **Closest-match design choices in Panels 1–3 (per §3.1a — judge on the preview, flagged not asked):** display face **Archivo Black** via `next/font/google` (nearest available heavy/tight all-caps grotesque; body face **Inter**); "PRISM" text wordmark in the nav (no logo asset supplied); band gradients — hero near-black deepening to green at its base, bridge continuing one step deeper and returning to black, Panel 3 stepping back into green; bottle placeholder proportions and slow-drift timing; stanza pacing (~70vh per stanza) and type scale throughout. **System tokens (§2.2):** grid `max-w-6xl` with `px-6 md:px-10` margins, panel rhythm `py-28 md:py-36`, container radius `1.25rem`; the wearable strip rendered as a pill-shaped designed element (`rounded-full` + faint ring) — pill radius for small designed elements, the radius token for contained visuals.
8. **Panel 3 drafted copy (per §4 — flag for preview judgement):** the mechanism line is set as "Prism reads the health data your wearable already records." and the drafted contrast line is **"Simple to read. Nothing new to buy. With you day and night."** — best candidate for the simplicity/cost/always-available contrast, observational, no superlatives. Founder approves or reworks on the preview.
9. **Panel 6 header repeat** ("No more guessing") — locked, built as-is when Panel 6 comes; founder resolves on preview (§5 collision check 1).

### Logged app-side questions (not website work)

- `Gap.png` reads "A key supplement is missing. / Magnesium. / For your sleep goal." — "is missing" is an assertion rather than observational language, and sits close to the §5 "presents options, never instructs" rule. **Founder decision: use the screen as-is on the site; logged as an app question only.** Per the Beat 5 rule, never patch app-screen copy on the website.

### Resolved (do not reopen)

- Waitlist stays on **Airtable**; Prisma, the database, and the MailerSend/NextAuth integration are all cut; `resend`, `nodemailer` and `react-icons` dependencies dropped. See §7.
- Preview deployments must not write to the live Airtable table — gate implemented in `app/api/waitlist/route.js`. See §8.10.
- The second Airtable capture (`api/auth/login`, "User Login" table) deleted with sign-in — founder-confirmed. The waitlist route is the only capture that survives.
- `applegal` legal copy extracted to `docs/legacy-legal-copy.md` as rewrite reference before deletion — founder decision: reference only, not surviving copy.
- Favicon deleted; previews show the default icon until a Prism one is supplied.
- `framer-motion` and `lucide-react` kept; pruning them is a rebuild-pass call (§8.8).
- `PRISM_WEBSITE_BRIEF.md` deleted; this file is the single source of truth.
- `Lifestyle.png` removed from `brief-assets/`; no beat uses it. Recoverable from `main` at `72cde1e`.
- Baseline committed and pushed to `main`; `rebuild` branch created (§8.1, §8.2).
- Delete pass executed and verified building clean (§8.3), 2026-07-17.
- The pinned-phone sequence (original §8.8 motion proof) was built, then **deleted by the 2026-07-17 structural revision** — the five-screen demonstration misread the concept. Panels only. Do not resurrect.
- The final-structure revision (same day) then: replaced the bridge copy (wrist/blood-test version is final), deleted the steps section and "No blood tests. No guesswork.", dissolved the Beat 3 bench (HERE'S HOW + strip returned as Panel 3; bubble and whisper superseded), locked the Panel 6 header, and supplied the six FAQ questions. §4 is FINAL — earlier panel maps are dead.
- `Home.png`, `Gap.png`, `Plan.png`, `Goal 2.png` removed from `public/screens/` — style reference only, they stay in `brief-assets/`.
