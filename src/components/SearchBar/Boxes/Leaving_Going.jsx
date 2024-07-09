import React, { useEffect, useRef, useState } from "react";
import {
  CloseIcon,
  MapIcon,
  SearchIcon,
  SwapIcon,
  SwapIconVertical,
} from "@/components/Icons";
import SearchResultComp from "./SearchResultComp";
import Loading from "./Loading";
import styles from "../styles.module.css";

function Place({ title, onClick, searchResult }) {
  return (
    <div
      onClick={onClick}
      className="h-[50px] border border-[#818494] rounded-lg flex flex-1 gap-1 items-center pl-3 pr-1 cursor-pointer relative"
    >
      <MapIcon />
      <div className="flex flex-col">
        <span className="text-sm w-full overflow-hidden">{title}</span>
        <p className="text-[0.78rem] overflow-hidden w-auto">{searchResult}</p>
      </div>
    </div>
  );
}

const SearchBox = ({
  boxRef,
  search,
  onChange,
  placeholder,
  setSearch,
  setOpen,
  delay,
  open,
}) => {
  return (
    <div
      ref={boxRef}
      className={`${
        open ? "flex transition-all ease-in-out duration-1000" : "hidden"
      } sm:absolute fixed border border-[#818494] sm:-top-1 sm:-left-2 top-0 right-0 sm:w-[380px] w-full flex-col bg-white z-[999] rounded-lg`}
    >
      <div className="w-full overflow-hidden h-[70px] border-b border-slate-500 flex items-center justify-between px-2">
        <input
          value={search}
          onChange={onChange}
          //   onChange={(e) => setSearch(e.target.value)}
          className="w-full h-[80%] pl-3 overflow-hidden font-bold text-2xl outline-none focus:outline-none text-[#818494]"
          placeholder={placeholder}
        />
        <CloseIcon className='cursor-pointer' onClick={() => setOpen(false)} />
      </div>

      <div className="w-full h-[400px]">
        {!search && (
          <div className="w-full flex flex-col justify-center items-center mt-10">
            <SearchIcon size={28} />
            <p className="text-sm text-center mt-2">
              Search by city or airport
            </p>
          </div>
        )}
        {search &&
          (delay ? (
            <Loading />
          ) : (
            <SearchResultComp setOpen={setOpen} setSearchVal={setSearch} />
          ))}
      </div>
    </div>
  );
};

const Leaving_Going = () => {
  const [openLeaving, setOpenLeaving] = useState(false);
  const originRef = useRef(null);
  const [originSearch, setOriginSearch] = useState("");
  /**destination */
  const [openGoing, setOpenGoing] = useState(false);
  const destinationRef = useRef(null);
  const [destinationSearch, setDestinationSearch] = useState("");
  /**delay */
  const [delay, setDelay] = useState(true);
  /**rotate */
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (originRef.current && !originRef.current.contains(e.target)) {
        setOpenLeaving(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutsideDestination = (e) => {
      if (
        destinationRef.current &&
        !destinationRef.current.contains(e.target)
      ) {
        setOpenGoing(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideDestination);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDestination);
    };
  }, []);

  useEffect(() => {
    setDelay(true);

    const timeOutId = setTimeout(() => {
      setDelay(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [originSearch, destinationSearch]);

  const handleReplace = () => {
    setOriginSearch(destinationSearch);
    setDestinationSearch(originSearch);
    setRotation(rotation + 180);
  };

  return (
    <div className="flex sm:flex-row flex-col gap-2 relative">
      <div className="flex flex-1 relative w-full">
        <Place
          title="Leaving from"
          onClick={() => setOpenLeaving(true)}
          boxRef={originRef}
          searchResult={originSearch}
        />

        <SearchBox
          boxRef={originRef}
          open={openLeaving}
          setOpen={setOpenLeaving}
          search={originSearch}
          onChange={(e) => setOriginSearch(e.target.value)}
          placeholder="Leaving from"
          delay={delay}
          setSearch={setOriginSearch}
        />
      </div>

      <div
        onClick={handleReplace}
        className="absolute m-auto top-9 right-8 cursor-pointer bg-white w-[35px] h-[35px] rounded-full sm:hidden flex justify-center items-center z-20 border border-slate-300 transition duration-500 ease-in-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <SwapIconVertical size={20} />
      </div>

      <div
        onClick={handleReplace}
        className="absolute right-0 left-0 m-auto top-2 cursor-pointer bg-white w-[35px] h-[35px] rounded-full sm:flex hidden justify-center items-center z-20 border border-slate-300 transition duration-500 ease-in-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <SwapIcon size={20} />
      </div>

      <div className="flex flex-1 relative w-full">
        <Place
          title="Going to"
          onClick={() => setOpenGoing(true)}
          boxRef={destinationRef}
          searchResult={destinationSearch}
        />
        <SearchBox
          boxRef={destinationRef}
          open={openGoing}
          setOpen={setOpenGoing}
          search={destinationSearch}
          onChange={(e) => setDestinationSearch(e.target.value)}
          placeholder="Going to"
          delay={delay}
          setSearch={setDestinationSearch}
        />
      </div>
    </div>
  );
};

export default Leaving_Going;
