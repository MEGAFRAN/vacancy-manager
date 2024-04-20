import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "Tech jobs tools | Clubtal",
  description:
    "Community that helps to find tech jobs, By sharing experiences and building tools to improve your job search, Anyone can gain experience by helping building these tools",
  alternates: {
    canonical: "http://clubtal.com",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
