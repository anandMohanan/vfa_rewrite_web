"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "CAPTURE",
        description: "High-fidelity voice capture with noise reduction"
    },
    {
        number: "02",
        title: "PROCESS",
        description: "AI-powered analysis and understanding"
    },
    {
        number: "03",
        title: "LEARN",
        description: "Continuous learning and adaptation"
    },
    {
        number: "04",
        title: "EXECUTE",
        description: "Intelligent action and response"
    }
];

export default function Process() {
    return (
        <section id="process" className="md:py-64 py-32 bg-black text-white relative font-[family-name:var(--font-geist-sans)]">
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03] pointer-events-none ">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white" />
                ))}
            </div>
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-16 tracking-tight"
                >
                    Our Process
                </motion.h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="text-6xl font-bold text-red-500 mb-4 opacity-50">
                                {step.number}
                            </div>
                            <h3 className="text-sm font-bold mb-4 tracking-[0.2em]">
                                {step.title}
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                {step.description}
                            </p>
                            <div className="absolute h-px w-full bg-neutral-800 top-16 hidden md:block">
                                {index !== steps.length - 1 && (
                                    <div className="absolute right-0 w-2 h-2 bg-red-500 rounded-full -translate-y-1/2" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
