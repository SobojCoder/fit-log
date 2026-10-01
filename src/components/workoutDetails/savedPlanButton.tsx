"use client";
import { WorkoutContext } from "@/contexts/workoutProvider";
import { IWorkout } from "@/types/workout.type";
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SavedPlanButton = ({ workout }: { workout: IWorkout }) => {
  const {addToSaved , setAddToSave} = useContext(WorkoutContext)

        const heandleAddToSaved= () =>{
              
              const chackSavedWorkout: IWorkout[] = addToSaved.filter((plan) => plan.name !== workout.name);
              
              if(addToSaved.some((plan)=> plan.name === workout.name)){
                toast.info(`${workout.name} is alredy add in Saved for later!`);
              }else{
                toast.success(`${workout.name} add to Saved for later`);
                
              }
              setAddToSave([...chackSavedWorkout, workout]);
            }
    
  return (
    <div>
      <button
      onClick={() => heandleAddToSaved()}
      className="cursor-pointer flex items-center gap-2 rounded-lg bg-[#c6ff00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#b8f000]">
        <Bookmark size={15} />
        Seved for later
      </button>
    </div>
  );
};

export default SavedPlanButton;
