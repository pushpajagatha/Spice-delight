
import React, { useState } from "react";
import { 
  Pizza, Salad, Coffee, IndianRupee, 
  UtensilsCrossed, CookingPot, Wine, Cherry
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";

type MenuCategory = "starters" | "mains" | "desserts" | "drinks";
type Cuisine = "indian" | "chinese" | "italian" | "all";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("starters");
  const [activeCuisine, setActiveCuisine] = useState<Cuisine>("all");

  // Menu data with multiple cuisines
  const menuItems = {
    starters: [
      // Indian Starters
      { id: 1, name: "Paneer Tikka", description: "Marinated cottage cheese chunks, grilled to perfection in a tandoor, served with mint chutney", price: 220, featured: true, cuisine: "indian", image: "🧀" },
      { id: 2, name: "Samosa", description: "Crispy fried pastry filled with spiced potatoes and peas, served with tamarind chutney", price: 120, featured: false, cuisine: "indian", image: "🥟" },
      { id: 3, name: "Veg Pakora", description: "Assorted vegetables dipped in gram flour batter and deep fried, served with mint chutney", price: 150, featured: false, cuisine: "indian", image: "🍲" },
      { id: 4, name: "Dahi Puri", description: "Crispy hollow puris filled with potatoes, moong sprouts, yogurt and tangy chutneys", price: 180, featured: true, cuisine: "indian", image: "🥣" },
      { id: 19, name: "Papdi Chaat", description: "Crispy flour crackers topped with potatoes, chickpeas, yogurt and chutneys", price: 160, cuisine: "indian", featured: false, image: "🥘" },
      { id: 20, name: "Aloo Tikki", description: "Spiced potato patties served with chickpea curry and chutneys", price: 140, cuisine: "indian", featured: false, image: "🥔" },
      
      // Chinese Starters
      { id: 21, name: "Spring Rolls", description: "Crispy rolls filled with vegetables and served with dipping sauce", price: 180, cuisine: "chinese", featured: false, image: "🥠" },
      { id: 22, name: "Dim Sum", description: "Steamed dumplings filled with various ingredients", price: 240, cuisine: "chinese", featured: true, image: "🥟" },
      { id: 23, name: "Crispy Chilli Potatoes", description: "Fried potato strips tossed in spicy sauce", price: 190, cuisine: "chinese", featured: false, image: "🥔" },
      { id: 24, name: "Manchurian", description: "Fried vegetable balls in a savory, tangy sauce", price: 210, cuisine: "chinese", featured: false, image: "🥢" },
      
      // Italian Starters
      { id: 25, name: "Bruschetta", description: "Grilled bread rubbed with garlic and topped with diced tomatoes and herbs", price: 200, cuisine: "italian", featured: false, image: "🍞" },
      { id: 26, name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze", price: 260, cuisine: "italian", featured: true, image: "🥗" },
      { id: 27, name: "Garlic Bread", description: "Toasted bread topped with garlic butter and herbs", price: 150, cuisine: "italian", featured: false, image: "🥖" },
      { id: 28, name: "Arancini", description: "Stuffed rice balls coated with breadcrumbs and fried", price: 220, cuisine: "italian", featured: false, image: "🧆" },
    ],
    mains: [
      // Indian Mains
      { id: 5, name: "Butter Chicken", description: "Tender chicken pieces cooked in a rich tomato and butter gravy with aromatic spices", price: 320, featured: true, cuisine: "indian", image: "🍗" },
      { id: 6, name: "Palak Paneer", description: "Cottage cheese cubes in a creamy spinach gravy, flavored with garlic and spices", price: 280, featured: false, cuisine: "indian", image: "🍵" },
      { id: 7, name: "Biryani", description: "Fragrant basmati rice cooked with your choice of vegetables or meat, aromatic spices, and herbs", price: 350, featured: true, cuisine: "indian", image: "🍚" },
      { id: 8, name: "Dal Makhani", description: "Black lentils slow-cooked with butter, cream, and mild spices", price: 230, featured: false, cuisine: "indian", image: "🥣" },
      { id: 9, name: "Chole Bhature", description: "Spicy chickpea curry served with deep-fried bread", price: 260, featured: true, cuisine: "indian", image: "🫓" },
      
      // Chinese Mains
      { id: 29, name: "Kung Pao Chicken", description: "Spicy stir-fried chicken with peanuts and vegetables", price: 300, cuisine: "chinese", featured: true, image: "🍲" },
      { id: 30, name: "Hakka Noodles", description: "Stir-fried noodles with vegetables and choice of protein", price: 250, cuisine: "chinese", featured: false, image: "🍜" },
      { id: 31, name: "Schezwan Fried Rice", description: "Spicy fried rice with vegetables and choice of protein", price: 270, cuisine: "chinese", featured: false, image: "🍚" },
      { id: 32, name: "Sweet and Sour Vegetables", description: "Mixed vegetables in a tangy sweet and sour sauce", price: 240, cuisine: "chinese", featured: false, image: "🥡" },
      
      // Italian Mains
      { id: 33, name: "Margherita Pizza", description: "Classic pizza with tomato sauce, mozzarella, and basil", price: 320, cuisine: "italian", featured: true, image: "🍕" },
      { id: 34, name: "Fettuccine Alfredo", description: "Pasta in a creamy parmesan sauce", price: 280, cuisine: "italian", featured: false, image: "🍝" },
      { id: 35, name: "Risotto", description: "Creamy Italian rice dish with mushrooms and parmesan", price: 310, cuisine: "italian", featured: false, image: "🍚" },
      { id: 36, name: "Lasagna", description: "Layered pasta with rich meat sauce and cheese", price: 340, cuisine: "italian", featured: true, image: "🥘" },
    ],
    desserts: [
      // Indian Desserts
      { id: 10, name: "Gulab Jamun", description: "Soft milk solids balls, deep-fried and soaked in rose-flavored sugar syrup", price: 120, featured: true, cuisine: "indian", image: "🍯" },
      { id: 11, name: "Rasmalai", description: "Soft cottage cheese dumplings soaked in sweetened, thickened milk, flavored with cardamom", price: 150, featured: false, cuisine: "indian", image: "🥮" },
      { id: 12, name: "Kulfi", description: "Traditional Indian ice cream made with condensed milk, flavored with pistachios and cardamom", price: 130, featured: false, cuisine: "indian", image: "🍦" },
      { id: 13, name: "Jalebi", description: "Crispy, juicy pretzel-shaped dessert soaked in sugar syrup", price: 100, featured: true, cuisine: "indian", image: "🍭" },
      
      // Chinese Desserts
      { id: 37, name: "Date Pancakes", description: "Sweet pancakes filled with date paste", price: 160, cuisine: "chinese", featured: false, image: "🥞" },
      { id: 38, name: "Mango Pudding", description: "Refreshing mango-flavored pudding", price: 140, cuisine: "chinese", featured: false, image: "🥮" },
      
      // Italian Desserts
      { id: 39, name: "Tiramisu", description: "Coffee-flavored Italian dessert made of ladyfingers dipped in coffee", price: 180, cuisine: "italian", featured: true, image: "🍰" },
      { id: 40, name: "Panna Cotta", description: "Italian custard dessert topped with fresh berries", price: 170, cuisine: "italian", featured: false, image: "🍮" },
    ],
    drinks: [
      // Indian Drinks
      { id: 14, name: "Masala Chai", description: "Traditional Indian spiced tea with ginger, cardamom, and other aromatic spices", price: 80, featured: true, cuisine: "indian", image: "☕" },
      { id: 15, name: "Lassi", description: "Creamy yogurt-based drink, available in sweet, salted, or mango flavors", price: 120, featured: false, cuisine: "indian", image: "🥛" },
      { id: 16, name: "Fresh Lime Soda", description: "Refreshing drink made with fresh lime juice, soda water, and your choice of sweet or salt", price: 90, featured: true, cuisine: "indian", image: "🥤" },
      { id: 17, name: "Thandai", description: "Cooling drink made with milk, nuts, and aromatic spices like saffron and cardamom", price: 150, featured: false, cuisine: "indian", image: "🥤" },
      { id: 18, name: "Badam Milk", description: "Sweet almond-flavored milk, garnished with saffron strands and nuts", price: 130, featured: false, cuisine: "indian", image: "🥛" },
      
      // Chinese Drinks
      { id: 41, name: "Jasmine Tea", description: "Fragrant tea with jasmine flowers", price: 100, cuisine: "chinese", featured: false, image: "🍵" },
      { id: 42, name: "Lychee Bubble Tea", description: "Sweet tea with chewy tapioca pearls and lychee flavor", price: 160, cuisine: "chinese", featured: true, image: "🧋" },
      
      // Italian Drinks
      { id: 43, name: "Espresso", description: "Strong Italian coffee served in a small cup", price: 110, cuisine: "italian", featured: false, image: "☕" },
      { id: 44, name: "Italian Soda", description: "Sparkling water with flavored syrup and cream", price: 130, cuisine: "italian", featured: false, image: "🥤" },
    ],
  };

  const categoryIcons = {
    starters: <UtensilsCrossed className="h-5 w-5" />,
    mains: <CookingPot className="h-5 w-5" />,
    desserts: <Salad className="h-5 w-5" />,
    drinks: <Coffee className="h-5 w-5" />,
  };

  // Filter items based on selected cuisine
  const filteredItems = activeCuisine === 'all'
    ? menuItems[activeCategory]
    : menuItems[activeCategory].filter(item => item.cuisine === activeCuisine);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="text-center mb-10">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                SPICE DELIGHT
              </span>
            </h1>
            <div className="absolute -top-6 -right-6 transform rotate-12">
              <Cherry className="h-10 w-10 text-red-500" />
            </div>
          </div>
          <p className="mt-3 text-muted-foreground italic max-w-xl mx-auto">
            Authentic cuisines with the perfect blend of traditional flavors and modern presentation
          </p>
        </header>

        {/* Cuisine Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-full p-1 shadow-md flex">
            {(['all', 'indian', 'chinese', 'italian'] as Cuisine[]).map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => setActiveCuisine(cuisine)}
                className={cn(
                  "px-4 py-2 rounded-full transition-colors capitalize",
                  activeCuisine === cuisine
                    ? "bg-orange-500 text-white"
                    : "text-slate-700 hover:bg-orange-100"
                )}
              >
                {cuisine === 'all' ? 'All Cuisines' : cuisine}
              </button>
            ))}
          </div>
        </div>

        <Tabs 
          defaultValue="starters" 
          className="mb-12"
          onValueChange={(value) => setActiveCategory(value as MenuCategory)}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/60 backdrop-blur-sm p-1 rounded-full">
              {(Object.keys(menuItems) as MenuCategory[]).map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="rounded-full px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground capitalize flex items-center gap-2"
                >
                  {categoryIcons[category]}
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {(Object.keys(menuItems) as MenuCategory[]).map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
              {filteredItems.length === 0 && (
                <div className="text-center py-12 bg-white/50 rounded-lg">
                  <p className="text-slate-600">No {activeCuisine} {category} available. Try another cuisine.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 bg-accent/50 rounded-3xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-center mb-6">Chef's Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(menuItems).flat().filter(item => item.featured).slice(0, 3).map(item => (
              <FeaturedItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>Allergy information available upon request</p>
          <p className="mt-2">GST included in all prices</p>
        </footer>
      </div>
    </div>
  );
};

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  featured: boolean;
  cuisine: string;
  image: string;
}

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-muted group">
      <CardContent className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{item.name}</h3>
              <div className="text-2xl">{item.image}</div>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full capitalize">
                {item.cuisine}
              </span>
            </div>
            <p className="mt-2 text-muted-foreground text-sm">{item.description}</p>
          </div>
          <div className="bg-primary/10 px-3 py-1 rounded-full text-primary font-medium flex items-center gap-1">
            <IndianRupee className="h-3 w-3" />
            {item.price}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedItem = ({ item }: { item: MenuItem }) => {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-lg border border-primary/20 transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-center justify-center bg-gradient-to-r from-orange-500/20 to-red-500/20 h-32">
        <span className="text-6xl">{item.image}</span>
      </div>
      <div className="p-5">
        <h3 className="font-medium text-lg">{item.name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mt-1">{item.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-primary font-semibold flex items-center gap-1">
            <IndianRupee className="h-3 w-3" />
            {item.price}
          </span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Featured</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
