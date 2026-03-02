# Avery.ai Design System

Documentation extracted from Figma source: [Avery.ai Figma File](https://www.figma.com/design/6H0kbIqdZJ079pBGPoEOkj/Untitled?node-id=1-19&t=cdUPe8DtsyFLFba0-1)

---

## Color Tokens

### Primary

Used for interactive elements: buttons, links, form controls, and focus states.

| Token | Hex | WCAG Contrast | Usage |
|-------|-----|---------------|-------|
| `primary-50` | `#E5F6F6` | AAA | Light backgrounds, hover tints |
| `primary-100` | `#A2E0E0` | AA | Borders, subtle accents |
| `primary-200` | `#7DD3D3` | AA | Secondary interactive states |
| `primary` (base) | `#44C0C0` | AA | Default interactive color |
| `primary-400` | `#399E9E` | AAA | Pressed/active states |

The base color (`#44C0C0`) is the default for buttons, links, and interactive focus rings. Use `primary-50` for hover backgrounds on light surfaces, and `primary-400` when you need higher contrast (e.g., text on white).

### Secondary

Complementary color for illustrations, graphics, or interactive elements when primary doesn't meet accessibility requirements.

| Token | Hex | WCAG Contrast | Usage |
|-------|-----|---------------|-------|
| `secondary-100` | `#EADDA5` | AAA | Light accent backgrounds |
| `secondary` (base) | `#CAA91E` | AAA | Accent elements, illustrations |

### Surface

Interface structure: page backgrounds, text hierarchy, elevation, and disabled elements.

| Token | Hex | WCAG Contrast | Semantic Role |
|-------|-----|---------------|---------------|
| `surface-50` | `#FFFFFF` | AAA | Page background |
| `surface-100` | `#FAF8FF` | AAA | Card/section background |
| `surface-200` | `#56544E` | AA | Muted UI elements |
| `surface-300` | `#3E3D3A` | AAA | **Body text color** |
| `surface-400` | `#2B2A27` | AAA | **Heading text color** |

`surface-300` is the default body text color. `surface-400` is for headings and high-emphasis text. The slight warmth in these dark tones (note they're not pure black) gives the UI a softer feel.

### Danger

Error states, destructive actions, required field indicators.

| Token | Hex | WCAG Contrast | Usage |
|-------|-----|---------------|-------|
| `danger-50` | `#FEDCDC` | AAA | Error background tints |
| `danger-100` | `#FD9696` | AAA | Light error accents |
| `danger-200` | `#FB4F4F` | AA | Error borders |
| `danger-300` (base) | `#FA2C2C` | AA | Default error color |
| `danger-400` | `#DF0000` | AAA | High-contrast error text |

### Success

Confirmation feedback, completed states, positive indicators.

| Token | Hex | WCAG Contrast | Usage |
|-------|-----|---------------|-------|
| `success-50` | `#DFFAF2` | AAA | Success background tints |
| `success-100` | `#9EF1D8` | AAA | Light success accents |
| `success-200` | `#1ABD8C` | AA | Success borders, icons |
| `success-300` (base) | `#12825F` | AA | Default success color |
| `success-400` | `#107555` | AA | High-emphasis success text |

### Warning

Recommendations, cautions, in-progress indicators (e.g., "complete your profile" banners).

| Token | Hex | WCAG Contrast | Usage |
|-------|-----|---------------|-------|
| `warning-50` | `#FDF3E6` | AAA | Warning background tints |
| `warning-100` | `#F9DBB5` | AAA | Light warning accents |
| `warning-200` | `#F2AB53` | AAA | Warning borders, icons |
| `warning-300` (base) | `#EE9322` | AA | Default warning color |
| `warning-400` | `#FF8D00` | AA | High-emphasis warning |

---

## Typography

### Font Family

**Primary typeface:** Poppins

The full character set supports Latin, Cyrillic, and Greek alphabets, plus extended punctuation and currency symbols. Poppins is a geometric sans-serif, giving the brand a clean, modern, and approachable feel.

**Secondary typeface:** IBM Plex Sans (used in design system documentation labels)

### Type Scale

| Style | Font | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|------|--------|-------------|----------------|-------|
| Headline XL | Poppins | 60px | Medium (500) | 56px | -3.6px | Hero sections, landing pages |
| Title XL | IBM Plex Sans | 24px | Regular (400) | 34px | 0 | Section headers, color category titles |
| Body XL | IBM Plex Sans | 16px | Regular (400) | 24px | 0 | Color descriptions, section descriptions |
| Body | Poppins | 16px | Regular (400) | 20px | 0.32px | Paragraph text |
| Button LG | Inter | 16px | Regular (400) | 24px | 0 | Large button labels |
| Button SM | Inter | 14px | Regular (400) | 24px | 0 | Small button labels |
| Caption | Open Sans | 14px | Bold / Regular | -- | 0 | Color token labels, metadata |

### Text Colors

**On light backgrounds (`surface-50` / `surface-100`):**

| Role | Color | Opacity |
|------|-------|---------|
| Primary text | `#000000` (Black) | 100% |
| Secondary text | `#414346` | 100% |
| Disabled text | `#66696D` | 100% |

**On dark/branded backgrounds (`surface-100` tinted):**

| Role | Color | Opacity |
|------|-------|---------|
| Primary text | `#2B2A27` | 100% |
| Secondary text | `#2B2A27` | 70% |
| Disabled text | `#2B2A27` | 50% |

---

## Components

### Button

**Typography:** Inter, 16px or 14px, Regular weight.

| Variant | Background | Text Color | Border | Border Radius | Usage |
|---------|------------|------------|--------|--------------|-------|
| Primary | `primary` (#44C0C0) | `#FCFCFC` (white) | none | -- | Main call-to-action (e.g., "Get 7 days free") |
| (additional variants not yet defined in Figma) | -- | -- | -- | -- | -- |

**Sizes observed in UI:**

- Full-width (440px in onboarding flow), height 36px
- Button text sizes: 16px (large), 14px (small)

**States to implement:** Default, Hover, Active, Disabled, Loading (not yet specified in Figma; recommend defining these).

### Form Field

Observed in the onboarding flow (node 1:112):

| Property | Value |
|----------|-------|
| Width | 440px (full-width within container) |
| Height | 58px |
| Label position | Inside, top-left (12px, 10px) |
| Placeholder position | Inside, below label (12px, 30px) |
| Error state | Red alert icon + message below field |

---

## Design Tokens (CSS Custom Properties)

```css
:root {
  /* Primary */
  --color-primary-50: #E5F6F6;
  --color-primary-100: #A2E0E0;
  --color-primary-200: #7DD3D3;
  --color-primary: #44C0C0;
  --color-primary-400: #399E9E;

  /* Secondary */
  --color-secondary-100: #EADDA5;
  --color-secondary: #CAA91E;

  /* Surface */
  --color-surface-50: #FFFFFF;
  --color-surface-100: #FAF8FF;
  --color-surface-200: #56544E;
  --color-surface-300: #3E3D3A;
  --color-surface-400: #2B2A27;

  /* Danger */
  --color-danger-50: #FEDCDC;
  --color-danger-100: #FD9696;
  --color-danger-200: #FB4F4F;
  --color-danger-300: #FA2C2C;
  --color-danger-400: #DF0000;

  /* Success */
  --color-success-50: #DFFAF2;
  --color-success-100: #9EF1D8;
  --color-success-200: #1ABD8C;
  --color-success-300: #12825F;
  --color-success-400: #107555;

  /* Warning */
  --color-warning-50: #FDF3E6;
  --color-warning-100: #F9DBB5;
  --color-warning-200: #F2AB53;
  --color-warning-300: #EE9322;
  --color-warning-400: #FF8D00;

  /* Semantic text colors */
  --color-text-heading: #2B2A27;
  --color-text-body: #3E3D3A;
  --color-text-secondary: #414346;
  --color-text-disabled: #66696D;
  --color-text-inverse: #FCFCFC;
}
```

---

## Open Issues

1. **Button states not defined.** The Figma file only shows default state for buttons. Hover, active, disabled, and loading states need to be designed and documented.

2. **Spacing scale missing.** No explicit spacing tokens are defined in the design system page. The onboarding screens use values like 8px, 12px, 16px, 20px, 24px, 32px, 40px, 56px, 64px, which suggests an 8px base grid. This should be formalized.

3. **Border radius tokens missing.** Observed values include 16px (cards), 24px (containers), 32px (main frame). These should be codified.

4. **Shadow/elevation system not defined.** No elevation tokens found.

5. **Primary color scale gap.** The scale jumps from `primary-200` to `primary` (base) to `primary-400`, skipping a `primary-300` designation. The base effectively occupies the 300 position. Consider renaming for consistency.

6. **Danger-100 hex mismatch.** The background renders as `#FF8383` but the label reads `#FD9696`. Verify which is correct.

7. **Typo in Figma.** `primary-100` card reads "contrast-rati: AA" (missing 'o'). Minor but should be fixed in the source file.

---

*Generated from [Figma file](https://www.figma.com/design/6H0kbIqdZJ079pBGPoEOkj/Untitled?node-id=1-19&t=cdUPe8DtsyFLFba0-1) on 2026-02-28.*
