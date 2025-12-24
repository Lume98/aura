import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const prompts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/prompts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    date: z.date().or(z.string()).transform((val) => new Date(val)),
    updatedDate: z.date().or(z.string()).optional().transform((val) => val ? new Date(val) : undefined),
    author: z.string().default('Anonymous'),
  }),
});

export const collections = { prompts };

