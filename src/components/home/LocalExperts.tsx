
import { ArrowRight, Star, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type LocalExpertType = {
  id: number;
  name: string;
  location: string;
  expertise: string[];
  bio: string;
  rating: number;
  reviews: number;
  image: string;
};

const localExperts: LocalExpertType[] = [
  {
    id: 1,
    name: "Carlos Ramírez",
    location: "Medellín, Antioquia",
    expertise: ["Café", "Senderismo", "Cultura Paisa"],
    bio: "Caficultor de tercera generación, experto en la cultura del café y las montañas antioqueñas.",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Natalia Gómez",
    location: "Cartagena, Bolívar",
    expertise: ["Historia Colonial", "Gastronomía", "Playas"],
    bio: "Historiadora cartagenera apasionada por mostrar la cara menos conocida de la ciudad amurallada.",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Luis Cortés",
    location: "Amazonas",
    expertise: ["Selva", "Comunidades Indígenas", "Fotografía"],
    bio: "Guía nativo amazónico, conocedor de los secretos de la selva y las tradiciones ancestrales.",
    rating: 5.0,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  }
];

const LocalExperts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expertos locales que conocen el verdadero Colombia
            </h2>
            <p className="text-lg text-gray-600">
              Conecta con colombianos apasionados que compartirán contigo su conocimiento, 
              cultura y los secretos mejor guardados de sus regiones.
            </p>
          </div>
          <Link to="/locals" className="mt-4 md:mt-0">
            <Button variant="ghost" className="text-primary hover:text-primary/90 hover:bg-orange-50 flex items-center gap-2">
              Conocer a todos los locales
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {localExperts.map((expert) => (
            <div 
              key={expert.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-colombia-yellow"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{expert.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <MapPin className="h-4 w-4 mr-1 text-primary" />
                      {expert.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-colombia-yellow mr-1" />
                      <span className="font-medium">{expert.rating}</span>
                      <span className="mx-1 text-gray-400">•</span>
                      <MessageSquare className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-gray-500">{expert.reviews} reseñas</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{expert.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {expert.expertise.map((skill, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-orange-100 text-primary px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Contactar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalExperts;
