'use client'
import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkoutContext } from "@/contexts/workoutProvider";

const NavbarPage = () => {
  const pathname = usePathname();
  const {addPlan, addToSaved}  = useContext(WorkoutContext);
  const links = (
    <>
      <li>
        <Link className={`${pathname === '/' ? 'text-[#CCFF00] border-0 rounded-2xl bg-[#1A2312] px-5 py-2' : ''} `} href="/">Workouts</Link>
      </li>

      <li>
        <Link className={`${pathname === '/my-plan' ? 'text-[#CCFF00] border-0 rounded-2xl bg-[#1A2312] px-5 py-2' : ''} `}  href="/my-plan">My Plan</Link>
      </li>
    </>
  );
  return (

    <div className="sticky top-0 z-50 border-b border-[#222630]">
      <div className="navbar  bg-[#000000] shadow-sm container mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                    aria-label="Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {" "}
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                </svg>
                </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                    [links]
                </ul>
            </div>
          <Image src={logo} alt="logo" className="w-6.25 h-auto" />
          <Link href='/' className="pl-2 font-bold text-2xl">FITLOG</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-3">
        {links}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <Link href='/my-plan'>
          <button className="cursor-pointer">Plan <span className=" ml-2 px-2.5 py-1 text-[#000000] font-bold text-lg bg-[#CCFF00] rounded-3xl">{`${addPlan.length}`}</span></button>
          </Link>
          <Link href='/my-plan'>
          <button className="cursor-pointer text-[#9CA3AF]">Saved <span className="ml-2 px-2.5 py-1 border-2 border-[#222630] font-bold text-lg  rounded-3xl">{`${addToSaved.length}`}</span></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
