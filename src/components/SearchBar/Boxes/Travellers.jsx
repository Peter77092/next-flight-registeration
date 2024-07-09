import { useEffect, useRef, useState } from "react";
import { CloseIcon, PersonIcon } from "@/components/Icons";

const Travelers = ({ className, className2, room }) => {
  const [countAdults, setCountAdults] = useState(1);
  const [countChildren, setCountChildren] = useState(0);
  const [countInfants, setCountInfants] = useState(0);
  const [error, setError] = useState(null);
  //open close
  const [open, setOpen] = useState(false);

  // define ref
  const refOne = useRef();

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const total = countAdults + countChildren + countInfants;

  // Adults
  const handleAdd = () => {
    setCountAdults(countAdults + 1);
    if (countAdults >= 6) {
      setCountAdults(6);
    }

    if (total >= 5) {
      setError("We allow up to 6 travelers per booking.");
    } else {
      setError(null);
    }
  };
  const handleReduce = () => {
    setCountAdults(() => countAdults - 1);
    if (countAdults === 1) {
      setCountAdults(1);
    }
    if (total < 6) {
      setError(null);
    }
  };
  // children
  const handleAddChildren = () => {
    setCountChildren(() => countChildren + 1);
    // if (countAdults + countChildren + countInfants >= 6) {
    //   setError("We allow up to 7 travelers per booking.");
    // }
    if (total >= 5) {
      setError("We allow up to 6 travelers per booking.");
    } else {
      setError(null);
    }
  };
  const handleReduceChildren = () => {
    setCountChildren(() => countChildren - 1);
    if (countChildren === 0) {
      setCountChildren(0);
    }
    if (total < 6) {
      setError(null);
    }
  };

  // infants
  const handleAddInfants = () => {
    setCountInfants(() => countInfants + 1);
    // if (countAdults + countChildren + countInfants >= 6) {
    //   setError("We allow up to 7 travelers per booking.");
    // }
    if (total >= 5) {
      setError("We allow up to 6 travelers per booking.");
    } else {
      setError(null);
    }
  };
  const handleReduceInfants = () => {
    setCountInfants(() => countInfants - 1);
    if (countInfants === 0) {
      setCountInfants(0);
    }
    // if (countAdults + countChildren + countInfants <= 6) {
    //   setError(null);
    // }
    if (total < 6) {
      setError(null);
    }
  };

  // sm:flex-1
  // w-full

  return (
    <div className="relative" ref={refOne}>
      <div
        onClick={() => setOpen(true)}
        className={`w-auto cursor-pointer h-[50px] border border-[#818494] rounded-md flex flex-1 gap-2 items-center px-2 ${className}`}
      >
        <PersonIcon />
        <div className="flex flex-col">
          <span className="text-[0.7rem]">Travelers</span>
          {/* <input readOnly value={calendar} /> */}
          <span className="text-[0.7rem]">{total} Travelers {room && '& 1 room'}</span>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } z-[999] sm:w-[350px] w-full h-auto p-3 flex-col gap-2 bg-white border border-slate-400 shadow-lg sm:absolute fixed sm:top-[50px] top-0 right-0 rounded-md ${className2}`}
          
        >
          <div className="w-full h-5 sm:hidden flex justify-end items-center pr-2 cursor-pointer">
            <CloseIcon onClick={() => setOpen(false)} />
          </div>

          {/* error */}
          {error && (
            <div className="w-full p-4 text-white bg-red-700 sm:text-[0.8rem] text-[0.7rem] rounded-full">
              {error}
            </div>
          )}

          {/* row 1 */}
          {
            room && (<p className="text-sm w-full px-2 py-0">Room 1</p>)
          }
          <div className="w-full flex justify-between gap-2 p-2">
            <div className="flex items-center">
              <span>Adults</span>
            </div>
            <div className="flex gap-2">
              <button
                disabled={countAdults <= 0}
                onClick={handleReduce}
                className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center">
                {countAdults}
              </span>
              <button
                disabled={total >= 6}
                onClick={handleAdd}
                className="w-[34px] h-[34px] border rounded-full border-blue-500 flex justify-center items-center text-lg cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* row 2 && children */}
          <div className="w-full flex justify-between items-center gap-2 p-2">
            <div className="flex flex-col justify-center">
              <span>Children</span>
              <span className="text-[0.7rem]">Ages 2 to 17</span>
            </div>
            <div className="flex gap-2">
              <button
                disabled={countChildren <= 0}
                onClick={handleReduceChildren}
                className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center">
                {countChildren}
              </span>
              <button
                disabled={total >= 6}
                onClick={handleAddChildren}
                className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* row 3 && infants */}
          <div className="w-full flex justify-between items-center gap-2 p-2">
            <div className="flex flex-col justify-center">
              <span>Infants</span>
              <span className="text-[0.7rem]">Younger than 2</span>
            </div>
            <div className="flex gap-2">
              <button
                disabled={countInfants <= 0}
                onClick={handleReduceInfants}
                className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg cursor-pointer"
              >
                -
              </button>
              <span className="flex justify-center items-center">
                {countInfants}
              </span>
              <button
                disabled={total >= 6}
                onClick={handleAddInfants}
                className="w-[34px] h-[34px] border rounded-full border-slate-500 flex justify-center items-center text-lg cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Travelers;
