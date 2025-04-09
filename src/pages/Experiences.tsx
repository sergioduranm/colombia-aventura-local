
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Filter, Star, MapPin, Users } from "lucide-react";
import ExperiencesGrid from "@/components/experiences/ExperiencesGrid";
import { allExperiences } from "@/data/experiencesData";
import { freeExperiences } from "@/data/freeExperiencesData";
import { ExperienceType } from "@/types/experiences";
import { Badge } from "@/components/ui/badge";

const Experiences = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showFreeOnly = searchParams.get("free") === "true";
  const showSelfGuidedOnly = searchParams.get("selfGuided") === "true";
  
  const [isLoading, setIsLoading] = useState(true);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  
  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      let filteredExperiences: ExperienceType[] = [];
      
      if (showFreeOnly) {
        // Only free experiences (which are always self-guided)
        filteredExperiences = freeExperiences;
      } else if (showSelfGuidedOnly) {
        // All self-guided experiences (free and paid)
        filteredExperiences = [
          ...freeExperiences,
          ...allExperiences.filter(exp => exp.isSelfGuided)
        ];
      } else {
        // All experiences
        filteredExperiences = [...allExperiences, ...freeExperiences];
      }
      
      setExperiences(filteredExperiences);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [showFreeOnly, showSelfGuidedOnly]);

  const toggleFreeFilter = () => {
    setSearchParams({ free: (!showFreeOnly).toString() });
  };

  const toggleSelfGuidedFilter = () => {
    setSearchParams({ selfGuided: (!showSelfGuidedOnly).toString() });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Experiencias</h1>
            <p className="text-xl text-secondary2 max-w-3xl">
              {showFreeOnly 
                ? "Explora nuestras experiencias gratuitas autoguiadas para descubrir Colombia por tu cuenta."
                : showSelfGuidedOnly
                  ? "Descubre Colombia a tu ritmo con nuestras experiencias autoguiadas, gratuitas y de pago."
                  : "Vive Colombia a través de actividades únicas diseñadas por locales o explora por tu cuenta con nuestras guías autoguiadas."
              }
            </p>
          </div>
          
          <div className="mb-8 flex items-center gap-3 flex-wrap">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
            
            <Button
              variant={showFreeOnly ? "default" : "outline"}
              size="sm"
              onClick={toggleFreeFilter}
              className={`flex items-center gap-2 ${showFreeOnly ? "bg-primary" : ""}`}
            >
              <Star className={`h-4 w-4 ${showFreeOnly ? "text-white" : ""}`} />
              {showFreeOnly ? "Mostrando gratis" : "Solo gratis"}
            </Button>
            
            <Button
              variant={showSelfGuidedOnly ? "default" : "outline"}
              size="sm"
              onClick={toggleSelfGuidedFilter}
              className={`flex items-center gap-2 ${showSelfGuidedOnly ? "bg-primary" : ""}`}
            >
              <MapPin className={`h-4 w-4 ${showSelfGuidedOnly ? "text-white" : ""}`} />
              {showSelfGuidedOnly ? "Mostrando autoguiadas" : "Solo autoguiadas"}
            </Button>
            
            {showFreeOnly && (
              <Badge className="bg-primary">
                {freeExperiences.length} experiencias gratuitas
              </Badge>
            )}
            
            {showSelfGuidedOnly && !showFreeOnly && (
              <Badge className="bg-primary">
                Experiencias autoguiadas
              </Badge>
            )}
          </div>
          
          <ExperiencesGrid 
            experiences={experiences}
            isLoading={isLoading}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experiences;
