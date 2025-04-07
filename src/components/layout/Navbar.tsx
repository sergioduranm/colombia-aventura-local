
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, MapPin, Users, Calendar, BookOpen, HelpCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Explorar Destinos", path: "/destinations", icon: MapPin },
  { name: "Conoce Locales", path: "/locals", icon: Users },
  { name: "Experiencias", path: "/experiences", icon: Calendar },
  { name: "Comunidad", path: "/community", icon: BookOpen },
  { name: "Nosotros", path: "/about", icon: Info },
  { name: "Ayuda", path: "/help", icon: HelpCircle }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold bg-clip-text text-transparent bg-colombia-gradient"
            >
              Colombia Aventura
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium px-3 py-2 rounded-md flex items-center transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-orange-50"
                      : "text-gray-600 hover:text-primary hover:bg-orange-50"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-1" />
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/my-trip">
              <Button variant="outline" className="text-primary border-primary hover:bg-orange-50">
                Mi Viaje
              </Button>
            </Link>
            <Link to="/local-portal">
              <Button className="bg-primary hover:bg-primary/90">
                Portal Local
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm block px-3 py-2 rounded-md flex items-center ${
                    location.pathname === link.path
                      ? "text-primary bg-orange-50 font-medium"
                      : "text-gray-600 hover:text-primary hover:bg-orange-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {link.name}
                </Link>
              );
            })}
            <div className="border-t border-gray-200 my-2 pt-2 flex flex-col space-y-2">
              <Link 
                to="/my-trip" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm px-3 py-2 rounded-md text-primary font-medium flex items-center"
              >
                <User className="w-4 h-4 mr-2" />
                Mi Viaje
              </Link>
              <Link 
                to="/local-portal" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Portal Local
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
