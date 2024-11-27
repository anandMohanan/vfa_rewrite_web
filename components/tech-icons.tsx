"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Cpu, Network, Braces, Binary, Terminal,
    Code2, Database, Globe, Shield
} from "lucide-react";
import { useState, useEffect } from "react";

const icons = [
    { Icon: Cpu, label: "Processing" },
    { Icon: Network, label: "Network" },
    { Icon: Braces, label: "Logic" },
    { Icon: Binary, label: "Data" },
    { Icon: Terminal, label: "System" },
    { Icon: Code2, label: "Code" },
    { Icon: Database, label: "Storage" },
    { Icon: Globe, label: "Global" },
    { Icon: Shield, label: "Security" }
];

const IconDisplay = ({ position, currentIndex }) => {
    const icon = icons[currentIndex];

    return (
        <motion.div
            key={currentIndex}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className={`absolute ${position} w-12 h-12 bg-black/80 flex items-center justify-center flex-col`}
        >
            <icon.Icon size={20} className="text-red-500 mb-1" />
            <span className="text-[8px] text-red-500 tracking-wider">{icon.label}</span>
        </motion.div>
    );
};

export default function TechIcons() {
    const [indices, setIndices] = useState([0, 3, 6]); // Starting indices for three positions

    useEffect(() => {
        const interval = setInterval(() => {
            setIndices(prev => prev.map(i => (i + 1) % icons.length));
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    const positions = [
        "top-4 left-4",
    ];

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="sync">
                {positions.map((position, i) => (
                    <IconDisplay
                        key={`${position}-${indices[i]}`}
                        position={position}
                        currentIndex={indices[i]}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
