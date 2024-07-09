import React, { useState } from "react";
import CalendarRangeComp from "./Boxes/CalendarRangeComp";
import Travelers from "./Boxes/Travellers";
import Button from "./Boxes/Button";
import CheckBox from "./Boxes/CheckBox";
import Leaving_Going from "./Boxes/Leaving_Going";

const Tab2_1 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex md:flex-row flex-col w-full gap-2 sx:mt-0 mt-5">
      <div className="flex flex-col w-full">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
          <div className="md:col-span-2 col-span-1">
            <Leaving_Going />
          </div>
          <CalendarRangeComp />
          <Travelers />
        </div>
        <CheckBox title="Add a place to stay" onChange={handleCheckboxChange} />
      </div>
      <Button />
    </div>
    // <div className="flex flex-col gap-2">
    //   <div className="grid 2xl:grid-cols-5 xl:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
    //     <div className="col-span-2">
    //       <Leaving_Going />
    //     </div>
    //     <CalendarRangeComp />
    //     <Travelers />
    //     <Button />
    //   </div>
    //   <CheckBox title="Add a place to stay" onChange={handleCheckboxChange} />
    // </div>
  );
};

export default Tab2_1;
