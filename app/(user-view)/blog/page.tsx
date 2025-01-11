import { getPosts } from '@/lib/sanity.client'
import { TechLabel } from '@/components/ui/tech-label'
import Link from 'next/link'
import { format } from 'date-fns'
import { Search, Filter, Cpu, Book, Clock, ArrowUpRight } from 'lucide-react'
import BlogSearch from '@/components/blog-search'
import { Suspense } from 'react'
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const revalidate = 60

export default async function BlogIndex() {
    const posts = await getPosts()
    const categories = Array.from(new Set(posts.map(post => post.category)))
    
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
                    {/* Enhanced Header Section */}
                    <header className="mb-16">
                        <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500 mb-6">
                            <span className="text-red-500" aria-hidden="true">*</span>
                            <span>LATEST FROM OUR ENGINEERING TEAM</span>
                            <span className="text-red-500" aria-hidden="true">*</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <h1 className="text-4xl font-bold mb-4">Engineering Blog</h1>
                                <p className="text-neutral-600 max-w-xl">
                                    Dive into technical insights, tutorials, and best practices from our engineering team.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Badge variant="outline" className="flex items-center gap-2">
                                    <Cpu className="w-4 h-4" />
                                    {posts.length} Posts
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-2">
                                    <Book className="w-4 h-4" />
                                    {categories.length} Categories
                                </Badge>
                            </div>
                        </div>
                    </header>

                    {/* Search and Filter */}
                    <div className="mb-12">
                        <Suspense fallback={
                            <div className="w-full h-12 bg-neutral-100 animate-pulse rounded-lg" />
                        }>
                            <BlogSearch initialPosts={posts} categories={categories} />
                        </Suspense>
                    </div>

                    {/* Featured Post Section */}
                    {posts[0] && (
                        <div className="mb-16">
                            <h2 className="text-sm font-semibold text-neutral-500 mb-6 tracking-wide">FEATURED POST</h2>
                            <Link href={`/blog/${posts[0].slug.current}`}>
                                <Card className="group hover:border-red-500 transition-colors">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-4">
                                            <Badge>{posts[0].category}</Badge>
                                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <CardTitle className="text-2xl mb-2">{posts[0].title}</CardTitle>
                                        <CardDescription>{posts[0].excerpt}</CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <div className="flex items-center gap-6 text-sm text-neutral-600">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                {posts[0].readingTime || posts[0].estimatedReadingTime} min read
                                            </div>
                                            <div>
                                                {format(new Date(posts[0].publishedAt), 'MMM dd, yyyy')}
                                            </div>
                                            {posts[0].authors?.length > 0 && (
                                                <div>
                                                    By {posts[0].authors.map(author => author.name).join(', ')}
                                                </div>
                                            )}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </div>
                    )}

                    {/* Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.slice(1).map((post) => (
                            <Link key={post._id} href={`/blog/${post.slug.current}`}>
                                <Card className="h-full group hover:border-red-500 transition-colors">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-4">
                                            <Badge variant="outline">{post.category}</Badge>
                                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <CardTitle className="mb-2">{post.title}</CardTitle>
                                        <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <div className="flex items-center gap-4 text-sm text-neutral-600">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                {post.readingTime || post.estimatedReadingTime} min
                                            </div>
                                            <div>
                                                {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Corner */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32" aria-hidden="true">
                <div className="absolute bottom-0 right-0 w-full h-px bg-black" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-black" />
            </div>
        </section>
    )
}
