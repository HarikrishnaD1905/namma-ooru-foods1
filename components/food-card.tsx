"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { MenuItem } from "@/lib/food-data"
import { formatCurrency, getDiscountedPrice } from "@/lib/utils"
import { getImagePath } from "@/lib/images"

interface FoodCardProps {
  item: MenuItem
  index: number
}

export default function FoodCard({ item, index }: FoodCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Calculate the final price after discount
  const finalPrice = item.discount ? getDiscountedPrice(item.price, item.discount) : item.price

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="food-shadow group relative rounded-lg overflow-hidden bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/food/${item.id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={getImagePath(item.image) || "/placeholder.svg"}
            alt={item.name}
            className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
            width={400}
            height={300}
          />

          {item.isPopular && (
            <div className="absolute top-2 right-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-spice-500 text-white text-xs font-semibold px-2 py-1 rounded-full"
              >
                Popular
              </motion.div>
            </div>
          )}

          {item.discount && (
            <div className="absolute top-2 left-2">
              <motion.div
                initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full"
              >
                {item.discount}% OFF
              </motion.div>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-earth-800">{item.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2 h-10">{item.description}</p>

          <div className="flex justify-between items-center">
            <div>
              {item.discount ? (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">{formatCurrency(finalPrice)}</span>
                  <span className="text-sm text-muted-foreground line-through">{formatCurrency(item.price)}</span>
                </div>
              ) : (
                <span className="text-lg font-bold text-primary">{formatCurrency(item.price)}</span>
              )}
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: isHovered ? 1 : 0.9,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="text-xs py-1 px-2 rounded bg-earth-100 text-earth-800"
            >
              View Details
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

