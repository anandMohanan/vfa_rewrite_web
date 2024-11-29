"use client";

import { motion } from "framer-motion";
import { ChevronRight, Circle } from 'lucide-react';
import { useState } from "react";
import { Waitlist } from "./waitlist";
import Head from 'next/head';
import TechIcons from "./tech-icons";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"


const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};



export default function Hero() {
    const [hoverColor, setHoverColor] = useState(
        Array(7).fill('currentColor')
    );

    const handleMouseEnter = (index) => {
        const newColors = [...hoverColor];
        newColors[index] = generateRandomColor();
        setHoverColor(newColors);
    };

    const handleMouseLeave = (index) => {
        const newColors = [...hoverColor];
        newColors[index] = 'currentColor';
        setHoverColor(newColors);
    };

    return (
        <>
            <Head>
                <title>Automate with AI Agents | Seamless Integration for Your Systems</title>
                <meta name="description" content="Create custom API AI agents that seamlessly integrate with your existing systems. Join our waitlist to automate and amplify your efficiency." />
                <meta name="keywords" content="AI agents, automation, API integration, efficiency" />
            </Head>
            <section className="lg:h-screen pt-32 pb-24 relative bg-[#f5f5f5]" aria-label="Hero section">
                {/* Technical Grid Background */}
                <div  className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-[0.03] pointer-events-none" aria-hidden="true">
                    {[...Array(1600)].map((_, i) => (
                        <div key={i} className="border-[0.5px] border-black" />
                    ))}
                </div>

                {/* Decorative Lines */}
                <div className="absolute top-0 left-0 w-32 h-32" aria-hidden="true">
                    <div className="absolute top-0 left-0 w-full h-px bg-black" />
                    <div className="absolute top-0 left-0 h-full w-px bg-black" />
                </div>
                <div className="absolute top-0 right-0 w-32 h-32" aria-hidden="true">
                    <div className="absolute top-0 right-0 w-full h-px bg-black" />
                    <div className="absolute top-0 right-0 h-full w-px bg-black" />
                </div>

                {/* Technical Labels */}
                <div className="absolute left-8 top-40 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400" aria-hidden="true">
                    <Circle size={4} className="text-red-500" />
                    EFFICIENCY AMPLIFIED
                </div>
                <div className="absolute right-8 top-40 flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400" aria-hidden="true">
                    HERO.TSX
                    <Circle size={4} className="text-red-500" />
                </div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section */}
                        <header className="flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500 mb-12">
                            <span className="text-red-500" aria-hidden="true">*</span>
                            <span>
                                SIMPLIFY AGENTIC APPLICATION DEVELOPMENT

                            </span>
                            <span className="text-red-500" aria-hidden="true">*</span>
                        </header>

                        <div className="grid lg:grid-cols-2 gap-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <svg aria-hidden="true" className="" >
                                    <rect
                                        className="HeroDev_rect__Tt9eh"
                                        x="162"
                                        y="98"
                                        width="11"
                                        height="19"
                                        fill={hoverColor[0]}
                                        style={{ transform: 'translateY(0px)' }}
                                        onMouseEnter={() => handleMouseEnter(0)}
                                        onMouseLeave={() => handleMouseLeave(0)}
                                    />
                                    <rect
                                        className="HeroDev_rect__Tt9eh"
                                        x="153"
                                        y="80"
                                        width="11"
                                        height="19"
                                        fill={hoverColor[1]}
                                        style={{ transform: 'translateY(0px)' }}
                                        onMouseEnter={() => handleMouseEnter(1)}
                                        onMouseLeave={() => handleMouseLeave(1)}
                                    />
                                    <rect
                                        className="HeroDev_rect__Tt9eh"
                                        x="171"
                                        y="80"
                                        width="11"
                                        height="19"
                                        fill={hoverColor[2]}
                                        style={{ transform: 'translateY(0px)' }}
                                        onMouseEnter={() => handleMouseEnter(2)}
                                        onMouseLeave={() => handleMouseLeave(2)}
                                    />
                                    <rect
                                        className="HeroDev_rect__Tt9eh"
                                        x="144"
                                        y="62"
                                        width="11"
                                        height="19"
                                        fill={hoverColor[3]}
                                        style={{ transform: 'translateY(0px)' }}
                                        onMouseEnter={() => handleMouseEnter(3)}
                                        onMouseLeave={() => handleMouseLeave(3)}
                                    />
                                    <rect
                                        className="HeroDev_rect__Tt9eh"
                                        x="180"
                                        y="62"
                                        width="11"
                                        height="19"
                                        fill={hoverColor[4]}
                                        style={{ transform: 'translateY(0px)' }}
                                        onMouseEnter={() => handleMouseEnter(4)}
                                        onMouseLeave={() => handleMouseLeave(4)}
                                    />
                                    <rect
                                        className="HeroDev_rect__Tt9eh"
                                        x="135"
                                        y="35"
                                        width="11"
                                        height="28"
                                        fill={hoverColor[5]}
                                        style={{ transform: 'translateY(0px)' }}
                                        onMouseEnter={() => handleMouseEnter(5)}
                                        onMouseLeave={() => handleMouseLeave(5)}
                                    />
                                    <rect
                                        className="HeroDev_rect__Tt9eh"
                                        x="189"
                                        y="35"
                                        width="11"
                                        height="28"
                                        fill={hoverColor[6]}
                                        style={{ transform: 'translateY(0px)' }}
                                        onMouseEnter={() => handleMouseEnter(6)}
                                        onMouseLeave={() => handleMouseLeave(6)}
                                    />
                                </svg>

                                <h1 className="text-5xl md:text-2xl font-bold mb-8 leading-none tracking-tighter">
                                    <br />Your Gateway to Intelligent API Agents
                                </h1>
                                <p className="md:text-xl text-lg text-neutral-600 mb-8 max-w-xl">
                                    Streamline your agentic applications with our plug-and-play agents. Integrate 100+ SaaS tools in minutes.
                                </p>
                                <div className="text-sm text-neutral-400 mb-8 font-mono" aria-label="Tagline">
                                    /an agentic system/
                                </div>
                                <div className="flex gap-4">
                                    <Link href="#contact" className={'transition-colors flex items-center gap-2 group bg-black text-white px-8 py-3 hover:bg-red-500'}>
                                        JOIN THE WAITLIST
                                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                {/* Technical Imagery */}
                                <div className="aspect-square bg-black rounded-lg relative overflow-hidden group">
                                    {/* Animated Circuit Pattern */}
                                    <DotLottieReact
                                        src="/hero-flow.lottie"
                                        loop={true}
                                        autoplay={true}
                                        className="absolute inset-0 p-4"
                                    />
                                    <TechIcons />
                                    <div className="absolute bottom-0 right-0 p-4 text-xs tracking-[0.2em] text-red-500">
                                        HUMAN / EXPRESSION / INTEGRATION
                                    </div>
                                </div>

                                {/* Corner Decorations */}
                                <div className="absolute -bottom-4 -right-4 w-32 h-32" aria-hidden="true">
                                    <div className="absolute bottom-0 right-0 w-full h-px bg-black" />
                                    <div className="absolute bottom-0 right-0 h-full w-px bg-black" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </section >
        </>
    );
}


