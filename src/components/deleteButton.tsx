import { WorkoutContext } from '@/contexts/workoutProvider';
import { IWorkout } from '@/types/workout.type';
import React, { useContext } from 'react';
import { IoIosClose } from 'react-icons/io';

const DeleteButton = ({workout}:{workout:IWorkout}) => {
    const {addPlan, setAddPlan} = useContext(WorkoutContext);

    const heandleRemovePlan =(workout:IWorkout) =>{
        const restWorkoutPlan = addPlan.filter((plan) => plan.name != workout.name) ;
        setAddPlan(restWorkoutPlan);
    }

    return (
        <div>
            <IoIosClose
            onClick={() => heandleRemovePlan(workout)}
            className="font-bold text-2xl" />
        </div>
    );
};

export default DeleteButton;