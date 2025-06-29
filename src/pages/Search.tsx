
import React, { useState } from "react";
import { Search as SearchIcon, X, UtensilsCrossed } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

// Define a type for our menu items
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  cuisine: string;
  category: string;
  image: string;
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<MenuItem[]>([]);

  // Combined menu data with multiple cuisines
  const allMenuItems: MenuItem[] = [
    // Indian Starters
    { id: 1, name: "Paneer Tikka", description: "Marinated cottage cheese chunks, grilled to perfection", price: 220, cuisine: "Indian", category: "starters", image: "🧀" },
    { id: 2, name: "Samosa", description: "Crispy fried pastry filled with spiced potatoes and peas", price: 120, cuisine: "Indian", category: "starters", image: "🥟" },
    // Indian Mains
    { id: 5, name: "Butter Chicken", description: "Tender chicken pieces cooked in a rich tomato and butter gravy", price: 320, cuisine: "Indian", category: "mains", image: "🍗" },
    { id: 6, name: "Palak Paneer", description: "Cottage cheese cubes in a creamy spinach gravy", price: 280, cuisine: "Indian", category: "mains", image: "🍵" },
    // Chinese Starters
    { id: 20, name: "Spring Rolls", description: "Crispy rolls filled with vegetables and served with dipping sauce", price: 180, cuisine: "Chinese", category: "starters", image: "🥠" },
    { id: 21, name: "Dim Sum", description: "Steamed dumplings filled with various ingredients", price: 240, cuisine: "Chinese", category: "starters", image: "🥟" },
    // Chinese Mains
    { id: 25, name: "Kung Pao Chicken", description: "Spicy stir-fried chicken with peanuts and vegetables", price: 300, cuisine: "Chinese", category: "mains", image: "🍲" },
    { id: 26, name: "Hakka Noodles", description: "Stir-fried noodles with vegetables and choice of protein", price: 250, cuisine: "Chinese", category: "mains", image: "🍜" },
    // Italian Starters
    { id: 30, name: "Bruschetta", description: "Grilled bread rubbed with garlic and topped with diced tomatoes", price: 200, cuisine: "Italian", category: "starters", image: "🍞" },
    { id: 31, name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze", price: 260, cuisine: "Italian", category: "starters", image: "🥗" },
    // Italian Mains
    { id: 35, name: "Margherita Pizza", description: "Classic pizza with tomato sauce, mozzarella, and basil", price: 320, cuisine: "Italian", category: "mains", image: "🍕" },
    { id: 36, name: "Fettuccine Alfredo", description: "Pasta in a creamy parmesan sauce", price: 280, cuisine: "Italian", category: "mains", image: "🍝" },
  ];

  const handleSearch = () => {
    const filtered = allMenuItems.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filtered);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Find Your Favorite Dish</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Search through our extensive menu of Indian, Chinese, and Italian cuisines
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                placeholder="Search by dish name, cuisine, or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-white rounded-full pl-10 border-amber-200 focus-visible:ring-orange-400"
              />
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              {searchQuery && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6" 
                  onClick={() => setSearchQuery('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <Button onClick={handleSearch} className="bg-orange-500 hover:bg-orange-600">
              Search
            </Button>
          </div>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow border-amber-100">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{item.image}</span>
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                          {item.cuisine}
                        </span>
                      </div>
                      <p className="mt-2 text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    <div className="text-orange-600 font-semibold">₹{item.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center py-12 bg-white/50 rounded-lg border border-amber-100">
            <div className="text-4xl mb-3">🍽️</div>
            <h3 className="text-xl font-medium text-slate-700">No dishes found</h3>
            <p className="text-slate-500 mt-2">Try a different search term or browse our menu</p>
            <Button asChild variant="outline" className="mt-4 border-orange-200 text-orange-700 hover:bg-orange-50">
              <Link to="/menu" className="flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4" />
                Browse Menu
              </Link>
            </Button>
          </div>
        ) : null}

        {!searchQuery && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Popular Cuisines</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Indian', 'Chinese', 'Italian'].map(cuisine => (
                <Card 
                  key={cuisine}
                  className="text-center cursor-pointer hover:shadow-md transition-shadow border-amber-100"
                  onClick={() => {
                    setSearchQuery(cuisine);
                    handleSearch();
                  }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-2">
                      {cuisine === 'Indian' ? '🍛' : cuisine === 'Chinese' ? '🥢' : '🍕'}
                    </div>
                    <h3 className="font-medium">{cuisine}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
