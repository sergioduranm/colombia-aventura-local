
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type DestinationType = {
  id: number;
  name: string;
  region: string;
  description: string;
  image: string;
  tags: string[];
};

const destinations: DestinationType[] = [
  {
    id: 1,
    name: "Mompox",
    region: "Bolívar",
    description: "Ciudad colonial a orillas del río Magdalena, llena de historia y arquitectura preservada.",
    image: "https://images.unsplash.com/photo-1592437111271-239fa8099fe8?q=80&w=800&auto=format&fit=crop",
    tags: ["Colonial", "Río", "Patrimonio"]
  },
  {
    id: 2,
    name: "Nuquí",
    region: "Chocó",
    description: "Paraíso costero en el Pacífico colombiano con playas vírgenes y avistamiento de ballenas.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop",
    tags: ["Playa", "Naturaleza", "Pacífico"]
  },
  {
    id: 3,
    name: "Barichara",
    region: "Santander",
    description: "El pueblo más hermoso de Colombia con calles empedradas y arquitectura colonial.",
    image: "https://images.unsplash.com/photo-1669158424143-3b9f80ce45c3?q=80&w=800&auto=format&fit=crop",
    tags: ["Colonial", "Montaña", "Cultural"]
  },
  {
    id: 4,
    name: "Caño Cristales",
    region: "Meta",
    description: "El «río de los cinco colores», una maravilla natural multicolor única en el mundo.",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=800&auto=format&fit=crop",
    tags: ["Río", "Naturaleza", "Único"]
  }
];

const DestinationHighlights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Destinos auténticos más allá de lo típico
            </h2>
            <p className="text-lg text-gray-600">
              Descubre rincones mágicos de Colombia que pocos viajeros conocen, 
              donde la experiencia es más auténtica y el contacto con la cultura local es directo.
            </p>
          </div>
          <Link to="/destinations" className="mt-4 md:mt-0">
            <Button variant="ghost" className="text-primary hover:text-primary/90 hover:bg-orange-50 flex items-center gap-2">
              Ver todos los destinos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white rounded-lg overflow-hidden shadow group card-hover cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <h3 className="font-bold">{destination.name}</h3>
                  <p className="text-sm opacity-90">{destination.region}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                <div className="flex flex-wrap gap-2">
                  {destination.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-orange-100 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationHighlights;
