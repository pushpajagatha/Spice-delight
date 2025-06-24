
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CuisineCard from "@/components/CuisineCard";
import MenuItem from "@/components/MenuItem";
import { cuisines, getPopularItems } from "@/data/menuData";

const Index = () => {
  const popularItems = getPopularItems();

  return (
    <Layout>
      <Hero />

      {/* Cuisines Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-spice-100 text-spice-700 rounded-full text-sm font-medium mb-4">
            Our Offerings
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Explore Our Multi-Cuisine Menu
          </h2>
          <p className="text-gray-600 text-lg">
            Experience the rich flavors of India alongside international favorites with our unique twist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cuisines.map((cuisine, index) => (
            <CuisineCard key={cuisine.id} cuisine={cuisine} index={index} />
          ))}
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-16 bg-gray-50 indian-pattern">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <span className="inline-block px-3 py-1 bg-curry-100 text-curry-700 rounded-full text-sm font-medium mb-4">
                Customer Favorites
              </span>
              <h2 className="section-heading">Popular Dishes</h2>
            </div>
            <Link to="/menu" className="mt-4 md:mt-0 group flex items-center text-spice-600 hover:text-spice-700">
              <span className="font-medium">View Full Menu</span>
              <ChevronRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item, index) => (
              <MenuItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-leaf-100 text-leaf-700 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Experience the SpiceHaven Difference
          </h2>
          <p className="text-gray-600 text-lg">
            Our commitment to authentic flavors and exceptional service sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="bg-spice-100 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-spice-600">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Authentic Flavors</h3>
            <p className="text-gray-600">
              Our dishes are prepared using traditional recipes and fresh, locally-sourced ingredients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="bg-curry-100 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-curry-600">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Quick Service</h3>
            <p className="text-gray-600">
              Enjoy prompt and attentive service from our staff, ensuring a delightful dining experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="bg-leaf-100 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-leaf-600">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Passion for Food</h3>
            <p className="text-gray-600">
              Each dish is crafted with care and passion by our expert chefs, ensuring a memorable meal.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-spice-600 opacity-95 z-0"></div>
        <div className="absolute inset-0 indian-pattern opacity-10 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Embark on a Culinary Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Explore our diverse menu featuring the best of Indian, Chinese, and Italian cuisines.
            </p>
            <Link to="/menu" className="inline-block bg-white text-spice-600 hover:bg-gray-100 transition-colors px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl">
              Browse Our Menu
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
