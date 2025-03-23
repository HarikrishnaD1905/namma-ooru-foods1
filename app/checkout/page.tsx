"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Check, CreditCard, MapPin, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, cartTotal, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const deliveryFee = 40
  const taxes = cartTotal * 0.05
  const totalAmount = cartTotal + deliveryFee + taxes

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false)
      setOrderComplete(true)
      clearCart()

      // Redirect to success page after a delay
      setTimeout(() => {
        router.push("/")
      }, 3000)
    }, 2000)
  }

  if (items.length === 0 && !orderComplete) {
    router.push("/cart")
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {!orderComplete ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold text-earth-800 mb-8 flex items-center gap-3">
            <CreditCard className="h-8 w-8" /> Checkout
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div>
              <form onSubmit={handleSubmitOrder}>
                {/* Delivery Information */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" /> Delivery Information
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" className="mt-1" required />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" className="mt-1" required />
                    </div>

                    <div className="col-span-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" className="mt-1" required />
                    </div>

                    <div className="col-span-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" className="mt-1" required />
                    </div>

                    <div className="col-span-2">
                      <Label htmlFor="address">Delivery Address</Label>
                      <Input id="address" className="mt-1" required />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" className="mt-1" required />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="pincode">PIN Code</Label>
                      <Input id="pincode" className="mt-1" required />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" /> Payment Method
                  </h2>

                  <RadioGroup defaultValue="cod">
                    <div className="flex items-center space-x-2 mb-4">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod">Cash on Delivery</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online">Online Payment</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Processing Order...
                    </div>
                  ) : (
                    `Place Order • ${formatCurrency(totalAmount)}`
                  )}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between py-2">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground ml-2">x{item.quantity}</span>
                      </div>
                      <span>{formatCurrency(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatCurrency(cartTotal)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>{formatCurrency(deliveryFee)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxes</span>
                    <span>{formatCurrency(taxes)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-primary text-xl">{formatCurrency(totalAmount)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center py-12"
        >
          <div className="bg-white rounded-lg shadow p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>

            <h2 className="text-2xl font-bold text-earth-800 mb-4">Order Placed Successfully!</h2>

            <p className="text-muted-foreground mb-6">
              Thank you for your order. Your delicious food will be delivered shortly.
            </p>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5, times: [0, 0.5, 1], repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            >
              <Button className="w-full" size="lg" onClick={() => router.push("/")}>
                Back to Home
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

