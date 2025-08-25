import { defineCollection, z } from "astro:content";

const contacts = defineCollection({
    schema: z.object({
        order: z.number(),
        title: z.string(),
        subtitle: z.string()
    })
})

const projects = defineCollection({
    schema: z.object({
        id: z.number(),
        lang: z.enum(['es', 'en']),
        order: z.number(),
        type: z.enum(['Público', 'Privado']),
        github: z.string().optional(),
        platform: z.enum(['Web', 'Mobile']),
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        characteristics: z.array(z.string()).optional(),
        challenges: z.array(z.string()).optional(),
        skills: z.array(z.string()),
        images: z.array(z.string()),
        mockups: z.array(z.string()),
        librariesFrontend: z.array(
            z.object({
                name: z.string(),
                version: z.string()
            })
        ).optional(),
        librariesBackend: z.array(
            z.object({
                name: z.string(),
                version: z.string()
            })
        ).optional()
    })
})

export const collections = { contacts, projects }