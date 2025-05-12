import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: 'src/data/blog' }),
  schema: z.object({
    author: z.string().optional(),
    pubDateTime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    tags: z.array(z.string()).default(['others']),
    minutesRead: z.string().optional(),
    description: z.string().optional(),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional()
  })
});

export const collections = { blog };
