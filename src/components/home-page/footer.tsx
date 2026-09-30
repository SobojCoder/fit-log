import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const FooterPage = () => {
  return (
    <div className="border border-[#222630] ">
      <div className="container mx-auto py-8  ">
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="flex">
            <Image src={logo} alt="logo" className="w-[20px] h-auto" />
            <Link href="/" className="btn btn-ghost text-2xl text-[#FFFFFF]">
              FITLOG
            </Link>
          </div>
          <p className="grid justify-end text-sm text-[#6B7280]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
