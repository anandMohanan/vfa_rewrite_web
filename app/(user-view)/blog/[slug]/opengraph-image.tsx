import { ImageResponse } from 'next/og'
import { getPost } from '@/lib/sanity.client'

export const runtime = 'edge'
export const alt = 'Blog Post Open Graph Image'
export const contentType = 'image/png'
export const size = {
    width: 1200,
    height: 630,
}

export default async function OpenGraphImage({ params }) {
    const { slug } = params
    const { post } = await getPost(slug)

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '-.02em',
                    fontWeight: 700,
                    background: 'white',
                    position: 'relative',
                }}
            >
                {/* Top left branding section */}
                <div
                    style={{
                        left: 42,
                        top: 42,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <span
                        style={{
                            width: 24,
                            height: 24,
                            background: 'black',
                        }}
                    />
                    <span
                        style={{
                            marginLeft: 8,
                            fontSize: 20,
                        }}
                    >
                        vautomate.ai
                    </span>
                </div>

                {/* Blog indicator in top right */}
                <div
                    style={{
                        position: 'absolute',
                        top: 42,
                        right: 42,
                        fontSize: 20,
                        color: '#666',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                    }}
                >
                    Blog
                </div>

                {/* Main title container */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        padding: '20px 50px',
                        margin: '0 42px',
                        fontSize: 40,
                        width: 'auto',
                        maxWidth: 550,
                        textAlign: 'center',
                        backgroundColor: 'black',
                        color: 'white',
                        lineHeight: 1.4,
                    }}
                >
                    {post.title}
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
