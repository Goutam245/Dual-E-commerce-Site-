"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Eye, CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  id: string
  name: string
  category: string
  price: number
  purity: string
  image: string
  badge?: "New" | "Best Seller" | "Lab Verified"
  inStock?: boolean
  description?: string
}

export function ProductCard({
  id,
  name,
  category,
  price,
  purity,
  image,
  badge,
  inStock = true,
  description,
}: ProductCardProps) {
  const [showQuickView, setShowQuickView] = useState(false)

  return (
    <>
      <Card className="group relative overflow-hidden card-hover bg-white border-gray-200">
        {/* Badge */}
        {badge && (
          <div
            className={cn(
              "absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg",
              badge === "New" && "bg-gradient-to-r from-[#7c3aed] to-[#6d28d9]",
              badge === "Best Seller" && "gradient-premium",
              badge === "Lab Verified" && "bg-gradient-to-r from-[#059669] to-[#047857]",
            )}
          >
            {badge}
          </div>
        )}

        <Link href={`/product/${id}`} className="block relative aspect-square overflow-hidden gradient-card">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-contain p-8 group-hover:scale-110 transition-all duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <Button
              variant="secondary"
              size="sm"
              className="glass border-white/40 text-white hover:bg-white hover:text-gray-900 gap-2 font-semibold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
              onClick={(e) => {
                e.preventDefault()
                setShowQuickView(true)
              }}
            >
              <Eye className="w-4 h-4" />
              Quick View
            </Button>
          </div>
        </Link>

        <div className="p-6">
          <p className="text-xs font-bold text-[#0891b2] uppercase tracking-wider mb-2">{category}</p>
          <Link href={`/product/${id}`}>
            <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-[#0891b2] transition-colors duration-300 line-clamp-2">
              {name}
            </h3>
          </Link>

          <div className="flex items-center gap-2 mb-4 bg-green-50 rounded-lg px-3 py-2 border border-green-100">
            <CheckCircle className="w-4 h-4 text-[#059669]" />
            <span className="text-sm font-bold text-[#059669]">{purity} Purity</span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div>
              <span className="text-2xl font-bold text-gray-900">${price.toFixed(2)}</span>
            </div>
            <Button
              size="sm"
              className="gradient-button text-white hover:gradient-button-hover button-scale button-glow border-0 font-semibold px-5"
              disabled={!inStock}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>

          {!inStock && (
            <p className="text-sm text-red-600 font-semibold mt-2 bg-red-50 px-3 py-1 rounded-lg inline-block">
              Out of Stock
            </p>
          )}
        </div>
      </Card>

      {showQuickView && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowQuickView(false)} />
          <div className="relative glass max-w-4xl w-full rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <button
              onClick={() => setShowQuickView(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-900 backdrop-blur-sm transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative aspect-square bg-gradient-card rounded-2xl overflow-hidden">
                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain p-8" />
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-sm font-bold text-[#0891b2] uppercase tracking-wider mb-2">{category}</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{name}</h2>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-green-50 rounded-xl px-4 py-2 border border-green-100">
                    <CheckCircle className="w-5 h-5 text-[#059669] inline mr-2" />
                    <span className="text-sm font-bold text-[#059669]">{purity} Purity</span>
                  </div>
                  {badge && (
                    <div
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-bold text-white",
                        badge === "New" && "bg-gradient-to-r from-[#7c3aed] to-[#6d28d9]",
                        badge === "Best Seller" && "gradient-premium",
                        badge === "Lab Verified" && "bg-gradient-to-r from-[#059669] to-[#047857]",
                      )}
                    >
                      {badge}
                    </div>
                  )}
                </div>

                {description && <p className="text-gray-700 leading-relaxed">{description}</p>}

                <div className="mt-auto pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-gray-900">${price.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="lg"
                      className="flex-1 gradient-button text-white hover:gradient-button-hover button-scale button-glow border-0 font-semibold text-lg py-6"
                      disabled={!inStock}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-gray-300 hover:bg-gray-50 font-semibold bg-transparent"
                      asChild
                    >
                      <Link href={`/product/${id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
