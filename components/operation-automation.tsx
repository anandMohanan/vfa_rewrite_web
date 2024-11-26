"use client";

import { motion } from "framer-motion";
import { ChevronRight, User } from "lucide-react";
import OperationAutomationJson from "../public/operation-automation-flow.json";
import { LottieAnimation } from "./lottie";

const NetworkNode = ({ delay = 0 }) => (
    <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay }}
        className="w-16 h-16 rounded-lg bg-black border border-red-500/20 flex items-center justify-center relative"
    >
        <User className="text-red-500" size={24} />
    </motion.div>
);

const NetworkLine = ({ className = "" }) => (
    <div className={`absolute bg-gradient-to-r from-red-500/20 to-red-500/40 h-px ${className}`} />
);

export default function OperationAutomation() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03] pointer-events-none ">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white" />
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1 bg-red-500/10 rounded-full text-red-500 text-sm mb-4">
                        Operation Automation
                    </div>
                    <h2 className="text-5xl font-bold mb-6 text-white">
                        Automate Workflows For<br />
                        <span className="text-red-500">Seamless</span> Collaboration
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Enhance team communication and process flow, as our
                        agents smoothly integrates with and automates your
                        operational communications.
                    </p>
                </motion.div>

                <div className="relative h-[400px] max-w-3xl mx-auto bg-black p-5 rounded-lg">
                    <LottieAnimation ani={OperationAutomationJson} className="h-full" />
                </div>

                <div className="text-center mt-8 m-auto">
                    <button className="flex flex-row items-center m-auto bg-black border border-red-500 text-white px-8 py-3 rounded-sm hover:bg-red-500 transition-colors group">
                        Experience the efficiency
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
