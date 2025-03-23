export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  discount?: number
  image: string
  category: string
  tags: string[]
  available: boolean
  isPopular?: boolean
  customizations?: {
    id: string
    name: string
    options: {
      id: string
      name: string
      price: number
    }[]
  }[]
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
}

export const categories: Category[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Traditional Tamil Nadu breakfast specialties",
    image: "https://www.pexels.com/photo/overhead-shot-of-indian-food-8312083/",
  },
  {
    id: "lunch",
    name: "Lunch",
    description: "Authentic lunch meals ",
    image: "https://www.pexels.com/photo/close-up-shot-of-a-delicious-cuisine-14132112/",
  },
  {
    id: "dinner",
    name: "Dinner",
    description: "Evening meals and specialties",
    image: "https://www.pexels.com/photo/platter-of-foods-941869/",
  },
  {
    id: "snacks",
    name: "Snacks",
    description: "Traditional Tamil Nadu snacks and short eats",
    image: "https://www.pexels.com/photo/close-up-of-baking-on-tray-12865863/",
  },
  {
    id: "sweets",
    name: "Sweets",
    description: "Traditional Tamil Nadu desserts and sweets",
    image: "https://www.pexels.com/photo/woman-grabbing-a-bowl-with-food-8887249/",
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Traditional Tamil Nadu drinks and refreshments",
    image: "https://www.pexels.com/photo/masala-tea-with-spices-on-table-5946612/",
  },
]

