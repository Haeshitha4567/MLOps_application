# ePace Technologies — Design System

A design system for **ePace Technologies, Inc.** — a 25+ year old global IT staffing, consulting, AI & offshore-development firm headquartered in Irving, TX. The system is derived from the production marketing website (7 pages of HTML + a single 780‑line stylesheet).

## Company context

ePace Technologies is a **B2B enterprise services firm** — not a product company. Their website is their flagship digital asset and it has a **single audience in two voices**: hiring managers / CTOs looking for talent, and technology professionals looking for their next role. Tagline: **"Placing People First, Delivering Global Excellence."**

Key positioning:
- **25+ years in business** (founded 1999, Irving, Texas)
- **2,000+ placements · 100+ enterprise clients · 5 countries**
- Delivery centers in **US (Irving, TX HQ)**, **India (Hyderabad, Visakhapatnam)**, **Latin America nearshore (São Paulo, Buenos Aires, Mexico City)**
- Named enterprise clients: Dell, Verizon, Qualcomm, Motorola, GE Digital, Visa, Fujitsu, AT&T, Cisco, IBM, Microsoft, Amazon
- **Nine service pillars**: IT Consulting · IT Staffing · Offshore Development · Cybersecurity · AI & ML · Cloud & DevOps · Data Science · Engineering Talent · Executive Search
- The "AI revolution" is the primary growth narrative circa 2026 — GenAI, LLM integration, MLOps, AI talent placement.

## Products / surfaces represented

There is **one product**: the **marketing website** (`epacetech.com`). Seven static HTML pages:

| Page | Role |
|---|---|
| `index.html` | Homepage — hero, services, AI section, global map, about snapshot, process, clients, testimonials, CTA, contact |
| `services.html` | 9 service detail sections |
| `about.html` | Who we are, core values, giving back, team |
| `careers.html` | Open positions list + apply modal |
| `testimonials.html` | Full testimonial grid |
| `contact.html` | Contact form + info |
| `compare.html` | (Likely a service comparison page) |

There is **no web app, no mobile app, no docs site, no dashboard** — so this design system documents one surface: marketing web.

## Sources

- **Codebase (local mount, read-only):** `epacetech-website/` — 7 HTML files, `css/style.css` (~780 lines, all tokens + components), `js/main.js` (nav, counters, scroll reveal, contact form), `images/logo.png` + `images/logo-white.png`.
- **No Figma, no brand book, no PDF deck** was provided.
- This system was built by reading the production HTML + CSS directly — token values are lifted verbatim (not approximated).

---

## Index of this design system

```
README.md                       ← you are here
SKILL.md                        ← Agent Skill spec (usable in Claude Code)
colors_and_type.css             ← All CSS variables + base type classes
assets/
  logo.png                      ← Primary logo (navy + orange, on light)
  logo-white.png                ← Reversed logo (for dark navy backgrounds)
preview/                        ← Design System review cards (registered)
ui_kits/
  website/                      ← Marketing website UI kit
    README.md
    index.html                  ← Interactive click-thru demo
    Header.jsx, Hero.jsx, ...   ← Component library
```

---

## Content fundamentals

ePace copy is **professional, confident, numbers-driven, US-enterprise-B2B**. Not playful, not scrappy, not cutesy. The brand speaks *to buyers* (heads of engineering, IT directors, VPs) — the voice is a senior account executive who has done this for two decades.

**Tone.** Assured, direct, outcome-focused. Leans on specific numbers (25+ years, 2,000+ placements, 98%, <7 days, 70% cost savings, 48–72 hours). Zero hedging. No "we might" — always "we deliver."

**Point of view.** Almost always **"we"** (ePace) talking to **"you"** / **"your team"**. First-person plural. Example: *"We help organizations implement, scale, and staff artificial intelligence solutions"*, *"Whether you need elite IT talent… ePace Technologies delivers."*

**Casing.** **Title Case** for all headings and section labels ("Comprehensive Technology Solutions", "How We Deliver Results", "Now Hiring"). Sentence case inside body paragraphs. Labels / eyebrow tags use **ALL CAPS with tracked-out letter-spacing** ("WHAT WE DO", "OUR PROCESS", "CLIENT STORIES").

**Headline pattern.** Big claim + specific promise, often split across two lines with a colored accent span:
> Placing **People First**, Delivering Global Excellence
> Embracing the **AI Revolution**
> Let's Build Something Extraordinary Together

