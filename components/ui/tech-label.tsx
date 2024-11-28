"use client";

import { Circle } from "lucide-react";

interface TechLabelProps {
  text: string;
  position: "left" | "right";
  className?: string;
}

export function TechLabel({ text, position, className = "" }: TechLabelProps) {
  const baseClass = "absolute flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-400";
  const positionClass = position === "left" ? "left-8" : "right-8";
  
  return (
    <div className={`${baseClass} ${positionClass} ${className}`}>
      {position === "left" && <Circle size={4} className="text-red-500" />}
      {text}
      {position === "right" && <Circle size={4} className="text-red-500" />}
    </div>
  );
}
