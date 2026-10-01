
"use client";

import SavedWorkoutPlan from "@/components/savedWorkoutPlan";
import TodayWorkoutPlan from "@/components/todayWorkoutPlan";
import { WorkoutContext } from "@/contexts/workoutProvider";
import { IWorkout } from "@/types/workout.type";
import React, { useContext, useState } from "react";

const MyPlanPage = () => {
  const [buttonType, setButtonType] = useState<"selected" | "seved">(
    "selected",
  );

  const { addPlan, addToSaved } = useContext(WorkoutContext);

  const [sortby, setSortby] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const sortWorkouts = (workouts: IWorkout[]) => {
    const sortedWorkouts = [...workouts];

    if (sortby === "duration") {
      sortedWorkouts.sort((a, b) => b.duration - a.duration);
    } else if (sortby === "calories") {
      sortedWorkouts.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned,
      );
    } else if (sortby === "rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkouts;
  };

  const sortedTodayWorkoutPlan = sortWorkouts(addPlan);
  const sortedSavedWorkoutPlan = sortWorkouts(addToSaved);

  const handleUpdatedBtn = (type: "selected" | "seved") => {
    setButtonType(type);
  };

  const currentPlan = buttonType === "selected" ? addPlan : addToSaved;

  const totalMinutes = currentPlan.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0,
  );

  const totalCalories = currentPlan.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0,
  );

  return (
    <div className="container mx-auto my-8 px-4 sm:my-12 sm:px-6 lg:px-8">
      {/* ================= HEADER ================= */}
      <div className="mb-6 mt-6 sm:mt-10">
        <h1 className="text-3xl font-bold sm:text-4xl">MY PLAN</h1>

        <p className="mt-2 text-sm text-[#5D636F] sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#5D636F] bg-[#13161D] sm:grid-cols-3">
        
        {/* Exercises */}
        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <h3 className="text-sm text-[#5D646F] sm:text-lg">
            Exercises
          </h3>

          <span className="text-4xl font-bold text-[#CCFF00] sm:text-5xl lg:text-6xl">
            {currentPlan.length}
          </span>
        </div>

        {/* Minutes */}
        <div className="border-t border-[#5D636F] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6 sm:py-6">
          <h3 className="text-sm text-[#5D646F] sm:text-lg">
            Minutes
          </h3>

          <span className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            {totalMinutes}
          </span>
        </div>

        {/* Calories */}
        <div className="border-t border-[#5D636F] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6 sm:py-6">
          <h3 className="text-sm text-[#5D646F] sm:text-lg">
            Calories
          </h3>

          <span className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            {totalCalories}
          </span>
        </div>
      </div>

      {/* ================= TABS + SORT ================= */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Selected / Saved buttons */}
        <div>
          <div className="flex w-fit rounded-2xl border border-[#5D636F] bg-[#151921] p-1.5">
            <button
              onClick={() => handleUpdatedBtn("selected")}
              className={`cursor-pointer rounded-xl px-3 py-2 text-sm sm:px-4 ${
                buttonType === "selected"
                  ? "bg-[#1F242D] text-[#CCFF00]"
                  : "text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => handleUpdatedBtn("seved")}
              className={`cursor-pointer rounded-xl px-3 py-2 text-sm sm:px-4 ${
                buttonType === "seved"
                  ? "bg-[#1F242D] text-[#CCFF00]"
                  : "text-white"
              }`}
            >
              Saved
            </button>
          </div>
        </div>

        {/* Sort By */}
        <div className="flex items-center justify-center gap-2 sm:justify-end">
          <span className="text-xs text-[#737985]">Sort By</span>

          <select
            value={sortby}
            onChange={(e) =>
              setSortby(
                e.target.value as "duration" | "calories" | "rating",
              )
            }
            className="rounded-lg border border-[#343A47] bg-[#15181F] px-3 py-2 text-xs text-white outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* ================= WORKOUT PLANS ================= */}
      {buttonType === "selected" ? (
        <TodayWorkoutPlan
          sortedTodayWorkoutPlan={sortedTodayWorkoutPlan}
        />
      ) : (
        <SavedWorkoutPlan
          sortedSavedWorkoutPlan={sortedSavedWorkoutPlan}
        />
      )}
    </div>
  );
};

export default MyPlanPage;