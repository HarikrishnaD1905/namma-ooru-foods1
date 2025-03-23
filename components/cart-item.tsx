"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Trash2, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CartItem } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"
import { getImagePath } from "@/lib/images"

interface CartItemProps {
  item: CartItem
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export default function CartItemComponent({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const [isRemoving, setIsRemoving] = useState(false)

  const handleRemove = () => {
    setIsRemoving(true)

    // Wait for animation to complete before removing
    setTimeout(() => {
      onRemove(item.id)
    }, 300)
  }

  const itemTotal = item.price * item.quantity

  return (
    <AnimatePresence>
      {!isRemoving ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center py-4 border-b"
        >
          {/* Item image */}
          <div className="w-20 h-20 relative rounded-md overflow-hidden flex-shrink-0">
            <Image src={getImagePath(item.image) || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
          </div>

          {/* Item details */}
          <div className="ml-4 flex-grow">
            <h3 className="font-medium text-earth-800">{item.name}</h3>

            {/* Customizations */}
            {item.customizations.length > 0 && (
              <div className="mt-1 text-xs text-muted-foreground">
                {item.customizations.map((customization, index) => (
                  <span key={index}>
                    {customization.name}: {customization.option}
                    {customization.price > 0 && ` (+${formatCurrency(customization.price)})`}
                    {index < item.customizations.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            )}

            {/* Price */}
            <div className="mt-1 font-medium">
              {formatCurrency(item.price)} × {item.quantity} = {formatCurrency(itemTotal)}
            </div>
          </div>

          {/* Quantity controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span className="w-6 text-center">{item.quantity}</span>

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Remove button */}
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 text-muted-foreground hover:text-destructive"
            onClick={handleRemove}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

