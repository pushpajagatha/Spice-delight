
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2400&auto=format&fit=crop)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-spice-500/90 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in">
            Experience Authentic Flavors
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-reveal" style={{ animationDelay: "200ms" }}>
            A Culinary Journey Through India's Finest Flavors
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-reveal" style={{ animationDelay: "400ms" }}>
            Discover our exquisite menu featuring authentic Indian cuisine along with Chinese and Italian favorites with an Indian twist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal" style={{ animationDelay: "600ms" }}>
            <Link to="/menu">
              <Button className="bg-spice-500 hover:bg-spice-600 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg">
                Explore Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/menu/indian">
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-6 font-medium text-lg">
                Indian Specials
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
