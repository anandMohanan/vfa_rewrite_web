"use client";

import { motion } from "framer-motion";
import { GitPullRequest, MessageSquare, Check } from "lucide-react";
import { TechLabel } from "./ui/tech-label";

const steps = [
    {
        icon: <GitPullRequest className="w-6 h-6" />,
        title: "Get PR Data",
        description: "Fetch pull request information automatically"
    },
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "Handle Comments",
        description: "Manage PR comments with natural language"
    },
    {
        icon: <Check className="w-6 h-6" />,
        title: "Merge PR",
        description: "Automated merging when approved"
    }
];

export function UseCasesSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
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
            <TechLabel text="USE_CASE_EXAMPLE" position="left" className="top-8" />
            <TechLabel text="USECASE.TSX" position="right" className="top-8" />

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-8 text-center text-white">
                        Git PR Review Made Easy
                    </h2>
                    <p className="text-neutral-400 text-lg mb-12 text-center">
                        Imagine building an agentic application for Git PR review. Our Git agent simplifies all steps into natural language commands.
                    </p>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="flex items-start gap-6 bg-black p-6 border border-neutral-200 relative group hover:border-red-500 transition-all"
                            >
                                <div className="text-red-500 p-3 bg-red-50 rounded-lg">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                                    <p className="text-neutral-200">{step.description}</p>
                                </div>

                                {/* Technical Decoration */}
                                <div className="absolute -top-12 -right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute top-8 right-0 w-full h-px bg-red-500" />
                                    <div className="absolute top-8 right-0 h-full w-px bg-red-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
