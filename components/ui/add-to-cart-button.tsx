"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import type { MenuItem } from "@/lib/food-data"
import { ShoppingBag, Check } from "lucide-react"

interface AddToCartButtonProps {
  item: MenuItem
  quantity: number
  customizations: {
    name: string
    option: string
    price: number
  }[]
  onSuccess?: () => void
}

export function AddToCartButton({ item, quantity, customizations, onSuccess }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Add to cart
    addToCart(item, quantity, customizations)

    // Show success animation
    setTimeout(() => {
      setIsAdding(false)
      setIsAdded(true)

      // Reset after showing success
      setTimeout(() => {
        setIsAdded(false)
        if (onSuccess) onSuccess()
      }, 1500)
    }, 500)
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isAdding || isAdded}
      className={`w-full transition-all transform ${isAdding ? "scale-95" : ""} ${isAdded ? "bg-green-600 hover:bg-green-600" : ""}`}
    >
      {isAdding ? (
        <span className="animate-pulse">Adding...</span>
      ) : isAdded ? (
        <span className="flex items-center justify-center gap-2 animate-bounce">
          <Check className="w-4 h-4" /> Added to cart
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          <ShoppingBag className="w-4 h-4" /> Add to cart
        </span>
      )}
    </Button>
  )
}

