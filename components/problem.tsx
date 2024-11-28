"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Circle } from "lucide-react";
import { TechLabel } from "./ui/tech-label";

export function ProblemSection() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
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
            <TechLabel text="PROBLEM_STATEMENT" position="left" className="top-8" />
            <TechLabel text="PROBLEM.TSX" position="right" className="top-8" />

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="flex justify-center mb-8">
                        <AlertTriangle className="text-red-500 w-16 h-16" />
                    </div>
                    <h2 className="text-4xl font-bold mb-8">
                        Struggling with Complex API Integrations?
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed mb-12">
                        Developers often face significant challenges when integrating agents with SaaS systems like Jira, Git, Slack, CRM, ATS, and more. The complexity of APIs and endpoint dependencies can be overwhelming, making it difficult to make them work in efficient workflows or agentic applications.
                    </p>

                    {/* Technical Decoration */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32">
                        <div className="absolute bottom-0 right-0 w-full h-px bg-red-500/20" />
                        <div className="absolute bottom-0 right-0 h-full w-px bg-red-500/20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
