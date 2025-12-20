import { Shield, Award, Microscope, Lock } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      text: "FDA Registered",
      subtext: "Certified Facility",
    },
    {
      icon: Award,
      text: "99.9% Purity",
      subtext: "Lab Tested",
    },
    {
      icon: Microscope,
      text: "3rd Party Tested",
      subtext: "COA Available",
    },
    {
      icon: Lock,
      text: "Secure Checkout",
      subtext: "SSL Encrypted",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {badges.map((badge, index) => {
        const Icon = badge.icon
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <p className="font-semibold text-white text-sm mb-1">{badge.text}</p>
            <p className="text-xs text-white/80">{badge.subtext}</p>
          </div>
        )
      })}
    </div>
  )
}
