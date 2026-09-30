"use client";
import TodayPlanCard from "@/components/cards/todayPlanCard";
import WorkoutMyPlanCard from "@/components/cards/workoutMyPlanCard";
import { WorkoutContext } from "@/contexts/workoutProvider";
import { IWorkout } from "@/types/workout.type";
import Link from "next/link";
import React, { useContext } from "react";

const MyPlanPage = () => {
  const { addPlan } = useContext(WorkoutContext);
  return (
    <div className="container mx-auto">
      <div className="mb-6 mt-10">
        <h1 className="text-4xl font-bold">MY PLAN</h1>
        <p className="text-[#5D636F]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="border border-[#5D636F] rounded-2xl grid grid-cols-3 py-6 px-8 bg-[#13161D]">
        <div>
          <h3 className="text-[#5D646F] text-lg">Exerciese</h3>
          <span className="text-[#CCFF00] text-6xl font-bold">0</span>
        </div>
        <div className="border-l border-[#5D636F] px-8">
          <h3 className="text-[#5D646F] text-lg">Minutes</h3>
          <span className=" text-6xl font-bold">0</span>
        </div>
        <div className="border-l border-[#5D636F] px-8">
          <h3 className="text-[#5D646F] text-lg">Calories</h3>
          <span className=" text-6xl font-bold">0</span>
        </div>
      </div>

      
        <div className="tabs tabs-box my-10">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Tab 1"
          />
          
          <div className="tab-content border-[#5D636F] bg-[#101216] text-center ">
            {addPlan.length > 0 ? (
        addPlan.map((workout: IWorkout) => {
          return <TodayPlanCard key={workout.id} workout={workout} />;
        })
        ):(
            <div className="py-15">
              <h2 className="text-3xl font-bold">NOTHING HERE YET</h2>
              <p className="text-[#5D636F] mt-2 mb-4">
                Browse the library and add a lift to get today moving.
              </p>
              <Link href="/">
                <button className="btn rounded-3xl bg-[#CCFF00] text-[#101216]">
                  Go to Workout
                </button>
              </Link>
            </div>  
        )}
      
          </div>
        
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Tab 2"
            defaultChecked
          />
          
          <div className="tab-content border-[#5D636F] bg-[#101216] text-center">
            {addPlan.length > 0 ? (
        addPlan.map((workout: IWorkout) => {
          return <TodayPlanCard key={workout.id} workout={workout} />;
        })
        ):(
          
            <div className="py-15">
              <h2 className="text-3xl font-bold">NOTHING HERE YET</h2>
              <p className="text-[#5D636F] mt-2 mb-4">
                Browse the library and add a lift to get today moving.
              </p>
              <Link href="/">
                <button className="btn rounded-3xl bg-[#CCFF00] text-[#101216]">
                  Go to Workout
                </button>
              </Link>
            </div>
        )}
          </div>
        </div>
      

     
    </div>
  );
};

export default MyPlanPage;
