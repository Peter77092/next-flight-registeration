import React from "react";
import SortSelector from "./SortSelector";
import styles from "./styles.module.css";
import { CloseIcon } from "@/components/Icons";

const Sorting = () => {
  return (
    <div className="w-full lg:flex hidden justify-between items-center py-3">
      <div className="flex flex-col gap-1">
        <div>
          <span className="py-1 px-2 bg-slate-200 rounded-full text-xs border border-slate-400 flex justify-between items-center gap-1">
            All Inclusive
            <CloseIcon className='!w-3 cursor-pointer' />
          </span>
        </div>
        <span className={styles.properties_num}>300+ properties</span>
      </div>
      <SortSelector />
    </div>
  );
};

export default Sorting;
