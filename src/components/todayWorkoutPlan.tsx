import { WorkoutContext } from '@/contexts/workoutProvider';
import React, { useContext } from 'react';
import TodayPlanCard from './cards/todayPlanCard';
import { IWorkout } from '@/types/workout.type';
import Link from 'next/link';

const TodayWorkoutPlan = ({sortedTodayWorkoutPlan}:{sortedTodayWorkoutPlan: IWorkout[]}) => {

const { addPlan } = useContext(WorkoutContext);

    return (
        <div>
        {addPlan.length > 0 ? (
          <div>
            {sortedTodayWorkoutPlan.map((workout: IWorkout) => {
              return <TodayPlanCard key={workout.id} workout={workout} />;
            })}
          </div>
        ) : (
          <div className="py-15 text-center border border-dashed rounded-2xl mt-8 border-[#A1A1AA]">
            <h2 className="text-3xl font-bold">NOTHING HERE YET</h2>
            <p className="text-[#5D636F] mt-2 mb-4">
              Browse the library and add a lift to get today moving.
            </p>
            <Link href='/'>
            <button className="btn rounded-3xl bg-[#CCFF00] text-[#101216]">
                Go to Workout
              </button>
              </Link>
          </div>
        )}
      </div>
    );
};

export default TodayWorkoutPlan;