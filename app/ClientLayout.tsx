"use client"

import type React from "react"

import { useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}

