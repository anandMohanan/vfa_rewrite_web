import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-11',
    useCdn: process.env.NODE_ENV === 'production',
});

// Helper function to fetch blog posts
export async function getPosts() {
    return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      mainImage,
      "readingTime": round(length(pt::text(body)) / 5 / 180)
    }
  `);
}

// Helper function to fetch a single post
export async function getPost(slug: string) {
  return await client.fetch(`{
    "post": *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      category,
      publishedAt,
      mainImage,
      "readingTime": round(length(pt::text(body)) / 5 / 180)
    },
    "relatedPosts": *[_type == "post" && slug.current != $slug && category == ^.category][0...3] {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      "readingTime": round(length(pt::text(body)) / 5 / 180)
    }
  }`, { slug });
}
