import { BeforeAfterSection } from "@/components/before-after";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import { KeyFeatureComponent } from "@/components/key-features";
import { ProblemSection } from "@/components/problem";
import SchemaOrg from "@/components/schema-org";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
    title: {
        default: "V Automate | Simplify Agentic API Integration",
        template: "%s | V Automate - AI-Powered Business Automation"
    },
    description: "V Automate (vautomate.ai) helps transform your business with intelligent API agents. Seamlessly integrate 100+ APIs into your LLM applications with plug-and-play simplicity. Enhance efficiency and automation effortlessly.",
    keywords: [
        "V Automate",
        "v automate",
        "v-automate",
        "vautomate",
        "vautomate ai",
        "v automate ai",
        "AI automation",
        "API integration",
        "LLM applications",
        "intelligent API agents",
        "agentic systems",
        "machine learning integration",
        "conversational AI",
        "enterprise automation",
        "API orchestration",
        "workflow optimization",
        "no-code automation",
        "AI-powered APIs",
        "business efficiency",
        "process automation",
        "digital transformation",
        "productivity tools",
        "AI business solutions",
        "enterprise software",
        "API management",
        "SaaS integration",
        "cloud automation",
        "startup tools",
        "enterprise AI",
        "tech innovation",
        "simplify API complexity",
        "streamline business processes",
        "enhance workflow efficiency",
        "reduce manual integration",
        "accelerate digital transformation",
        "OpenAI integration",
        "large language model tools",
        "AI development platforms",
        "API ecosystem",
        "intelligent automation",
        "how to automate business processes",
        "AI tools for developers",
        "API tools for developers",
        "simplify API management",
        "no-code AI solutions",
        "API agent development"
    ],
    authors: [{ name: "V Automate Team" }],
    metadataBase: new URL('https://vautomate.ai'),
    alternates: {
        canonical: '/'
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        siteName: 'V Automate',
        title: "V Automate: Revolutionizing API Integration with AI",
        description: "Transform your APIs into powerful, conversational agents. Simplify your workflow with 100+ pre-built API integrations.",
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'V Automate: Revolutionize Your Business Automation',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@vautomate',
        creator: '@vautomate',
        title: "V Automate: AI-Powered API Integration",
        description: "Unlock the power of intelligent API agents. Transform your business workflow with 100+ seamless integrations."
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
};

export default function Home() {
    return (
        <>
            <SchemaOrg />
            <main className="bg-[#f5f5f5] text-black relative overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-red-500 via-neutral-200 to-neutral-300" />
                <Hero />
                <ProblemSection />
                <BeforeAfterSection />
                <KeyFeatureComponent />
                <FAQ />
                <Contact />
            </main >
        </>
    );
}
