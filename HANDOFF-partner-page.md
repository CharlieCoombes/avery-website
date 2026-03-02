# Handoff Spec: Avery Partner Landing Page

**Source:** [Figma File](https://www.figma.com/design/6H0kbIqdZJ079pBGPoEOkj/Untitled?node-id=1-19&t=cdUPe8DtsyFLFba0-1)
**Figma file key:** `6H0kbIqdZJ079pBGPoEOkj`
**Framework:** Astro (fresh project, no existing codebase)
**Template type:** Reusable partner page (Budgetdog is the first instance)
**Page dimensions:** 1920 x 7476px (desktop)

> **Asset workflow:** Check `logos-images/` first. For any asset not available locally, use the Figma MCP `get_design_context` tool with the file key above and the node ID from Section 8. Only use `placehold.co` as a last resort if Figma MCP is unavailable.

---

## 1. Project Setup

### Tech Stack
- **Framework:** Astro v5+ with static site generation (SSG)
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist (primary), Inter (testimonial cards)
- **Content:** Astro Content Collections (MDX) for partner data
- **Video:** YouTube embed (lite-youtube-embed for performance)
- **Deployment:** Static output

### Content Architecture (Recommended)
Since this is a reusable template, use Astro Content Collections:

```
src/
  content/
    partners/
      budgetdog.mdx        # Partner-specific content
  pages/
    partners/
      [slug].astro          # Dynamic route template
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
      SectionBadge.astro    # The pill-shaped section labels
      PrimaryButton.astro
  layouts/
    PartnerLayout.astro
```

### Partner Content Schema
Each partner MDX file should define:
```typescript
{
  slug: string;               // URL path: /partners/budgetdog
  partnerName: string;        // "Budgetdog"
  partnerLogo: ImageMetadata; // Partner logo asset
  averyLogo: ImageMetadata;   // Avery logo asset
  hero: {
    headline: string;         // "From Chaos to Clarity:\nFully Automated Budgeting"
    subheadline: string;      // "Connect accounts directly to your..."
    ctaText: string;          // "Try risk free for 30 days"
    ctaLink: string;          // Stripe/signup URL
    youtubeVideoId: string;   // YouTube video ID
    videoThumbnail: ImageMetadata;
  };
  socialProof: {
    avatars: ImageMetadata[]; // 5 user avatars
    rating: number;           // 5
    userCount: string;        // "1,130+"
  };
  howItWorks: {
    steps: Array<{
      text: string;           // "Install Avery Browser Extension"
      active: boolean;        // Whether step is highlighted
    }>;
    screenshot: ImageMetadata;
  };
  features: Array<{
    badge: string;            // "AI Categorization"
    title: string;            // "Smart sorting. While you sleep."
    description: string;
    bulletPoints: Array<{ text: string; active: boolean }>;
    screenshot: ImageMetadata;
    imagePosition: 'left' | 'right';
  }>;
  testimonials: Array<{
    type: 'featured' | 'quote' | 'standard';
    partnerLogo?: ImageMetadata;
    quote: string;
    authorName: string;
    authorTitle: string;
    authorAvatar?: ImageMetadata;
    backgroundImage: ImageMetadata;
  }>;
  testimonialPartners: string[]; // ["GenYSolutions", "Smart Recover", ...]
  pricing: {
    headline: string;         // "Exclusive Discount for Budgetdog Members"
    plans: Array<{
      name: string;           // "Monthly Plan" | "Annual Plan"
      price: string;          // "$7.99"
      originalPrice: string;  // "$9.99"
      ctaText: string;        // "Get 30 days free"
      ctaLink: string;
      features: string[];
      icon: ImageMetadata;
      decoration: ImageMetadata;
    }>;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}
```

---

## 2. Design Tokens

### Colors
```css
:root {
  --color-primary: #44C0C0;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: rgba(26, 26, 26, 0.7);  /* 70% opacity */
  --color-text-muted: rgba(26, 26, 26, 0.5);       /* 50% opacity */
  --color-border: rgba(26, 26, 26, 0.1);
  --color-border-light: rgba(26, 26, 26, 0.05);
  --color-border-medium: rgba(26, 26, 26, 0.12);
  --color-border-strong: rgba(26, 26, 26, 0.15);
  --color-border-heavy: rgba(26, 26, 26, 0.2);
  --color-surface: #FFFFFF;
  --color-surface-muted: #F6F6F6;
  --color-glass-bg: rgba(255, 255, 255, 0.4);
  --color-glass-bg-strong: rgba(255, 255, 255, 0.5);
  --color-glass-bg-heavy: rgba(255, 255, 255, 0.8);
  --color-shadow: rgba(0, 0, 0, 0.05);
  --color-icon: #292929;
}
```

### Typography
| Token | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|-------------|----------------|
| `heading-hero` | Geist Medium | 60px | 500 | 60px | -3.6px |
| `heading-section` | Geist Medium | 52px | 500 | 60px | -3.12px |
| `heading-card` | Geist Medium | 40px | 500 | 42px | -2.4px |
| `heading-testimonial` | Inter Medium | 36px | 500 | 40px | -0.72px |
| `heading-faq-title` | Geist Medium | 52px | 500 | normal | -2.08px |
| `body-testimonial` | Geist Regular | 24px | 400 | normal | -0.48px |
| `body-feature` | Geist Regular | 18px | 400 | normal | -0.72px |
| `body-lg` | Geist Regular | 16px | 400 | normal | -0.64px |
| `body-md` | Geist Regular | 16px | 400 | normal | -0.32px |
| `body-sm` | Geist Regular | 14px | 400 | normal | 0 |
| `heading-pricing` | Geist Medium | 40px | 500 | normal | -1.6px |
| `heading-pricing-label` | Geist Medium | 20px | 500 | normal | -0.4px |
| `faq-question` | Geist Medium | 18px | 500 | normal | -0.36px |
| `faq-answer` | Geist Regular | 16px | 400 | normal | -0.32px |
| `nav-link` | Geist Regular | 16px | 400 | normal | -0.32px |
| `badge-text` | Geist Regular | 16px | 400 | normal | -0.64px |
| `button-text` | Geist Regular | 16px | 400 | normal | -0.32px |

### Spacing & Layout
| Token | Value | Usage |
|-------|-------|-------|
| `content-width` | 1280px | Max content width |
| `page-width` | 1920px | Full page width |
| `section-padding-x` | 320px from edges (= 40px from content edge) | Side padding |
| `card-padding` | 40px left, 20px right, 20px top/bottom | Feature card internal |
| `card-radius` | 32px | Feature cards, FAQ background |
| `card-radius-inner` | 24px | Screenshots inside cards |
| `card-radius-sm` | 16px | Pricing cards |
| `nav-radius` | 12px | Navbar |
| `pill-radius` | 100px | Buttons, badge pills |
| `card-shadow` | 0px 4px 4px rgba(0,0,0,0.05) | Feature cards |

### Border Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `border-card` | 1px solid rgba(26,26,26,0.1) | Feature cards, FAQ items |
| `border-nav` | 1px solid rgba(26,26,26,0.05) | Navbar |
| `border-testimonial` | 1px solid rgba(26,26,26,0.2) | Featured testimonial |
| `border-testimonial-sm` | 1px solid rgba(26,26,26,0.12) | Standard testimonials |
| `border-pricing` | 1px solid rgba(0,0,0,0.1) | Pricing cards |
| `border-pricing-outer` | 1px solid rgba(0,0,0,0.05) | Pricing container |
| `border-screenshot` | 1px solid rgba(0,0,0,0.1) | Screenshot borders |

---

## 3. Section-by-Section Specs

### 3.1 Navbar (Sticky Header)

**Position:** Fixed top, 20px from page top
**Container:** 1280px wide, 60px tall, centered
**Background:** White, border `rgba(26,26,26,0.05)`, border-radius 12px

| Element | Spec |
|---------|------|
| Logo (Avery) | Left-aligned, SVG, 32.3px W x 28px H |
| Nav links | Center: "How It Works", "Pricing", "Docs" (Geist Regular 16px, #1A1A1A, gap 32px) |
| CTA button | Right: "Get 30 days free", bg #44C0C0, white text, pill shape, height 36px, px 20px |

**Scroll behavior:** Should become sticky/fixed with backdrop blur on scroll. Not explicitly in Figma but standard practice.

**Nav links should anchor to:** How It Works section, Pricing section, external docs URL.

### 3.2 Hero Section

**Height:** 1493px
**Background:** Complex layered gradient:
1. White base
2. Rounded container (1880px wide, 1439px tall, border-radius 32px, 20px from top)
3. Gradient mesh images (exported as hero-bg-gradient.png and hero-bg-mesh.png)
4. Frosted glass overlay at 15% opacity

**Partner logos bar:**
- Budgetdog logo (178px x 32px) + "+" text (Geist Medium 20px) + Avery logo (97px x 36px)
- Centered, gap 4px between elements

**Headline:**
- "From Chaos to Clarity:" (line 1) + "Fully Automated Budgeting" (line 2)
- Geist Medium, 60px, #1A1A1A, -3.6px tracking, capitalize, line-height 60px
- Max width: 882px, text-align center

**Subheadline:**
- "Connect accounts directly to your Budgetdog template and help put your budgeting on autopilot"
- Geist Regular, 16px, rgba(26,26,26,0.7), -0.64px tracking
- Single line, centered

**CTA Button:**
- "Try risk free for 30 days"
- bg #44C0C0, white text, Geist Regular 16px, pill shape
- Height 44px, px 28px (larger than nav CTA)
- 32px below headline group

**Video area:**
- Frosted glass container: 1280px wide, backdrop-blur 7px, bg rgba(255,255,255,0.4), border rgba(26,26,26,0.05), border-radius 20px
- Inner video frame: 1264px x 710px, border-radius 16px, border rgba(26,26,26,0.15)
- Play button overlay: 96px circle, centered on video
- **Implementation:** Use lite-youtube-embed with the thumbnail as poster image

**Social proof bar (bottom of hero):**
- 5 overlapping user avatars (40px circles, -20px overlap margin)
- 5 gold star icons (20px each)
- "From by 1,130+ users" (Geist Regular 14px, rgba(26,26,26,0.7))
- NOTE: "From by" appears to be a typo in Figma. Should likely be "Loved by" or "Trusted by"
- Positioned 90px from bottom of hero section

### 3.3 How It Works Section

**Height:** 753px
**Background lines:** Vertical decorative lines at x=240 and x=1680 (10% opacity), running full height. These are repeated across multiple sections.

**Card:**
- 1280px wide, 600px tall, centered (offset 10px right)
- White bg, border rgba(26,26,26,0.1), border-radius 32px
- Shadow: 0px 4px 4px rgba(0,0,0,0.05)
- Padding: 40px left, 20px right

**Left column (text):**
- Badge: "• How Avery Works" (Geist Regular 16px, #44C0C0, -0.64px tracking)
- Title: "Setup in Minutes Manage your Finances" (Geist Medium 40px, #1A1A1A, -2.4px tracking, capitalize, line-height 42px, max-width 415px)
- Steps list (bottom-aligned):
  1. "Install Avery Browser Extension" (opacity 50% = inactive)
  2. "Sync your Bank Accounts" (opacity 100% = active)
  3. "Build Dashboards" (opacity 50% = inactive)
- Each step: Geist Regular 18px, #1A1A1A, -0.72px tracking
- Separator line (1px) below each step, 512px wide

**Right column (image):**
- Container: 740px x 560px, border-radius 24px
- Background blur overlay at 60% opacity
- Dashboard screenshot overlaid at 25px offset, full height

### 3.4 Features Section ("Sync Your Bank Data to Budgetdog")

**Height:** 2093px
**Section header:**
- Badge pill: "Features" (same SectionBadge component as other sections)
- Title: "Sync Your Bank Data to Budgetdog" (Geist Medium 60px, centered, max-width 513px)

**Three feature cards stacked vertically, gap 40px:**

#### Card 1: AI Categorization (image right)
- 1280px x 540px, same card styling as How It Works
- Badge: "• AI Categorization" (#44C0C0)
- Title: "Smart sorting. While you sleep." (40px, max-width 317px)
- Description: paragraph text (16px, rgba(26,26,26,0.7), max-width 340px)
- Bullet points:
  - "Automated transaction tagging" (active, 100% opacity)
  - "Hands-free spending insights" (inactive, 50% opacity)
- Screenshot: right side, 740px x 500px, border-radius 24px

#### Card 2: Auto Update (image left)
- Full width card, image on LEFT, text on RIGHT
- Layout reversed from Card 1
- Image container: 672px x 500px with frosted glass sub-container (615px x 401px, backdrop-blur 6px)
- Text column: 520px wide
- Badge: "• Auto Update"
- Title: "Zero manual work." (max-width 368px)
- Three bullet points:
  - "Two-year historical retrieval" (inactive)
  - "Two-click bulk importing" (active)
  - "Multi-account transaction mapping" (inactive)

#### Card 3: Custom Rules (image right)
- Same layout as Card 1
- Badge: "• Custom Rules"
- Title: "Set your rules. We'll do the rest." (max-width 328px)
- Two bullet points:
  - "Custom categorization rules" (active)
  - "Daily automated syncing" (inactive)

### 3.5 Testimonials Section ("What Students Say")

**Height:** 1166px
**Section header:**
- Badge: "User Stories"
- Title: "What Students Say" (Geist Medium 52px, -3.12px tracking)

**Carousel implementation:**
The testimonials use a horizontal scroll/carousel with three cards. The visible card is centered (1280px), and the others peek from the sides.

**Featured card (center):**
- 1280px x 660px, white bg, border rgba(26,26,26,0.2), border-radius 28px
- Left: text content with partner logo, quote (Geist Regular 24px), author info
- Right: full-height background image (648px wide)
- Author: name (Geist Medium 20px), title (Geist Regular 16px, 70% opacity)
- Divider line above author info

**Side cards:**
- 1260px x 600px, border-radius 28px, border rgba(26,26,26,0.12)
- Left card (SmartRecover): #F6F6F6 bg, different layout with logo + larger quote (Inter Medium 36px), avatar + "Read More" link
- Right card: White bg, partner logo + standard quote layout

**Partner tab bar (below carousel):**
- Tab names: "GenYSolutions", "Smart Recover", "FetchtalentAI", "Midas", "Bhyte Software"
- Active tab: Geist Medium 18px, #44C0C0
- Inactive tabs: Geist Regular 18px, rgba(26,26,26,0.7)

**Navigation arrows:**
- Left/right circular buttons (40px diameter)
- White bg, border rgba(26,26,26,0.05), border-radius 100%

### 3.6 Pricing Section

**Height:** 993px
**Section header:**
- Badge: "Pricing Plans"
- Title: "Exclusive Discount for Budgetdog Members" (60px, max-width 760px)

**Two pricing cards side by side, gap 12px, centered:**

**Each card outer container:** 376px x 551px, backdrop-blur 6px, bg rgba(255,255,255,0.4), border rgba(0,0,0,0.05), border-radius 20px

**Each card inner:** 360px x 535px, white bg, border rgba(0,0,0,0.1), border-radius 16px, padding 20px horizontal, 24px vertical

**Card content:**
- Icon: 60px x 60px (52px for annual)
- Plan name: Geist Medium 20px, #1A1A1A
- Price: Geist Medium 40px + strikethrough original (22px, 80% opacity)
- **IMPORTANT: Show USD not EUR.** Figma shows euros but client confirmed USD.
- Divider line
- Feature list: 6 items, each with check icon (24px) + text (Geist Regular 16px, 80% opacity)
- Features: "Unlimited access to all features", "Priority customer support", "Connect to banks across Europe", "Unlimited bank connections", "Advanced financial analytics", "Fully customize Budgetdog template"
- Divider line
- CTA: "Get 30 days free", full-width, bg #44C0C0, white text, pill shape, 36px height

**Decorative corner elements:** Each card has a unique corner decoration (exported SVGs).

### 3.7 FAQ Section

**Height:** 801px
**Background:** Teal gradient mesh image (border-radius 32px), 30% opacity, 1280px wide, centered

**Layout:** Title left-aligned, accordion items below
**Title column:** Starts at x=520, width 880px

**Title:** "Frequently asked Questions" (Geist Medium 52px, -2.08px tracking)

**Accordion items (6 total):**
- Each item: bottom border rgba(26,26,26,0.1), padding 8px top, 12px bottom, 12px horizontal
- Question: Geist Medium 18px, #1A1A1A, -0.36px tracking
- Expand icon: Plus icon (20px) when collapsed, minus/chevron when expanded
- Answer (first item shown expanded): Geist Regular 16px, rgba(26,26,26,0.7), -0.32px tracking, max-width 777px

**FAQ questions from Figma:**
1. "Is my financial data secure with Avery?" (expanded, with answer about Plaid/GoCardless)
2. "Is my financial data secure with Avery?" (duplicate - likely placeholder)
3. "How do I get started with Avery?"
4. "How do I use Google Sheets for accounting?"
5. "Can Google Sheets be used for accounting?"
6. "How do you do bookkeeping on Google Docs?"

**CTA button:** "Get Started Now" + arrow icon, frosted glass style (backdrop-blur 2px, bg rgba(255,255,255,0.8), border white), text 70% opacity

### 3.8 Footer

**Height:** 177px
**Content:** 1280px wide, starts 59.5px from top

**Left:** "Copyright (c) 2026 Avery. All rights reserved." (Geist Medium 14px, 70% opacity)
**Right:** Social media icons row (X/Twitter, Instagram, YouTube, and one more)
**Divider:** 1px line above content

---

## 4. Responsive Behavior

The Figma only shows desktop (1920px). Recommended breakpoints for implementation:

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Desktop XL | >= 1440px | Default Figma layout |
| Desktop | 1280-1439px | Content width = 100% with padding |
| Tablet | 768-1279px | Single column feature cards, stacked pricing, smaller hero |
| Mobile | < 768px | Full single-column, hamburger nav, smaller type scale |

**Priority mobile adaptations:**
- Nav: Collapse to hamburger menu
- Hero: Reduce headline to ~40px, stack video below text
- Feature cards: Stack image below text, full width
- Testimonials: Single card view, swipe
- Pricing: Stack cards vertically
- FAQ: Full-width accordion

---

## 5. Interactions & States

| Element | Trigger | Behavior |
|---------|---------|----------|
| Nav CTA | Hover | Darken primary by 10% (recommend #3DAEAE) |
| Hero CTA | Hover | Same as Nav CTA |
| Video thumbnail | Click | Launch YouTube embed / lightbox |
| How It Works steps | Click/hover | Toggle active step (100% opacity), deactivate others (50%) |
| Feature bullet points | -- | Active/inactive states are static per card (not interactive) |
| Testimonial carousel | Arrow click | Slide to next/prev testimonial |
| Testimonial tab bar | Click | Jump to that partner's testimonial |
| Pricing CTA | Hover | Darken primary |
| FAQ accordion | Click question | Toggle expand/collapse with slide animation |
| FAQ expand icon | -- | Plus when collapsed, minus/X when expanded |
| "Get Started Now" | Click | Navigate to signup/partner signup URL |
| Nav links | Click | Smooth scroll to corresponding section |

---

## 6. Accessibility Notes

- **Focus order:** Nav -> Hero CTA -> Video play -> How It Works -> Feature cards -> Testimonial nav -> Pricing CTAs -> FAQ items -> Footer
- **FAQ accordion:** Use `<details>/<summary>` or aria-expanded/aria-controls pattern
- **Video:** Provide descriptive alt text for thumbnail, keyboard-accessible play button
- **Testimonial carousel:** aria-live="polite" for carousel updates, keyboard nav with arrow keys
- **Color contrast:** Primary (#44C0C0) on white may not meet WCAG AA for small text. Use for large text/buttons only, or darken to #399E9E for body text links.
- **Skip nav:** Add skip-to-content link for keyboard users
- **Images:** All screenshots need descriptive alt text (e.g., "Avery dashboard showing bank account balances and transaction history")
- **Pricing:** Use semantic markup for pricing (not just visual strikethrough)

---

## 7. SEO / AEO Implementation Notes

Even though keyword strategy is deferred, the technical foundation should be in place:

- **Semantic HTML:** Use proper heading hierarchy (h1 for hero title, h2 for section titles, h3 for card titles)
- **Schema.org:** Add `SoftwareApplication`, `FAQPage`, and `Offer` structured data
- **Meta tags:** Dynamic per partner (title: "Budgetdog + Avery | Automated Budgeting", description from hero subheadline)
- **Open Graph / Twitter Cards:** Partner-specific social preview images
- **Canonical URL:** `https://averyapp.ai/partners/budgetdog`
- **Performance:** Lazy load images below the fold, preload Geist font, use WebP/AVIF for screenshots
- **FAQ schema:** Each FAQ should output JSON-LD for Google FAQ rich results

---

## 8. Asset Manifest

Some assets are already available in `logos-images/`. Remaining assets need to be exported from Figma. Local files are marked with **LOCAL:** prefix.

### Logos & Icons
| Asset | Format | Figma Node | Notes |
|-------|--------|------------|-------|
| Avery logo | SVG | 1:585 | Navbar + hero. **LOCAL:** `logos-images/Artboard 1.png` (teal on dark) or `Artboard 10.png` (white on teal). Convert to SVG for production. |
| Avery monogram | PNG | -- | **LOCAL:** `logos-images/Artboard 5.png` (teal on dark) or `Artboard 7.png` (white on teal). Use for favicon. |
| Budgetdog logo | PNG | 1:119 | Hero partner bar. **LOCAL:** `logos-images/bd-logo.png` |
| Star icon (filled) | SVG | 1:139 | Social proof rating |
| Check icon (teal) | SVG | 1:397 | Pricing feature list |
| Plus icon | SVG | 1:530 | FAQ collapsed |
| Minus/expand icon | SVG | 1:525 | FAQ expanded |
| Avery badge icon | SVG | 1:191 | Section badge pills |
| Arrow right | SVG | 1:550 | CTA "Get Started Now" |
| Carousel arrow left | SVG | 1:278 | Testimonial nav |
| Carousel arrow right | SVG | 1:284 | Testimonial nav |
| Caret down icon | SVG | 1:325 | "Read More" link |
| Play button | SVG | 1:8 | Video overlay |
| Pricing icon monthly | SVG | 1:376 | Monthly plan card |
| Pricing icon annual | SVG | 1:436 | Annual plan card |

### Backgrounds & Decorations
| Asset | Format | Figma Node | Notes |
|-------|--------|------------|-------|
| Hero gradient bg | PNG/WebP | 1:66 | Hero background layer 1 |
| Hero mesh bg | PNG/WebP | 1:67 | Hero background layer 2 (rotated 90deg) |
| Hero overlay | PNG/WebP | 1:112 | 15% opacity overlay |
| Decorative lines | SVG | 1:160 | Vertical lines repeated across sections |
| FAQ background | PNG/WebP | 1:517 | Teal mesh, 30% opacity |
| Pricing card decoration (monthly) | SVG | 1:360 | Bottom-right corner |
| Pricing card decoration (annual) | SVG | 1:497 | Top-right corner |
| Card blur bg | PNG/WebP | 1:183 | Shared across feature cards (60% opacity) |

### Screenshots
| Asset | Format | Figma Node | Notes |
|-------|--------|------------|-------|
| Video thumbnail | PNG/WebP | 1:115 | Hero video poster (still needs Figma export) |
| Dashboard screenshot | PNG/WebP | 1:184 | How It Works card. **LOCAL:** `logos-images/howitworks1.png` |
| AI categorization | PNG/WebP | 1:216 | Feature card 1. **LOCAL:** `logos-images/aicat-automated.png` |
| Auto update (transactions) | PNG/WebP | 1:221 | Feature card 2. **LOCAL:** `logos-images/Group 2085662633.png` |
| Custom rules | PNG/WebP | 1:259 | Feature card 3. **LOCAL:** `logos-images/Group 2085662653.png` |
| Monthly dashboard | PNG/WebP | -- | **LOCAL:** `logos-images/imagetest3.png` (verify which feature card this maps to) |

### Avatars & Testimonials
| Asset | Format | Figma Node | Notes |
|-------|--------|------------|-------|
| User avatar 1-5 | PNG | 1:131 to 1:135 | Social proof stack |
| Testimonial author avatar | PNG | 1:319 | SmartRecover card. **LOCAL:** `logos-images/jade-smartrecover.png` |
| SmartRecover logo | PNG | 1:314 | Testimonial card |
| Partner testimonial logo | PNG | 1:302 | Featured testimonial |
| Testimonial bg image 1 | PNG/WebP | 1:311 | Featured card right side |
| Testimonial bg image 2 | PNG/WebP | 1:327 | SmartRecover card right side |
| Testimonial bg image 3 | PNG/WebP | 1:341 | Third card right side |
| Social media icons | SVG | 1:565 | Footer |

---

## 9. Background Line Pattern

Multiple sections share a decorative vertical line pattern. These are thin (1px) vertical lines at x=240 and x=1680 on the page, rendered at 10% opacity. Rather than exporting these as images, implement them as CSS pseudo-elements:

```css
.section-with-lines::before,
.section-with-lines::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(26, 26, 26, 0.1);
}
.section-with-lines::before { left: 240px; }
.section-with-lines::after { right: 240px; }
```

At 1920px page width with 1280px content centered, this places lines at the content edge boundaries (320px padding each side, minus 80px).

---

## 10. Key Implementation Decisions

1. **Currency:** All prices must display in USD (not EUR as shown in Figma). The Figma shows euro signs and amounts, but change to dollar signs. Likely: $7.99/mo (was $9.99), $24.99/yr (was $29.99).

2. **"From by" typo:** The social proof text reads "From by 1,130+ users" which is a typo. Confirm correct copy with Charlie. Likely "Loved by 1,130+ users" or "Trusted by 1,130+ users".

3. **Duplicate FAQ:** Question 2 is identical to Question 1 in Figma. This is a placeholder. Need real FAQ content for all 6 questions.

4. **Testimonial quote placeholder:** The SmartRecover card contains a Framer testimonial quote that's clearly placeholder content ("Framer allowed us to ship high-performing, beautifully designed pages..."). Replace with real Avery testimonial.

5. **Font loading:** Geist is the primary font. Use `@fontsource/geist-sans` npm package or self-host WOFF2 files. Inter is secondary (only testimonials). Load both with `font-display: swap`.

6. **Video:** Use `lite-youtube-embed` Astro integration for zero-JS-cost YouTube embeds until user clicks play.

---

*Generated from Figma node 1:19, file 6H0kbIqdZJ079pBGPoEOkj on 2026-02-28.*
