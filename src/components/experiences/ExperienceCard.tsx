
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, Heart, Users, Clock } from "lucide-react";
import { ExperienceType } from "@/types/experiences";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

// Format price with thousands separators
const formatPrice = (price: number, currency: string) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price);
};

type ExperienceCardProps = {
  experience: ExperienceType;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  // Get host initials for avatar fallback with null check
  const getHostInitials = (name?: string) => {
    if (!name) return "E"; // Default fallback to "E" for "Experience" if no host name
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="flex flex-col">
      {/* Imagen con esquinas redondeadas y botón de favorito */}
      <div className="relative mb-3">
        <Link to={`/experiences/${experience.id}`}>
          <AspectRatio ratio={4/3} className="bg-muted rounded-xl overflow-hidden">
            <img 
              src={experience.image} 
              alt={experience.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </AspectRatio>
        </Link>
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
        <div className="flex items-center gap-2">
          {experience.host && (
            <>
              <Avatar className="h-6 w-6">
                <AvatarImage src={experience.hostAvatar} alt={experience.host} />
                <AvatarFallback>{getHostInitials(experience.host)}</AvatarFallback>
              </Avatar>
              <span className="text-secondary2">{experience.host} • {experience.location}, Colombia</span>
            </>
          )}
          {!experience.host && (
            <span className="text-secondary2">{experience.location}, Colombia</span>
          )}
        </div>
        
        <Link to={`/experiences/${experience.id}`} className="block">
          <h3 className="text-lg font-semibold text-secondary2 hover:underline">{experience.title}</h3>
        </Link>
        
        <div className="flex items-center text-sm text-gray-600 gap-1">
          <Clock className="h-3.5 w-3.5 text-primary" />
          <span>{experience.duration}</span>
          {experience.groupSize && (
            <>
              <span className="mx-1">•</span>
              <Users className="h-3.5 w-3.5 text-primary" />
              <span>{experience.groupSize}</span>
            </>
          )}
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
  );
};

export default ExperienceCard;
