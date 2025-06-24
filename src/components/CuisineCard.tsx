
import { Link } from "react-router-dom";
import { Cuisine } from "@/data/menuData";
import { ArrowRight } from "lucide-react";

interface CuisineCardProps {
  cuisine: Cuisine;
  index: number;
}

const CuisineCard = ({ cuisine, index }: CuisineCardProps) => {
  return (
    <Link 
      to={`/menu/${cuisine.id}`}
      className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-xl"
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={cuisine.image}
          alt={cuisine.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
        <h3 className="font-display text-2xl font-bold text-white mb-2">{cuisine.name}</h3>
        <p className="text-white/80 mb-4 max-w-[90%]">{cuisine.description}</p>
        <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
          <span className="text-sm font-medium">Explore Menu</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default CuisineCard;
