import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.sanity.io",
            },
        ],
    },
    /* config options here */
       typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,

    },
};

export default nextConfig;
