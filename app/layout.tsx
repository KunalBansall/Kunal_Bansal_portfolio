import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./grid-pattern.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
// import { Analytics } from "@vercel/analytics/react"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL("https://kunalbansal.vercel.app"),
  title: "Kunal Bansal | Full-Stack Software Engineer",
  description:
    "Kunal Bansal is a full-stack software engineer at Actalink building Web3 payments, React and Next.js platforms, and Gymzy, a multi-tenant SaaS.",
  keywords: ["Kunal Bansal", "Full-Stack Developer", "React Developer", "Node.js Developer", "TypeScript", "SaaS"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kunal Bansal | Full-Stack Software Engineer",
    description: "Full-stack engineer at Actalink. Web3 payments, React, Next.js, Node.js, and multi-tenant SaaS.",
    url: "/",
    siteName: "Kunal Bansal Portfolio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />

      </body>
    </html>
  )
}
