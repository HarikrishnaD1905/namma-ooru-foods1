"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { MenuItem } from "@/lib/food-data"

export interface CartItem {
  id: string
  menuItemId: string
  name: string
  price: number
  quantity: number
  customizations: {
    name: string
    option: string
    price: number
  }[]
  image: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: MenuItem, quantity: number, customizations: CartItem["customizations"]) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [cartTotal, setCartTotal] = useState(0)
  const [cartCount, setCartCount] = useState(0)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setItems(parsedCart)
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(items))
    }

    // Calculate cart total and count
    const total = items.reduce((sum, item) => {
      const itemTotal = item.price * item.quantity
      return sum + itemTotal
    }, 0)

    const count = items.reduce((sum, item) => sum + item.quantity, 0)

    setCartTotal(total)
    setCartCount(count)
  }, [items])

  const addToCart = (menuItem: MenuItem, quantity: number, customizations: CartItem["customizations"]) => {
    // Calculate the total price including customizations
    const customizationPrice = customizations.reduce((sum, c) => sum + c.price, 0)
    const totalPrice = menuItem.price + customizationPrice

    // Create a unique ID based on the item and customizations
    const customizationKey = customizations.map((c) => `${c.name}-${c.option}`).join("|")
    const itemId = `${menuItem.id}-${customizationKey}`

    // Check if the item with the same customizations is already in the cart
    const existingItemIndex = items.findIndex((item) => item.id === itemId)

    if (existingItemIndex >= 0) {
      // Update quantity of existing item
      const updatedItems = [...items]
      updatedItems[existingItemIndex].quantity += quantity
      setItems(updatedItems)
    } else {
      // Add new item to cart
      const newItem: CartItem = {
        id: itemId,
        menuItemId: menuItem.id,
        name: menuItem.name,
        price: totalPrice,
        quantity,
        customizations,
        image: menuItem.image,
      }

      setItems((prev) => [...prev, newItem])
    }

    // Add animation trigger
    document.dispatchEvent(new Event("cart:added"))
  }

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))

    // If cart is empty after removal, clear localStorage
    if (items.length === 1) {
      localStorage.removeItem("cart")
    }
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id)
      return
    }

    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem("cart")
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

