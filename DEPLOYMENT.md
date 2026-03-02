# Deployment Guide

This guide covers deploying the Avery.ai website to production.

## Prerequisites

- GitHub repository connected
- Domain configured (averyapp.ai)
- Deployment platform account (Vercel/Netlify/Cloudflare)

## Recommended Platform: Vercel

Vercel is optimized for Astro and provides:
- Automatic deployments from GitHub
- Preview deployments for pull requests
- Edge network with global CDN
- Zero-config SSL
- Built-in analytics

### Deploy to Vercel

#### Option 1: Via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Option 2: Via Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import `CharlieCoombes/avery-website`
4. Configure:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add environment variables (if needed)
6. Click "Deploy"

### Custom Domain Setup

1. Go to Project Settings → Domains
2. Add `averyapp.ai` and `www.averyapp.ai`
3. Configure DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Vercel will automatically provision SSL

## Alternative Platforms

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

Or connect via [app.netlify.com](https://app.netlify.com):
- Build command: `npm run build`
- Publish directory: `dist`

### Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Pages → Create a project
3. Connect to GitHub repository
4. Configure:
   - **Framework:** Astro
   - **Build command:** `npm run build`
   - **Build output:** `dist`

## Environment Variables

For production, set these in your deployment platform:

```bash
PUBLIC_SITE_URL=https://averyapp.ai
# Add others as needed
```

## Build Configuration

The project is configured for static site generation (SSG):

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://averyapp.ai',
  // Static output (default)
});
```

## Performance Checklist

Before deploying to production:

- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Optimize images (WebP/AVIF format)
- [ ] Ensure fonts are preloaded
- [ ] Check Lighthouse scores (aim for 90+ on all metrics)
- [ ] Verify meta tags and Open Graph images
- [ ] Test on multiple devices and browsers
- [ ] Enable compression (handled by platform)
- [ ] Configure CDN caching (handled by platform)

## Monitoring

### Analytics Setup

Add analytics to track website performance:

1. **Google Analytics 4:** Add `PUBLIC_GA_MEASUREMENT_ID` to env vars
2. **Plausible:** Add `PUBLIC_PLAUSIBLE_DOMAIN` to env vars
3. **Vercel Analytics:** Enable in project settings (recommended)

### Error Tracking

Consider adding:
- [Sentry](https://sentry.io) for error monitoring
- [LogRocket](https://logrocket.com) for session replay

## CI/CD Workflow

The repository is configured for automatic deployments:

1. **Push to `main`** → Automatic production deployment
2. **Open PR** → Automatic preview deployment
3. **Merge PR** → Preview becomes production

## Rollback Procedure

If you need to rollback a deployment:

### Vercel
```bash
vercel rollback
```

Or via dashboard: Deployments → Select previous → Promote to Production

### Netlify
Dashboard: Deploys → Select previous → Publish deploy

## DNS Configuration

For **averyapp.ai** domain:

### Root Domain (@)
```
Type: A
Name: @
Value: [Platform IP, e.g., 76.76.21.21 for Vercel]
TTL: 3600
```

### WWW Subdomain
```
Type: CNAME
Name: www
Value: [Platform CNAME, e.g., cname.vercel-dns.com]
TTL: 3600
```

Allow 24-48 hours for DNS propagation.

## Security Headers

Recommended headers (usually configured in platform settings):

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

## Post-Deployment Checklist

After deployment:

- [ ] Visit https://averyapp.ai and verify it loads
- [ ] Check https://www.averyapp.ai redirects properly
- [ ] Test all navigation links
- [ ] Verify partner pages load (`/partners/budgetdog`)
- [ ] Check mobile responsiveness
- [ ] Test contact forms (if applicable)
- [ ] Verify analytics tracking
- [ ] Run Lighthouse audit
- [ ] Check Google Search Console
- [ ] Submit sitemap to search engines

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Cloudflare: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)

For Astro-specific issues:
- [docs.astro.build](https://docs.astro.build)
