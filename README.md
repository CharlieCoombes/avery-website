# Avery.ai Website

Official website for Avery.ai — an automated budgeting tool that syncs bank data to Google Sheets.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build) v5+
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v4
- **Fonts:** Poppins (primary), Inter (testimonials)
- **Content:** Astro Content Collections (MDX)
- **Deployment:** Static site generation (SSG)

## 📁 Project Structure

```
src/
  components/
    partner/           # Partner page components
    shared/            # Reusable UI components
  content/
    partners/          # Partner-specific content (MDX)
  layouts/             # Page layouts
  pages/               # Routes
  styles/              # Global styles and tokens
logos-images/          # Brand assets and screenshots
public/                # Static assets
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:4321`

## 🎨 Design System

- **Primary Color:** #44C0C0 (Teal)
- **Typography:** Poppins for headings/body, Inter for testimonials
- **Design Tokens:** See `CLAUDE.md` for complete token reference

## 📝 Content Management

Partner pages use Astro Content Collections. Each partner gets an MDX file in `src/content/partners/` with:

- Hero content (headline, CTA, video)
- Features and benefits
- Testimonials
- Pricing plans
- FAQs

The dynamic route `src/pages/partners/[slug].astro` renders the template with partner-specific data.

## 📚 Documentation

- `CLAUDE.md` — Development guidelines and reference
- `HANDOFF-partner-page.md` — Detailed Figma specs and section breakdowns
- `avery-design-system.md` — Complete design system documentation

## 🔒 Environment Variables

Create a `.env` file for environment-specific configuration:

```bash
# Example environment variables
PUBLIC_SITE_URL=https://averyapp.ai
# Add other variables as needed
```

## 🚢 Deployment

This is a static site that can be deployed to:

- [Vercel](https://vercel.com) (recommended for Astro)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- Any static hosting service

Build command: `npm run build`
Output directory: `dist/`

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run build` and `npm run preview`
4. Submit a pull request

## 📄 License

All rights reserved © 2026 Avery.ai

## 🔗 Links

- **Website:** [averyapp.ai](https://averyapp.ai)
- **Design:** [Figma File](https://www.figma.com/design/6H0kbIqdZJ079pBGPoEOkj/)
