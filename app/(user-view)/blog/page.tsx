import { getPosts } from '@/lib/sanity.client';
import { TechLabel } from '@/components/ui/tech-label';
import Link from 'next/link';
import { format } from 'date-fns';
import { Search } from 'lucide-react';
import BlogSearch from '@/components/blog-search';
import { Suspense } from 'react';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogIndex() {
    const posts = await getPosts();

    // Extract unique categories from posts
    const categories = Array.from(new Set(posts.map(post => post.category)));

    return (
        <section className="min-h-screen pt-32 pb-24 relative bg-[#f5f5f5]">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03] pointer-events-none" aria-hidden="true">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>

            <TechLabel text="BLOG.TSX" position="right" className="top-48" />
            <TechLabel text="TECHNICAL INSIGHTS" position="left" className="top-48" />

            <div className="container mx-auto px-4 relative">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <header className="flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500 mb-12">
                        <span className="text-red-500" aria-hidden="true">*</span>
                        <span>LATEST FROM OUR ENGINEERING TEAM</span>
                        <span className="text-red-500" aria-hidden="true">*</span>
                    </header>

                    {/* Client-side search and filter component */}
                    <Suspense>
                    <BlogSearch initialPosts={posts} categories={categories} />
                    </Suspense>
                </div>
            </div>

            {/* Bottom Decorative Corner */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32" aria-hidden="true">
                <div className="absolute bottom-0 right-0 w-full h-px bg-black" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-black" />
            </div>
        </section>
    );
}
