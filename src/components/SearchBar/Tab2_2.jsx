import React from "react";
import Leaving_Going from "./Boxes/Leaving_Going";
import CalendarComp from "./Boxes/CalendarComp";
import Travelers from "./Boxes/Travellers";
import Button from "./Boxes/Button";

const Tab2_2 = () => {
  return (
    // <div className="flex flex-col gap-2">
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 sx:mt-0 mt-5">
      <div className="sm:col-span-2 col-span-1">
        <Leaving_Going />
      </div>
      <CalendarComp />
      <Travelers />
      <Button />
    </div>
    // </div>
  );
};

export default Tab2_2;
