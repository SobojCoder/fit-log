'use client'
import { IWorkout } from '@/types/workout.type';
import React, { createContext, ReactNode, useState } from 'react';

export const WorkoutContext = createContext({});

const WorkoutProvider = ({children}:{children: ReactNode}) => {
    const [addPlan , setAddPlan] = useState<IWorkout[]>([])
    
    const shareData = {
        addPlan,
        setAddPlan
    }
    return (
        <WorkoutContext.Provider value={shareData}>{children}</WorkoutContext.Provider>
    );
};

export default WorkoutProvider;