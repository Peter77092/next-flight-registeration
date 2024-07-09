"use client";
import React, { useState, useEffect } from "react";
import { CloseIcon, Menu, Notification } from "../Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Items from "./ShopTravel/Items";

const MobileView = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openShopTravel, setOpenShopTravel] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (openNav && !event.target.closest(".mobile-nav")) {
        setOpenNav(false);
      }
    };
    document.body.addEventListener("click", handleOutSideClick);
    return () => {
      document.body.removeEventListener("click", handleOutSideClick);
    };
  }, [openNav]);

  return (
    // Mobile navigation
    <div className="sm:hidden block">
      {/* icon */}
      <Menu onClick={() => setOpenNav(true)} className="cursor-pointer" />

      {/* content */}
      <div
        className={`h-full bg-white py-5 fixed top-0 right-0 w-[300px] shadow-lg drop-shadow-xl transform z-[5000] ${
          openNav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out flex flex-col mobile-nav`}
      >
        <div className="flex items-center justify-between px-8">
          <Link href='/notification'>
            <Notification />
          </Link>
          <CloseIcon
            onClick={() => setOpenNav(!openNav)}
            className="cursor-pointer"
          />
        </div>
        <ul className="w-full py-3">
          <li className="hover:bg-slate-200 w-full border-slate-600 py-4">
            <Link href="/blogs" className="px-8">
              Blogs
            </Link>
          </li>
          <li className="py-4 hover:bg-slate-200 w-full  border-slate-600">
            <Link href="https://www.expedia.com/helpcenter/" className="px-8">
              Support
            </Link>
          </li>
          <li className="px-8 py-4 hover:bg-slate-200 w-full border-slate-600 cursor-pointer" onClick={() => setOpenShopTravel(!openShopTravel)}>
            {/* <Link href="/hello" className="px-8"> */}
              Shop Travel
            {/* </Link> */}
          </li>

          {/* shop travel */}
          <div className={`flex flex-col gap-4 ml-5 my-0 py-0  ${openShopTravel ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in-out`}>
            <Items />
          </div>
          
        </ul>
      </div>
    </div>
  );
};

export default MobileView;
