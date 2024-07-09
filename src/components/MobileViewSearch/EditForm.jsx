import React from "react";
import { CloseIcon } from "../Icons";
import Compare from "../SearchResultPage/Sidebar/Compare";
import SortSelector from "../SearchResultPage/Sorting/SortSelector";
import SearchBox from "../SearchResultPage/Sidebar/SearchBox";
import PopularFilters from "../SearchResultPage/Sidebar/PopularFilters";
import GuestRating from "../SearchResultPage/Sidebar/GuestRating";
import StarRating from "../SearchResultPage/Sidebar/StarRating";
import PaymentType from "../SearchResultPage/Sidebar/PaymentType";
import Cancellation from "../SearchResultPage/Sidebar/Cancellation";
import Type from "../SearchResultPage/Sidebar/Type";
import MealPlan from "../SearchResultPage/Sidebar/MealPlan";
import Amenities from "../SearchResultPage/Sidebar/Amenities";
import OneKeyBenefits from "../SearchResultPage/Sidebar/OneKeyBenefits";
import Accessibility from "../SearchResultPage/Sidebar/Accessibility";
import TravelerExperience from "../SearchResultPage/Sidebar/TravelerExperience";
import Line from "../SearchResultPage/Sidebar/Line";

const EditForm = ({ setOpenEdit, openEdit }) => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed top-0 right-0 bg-slate-500 w-full min-h-screen opacity-70 z-50" />
      <form className="md:w-3/4 w-[99%] md:h-[90%] h-[99%] fixed md:top-[50px] sm:rounded-lg top-0 left-0 right-0 m-auto bg-white z-[5000] shadow-2xl drop-shadow-xl flex flex-col">
        <div className="flex justify-between w-full mb-4 shadow-xl drop-shadow-xl py-3 px-3">
          <div className="flex justify-center items-center gap-2">
            <CloseIcon
              fill="blue"
              className="cursor-pointer"
              onClick={() => setOpenEdit(false)}
            />
            <h1 className="text-base font-bold">Sort & Filter</h1>
          </div>
          <div className="text-base font-bold text-blue-700 cursor-pointer">clear</div>
        </div>
        <form className="flex flex-col overflow-y-scroll w-full px-4 py-2 h-full">
            <Compare />
            <Line />
            <SortSelector />
            <Line />
            <SearchBox />
            <PopularFilters className="bg-white" />
            <GuestRating className="bg-white" />
            <StarRating />
            <PaymentType />
            <Cancellation />
            <Type className="bg-white" />
            <MealPlan className="bg-white" />
            <Amenities className="bg-white" />
            <OneKeyBenefits />
            <Accessibility className="bg-white" />
            <TravelerExperience className="bg-white" />
            <button className="bg-blue-700 w-full py-2 rounded-full mt-3">Done</button>
        </form>
      </form>
    </div>
  );
};

export default EditForm;
