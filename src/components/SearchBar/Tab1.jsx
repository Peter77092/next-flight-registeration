import React, { useState } from "react";
import Origin from "./Boxes/Origin";
import CalendarRangeComp from "./Boxes/CalendarRangeComp";
import Travelers from "./Boxes/Travellers";
import Button from "./Boxes/Button";
import CheckBox from "./Boxes/CheckBox";

const Tab1 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-2">
        <Origin title="Search places, hotels and more" placeholder="Going to" />
        <CalendarRangeComp />
        <Travelers />
        <Button />
      </div>
      <CheckBox title="add a flight" onChange={handleCheckboxChange} />
      <div className="2xl:w-1/4 xl:w-1/2 lg:w-1/4 md:w-1/2 w-full">
        {isChecked && (
          <Origin title="Leaving from" placeholder="Leaving from" />
        )}
      </div>
    </div>
  );
};

export default Tab1;
