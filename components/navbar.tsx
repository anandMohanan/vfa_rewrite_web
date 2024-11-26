"use client";

import { ChevronRight, CircleDot, Menu } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { motion } from 'framer-motion';
import { Waitlist } from './waitlist';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full bg-[#f5f5f5] z-50 font-[family-name:var(--font-geist-sans)]">
            <div className="w-full h-[2px] bg-neutral-200 relative">
                <div className="absolute left-4 top-0 w-[1px] h-4 bg-neutral-200"></div>
                <div className="absolute right-4 top-0 w-[1px] h-4 bg-neutral-200"></div>
            </div>

            <div className="container mx-auto px-4 flex justify-between items-center h-16 relative ">
                <div className="absolute left-0 top-0 h-full w-[2px] bg-neutral-200">
                    <div className="absolute left-0 top-4 w-2 h-[1px] bg-neutral-200"></div>
                    <div className="absolute left-0 bottom-4 w-2 h-[1px] bg-neutral-200"></div>
                </div>

                {/* Logo section */}
                <div className="flex items-center gap-8">
                    <div className="text-xl font-mono tracking-[0.2em] flex items-center gap-2">
                        <CircleDot className="text-red-500" size={16} />
                        Va
                    </div>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <Menu className="text-neutral-800" />
                </button>

                <nav className="md:flex items-center space-x-8 font-mono text-xs tracking-[0.2em] hidden"> {/* Updated to always be visible on desktop */}
                    {[""].map((item, index) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="group relative hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            <span className="relative z-10">
                                {index > 0 && <span className="text-red-500 mr-2">/</span>}
                                {item}
                            </span>
                        </Link>
                    ))}

                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="text-black px-4 py-1 hover:bg-black hover:text-white transition-colors flex items-center gap-2 group">
                                JOIN THE WAITLIST
                            </button>
                        </DialogTrigger>
                        <Waitlist />
                    </Dialog>
                </nav>

                {/* Right border markings */}
                <div className="absolute right-0 top-0 h-full w-[2px] bg-neutral-200">
                    <div className="absolute right-0 top-4 w-2 h-[1px] bg-neutral-200"></div>
                    <div className="absolute right-0 bottom-4 w-2 h-[1px] bg-neutral-200"></div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className={`
        ${isMenuOpen ? 'flex' : 'hidden'} 
        md:hidden absolute top-full left-0 w-full 
        bg-white flex-col items-start 
        space-y-4 p-4 
        border-b border-neutral-200 
        font-mono text-xs tracking-[0.2em]
      `}>
                {["SOLUTIONS", "FEATURES", "PROCESS", "PRICING", "CONTACT"].map((item, index) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="group relative hover:text-red-500 transition-colors duration-300"
                    >
                        <span className="relative z-10">
                            {index > 0 && <span className="text-red-500 mr-2">/</span>}
                            {item}
                        </span>
                        <span className="absolute -left-2 top-1/2 w-1 h-1 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </Link>
                ))}
            </nav>

            {/* Bottom border with technical markings */}
            <div className="w-full h-[2px] bg-neutral-200 relative">
                <div className="absolute left-4 bottom-0 w-[1px] h-4 bg-neutral-200"></div>
                <div className="absolute right-4 bottom-0 w-[1px] h-4 bg-neutral-200"></div>
            </div>
        </header>
    );
}


