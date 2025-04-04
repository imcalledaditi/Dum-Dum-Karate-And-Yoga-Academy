"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // Make sure the component is mounted before accessing the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full">
        <span className="sr-only">Toggle theme</span>
        <div className="h-5 w-5 bg-muted rounded-full animate-pulse" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        const newTheme = isDark ? "light" : "dark"
        setTheme(newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
      }}
      className={cn(
        "w-10 h-10 rounded-full overflow-hidden relative transition-all duration-500",
        isDark ? "bg-slate-800" : "bg-yellow-100",
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="absolute inset-0 flex items-center justify-center transform transition-all duration-700">
        {isDark ? (
          <Sun className="h-5 w-5 text-yellow-300 animate-spin-slow" />
        ) : (
          <Moon className="h-5 w-5 text-slate-800 animate-pulse" />
        )}
      </span>
      <span className="sr-only">Switch to {isDark ? "light" : "dark"} mode</span>
    </Button>
  )
}

