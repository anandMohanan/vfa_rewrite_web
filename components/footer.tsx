"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const FooterSection = () => {
    return (
        <footer id="footer" className="bg-black text-white relative font-[family-name:var(--font-geist-sans)]">
            {/* Top border with technical markings */}
            <div className="w-full h-[2px] bg-neutral-800 relative">
                <div className="absolute left-4 top-0 w-[1px] h-4 bg-neutral-800"></div>
                <div className="absolute right-4 top-0 w-[1px] h-4 bg-neutral-800"></div>
            </div>

            <div className="container mx-auto px-4 py-12 relative">
                {/* Left border markings */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-neutral-800">
                    <div className="absolute left-0 top-4 w-2 h-[1px] bg-neutral-800"></div>
                    <div className="absolute left-0 bottom-4 w-2 h-[1px] bg-neutral-800"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-lg md:text-2xl font-bold mb-8 leading-none tracking-tighter">
                                VAUTOMATE
                            </h3>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h3
                            className={cn(
                                "text-lg font-bold text-white border-b border-neutral-800 pb-2",
                            )}
                        >
                            Company
                        </h3>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">&#9642;</span>
                                <span className="opacity-60">
                                    Rte de Chavannes 13, 1007, Switzerland
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">&#9642;</span>
                                <span className="opacity-60">
                                    8 The Green, Ste A, Dover, DE 19901
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right border markings */}
                <div className="absolute right-0 top-0 h-full w-[2px] bg-neutral-800">
                    <div className="absolute right-0 top-4 w-2 h-[1px] bg-neutral-800"></div>
                    <div className="absolute right-0 bottom-4 w-2 h-[1px] bg-neutral-800"></div>
                </div>
            </div>

            {/* Bottom border with technical markings */}
            <div className="w-full h-[2px] bg-neutral-800 relative">
                <div className="absolute left-4 bottom-0 w-[1px] h-4 bg-neutral-800"></div>
                <div className="absolute right-4 bottom-0 w-[1px] h-4 bg-neutral-800"></div>
            </div>
        </footer>
    );
};

