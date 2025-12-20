import { Navigation } from "@/components/navigation"
import { DisclaimerBanner } from "@/components/disclaimer-banner"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { TrustSection } from "@/components/home/trust-section"
import { ScienceSection } from "@/components/home/science-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <DisclaimerBanner />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <TrustSection />
        <ScienceSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
