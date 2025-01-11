import { getPost } from '@/lib/sanity.client'
import { PortableText } from '@portabletext/react'
import { TechLabel } from '@/components/ui/tech-label'
import { format } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity.image' // You'll need to create this helper
import { ArrowLeft, Clock, Calendar, Github, ChevronRight, Link as LinkIcon } from 'lucide-react'
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const components = {
    types: {
        code: ({ value }) => (
            <div className="relative group">
                <div className="absolute -inset-y-6 -inset-x-6 z-0 bg-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                    {value.filename && (
                        <div className="flex items-center justify-between bg-neutral-100 px-4 py-2 text-sm text-neutral-600 rounded-t-lg border border-b-0 border-neutral-200">
                            <span>{value.filename}</span>
                            <span className="text-xs">{value.language}</span>
                        </div>
                    )}
                    <pre className={`bg-black text-white p-4 rounded-lg ${value.filename ? 'rounded-t-none' : ''} overflow-x-auto`}>
                        <code className={`language-${value.language}`}>
                            {value.code}
                        </code>
                    </pre>
                </div>
            </div>
        ),
        image: ({ value }) => (
            <figure className="my-8">
                <div className="relative aspect-video">
                    <Image
                        src={urlForImage(value).url()}
                        alt={value.alt || ''}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                {value.caption && (
                    <figcaption className="mt-2 text-center text-sm text-neutral-600">
                        {value.caption}
                    </figcaption>
                )}
            </figure>
        ),
        table: ({ value }) => (
            <div className="my-8 overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-200">
                    {/* Add your table rendering logic here */}
                </table>
            </div>
        ),
    },
    marks: {
    link: ({ children, value }) => {
        // Add null check for href
        const href = value?.href || ''
        const rel = !href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
           <a 
                href={href}
                rel={rel}
                className="text-red-500 hover:underline"
                target={value?.blank ? '_blank' : undefined}
            >
                {children}
            </a>
        )
    },
}
}

export default async function BlogPost({ params }) {
    const { post, relatedPosts } = await getPost(params.slug)

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

                <div className="max-w-4xl mx-auto">
                    {/* Post Header */}
                    <header className="mb-12">
                        {/* Category & Tags */}
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <Badge variant="default" className="uppercase">
                                {post.category}
                            </Badge>
                            {post.tags?.map(tag => (
                                <Badge key={tag} variant="outline">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {post.title}
                        </h1>

                        {/* Metadata */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={post.publishedAt}>
                                    {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                                </time>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readingTime || post.estimatedReadingTime} min read</span>
                            </div>
                        </div>

                        {/* Authors */}
                        {post.authors && post.authors.length > 0 && (
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                {post.authors.map((author, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="font-medium">{author.name}</span>
                                        {author.role && (
                                            <span className="text-sm text-neutral-500">({author.role})</span>
                                        )}
                                        {author.github && (
                                            <a
                                                href={author.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-neutral-600 hover:text-red-500 transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Tech Stack */}
                        {post.techStack && post.techStack.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 mb-8">
                                <span className="text-sm text-neutral-600">Built with:</span>
                                {post.techStack.map((tech, index) => (
                                    <TooltipProvider key={index}>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Badge variant="secondary">
                                                    {tech.tech} {tech.version && `v${tech.version}`}
                                                </Badge>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Version: {tech.version || 'Latest'}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                        )}

                        {/* GitHub Repo */}
                        {post.githubRepo?.url && (
                            <a
                                href={post.githubRepo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                View Source Code
                                {post.githubRepo.branch && (
                                    <span className="text-neutral-400">({post.githubRepo.branch})</span>
                                )}
                            </a>
                        )}
                    </header>

                    {/* Prerequisites */}
                    {post.prerequisites && post.prerequisites.length > 0 && (
                        <div className="mb-12 p-6 bg-white rounded-lg border border-neutral-200">
                            <h2 className="text-lg font-semibold mb-4">Prerequisites</h2>
                            <ul className="space-y-2">
                                {post.prerequisites.map((prerequisite, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 mt-1 text-red-500" />
                                        <span>{prerequisite}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-lg max-w-none mb-16">
                        <PortableText
                            value={post.body}
                            components={components}
                        />
                    </div>

                    {/* Related Posts */}
                    {relatedPosts && relatedPosts.length > 0 && (
                        <section className="border-t border-neutral-200 pt-16">
                            <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        href={`/blog/${relatedPost.slug.current}`}
                                        key={relatedPost._id}
                                    >
                                        <Card className="h-full hover:border-red-500 transition-colors">
                                            <CardHeader>
                                                <Badge className="w-fit mb-2">{relatedPost.category}</Badge>
                                                <CardTitle className="line-clamp-2">{relatedPost.title}</CardTitle>
                                                <CardDescription className="line-clamp-2">
                                                    {relatedPost.excerpt}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex items-center gap-4 text-sm text-neutral-600">
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{relatedPost.readingTime || relatedPost.estimatedReadingTime} min</span>
                                                    </div>
                                                    <time dateTime={relatedPost.publishedAt}>
                                                        {format(new Date(relatedPost.publishedAt), 'MMM d, yyyy')}
                                                    </time>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </article>
    )
}
