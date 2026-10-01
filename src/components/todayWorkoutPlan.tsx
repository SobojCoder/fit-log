
import { WorkoutContext } from "@/contexts/workoutProvider";
import React, { useContext } from "react";
import TodayPlanCard from "./cards/todayPlanCard";
import { IWorkout } from "@/types/workout.type";
import Link from "next/link";

const TodayWorkoutPlan = ({
  sortedTodayWorkoutPlan,
}: {
  sortedTodayWorkoutPlan: IWorkout[];
}) => {
  const { addPlan } = useContext(WorkoutContext);

  return (
    <div className="mt-6 sm:mt-8">
      {addPlan.length > 0 ? (
        <div className="space-y-4">
          {sortedTodayWorkoutPlan.map((workout: IWorkout) => (
            <TodayPlanCard key={workout.id} workout={workout} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-[#A1A1AA] px-4 py-10 text-center sm:mt-8 sm:px-6 sm:py-15">
          <h2 className="text-2xl font-bold sm:text-3xl">
            NOTHING HERE YET
          </h2>

          <p className="mx-auto mb-4 mt-2 max-w-md text-sm leading-6 text-[#5D636F] sm:text-base">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-3xl bg-[#CCFF00] px-5 py-2.5 text-sm font-semibold text-[#101216] transition hover:opacity-90 sm:px-6 sm:py-3"
          >
            Go to Workout
          </Link>
        </div>
      )}
    </div>
  );
};

export default TodayWorkoutPlan;
