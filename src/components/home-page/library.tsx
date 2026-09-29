import React from "react";
import WorkoutsCard from "../cards/workoutsCard";
import { IWorkout } from "@/types/workout.type";
import { getWortkouts } from "@/lib/app";

const LibraryPage = async () => {
  const workouts = await getWortkouts();
  return (
    <div className="container mx-auto my-15">
      <div className="mb-7 mt-18">
        <h2 className="text-4xl font-bold">THE LIBRARY</h2>
        <p className="my-3 text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {workouts.map((workout: IWorkout) => (
          <WorkoutsCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
