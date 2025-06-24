
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchMenuItems } from "@/data/menuData";

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchMenuItems>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (query.trim().length > 1) {
      const results = searchMenuItems(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleItemClick = (id: string, cuisine: string) => {
    setQuery("");
    setSearchResults([]);
    navigate(`/menu/${cuisine}?highlight=${id}`);
    if (onClose) onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      const firstResult = searchResults[0];
      handleItemClick(firstResult.id, firstResult.cuisine);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search for dishes, cuisines..."
          value={query}
          onChange={handleInputChange}
          className="pr-10 py-6 text-lg bg-white rounded-lg"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setQuery("")}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="h-8 w-8"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </form>

      {searchResults.length > 0 && (
        <div className="mt-4 bg-white rounded-lg shadow-lg overflow-hidden max-h-[80vh] overflow-y-auto animate-scale-in">
          <div className="p-2">
            {searchResults.map((item) => (
              <div
                key={item.id}
                className="p-3 hover:bg-gray-50 rounded-md cursor-pointer flex items-center gap-4 transition-colors"
                onClick={() => handleItemClick(item.id, item.cuisine)}
              >
                <div className="h-14 w-14 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="capitalize">{item.cuisine}</span>
                    <span>•</span>
                    <span>{formatPrice(item.price)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
