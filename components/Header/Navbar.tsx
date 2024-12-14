"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-5 h-auto md:h-[15vh] w-full relative">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-32 md:w-auto"
        />

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-5 font-semibold w-full md:w-auto items-center my-4 md:my-0`}
      >
        <div>Home</div>
        <div>Services</div>
        <div>About</div>
        <div>Contact</div>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-5 w-full md:w-auto items-center`}
      >
        <Button className="px-8 py-6 text-white bg-orange-400 rounded  hover:bg-black transition-colors duration-300 w-full md:w-auto">
          Free Trial
        </Button>
        <Button
          variant="outline"
          className="px-8 py-6  rounded hover:bg-black border-black border-2 hover:text-white transition-colors duration-300 w-full md:w-auto"
        >
          Login
        </Button>
      </div>
    </div>
  );
};
