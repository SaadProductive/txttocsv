import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),            // H1 / og title
    metaTitle: z.string(),        // 40–65 chars <title>
    description: z.string(),      // 100–165 chars
    keyword: z.string(),          // primary target keyword
    intent: z.enum(['Informational', 'Commercial', 'Transactional']).default('Informational'),
    published: z.string(),        // ISO date
    updated: z.string(),          // ISO date
    author: z.string().default('Hamza Younis'),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.object({ href: z.string(), label: z.string() })).default([]),
  }),
});

export const collections = { blog };
