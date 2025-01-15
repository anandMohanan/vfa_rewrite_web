import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/blog/',
                    '/pricing',
                    '/terms',
                    '/privacy'
                ],
                disallow: [
                    '/private/',
                    '/admin/',
                    '/api/',
                    '/*?preview=true',
                    '/blog/preview/',
                    '/blog/draft/',
                    '/studio/',
                ]
            },
        ],
        sitemap: 'https://vautomate.ai/sitemap.xml',
    };
}
