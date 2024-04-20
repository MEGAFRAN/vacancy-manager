/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa"

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})

const nextConfig = withPWA({
  reactStrictMode: true,
  trailingSlash: true,
  webpack(config) {
    const modifiedConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      },
    }

    return modifiedConfig
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  output: "export",
})

export default nextConfig
