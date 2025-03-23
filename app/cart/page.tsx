"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag, ArrowLeft, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import CartItemComponent from "@/components/cart-item"
import { useCart } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"

export default function CartPage() {
  const router = useRouter()
  const { items, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    if (items.length === 0) return

    setIsCheckingOut(true)

    // Simulate checkout process
    setTimeout(() => {
      router.push("/checkout")
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" size="sm" className="mb-6 gap-2" onClick={() => router.back()}>
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-earth-800 mb-8 flex items-center gap-3"
      >
        <ShoppingBag className="h-8 w-8" /> Your Cart
      </motion.h1>

      {items.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Cart Items ({items.length})</h2>

              <div className="space-y-1">
                {items.map((item) => (
                  <CartItemComponent
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>

              <div className="mt-6">
                <Button variant="outline" className="text-muted-foreground" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(cartTotal)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>{formatCurrency(40)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes</span>
                  <span>{formatCurrency(cartTotal * 0.05)}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-primary text-xl">{formatCurrency(cartTotal + 40 + cartTotal * 0.05)}</span>
                </div>
              </div>

              <Button className="w-full mt-6" size="lg" onClick={handleCheckout} disabled={isCheckingOut}>
                {isCheckingOut ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </motion.div>
                    Processing...
                  </span>
                ) : (
                  "Proceed to Checkout"
                )}
              </Button>

              <div className="mt-4 text-center">
                <Link href="/menu">
                  <Button variant="link" className="text-earth-700">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <div className="inline-block p-6 bg-earth-50 rounded-full mb-4">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some delicious items to your cart</p>
          <Link href="/menu">
            <Button>Browse Menu</Button>
          </Link>
        </motion.div>
      )}
    </div>
  )
}

