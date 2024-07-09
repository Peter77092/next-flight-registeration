import React from "react";
import Middle_container from "./Middle_container";

const Footer = () => {
  return (
    <footer className="xl:px-80 sm:px-10 px-4 min-h-[480px] flex flex-col pb-5">
      <h1 className="text-[#282d70] font-bold mb-4">expedia group</h1>
      <Middle_container />
      <div className="w-full h-[1px] bg-slate-300 my-10" />
      <div className="text-xs">
        <span>
          Expedia, Inc. is not responsible for content on external Web sites.
        </span>
        <br />
        <span className="relative top-1">
          © 2024 Expedia, Inc., an Expedia Group company. All rights reserved.
          Expedia and the Airplane Logo are trademarks or registered trademarks
          of Expedia, Inc. CST# 2029030-50.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
