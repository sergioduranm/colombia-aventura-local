
export type ExperienceType = {
  id: number;
  title: string;
  location: string;
  host: string;
  hostAvatar?: string;
  hostSince?: string;
  hostLanguages?: string[];
  hostDescription?: string;
  price: number;
  currency: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  image: string;
  gallery?: string[];
  tags: string[];
  description?: string;
  itinerary?: string;
  included?: {
    food?: string;
    drinks?: string;
    equipment?: string;
  };
  cancellationPolicy?: string;
};
