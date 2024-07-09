import {
  Cars,
  Cruses,
  Flight,
  Packages,
  Stays,
  ThingsTodo,
} from "@/components/Icons";
import Link from "next/link";

const Items = () => {
  return (
    <div className="flex flex-col w-full">
      <Link
        href="/"
        className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
      >
        <Stays />
        <span className="text-sm">Stays</span>
      </Link>
      <Link
        href="/"
        className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
      >
        <Flight />
        <span className="text-sm">Flights</span>
      </Link>
      <Link
        href="/"
        className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
      >
        <Cars />
        <span className="text-sm">Cars</span>
      </Link>
      <Link
        href="/"
        className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
      >
        <Packages />
        <span className="text-sm">Packages</span>
      </Link>
      <Link
        href="/"
        className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
      >
        <ThingsTodo />
        <span className="text-sm">Things to do</span>
      </Link>
      <Link
        href="/"
        className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer flex gap-3 items-center"
      >
        <Cruses />
        <span className="text-sm">Cruises</span>
      </Link>

      <div className="w-full my-3 h-[1px] bg-slate-300" />

      <Link
        href="/"
        className="w-full py-3 px-5 hover:bg-slate-300 transition-all delay-75 duration-300 ease-in-out cursor-pointer"
      >
        <span className="text-sm">Expedia Magazines</span>
      </Link>
    </div>
  );
};

export default Items;
