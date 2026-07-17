# PRISM — WEBSITE REBUILD BRIEF (CLAUDE.md)

**STATUS: Phase 0 — setup. Delete pass not yet run. Update this line as phases complete (delete pass done → rebuilding beats → preview iteration → cutover). Do not re-run completed phases.**

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
- Canvas gradient: vertical, #000000 (top) → #0A3C0A (bottom). linear-gradient(180deg, #000000, #0A3C0A) matches the screens near-exactly. Whether the ramp runs per-beat or continuously down the page: in situ.
- Accent green (WORK / NOT / EVIDENCE only): #3AB203
- Display type colour: #FFFFFF, all caps for headlines.
- Trap — in-app greens (#5FDC02, #A8F161, #7AC95D) belong to app screens only. They arrive on the site inside screenshots. Never use them for website type, buttons, or accents.
- Display face: [TBC — founder supplies family name and weights from the Canva marketing file. Do not substitute a lookalike without flagging it.]
- Body type and CTA button styling: sample from reference images; propose in plan step.
- One green accent word per headline, only where meaning lives: WORK, NOT, EVIDENCE.
- CTA: white pill button.

### 3.2 Asset manifest
All visual assets live in `/brief-assets` in the project root. Never invent UI or imagery. A device frame around real app screenshots is allowed and expected. If an asset is missing, build with a grey placeholder of correct proportions and flag it — never generate a substitute.

Beat-to-asset mapping (filenames as supplied by founder; match by content if names differ):
- Beat 1 hero bottles: the two dark bottles from App Store screen 1
- Beat 3: Home screen (stage dials — Improving / Maintaining)
- Beat 4: Sleep chart screen with Magnesium marker on the trend line — the shipped App Store version (bright data-green, 8h 12m dataset), not the softer Figma variant
- Beat 5: recommendation screen (Magnesium), then plan screen ("Your plan is ready")
- Beat 6: goals screen ("What do you want to improve?")
- OG/share image: hero composition (bottles + headline); build from hero assets
- Hero bottles must carry no labels, flavour names or ecommerce cues. They are symbolic user supplements, not Prism products.

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
- Layout note: this beat carries six elements. Sequence or merge the whisper and the negation lines so the section stays spare. In-situ call.

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
- Nav "Join waitlist" item swaps to the App Store link at launch. Build the swap as one flag, not scattered edits.

### Beat 9 — FAQ + Footer
- Accordion, 5–6 questions, closed by default, quiet type. Build with clearly-marked placeholder questions and answers. The founder supplies all final Q&A before ship. Do not write final FAQ copy.
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

## 7. Confirmed infrastructure (verified from live setup — do not re-derive)

- Stack: Next.js (App Router), Tailwind CSS, Prisma, deployed on Vercel.
- Repo: `nickjacobs24-collab/Renew-App` on GitHub. This is the only repo in scope. `renew-backend` and `renew-ios` belong to the app dev agency and are never touched.
- Vercel project: `renew-app`, currently serving www.renewhealth.app, deploying from `main`. Branch previews available by default.
- Vercel holds 13 environment variables and a MailerSend integration. Never delete, rewrite or commit `.env` / `.env.local`. MailerSend is the likely provider for waitlist emails — treat as keep, not cut.
- Prisma and the database exist to support the old auth/quiz era. Database-backed features are on the delete list, but the waitlist email capture needs a storage or send path — propose the simplest option (MailerSend or a minimal table) in the plan before removing Prisma wholesale.
- New domain at cutover: prismhealthco.com (DNS in the founder's Cloudflare account). Old domain renewhealth.app is killed at cutover, no redirect.

## 8. Build plan

1. Confirm everything is committed and pushed to GitHub before any change.
2. Create a branch (`rebuild`). All work happens on the branch. `main` and the live deployment stay untouched.
3. Delete pass first, in Plan mode: present the full cut list for approval before removing anything. After the cut, confirm the site still builds and runs clean.
4. Rebuild against Section 4. Cut and rebuild are separate passes.
5. Iterate on the branch preview URL. The founder judges copy and visuals there.
6. Mobile-first: most traffic arrives on phones via shared links. Spec the mobile scroll in parallel, not as a degradation of desktop. Mobile nav: logo + one CTA. No hamburger menu.
7. Nav anchors: "How it works" scrolls to Beat 3. "Join waitlist" scrolls to Beat 8. At launch the waitlist nav item becomes the App Store link (one flag, per Beat 8).
8. Motion: propose the animation approach in the plan step and prove it on the pinned-phone sequence (Beats 3–6) before building anything else. That sequence is the hardest thing on the page; if the approach janks there, swap before any other beat exists. prefers-reduced-motion fallback: static frames, simple crossfades.
9. Performance budget: LCP under 2.5s on mid-range mobile, 60fps scroll on the pinned sequence, CLS near zero. Jank kills belief on an evidence product.
10. Waitlist emails: no real sends from preview deployments. Verify MailerSend env variable scoping in the plan step; preview submissions log only.
11. Analytics: [TBC — founder to confirm. Recommended: Vercel Analytics for visits and waitlist conversion.]
12. OG/share metadata carries the hero line and the OG image from the asset manifest.
13. Cutover: merge to `main`, point prismhealthco.com (DNS in Cloudflare) at the deployment. Rename the GitHub repo to a Prism name at cutover, not before.
14. Old domain (renewhealth.app): killed. No redirect. Site comes down; domain lapses.

## 9. Working rules for build sessions

- Do not relitigate locked decisions: the bare hero (no supporting line), the absence of a separate "what Prism is" section (the bridge does that job), the single-scroll structure, the locked copy in Sections 4 and 5.
- Where the spec marks something in situ, build the best candidate and flag it for founder judgement on the preview.
- If anything in the codebase contradicts this brief, flag it. Do not silently override in either direction.
