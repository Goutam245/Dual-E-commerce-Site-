"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart, Search, User, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Shop", href: "/products" },
    { label: "Science", href: "/science" },
    { label: "Reviews", href: "/reviews" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled ? "glass py-3 shadow-xl" : "bg-transparent py-6",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "font-bold text-lg leading-none tracking-tight transition-colors duration-300",
                    isScrolled ? "text-[#0f2942]" : "text-white",
                  )}
                >
                  ASCEND RX
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#0891b2]">PEPTIDES</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-all duration-300 relative group",
                    isScrolled ? "text-gray-800 hover:text-[#0891b2]" : "text-white/95 hover:text-white",
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0891b2] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* Search */}
              <button
                className={cn(
                  "p-2.5 rounded-xl transition-all duration-300 hover:scale-110",
                  isScrolled
                    ? "hover:bg-gray-100 text-gray-800 hover:shadow-md"
                    : "hover:bg-white/10 text-white backdrop-blur-sm",
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Account */}
              <button
                className={cn(
                  "hidden md:flex p-2.5 rounded-xl transition-all duration-300 hover:scale-110",
                  isScrolled
                    ? "hover:bg-gray-100 text-gray-800 hover:shadow-md"
                    : "hover:bg-white/10 text-white backdrop-blur-sm",
                )}
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Cart */}
              <button
                className={cn(
                  "relative p-2.5 rounded-xl transition-all duration-300 hover:scale-110",
                  isScrolled
                    ? "hover:bg-gray-100 text-gray-800 hover:shadow-md"
                    : "hover:bg-white/10 text-white backdrop-blur-sm",
                )}
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-premium text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className={cn(
                  "lg:hidden p-2.5 rounded-xl transition-all duration-300",
                  isScrolled
                    ? "hover:bg-gray-100 text-gray-800 hover:shadow-md"
                    : "hover:bg-white/10 text-white backdrop-blur-sm",
                )}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-24">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative glass-dark max-w-sm mx-auto rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-top duration-300">
            <nav className="px-6 py-8 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-base font-semibold text-white hover:text-[#0891b2] transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/account"
                className="block text-base font-semibold text-white hover:text-[#0891b2] transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 hover:translate-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Account
              </Link>
            </nav>
          </div>
        </div>
      )}

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-gray-200/50 pb-safe">
        <div className="flex items-center justify-around px-4 py-3">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#0891b2] transition-colors min-w-[4rem]"
          >
            <div className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link
            href="/products"
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#0891b2] transition-colors min-w-[4rem]"
          >
            <div className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <span className="text-xs font-medium">Shop</span>
          </Link>
          <Link
            href="/cart"
            className="relative flex flex-col items-center gap-1 text-gray-600 hover:text-[#0891b2] transition-colors min-w-[4rem]"
          >
            <div className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-gradient-premium text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-xs font-medium">Cart</span>
          </Link>
          <Link
            href="/account"
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#0891b2] transition-colors min-w-[4rem]"
          >
            <div className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Account</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
