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


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#f5f5f5" />
                <meta name="google-site-verification" content="4C2WvIUYTLfFzyxrD8kr5_B-H_r_ItHEzlBqAQak1q0" />
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


