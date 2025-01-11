import { getPost } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';
import { TechLabel } from '@/components/ui/tech-label';
import { format } from 'date-fns';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function BlogPost({ params }) {
    const { post, relatedPosts } = await getPost(params.slug);

    return (
        <article className="min-h-screen pt-32 pb-24 relative bg-[#f5f5f5]">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03] pointer-events-none" aria-hidden="true">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>

            <TechLabel text="POST.TSX" position="right" className="top-48" />
            <TechLabel text="TECHNICAL INSIGHT" position="left" className="top-48" />

            <div className="container mx-auto px-4 relative">
                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-red-500 transition-colors mb-8 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                <div className="max-w-3xl mx-auto">
                    {/* Category */}
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-black text-white text-xs tracking-wide">
                            {post.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {post.title}
                    </h1>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-12">
                        <time dateTime={post.publishedAt}>
                            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                        </time>
                        <span>•</span>
                        <span>{post.readingTime} min read</span>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none mb-16">
                        <PortableText
                            value={post.body}
                            components={{
                                types: {
                                    code: ({ value }) => (
                                        <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto">
                                            <code className="language-{value.language}">
                                                {value.code}
                                            </code>
                                        </pre>
                                    ),
                                },
                            }}
                        />
                    </div>

                    {/* Related Posts */}
                    {relatedPosts && relatedPosts.length > 0 && (
                        <div className="border-t border-neutral-200 pt-16">
                            <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        href={`/blog/${relatedPost.slug.current}`}
                                        key={relatedPost._id}
                                        className="group"
                                    >
                                        <article className="relative bg-white p-6 border border-black group-hover:border-red-500 transition-colors h-full">
                                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <h3 className="font-bold mb-2 group-hover:text-red-500 transition-colors">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-neutral-600 line-clamp-2 mb-4">
                                                {relatedPost.excerpt}
                                            </p>
                                            <time className="text-xs text-neutral-500">
                                                {format(new Date(relatedPost.publishedAt), 'MMMM d, yyyy')}
                                            </time>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
