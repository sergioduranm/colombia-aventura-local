
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import ExperiencesGrid from "@/components/experiences/ExperiencesGrid";
import { allExperiences } from "@/data/experiencesData";

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
          
          <ExperiencesGrid 
            experiences={allExperiences}
            isLoading={isLoading}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experiences;
