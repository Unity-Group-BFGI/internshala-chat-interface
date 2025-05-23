import type React from "react"
import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import "../styles/globals.css"

// Configure Mulish font with specific weights instead of variable ranges
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  fallback: ["Open Sans", "system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Chat Interface",
  description: "A modern, responsive chat interface with smart assistance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
