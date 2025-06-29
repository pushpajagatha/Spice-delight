
import React from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, ChefHat, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 shadow-2xl mb-16">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <div className="absolute -bottom-8 -right-8 text-yellow-200/20 transform rotate-12">
            <ChefHat className="w-64 h-64" />
          </div>
          
          <div className="relative z-20 p-8 sm:p-12 md:p-16 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              SPICE DELIGHT
            </h1>
            <p className="text-xl text-yellow-100 mb-8 max-w-xl">
              Experience authentic Indian cuisine with the perfect blend of traditional flavors and modern presentation
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link to="/menu" className="flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5" />
                  View Our Menu
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <a href="#location" className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Find Us
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Featured Items */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Chef's Specials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              title="Butter Chicken"
              description="Tender chicken pieces cooked in a rich tomato and butter gravy with aromatic spices"
              emoji="🍗"
            />
            <FeatureCard 
              title="Biryani"
              description="Fragrant basmati rice cooked with your choice of vegetables or meat, aromatic spices, and herbs"
              emoji="🍚"
              highlighted={true}
            />
            <FeatureCard 
              title="Gulab Jamun"
              description="Soft milk solids balls, deep-fried and soaked in rose-flavored sugar syrup"
              emoji="🍯"
            />
          </div>
        </div>
        
        {/* Hours and Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="location">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-semibold">Hours</h3>
            </div>
            <div className="space-y-2 text-slate-700">
              <p><span className="font-medium">Monday - Thursday:</span> 11:00 AM - 10:00 PM</p>
              <p><span className="font-medium">Friday - Saturday:</span> 11:00 AM - 11:00 PM</p>
              <p><span className="font-medium">Sunday:</span> 12:00 PM - 9:00 PM</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-semibold">Location</h3>
            </div>
            <p className="text-slate-700 mb-3">123 Spice Avenue, Flavor District</p>
            <p className="text-slate-700 mb-3">Mumbai, Maharashtra 400001</p>
            <p className="text-slate-700">Phone: +91 98765 43210</p>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="text-center text-sm text-slate-600 pt-8 border-t border-slate-200">
          <div className="flex justify-center mb-4">
            <Button asChild variant="ghost" size="sm">
              <Link to="/menu" className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4" />
                View Our Menu
              </Link>
            </Button>
          </div>
          <p>&copy; {new Date().getFullYear()} Spice Delight. All rights reserved.</p>
          <p className="mt-1">GST included in all prices. Allergy information available upon request.</p>
        </footer>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  emoji: string;
  highlighted?: boolean;
}

const FeatureCard = ({ title, description, emoji, highlighted = false }: FeatureCardProps) => {
  return (
    <div className={`rounded-xl p-6 transition-transform duration-300 hover:scale-105 ${
      highlighted 
        ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg' 
        : 'bg-white shadow-md'
    }`}>
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className={`text-xl font-semibold mb-2 ${highlighted ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
      <p className={highlighted ? 'text-white/90' : 'text-slate-600'}>{description}</p>
    </div>
  );
};

export default Home;
