import { Navbar } from "@/components/Header/Navbar";
import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mx-auto  sm:px-0">
        <div className="w-full absolute z-0">
          <Image
            src="/bg.png"
            width={1000}
            height={200}
            alt="hero"
            className="object-cover w-full h-full min-h-[100vh] md:min-h-fit"
          />
        </div>
        <div className="hero relative z-50 max-w-7xl mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default page;
