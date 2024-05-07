import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import DisplayContext from "../core/context/display-context"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "Tech job tracker",
  description: "Add and control the vacancies you are interested in",
  alternates: {
    canonical: "http://clubtal.com/job-tracker",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisplayContext>{children}</DisplayContext>
      </body>
    </html>
  )
}
