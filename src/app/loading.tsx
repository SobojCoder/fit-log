import React from "react";

const GobleLoading = () => {
  return (
<div>
    <div className="container mx-auto my-10 animate-pulse">
      <div className="rounded-xl bg-[#15171D] px-10 py-15 flex items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="w-150">
          {/* Small title */}
          <div className="h-6 w-40 rounded bg-gray-700 mb-5"></div>

          {/* Main heading */}
          <div className="space-y-3">
            <div className="h-12 w-full rounded bg-gray-700"></div>
            <div className="h-12 w-4/5 rounded bg-gray-700"></div>
          </div>

          {/* Description */}
          <div className="space-y-2 my-6">
            <div className="h-5 w-full rounded bg-gray-700"></div>
            <div className="h-5 w-11/12 rounded bg-gray-700"></div>
            <div className="h-5 w-3/4 rounded bg-gray-700"></div>
          </div>

          {/* Button */}
          <div className="h-12 w-44 rounded bg-gray-700"></div>
        </div>

        {/* Image Skeleton */}
        <div className="w-87.5 h-75 rounded-lg bg-gray-700"></div>
      </div>
    </div>
    <div className="container mx-auto my-15 animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-7 mt-18">
        <div className="h-10 w-56 rounded-md bg-gray-200"></div>
        <div className="mt-3 h-5 w-80 rounded-md bg-gray-200"></div>
      </div>

      {/* Cards Skeleton */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
          >
            {/* Image */}
            <div className="h-72 w-full bg-gray-200"></div>

            {/* Content */}
            <div className="space-y-4 p-5">
              {/* Category */}
              <div className="h-5 w-24 rounded-full bg-gray-200"></div>

              {/* Title */}
              <div className="h-7 w-3/4 rounded-md bg-gray-200"></div>

              {/* Author */}
              <div className="h-5 w-1/2 rounded-md bg-gray-200"></div>

              {/* Description */}
              <div className="h-4 w-full rounded-md bg-gray-200"></div>
              <div className="h-4 w-5/6 rounded-md bg-gray-200"></div>

              {/* Bottom */}
              <div className="flex justify-between pt-3">
                <div className="h-5 w-20 rounded-md bg-gray-200"></div>
                <div className="h-5 w-16 rounded-md bg-gray-200"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default GobleLoading;