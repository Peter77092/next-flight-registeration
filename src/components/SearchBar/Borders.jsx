import React from "react";

export const ActiveBorder = () => {
  return <div className="w-full h-[2px] bg-blue-600 absolute bottom-0" />;
};

export const Line = ({width}) => {
  return <div className={`w-[${width}] bottom-0 h-[1px] bg-[#ccc] absolute`} />
}
