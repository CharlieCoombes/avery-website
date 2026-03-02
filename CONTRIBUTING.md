# Contributing to Avery.ai Website

Thank you for contributing to the Avery.ai website!

## Development Workflow

### 1. Setup

```bash
# Clone the repository
git clone git@github.com:CharlieCoombes/avery-website.git
cd avery-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Branch Naming

Use descriptive branch names with prefixes:

- `feature/` — New features (e.g., `feature/testimonial-carousel`)
- `fix/` — Bug fixes (e.g., `fix/mobile-nav-overflow`)
- `docs/` — Documentation updates (e.g., `docs/update-readme`)
- `refactor/` — Code refactoring (e.g., `refactor/pricing-component`)
- `style/` — Design/styling changes (e.g., `style/hero-spacing`)

### 3. Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the design system in `CLAUDE.md`
   - Reference Figma specs in `HANDOFF-partner-page.md`
   - Test across different screen sizes

3. **Test locally**
   ```bash
   # Development mode
   npm run dev
   
   # Production build test
   npm run build
   npm run preview
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add testimonial carousel component"
   ```

### 4. Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Formatting, styling (no code change)
- `refactor:` — Code refactoring
- `test:` — Adding tests
- `chore:` — Maintenance tasks

Examples:
```
feat: add partner page template
fix: resolve mobile nav overflow issue
docs: update README with deployment instructions
style: adjust hero section spacing
```

### 5. Pull Requests

1. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request on GitHub**
   - Provide a clear title and description
   - Reference any related issues
   - Include screenshots for UI changes
   - Ensure all checks pass

3. **Code Review**
   - Address feedback from reviewers
   - Make requested changes
   - Re-request review when ready

## Design Guidelines

### Follow the Design System

- Use design tokens from `CLAUDE.md`
- Primary color: `#44C0C0`
- Typography: Poppins (primary), Inter (testimonials)
- Reference `avery-design-system.md` for complete specs

### Component Best Practices

- Keep components small and focused
- Use TypeScript for type safety
- Follow existing component patterns
- Add meaningful prop types and descriptions

### Accessibility

- Use semantic HTML
- Include proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers when possible
- Maintain WCAG AA contrast ratios

### Performance

- Lazy load images below the fold
- Optimize assets (WebP/AVIF for images)
- Minimize CSS/JS bundle size
- Test with Lighthouse

## Testing

Before submitting:

1. ✅ Development server runs without errors
2. ✅ Production build completes successfully
3. ✅ Visual testing across breakpoints (mobile, tablet, desktop)
4. ✅ No console errors or warnings
5. ✅ Lighthouse score checks (Performance, Accessibility, SEO)

## Questions?

- Check `CLAUDE.md` for development guidelines
- Review existing components for patterns
- Ask in pull request comments

Thank you for helping make Avery.ai better! 🚀
