import React from "react";
import Compare from "./Compare";
import Line from "./Line";
import SearchBox from "./SearchBox";
import PopularFilters from "./PopularFilters";
import PricePerNight from "./PricePerNight";
import GuestRating from "./GuestRating";
import StarRating from "./StarRating";
import PaymentType from "./PaymentType";
import Cancellation from "./Cancellation";
import Type from "./Type";
import MealPlan from "./MealPlan";
import OneKeyBenefits from "./OneKeyBenefits";
import Accessibility from "./Accessibility";
import TravelerExperience from "./TravelerExperience";
import Amenities from "./Amenities";

const Sidebar = () => {
  return (
    <div className="w-full lg:flex hidden flex-col gap-2 py-4">
      {/* compare */}
      <Compare />
      <Line />
      <SearchBox />
      {/* filters */}
      <h1 className="text-2xl font-bold my-1">Filter by</h1>
      <PopularFilters className="bg-[#eff3f7]" />
      <PricePerNight />
      <GuestRating className="bg-[#eff3f7]" />
      <StarRating />
      <PaymentType />
      <Cancellation />
      <Type className="bg-[#eff3f7]" />
      <MealPlan className="bg-[#eff3f7]" />
      <Amenities className="bg-[#eff3f7]" />
      <OneKeyBenefits />
      <Accessibility className="bg-[#eff3f7]" />
      <TravelerExperience className="bg-[#eff3f7]" />
    </div>
  );
};

export default Sidebar;
