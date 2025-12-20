import { Award, FileCheck, Shield, TrendingUp } from "lucide-react"

export function TrustSection() {
  const stats = [
    {
      icon: Shield,
      value: "50,000+",
      label: "Satisfied Customers",
      description: "Trust our pharmaceutical-grade quality",
    },
    {
      icon: Award,
      value: "99.9%",
      label: "Average Purity",
      description: "Verified by third-party labs",
    },
    {
      icon: FileCheck,
      value: "100%",
      label: "COA Available",
      description: "Full transparency on every batch",
    },
    {
      icon: TrendingUp,
      value: "5 Years",
      label: "In Business",
      description: "Proven track record of excellence",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose ASCEND RX</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-leading quality standards and commitment to scientific excellence set us apart.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-[#0891b2] mb-2">{stat.label}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
