import { defineCollection, z } from 'astro:content';

const partners = defineCollection({
  type: 'data',
  schema: z.object({
    partnerName: z.string(),
    partnerLogo: z.string(),
    averyLogo: z.string(),
    hero: z.object({
      headline: z.string(),
      subheadline: z.string(),
      ctaText: z.string(),
      ctaLink: z.string(),
      youtubeVideoId: z.string(),
    }),
    socialProof: z.object({
      rating: z.number(),
      userCount: z.string(),
      label: z.string(),
    }),
    howItWorks: z.object({
      badge: z.string(),
      title: z.string(),
      steps: z.array(z.object({
        text: z.string(),
        active: z.boolean(),
        bgImage: z.string(),
        screenshot: z.string().optional(),
      })),
    }),
    features: z.array(z.object({
      badge: z.string(),
      title: z.string(),
      description: z.string(),
      bulletPoints: z.array(z.object({
        text: z.string(),
        active: z.boolean(),
      })),
      screenshot: z.string(),
      imagePosition: z.enum(['left', 'right']),
    })),
    testimonials: z.array(z.object({
      type: z.enum(['featured', 'quote', 'standard']),
      partnerLogo: z.string().optional(),
      quote: z.string(),
      authorName: z.string(),
      authorTitle: z.string(),
      authorAvatar: z.string().optional(),
      backgroundImage: z.string().optional(),
    })),
    testimonialPartners: z.array(z.string()),
    pricing: z.object({
      badge: z.string(),
      headline: z.string(),
      plans: z.array(z.object({
        name: z.string(),
        price: z.string(),
        period: z.string(),
        originalPrice: z.string(),
        ctaText: z.string(),
        ctaLink: z.string(),
        features: z.array(z.string()),
      })),
    }),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      canonical: z.string(),
    }),
  }),
});

export const collections = { partners };
