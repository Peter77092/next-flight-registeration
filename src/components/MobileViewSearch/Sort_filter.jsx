"use client";
import { useState } from "react";
import { SortFilterIcon } from "../Icons";
import EditForm from "./EditForm";

const Sort_filter = () => {
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <>
      <button onClick={() => setOpenEdit(true)} className="w-full border border-slate-500 rounded-full py-1 flex justify-center items-center text-lg font-bold cursor-pointer gap-1 text-[#1668e3]">
        <SortFilterIcon />
        Sort & Filter
      </button>
      {
        openEdit && (
          <EditForm setOpenEdit={setOpenEdit} openEdit={openEdit} />
        )
      }
    </>
  );
};

export default Sort_filter;
