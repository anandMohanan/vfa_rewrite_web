"use client";

import { motion } from "framer-motion";
import { Rocket, Globe2, PieChart, Maximize, Fingerprint, Users } from "lucide-react";

const CapabilityCard = ({ icon: Icon, title, description, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className="bg-black  border border-red-500/10 p-6 rounded-lg hover:border-red-500/30 hover:shadow-lg transition-colors"
    >
        <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
            <Icon className="text-red-500" size={24} />
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm">{description}</p>
    </motion.div>
);

export default function AgentCapabilities() {
    const capabilities = [
        {
            icon: Rocket,
            title: "Super Fast",
            description: "No wait times for customer queries. Engage leads with zero delay"
        },
        {
            icon: Globe2,
            title: "Multi-Lingual Mastery",
            description: "Communicate in every customer's language"
        },
        {
            icon: PieChart,
            title: "Engagement Analytics",
            description: "Gain insights from every customer exchange, Make informed decisions swiftly"
        },
        {
            icon: Maximize,
            title: "Scaling Support",
            description: "Scale support with fluctuating customer volume. Consistent quality, regardless of demand"
        },
        {
            icon: Fingerprint,
            title: "Continuously Improving",
            description: "Leverage previous conversations to perfect the conversations"
        },
        {
            icon: Users,
            title: "Human Like Touch",
            description: "Engage customers with a warm, conversational tone, answering complex queries"
        }
    ];

    return (
        <section id="features" className="py-24 bg-[#f5f5f5] text-white relative overflow-hidden font-[family-name:var(--font-geist-sans)]">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f5f5f5]" />
            </div>
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03] pointer-events-none ">
                {[...Array(1600)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="text-sm text-red-500 tracking-[0.2em] mb-4">
                        AGENT'S CAPABILITY
                    </div>
                    <h2 className="text-5xl text-primary font-bold mb-6">
                        Talk to Your Customers Right Away
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((capability, index) => (
                        <CapabilityCard
                            key={index}
                            icon={capability.icon}
                            title={capability.title}
                            description={capability.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
