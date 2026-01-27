import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    output: "export",
    // basePath only needed for GitHub Pages deployment
    basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
    images: {
        unoptimized: true,
    },
}

export default nextConfig
