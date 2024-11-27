"use client";

import { motion } from "framer-motion";
import { Circle, Cpu, Shield, Zap, Network, Brain } from "lucide-react";

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
    }
];

export default function KeyFeatures() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
                    {[...Array(400)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.1 }}
                            animate={{ opacity: Math.random() }}
                            transition={{ duration: 2, repeat: 1 }}
                            className="border-[0.5px] border-white"
                        />
                    ))}
                </div>
            </div>

            {/* Technical Labels */}
            <div className="absolute left-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500">
                <Circle size={4} className="text-red-500" />
                SYSTEM_CAPABILITIES
            </div>
            <div className="absolute right-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500">
                FEATURES_SECTION.TSX
                <Circle size={4} className="text-red-500" />
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight">
                        Core System Features
                    </h2>
                    <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                        Advanced capabilities engineered for the next generation of development
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative bg-neutral-900 p-6 hover:bg-neutral-800 transition-colors"
                        >
                            <div className="absolute inset-0 border border-neutral-800 opacity-50" />
                            <div className="relative">
                                <div className="text-red-500 mb-4 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-400 text-sm mb-4">
                                    {feature.description}
                                </p>
                                <div className="text-[10px] tracking-[0.2em] text-neutral-500 font-mono">
                                    {feature.techSpec}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Processing Status */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500">
                        <Circle size={4} className="text-blue-500 animate-pulse" />
                        QUANTUM_PROCESSING_ACTIVE
                    </div>
                </div>
            </div>
        </section>
    );
}
