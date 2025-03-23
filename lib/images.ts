import PlaceholderImage from "@/components/placeholder-image"

// Mock image paths
const imagePaths = {
  "/images/categories/breakfast.jpg":  "/images/categories/breakfast.jpg",
  "/images/categories/lunch.jpg": "/images/categories/lunch.jpg",
  "/images/categories/dinner.jpg": "/images/categories/dinner.jpg",
  "/images/categories/snacks.jpg": "/images/categories/snacks.jpg",
  "/images/categories/sweets.jpg": "/images/categories/sweets.jpg",
  "/images/categories/beverages.jpg": "/images/categories/beverages.jpg",

  "/images/items/idli.jpg": PlaceholderImage({ text: "Idli", width: 400, height: 300, bgColor: "#e8d6c0" }),
  "/images/items/dosa.jpg": PlaceholderImage({ text: "Dosa", width: 400, height: 300, bgColor: "#d7b791" }),
  "/images/items/pongal.jpg": PlaceholderImage({ text: "Pongal", width: 400, height: 300, bgColor: "#c69862" }),
  "/images/items/vada.jpg": PlaceholderImage({ text: "Vada", width: 400, height: 300, bgColor: "#b57a33" }),
  "/images/items/meals.jpg": PlaceholderImage({ text: "Full Meals", width: 400, height: 300, bgColor: "#7a4a22" }),
  "/images/items/biryani.jpg": PlaceholderImage({ text: "Biryani", width: 400, height: 300, bgColor: "#955c28" }),
  "/images/items/parotta.jpg": PlaceholderImage({ text: "Parotta", width: 400, height: 300, bgColor: "#e8d6c0" }),
  "/images/items/vadai-curry.jpg": PlaceholderImage({
    text: "Vadai Curry",
    width: 400,
    height: 300,
    bgColor: "#955c28",
  }),
  "/images/items/murukku.jpg": PlaceholderImage({ text: "Murukku", width: 400, height: 300, bgColor: "#d7b791" }),
  "/images/items/bonda.jpg": PlaceholderImage({ text: "Bonda", width: 400, height: 300, bgColor: "#c69862" }),
  "/images/items/mysore-pak.jpg": PlaceholderImage({ text: "Mysore Pak", width: 400, height: 300, bgColor: "#f8e8b9" }),
  "/images/items/jangiri.jpg": PlaceholderImage({ text: "Jangiri", width: 400, height: 300, bgColor: "#f3d989" }),
  "/images/items/filter-coffee.jpg": PlaceholderImage({
    text: "Filter Coffee",
    width: 400,
    height: 300,
    bgColor: "#60391c",
  }),
  "/images/items/nannari.jpg": PlaceholderImage({ text: "Nannari", width: 400, height: 300, bgColor: "#b2d5b2" }),
}

// Function to get image paths
export function getImagePath(path: string): string {
  return imagePaths[path] || "/placeholder.svg"
}

// Banner images
export const bannerImages = [
  PlaceholderImage({ text: "Tamil Nadu Cuisine", width: 1200, height: 400, bgColor: "#7a4a22" }),
  PlaceholderImage({ text: "Traditional Foods", width: 1200, height: 400, bgColor: "#955c28" }),
  PlaceholderImage({ text: "Authentic Flavors", width: 1200, height: 400, bgColor: "#60391c" }),
]

// Logo
export const logoImage = PlaceholderImage({
  text: "Namma Ooru",
  width: 200,
  height: 60,
  bgColor: "#955c28",
  textColor: "#ffffff",
})

