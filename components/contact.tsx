"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="md:py-64 py-24 bg-neutral-100 relative font-[family-name:var(--font-geist-sans)]">
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03] pointer-events-none ">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-8 tracking-tight">
                        Get In Touch
                    </h2>
                    <p className="text-neutral-600 mb-12">
                        Ready to transform your business with advanced voice technology? Contact us today.
                    </p>

                    <form className="space-y-6 text-left z-40">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 border border-neutral-300 focus:border-black outline-none transition-colors z-40"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-neutral-300 focus:border-black outline-none transition-colors z-40"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            rows={6}
                            className="w-full p-3 border border-neutral-300 focus:border-black outline-none transition-colors z-40"
                        />
                        <button className="bg-black text-white px-8 py-3 hover:bg-red-500 transition-colors w-full md:w-auto">
                            SEND MESSAGE
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
