'use client'
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarPage = () => {
  const pathname = usePathname();
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

    <div className="border-b border-[#222630]">
      <div className="navbar  bg-[#000000] shadow-sm container mx-auto">
        <div className="navbar-start">
            {/* <div className="dropdown">
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
            </div> */}
          <Image src={logo} alt="logo" className="w-[25px] h-auto" />
          <Link href='/' className="btn btn-ghost text-2xl">FITLOG</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-3">
        {links}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <a className="">Plan</a>
          <a className="">Saved</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
