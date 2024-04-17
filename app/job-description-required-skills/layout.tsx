import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Required skills for job description",
  description:
    "Add a job description on the text box, then click analyze to see the most important requirements",
  alternates: {
    canonical: "http://clubtal.com/job-description-required-skills",
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
