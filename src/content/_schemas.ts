import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
    difficulty: z.number(),
    questionNumber: z.number(),
    source: z.string(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
