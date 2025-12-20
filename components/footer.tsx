import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight text-white">ASCEND RX</span>
                <span className="text-xs font-medium tracking-wider text-[#0891b2]">PEPTIDES</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Pharmaceutical-grade research peptides backed by science. FDA registered facility with third-party lab
              testing.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-sm text-gray-300 hover:text-[#0891b2] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=peptides"
                  className="text-sm text-gray-300 hover:text-[#0891b2] transition-colors"
                >
                  Research Peptides
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=new"
                  className="text-sm text-gray-300 hover:text-[#0891b2] transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=bestsellers"
                  className="text-sm text-gray-300 hover:text-[#0891b2] transition-colors"
                >
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-[#0891b2] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/science" className="text-sm text-gray-300 hover:text-[#0891b2] transition-colors">
                  Our Science
                </Link>
              </li>
              <li>
                <Link href="/lab-results" className="text-sm text-gray-300 hover:text-[#0891b2] transition-colors">
                  Lab Results
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-[#0891b2] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>support@ascendrx.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>1-800-PEPTIDE</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  FDA Registered Facility
                  <br />
                  San Diego, CA 92121
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 ASCEND RX PEPTIDES. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#0891b2] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-[#0891b2] transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-sm text-gray-400 hover:text-[#0891b2] transition-colors">
                Shipping & Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
