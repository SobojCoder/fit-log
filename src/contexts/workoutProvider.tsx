"use client";
import { IWorkout } from "@/types/workout.type";
import React, { createContext, ReactNode, useState } from "react";

interface IWorkoutContext {
  addPlan: IWorkout[];
  setAddPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  addToSaved: IWorkout[];
  setAddToSave: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  minutes: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  calories:number;
  setCalories: React.Dispatch<React.SetStateAction<number>>;
}

export const WorkoutContext = createContext<IWorkoutContext>({
  addPlan: [],
  setAddPlan: () => {},
  addToSaved: [],
  setAddToSave: () => {},
  minutes: 0,
  setMinutes: () => {},
  calories: 0,
  setCalories: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [minutes, setMinutes] = useState<number>(0);
  const [calories, setCalories] =useState<number>(0);
  const [addPlan, setAddPlan] = useState<IWorkout[]>([]);
  const [addToSaved, setAddToSave] = useState<IWorkout[]>([]);

  const shareData = {
    addPlan,
    setAddPlan,
    addToSaved,
    setAddToSave,
    minutes,
    setMinutes,
    calories,
    setCalories,
  };
  return (
    <WorkoutContext.Provider value={shareData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
