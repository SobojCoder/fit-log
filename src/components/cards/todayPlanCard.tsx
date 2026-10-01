
"use client";

import { IWorkout } from "@/types/workout.type";
import { Check, Clock3, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { WorkoutContext } from "@/contexts/workoutProvider";
import { toast } from "react-toastify";

const TodayPlanCard = ({ workout }: { workout: IWorkout }) => {
  const [isdone, setIsDone] = useState(false);

  const { addPlan, setAddPlan } = useContext(WorkoutContext);

  const handleMarkDone = () => {
    setIsDone(true);
    toast.success(`${workout.name} marked as done`);
  };

  const handleRemovePlan = (workout: IWorkout) => {
    const restWorkoutPlan = addPlan.filter(
      (plan) => plan.name !== workout.name
    );

    setAddPlan(restWorkoutPlan);

    toast.error(`${workout.name} removed from today's plan`);
  };

  return (
    <div className="my-3 w-full overflow-hidden rounded-2xl border border-amber-200">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* ================= WORKOUT INFO ================= */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          
          {/* Image */}
          <div className="shrink-0">
            <Image
              src={workout.image}
              alt={workout.name}
              className="h-16 w-16 rounded-xl object-cover sm:h-20 sm:w-20"
              width={80}
              height={80}
            />
          </div>

          {/* Details */}
          <div className="min-w-0 text-left">
            <h2 className="truncate text-base font-extrabold sm:text-xl">
              {workout.name}
            </h2>

            <p className="mt-0.5 text-sm text-zinc-400">
              {workout.difficulty}
            </p>

            {/* Stats */}
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 sm:gap-4 sm:text-sm">
              
              {/* Duration */}
              <div className="flex items-center gap-1">
                <Clock3
                  className="shrink-0 text-[#c6ff00]"
                  size={14}
                />
                <span>{workout.duration} min</span>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-1">
                <Flame
                  className="shrink-0 text-[#c6ff00]"
                  size={14}
                />
                <span>{workout.caloriesBurned} kcal</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <Star
                  className="shrink-0 text-[#c6ff00]"
                  size={14}
                />
                <span>{workout.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="flex w-full items-center gap-2 sm:w-auto sm:shrink-0 sm:gap-3">
          
          {/* View Details */}
          <Link
            href={`/workout-details/${workout.id}`}
            className="flex flex-1 items-center justify-center rounded-3xl border border-zinc-700 px-3 py-2.5 text-xs font-medium text-zinc-300 transition hover:bg-zinc-800 sm:flex-none sm:px-5"
          >
            View Details
          </Link>

          {/* Mark As Done */}
          <button
            onClick={handleMarkDone}
            disabled={isdone}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-3xl px-3 py-2.5 text-xs font-bold transition sm:flex-none sm:px-5 ${
              isdone
                ? "cursor-not-allowed bg-[#c6ff00]/50 text-black"
                : "cursor-pointer bg-[#c6ff00] text-black hover:bg-[#b8f000]"
            }`}
          >
            <Check size={16} />

            <span className="whitespace-nowrap">
              {isdone ? "DONE" : "Mark As Done"}
            </span>
          </button>

          {/* Remove */}
          <button
            onClick={() => handleRemovePlan(workout)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-2xl text-zinc-400 transition hover:bg-zinc-800 hover:text-red-500"
            aria-label={`Remove ${workout.name}`}
          >
            <IoIosClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodayPlanCard;
