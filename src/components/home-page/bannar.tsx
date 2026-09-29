import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png"

const BannarPage = () => {
  return (
    <div className="container mx-auto bg-[##8A909B] my-10">
      <div className="bg-[#15171D] py-15 px-10 rounded-xl flex justify-between items-center gap-8">
        <div className="w-[600px]">
          <p className="text-[#A1CE06] text-lg mb-4">WORKOUT LIBRARY</p>
          <h1 className="text-5xl font-bold ">TRAIN WITH INTENT. LOG EVERY SET.</h1>
          <p className="text-lg my-5 text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="bg-[#A1CE06] btn text-[#000000]">BROWSE WORKOUTS</button>
        </div>
        <div>
        <Image src={banner} alt="banner" className="w-[350px] h-auto"/>
        </div>
      </div>
    </div>
  );
};

export default BannarPage;
