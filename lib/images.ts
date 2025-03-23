import PlaceholderImage from "@/components/placeholder-image"

// Mock image paths
const imagePaths = {
  "/images/categories/breakfast.jpg":  "/images/categories/breakfast.jpg",
  "/images/categories/lunch.jpg": "/images/categories/lunch.jpg",
  "/images/categories/dinner.jpg": "/images/categories/dinner.jpg",
  "/images/categories/snacks.jpg": "/images/categories/snacks.jpg",
  "/images/categories/sweets.jpg": "/images/categories/sweets.jpg",
  "/images/categories/beverages.jpg": "/images/categories/beverages.jpg",

  "/images/items/idli.jpg": "/images/items/idli.jpg",
  "/images/items/dosa.jpg": "/images/items/dosa.jpg",
  "/images/items/pongal.jpg": "/images/items/pongal.jpg",
  "/images/items/vada.jpg": "/images/items/vada.jpg",
  "/images/items/meals.jpg": "/images/items/meals.jpg",

  "/images/items/biryani.jpg":"/images/items/biryani.jpg",
  "/images/items/parotta.jpg": "/images/items/parotta.jpg",
  "/images/items/vadai-curry.jpg": "/images/items/vadai-curry.jpg",


  "/images/items/murukku.jpg": "/images/items/murukku.jpg",
  "/images/items/bonda.jpg":"/images/items/bonda.jpg",
  "/images/items/mysore-pak.jpg": "/images/items/mysore-pak.jpg",
  "/images/items/jangiri.jpg": "/images/items/jangiri.jpg",
  "/images/items/filter-coffee.jpg": "/images/items/filter-coffee.jpg",
  "/images/items/nannari.jpg": "/images/items/nannari.jpg",
}

// Function to get image paths
export function getImagePath(path: string): string {
  return imagePaths[path] || "/placeholder.svg"
}

// Banner images
export const bannerImages = [
  "/images/banner/tncuisine.jpg": "/images/banner/tncuisine.jpg",
  "/images/banner/traditionalfoods.jpg": "/images/banner/traditionalfoods.jpg",
  "/images/banner/authflavours.jpg": "/images/banner/authflavours.jpg",
]

// Logo
export const logoImage = "/images/banner/logo.jpg": "/images/banner/logo.jpg"

