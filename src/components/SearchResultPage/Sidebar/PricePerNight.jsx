import React from "react";

const PricePerNight = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-sm">Price per night</p>
      <div className="flex gap-3 w-full mb-3">
        <div className="border border-slate-500 px-3 py-1 rounded-lg w-1/2">
          <p className="text-xs">Min</p>
          <input
            name="min"
            placeholder="$0"
            value=""
            className="outline-none w-full bg-transparent text-xs"
          />
        </div>
        <div className="border border-slate-500 px-3 py-1 rounded-lg w-1/2">
          <p className="text-xs">Max</p>
          <input
            name="max"
            placeholder="$180"
            value=""
            className="outline-none w-full bg-transparent text-xs"
          />
        </div>
      </div>

    </div>
  );
};

export default PricePerNight;
