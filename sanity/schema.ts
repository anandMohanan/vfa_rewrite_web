import { SchemaTypeDefinition } from 'sanity'

const post: SchemaTypeDefinition = {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'status',
            title: 'Post Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Draft', value: 'draft' },
                    { title: 'Published', value: 'published' },
                    { title: 'Under Review', value: 'review' },
                    { title: 'Archived', value: 'archived' }
                ],
                layout: 'radio'
            },
            initialValue: 'draft'
        },
        {
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Name' },
                        { name: 'role', type: 'string', title: 'Role' },
                        { name: 'github', type: 'url', title: 'GitHub Profile' }
                    ]
                }
            ]
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.max(300)
        },
        {
            name: 'readingTime',
            title: 'Reading Time (minutes)',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(60)
        },
        {
            name: 'category',
            title: 'Primary Category',
            type: 'string',
            options: {
                list: [
                    { title: 'API Development', value: 'api-development' },
                    { title: 'Tutorials', value: 'tutorials' },
                    { title: 'Product Updates', value: 'product-updates' },
                    { title: 'Engineering', value: 'engineering' },
                    { title: 'Architecture', value: 'architecture' },
                    { title: 'DevOps', value: 'devops' },
                    { title: 'Security', value: 'security' },
                    { title: 'Performance', value: 'performance' },
                    { title: 'Best Practices', value: 'best-practices' }
                ],
            },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'techStack',
            title: 'Technology Stack',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'tech',
                            type: 'string',
                            title: 'Technology'
                        },
                        {
                            name: 'version',
                            type: 'string',
                            title: 'Version'
                        }
                    ]
                }
            ]
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    validation: Rule => Rule.required()
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption'
                }
            ]
        },
        {
            name: 'githubRepo',
            title: 'GitHub Repository',
            type: 'object',
            fields: [
                {
                    name: 'url',
                    type: 'url',
                    title: 'Repository URL'
                },
                {
                    name: 'branch',
                    type: 'string',
                    title: 'Branch'
                }
            ]
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Underline', value: 'underline' },
                            { title: 'Strike', value: 'strike-through' }
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL'
                                    },
                                    {
                                        name: 'blank',
                                        type: 'boolean',
                                        title: 'Open in new tab',
                                        initialValue: true
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    type: 'code',
                    options: {
                        language: 'typescript',
                        withFilename: true,
                        languageAlternatives: [
                            { title: 'TypeScript', value: 'typescript' },
                            { title: 'JavaScript', value: 'javascript' },
                            { title: 'HTML', value: 'html' },
                            { title: 'CSS', value: 'css' },
                            { title: 'Python', value: 'python' },
                            { title: 'Bash', value: 'bash' },
                            { title: 'JSON', value: 'json' },
                            { title: 'YAML', value: 'yaml' },
                            { title: 'GraphQL', value: 'graphql' },
                            { title: 'SQL', value: 'sql' }
                        ]
                    }
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                            description: 'Important for SEO and accessibility.',
                            validation: Rule => Rule.required(),
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        }
                    ]
                },
                {
                    type: 'table'
                },
                {
                    type: 'file',
                    title: 'Downloadable Files',
                    options: {
                        accept: '.pdf,.zip,.json,.env.example'
                    }
                }
            ]
        },
        {
            name: 'prerequisites',
            title: 'Prerequisites',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Required knowledge or setup for following the tutorial'
        },
        {
            name: 'relatedPosts',
            title: 'Related Posts',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'post' }]
                }
            ],
            validation: Rule => Rule.unique()
        },
        {
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    type: 'string',
                    title: 'Meta Title',
                    validation: Rule => Rule.max(60)
                },
                {
                    name: 'metaDescription',
                    type: 'text',
                    title: 'Meta Description',
                    validation: Rule => Rule.max(160)
                },
                {
                    name: 'keywords',
                    type: 'array',
                    title: 'Keywords',
                    of: [{ type: 'string' }],
                    options: {
                        layout: 'tags'
                    }
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'mainImage'
        },
        prepare({ title, subtitle, media }) {
            return {
                title,
                subtitle: `Category: ${subtitle || 'Uncategorized'}`,
                media
            }
        }
    },
    orderings: [
        {
            title: 'Publishing Date, New',
            name: 'publishingDateDesc',
            by: [
                { field: 'publishedAt', direction: 'desc' }
            ]
        },
        {
            title: 'Publishing Date, Old',
            name: 'publishingDateAsc',
            by: [
                { field: 'publishedAt', direction: 'asc' }
            ]
        }
    ]
}

export const schema = {
    types: [post]
}
