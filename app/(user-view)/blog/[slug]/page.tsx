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
        block: ({ value }) => {
            // We're getting undefined children because we should use value.children directly
            // Let's log the complete value to understand what we're working with
            console.log('Block value:', JSON.stringify(value, null, 2));

            // First, let's extract the text content from the block's children
            const text = value.children
                .map(child => child.text)
                .join('');

            // Handle lists with the extracted text
            if (value.listItem) {
                if (value.level > 1) {
                    return <li className="ml-8">{text}</li>;
                }
                return <li className={value.listItem === 'bullet' ? 'ml-6' : ''}>{text}</li>;
            }

            // Define our styles for different block types
            const styles = {
                h1: "scroll-m-20 text-4xl font-bold tracking-tight mt-12 mb-6",
                h2: "scroll-m-20 text-3xl font-bold tracking-tight mt-12 mb-6",
                h3: "scroll-m-20 text-2xl font-bold tracking-tight mt-8 mb-4",
                h4: "scroll-m-20 text-xl font-bold tracking-tight mt-6 mb-3",
                blockquote: "mt-6 border-l-4 border-red-500 pl-6 italic",
                normal: "leading-7 [&:not(:first-child)]:mt-6"
            };

            // Get the style and ensure we have a default
            const style = styles[value.style] || styles.normal;

            // Create elements based on style with the extracted text
            switch (value.style) {
                case 'h1':
                    return <h1 className={style}>{text}</h1>;
                case 'h2':
                    return <h2 className={style}>{text}</h2>;
                case 'h3':
                    return <h3 className={style}>{text}</h3>;
                case 'h4':
                    return <h4 className={style}>{text}</h4>;
                case 'blockquote':
                    return <blockquote className={style}>{text}</blockquote>;
                default:
                    // Check if any child has marks for special formatting
                    const hasMarks = value.children.some(child => child.marks?.length > 0);
                    if (hasMarks) {
                        // If we have marks, we need to render each child separately to maintain formatting
                        return (
                            <p className={style}>
                                {value.children.map((child, index) => {
                                    if (child.marks?.length > 0) {
                                        return child.marks.reduce((acc, mark) => {
                                            const Mark = components.marks[mark];
                                            return Mark ? <Mark key={`${child._key}-${mark}`}>{acc}</Mark> : acc;
                                        }, child.text);
                                    }
                                    return child.text;
                                })}
                            </p>
                        );
                    }
                    return <p className={style}>{text}</p>;
            }
        },
        code: ({ value }) => {
            // Log code block value to debug
            console.log('Code block:', JSON.stringify(value, null, 2));
            
            return (
                <div className="my-6 relative group">
                    <div className="absolute -inset-y-4 -inset-x-4 z-0 bg-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                    <div className="relative">
                        {value.filename && (
                            <div className="flex items-center justify-between bg-neutral-100 px-4 py-2 text-sm text-neutral-600 rounded-t-lg border border-b-0 border-neutral-200">
                                <span>{value.filename}</span>
                                <span className="text-xs">{value.language}</span>
                            </div>
                        )}
                        <pre className={`bg-black text-white p-4 rounded-lg ${value.filename ? 'rounded-t-none' : ''} overflow-x-auto`}>
                            <code className={`language-${value.language} text-sm`}>
                                {value.code}
                            </code>
                        </pre>
                    </div>
                </div>
            );
        }
    },
    marks: {
        strong: ({ children }) => {
            return <strong className="font-bold">{children}</strong>;
        },
        em: ({ children }) => {
            return <em className="italic">{children}</em>;
        },
        code: ({ children }) => {
            return (
                <code className="relative rounded bg-neutral-100 px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    {children}
                </code>
            );
        },
        link: ({ children, value }) => {
            const href = value?.href || '';
            const rel = !href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <a
                    href={href}
                    rel={rel}
                    className="font-medium text-red-500 underline underline-offset-4 hover:text-red-600"
                    target={value?.blank ? '_blank' : undefined}
                >
                    {children}
                </a>
            );
        }
    },
    list: {
        bullet: ({ children }) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
        ),
    }
};

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const { post, relatedPosts } = await getPost(slug)
    console.log(post)

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
                    <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none mb-16">
                        <PortableText
                            value={post.body}
                            components={components}
                            onMissingComponent={(message, options) => {
                                console.warn('Missing component:', message, options);
                                return null;
                            }}
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
