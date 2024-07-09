import Map from "@/components/MobileViewSearch/Map";
import Sort_filter from "@/components/MobileViewSearch/Sort_filter";
import Advertise from "@/components/SearchResultPage/Advertise";
import Content from "@/components/SearchResultPage/Content/page";
import SearchComp from "@/components/SearchResultPage/SearchComp";
import Sidebar from "@/components/SearchResultPage/Sidebar/page";
import Sorting from "@/components/SearchResultPage/Sorting/page";
import React from "react";

const Search = () => {
  const images = [
    "/images/home/1.jfif",
    "/images/home/2.jfif",
    "/images/home/3.jfif",
    "/images/home/4.jfif",
    "/images/home/5.jfif",
    "/images/home/6.jfif",
  ];

  return (
    <div className="grid grid-cols-7 gap-5">
      <div className="2xl:col-span-6 xl:col-span-7 lg:col-span-6 col-span-7 flex flex-col gap-3">
        <SearchComp />

        {/* MobileView(sort & filter & map & properties) */}
        <div className="lg:hidden flex flex-col gap-2">
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-1">
            <div className="sm:col-span-2 col-span-1">
              <Sort_filter />
            </div>
            <div className="col-span-1">
              <Map />
            </div>
          </div>
          <div className="w-full flex justify-center items-center text-sm">300+ properties</div>
        </div>

        {/* sidebar & sorting $ content */}
        <div className="grid grid-cols-4 gap-4">
          <Sidebar />
          <div className="lg:col-span-3 col-span-4 gap-5 w-full flex flex-col">
            <Sorting />
            <Content images={images} />
          </div>
        </div>
      </div>
      <Advertise />
    </div>
  );
};

export default Search;
