import React from "react";

export default function ProductDetailsLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white min-h-screen animate-pulse">
      {/* Breadcrumbs */}
      <div className="h-4 w-1/4 bg-gray-200 rounded mb-6"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Image Skeleton */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-3xl bg-gray-200"></div>
        </div>

        {/* Right: Info Skeleton */}
        <div className="flex flex-col gap-4">
          <div className="h-6 w-32 bg-gray-200 rounded"></div>
          <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-6 w-1/3 bg-gray-200 rounded"></div>

          {/* Rating & Stats */}
          <div className="flex items-center gap-4">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-3 mt-4">
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-6 w-16 bg-gray-200 rounded"></div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-2 mt-6">
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
            <div className="space-y-1">
              <div className="h-3 w-full bg-gray-200 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-3 w-4/6 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-auto">
            <div className="h-10 flex-1 bg-gray-300 rounded-xl"></div>
            <div className="h-10 flex-1 bg-gray-200 rounded-xl"></div>
          </div>

          {/* Shipping Info */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="h-6 w-full bg-gray-200 rounded"></div>
            <div className="h-6 w-full bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Description & Q&A */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-4">
          <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 h-fit space-y-4">
          <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