export const menuItems: MenuItem[] = [
  {
    id: "idli",
    name: "Idli",
    description: "Soft, steamed rice cakes served with sambar and chutneys",
    price: 40,
    image: "/images/items/idli.jpg",
    category: "breakfast",
    tags: ["vegetarian", "steamed"],
    available: true,
    isPopular: true,
    customizations: [
      {
        id: "sambar",
        name: "Sambar Type",
        options: [
          { id: "regular", name: "Regular", price: 0 },
          { id: "spicy", name: "Spicy", price: 5 },
          { id: "extra", name: "Extra Sambar", price: 15 },
        ],
      },
      {
        id: "chutney",
        name: "Chutney Type",
        options: [
          { id: "coconut", name: "Coconut Chutney", price: 0 },
          { id: "tomato", name: "Tomato Chutney", price: 0 },
          { id: "mint", name: "Mint Chutney", price: 5 },
        ],
      },
    ],
  },
  {
    id: "dosa",
    name: "Dosa",
    description: "Crispy rice and lentil crepe served with sambar and chutneys",
    price: 60,
    image: "/images/items/dosa.jpg",
    category: "breakfast",
    tags: ["vegetarian", "crispy"],
    available: true,
    isPopular: true,
    customizations: [
      {
        id: "type",
        name: "Dosa Type",
        options: [
          { id: "plain", name: "Plain", price: 0 },
          { id: "masala", name: "Masala", price: 15 },
          { id: "ghee", name: "Ghee Roast", price: 20 },
          { id: "onion", name: "Onion", price: 15 },
        ],
      },
      {
        id: "chutney",
        name: "Chutney Type",
        options: [
          { id: "coconut", name: "Coconut Chutney", price: 0 },
          { id: "tomato", name: "Tomato Chutney", price: 0 },
          { id: "mint", name: "Mint Chutney", price: 5 },
        ],
      },
    ],
  },
  {
    id: "pongal",
    name: "Pongal",
    description: "Savory rice and lentil porridge with pepper, cumin and ghee",
    price: 70,
    image: "/images/items/pongal.jpg",
    category: "breakfast",
    tags: ["vegetarian", "hot"],
    available: true,
    customizations: [
      {
        id: "spice",
        name: "Spice Level",
        options: [
          { id: "mild", name: "Mild", price: 0 },
          { id: "medium", name: "Medium", price: 0 },
          { id: "spicy", name: "Spicy", price: 0 },
        ],
      },
      {
        id: "extras",
        name: "Add Extras",
        options: [
          { id: "ghee", name: "Extra Ghee", price: 10 },
          { id: "cashew", name: "Cashew Nuts", price: 20 },
        ],
      },
    ],
  },
  {
    id: "vada",
    name: "Medhu Vada",
    description: "Crispy lentil donuts served with sambar and chutneys",
    price: 50,
    image: "/images/items/vada.jpg",
    category: "breakfast",
    tags: ["vegetarian", "fried"],
    available: true,
    customizations: [
      {
        id: "count",
        name: "Quantity",
        options: [
          { id: "two", name: "2 Vadas", price: 0 },
          { id: "three", name: "3 Vadas", price: 25 },
        ],
      },
      {
        id: "serving",
        name: "Serving Style",
        options: [
          { id: "regular", name: "Regular", price: 0 },
          { id: "sambar", name: "Sambar Vada", price: 10 },
        ],
      },
    ],
  },
  {
    id: "meals",
    name: "Full Meals",
    description: "Traditional Tamil Nadu lunch with rice, sambar, rasam, vegetables, and more",
    price: 150,
    discount: 10,
    image: "/images/items/meals.jpg",
    category: "lunch",
    tags: ["vegetarian", "complete meal"],
    available: true,
    isPopular: true,
    customizations: [
      {
        id: "rice-type",
        name: "Rice Type",
        options: [
          { id: "white", name: "White Rice", price: 0 },
          { id: "par-boiled", name: "Par-boiled Rice", price: 0 },
          { id: "kezhvaragu", name: "Kezhvaragu Rice", price: 15 },
        ],
      },
      {
        id: "extras",
        name: "Add Extras",
        options: [
          { id: "appalam", name: "Extra Appalam", price: 10 },
          { id: "poriyal", name: "Extra Poriyal", price: 25 },
          { id: "curd", name: "Extra Curd", price: 15 },
        ],
      },
    ],
  },
  {
    id: "biryani",
    name: "Chettinad Biryani",
    description: "Aromatic rice cooked with traditional Chettinad spices and vegetables",
    price: 180,
    image: "/images/items/biryani.jpg",
    category: "lunch",
    tags: ["spicy", "rice-based"],
    available: true,
    isPopular: true,
    customizations: [
      {
        id: "type",
        name: "Biryani Type",
        options: [
          { id: "veg", name: "Vegetable", price: 0 },
          { id: "egg", name: "Egg", price: 20 },
          { id: "chicken", name: "Chicken", price: 60 },
          { id: "mutton", name: "Mutton", price: 90 },
        ],
      },
      {
        id: "spice",
        name: "Spice Level",
        options: [
          { id: "mild", name: "Mild", price: 0 },
          { id: "medium", name: "Medium", price: 0 },
          { id: "hot", name: "Hot", price: 0 },
        ],
      },
    ],
  },
  {
    id: "parotta",
    name: "Parotta",
    description: "Layered flatbread served with salna",
    price: 50,
    image: "/images/items/parotta.jpg",
    category: "dinner",
    tags: ["vegetarian", "flatbread"],
    available: true,
    isPopular: true,
    customizations: [
      {
        id: "count",
        name: "Quantity",
        options: [
          { id: "two", name: "2 Pieces", price: 0 },
          { id: "three", name: "3 Pieces", price: 25 },
          { id: "four", name: "4 Pieces", price: 50 },
        ],
      },
      {
        id: "side",
        name: "Side Dish",
        options: [
          { id: "salna", name: "Vegetable Salna", price: 0 },
          { id: "kurma", name: "Vegetable Kurma", price: 10 },
          { id: "kothu", name: "Make it Kothu Parotta", price: 30 },
        ],
      },
    ],
  },
  {
    id: "vadai-curry",
    name: "Vadai Curry",
    description: "Lentil vadas soaked in tangy and spicy gravy",
    price: 80,
    image: "/images/items/vadai-curry.jpg",
    category: "dinner",
    tags: ["vegetarian", "spicy"],
    available: true,
    customizations: [
      {
        id: "spice",
        name: "Spice Level",
        options: [
          { id: "mild", name: "Mild", price: 0 },
          { id: "medium", name: "Medium", price: 0 },
          { id: "hot", name: "Hot", price: 0 },
        ],
      },
    ],
  },
  {
    id: "murukku",
    name: "Murukku",
    description: "Crunchy, spiral-shaped savory snack made from rice and urad dal flour",
    price: 40,
    image: "/images/items/murukku.jpg",
    category: "snacks",
    tags: ["vegetarian", "fried", "crunchy"],
    available: true,
    customizations: [
      {
        id: "type",
        name: "Murukku Type",
        options: [
          { id: "regular", name: "Regular", price: 0 },
          { id: "pepper", name: "Pepper", price: 5 },
          { id: "garlic", name: "Garlic", price: 5 },
        ],
      },
    ],
  },
  {
    id: "bonda",
    name: "Bonda",
    description: "Deep-fried spiced potato balls covered in gram flour batter",
    price: 45,
    image: "/images/items/bonda.jpg",
    category: "snacks",
    tags: ["vegetarian", "fried", "spicy"],
    available: true,
    isPopular: true,
    customizations: [
      {
        id: "count",
        name: "Quantity",
        options: [
          { id: "two", name: "2 Pieces", price: 0 },
          { id: "four", name: "4 Pieces", price: 40 },
        ],
      },
      {
        id: "chutney",
        name: "Chutney",
        options: [
          { id: "coconut", name: "Coconut Chutney", price: 0 },
          { id: "mint", name: "Mint Chutney", price: 5 },
        ],
      },
    ],
  },
  {
    id: "mysore-pak",
    name: "Mysore Pak",
    description: "Traditional sweet made with gram flour, ghee, and sugar",
    price: 60,
    image: "/images/items/mysore-pak.jpg",
    category: "sweets",
    tags: ["vegetarian", "sweet"],
    available: true,
    customizations: [
      {
        id: "size",
        name: "Portion Size",
        options: [
          { id: "regular", name: "Regular", price: 0 },
          { id: "large", name: "Large", price: 30 },
        ],
      },
    ],
  },
  {
    id: "jangiri",
    name: "Jangiri",
    description: "Deep-fried sweet made from urad dal and soaked in sugar syrup",
    price: 50,
    image: "/images/items/jangiri.jpg",
    category: "sweets",
    tags: ["vegetarian", "sweet", "fried"],
    available: true,
    customizations: [
      {
        id: "count",
        name: "Quantity",
        options: [
          { id: "two", name: "2 Pieces", price: 0 },
          { id: "four", name: "4 Pieces", price: 45 },
        ],
      },
    ],
  },
  {
    id: "filter-coffee",
    name: "Filter Coffee",
    description: "Traditional South Indian coffee made with freshly ground coffee beans and chicory",
    price: 30,
    image: "/images/items/filter-coffee.jpg",
    category: "beverages",
    tags: ["hot", "caffeinated"],
    available: true,
    isPopular: true,
    customizations: [
      {
        id: "strength",
        name: "Strength",
        options: [
          { id: "regular", name: "Regular", price: 0 },
          { id: "strong", name: "Strong", price: 5 },
        ],
      },
      {
        id: "sugar",
        name: "Sugar",
        options: [
          { id: "regular", name: "Regular", price: 0 },
          { id: "less", name: "Less Sugar", price: 0 },
          { id: "none", name: "No Sugar", price: 0 },
        ],
      },
    ],
  },
  {
    id: "nannari-sarbath",
    name: "Nannari Sarbath",
    description: "Cooling drink made from the roots of the nannari plant",
    price: 40,
    image: "/images/items/nannari.jpg",
    category: "beverages",
    tags: ["cold", "refreshing"],
    available: true,
    customizations: [
      {
        id: "ice",
        name: "Ice",
        options: [
          { id: "regular", name: "Regular Ice", price: 0 },
          { id: "less", name: "Less Ice", price: 0 },
          { id: "none", name: "No Ice", price: 0 },
        ],
      },
      {
        id: "sugar",
        name: "Sugar",
        options: [
          { id: "regular", name: "Regular", price: 0 },
          { id: "less", name: "Less Sugar", price: 0 },
          { id: "none", name: "No Sugar", price: 0 },
        ],
      },
    ],
  },
]

export function getPopularItems() {
  return menuItems.filter((item) => item.isPopular)
}

export function getItemsByCategory(categoryId: string) {
  return menuItems.filter((item) => item.category === categoryId)
}

export function getItemById(id: string) {
  return menuItems.find((item) => item.id === id)
}

