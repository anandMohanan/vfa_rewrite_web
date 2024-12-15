"use client";

import { motion } from "framer-motion";
import { CircleDot, MapPin, Mail, Phone, Circle } from 'lucide-react';
import Link from "next/link";

const locations = [
    {
        city: "Switzerland",
        address: "Rte de Chavannes 13, 1007",
        coordinates: "46.518859690342396, 6.600339839788617"
    },
    {
        city: "United States",
        address: "8 The Green, Ste A, Dover, DE 19901",
        coordinates: "39.15704099967653, -75.5243439421479"
    }
];

export const FooterSection = () => {
    return (
        <footer className="bg-black text-white relative overflow-hidden">
            {/* Technical Labels */}
            <div className="absolute left-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                <Circle size={4} className="text-red-500" />
                FOOTER_SECTION
            </div>
            <div className="absolute right-8 top-8 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400">
                FOOTER.TSX
                <Circle size={4} className="text-red-500" />
            </div>

            <div className="container mx-auto px-4 py-28">
                <div className="grid md:grid-cols-3 gap-16">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <CircleDot className="text-red-500" />
                            <span className="text-2xl font-bold tracking-[0.2em]">VAUTOMATE</span>
                        </div>
                        <p className="text-neutral-400 mb-6">
                            Revolutionizing API integration with intelligent agents for the next generation of software development.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="mailto:ashishbindal@voicefirstai.com" className="text-neutral-400 hover:text-red-500 transition-colors">
                                <Mail size={20} />
                            </Link>
                            <Link href="tel:+41774283103" className="text-neutral-400 hover:text-red-500 transition-colors">
                                <Phone size={20} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Locations */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-2 grid md:grid-cols-2 gap-8"
                    >
                        {locations.map((location, index) => (
                            <div key={index} className="relative group">
                                <div className="mb-4 flex items-center gap-2">
                                    <MapPin className="text-red-500" size={20} />
                                    <span className="font-bold">{location.city}</span>
                                </div>
                                <p className="text-neutral-400 mb-2">{location.address}</p>
                                <div className="text-xs tracking-[0.2em] text-neutral-500">
                                    {location.coordinates}
                                </div>

                                {/* Technical Decoration */}
                                <div className="absolute -bottom-4 -right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-0 right-0 w-full h-px bg-red-500" />
                                    <div className="absolute bottom-0 right-0 h-full w-px bg-red-500" />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-neutral-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
                        <div>© 2024 VAUTOMATE. All rights reserved.</div>
                        <div className="flex gap-8">
                            <Link href="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-red-500 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Large Company Name with Glass Gradient Effect */}
            <div className="relative w-full overflow-hidden h-32 mt-8">
                <div 
                    className="absolute inset-0 flex items-center justify-center text-[150px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-red-500/30 via-white/10 to-white/0"
                    style={{
                        transform: 'translateY(20%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    VAUTOMATE
                </div>
            </div>
        </footer>
    );
};


