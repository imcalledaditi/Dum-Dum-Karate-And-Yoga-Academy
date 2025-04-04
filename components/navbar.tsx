"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Origin",
    href: "#",
    dropdown: true,
    items: [
      { name: "Karate", href: "/origin/karate" },
      { name: "Yoga", href: "/origin/yoga" },
    ],
  },
  {
    name: "Information",
    href: "#",
    dropdown: true,
    items: [
      { name: "Karate", href: "/information/karate" },
      { name: "Yoga", href: "/information/yoga" },
    ],
  },
  { name: "Dojo", href: "/dojo" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Instructor", href: "/instructor" },
  { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-12 overflow-hidden">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Dum Dum Karate Logo"
              width={48}
              height={48}
              className="animate-bounce-in"
            />
          </div>
          <div className="hidden md:block">
            <h1 className="font-poppins font-bold text-red text-xl leading-tight">Dum Dum Karate</h1>
            <p className="text-xs text-muted-foreground">& Yoga Academy</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, i) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center",
                      "hover:bg-yellow hover:text-navy",
                      "group-hover:bg-yellow group-hover:text-navy",
                    )}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div
                    className={cn(
                      "absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-background border border-border overflow-hidden transition-all duration-200 origin-top-left",
                      "opacity-0 invisible group-hover:opacity-100 group-hover:visible scale-95 group-hover:scale-100",
                    )}
                  >
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-yellow hover:text-navy"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    "hover:bg-yellow hover:text-navy",
                    i === 0 ? "bg-red text-white hover:bg-red/90" : "text-foreground",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="ml-2 flex items-center">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button and theme toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-foreground hover:bg-yellow">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none",
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
          {navItems.map((item, i) => (
            <div key={item.name} className="w-full">
              {item.dropdown ? (
                <div className="w-full">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className={cn(
                      "px-4 py-2 text-lg font-medium rounded-md transition-all duration-200 w-full text-center flex items-center justify-center",
                      "hover:bg-yellow hover:text-navy",
                      activeDropdown === item.name ? "bg-yellow text-navy" : "text-foreground",
                    )}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div
                    className={cn(
                      "mt-1 w-full rounded-md overflow-hidden transition-all duration-200",
                      activeDropdown === item.name ? "max-h-40" : "max-h-0",
                    )}
                  >
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-yellow hover:text-navy bg-background/50 backdrop-blur-sm"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsOpen(false)
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 text-lg font-medium rounded-md transition-all duration-200 w-full text-center block",
                    "hover:bg-yellow hover:text-navy",
                    i === 0 ? "bg-red text-white hover:bg-red/90" : "text-foreground",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

