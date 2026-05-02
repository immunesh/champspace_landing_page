"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Navigation links with dropdowns
  const navLinks = [
    { label: "Home", href: "/", dropdown: true },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services", dropdown: true },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-gradient-to-br from-[#0a0f14] via-[#0a0a2e] to-[#0a0f14] " >
      <div className="flex items-center justify-between max-w-[1600px] mx-auto px-8 py-2 h-[80px] ">
        {/* Logo */}

        <div className="flex items-center min-w-[120px]">
          <img src="/logo.png" alt="Logo" className="h-40 w-100 object-contain" />
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex gap-5 mx-auto">
          {navLinks.map((link, idx) => (
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-white font-normal text-base hover:text-[#18e07c] transition relative flex items-center gap-1 px-1"
                style={{letterSpacing: '-0.01em'}}>
                {link.label}
                {link.dropdown && (
                  <svg className="ml-1 w-3 h-3 text-white inline-block" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 10l6 6 6-6" />
                  </svg>
                )}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-white font-normal text-base hover:text-[#18e07c] transition relative flex items-center gap-1 px-1"
                style={{letterSpacing: '-0.01em'}}>
                {link.label}
                {link.dropdown && (
                  <svg className="ml-1 w-3 h-3 text-white inline-block" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 10l6 6 6-6" />
                  </svg>
                )}
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Right: CTA and Search */}
        <div className="hidden lg:flex items-center gap-0">
          <button className="h-[60px] rounded-l-2xl rounded-r-none px-10 bg-[#18e07c] text-black text-lg font-semibold flex items-center gap-2 hover:bg-[#13b86a] transition-all">
            Get a quote <span className="text-xl">→</span>
          </button>
          <div className="h-[60px] w-[70px] bg-[#181818] rounded-r-2xl rounded-l-none flex items-center justify-center -ml-1">
            <Search className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Mobile menu button (not styled for this design) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors text-foreground"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile menu can be implemented here if needed */}
    </nav>
  )
}

 