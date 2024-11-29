"use client";

import { motion } from "framer-motion";
import { Circle, Cpu, Shield, Zap, Network, Brain, Sparkles } from "lucide-react";

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
        <section className="py-24 bg-[#f5f5f5] text-white relative overflow-hidden" id="features">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03]">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>

            {/* Technical Labels */}
            <div className="absolute left-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500">
                <Circle size={4} className="text-red-500" />
                SYSTEM_CAPABILITIES
            </div>
            <div className="absolute right-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500">
                SOLUTION_SECTION.TSX
                <Circle size={4} className="text-red-500" />
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "tween"}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-black">
                        Our Solution
                    </h2>
                    <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
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

                {/* Processing Status */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500">
                        <Circle size={4} className="text-green-800 animate-pulse" />
                        QUANTUM_PROCESSING_ACTIVE
                    </div>
                </div>
            </div>
        </section>
    );
}
