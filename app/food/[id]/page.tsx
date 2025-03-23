"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AddToCartButton } from "@/components/ui/add-to-cart-button"
import { type MenuItem, getItemById } from "@/lib/food-data"
import { formatCurrency, getDiscountedPrice } from "@/lib/utils"
import { getImagePath } from "@/lib/images"

export default function FoodItemPage() {
  const params = useParams()
  const router = useRouter()
  const [item, setItem] = useState<MenuItem | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, { name: string; price: number }>>({})

  useEffect(() => {
    if (params.id) {
      const foodItem = getItemById(params.id as string)
      if (foodItem) {
        setItem(foodItem)

        // Initialize default selections for customizations
        if (foodItem.customizations) {
          const initialSelections: Record<string, { name: string; price: number }> = {}

          foodItem.customizations.forEach((customization) => {
            // Select the first option by default
            if (customization.options.length > 0) {
              const defaultOption = customization.options[0]
              initialSelections[customization.id] = {
                name: defaultOption.name,
                price: defaultOption.price,
              }
            }
          })

          setSelectedOptions(initialSelections)
        }
      }
    }
  }, [params.id])

  const handleOptionChange = (customizationId: string, optionName: string, optionPrice: number) => {
    setSelectedOptions({
      ...selectedOptions,
      [customizationId]: {
        name: optionName,
        price: optionPrice,
      },
    })
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  const getCustomizations = () => {
    if (!item?.customizations) return []

    return Object.entries(selectedOptions).map(([id, option]) => {
      const customization = item.customizations?.find((c) => c.id === id)
      return {
        name: customization?.name || "",
        option: option.name,
        price: option.price,
      }
    })
  }

  const handleAddSuccess = () => {
    // Navigate to cart after adding to cart
    setTimeout(() => {
      router.push("/cart")
    }, 1000)
  }

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  // Calculate final price
  const basePrice = item.discount ? getDiscountedPrice(item.price, item.discount) : item.price

  // Add customization prices
  const customizationTotalPrice = Object.values(selectedOptions).reduce((sum, option) => sum + option.price, 0)

  const finalPrice = basePrice + customizationTotalPrice

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" size="sm" className="mb-6 gap-2" onClick={() => router.back()}>
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="rounded-xl overflow-hidden shadow-lg"
>
  {item.image.startsWith("data:image") ? (
    <img
      src={getImagePath(item.image)}
      alt={item.name}
      width={600}
      height={400}
      className="w-full h-auto object-cover"
    />
  ) : (
    <Image
      src={getImagePath(item.image) || "/placeholder.svg"}
      alt={item.name}
      width={600}
      height={400}
      className="w-full h-auto object-cover"
    />
  )}
</motion.div>


        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold text-earth-800 mb-2">{item.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            {item.tags.map((tag) => (
              <span key={tag} className="inline-block px-2 py-1 text-xs rounded-full bg-earth-100 text-earth-700">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-muted-foreground mb-6">{item.description}</p>

          <div className="mb-6">
            {item.discount ? (
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-primary">{formatCurrency(basePrice)}</span>
                <span className="text-lg text-muted-foreground line-through">{formatCurrency(item.price)}</span>
                <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-full">{item.discount}% OFF</span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-primary">{formatCurrency(item.price)}</span>
            )}
          </div>

          <Separator className="my-6" />

          {/* Customizations */}
          {item.customizations && item.customizations.length > 0 && (
            <div className="space-y-6 mb-6">
              <h3 className="text-lg font-semibold">Customize Your Order</h3>

              {item.customizations.map((customization) => (
                <div key={customization.id} className="space-y-3">
                  <h4 className="font-medium text-earth-700">{customization.name}</h4>

                  <RadioGroup
                    defaultValue={customization.options[0].id}
                    onValueChange={(value) => {
                      const selectedOption = customization.options.find((o) => o.id === value)
                      if (selectedOption) {
                        handleOptionChange(customization.id, selectedOption.name, selectedOption.price)
                      }
                    }}
                  >
                    {customization.options.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.id} id={`${customization.id}-${option.id}`} />
                        <Label htmlFor={`${customization.id}-${option.id}`} className="flex-grow">
                          {option.name}
                          {option.price > 0 && (
                            <span className="text-muted-foreground ml-2">+{formatCurrency(option.price)}</span>
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}

              <Separator />
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Quantity</h3>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="icon" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>

                <span className="w-8 text-center">{quantity}</span>

                <Button variant="outline" size="icon" onClick={() => handleQuantityChange(1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-muted-foreground">Total Price:</span>
                <div className="text-2xl font-bold text-primary">{formatCurrency(finalPrice * quantity)}</div>
              </div>

              <div className="w-1/2">
                <AddToCartButton
                  item={item}
                  quantity={quantity}
                  customizations={getCustomizations()}
                  onSuccess={handleAddSuccess}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

