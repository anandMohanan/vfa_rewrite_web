"use client";

import { motion } from "framer-motion";
import { ChevronRight, Circle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { TechLabel } from "./ui/tech-label";
import Link from "next/link";
import posthog from "posthog-js";

const faqs = [
    {
        question: "How does VAutomate simplify API integration?",
        answer: "VAutomate provides instantiated API agents that act as wrappers, hiding the complexity of flow and dependency of API requests."
    },
    {
        question: "Can I use VAutomate with my existing tools?",
        answer: "Yes, VAutomate offers agents for popular tools like Slack and Jira, and can be easily connected to your application."
    },
    {
        question: "Is VAutomate suitable for complex applications?",
        answer: "Absolutely. VAutomate is designed to help developers build complex agentic applications with ease."
    },
    {
        question: "How secure is VAutomate?",
        answer: "Security is a top priority for us. VAutomate is built with robust security measures to ensure your data and operations are safe."
    },
    {
        question: "What kind of support can I expect during the early release?",
        answer: "During the early release, you will have access to dedicated support to help you integrate and use VAutomate effectively."
    }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-[#f5f5f5] relative overflow-hidden" id="faq">
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


            <TechLabel text="KNOWLEDGE BASE" position="left" className="top-8 hidden md:flex" />
            <TechLabel text="FAQ_SECTION.TSX" position="right" className="top-8" />

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-black">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
                        Everything you need to know about VAutomate and how it can transform your development workflow.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto relative"
                >
                    {/* Technical Border */}
                    <div className="absolute -top-4 -left-4 w-8 h-8">
                        <div className="absolute top-0 left-0 w-full h-px bg-white" />
                        <div className="absolute top-0 left-0 h-full w-px bg-white" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8">
                        <div className="absolute bottom-0 right-0 w-full h-px bg-white" />
                        <div className="absolute bottom-0 right-0 h-full w-px bg-white" />
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-neutral-200 bg-white px-6 data-[state=open]:bg-neutral-50 transition-colors"
                            >
                                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                                    <span className="group-hover:text-red-500 transition-colors">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-neutral-600 pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
                <div className="flex gap-4 items-center justify-center mt-12">
                    <Link href="#contact"
                        onClick={() => {
                            posthog.capture("clicked FAQ CTA")
                        }}
                        className={'transition-colors text-white flex items-center gap-2 group bg-black px-8 py-3 hover:bg-red-500'}>
                        Still Curious? See How It Works!
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </div>

                {/* Technical Coordinates */}
                <div className="mt-16 flex justify-between text-xs tracking-[0.2em] text-neutral-400 max-w-3xl mx-auto">
                    <div>LAT: 42.3601° N</div>
                    <div>LONG: 71.0589° W</div>
                </div>
            </div>
        </section>
    );
}
