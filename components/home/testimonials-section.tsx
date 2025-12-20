import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Research Scientist",
      content:
        "The purity and quality of ASCEND RX peptides are exceptional. Their COAs are detailed and the customer service is outstanding.",
      rating: 5,
      image: "/professional-woman-scientist.png",
    },
    {
      name: "Marcus Thompson",
      role: "Athletic Trainer",
      content:
        "I've been ordering from ASCEND RX for two years. The consistency in quality and fast shipping make them my go-to supplier.",
      rating: 5,
      image: "/athletic-trainer-man.jpg",
    },
    {
      name: "Jennifer Lee",
      role: "Wellness Coach",
      content:
        "Transparency is everything in this industry. ASCEND RX provides full lab results and stands behind their products.",
      rating: 5,
      image: "/wellness-coach-woman.png",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by researchers, professionals, and health enthusiasts worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d97706] text-[#d97706]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
