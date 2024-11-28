"use client";

import { motion } from "framer-motion";
import { Circle, Sparkles, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { email, name, message });
    };

    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden">
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

            {/* Technical Labels */}
            <div className="absolute left-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                <Circle size={4} className="text-red-500" />
                COMM_INTERFACE
            </div>
            <div className="absolute right-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                CONTACT.TSX
                <Circle size={4} className="text-red-500" />
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center justify-center gap-2 mb-4"
                        >
                            <Sparkles className="w-5 h-5 text-red-500" />
                            <span className="text-xs tracking-[0.2em] text-neutral-400">
                                BETA_ACCESS::AVAILABLE
                            </span>
                        </motion.div>
                        <h2 className="text-4xl font-bold mb-4 tracking-tight text-white">
                            Join the Early Release
                        </h2>
                        <p className="text-neutral-200">
                            Be among the first to experience the power of AgentRelay and shape the future of development.
                        </p>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                className="w-full p-4 border border-neutral-300 focus:border-black outline-none transition-colors"
                                required
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="w-full p-4 border border-neutral-300 focus:border-black outline-none transition-colors"
                                required
                            />
                        </div>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell us about your use case"
                            rows={6}
                            className="w-full p-4 border border-neutral-300 focus:border-black outline-none transition-colors"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-white text-black px-8 py-4 hover:bg-red-500 transition-colors flex items-center gap-2 justify-center"
                        >
                            <span>GET EARLY ACCESS</span>
                            <Send className="w-4 h-4" />
                        </button>
                    </motion.form>

                    {/* System Status */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                            <Circle size={4} className="text-green-500" />
                            COMM_SYSTEM::READY
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
