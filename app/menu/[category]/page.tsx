"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import FoodCard from "@/components/food-card"
import { getItemsByCategory, categories } from "@/lib/food-data"

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.category as string
  const [categoryName, setCategoryName] = useState("")
  const [items, setItems] = useState([])

  useEffect(() => {
    if (categoryId) {
      const category = categories.find((c) => c.id === categoryId)
      if (category) {
        setCategoryName(category.name)
      }

      const categoryItems = getItemsByCategory(categoryId)
      setItems(categoryItems)
    }
  }, [categoryId])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/menu">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-earth-800"
        >
          {categoryName}
        </motion.h1>
      </div>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <FoodCard key={item.id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No items found in this category.</p>
        </div>
      )}
    </div>
  )
}

