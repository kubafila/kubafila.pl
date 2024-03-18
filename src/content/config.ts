import { z, defineCollection } from "astro:content";

const homepageCollection = defineCollection({
    type:'content',
    schema: z.object({
        title: z.string(),
    })
})

export const collections = {
    "homepage": homepageCollection
}