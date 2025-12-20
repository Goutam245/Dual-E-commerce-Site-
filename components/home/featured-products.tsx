import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeaturedProducts() {
  const products = [
    {
      id: "bpc-157-10mg",
      name: "BPC-157 10mg",
      category: "Research Peptides",
      price: 89.99,
      purity: "99.8%",
      image: "/pharmaceutical-peptide-bottle-bpc-157.jpg",
      badge: "Best Seller" as const,
      inStock: true,
    },
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
    <section id="featured-products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our most trusted research peptides, rigorously tested for purity and backed by certificates of analysis.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/products">
            <Button size="lg" className="gradient-button text-white hover:gradient-button-hover button-scale border-0">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
