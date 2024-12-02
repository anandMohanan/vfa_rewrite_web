"use client";

import { motion } from "framer-motion";
import { Circle, Cpu, Shield, Zap, Network, Brain, Sparkles, ChevronRight } from "lucide-react";
import { TechLabel } from "./ui/tech-label";
import Link from "next/link";
import posthog from "posthog-js";

const features = [
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "Simplified API Integration",
        description: "Hide the complexity of flow and dependency of API requests with our instantiated API agents.",
        techSpec: "CORE_EFFICIENCY: 99.9%"
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Effortless Development",
        description: "Build complex agentic applications with ease using our advanced development framework.",
        techSpec: "PROCESSING_SPEED: 0.001ms"
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "Natural Language Conversations",
        description: "Create natural language conversations over your internal APIs with advanced NLP.",
        techSpec: "AI_ACCURACY: 98.7%"
    },
    {
        icon: <Network className="w-6 h-6" />,
        title: "Scalable and Flexible",
        description: "Easily scale your applications and adapt to changing requirements with our dynamic architecture.",
        techSpec: "SCALE_FACTOR: ∞"
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Secure and Reliable",
        description: "Built with security and reliability in mind to ensure your data and operations are safe.",
        techSpec: "SECURITY_LEVEL: QUANTUM"
    },
    {

        icon: <Sparkles className="w-8 h-8" />,
        title: "100+ Ready-to-Use Agents",
        description: "No need to understand or implement APIs. Just configure and go.",
        techSpec: "AGENT_COUNT: 100+"
    }
];

export function KeyFeatureComponent() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden" id="features">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03]">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>

            <TechLabel text="SYSTEM_CAPABILITIES" position="left" className="top-8 hidden md:flex" />
            <TechLabel text="SOLUTION_SECTION.TSX" position="right" className="top-8" />

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "tween" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-white">
                        Our Solution
                    </h2>
                    <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                        Stop spending weeks perfecting LLM tool calls. Our plug-and-play agents integrate with over 100+ SaaS tools in just 30 minutes, letting you focus on what matters most - your core business logic.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative bg-white p-6 hover:bg-neutral-200 transition-colors group"
                        >
                            <div className="absolute inset-0 border border-neutral-800 opacity-50" />
                            <div className="relative">
                                <div className="text-red-500 mb-4 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-black">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-600 text-sm mb-4">
                                    {feature.description}
                                </p>
                                <div className="text-[10px] tracking-[0.2em] text-neutral-500 font-mono group-hover:text-red-500 transition-colors">
                                    {feature.techSpec}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex gap-4 items-center justify-center mt-12">
                    <Link href="#contact"
                        onClick={() => {
                            posthog.capture("clicked FEATURES CTA")
                        }}
                        className={'transition-colors text-black flex items-center gap-2 group bg-[#f5f5f5] px-8 py-3 hover:bg-red-500'}>
                        Experience Seamless API Integration!
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
