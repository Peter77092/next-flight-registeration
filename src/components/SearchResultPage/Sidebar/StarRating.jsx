"use client";
import { StarIcon } from "@/components/Icons";
import { useState } from "react";

const values = [1, 2, 3, 4, 5];
const StarRating = () => {
  const [active, setActive] = useState(1);

  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <div className="flex flex-col gap-2 mt-5">
      <p className="font-semibold text-sm">Star rating</p>
      <div className="flex flex-wrap gap-1">
        {values.map((item) => (
          <div
            key={item}
            className={`w-[50px] h-[35px] border border-slate-400 flex justify-center items-center rounded-lg gap-1 cursor-pointer ${
              active === item &&
              "border-2 border-slate-600 bg-slate-300 text-sm"
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
            <StarIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
