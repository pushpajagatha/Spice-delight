import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, MenuIcon, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-spice-500 via-curry-500 to-spice-600 shadow-md py-3"
            : "bg-gradient-to-r from-spice-500 via-curry-500 to-spice-600 py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-white">
              Akshaya<span className="text-yellow-100"> Delight</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-yellow-100 transition-colors nav-link">
              Home
            </Link>
            <Link to="/menu" className="text-white hover:text-yellow-100 transition-colors nav-link">
              Menu
            </Link>
            <Link to="/menu/indian" className="text-white hover:text-yellow-100 transition-colors nav-link">
              Indian
            </Link>
            <Link to="/menu/chinese" className="text-white hover:text-yellow-100 transition-colors nav-link">
              Chinese
            </Link>
            <Link to="/menu/italian" className="text-white hover:text-yellow-100 transition-colors nav-link">
              Italian
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:text-yellow-100 hover:bg-spice-600/30 transition-colors"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-yellow-100 hover:bg-spice-600/30 transition-colors"
              >
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/menu">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-yellow-100 hover:bg-spice-600/30 transition-colors"
              >
                <MenuIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:text-yellow-100 hover:bg-spice-600/30 transition-colors"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-100 hover:bg-spice-600/30 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-spice-600 to-spice-700 backdrop-blur-md shadow-md">
            <nav className="container mx-auto py-4 px-6 flex flex-col animate-fade-in">
              <Link
                to="/"
                className="py-3 border-b border-spice-500/20 font-medium text-white hover:text-yellow-100 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="py-3 border-b border-spice-500/20 font-medium text-white hover:text-yellow-100 transition-colors"
              >
                Menu
              </Link>
              <Link
                to="/menu/indian"
                className="py-3 border-b border-spice-500/20 font-medium text-white hover:text-yellow-100 transition-colors"
              >
                Indian
              </Link>
              <Link
                to="/menu/chinese"
                className="py-3 border-b border-spice-500/20 font-medium text-white hover:text-yellow-100 transition-colors"
              >
                Chinese
              </Link>
              <Link
                to="/menu/italian"
                className="py-3 font-medium text-white hover:text-yellow-100 transition-colors"
              >
                Italian
              </Link>
            </nav>
          </div>
        )}

        {/* Search Bar Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-4 animate-fade-in">
            <div className="container mx-auto px-4">
              <SearchBar onClose={() => setIsSearchOpen(false)} />
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="bg-gray-50 border-t border-gray-100 mt-12">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Akshaya Delight</h3>
              <p className="text-gray-600 mb-4">
                Authentic multi-cuisine restaurant offering the finest Indian, Chinese, and Italian dishes.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-spice-500 transition-colors">Home</Link></li>
                <li><Link to="/menu" className="text-gray-600 hover:text-spice-500 transition-colors">Menu</Link></li>
                <li><Link to="/menu/indian" className="text-gray-600 hover:text-spice-500 transition-colors">Indian Cuisine</Link></li>
                <li><Link to="/menu/chinese" className="text-gray-600 hover:text-spice-500 transition-colors">Chinese Cuisine</Link></li>
                <li><Link to="/menu/italian" className="text-gray-600 hover:text-spice-500 transition-colors">Italian Cuisine</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-2">Kakinada, Eastgodavari</p>
              <p className="text-gray-600 mb-2">Phone: +91 98765 43210</p>
              <p className="text-gray-600">Email: sreeakshayainn@gmail.com</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Akshaya Delight. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
