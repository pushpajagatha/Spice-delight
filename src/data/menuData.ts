
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  cuisine: CuisineType;
  vegetarian: boolean;
  spicyLevel: 1 | 2 | 3;
  popular?: boolean;
}

export type CuisineType = "indian" | "chinese" | "italian";

export interface Cuisine {
  id: CuisineType;
  name: string;
  description: string;
  image: string;
}

export const cuisines: Cuisine[] = [
  {
    id: "indian",
    name: "Indian",
    description: "Authentic Indian cuisine with rich spices and flavors",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356cbe?q=80&w=736&auto=format&fit=crop"
  },
  {
    id: "chinese",
    name: "Chinese",
    description: "Flavorful Chinese dishes with an Indian twist",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=736&auto=format&fit=crop"
  },
  {
    id: "italian",
    name: "Italian",
    description: "Classic Italian favorites with a unique Indian touch",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=736&auto=format&fit=crop"
  }
];

export const menuItems: MenuItem[] = [
  // Indian Cuisine
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    description: "Tender chicken cooked in a rich buttery tomato sauce with a blend of aromatic spices",
    price: 320,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=736&auto=format&fit=crop",
    category: "main",
    cuisine: "indian",
    vegetarian: false,
    spicyLevel: 2,
    popular: true
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    description: "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions",
    price: 280,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=736&auto=format&fit=crop",
    category: "starter",
    cuisine: "indian",
    vegetarian: true,
    spicyLevel: 2,
    popular: true
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    description: "Black lentils slow-cooked with butter and cream, finished with a touch of spices",
    price: 220,
    image: "https://images.unsplash.com/photo-1626200926783-7c3b71e6b3ad?q=80&w=736&auto=format&fit=crop",
    category: "main",
    cuisine: "indian",
    vegetarian: true,
    spicyLevel: 1
  },
  {
    id: "biryani",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices",
    price: 340,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=736&auto=format&fit=crop",
    category: "main",
    cuisine: "indian",
    vegetarian: false,
    spicyLevel: 3,
    popular: true
  },
  {
    id: "aloo-gobi",
    name: "Aloo Gobi",
    description: "Potatoes and cauliflower cooked with turmeric and traditional Indian spices",
    price: 190,
    image: "https://images.unsplash.com/photo-1644364935906-792b2239e4f4?q=80&w=736&auto=format&fit=crop",
    category: "main",
    cuisine: "indian",
    vegetarian: true,
    spicyLevel: 2
  },
  {
    id: "samosa",
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas, served with mint chutney",
    price: 120,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=736&auto=format&fit=crop",
    category: "starter",
    cuisine: "indian",
    vegetarian: true,
    spicyLevel: 2
  },
  
  // Chinese Cuisine
  {
    id: "gobi-manchurian",
    name: "Gobi Manchurian",
    description: "Crispy cauliflower florets tossed in a tangy and spicy Manchurian sauce",
    price: 240,
    image: "https://images.unsplash.com/photo-1626132647523-66d99576ef53?q=80&w=736&auto=format&fit=crop",
    category: "starter",
    cuisine: "chinese",
    vegetarian: true,
    spicyLevel: 3,
    popular: true
  },
  {
    id: "hakka-noodles",
    name: "Hakka Noodles",
    description: "Stir-fried noodles with vegetables and soy sauce, a popular Indo-Chinese dish",
    price: 210,
    image: "https://images.unsplash.com/photo-1619380061814-58f03707f082?q=80&w=736&auto=format&fit=crop",
    category: "main",
    cuisine: "chinese",
    vegetarian: true,
    spicyLevel: 2
  },
  {
    id: "chilli-chicken",
    name: "Chilli Chicken",
    description: "Spicy and tangy chicken preparation with bell peppers and soy sauce",
    price: 290,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=736&auto=format&fit=crop",
    category: "main",
    cuisine: "chinese",
    vegetarian: false,
    spicyLevel: 3
  },
  {
    id: "veg-fried-rice",
    name: "Vegetable Fried Rice",
    description: "Basmati rice stir-fried with mixed vegetables and Indo-Chinese spices",
    price: 230,
    image: "https://images.unsplash.com/photo-1676285761461-bc757c372e48?q=80&w=736&auto=format&fit=crop",
    category: "main",
    cuisine: "chinese",
    vegetarian: true,
    spicyLevel: 1
  },
  
  // Italian Cuisine
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil with an Indian twist",
    price: 350,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=736&auto=format&fit=crop",
    category: "main",
    cuisine: "italian",
    vegetarian: true,
    spicyLevel: 1,
    popular: true
  },
  {
    id: "pasta-arrabbiata",
    name: "Pasta Arrabbiata",
    description: "Penne pasta in a spicy tomato sauce with garlic and chili flakes",
    price: 270,
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=736&auto=format&fit=crop",
    category: "main",
    cuisine: "italian",
    vegetarian: true,
    spicyLevel: 2
  },
  {
    id: "risotto",
    name: "Mushroom Risotto",
    description: "Creamy Arborio rice cooked with mushrooms and Parmesan cheese",
    price: 320,
    image: "https://images.unsplash.com/photo-1651761296089-7f6033c27108?q=80&w=736&auto=format&fit=crop",
    category: "main",
    cuisine: "italian",
    vegetarian: true,
    spicyLevel: 1
  },
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    description: "Freshly baked bread with garlic butter and herbs",
    price: 150,
    image: "https://images.unsplash.com/photo-1619531053879-e816248ab01e?q=80&w=736&auto=format&fit=crop",
    category: "starter",
    cuisine: "italian",
    vegetarian: true,
    spicyLevel: 1
  }
];

export const categories = [
  { id: "starter", name: "Starters" },
  { id: "main", name: "Main Course" },
  { id: "dessert", name: "Desserts" }
];

export const getMenuItemsByCuisine = (cuisine: CuisineType) => {
  return menuItems.filter(item => item.cuisine === cuisine);
};

export const getMenuItemsByCategory = (category: string) => {
  return menuItems.filter(item => item.category === category);
};

export const getPopularItems = () => {
  return menuItems.filter(item => item.popular);
};

export const searchMenuItems = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return menuItems.filter(
    item => 
      item.name.toLowerCase().includes(lowercaseQuery) || 
      item.description.toLowerCase().includes(lowercaseQuery)
  );
};
