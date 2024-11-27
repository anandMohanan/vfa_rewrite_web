"use client";

import { motion } from "framer-motion";
import { Clock, MessageCircle, Wand2 } from "lucide-react";

import CustomerCallFlow from "../public/flow-6.json"
import CustomerChatFlow from "../public/customerchat.json"
import { LottieAnimation } from "./lottie";

const ChatBubble = () => (
    <div className="bg-black rounded-lg p-6 text-white relative">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-neutral-800 rounded-full" />
            <div className="text-sm">Hello I Wanna Ask Something</div>
        </div>
        <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 bg-neutral-800 rounded-full" />
            <div className="text-sm">Sure Things What Do You Want To Ask?</div>
        </div>
        <div className="text-xs text-neutral-400">Replied In 0.5 Secs</div>
        <div className="absolute -bottom-4 right-8 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <Wand2 size={16} className="text-white" />
        </div>
    </div>
);

export const Features = () => {
    return (
        <section id="features" className="py-36 bg-[#f5f5f5] text-white relative overflow-hidden ">
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03] pointer-events-none ">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:text-4xl text-xl font-bold text-center mb-16 text-primary">
                Your 24/7 AI Agents
            </motion.h3>
            {/* Decorative Elements */}
            <div className="container mx-auto px-4 relative flex flex-col gap-24">
                <div className="grid md:grid-cols-2 gap-16 items-center ">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-sm text-neutral-400 tracking-[0.2em] mb-4">
                            CUSTOMER SUPPORT
                        </div>
                        <h2 className="text-5xl font-bold mb-6 text-primary">
                            Instant Support,<br />
                            No <span className="text-red-500">Wait</span> Times
                        </h2>
                        <p className="text-neutral-400 mb-8">
                            Long wait times? Missed calls? Not on our watch.
                            VoiceFirst Agents ensures every customer feels heard
                            and helped, right when they need it.
                        </p>
                        <button className="bg-black text-white px-8 py-3 hover:bg-red-500 transition-colors flex items-center gap-2 group">
                            <Clock size={20} />
                            Customer First
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >

                        <LottieAnimation ani={CustomerCallFlow} className="h-96" />
                    </motion.div>
                </div>
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >

                        <LottieAnimation ani={CustomerChatFlow} className="h-96" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-sm text-neutral-400 tracking-[0.2em] mb-4">
                            AGENT DRIVEN
                        </div>
                        <h2 className="text-5xl font-bold mb-6 text-primary">
                            Accelerate Sales <br />
                            <span className="text-red-500">Sales</span> with proactive outreach
                        </h2>
                        <p className="text-neutral-400 mb-8">
                            Proactively engage and follow up on leads, driving sales with timely and relevant conversations initiated by our AI.
                        </p>
                        <button className="bg-black text-white px-8 py-3 hover:bg-red-500 transition-colors flex items-center gap-2 group">
                            <Clock size={20} />
                            Increase your sales
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
