import FormatNumber from "@/components/FormatNumber";
import {
  AllInclusiveIcon,
  HotTubIcon,
  KitchenIcon,
  PoolIcon,
} from "@/components/Icons";
import Link from "next/link";
import React from "react";
import ImgSlider from "./ImgSlider";

const Content = ({ images }) => {
  const Card = ({
    href,
    title,
    features,
    description,
    allInclusive,
    poolIncluded,
    hotTubIncluded,
    kitchenIncluded,
    fullyRefunded,
    reserveNow,
    rated,
    reviews,
    special,
    initialPrice,
    discountedPrice,
    finalPrice,
    images,
  }) => {
    return (
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:grid-rows-1 grid-rows-2 rounded-xl border border-slate-400 shadow-xl drop-shadow-xl">
        {/* images */}
        <ImgSlider data={images} />

        {/* content */}
        <Link href={href} className="sm:col-span-2 col-span-1">
          <div className="flex flex-col sm:p-3 p-2 gap-2">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-[0.7rem]">{features}</p>
            {/* items included */}
            <div className="flex gap-3 items-center">
              {allInclusive && (
                <div className="flex gap-1 items-center">
                  <AllInclusiveIcon />
                  <span className="text-[0.78rem]">All inclusive</span>
                </div>
              )}
              {poolIncluded && (
                <div className="flex gap-1 items-center">
                  <PoolIcon />
                  <span className="text-[0.78rem]">Pool</span>
                </div>
              )}

              {hotTubIncluded && (
                <div className="flex gap-1 items-center">
                  <HotTubIcon />
                  <span className="text-[0.78rem]">Hot tub</span>
                </div>
              )}

              {kitchenIncluded && (
                <div className="flex gap-1 items-center">
                  <KitchenIcon />
                  <span className="text-[0.78rem]">Kitchen</span>
                </div>
              )}
            </div>
            {/* bottom div */}
            <div className="flex mt-2">
              <div className="flex flex-col w-1/2 justify-start">
                {description && <p className="sm:text-xs text-[0.65rem]">{description}</p>}
                <div className="flex flex-col">
                  {fullyRefunded && (
                    <p className="text-green-500 text-[0.8rem]">
                      Fully Refunded
                    </p>
                  )}
                  {reserveNow && (
                    <p className="text-green-500 text-[0.8rem]">
                      Reserve now, Pay later
                    </p>
                  )}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div
                    className={`w-[35px] h-[30px] flex justify-center items-center border border-slate-400 rounded-md p-3 ${
                      rated > 8
                        ? "bg-[#227950] text-white"
                        : "bg-[#dfe0e4] text=[#ccc]"
                    }`}
                  >
                    {rated}
                  </div>
                  <div className="flex flex-col gap-1 justify-evenly">
                    <span className="font-bold text-lg">
                      {rated >= 9.3 && "Exceptional"}
                      {rated >= 8.5 && rated < 9.3 && "Wonderful"}
                      {rated >= 8 && rated < 8.5 && "Very Good"}
                      {rated >= 7 && rated < 8 && "Good"}
                    </span>
                    <span className="text-[0.78rem]">
                      <FormatNumber number={reviews} /> reviews
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-1/2 items-end">
                {special && (
                  <div className="bg-[#227950] text-white sm:text-xs text-[0.65rem] py-2 px-2 sm:min-w-[115px] min-w-[100px] rounded-md shadow-md flex justify-center items-center mb-2">
                    {special}
                  </div>
                )}
                <div className="flex gap-2 items-center">
                  {initialPrice && (
                    <span className="text-sm line-through text-[#464242]">
                      ${initialPrice}
                    </span>
                  )}
                  {discountedPrice && (
                    <span className="underline text-xl text-[#000]">
                      ${discountedPrice}
                    </span>
                  )}
                </div>
                {finalPrice && (
                  <span className="text-xs text-[#464242]">
                    ${finalPrice} total
                  </span>
                )}
                <span className="text-xs text-[#464242]">
                  included taxes & fees
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <Card
        href="/search"
        title="Still Waters Resort"
        features="Entire condo - Indian point"
        description="Daily activities, 3 pools, 2 hot tubs, New Oasis Plunge Water slide, Free Mini golf, Paddle boats, Kayaks, Shuttle to theme park"
        allInclusive={false}
        poolIncluded={true}
        hotTubIncluded={true}
        kitchenIncluded={false}
        fullyRefunded={true}
        reserveNow={true}
        rated={9.6}
        reviews={1550}
        special="We have 3 left at"
        initialPrice={250}
        discountedPrice={168}
        finalPrice={198}
        images={images}
      />
      <Card
        href="/search"
        title="Still Waters Resort"
        features="Entire condo Indian point"
        allInclusive={false}
        poolIncluded={false}
        hotTubIncluded={true}
        kitchenIncluded={false}
        fullyRefunded={true}
        reserveNow={true}
        rated={9.6}
        reviews={1550}
        special="We have 3 left at"
        initialPrice={250}
        discountedPrice={168}
        finalPrice={198}
        images={images}
      />
      <Card
        href="/search"
        title="Sandles Inn"
        allInclusive={true}
        poolIncluded={true}
        hotTubIncluded={true}
        kitchenIncluded={true}
        fullyRefunded={true}
        reserveNow={false}
        rated={9}
        reviews={1850}
        special="We have 1 left at 10% off at"
        leftRoom={3}
        initialPrice={380}
        discountedPrice={268}
        finalPrice={698}
        images={images}
      />
      <Card
        href="/search"
        title="Sandles Inn"
        allInclusive={true}
        poolIncluded={true}
        hotTubIncluded={true}
        kitchenIncluded={false}
        fullyRefunded={true}
        reserveNow={true}
        rated={9}
        reviews={1850}
        leftRoom={3}
        initialPrice={380}
        discountedPrice={268}
        finalPrice={698}
        images={images}
      />
      <Card
        href="/search"
        title="Sandles Inn"
        allInclusive={true}
        poolIncluded={true}
        hotTubIncluded={false}
        kitchenIncluded={true}
        fullyRefunded={true}
        reserveNow={false}
        special="We have 1 left at"
        rated={6}
        reviews={1850}
        leftRoom={1}
        initialPrice={380}
        discountedPrice={268}
        finalPrice={698}
        images={images}
      />
      <Card
        href="/search"
        title="Sandles Inn"
        features='beautiful places'
        allInclusive={true}
        description="Daily activities, 3 pools, 2 hot tubs, New Oasis Plunge Water slide, Free Mini golf, Paddle boats, Kayaks, Shuttle to theme park"
        poolIncluded={false}
        hotTubIncluded={false}
        kitchenIncluded={false}
        fullyRefunded={false}
        reserveNow={false}
        rated={7}
        reviews={50}
        leftRoom={0}
        special="We have 2 left at"
        // initialPrice={380}
        discountedPrice={268}
        finalPrice={698}
        images={images}
      />
    </div>
  );
};

export default Content;
