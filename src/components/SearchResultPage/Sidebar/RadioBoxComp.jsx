import React from "react";

const RadioBoxComp = ({ title, key, name, value }) => {
  return (
    <label className="flex radio p-1 cursor-pointer w-auto" key={key}>
      <input
        className="my-auto mr-1 transform cursor-pointer  before:content[''] peer relative h-5 w-5 rounded-full appearance-none border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-400 checked:border-2 checked:bg-blue-900 checked:before:bg-blue-900 hover:before:opacity-10"
        type="radio"
        name={name}
        value={value}
      />
      <div className="title px-1 text-xs flex items-center">{title}</div>
    </label>
  );
};

export default RadioBoxComp;
