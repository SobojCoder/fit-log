"use client";
import { WorkoutContext } from "@/contexts/workoutProvider";
import { IWorkout } from "@/types/workout.type";
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SavedPlanButton = ({ workout }: { workout: IWorkout }) => {
  const {addToSaved , setAddToSave} = useContext(WorkoutContext)
    const heandleAddToSaved= () =>{
        setAddToSave([...addToSaved, workout]);
        toast.success(`${workout.name} add to saved for later`);
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
