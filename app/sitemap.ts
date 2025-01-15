import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/sanity.client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://vautomate.ai';
    const posts = await getPosts();

    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }
    ];

    return [...routes, ...blogUrls];
}
