
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, Heart, Users, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type ExperienceType = {
  id: number;
  title: string;
  location: string;
  host: string;
  price: number;
  currency: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
};

// Datos de ejemplo con más experiencias para la página completa
const allExperiences: ExperienceType[] = [
  {
    id: 1,
    title: "Ruta del café: De la semilla a la taza",
    location: "Quindío",
    host: "Miguel",
    price: 85000,
    currency: "COP",
    duration: "6 horas",
    groupSize: "2-8 personas",
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1611174275753-305d4581ce3e?q=80&w=800&auto=format&fit=crop",
    tags: ["Café", "Naturaleza", "Gastronomía"]
  },
  {
    id: 2,
    title: "Cocina caribeña con familia local",
    location: "Cartagena",
    host: "María",
    price: 120000,
    currency: "COP",
    duration: "4 horas",
    groupSize: "2-6 personas",
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=800&auto=format&fit=crop",
    tags: ["Gastronomía", "Cultural", "Caribe"]
  },
  {
    id: 3,
    title: "Senderismo en la Sierra Nevada",
    location: "Santa Marta",
    host: "Andrés",
    price: 150000,
    currency: "COP",
    duration: "1 día",
    groupSize: "4-12 personas",
    rating: 4.8,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
    tags: ["Senderismo", "Naturaleza", "Aventura"]
  },
  {
    id: 4,
    title: "Tour por el Parque Tayrona",
    location: "Santa Marta",
    host: "Carolina",
    price: 180000,
    currency: "COP",
    duration: "2 días",
    groupSize: "2-10 personas",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
    tags: ["Playa", "Naturaleza", "Aventura"]
  },
  {
    id: 5,
    title: "Descubriendo Bogotá histórica",
    location: "Bogotá",
    host: "Javier",
    price: 95000,
    currency: "COP",
    duration: "5 horas",
    groupSize: "2-15 personas",
    rating: 4.7,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=800&auto=format&fit=crop",
    tags: ["Cultural", "Historia", "Urbano"]
  },
  {
    id: 6,
    title: "Experiencia en finca cafetera",
    location: "Medellín",
    host: "Luis",
    price: 140000,
    currency: "COP",
    duration: "1 día",
    groupSize: "2-8 personas",
    rating: 4.9,
    reviews: 93,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop",
    tags: ["Café", "Rural", "Gastronomía"]
  }
];

// Format price with thousands separators
const formatPrice = (price: number, currency: string) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price);
};

const Experiences = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Experiencias</h1>
            <p className="text-xl text-secondary2 max-w-3xl">
              Vive Colombia a través de actividades únicas diseñadas y guiadas por locales apasionados.
            </p>
          </div>
          
          <div className="mb-8">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col animate-pulse">
                  <div className="rounded-xl bg-gray-200 h-64 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
                  <div className="h-5 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-1/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {allExperiences.map((experience) => (
                <div key={experience.id} className="flex flex-col">
                  {/* Imagen con esquinas redondeadas y botón de favorito */}
                  <div className="relative mb-3">
                    <AspectRatio ratio={4/3} className="bg-muted rounded-xl overflow-hidden">
                      <img 
                        src={experience.image} 
                        alt={experience.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </AspectRatio>
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <Star className="h-4 w-4 fill-colombia-yellow text-colombia-yellow" />
                      <span className="font-medium">{experience.rating}</span>
                      <span className="text-gray-600">({experience.reviews})</span>
                    </div>
                  </div>
                  
                  {/* Contenido sin borde de tarjeta */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-secondary2">{experience.location}, Colombia</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-secondary2">{experience.title}</h3>
                    
                    <div className="flex items-center text-sm text-gray-600 gap-1">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      <span>{experience.duration}</span>
                      <span className="mx-1">•</span>
                      <Users className="h-3.5 w-3.5 text-primary" />
                      <span>{experience.groupSize}</span>
                    </div>
                    
                    <p className="pt-1 font-medium">
                      <span className="text-secondary2">{formatPrice(experience.price, experience.currency)}</span>
                      <span className="text-gray-600"> por persona</span>
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {experience.tags.map((tag, index) => (
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experiences;
