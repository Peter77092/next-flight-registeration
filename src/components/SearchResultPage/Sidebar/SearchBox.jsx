"use client";
import Origin from "@/components/SearchBar/Boxes/Origin";
import React from "react";
import Line from "./Line";

const SearchBox = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold 2xl:text-xl text-lg">Search by property name</h3>
      <Origin title="e.g. Marriott" placeholder="e.g. Marriott" />
      <Line />
    </div>
  );
};

export default SearchBox;
