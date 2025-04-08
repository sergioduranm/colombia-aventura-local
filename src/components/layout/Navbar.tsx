
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Users, Calendar, BookOpen, HelpCircle, Info, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const navLinks = [
  { name: "Conoce Locales", path: "/locals", icon: Users },
  { name: "Experiencias", path: "/experiences", icon: Calendar },
  { name: "Comunidad", path: "/community", icon: BookOpen },
  { name: "Nosotros", path: "/about", icon: Info },
  { name: "Ayuda", path: "/help", icon: HelpCircle }
];

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center"
            >
              <img 
                src="/kuna-logo.svg" 
                alt="Kuna Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          {/* Main Desktop Navigation with only the specified items */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/my-trip"
              className="text-sm font-medium px-3 py-2 rounded-md flex items-center transition-colors hover:text-brand-primary hover:bg-brand-secondary1/30"
            >
              Mi Viaje
            </Link>
            <Link
              to="/local-portal"
              className="text-sm font-medium px-3 py-2 rounded-md flex items-center transition-colors hover:text-brand-primary hover:bg-brand-secondary1/30"
            >
              Ser Anfitrión
            </Link>
            <Link
              to="/profile"
              className="text-sm font-medium p-1 rounded-full flex items-center transition-colors hover:bg-brand-secondary1/30"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-brand-primary/10 text-brand-primary">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>
          
          {/* Mobile menu - Sheet component for better UX */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="text-brand-secondary2 hover:text-brand-primary focus:outline-none"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <nav className="flex flex-col h-full">
                  <div className="flex-1 py-4">
                    <div className="mb-8 px-2">
                      <Link 
                        to="/profile"
                        className="flex items-center px-2 py-3 rounded-md hover:bg-brand-secondary1/30"
                      >
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarFallback className="bg-brand-primary/10 text-brand-primary">
                            <User className="h-5 w-5" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Iniciar sesión</p>
                          <p className="text-sm text-gray-500">Accede a tu cuenta</p>
                        </div>
                      </Link>
                    </div>
                    <div className="space-y-1 px-2">
                      <Link
                        to="/my-trip"
                        className="flex items-center px-2 py-3 text-sm rounded-md hover:bg-brand-secondary1/30"
                      >
                        Mi Viaje
                      </Link>
                      <Link
                        to="/local-portal"
                        className="flex items-center px-2 py-3 text-sm rounded-md hover:bg-brand-secondary1/30"
                      >
                        Ser Anfitrión
                      </Link>
                      <div className="h-px bg-gray-200 my-2"></div>
                      {navLinks.map((link) => {
                        const IconComponent = link.icon;
                        return (
                          <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center px-2 py-3 text-sm rounded-md hover:bg-brand-secondary1/30 ${
                              location.pathname === link.path ? "text-brand-primary bg-brand-secondary1/30 font-medium" : "text-brand-secondary2"
                            }`}
                          >
                            <IconComponent className="w-4 h-4 mr-3" />
                            {link.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
