import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="h-auto min-h-[84vh] mt-16 sm:mt-20 w-full flex justify-center items-center p-4 md:p-10">
      <div className="flex flex-col md:flex-row justify-between w-full relative">
        <div className="text-center md:text-left mb-8 md:mb-0 w-full">
          <div className="flex items-center justify-center gap-3 md:gap-5 flex-col w-full">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold block">
              The Modern Community Platform
            </h1>
            <p className="text-xs sm:text-sm md:text-base max-w-[90%] sm:max-w-[80%] md:max-w-full">
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-full md:justify-start md:translate-x-[50%]">
          <div className="hidden lg:block absolute translate-x-[-120%] translate-y-[130%]">
            <Image src="/hero3.png" width={400} height={400} alt="hero" />
          </div>
          <div className="relative w-full sm:w-auto translate-x-0 md:translate-x-[-40%]">
            <Image
              src="/hero1.png"
              width={500}
              height={400}
              className="w-full sm:w-[400px] md:w-[500px] h-auto md:h-[400px] object-contain"
              alt="hero"
            />
          </div>
          <div className="hidden lg:block absolute translate-x-[20%] translate-y-[-30%]">
            <Image src="/hero2.png" width={400} height={400} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};
