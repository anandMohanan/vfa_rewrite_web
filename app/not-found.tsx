"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Circle, AlertTriangle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#f5f5f5] relative overflow-hidden flex items-center justify-center">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03]">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>


            {/* Technical Labels */}
            <div className="absolute left-8 top-28 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                <Circle size={4} className="text-red-500" />
                SYSTEM ERROR
            </div>
            <div className="absolute right-8 top-28 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                404_NOT_FOUND
                <Circle size={4} className="text-red-500" />
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    {/* Error Display */}
                    <div className="bg-black p-12 relative overflow-hidden group">
                        {/* Circuit Pattern Background */}
                        <div className="absolute inset-0 opacity-20">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path
                                        d="M 10 0 L 10 10 M 10 10 L 20 10"
                                        stroke="rgba(239, 68, 68, 0.5)"
                                        strokeWidth="0.5"
                                        fill="none"
                                    />
                                    <circle cx="10" cy="10" r="1" fill="rgba(239, 68, 68, 0.5)" />
                                </pattern>
                                <rect x="0" y="0" width="100" height="100" fill="url(#circuit)" />
                            </svg>
                        </div>



                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-8">
                                <AlertTriangle size={64} className="text-red-500" />
                            </div>

                            <div className="text-center">
                                <div className="text-red-500 text-sm tracking-[0.2em] mb-4">
                                    ERROR CODE: 404
                                </div>
                                <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
                                    PAGE NOT FOUND
                                </h1>
                                <p className="text-neutral-400 mb-8">
                                    The requested resource could not be located on this server.
                                    <br />
                                    Please verify the URL or navigate back to the homepage.
                                </p>

                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 hover:bg-red-500 hover:text-white transition-colors group"
                                >
                                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                    RETURN HOME
                                </Link>
                            </div>
                        </div>


                        {/* Animated Corner Dots */}
                        <motion.div
                            animate={{
                                opacity: [0.3, 0.7],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                            className="absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full"
                        />
                    </div>

                    {/* Technical Coordinates */}
                    <div className="mt-8 flex justify-between text-xs tracking-[0.2em] text-neutral-400">
                        <div>LAT: 404.000</div>
                        <div>LONG: -ERROR.000</div>
                    </div>
                </motion.div>
            </div>


            <style jsx>{`
        @keyframes fall {
          from { transform: translateY(-100%); }
          to { transform: translateY(100vh); }
        }
      `}</style>
        </div>
    );
}
