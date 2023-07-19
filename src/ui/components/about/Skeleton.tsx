export const Skeleton = () => {
  return (
    <div className="relative w-full h-full bg-grey-trolley z-10 animate-pulse">
      <div className="absolute w-full h-full bg-grey-trolley z-10"></div>
    </div>
  );
};
