
import { Utensils, Wine, Briefcase } from "lucide-react";

type ExperienceIncludedProps = {
  food?: string;
  drinks?: string;
  equipment?: string;
};

const ExperienceIncluded = ({ food, drinks, equipment }: ExperienceIncludedProps) => {
  if (!food && !drinks && !equipment) return null;

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold text-secondary2 mb-6">Lo que está incluido</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {food && (
          <div className="p-6 border rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Utensils className="h-6 w-6 text-secondary2" />
              <h3 className="text-lg font-medium text-secondary2">Comida</h3>
            </div>
            <p className="text-gray-600">{food}</p>
          </div>
        )}
        
        {drinks && (
          <div className="p-6 border rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Wine className="h-6 w-6 text-secondary2" />
              <h3 className="text-lg font-medium text-secondary2">Bebidas</h3>
            </div>
            <p className="text-gray-600">{drinks}</p>
          </div>
        )}
        
        {equipment && (
          <div className="p-6 border rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="h-6 w-6 text-secondary2" />
              <h3 className="text-lg font-medium text-secondary2">Equipo</h3>
            </div>
            <p className="text-gray-600">{equipment}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceIncluded;
