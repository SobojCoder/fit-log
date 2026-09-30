"use client";
import SavedWorkoutPlan from "@/components/savedWorkoutPlan";
import TodayWorkoutPlan from "@/components/todayWorkoutPlan";
import React, { useState } from "react";

const MyPlanPage = () => {
  const [buttonType, setButtonType] = useState("selected");
  const heandleUpdatedBtn = (type: "selected" | "seved") => {
    setButtonType(type);
  };

  return (
    <div className="container mx-auto my-12">
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

      <div className="flex justify-between mt-8">
        {/* selected button */}
        <div>
          <div className="flex border border-[#5D646F]  bg-[#151921] p-1.5 rounded-2xl">
            <button
              onClick={() => heandleUpdatedBtn("selected")}
              className={`cursor-pointer px-4 py-1.25 ${buttonType === "selected" ? "text-[#CCFF00] bg-[#1F242D] rounded-xl" : ""}`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => heandleUpdatedBtn("seved")}
              className={` cursor-pointer px-4 py-1.25 ${buttonType === "seved" ? "text-[#CCFF00] bg-[#1F242D]  rounded-xl" : ""}`}
            >
              Seved
            </button>
          </div>
        </div>

        {/* sort by */}

        <div className="flex items-center gap-2">
          <span className="text-xs text-[#737985]">Sort By</span>

          <select className="rounded-lg border border-[#343A47] bg-[#15181F] px-3 py-2 text-xs text-white outline-none">
            <option>Duration</option>
            <option>Calories</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
      {buttonType === "selected" ? <TodayWorkoutPlan /> : <SavedWorkoutPlan />}

      {/* selected card */}
    </div>
  );
};

export default MyPlanPage;

