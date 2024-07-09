import Image from "next/image";
import React from "react";

const DefaultImg = () => {
  return (
    <div className="w-full relative h-[520px] rounded-2xl">
      <Image
        className="object-cover rounded-2xl"
        objectFit="cover"
        objectPosition="center"
        priority={false}
        src="/images/default.avif"
        layout="fill"
        fill
        alt="default"
      />
      <div className="absolute w-full h-full overflow-hidden top-0 right-0 bg-[#000] opacity-40 rounded-2xl" />
      <div className="absolute w-full h-full z-50 bg-transparent flex items-center">
        <div className="flex flex-col gap-5 2xl:w-1/2 xl:w-3/4 sm:px-16 px-6">
          <h1 className="sm:text-5xl text-3xl font-bold text-white">
            Big spring savings:
            <br />
            Save 25% or more
          </h1>
          <p className="sm:text-xl text-lg text-white">
            Enjoy warmer weather and travel deals. Book by March 25 for 25% off
            select hotels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefaultImg;
