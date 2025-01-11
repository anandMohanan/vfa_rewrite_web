
import { Circle } from "lucide-react";
import { TermsContent } from "./terms-content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | V Automate",
    description: "Review the comprehensive Terms of Service for V Automate. Understand the legal agreements, usage guidelines, and conditions for accessing our AI-powered API integration platform.",
    keywords: [
        "terms of service",
        "legal terms",
        "user agreement",
        "service conditions",
        "usage policy",
        "legal disclaimer",
        "service terms",
        "website terms",
        "user responsibilities",
        "service conditions",
        "AI platform terms",
        "API integration agreement",
        "software usage policy",
        "technology service terms",
        "digital platform guidelines",
        "service usage rules",
        "platform usage guidelines",
        "legal agreement",
        "terms and conditions",
        "user obligations",
        "service liability",
        "data usage terms",
        "platform access rules",
        "service limitations",
        "user conduct policy"
    ],
    authors: [{ name: "V Automate Legal Team" }],
    metadataBase: new URL('https://vautomate.ai'),
    alternates: {
        canonical: '/terms'
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/terms',
        siteName: 'V Automate',
        title: "V Automate Terms of Service - Legal Guidelines",
        description: "Comprehensive legal terms and conditions for using V Automate's AI-powered API integration platform. Understand your rights and responsibilities.",
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'V Automate Terms of Service',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@vautomate',
        creator: '@vautomate',
        title: "Terms of Service | V Automate",
        description: "Learn about our platform's legal guidelines, user agreements, and service conditions."
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        }
    },
    other: {
        'terms-of-service-version': '1.0.0',
        'last-updated': '2024-28-11',
    }
};

export default function Terms() {
    return (
        <div className="min-h-screen bg-[#f5f5f5] relative overflow-hidden">

            {/* Technical Labels */}
            <div className="absolute left-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                <Circle size={4} className="text-red-500" />
                TERMS_OF_SERVICE
            </div>
            <div className="absolute right-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                TERMS.TSX
                <Circle size={4} className="text-red-500" />
            </div>
            <TermsContent />

        </div>
    );
}
