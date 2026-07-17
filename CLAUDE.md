# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**STATUS: Phase 0 complete — baseline committed and pushed to `main`, `rebuild` branch created. Next: delete pass, cut list awaiting founder approval. Then: rebuilding beats → preview iteration → cutover. Update this line as phases complete. Do not re-run completed phases.**

This file is the single source of truth. `PRISM_WEBSITE_BRIEF.md` has been merged into it and deleted (recoverable from `main` at commit `bcc6696`).

This is the build specification for the Prism website. It is the single source of truth for structure, copy, brand, and build plan. Do not invent copy, structure, or visuals beyond what is specified. Where a decision is marked "in situ", it is judged by the founder on the live preview, not decided in code.

---

## 1. What Prism is (context, not live copy)

Prism is a native iOS consumer subscription app (UK launch, late August 2026) that helps users see what changes in their health data after they start, stop or adjust supplements. It connects to Apple Health and wearables and shows trends against a baseline, for example a sleep trend with a marker where Magnesium was started. First trend view appears at day 14. Pricing: £6.99/month, £49.99/year with a 7-day free trial on annual only.

Positioning: category creation. No product today shows whether supplements are working for an individual, non-invasively. The only alternative is blood panels: £250–400, invasive, 40+ markers, requires paid interpretation, and cannot isolate the supplement from other lifestyle changes. Prism shows the user's own data, readably. Prism never claims supplements work or do not work. The user sees the data and decides.

The website sells a new capability, not an app. Its one job: make this belief land — "I can finally see whether my supplements are working." Every section is judged against: does it increase belief that this capability is real? If a section does not, it gets cut.

## 2. What the website is and is not

- One premium parallax scrollable page. Not a multi-page site.
- The site gathers no user input except one waitlist email field. No quiz, no goal selectors, no sign-up, no onboarding. All onboarding lives in the app.
- The narrative is the App Store narrative, promoted. The website introduces no new ideas.
- The app visual is the main character. Real app screens only. Never mock up or invent UI. No lifestyle photography. No stock imagery. No supplement-shop composition.
- Page shape: type in a void → pinned phone demonstration → type in a void → handoff.
- Copy pattern: every headline is a capability the user gains (Know / See / Change), never a description of software.

## 3. Brand (locked)

### 3.1 Design tokens (extracted from shipped App Store screens, sRGB)

- Canvas gradient: vertical, `#000000` (top) → `#0A3C0A` (bottom). `linear-gradient(180deg, #000000, #0A3C0A)` matches the screens near-exactly. Whether the ramp runs per-beat or continuously down the page: **in situ**.
- Accent green (WORK / NOT / EVIDENCE only): `#3AB203`
- Display type colour: `#FFFFFF`, all caps for headlines.
- **Trap** — in-app greens (`#5FDC02`, `#A8F161`, `#7AC95D`) belong to app screens only. They arrive on the site inside screenshots. Never use them for website type, buttons, or accents.
- Display face: **[TBC — founder supplies family name and weights from the Canva marketing file. Do not substitute a lookalike without flagging it.]**
- Body type and CTA button styling: sample from reference images; propose in plan step.
- One green accent word per headline, only where meaning lives: WORK, NOT, EVIDENCE.
- CTA: white pill button.

### 3.2 Asset manifest

All visual assets live in [brief-assets/](brief-assets/) in the project root. Never invent UI or imagery. A device frame around real app screenshots is allowed and expected. If an asset is missing, build with a grey placeholder of correct proportions and flag it — never generate a substitute.

Beat-to-asset mapping (filenames as supplied by founder; match by content if names differ). The file column below was verified by opening each image:

| Beat | Required asset | File in `brief-assets/` |
|---|---|---|
| 1 | Hero: two dark bottles from App Store screen 1 | **MISSING — build grey placeholder of correct proportions. Founder supplying a reference image of the full hero composition; do not generate a substitute.** |
| 3 | Home screen (stage dials — Improving / Maintaining) | `Home.png` ✓ |
| 4 | Sleep chart with Magnesium marker, shipped App Store version (bright data-green, 8h 12m dataset) | `Progress 1.png` ✓ |
| 5a | Recommendation screen (Magnesium) | `Gap.png` ✓ |
| 5b | Plan screen ("Your plan is ready") | `Plan.png` ✓ |
| 6 | Goals screen ("What do you want to improve?") | `Goal 2.png` ✓ |
| OG | Hero composition (bottles + headline); build from hero assets | **BLOCKED on hero bottles** |

