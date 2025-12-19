const ProductCardSkeleton = () => {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden animate-pulse">
      {/* Badge Skeleton */}
      <div className="absolute top-3 left-3 z-10 bg-gray-300 text-gray-300 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider w-10 h-4"></div>

      {/* Image Skeleton */}
      <div className="relative h-56 w-full bg-gray-200 rounded-t-2xl"></div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Sold & Rating */}
        <div className="flex justify-between items-center">
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>

        {/* Title */}
        <div className="h-5 w-full bg-gray-200 rounded"></div>
        <div className="h-5 w-3/4 bg-gray-200 rounded"></div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-2">
          <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 h-10 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
