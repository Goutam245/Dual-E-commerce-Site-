import { Button } from "@/components/ui/button"
import { Microscope, FlaskConical, BookOpen } from "lucide-react"
import Link from "next/link"

export function ScienceSection() {
  return (
    <section className="py-24 bg-[#1a365d] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Research Backed by Science</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Every product at ASCEND RX undergoes rigorous testing and quality control. We partner with leading
              laboratories to ensure pharmaceutical-grade purity and provide complete transparency through our
              Certificates of Analysis.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0891b2] flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Third-Party Lab Testing</h3>
                  <p className="text-white/80">
                    Independent verification ensures accuracy and builds trust in our quality standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#7c3aed] flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">GMP Certified Facility</h3>
                  <p className="text-white/80">
                    Our manufacturing facility meets Good Manufacturing Practice standards for pharmaceutical products.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#059669] flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Research References</h3>
                  <p className="text-white/80">
                    All products backed by peer-reviewed research and scientific literature from PubMed and leading
                    journals.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/science">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a365d]"
              >
                Learn More About Our Science
              </Button>
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0891b2] to-[#7c3aed] p-1">
              <div className="w-full h-full rounded-2xl bg-[#1a365d] flex items-center justify-center overflow-hidden">
                <img src="/scientific-laboratory-pharmaceutical-testing-micro.jpg" alt="Laboratory Testing" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