Hero bottles must carry no labels, flavour names or ecommerce cues. They are symbolic user supplements, not Prism products.

## 4. Page structure and locked copy (9 beats, one scroll)

### Beat 1 — Hero

- Full viewport. Two black bottles, slow drift. Minimal nav (logo left; How it works / Join waitlist right).
- Headline: **KNOW IF YOUR SUPPLEMENTS ACTUALLY WORK** (green: WORK)
- CTA: **Join the waitlist** (white pill)
- No supporting line. Deliberate. Do not add one.

### Beat 2 — Bridge (locked copy)

- Bottles drift up and fade on scroll. Typography in a void. Then a phone rises from the bottom of the viewport.
- Copy, three lines, stanza spacing:

> Are your supplements working?
> There's been no clear way to know.
> Your body has the answer. Prism shows you.

### Beat 3 — Here's How

- Phone locks to centre. Pinned from here through Beat 6. Shows the Home screen (stage dials: Improving, Maintaining).
- Headline: **HERE'S HOW**
- Lines: **No blood tests. No guesswork.**
- Floating bubble beside phone: **Based on your health data**
- Strip at viewport base: **APPLE WATCH | WHOOP | OURA | GARMIN** (confirm final integration list before ship — this is a factual claim)
- Trust whisper, small quiet type, one appearance: **We don't sell supplements.**
- Layout note: this beat carries six elements. Sequence or merge the whisper and the negation lines so the section stays spare. **In-situ call.**

### Beat 4 — See What's Working (the emotional peak)

- Pinned phone crossfades to the Sleep chart: the Magnesium marker on the rising trend line. This is the most important visual on the site.
- Headline: **SEE WHAT'S WORKING** — then, one scroll beat later: **AND WHAT'S NOT** (green: NOT)
- Small annotation near the chart: **Two-week rolling average against your baseline.**
- Scroll geared slow through this beat.

### Beat 5 — See What to Change / A Better Plan

- Two phone beats, one section: recommendation screen, then plan screen ("Your plan is ready. Checked for overlaps and interactions.").
- Headlines: **SEE WHAT TO CHANGE** then **A BETTER PLAN**
- Rule: app-screen copy is never edited on the website. If a line inside a real screen trips a copy rule, flag it as an app question. Do not patch it on the site.

### Beat 6 — Built for Your Goals

- Phone's final beat: goals screen. Headline: **BUILT FOR YOUR GOALS**
- Shortest section on the page. The phone drifts down and exits after this beat and does not return.

### Beat 7 — Trust (locked copy)

- Typography in a void, mirroring the bridge. Full black.
- Headline pair: **WE DON'T SELL SUPPLEMENTS** / **WE SHOW YOU THE EVIDENCE** (green: EVIDENCE)
- Elaboration, set as three short stanzas with air, not a paragraph:

> Supplements are sold with sales and marketing. Studies on someone else, somewhere else. Not you. Not your data.
> So how can you be sure it's working?
> Prism shows you what's changing, using your data.
> No more guessing. Just evidence, from your body.

- Strap, small caps: **YOUR BODY | YOUR GOALS | YOUR RESULTS**

### Beat 8 — Get Prism

- Pre-launch: one header line (leading candidate: **No more guessing. See for yourself.** — see collision checks), one email field, one button (**Join the waitlist**). The only input on the entire site.
- At launch this block swaps to: App Store badge dominant; pricing cards beneath — annual £49.99 highlighted with 7-day free trial flagged and the honest arithmetic shown (£4.17/month, billed annually); monthly £6.99 secondary. No urgency language.
- Nav "Join waitlist" item swaps to the App Store link at launch. Build the swap as **one flag, not scattered edits**.

### Beat 9 — FAQ + Footer

