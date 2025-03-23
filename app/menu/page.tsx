"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { categories } from "@/lib/food-data"
import { getImagePath } from "@/lib/images"

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-earth-800 mb-8 text-center"
      >
        Our Menu
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg overflow-hidden shadow-md food-shadow"
          >
            <Link href={`/menu/${category.id}`}>
              <div className="h-48 relative">
                <Image
                  src={getImagePath(category.image) || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-earth-800">{category.name}</h2>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex justify-center">
                  <span className="text-earth-700 inline-flex items-center font-medium hover:text-earth-900 transition-colors">
                    View Items
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

