
const ExperienceCardSkeleton = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="rounded-xl bg-gray-200 h-64 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
      <div className="h-5 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2 w-1/3"></div>
    </div>
  );
};

export default ExperienceCardSkeleton;
