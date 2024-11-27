"use client";

import { motion } from "framer-motion";
import { Circle, Terminal, MessageSquare, BarChart3, Workflow } from "lucide-react";

const useCases = [
    {
        icon: <MessageSquare className="w-8 h-8" />,
        title: "Streamlined Communication Tools Integration",
        description: "Integrate communication tools like Slack effortlessly. Use our Slack Agent to send and receive messages, manage channels, and automate workflows without dealing with the Slack API complexities.",
        techId: "QUANTUM_NODE::A137-X"
    },
    {
        icon: <Terminal className="w-8 h-8" />,
        title: "Efficient Project Management",
        description: "Connect with project management tools like Jira using our Jira Agent. Create, update, and track issues directly from your application, simplifying project management and enhancing productivity.",
        techId: "NEURAL_LINK::B249-Y"
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Enhanced Customer Support",
        description: "Build a robust customer support system by integrating with various support tools. Use our agents to manage tickets, respond to customer queries, and automate support processes, providing a seamless experience for your users.",
        techId: "SYNTH_CORE::C364-Z"
    },
    {
        icon: <Workflow className="w-8 h-8" />,
        title: "Automated DevOps Workflows",
        description: "Automate your DevOps workflows by integrating with CI/CD tools. Use our agents to trigger builds, deploy applications, and monitor performance, reducing manual intervention and increasing efficiency.",
        techId: "MATRIX_HUB::D582-W"
    }
];

export default function UseCases() {
    return (
        <section id="use-case" className="py-24 bg-[#f5f5f5] relative overflow-hidden">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03]">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32">
                <div className="absolute top-0 left-0 w-full h-px bg-black" />
                <div className="absolute top-0 left-0 h-full w-px bg-black" />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="absolute bottom-0 right-0 w-full h-px bg-black" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-black" />
            </div>

            {/* Technical Labels */}
            <div className="absolute left-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                <Circle size={4} className="text-red-500" />
                IMPLEMENTATION SCENARIOS
            </div>
            <div className="absolute right-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                USE_CASES_SECTION.TSX
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
                        Implementation Scenarios
                    </h2>
                    <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
                        Discover how AgentRelay can transform your development workflow across various use cases.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative bg-white p-8 border border-neutral-200 group hover:bg-neutral-50 transition-all duration-300 hover:shadow-lg"
                        >
                            {/* Animated Border */}
                            <div
                                className="absolute inset-0 border border-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            />

                            {/* Technical Border */}
                            <div className="absolute -top-2 -left-2 w-4 h-4">
                                <div className="absolute top-0 left-0 w-full h-px bg-black" />
                                <div className="absolute top-0 left-0 h-full w-px bg-black" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-4 h-4">
                                <div className="absolute bottom-0 right-0 w-full h-px bg-black" />
                                <div className="absolute bottom-0 right-0 h-full w-px bg-black" />
                            </div>

                            <div
                                className="text-red-500 mb-4"
                            >
                                {useCase.icon}
                            </div>
                            <h3
                                className="text-xl font-semibold mb-3"
                            >
                                {useCase.title}
                            </h3>
                            <p className="text-neutral-600 mb-4 group-hover:text-black transition-colors">
                                {useCase.description}
                            </p>
                            <div className="text-xs tracking-[0.2em] text-neutral-400 font-mono group-hover:text-red-500 transition-colors">
                                {useCase.techId}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* System Status */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                        <Circle size={4} className="text-green-500" />
                        SYSTEM STATUS: OPERATIONAL
                    </div>
                </div>
            </div>
        </section>
    );
}
