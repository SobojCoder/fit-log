import React from "react";

const MyPlanSkeleton = () => {
  return (
    <div>
    <div className="container mx-auto my-12 animate-pulse">
      {/* Header */}
      <div className="mb-6 mt-10">
        <div className="h-10 w-52 rounded-md bg-gray-700"></div>
        <div className="mt-3 h-5 w-96 rounded-md bg-gray-700"></div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 rounded-2xl border border-[#343A47] bg-[#13161D] px-8 py-6">
        {/* Exercise */}
        <div>
          <div className="h-6 w-24 rounded bg-gray-700"></div>
          <div className="mt-3 h-16 w-20 rounded bg-gray-700"></div>
        </div>

        {/* Minutes */}
        <div className="border-l border-[#343A47] px-8">
          <div className="h-6 w-24 rounded bg-gray-700"></div>
          <div className="mt-3 h-16 w-24 rounded bg-gray-700"></div>
        </div>

        {/* Calories */}
        <div className="border-l border-[#343A47] px-8">
          <div className="h-6 w-24 rounded bg-gray-700"></div>
          <div className="mt-3 h-16 w-24 rounded bg-gray-700"></div>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="mt-8 flex justify-between">
        {/* Tabs */}
        <div className="flex gap-2 rounded-2xl border border-[#343A47] bg-[#151921] p-2">
          <div className="h-9 w-28 rounded-xl bg-gray-700"></div>
          <div className="h-9 w-20 rounded-xl bg-gray-700"></div>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 rounded bg-gray-700"></div>
          <div className="h-9 w-28 rounded-lg bg-gray-700"></div>
        </div>
      </div>

      {/* Workout Cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl border border-[#343A47] bg-[#15181F]"
          >
            {/* Image */}
            <div className="h-52 w-full bg-gray-700"></div>

            {/* Card Content */}
            <div className="space-y-4 p-5">
              {/* Category */}
              <div className="h-5 w-24 rounded-full bg-gray-700"></div>

              {/* Title */}
              <div className="h-7 w-3/4 rounded bg-gray-700"></div>

              {/* Description */}
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-gray-700"></div>
                <div className="h-4 w-5/6 rounded bg-gray-700"></div>
              </div>

              {/* Workout info */}
              <div className="flex justify-between pt-2">
                <div className="h-5 w-20 rounded bg-gray-700"></div>
                <div className="h-5 w-20 rounded bg-gray-700"></div>
                <div className="h-5 w-16 rounded bg-gray-700"></div>
              </div>

              {/* Button */}
              <div className="h-10 w-full rounded-lg bg-gray-700"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
     <div className="mt-8 animate-pulse space-y-4">
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="flex items-center gap-5 rounded-2xl border border-[#343A47] bg-[#15181F] p-5"
        >
          {/* Image */}
          <div className="h-28 w-28 shrink-0 rounded-xl bg-gray-700"></div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            {/* Category */}
            <div className="h-4 w-24 rounded bg-gray-700"></div>

            {/* Workout name */}
            <div className="h-7 w-64 rounded bg-gray-700"></div>

            {/* Description */}
            <div className="h-4 w-3/4 rounded bg-gray-700"></div>

            {/* Info */}
            <div className="flex gap-5">
              <div className="h-4 w-20 rounded bg-gray-700"></div>
              <div className="h-4 w-20 rounded bg-gray-700"></div>
              <div className="h-4 w-16 rounded bg-gray-700"></div>
            </div>
          </div>

          {/* Button */}
          <div className="h-10 w-24 rounded-full bg-gray-700"></div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyPlanSkeleton;