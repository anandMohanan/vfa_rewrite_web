"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export const LottieAnimation = ({
  ani,
  className,
}: {
  ani: any;
  className?: string;
}) => {
  return <Lottie animationData={ani} className={className} />;
};

