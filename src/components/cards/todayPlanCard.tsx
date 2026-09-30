import { IWorkout } from "@/types/workout.type";
import { Clock3, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosClose } from "react-icons/io";

const TodayPlanCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <div className="container mx-auto border border-amber-200 rounded-2xl my-3">
      <div className="grid grid-cols-2">
        <div className="flex p-4 gap-4">
          <div>
            <Image
              src={workout.image}
              alt={workout.name}
              className="rounded-xl"
              width={80}
              height={80}
            />
          </div>
          <div className="text-left">
            <h2 className="font-extrabold text-xl">{workout.name}</h2>
            <p className="text-zinc-400">{workout.difficulty}</p>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              {/* Duration */}
              <div className="flex items-center gap-1.5">
                <Clock3 className="text-[#c6ff00]" size={15} />
                <span>{workout.duration} min</span>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-1.5">
                <Flame className="text-[#c6ff00]" size={15} />
                <span>{workout.caloriesBurned} kcal</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5">
                <Star className="text-[#c6ff00]" size={15} />
                <span>{workout.rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-end pr-6">
          <Link href={`/workout-details/${workout.id}`}>
          <button className=" cursor-pointer flex items-center gap-2 rounded-3xl     border border-zinc-700 px-5 py-2.5 text-xs font-medium text-zinc-300 transition hover:bg-zinc-800">
            View Details
          </button>
          </Link>
          <button className="cursor-pointer flex items-center gap-2 rounded-3xl bg-[#c6ff00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#b8f000]">
            Mark as Done
          </button>
          <IoIosClose className="font-bold text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default TodayPlanCard;
