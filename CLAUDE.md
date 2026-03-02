# CLAUDE.md — Avery.ai Website

## Project Overview
- **Product:** Avery.ai — automated budgeting tool that syncs bank data to Google Sheets
- **Site:** averyapp.ai
- **Framework:** Astro v5+ with static site generation (SSG)
- **Styling:** Tailwind CSS v4
- **Content:** Astro Content Collections (MDX) for partner-specific data
- **Video embeds:** YouTube via `lite-youtube-embed` for performance
- **Deployment:** Static output

## Figma Source
- **Figma file:** https://www.figma.com/design/6H0kbIqdZJ079pBGPoEOkj/Untitled?node-id=1-19&t=cdUPe8DtsyFLFba0-1

## Always Do First
- **Read `HANDOFF-partner-page.md`** before building any page. It contains exact Figma specs, design tokens, component breakdowns, and asset manifests.
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Check `logos-images/`** for logos, icons, and screenshots before using placeholders. See the asset mapping below.
- **Use the Figma MCP** to pull any missing assets or verify specs. File key: `6H0kbIqdZJ079pBGPoEOkj`. Node IDs for every asset are listed in the HANDOFF asset manifest.

## Architecture

### File Structure
```
src/
  content/
    partners/
      budgetdog.mdx          # Partner-specific content (first partner)
  pages/
    partners/
      [slug].astro            # Dynamic route from content collection
  components/
    partner/
      HeroSection.astro
      HowItWorks.astro
      FeatureCard.astro
      TestimonialCarousel.astro
      PricingSection.astro
      FAQSection.astro
    shared/
      Navbar.astro
      Footer.astro
      SectionBadge.astro      # Pill-shaped section labels ("Features", "Pricing Plans", etc.)
      PrimaryButton.astro
  layouts/
    PartnerLayout.astro
  styles/
    tokens.css                # CSS custom properties (design tokens)
```

### Content Collections
Partner pages are **reusable templates**. Each partner gets an MDX file in `src/content/partners/`. The `[slug].astro` page renders the template with partner-specific data (logos, copy, pricing, testimonials, FAQs). See `HANDOFF-partner-page.md` Section 1 for the full content schema.

## Design Tokens (use these, not arbitrary values)

### Colors
```css
--color-primary: #44C0C0;
--color-primary-hover: #3DAEAE;           /* 10% darker for hover states */
--color-text-primary: #1A1A1A;
--color-text-secondary: rgba(26,26,26,0.7);
--color-text-muted: rgba(26,26,26,0.5);
--color-border: rgba(26,26,26,0.1);
--color-border-light: rgba(26,26,26,0.05);
--color-surface: #FFFFFF;
--color-surface-muted: #F6F6F6;
--color-glass-bg: rgba(255,255,255,0.4);
--color-shadow: rgba(0,0,0,0.05);
```

### Typography
- **Primary font:** Poppins (headings + body + buttons). Load via Google Fonts in layout (weights 400, 500, 600, 700).
- **Secondary font:** Inter (testimonial cards only). Load via self-hosted WOFF2 in `global.css`.
- **Hero headings:** 60px, Medium (500), -3.6px tracking, line-height 60px
- **Section headings:** 52px, Medium, -3.12px tracking
- **Card headings:** 40px, Medium, -2.4px tracking, line-height 42px
- **Body:** 16px, Regular (400), -0.32px to -0.64px tracking
- **All headings use `capitalize` text-transform**

### Spacing & Radii
- **Content max-width:** 1280px, centered
- **Card border-radius:** 32px (outer), 24px (screenshot inner), 16px (pricing)
- **Button border-radius:** 100px (full pill)
- **Nav border-radius:** 12px
- **Card shadow:** `0px 4px 4px rgba(0,0,0,0.05)`
- **Card padding:** 40px left, 20px right/top/bottom

## Currency
**Always display USD.** The Figma mockups show EUR but the product uses US dollars. Replace all euro signs and amounts with dollar equivalents.

## Asset Mapping (`logos-images/` folder)

Real brand assets are in the `logos-images/` folder. Use these instead of placeholders wherever they match a section.

| Filename | What It Is | Page Section |
|----------|-----------|--------------|
| `Artboard 1.png` | Avery wordmark logo (teal on dark bg) | Navbar, Hero partner bar, Footer |
| `Artboard 5.png` | Avery "A" monogram icon (teal on dark bg) | Favicon, small icon contexts |
| `Artboard 7.png` | Avery "A" monogram icon (white on teal bg) | Alt favicon, branded backgrounds |
| `Artboard 10.png` | Avery wordmark logo (white on teal bg) | Dark/branded section variants |
| `bd-logo.png` | Budgetdog logo (gold text on dark bg) | Hero partner bar (left of "+") |
| `howitworks1.png` | Dashboard screenshot (Google Sheets + Avery extension) | How It Works card (right column) |
| `aicat-automated.png` | AI Categorization screenshot (Subscriptions sheet) | Feature Card 1: AI Categorization |
| `imagetest3.png` | Monthly Dashboard screenshot (charts + sidebar) | Feature Card 2 or 3 (verify against Figma) |
| `Group 2085662633.png` | Transactions View screenshot (Import panel) | Feature Card 2: Auto Update |
| `Group 2085662653.png` | Custom Rules / Auto Update screenshot | Feature Card 3: Custom Rules |
| `jade-smartrecover.png` | Testimonial photo (woman, SmartRecover) | Testimonial carousel: SmartRecover card |

**Notes:**
- Some assets still need to be exported from Figma (hero gradient backgrounds, SVG icons, pricing decorations, user avatars). See `HANDOFF-partner-page.md` Section 8 for the full asset manifest with Figma node IDs.
- The Avery logo should be converted to SVG for the navbar. The PNGs work as fallbacks.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Run `npx astro dev` (default port 4321).
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- `screenshot.mjs` lives in the project root. It uses Puppeteer to capture full-page screenshots.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:4321`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:4321 hero` → saves as `screenshot-N-hero.png`
- After screenshotting, view the PNG to compare against the Figma design.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing
- Use the Figma MCP to pull a screenshot of any section for side-by-side comparison. File key: `6H0kbIqdZJ079pBGPoEOkj`

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Use the brand tokens above.
- **Shadows:** Never use flat `shadow-md`. Use the card shadow token or layered, color-tinted shadows with low opacity.
- **Typography:** Geist for headings, Geist or Inter for body. Tight tracking on large headings (-0.06em), generous line-height (1.7) on body paragraphs.
- **Gradients:** The design uses layered mesh gradients and frosted glass (backdrop-blur). Replicate these exactly from the handoff spec.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Spacing:** Use the design tokens. Do not pick random Tailwind steps.
- **Depth:** The design has a clear layering system: page bg → section cards (elevated, with shadow) → glass overlays (floating, with backdrop-blur). Maintain this hierarchy.

## SEO / AEO Technical Foundation
Even when not optimizing for specific keywords, always implement:
- Semantic HTML heading hierarchy (h1 → h2 → h3, one h1 per page)
- Schema.org structured data: `SoftwareApplication`, `FAQPage`, `Offer`
- Dynamic meta tags per partner (title, description, OG/Twitter cards)
- Canonical URLs: `https://averyapp.ai/partners/{slug}`
- Lazy load images below the fold
- Preload critical fonts (Geist)
- Use WebP/AVIF for raster images
- FAQ section outputs JSON-LD for Google FAQ rich results

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not use EUR — always USD
- Do not hardcode partner-specific content in components — pull from content collections
