"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"


export const PrivacyContent = () => {
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
                        <h1 className="text-4xl font-bold mb-8 tracking-tight">Privacy Policy</h1>

                        <div className="space-y-6 text-neutral-600">
                            <p>Last updated: 2024-28-11</p>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-black">1. Information Collection</h2>
                                <p>We collect information that you provide directly to us when using our services.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-black">2. Use of Information</h2>
                                <p>We use the collected information to provide and improve our services.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-black">3. Information Sharing</h2>
                                <p>We do not sell or share your personal information with third parties.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-black">4. Security</h2>
                                <p>We implement appropriate security measures to protect your information.</p>
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
                        <div>DOCUMENT_ID: PRIV_2024</div>
                        <div>VERSION: 1.0.0</div>
                    </div>
                </motion.div>
            </div>
    )
}
