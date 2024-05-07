import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "Team",
  description: "Team's communication tools",
  alternates: {
    canonical: "http://clubtal.com/team",
  },
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
