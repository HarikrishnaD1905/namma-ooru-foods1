"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, Menu, X, Home, Coffee, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"

export default function Header() {
  const { cartCount } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartBouncing, setIsCartBouncing] = useState(false)

  // Listen for scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Listen for cart add events
  useEffect(() => {
    const handleCartAdded = () => {
      setIsCartBouncing(true)
      setTimeout(() => setIsCartBouncing(false), 1000)
    }

    document.addEventListener("cart:added", handleCartAdded)
    return () => document.removeEventListener("cart:added", handleCartAdded)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "/menu", label: "Menu", icon: <Coffee className="w-4 h-4" /> },
    { href: "/popular", label: "Popular", icon: <Award className="w-4 h-4" /> },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xl md:text-2xl font-bold text-earth-800">
              NAMMA OORU <span className="text-primary">FOODS</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-earth-700 hover:text-earth-900 px-2 py-1 font-medium text-sm transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-earth-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Cart and Mobile Menu */}
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: isCartBouncing ? [1, 1.2, 0.9, 1.1, 1] : 1,
              rotate: isCartBouncing ? [0, 5, -5, 3, 0] : 0,
            }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="w-5 h-5 text-earth-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </motion.div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-earth-700" />
              ) : (
                <Menu className="w-5 h-5 text-earth-700" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 py-3 border-b border-gray-100 text-earth-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

