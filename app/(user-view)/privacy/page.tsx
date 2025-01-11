import { motion } from "framer-motion";
import { Circle, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { PrivacyContent } from "./privacy-content";

export const metadata: Metadata = {
    title: "Privacy Policy | V Automate",
    description: "Read our comprehensive privacy policy detailing how V Automate collects, uses, and protects your personal information. Understand our commitment to data privacy and security.",
    keywords: [
        "privacy policy",
        "data protection",
        "user privacy",
        "data handling",
        "information security",
        "privacy terms",
        "GDPR compliance",
        "data privacy",
        "user data protection",
        "information security policy",
        "privacy guidelines",
        "transparent data practices",
        "data confidentiality",
        "user information security",
        "privacy commitment",
        "ethical data handling"
    ],
    authors: [{ name: "V Automate Legal Team" }],
    metadataBase: new URL('https://vautomate.ai'),
    alternates: {
        canonical: '/privacy'
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/privacy',
        siteName: 'V Automate',
        title: "V Automate Privacy Policy - Protecting Your Data",
        description: "Comprehensive privacy policy for V Automate. Learn how we safeguard your personal information and maintain data privacy.",
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'V Automate Privacy Policy',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@vautomate',
        creator: '@vautomate',
        title: "Privacy Policy | V Automate",
        description: "Discover our commitment to protecting your data and maintaining privacy standards."
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
        'privacy-policy-version': '1.0.0',
        'last-updated': '2024-28-11'
    }
};

export default function Privacy() {
    return (
        <div className="min-h-screen bg-[#f5f5f5] relative overflow-hidden">

            {/* Technical Labels */}
            <div className="absolute left-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                <Circle size={4} className="text-red-500" />
                PRIVACY_POLICY
            </div>
            <div className="absolute right-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                PRIVACY.TSX
                <Circle size={4} className="text-red-500" />
            </div>
            <PrivacyContent />

        </div>
    );
}
