
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Image } from "lucide-react";

type ExperienceGalleryProps = {
  images: string[];
  title: string;
};

const ExperienceGallery = ({ images, title }: ExperienceGalleryProps) => {
  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
        <Image className="h-16 w-16 text-gray-400" />
      </div>
    );
  }

  return (
    <div className="relative mb-8">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`${title} - Imagen ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default ExperienceGallery;
