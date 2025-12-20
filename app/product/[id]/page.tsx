"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { DisclaimerBanner } from "@/components/disclaimer-banner"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { ShoppingCart, Heart, Share2, CheckCircle, Download, Star, Shield } from "lucide-react"
import { ProductCard } from "@/components/product-card"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data
  const product = {
    id: params.id,
    name: "BPC-157 10mg",
    category: "Research Peptides",
    price: 89.99,
    purity: "99.8%",
    batchNumber: "BPC-2025-001",
    inStock: true,
    stockLevel: 24,
    rating: 4.9,
    reviewCount: 127,
    images: [
      "/pharmaceutical-peptide-bottle-bpc-157.jpg",
      "/pharmaceutical-peptide-vial-bpc-157-angle.jpg",
      "/pharmaceutical-peptide-vial-bpc-157-label.jpg",
    ],
    description:
      "BPC-157 is a synthetic peptide derived from a protective protein found in the stomach. This research compound has been studied extensively for its potential regenerative properties. Our pharmaceutical-grade BPC-157 is manufactured in an FDA-registered facility and comes with complete third-party lab verification.",
    features: [
      "99.8% Purity verified by third-party lab",
      "Lyophilized powder for maximum stability",
      "Sterile, pharmaceutical-grade quality",
      "Complete Certificate of Analysis included",
      "FDA registered manufacturing facility",
      "GMP certified production process",
    ],
    specifications: {
      "Product Code": "ASC-BPC157-10",
      "CAS Number": "137525-51-0",
      "Molecular Formula": "C62H98N16O22",
      "Molecular Weight": "1419.53 g/mol",
      Appearance: "White lyophilized powder",
      Storage: "-20°C freezer",
      Purity: "≥99.8% (HPLC)",
      "Batch Number": "BPC-2025-001",
    },
  }

  const relatedProducts = [
    {
      id: "tb-500-10mg",
      name: "TB-500 10mg",
      category: "Research Peptides",
      price: 94.99,
      purity: "99.7%",
      image: "/pharmaceutical-peptide-bottle-tb-500.jpg",
      badge: "Lab Verified" as const,
      inStock: true,
    },
    {
      id: "sermorelin-5mg",
      name: "Sermorelin 5mg",
      category: "Research Peptides",
      price: 79.99,
      purity: "99.9%",
      image: "/pharmaceutical-peptide-bottle-sermorelin.jpg",
      badge: "New" as const,
      inStock: true,
    },
    {
      id: "ipamorelin-5mg",
      name: "Ipamorelin 5mg",
      category: "Research Peptides",
      price: 84.99,
      purity: "99.6%",
      image: "/pharmaceutical-peptide-bottle-ipamorelin.jpg",
      inStock: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <DisclaimerBanner />
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-8">
            <span>Home</span> / <span>Products</span> /{" "}
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>

          {/* Product Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Images */}
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-card mb-4 relative">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden bg-gradient-card border-2 transition-all ${
                      selectedImage === index ? "border-[#0891b2]" : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      width={200}
                      height={200}
                      className="object-contain p-4"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-[#0891b2] uppercase tracking-wider mb-2">{product.category}</p>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#d97706] text-[#d97706]" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{product.rating}</span>
                </div>
                <span className="text-gray-600">({product.reviewCount} reviews)</span>
              </div>

              {/* Purity Badge */}
              <div className="flex items-center gap-3 mb-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <CheckCircle className="w-6 h-6 text-[#059669]" />
                <div>
                  <p className="font-semibold text-[#059669]">{product.purity} Purity Verified</p>
                  <p className="text-sm text-gray-600">Third-party lab tested • Batch #{product.batchNumber}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900">${product.price}</span>
              </div>

              {/* Stock Status */}
              {product.inStock && (
                <p className="text-sm text-green-600 font-medium mb-6 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  In Stock - {product.stockLevel} units available
                </p>
              )}

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-600">
                    Total: <span className="font-bold text-gray-900">${(product.price * quantity).toFixed(2)}</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Button className="flex-1 gradient-button text-white hover:gradient-button-hover button-scale border-0 h-14 text-lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 bg-transparent">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 bg-transparent">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#059669] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="border-b w-full justify-start">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="py-8">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Research Applications</h3>
                <p className="text-gray-700 leading-relaxed">
                  BPC-157 has been extensively studied in preclinical research models. Studies have investigated its
                  potential effects on tissue repair mechanisms, angiogenesis pathways, and cellular regeneration
                  processes. All research should be conducted by qualified professionals in appropriate laboratory
                  settings.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="py-8">
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900">{key}:</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lab-results" className="py-8">
              <div className="bg-gradient-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Certificate of Analysis</h3>
                <p className="text-gray-700 mb-6">
                  Download the complete Certificate of Analysis (COA) for batch #{product.batchNumber}. This document
                  includes HPLC purity analysis, mass spectrometry results, and sterility testing.
                </p>
                <Button className="gradient-button text-white hover:gradient-button-hover border-0">
                  <Download className="w-5 h-5 mr-2" />
                  Download COA (PDF)
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="py-8">
              <p className="text-gray-600">Customer reviews coming soon...</p>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
