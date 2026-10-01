import React from "react";

const Loading = () => {
  return (
    <div className="bg-[#0F1014] py-8 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 animate-pulse">
        
        {/* ================= IMAGE SKELETON ================= */}
        <div className="h-150 w-full rounded-xl bg-gray-800"></div>

        {/* ================= DETAILS SKELETON ================= */}
        <div className="flex flex-col">
          
          {/* Title */}
          <div className="h-10 w-3/4 rounded-md bg-gray-800"></div>

          {/* Description */}
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full rounded bg-gray-800"></div>
            <div className="h-4 w-11/12 rounded bg-gray-800"></div>
            <div className="h-4 w-2/3 rounded bg-gray-800"></div>
          </div>

          {/* Muscle Groups */}
          <div className="mt-5 flex gap-2">
            <div className="h-7 w-20 rounded-full bg-gray-800"></div>
            <div className="h-7 w-24 rounded-full bg-gray-800"></div>
            <div className="h-7 w-20 rounded-full bg-gray-800"></div>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-5 overflow-hidden rounded-xl border border-zinc-800 bg-[#151922]">
            
            {/* Equipment */}
            <div className="flex justify-between border-b border-zinc-800 px-4 py-4">
              <div className="h-4 w-20 rounded bg-gray-700"></div>
              <div className="h-4 w-28 rounded bg-gray-700"></div>
            </div>

            {/* Difficulty */}
            <div className="flex justify-between border-b border-zinc-800 px-4 py-4">
              <div className="h-4 w-20 rounded bg-gray-700"></div>
              <div className="h-4 w-24 rounded bg-gray-700"></div>
            </div>

            {/* Sets */}
            <div className="flex justify-between border-b border-zinc-800 px-4 py-4">
              <div className="h-4 w-12 rounded bg-gray-700"></div>
              <div className="h-4 w-10 rounded bg-gray-700"></div>
            </div>

            {/* Reps */}
            <div className="flex justify-between border-b border-zinc-800 px-4 py-4">
              <div className="h-4 w-12 rounded bg-gray-700"></div>
              <div className="h-4 w-16 rounded bg-gray-700"></div>
            </div>

            {/* Duration */}
            <div className="flex justify-between border-b border-zinc-800 px-4 py-4">
              <div className="h-4 w-20 rounded bg-gray-700"></div>
              <div className="h-4 w-20 rounded bg-gray-700"></div>
            </div>

            {/* Calories */}
            <div className="flex justify-between border-b border-zinc-800 px-4 py-4">
              <div className="h-4 w-20 rounded bg-gray-700"></div>
              <div className="h-4 w-24 rounded bg-gray-700"></div>
            </div>

            {/* Rating */}
            <div className="flex justify-between px-4 py-4">
              <div className="h-4 w-16 rounded bg-gray-700"></div>
              <div className="h-4 w-12 rounded bg-gray-700"></div>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-6">
            <div className="h-5 w-32 rounded bg-gray-800"></div>

            <div className="mt-4 space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="h-4 w-4 shrink-0 rounded bg-gray-700"></div>

                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-full rounded bg-gray-800"></div>
                    <div className="h-4 w-4/5 rounded bg-gray-800"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-6 flex gap-3">
            <div className="h-11 w-36 rounded-lg bg-gray-800"></div>
            <div className="h-11 w-36 rounded-lg bg-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;