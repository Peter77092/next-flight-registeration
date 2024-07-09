import React from "react";

const Button = ({ className }) => {
  return (
    <button
      type="submit"
      className={`h-[50px] sm:w-auto w-full px-5 hover:bg-blue-900 hover:transition-all hover:duration-300 hover:ease-linear flex justify-center items-center bg-[#0d4eaf] rounded-full text-white ${className}`}
    >
      Search
    </button>
  );
};

export default Button;
