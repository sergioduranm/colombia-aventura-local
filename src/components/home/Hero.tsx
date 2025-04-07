
import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="hero-pattern min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-colombia-yellow/30 animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-colombia-red/20 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-40 left-1/4 w-72 h-72 rounded-full bg-colombia-green/20 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            Descubre Colombia 
            <span className="bg-clip-text text-transparent bg-colombia-gradient"> con expertos locales</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Conectamos viajeros como tú con colombianos apasionados que te acompañarán a explorar lo auténtico y resolver lo práctico.
          </p>
          
          <div className="bg-white p-2 rounded-full shadow-lg flex mb-8">
            <div className="flex-grow flex items-center px-4">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="¿A dónde quieres ir en Colombia?"
                className="w-full bg-transparent border-none focus:outline-none text-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="rounded-full bg-primary hover:bg-primary/90 px-6">
              <Search className="h-5 w-5 mr-2" />
              Buscar
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/destinations">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explorar Destinos
              </Button>
            </Link>
            <Link to="/locals">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-orange-50">
                Conocer Locales
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
