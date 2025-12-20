"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { DisclaimerBanner } from "@/components/disclaimer-banner"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Filter, SlidersHorizontal } from "lucide-react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const products = [
    {
      id: "bpc-157-10mg",
      name: "BPC-157 10mg",
      category: "peptides",
      price: 89.99,
      purity: "99.8%",
      image: "/pharmaceutical-peptide-bottle-bpc-157.jpg",
      badge: "Best Seller" as const,
      inStock: true,
    },
    {
      id: "tb-500-10mg",
      name: "TB-500 10mg",
      category: "peptides",
      price: 94.99,
      purity: "99.7%",
      image: "/pharmaceutical-peptide-bottle-tb-500.jpg",
      badge: "Lab Verified" as const,
      inStock: true,
    },
    {
      id: "sermorelin-5mg",
      name: "Sermorelin 5mg",
      category: "peptides",
      price: 79.99,
      purity: "99.9%",
      image: "/pharmaceutical-peptide-bottle-sermorelin.jpg",
      badge: "New" as const,
      inStock: true,
    },
    {
      id: "ipamorelin-5mg",
      name: "Ipamorelin 5mg",
      category: "peptides",
      price: 84.99,
      purity: "99.6%",
      image: "/pharmaceutical-peptide-bottle-ipamorelin.jpg",
      inStock: true,
    },
    {
      id: "cjc-1295-5mg",
      name: "CJC-1295 5mg",
      category: "peptides",
      price: 92.99,
      purity: "99.8%",
      image: "/pharmaceutical-peptide-bottle-cjc-1295.jpg",
      badge: "Lab Verified" as const,
      inStock: true,
    },
    {
      id: "melanotan-2-10mg",
      name: "Melanotan II 10mg",
      category: "peptides",
      price: 74.99,
      purity: "99.5%",
      image: "/pharmaceutical-peptide-bottle-melanotan.jpg",
      inStock: true,
    },
  ]

  const categories = [
    { id: "all", label: "All Products", count: products.length },
    { id: "peptides", label: "Research Peptides", count: 6 },
    { id: "bestsellers", label: "Best Sellers", count: 2 },
    { id: "new", label: "New Arrivals", count: 1 },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <DisclaimerBanner />
      <Navigation />

      {/* Page Header */}
      <div className="gradient-hero py-24 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Research Peptides</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Pharmaceutical-grade peptides with verified purity and complete lab documentation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-[#0891b2]" />
                <h2 className="font-semibold text-lg">Filters</h2>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? "bg-gradient-hero text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.label}</span>
                      <span className="text-sm opacity-75">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Purity Filter */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Purity Level</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#0891b2]" defaultChecked />
                    <span className="text-sm">99%+ Purity</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#0891b2]" defaultChecked />
                    <span className="text-sm">Lab Verified</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
              </p>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="purity">Purity</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}
