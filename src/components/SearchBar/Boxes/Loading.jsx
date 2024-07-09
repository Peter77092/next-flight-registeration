import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-2 p-5 w-full">
      <div className="w-2/3 h-[18px] rounded-full bg-slate-500 animate-pulse" />
      <div className="w-1/2 h-[18px] rounded-full bg-slate-500 animate-pulse" />
      <div className="w-1/3 h-[18px] rounded-full bg-slate-500 animate-pulse" />
    </div>
  );
};

export default Loading;
