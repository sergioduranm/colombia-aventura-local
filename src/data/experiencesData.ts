import { ExperienceType } from "@/types/experiences";

// Datos de ejemplo con más experiencias para la página completa
export const allExperiences: ExperienceType[] = [
  {
    id: 1,
    title: "Ruta del café: De la semilla a la taza",
    location: "Quindío",
    host: "Miguel",
    hostAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
    hostSince: "2019",
    hostLanguages: ["Español", "Inglés"],
    hostDescription: "Soy un caficultor de tercera generación y barista certificado con pasión por compartir la cultura del café colombiano con visitantes de todo el mundo.",
    price: 85000,
    currency: "COP",
    duration: "6 horas",
    groupSize: "2-8 personas",
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1611174275753-305d4581ce3e?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501747571976-57c49fc313a9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520865314950-ea20c8dd8fbe?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599934144115-f1775c693be8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598120744558-fe722f0486c9?q=80&w=800&auto=format&fit=crop"
    ],
    tags: ["Café", "Naturaleza", "Gastronomía"],
    description: "Embárcate en un fascinante viaje a través del mundo del café colombiano, desde la plantación hasta tu taza. Conocerás de primera mano todo el proceso del café en una hermosa finca del eje cafetero.",
    itinerary: "Comenzaremos el día con una visita a los cultivos de café, donde aprenderás sobre las diferentes variedades y métodos de cultivo sostenible. Recolectaremos nuestros propios granos y seguiremos el proceso completo de despulpado, fermentación, secado y tostado. Finalizaremos con una sesión de catación profesional donde descubrirás los distintos perfiles de sabor del café colombiano.",
    included: {
      food: "Almuerzo típico colombiano",
      drinks: "Degustación de cafés especiales",
      equipment: "Kit de catación de café para llevar"
    },
    cancellationPolicy: "Cancelación gratuita hasta 24 horas antes de la experiencia."
  },
  {
    id: 2,
    title: "Cocina caribeña con familia local",
    location: "Cartagena",
    host: "María",
    hostAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    hostSince: "2020",
    hostLanguages: ["Español", "Inglés"],
    hostDescription: "Nací y crecí en Cartagena, y he estado cocinando recetas tradicionales transmitidas por generaciones en mi familia. Me encanta compartir nuestra cultura caribeña a través de la gastronomía.",
    price: 120000,
    currency: "COP",
    duration: "4 horas",
    groupSize: "2-6 personas",
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535120927584-0230f40fc1e2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626203050458-18588de59e43?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
    ],
    tags: ["Gastronomía", "Cultural", "Caribe"],
    description: "Sumérgete en los sabores auténticos del Caribe colombiano con esta experiencia culinaria en una casa familiar de Cartagena. Aprenderás a preparar platos tradicionales mientras compartes historias y tradiciones locales.",
    itinerary: "Te recibiremos en nuestra casa en el barrio Getsemaní, donde comenzaremos con un recorrido por el mercado local para seleccionar ingredientes frescos. Regresaremos a casa para aprender a preparar platos típicos como patacones, arroz con coco, y pescado frito al estilo caribeño. Compartiremos la comida que prepararemos juntos en un ambiente familiar.",
    included: {
      food: "Comida completa preparada durante la experiencia",
      drinks: "Jugo natural y ron tradicional",
      equipment: "Delantal y recetario para llevar"
    },
    cancellationPolicy: "Cancelación gratuita hasta 48 horas antes de la experiencia."
  },
  {
    id: 3,
    title: "Senderismo en la Sierra Nevada",
    location: "Santa Marta",
    host: "Andrés",
    hostAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop",
    hostSince: "2018",
    hostLanguages: ["Español", "Inglés", "Francés"],
    hostDescription: "Soy guía certificado con más de 15 años de experiencia en ecoturismo. He recorrido cada rincón de la Sierra Nevada y me apasiona compartir sus maravillas naturales y la sabiduría de sus pueblos indígenas.",
    price: 150000,
    currency: "COP",
    duration: "1 día",
    groupSize: "4-12 personas",
    rating: 4.8,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587547051851-53cb2b8e7f47?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604537466158-719b1972feb8?q=80&w=800&auto=format&fit=crop"
    ],
    tags: ["Senderismo", "Naturaleza", "Aventura"],
    description: "Explora la majestuosa Sierra Nevada de Santa Marta, el sistema montañoso costero más alto del mundo, en una aventura de un día completo que combina naturaleza, cultura indígena y paisajes impresionantes.",
    itinerary: "Partiremos temprano desde Santa Marta hacia la Sierra Nevada. Realizaremos un trekking de dificultad moderada a través de diversos ecosistemas, desde bosque tropical hasta páramo. Visitaremos una comunidad indígena Kogui donde aprenderemos sobre su cultura y tradiciones. Disfrutaremos de un baño refrescante en cascadas naturales antes de regresar.",
    included: {
      food: "Desayuno y almuerzo con productos locales",
      drinks: "Agua y bebidas naturales durante todo el recorrido",
      equipment: "Bastones de trekking y botiquín de primeros auxilios"
    },
    cancellationPolicy: "Cancelación gratuita hasta 72 horas antes de la experiencia."
  },
  {
    id: 4,
    title: "Tour por el Parque Tayrona",
    location: "Santa Marta",
    host: "Carolina",
    price: 180000,
    currency: "COP",
    duration: "2 días",
    groupSize: "2-10 personas",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
    tags: ["Playa", "Naturaleza", "Aventura"],
    description: "Descubre el fascinante Parque Tayrona, un parque nacional de Colombia que combina la naturaleza, la cultura y la historia en un entorno único. Visita las playas de la costa, los cerros de Tayrona y los sitios históricos que han sido preservados durante siglos.",
    itinerary: "Comenzaremos el día con una visita a las playas de la costa, donde podrás disfrutar de la belleza del mar y la naturaleza. Luego, haremos un recorrido por los cerros de Tayrona, donde aprenderás sobre la historia y la cultura indígena. Finalizaremos el día con un recorrido por los sitios históricos más emblemáticos del parque.",
    included: {
      food: "Desayuno y almuerzo en la casa del host",
      drinks: "Agua y bebidas naturales durante todo el recorrido",
      equipment: "Bastones de trekking y botiquín de primeros auxilios"
    },
    cancellationPolicy: "Cancelación gratuita hasta 48 horas antes de la experiencia."
  },
  {
    id: 5,
    title: "Descubriendo Bogotá histórica",
    location: "Bogotá",
    host: "Javier",
    price: 95000,
    currency: "COP",
    duration: "5 horas",
    groupSize: "2-15 personas",
    rating: 4.7,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=800&auto=format&fit=crop",
    tags: ["Cultural", "Historia", "Urbano"],
    description: "Descubre la historia y la cultura de Bogotá en esta experiencia única. Visita los lugares más emblemáticos de la ciudad, como el Teatro Nacional, el Museo de Arte Contemporáneo y el Parque de los Ángeles, y aprende sobre la historia y la cultura de la ciudad.",
    itinerary: "Comenzaremos el día con una visita al Teatro Nacional, donde podrás disfrutar de una espectáculo de teatro. Luego, haremos un recorrido por el Museo de Arte Contemporáneo, donde podrás ver obras de arte contemporáneas. Finalizaremos el día con un recorrido por el Parque de los Ángeles, donde podrás disfrutar de la belleza del parque y la naturaleza.",
    included: {
      food: "Desayuno y almuerzo en la casa del host",
      drinks: "Agua y bebidas naturales durante todo el recorrido",
      equipment: "Bastones de trekking y botiquín de primeros auxilios"
    },
    cancellationPolicy: "Cancelación gratuita hasta 48 horas antes de la experiencia."
  },
  {
    id: 6,
    title: "Experiencia en finca cafetera",
    location: "Medellín",
    host: "Luis",
    price: 140000,
    currency: "COP",
    duration: "1 día",
    groupSize: "2-8 personas",
    rating: 4.9,
    reviews: 93,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop",
    tags: ["Café", "Rural", "Gastronomía"],
    description: "Descubre la cultura y la historia del café en esta experiencia en una finca cafetera en Medellín. Visita los cultivos de café, donde aprenderás sobre las diferentes variedades y métodos de cultivo sostenible. Recolectaremos nuestros propios granos y seguiremos el proceso completo de despulpado, fermentación, secado y tostado.",
    itinerary: "Comenzaremos el día con una visita a los cultivos de café, donde aprenderás sobre las diferentes variedades y métodos de cultivo sostenible. Recolectaremos nuestros propios granos y seguiremos el proceso completo de despulpado, fermentación, secado y tostado.",
    included: {
      food: "Desayuno y almuerzo en la casa del host",
      drinks: "Agua y bebidas naturales durante todo el recorrido",
      equipment: "Bastones de trekking y botiquín de primeros auxilios"
    },
    cancellationPolicy: "Cancelación gratuita hasta 48 horas antes de la experiencia."
  }
];

// Función para obtener una experiencia por su ID
export const getExperienceById = (id: number): ExperienceType | undefined => {
  return allExperiences.find(experience => experience.id === id);
};
