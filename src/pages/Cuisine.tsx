
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import MenuSection from "@/components/MenuSection";
import { 
  cuisines, 
  getMenuItemsByCuisine,
  CuisineType,
} from "@/data/menuData";

const Cuisine = () => {
  const { cuisineId } = useParams<{ cuisineId: string }>();
  const [searchParams] = useSearchParams();
  const highlightedItemId = searchParams.get("highlight");
  
  const validCuisineId = (cuisineId || "indian") as CuisineType;
  const cuisineInfo = cuisines.find(c => c.id === validCuisineId);
  const menuItems = getMenuItemsByCuisine(validCuisineId);

  useEffect(() => {
    if (highlightedItemId) {
      setTimeout(() => {
        const element = document.getElementById(highlightedItemId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-2', 'ring-spice-500', 'ring-offset-2');
          
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-spice-500', 'ring-offset-2');
          }, 3000);
        }
      }, 500);
    }
  }, [highlightedItemId]);

  if (!cuisineInfo) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Cuisine not found</h1>
          <p>The cuisine you're looking for doesn't exist in our menu.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${cuisineInfo.image})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-spice-500/90 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 animate-fade-in">
              {cuisineInfo.name} Cuisine
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-reveal" style={{ animationDelay: "200ms" }}>
              {cuisineInfo.name} Specialties
            </h1>
            <p className="text-white/90 text-lg mb-8 animate-reveal" style={{ animationDelay: "300ms" }}>
              {cuisineInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <MenuSection title={`${cuisineInfo.name} Dishes`} items={menuItems} initialItemCount={9} />
    </Layout>
  );
};

export default Cuisine;
