import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const FooterPage = () => {
  return (
    <footer className="border-t border-[#222630] text-center">
      <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="FITLOG logo"
              className="h-auto w-5 sm:w-6"
            />

            <Link
              href="/"
              className="ml-2 text-xl font-bold text-white sm:text-2xl"
            >
              FITLOG
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs leading-5 text-[#6B7280] sm:text-sm">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;