"use client";
import { WorkoutContext } from "@/contexts/workoutProvider";
import { IWorkout } from "@/types/workout.type";
import { CalendarPlus } from "lucide-react";
import React, { useContext } from "react";

const AddPlanButton = ({ workout }: { workout: IWorkout }) => {
  const {addPlan , setAddPlan} = useContext(WorkoutContext)
    const heandleAddPlan= () =>{
        console.log(workout);
        setAddPlan([...addPlan, workout])
    }
  return (
    <div>
      <button
      onClick={() => heandleAddPlan()}
      className="flex items-center gap-2 rounded-lg bg-[#c6ff00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#b8f000]">
        <CalendarPlus size={15} />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default AddPlanButton;
