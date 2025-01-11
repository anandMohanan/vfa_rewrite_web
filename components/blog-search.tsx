'use client';

import { useState, useEffect, Suspense } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const POSTS_PER_PAGE = 9;

export default function BlogSearch({ initialPosts, categories }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [posts, setPosts] = useState(initialPosts);
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);

    // Filter and search posts
    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    // Update URL params
    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (searchTerm) params.set('search', searchTerm);
        else params.delete('search');

        if (selectedCategory) params.set('category', selectedCategory);
        else params.delete('category');

        if (currentPage > 1) params.set('page', currentPage.toString());
        else params.delete('page');

        router.push(`${pathname}?${params.toString()}`);
    }, [searchTerm, selectedCategory, currentPage, pathname, router, searchParams]);

    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory]);

    return (
        <div>
            {/* Search and Filter Section */}
            <div className="mb-12 space-y-6">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-black bg-white focus:border-red-500 outline-none transition-colors"
                    />
                </div>

                {/* Categories */}
                <div className="flex gap-2 flex-wrap">
                    <button
                        onClick={() => setSelectedCategory('')}
                        className={`px-4 py-2 text-sm border ${!selectedCategory ? 'bg-black text-white' : 'border-black hover:bg-black hover:text-white'
                            } transition-colors`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 text-sm border ${selectedCategory === category ? 'bg-black text-white' : 'border-black hover:bg-black hover:text-white'
                                } transition-colors`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {paginatedPosts.map((post) => (
                    <Link
                        href={`/blog/${post.slug.current}`}
                        key={post._id}
                        className="group"
                    >
                        <article className="relative bg-white p-8 border border-black group-hover:border-red-500 transition-colors h-full flex flex-col">
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Category Tag */}
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-black text-white text-xs tracking-wide">
                                    {post.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-bold mb-4 group-hover:text-red-500 transition-colors">
                                {post.title}
                            </h2>

                            {/* Excerpt */}
                            <p className="text-neutral-600 mb-6 line-clamp-3 flex-grow">
                                {post.excerpt}
                            </p>

                            {/* Metadata */}
                            <div className="flex justify-between items-center text-xs text-neutral-500 mt-auto">
                                <time dateTime={post.publishedAt}>
                                    {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                                </time>
                                <span className="font-mono">{post.readingTime} min read</span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 flex items-center justify-center border ${currentPage === page
                                    ? 'bg-black text-white'
                                    : 'border-black hover:bg-black hover:text-white'
                                } transition-colors`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}

            {/* Empty State */}
            {paginatedPosts.length === 0 && (
                <div className="text-center py-32">
                    <h2 className="text-2xl font-bold mb-4">No posts found</h2>
                    <p className="text-neutral-600">Try adjusting your search or filters</p>
                </div>
            )}
        </div>
    );
}
