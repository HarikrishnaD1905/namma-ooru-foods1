"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Category } from "@/lib/food-data"
import { getImagePath } from "@/lib/images"

interface CategoryCardProps {
  category: Category
  index: number
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative group rounded-lg overflow-hidden food-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/menu/${category.id}`}>
        <div className="aspect-square relative">
          <Image
            src={getImagePath(category.image) || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover transition-all duration-500 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-1">{category.name}</h3>
            <p className="text-sm text-earth-100 opacity-90 line-clamp-2">{category.description}</p>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0.8,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center bg-earth-900/40"
          >
            <span className="px-4 py-2 rounded-full bg-spice-500 text-white font-medium text-sm">
              Browse {category.name}
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

