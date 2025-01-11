
import { TechLabel } from '@/components/ui/tech-label';
import { Check, Clock } from 'lucide-react';
import Link from "next/link";
import posthog from "posthog-js";

export default function Pricing() {
    return (
        <section className="min-h-screen pt-32 pb-24 relative bg-[#f5f5f5]" aria-label="V Automate pricing">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03] pointer-events-none" aria-hidden="true">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>

            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 w-32 h-32" aria-hidden="true">
                <div className="absolute top-0 left-0 w-full h-px bg-black" />
                <div className="absolute top-0 left-0 h-full w-px bg-black" />
            </div>
            <div className="absolute top-0 right-0 w-32 h-32" aria-hidden="true">
                <div className="absolute top-0 right-0 w-full h-px bg-black" />
                <div className="absolute top-0 right-0 h-full w-px bg-black" />
            </div>

            <TechLabel text="PRICING.TSX" position="right" className="top-48" />
            <TechLabel text="SCALE WITH CONFIDENCE" position="left" className="top-48" />

            <div className="container mx-auto px-4 relative">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <header className="flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500 mb-12">
                        <span className="text-red-500" aria-hidden="true">*</span>
                        <span>TRANSPARENT PRICING FOR EVERY SCALE</span>
                        <span className="text-red-500" aria-hidden="true">*</span>
                    </header>

                    <h2 className="text-4xl font-bold mb-8 tracking-tighter">Launch Pricing</h2>
                    <p className="text-lg text-neutral-600 mb-16 max-w-2xl">
                        Get early access to our platform with our special launch pricing. More tiers coming soon.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Early Access Plan */}
                        <div className="relative bg-white p-8 border border-black group hover:border-red-500 transition-colors">
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 hidden group-hover:block" />
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs tracking-wide mb-2">
                                    EARLY ACCESS
                                </span>
                                <h3 className="text-xl font-bold">Launch Plan</h3>
                            </div>
                            <div className="text-3xl font-bold mb-8">
                                $0.1
                                <span className="text-sm font-normal text-neutral-500 block">
                                    per task (20,000 calls)
                                </span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>20,000 API calls included</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>All API agents</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>Priority support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>Advanced analytics</span>
                                </li>
                            </ul>
                        </div>

                        {/* Coming Soon Plans */}
                        {[
                            { title: "Team", description: "For growing teams" },
                            { title: "Enterprise", description: "For large organizations" }
                        ].map((plan) => (
                            <div key={plan.title} className="relative bg-white/50 p-8 border border-black/20 group">
                                <div className="absolute -top-3 -right-3 w-6 h-6 bg-neutral-200" />
                                <div className="mb-4">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-200 text-neutral-600 text-xs tracking-wide mb-2">
                                        <Clock size={12} />
                                        COMING SOON
                                    </span>
                                    <h3 className="text-xl font-bold text-neutral-400">{plan.title}</h3>
                                </div>
                                <div className="text-3xl font-bold mb-8 text-neutral-300">
                                    --
                                    <span className="text-sm font-normal text-neutral-400 block">
                                        {plan.description}
                                    </span>
                                </div>
                                <div className="h-64 flex items-center justify-center">
                                    <div className="text-neutral-400 text-sm tracking-wide">
                                        More details coming soon
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Corner */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32" aria-hidden="true">
                <div className="absolute bottom-0 right-0 w-full h-px bg-black" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-black" />
            </div>
        </section>
    );
}
