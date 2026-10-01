
import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";
import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";

const BannarPage = () => {
  return (
    <div className="container mx-auto my-6 sm:my-8 lg:my-10 px-4">
      <div className="bg-[#15171D] py-10 sm:py-12 lg:py-15 px-5 sm:px-8 lg:px-10 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <p className="text-[#A1CE06] text-base sm:text-lg mb-3 sm:mb-4">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-base sm:text-lg my-4 sm:my-5 text-[#9CA3AF] leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link href="#library">
            <button className="bg-[#A1CE06] btn text-[#000000] px-6">
              BROWSE WORKOUTS
              <FiArrowDown />
            </button>
          </Link>
        </div>

        {/* Banner Image */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <Image
            src={banner}
            alt="Workout banner"
            className="w-56 sm:w-72 lg:w-[350px] h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default BannarPage;
