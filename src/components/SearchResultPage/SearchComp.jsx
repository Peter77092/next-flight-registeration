'use client'
import Button from "../SearchBar/Boxes/Button";
import CalendarRangeComp from "../SearchBar/Boxes/CalendarRangeComp";
import Origin from "../SearchBar/Boxes/Origin";
import Travelers from "../SearchBar/Boxes/Travellers";

const SearchComp = () => {
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
      <Origin title="Search places, hotels and more" placeholder="Going to" />
      <CalendarRangeComp />
      <Travelers room={true} />
      <Button />
    </div>
  );
};

export default SearchComp;
