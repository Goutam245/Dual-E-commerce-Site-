"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TrustBadges } from "@/components/trust-badges"

export function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById("featured-products")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-[32rem] h-[32rem] bg-[#7c3aed] rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#0891b2] rounded-full blur-[80px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 glass border-white/30 rounded-full px-5 py-2.5 mb-8 hover:scale-105 transition-transform duration-300">
          <div className="w-2 h-2 bg-[#059669] rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-white">FDA Registered Facility</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-balance">
          Elevate Your
          <br />
          <span className="inline-block bg-gradient-to-r from-white via-[#0891b2] to-white bg-clip-text text-transparent animate-pulse">
            Cellular Potential
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty font-medium">
          Pharmaceutical-grade research peptides backed by science, third-party testing, and uncompromising quality
          standards.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="gradient-button text-white hover:gradient-button-hover button-scale button-glow border-0 text-lg px-10 py-7 rounded-2xl shadow-2xl font-semibold"
            onClick={scrollToProducts}
          >
            Explore Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass border-2 border-white/40 text-white hover:bg-white hover:text-[#0f2942] button-scale text-lg px-10 py-7 rounded-2xl font-semibold backdrop-blur-xl bg-transparent"
          >
            View Lab Results
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="max-w-5xl mx-auto">
          <TrustBadges />
        </div>
      </div>

      <button
        onClick={scrollToProducts}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/90 animate-bounce cursor-pointer bg-transparent border-0 hover:text-white transition-colors group"
        aria-label="Scroll to products"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium opacity-80">Scroll to explore</span>
          <ChevronDown className="w-8 h-8 group-hover:translate-y-1 transition-transform" />
        </div>
      </button>
    </section>
  )
}
