
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Filter, Star } from "lucide-react";
import ExperiencesGrid from "@/components/experiences/ExperiencesGrid";
import { allExperiences } from "@/data/experiencesData";
import { freeExperiences } from "@/data/freeExperiencesData";
import { ExperienceType } from "@/types/experiences";
import { Badge } from "@/components/ui/badge";

const Experiences = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showFreeOnly = searchParams.get("free") === "true";
  
  const [isLoading, setIsLoading] = useState(true);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  
  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      if (showFreeOnly) {
        setExperiences(freeExperiences);
      } else {
        setExperiences([...allExperiences, ...freeExperiences]);
      }
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [showFreeOnly]);

  const toggleFreeFilter = () => {
    setSearchParams({ free: (!showFreeOnly).toString() });
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
                : "Vive Colombia a través de actividades únicas diseñadas y guiadas por locales apasionados o explora por tu cuenta con nuestras guías gratuitas."
              }
            </p>
          </div>
          
          <div className="mb-8 flex items-center gap-3">
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
            
            {showFreeOnly && (
              <Badge className="bg-primary">
                {freeExperiences.length} experiencias gratuitas
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
