
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ExperienceCard from "@/components/experiences/ExperienceCard";
import { allExperiences } from "@/data/experiencesData";

const Experiences = () => {
  // Show only first 3 experiences on home page
  const featuredExperiences = allExperiences.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Experiencias auténticas con locales
            </h2>
            <p className="text-lg text-secondary2">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
