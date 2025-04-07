
import { ArrowRight, Calendar, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

const experiences: ExperienceType[] = [
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
  }
];

// Format price with thousands separators
const formatPrice = (price: number, currency: string) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price);
};

const Experiences = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experiencias auténticas con locales
            </h2>
            <p className="text-lg text-gray-600">
              Vive Colombia a través de experiencias únicas diseñadas y guiadas por locales 
              apasionados que compartirán lo mejor de su cultura contigo.
            </p>
          </div>
          <Link to="/experiences" className="mt-4 md:mt-0">
            <Button variant="ghost" className="text-primary hover:text-primary/90 hover:bg-orange-50 flex items-center gap-2">
              Ver todas las experiencias
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div 
              key={experience.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={experience.image} 
                  alt={experience.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-medium text-sm">
                  {formatPrice(experience.price, experience.currency)}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-sm text-gray-500">{experience.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-colombia-yellow mr-1" />
                    <span className="text-sm font-medium">{experience.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({experience.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3">{experience.title}</h3>
                <p className="text-sm text-gray-500 mb-1">Anfitrión: {experience.host}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 my-3">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-primary" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-primary" />
                    {experience.groupSize}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-orange-100 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Reservar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
