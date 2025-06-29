
import React from "react";
import { Link } from "react-router-dom";
import { Home, UtensilsCrossed, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Name */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
              SPICE DELIGHT
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink to="/" icon={<Home className="w-4 h-4" />} label="Home" />
            <NavLink
              to="/menu"
              icon={<UtensilsCrossed className="w-4 h-4" />}
              label="Menu"
            />
            <NavLink
              to="/search"
              icon={<Search className="w-4 h-4" />}
              label="Search"
            />
          </nav>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <nav className="flex items-center space-x-2">
              <NavLink to="/" icon={<Home className="w-4 h-4" />} />
              <NavLink to="/menu" icon={<UtensilsCrossed className="w-4 h-4" />} />
              <NavLink to="/search" icon={<Search className="w-4 h-4" />} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label?: string;
}

const NavLink = ({ to, icon, label }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-1.5 px-3 py-2 rounded-full text-slate-700 hover:bg-amber-50 transition-colors",
        !label && "md:px-2"
      )}
    >
      {icon}
      {label && <span>{label}</span>}
    </Link>
  );
};

export default Navigation;
