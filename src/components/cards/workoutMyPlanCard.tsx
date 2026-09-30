import { IWorkout } from '@/types/workout.type';
import { Clock3, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const WorkoutMyPlanCard = ({workout}:{workout:IWorkout}) => {
    return (
        <div>
      <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#15161b] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        {/* Image */}
        <div className="relative h-65 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c6ff00] px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="line-clamp-1 text-lg font-extrabold uppercase tracking-wide">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 text-sm text-zinc-400">
            {workout.equipment}, {workout.difficulty}
          </p>

          {/* Divider */}
          <div className="my-4 h-px bg-zinc-800" />

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <Clock3 size={15} />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <Flame size={15} />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <Star size={15} />
              <span>{workout.rating}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
};

export default WorkoutMyPlanCard;