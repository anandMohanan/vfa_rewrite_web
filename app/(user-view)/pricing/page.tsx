import { TechLabel } from '@/components/ui/tech-label';
import { Check, Clock, ArrowRight } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

                    <h2 className="text-4xl font-bold mb-8 tracking-tighter">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-neutral-600 mb-16 max-w-2xl">
                        Choose the plan that best fits your needs. All plans include basic features with different usage limits.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Hobby Plan */}
                        <div className="relative bg-white p-8 border border-black group hover:border-red-500 transition-colors">
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 hidden group-hover:block" />
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-neutral-200 text-neutral-800 text-xs tracking-wide mb-2">
                                    HOBBY
                                </span>
                                <h3 className="text-xl font-bold">Free Plan</h3>
                            </div>
                            <div className="text-3xl font-bold mb-8">
                                $0
                                <span className="text-sm font-normal text-neutral-500 block">
                                    forever free
                                </span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>200 agent interactions/month</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>1 agent included</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>Basic analytics</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>Community support</span>
                                </li>
                            </ul>
                            <Button className="w-full" variant="outline">
                                Get Started Free
                            </Button>
                        </div>

                        {/* Pro Plan */}
                        <div className="relative bg-white p-8 border-2 border-black group hover:border-red-500 transition-colors">
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 hidden group-hover:block" />
                            <div className="absolute -top-2.5 -right-2.5 px-3 py-1 bg-red-500 text-white text-xs">
                                MOST POPULAR
                            </div>
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-black text-white text-xs tracking-wide mb-2">
                                    PRO
                                </span>
                                <h3 className="text-xl font-bold">Professional</h3>
                            </div>
                            <div className="text-3xl font-bold mb-8">
                                $200
                                <span className="text-sm font-normal text-neutral-500 block">
                                    per month
                                </span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>2,000 agent interactions included</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>5 agents included</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>Advanced analytics</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>Priority email support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>API access</span>
                                </li>
                            </ul>
                            <Button className="w-full">
                                Subscribe Now
                            </Button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="relative bg-white p-8 border border-black group hover:border-red-500 transition-colors">
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 hidden group-hover:block" />
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-neutral-800 text-white text-xs tracking-wide mb-2">
                                    ENTERPRISE
                                </span>
                                <h3 className="text-xl font-bold">Custom</h3>
                            </div>
                            <div className="text-3xl font-bold mb-8">
                                Custom
                                <span className="text-sm font-normal text-neutral-500 block">
                                    tailored to your needs
                                </span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>Unlimited interactions</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>Unlimited agents</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>Custom integrations</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>24/7 dedicated support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check size={16} className="text-red-500" />
                                    <span>SLA guarantee</span>
                                </li>
                            </ul>
                            <Button variant="outline" className="w-full group">
                                <span className="flex items-center gap-2">
                                    Book a Meeting
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </div>
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
