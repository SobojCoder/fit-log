"use client";
import { IWorkout } from "@/types/workout.type";
import React, { createContext, ReactNode, useState } from "react";

interface IWorkoutContext {
  addPlan: IWorkout[];
  setAddPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  addToSaved: IWorkout[];
  setAddToSave: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<IWorkoutContext>({
  addPlan: [],
  setAddPlan: () => {},
  addToSaved: [],
  setAddToSave: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<IWorkout[]>([]);
  const [addToSaved, setAddToSave] = useState<IWorkout[]>([]);

  const shareData = {
    addPlan,
    setAddPlan,
    addToSaved,
    setAddToSave,
  };
  return (
    <WorkoutContext.Provider value={shareData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
