
import { Heart, Shield, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Globe,
    title: "Autenticidad",
    description: "Creemos en mostrar la Colombia real, más allá de estereotipos y circuitos turísticos masivos."
  },
  {
    icon: Users,
    title: "Conexión Humana",
    description: "Facilitamos encuentros genuinos entre viajeros y locales que se convierten en relaciones significativas."
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Priorizamos tu tranquilidad con información confiable y anfitriones verificados en todas las regiones."
  },
  {
    icon: Heart,
    title: "Impacto Positivo",
    description: "Apoyamos economías locales y promovemos un turismo responsable que beneficia a las comunidades."
  }
];

const MissionStatement = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Nuestra Misión
          </h2>
          <p className="text-xl text-white/90 font-body">
            Ser el puente de confianza que conecta viajeros curiosos con expertos locales, transformando la exploración 
            de la Colombia menos conocida en una aventura humana, significativa y segura.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors border border-white/20"
              >
                <div className="inline-flex items-center justify-center p-3 bg-accent rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">{value.title}</h3>
                <p className="text-white/80 font-body">{value.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/about">
            <Button className="bg-accent hover:bg-accent/90 text-white border-2 border-transparent hover:border-white/20">
              Conoce más sobre nosotros
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
