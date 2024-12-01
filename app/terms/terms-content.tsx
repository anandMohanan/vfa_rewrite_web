"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const TermsContent = () => {
    return (
        <div className="container mx-auto px-4 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm mb-8 hover:text-red-500 transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="bg-white border border-neutral-200 p-8 relative">
                    <h1 className="text-4xl font-bold mb-8 tracking-tight">Terms of Service</h1>

                    <div className="space-y-6 text-neutral-600">
                        <p>Last updated: 2024-28-11</p>

                        <section>
                            <h2 className="text-xl font-bold mb-4 text-black">1. Acceptance of Terms</h2>
                            <p>By accessing our services, you agree to be bound by these terms.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 text-black">2. Use License</h2>
                            <p>Permission is granted to temporarily access the materials on our website.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 text-black">3. Disclaimer</h2>
                            <p>The materials on our website are provided on an 'as is' basis.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 text-black">4. Limitations</h2>
                            <p>We shall not be held liable for any damages arising from the use of our services.</p>
                        </section>
                    </div>

                    {/* Technical Decoration */}
                    <div className="absolute -bottom-4 -right-4 w-8 h-8">
                        <div className="absolute bottom-0 right-0 w-full h-px bg-red-500" />
                        <div className="absolute bottom-0 right-0 h-full w-px bg-red-500" />
                    </div>
                </div>

                {/* Technical Coordinates */}
                <div className="mt-8 flex justify-between text-xs tracking-[0.2em] text-neutral-400">
                    <div>DOCUMENT_ID: 2024</div>
                    <div>VERSION: 1.0.0</div>
                </div>
            </motion.div>
        </div>
    )
}
