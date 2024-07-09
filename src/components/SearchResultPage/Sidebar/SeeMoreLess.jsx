"use client";

import { useEffect, useRef, useState } from "react";

const SeeMoreLess = ({ filters, children, className }) => {
  const [more, setMore] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (more) {
      const childrenHeight = containerRef.current.scrollHeight;
      const newHeight = childrenHeight + 30;
      containerRef.current.style.height = `${newHeight}px`;
    } else {
      containerRef.current.style.height = '140px';
    }
  }, [more, filters]);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col gap-1 pl-3 pt-3 overflow-hidden relative"
    >
      {children}
      {filters?.length > 3 && (
        <div
          className={`${className} text-blue-500 text-sm cursor-pointer pl-2 absolute -bottom-2 flex items-center w-full h-[40px] z-50`}
          onClick={() => setMore(!more)}
        >
          {more ? "See Less" : "See More"}
        </div>
      )}
    </div>
  );
};

export default SeeMoreLess;
