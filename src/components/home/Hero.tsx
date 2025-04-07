
import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const destinations = [
  { name: "Cartagena", icon: "🏖️" },
  { name: "Medellín", icon: "🌸" },
  { name: "Bogotá", icon: "🏙️" },
  { name: "Santa Marta", icon: "⛰️" },
  { name: "Cali", icon: "💃" },
  { name: "San Andrés", icon: "🌊" },
  { name: "Villa de Leyva", icon: "🏛️" },
  { name: "Salento", icon: "☕" }
];

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [guests, setGuests] = useState("1");
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-12 pb-16">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-colombia-yellow/30 animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-colombia-red/20 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-40 left-1/4 w-72 h-72 rounded-full bg-colombia-green/20 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Descubre Colombia 
            <span className="bg-clip-text text-transparent bg-colombia-gradient"> con expertos locales</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Conectamos viajeros como tú con colombianos apasionados que te acompañarán a explorar lo auténtico y resolver lo práctico.
          </p>
        </div>
        
        {/* Search bar similar to Airbnb */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-full shadow-lg p-2 md:p-3 flex flex-col md:flex-row items-stretch">
            {/* Destination field */}
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 p-2 md:pr-4">
              <MapPin className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
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
              <Calendar className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
              <div className="flex-grow">
                <label className="block text-xs text-gray-500 font-medium">Fechas</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="h-6 p-0 text-left font-normal justify-start hover:bg-transparent text-sm"
                    >
                      {startDate && endDate ? (
                        <span>
                          {format(startDate, "dd MMM")} - {format(endDate, "dd MMM, yyyy")}
                        </span>
                      ) : (
                        <span className="text-gray-500">Seleccionar fechas</span>
                      )}
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
            
            {/* Guests field */}
            <div className="flex-1 flex items-center p-2 md:px-4">
              <Users className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
              <div className="flex-grow">
                <label className="block text-xs text-gray-500 font-medium">Personas</label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="border-0 p-0 h-6 bg-transparent focus-visible:ring-0 text-sm">
                    <SelectValue placeholder="Número de personas" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'persona' : 'personas'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Search button */}
            <Button className="mt-3 md:mt-0 h-full md:h-auto md:self-center rounded-full bg-primary hover:bg-primary/90 px-8 py-3 text-base shrink-0">
              <Search className="h-5 w-5 mr-2" />
              Buscar
            </Button>
          </div>
        </div>
        
        {/* Popular destinations section */}
        <div className="max-w-5xl mx-auto mt-10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {destinations.map((destination) => (
              <div 
                key={destination.name}
                className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl mb-2">
                  {destination.icon}
                </div>
                <span className="text-sm font-medium">{destination.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
