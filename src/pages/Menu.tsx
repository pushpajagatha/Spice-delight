
import { useState } from "react";
import Layout from "@/components/Layout";
import MenuSection from "@/components/MenuSection";
import { Button } from "@/components/ui/button";
import { getMenuItemsByCategory, categories } from "@/data/menuData";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starter");
  
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    // Scroll to the menu section with smooth scrolling
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const menuItems = getMenuItemsByCategory(activeCategory);
  const activeLabel = categories.find(cat => cat.id === activeCategory)?.name || "";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2800&auto=format&fit=crop)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-curry-500/90 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 animate-fade-in">
              Our Offerings
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-reveal" style={{ animationDelay: "200ms" }}>
              Explore Our Delicious Menu
            </h1>
            <p className="text-white/90 text-lg mb-8 animate-reveal" style={{ animationDelay: "300ms" }}>
              Discover a wide variety of authentic dishes from India and around the world, crafted with love and the finest ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  activeCategory === category.id
                    ? "bg-spice-500 hover:bg-spice-600 text-white"
                    : "border-gray-200 text-gray-700 hover:border-spice-300 hover:text-spice-600"
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section id="menu-section">
        <MenuSection title={activeLabel} items={menuItems} initialItemCount={9} />
      </section>
    </Layout>
  );
};

export default Menu;