- Accordion, 5–6 questions, closed by default, quiet type. Build with clearly-marked placeholder questions and answers. The founder supplies all final Q&A before ship. **Do not write final FAQ copy.**
- Product-truth checks before ship: (a) is a wearable strictly required, or is iPhone/Apple Health data alone sufficient; (b) "when will I see results" uses the concrete day-14 answer.
- Footer: Privacy, Terms, Contact, medical disclaimer. Small, grey, functional. Privacy and Terms are legally required (the waitlist email is personal data under UK GDPR; Apple expects a reachable privacy URL).

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

1. "No more guessing" appears in the Beat 7 elaboration and in the Beat 8 header candidate. Two appearances is one too many. Keep it in Beat 7; choose a different Beat 8 header from the founder's sign-off stack if the repeat reads badly.
2. "Working" appears in the Beat 2 question and the Beat 7 question ("So how can you be sure it's working?"). If the echo reads as repetition on screen, rework the Beat 7 question line only. The Beat 2 copy is locked.

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

1. Confirm everything is committed and pushed to GitHub before any change. (**Not currently true — see §11.3.**)
2. Create a branch (`rebuild`). All work happens on the branch. `main` and the live deployment stay untouched.
3. Delete pass first, in Plan mode: present the full cut list for approval before removing anything. After the cut, confirm the site still builds and runs clean.
4. Rebuild against Section 4. Cut and rebuild are separate passes.
5. Iterate on the branch preview URL. The founder judges copy and visuals there.
6. Mobile-first: most traffic arrives on phones via shared links. Spec the mobile scroll in parallel, not as a degradation of desktop. Mobile nav: logo + one CTA. No hamburger menu.
7. Nav anchors: "How it works" scrolls to Beat 3. "Join waitlist" scrolls to Beat 8. At launch the waitlist nav item becomes the App Store link (one flag, per Beat 8).
8. Motion: propose the animation approach in the plan step and prove it on the pinned-phone sequence (Beats 3–6) before building anything else. That sequence is the hardest thing on the page; if the approach janks there, swap before any other beat exists. `prefers-reduced-motion` fallback: static frames, simple crossfades.
9. Performance budget: LCP under 2.5s on mid-range mobile, 60fps scroll on the pinned sequence, CLS near zero. Jank kills belief on an evidence product.
10. **Waitlist writes: preview deployments must never write to the live Airtable table** (founder decision, supersedes the original MailerSend-scoping rule). Preview submissions either log only or go to a separate test table. Gate on `VERCEL_ENV === 'production'`, not on `NODE_ENV` — preview builds are production builds and `NODE_ENV` is `production` there too. Verify the gate on the preview URL before the founder starts testing Beat 8.
11. Analytics: **[TBC — founder to confirm. Recommended: Vercel Analytics for visits and waitlist conversion.]**
12. OG/share metadata carries the hero line and the OG image from the asset manifest.
13. Cutover: merge to `main`, point prismhealthco.com (DNS in Cloudflare) at the deployment. Rename the GitHub repo to a Prism name at cutover, not before.
14. Old domain (renewhealth.app): killed. No redirect. Site comes down; domain lapses.

## 9. Working rules for build sessions

- Do not relitigate locked decisions: the bare hero (no supporting line), the absence of a separate "what Prism is" section (the bridge does that job), the single-scroll structure, the locked copy in Sections 4 and 5.
- Where the spec marks something in situ, build the best candidate and flag it for founder judgement on the preview.
- If anything in the codebase contradicts this brief, flag it. Do not silently override in either direction.

---

## 10. Current codebase — the delete map

Everything below is the Renew web-first product. **Per §6 it is all on the delete list**, and it is documented only so the delete pass in §8.3 can be specific. Nothing here is a pattern to follow or extend.

Current commands: `npm run dev`, `npm run build` (`prisma generate && next build`), `npm run lint` (eslint — not run during build; `next.config.mjs` sets `eslint.ignoreDuringBuilds`). No test suite exists. Plain JavaScript, no TypeScript; `jsconfig.json` maps `@/*` to the repo root. Tailwind v4 via the PostCSS plugin, configured in `app/globals.css`, not a `tailwind.config.js`.

Cut targets, by §6 category:

