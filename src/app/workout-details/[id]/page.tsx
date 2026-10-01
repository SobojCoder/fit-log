import AddPlanButton from "@/components/workoutDetails/addPlanButton";
import SavedPlanButton from "@/components/workoutDetails/savedPlanButton";
import { getWortkouts } from "@/lib/app";
import { IWorkout } from "@/types/workout.type";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IWorkoutDetailsProps {
  params: {
    id: string;
  };
}

const AppDetailsPage = async ({ params }: IWorkoutDetailsProps) => {
  const { id } = await params;
  const workouts = await getWortkouts();
  const workout = workouts.find(
    (workout: IWorkout) => String(workout.id) === String(id)
  );
  return (
    <div className="bg-[#0F1014]  py-8 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* ================= IMAGE ================= */}
        <div className="relative h-150 overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* ================= DETAILS ================= */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-2 max-w-xl text-sm leading-5 text-zinc-400">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c6ff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-5 overflow-hidden rounded-xl border border-zinc-800 bg-[#151922]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                Equipment
              </span>

              <span className="text-xs text-zinc-200">{workout.equipment}</span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                Difficulty
              </span>

              <span className="text-xs text-zinc-200">
                {workout.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                Sets
              </span>

              <span className="text-xs text-zinc-200">{workout.sets}</span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                Reps
              </span>

              <span className="text-xs text-zinc-200">{workout.reps}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                Duration
              </span>

              <span className="text-xs text-zinc-200">
                {workout.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                Calories
              </span>

              <span className="text-xs text-zinc-200">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                Rating
              </span>

              <span className="flex items-center gap-1 text-xs text-zinc-200">
                <Star size={14} />
                {workout.rating}
              </span>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-5">
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3">
              {workout.instructions.map(
                (instruction: string, index: string) => (
                  <li
                    key={index}
                    className="flex gap-3 text-xs leading-5 text-zinc-400"
                  >
                    <span className="shrink-0 text-zinc-500">{index + 1}.</span>

                    <span>{instruction}</span>
                  </li>
                ),
              )}
            </ol>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-6 flex flex-wrap gap-3">
            <AddPlanButton workout={workout} />

            <SavedPlanButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
