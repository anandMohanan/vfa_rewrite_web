import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer";
import "./globals.css";
import { PosthogProvider } from "@/provider/posthog";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
    display: 'swap',
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: "V Automate | AI-Powered Business Automation",
        template: "%s | V Automate"
    },
    description: "V Automate revolutionizes your business processes with AI-powered automation solutions. Create custom API agents for seamless integration and maximum efficiency.",
    keywords: ["V Automate", "AI automation", "business efficiency", "custom API agents", "process optimization"],
    authors: [{ name: "V Automate" }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://vautomate.com',
        siteName: 'V Automate',
        images: [
            {
                url: 'https://vautomate.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'V Automate: AI-Powered Business Automation',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@vautomate',
        creator: '@vautomate',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <meta name="theme-color" content="#f5f5f5" />
            </head>
            <PosthogProvider>
            <body
                className={`${spaceGrotesk.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f5f5]`}
            >
                <a href="#main-content" className="sr-only focus:not-sr-only">
                    Skip to main content
                </a>
                <Navbar />
                <main id="main-content">
                    {children}
                </main>
                <FooterSection />
            </body>
            </PosthogProvider>
        </html>
    );
}


