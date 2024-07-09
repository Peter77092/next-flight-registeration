import React, { useState } from "react";
import Travelers from "./Boxes/Travellers";
import Leaving_Going from "./Boxes/Leaving_Going";
import CalendarComp from "./Boxes/CalendarComp";
import Button from "./Boxes/Button";
import { AddIcon } from "../Icons";

const Tab2_3 = () => {
  const [flightCount, setFlightCount] = useState(0);
  const handleAddFlight = () => {
    setFlightCount((prev) => prev + 1);
  };

  const handleRemove = () => {
    setFlightCount((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-4 sx:mt-0 mt-5">
      <Travelers className="w-[250px] py-1" className2="!left-0" />
      {/* part 1 */}
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Flight 1</h1>
        <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-3 gap-2">
          <div className="sm:col-span-3 col-span-1">
            <Leaving_Going />
          </div>
          <CalendarComp />
        </div>
      </div>
      {/* part 2 */}
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Flight 2</h1>
        <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-3 gap-2">
          <div className="sm:col-span-3 col-span-1">
            <Leaving_Going />
          </div>
          <CalendarComp />
        </div>
      </div>
      {/* add another flight */}
      {[...Array(flightCount)].map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold">{`Flight ${index + 3}`}</h1>
            <button
              onClick={() => handleRemove(index)}
              className="text-red-400 text-[0.8rem]"
            >
              Remove
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-3">
              <Leaving_Going />
            </div>
            <CalendarComp />
          </div>
        </div>
      ))}

      {/* add & search */}
      <div className="flex justify-between items-center">
        <div
          className="flex items-center text-blue-700 gap-1 cursor-pointer"
          onClick={handleAddFlight}
        >
          <AddIcon />
          <span className="text-sm">Add Another Flight</span>
        </div>
        <Button className="!w-auto" />
      </div>
    </div>
  );
};

export default Tab2_3;