The highlighted fragment is rendered in `--blue-sky` (#60a5fa) on dark, or `--blue` on light.

**Body copy pattern.** Always leads with the outcome, then the mechanism:
> *"Leverage our established delivery centers to build dedicated engineering teams at dramatically reduced costs."*
> *"ePace understands cloud migration deeply. They found us engineers who could hit the ground running on our AWS re-architecture project on day one."*

**Punctuation.** Em dashes used liberally to separate ideas ("AI consulting to offshore development — we deliver results"). Ampersand `&` preferred over "and" in headings and service names ("AI & ML Solutions", "Cloud & DevOps").

**Numbers.** Always prominent. Counts animate on scroll. Formatting: `25+`, `2,000+`, `100+`, `98%`, `<7 Days`, `70%`, `24/7`, `$140,000 – $170,000` (en-dash for ranges). Comma thousand-separators always.

**CTAs.** Short, verb-led, with an arrow glyph appended. Typical: "Hire Top Talent →", "Explore Services", "Our Story →", "Build Your Offshore Team →", "Send Message →", "Apply Now", "Browse Open Jobs".

**Emoji in production copy.** ✅ Used in the actual website nav and body as category icons — 💼 🌍 🛡️ 🤖 ☁️ 📊 🎯 🧠 📈 🔬 🏢 🇺🇸 🇮🇳 🇧🇷 🇦🇷 🇲🇽 ★ ✓ ↑ ←→. Country flag emoji stand in for a flag icon set; service emoji stand in for proper iconography. **Flag this as a substitution point** — in a mature rebuild we would swap to a proper icon set (Lucide / Heroicons / custom). For new work *in the current voice*, mirroring the emoji usage is faithful.

---

## Visual foundations

**Core palette.** Deep navy (`#0b1f3a`) + electric blue (`#1a56db`) + sky-blue accent (`#60a5fa`) + warm amber (`#f59e0b`, matches the logo stripes). Cool, corporate, trust-forward — explicitly modeled after deeplearning.ai (noted in the CSS header comment). White + slate-gray neutrals (the full Tailwind slate 50–900 scale is lifted verbatim).

**Imagery & backgrounds.** No photography is used. Full-bleed sections alternate between:
1. **Dark navy gradient** (`--grad-hero`: navy → mid → blue) with a **subtle 60px grid overlay** at `rgba(255,255,255,0.035)` + **radial light blooms** at 25% opacity. Used for hero, AI section, CTA, process, page headers.
2. **Off-white** (`#f8fafc`) flat backgrounds. Used for services, about, careers listings, contact.
3. **Pure white** (`#ffffff`) for testimonials and global-presence sections.

Alternation is strict: section N is dark, N+1 is off-white, N+2 is white, N+3 is dark. No hand-drawn illustrations, no patterns beyond the grid, no textures, no noise, no photography.

**Glassmorphism on dark.** Hero stats card and AI capability card use `rgba(255,255,255,0.06-0.09)` + `border: 1px solid rgba(255,255,255,0.1-0.15)` + `backdrop-filter: blur(16-20px)` + `border-radius: 24px`. These are the signature "floating card on navy" treatment.

**Animation.** Restrained and purposeful. `--t: all 0.25s cubic-bezier(.4,0,.2,1)` is the universal transition. Patterns:
- **`translateY(-2px / -4px / -5px)`** on hover for buttons, cards, links. Always lifts up, never down.
- **Counter roll-up** on scroll into view (2s duration, IntersectionObserver-triggered).
- **Scroll-reveal** (opacity 0→1 + translateY 24px→0, staggered by 70ms per element).
- **`floatUp` 3s infinite** — 6px vertical bob on the hero floating badge.
- **`blink` 2s infinite** — opacity pulse on the live-status dot.
- **`scrollLeft` 28s linear infinite** — horizontal client-logo marquee with edge fades.
- Animation plays only once per element (`IntersectionObserver.unobserve` after firing). No scroll-jacking, no parallax.

**Hover states.** Default pattern is `translateY(-2px)` + `box-shadow` intensification. Service cards add a **3px blue underline** that grows in from the left (`transform: scaleX(0→1)`). Links brighten (`gray-500 → blue`). On dark surfaces, card bg goes from `0.05→0.09` alpha.

**Press / focus states.** Form inputs: `border-color: var(--blue)` + `box-shadow: 0 0 0 4px rgba(26,86,219,0.08)` + background lightens from gray-50 to white. No explicit `:active` shrink — buttons stay lifted.

**Borders.** Mostly `1px solid var(--gray-200)` (#e2e8f0) on light. On dark, `1px solid rgba(255,255,255,0.1)`. A **3px top-border in `--grad-blue`** is the card-hover affordance (scales in on `.svc-card:hover`). A **3px left-border** appears on dark "stat items" in the accent blue — one of the few uses of left-border styling.

**Shadows.** Five-step scale:
- `--shadow-sm` — `0 1px 3px rgba(0,0,0,0.07)` — form inputs
- `--shadow-md` — `0 4px 16px rgba(0,0,0,0.08)` — base cards
- `--shadow-lg` — `0 8px 40px rgba(0,0,0,0.12)` — card hover
- `--shadow-xl` — `0 20px 60px rgba(0,0,0,0.16)` — floating badges, modals
- `--shadow-blue` — `0 8px 32px rgba(26,86,219,0.28)` — all primary (blue) buttons

No inner shadows. Shadows are always soft and blue-tinted under primary CTAs.

**Corner radii.** `6 · 10 · 16 · 24 · 50px (pill)`. Used by convention:
- `6px` (`--radius-sm`) — small chips
- `10px` (`--radius`) — inputs, small buttons, stat blocks, icon containers
- `16px` (`--radius-lg`) — service cards, testimonial cards
- `24px` (`--radius-xl`) — hero cards, AI capability card, location panel, modals, CTA sections
- `50px` (`--radius-pill`) — tags, badges, client chips, floating CTA, trust avatars

**Layout.** Centered container, `max-width: 1200px`, `padding: 0 24px`. Section padding: **90px vertical** (`--space-24`) for most, 70px for inner pages. Grids are plain CSS Grid — 3-col for services, 2-col for split sections, 4-col for team/process. At ≤1100px: most 2-col becomes 1-col; at ≤900px: 3-col becomes 2-col; at ≤768px: everything stacks.

**Fixed / floating elements.**
- **Sticky header** (z:1000) with scroll-triggered shadow intensification.
- **Back-to-top button** (46px blue circle, bottom-right, appears after 400px scroll).
- **Floating consultation CTA** (blue pill, bottom-right, hides when contact section is visible).
- **Hero "AI Ready" chip** absolutely positioned over the hero card, with `floatUp` animation.

**Transparency & blur.** Used heavily on dark sections for glass cards (`backdrop-filter: blur(16-20px)`). On light, transparency is rare — only in gradient protection layers at the edges of the client marquee.

**Imagery vibe.** No photography. The visual mood is **clean, digital, cool-blue, enterprise-corporate** — not warm, not playful, not human-photography-driven. Where a photo *would* go, the site uses an emoji-in-gradient box as a placeholder (e.g. 🏢 in the about-visual at 96px on the navy gradient).

---

## Iconography

ePace does **not** use a dedicated icon font, sprite sheet, or SVG icon library. All iconography in the production site comes from **two sources**:

1. **Unicode / emoji** — for navigation, service cards, feature bullets, location flags, social icons. Examples used verbatim:
   - Services: 💼 🌍 🛡️ 🤖 ☁️ 📊 🎯 ⚙️ 👥
   - AI features: 🧠 📈 🔬 🎯
   - Misc: 🏢 🕐 📍 📞 ✉ ✓ ★ ↑ → ▾ ›
   - Flags: 🇺🇸 🇮🇳 🇧🇷 🇦🇷 🇲🇽
2. **Typography-as-icon** — social footer icons are literally the letters `in`, `f`, `𝕏` in 36px rounded squares; the testimonial decoration is a giant serif `"` at 4.5rem, 12% opacity.

**Flag / substitution.** This is the weakest part of the production design — emoji rendering differs per-OS (Apple / Windows / Android emoji look radically different), they don't accept color control, and they look informal next to the otherwise corporate type. **In this design system, we preserve the emoji usage for fidelity**, but strongly recommend a stroke-based set (Lucide at CDN `https://unpkg.com/lucide-static@latest`) as a drop-in upgrade. Lucide's `briefcase`, `globe`, `shield-check`, `bot`, `cloud`, `chart-bar`, `target`, `users`, `brain`, `flask-conical`, `trending-up` map 1-to-1 to the current emoji set.

**Logo assets** (copied into `assets/`):
- `logo.png` (300×129) — navy wordmark + amber stripes. Use on **light backgrounds**.
- `logo-white.png` (364×156) — reversed wordmark + amber stripes. Use on **navy / dark gradient** backgrounds.

No SVG logo was provided; flag for the user to request vector.

**Favicon.** Inline SVG data URI — blue rounded square with white bold "eP" letters. Not a file asset.

---

## Layout & spacing rules (summary)

- **Container**: 1200px max, 24px side padding.
- **Section vertical padding**: 90px default · 70px on inner pages · 64px on the clients strip.
- **Gap between cards in a grid**: 20–24px.
- **Gap between split-column sections**: 56–64px.
- **Section title block**: center-aligned · `label-tag` eyebrow (12px blue pill) · 36px heading · 16.8px subtitle capped at 580px.
- **Buttons**: `.btn-lg` is 15px × 32px padding × 10px radius. Default is 14px × 26px × 8px.

---

## Caveats & unknowns

- **No SVG logo** — only PNGs. Request vector from the client.
- **Emoji iconography** — faithful but fragile. Flag for substitution.
- **No dark mode** — site is light-on-navy only, not a system-level dark mode.
- **Inter & Plus Jakarta Sans** are loaded from Google Fonts CDN. No local `.ttf` files shipped with the codebase — we reference the same CDN URLs in `colors_and_type.css`.
- **No brand guidelines document** was provided; all inferences here come from reading the CSS + HTML directly.
