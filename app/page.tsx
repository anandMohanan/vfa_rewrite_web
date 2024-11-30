import { BeforeAfterSection } from "@/components/before-after";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import { KeyFeatureComponent } from "@/components/key-features";
import { ProblemSection } from "@/components/problem";
import { SolutionSection } from "@/components/solution";
import { UseCasesSection } from "@/components/use-case";
import Head from "next/head";

export default function Home() {
    return (
        <>

            <Head>
                <title>Home | AI-Powered Automation for Your Business</title>
                <meta name="description" content="Discover how our AI agents can automate and optimize your business processes. Seamless integration with your existing systems for maximum efficiency." />
                <meta name="keywords" content="AI automation, business optimization, API integration, custom AI agents" />
            </Head>
            <main className="bg-[#f5f5f5] text-black relative overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-red-500 via-neutral-200 to-neutral-300" />
                <Hero />
                <ProblemSection />
                <KeyFeatureComponent />
                <BeforeAfterSection />
                <FAQ />
                <Contact />
            </main >
        </>
    );
}
