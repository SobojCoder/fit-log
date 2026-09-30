import { IWorkout } from "@/types/workout.type";
import { Clock3, Flame, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const TodayPlanCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <div className="container mx-auto border border-base-200 my-3">
      <div  className="grid grid-cols-2">
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
      </div>
      <div>
        <button>View Details</button>
        <button>Mark as Down</button>
      </div>
    </div>
  );
};

export default TodayPlanCard;
