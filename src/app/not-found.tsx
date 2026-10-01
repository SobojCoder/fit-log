
"use client";

import Image from "next/image";
import notFoundImage from "@/assets/not-found.png";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-[#000000] px-6 py-12 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CCFF00]/10 blur-3xl" />

            <Image
              src={notFoundImage}
              alt="Page not found illustration"
              width={800}
              height={600}
              priority
              className="relative mx-auto w-full max-w-xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 text-center lg:order-2 lg:text-left">
            
            {/* Error */}
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#CCFF00]">
              Error 404
            </p>

            {/* 404 */}
            <h1 className="text-7xl font-black tracking-tight text-white sm:text-9xl">
              404
            </h1>

            {/* Heading */}
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Page Not Found
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#9CA3AF] lg:mx-0">
              Oops! The page you are looking for doesn&apos;t exist, has been
              moved, or may no longer be available.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              
              {/* Go Home */}
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl
                bg-[#CCFF00] px-7 py-3.5 font-bold text-black
                shadow-lg shadow-[#CCFF00]/10 transition-all duration-300
                hover:-translate-y-0.5 hover:bg-[#b8e600]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M11.47 3.841a.75.75 0 011.06 0l8.25 8.25a.75.75 0 11-1.06 1.06l-.97-.97V19.5a1.5 1.5 0 01-1.5 1.5h-3.5v-5.25h-4.5V21H5.75a1.5 1.5 0 01-1.5-1.5v-7.318l-.97.97a.75.75 0 01-1.06-1.06l9.25-9.25z" />
                </svg>
                Go Home
              </Link>

              {/* Go Back */}
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-xl
                border border-[#2A2D35] bg-[#15171D] px-7 py-3.5
                font-semibold text-white transition-all duration-300
                hover:-translate-y-0.5 hover:border-[#CCFF00]/50
                hover:bg-[#1B1E25]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Go Back
              </button>
            </div>

            {/* Bottom text */}
            <p className="mt-8 text-sm text-[#6B7280]">
              Don&apos;t worry, even the best explorers get lost sometimes. 😄
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;