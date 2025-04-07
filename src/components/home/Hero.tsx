
import { useState } from "react";
import { Search, MapPin, Calendar, Plus, Minus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

type TravelerCategory = {
  type: string;
  description: string;
  count: number;
};

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  
  // Reemplazar el estado simple de invitados con categorías de viajeros
  const [travelers, setTravelers] = useState<TravelerCategory[]>([
    { type: "Adultos", description: "Desde 15 años", count: 1 },
    { type: "Jóvenes", description: "De 12 a 14 años", count: 0 },
    { type: "Niños", description: "De 2 a 11 años", count: 0 },
    { type: "Bebés", description: "Menores de 2 años", count: 0 },
  ]);

  const totalTravelers = travelers.reduce((sum, category) => sum + category.count, 0);

  const updateTravelerCount = (index: number, increment: boolean) => {
    const newTravelers = [...travelers];
    if (increment) {
      newTravelers[index].count += 1;
    } else {
      // No permitir menos de 0 para ninguna categoría, y al menos 1 adulto
      if (newTravelers[index].count > 0 && (index !== 0 || newTravelers[index].count > 1)) {
        newTravelers[index].count -= 1;
      }
    }
    setTravelers(newTravelers);
  };
  
  return (
    <div className="relative overflow-hidden bg-brand-secondary1/30 pt-12 pb-16">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-brand-primary/20 animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-brand-accent/20 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-40 left-1/4 w-72 h-72 rounded-full bg-brand-secondary1/60 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-brand-secondary2 font-heading">
            Descubre Colombia 
            <span className="brand-gradient-text ml-1">con expertos locales</span>
          </h1>
          <p className="text-lg text-brand-secondary2/80 mb-6 font-body">
            Conectamos viajeros como tú con colombianos apasionados que te acompañarán a explorar lo auténtico y resolver lo práctico.
          </p>
        </div>
        
        {/* Search bar similar to Airbnb */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-full shadow-lg p-2 md:p-3 flex flex-col md:flex-row items-stretch">
            {/* Destination field */}
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 p-2 md:pr-4">
              <MapPin className="h-5 w-5 text-brand-accent mr-2 shrink-0" />
              <div className="flex-grow">
                <label htmlFor="destination" className="block text-xs text-gray-500 font-medium">Destino</label>
                <Input
                  id="destination"
                  type="text"
                  placeholder="¿A dónde quieres ir?"
                  className="border-0 p-0 h-6 bg-transparent focus-visible:ring-0 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* Date Range field */}
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 p-2 md:px-4">
              <Calendar className="h-5 w-5 text-brand-accent mr-2 shrink-0" />
              <div className="flex-grow">
                <label className="block text-xs text-gray-500 font-medium">Fechas</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="h-6 p-0 text-left font-normal justify-start hover:bg-transparent text-sm group"
                    >
                      {startDate && endDate ? (
                        <span>
                          {format(startDate, "dd MMM")} - {format(endDate, "dd MMM, yyyy")}
                        </span>
                      ) : (
                        <span className="text-gray-500">Seleccionar fechas</span>
                      )}
                      <ChevronDown className="h-4 w-4 ml-1 text-gray-400 group-hover:text-brand-primary transition-colors" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="range"
                      selected={{
                        from: startDate,
                        to: endDate
                      }}
                      onSelect={(range) => {
                        setStartDate(range?.from);
                        setEndDate(range?.to);
                      }}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            {/* Travelers field - with dropdown icon */}
            <div className="flex-1 flex items-center p-2 md:px-4">
              <div className="flex-grow">
                <label className="block text-xs text-gray-500 font-medium">Personas</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="h-6 p-0 text-left font-normal justify-start hover:bg-transparent text-sm group w-full flex items-center"
                    >
                      <span className="flex-grow">
                        {totalTravelers === 1 ? '1 persona' : `${totalTravelers} personas`}
                      </span>
                      <ChevronDown className="h-4 w-4 ml-1 text-gray-400 group-hover:text-brand-primary transition-colors" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px] p-4" align="start">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-brand-secondary2">¿Quiénes viajan?</h3>
                      
                      {travelers.map((category, index) => (
                        <div key={category.type} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-brand-secondary2">{category.type}</p>
                            <p className="text-sm text-gray-500">{category.description}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-9 w-9 rounded-full border-gray-300"
                              onClick={() => updateTravelerCount(index, false)}
                              disabled={(index === 0 && category.count <= 1) || category.count <= 0}
                            >
                              <Minus className="h-4 w-4" />
                              <span className="sr-only">Reduce</span>
                            </Button>
                            <span className="text-xl font-medium w-5 text-center">{category.count}</span>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-9 w-9 rounded-full border-gray-300"
                              onClick={() => updateTravelerCount(index, true)}
                            >
                              <Plus className="h-4 w-4" />
                              <span className="sr-only">Increase</span>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            {/* Search button */}
            <Button className="mt-3 md:mt-0 h-full md:h-auto md:self-center rounded-full bg-brand-primary hover:bg-brand-primary/90 px-8 py-3 text-base shrink-0">
              <Search className="h-5 w-5 mr-2" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
