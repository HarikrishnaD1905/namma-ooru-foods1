import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { logoImage } from "@/lib/images"

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-100 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <Image
              src={logoImage || "/placeholder.svg"}
              alt="Namma Ooru Foods"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm mb-4">
              Experience the authentic flavors of Tamil Nadu cuisine. Traditional recipes prepared with love and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-earth-100 hover:text-spice-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-earth-100 hover:text-spice-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-earth-100 hover:text-spice-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-spice-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-spice-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm hover:text-spice-300 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/popular" className="text-sm hover:text-spice-300 transition-colors">
                  Popular Items
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm hover:text-spice-300 transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-spice-300">Contact Us</h3>
            <address className="not-italic">
              <p className="text-sm mb-2">The Owner : Jayashree R (Dosa) </p>
              <p className="text-sm mb-2">12 Udayampalayam, Coimbatore</p>
              <p className="text-sm mb-2">Tamil Nadu, India</p>
              <p className="text-sm mb-2">Phone: +91 63826 99058</p>
              <p className="text-sm">Email: info@nammaoorufoods.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-earth-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Namma Ooru Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

