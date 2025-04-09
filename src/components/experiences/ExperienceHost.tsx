
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

type ExperienceHostProps = {
  name: string;
  avatar?: string;
  since?: string;
  languages?: string[];
  description?: string;
};

const ExperienceHost = ({ name, avatar, since, languages, description }: ExperienceHostProps) => {
  // Get host initials for avatar fallback
  const getHostInitials = (name: string) => {
    // Add null check to prevent trying to access charAt on undefined
    if (!name) return "";
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="border-t border-b py-8 my-8">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-20 w-20">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="text-xl">{getHostInitials(name)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-semibold text-secondary2">Conoce a tu anfitrión, {name}</h2>
          {since && <p className="text-gray-600">Anfitrión desde {since}</p>}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-6">
        <div className="flex-1">
          {description && <p className="text-secondary2 mb-4">{description}</p>}
          
          <div className="flex items-center gap-2 mb-4 text-secondary2">
            <Shield className="h-5 w-5" />
            <span>Identidad verificada</span>
          </div>

          {languages && languages.length > 0 && (
            <p className="text-gray-600">
              <span className="font-medium">Idiomas: </span>
              {languages.join(", ")}
            </p>
          )}
        </div>
        
        <div className="w-full md:w-1/3">
          <Button variant="outline" className="w-full">Contactar anfitrión</Button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceHost;
