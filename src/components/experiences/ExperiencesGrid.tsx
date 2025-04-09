
import ExperienceCard from "./ExperienceCard";
import FreeExperienceCard from "./FreeExperienceCard";
import ExperienceCardSkeleton from "./ExperienceCardSkeleton";
import { ExperienceType } from "@/types/experiences";

type ExperiencesGridProps = {
  experiences: ExperienceType[];
  isLoading: boolean;
};

const ExperiencesGrid = ({ experiences, isLoading }: ExperiencesGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(6)].map((_, i) => (
          <ExperienceCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {experiences.map((experience) => (
        experience.isFree ? (
          <FreeExperienceCard key={experience.id} experience={experience} />
        ) : (
          <ExperienceCard key={experience.id} experience={experience} />
        )
      ))}
    </div>
  );
};

export default ExperiencesGrid;
