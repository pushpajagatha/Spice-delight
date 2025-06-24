
import { useState } from "react";
import { MenuItem as MenuItemType } from "@/data/menuData";
import MenuItem from "./MenuItem";
import { Button } from "@/components/ui/button";

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
  initialItemCount?: number;
}

const MenuSection = ({ title, items, initialItemCount = 6 }: MenuSectionProps) => {
  const [visibleItemCount, setVisibleItemCount] = useState(initialItemCount);

  const showMoreItems = () => {
    setVisibleItemCount(prevCount => Math.min(prevCount + 6, items.length));
  };

  const visibleItems = items.slice(0, visibleItemCount);
  const hasMoreItems = visibleItemCount < items.length;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-8">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleItems.map((item, index) => (
            <MenuItem key={item.id} item={item} index={index} />
          ))}
        </div>
        
        {hasMoreItems && (
          <div className="flex justify-center">
            <Button 
              onClick={showMoreItems}
              variant="outline" 
              className="border-spice-200 hover:border-spice-300 text-spice-600 hover:bg-spice-50"
            >
              Show More Dishes
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
