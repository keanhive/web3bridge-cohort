import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/web3bridge-cohort',
    assetPrefix: '/web3bridge-cohort/',
};

export default nextConfig;