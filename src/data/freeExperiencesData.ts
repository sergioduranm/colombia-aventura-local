
import { ExperienceType } from "@/types/experiences";

// Datos de experiencias gratuitas
export const freeExperiences: ExperienceType[] = [
  {
    id: 101,
    title: "Atardecer en Monserrate",
    location: "Bogotá",
    price: 0,
    currency: "COP",
    duration: "2-3 horas",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop",
    tags: ["Naturaleza", "Vistas", "Caminata"],
    description: "Disfruta de un impresionante atardecer desde Monserrate con vistas panorámicas de Bogotá. Este recorrido autoguiado te lleva por los mejores puntos para fotografiar y contemplar la ciudad desde las alturas.",
    isFree: true,
    isSelfGuided: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 102,
    title: "Ruta histórica por La Candelaria",
    location: "Bogotá",
    price: 0,
    currency: "COP",
    duration: "2 horas",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop",
    tags: ["Cultural", "Historia", "Arquitectura"],
    description: "Descubre por tu cuenta el corazón histórico de Bogotá recorriendo las calles empedradas de La Candelaria. Visita plazas, iglesias coloniales y edificios históricos siguiendo esta ruta autoguiada.",
    isFree: true,
    isSelfGuided: true,
    rating: 4.6,
    reviews: 97
  },
  {
    id: 103,
    title: "Jardín Botánico de Medellín",
    location: "Medellín",
    price: 0,
    currency: "COP",
    duration: "3 horas",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop",
    tags: ["Naturaleza", "Botánica", "Familiar"],
    description: "Explora la increíble diversidad de flora colombiana en el Jardín Botánico de Medellín. Esta guía te llevará por los rincones más interesantes del jardín, ideal para conocer por cuenta propia.",
    isFree: true,
    isSelfGuided: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 104,
    title: "Playa Blanca al amanecer",
    location: "Cartagena",
    price: 0,
    currency: "COP",
    duration: "4 horas",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
    tags: ["Playa", "Naturaleza", "Amanecer"],
    description: "Vive la experiencia de visitar Playa Blanca al amanecer, cuando está casi vacía y puedes disfrutar de la tranquilidad del mar Caribe. Esta guía incluye consejos sobre cómo llegar temprano y los mejores spots.",
    isFree: true,
    isSelfGuided: true,
    rating: 4.7,
    reviews: 89
  }
];