- **Quiz / goal selectors / onboarding** — [app/goals/page.js](app/goals/page.js) (5-step quiz), [app/results/page.js](app/results/page.js), [app/results/PersonalisationTail.js](app/results/PersonalisationTail.js). The quiz serialises answers into query params (`?goals=energy,sleep&q2=…`) which `/results` reads back; the URL is the state. Goal IDs `energy`, `immunity`, `guthealth`, `sleep`, `calm` recur across all three files and the `Modals/` folder names.
- **Supplement lists and pages** — the five supplement arrays in `results/page.js`, all 15 modals under [app/results/Modals/](app/results/Modals/), the parallel set under [app/results/essentials/](app/results/essentials/), [components/SaveButton.js](components/SaveButton.js), [hooks/useSavedSupplements.js](hooks/useSavedSupplements.js) (localStorage-only; the `SavedSupplement` Prisma model is already dead code), and [components/supplementcard.js](components/supplementcard.js) (already unused and would not compile — it has `&quot;` entities inside JSX and an undefined `isExpandedQuote`).
- **Auth / accounts / SSO** — [app/api/auth/[...nextauth]/route.js](app/api/auth/[...nextauth]/route.js) (NextAuth v4, PrismaAdapter + JWT strategy, Google provider, and an Email provider whose SMTP block is a placeholder because delivery is a `fetch` to MailerSend inside an overridden `sendVerificationRequest`), [app/signin/page.js](app/signin/page.js), [app/account/page.js](app/account/page.js).
- **Old marketing pages** — [app/page.js](app/page.js) (landing), [app/results/appaboutrenew/](app/results/appaboutrenew/), [app/results/appcommonquestions/](app/results/appcommonquestions/), [app/results/applegal/](app/results/applegal/). Note §4 Beat 9 requires new Privacy/Terms, so `applegal` content may be worth reading before it goes.
- **Old palette / photography** — the light palette and forest imagery throughout `public/images/`, against the locked §3.1 black/`#0A3C0A` canvas.

**Keep:** [app/api/auth/waitlist/route.js](app/api/auth/waitlist/route.js) — the Airtable POST is the Beat 8 backend per §7. It moves out of `app/api/auth/` (nothing else auth-shaped survives) and gains the §8.10 preview gate. [lib/prisma.js](lib/prisma.js) is **cut** — Prisma goes entirely.

The pre-existing bug where `results/page.js` POSTs to `/api/saveQuiz` while the route is at `/api/auth/saveQuiz` (quiz results silently never saved) is **moot** — both sides are on the delete list. Do not spend time fixing it.

## 11. Open flags (raised per §9, not resolved in code)

1. **Hero bottle asset is missing.** `brief-assets/` holds five screens, all mapped (verified by opening each). There are no bottle images. Beat 1 proceeds with a grey placeholder of correct proportions per founder decision; the OG/share image (§8.12) stays blocked until the hero reference lands. Founder is supplying a reference image of the full hero composition.
2. **Display face is still TBC (§3.1).** Blocks final typography on every beat. Build with a flagged fallback; do not substitute a lookalike.
3. **Analytics is still TBC (§8.11).** The old GA and hardcoded Microsoft Clarity tags are cut with `app/layout.js`; nothing replaces them yet.
4. **Integration list is unconfirmed (§4 Beat 3).** **APPLE WATCH | WHOOP | OURA | GARMIN** is a factual claim and needs confirming before ship.
5. **FAQ copy is founder-supplied (§4 Beat 9).** Placeholders only, plus the two product-truth checks (wearable required or not; day-14 answer).

### Logged app-side questions (not website work)

- `Gap.png` reads "A key supplement is missing. / Magnesium. / For your sleep goal." — "is missing" is an assertion rather than observational language, and sits close to the §5 "presents options, never instructs" rule. **Founder decision: use the screen as-is on the site; logged as an app question only.** Per the Beat 5 rule, never patch app-screen copy on the website.

### Resolved (do not reopen)

- Waitlist stays on **Airtable**; Prisma, the database, and the MailerSend/NextAuth integration are all cut; `resend` and `nodemailer` dependencies dropped. See §7.
- Preview deployments must not write to the live Airtable table. See §8.10.
- `PRISM_WEBSITE_BRIEF.md` deleted; this file is the single source of truth.
- `Lifestyle.png` removed from `brief-assets/`; no beat uses it. Recoverable from `main` at `bcc6696`.
- Baseline committed and pushed to `main`; `rebuild` branch created (§8.1, §8.2).
