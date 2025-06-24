
import { useState } from "react";
import { MenuItem as MenuItemType } from "@/data/menuData";
import { Flame } from "lucide-react";

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

const MenuItem = ({ item, index }: MenuItemProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const renderSpicyLevel = (level: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(level)].map((_, i) => (
          <Flame
            key={i}
            className="h-3.5 w-3.5 text-spice-500"
            fill={i < level ? "currentColor" : "none"}
          />
        ))}
      </div>
    );
  };

  return (
    <div 
      className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg menu-reveal animate-reveal"
      style={{ 
        "--reveal-delay": index,
      } as React.CSSProperties}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
        <img
          src={item.image}
          alt={item.name}
          className={`h-full w-full object-cover transition-all duration-700 ${
            isImageLoaded ? "scale-100 blur-0" : "scale-105 blur-md"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        {item.vegetarian && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-leaf-600 border border-leaf-200">
            Vegetarian
          </div>
        )}
        {item.popular && (
          <div className="absolute top-3 right-3 bg-spice-500/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white">
            Popular
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-semibold text-lg">{item.name}</h3>
          <span className="font-medium text-spice-700">{formatPrice(item.price)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        <div className="flex justify-between items-center">
          <div className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {item.category === "starter" ? "Starter" : item.category === "main" ? "Main Course" : "Dessert"}
          </div>
          {item.spicyLevel > 0 && renderSpicyLevel(item.spicyLevel)}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
