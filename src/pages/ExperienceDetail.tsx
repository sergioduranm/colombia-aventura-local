
import { useParams, Link } from "react-router-dom";
import { getExperienceById } from "@/data/experiencesData";
import { Clock, Users, Star, Share, Heart, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExperienceGallery from "@/components/experiences/ExperienceGallery";
import ExperienceHost from "@/components/experiences/ExperienceHost";
import ExperienceBooking from "@/components/experiences/ExperienceBooking";
import ExperienceIncluded from "@/components/experiences/ExperienceIncluded";

const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const experience = getExperienceById(Number(id));

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">Experiencia no encontrada</h1>
            <p className="mb-6">La experiencia que estás buscando no existe o ha sido eliminada.</p>
            <Link to="/experiences">
              <Button>Ver todas las experiencias</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Format price with thousands separators
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs y botón de volver */}
          <div className="mb-4">
            <Link to="/experiences" className="flex items-center gap-1 text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              <span>Volver a experiencias</span>
            </Link>
          </div>

          {/* Título y detalles */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{experience.title}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-1.5">
                <Star className="h-5 w-5 fill-colombia-yellow text-colombia-yellow" />
                <span className="font-medium">{experience.rating}</span>
                <span className="text-gray-600">({experience.reviews} reseñas)</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-700">
                <Clock className="h-5 w-5" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-700">
                <Users className="h-5 w-5" />
                <span>{experience.groupSize}</span>
              </div>
              <div className="flex gap-2 ml-auto">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share className="h-4 w-4" />
                  <span className="hidden sm:inline">Compartir</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Guardar</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Galería de imágenes */}
          <ExperienceGallery 
            images={experience.gallery || [experience.image]} 
            title={experience.title} 
          />

          {/* Contenido principal en 2 columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Info del anfitrión abreviada */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-semibold text-secondary2 mb-1">
                    Experiencia ofrecida por {experience.host}
                  </h2>
                  <p className="text-gray-600">
                    {experience.duration} · {experience.groupSize}
                  </p>
                </div>
              </div>

              {/* Descripción y itinerario */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary2 mb-4">Qué harás</h2>
                <p className="text-secondary2 mb-6 whitespace-pre-line">{experience.description}</p>
                {experience.itinerary && (
                  <p className="text-secondary2 whitespace-pre-line">{experience.itinerary}</p>
                )}
              </div>

              {/* Lo que incluye */}
              <ExperienceIncluded 
                food={experience.included?.food}
                drinks={experience.included?.drinks}
                equipment={experience.included?.equipment}
              />

              {/* Política de cancelación */}
              {experience.cancellationPolicy && (
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="h-6 w-6 text-secondary2" />
                    <h2 className="text-lg font-medium text-secondary2">Política de cancelación</h2>
                  </div>
                  <p className="text-gray-600">{experience.cancellationPolicy}</p>
                </div>
              )}

              {/* Información del anfitrión completa */}
              <ExperienceHost 
                name={experience.host}
                avatar={experience.hostAvatar}
                since={experience.hostSince}
                languages={experience.hostLanguages}
                description={experience.hostDescription}
              />
            </div>

            {/* Reserva */}
            <div className="lg:col-span-1">
              <ExperienceBooking 
                price={experience.price}
                currency={experience.currency}
                duration={experience.duration}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperienceDetail;
