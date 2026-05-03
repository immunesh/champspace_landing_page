import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Navbar from "@/components/navbar"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Champspace — AI & Automation Internship Program",
  description:
    "Build real AI agents and automation tools with Champspace. Internship programs for industry developers and college graduates entering the AI era.",
  keywords: ["AI internship", "automation", "AI agents", "LangChain", "software development", "tech internship", "machine learning"],
  icons: {
    icon: [
      { url: "./favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "./favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "./apple-touch-icon.png",
  },
  manifest: "./site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#05050f",
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
