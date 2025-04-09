
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Clock, MapPin, Star } from "lucide-react";
import { ExperienceType } from "@/types/experiences";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

type FreeExperienceCardProps = {
  experience: ExperienceType;
};

const FreeExperienceCard = ({ experience }: FreeExperienceCardProps) => {
  return (
    <div className="flex flex-col">
      {/* Imagen con esquinas redondeadas */}
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
        <Badge 
          variant="secondary" 
          className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary font-medium"
        >
          Gratis
        </Badge>
        {experience.rating && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 fill-colombia-yellow text-colombia-yellow" />
            <span className="font-medium">{experience.rating}</span>
            <span className="text-gray-600">({experience.reviews || 0})</span>
          </div>
        )}
      </div>
      
      {/* Contenido sin borde de tarjeta */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-secondary2">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span>{experience.location}, Colombia</span>
        </div>
        
        <Link to={`/experiences/${experience.id}`} className="block">
          <h3 className="text-lg font-semibold text-secondary2 hover:underline">{experience.title}</h3>
        </Link>
        
        <div className="flex items-center text-sm text-gray-600 gap-1">
          <Clock className="h-3.5 w-3.5 text-primary" />
          <span>{experience.duration}</span>
        </div>
        
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

export default FreeExperienceCard;
