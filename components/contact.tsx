"use client";

import { motion } from "framer-motion";
import { Circle, Sparkles, Send, CheckCircle2, Loader } from "lucide-react";
import { useState } from "react";
import { TechLabel } from "./ui/tech-label";
import { useFormspark } from "@formspark/use-formspark";
import Botpoison from "@botpoison/browser";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [selectedApi, setSelectedApi] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);


    const [submit, submitting] = useFormspark({
        formId: process.env.NEXT_PUBLIC_FORM_SPARK_ID!,
    });
    const botpoison = new Botpoison({
        publicKey: process.env.NEXT_PUBLIC_BOT_POISON_ID!,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { solution } = await botpoison.challenge();
            await submit({ email, name, message, selectedApi, _botpoison: solution });
            setIsSubmitted(true);
            setLoading(false);
        } catch (e) {
        }
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

            <TechLabel text="COMM_INTERFACE" position="left" className="top-8 hidden md:flex" />
            <TechLabel text="CONTACT.TSX" position="right" className="top-8" />


            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    {!isSubmitted ? (
                        <>
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
                                <Select value={selectedApi} onValueChange={(value) => setSelectedApi(value)}>
                                    <SelectTrigger className="bg-white p-4 border border-neutral-300 focus:border-black outline-none transition-colors">
                                        <SelectValue placeholder="Which API you would like to integrate in your agentic application?" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="github">GitHub</SelectItem>
                                        <SelectItem value="jira">Jira</SelectItem>
                                        <SelectItem value="slack">Slack</SelectItem>
                                        <SelectItem value="trello">Trello</SelectItem>
                                        <SelectItem value="notion">Notion</SelectItem>
                                        <SelectItem value="google-sheets">Google Sheets</SelectItem>
                                        <SelectItem value="salesforce">Salesforce</SelectItem>
                                        <SelectItem value="zapier">Zapier</SelectItem>
                                        <SelectItem value="asana">Asana</SelectItem>
                                        <SelectItem value="shopify">Shopify</SelectItem>
                                        <SelectItem value="stripe">Stripe</SelectItem>
                                        <SelectItem value="zendesk">Zendesk</SelectItem>
                                        <SelectItem value="hubspot">HubSpot</SelectItem>
                                        <SelectItem value="monday">Monday</SelectItem>
                                        <SelectItem value="intercom">Intercom</SelectItem>
                                    </SelectContent>
                                </Select>
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
                                    disabled={loading}
                                >
                                    {loading && <Loader className="w-4 h-4 animate-spin" />}       <span>BOOK THE DEMO!</span>
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
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="mb-8 flex justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                >
                                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                                </motion.div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">
                                Thank You for Joining!
                            </h3>
                            <p className="text-neutral-300 mb-8">
                                We're excited to have you on board. We'll be in touch soon with more
                                information about the early release.
                            </p>
                            <div className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
                                <p className="text-sm text-neutral-400">
                                    <span className="text-green-500 font-mono">STATUS::</span> Your request has been
                                    successfully processed.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
